#!/usr/bin/env python3
"""
Stream health checker for the channel list.

For every channel that has direct HLS streams it tests, from YOUR network
(which is what matters: Tehran, with or without VPN):

  1. the playlist answers and is a real HLS playlist
  2. (master playlists) a quality level playlist answers
  3. the newest video segment can be downloaded and looks like video
  4. the live playlist is really moving (it is fetched twice, a few seconds apart)

and reports each channel as:

  GOOD      works
  NOCORS    works, but only Safari can play it in the page (Chrome needs CORS)
  HEVC      video is HEVC/AV1 (Safari plays it, Chrome usually not)
  DRM       encrypted with a DRM system, cannot play in the page
  FROZEN    answers, but the playlist is not moving (stream is stuck/ended)
  NOSEG     playlist ok, but segments cannot be downloaded
  DEAD      the playlist itself does not answer / is not HLS

Run it on a machine that can reach the streams (e.g. your Mac mini):

  curl -sL https://farzindna.github.io/satellite-channels/tools/check-streams.py | python3 -

Only Python 3 is needed (standard library only). It takes a few minutes. The
full result is saved to ~/Downloads/stream-check.json and a compact report is
printed and (on macOS) copied to the clipboard.
"""
import concurrent.futures as cf
import json
import os
import re
import ssl
import subprocess
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

LIST_URL = 'https://farzindna.github.io/satellite-channels/tools/streams.json'
ORIGIN = 'https://farzindna.github.io'
UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15'
CTX = ssl.create_default_context()
UNVERIFIED = ssl._create_unverified_context()
TIMEOUT = 12
WORKERS = 10
RECHECK_AFTER = 5  # seconds between the two playlist fetches


def fetch(url, limit=400_000, headers=None, timeout=TIMEOUT):
    """returns (status, headers_dict_lowercase, body_bytes, final_url) or raises"""
    h = {'User-Agent': UA, 'Accept': '*/*', 'Origin': ORIGIN, 'Referer': ORIGIN + '/'}
    h.update(headers or {})
    req = urllib.request.Request(url, headers=h)
    try:
        r = urllib.request.urlopen(req, timeout=timeout, context=CTX)
    except urllib.error.HTTPError as e:
        return e.code, {k.lower(): v for k, v in e.headers.items()}, b'', url
    except (ssl.SSLError, urllib.error.URLError) as e:
        reason = getattr(e, 'reason', e)
        if not isinstance(reason, ssl.SSLError):
            raise
        # some Python builds ship without a CA bundle; streams are public so retry unverified
        r = urllib.request.urlopen(req, timeout=timeout, context=UNVERIFIED)
    with r:
        return r.status, {k.lower(): v for k, v in r.headers.items()}, r.read(limit), r.geturl()


def attrs(line):
    return {k: v.strip('"') for k, v in re.findall(r'([A-Z0-9-]+)=("[^"]*"|[^,]*)', line)}


def media_playlist(txt, base):
    segs = [urllib.parse.urljoin(base, l.strip()) for l in txt.splitlines() if l.strip() and not l.startswith('#')]
    return segs


def looks_like_video(data):
    if not data:
        return False
    if data[:1] == b'\x47' and (len(data) < 189 or data[188:189] == b'\x47'):
        return True  # MPEG-TS
    head = data[:2048]
    return any(t in head for t in (b'ftyp', b'styp', b'moof', b'moov'))  # fMP4 / CMAF


def check_stream(url):
    """returns dict(state, detail, cors)"""
    res = {'url': url, 'state': 'DEAD', 'detail': '', 'cors': False}
    try:
        st, hdr, body, final = fetch(url)
    except Exception as e:  # noqa: BLE001
        res['detail'] = type(e).__name__ + ': ' + str(getattr(e, 'reason', e))[:80]
        return res
    txt = body.decode('utf-8', 'replace')
    if st != 200:
        res['detail'] = f'HTTP {st}'
        return res
    if '#EXTM3U' not in txt[:300]:
        res['detail'] = 'not an HLS playlist'
        return res
    acao = hdr.get('access-control-allow-origin', '')
    res['cors'] = acao in ('*', ORIGIN)
    codecs = ''
    # master playlist → pick the lowest-bandwidth variant (cheap, still real video)
    if '#EXT-X-STREAM-INF' in txt:
        variants = []
        lines = txt.splitlines()
        for i, l in enumerate(lines):
            if l.startswith('#EXT-X-STREAM-INF'):
                a = attrs(l)
                nxt = next((x.strip() for x in lines[i + 1:] if x.strip() and not x.startswith('#')), '')
                if nxt:
                    variants.append((int(a.get('BANDWIDTH', '0') or 0), a.get('CODECS', ''), urllib.parse.urljoin(final, nxt)))
        if not variants:
            res['detail'] = 'master without variants'
            return res
        variants.sort(key=lambda v: v[0] or 10**12)
        bw, codecs, vurl = variants[0]
        try:
            st, hdr2, body, final = fetch(vurl)
        except Exception as e:  # noqa: BLE001
            res['state'], res['detail'] = 'NOSEG', 'variant playlist: ' + type(e).__name__
            return res
        if st != 200 or b'#EXTM3U' not in body[:300]:
            res['state'], res['detail'] = 'NOSEG', f'variant playlist HTTP {st}'
            return res
        txt = body.decode('utf-8', 'replace')
    # DRM
    for l in txt.splitlines():
        if l.startswith('#EXT-X-KEY') or l.startswith('#EXT-X-SESSION-KEY'):
            m = attrs(l).get('METHOD', 'NONE')
            kf = attrs(l).get('KEYFORMAT', '')
            if m == 'SAMPLE-AES' or 'fairplay' in kf.lower() or 'skd://' in l:
                res['state'], res['detail'] = 'DRM', f'{m} {kf}'.strip()
                return res
    segs = media_playlist(txt, final)
    if not segs:
        res['state'], res['detail'] = 'NOSEG', 'playlist has no segments'
        return res
    # newest segment
    try:
        sst, _, data, _ = fetch(segs[-1], limit=300_000, headers={'Range': 'bytes=0-299999'})
    except Exception as e:  # noqa: BLE001
        res['state'], res['detail'] = 'NOSEG', 'segment: ' + type(e).__name__
        return res
    if sst not in (200, 206) or not data:
        res['state'], res['detail'] = 'NOSEG', f'segment HTTP {sst}'
        return res
    if not looks_like_video(data) and not re.search(r'\.(aac|mp3|ts|m4s|mp4|m4a|cmfv|cmfa)(\?|$)', segs[-1], re.I):
        res['state'], res['detail'] = 'NOSEG', 'segment is not video/audio data'
        return res
    # is the live playlist moving?
    live = '#EXT-X-ENDLIST' not in txt
    if live:
        time.sleep(RECHECK_AFTER)
        try:
            st2, _, body2, _ = fetch(final)
            segs2 = media_playlist(body2.decode('utf-8', 'replace'), final) if st2 == 200 else []
            if segs2 and segs2[-1] == segs[-1] and len(segs) >= 1:
                # same newest segment after 5 s: ok only if the segments are long (>= 5 s) – check target duration
                td = re.search(r'#EXT-X-TARGETDURATION:(\d+)', txt)
                if not td or int(td.group(1)) <= RECHECK_AFTER:
                    res['state'], res['detail'] = 'FROZEN', 'playlist not moving'
                    return res
        except Exception:  # noqa: BLE001
            pass
    if re.search(r'hvc1|hev1|av01|dvh1', codecs or '', re.I):
        res['state'], res['detail'] = 'HEVC', codecs
        return res
    res['state'] = 'GOOD' if res['cors'] else 'NOCORS'
    return res


RANK = {'GOOD': 0, 'NOCORS': 1, 'HEVC': 2, 'DRM': 3, 'FROZEN': 4, 'NOSEG': 5, 'DEAD': 6}


def check_channel(ch):
    results = [check_stream(u) for u in ch['streams']]
    results.sort(key=lambda r: RANK[r['state']])
    best = results[0]
    return {'num': ch.get('num'), 'id': ch['id'], 'name': ch['name'], 'state': best['state'], 'detail': best['detail'],
            'url': best['url'], 'tried': len(results), 'all': [(r['state'], r['detail']) for r in results]}


def main():
    out = []

    def say(s=''):
        print(s)
        out.append(s)

    try:
        _, _, body, _ = fetch(LIST_URL, limit=5_000_000)
        chans = json.loads(body.decode('utf-8'))
    except Exception as e:  # noqa: BLE001
        print('Could not download the channel list:', e)
        return
    print(f'checking {len(chans)} channels ({WORKERS} at a time) – this takes a few minutes…', flush=True)
    results = []
    with cf.ThreadPoolExecutor(WORKERS) as ex:
        for i, r in enumerate(ex.map(check_channel, chans), 1):
            results.append(r)
            if i % 25 == 0:
                print(f'  {i}/{len(chans)}', flush=True)
    counts = {}
    for r in results:
        counts[r['state']] = counts.get(r['state'], 0) + 1
    say('stream check: ' + ', '.join(f'{k}={counts[k]}' for k in sorted(counts, key=lambda k: RANK[k])))
    path = os.path.expanduser('~/Downloads/stream-check.json')
    try:
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(results, f, ensure_ascii=False, indent=1)
        say('full data saved: ' + path)
    except Exception as e:  # noqa: BLE001
        say(f'(could not save the json: {e})')
    say()
    say('Problems (best of each channel\'s streams):')
    say('num | id | name | state | detail')
    for st in ['DEAD', 'NOSEG', 'FROZEN', 'DRM', 'HEVC', 'NOCORS']:
        rows = [r for r in results if r['state'] == st]
        if rows:
            say(f'--- {st} ({len(rows)}) ---')
            for r in rows:
                say(f"{r['num']} | {r['id']} | {r['name']} | {st} | {r['detail']}")
    say()
    say('GOOD: ' + ', '.join(r['id'] for r in results if r['state'] == 'GOOD'))
    text = '\n'.join(out)
    if sys.platform == 'darwin':
        try:
            subprocess.run(['pbcopy'], input=text.encode(), check=True)
            print('\n(compact report copied to the clipboard - paste it into the chat)')
        except Exception:  # noqa: BLE001
            pass


main()
