#!/usr/bin/env python3
"""
Subtitle checker for the channel list.

For every channel that has a direct HLS stream it looks at the stream's
manifest and reports which channels really deliver subtitle TEXT:

  REAL      a WebVTT subtitle track whose segments contain actual cues
  UNVERIFIED the track exists but its files could not be downloaded
  CC608     closed captions carried inside the video (CEA-608/708)
  EMPTY     a subtitle track is declared but its segments are blank
  NONE      no subtitles declared
  FAILED    the stream could not be fetched from this network

Run it on a machine that can reach the streams (e.g. your Mac mini):

  curl -sL https://farzindna.github.io/satellite-channels/tools/check-subtitles.py | python3 -

Only Python 3 is needed (standard library only). The report is printed and,
on macOS, copied to the clipboard.
"""
import concurrent.futures as cf
import json
import re
import ssl
import subprocess
import sys
import urllib.error
import urllib.parse
import urllib.request

LIST_URL = 'https://farzindna.github.io/satellite-channels/tools/streams.json'
UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15'
CTX = ssl.create_default_context()
TIMEOUT = 15


def get(url, limit=600_000):
    req = urllib.request.Request(url, headers={'User-Agent': UA, 'Accept': '*/*'})
    try:
        r = urllib.request.urlopen(req, timeout=TIMEOUT, context=CTX)
    except (ssl.SSLError, urllib.error.URLError) as e:
        reason = getattr(e, 'reason', e)
        if not isinstance(reason, ssl.SSLError):
            raise
        # some Python builds ship without a CA bundle; manifests are public so retry unverified
        r = urllib.request.urlopen(req, timeout=TIMEOUT, context=ssl._create_unverified_context())
    with r:
        return r.read(limit).decode('utf-8', 'replace'), r.geturl()


def attrs(line):
    out = {}
    for k, v in re.findall(r'([A-Z0-9-]+)=("[^"]*"|[^,]*)', line):
        out[k] = v.strip('"')
    return out


def first_cue_text(vtt):
    # returns the first cue's text, or '' if the file has no cues with text
    blocks = re.split(r'\r?\n\r?\n', vtt)
    for b in blocks:
        lines = [l for l in b.splitlines() if l.strip()]
        for i, l in enumerate(lines):
            if '-->' in l:
                text = ' '.join(re.sub(r'<[^>]*>', '', x).strip() for x in lines[i + 1:]).strip()
                if text:
                    return text
    return ''


def check_playlist(url):
    """returns ('real', sample) | ('empty', '') for one subtitle playlist"""
    txt, final = get(url)
    segs = [urllib.parse.urljoin(final, l.strip()) for l in txt.splitlines() if l.strip() and not l.startswith('#')]
    if not segs:
        return 'empty', ''
    real_candidates = [s for s in segs if 'empty' not in s.lower()]
    tried = errors = 0
    for seg in reversed(real_candidates[-4:]):
        tried += 1
        try:
            body, _ = get(seg, limit=200_000)
        except Exception:
            errors += 1
            continue
        t = first_cue_text(body)
        if t:
            return 'real', t
    if tried and errors == tried:
        return 'unverified', ''   # the subtitle files exist but could not be downloaded from here
    # segments exist but none had text (or all were 'empty' placeholders)
    return 'empty', ''


def check_stream(url):
    txt, final = get(url)
    if '#EXTM3U' not in txt:
        return {'kind': 'failed', 'why': 'not an HLS manifest'}
    media = [attrs(l) for l in txt.splitlines() if l.startswith('#EXT-X-MEDIA:')]
    subs = [m for m in media if m.get('TYPE') == 'SUBTITLES']
    ccs = [m for m in media if m.get('TYPE') == 'CLOSED-CAPTIONS']
    inline_cc = any(re.search(r'CLOSED-CAPTIONS="[^"]+"', l) for l in txt.splitlines() if l.startswith('#EXT-X-STREAM-INF'))
    result = {'kind': 'none', 'langs': [], 'sample': '', 'cc': bool(ccs or inline_cc)}
    states = []
    for m in subs:
        uri = m.get('URI')
        if not uri:
            continue
        lang = m.get('LANGUAGE') or m.get('NAME') or '?'
        try:
            st, sample = check_playlist(urllib.parse.urljoin(final, uri))
        except Exception:
            st, sample = 'unverified', ''
        states.append((st, lang, sample))
    real = [s for s in states if s[0] == 'real']
    if real:
        result.update(kind='real', langs=sorted({s[1] for s in real}), sample=real[0][2])
    elif any(s[0] == 'unverified' for s in states):
        result.update(kind='unverified', langs=sorted({s[1] for s in states}))
    elif ccs or inline_cc:
        result.update(kind='cc608', langs=[m.get('LANGUAGE') or m.get('INSTREAM-ID') or 'CC' for m in ccs])
    elif states:
        result.update(kind='empty', langs=sorted({s[1] for s in states}))
    return result


def check_channel(ch):
    last = ''
    for url in ch['streams']:
        try:
            r = check_stream(url)
            if r['kind'] != 'failed':
                return ch, r
            last = r.get('why', '')
        except Exception as e:
            last = type(e).__name__ + ': ' + str(e)[:60]
    return ch, {'kind': 'failed', 'why': last}


def main():
    path = sys.argv[1] if len(sys.argv) > 1 else None
    if path:
        channels = json.load(open(path))
    else:
        txt, _ = get(LIST_URL, limit=5_000_000)
        channels = json.loads(txt)
    print(f'Checking {len(channels)} channels, please wait...', file=sys.stderr)
    groups = {'real': [], 'cc608': [], 'unverified': [], 'empty': [], 'none': [], 'failed': []}
    done = 0
    with cf.ThreadPoolExecutor(max_workers=12) as ex:
        for ch, r in ex.map(check_channel, channels):
            groups[r['kind']].append((ch, r))
            done += 1
            if done % 20 == 0:
                print(f'  {done}/{len(channels)}', file=sys.stderr)
    lines = []

    def title(t):
        lines.append('')
        lines.append(t)

    title(f'=== REAL subtitle text ({len(groups["real"])}) ===')
    for ch, r in groups['real']:
        lines.append(f'{ch["num"]:04d} {ch["name"]}  [{",".join(r["langs"])}]{" +CC608" if r.get("cc") else ""}  e.g. "{r["sample"][:70]}"')
    title(f'=== CC608 closed captions inside the video ({len(groups["cc608"])}) ===')
    for ch, r in groups['cc608']:
        lines.append(f'{ch["num"]:04d} {ch["name"]}  [{",".join(r["langs"])}]')
    title(f'=== Subtitle files listed but not downloadable ({len(groups["unverified"])}) ===')
    for ch, r in groups['unverified']:
        lines.append(f'{ch["num"]:04d} {ch["name"]}  [{",".join(r["langs"])}]')
    title(f'=== Declared but EMPTY ({len(groups["empty"])}) ===')
    for ch, r in groups['empty']:
        lines.append(f'{ch["num"]:04d} {ch["name"]}')
    title(f'=== No subtitles ({len(groups["none"])}) ===')
    lines.append(', '.join(f'{ch["num"]:04d}' for ch, _ in groups['none']))
    title(f'=== Could not be fetched ({len(groups["failed"])}) ===')
    for ch, r in groups['failed']:
        lines.append(f'{ch["num"]:04d} {ch["name"]}  ({r.get("why", "")})')
    report = '\n'.join(lines).strip() + '\n'
    print(report)
    try:
        subprocess.run(['pbcopy'], input=report.encode('utf-8'), check=True)
        print('The report was copied to your clipboard. Paste it into the chat.', file=sys.stderr)
    except Exception:
        print('Copy the text above and paste it into the chat.', file=sys.stderr)


if __name__ == '__main__':
    main()
