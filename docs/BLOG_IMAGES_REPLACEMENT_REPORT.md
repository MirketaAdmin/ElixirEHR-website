# Blog featured images: replacement report

**Date:** 11 Nov 2026
**Source:** `Downloads/Elixir_Blog_Feature_Images/` (23 WebP files, 1920×1080)
**Image folder:** `src/assets/posts/blog/`. Every new image sits directly in this folder as `<blog-slug>.webp`. This is the existing blog-images folder; no new folder was created.

## Summary

| Item | Result |
|---|---|
| Supplied images | 23 |
| Matched to a blog post and applied | **17** |
| Supplied images with no matching blog on the site | **6** (not applied; see below) |
| Blogs on the site that received no new image | 6 (they keep their current images) |
| Old image files removed | 34 (17 folders × `card-temp.jpg` + `hero-temp.jpg`). Each was removed only after confirming no file in `src/` still referenced it. |
| Production build | Pass (112/112 pages) |
| Lint | Pass (0 errors, 0 warnings) |

## Matching

Images were matched on the supplied file name against the post's slug.

- **14 exact matches.**
- **3 near matches**, where the file name differs slightly from the post's actual slug:
  - `ai-in-healthcare-workflows-where-we-are-and-what-s-next` → `…-whats-next`
  - `understanding-rcm-in-healthcare-guide-to-revenue-cycle-management` → `…-guide-revenue-cycle-management`
  - `healthcare-compliance-guide-for-small-practices` → `healthcare-compliance-made-simple-for-small-practices`. This post's lead line is "A Guide from Your EHR Partner", and it is the only small-practice compliance post.

The new files are named after the post slugs, so the folder stays consistent.

| # | Blog title | Supplied image | Old images (removed) | New image | Size | Status |
|---:|---|---|---|---|---:|---|
| 1 | AI in Healthcare: A Smarter Path to Coding Accuracy and Compliance | `ai-in-healthcare-a-smarter-path-to-coding-accuracy-and-compliance.webp` | `ai-in-healthcare-a-smarter-path-to-coding-accuracy-and-compliance/card-temp.jpg`, `ai-in-healthcare-a-smarter-path-to-coding-accuracy-and-compliance/hero-temp.jpg` | `ai-in-healthcare-a-smarter-path-to-coding-accuracy-and-compliance.webp` | 92 KB | Replaced |
| 2 | AI in Healthcare Workflows: Where We Are and What’s Next | `ai-in-healthcare-workflows-where-we-are-and-what-s-next.webp` | `ai-in-healthcare-workflows-where-we-are-and-whats-next/card-temp.jpg`, `ai-in-healthcare-workflows-where-we-are-and-whats-next/hero-temp.jpg` | `ai-in-healthcare-workflows-where-we-are-and-whats-next.webp` | 93 KB | Replaced |
| 3 | Boosting Revenue Cycle Efficiency with Salesforce EHR | `boosting-revenue-cycle-efficiency-with-salesforce-ehr.webp` | `boosting-revenue-cycle-efficiency-with-salesforce-ehr/card-temp.jpg`, `boosting-revenue-cycle-efficiency-with-salesforce-ehr/hero-temp.jpg` | `boosting-revenue-cycle-efficiency-with-salesforce-ehr.webp` | 87 KB | Replaced |
| 4 | Clinic Revenue Optimization: How RCM Tools Reduce Denial | `clinic-revenue-optimization-how-rcm-tools-reduce-denial.webp` | `clinic-revenue-optimization-how-rcm-tools-reduce-denial/card-temp.jpg`, `clinic-revenue-optimization-how-rcm-tools-reduce-denial/hero-temp.jpg` | `clinic-revenue-optimization-how-rcm-tools-reduce-denial.webp` | 70 KB | Replaced |
| 5 | Common Pitfalls in Healthcare Billing and How to avoid them | `common-pitfalls-in-healthcare-billing-and-how-to-avoid-them.webp` | `common-pitfalls-in-healthcare-billing-and-how-to-avoid-them/card-temp.jpg`, `common-pitfalls-in-healthcare-billing-and-how-to-avoid-them/hero-temp.jpg` | `common-pitfalls-in-healthcare-billing-and-how-to-avoid-them.webp` | 83 KB | Replaced |
| 6 | From Lead to Loyalty: Leveraging CRM in Healthcare | `from-lead-to-loyalty-leveraging-crm-in-healthcare.webp` | `from-lead-to-loyalty-leveraging-crm-in-healthcare/card-temp.jpg`, `from-lead-to-loyalty-leveraging-crm-in-healthcare/hero-temp.jpg` | `from-lead-to-loyalty-leveraging-crm-in-healthcare.webp` | 105 KB | Replaced |
| 7 | Healthcare Compliance Made Simple for Small Practices | `healthcare-compliance-guide-for-small-practices.webp` | `healthcare-compliance-made-simple-for-small-practices/card-temp.jpg`, `healthcare-compliance-made-simple-for-small-practices/hero-temp.jpg` | `healthcare-compliance-made-simple-for-small-practices.webp` | 89 KB | Replaced |
| 8 | How Salesforce EHR Integration Streamlines Healthcare Workflows | `how-salesforce-ehr-integration-streamlines-healthcare-workflows.webp` | `how-salesforce-ehr-integration-streamlines-healthcare-workflows/card-temp.jpg`, `how-salesforce-ehr-integration-streamlines-healthcare-workflows/hero-temp.jpg` | `how-salesforce-ehr-integration-streamlines-healthcare-workflows.webp` | 84 KB | Replaced |
| 9 | How to stay ahead in the telehealth revolution? | `how-to-stay-ahead-in-the-telehealth-revolution.webp` | `how-to-stay-ahead-in-the-telehealth-revolution/card-temp.jpg`, `how-to-stay-ahead-in-the-telehealth-revolution/hero-temp.jpg` | `how-to-stay-ahead-in-the-telehealth-revolution.webp` | 68 KB | Replaced |
| 10 | Importance of Patient Care Notes in EHR usability | `importance-of-patient-care-notes-in-ehr-usability.webp` | `importance-of-patient-care-notes-in-ehr-usability/card-temp.jpg`, `importance-of-patient-care-notes-in-ehr-usability/hero-temp.jpg` | `importance-of-patient-care-notes-in-ehr-usability.webp` | 62 KB | Replaced |
| 11 | Reimagining Healthcare CRM with Salesforce | `reimagining-healthcare-crm-with-salesforce.webp` | `reimagining-healthcare-crm-with-salesforce/card-temp.jpg`, `reimagining-healthcare-crm-with-salesforce/hero-temp.jpg` | `reimagining-healthcare-crm-with-salesforce.webp` | 119 KB | Replaced |
| 12 | Simplifying Medical Billing on Salesforce: Step-by-Step Guide for Healthcare Providers | `simplifying-medical-billing-on-salesforce-step-by-step-guide-for-healthcare-providers.webp` | `simplifying-medical-billing-on-salesforce-step-by-step-guide-for-healthcare-providers/card-temp.jpg`, `simplifying-medical-billing-on-salesforce-step-by-step-guide-for-healthcare-providers/hero-temp.jpg` | `simplifying-medical-billing-on-salesforce-step-by-step-guide-for-healthcare-providers.webp` | 80 KB | Replaced |
| 13 | Top 10 Benefits of Implementing a Salesforce EHR System | `top-10-benefits-of-implementing-a-salesforce-ehr-system.webp` | `top-10-benefits-of-implementing-a-salesforce-ehr-system/card-temp.jpg`, `top-10-benefits-of-implementing-a-salesforce-ehr-system/hero-temp.jpg` | `top-10-benefits-of-implementing-a-salesforce-ehr-system.webp` | 89 KB | Replaced |
| 14 | Understanding RCM in Healthcare: Guide Revenue Cycle Management | `understanding-rcm-in-healthcare-guide-to-revenue-cycle-management.webp` | `understanding-rcm-in-healthcare-guide-revenue-cycle-management/card-temp.jpg`, `understanding-rcm-in-healthcare-guide-revenue-cycle-management/hero-temp.jpg` | `understanding-rcm-in-healthcare-guide-revenue-cycle-management.webp` | 99 KB | Replaced |
| 15 | Using AI for Patient Experience | Intelligent Healthcare Tools | `using-ai-for-patient-experience-intelligent-healthcare-tools.webp` | `using-ai-for-patient-experience-intelligent-healthcare-tools/card-temp.jpg`, `using-ai-for-patient-experience-intelligent-healthcare-tools/hero-temp.jpg` | `using-ai-for-patient-experience-intelligent-healthcare-tools.webp` | 107 KB | Replaced |
| 16 | What the ‘No surprises Act’ means for Healthcare Providers? | `what-the-no-surprises-act-means-for-healthcare-providers.webp` | `what-the-no-surprises-act-means-for-healthcare-providers/card-temp.jpg`, `what-the-no-surprises-act-means-for-healthcare-providers/hero-temp.jpg` | `what-the-no-surprises-act-means-for-healthcare-providers.webp` | 77 KB | Replaced |
| 17 | Why Salesforce EHR Is the Future of Healthcare Technology | `why-salesforce-ehr-is-the-future-of-healthcare-technology.webp` | `why-salesforce-ehr-is-the-future-of-healthcare-technology/card-temp.jpg`, `why-salesforce-ehr-is-the-future-of-healthcare-technology/hero-temp.jpg` | `why-salesforce-ehr-is-the-future-of-healthcare-technology.webp` | 64 KB | Replaced |

## Supplied images not used (no matching blog on the site)

These six blog posts do not exist in `src/posts/blog/`. Their images were **not** given to other posts. Assigning them elsewhere would be guessing.

- `ethical-ai-in-healthcare-for-leaders.webp`
- `manage-the-insurance-verification-process-and-reduce-claim-denials-with-elixir.webp`
- `optimizing-the-patient-intake-management-process-in-salesforce.webp`
- `reimagining-the-patient-journey-with-salesforce-health-cloud.webp`
- `transforming-healthcare-with-agentic-ai-and-agentforce.webp`
- `upgrade-your-old-rcm-with-the-next-gen-elixir-billing-built-on-salesforce-to-increase-profitability.webp`

## Blogs on the site that received no image (unchanged)

These keep their current `card-temp.jpg` / `hero-temp.jpg`:

- Advancing Patient-centred Care: Harnessing Elixir (EHR) for Comprehensive Guide to Effective Care Plans
- Best Practices for Handling Cancellations No-Shows
- Enhancing Revenue Cycle Management with Elixir RCM Module
- Intelligent Navigation through complex Bed Management challenges with Elixir
- Intelligent Patient Scheduling with AI on Salesforce
- The Future of Home Healthcare Technology: Caring for an Aging U.S. Population

## What changed

- **17 post files** (`src/posts/blog/<slug>.js`):
  - the two temporary-image imports are replaced by one `featuredImage` import, used for both `cardImage` and `heroImage`
  - alt text is the blog title
  - the hero keeps its declared 757×324 size
  - the obsolete "TEMPORARY IMAGES" note is removed from the header comment
  - title, body, URL, SEO metadata and layout are unchanged (checked with a line-by-line diff)
- **`src/components/posts/PostDetailTemplate/PostDetailTemplate.jsx` and `.module.css`:**
  - the banner image keeps the post's declared proportions (`aspect-ratio` from its width/height) with `object-fit: cover`
  - so the new 16:9 photos fill the same 757×324 banner as before instead of making it taller
  - other post types are unaffected, because their declared size equals their image's own size
- **Optimisation:** each image resized from 1920×1080 to 1600×900, WebP quality 85. Sizes are 62–119 KB.

## Verification (local production build, headless Chrome)

| Check | Result |
|---|---|
| 23 blog detail pages at 1440 px and 390 px | 17 show the new image, loaded, in the 2.34:1 banner (757×324). 6 unchanged. 0 problems. |
| `og:image` of the 17 posts | The new image |
| Blog listing pages 1–6 (`/blog/?page=N`), Home "Insights" section, All Resources | Every card for the 17 posts shows its new image. 0 broken images, 0 HTTP errors. |
| Latest Blogs sidebar / related | The sidebar lists titles only (no images); nothing to change |
