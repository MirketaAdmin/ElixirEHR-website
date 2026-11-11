# Before / after summary

**Date:** 11 Nov 2026

**Before:** `main` at `34ab200`, the code that is live. **After:** the working tree with this pass's fixes, as a local production build. Both crawled with the same crawler.

| Measure | Before | After |
|---|---|---|
| Pages with og:image | 49 / 112 | 111 / 112 |
| Pages with Twitter card | 50 / 112 | 112 / 112 |
| Pages with structured data (JSON-LD) | 50 / 112 | 111 / 112 |
| Pages sharing an H1 with another page | 12 | 2 |
| Orphan pages (0 inbound links) | 30 | 2 |
| Pages with horizontal scroll (any width) | 0 | 0 |
| Page/width combos with touch targets < 24px | 560 | 109 |
| Images missing alt attribute | 0 | 0 |
| Build assets (dist/assets) | 45 MB | 20 MB |
| Large raster images (>150 KB) | 97 (29 MB) | 5 unused files left untouched; served images converted |
| Detected issues (automated) | 498 | 213 |
| Build / lint | OK / clean | Pass (112/112 pages prerendered) / Pass (oxlint: 0 errors, 0 warnings) |

**Mobile lab, local build:** see `Performance_Audit_Report.md`. LCP improved on 9 of 12 key pages in single runs; the other 3 were within noise and improved on a 3-run median.

**Live site:** unchanged until the working tree is committed and deployed through the authorised process.
