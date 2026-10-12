# Elixir — Design System & Implementation Specification

Source of truth: the two Figma exports supplied —
**(A) Home page** (1280 × 8170 px) and **(B) "Elixir AI Design System" sheet** (1280 × 5031 px).
Both are 1× exports of a **1280 px-wide desktop frame** (verified: Knowledge-Base images are 361 × 224 in both the mock and `assets/Home/Knowledge Base/`).

### Confidence legend
| Tag | Meaning |
|---|---|
| **[DS]** | Stated explicitly on the Design System sheet (hex codes, font names, sizes). |
| **[M]** | Measured from the export at pixel level (±1–2 px). |
| **[E]** | Estimated from the raster (opacity, shadow blur, weight, line-height). **Confirm in Figma Inspect before final build.** |
| **[—]** | Not present in the design. Do not invent; requires a design decision. |

---

## 1. Global page width & container

| Token | Value | Tag |
|---|---|---|
| Design frame width | 1280 px | [M] |
| Container content width | **1152 px** (x = 64 → 1216) | [M] |
| Container side padding | **64 px** each side | [M] |
| Max-width | 1152 px content (1280 incl. padding). Background bands are full-bleed. | [M] |

Every section's content aligns to the 64 px gutters (logo, H1, card grids, footer, divider lines).

---

## 2. Header

| Property | Value | Tag |
|---|---|---|
| Height | **79 px** (y 0–78); logo/CTA row centred at y ≈ 38.5 | [M] |
| Background | `#493266` (Primary), solid, full-bleed | [M][DS] |
| Logo | White "elixir™" wordmark, **118 × 48 px**, left at x = 64, vertically centred | [M] |
| Nav items | Products · Solutions · The AI Engine · Platform · Resources · Company | [M] |
| Nav block | x 298 → 891, items vertically centred (text y 32–46) | [M] |
| Nav font | Roboto 16 px / Regular, `#FFFFFF` (≈ 90 % opacity) | [E] |
| Nav item gap | ≈ 32 px between labels | [M] |
| Active item | Text `#95C11F`, Semi-Bold (shown as "Active" on DS sheet) | [DS] |
| Search icon | Magnifier, 18 × 18 px, white, at x 1008 | [M] |
| CTA | "Request a Demo" — Primary button, **166 × 48 px**, at x 1050–1215 (right-aligned to container) | [M] |
| Search → CTA gap | ≈ 24 px | [M] |
| Shadow / border | None visible | [M] |
| Sticky behaviour | Sticky since 2026-10-08 (requested; not in a frame) — see "Header navigation build notes" |

DS sheet variant: the same nav bar is shown inside a rounded container (radius ≈ 16 px, 1086 × ~78 px). That is the sheet presentation; on the live page the header is full-bleed.

## 3. Navigation dropdown / mega-menu

**[—] Not in the design.** No dropdown, mega-menu, chevrons or open state appears in either export. No nav item shows a caret.
→ **Update (2026-10-08):** a mega menu and a mobile accordion were requested and built from the supplied navigation list using existing tokens only (no frame exists). See "Header navigation build notes".

Mobile menu (hamburger, drawer): **[—] not in the design.** Built on request (see the build notes).

---

## 4. Typography

### 4.1 Font families [DS]
| Role | Family |
|---|---|
| Headlines / structural | **Montserrat** |
| Body copy | **Roboto** |
| Labels / buttons / tight UI (DS sheet) | **Inter** |

✅ **Resolved during the Home build:** the non-Montserrat card titles are **Plus Jakarta Sans 500** (token `--font-title-alt`). The family was identified from its glyph shapes and confirmed by rendered-width matching: "Marcus Sterling" is 176 px in the mock and 176.4 px rendered. It is also used for the stat numbers. Still to be confirmed in Figma Inspect.
✅ Home-page buttons and nav are **Roboto** (Medium for most buttons, Bold for "See all Kratu AI capabilities" and "How Elixir work"). The DS sheet's Inter 14 Semi-Bold applies only to the sheet's button samples.

### 4.2 Type scale
| Style | Family | Size | Weight | Line-height | Letter-spacing | Used for | Tag |
|---|---|---|---|---|---|---|---|
| Display Large | Montserrat | **64 px** | Bold (700) | **70 px** | **−0.02em** | Hero H1 | [DS] size, [M] lh/ls |
| Headline Large | Montserrat | **48 px** | Bold (700) | 60 px (56 px in "Elixir Capabilities") | **−0.01em** | Section H2s, CTA card headings | [DS] size, [M] lh/ls |
| Stat number | **Plus Jakarta Sans** | **64 px** | Semi-Bold (600) | 72 px | normal | "84%", "$3533" | [M] glyph-box match |
| Headline Small | Montserrat | 24 px | **Bold (700)** | 32 px | normal | "Trusted by more than 1,200 Clinics Worldwide" | [M] |
| Card title (dark section) | Montserrat | 24 px | Medium (500) | 32 px | normal | Kratu capability cards | [E] |
| Card title (alt family, see ⚠) | ? | 24 px | Medium | 30–32 px | ≈ −0.2 px | Feature tabs, testimonial names, resource titles, Secure Data cards | [E] |
| Kratu feature title | Montserrat | 16–17 px | Bold (700) | 20 px | normal | "Clinical Notes from Audio" etc. | [E] |
| Section sub-heading | Montserrat | 18 px | Regular | 28 px | normal | "From the moment a patient walks in…" | [E] |
| Body Large | Roboto | **18 px** | Regular | ≈ 28–29 px | normal | Hero paragraph, intro paragraph, quotes | [DS] [M] |
| Body | Roboto | **16 px** | Regular | ≈ 24–26 px | normal | Feature descriptions, CTA paragraphs, sub-heads | [DS] |
| Body Small | Roboto | 14 px | Regular | ≈ 22–23 px | normal | Card descriptions, footer links, roles | [E] |
| Eyebrow | Roboto | 16 px | Regular | 24 px | 0 (title-case) / **≈ 1.6 px uppercase** for "OUR AI SOLUTIONS" | Section labels, `#95C11F` | [E] |
| Label Medium | Inter | **14 px** | **Semi-Bold (600)** | 20 px | ≈ 0.5 px | Buttons and tight UI | [DS] |
| Footer column heading | Roboto | 16 px | Regular/Medium, UPPERCASE | 24 px | ≈ 1 px | SOLUTIONS / RESOURCES / COMPANY | [E] |
| Tag / badge | Roboto/Inter | 11 px | Bold, UPPERCASE | 16 px | ≈ 1 px | ARTICLE / WEBINAR / RELEASE | [E] |
| Field label | Inter | 12–14 px | Semi-Bold, UPPERCASE ("FIRST NAME") or sentence case ("Default State") | 16–20 px | ≈ 0.5 px | Forms | [E] |
| Helper / error text | Roboto/Inter | 12 px | Regular | 16 px | normal | "This field is required." | [E] |

Font-size anchors used for measurement: Montserrat cap-height ≈ 0.70 em. Hero cap = 44 px → 64 px font; H2 cap = 33–35 px → 48 px font; "Trusted by…" cap = 17 px → 24 px font.

---

## 5. Brand colours [DS]

| Token | Name | Hex |
|---|---|---|
| `--color-primary` | Deep Purple | `#493266` |
| `--color-secondary` | Lime Green | `#95C11F` |
| `--color-tertiary` | Yellow | `#F2C60F` |
| `--color-surface-high` | Rose White (Surface Container High / BG) | `#F6F3F2` |
| `--color-surface-variant-dark` | Surface Variant (dark) | `#321B4F` |
| `--color-surface-variant-light` | Surface Variant (light) | `#ECDEEE` |
| `--color-border` | Stroke / Border | `#CCC4CF` |
| `--color-heading` | Headings | `#1F1823` |
| `--color-body` | Body / Para | `#444444` |
| `--color-error` | Error | `#BA1A1A` |
| `--gradient-brand` | Gradient | `#493266 → #710066` (left → right in the swatch) |
| `--color-white` | White | `#FFFFFF` |

Derived colours seen in the mock [M/E]:
| Use | Value |
|---|---|
| Hero base (left edge) | `#2E0152` |
| Error field fill | ≈ `#FFDAD6` (pink) |
| Error field text | ≈ `#93000A` / `#BA1A1A` |
| Lime tint pill ("EHR and more with AI") | ≈ `#EAF3D2` (Secondary @ ~20 %) |
| Dark-section card fill | ≈ `#3C2658` (white @ ~5 % on `#321B4F`) |
| Dark-section card border | white @ ≈ 8–10 % |
| Dark-section muted text | ≈ `#B5ABC1` (white @ ~60 %) |
| Inactive feature-tab text | ≈ `#A09D9C` |
| Footer link text | white @ ≈ 65 % |
| Footer copyright text | white @ ≈ 50 % |

## 6. Background colours by section (top → bottom) [M]

| # | Section | y-range | Height | Background |
|---|---|---|---|---|
| 0 | Header | 0–78 | 79 | `#493266` |
| 1 | Hero | 79–796 | 718 | Photo + purple overlay (`#2E0152` left, fading to translucent purple on the right) |
| 2 | Trusted by | 798–1083 | 286 | `#FFFFFF` |
| 3 | Kratu "Intelligence that doesn't just think" | 1084–2082 | 999 | `#F6F3F2` |
| 4 | Elixir intro | 2083–2713 | 631 | `#FFFFFF` |
| 5 | Kratu AI – Full Capabilities | 2716–3881 | 1166 | `#321B4F` |
| 6 | Elixir Understands Your Challenges (stats) | 3884–4542 | 659 | `#FFFFFF` |
| 7 | Elixir Capabilities (features) | 4543–5326 | 784 | `#F6F3F2` |
| 8 | Testimonials | 5327–6134 | 808 | `#FFFFFF` |
| 9 | Resources must be read | 6135–7019 | 885 | `#F6F3F2` |
| 10 | Dual CTA | 7020–7683 | 664 | `#FFFFFF` |
| 11 | Footer | 7685–8169 | 485 | `#493266` |

---

## 7. Buttons

All buttons are **pill-shaped** (`border-radius: 9999px`). [M]

### 7.1 Variants [DS]
| Variant | Fill | Text | Border | Emphasis |
|---|---|---|---|---|
| Primary | `#95C11F` | `#FFFFFF` | none | High |
| Secondary | `#F2C60F` | `#1F1823` (DS) / `#493266` (home CTA "How Elixir work") | none | Medium |
| Tertiary | `#493266` | `#FFFFFF` | none | High |
| Outline | transparent | `#493266` | 1 px `#493266` | Low |
| Ghost-on-dark (home only) | white @ ≈ 10 % | `#FFFFFF` | 1 px white @ ≈ 20 % | "Watch Product Tour" |

### 7.2 Sizes observed [M]
| Instance | W × H | Variant | Text |
|---|---|---|---|
| DS sheet sample | 158–180 × **36** | all | Inter 14 / 600, ≈ 24 px h-padding |
| Header "Request a Demo" | **166 × 48** | Primary | Roboto 16 / 500 |
| Hero "Watch Product Tour" | **239 × 58** | Ghost-on-dark + 22 px white play icon | Roboto 16 / 400–500 |
| Hero "Request a Demo" | **182 × 58** | Primary | Roboto 16 / 500 |
| "See all Kratu AI capabilities" | **278 × 64** | Tertiary | Roboto 16 / 700 |
| "Learn More About Elixir →" | **254 × 56** | Tertiary + 20 px arrow | Roboto 16 / 400–500 |
| "How Elixir work" | **175 × 48** | Secondary (text `#493266`) | Roboto 16 / 700 |
| "Schedule a demo today" | **231 × 48** | Tertiary | Roboto 16 / 400–500 |
| Footer "Request a Demo" | **151 × 36** | Primary | Roboto 15 / 500 |
| Testimonial arrows | **48 × 48** circle | white fill, 1 px `#CCC4CF`, 16 px chevron `#1F1823` | — |

Horizontal padding ≈ 24–32 px (widths are content-driven, not fixed). Hero buttons gap = **16 px**.
Width rule: `width: auto` with padding. Height scale: **36 / 48 / 56–58 / 64**.

### 7.3 Hover / focus / active
**[—] Not shown in the design.** No hover, pressed or disabled states exist in either export.
→ **Open question.** Proposal for approval only: darken the fill ~8 % on hover, with `transition: 150ms ease` and a 2 px focus ring in `#321B4F`.

### 7.4 Text links [M]
- "Read More →", "Watch Webinar ▸", "Read Whitepaper ⤓": Roboto 15 / 500, `#95C11F`, with a 12–14 px trailing icon and 8 px gap.
- "Hear Story": 20 px play-circle icon plus Roboto 16. On the purple card the icon and text are `#95C11F`; on the light card they are `#493266`.

---

## 8. Cards (dimensions measured at 1280 px)

| Card | Size (W × H) | Fill | Border | Radius | Padding | Notes | Tag |
|---|---|---|---|---|---|---|---|
| Kratu feature card (×6) | **335 × 131** | `#FFFFFF` | none | ≈ 16 | 20 px left, ~24 px vertical | 48 × 48 icon tile + 16 px gap + title/desc (max ≈ 200 px text width) | [M] |
| Kratu centre logo card | ≈ **300 × 188** | `#FFFFFF` | none | ≈ 32 | — | Soft drop shadow; "KRATU AI / — AI Intelligence —" lockup | [M][E] |
| Number badge 01–06 | **40 × 40** | `#95C11F` | — | ≈ 6 | — | White Montserrat 16 / 700 | [M] |
| Connector node | ≈ 18 px ring | `#95C11F` ring + dot | — | full | — | 1 px `#CCC4CF` connector lines to centre card | [M] |
| Secure Data card | **260 × 260** | `#F6F3F2` | 1 px ≈ `#E6E0E0` | ≈ 16 | 32 px | Shield icon 24 × 30 | [M] |
| Seamless Integration card | **260 × 260**, offset **+48 px** down | `#493266` | none | ≈ 16 | 32 px | Green network icon 36 × 35 | [M] |
| Kratu capability card (×6) | **368 × 342–374** (content height) | white @ ≈ 5 % on `#321B4F` | 1 px white @ ≈ 10 % | ≈ 16 | 32 px | 56 × 56 icon tile (white @ 10 %, r ≈ 8) with green icon; 16 px arrow top-right (white @ 40 %); pill "Powered by Kratu AI" ≈ 32 px h | [M][E] |
| Stat card (×4) | **264 × 300** | `#F6F3F2` | **4 px bottom bar**, alternating `#95C11F` / `#493266` | ≈ 16 | 32 px | 48 px white circle icon | [M] |
| Feature screenshot | ≈ **665 × 370** | image | — | ≈ 24 | — | Large soft shadow; asset `Features/…png` 810 × 530 includes the shadow | [M] |
| Testimonial card | **560 × 384** | Featured `#493266` / Default `#F6F3F2` | — | ≈ 24 | 48 px | 128 × 128 avatar (r ≈ 12; 2 px green border on the purple card) + 32 px gap; decorative "99" quote glyph top-right (≈ 90 px, white @ 10 % / purple @ 5 %) | [M] |
| Resource card | **362 × ≈ 446** | `#FFFFFF` | 1 px ≈ `#ECE8E8` | ≈ 16 | body 32 px | Image **361 × 224** on top; tag badge at 16 / 16 | [M] |
| CTA card | **560 × 464** | Left `#493266` + faint grid pattern / Right `#F6F3F2` | — | ≈ 24 | 48 px | 50 × 53 icon | [M] |
| Hero AI-insight card | **216 × 123** | `#95C11F` | — | ≈ 12 | 24 px | 36 px sparkle icon; "AI INSIGHT" Roboto 13 / 500 uppercase; text Roboto 15 / 500 `#1F1823` | [M] |
| DS Brand / Form cards | 560 wide | `#F6F3F2` or `#FFFFFF` + 1 px `#CCC4CF` | — | ≈ 12 | 32 px | Reference only | [M] |
| DS colour swatch (large) | 270 × 170 | — | 1 px `#CCC4CF` | ≈ 12 | 16 px | Reference only | [M] |
| DS colour swatch (small) | 151 × 118 | `#F6F3F2` | 1 px `#CCC4CF` | ≈ 8 | 16 px | Reference only | [M] |
| DS icon tile | 211 × ≈ 92 | `#F6F3F2` | 1 px `#CCC4CF` | ≈ 8 | — | Reference only | [M] |
| Side-nav panel (DS) | **380 × 476** | `#FFFFFF` | 1 px ≈ `#ECE8E8` | ≈ 12 | 24 px | — | [M] |

---

## 9. Section spacing [M]

Measured from the section edge to the first and last glyph. Subtract ~4–6 px of line-height leading to get the box padding.

| Section | Top padding | Bottom padding |
|---|---|---|
| Hero | content vertically centred in 718 px | — |
| Trusted by | **64 px** | **80 px** |
| Kratu "Intelligence…" | **80 px** | **80 px** |
| All other content sections (Intro, Capabilities, Stats, Features, Testimonials, CTA) | **100 px** | **100 px** |
| Resources | 100 px | ≈ 130 px |
| Footer | **80 px** | **32 px** |

Internal vertical rhythm [M]:
- Eyebrow → H2: ≈ 16 px
- H2 → sub-heading: ≈ 24 px
- Heading block → content grid: **64 px** (Capabilities, Stats, Testimonials, Resources)
- Kratu grid → CTA button: 40 px
- Resource tabs → cards: 64 px; heading → tabs: 40 px

## 10. Container padding
- Desktop: **64 px** left/right (see §1).
- Tablet/mobile: **[—] not specified** (see §18).

## 11. Grid / flex layouts [M]

| Section | Layout | Columns | Gap |
|---|---|---|---|
| Header | flex, space-between | logo · nav · search + CTA | nav ≈ 32 px |
| Hero | 2 columns | Text ≈ 580 px · media from x 656 (overlapping insight card) | — |
| Trusted logos | flex, `justify-content: space-between`, align centre | 7 logos across 1152 px | auto |
| Kratu diagram | 3 columns: 40 px badge + 16 + 335 card · centre 300 card · mirrored | 3 rows | row gap **32 px** (row pitch 163 px) |
| Elixir intro | 2 columns (≈ 500 px text · 2 cards from x 672) | — | cards gap **24 px** |
| Capabilities | CSS grid | **3** × 368 px | **24 px** col & row |
| Stats | CSS grid | **4** × 264 px | **32 px** |
| Features | 2 columns (≈ 390 px text · ≈ 665 px image from x 551) | — | ≈ 96 px |
| Testimonials | 2 cards × 560 px (carousel) | 2 visible | **32 px** |
| Resource tabs | flex, centred | 5 pills | **12 px** |
| Resource cards | CSS grid | **3** × ≈ 362 px | **32 px** |
| Dual CTA | 2 × 560 px | — | **32 px** |
| Footer top | brand column (≈ 290 px) + 3 link columns starting x 544 / 784 / 1024 | link columns **240 px** pitch | — |
| Footer bottom | flex, space-between | copyright · Privacy Policy · CTA | — |

## 12. Border-radius scale (consolidated) [M/E]

| Token | Value | Used by |
|---|---|---|
| `--radius-xs` | 6 px | Number badges, side-nav active item |
| `--radius-sm` | 8 px | Inputs, icon tiles on dark cards, small DS swatches |
| `--radius-md` | 12 px | Kratu icon tiles (48 px), hero image, insight card, avatars, side-nav panel |
| `--radius-lg` | 16 px | Standard cards (Kratu feature, capability, stat, resource, Secure Data) |
| `--radius-xl` | 24 px | Testimonial, CTA cards, feature screenshot |
| `--radius-2xl` | 32 px | Kratu centre logo card |
| `--radius-pill` | 9999 px | Buttons, badges, pills, tabs, circular icons |

⚠ Radii were fitted to anti-aliased curves (±2 px). Confirm exact values in Figma Inspect.

## 13. Shadows [E]

Only soft, low-contrast shadows appear. Exact blur and offset values can't be read from a raster.

| Element | Appearance | Starting proposal (confirm) |
|---|---|---|
| Kratu centre card | Soft, diffuse, all sides | `0 8px 32px rgba(73,50,102,.08)` |
| Feature screenshot | Large, soft, below | `0 24px 64px rgba(31,24,35,.12)` |
| Hero laptop image | Very subtle | `0 8px 24px rgba(0,0,0,.15)` |
| Hero insight card | Very subtle | `0 8px 24px rgba(0,0,0,.15)` |
| DS "Glassmorphism & AI" card | Inner white glow + 1 px `#CCC4CF` border | `inset 0 0 24px rgba(242,240,220,.6)` |
| All other cards and buttons | No visible shadow | `none` |

## 14. Icons [M]

- **Style:** line/outline (Material Symbols Rounded–like), ~2 px stroke, rounded joins. The DS sheet "Iconography" examples are Clinical (medical bag), Intelligence (head + gear), Data (database), Analytics (bar chart) and User (person). They use `#493266` at 24 px.
- **Sizes in use:** 16 px (arrows, meta icons), 18–20 px (nav search, play, doc), 24 px (standard), 36 px (insight sparkle, Seamless icon), 50 px (CTA icons).
- **Colour rules:** purple `#493266` on light surfaces; lime `#95C11F` on dark surfaces and inside dark tiles; white inside purple 48 px tiles (Kratu features).
- **Supplied assets** (`assets/Home/`):
  - `OUR AI SOLUTIONS/Icon (11–16).png`: capability icons, 20–28 px
  - `What Elixir Can Help You Avoid/Icon (17–20).png`: stat icons, 18–24 px
  - `section 3/Icon (9).png` (shield 24 × 30) and `Icon (10).png` (network 36 × 35)
  - `section 9/Icon (21).png` (50 × 53) and `Icon (22).png` (50 × 51): CTA icons
  - **Not supplied** (need export or an icon library): header search, play, arrows, chevrons, Kratu-feature icons (mic, doc, shield-check, calendar, chat), sparkle, user/calendar meta icons, YouTube/LinkedIn, DS iconography set.
- **PNG note:** icons are raster PNGs at 1×. Re-export as **SVG** (or at 2×) for crisp rendering on retina displays.

## 15. Images & aspect ratios [M]

| Image | Rendered size | Aspect | Asset (1×) |
|---|---|---|---|
| Hero background photo | 1280 × 718 (cover) | 16:9 | `Hero-banner/background-image.png` 1280 × 720 |
| Hero laptop/dashboard | **518 × 283**, r ≈ 12 | ≈ 1.83:1 | `Hero-banner/AB6…png` 550 × 300 (includes padding/shadow) |
| Trusted logos (×7) | heights ≈ 60–85 px, intrinsic widths | various | `Trusted by…/image 2–8.png` (89–178 px) |
| "ELIXIR" watermark | ≈ 333 × 90 behind the purple `elixir` wordmark | — | `section 3/ELIXIR.png` 333 × 90 |
| Purple "elixir" wordmark | ≈ 140 × 50 | — | **not supplied** |
| Feature dashboard screenshot | ≈ 665 × 370, r ≈ 24 | ≈ 1.8:1 | `Features/Background+Border+Shadow (1).png` 810 × 530 (shadow baked in) |
| Testimonial avatars | **128 × 128** (incl. 2 px border), r ≈ 12 | 1:1 | `Testimonials/*.png` 124 × 124 |
| Resource card images | **361 × 224**, top corners r ≈ 16 | ≈ 1.61:1 | `Knowledge Base/*.png` 361 × 224 |
| White "elixir™" logo (header/footer) | 118 × 48 | ≈ 2.46:1 | **not supplied as an asset** |
| KRATU AI lockup | ≈ 220 × 60 | — | **not supplied** |

All supplied rasters are 1×. **Request 2× exports** for retina.

## 16. Hero section [M]

| Property | Value |
|---|---|
| Height | **718 px** (y 80 → 797), full-bleed |
| Background | Photo (clinicians) + purple overlay; solid `#2E0152` at the left, fading to ≈ 60–70 % purple on the right |
| H1 | 4 lines, "The AI-Powered / **EHR** Built for / Modern / Healthcare Teams". Box x 64–643, y 198–454; "EHR" in `#95C11F`, rest `#FFFFFF`; Display Large 64 / ≈ 71 |
| Paragraph | 3 lines, x 64–563 (max-width ≈ 500 px), Roboto 18 / 28, white @ ≈ 85 %; 52 px below H1 |
| Buttons | Top at y 631, height 58; 53 px below paragraph; gap 16 px |
| Laptop image | x 697–1215, y 297–580 (518 × 283), right-aligned to container |
| AI-insight card | x 656–871, y 496–618 (216 × 123); overlaps the image's bottom-left corner by ≈ 41 px horizontally |
| Vertical alignment | Text column is vertically centred within the hero |

---

## 17. Footer [M]

| Part | Spec |
|---|---|
| Background | `#493266`, full-bleed, 485 px tall |
| Padding | 80 px top, 32 px bottom |
| Brand column | White logo 118 × 48 → 32 px → tagline "Empowering modern healthcare through intelligent automation and secure, cloud-native EHR solutions." (Roboto 16 / 24, white @ ≈ 70 %, max-width ≈ 290 px) → 32 px → social icons |
| Social icons | YouTube, LinkedIn: **40 × 40** circles, white @ ≈ 10 % fill, 16 px white glyph, 16 px gap |
| Link columns | **SOLUTIONS** (Electronic Health Records · Revenue Cycle Management · Telehealth · Patient Engagement), **RESOURCES** (Case Studies · Support Center · Documentation · Developer API), **COMPANY** (About Us · Careers · Contact · Partners) |
| Column x-positions | 544 / 784 / 1024 (240 px pitch) |
| Column heading | Roboto 16, UPPERCASE, ≈ 1 px tracking, `#FFFFFF`; 32 px to the first link |
| Links | Roboto 14, white @ ≈ 65 %, **36 px** row pitch |
| Divider | 1 px white @ ≈ 15 %, full container width, ≈ 80 px below the columns |
| Bottom bar | "© Copyright Elixir 2026. All Right Reserved. Designed and Developed by Mirketa" (Roboto 13, white @ ≈ 50 %) · "Privacy Policy" (same style, at x ≈ 739) · Primary button "Request a Demo" 151 × 36 right-aligned |

Copy is reproduced exactly from the design, including "All Right Reserved". Flag it to the content owner rather than changing it silently.

---

## 18. Responsive behaviour

**[—] Only a 1280 px desktop frame was supplied.** No tablet or mobile frames exist, so these values can't be determined from Figma.

Required before responsive build: tablet (≈ 768 px) and mobile (≈ 375–390 px) frames, or explicit approval of a fallback.

**Implemented technical fallback (not from design; it only prevents overflow and is not a mobile design).** Every rule sits in a clearly commented `@media` block at the end of its CSS module. Verified: no horizontal page overflow at 1440, 1280 (with a 15 px scrollbar), 1200, 1024, 768, 390 and 320 px.

| Width | What changes |
|---|---|
| ≥ 1200 px | Exactly as designed. Content is fluid up to 1152 px and centred above 1280 px. |
| ≤ 1199 px | Header: nav wraps to its own row and scrolls horizontally (no hamburger, which isn't designed). Hero, intro, features, testimonials and CTA stack. Kratu diagram → one column, connectors and nodes hidden. Capabilities, stats and resources → 2 columns. Logo strip wraps. Footer → 3 link columns with the brand column above. |
| ≤ 767 px | Container gutter 64 → 20 px. Display Large 64 → 36/40 px and Headline Large 48 → 32/40 px; the longest unbreakable lines otherwise overflow. Grids → 1 column. Fixed card heights become auto. |

Replace all of the above once tablet and mobile frames exist.

## 19. Reusable components

| Component | Variants / props | Appears in |
|---|---|---|
| `Container` | 1152 px max, 64 px gutters | All |
| `Header` / `NavBar` | items[], activeItem, CTA | Global |
| `Footer` | columns[], socials[], copyright, CTA | Global |
| `Button` | primary · secondary · tertiary · outline · ghost-dark; size 36 / 48 / 56 / 64; leading/trailing icon | Global |
| `TextLink` | colour (lime / purple), trailing icon (arrow / play / download) | Resources, Testimonials |
| `Eyebrow` | colour lime; case (title / uppercase-tracked) | Most sections |
| `SectionHeading` | eyebrow, title (48 px), subtitle, align left/centre, theme light/dark | Most sections |
| `Pill / Badge` | purple-solid ("Kratu AI – Powered by Elixir"), translucent-dark ("Powered by Kratu AI"), lime-tint ("EHR and more with AI"), yellow tag (ARTICLE/WEBINAR/RELEASE), outline chip (DS "Trustworthy · Precise · Advanced") | Several |
| `IconTile` | 48 px purple r 12 · 56 px translucent r 8 · 48 px white circle | Kratu, Capabilities, Stats |
| `Card` | surface light / white / purple / dark-translucent; radius lg / xl | Global |
| `TabPills` | items[], active | Resources |
| `CarouselArrows` | prev / next 48 px circles | Testimonials |
| `TestimonialCard` | featured (purple) / default (rose) | Testimonials |
| `ResourceCard` | tag, image, author, date, title, link label + icon | Resources |
| `StatCard` | icon, value, description, accent (lime / purple) | Stats |
| `CTACard` | dark / light, icon, title, text, button | Dual CTA |
| Form controls (DS) | TextInput (default / focus / error), Textarea, Checkbox, Radio, Label, HelperText | DS sheet (no form on Home) |
| `SideNav` (DS) | title, items[], active (lime fill, white text, r 6, 48 px h); items Inter 16 `#444` + 14 px doc icon, 56 px pitch | DS sheet ("Blogs Categories") |

### Form control spec (DS sheet) [M/E]
| State | Fill | Border | Text |
|---|---|---|---|
| Default | `#F6F3F2` | 1 px `#CCC4CF` | placeholder Roboto 16, `#444` @ ~70 % |
| Focus | `#F6F3F2` | **2 px `#321B4F`** | `#444` |
| Error | ≈ `#FFDAD6` | 1 px `#BA1A1A` | `#93000A`; helper 12 px `#BA1A1A` |

Input height: **42 px** (Forms section) vs **54 px** (Component Library section). Confirm which one is canonical. Radius ≈ 8, h-padding 16. Textarea ≈ 96 px tall. Checkbox 20 × 20 r 4; radio 20 px circle; both use the `#F6F3F2` fill + `#CCC4CF` border, with a 12 px label gap.

## 20. Page-specific components (Home)

1. **Hero:** split hero with overlapping AI-insight card.
2. **Trusted-by logo strip:** 7 client logos (Cannabis Card Orlando, Genomic Life, Bridges of Hope, Granite Recovery Centers, within, Alter Health Group, caremore Medical Supply).
3. **Kratu Intelligence diagram:** 6 numbered feature cards (01–03 left, 04–06 right, mirrored so the icon sits on the right for 04–06) wired by 1 px connectors with lime ring nodes to a central KRATU AI card. CTA "See all Kratu AI capabilities".
4. **Elixir intro:** watermark "ELIXIR" + purple wordmark, lime pill, paragraph, CTA, and two staggered value cards (second card offset 48 px down).
5. **Kratu AI Full Capabilities:** dark-section 3 × 2 glass cards.
6. **Challenges stats:** 4 stat cards with alternating accent bars.
7. **Elixir Capabilities:** vertical feature tabs (Patient View [active] · Inventory Management · Telehealth Integration) next to a dashboard screenshot. Active tab has a 2 px `#95C11F` left bar, purple title and dark body. Inactive tabs have a 2 px light-grey bar and grey text.
8. **Testimonials carousel:** 2 cards visible, plus prev/next.
9. **Resources:** filter tabs (Blog [active] · E-Book · Benchmark Survey · Release Notes · Webinar) and 3 resource cards.
10. **Dual CTA:** "Explore our AI-powered solution" (dark, yellow button) and "Get a personalized Elixir demo" (light, purple button).

## 21. Animations & interactions

**No animation specs exist in the export** (static frames only). The following are only *implied* by the UI:
| Element | Implied interaction | Defined? |
|---|---|---|
| Nav items | Active state = lime text | Active: yes · Hover: [—] |
| Feature tabs | Selecting a tab activates it (and probably swaps the screenshot) | Active/inactive: yes · Transition: [—] |
| Testimonials | Prev / next arrows paginate cards | Arrows: yes · Behaviour (slide / fade / loop / autoplay): [—] |
| Resource tabs | Filter cards by type | Active state: yes · Behaviour: [—] |
| Capability cards | Arrow icon suggests a whole-card link | Hover: [—] |
| "Watch Product Tour" / "Hear Story" | Play icon suggests a video (modal?) | [—] |
| Search icon | Opens search | [—] |
| Inputs | Focus and error states | Yes (DS §6) |
| Hover / scroll / entrance animations | — | [—] |

---

## Home build notes (2026-10-05)

**Verification method:** each section was rendered in headless Chrome at 1280 px and compared row by row and column by column against the Figma export. Final full-page diff: every section has a mean difference under 5 colour units, and 95th-percentile values are ≤ 19. The remaining difference is sub-pixel text anti-aliasing. The page is 8170 px tall, the same as the mock.

**Assets extracted from the Figma export (1×, flagged for replacement with official SVG/2× exports).** None was redrawn; each was un-composited from the export's flat background. Recomposite error ≤ 1.2 colour units, except the KRATU lockup (≤ 13.5 on a few edge pixels).
| Asset | Used in | Size |
|---|---|---|
| `brand/elixir-logo-white.png` | Header, footer | 118 × 48 |
| `home/platform-intro/elixir-wordmark-purple.png` | Elixir intro | 141 × 53 |
| `home/kratu-intelligence/kratu-ai-logo.png` | Kratu hub card | 222 × 59 |
| `home/kratu-intelligence/*-icon.png` (6) | Kratu feature cards | 24 × 24 |
| `icons/sparkle-dark.png`, `icons/sparkle-lime.png` | Hero insight card; Kratu badge and "Powered by" pills | 33², 17² |
| `icons/quote-mark.png` (mask) | Testimonial cards | 91 × 65 |
| `icons/meta-user.png`, `meta-calendar.png`, `link-arrow/play/download.png` | Resource cards | 9–14 px |
| `home/cta/cube-pattern.png` (67 × 100 repeating tile) | Dark CTA card texture | tile |

Material Icons geometry is used for search, arrow, play-circle, chevrons, YouTube and LinkedIn (`components/ui/Icon`). Each was checked against the mock's glyph position and size.

**Legacy asset names corrected:** two testimonial photos and two resource covers had swapped names. Each file now matches the card it appears on (verified by pixel diff).

**Values derived from the export rather than tokens:** the hero background composite (grey base, 40 % photo, `#8C62C6` multiply, `#2E0152` gradient with fitted stops), fixed per-card heights (capabilities 365/374/342; testimonials 385; CTA 465), per-section paddings of 98–101 px, and the 1 px Primary frame strokes on the hero and capabilities sections.

## About Us build notes (2026-10-05)

**Source:** a 1296 × 4963 export. The first 16 px are a black strip outside the frame, so the 1280-wide frame runs from x = 16 to 1295. The header and footer are pixel-identical to Home. The About hero starts 1 px higher than Home's (Home has a 1 px hero stroke on that row), which is handled by `margin-top: -1px` on the About hero only.

**Verification:** each section was rendered at 1280 px and compared with the export. All 8 section bands match exactly (78 / 616 / 615 / 768 / 1180 / 344 / 877 / 485 px). Per-section mean pixel diff is 0.6–3.1 (p95 ≤ 6). Home was re-checked afterwards and is pixel-identical to the approved build.

**Page-specific values (scoped to About Us, not global):**
| Value | Where |
|---|---|
| H1 Montserrat 700 48 / 72, letter-spacing +0.01em | Hero (Home's Display Large is 64 px) |
| Breadcrumb Inter 500/700 14, 1 px tracking | Hero |
| Primary button 53 px tall, Inter 600 14 with 0.05em tracking | Hero "Take A Test Drive" |
| H2 line-height 56 | Mission (same as Home "Elixir Capabilities") |
| Form card radius 32, 48 px padding; inputs 54 px, radius 8, `#F6F3F2` / `#CCC4CF` | Contact |

**Assets extracted from the About Us export (no About Us assets were supplied).** All are 1× and should be replaced with original exports:
| Asset | Notes |
|---|---|
| `about/hero-card.png` (476²) | Includes the translucent frame. The lime badge is rendered in HTML over it. |
| `about/our-story-team.png` (542 × 305) | Photo inside its 1 px border. The badge is rendered in HTML. |
| `about/mission-facility.png` (536²) | Baked-in caption text was removed by vertical interpolation, and the caption is rendered in HTML on top. Needs the original image. |
| `about/team/*.png` (264 × 330, 7 files) | "Clint Cassel" appears twice in the design with an identical photo, so one file is used. |
| `about/cloud-native-icon.png`, `about/ai-driven-icon.png` | `#4D6700` outline icons |
| `icons/sparkle-white.png`, `icons/contact-mail/phone/location.png` | Badge and contact icons |
Trusted-by logos reuse the existing Home assets at 72 % scale.

## What Is Elixir build notes (2026-10-05)

**Source:** a 1280 × 5858 export. The header and footer are pixel-identical to the other pages. Three sections repeat earlier pages and were promoted to shared components rather than duplicated: the hero layout (`PageHero`), "Kratu AI - Full Capabilities" (`AiCapabilitiesSection`) and "Contact Us" (`ContactSection`). The CTA band is `CtaBanner`, generalised from About Us. After the refactor, About Us renders pixel-identical and Home differs only in the corrected pill fill described below.

**Verification:** all section bands match the export exactly (78 / 616 / 757 / 1169–1170 / 839 / 655 / 381 / 877 / 485). Per-section mean diff is 1.8–5.5. The shared capabilities band is 1 px taller than in this frame (Home's frame is 1 px taller than this one); the next section absorbs the difference.

**Frame-specific values (scoped to this page):**
| Value | Where |
|---|---|
| H2 letter-spacing **0** (Home/About use −0.01em), measured on all five H2s | All new sections and the CTA band |
| Eyebrow Inter 600 14 uppercase with **different tracking per section**: 0.2em, 0.1em, 0.05em (measured 232 / 205 / 193 px) | Modular, Possibilities, CRM |
| Modular cards: 1 px `#CCC4CF` border, radius 24, description box reserves 5 lines (130 px) | Modular Solutions |
| CRM icon tiles 48×55, 55×55 and 45×55 (they differ per card), radius 22 | Leverage the World's #1 CRM |
| CTA band button 258×68 with 48 px padding; no description | CTA band |

**Shared fix:** the "Powered by Kratu AI" pill fill is `#594671` (white 15 %) in both the Home and What Is Elixir frames. It was white 10 %, and has been corrected in the shared component, so this also brings Home's pills into line with its mock.

**Assets extracted from the export** (none were supplied): `what-is-elixir/hero-card.png` (476²), 4 module icons, 8 feature icons, 3 CRM tile glyphs, and `icons/check-circle-olive.png`. All are 1×; replace them with original SVG/2× exports.

## Why Elixir build notes (2026-10-05)

**Source:** a 1280 × 5082 export. The header and footer are identical to the other pages. Shared components reused: `PageHero` (extended with an optional `media` column, an optional secondary CTA and CSS-variable hooks), `AiCapabilitiesSection`, and `CtaBanner` (extended with an optional `secondaryCta`). After these extensions, Home, About Us and What Is Elixir render pixel-identical to their approved builds.

**Verification:** all section bands match the export (78 / 616 / 1462 / 1169–1170 / 797 / 474 / 485). Per-section mean diff is 2.0–5.3; Solutions and CTA have p95 ≤ 1.

**Frame-specific values (scoped to this page):**
| Value | Where |
|---|---|
| Hero: 536×476 media box; 504×384 framed photo; white 204×148 "Efficiency Gain" stat card (radius 16); paragraph width 590 px; no −1 px text offset | Hero (`WhyHeroMedia`, `WhyElixir.module.css`) |
| H2 Montserrat 700 **36 px**/44 with no tracking; eyebrow = shared Roboto 16 caps style | Pillars, Healthcare Solutions (`WhySectionHeading`) |
| Bento grid: 3 columns, fixed rows 378 / 304 / 384, gap 32; card radius 12; card 1 padding 40; label Inter 600 16; card title Montserrat 600 16 | Pillars |
| Card titles Roboto **700 24**/32 purple; 64 px `#F7EAFA` icon tile | Healthcare Solutions |
| CTA H2 letter-spacing **−3 px** (748 px line measured); two 64 px buttons, the secondary with a 1 px white outline | CTA band |

**Assets extracted from the export** (none were supplied): `why-elixir/hero-card.png`, `patient-touchpoints.png` (319×296), `admissions-dashboard.png` (330×238), `nurse-avatars.png` (68×36), `dictation-waveform.png`, 2 admissions tool icons, 3 solution icons, plus `icons/trending-up-dark.png` and `icons/check-circle-lime.png`. All are 1×.

## Electronic Health Record build notes (2026-10-05)

**Source:** a 1280 × 6777 export. The header and footer are identical to the other pages. Shared components reused: `PageHero` (extended with `titleAccent` and description size/leading/gap CSS variables), `AiCapabilitiesSection` and `CtaBanner`. Page-local sections: `EhrHeroMedia`, `OrderFromChaosSection`, `FeatureSplitSection` (×4), `InfoCardsSection` and `IntegrationPortfolioSection`.

**Verification:** the full-page render is the same height as the export (6777 px). Every section band and text row lines up with the export. Full-page mean diff is 3.3 and p95 is 3. Home, About Us, What Is Elixir and Why Elixir re-render pixel-identical to their approved builds.

**Frame-specific values (scoped to this page):**
| Value | Where |
|---|---|
| Hero paragraph Roboto 18/28; accent on "(EHR)" only; 504×476 media with the frosted "AI INSIGHT" card baked into the image and its text live | Hero |
| H2 Montserrat 700 48/56 at **−0.025em** (565 px measured); 96 px tiles `#F5F4F6` with 1 px white border, radius 12, shadow `0 2px 5px rgb(0 0 0 / 0.14)`; titles Montserrat 700 20 caps +0.5 px `#321B4F`; body Montserrat 400 16/26; 48×6 lime bar; paragraphs sit 3 px left of the column centre | Bringing order to chaos |
| H2 Montserrat 700 48/**56** at −0.01em; body Roboto 18/28; 452 px photo column + 552 px text column; per-band padding 58 / 80 / 80 / 53–52 | Feature splits |
| Cards 552 wide, radius 24, padding 40 (41 bottom); title Montserrat 600 32/40 | Info cards |
| H2 Montserrat 600 32/40 `#321B4F`; items Montserrat 700 24 `#625D65`, 12 px icon gap, 64 px item gap | Integration portfolio |
| CTA H2 −3 px tracking, description max-width 760, single **66 px**-tall button | CTA band |

**Assets extracted from the export** (none were supplied): `electronic-health-record/hero-media.png` (504×528), four feature images with their tilted backdrops (504×455 each), four 36 px tile icons and four integration icons. All are 1×.

**Link wiring:** the footer's "Electronic Health Records" link now points to `/electronic-health-record`. Before this it went to a placeholder route. This changes the link target only; the footer looks the same.

## Revenue Cycle Management build notes (2026-10-06)

**Source:** a 1280 × 15375 export. The header and footer are the shared components, unchanged (the header differs from the export only by sub-pixel nav text rendering). Shared components reused: `PageHero` and `CtaBanner`. `PageHero` gained two backward-compatible options: `primaryCta` is now optional (this hero has no buttons) and `titleAccent` accepts one phrase per line (the yellow "Healthcare Revenue Cycle" spans two lines). Page-local helpers live in `pages/RevenueCycleManagement/components/`: `RcmBadge` (label pill) and `CheckList` (lime check-circle list). `RichText` and `ImagePlaceholder` started here and moved to `components/ui/` when Eligibility Verification reused them; the hero media likewise became the shared `TiltedHeroMedia`.

**Verification:** each of the 17 sections was built and compared one at a time. Every section boundary in the 1280px render falls on the same y as the export (78 / 616 / 661 / 661 / 683 / 705 / 845 / 735 / 1278 / 1182 / 1244 / 797 / 612 / 672 / 1217 / 997 / 1492 / 414 / 485). Full-page mean diff is 4.9; the largest remainders are glyph anti-aliasing in large type and the placeholder card's font. Home, About Us, What Is Elixir, Why Elixir and EHR render pixel-identical to their approved builds.

**Frame-specific values (scoped to this page):**
| Value | Where |
|---|---|
| H2s are Montserrat 700 **36px** (line-height 40–61 per section, as measured); appeals sub-heading 30px; "Built for Revenue Cycle Teams" 24px `#321B4F` | All sections |
| Label pills 24px tall, Inter 700 12 caps; neutral `#E5E0E4`, lime, lavender `#F1E4F4` (text `#493266`, or `#321B4F` on "Active Resolution") | Section badges |
| Muted text on dark bands is `#CCC4CF` (the border token); journey copy is `#ECDEEE` | Dark sections |
| Patient-journey stage colours `#95C11F` / `#FDEFFF` / `#B89CD8` / `#F2C60F`, card `#40295D`, 4px top bar | Patient journey |
| Several cards use the frame's fixed heights instead of content heights: Salesforce cards 181/201, AI capability cards 267/287/307 and 291/271/291, appeal cards 227/247/207 | Salesforce, AI, Appeals |
| Copy with hard line breaks in the frame is kept (`\n` or line arrays in `data/revenueCycleManagement.js`); the `\n` breaks (multi-payer list, teams, AI cards) collapse below 768px | Claim forms, appeals, teams, AI cards, multi-payer list |
| The payer-workflow text column is 580px and runs 25px past the container at 1280, as in the frame | Payer workflow |

**Assets extracted from the export (none were supplied).** All are 1× and should be replaced with original exports: `revenue-cycle-management/hero-media.png` (photo with tilted backdrop, 511×507), four product screenshots (`cms-1500-form`, `ub-04-form`, `claim-validation-errors`, `clearinghouse-rejections`, `era-payment-posting`) and 18 small icons (badge glyphs, check/x circles, ERA and workflow card icons).

**Placeholders in the frame:** four "Generic image placeholder — Lifestyle photograph: revenue cycle team at work…" cards (Unified RCM, Payer workflow, Denials, Multi-payer). They are reproduced as designed by `ImagePlaceholder`; their text uses Plus Jakarta Sans / Roboto because the export's Source Sans-style face is not loaded.

**Links:** the intro paragraph's highlighted phrases link to the matching sections on the page (`#eligibility-verification`, `#payer-workflow-management`, `#medical-claims-management`, `#era-payment-posting`); "Explore RCM Workflows" → `#rcm-workflows`; "integrated EHR and RCM software" → `/electronic-health-record`; "Request an Elixir Demo" and "Take A Test Drive" → `/request-demo`; "Contact Sales" → `/company/contact`. The footer's "Revenue Cycle Management" link now points at `/revenue-cycle-management`.

## Eligibility Verification build notes (2026-10-06)

**Source:** a 1280 × 8304 export. The header and footer are the shared components, unchanged (the header is pixel-identical to the RCM export's). Shared components reused: `PageHero`, `TiltedHeroMedia` (promoted from the RCM page: the hero photo frame has identical geometry), `CtaBanner`, `ImagePlaceholder` and `RichText` (both promoted from the RCM page to `components/ui/`). `PageHero` gained three optional CSS-variable hooks with unchanged defaults (`--page-hero-padding`, `--page-hero-primary-height`, `--page-hero-primary-size`), and its secondary button now accepts `href` as well as `to`. After the refactor, RCM renders pixel-identical to its approved build.

**Verification:** the 12 sections were built and compared one at a time. Every section boundary falls on the export's y (78 / 616 / 699 / 518 / 1043 / 603 / 684 / 612 / 573 / 700 / 872 / 427 / 390 / 485, ±1 px on blended boundary rows). Full-page mean diff is 3.7; every section's p95 is ≤ 30. Home, About Us, What Is Elixir, Why Elixir, EHR and RCM render pixel-identical to their approved builds.

**Frame-specific values (scoped to this page):**
| Value | Where |
|---|---|
| Hero: 61.5px vertical padding, 570px description, 58px primary button with a 16px label; "See how it works" → `#how-it-works` | Hero |
| H2s are Montserrat 700 36px in `#321B4F` on light bands (white on dark), line-height 39–56 as measured | All sections |
| Filled lime check icons: 24px with a white tick (Montserrat 600 labels) or a dark tick (Roboto 500 labels); 32px in the buyer checklist | Check lists |
| Stat cards 368×229 `#493266`, value Montserrat 700 40px lime, label Montserrat 600 18/28; description `#B89CD8` | Stats band |
| Capability rows are fixed at 336 / 288px (taller than their content); tiles 48px `#F1E4F4`, radius 8 | Capabilities |
| Bulk cards: 1px `#CCC4CF` border, tiles `#EEDBFF` / lime, code strip `#F7EAFA` with Courier New 12px | Bulk EDI |
| Some descriptions run into the card's right inset in the frame (how-it-works steps, buyer checklist), kept with negative margins / no right padding | Steps, checklist |
| The 461px square placeholder in "Stop Claim Denials" has smaller copy set 80px from the top | Front desk |

**Assets extracted from the export (none were supplied).** All are 1× and should be replaced with original exports: `eligibility-verification/hero-media.png` (511×507, photo with tilted backdrop), `insurance-details-panel.png` (298×464 screenshot), three check icons, three stat icons, six capability icons, two bulk-card icons and six care-setting icons.

**Placeholders in the frame:** three "Generic image placeholder" cards (Stop Claim Denials 461×461, Clearinghouse 552×300, Verification of Benefits 552×300), reproduced as designed.

**Links:** "Take A Test Drive" (hero and CTA band) → `/request-demo`; "See how it works" → `#how-it-works`; "Contact Sales" → `/company/contact`. The frame contains no other links; "patient insurance eligibility verification" and "healthcare clearinghouse" are emphasised text only. No navigation or footer entry points to this page in the design.

## Treatment Center Solutions build notes (2026-10-06)

**Source:** a 1280 × 5127 export. The header and footer are the shared components, unchanged (both pixel-identical to the export). Shared components reused: `PageHero` (default spacing; only the 16px primary label hook), `TiltedHeroMedia` (same photo-frame geometry as RCM and Eligibility Verification), `RichText` and `CtaBanner` (the "Take The next Step" band is the About Us band; it renders identically to the export with the default styles). Page-local: `IconFeatureGrid` (icon + label + 32×4 yellow bar), used by three bands.

**Verification:** the 8 sections were built and compared one at a time. Every section boundary falls on the export's y (78 / 616 / 600 incl. 1px borders / 432 / 740 / 620 / 564 / 648 / 344 / 485). Full-page mean diff is 2.3; every section's p95 is ≤ 4. Home, About Us, What Is Elixir, Why Elixir, EHR, RCM and Eligibility Verification render pixel-identical to their approved builds.

**Frame-specific values (scoped to this page):**
| Value | Where |
|---|---|
| H2s are Montserrat **800** 48px (line-height 60 measured). Weight 800 was added to the Montserrat request in `index.html`; no other page uses it, and every other page renders unchanged | All sections |
| Intake band: 1px `#CCC4CF` top and bottom borders; photo 560×438, radius 32; "Bed Management Suite" text (Montserrat 600 24px, Roboto 16/24) rendered over the frosted card baked into the photo | Patient Flow |
| Icon/label/bar items: icons top-aligned, labels Montserrat 600 18/28, 16px gaps; 6 × 197px columns (intake band) and 4 × 296px columns (gradient and financial bands), both centred and slightly wider than the 1152px container | Feature bands |
| Gradient band: `linear-gradient(161deg, #493266, #710066)` (the brand gradient, measured at the corners) | Integrated EHR Features |
| 2×2 EHR cards 260px wide, rows 158 / 134px (frame heights), 1px `#CCC4CF` border, radius 12; photo frame `#F6F3F2` radius 24 with 24px padding | EHR Built for Clinical Excellence |
| Financial cards 363×198 `#F6F3F2` radius 24 with 64px `#493266` icon circles | Financial Performance |

**Assets extracted from the export (none were supplied).** All are 1×: `treatment-center-solutions/hero-media.png`, `intake-photo.png` (card text removed by inpainting), `ehr-clinician.png`, and 30 icons (bed, 6 intake, 4 EHR card, 8 EHR feature, 3 financial, 8 financial feature).

**Links:** "Request Demo" → `/request-demo`; "Contact Us Now" → `/company/contact` (About Us's identical band scrolls to its own contact form, which this page does not have). No other links are in the frame.

## Contact Us build notes (2026-10-06)

**Source:** a 1360 × 2548 export: a 1280px frame plus an 80px export strip on the right (ignored). The header and footer are the shared components, unchanged. The hero is the shared `PageHero` with its default framed image and lime "AI Insights Active" badge (same geometry as About Us; default spacing). The form is the existing approved contact form: `ContactForm` was moved out of `ContactSection` into its own file (same markup, same `contactService` submission) so this page can reuse it. It gained an optional `intro` slot and four CSS-variable hooks whose defaults are the old values; About Us and What Is Elixir render pixel-identical afterwards.

**Verification:** each section was built and compared one at a time. Every section boundary falls on the export's y (78 / 616 / 1033 / 336 / 485). Full-page mean diff is 2.5; every section's p95 is ≤ 9. All existing pages render pixel-identical to their approved builds.

**Frame-specific values (scoped to this page):**
| Value | Where |
|---|---|
| Form card 544 × 833, white fill, 24px field row gap, 8px label gap, 47px before the button; "Request A Demo" Montserrat 700 30/36 and Roboto 16/26 intro inside the card | Form |
| Dashboard photo 528 × 296 (radius 20) in an 8px white frame (radius 28); lime insight card 217 × 125 overhanging by 39px, Roboto 12/14 in `#526D00` | Why Elixir AI panel |
| Feature icons in olive `#4D6700` (not the Home purple/lime versions) | Secure Data, Seamless Integration |
| Trusted-by strip reuses `contact.logos` (the shared Contact section's logos at 72%), spread across 544px | Trusted by |
| Testimonial band: 120px portrait in a 4px yellow ring, quote Roboto 24/32, name Montserrat 700 18 lime | Testimonial |

**Assets extracted from the export:** `contact-us/hero-card.png` (476², the badge is live), `dashboard-laptop.png` (528 × 296; the insight card's corner is baked into it and the live card always covers it), `testimonial-dr-jen-jhone.png` (120², a different portrait from Home's), `icon-sparkle.png`, `icon-secure-data.png`, `icon-seamless-integration.png`. Reused: the five trusted-by logos and the testimonial name, role and quote (from Home's approved content, with the frame's typographic apostrophes).

**Links:** "Take A Test Drive" → `/request-demo`, "Explore Capabilities" → `/platform` (as on About Us), "Privacy Policy" → `/privacy-policy` (shared form).

## Press Releases build notes (2026-10-06)

**Source:** a 1280 × 2663 export (`/press-releases`). There is no frame for the detail page. The header and footer are the shared components, unchanged. The hero is the shared `PageHero` with a custom `media` column (a 504 × 384 photo with its frame baked in), a 73px title line-height and a 23px description gap. The listing (search, "Filter by Year" date range, "Top News" featured release, three-column card grid and pagination) is page-local under `pages/PressReleases/`.

**Data and behaviour:** every item comes from the posts registry (`src/posts/press-release/`, see the Post template build notes). Nothing on the page is hand-ordered.
- **Sorting.** Releases sort by ISO date, newest first.
- **Top News.** The newest release matching the current filters is "Top News" on page 1. The rest fill the grid, 3 per page.
- **Search.** Live and case-insensitive, across title, excerpt and category.
- **Date range.** Applied with the Apply button or Enter. Inclusive, open-ended on either side, and swapped if reversed. Invalid dates such as 13/45 or 02/30 block submission with a validation message.
- **Pagination.** Any change to search or dates resets to page 1. Changing page scrolls back to the filter bar.
- **Empty state.** When nothing matches, the page shows "No press releases found." and a screen-reader status announces the result count.

The date fields are a text input that reads `mm/dd/yyyy` in every locale, as in the frame (the native date input showed the OS format). Clicking one opens the browser's date picker.

**Verification:** each section was compared at 1280px. Every section boundary falls on the export's y. Full-page mean diff is 2.5 (p95 2). Filter-bar pills, the featured card and the card grid land on the frame's x positions to the pixel. All existing pages render pixel-identical to their approved builds.

**Frame-specific values (scoped to this page):**
| Value | Where |
|---|---|
| Filter bar 88px tall, radius 20, `#493266`; search pill 496 × 48; date pills 177 × 40; Apply 40px lime | Filters |
| Featured: 20px rose-white frame (radius 32) around a 627px image and a 48px-padded body; "Top News" lime pill (Inter 700 13 caps); "Read Full Article" 56px yellow pill | Top News |
| Cards: 361 × 224 image, category badge 36px (Inter 500 14) in purple, yellow or lime by category; date `#7B757F`; title Montserrat 700 18/22 `#321B4F`; "Read More" lime | Grid |
| Pagination: 26px outlined arrows, 40px page circles, current page lime | Pagination |

**Assets extracted from the export:** `press-releases/hero-card.png`, `patient-no-show-ai-feature.png` (627 × 460), and three 361 × 224 card photos. The card photos have the category badge baked in under the live badge (see open question 37).

**Detail page:** superseded by the shared post template; releases now open at `/press-release/<slug>` (see the Post template build notes). Old `/press-releases/<slug>` URLs redirect there.

**Links:** "Explore Our Platform" → `/platform`. "Read Full Article" and "Read More" → `/press-release/<slug>`.

## Post template build notes (2026-10-06)

**Source:** a 1280 × 3092 export of a press-release detail page, used as the template for every post type (blog, press release, case study, release note, e-book, webinar). The header and footer are the shared components, unchanged. Every section boundary lands on the export's y. Full-page mean diff is 4.75; the hero's p95 is 1, and the article column matches row for row within 1px. Most of the remaining difference is the sidebar's "Latest Press Releases" list, which shows real releases rather than the frame's three (see question 43).

**Structure:**
- **Hero:** dark band with two breadcrumb lines (type trail, then the full trail), the H1, and meta pills (location, date, then any `author` / `details`).
- **Article (757px):** hero image, lead, body blocks, About, share row.
- **Sidebar (363px):** media contact card, latest posts of the type, Categories tags.
- **Empty sections:** sections without data are omitted, e.g. no media card for a blog, no latest list when a type has a single post.

**Frame-specific values (scoped to the post components):**
| Value | Where |
|---|---|
| Hero 69/70px padding; breadcrumbs as PageHero, bold crumb tracked 1.17px; H1 Montserrat 700 48/55, max 800px; pills 42px, white 10% fill, 20% border, Inter 16 | PostHero |
| Hero image 757 × 324, radius 24, `0 12px 30px` 25% shadow, 48px below | Template |
| Lead Roboto 20/32.5 (text box 5px wider than the column, as in the frame); body 16/24; blocks 24px apart | PostContent |
| Key Benefits panel: surface fill, radius 24, inset lime 10% glow, Montserrat 700 24/32 `#321B4F` title; Roboto 700 items with 500 purple lead-ins | PostContent |
| Quote: 4px lime rule, Roboto 500 20/28 purple; CTA panel `#493266`, radius 16, Montserrat 700 30/36, Roboto 18/28 at 70% white, 60px yellow button | PostContent |
| Sidebar: 40px between sections; media card radius 24, padding 32; latest titles Roboto 700 16/22 `#493266`; tags 30px, lime border, `#F4F9E9` fill, wrapped at 300px | PostSidebar |
| Share row: 1px `#CCC4CF` rule 64px below About; Inter 600 14 caps, 1.5px tracking; 40px outlined circles | PostShare |

**Assets extracted from the export:** `posts/press-release/elixir-launches-patient-no-show-ai-feature/hero.png` (757 × 324), plus icons `post-location`, `post-calendar`, `post-key-benefits`, `post-benefit-check`, `post-mail`, `post-phone`, `post-arrow`, `post-share` and `post-link`. The existing contact icons are drawn at other sizes, so they weren't reused.

**Links:**
- "Elixir" in the lead → `/`.
- "Claim Your Discount" → `/contact-us`; the frame gives no destination.
- Type breadcrumb and "View All Press Releases" → `/press-releases`.
- Latest items → their `/press-release/<slug>`.
- Email → `mailto:`, phone → `tel:`.

## FAQ section build notes (2026-10-06)

**Source:** an FAQ screenshot (a 492 × 346 capture, about 0.39× of the 1280px frame) plus the 16 questions and answers supplied with it. It redesigns the RCM FAQ from one 896px column into two columns. The page-local `RcmFaqSection` was replaced by the shared `components/sections/FaqSection`, which is now the standard FAQ for the whole site. Pages pass `{ title, description, items }` from their `data/` file.

**Matched to the screenshot:**
- **Columns:** two independent 568px stacks with a 16px gutter inside the 1152px container. The first half of the items goes left, the second half right, and a taller card only pushes its own column.
- **Cards:** white, radius 12, 12px apart. One-line cards are 64px and two-line cards 88px (22/18px vertical padding, text 2px low as in the frame).
- **Text and chevron:** questions Montserrat 700 16/24 `#493266`, 20px left inset. The down chevron sits 14px from the right.
- **Title and description:** unchanged from the approved RCM frame (36/44 and 16/24, 56px above the cards).
- **Result:** fitted at the screenshot's scale, the mean diff is 4.

**Open state (not shown in the screenshot; conventional pattern):**
- The whole question row is the button. The answer opens inside the same card (Roboto 16/24 body colour, 20px side and bottom padding) and the chevron points up.
- Items open and close independently.
- Height eases over 200ms (none with reduced motion). Closed answers are `visibility: hidden`, so they're out of the tab order and the accessibility tree.

**Accessibility:**
- Section title is an h2; each question is a `<button>` inside an h3.
- Buttons carry `aria-expanded` and `aria-controls`; answers are labelled regions with `useId`-based unique IDs.
- Enter and Space toggle, and the global focus-visible outline applies.

**Responsive (no tablet or mobile frames):** one column below 1024px; title 28/36 below 768px.

**Effect on RCM:** everything above and below the FAQ renders pixel-identical; the section itself is 908px tall instead of 1492px.

## Home motion and interaction update (2026-10-07)

Requested section by section. The Hero is untouched and renders pixel-identical. Every animation uses transform or opacity (the Kratu lights use `offset-distance`), and each stops or settles to a static state under `prefers-reduced-motion`.

| Section | Change |
|---|---|
| Trusted by | Logos scroll in a seamless loop (`Marquee`, 45s per loop, set by `trustedBy.marqueeDuration`) with soft edge fades; pauses on hover; same 114px strip |
| Kratu AI | A small lime light runs from each card's node along its connector into the hub, staggered across the six connectors (desktop only, where the connectors exist) |
| EHR and more with AI | The Secure Data and Seamless Integration cards float 8px, half a cycle apart (7s) |
| Our AI Solutions | Home passes `glow` to the shared `AiCapabilitiesSection`: all six cards are one size at every breakpoint (rows ≥374px, 1fr), titles reserve two lines, and `BorderGlow` lights the edge nearest the pointer, with one sweep on scroll-in. The section is 9px taller than the frame (rows were 365/374px). Other pages render the section exactly as before |
| What Elixir Can Help You Avoid | A soft light travels along each card's 4px accent strip (7s, staggered); colours and sizes unchanged |
| Features | Features are tabs, and the right side shows the active feature's image with a cross-fade and slight lift. Auto-rotation every 6s (`features.rotationSeconds`), shown by the active bar filling. A click restarts the timer from that feature; hover or focus pauses it. Arrow keys move between tabs |
| Testimonials | Data-driven carousel: two cards per view on desktop, one below 1200px, one card per step. Arrows and autoplay (7s, `testimonials.autoplaySeconds`) wrap around; paused on hover or focus; off-screen cards are `inert`. One demo testimonial was added (initials instead of a photo, no story link) |
| Knowledge Base | The five categories are tabs (arrow, Home and End keys), each showing three cards in the one shared card design. New cards fade in. Blog keeps the frame's cards; the other categories hold demo cards |

The JS bundle crossed Vite's 500 kB warning, so React and the router now build as a separate long-cached `vendor` chunk (`vite.config.js`).

## Denial Management build notes (2026-10-07)

**Source:** a 1280 × 7693 export (`/denial-management`). The header and footer are the shared components, unchanged. Each section was built and compared one at a time; every section boundary falls on the export's y. Full-page mean diff is 3.9 (p95 4); all other pages render pixel-identical.

| Section | Implementation |
|---|---|
| Hero | Shared `PageHero` (all-white title, Roboto 18/28 description) + `TiltedHeroMedia`. The CTA has a leading calendar icon: `PageHero` gained an optional `primaryCta.icon` (other pages unchanged) |
| The Challenge | Red "The Challenge" pill (error-container tokens); 48/56 heading; stats as drawn, including the hairline square frame around the two top cards and the footnote |
| Unified Lifecycle | `DmSectionHeading` (page-local: purple pill, 48/56 H2 at −0.025em, description) + four step cards sized by their copy |
| Features | Three alternating text / 655 × 357 placeholder rows and a full-width 1152 × 521 card. The frame's placeholders are the RCM placeholder scaled ×1.187 and ×1.728, so the shared `ImagePlaceholder` is reused with page-scoped text sizes. Row gaps follow the frame (they are spaced by their image cards) |
| Integration | Five X12 transaction cards (text boxes three lines tall, four on 837, as drawn) and a "Learn More" button |
| Why Salesforce Native | 3 × 2 grid of primary-purple cards with dark icon tiles |
| US clinics | Wrapping pills (rows of 2, 3, 3); "In-house billing & RCM teams" highlighted in lime |

The frame's copy has hard line breaks (step 1 "…with the reasons / behind the score.", the 837 card, and the integration description before "team"); they are reproduced. The last is desktop-only.

**Assets extracted from the export:** `denial-management/hero-media-placeholder.png` (511 × 507, Figma's grey "missing image" box on the tilted backdrop) and 30 icons (CTA calendar, pill warning, stat and cost icons, four feature icons, list check, five X12 tags, six Salesforce-section icons, eight pill icons, button arrow).

**Links:** "Schedule a Demo" → `/request-demo` (as on the other pages). Both "Learn More" buttons → `/revenue-cycle-management`; the frame gives no destinations.

## Professional and Institutional Claim Preparation build notes (2026-10-08)

**Source:** a 1280 × 10589 export (`/professional-and-institutional-claim-preparation`). The header and footer are the shared components, unchanged. Each section was built and compared one at a time. Every band boundary and height matches the export, and the full-page mean diff is 4.7 (p95 20, mostly the placeholder raster text). All other pages render pixel-identical.

**Sections:**
1. Hero: `PageHero` + `TiltedHeroMedia`, 53.5px padding (four-line title), 58px CTAs.
2. Salesforce-native platform.
3. "How a claim moves through Elixir": dark band, six stage cards and a stats panel.
4. CMS-1500 / UB-04: two split rows with form pills.
5. Automated claim scrubbing: four rule cards.
6. AI claim rejection prediction.
7. Claim rejection and EDI error resolution, with an inline code chip that makes its line 3px taller, as drawn.
8. ERA payment posting: deep-purple heading `#1C0339`, warm-grey `#4A454E` text, top-aligned card.
9. Integrated clearinghouse connectivity: monospace X12 pills, "day to day" card, Claim.MD and "every other clearinghouse" cards.
10. HIPAA compliance.
11. "Built for the organizations…": four cards with yellow links.
12. CTA band: shared `CtaBanner` with the RCM-style 66px buttons.

**Page-local building blocks:**
- `PcSplit`: text column plus image card, centred or top-aligned, optionally reversed.
- `PcMediaFrame`: a rounded, shadowed card (surface or white) that letterboxes the shared `ImagePlaceholder`. The placeholder is scaled to the card width, as in the frame.
- `PcCheckList`: icon list with optional bold lead-ins and per-item icons. Spacing and colours are tuned per section through CSS variables.

**Assets:**
- **Reused:** the hero's grey "missing image" box, `denial-management/hero-media-placeholder.png` (pixel-identical in both frames).
- **Extracted to `claim-preparation/`:** 17 icons:
  - three check variants: check circle 19 px and 17 px, badge check;
  - a small badge check;
  - three EDI item icons;
  - five HIPAA icons;
  - four organisation icons;
  - the yellow link arrow.

**Links:**
- "Book a claim demo" and "Take A Test Drive" → `/request-demo`.
- "See clearinghouse integrations" → `#clearinghouse-connectivity`, this page's section.
- "Contact Sales" → `/contact-us`.
- The four organisation card links → `/revenue-cycle-management`. The frame gives no destinations.

## Electronic Visit Verification build notes (2026-10-08)

**Source:** a 1280 × 9699 export (`/electronic-visit-verification`). The header and footer are the shared components, unchanged. Each section was built and compared one at a time. Every band above the FAQ matches the export, with a mean diff of 4.6 (p95 28, mostly text antialiasing). All other pages render pixel-identical.

**FAQ (changed on request):** the FAQ uses the site's shared accordion `FaqSection`, the RCM template, rather than the frame's open cards. The FAQ band is 580px tall instead of 1220px, so the page is 9059px tall and the CTA band and footer sit 640px higher than in the export.

**Sections:**
1. Hero: `PageHero` + `TiltedHeroMedia`, an all-white title (`titleAccent: []`), 47.5px padding, a 570px paragraph and 58px CTAs.
2. Highlights strip: four key points on a 175° Deep Purple → `#710066` gradient.
3. The requirement: text column with bold dates, a Medicaid.gov source line, and the "What EVV is not" card with a 6px lime rule.
4. The rule: six data-element cards with yellow "ELEMENT 0X" labels and purple icons.
5. State variation: five model cards with "Ask:" boxes pinned to the card foot, a Deep Purple 10% callout and a source line.
6. Scope: a semantic `<table>` (square top, rounded foot) with a footnote. Below 768px it scrolls sideways inside a focusable region.
7. The operational reality: five cards with a 6px yellow rule and lime tag pills, then the "Submission is not acceptance…" card with a five-step pill flow.
8. The Elixir approach: `#1C0339` band with four Deep Purple cards.
9. Go deeper (`#explore-evv`, the hero's second CTA): two surface cards with lime/purple top rules and purple pill links.
10. FAQ: shared `FaqSection` (RCM template) with this page's title, description and eight questions.
11. CTA band: shared `CtaBanner` with an eyebrow, the 66px buttons and a row of yellow text links.

**Page-local building blocks:**
- `EvvHeading`: lime Inter caps eyebrow plus a 48px H2, left or centred. It was promoted to the shared `components/ui/EyebrowHeading` when the Caregiver Mobile App page reused it; the eyebrow gap is `--eyebrow-heading-gap`.
- `EvvSource`: the "Source: <link>." line (external links open in a new tab), with an optional trailing note.

**Shared component change:** `CtaBanner` gained an optional `eyebrow` (passed to `SectionHeading` as a caps eyebrow) and optional `children` rendered under the buttons. Both render nothing when omitted. All other `CtaBanner` pages render pixel-identical.

**Hard line break from the frame:** Models card 4 reads "how does your / own / system feed it?". It is reproduced at 1200px and up; below that the text reflows normally. (The frame's FAQ card 4 break, "requirements. / Under", is dropped because the answer now sits in the accordion.)

**Assets:**
- **Reused:** the hero's grey "missing image" box, `denial-management/hero-media-placeholder.png` (pixel-identical).
- **Extracted to `electronic-visit-verification/`:** 11 icons:
  - six element icons, as 32 × 32 crops that keep the glyph's offset in the card corner;
  - the info icon (24 × 24);
  - four approach icons (24 × 24 white glyphs on a CSS 40px box).

**Links:**
- "Request a Demo" (hero and CTA band) → `/request-demo`.
- "Explore EVV in Elixir" → `#explore-evv`, this page's section.
- "Contact Sales" → `/contact-us`.
- "Home care and EVV" → `/home-care-and-evv` and "Field caregiver experience" → `/field-caregiver-experience`. These are planned routes that are not built yet; the catch-all route redirects them to Home.
- Sources:
  - Medicaid.gov "Electronic Visit Verification": `medicaid.gov/medicaid/home-community-based-services/home-community-based-services-guidance-additional-resources/electronic-visit-verification`. The page's old URL now returns 404.
  - CMS "EVV Requirements in the 21st Century Cures Act" (PDF): `medicaid.gov/sites/default/files/2019-12/evv-requirements-intensive.pdf`.

## Caregiver Mobile App build notes (2026-10-08)

**Source:** a 1280 × 4810 export (`/caregiver-mobile-app`; its title is "Field Caregiver Experience with Salesforce EVV"). The header and footer are the shared components, unchanged. Each section was built and compared one at a time. Every section except the FAQ has the export's exact height, with mean diffs of 3.5–4.1. The FAQ uses the shared accordion (see below), so the page is 4371px tall instead of 4810px. All other pages render pixel-identical.

**Sections:**
1. Hero: `PageHero` + `TiltedHeroMedia`, an all-white title and two paragraphs. `PageHero`'s `description` now also accepts an array; spacing is `--page-hero-paragraph-gap`, here 28px.
2. "A four-minute field caregiver tour" (`#caregiver-tour`, the hero's second CTA): six step pills in a sideways-scrolling `tablist` (the sixth is clipped at the content edge in the frame), then the Step 1 panel with three white status cards.
3. Offline documentation: two white cards with 48px Deep Purple icon tiles and 16/26 body text, then the "Visual sync status pipeline" card with four status tiles. The last tile uses the error tokens.
4. FAQ: the shared `FaqSection`, exactly as on RCM (surface band, white cards), with this page's title and questions. On request (2026-10-08), every FAQ on the site uses the RCM design unchanged.
5. Visit submission: a 16/29 description, five numbered milestone tiles in a white card, and a white note bar with a lime info icon.
6. CTA band: shared `CtaBanner` with the Claim Preparation-style 66px buttons.

**Shared component changes (backward-compatible):**
- `PageHero`: array `description`.
- `FaqSection`: `tone`.
- `EyebrowHeading`: promoted from the EVV page.

A/B renders confirm Contact Us is unchanged, and the regression run shows every other page pixel-identical.

**Assets extracted to `caregiver-mobile-app/`:** 10 icons:
- three tour card icons (24 px);
- two card tile icons (32 px);
- four sync status icons (24 px);
- the lime info icon (24 px).

The hero reuses `denial-management/hero-media-placeholder.png`.

**Links:**
- "Contact us" and "Contact Sales" → `/contact-us`.
- "Take A Test Drive" → `/request-demo`.
- "Explore the caregiver tour" → `#caregiver-tour`.

## EVV for Salesforce Field Service build notes (2026-10-08)

**Source:** a 1284 × 8687 export (`/evv-for-salesforce-field-service`). It includes a 2px black frame border on each side, which was trimmed to 1280px. The header and footer are the shared components, unchanged. Each section was built and compared one at a time; every section has the export's exact height, with mean diffs of 3.2–7.0. The page renders 8680px tall: the export has 1px separator rows between some bands. All other pages render pixel-identical.

**Sections:**
1. Hero: `PageHero` + `TiltedHeroMedia`, an all-white title and 58px CTAs.
2. Steps strip: six white step cards on the EVV highlights gradient.
3. "Salesforce Field Service EVV Built for Home and Community-Based Care": three cards with text-mark tiles ("SF", "360°", "$").
4. "Native Salesforce EVV Software…" (`#evv-features`, the hero's second CTA): six feature cards, then the shared `ImagePlaceholder` beside a "Suggested screenshot placement" note.
5. "Built to complement Salesforce": gradient card comparing Field Service and Elixir.
6. "Integrated EVV, EHR and RCM on Salesforce": eight cards, a Deep Purple banner, then a note beside a placeholder.
7. Supervisor exception management: four cards.
8. Medicaid EVV data: a two-column semantic table.
9. Aggregator connectivity: text beside the "Track EVV Submission Status" card.
10. "Why Use a Salesforce-Native EVV Solution?": three numbered cards.
11. FAQ: shared `FaqSection`, exactly as on RCM, with this page's title and questions. The frame's eyebrow, left-aligned 32px heading, white band and near-black questions are not used: on request, every FAQ on the site uses the RCM design unchanged. The section is 499px tall instead of the frame's 543px.
12. "Talk to Elixir" (`#talk-to-elixir`): intro and checklist beside the shared `ContactForm`, without the company field and consent line.
13. CTA band: shared `CtaBanner`.

**Page-local building block:** `ScreenshotNote` (the "Suggested screenshot placement" box).

**Shared component changes (backward-compatible; every other page renders pixel-identical):**
- `FaqSection`: items without `answer` render as static rows. (The interim `tone`, `eyebrow` and `align` options were removed when all FAQs were aligned to the RCM design.)
- `ContactForm`: optional `fieldNames`, `submitLabel` and `showConsent`.

**Assets extracted to `evv-field-service/`:** 22 icons:
- six feature icons;
- four exception icons;
- mobile and desktop note icons;
- four complement-card icons (cloud, Elixir, check, badge check);
- the check-circle list icon.

The hero reuses `denial-management/hero-media-placeholder.png`; the two image cards use the shared `ImagePlaceholder`.

**Links:**
- "Request EVV Demo" (hero and CTA band) and "Schedule a Demo" → `/request-demo`.
- "Explore EVV Features" → `#evv-features`.
- The form submits through the shared contact service.

## Header navigation build notes (2026-10-08)

**Scope:** the header is now sticky, responsive and drives a multi-level menu built from the supplied navigation list. There is no frame for any of this, so it uses existing tokens only: Deep Purple bar, white panels, `--radius-lg`, `--shadow-media` / `--shadow-subtle`, Montserrat group titles, Roboto links and lime active state. Page content is unchanged: every page renders pixel-identical below the bar, and the logo, search and CTA are pixel-identical within it.

**Structure:**
- `data/navigation.js` (`mainNav`): one tree, up to 4 levels, shared by desktop and mobile.
- `Header`:
  - `DesktopNav` (≥ 1200px): a disclosure button per top-level item that opens a `MegaMenu` panel. The panel is full content width (Level 2 items as balanced columns with their Level 3/4 lists); Company is a short dropdown.
  - `MobileNav` (< 1200px): hamburger plus an accordion with Levels 1–4.
- `NavItemLabel` renders an item as a router link when it has an existing route and as plain text otherwise.

**Behaviour:**
- **Sticky:** `position: sticky; top: 0; z-index: 100`. It keeps its 79px slot in the flow, so nothing shifts.
- **Scrolled state:** a `--shadow-subtle` shadow once the page scrolls.
- **Inner-page heroes:** `PageHero` and `PostHero` start on the header's last row and are marked `data-header-overlap`. At the top of the page that row stays transparent, so the frames are unchanged.
- **Anchors:** `scroll-padding-top: var(--header-height)` keeps in-page anchors below the bar. The three 80px `scroll-margin-top` rules this replaced were removed.
- **Desktop menus:**
  - Open on hover (with a 150ms close delay so the pointer can reach the panel) or on click.
  - Close on pointer leave, Escape (focus returns to the trigger), an outside click, focus leaving or following a link.
  - The top-level item is lime when the current page is inside it.
- **Mobile menu:**
  - Fixed under the bar and scrolls on its own; page scroll is locked while it's open.
  - Escape, a link, or resizing to desktop closes it.
  - Every expandable row is a button with `aria-expanded` / `aria-controls`.
  - Below 480px the bar's "Request a Demo" moves into the menu.

**Links:** only existing routes are linked:

| Section | Linked items |
|---|---|
| Products | EHR, RCM, Eligibility Verification, Denial Management, Claim Preparation, EVV, Caregiver Mobile App, EVV for Salesforce Field Service |
| Solutions | Treatment Center Solutions |
| Company | About Us, What is Elixir, Why Elixir, Press (`/press-releases`), Contact Us, Request a Demo (`/request-demo`, the header CTA's destination) |

URLs supplied for pages that don't exist yet are kept as `plannedPath` in the data and are not linked, so they don't redirect home:
- `/patient-portal/`
- `/patient-intake-management/`
- `/client-success-stories/`
- `/category/release-notes/`
- `/category/benchmark-survey/`

Every other item has no page yet and is listed as plain text.

**Notes:**
- EHR was supplied as `/ehr/`; it links to the existing `/electronic-health-record`.
- "Release Notes" appears twice in the supplied list; it is shown once.
- "AI Offerings" became "AI Ecosystem". "The AI Engine" and "Platform" aren't in the supplied structure, so they are no longer in the header.
- Visit Prep, Elixir Co-Pilot (Clinical Assistant), A/R Agent and Payor Policy Intelligence are under KratuAI (Kratu is the AI layer whose capabilities include the Clinical Assistant).

## Success Stories build notes (2026-10-12)

**Source:** a 1280 × 3817 export (`/success-stories`). The frame's header still shows the old nav; the live sticky header and mega menu are used unchanged. Each section was built and compared one at a time; every band boundary falls on the export's y, and the mean diff below the header is 2.6. All other pages render pixel-identical.

**Sections:**
1. Hero: `PageHero` set up the same way as Press Releases (73px title line-height, a 504 × 384 framed photo with the frame baked in, "Explore Our Platform" → `/platform`).
2. Stats strip: four figures (100+, 40%, 24/7, ZERO) in four 300px columns on the surface band. They are reproduced verbatim from the frame.
3. "Our Impact in Action": the shared `EyebrowHeading` with previous/next controls, then the featured story and six story cards.
   - **Featured story:** 576px photo beside a Surface Variant (dark) panel with a lime tag, 36/40 title, yellow-ruled quote, lime attribution and a yellow CTA.
   - **Story cards:** 362 × 492, bordered, 224px photo, yellow category pill, "Read more" pinned to the foot.
4. CTA band: shared `CtaBanner` with one 66px "Take a Test Drive" button → `/request-demo`.

**Behaviour:**
- **Featured controls:** the previous/next buttons step through `successStoriesImpact.featured`. Only one featured story is supplied, so both report `aria-disabled` and do nothing. They stay styled as drawn.
- **Story links:** there are no case-study pages yet (`src/posts/case-study` has only the demo), so "Read full transformation" and "Read more" have `to: null`. They render as drawn but inert, hidden from assistive tech. Setting `to` turns each into a router link.

**Assets:** 8 photos in `src/assets/success-stories/`, all 1× crops of the export:
- the hero card (504 × 384);
- the featured photo (576 × 666);
- six card photos (360 × 224). The category pills are drawn in HTML exactly over the pills baked into these crops.

**Navigation:** the header's Resources → Success Stories item now links to `/success-stories`. The supplied nav URL was `/client-success-stories/`.

## Insights build notes (2026-10-12)

**Source:** seven 1280px exports: Videos, Webinars, Release Notes, Benchmark Surveys, E-Book, Blog and All Resources. The frames' headers still show the old nav; the live sticky header is used unchanged. There are no frames for Newsletter or Illustrations (see question 80).

**Routes:** `/insights` (All Resources), `/blog`, `/insights/e-book`, `/insights/benchmark-surveys`, `/insights/release-notes`, `/insights/webinars` and `/insights/videos`. Detail pages are the shared post template at `/<type>/<slug>`. Two post types were added for this: `benchmark-survey` and `video`.

**Shared frame (`pages/Insights/components/`):**
- `InsightsShell`: the "Knowledge for the Modern Clinician" hero (`PageHero` set up like Press Releases, with a 71px title pitch and a 577 × 58 search field passed as `children`). Below it are the category bar, the 48px page title, and a 744px main column with a 372px sidebar where the frame has one.
- `InsightsNav`: the nine category pills (127px white band, 37px pills; the active pill is Deep Purple).
- `CategoryFilter` (variants `counts`, `list`, `history`) and `WeeklyBriefing` (sidebar).
- `ResourceCard` (stacked or horizontal), used by Blog, Release Notes, E-Book and Benchmark Surveys.
- `ListingStatus`: result count for assistive tech, plus a visible "No …s found." line.

**Pages:** Blog and Release Notes share `FeaturedListing`, and E-Book and Benchmark Surveys share `WideListing`. Webinars (upcoming plus on-demand), Videos (featured overlay plus two-up cards) and All Resources have their own layouts.

**Behaviour:**
- **Search:** the hero field filters title, excerpt, category and author as you type.
- **Filters:** sidebar categories filter the list (Webinars toggles); Release Notes filters by year.
- **Pagination:** changing either returns to page 1. Pagination uses the shared `ui/Pagination`, moved from Press Releases (Press Releases is pixel-identical afterwards).
- **Webinars:** the upcoming webinar is the soonest `event.startDate` still ahead; All Resources uses the same rule.
- **All Resources:** the lead row is the newest e-book, the next webinar and the newest video. The feed takes the newest remaining post of each type in turn, 3 at a time, with "Load More Resources".
- **Weekly Briefing:** posts to `VITE_NEWSLETTER_ENDPOINT`.

**Visual check:** each page was rendered at 1280 and compared band by band with its export. Where the data matches (heroes, nav, headings, sidebars, card geometry, text rows), positions agree within 0–2px. Remaining differences come from data: the frames' placeholder counts and pagination, and on All Resources, sample copy that differs from the other frames (question 83).

**Assets:** `src/assets/insights/hero-card.png` (504 × 384) and every demo post image under `src/assets/posts/<type>/_demo/` are 1× crops of the exports. Several crops include UI drawn over the photo (pills, play buttons, duration chips); the HTML is drawn exactly over them. The Videos featured image (744 × 480) had its lower band, which held the frame's text, repainted. These are dev-only; real posts supply their own images.

## Open questions for the designer (blocking "pixel-perfect")
1. Confirm Plus Jakarta Sans for card titles and stat numbers in Figma Inspect (identified from the export).
2. Buttons on the Home frame are Roboto; does the DS sheet's Inter 14 Semi-Bold apply anywhere?
3. Dropdown / mega-menu designs for the nav items, if any.
4. Hover, focus and pressed states for buttons, links and cards.
5. Tablet and mobile frames.
6. Exact shadow tokens and corner radii (confirm via Figma Inspect).
7. Canonical input height (42 vs 54 px).
8. Missing assets as SVG / 2×: white and purple logos, KRATU AI lockup, UI icons, social icons.
9. Behaviour of the carousel, tabs, video buttons and search. The Home build renders them exactly as designed: testimonial arrows are disabled (only 2 testimonials exist); resource pills and feature tabs are static because only one state and one screenshot were supplied.
10. The faint cube texture on the dark CTA card and the purple wordmark were not supplied as files; both were rebuilt from the export.
11. Real destination URLs for nav, footer, CTA and social links (current paths are placeholders; unknown routes redirect home).
12. About Us hero H1 reads **"Transforming Healthcar"** in the export (final "e" missing). It is reproduced as shown; confirm the intended copy (one-line change in `src/data/about.js`).
13. About Us team grid lists **"Clint Cassel — IT Analyst" twice** (same photo). It is reproduced as designed; confirm whether one slot should be someone else.
14. Contact form: required fields (first name, last name and work email are currently required), success/error UI (not designed), and the submission endpoint/storage (`VITE_CONTACT_ENDPOINT`).
15. What Is Elixir: the "Core EHR / Contact Center / Billing / Patient Portal" pills are static (only Core EHR content is designed); the CTA destinations (`/request-demo`, `/platform`) are placeholders, as on the other pages.
16. Why Elixir: the reason #7 progress bar is drawn as in the frame (241 px filled / 48 px track), which is about 83 % filled although it is labelled 85 %; confirm whether the bar should be proportional.
17. Why Elixir: destinations for "Learn more", "Explore Our Platform" and the two CTA buttons are not in the design. They point at placeholder routes, as on the other pages.
18. EHR: the frame gives no destinations for "Get a Personalized Demo" and "Contact Us Now". They point at `/request-demo` and `/company/contact`, the same as the other pages.
19. EHR: the hero and feature images, and the integration logos, are 1× crops taken from the export. 2× originals, and the official Salesforce, Surescripts and HL7/FHIR marks if needed, should be supplied.
20. EHR: the "Bringing order to chaos" subtitle uses the same sentence as the hero paragraph ("out-of-the box" here, "out-of the box" in the hero). Both are reproduced exactly as in the frame; confirm the copy.
21. EHR: no tablet or mobile frames. The responsive fallbacks are 4 → 2 → 1 column tiles, stacked splits and cards, and 36 px H2s under 768 px.
22. RCM: four "Generic image placeholder" cards stand in for lifestyle photographs that have not been supplied; please provide the photos (552×300, 544×295 and 500×300 frames).
23. ~~RCM: the FAQ shows 16 collapsed questions with no answer copy or open state.~~ Answers supplied and the FAQ is now the shared two-column `FaqSection` (see the FAQ section build notes). The open state is still undesigned; confirm the answer styling and whether only one item should open at a time.
24. RCM: the patient-journey filter pills only have the "All stages" state designed; they are static.
25. RCM: copy reproduced as in the frame includes "fromencounters", "claims,payments" and a double space before "medical claims management"; confirm whether these are intended.
26. RCM: no destinations are given for the CTA buttons; they use the same routes as the other pages (`/request-demo`, `/company/contact`).
27. Eligibility Verification: three "Generic image placeholder" cards stand in for photographs that have not been supplied (461×461 and two 552×300 frames).
28. Eligibility Verification: no destinations are given for the CTAs; "See how it works" scrolls to the How It Works section, the others use the routes the other pages use.
29. Eligibility Verification: neither the header nav nor the footer links to this page in the design. Confirm where it should be linked from.
30. ~~Treatment Center Solutions did not exist when RCM and Eligibility Verification were built.~~ Built 2026-10-06 (see its build notes).
31. Treatment Center Solutions: the breadcrumb reads "Patient Portal" in the frame (reproduced as designed). Confirm whether it should read "Treatment Center Solutions".
32. Treatment Center Solutions: the "Bed Management Suite" photo is 1× and its frosted card was cleaned of text by inpainting so the text can be live; supply the original photo (and the card as a separate layer) for a clean result.
33. Treatment Center Solutions: no destinations are given for "Request Demo" and "Contact Us Now"; they use `/request-demo` and `/company/contact` like the other pages. Neither the nav nor the footer links to this page in the design.
34. Contact Us: the breadcrumb reads "Take A Test Drive" in the frame (reproduced as designed). Confirm the intended label.
35. Contact Us: the form is the existing shared form, which posts JSON to `VITE_CONTACT_ENDPOINT`. That variable is not set in this repository, so submissions currently fail gracefully with the screen-reader error message. A Salesforce Web-to-Lead + reCAPTCHA form exists only in the standalone `test.html` (Mirketa "AI Readiness Assessment", redirecting to mirketa.com/thank-you); it is not wired into the site. Decide which backend the site should use.
36. Contact Us: no success/error UI or Thank You page is designed; outcomes are announced to assistive technology only, as on About Us.
37. Press Releases: the four releases are the frame's sample copy, reproduced verbatim (including the "…" truncations, "No- Show" and the 40% / $450M / 200+ claims). Supply the real titles, full bodies (`content`), dates and source URLs. The three card photos also have the category badge baked in. Please send clean photos, plus a larger image per release for the detail page.
38. Press Releases: the frame shows pagination "1 2 3 … 12". With four releases the real pagination shows a single page. It grows automatically as releases are added (3 cards per page after Top News).
39. Press Releases: the frame has no category filter and no "Latest Insights" section, so neither was built. The categories appear only as card badges. Home's "Resources" section is unchanged and static.
40. Press Releases: there is no frame for the detail page (`/press-releases/:slug`); a minimal layout is in place. Neither the nav nor the footer links to `/press-releases` in the design. Confirm where it should be linked from.
41. SEO (all pages): `index.html` keeps a static default description, so each page has two description tags (the default plus the page's own). Post pages now render canonical, Open Graph, Twitter and JSON-LD tags; the other pages still have none.
42. Post template: the hero shows two breadcrumb lines ("Home > Press Release" above "Home > Press Release > <title>"). Both are reproduced as designed; the first looks like a leftover. Confirm whether to keep it.
43. Post template: the sidebar's "Latest Press Releases" in the frame lists three releases that don't exist in the content (Jan 15 2025, Dec 10 2024, Nov 22 2024). The list shows the newest real releases instead. Supply those releases if they should exist.
44. Post template: the detail title ("… with Early Access Offer") and the listing title ("… to Optimize Clinic Efficiency") differ for the same release, as do the figures (20% here, 40% on the listing card). Both are kept (`title` / `listingTitle`); confirm the final copy. The lead also reads "groundbreaking‘Patient" with no space, reproduced as designed.
45. Post template: the media contact phone "+91-00000 00000" looks like a placeholder; supply the real number. "Claim Your Discount" has no destination in the frame and links to `/contact-us`.
46. Post template: only press releases have content. Blog, case study, release note, e-book and webinar have one dev-only demo post each, and no listing pages or designs. Home's "Resources" section still links to `/resources/blog` and `/resources/case-studies`, which don't exist; Home is unchanged.
47. Home Features: only the Patient View screenshot exists. Inventory Management and Telehealth Integration show the generic image placeholder until their 810 × 530 screenshots are supplied (set `image` in `data/home.js`).
48. Home Testimonials: "Sarah Mitchell, Practice Administrator" is a DEMO testimonial (placeholder copy, no photo). Replace it with a real, approved customer quote before launch.
49. Home Knowledge Base: the E-Book, Benchmark Survey, Release Notes and Webinar cards are demo content reusing the three existing covers. All card links (including Blog's) point at `/resources/...` pages that don't exist yet and redirect to Home.
50. Denial Management: the hero image is Figma's grey placeholder box (reproduced as drawn). Please supply the hero photo (467 × 460 visible area; exported with the tilted backdrop, 511 × 507). The four feature images are "Generic image placeholder" cards; supply the screenshots (655 × 357 ×3 and 954 × 521).
51. Denial Management: the statistics (65%, 90%, $25–$118) carry the frame's own footnote, "¹ Industry estimates. Replace with your preferred cited sources before publishing." They are reproduced verbatim; supply cited sources (and final copy) before launch.
52. Denial Management: no destinations are given for "Schedule a Demo" and the two "Learn More" buttons (they use `/request-demo` and `/revenue-cycle-management`). Neither the nav nor the footer links to this page in the design. The two top stat cards sit inside a hairline square frame and the 837 card is 20px taller than the others; both are reproduced as drawn. Confirm they are intended.
53. Claim Preparation: the hero image is Figma's grey placeholder and the eight section images are "Generic image placeholder" cards (frames 560 × 469, 560 × 369, 560 × 388, 560 × 525, 560 × 423, 560 × 516, 543 × 369 and 560 × 401). Please supply the screenshots or photos.
54. Claim Preparation: the statistics (98%+ first-pass clean claim rate, "Up to 90%", "Nearly 60%") and the compliance statements (BAA, AES-256, HIPAA, SOC 1 / SOC 2 Type II, HITRUST CSF) are reproduced verbatim from the frame without sources. Confirm them before launch.
55. Claim Preparation: no destinations are given for the hero CTAs, the four "…→" organisation card links or the CTA band buttons. They use `/request-demo`, `#clearinghouse-connectivity`, `/revenue-cycle-management` and `/contact-us`. Neither the nav nor the footer links to this page.
56. Claim Preparation: the frame's copy "Balances balance down to the line item" (Post stage card) is reproduced as written; confirm the wording.
57. EVV: the hero image is Figma's grey placeholder box, reproduced as drawn. Please supply the hero photo (467 × 460 visible area; exported with the tilted backdrop, 511 × 507).
58. EVV: "Home care and EVV" and "Field caregiver experience" link to the planned routes `/home-care-and-evv` and `/field-caregiver-experience`. These pages do not exist yet and redirect to Home. Confirm the final URLs, and supply those frames. Neither the nav nor the footer links to the EVV page in the design.
59. EVV: the regulatory statements are reproduced verbatim from the frame. They cover section 12006 of the 21st Century Cures Act, the 1 January 2020 and 1 January 2023 deadlines, FMAP reductions of up to one percent, and the five CMS model names and scope positions. They cite the two Medicaid.gov sources, which were confirmed reachable. Please have them reviewed before launch. The copy uses British spellings ("programme", "organisation"), kept as written.
60. EVV: the frame sets Elements card 2's text 2–3px higher than its neighbours; the build aligns all six. Confirm.
61. EVV: the frame's FAQ (open cards, left-aligned heading) is replaced, on request, by the shared accordion `FaqSection`. Update the frame to match, or confirm the accordion is final.
62. Caregiver Mobile App: the tour shows six steps but only Step 1's panel content. Steps 2–6 (Arrival, Documentation, Escalation, Departure, Completion) render as drawn but are marked unavailable (`aria-disabled`) until their panel copy, tags and status cards are supplied.
63. Caregiver Mobile App: the hero image is Figma's grey placeholder box, reproduced as drawn. Please supply the hero photo (467 × 460 visible area; 511 × 507 with the tilted backdrop).
64. Caregiver Mobile App: the frame's FAQ (open cards with "?" icons, left-aligned heading, white band) is rendered, on request, exactly as the RCM FAQ. Update the frame to match.
65. Caregiver Mobile App: step 4's milestone title ("Aggregator accepted, where required") is near-black while the other four are Deep Purple; it is reproduced as drawn. Confirm.
66. Caregiver Mobile App: no destinations are given for the CTAs; they use `/contact-us`, `/request-demo` and the page's own tour section. The EVV page's "Field caregiver experience" links still point to the planned `/field-caregiver-experience`. Should they point to this page?
67. EVV for Salesforce Field Service: two "Generic image placeholder" cards (560 × 305 and 560 × 304) and two "Suggested screenshot placement" notes are reproduced as drawn. The notes are written for the developer ("Developer can replace this placeholder block…"). Supply the caregiver mobile screen and the operational screen; confirm the notes should be removed then. They are single data entries, so removal is a one-line change.
68. EVV for Salesforce Field Service: the FAQ shows six questions collapsed and supplies no answer copy. They render in the RCM FAQ design as static rows (chevron shown, nothing to open) until answers are supplied. The frame's eyebrow and left-aligned heading are not used, so that every FAQ matches RCM.
69. EVV for Salesforce Field Service: the hero image is Figma's grey placeholder box. Please supply the hero photo (467 × 460 visible area; 511 × 507 with the tilted backdrop).
70. EVV for Salesforce Field Service: no CTA destinations are given. "Request EVV Demo" and "Schedule a Demo" both use `/request-demo`; confirm, or point one of them at the page's own "Talk to Elixir" form.
71. EVV for Salesforce Field Service: the integration copy names Sandata and HHAeXchange and says connector availability "should be confirmed"; it is reproduced verbatim. Please have it reviewed.
72. Header: the mega menu, dropdown and mobile menu have no frame; they are built from existing tokens. Supply a frame if a specific look is wanted (e.g. icons, descriptions, featured content).
73. Header: most menu items have no page yet and are listed as plain text. Unlinked text looks the same as links in the panel; confirm whether pending items should be hidden, muted or marked until their pages exist.
74. Header: "The AI Engine" and "Platform" are no longer in the bar (not in the supplied structure). Home's "See all Kratu AI capabilities" button still points at the old `/ai-engine` path (redirects home); confirm its destination.
75. Header: "Request a Demo" (bar, menu and footer) points at `/request-demo`, which has no page yet and redirects home.
76. Success Stories: all eight photos are 1× crops of the frame export. Please supply source images:
    - hero card: 504 × 384 with its frame, or the bare photo;
    - featured photo: 576 × 666;
    - six card photos: 360 × 224, without the category pills, which are now drawn in HTML.
77. Success Stories: there are no case-study pages, so "Read full transformation" and the six "Read more" links are inert. Supply the stories (or their URLs) to link them. The previous/next arrows have only one featured story to show.
78. Success Stories: the stats (100+ facilities, 40% reduced no-shows, 24/7, zero spreadsheets), the Atlantic Primary Group quote and the story claims (for example "remove all manual steps", KIPU integration) are reproduced verbatim from the frame. Please confirm them before launch.
79. Success Stories: the frame's route and the nav list differ (`/success-stories` vs `/client-success-stories/`). The page is built at `/success-stories` and the nav links there.
80. Insights: there are no frames for Newsletter or Illustrations. Their category pills link to the planned `/insights/newsletter` and `/insights/illustrations`, which redirect to Home until the pages are built. Please supply both frames.
81. Insights: the frames' sidebars show placeholder data ("Category Here", counts 24/18/12/9/15) and the cards say "Author Name". The build lists categories from `data/insights.js` (Blog: the categories found on its posts) with real counts, and shows each post's own author. The Videos sidebar highlights the active filter ("All" by default); the frame draws no active state. Confirm.
82. Insights: the frames show pagination ("1 2 3 … 12"). Pagination appears only when a listing has more than one page, so with the current demo posts it is hidden on most pages.
83. All Resources: the frame's sample content differs from the other Insights frames. Examples: "The 2024 AI Maturity Model…" e-book, a live webinar "Integrating Large Language Models in EHR Workflows" dated Oct 24, 2024 (a past date), and a featured video "Elixir AI Platform Overview". The page draws from the same posts as the category pages, so in development it shows their demo posts instead.
84. All Resources: the frame does not say which items fill the lead row or how the feed is ordered. The build uses the newest e-book, the next upcoming webinar and the newest video, then alternates types (Article, Webinar, Release, …), three per "Load More Resources". Confirm.
85. All Resources: the frame's "RELEASE" card uses "Read Whitepaper" with a download icon. This is reproduced for release notes, though the Release Notes page says "Read Notes" / "View Full Release Notes". The hero is the Contact Us hero ("Experience the Future of Healthcare Management") with no search field, unlike the other Insights frames. Confirm both.
86. E-Books: no PDFs are supplied. "Download" (and All Resources' "PDF Available") need a `file` on the post; until then "Download" opens the e-book's page and "PDF Available" is hidden. The All Resources card shows "15 min read" while the E-Book page shows a page count; both are optional post fields (`readingTime`, `pages`).
87. Webinars and Videos: no recording or registration URLs are supplied. Play buttons open the post's page (add a `video` content block there), and "Register Now" opens the webinar's page unless the post sets `event.registerUrl`. The upcoming webinar's description has a hard line break before "care.", reproduced as drawn.
88. Weekly Briefing: no endpoint or success/error design is supplied. Set `VITE_NEWSLETTER_ENDPOINT`; until then, subscribing reports an error (announced to assistive tech, with no visible message designed).
89. Header: now that the pages exist, Resources → Insights links to `/insights`, "Guides & E-books" to `/insights/e-book` and "Webinars & Events" to `/insights/webinars`. "Release Notes" and "Benchmark Surveys" link to `/insights/release-notes` and `/insights/benchmark-surveys`; the nav brief gave `/category/release-notes/` and `/category/benchmark-survey/`. Blog is at `/blog` as proposed. Confirm the URLs. Home's Knowledge Base links (question 49) still point at `/resources/...`; Home is unchanged.

