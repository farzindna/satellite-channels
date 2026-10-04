#!/usr/bin/env python3
"""
Read EVERY channel page on parsatv.com and collect the stream behind it.

For each channel it records how the page plays:
  direct   an .m3u8/.mpd address sits in the page
  proxied  the address is wrapped in a proxy (?url=...); the inner address is used
  iframe   the page only embeds another player page
  none     nothing recognisable (the address is built by script)

Every found stream is then tested the way our site would use it:
  OK       answers with an HLS playlist
  CORS     ...and also allows browsers on another site (needed for the in-page player)
  dead     no answer / not a playlist

Run on a machine that can reach parsatv.com (e.g. your Mac mini). It takes a few
minutes and is gentle (8 requests at a time).

  curl -sL https://farzindna.github.io/satellite-channels/tools/parsatv-streams.py | python3 -

Output: ~/Downloads/parsatv-streams.json (everything) and a compact report that is
printed and copied to the clipboard on macOS. Standard library only.
"""
import concurrent.futures as cf
import json
import os
import re
import ssl
import subprocess
import sys
import urllib.error
import urllib.parse
import urllib.request

BASE = 'https://www.parsatv.com'
ORIGIN = 'https://farzindna.github.io'
UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15'
ctx = ssl.create_default_context()


def get(url, headers=None, limit=300_000, timeout=15):
    h = {'User-Agent': UA, 'Accept': '*/*'}
    h.update(headers or {})
    req = urllib.request.Request(url, headers=h)
    try:
        with urllib.request.urlopen(req, timeout=timeout, context=ctx) as r:
            return r.status, dict(r.headers), r.read(limit).decode('utf-8', 'replace')
    except urllib.error.HTTPError as e:
        return e.code, dict(e.headers or {}), ''
    except Exception:  # noqa: BLE001
        return 0, {}, ''


STREAM = re.compile(r'https?:[^\s"\'<>\\]+?\.(?:m3u8|mpd)[^\s"\'<>\\]*|https?:[^\s"\'<>\\]*[?&]url=[^\s"\'<>\\]+', re.I)


def unwrap(u):
    """Return (inner_url, proxy_host_or_None) for ?url= wrappers."""
    p = urllib.parse.urlparse(u)
    q = urllib.parse.parse_qs(p.query)
    if 'url' in q and re.match(r'https?:', q['url'][0]):
        inner, _ = unwrap(q['url'][0])
        return inner, p.netloc
    return u, None


def read_page(slug):
    code, _, html = get(f'{BASE}/m/name={slug}')
    rec = {'slug': slug, 'kind': 'none', 'stream': '', 'proxy': '', 'iframe': '', 'page': code}
    if code != 200:
        rec['kind'] = 'error'
        return rec
    text = html.replace('\\/', '/')
    found = []
    for m in STREAM.findall(text):
        if not re.search(r'\.(?:png|jpe?g|gif|svg|css|js)(?:\?|$)', m.split('?url=')[0], re.I):
            found.append(m)
    for m in found:
        inner, proxy = unwrap(m)
        if re.search(r'\.(?:m3u8|mpd)', inner, re.I) or proxy:
            rec['stream'], rec['proxy'] = inner, proxy or ''
            rec['kind'] = 'proxied' if proxy else 'direct'
            break
    fr = re.findall(r'<iframe[^>]+src=["\']([^"\']+)', html, re.I)
    fr = [f for f in fr if 'googletagmanager' not in f]
    if fr:
        rec['iframe'] = urllib.parse.urljoin(BASE, fr[0])
        if rec['kind'] == 'none':
            rec['kind'] = 'iframe'
    return rec


def test_stream(rec):
    u = rec['stream']
    if not u or '.m3u8' not in u.lower():
        rec['test'] = '-'
        return rec
    code, hdr, body = get(u, {'Origin': ORIGIN, 'Referer': ORIGIN + '/'}, limit=4000, timeout=10)
    hl = {k.lower(): v for k, v in hdr.items()}
    if code == 200 and '#EXTM3U' in body[:200]:
        acao = hl.get('access-control-allow-origin', '')
        rec['test'] = 'CORS' if acao in ('*', ORIGIN) else 'OK'
    else:
        rec['test'] = 'dead'
    return rec


def main():
    out = []

    def say(s=''):
        print(s)
        out.append(s)

    slugs = set()
    for path in ['/', '/m/']:
        code, _, html = get(BASE + path, limit=1_000_000)
        for m in re.findall(r'["\'/]((?:m/)?name=[^"\'&<>\s#]+)', html):
            slugs.add(urllib.parse.unquote(m.split('name=', 1)[1]))
    slugs = sorted(slugs)
    say(f'channel pages: {len(slugs)}')
    if not slugs:
        say('Could not read the channel list from parsatv.com.')
        return finish(out)

    recs = []
    with cf.ThreadPoolExecutor(8) as ex:
        for i, r in enumerate(ex.map(read_page, slugs), 1):
            recs.append(r)
            if i % 100 == 0:
                print(f'  read {i}/{len(slugs)} pages…', flush=True)
    todo = [r for r in recs if r['stream']]
    print(f'testing {len(todo)} streams…', flush=True)
    with cf.ThreadPoolExecutor(8) as ex:
        list(ex.map(test_stream, todo))

    path = os.path.expanduser('~/Downloads/parsatv-streams.json')
    try:
        with open(path, 'w', encoding='utf-8') as f:
            json.dump(recs, f, ensure_ascii=False, indent=1)
        say(f'full data saved: {path}')
    except Exception as e:  # noqa: BLE001
        say(f'(could not save the json file: {e})')

    kinds = {}
    for r in recs:
        kinds[r['kind']] = kinds.get(r['kind'], 0) + 1
    tests = {}
    for r in todo:
        tests[r.get('test', '-')] = tests.get(r.get('test', '-'), 0) + 1
    say('pages by kind: ' + ', '.join(f'{k}={v}' for k, v in sorted(kinds.items())))
    say('stream tests : ' + ', '.join(f'{k}={v}' for k, v in sorted(tests.items())))
    proxies = {}
    for r in recs:
        if r['proxy']:
            proxies[r['proxy']] = proxies.get(r['proxy'], 0) + 1
    say('proxies used: ' + (', '.join(f'{k} x{v}' for k, v in sorted(proxies.items(), key=lambda x: -x[1])) or 'none'))
    hosts = {}
    for r in todo:
        h = urllib.parse.urlparse(r['stream']).netloc
        hosts[h] = hosts.get(h, 0) + 1
    say('top stream hosts: ' + ', '.join(f'{k} x{v}' for k, v in sorted(hosts.items(), key=lambda x: -x[1])[:25]))
    say()
    say('slug | kind | test | stream (without https://)')
    for r in recs:
        if r['stream']:
            say(f"{r['slug']} | {r['kind']} | {r.get('test','-')} | {re.sub(r'^https?://', '', r['stream'])}")
    say()
    say('iframe-only pages: ' + ', '.join(f"{r['slug']}->{urllib.parse.urlparse(r['iframe']).netloc}" for r in recs if r['kind'] == 'iframe'))
    say('no recognisable stream: ' + ', '.join(r['slug'] for r in recs if r['kind'] in ('none', 'error')))
    finish(out)


def finish(out):
    text = '\n'.join(out)
    if sys.platform == 'darwin':
        try:
            subprocess.run(['pbcopy'], input=text.encode(), check=True)
            print('\n(compact report copied to the clipboard - paste it into the chat)')
        except Exception:  # noqa: BLE001
            pass


main()
