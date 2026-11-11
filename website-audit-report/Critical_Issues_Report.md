# Critical and high-severity issues still open

**Date:** 11 Nov 2026

**Count:** 12 High-severity items are not fixed. No Critical issues were found: no broken routes, no accidental noindex, no broken lead forms and no missing sitemap.

| ID | Page | Issue | Status | Required action | Verification |
|---|---|---|---|---|---|
| ISS-043 | /blog/ | Duplicate description (3 pages) | Blocked | Give each page a unique value | Still present — approved SEO/page copy; needs the SEO owner or product team to supply new copy |
| ISS-177 | /insights/ | Duplicate description (3 pages) | Blocked | Give each page a unique value | Still present — approved SEO/page copy; needs the SEO owner or product team to supply new copy |
| ISS-183 | /insights/illustrations/ | Duplicate description (3 pages) | Blocked | Give each page a unique value | Still present — approved SEO/page copy; needs the SEO owner or product team to supply new copy |
| ISS-495 | /evv-software/ | Broken link "Medicaid.gov, Electronic Visit Verification" → https://www.medicaid.gov/medicaid/home-community-based-services/home-community-based-services-guidance-additional-resources/electronic-visit-verification (403) | Blocked | Replace or remove the broken external link | Target site answers 403 "Access Denied" to automated clients (incl. headless Chrome); check manually in a normal browser |
| ISS-496 | /evv-software/ | Broken link "CMS, EVV Requirements in the 21st Century Cures Act (PDF)" → https://www.medicaid.gov/sites/default/files/2019-12/evv-requirements-intensive.pdf (403) | Blocked | Replace or remove the broken external link | Target site answers 403 "Access Denied" to automated clients (incl. headless Chrome); check manually in a normal browser |
| ISS-497 | /evv-software/ | Broken link "CMS, EVV Requirements in the 21st Century Cures Act (PDF)" → https://www.medicaid.gov/sites/default/files/2019-12/evv-requirements-intensive.pdf (403) | Blocked | Replace or remove the broken external link | Target site answers 403 "Access Denied" to automated clients (incl. headless Chrome); check manually in a normal browser |
| ISS-498 | /small-practice-ehr/ | Broken link "qpp.cms.gov/participation-lookup" → https://qpp.cms.gov/participation-lookup (403) | Blocked | Replace or remove the broken external link | Target site answers 403 "Access Denied" to automated clients (incl. headless Chrome); check manually in a normal browser |
| ISS-508 | (all URLs) | Soft 404: unknown URLs (e.g. /this-page-does-not-exist/) return HTTP 200 with the "not available" page | Blocked | Configure the host to return 404 for paths that have no prerendered page (the page itself is already noindex) | Live: GET /this-page-does-not-exist/ → 200. Needs hosting (GoDaddy) configuration access. |
| ISS-509 | https://elixirehr.com/<any page>/ | Non-www deep URLs return 404 (only the bare domain redirects): https://elixirehr.com/about-us/ → 404 | Blocked | Redirect every https://elixirehr.com/* path to https://www.elixirehr.com/* (301) | Live: https://elixirehr.com/about-us/ → 404; https://elixirehr.com/ → 301 www. Needs DNS/hosting access. |
| ISS-510 | /newsletter/ | Server 301 redirects /newsletter/ to /blog/, hiding the Newsletter page that is in the sitemap | Blocked | Remove the server-side /newsletter/ → /blog/ redirect | Live: /newsletter/ → 301 /blog/. Rule is in the hosting config, not the repo. |
| ISS-513 | (site) | Single 2.0 MB JavaScript bundle (≈1.0–1.3 MB transferred) and single 719 KB CSS file (render-blocking) for every page; mobile lab LCP 4.7–11 s | Open | Route-level code splitting (React.lazy per route, Suspense around the outlet) with per-route CSS links injected by scripts/prerender.mjs via the Vite manifest | Not done in this pass: changes hydration/prerender architecture; needs its own task and full regression test. |
| ISS-517 | /press-release/{infrastructure-expansion-new-edge-nodes, elixir-ai-partners-with-global-health-alliance, 2023-annual-clinical-intelligence-impact-report}/ | Three press releases contain only Figma listing-frame copy ("no full release was supplied", truncated titles ending in "...") but are live and in the sitemap | Blocked | Product team to confirm these announcements are real and supply full text, or unpublish them (set demo: true) | Source comments in src/posts/press-release/*.js. Content decision; not changed. |


High-severity items that **were** fixed in this pass are listed in `Resolved_Issues_Report.md`.
