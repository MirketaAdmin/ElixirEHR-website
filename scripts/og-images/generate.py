"""
Social share (Open Graph / X card) images: one 1200x630 JPG per indexable page, written to
src/assets/og/<page path>.jpg (Home keeps src/assets/seo/og-default.jpg). PageSeo and PostSeo pick
them up by path; a page without one falls back to its featured image or the default image.

  * Posts (blog, video, release note, e-book, survey, press release, case study, …): the post's own
    featured image (the image its og:image already used), cropped to 1.91:1, or fitted onto the
    brand purple when its shape is far from that.
  * Other pages: a branded card in the style of the default image (Elixir logo and the page's title
    on the brand purple, the page's own hero image on the right; title only when it has none).

Run it after a production build, because it reads every prerendered page in dist/, then build again
so the new images are bundled:

  VITE_SITE_URL=https://www.elixirehr.com npm run build
  python scripts/og-images/generate.py --font-display <Montserrat[wght].ttf> --font-body <Roboto[wdth,wght].ttf>
  VITE_SITE_URL=https://www.elixirehr.com npm run build

Needs Python 3 with Pillow. Fonts: Montserrat and Roboto, the site's own fonts (Google Fonts, OFL).
Existing images are kept; pass --force to redraw them.
"""
import argparse
import html
import json
import os
import re
from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
DIST = os.path.join(ROOT, 'dist')
OUT = os.path.join(ROOT, 'src', 'assets', 'og')
DEFAULT = os.path.join(ROOT, 'src', 'assets', 'seo', 'og-default.jpg')
W, H = 1200, 630
PURPLE = (46, 1, 82)  # the default share image's background
LIME = (149, 193, 31)  # --color-secondary
BRAND_SUFFIXES = {'elixir', 'elixirehr', 'careers', 'onc certification'}

ap = argparse.ArgumentParser()
ap.add_argument('--font-display', required=True)
ap.add_argument('--font-body', required=True)
ap.add_argument('--force', action='store_true')
ap.add_argument('--only', help='only this page path, e.g. /about-us/')
args = ap.parse_args()


def font(path, size, weight):
    f = ImageFont.truetype(path, size)
    f.set_variation_by_name(weight)
    return f


def headline(title):
    """The page's own title without the brand parts: 'Billing | Elixir' → 'Billing'."""
    parts = [p.strip() for p in title.split(' | ')]
    keep = [p for p in parts if p.lower() not in BRAND_SUFFIXES]
    return keep[0] if keep else parts[0]


def wrap(draw, text, fnt, width):
    lines, cur = [], ''
    for word in text.split():
        trial = f'{cur} {word}'.strip()
        if draw.textlength(trial, font=fnt) <= width or not cur:
            cur = trial
        else:
            lines.append(cur)
            cur = word
    lines.append(cur)
    return lines


def cover(im, w, h, focus_y=0.5):
    return ImageOps.fit(im, (w, h), Image.LANCZOS, centering=(0.5, focus_y))


def rounded(im, radius):
    mask = Image.new('L', im.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, im.size[0] - 1, im.size[1] - 1), radius, fill=255)
    return im, mask


# The Elixir logo exactly as drawn on the default share image (the 118px PNG would blur when enlarged).
default = Image.open(DEFAULT).convert('RGB')
left = default.crop((0, 0, 560, H))
bright = left.point(lambda v: 255 if v > 140 else 0).convert('L')
bbox = bright.getbbox()
LOGO = default.crop((bbox[0] - 4, bbox[1] - 4, bbox[2] + 4, bbox[3] + 4))


def logo(scale):
    return LOGO.resize((round(LOGO.width * scale), round(LOGO.height * scale)), Image.LANCZOS)


def page_card(title, hero_path):
    im = Image.new('RGB', (W, H), PURPLE)
    d = ImageDraw.Draw(im)
    text_w = 500 if hero_path else 1000
    lg = logo(0.62)
    im.paste(lg, (64, 64))
    size = 56 if hero_path else 72
    while True:
        f = font(args.font_display, size, 'Bold')
        lines = wrap(d, headline(title), f, text_w)
        if len(lines) <= 4 or size <= 38:
            break
        size -= 4
    line_h = round(size * 1.22)
    block = line_h * len(lines)
    y = max(64 + lg.height + 48, (H - block) // 2)
    for line in lines:
        d.text((64, y), line, font=f, fill=(255, 255, 255))
        y += line_h
    d.rounded_rectangle((64, y + 22, 64 + 72, y + 28), 3, fill=LIME)
    d.text((64, H - 64 - 26), 'www.elixirehr.com', font=font(args.font_body, 24, 'Medium'), fill=(220, 210, 232))
    if hero_path:
        box = (608, 56, 1144, 574)  # 536 x 518, like the default image's photo panel
        hero = Image.open(hero_path).convert('RGB')
        hero = cover(hero, box[2] - box[0], box[3] - box[1], 0.4)
        hero, mask = rounded(hero, 24)
        im.paste(hero, box[:2], mask)
    return im


def post_image(path):
    src = Image.open(path)
    if src.mode in ('RGBA', 'LA', 'P'):
        bg = Image.new('RGB', src.size, (255, 255, 255))
        src = src.convert('RGBA')
        bg.paste(src, mask=src.getchannel('A'))
        src = bg
    src = src.convert('RGB')
    ratio = src.width / src.height
    if 1.55 <= ratio <= 2.4:
        return cover(src, W, H, 0.5)
    # Far from 1.91:1 (square cards, tall covers): fit the whole image on the brand purple.
    im = Image.new('RGB', (W, H), PURPLE)
    fitted = ImageOps.contain(src, (W - 96, H - 96), Image.LANCZOS)
    im.paste(fitted, ((W - fitted.width) // 2, (H - fitted.height) // 2))
    return im


def save(im, key):
    out = os.path.join(OUT, key + '.jpg')
    os.makedirs(os.path.dirname(out), exist_ok=True)
    quality = 86
    while True:
        im.save(out, 'JPEG', quality=quality, optimize=True, progressive=True)
        if os.path.getsize(out) <= 250_000 or quality <= 60:
            break
        quality -= 6
    return out


POST_TYPES = None
types_src = open(os.path.join(ROOT, 'src', 'posts', 'types.js'), encoding='utf-8').read()
POST_TYPES = set(re.findall(r"path: '([a-z-]+)'", types_src))

report = []
for root, _, files in os.walk(DIST):
    if 'index.html' not in files:
        continue
    page = '/' + os.path.relpath(root, DIST).replace('\\', '/') + '/'
    page = '/' if page == '/./' else page
    if args.only and page != args.only:
        continue
    s = open(os.path.join(root, 'index.html'), encoding='utf-8').read()
    head = s.split('</head>')[0]
    if re.search(r'<meta name="robots" content="[^"]*noindex', head):
        continue
    if page == '/':
        continue  # Home uses the default share image, which is the Home image
    key = page.strip('/')
    out = os.path.join(OUT, key + '.jpg')
    if os.path.exists(out) and not args.force:
        report.append((page, 'kept'))
        continue
    title = html.unescape(re.search(r'<title>(.*?)</title>', head, re.S).group(1))
    first = page.strip('/').split('/')[0]
    if first in POST_TYPES and page.count('/') == 3:
        og = re.search(r'<meta property="og:image" content="https?://[^/]+(/assets/[^"]+)"', head)
        src = os.path.join(DIST, og.group(1).lstrip('/')) if og else None
        im = post_image(src) if src and os.path.exists(src) else page_card(title, None)
        kind = 'post image' if src else 'post (no image): title card'
    else:
        body = s.split('<body', 1)[-1]
        hero = re.search(r'data-hero[^>]*>(.*?)</section>', body, re.S)
        img = hero and re.search(r'<img[^>]*src="(/assets/[^"]+)"', hero.group(1))
        src = os.path.join(DIST, img.group(1).lstrip('/')) if img else None
        im = page_card(title, src)
        kind = 'page card + hero' if src else 'page card (title only)'
    path = save(im, key)
    report.append((page, f'{kind}, {os.path.getsize(path) // 1024} KB'))

for page, what in sorted(report):
    print(f'{page}  {what}')
print(f'{len(report)} pages')
