# Performance audit

**Date:** 11 Nov 2026

**All numbers are LAB measurements, not field data.**

- **Field data:** PageSpeed Insights / CrUX could not be retrieved. The anonymous PSI API returned HTTP 429 (daily quota exhausted). Use a PSI API key or Search Console's Core Web Vitals report for real-user data.
- **Mobile profile:** 390×844, 4× CPU slowdown, ~1.6 Mbps / 150 ms RTT, cache disabled.
- **Desktop profile:** 1440×900, no throttling.
- **INP:** not measured. It needs real interactions; the "long tasks" column is a TBT-style proxy.

## Live production (before any fix), 12 key pages

| Page | Mobile FCP | Mobile LCP | Mobile CLS | Desktop FCP | Desktop LCP | Desktop CLS | Transferred KB | JS KB | Third-party KB |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| / | 12644 | 27008 | 0 | 1500 | 2120 | 0.001 | 3784 | 1309 | 682 |
| /contact-us/ | 6648 | 9136 | 0 | 712 | 1208 | 0 | 2448 | 1683 | 1026 |
| /why-elixir/ | 6280 | 10012 | 0 | 844 | 1508 | 0.003 | 2484 | 1662 | 1005 |
| /ehr-software/ | 8424 | 15548 | 0 | 944 | 1276 | 0.003 | 3084 | 1308 | 652 |
| /rcm-software/ | 8728 | 16608 | 0 | 1280 | 1904 | 0 | 3579 | 1308 | 652 |
| /patient-no-show-software/ | 4780 | 5416 | 0 | 1120 | 1840 | 0 | 1918 | 1308 | 675 |
| /no-show-cost-calculator/ | 5040 | 7620 | 0 | 2168 | 2760 | 0 | 2279 | 1661 | 1028 |
| /healthcare-ai-platform/ | 5400 | 8016 | 0 | 944 | 1932 | 0 | 1948 | 1308 | 672 |
| /blog/ | 6684 | 9500 | 0 | 1812 | 2944 | 0 | 2092 | 1308 | 679 |
| /insights/ | 5716 | 8432 | 0 | 1032 | 1740 | 0 | 2072 | 1329 | 672 |
| /about-us/ | 9468 | 14684 | 0 | 660 | 1200 | 0 | 3898 | 1660 | 1005 |
| /careers/ | 4660 | 8064 | 0 | 656 | 1380 | 0.001 | 1892 | 1329 | 673 |


### Causes

| Cause | Evidence |
|---|---|
| One JavaScript bundle for every page | `index-*.js` 2.0 MB, ≈1.0–1.3 MB transferred |
| One CSS file for every page, render-blocking | 719 KB (≈120 KB transferred) |
| Google Fonts CSS, render-blocking | 4 families: Inter, Montserrat 400–800, Plus Jakarta Sans, Roboto incl. italic |
| Large PNG images | 400–540 KB each; Home loaded ~2.1 MB of images on mobile |
| Images below the fold loaded eagerly | 76 on Home |
| Third-party scripts | GTM/GA4 (~0.3–0.7 MB with Google Fonts) and reCAPTCHA on form pages |
| Short cache on hashed assets | `/assets/*` sent with `max-age=30` |

## Before / after on a local production build (same throttling)

LCP for the three most variable pages is the median of 3 runs.

| Page | LCP before (ms) | LCP after (ms) | FCP before | FCP after | Transferred KB before | after |
|---|---:|---:|---:|---:|---:|---:|
| / | 19548 | 11440 | 7812 | 7932 | 3840 | 2440 |
| /contact-us/ | 8128 | 4824 | 5200 | 4036 | 2491 | 2023 |
| /why-elixir/ | 8548 | 6428 | 5416 | 4348 | 2536 | 2136 |
| /ehr-software/ | 12208 | 5544 | 5092 | 3964 | 3135 | 1673 |
| /rcm-software/ | 14144 | 5140 | 5756 | 5140 | 3632 | 1534 |
| /patient-no-show-software/ | 5024 | 4484 | 4508 | 4388 | 1969 | 1687 |
| /no-show-cost-calculator/ | 5844 | 5052 | 5100 | 6356 | 2329 | 2036 |
| /healthcare-ai-platform/ | 9176 | 7808 | 4712 | 4420 | 1999 | 1685 |
| /blog/ | 8100 | 4764 | 5100 | 3896 | 2145 | 1781 |
| /insights/ | 7720 | 5176 | 4944 | 3580 | 2123 | 1757 |
| /about-us/ | 11388 | 4888 | 4976 | 3524 | 3952 | 2044 |
| /careers/ | 7352 | 4900 | 4068 | 3652 | 1943 | 1690 |


**What changed:**

- 92 images converted to WebP, saving 24 MB of 28 MB
- 288 images lazy-loaded
- build assets 45 MB → 20 MB

CLS was already ~0 on every page and stays ~0.

## Not done in this pass (recommended)

1. **Route-level code splitting (High).** `React.lazy` per route, with prerender injecting each route's CSS/JS. It is the largest remaining win for mobile FCP/LCP. It changes the hydration/prerender architecture, so it needs its own task.
2. **Fonts (Medium).** Self-host and subset; drop unused families/weights after a design check.
3. **Caching (Medium, hosting).** `Cache-Control: max-age=31536000, immutable` for `/assets/*`.
4. **Hero LCP (Low).** Preload the hero image or background on pages where it is the LCP element.
