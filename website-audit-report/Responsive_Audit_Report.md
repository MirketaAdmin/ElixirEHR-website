# Responsive audit

**Date:** 11 Nov 2026

**Scope:**

- **Pages:** all 114 URLs.
- **Widths:** 9 widths: 360, 375, 390 and 414 (mobile); 768 (tablet); 1024, 1280, 1440 and 1920 (desktop).
- **Build:** local production build, headless Chrome. Mobile widths were emulated with touch.

**Checks per page and width:**

- horizontal page scrolling, with the elements that cause it
- text overflowing its own box
- media wider than the screen
- links and buttons smaller than 24×24 px (WCAG 2.2 target size)
- presence of the mobile menu below 1200 px
- visibility of the header "Request a Demo" CTA

## Results

| Width (px) | Pages with horizontal scroll (before → after) | Pages with text overflowing its box | Pages with touch targets < 24px |
|---:|---|---|---|
| 360 | 0 → 0 | 0 → 1 | 112 → 22 |
| 375 | 0 → 0 | 0 → 1 | 112 → 22 |
| 390 | 0 → 0 | 0 → 1 | 112 → 22 |
| 414 | 0 → 0 | 0 → 1 | 112 → 22 |
| 768 | 0 → 0 | 0 → 1 | 112 → 21 |
| 1024 | 0 → 0 | 3 → 2 | 0 → 0 |
| 1280 | 0 → 0 | 26 → 27 | 0 → 0 |
| 1440 | 0 → 0 | 26 → 27 | 0 → 0 |
| 1920 | 0 → 0 | 26 → 27 | 0 → 0 |

## Findings

- **No page scrolls sideways** at any of the 9 widths, before or after.
- **Fixed:**
  - The post CTA button overflowed its purple box at ~1024 px (e-book and release-note pages). The box now wraps.
  - The footer "Privacy Policy" / "Cookie settings" links were 20 px tall, and so were the posts' sidebar "View All …" links. They are now 24 px minimum.
  - Earlier in this session: Patient No-Show risk cards and signals table.
- **Checked and not a defect:**
  - **Mobile tables** (Care Management, SDOH, ONC Certified Module) collapse into cards. Their header row is visually hidden on purpose.
  - **Carousels** clip their off-screen slides. These are not page overflow.
- **Remaining small items (Low):**
  - Inline "Read More" / card links are 20 px tall inside larger cards.
  - A few labels ("ANSI CARC" tag on RCM, "Statutory" on Ambulatory, the Payer Policy H2) extend 16–23 px into their card's padding at some widths. They stay inside the card border.
  - Details are in sheet 9 of the workbook.

Screenshots were taken during the checks: patient-no-show cards and table at 390 and 1280; hero, contact and blog comparisons.
