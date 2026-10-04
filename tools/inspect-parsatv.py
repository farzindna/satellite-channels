#!/usr/bin/env python3
"""
Look at how parsatv.com serves its channels, and find the exact page names
(slugs) of channels such as 4U, 4U Family and Romantico TV.

It only READS public pages, the same way a browser does. It prints a report
(and copies it to the clipboard on macOS) that shows:

  * every channel page name found on the site (and the ones matching 4u/romantico)
  * for some sample channels: the player iframes, scripts, and any stream
    addresses (.m3u8 / .mpd / websocket / token API) found inside the pages
    and inside the iframes they load (one level deep)

Run it on a machine that can reach parsatv.com (e.g. your Mac mini):

  curl -sL https://farzindna.github.io/satellite-channels/tools/inspect-parsatv.py | python3 -

Only Python 3 is needed (standard library only).
"""
import re
import ssl
import subprocess
import sys
import urllib.error
import urllib.parse
import urllib.request

BASE = 'https://www.parsatv.com'
UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15'
SAMPLES = ['GEM-TV', 'Manoto-TV', 'Persiana-Cinema']
WANT = re.compile(r'4u|romantic|family', re.I)

ctx = ssl.create_default_context()
out = []


def say(s=''):
    print(s)
    out.append(s)


def get(url, referer=None, limit=400_000):
    req = urllib.request.Request(url, headers={'User-Agent': UA, 'Referer': referer or BASE + '/', 'Accept': '*/*'})
    try:
        with urllib.request.urlopen(req, timeout=20, context=ctx) as r:
            raw = r.read(limit)
            enc = r.headers.get_content_charset() or 'utf-8'
            return r.status, r.geturl(), raw.decode(enc, 'replace')
    except urllib.error.HTTPError as e:
        return e.code, url, ''
    except Exception as e:  # noqa: BLE001
        reason = getattr(e, 'reason', e)
        return 0, url, f'ERROR {reason}'


def interesting(text):
    """Stream-looking addresses and API hints inside a page or script."""
    pats = [
        r'https?:[^\s"\'<>\\]+\.(?:m3u8|mpd)[^\s"\'<>\\]*',
        r'(?:wss?|rtmps?)://[^\s"\'<>\\]+',
        r'https?:[^\s"\'<>\\]*(?:token|/api/|playlist|stream|live)[^\s"\'<>\\]*',
    ]
    seen = []
    for p in pats:
        for m in re.findall(p, text.replace('\\/', '/')):
            if m not in seen and not re.search(r'\.(?:png|jpe?g|gif|svg|css|ico|woff2?)(?:\?|$)', m):
                seen.append(m)
    return seen[:25]


def describe(url, referer=None, depth=0):
    pad = '  ' * depth
    code, final, html = get(url, referer)
    say(f'{pad}- {url}  ->  HTTP {code}' + (f' (final: {final})' if final != url else ''))
    if code != 200 or not html:
        if html.startswith('ERROR'):
            say(f'{pad}  {html}')
        return
    t = re.search(r'<title>(.*?)</title>', html, re.I | re.S)
    if t:
        say(f'{pad}  title: {t.group(1).strip()[:100]}')
    iframes = re.findall(r'<iframe[^>]+src=["\']([^"\']+)', html, re.I)
    scripts = re.findall(r'<script[^>]+src=["\']([^"\']+)', html, re.I)
    for f in iframes:
        say(f'{pad}  iframe: {urllib.parse.urljoin(final, f)}')
    for s in scripts[:12]:
        say(f'{pad}  script: {urllib.parse.urljoin(final, s)}')
    for h in interesting(html):
        say(f'{pad}  found: {h}')
    # inline player setup: look for a few common keys
    for m in re.findall(r'(?:file|source|src|hls|stream|url)\s*[:=]\s*["\']([^"\']{8,200})["\']', html)[:10]:
        if re.search(r'm3u8|mpd|stream|live|token|http', m):
            say(f'{pad}  setup: {m}')
    if depth == 0:
        # follow iframes one level, and the page's own non-library scripts for stream hints
        for f in iframes[:3]:
            describe(urllib.parse.urljoin(final, f), final, depth + 1)
        for s in scripts[:12]:
            su = urllib.parse.urljoin(final, s)
            if re.search(r'jquery|bootstrap|analytics|gtag|adsbygoogle|fontawesome', su, re.I):
                continue
            c2, _, js = get(su, final, 600_000)
            if c2 == 200:
                hits = interesting(js)
                if hits:
                    say(f'{pad}  in {su}:')
                    for h in hits[:10]:
                        say(f'{pad}    found: {h}')


def main():
    say('== parsatv inspection ==')
    slugs = {}
    for path in ['/', '/m/', '/tv', '/channels', '/live']:
        code, final, html = get(BASE + path)
        say(f'page {path}: HTTP {code}, {len(html)} bytes')
        if code == 200:
            for m in re.findall(r'["\'/]((?:m/)?name=[^"\'&<>\s#]+)', html):
                slug = urllib.parse.unquote(m.split('name=', 1)[1])
                slugs[slug] = slugs.get(slug, 0) + 1
    say(f'channel page names found: {len(slugs)}')
    if slugs:
        say('  ' + ', '.join(sorted(slugs)))
    wanted = [s for s in slugs if WANT.search(s)]
    say(f'matching 4u / romantico / family: {wanted or "none found on the pages above"}')
    say()
    for s in SAMPLES + wanted[:6]:
        say(f'=== {s} ===')
        describe(f'{BASE}/m/name={s}')
        say()
    text = '\n'.join(out)
    if sys.platform == 'darwin':
        try:
            subprocess.run(['pbcopy'], input=text.encode(), check=True)
            print('\n(report copied to the clipboard - paste it into the chat)')
        except Exception:  # noqa: BLE001
            pass


main()
