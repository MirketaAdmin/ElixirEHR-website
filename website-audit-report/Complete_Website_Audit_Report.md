# ElixirEHR website audit: complete report

**Date:** 11 Nov 2026
**Site:** https://www.elixirehr.com
**Code audited:** `main` at `34ab200`, the same code that is live (verified from the live bundle). Fixes were made in the working tree and are **not committed or deployed**.

**Readers:** the Elixir web team, SEO owner and product team.

## Headline numbers

| Measure | Value |
|---|---:|
| URLs discovered | 114 |
| …in sitemap.xml | 111 |
| …found only through links/probes | 3 (thank-you page, the 404 probe, `/request-demo/` alias) |
| Pages audited (crawled and rendered) | 114 |
| Pages successfully tested | 114 — every URL loaded and rendered; 0 JS exceptions |
| Viewport sizes tested per page | 9 (360, 375, 390, 414, 768, 1024, 1280, 1440, 1920 px) |
| Indexable pages | 111 |
| Issues found (register) | 521 |
| Issues fixed and verified | 297 |
| Issues remaining (Open) | 87 |
| Issues blocked (need access, approved copy or a content decision) | 137 |
| SEO + Metadata + Headings issues | 228 |
| Technical SEO issues | 64 |
| Responsive issues | 149 |
| Content issues | 68 |
| Build status | Pass (112/112 pages prerendered) |
| Lint status | Pass (oxlint: 0 errors, 0 warnings) |
| Production verification | Live site crawled read-only (HTTP status, head metadata, lab performance). Fixes are verified on a local production build only; they are **not deployed**. |

## Summary by category

| Category | Found | Fixed | Remaining (Open) | Blocked |
|---|---:|---:|---:|---:|
| SEO | 0 | 0 | 0 | 0 |
| Metadata | 216 | 125 | 0 | 91 |
| Headings | 12 | 10 | 0 | 2 |
| Content | 68 | 0 | 34 | 34 |
| Technical SEO | 64 | 61 | 0 | 3 |
| Performance | 4 | 0 | 2 | 2 |
| Responsive | 149 | 99 | 50 | 0 |
| Images | 2 | 2 | 0 | 0 |
| Links | 6 | 0 | 1 | 5 |
| Forms & CTAs | 0 | 0 | 0 | 0 |
| **Total** | **521** | **297** | **87** | **137** |

"Blocked" means the fix needs something outside the code: hosting/DNS access, approved SEO copy, or a product decision. Each one is listed in `Remaining_Blocked_Issues.md` with the exact action needed.

## Method

1. **URL discovery.**
   - Sources: `sitemap.xml`, `robots.txt`, the router (`src/App.jsx`), the alias table (`src/routes/aliases.js`) and the post types.
   - A headless-Chrome crawler then followed every internal link on every rendered page (header, mega menu, footer, body).
   - No internal link led to an unknown route.
2. **Per-page extraction** from the rendered DOM:
   - all `<head>` tags, JSON-LD and every heading in order
   - main-content text and word count
   - every image and media element (file size from the build)
   - every link (internal status from the route table; external status by HTTP request)
   - forms, console and network errors
   - layout checks at the 9 widths
3. **Live comparison.** Raw HTML of every URL was fetched from production (status code, redirect, title, description, canonical, OG).
4. **Performance.** Lab measurements in Chrome:
   - live production: 12 key pages, mobile and desktop
   - a local before/after comparison under identical throttling
   - PageSpeed Insights field data was not available (API quota; see below).
5. **Fixes and re-crawl.** After fixing, the whole crawl was repeated on a fresh production build. An issue is marked Fixed only if the re-crawl no longer detects it.

## What was fixed

| Category | Issue | Pages | Fix implemented |
|---|---|---:|---|
| Responsive | Small touch targets | 97 | Footer legal links/cookie button and post sidebar "View All" links get a 24px minimum height |
| Metadata | Missing og | 62 | PageSeo.jsx: default 1200×630 share image (src/assets/seo/og-default.jpg) + og:image width/height/alt + og:site_name |
| Metadata | Missing twitter | 62 | PageSeo.jsx: twitter:card summary_large_image + twitter:title/description/image |
| Technical SEO | No structured data | 61 | PageSeo.jsx: JSON-LD @graph — WebPage + BreadcrumbList on every page; Organization + WebSite on Home |
| Headings | Same H1 on 8 pages | 8 | Insights listings: shared hero title rendered as <p> (same look), the page heading is now the H1 (PageHero titleAs) |
| Headings | Same H1 on 2 pages | 2 | Insights listings: shared hero title rendered as <p> (same look), the page heading is now the H1 (PageHero titleAs) |
| Responsive | Text spills | 2 | Post CTA box wraps its button below the copy when narrow |
| Images | Large images | 1 | 92 assets converted to WebP (quality 88, alpha kept): 28 MB → 3 MB; every import/CSS url() updated |
| Images | Below-the-fold images load eagerly (e.g. 76 on Home | 1 | 288 <img> tags in 198 components get loading="lazy" decoding="async"; hero/header/logo and 4 page-hero images stay eager (checked in the first viewport at 390 and 1440px) |
| Metadata | No default share image existed for non-post pages | 1 | src/assets/seo/og-default.jpg composed from the approved Home hero image and the Elixir logo; product team may replace it |


## Important code changes

- **`PageSeo.jsx`** now emits, on every non-post page:
  - `og:image` (with size and alt), `og:site_name`, and Twitter card tags
  - a JSON-LD graph: WebPage + BreadcrumbList, plus Organization + WebSite on Home
  - a new default share image, `src/assets/seo/og-default.jpg` (1200×630), built from the approved Home hero image and logo
- **Insights listings (Blog, Videos, Webinars, …):**
  - The shared hero title is now a `<p>`, styled the same.
  - Each page's own heading ("Blogs for Clinical Excellence", "Videos", …) is the H1, so every page has a unique H1.
  - Pagination uses real links (`?page=N`), so search engines can reach all 39 blog and video pages. Before, page buttons hid every post past page 1.
- **Images:**
  - 92 large PNG/JPEG assets converted to WebP: 28 MB → 3 MB.
  - 288 below-the-fold `<img>` tags lazy-loaded.
  - Build assets: 45 MB → 20 MB.
- **CSS:**
  - The post CTA wraps instead of overflowing at ~1024px.
  - Footer legal links and the posts' "View All" links meet the 24px tap-target size.

**Unchanged:** design, copy, URLs, the Salesforce form integration, analytics, and hosting/deployment settings.

## Files modified

- `src/components/seo/PageSeo/PageSeo.jsx (modified)`
- `src/components/sections/PageHero/PageHero.jsx (modified)`
- `src/components/sections/PageHero/PageHero.module.css (modified)`
- `src/pages/Insights/components/InsightsShell/InsightsShell.jsx (modified)`
- `src/pages/Insights/components/InsightsShell/InsightsShell.module.css (modified)`
- `src/pages/Insights/AllResources/AllResources.jsx (modified)`
- `src/components/ui/Pagination/Pagination.jsx (modified)`
- `src/pages/Insights/useResourceListing.js (modified)`
- `src/components/posts/PostContent/PostContent.module.css (modified)`
- `src/components/posts/PostSidebar/PostSidebar.module.css (modified)`
- `src/components/layout/Footer/Footer.module.css (modified)`
- `src/pages/Career/Career.jsx (modified)`
- `src/pages/PressReleases/PressReleases.jsx (modified)`
- `src/pages/ReferralProgram/ReferralProgram.jsx (modified)`
- `src/pages/SuccessStories/SuccessStories.jsx (modified)`
- `src/assets/seo/og-default.jpg (new: default 1200x630 share image)`
- `src/pages/Insights/{FeaturedListing,WideListing,VideoListing,IllustrationListing,WebinarListing}/*.jsx (Pagination linked)`
- `src/assets/** — 92 PNG/JPEG files replaced by .webp (deleted originals + new .webp files)`
- `203 .jsx files modified in total — includes loading="lazy" decoding="async" on below-the-fold <img> and webp import paths`
- `68 .js/.css files modified in total — includes webp import/url() pathssrc/pages/Insights/{AllResources,IllustrationListing,NewsletterPage,VideoListing,WebinarListing}/*.jsx + components/ResourceCard/ResourceCard.jsx (headings one level up under the new H1)`

## Before / after

See `Before_After_Summary.md`.

## Still needs attention

See `Critical_Issues_Report.md` and `Remaining_Blocked_Issues.md`. The most important items:

1. Hosting returns HTTP 200 for unknown URLs.
2. Non-www deep URLs return 404.
3. A server rule redirects `/newsletter/` to `/blog/`.
4. Three press releases that look like design placeholders are live.
5. JS and CSS ship as one bundle for every page (code splitting).
