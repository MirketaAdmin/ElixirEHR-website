# Remaining and blocked issues

**Date:** 11 Nov 2026

**Count:** 87 Open and 137 Blocked.

**What "Blocked" means:**

- the fix needs hosting/DNS access
- or the page copy is approved, and changing it is the SEO owner's or product team's call
- or a content decision is needed

**What "Open" means:** fixable in code, but not done in this pass. The reason is given in each row.

## Hosting / server (needs GoDaddy or host access)

| ID | Page | Issue | Required action | Verification |
|---|---|---|---|---|
| ISS-508 | (all URLs) | Soft 404: unknown URLs (e.g. /this-page-does-not-exist/) return HTTP 200 with the "not available" page | Configure the host to return 404 for paths that have no prerendered page (the page itself is already noindex) | Live: GET /this-page-does-not-exist/ → 200. Needs hosting (GoDaddy) configuration access. |
| ISS-509 | https://elixirehr.com/<any page>/ | Non-www deep URLs return 404 (only the bare domain redirects): https://elixirehr.com/about-us/ → 404 | Redirect every https://elixirehr.com/* path to https://www.elixirehr.com/* (301) | Live: https://elixirehr.com/about-us/ → 404; https://elixirehr.com/ → 301 www. Needs DNS/hosting access. |
| ISS-510 | /newsletter/ | Server 301 redirects /newsletter/ to /blog/, hiding the Newsletter page that is in the sitemap | Remove the server-side /newsletter/ → /blog/ redirect | Live: /newsletter/ → 301 /blog/. Rule is in the hosting config, not the repo. |
| ISS-511 | /assets/* | Hashed, immutable assets are served with Cache-Control: public, must-revalidate, max-age=30 | Serve /assets/* with Cache-Control: public, max-age=31536000, immutable (HTML can stay short) | Live response headers. Needs hosting access. |


## Approved copy (SEO owner / product team)

Titles and descriptions come from the approved "ElixirEHR Website Architecture" SEO sheet (`src/data/seo.js`). They were **not rewritten**. The recommendations are in sheet 2 of the workbook.

| Category | Issue | Pages | Fix implemented |
|---|---|---:|---|
| Metadata | Title long (74) | 5 |  |
| Metadata | Title long (72) | 4 |  |
| Metadata | Title long (78) | 4 |  |
| Metadata | Duplicate description (3 pages) | 3 |  |
| Metadata | Title long (81) | 3 |  |
| Metadata | Title long (61) | 2 |  |
| Headings | Same H1 on 2 pages | 2 |  |
| Content | Overlaps heavily with /insights/illustrations/ (62%) | 2 |  |
| Metadata | Title long (71) | 2 |  |
| Metadata | Title long (65) | 2 |  |
| Metadata | Title long (68) | 2 |  |
| Metadata | Title long (62) | 2 |  |
| Metadata | Title long (92) | 2 |  |
| Metadata | Title long (70) | 2 |  |
| Metadata | Title long (83) | 2 |  |
| Content | Thin content (178 words) | 2 |  |
| Metadata | Title long (80) | 2 |  |
| Content | Thin content (163 words) | 2 |  |
| Content | Thin content (160 words) | 2 |  |
| Metadata | Title long (76) | 2 |  |
| Metadata | Title long (100) | 1 |  |
| Content | Thin content (209 words) | 1 |  |
| Metadata | Title short (16) | 1 |  |
| Metadata | Title short (13) | 1 |  |
| Metadata | Title long (118) | 1 |  |
| Metadata | Description long (172) | 1 |  |
| Metadata | Description long (196) | 1 |  |
| Metadata | Description long (236) | 1 |  |
| Metadata | Description long (270) | 1 |  |
| Metadata | Description long (333) | 1 |  |
| Metadata | Description long (305) | 1 |  |
| Metadata | Description long (199) | 1 |  |
| Metadata | Description long (311) | 1 |  |
| Metadata | Description long (221) | 1 |  |
| Metadata | Title long (64) | 1 |  |
| Metadata | Description long (308) | 1 |  |
| Metadata | Title long (91) | 1 |  |
| Metadata | Description long (179) | 1 |  |
| Metadata | Title long (67) | 1 |  |
| Metadata | Description long (171) | 1 |  |
| Metadata | Description long (332) | 1 |  |
| Metadata | Title long (101) | 1 |  |
| Metadata | Description long (273) | 1 |  |
| Metadata | Description long (376) | 1 |  |
| Metadata | Title long (77) | 1 |  |
| Metadata | Description long (226) | 1 |  |
| Metadata | Description long (233) | 1 |  |
| Metadata | Description long (287) | 1 |  |
| Metadata | Description long (408) | 1 |  |
| Content | Thin content (216 words) | 1 |  |
| Content | Overlaps heavily with /request-demo/ (100%) | 1 |  |
| Metadata | Description long (343) | 1 |  |
| Content | Overlaps heavily with /newsletter/ (65%), /webinars-podcasts/ (63%) | 1 |  |
| Metadata | Title short (18) | 1 |  |
| Metadata | Title short (22) | 1 |  |
| Content | Overlaps heavily with /blog/ (62%), /release-notes/ (62%) | 1 |  |
| Content | Overlaps heavily with /feature-videos/ (65%), /webinars-podcasts/ (65% | 1 |  |
| Metadata | Title long (69) | 1 |  |
| Metadata | Description long (247) | 1 |  |
| Metadata | Description long (261) | 1 |  |
| Metadata | Description long (198) | 1 |  |
| Content | Thin content (183 words) | 1 |  |
| Content | Thin content (12 words) | 1 |  |
| Content | Thin content (134 words) | 1 |  |
| Metadata | Title long (98) | 1 |  |
| Content | Thin content (135 words) | 1 |  |
| Metadata | Title long (106) | 1 |  |
| Metadata | Description long (182) | 1 |  |
| Content | Thin content (137 words) | 1 |  |
| Metadata | Title short (23) | 1 |  |
| Metadata | Description long (253) | 1 |  |
| Metadata | Description long (178) | 1 |  |
| Metadata | Title long (75) | 1 |  |
| Metadata | Description long (290) | 1 |  |
| Content | Thin content (269 words) | 1 |  |
| Metadata | Title long (103) | 1 |  |
| Metadata | Description short (62) | 1 |  |
| Content | Thin content (173 words) | 1 |  |
| Content | Thin content (175 words) | 1 |  |
| Content | Thin content (156 words) | 1 |  |
| Metadata | Description short (61) | 1 |  |
| Content | Thin content (174 words) | 1 |  |
| Metadata | Title long (84) | 1 |  |
| Metadata | Description short (67) | 1 |  |
| Content | Thin content (186 words) | 1 |  |
| Metadata | Description short (59) | 1 |  |
| Metadata | Title long (88) | 1 |  |
| Content | Thin content (188 words) | 1 |  |
| Content | Thin content (202 words) | 1 |  |
| Content | Thin content (185 words) | 1 |  |
| Metadata | Title long (90) | 1 |  |
| Content | Thin content (168 words) | 1 |  |
| Metadata | Description long (176) | 1 |  |
| Content | Thin content (150 words) | 1 |  |
| Content | Overlaps heavily with /feature-videos/ (63%), /newsletter/ (65%) | 1 |  |
| Content | Billing page H1/hero copy is identical to the Healthcare Contact Cente | 1 |  |


## Content decisions

| ID | Page | Issue | Required action | Status |
|---|---|---|---|---|
| ISS-031 | /benchmark-survey/benchmark-no-show-rates-report/ | Only 2 internal links point here | Add contextual internal links from related pages | Open |
| ISS-041 | /billing/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-051 | /blog/advancing-patient-centred-care-harnessing-elixir-ehr-for-comprehensive-guide-to-effective-care-plans/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-054 | /blog/ai-in-healthcare-a-smarter-path-to-coding-accuracy-and-compliance/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-059 | /blog/best-practices-for-handling-cancellations-no-shows/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-061 | /blog/boosting-revenue-cycle-efficiency-with-salesforce-ehr/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-067 | /blog/enhancing-revenue-cycle-management-with-elixir-rcm-module/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-069 | /blog/from-lead-to-loyalty-leveraging-crm-in-healthcare/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-072 | /blog/healthcare-compliance-made-simple-for-small-practices/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-075 | /blog/how-salesforce-ehr-integration-streamlines-healthcare-workflows/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-078 | /blog/how-to-stay-ahead-in-the-telehealth-revolution/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-083 | /blog/intelligent-navigation-through-complex-bed-management-challenges-with-elixir/ | Only 1 internal links point here | Add contextual internal links from related pages | Open |
| ISS-086 | /blog/intelligent-patient-scheduling-with-ai-on-salesforce/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-089 | /blog/simplifying-medical-billing-on-salesforce-step-by-step-guide-for-healthcare-providers/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-092 | /blog/the-future-of-home-healthcare-technology-caring-for-an-aging-us-population/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-095 | /blog/top-10-benefits-of-implementing-a-salesforce-ehr-system/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-097 | /blog/understanding-rcm-in-healthcare-guide-revenue-cycle-management/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-100 | /blog/using-ai-for-patient-experience-intelligent-healthcare-tools/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-105 | /blog/why-salesforce-ehr-is-the-future-of-healthcare-technology/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-120 | /career/open-positions/senior-product-manager-ehr/ | Only 2 internal links point here | Add contextual internal links from related pages | Open |
| ISS-144 | /e-book/ai-in-healthcare-overcoming-patient-no-shows-ebook/ | Only 1 internal links point here | Add contextual internal links from related pages | Open |
| ISS-298 | /video/elixir-ai-contact-center-demo/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-302 | /video/elixir-ehr-appointment-scheduling-patient-flow/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-307 | /video/elixir-ehr-care-episode-claim-generation/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-310 | /video/elixir-ehr-care-episode-management/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-314 | /video/elixir-ehr-close-care-episodes-automate-claims/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-321 | /video/elixir-ehr-group-therapy-attendance-tracking/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-324 | /video/elixir-ehr-kratu-ai-patient-portal/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-331 | /video/elixir-ehr-patient-barriers-social-determinants/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-334 | /video/elixir-ehr-patient-outcomes-progress-tracking/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-337 | /video/elixir-ehr-patient-self-check-in/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-340 | /video/elixir-ehr-structured-care-plans/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-344 | /video/elixir-ehr-student-care-plans/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-353 | /thank-you/ | Only 0 internal links point here | Add contextual internal links from related pages | Open |
| ISS-517 | /press-release/{infrastructure-expansion-new-edge-nodes, elixir-ai-partners-with-global-health-alliance, 2023-annual-clinical-intelligence-impact-report}/ | Three press releases contain only Figma listing-frame copy ("no full release was supplied", truncated titles ending in "...") but are live and in the sitemap | Product team to confirm these announcements are real and supply full text, or unpublish them (set demo: true) | Blocked |
| ISS-518 | /press-release/* (all) | Media contact on every press release is info@mirketa.com (src/posts/press-release/_shared.js) | Confirm the Elixir media contact address | Blocked |
| ISS-519 | /billing/ | Billing page H1/hero copy is identical to the Healthcare Contact Center page ("360° AI-Powered Patient Intake Management Solution") and no page links to /billing/ | Supply billing-specific hero copy or retire/redirect the page | Blocked |


## Everything else

| ID | Page | Category | Issue | Severity | Status | Required action |
|---|---|---|---|---|---|---|
| ISS-354 | /request-demo/ | Links | Internal links point to /request-demo/, which redirects to /contact-us/ | Low | Open | Link directly to /contact-us/ |
| ISS-355 | / | Responsive | Small touch targets at 360/375/390/414/768px — 19 touch targets <24px: Show slide 1: AI-powered EHR 10x10; Show slide 2: Clinical and Revenue Cycle 28x10; Show slide 3: Meet Kratu AI 10x10; Show slide 4: The EHR That Configures to 10x10 | Low | Open | Give links/buttons at least 24×24px hit area (padding) |
| ISS-357 | /addiction-treatment-emr/ | Responsive | Small touch targets at 360/375/390/414/768px — 4 touch targets <24px: Revenue Cycle Management 193x20; Kratu AI 54x20; Patient Portal 91x20; Privacy Policy 74x20 | Low | Open | Give links/buttons at least 24×24px hit area (padding) |
| ISS-358 | /aesthetic-practice-ehr/ | Responsive | Small touch targets at 360/375/390/414/768px — 4 touch targets <24px: Contact Center 103x20; Patient Portal 91x20; no-show prediction 132x20; Privacy Policy 74x20 | Low | Open | Give links/buttons at least 24×24px hit area (padding) |
| ISS-359 | /ai-accounts-receivable-management/ | Responsive | Small touch targets at 360/375/390/414/768px — 13 touch targets <24px: Read More 90x20; Read More 90x20; Read More 90x20; Read More 90x20 | Low | Open | Give links/buttons at least 24×24px hit area (padding) |
| ISS-363 | /ambulatory-ehr/ | Responsive | Text spills at 1024px — Text spills out of its box: span: Statutory (+16px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-364 | /behavioral-health-ehr/ | Responsive | Small touch targets at 360/375/390/414/768px — 4 touch targets <24px: Go to Substance Use Disorder Page 250x20; Mental Health 94x20; Substance Use Disorder 163x20; Privacy Policy 74x20 | Low | Open | Give links/buttons at least 24×24px hit area (padding) |
| ISS-366 | /benchmark-survey/benchmark-no-show-rates-report/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: p: See how your healthcare organization sta (+5px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-367 | /benchmark-surveys/ | Responsive | Small touch targets at 360/375/390/414/768px — 2 touch targets <24px: Read More : Benchmark Survey Report: Com 90x20; Privacy Policy 74x20 | Low | Open | Give links/buttons at least 24×24px hit area (padding) |
| ISS-369 | /blog/ | Responsive | Small touch targets at 360/375/390/414/768px — 6 touch targets <24px: Read More : Clinic Revenue Optimization: 90x20; Read More : Common Pitfalls in Healthcar 90x20; Read More : Importance of Patient Care N 90x20; Read More : What the ‘No surprises Act’  90x20 | Low | Open | Give links/buttons at least 24×24px hit area (padding) |
| ISS-378 | /blog/enhancing-revenue-cycle-management-with-elixir-rcm-module/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: p: In the fast-paced world of healthcare, m (+5px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-381 | /blog/healthcare-compliance-made-simple-for-small-practices/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: p: A Guide from Your EHR Partner (+5px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-395 | /care-coordination-software/ | Responsive | Small touch targets at 360/375/390/414/768px — 3 touch targets <24px: Substance Use Disorder EHR 218x22; Mental Health EHR 146x22; Privacy Policy 74x20 | Low | Open | Give links/buttons at least 24×24px hit area (padding) |
| ISS-409 | /evv-software/ | Responsive | Small touch targets at 360/375/390/414/768px — 3 touch targets <24px: Home care and EVV 124x20; Field caregiver experience 162x20; Privacy Policy 74x20 | Low | Open | Give links/buttons at least 24×24px hit area (padding) |
| ISS-410 | /feature-videos/ | Responsive | Small touch targets at 360/375/390/414/768px — 3 touch targets <24px: Watch Video : Streamline Group Session D 118x20; Watch Video : Streamline Lab Orders & Di 118x20; Privacy Policy 74x20 | Low | Open | Give links/buttons at least 24×24px hit area (padding) |
| ISS-416 | /insights/ | Responsive | Small touch targets at 360/375/390/414/768px — 6 touch targets <24px: Read More : AI in Healthcare: Overcoming 107x20; PDF Available 85x20; Read More : Clinic Revenue Optimization: 107x20; Read Whitepaper : Elixir Summer’26 Versi 155x20 | Low | Open | Give links/buttons at least 24×24px hit area (padding) |
| ISS-429 | /payer-policy-intelligence/ | Responsive | Small touch targets at 360/375/390/414/768px — 4 touch targets <24px: How ingestion works → 157x20; How coding works → 141x20; How scoring works → 146x20; Privacy Policy 74x20 | Low | Open | Give links/buttons at least 24×24px hit area (padding) |
| ISS-430 | /payer-policy-intelligence/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: h2: AI CPT code recommendation with the paye (+16px); h2: Predict claim denials before submission, (+16px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-432 | /press-release/2023-annual-clinical-intelligence-impact-report/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: p: Comprehensive analysis reveals Kratu AI  (+5px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-434 | /press-release/elixir-ai-partners-with-global-health-alliance/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: p: A multi-year collaboration focused on le (+5px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-436 | /press-release/elixir-launches-patient-no-show-ai-feature/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: p: San Ramon, CA — Elixir, an end-to-end in (+5px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-438 | /press-release/infrastructure-expansion-new-edge-nodes/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: p: Our network infrastructure just received (+5px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-442 | /rcm-software/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: span: ANSI CARC (+22px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-443 | /referral-program/ | Responsive | Small touch targets at 360/375/390/414/768px — 7 touch targets <24px: Read More 90x20; Read More 90x20; Read More 90x20; Show resources 1 to 1 28x8 | Low | Open | Give links/buttons at least 24×24px hit area (padding) |
| ISS-449 | /release-notes/ | Responsive | Small touch targets at 360/375/390/414/768px — 5 touch targets <24px: View Full Release Notes : Elixir Summer’ 173x20; Read Notes : Elixir Spring’26 Version 1. 95x20; Read Notes : Elixir Spring’25 Version 1. 95x20; Read Notes : Elixir Summer’24 Version 1. 95x20 | Low | Open | Give links/buttons at least 24×24px hit area (padding) |
| ISS-461 | /video/elixir-ai-contact-center-demo/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: p: Transform the entire patient intake and  (+5px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-463 | /video/elixir-ehr-appointment-scheduling-patient-flow/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: p: Are fragmented scheduling tools, double- (+5px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-465 | /video/elixir-ehr-appointment-scheduling-patient-workflows/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: p: Are fragmented scheduling tools, double- (+5px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-467 | /video/elixir-ehr-care-episode-claim-generation/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: p: Are manual data exports, billing bottlen (+5px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-469 | /video/elixir-ehr-care-episode-management/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: p: Are fragmented treatment histories, manu (+5px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-471 | /video/elixir-ehr-close-care-episodes-automate-claims/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: p: Are billing bottlenecks, manual data han (+5px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-473 | /video/elixir-ehr-group-session-documentation/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: p: Are endless duplicate notes, scattered d (+5px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-475 | /video/elixir-ehr-group-therapy-attendance-tracking/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: p: Are manual headcounts, scattered spreads (+5px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-477 | /video/elixir-ehr-kratu-ai-patient-portal/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: p: Are endless patient messages, abandoned  (+5px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-479 | /video/elixir-ehr-lab-orders-diagnostics-management/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: p: Are manual test requisitions, disconnect (+5px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-481 | /video/elixir-ehr-lab-result-trends-biomarkers/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: p: Are fragmented lab histories and buried  (+5px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-483 | /video/elixir-ehr-patient-barriers-social-determinants/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: p: Are unaddressed social determinants of h (+5px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-485 | /video/elixir-ehr-patient-outcomes-progress-tracking/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: p: Are you struggling to measure real clini (+5px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-487 | /video/elixir-ehr-patient-self-check-in/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: p: Are long waiting room queues, endless pa (+5px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-489 | /video/elixir-ehr-structured-care-plans/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: p: Are fragmented patient records, misalign (+5px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-491 | /video/elixir-ehr-student-care-plans/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: p: Are fragmented student records and manua (+5px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-494 | /thank-you/ | Responsive | Small touch targets at 360/375/390/414/768px — 13 touch targets <24px: Read More 90x20; Read More 90x20; Read More 90x20; Read More 90x20 | Low | Open | Give links/buttons at least 24×24px hit area (padding) |
| ISS-495 | /evv-software/ | Links | Broken link "Medicaid.gov, Electronic Visit Verification" → https://www.medicaid.gov/medicaid/home-community-based-services/home-community-based-services-guidance-additional-resources/electronic-visit-verification (403) | High | Blocked | Replace or remove the broken external link |
| ISS-496 | /evv-software/ | Links | Broken link "CMS, EVV Requirements in the 21st Century Cures Act (PDF)" → https://www.medicaid.gov/sites/default/files/2019-12/evv-requirements-intensive.pdf (403) | High | Blocked | Replace or remove the broken external link |
| ISS-497 | /evv-software/ | Links | Broken link "CMS, EVV Requirements in the 21st Century Cures Act (PDF)" → https://www.medicaid.gov/sites/default/files/2019-12/evv-requirements-intensive.pdf (403) | High | Blocked | Replace or remove the broken external link |
| ISS-498 | /small-practice-ehr/ | Links | Broken link "qpp.cms.gov/participation-lookup" → https://qpp.cms.gov/participation-lookup (403) | High | Blocked | Replace or remove the broken external link |
| ISS-499 | / | Responsive | Text spills at 360/375/390/414/768/1024/1280/1440/1920px — Text spills out of its box: li: BLOG  Bhavesh Singla 21 May 2026  Common (+340px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-500 | /no-show-cost-calculator/ | Responsive | Small touch targets at 360/375/390/414px — 1 touch targets <24px: Recalculate Estimate 278x20 | Low | Open | Give links/buttons at least 24×24px hit area (padding) |
| ISS-501 | /patient-portal-software/ | Responsive | Small touch targets at 360/375/390/414/768px — 1 touch targets <24px: Explore Visit Prep 139x20 | Low | Open | Give links/buttons at least 24×24px hit area (padding) |
| ISS-502 | /press-release/2023-annual-clinical-intelligence-impact-report/ | Responsive | Small touch targets at 360/375/390/414/768px — 1 touch targets <24px: Email: info@mirketa.com 116x20 | Low | Open | Give links/buttons at least 24×24px hit area (padding) |
| ISS-503 | /press-release/elixir-ai-partners-with-global-health-alliance/ | Responsive | Small touch targets at 360/375/390/414/768px — 1 touch targets <24px: Email: info@mirketa.com 116x20 | Low | Open | Give links/buttons at least 24×24px hit area (padding) |
| ISS-504 | /press-release/elixir-launches-patient-no-show-ai-feature/ | Responsive | Small touch targets at 360/375/390/414/768px — 1 touch targets <24px: Email: info@mirketa.com 116x20 | Low | Open | Give links/buttons at least 24×24px hit area (padding) |
| ISS-505 | /press-release/infrastructure-expansion-new-edge-nodes/ | Responsive | Small touch targets at 360/375/390/414/768px — 1 touch targets <24px: Email: info@mirketa.com 116x20 | Low | Open | Give links/buttons at least 24×24px hit area (padding) |
| ISS-506 | /release-note/elixir-summer-26-release-notes/ | Responsive | Text spills at 1280/1440/1920px — Text spills out of its box: p: Driving Smarter Care Delivery, Seamless  (+5px) | Medium | Open | Constrain the element to its container (max-width, wrapping, padding) |
| ISS-507 | /success-stories/ | Responsive | Small touch targets at 360/375/390/414/768px — 2 touch targets <24px: READ MORE 98x16; READ MORE 98x16 | Low | Open | Give links/buttons at least 24×24px hit area (padding) |
| ISS-512 | (site) | Performance | Field data (CrUX / PageSpeed Insights) could not be retrieved | Low | Blocked | Run PSI with an API key, or check Search Console Core Web Vitals |
| ISS-513 | (site) | Performance | Single 2.0 MB JavaScript bundle (≈1.0–1.3 MB transferred) and single 719 KB CSS file (render-blocking) for every page; mobile lab LCP 4.7–11 s | High | Open | Route-level code splitting (React.lazy per route, Suspense around the outlet) with per-route CSS links injected by scripts/prerender.mjs via the Vite manifest |
| ISS-520 | /evv-software/, /small-practice-ehr/ | Links | (Summary) Government links (medicaid.gov EVV page and PDF, qpp.cms.gov participation lookup) return 403 "Access Denied" to automated clients, including headless Chrome | Low | Blocked | Open each link in a normal browser to confirm it works |
