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
| Headline Small | Montserrat | 24 px | **Bold (700)** | 32 px | normal | "Trusted by Healthcare Providers Worldwide" | [M] |
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
| Number badge 01–06 | **40 × 40** | `#95C11F` | — | ≈ 6 | — | White Montserrat 16 / 700 | [M] | *(removed from the Home Kratu diagram on 2026-10-23; see the interaction pass notes)*
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
3. **Kratu Intelligence diagram:** 6 feature cards (three left, three right, mirrored so the icon sits on the right on the right-hand side; the 01–06 number badges were removed on request on 2026-10-23) wired by 1 px connectors with lime ring nodes to a central KRATU AI card. CTA "See all Kratu AI capabilities".
4. **Elixir intro:** watermark "ELIXIR" + purple wordmark, lime pill, paragraph, CTA, and two staggered value cards (second card offset 48 px down).
5. **Kratu AI Full Capabilities:** dark-section 3 × 2 glass cards.
6. **Challenges stats:** 4 stat cards with alternating accent bars.
7. **Elixir Capabilities:** vertical feature tabs (Patient View [active] · Inventory Management · Telehealth Integration) next to a dashboard screenshot. Active tab has a 2 px `#95C11F` left bar, purple title and dark body. Inactive tabs have a 2 px light-grey bar and grey text.
8. **Testimonials carousel:** 2 cards visible, plus prev/next.
9. **Resources:** filter tabs (Blog [active] · E-Book · Benchmark Survey · Release Notes · Webinar) and 3 resource cards.
10. **Dual CTA:** "Explore our AI-powered solution" (dark, yellow button) and "Get a personalized Elixir demo" (light, purple button).

## 21. Animations & interactions

The Figma exports define no motion. The briefs for individual pages asked for no animation or hover effects; the site-wide enhancement brief (2026-10-22) superseded that and introduced the motion system below. Everything uses one vocabulary, so a component moves the same way on every page.

**Tokens** (`styles/tokens.css`):
- `--ease-out` for entrances, `--ease-standard` for hovers.
- `--duration-fast` 160ms, `--duration-base` 240ms, `--duration-reveal` 700ms.
- `--reveal-distance` 24px, `--reveal-stagger` 70ms, `--hover-lift` −4px, `--shadow-hover`.

**Scroll reveals** (`components/motion/MotionController` + `styles/motion.css`):
- Once per route, the controller tags the page's section copy, media, tables, forms and card-like grid/list items with `[data-reveal]`.
- It reveals each one the first time it enters the viewport (fade + 24px rise), staggering items that arrive together, then unobserves it, so scrolling back never replays.
- Elements with their own transform only fade.
- Content is hidden only once `html.motion-ready` is set, which never happens under `prefers-reduced-motion` or without IntersectionObserver. Nothing stays hidden if JavaScript fails.
- Skipped: heroes (`[data-hero]`), screen-reader-only text, and anything off-screen sideways (carousel slides).

**Cards** (`[data-card]`, tagged by the same controller):
- A grid/list item counts as a card when it is painted (background, border or shadow), padded and at least 120 × 56.
- Every card shares one hover: lift by `--hover-lift` and `--shadow-hover`, on fine pointers only. Keyboard focus inside a card gives the same shadow.
- Buttons, links of button height, tabs and form controls are never cards.

**Signature: the care network** (`components/motion/CareNetwork`):
- A quiet canvas behind every dark hero (`PageHero`, the Home hero, the not-available page) and the shared `CtaBanner`.
- Slowly drifting nodes link to their neighbours. A few lime hub nodes and lime "signals" travel along the links: patient, care team and system connecting.
- It leans slightly toward the pointer.
- Cost: one canvas at ≤ 1.5× pixel ratio and about 30fps, paused off screen or in a hidden tab, with fewer nodes on small screens. Under reduced motion it draws one still frame.

**Heroes:**
- `PageHero` and the Home hero enter in one sequence: breadcrumb, then title line by line, then description, actions, and the media sliding in.
- The Home hero's insight card floats slowly.

**Components:**
- `Button`: every variant lifts 2px and deepens (a filter, so page colour overrides still darken) on hover. The trailing arrow nudges forward and the button settles on press.
- Disabled, `aria-disabled` and `aria-busy` buttons are visibly inert. Outline fills and ghost brightens.
- Mega menu and mobile menu ease in; mobile submenus ease open.
- Footer links draw an underline. Inline paragraph links draw an underline too.
- Form fields get a lime focus ring and flag invalid input after interaction (`:user-invalid`).
- Contact and newsletter forms show their sending, success and error outcome visibly under the button (role="status") and ignore repeat submits while sending.

**Reduced motion:** all transitions and animations collapse to 1ms, no reveal hiding, no hover lift, and the network draws a still frame.

---|---|---|
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
| Our AI Solutions | Home passes `glow` to the shared `AiCapabilitiesSection`: all six cards are one size at every breakpoint (rows ≥374px, 1fr), titles reserve two lines, and `BorderGlow` lights the edge nearest the pointer, with one sweep on scroll-in. The section is 9px taller than the frame (rows were 365/374px). Since 2026-10-13 this is the only variant: What Is Elixir, Why Elixir and EHR render it identically (see "Kratu AI section standardised") |
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
2. "A four-minute field caregiver tour" (`#caregiver-tour`, the hero's second CTA): six step pills in a sideways-scrolling `tablist` (the sixth is clipped at the content edge in the frame), then the selected step's panel with three white status cards. Every step is a working tab (2026-10-23); steps 2–6 hold interim panels (question 62).
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
- **Featured carousel** (2026-10-23): the previous/next buttons loop through the featured story and then the six story cards as summary slides (tag, title, text; their small photos framed on a lavender panel rather than stretched). It advances every 6 seconds, pauses on hover/focus and for reduced motion, and swipes on touch screens. Arrows keep their drawn styles (outlined previous, filled next).
- **Story links:** there are no case-study pages yet (`src/posts/case-study` has only the demo), so "Read full transformation" and "Read more" have `to: null`. They render as drawn but inert, hidden from assistive tech. Setting `to` turns each into a router link.

**Assets:** 8 photos in `src/assets/success-stories/`, all 1× crops of the export:
- the hero card (504 × 384);
- the featured photo (576 × 666);
- six card photos (360 × 224). The category pills are drawn in HTML exactly over the pills baked into these crops.

**Navigation:** the header's Resources → Success Stories item now links to `/success-stories`. The supplied nav URL was `/client-success-stories/`.

## Insights build notes (2026-10-12)

**Source:** eight 1280px exports: Videos, Webinars, Release Notes, Benchmark Surveys, E-Book, Blog, All Resources and Illustrations (supplied later). The frames' headers still show the old nav; the live sticky header is used unchanged. There is no frame for Newsletter (see question 80).

**Routes:** `/insights` (All Resources), `/blog`, `/insights/e-book`, `/insights/benchmark-surveys`, `/insights/release-notes`, `/insights/webinars`, `/insights/illustrations` and `/insights/videos`. Detail pages are the shared post template at `/<type>/<slug>`. Three post types were added for this: `benchmark-survey`, `illustration` and `video`.

**Shared frame (`pages/Insights/components/`):**
- `InsightsShell`: the "Knowledge for the Modern Clinician" hero (`PageHero` set up like Press Releases, with a 71px title pitch and a 577 × 58 search field passed as `children`). Below it are the category bar, the 48px page title, and a 744px main column with a 372px sidebar where the frame has one.
- `InsightsNav`: the nine category pills (127px white band, 37px pills; the active pill is Deep Purple).
- `CategoryFilter` (variants `counts`, `list`, `history`) and `WeeklyBriefing` (sidebar).
- `ResourceCard` (stacked or horizontal), used by Blog, Release Notes, E-Book and Benchmark Surveys.
- `ListingStatus`: result count for assistive tech, plus a visible "No …s found." line.

**Pages:** Blog and Release Notes share `FeaturedListing`, and E-Book and Benchmark Surveys share `WideListing`. Webinars (upcoming plus on-demand), Videos (featured overlay plus two-up cards), Illustrations and All Resources have their own layouts.
- **Illustrations:** two-up 360px cards. Each has a 288 × 160 preview inset 17px from the top, an Inter label (Deep Purple), a Montserrat title, the description, a 2px divider and two 39px lime buttons ("SVG", "PNG"). The sidebar lists the same five categories as Webinars (toggle filter). Text rows, divider, buttons and card bounds match the export within 1px.

**Behaviour:**
- **Search:** the hero field filters title, excerpt, category and author as you type.
- **Filters:** sidebar categories filter the list (Webinars toggles); Release Notes filters by year.
- **Pagination:** changing either returns to page 1. Pagination uses the shared `ui/Pagination`, moved from Press Releases (Press Releases is pixel-identical afterwards).
- **Webinars:** the upcoming webinar is the soonest `event.startDate` still ahead; All Resources uses the same rule.
- **All Resources:** the lead row is the newest e-book, the next webinar and the newest video. The feed takes the newest remaining post of each type in turn, 3 at a time, with "Load More Resources".
- **Illustrations:** "SVG" and "PNG" download `post.files.svg` / `post.files.png`. Until a post has those files, they open the illustration's page, which shows the image.
- **Weekly Briefing:** posts to `VITE_NEWSLETTER_ENDPOINT`.

**Visual check:** each page was rendered at 1280 and compared band by band with its export. Where the data matches (heroes, nav, headings, sidebars, card geometry, text rows), positions agree within 0–2px. Remaining differences come from data: the frames' placeholder counts and pagination, and on All Resources, sample copy that differs from the other frames (question 83).

**Assets:** `src/assets/insights/hero-card.png` (504 × 384) and every demo post image under `src/assets/posts/<type>/_demo/` are 1× crops of the exports. Several crops include UI drawn over the photo (pills, play buttons, duration chips); the HTML is drawn exactly over them. The Videos featured image (744 × 480) had its lower band, which held the frame's text, repainted. These are dev-only; real posts supply their own images.

## Referral Program build notes (2026-10-13)

**Source:** a 1280 × 4583 export (`/referral-program`). The frame's header still shows the old nav; the live sticky header is used unchanged. Each section was built and compared one at a time. Every text row, button and card edge measured lands on the export's y (within 1px). The band means are 1.4–3.5, which is text anti-aliasing. The export has 1px white seams at y 694, 2747 and 3220. They are not reproduced: the neighbouring sections' padding absorbs them, so everything below stays on the frame's y.

**Sections:**
1. **Hero:** `PageHero` with the 504 × 384 framed photo (frame baked in), placed as on the Insights and Success Stories heroes.
   - Overrides: 570px description width (the frame keeps "revenue" on line 2), 72px title pitch, 1.2px crumb tracking, and bottom-aligned buttons. In the frame the 58px "Learn Benefits" starts 5px above the 53px primary button.
   - `PageHero`'s primary CTA now also takes `href` (backward compatible; all other pages are pixel-identical).
2. **"How it works?" (`ReferralSteps`):** `EyebrowHeading` (lime caps eyebrow, 48px title), a centred intro, and three 363px white step cards (radius 24, padding 32) with 56px lime icon tiles.
3. **"Why join the Referral Program?" (`ReferralBenefits`, `#referral-benefits`):** three 352px columns with 96px Deep Purple icon circles. The descriptions are capped at 344px so they wrap as in the frame.
4. **Knowledge Base:** Home's section, promoted from `pages/Home/sections` to the shared `components/sections/ResourcesSection`, with the same content.
   - The frame's only difference is Deep Purple card tags with white text (`tagTone="purple"`).
   - Home renders identically to the last commit; only its timing-based animations differ between captures.
5. **CTA band:** shared `CtaBanner` with the EHR band's styling (−3px title tracking, 66px "Contact Us Now" button). The description is the EHR band's copy, as in the frame.
6. **Contact Us:** the shared `ContactSection` (About Us), unchanged. It matches the export's band in geometry and colour.

**Links:**
- "Send your Referral" → `#contact` (this page's contact form).
- "Learn Benefits" → `#referral-benefits`.
- "Contact Us Now" → `/contact-us`.
- Header: Company → Referral Program now links here.

**Assets** (`src/assets/referral-program/`, 1× crops of the export):
- the hero photo (504 × 384);
- six 32 × 32 icon glyphs, cut from their solid fills. The lime tiles and purple circles behind them are drawn in CSS.

## Career build notes (2026-10-13)

**Source:** a 1280 × 2640 export (`/career`). The frame's header still shows the old nav; the live sticky header and footer are used unchanged. Each section was built and compared one at a time. Every band is the export's exact height, and every text row, card edge and button measured lands on the export's y. The band means are 1.1–2.7, which is text anti-aliasing.

**Sections:**
1. **Hero:** `PageHero` with the 504 × 384 framed photo (frame baked in), placed as on the Referral Program hero. It has no CTAs (none in the frame). Overrides: 72px title pitch, 24px description gap, 1.2px crumb tracking.
2. **"Come work with us" (`CultureSection`):**
   - Heading: `EyebrowHeading` set up as the Referral Program "How it works?" heading (identical positions).
   - Four 363px surface cards (radius 24, padding 32) with the frame's soft warm inner edge (`inset 0 0 14px`), each with a 56px #ece8ea icon tile (radius 16) and a Montserrat 700 20px title.
   - The Deep Purple "Transparency" card spans the last two columns, with an 80px Surface Variant (dark) circle.
3. **"Open Positions" (`OpenPositions`):** three 368px white job cards (radius 24, padding 26/24/24). Each has an Inter 11px caps department pill, a Roboto 600 20px title, a location row and a full-width 44px lime "View & Apply" button.

**Assets** (`src/assets/career/`, 1× crops of the export):
- the hero photo (504 × 384);
- four 32 × 32 tile glyphs, the 40 × 40 eye glyph and the 14 × 17 location pin, cut from their solid fills. Tiles and circles are drawn in CSS. The existing `trending-up-dark.png` and location pins have a different colour and size, so they were not used.

**Links:** Header → Company → Careers now links to `/career`.

## Job posting build notes (2026-10-13)

**Source:** a 1280 × 1970 export ("Open Positions / Job Posting", Senior Product Manager (EHR)). The live sticky header and footer are used unchanged. Each section was built and compared one at a time. Every band is the export's exact height, and every measured text row, pill, card edge and button lands on the export's position. The band means are 1.4–3.4, which is text anti-aliasing.

**Route and data:** `/career/open-positions/:jobSlug`, rendered by `pages/Career/open-positions/OpenPositionDetail`.
- Jobs live in `pages/Career/data/jobOpenings.js`: card fields, `slug`, `applyUrl` and an optional `detail` (the posting).
- Only a job with a `detail` gets a page. The Senior Product Manager posting is the only one supplied, so it is the only one: `/career/open-positions/senior-product-manager-ehr`.
- Unknown slugs, and jobs without a posting, redirect to Home (the app's not-found behaviour). No other job's content is ever shown.

**Sections:**
1. **Hero:** a 328px Surface Variant (dark) band.
   - A 3-level breadcrumb (Home › Career › title, styled as PostHero's), and a 48/56 Montserrat title with 0.01em tracking.
   - Three 42px translucent pills: employment type, location (the existing `post-location` icon) and level.
2. **Body:** a 704px column and a 400px facts card, with a 48px gap.
   - "About the Role", "Responsibilities" (lime check icons, 600 weight) and "Requirements" (a surface card with yellow numbered markers, 2 × 2). The 24px Montserrat headings each sit next to a 32px surface circle with an icon.
   - The facts card: a 60px "Apply Now", "Job Facts" rows (`dl`), and "Share this role" with share, copy-link and email buttons.
   - The frame's hard line breaks (in About, the fourth responsibility and the fourth requirement) are kept on desktop. Below 1200px the text wraps normally.

**Shared changes:** PostShare's share and copy logic moved into `components/posts/PostShare/useShareActions.js`, so the job page can reuse it. Post pages are pixel-identical afterwards.

**Career page:** the "Open Positions" cards moved to `pages/Career/job-openings/JobOpenings` and read `jobOpenings.js`. A job with a posting has its title and "View & Apply" linked to it. /career renders pixel-identical.

**Assets** (`src/assets/career/`, 1× crops of the export):
- briefcase and level pill icons (20px);
- three 24 × 24 section icons;
- the 22 × 22 check;
- share, link and mail glyphs.

The existing post share icons are smaller (14–16px) than the frame's, so they were not used.

## Kratu AI section standardised (2026-10-13)

"Our AI Solutions — Kratu AI - Full Capabilities" appears on Home, What Is Elixir, Why Elixir and EHR, always through the shared `AiCapabilitiesSection` and `data/aiCapabilities.js`. As requested, Home's approved version is now the only template:
- The `glow` prop is removed. Every page gets Home's layout: six equal cards per breakpoint (rows ≥374px), two-line title space, the `BorderGlow` edge effect with its one-time sweep, and the same responsive steps.
- The static variant's rules (fixed 365/374px rows, the shorter fifth card) are gone.
- On What Is Elixir, Why Elixir and EHR the section is 9px taller than before (1179 vs 1170px at 1280; also taller at tablet and phone widths), matching Home. Everything below it moves down accordingly.
- Content can still vary per page: pass `content` ({ eyebrow, title, description, badge, items }). All four pages currently use the shared content, which is identical in their frames.
- Verified at 1280, 900 and 390px: Home's section is identical before and after (every element's box and computed style), and the three other pages' sections match Home's exactly.

Not included: RCM's "Elixir RCM AI Capabilities" (`RcmAiCapabilitiesSection`) is a different section (its own copy, tagged capability cards, no Kratu badge), so it is unchanged.

## Patient Portal build notes (2026-10-13)

**Source:** a 1280 × 6979 export (`/patient-portal`; the supplied `/patient-portal/` also works). The frame's header still shows the old nav; the live sticky header and footer are used unchanged. Each section was built and compared one at a time. Every section from the hero to "Honest limits / Connected" lands on the export's exact bounds, with text rows matching (most exactly, a few 1px). The alumni and CTA bands match at a −451px offset (the FAQ is shorter; see below). The band means are 1.3–6.1, which is text anti-aliasing.

**Sections:**
1. **Hero:** `PageHero` set up as the EVV hero (72px title pitch, 18/28 description at 640px, 58px CTAs), with the shared `TiltedHeroMedia`. The frame's image is the same grey placeholder as EVV and Denial Management (identical pixels), so it reuses that asset. A page-local `HeroMedia` adds the white "Efficiency — Intake time reduced by 40%" badge.
2. **Highlights strip:** a Deep Purple → #710066 diagonal gradient. Four 287px translucent cards span 1216px (wider than the 1152px container). The fourth title is lime, as drawn.
3. **"What patients can do"** (`#what-patients-can-do`, the hero's second CTA): six 368px surface cards, sized by content (rows 269/264px as in the frame), each with a 48px Deep Purple icon tile and a lime footer tag.
4. **Adoption:** four white reason cards (lime caps pill, "What we do:" in the heading colour, lime outcome line) and a 76px Deep Purple quote band.
5. **Access and permissions:** a 452px argument column (paragraphs, purple-edged callout, "Granular scoping engine" status panel) beside a 652px column. That column holds the relationship table (white card; 170px "Who" column) and the lime-edged behavioral-health panel.
6. **Honest limits / Connected:** 442px and 645px columns.
   - Left: a white note card with "Explore Visit Prep →".
   - Right: four product cards on fixed 156px rows. The two right-hand cards contain hard line breaks, so (as in the frame) they run into the next row and the card below overlaps them (question 107).
7. **FAQ:** the site's shared `FaqSection` (RCM accordion), per the standing rule, so it differs from the frame's open two-column cards (question 108). Items are ordered so each question stays in its frame column.
8. **After discharge:** the same gradient as the strip. Four equal-height cards (fill `rgb(30 0 60 / 0.52)`) with 40px yellow tiles, yellow titles and footers that follow the content.
9. **CTA band:** `CtaBanner` set up as the EVV band (Inter caps eyebrow, −3px title tracking, one 66px "Request a Demo").

**Links:**
- "Request a Demo" (hero and CTA) → `/request-demo`, as on the other pages.
- "See what patients can do" → `#what-patients-can-do`.
- The EHR and RCM cards → `/electronic-health-record`, `/revenue-cycle-management`.
- Contact Center and Scheduling cards are plain (no pages). "Explore Visit Prep" renders as drawn but is not interactive (no page).
- Header: Products → Patient Portal now links here.

**Responsive (no tablet/mobile frames):** grids step down to two columns (≤1023px) and one (≤767px). The frame's hard line breaks are dropped and the Connected cards size to their content below 1024px. The hero badge narrows to fit at 320px.

**Assets** (`src/assets/patient-portal/`, 1× crops of the export; tiles and circles behind them are drawn in CSS): the badge icon, 4 strip icons, 6 task icons and 6 tag icons, the check and shield icons, 4 "Connected" icons, and 4 alumni icons and 4 alumni tag icons.

## Patient No-Show Prediction build notes (2026-10-14)

**Source:** a 1280 × 10825 export (`/patient-no-show-prediction`; the supplied `/patient-no-show-prediction/` also works). The live sticky header and footer are used unchanged. Each section was built and compared one at a time. Every band from the hero to "Where no-show prediction sits" lands on the export's bounds, with band means of 4.6–7.4 (text anti-aliasing). The CTA band and footer match at a −724px offset (the FAQ is shorter; see below).

**Sections** (a page-local `SectionIntro` draws the chip, title and description used by most of them):
1. **Hero:** `PageHero` set up as the EVV hero (18/28 description at 640px, 58px CTAs), with a 44/65 title and the shared `TiltedHeroMedia`. The frame's image is the same grey placeholder as EVV and Patient Portal, so it reuses that asset (question 111). "Calculate what no-shows cost you" has no destination (question 112).
2. **The problem:** 446px and 650px columns, 4px wider each side than the container, as drawn (60px side padding at 1280 only). It holds the quote card, the dark "Clinic study benchmark" card, the highlighted 18.8% chip, and the source line with its DOI link.
3. **Scope:** six cards with a 6px top bar (lime "it predicts / produces", grey "does not …").
4. **Under the hood:** the signal-groups table (a real `<table>`, rows flush to the card's left edge as drawn), the red "Deliberately excluded" panel (two columns filled row by row) and the note. "Responsible AI at Elixir" is plain text (no page).
5. **Operations:** five bands with a 4px coloured left border and a tone pill. As in the frame, the descriptions run 24px past the card's right edge at 1280 (question 113). The Patient Portal link goes to `/patient-portal`; "Elixir Contact Center" is plain text (no page).
6. **A position we hold:** a dark band with 442px and 646px columns and two translucent argument cards.
7. **Honest measurement:** six "Ask for" cards with a 4px top border (row 2 is 309px tall, as drawn; question 114) and the lime-edged "What we will not publish" panel.
8. **Specialty fit:** six dark gradient cards. The frame's hard line breaks are kept at desktop width and dropped below 1024px.
9. **Platform:** six cards. EHR → `/electronic-health-record` and Patient Portal → `/patient-portal` are links; Contact Center, KratuAI, Responsible AI and No-Show ROI Calculator are plain cards (no pages).
10. **FAQ:** the site's shared `FaqSection` (RCM accordion), per the standing rule, so it differs from the frame's open cards. Items are ordered so each question stays in its frame column.
11. **CTA band:** `CtaBanner` set up as the EVV band, with "Request a Demo" → `/request-demo`, "Open the No-Show ROI Calculator" (no page, `aria-disabled`), and a "Related:" row where only Patient Portal links.

**Links:** `/request-demo`, `/patient-portal`, `/electronic-health-record` and the study DOI (`https://doi.org/10.1186/s12913-015-1243-z`; opens in the same tab, like other `RichText` links). Header: Products → Patient No-Show Prediction now links here. No `#` links.

**Responsive (no tablet/mobile frames):**
- Grids step down to two columns (≤1023px) and one (≤767px).
- The Problem section uses the normal container gutter below 1280.
- The signals table stacks each row (group above its signals) below 768px; its column headings are kept for screen readers.
- The hero title drops to PageHero's 32/44 below 768px, and the CTA heading loosens its −3px tracking.
- The two long CTA labels wrap below 480px.
- No horizontal overflow from 320 to 1440.

**Assets** (`src/assets/patient-no-show-prediction/`, 1× crops of the export; tiles behind them are drawn in CSS): the excluded-panel icon and its × mark, and the outreach note icon.

## Contact Center build notes (2026-10-14)

**Source:** a 1280 × 12126 export (`/contact-center`). The live sticky header and footer are used unchanged. Each section was built and compared one at a time. From the hero to "Telephony, Marketing, & Healthcare Integrations", every band lands on the export's bounds, and card edges and text rows match to within 1px. Band means are 4.1–8.7 (text anti-aliasing). The consultation, CTA and footer bands match at a −318px offset because the shared FAQ is shorter (see below). Their means are 6.7 and 3.8.

**Page-local building blocks** (`src/pages/ContactCenter/components/`):
- `CcIntro`: the caps pill chip (lime on light bands, lime-tinted on dark bands), the 42px H2 and the intro.
- `IconTile`: 1× glyph crops on CSS tiles (lime, purple, yellow, dark, red).
- `FeatureCard`: the white card with a 50px tile, 19px title and 14/24 text, shared by the intake, verification and behavioral-health grids.
- `HeroMedia`: the frame's 521 × 460 image card (since moved to the shared `WideTiltedHeroMedia`).

**Sections:**
1. **Hero:** `PageHero` with a 60/68 title, 18/28 description at 576px, and two 56px CTAs. "Request a Demo" has no arrow and "See Agent Experience" has the eye icon (two new optional `PageHero` props). The image is the frame's grey placeholder on its tilted backdrop (question 116).
2. **Highlights strip:** a full-width #f6f3f2 band with 24px corners and four items with hairline dividers.
3. **The agent experience** (`#agent-experience`, the hero's second CTA): the generic-tool card beside the 2px lime-bordered Elixir card.
4. **Intake workflows:** the 455px "Core Engine" card with its checklist (an illustration, static), and four cards on 296/320px rows. The frame breaks "Zero Drops Between / Shifts"; that break is kept at desktop width.
5. **Outreach:** three points beside the omnichannel timeline card (an illustration with example data).
6. **Regulatory compliance** (dark): six rule cards and the white "What Elixir will not claim" panel with a 6px red edge.
7. **Real-time verification:** six feature cards. "Revenue Cycle Management" links to `/revenue-cycle-management`.
8. **Capacity management** (dark): the census board (an illustration with example data).
9. **Analytics & pipeline:** a real `<table>` of six metrics.
10. **Specialty practice:** four cards with a 5px lavender leading edge.
11. **Ecosystem & APIs:** four integration groups with name pills.
12. **FAQ:** the site's shared `FaqSection` (RCM accordion), per the standing rule. It has no chip, its title stays on one line, and every item starts closed (the frame shows the first open). The frame supplies an answer for the first question only, so the other seven render as static rows (question 117).
13. **Consultation:** an intro card beside the shared `ContactForm`. The form is relabelled through its new optional `fieldOverrides` and `consent` props and submits through `services/contactService.js`, as on the other pages. The support phone number is a `tel:` link (question 118).
14. **CTA band:** `CtaBanner` with the eyebrow drawn as the lime chip. "Request a Demo" → `/request-demo` and "Explore the Patient Portal" → `/patient-portal`.

**Links:**
- `/request-demo` (hero and CTA band; it has no page yet and redirects to Home, as on the other pages).
- `#agent-experience`, `/revenue-cycle-management`, `/patient-portal` and `/privacy-policy`.
- `tel:+18884014475`.
- Header: Products → Contact Center now links here. The nav data previously listed `/patient-intake-management/` as the planned URL; the brief specifies `/contact-center`.
- No `#` links.

**Responsive (no tablet/mobile frames):**
- Grids step down to two columns (≤1199/1023px) and one (≤767px).
- The timeline and census board stack their headers.
- The referral table stacks each row on phones; the column headings are kept for screen readers.
- The hero title drops to PageHero's 32/44 below 768px, and long CTA labels wrap below 480px.
- No horizontal overflow from 320 to 1440.

**Assets** (`src/assets/contact-center/`, 1× crops of the export; the tiles and circles behind them are drawn in CSS):
- the hero placeholder (583 × 530, backdrop included);
- 4 strip icons, 2 badge icons and 2 list marks;
- 5 intake, 3 outreach, 4 timeline, 6 verification, 4 behavioral-health, 4 integration and 3 consultation icons;
- the compliance shield and the "will not claim" badge.

## No-Show ROI Calculator build notes (2026-10-15)

**Source:** a 1280 × 8255 export (`/no-show-roi-calculator`). The live sticky header and footer are used unchanged. Each section was built and compared one at a time. From the hero through the executive-summary form, every band lands on the export's bounds, with text rows matching to within 1–2px. Band means are 3.4–6.7 (text anti-aliasing). The CTA band and footer match at a −253px offset because the shared FAQ is shorter (see below); their mean is 2.9.

**The calculator** (`roiModel.js`) implements the arithmetic printed in "How This No-Show ROI Calculator Works", exactly and in the browser only:
- Appointment counts are whole appointments (rounded).
- The resulting no-show rate applies the relative reduction to the current rate (27% off 18.8% is 13.7%), as the field's help text says.
- With the frame's defaults it reproduces every figure drawn: 500, 94, $18,800, 25, 13.7%, $378.00, $5,000, $4,622, 1,223%, $60,000 / $180,000 and $55,464 / $166,392.
- Results follow every edit.
- "Recalculate Estimate" tidies the fields (empty or negative → 0) and announces the ROI to screen readers.
- "Reset Defaults" restores the frame's values.
- With no software cost, ROI shows "—" (no defined return).

**Page-local building blocks** (`src/pages/NoShowRoiCalculator/components/`):
- `RoiIntro`: the Deep Purple caps eyebrow, 48px H2 and intro.
- `NoteCard`: the white card with a 5px coloured edge and "label: text" items, used for the assumptions and the does/does-not-count cards.

**Sections:**
1. **Hero:** `PageHero` set up as the No-Show Prediction hero (44/65 title, 18/28 description at 645px, 58px CTAs), with the shared `TiltedHeroMedia` and the same grey placeholder (question 121). "Open the calculator" → `#calculator`; "How no-show prediction works" → `/patient-no-show-prediction`.
2. **Principles strip:** a 185px Deep Purple band with four columns and inset dividers.
3. **Interactive tool** (`#calculator`): the 604px parameters pane and the results panel. The results panel starts 40px below the card top and runs flush to its right and bottom edges, as drawn.
4. **Transparent logic:** the formulas in Courier New with bold Deep Purple terms, and the lime-edged assumptions card.
5. **Fiduciary precision:** two lavender-edged cards (purple and red titles).
6. **Target setting:** five rows with a 4px coloured edge and a tag (red baseline, yellow lifts, lime high impact).
7. **Clinical benchmarks:** the 516px lead column beside the study notes and source (plain text, as drawn).
8. **Executive brief:** a 760px form. It sends the four fields with the calculator's current inputs and results through `services/contactService.js` (`VITE_CONTACT_ENDPOINT`). Producing and emailing the PDF summary is the endpoint's job (question 122).
9. **FAQ:** the site's shared `FaqSection` (RCM accordion), per the standing rule. It has no eyebrow, its title is centred, and every item starts closed. The frame supplies an answer for the first question only, so the other seven render as static rows (question 123).
10. **CTA band:** `CtaBanner` with a lime caps eyebrow, two 52px Roboto-medium CTAs and a "Related:" row.

**Links:**
- `#calculator`, `/patient-no-show-prediction`, `/patient-portal`, `/contact-center` and `/privacy-policy`.
- `/request-demo` (no page yet; it redirects to Home, as on the other pages).
- Header: Products → Patient No-Show Prediction → No-Show ROI Calculator now links here.
- No `#` links.

**Responsive (no tablet/mobile frames):**
- The calculator stacks the results under the parameters below 1200px; fields go to one column below 768px.
- Grids and the benchmark columns stack.
- Target rows put the tag above the text on phones.
- The hero title drops to 32/44 below 768px, and long CTA labels wrap below 480px.
- No horizontal overflow from 320 to 1440.

**Assets:** none new. The hero reuses the existing grey placeholder (`src/assets/denial-management/hero-media-placeholder.png`), and the page has no icons.

## KratuAI build notes (2026-10-15)

**Source:** a 1280 × 9184 export (`/kratu-ai`). The live sticky header and footer are used unchanged. Each section was built and compared one at a time. From the hero through governance, every band lands on the export's bounds (section edges, card edges and mock-up frames within 1–2px). Band means are 3.6–11.5; the higher figures are the text-dense agent mock-ups. The CTA band and footer match at a −220px offset because the shared FAQ is shorter; their mean is 3.7.

**Shared changes (no visual change elsewhere):**
- `WideTiltedHeroMedia` (`components/sections/`): the 521 × 460 hero image card, moved out of the Contact Center page so both pages use it. Contact Center's hero diff is unchanged.
- `PageHero`: `secondaryCta.iconAfter` draws the secondary icon after the label.
- `Icon`: an `arrowDown` glyph.

**Page-local building blocks** (`src/pages/KratuAi/`):
- `KrIntro`: the caps or pill eyebrow, H2 and intro.
- `AgentSection`: the shared layout of the four agent bands.
- `MockCard`: the product mock-up frame. Header tones: purple, teal, bronze.
- `mocks/`: the four mock-ups. They are illustrations with example data, not live data.

**Sections:**
1. **Hero:** `PageHero` with a 54/61 title ("Revenue Cycle" in lime), 18/28 description at 560px, two 56px CTAs ("Explore the 4 Agents" with a trailing down arrow), and the grey placeholder (question 126). The frame's breadcrumb reads "Contact Center", carried over from that frame; the page shows "KratuAI" (question 127).
2. **Unified architecture** (`#four-agents`): four stage cards with coloured bars; the first is highlighted. Each "View Agent 0x" link scrolls to its agent band. Then the handoff note.
3. **Agent bands:** Visit Prep (`#visit-prep`), Kratu Co-Pilot (`#kratu-co-pilot`), Payor Policy Intelligence (`#payor-policy-intelligence`) and A/R Agent (`#ar-agent`). Each has a lavender chip, purple title, paragraphs, an edge-coloured quote, four feature cards and its mock-up, alternating sides. The frame's hairline dividers above Co-Pilot and below Payor Policy are reproduced.
4. **Platform cohesion** (dark): four translucent cards with lime-tinted icon tiles.
5. **Responsible governance:** the agent / AI / human table and the PHI note with its certification badge (question 128).
6. **FAQ:** the site's shared `FaqSection` (RCM accordion), per the standing rule. It has no eyebrow and every item starts closed. The frame supplies an answer for the first question only, so the other five render as static rows (question 129).
7. **CTA band:** `CtaBanner` with a pill eyebrow, a one-line 41px title and one yellow "Request a KratuAI Demo".

**Links:**
- `/request-demo` (both demo CTAs).
- `#four-agents` and the four agent anchors.
- Header: AI Ecosystem → KratuAI now links here. Visit Prep, Elixir Co-Pilot (Clinical Assistant), Payor Policy Intelligence and A/R Agent link to their child pages.
- Every "Explore …" button links to its agent page: `/kratu-ai/visit-prep`, `/kratu-ai/elixir-co-pilot-clinical-assistant`, `/kratu-ai/payor-policy-intelligence` and `/kratu-ai/ar-agent` (added with those pages). Their labels end in a missing-glyph box in the frame, which is left out (question 130).
- No `#` links.

**Responsive (no tablet/mobile frames):**
- Agent bands stack, with the mock-up under the copy.
- Grids step down to two columns and then one.
- The governance table stacks each row on phones; the A/R worklist scrolls horizontally inside its card.
- Hero and CTA titles drop to 32/30px on phones.
- No horizontal overflow from 320 to 1440.

**Assets** (`src/assets/kratu-ai/`, 1× crops of the export):
- the handoff check;
- four mock-up header icons (chat, ambient, document, dollar);
- four cohesion icons.

The hero reuses the Contact Center placeholder.

## Visit Prep build notes (2026-10-15)

**Source:** a 1280 × 7389 export, built as a child page of KratuAI (`/kratu-ai/visit-prep`; files in `src/pages/KratuAi/VisitPrep/`, data in `data/visitPrep.js`). It reuses the parent's `KrIntro` (new `tone="lime"`: lime eyebrow, dark title, grey intro). The live sticky header and footer are used unchanged. Each section was built and compared one at a time. From the hero through the clinician band, every band lands on the export's bounds (rows within 1–2px). Band means are 3.2–9.9; the higher figures are the text-dense chart mock-up. The CTA band and footer match at a −479px offset (the FAQ is shorter; see below); their mean is 2.6.

**Parent–child connection:**
- KratuAI's "Explore Visit Prep Details" now links here (`AgentSection` gained an optional `agent.ctaTo`).
- Header: AI Ecosystem → KratuAI → Visit Prep now links here.
- The breadcrumb follows the frame ("Home > Visit Prep").

**Sections:**
1. **Hero:** the KratuAI hero set-up with a 52/60 title ("Zero Portal Login" in lime) and the shared `WideTiltedHeroMedia` placeholder (question 131). "Request a Visit Prep Demo" → `/request-demo`; "Explore Clinical Flow" → `#clinical-flow`.
2. **Highlights strip:** a white band with four items on 3px coloured edges.
3. **Step-by-step architecture** (`#clinical-flow`): six step cards with a 4px top edge (purple: automated by Elixir; lime: patient action), a tag, a title and text, plus the legend.
4. **Context-aware pathways:** new vs returning patient cards with gradient headers and ordered steps ("Step Bypassed" and "AI Active" pills).
5. **Identity and language:** two feature cards. The language toggle is drawn as an illustration (not interactive).
6. **Governance boundary:** "What the AI does / never does" cards (lime and red top edges).
7. **Clinician experience** (dark): the encounter-chart mock-up (an illustration with example data) beside the copy. The frame sits the copy 9px above centre; reproduced.
8. **FAQ:** the site's shared `FaqSection` (RCM accordion), per the standing rule, with all eight answers from the frame. The frame shows every answer open in green-topped cards; here they start closed. Items are ordered so each question stays in its frame column.
9. **CTA band:** `CtaBanner` with a yellow-text pill eyebrow, "Schedule a Clinical Demo" (yellow) → `/request-demo`, and "Contact Solutions Team" → `/contact-us`. Then the "Explore additional AI capabilities" line: Kratu Co-Pilot and Payor Policy Intelligence have no pages yet, so they render as drawn but are not links (question 132).

**Links:**
- `/request-demo`, `#clinical-flow` and `/contact-us`.
- Parent: `/kratu-ai` (header).
- No `#` links.

**Responsive (no tablet/mobile frames):**
- Grids step down to two columns and then one.
- The pathway, safeguard and boundary cards stack.
- The chart mock-up sits above the copy.
- Hero and CTA titles drop to 32/30px on phones; long CTA labels wrap.
- No horizontal overflow from 320 to 1440.

**Assets** (`src/assets/kratu-ai/`, 1× crops of the export):
- the shield and globe tile icons;
- the does / never-does marks;
- the chart's star;
- the lime check.

The hero reuses the shared placeholder.

## Elixir Co-Pilot (Clinical Assistant) build notes (2026-10-15)

**Source:** the "Kratu Co-Pilot" 1280 × 9771 export, cropped from its 2px frame. It is built as a child page of KratuAI (`/kratu-ai/elixir-co-pilot-clinical-assistant`; files in `src/pages/KratuAi/CoPilot/`, data in `data/coPilot.js`) and reuses the parent's `KrIntro`. The live sticky header and footer are used unchanged. Each section was built and compared one at a time, at 1280.

Band means against the export:
- Hero through Visit Flow: 3.0–4.2, landing on the export's bounds.
- Insights, Dictation and the safety boundary: 5.5–7.7, with rows within 1–2px.
- Clinical control: 13.3, because the mock-up's first block is 16px shorter (see below).
- CTA band: 4.2; footer: 1.4.

The page is 420px shorter than the export in total, for two reasons:
- The FAQ starts closed (the frame shows every answer open).
- Forced line breaks in four card texts are dropped, which takes 3–17px off those bands.

**Parent–child connection:**
- KratuAI's Kratu Co-Pilot "Explore …" button now links here (`agent.ctaTo`).
- Header: AI Ecosystem → KratuAI → Elixir Co-Pilot (Clinical Assistant) now links here.
- The breadcrumb follows the frame ("Home > Kratu Co-Pilot"; question 139).

**Sections:**
1. **Hero:** the KratuAI hero set-up with a five-line 53.5/54.5 title and the shared `WideTiltedHeroMedia` placeholder (question 135). "Request a Kratu Co-Pilot Demo" → `/request-demo`; "See the three features" → `#features`.
2. **Pillars strip:** four cards on 4px coloured left edges, with a hairline below.
3. **Overview** (`#features`): three feature cards whose links scroll to `#visit-flow`, `#insights-pane` and `#template-dictation`.
4. **Feature 01, Visit Flow** (`#visit-flow`):
   - six step cards with a 4px top edge (purple: Kratu AI; lime: clinician action) and the legend;
   - the frame's "Generic image placeholder" box, reproduced as the empty frame without the designer's note (question 136).
5. **Feature 02, Insights** (`#insights-pane`): the Insights pane mock-up (tabs, three lab cards, three alert rows, footer), then four capability cards.
6. **Feature 03, Template Dictation** (`#template-dictation`): a centred intro and the dictation mock-up (voice stream panel, six parsed fields, footer).
7. **Clinical safety boundary:** four cards, each with a guarantee line under a hairline. Card texts keep a four-line minimum, so the dividers line up as in the frame.
8. **Clinical control:** three items beside the Mental Status Exam template mock-up, with the columns top-aligned as in the frame.
9. **Behavioral health:** an eyebrow, a title, three paragraphs and the illustration note, on the FAQ's band colour.
10. **FAQ:** the site's shared `FaqSection` (RCM accordion), per the standing rule, with all six answers from the frame.
    - The answers start closed (the frame shows them open).
    - Items are ordered so each question stays in its frame column.
    - The frame's "Got questions?" eyebrow and its own card styling are not part of the shared design (question 140).
11. **CTA band:** `CtaBanner` with a yellow-text pill eyebrow, a two-line 48px title, "Request a Kratu Co-Pilot Demo" (yellow) → `/request-demo`, "Schedule a 15-Minute Workflow Walkthrough" → `/contact-us`, and the footnote line (question 137).

Every mock-up is a static illustration of the frame's example data. Its tabs, buttons and actions are spans inside a labelled `figure`, not controls, so nothing links to `#`.

**Dropped forced line breaks:**
- the Insights capability cards ("screenings, / mammograms", "encounter details / against");
- the safety cards (Prescriptions, Specialist Referrals);
- the first MSE block ("calm / with");
- the FAQ answers.

These breaks fall mid-sentence in the frame and look like pasted-text artefacts, so the text wraps naturally instead (question 141).

**Links:**
- `/request-demo` and `/contact-us`.
- `#features`, `#visit-flow`, `#insights-pane` and `#template-dictation`.
- Parent: `/kratu-ai` (header).
- No `#` links.

**Responsive (no tablet/mobile frames):**
- Grids step down to two columns and then one.
- The Insights alerts and the dictation header wrap their action or badge under the copy.
- The pane tabs scroll sideways on phones.
- The control columns stack.
- Hero and CTA titles drop to 32/30px on phones; long CTA labels wrap.
- No horizontal overflow from 320 to 1440.

**Assets** (`src/assets/kratu-ai/`, 1× glyph crops of the export; tiles are drawn in CSS):
- the pillar, overview, tab, alert, insight, dictation, safety and control icons (`copilot-*.png`).

The hero reuses the shared placeholder.

## Electronic Prior Authorization build notes (2026-10-19)

**Source:** a 1280 × 8991 export, built as a child page of Revenue Cycle Management (`/revenue-cycle-management/electronic-prior-authorization`; files in `src/pages/ElectronicPriorAuthorization/`, data in `data/electronicPriorAuthorization.js`). The live sticky header and footer are used unchanged. Each section was built and compared one at a time, at 1280.

Results against the export:
- From the hero through the Benefits band, every band lands on the export's bounds, hairlines included. Band means are 3.0–3.4 for the first four sections and 6.4–9.6 for the text-dense workflow, feature and benefit bands.
- The Who Uses band is 20px shorter (dropped forced line breaks; see below).
- Why Elixir and the CTA band match at a −21/−22px offset (means 5.6 and 6.8).
- The whole page is 8983px tall against the export's 8991px.

**Parent–child connection:**
- Header: Products → Revenue Cycle Management → Electronic Prior Authorization now links here (the nav item had no route before).
- The route nests under the parent's path, as specified. The other RCM children (Eligibility Verification, Denial Management, Claim Preparation) keep their flat routes.
- The breadcrumb follows the frame ("Home > Electronic Prior Authorization"; question 145).

**Sections:**
1. **Hero:** `PageHero` with `TiltedHeroMedia` and the existing grey placeholder (`denial-management/hero-media-placeholder.png`, the same export; question 142). "Request a Demo →" goes to `/request-demo` and "Explore Elixir" to `/what-is-elixir` (question 144).
2. **From Clinical Need to Authorized Care:** five numbered white cards with a faint shadow.
3. **AI-Powered Prior Authorization** (dark, with the frame's hairlines as borders): four stage cards, each with a yellow-text outcome pill, plus the footnote.
4. **Shared data:** three white cards on the surface band; two carry lime pills ("Standard product feature", "Configured for your organization").
5. **Workflow:** ten step cards in two rows. Cards in a row share a height. In the frame, steps 3 and 5 are 15px taller than their neighbours; that difference is not reproduced.
6. **Feature rows:** seven alternating rows, each pairing copy and a checklist with a product window.
   - The window title bar (dots, title, status pill) is drawn in HTML; the screenshot body is exported from the frame at 1× (question 143).
   - The clearinghouse row shows the EDI 278 flow card, built in HTML.
   - Copy and media are centred on each other, and the rows keep the frame's uneven gaps, so every window lands at its frame position.
7. **Benefits** (dark): ten outlined tiles, the last two spanning two columns. In the frame, the second-column tiles of rows 1–2 are 16px taller and overlap the next row; they are drawn at the common height here.
8. **Who Uses:** seven cards, the last spanning two columns.
9. **Why Elixir:** five module cards (plain, no links, as drawn). The Prior Authorization card has the frame's purple outline.
10. **CTA band:** `CtaBanner` with a lime caps eyebrow, a tight two-line title, "Request a Demo" → `/request-demo` and "Talk to an Elixir Expert" → `/contact-us` (question 144).

**Dropped forced line breaks:** many paragraphs in the frame break mid-sentence (for example "with the patient, care / episode, / insurance", "Validate completeness before anything / leaves the organization"). They look like pasted-text artefacts, so the text wraps naturally. This is why a few text-led blocks are shorter than the frame (question 146).

**Links:**
- `/request-demo`, `/what-is-elixir` and `/contact-us`.
- Parent: `/revenue-cycle-management` (header).
- No `#` links.

**Responsive (no tablet/mobile frames):**
- Grids step down from five or four columns to three or two, then one.
- Feature rows stack with the copy first, each window under its copy.
- On phones, window pills are hidden and the CTA title drops to 30px; long CTA labels wrap.
- No horizontal overflow from 320 to 1440.

**Assets** (`src/assets/electronic-prior-authorization/`, 1× crops of the export):
- three tile icons and the checklist tick;
- six screenshot bodies (`screen-*.png`, 554px wide).

The hero reuses the Denial Management placeholder.

## A/R Agent build notes (2026-10-19)

**Source:** the "Revenue Kratu AI" 1280 × 10211 export, built as a child page of KratuAI at `/kratu-ai/ar-agent` (files in `src/pages/KratuAi/ArAgent/`, data in `data/arAgent.js`).
- The brief named the route `/kartu-ai/ar-agent`. The parent and its other children live under `/kratu-ai`, so the page sits there and `/kartu-ai/ar-agent` redirects to it (question 147).
- The live sticky header and footer are used unchanged. Each section was built and compared one at a time, at 1280.

Results against the export:
- Every band lands on the export's height except the process band, which is 50px shorter (see below). The feature bands, Knowledge Base and CTA match at a −51px offset.
- Text in every band lines up within 1–2px of the export.

**Parent–child connection:**
- KratuAI's "Explore the A/R Agent" button now links here (`ctaTo`).
- Header: AI Ecosystem → KratuAI → A/R Agent now links here.
- The breadcrumb shows "A/R Agent"; the frame's reads "Kratu Co-Pilot", copied from that page's frame (question 148).

**Sections:**
1. **Hero:** the KratuAI hero set-up with a one-line title and the shared `WideTiltedHeroMedia` placeholder (question 149). "Explore Live Demo" → `/request-demo`; "View Architecture" → `#capabilities` (question 150).
2. **Your next denial is often predictable:** four white cards on lime top edges. Each card's link label scrolls to its feature band (question 150).
3. **Revenue Kratu AI capabilities** (dark): eight model cards, each with the lime model tag and its stage pill.
4. **Kratu AI prepares the work:** three phase panels with numbered steps; the team's steps are lavender. Two steps wrap differently in the frame (a two-line "Claim Recommendation" title and a three-line "Review and send" text, from fixed text-box widths), so the first and last panels are 27px and 22px shorter.
5. **Six feature bands** from one `FeatureRow`: chip, title, purple subtitle and paragraph, with the risk legend, key-advantage box or sparkle note where drawn.
   - Each mock-up (patient record, AI Patient Insights, Claim Recommendation Matrix, Active Adjudication Queue, denial root cause, Payer Settlement Range) is exported from the frame at 1× with its shadow. Negative margins align the frame itself with the column.
   - Each image has alt text describing its example data.
6. **Knowledge Base:** the shared `ResourcesSection` with Home's content (the frame shows the same cards). Its bottom padding is trimmed to the frame's 80px on this page only.
7. **CTA band:** `CtaBanner` with a lime-outlined pill eyebrow, "Request a Demo" → `/request-demo` and "Contact Specialist" → `/contact-us`.

**Links:**
- `/request-demo` and `/contact-us`.
- `#capabilities` and the four feature anchors.
- The Knowledge Base cards keep Home's links.
- Parent: `/kratu-ai` (header and the KratuAI agent button).
- No `#` links.

**Responsive (no tablet/mobile frames):**
- Grids step down to two columns and then one.
- Feature bands stack below 1200px with the copy first, and mock-ups scale to the column.
- The CTA pill wraps on phones; hero and CTA titles drop to 32/30px; long CTA labels wrap.
- No horizontal overflow from 320 to 1440.

**Assets** (`src/assets/kratu-ai/`, 1× crops of the export):
- four value icons (`ar-value-*.png`);
- the lime model tag and the sparkle badge;
- six mock-ups (`ar-mock-*.png`).

The hero reuses the shared placeholder.

## Payor Policy Intelligence build notes (2026-10-19)

**Source:** a 1280 × 10021 export, built as a child page of KratuAI at `/kratu-ai/payor-policy-intelligence` (files in `src/pages/KratuAi/PayorPolicy/`, data in `data/payorPolicy.js`).
- As with the A/R Agent, the brief's `/kartu-ai/payor-policy-intelligence` redirects to it (question 147).
- The live sticky header and footer are used unchanged. Each section was built and compared one at a time, at 1280.

Results against the export:
- From the hero through the Boundaries table, every band lands on the export's height within 1–2px, except the problem band: it is 23px shorter because the first stage card's forced line break ("rule / came from.") is dropped.
- Band means are 2.5–7.7, apart from the two stage bands with their mock-ups (9.6–11.8, text-dense).
- The FAQ band is shorter (see below); the CTA band matches within 1–2px.

**Parent–child connection:**
- KratuAI's "Explore Policy Intelligence" button now links here (`ctaTo`).
- Header: AI Ecosystem → KratuAI → Payor Policy Intelligence now links here.
- The breadcrumb follows the frame ("Home > Kratu Payor Policy Intelligence").

**Sections:**
1. **Hero:** the KratuAI hero set-up with a five-line title and the shared `WideTiltedHeroMedia` placeholder (question 152). "Request a Demo" → `/request-demo`; "See how it works" → `#how-it-works` (question 153).
2. **Highlights strip:** a near-black strip of four promises, divided by hairlines.
3. **The problem** (`#how-it-works`): the paragraph, the three stage cards (purple, lime and magenta edges) whose links scroll to `#stage-01`, `#stage-02` and `#stage-03`, and the lavender summary line.
4. **Stage 01** (`#stage-01`): six numbered step cards (the team's step in lime) and the legend.
5. **Confidence routing:** three confidence cards with tinted header bands, and the "Two rules that do not bend" box (`PpRuleBox`).
6. **Stage 02** (`#stage-02`) and **Stage 03** (`#stage-03`) from one `StageRow`: copy, paragraphs and a lavender summary beside the frame's illustrative interface.
   - Each interface is exported at 1× with its shadow, and the frame's disclaimer is rendered as the figure caption.
   - Stage 02's mock-up starts level with the copy; Stage 03's copy is centred 11px low, both as in the frame.
7. **How the score is built:** the deterministic and probabilistic lists (purple and teal) and "The rule that governs both".
8. **Audit** (dark): four guarantees with lime icon tiles.
9. **Boundaries:** a real `<table>` of what is not included and what happens instead; rows stack on phones.
10. **FAQ:** the site's shared `FaqSection` (RCM accordion), per the standing rule, with all eight answers from the frame.
    - The frame shows a left-aligned heading on a white band and every answer open in lime-topped cards. The shared accordion keeps its own design and band, and its answers start closed, so the band is 557px shorter.
    - Items are ordered so each question stays in its frame column.
11. **CTA band:** `CtaBanner` with a lime caps eyebrow and one yellow "Request a Demo" → `/request-demo`. Below it, the related links: "Explore Revenue Kratu AI" → `/kratu-ai/ar-agent`, "Kratu Co-Pilot" → `/kratu-ai/elixir-co-pilot-clinical-assistant`, "Kratu AI overview" → `/kratu-ai`.

**Links:**
- `/request-demo`.
- `#how-it-works` and the three stage anchors.
- The three KratuAI pages above.
- Parent: `/kratu-ai` (header, the KratuAI agent button and the CTA band).
- No `#` links.

**Responsive (no tablet/mobile frames):**
- Grids step down to two columns and then one.
- The stage rows stack below 1280px, because the mock-ups keep their frame size up to that width. The mock-ups then scale to the column.
- The highlights strip goes to 2 × 2, then one column.
- The boundaries table stacks each row on phones.
- Hero and CTA titles drop to 32/30px on phones.
- No horizontal overflow from 320 to 1440.

**Assets** (`src/assets/kratu-ai/`, 1× crops of the export):
- three confidence icons (`pp-confidence-*.png`);
- four audit icons (`pp-audit-*.png`);
- the two illustrative interfaces (`pp-mock-*.png`).

The hero reuses the shared placeholder.

## Responsible AI build notes (2026-10-20)

**Source:** a 1280 × 12168 export, built at `/responsible-ai` (files in `src/pages/ResponsibleAi/`, data in `data/responsibleAi.js`).
- **Parent page: none.** Responsible AI is an independent, top-level page. It is not nested under KratuAI or any other route, and its breadcrumb is "Home > Responsible AI".
- Header: AI Ecosystem → Responsible AI is a top-level item in that menu, not a child of KratuAI.
- The live sticky header and footer are used unchanged. Each section was built and compared one at a time, at 1280.

Results against the export:
- From the hero through "What we do not claim", and the CTA band, every band lands on the export's height within 1px.
- The FAQ band is shorter (see below).

**Sections:**
1. **Hero:** the KratuAI hero set-up with a four-line title, two paragraphs (the second in yellow, bold) and the shared `WideTiltedHeroMedia` placeholder (question 156). "Read the principles" → `#clinical-principles`; "Questions to ask any vendor" → `#vendor-questions` (question 157).
2. **The rule behind everything:** the "KratuAI prepares" card (dark), the irreversible human gate and the "Your team decides" card (light), then the lavender callout.
3. **Clinical principles** (`#clinical-principles`): five numbered principles, each with its "How it is enforced" box (`RaEnforced`); principles 2 and 4 put the box first, as in the frame.
4. **Revenue principles:** three swimlanes of two principles, with teal "How it is enforced" boxes.
5. **Audit:** the intro, the ledger note and a real `<table>` of what is produced and what is retained.
6. **Patient data** (dark): four cards with icon tiles and labels.
7. **Vendor questions** (`#vendor-questions`): eight evaluation points with lime-edged guidance.
8. **What we do not claim:** four non-claims inside the red-edged frame.
9. **FAQ:** the site's shared `FaqSection` (RCM accordion), per the standing rule, with all eight answers from the frame.
   - The frame shows an "Answers" chip, a left-aligned heading and every answer open in lime-edged cards. The shared accordion keeps its own design, and its answers start closed, so the band is 589px shorter (question 158).
   - Items are ordered so each question stays in its frame column.
10. **CTA band:** `CtaBanner` with a light-blue caps eyebrow, the one-line title and a lime "Request a KratuAI Demo" → `/request-demo`. Below it, the related links: "KratuAI overview" → `/kratu-ai`, "Kratu Co-Pilot" → `/kratu-ai/elixir-co-pilot-clinical-assistant`, "Payor Policy Intelligence" → `/kratu-ai/payor-policy-intelligence`.
    - The frame's long underline running past the links is treated as an export artefact and not reproduced (question 161).

**Links:**
- `/request-demo`.
- `#clinical-principles` and `#vendor-questions`.
- The three KratuAI pages above.
- No `#` links.

**Responsive (no tablet/mobile frames):**
- The rule diagram stacks below 1200px.
- Grids step down to two columns and then one.
- The audit table stacks each row on phones.
- Hero and CTA titles drop to 32/30px on phones.
- No horizontal overflow from 320 to 1440.

**Assets** (`src/assets/responsible-ai/`, 1× crops of the export):
- the gate and enforcement icons (`icon-shield-check`, `icon-shield`, `icon-shield-outline`, `icon-check`, `icon-x`);
- four data-card icons (`icon-data-*.png`).

The hero reuses the shared placeholder.

## Behavioral Health build notes (2026-10-20)

**Source:** a 1280 × 10709 export, built at `/behavioral-health` (files in `src/pages/BehavioralHealth/`, data in `data/behavioralHealth.js`).
- **Parent page: none.** Behavioral Health is an independent, top-level route. Its breadcrumb is "Home > Behavioral Health".
- Header: the existing Solutions → Behavioral Health item now links here. Its Mental Health and Substance Use Disorder children stay unlinked (no pages yet).
- The live sticky header and footer are used unchanged. Each section was built and compared one at a time, at 1280.

Results against the export:
- Every band from the hero through the KratuAI section, and the CTA band, lands on the export's height exactly (622, 420, 1096, 1280, 990, 1144, 1280, 1122, 529).
- Text lines sit within 0–1px and wrap as in the frame.
- The FAQ band is shorter (see below).

**Sections:**
1. **Hero:** the KratuAI hero set-up with a four-line title, an off-white description and the shared `WideTiltedHeroMedia` placeholder (question 162). "Request a Demo" → `/request-demo`; "Mental health or substance use" → `#two-paths` (question 163).
2. **Pillars strip:** four dark cards with yellow icon tiles and titles on the primary-purple band.
3. **The case for one platform:** the white callout with its info icon and three numbered cards with coloured footer labels.
4. **Two paths** (`#two-paths`): the mental health and substance use disorder service-line cards on 8px coloured top edges.
   - "Explore the mental health EHR" and "Explore the substance use disorder EHR" render as text, because those pages do not exist yet (question 164).
5. **Connected** (dark): four numbered steps with labelled footers and the Salesforce note.
6. **Measurable:** six surface cards with icon tiles.
7. **Compliance:** six white cards and the footnote bar. "Go to Substance Use Disorder Page" renders as text (question 164).
8. **KratuAI across behavioral health** (dark): six whole-card links and the limits note:
   - Visit Prep → `/kratu-ai/visit-prep`;
   - Kratu Co-Pilot → `/kratu-ai/elixir-co-pilot-clinical-assistant`;
   - Payor Policy Intelligence → `/kratu-ai/payor-policy-intelligence`;
   - No-Show Prediction → `/patient-no-show-prediction`;
   - Responsible AI → `/responsible-ai`;
   - The KratuAI engine → `/kratu-ai`.
9. **FAQ:** the site's shared `FaqSection` (RCM accordion), per the standing rule, with all six answers from the frame.
   - The frame shows a left-aligned heading on a white band and every answer open in lime-topped cards. The shared accordion keeps its own design and band, and its answers start closed, so the band is 1115px shorter (question 165).
   - Items are ordered so each question stays in its frame column.
10. **CTA band:** `CtaBanner` with a lime outlined pill eyebrow, two 57px buttons and the "Related links" row.
    - "Request a Demo" → `/request-demo`.
    - "Explore the platform" → `/platform`, the destination the approved pages already use for their platform CTAs (question 163).
    - "Mental Health" and "Substance Use Disorder" render as text (question 164).

**Responsive (no tablet/mobile frames):**
- Grids step down to two columns and then one.
- The service-line cards stack below 1024px.
- The compliance footnote stacks its link under the sentence on phones.
- Hero and CTA titles drop to 32/30px, and section titles to 32px, on phones.
- No horizontal overflow from 320 to 1440.

**Assets** (`src/assets/behavioral-health/`, 1× crops of the export):
- `icon-pillar-*` (4);
- `icon-info`;
- `icon-legacy-split`, `icon-within-record`, `icon-fragmentation`;
- `icon-mental-health`, `icon-substance-use`;
- `icon-check-circle`, `icon-arrow-right`;
- `icon-step-*` (4), `icon-cloud-check`;
- `icon-measure-*` (6);
- `icon-chevron-right`, `icon-arrow-up-right`, `icon-badge-check`.

The hero reuses the shared placeholder.

## Mental Health build notes (2026-10-21)

**Source:** a 1280 × 14226 export, built at `/behavioral-health/mental-health` (files in `src/pages/MentalHealth/`, data in `data/mentalHealth.js`).
- **Parent page: none.** The route is a flat, top-level route: it is not nested under `/behavioral-health` in the router, and the page has no parent relationship.
- The frame's breadcrumb reads "Home > Behavioral Health", reproduced as drawn (question 167).
- Header: Solutions → Behavioral Health → Mental Health now links here.
- Behavioral Health's "Explore the mental health EHR" and its "Mental Health" related link now link here too.
- The live sticky header and footer are used unchanged. Each section was built and compared one at a time, at 1280.
- The section intros reuse Behavioral Health's `BhIntro` (the same frame family).

Results against the export:
- Every band from the hero through the KratuAI section, and the CTA band, lands on the export's height exactly: 730, 236, 1898, 2027, 1173, 1420, 862, 1113, 1132, 1032 and 653.
- Text lines sit within 0–1px and wrap as in the frame, including both tables.
- The FAQ band differs (see below).

**Sections:**
1. **Hero:** the KratuAI hero set-up with a six-line title and the shared `WideTiltedHeroMedia` placeholder (question 168). "Request a Demo" → `/request-demo`; "See measurement-based care" → `#measurement` (question 169).
2. **Highlights strip:** four dark cards, each with a lime icon beside the title. Each card keeps its frame text width (`textWidth`).
3. **Measurement** (`#measurement`): four evidence cards, with the non-significant result muted and chipped as drawn; the note bar; the white "What the platform does with a measure" panel; and the Standard Instruments table (`MhTable`, a real `<table>`).
4. **Integrated care:** three paragraphs, three numbered cards, and the billing-codes table with the four lime-tinted rows.
5. **Community programs** (dark): six cards with lime icon labels.
6. **Crisis:** five surface rows, each with a coloured chip, its text and a right-hand badge. The two-line "Safety plan" chip keeps its frame width.
7. **Telehealth:** one white panel with the two rule periods side by side.
8. **Documentation** (dark): twelve cards, four per row.
9. **Revenue:** nine surface cards.
10. **KratuAI for Mental Health:** four white cards and the red "What AI does not do here" panel. The cards are not links in the frame, so they are not linked here.
11. **FAQ:** the site's shared `FaqSection` (RCM accordion), per the standing rule, with all eight answers from the frame.
    - The frame shows a left-aligned heading and every answer open in surface cards. The shared accordion keeps its own design, and its answers start closed (question 170).
    - Items are ordered so each question stays in its frame column.
12. **CTA band:** `CtaBanner` with a solid lime pill eyebrow and two 52px buttons.
    - "Request a Demo" → `/request-demo`.
    - "Substance use disorder EHR" → `/behavioral-health/substance-use-disorder`.
    - The three related resources render as text (question 171).

**Responsive (no tablet/mobile frames):**
- Grids step down to two columns and then one.
- Both tables stack each row into label/value pairs on phones.
- Crisis rows put the badge under the copy below 1024px.
- Hero and CTA titles drop to 32/30px, and section titles to 32px, on phones.
- No horizontal overflow from 320 to 1440.

**Assets** (`src/assets/mental-health/`, 1× crops of the export):
- `icon-strip-*` (4);
- `icon-measure-*` (6);
- `icon-community-*` (6);
- `icon-crisis-bell`, `icon-crisis-shield`;
- `icon-kratu-*` (4);
- `icon-ai-gavel`, `icon-ai-ban`;
- `icon-cta-arrow`.

The hero reuses the shared placeholder.

## Substance Use Disorder build notes (2026-10-21)

**Source:** a 1280 × 14877 export, built at `/behavioral-health/substance-use-disorder` (files in `src/pages/SubstanceUseDisorder/`, data in `data/substanceUseDisorder.js`).
- **Parent page: none.** The route is flat and top-level, like Mental Health. It is not nested under `/behavioral-health` in the router.
- The breadcrumb follows the frame: "Home > Substance Use Disorder".
- Header: Solutions → Behavioral Health → Substance Use Disorder now links here.
- These links, which were waiting for this page, now point here:
  - Behavioral Health: "Explore the substance use disorder EHR", "Go to Substance Use Disorder Page" and its "Substance Use Disorder" related link;
  - Mental Health: the CTA's "Substance use disorder EHR" button.
- The live sticky header and footer are used unchanged. Each section was built and compared one at a time, at 1280.
- This frame uses its own intro scale (14px caps eyebrow, 36/44 title, 16/24 description), so it has a page-local `SudIntro` rather than reusing `BhIntro`.

Results against the export:
- Every band from the hero through the KratuAI section, and the CTA band, lands on the export's height exactly: 704, 248, 1666, 528, 1352, 1284, 942, 1314, 1240, 1028, 876, 1140 and 580.
- Text lines sit within 0–1px and wrap as in the frame, including the 12-row crosswalk table.
- The FAQ band differs (see below).

**Sections:**
1. **Hero:** the KratuAI hero set-up with a five-line title and the shared `WideTiltedHeroMedia` placeholder (question 174). "Request a Demo" → `/request-demo`; "See the level-of-care coverage" → `#continuum` (question 176).
2. **Highlights strip:** four outlined cards on a near-black band.
3. **Continuum** (`#continuum`): the ASAM Third-to-Fourth Edition crosswalk as a real `<table>`, with its caption bar, "Removed"/"New" chips and closing note.
4. **The real problem:** the title and callout on the left, three paragraphs on the right.
5. **Assessment:** six dimension cards and the lime-edged "What the platform does with the assessment" panel.
6. **Compliance** (dark): the six 42 CFR Part 2 cards (`Part2Cards`) and the note.
7. **Medication:** the methadone take-home schedule table and three workflow cards.
8. **Admissions:** six white rows, each with a lime, yellow or red chip and a right-hand pill.
9. **Clinical** (dark): the frame repeats the same six Part 2 cards word for word, on a tighter grid, followed by the withdrawal-management note (question 175).
10. **Revenue:** nine numbered cards. The ninth ends with the frame's inline link "See how Payor Policy Intelligence works" → `/kratu-ai/payor-policy-intelligence`.
11. **Outcomes:** six white cards.
12. **KratuAI for Substance Use Disorder Treatment:** six labelled cards (not links in the frame, so not linked here) and the red-edged "What AI does not do here" panel.
13. **FAQ:** the site's shared `FaqSection` (RCM accordion), per the standing rule, with all eight answers from the frame.
    - The frame shows a left-aligned heading and every answer open in white cards. The shared accordion keeps its own design, and its answers start closed (question 177).
    - Items are ordered so each question stays in its frame column.
14. **CTA band:** `CtaBanner` with a dark pill eyebrow.
    - "Request a Demo" → `/request-demo`.
    - "Explore the EHR" → `/electronic-health-record`.
    - Related links: "Revenue Cycle Management" → `/revenue-cycle-management`, "KratuAI" → `/kratu-ai`, "Patient Portal" → `/patient-portal`.

**Responsive (no tablet/mobile frames):**
- Grids step down to two columns and then one.
- The crosswalk table stacks each row into label/value pairs on phones.
- The two-column sections (the real problem, medication) stack below 1024px, and the admission rows put the pill under the copy.
- Hero and CTA titles drop to 32/30px, and section titles to 30px, on phones.
- No horizontal overflow from 320 to 1440.

**Assets** (`src/assets/substance-use-disorder/`, 1× crops of the export):
- `icon-strip-*` (4);
- `icon-dimension-1…6`, `icon-check-circle`;
- `icon-part2-*` (6);
- `icon-kratu-*` (6), `icon-ai-x-circle`.

The hero reuses the shared placeholder.

## Care Coordination build notes (2026-10-21)

**Source:** a 1280 × 14504 export, built at `/care-coordination` (files in `src/pages/CareCoordination/`, data in `data/careCoordination.js`).
- **Parent page: none.** Care Coordination is an independent, top-level route. Its breadcrumb is "Home > Care Coordination".
- Header: the existing Solutions → Care Coordination item now links here.
- The live sticky header and footer are used unchanged. Each section was built and compared one at a time, at 1280.
- The section intros reuse `BhIntro` at this frame's 36/44 title size. `BhIntro` gained a `--bh-title-size` variable for this; its default stays 48px, so Behavioral Health and Mental Health are unchanged.

Results against the export:
- Every band from the hero through Standards, and the CTA band, lands on the export's height within 1px: 600, 464, 1740, 1256, 1270, 1741, 999, 1318, 967, 1510 and 519.
- Text lines sit within 0–1px and wrap as in the frame, including the funnel chart and the blueprint table.
- The FAQ band differs (see below).

**Sections:**
1. **Hero:** the KratuAI hero set-up with a four-line title and the shared `WideTiltedHeroMedia` placeholder (question 180). "Request a Demo" → `/request-demo`; "The loop that does not close" → `#loop` (question 181).
2. **Pillars:** four outlined dark cards with icon tiles, lime labels and titles.
3. **The loop that does not close** (`#loop`):
   - the referral funnel as a `<figure>`, with three bars at 100%, 61.1% and 34.8%, the last flagged "Critical gap", and its note;
   - three evidence cards;
   - the red-edged "What we will not claim" panel.
4. **One record, many hands:** an intro indented 192px, as drawn, and six numbered cards.
5. **Across programs:** four rows on the shared row design (`CcRows`).
   - The two links beneath now go to `/behavioral-health/substance-use-disorder` and `/behavioral-health/mental-health`.
6. **42 CFR Part 2** (dark): the dashed "What a lot of guidance still says" panel beside "What the regulation now provides", the distinction copy, and the "Worth checking this quarter" card.
7. **Consent:** six numbered surface cards.
8. **Across partners:** five rows on `CcRows`.
9. **Information blocking:** the title and callout on the left, six paragraphs on the right.
10. **Standards and networks** (dark): the blueprint as a real `<table>` and the ONC naming note.
11. **FAQ:** the site's shared `FaqSection` (RCM accordion), per the standing rule, with all eight answers from the frame.
    - The frame shows a left-aligned heading and every answer open in lime-topped cards. The shared accordion keeps its own design, and its answers start closed (question 182).
    - Items are ordered so each question stays in its frame column.
12. **CTA band:** `CtaBanner` with a dark pill eyebrow. "Request a Demo" → `/request-demo`; "Behavioral Health" → `/behavioral-health`.

**Responsive (no tablet/mobile frames):**
- Grids step down to two columns and then one.
- The two-column layouts stack below 1024px.
- The blueprint table and the funnel rows stack on phones.
- Titles drop to 32px on phones.
- No horizontal overflow from 320 to 1440.

**Assets** (`src/assets/care-coordination/`, 1× crops of the export):
- `icon-pillar-*` (4);
- `icon-info`, `icon-warning`;
- `icon-team-1…6`;
- `icon-arrow-right`;
- `icon-x-circle`, `icon-check-circle-lime`, `icon-check-lime`.

The hero reuses the shared placeholder.

## Outpatient Clinics build notes (2026-10-21)

**Source:** a 1280 × 17146 export, built at `/more-specialties/outpatient-clinics` (files in `src/pages/OutpatientClinics/`, data in `data/outpatientClinics.js`).
- **Parent page: More Specialties.** It has no page of its own (the header group has no link). The child sits under its path, following the KratuAI pattern (`kratu-ai/visit-prep`).
- Header: Solutions → More Specialties → Outpatient Clinics now links here.
- The breadcrumb follows the frame: "Home > Outpatient Clinics".
- The live sticky header and footer are used unchanged. Each section was built and compared one at a time, at 1280.
- The section intros reuse `BhIntro` through a page-local `OpIntro` (48/56 title, lime or yellow eyebrow).
- Four sections share a page-local three-column `OpCardGrid`: Clinical, Revenue, Reporting and Interoperability.

Results against the export:
- Every band from the hero through Interoperability, and the CTA band, lands on the export's height within 1px.
  - The bands are 676, 343, 1273, 1144, 904, 1230, 1087, 1228, 976, 1184, 1628, 1379, 1077 and 519.
- Text lines sit within 0–1px and wrap as in the frame. One exception: in the "Formulary and benefit checking" card, "leaves" sits on the fourth line rather than the fifth (font metrics; the width that fixes it breaks the card above).
- The FAQ band differs (see below).

**Sections:**
1. **Hero:** "Request a Demo" → `/request-demo`; "See how service lines work" → `#service-lines` (question 186).
2. **Pillars:** four numbered dark cards.
3. **The core idea** (`#service-lines`): the red "What a split actually costs" panel, the explanation and the service-line chips.
4. **Intake:** six white cards, each with a chip and an icon.
5. **Coverage:** the intro and EDI badge on the left, four numbered cards on the right.
6. **Good Faith Estimates:** the GFE timing table (a real `<table>`), "How Elixir handles it", and the legal note.
7. **Scheduling** (dark): twelve cards and the no-show promo. "Patient No-Show Prediction and ROI calculator" → `/patient-no-show-prediction`.
8. **Clinical:** six cards with purple icon tiles.
9. **Prescribing:** the intro and 70% badge on the left, four chip cards on the right.
10. **Revenue:** six cards with icon labels.
11. **Telehealth:** four rule cards on coloured top edges, and "What this means for your clinic".
12. **Reporting:** six white cards with lime icon tiles.
13. **Interoperability** (dark): six cards with a criterion label and a corner icon.
14. **FAQ:** the site's shared `FaqSection`, per the standing rule, with all eight answers. The frame's open, lime-topped cards are not used (question 187).
15. **CTA band:** "Request a Demo" → `/request-demo`; "Speak with an EHR Specialist" → `/contact-us` (question 186).

**Responsive (no tablet/mobile frames):**
- Grids step down to two columns and then one.
- The two-column layouts stack below 1024px.
- The GFE table stacks each row on phones, and the promo stacks its button.
- Titles drop to 32px on phones and 28px below 480px. Long CTA labels wrap.
- No horizontal overflow from 320 to 1440.

**Assets** (`src/assets/outpatient-clinics/`, 1× crops of the export):
- 66 icons. The clinical and reporting icon tiles are cropped whole (40 × 40) and shown in a circle.

The hero reuses the shared placeholder.

## Small Practices build notes (2026-10-21)

**Source:** a 1280 × 15058 export, built at `/more-specialties/small-practices` (files in `src/pages/SmallPractices/`, data in `data/smallPractices.js`).
- **Parent page: More Specialties.** Like Outpatient Clinics, the child sits under the parent's path, and the parent page itself is unchanged (it has no page).
- Header: Solutions → More Specialties → Small Practices now links here.
- The breadcrumb follows the frame: "Home > Small Practices".
- The live sticky header and footer are used unchanged. Each section was built and compared one at a time, at 1280.
- The section intros reuse `BhIntro` through a page-local `SpIntro`. It adds the frame's caps pill eyebrow: lavender on light bands, lime on dark ones. `strong` sets the semibold purple description.
- Billing, Patient experience and Growth share a page-local three-column `SpTiles`. Its `lead` prop sets an icon disc, an inline icon or a number disc.
- The hero and CTA band reuse the Outpatient Clinics set-up. The hero's CTA gap is 36px.

Results against the export:
- Every band from the hero through Growth, and the CTA band, lands on the export's height within 1px.
  - The bands are 622, 352, 1158, 1101, 1151, 977, 866, 917, 891, 1381, 1019, 986, 876 and 520.
- Text lines sit within 0–2px and wrap as in the frame.
  - Four cards carry a per-item text width (`textWidth`) to match the frame's breaks: Pillar 04, "Scales as the practice grows", "Fewer missed appointments" and "Declarative reporting engine".
  - Billing's title has its own width: the frame breaks it before "Payment", although the equally wide "Advanced Reporting Without a" stays on one line.
- The FAQ band differs (see below).

**Sections:**
1. **Hero:** "Request a Demo" → `/request-demo`; "What small practices actually need" → `#start-here` (question 190).
2. **Pillars:** four numbered dark cards.
3. **Start here** (`#start-here`): six criterion cards on a yellow left edge.
4. **Implementation:** four timed step cards and the "Questions worth asking" panel.
5. **Clinical:** four white cards in two independent columns, as drawn.
6. **Billing:** six cards with lavender icon discs.
7. **Telehealth** (dark): the Now, 1 Jan 2028 and Permanent cards, with "Source 1." (question 191).
8. **Patient experience:** six cards, each with its icon beside the title.
9. **Reporting:** three white cards with lime icon discs.
10. **MIPS:**
    - the low-volume threshold table (a real `<table>`);
    - the relief and myths cards;
    - "Sources 2–4.";
    - `qpp.cms.gov/participation-lookup` links to that URL in a new tab, as printed in the frame.
11. **GFE and EPCS:** two rule cards, with "Source 5." and "Source 6.".
12. **Security** (dark): three responsibility cards, with "Sources 7–8.".
13. **Growth:** six numbered cards.
14. **FAQ:** the site's shared `FaqSection`, per the standing rule, with all eight answers. The frame's numbered, lime-topped cards are not used, and the "1."–"8." prefixes are dropped (question 192).
15. **CTA band:** "Request a Demo" → `/request-demo`; "Outpatient clinics" → `/more-specialties/outpatient-clinics` (the sibling More Specialties page).

**Responsive (no tablet/mobile frames):**
- Grids step down to two columns and then one.
- The MIPS table stacks each row on phones.
- Titles drop to 32px on phones and 28px below 480px. Long CTA labels wrap.
- Card corners drop from 48px to 32px on phones.
- No horizontal overflow from 320 to 1440.

**Assets** (`src/assets/small-practices/`, 1× glyph crops of the export):
- 40 icons. The discs and tiles behind them are CSS.

The hero reuses the shared placeholder.

## Telehealth build notes (2026-10-22)

**Source:** a 1280 × 14951 export, built at `/more-specialties/telehealth` (files in `src/pages/Telehealth/`, data in `data/telehealth.js`).
- **Parent page: More Specialties.** The child sits under the parent's path like Outpatient Clinics and Small Practices; the parent page itself is unchanged (it has no page).
- Header: Solutions → More Specialties → Telehealth now links here.
- The breadcrumb follows the frame: "Home > Telehealth".
- The live sticky header and footer are used unchanged. Each section was built and compared one at a time, at 1280.
- Page-local components:
  - `ThIntro`: the dotted monospace eyebrow, the 48/56 H2 and the description, closed by a hairline rule. `layout` split (description right, bottom-aligned) or stacked.
  - `ThSplit`: the two-column band (intro and tinted note card left, cards right) used by Data, Operations and Prescribing.
- The hero, pillars strip and CTA band reuse the Small Practices set-up. The pillar icons are the same Figma crops and are imported from `assets/small-practices/`.
- The frame's monospace face (it looks like JetBrains Mono) is not loaded by the site. Mono labels use a local stack led by Consolas, the closest installed match (question 196).

Results against the export:
- Every band from the hero through Why Elixir, and the CTA band, lands on the export's height exactly.
  - The bands are 622, 380, 1054, 1031, 981, 991, 1539, 1282, 839, 1512, 1144, 842 and 463.
- Text lines sit within 0–2px and wrap as in the frame, except two mono blocks: the 98000-series note in Billing and the compacts note in Licensure break at slightly different words, because the substitute mono face is narrower.
- In the frame, Operations cards 2–4 sit their label about 5px lower than card 1; the build uses card 1's spacing for all four.
- The FAQ band differs (see below).

**Sections:**
1. **Hero:** "Request a Demo" → `/request-demo`; "See the 2027 and 2028 rule changes" → `#medicare-policy` (question 197).
2. **Pillars:** four numbered dark cards.
3. **Engagement:** six grid-referenced cards. "risk-ranked prediction decides who to call" → `/patient-no-show-prediction`.
4. **Data:** four visit-phase cards beside the intro and the "Unified clinical ingestion" note.
5. **Experience:** six module cards. "Patient Portal" → `/patient-portal`.
6. **Operations:** four ops-flow cards beside the intro and the green "Native Salesforce ecosystem" note.
7. **Billing** (dark): the two details, the modifier table (a real `<table>`) and the 98000-series note.
8. **Medicare policy** (`#medicare-policy`): the five dated rule rows and the sources bar. "Behavioral Health" → `/behavioral-health`.
9. **Prescribing:** three cards beside the intro and the red "Imminent transition" note.
10. **Licensure:** the compacts table (a real `<table>`), the compliance notice and Elixir's note.
11. **Privacy** (dark): six referenced cards.
12. **Why Elixir:** eight capability cards.
13. **FAQ:** the site's shared `FaqSection`, per the standing rule, with all eight answers. The frame's left-aligned intro and "Q // 01" cards are not used (question 198). The accordion's first-half-left order matches the frame's columns (1–4 left, 5–8 right).
14. **CTA band:** "Request a Demo" → `/request-demo`; "Explore the Patient Portal" → `/patient-portal`.

**Responsive (no tablet/mobile frames):**
- Grids step down to two columns and then one; the two-column bands stack below 1024px.
- Split intros put the description under the title below 1024px.
- Both tables stack each row on phones.
- Titles drop to 32px on phones and 28px below 480px. Long CTA labels wrap.
- No horizontal overflow from 320 to 1440.

**Assets** (`src/assets/telehealth/`, 1× glyph crops of the export):
- 23 icons, plus the four Small Practices pillar icons.

The hero reuses the shared placeholder.

## Aesthetic Practices build notes (2026-10-22)

**Source:** a 1280 × 14910 export, built at `/more-specialties/aesthetic-practices` (files in `src/pages/AestheticPractices/`, data in `data/aestheticPractices.js`).
- **Parent page: More Specialties.** The child sits under the parent's path like the other More Specialties children; the parent page itself is unchanged (it has no page).
- Header: Solutions → More Specialties → Aesthetic Practices now links here.
- The breadcrumb follows the frame: "Home > Aesthetic Practices".
- The live sticky header and footer are used unchanged. Each section was built and compared one at a time, at 1280.
- Page-local components:
  - `AeIntro`: Behavioral Health's `BhIntro` at this frame's 48/56 title.
  - `AeCards`: the three-column card grid used by Scheduling (white cards, lavender icon discs), Clinical (numbered), Revenue and Patient Portal (plain). An item's `textWidth` matches one card's line breaks to the frame.
- The hero reuses the Outpatient Clinics five-line set-up; the CTA band reuses Small Practices'.

Results against the export:
- Every band from the hero through Patient Portal, and the CTA band, lands on the export's height exactly.
  - The bands are 676, 390, 1155, 1095, 1737, 1115, 663, 1455, 733, 1511, 747, 959 and 519.
- Text lines sit within 0–2px and wrap as in the frame. Three cards carry a per-item text width to match the frame's breaks ("Any payment processor", "Packages and memberships", "Estheticians and cosmetologists…").
- The FAQ band differs (see below).

**Sections:**
1. **Hero:** "Request a Demo" → `/request-demo`; "The before-and-after problem" → `#before-and-after` (question 204).
2. **Pillars:** four numbered cards, each as tall as its content, as drawn.
3. **Scheduling:** six white cards with lavender icon discs.
4. **Clinical:** six numbered cards.
5. **Before-and-after photos** (dark, `#before-and-after`): the enforcement case, the three explanations, the nine-element checklist and the revocation note.
6. **Revenue:** six cards.
7. **Good Faith Estimates:** the lead, the rule, the trigger callout and Elixir's part.
8. **Growth:** five tagged rule rows with corner icons.
9. **Product safety** (dark): the counterfeit Botox case and Elixir's lot capture. The title breaks after "Expiry", as drawn.
10. **Structure:** six state-law cards and the configuration note.
11. **Platform:** the inset text column and the "Related" row, laid out as the frame's row of narrow columns. "Contact Center" → `/contact-center`, "Patient Portal" → `/patient-portal`, "no-show prediction" → `/patient-no-show-prediction`.
12. **Patient Portal:** six cards.
13. **FAQ:** the site's shared `FaqSection`, per the standing rule, with all eight answers. The frame's lime-topped open cards are not used (question 205). The frame reads its two columns row by row; the items are ordered so each question stays in the column it is drawn in.
14. **CTA band:** "Request a Demo" → `/request-demo`; "Small practice" → `/more-specialties/small-practices` (the sibling More Specialties page).

**Responsive (no tablet/mobile frames):**
- Grids step down to two columns and then one; the two-column bands stack below 1024px.
- The "Related" row wraps as a sentence below 1024px.
- Titles drop to 32px on phones and 28px below 480px. Long CTA labels wrap.
- No horizontal overflow from 320 to 1440.

**Assets** (`src/assets/aesthetic-practices/`, 1× glyph crops of the export):
- 38 icons.

The hero reuses the shared placeholder.

## Student Health build notes (2026-10-22)

**Source:** a 1280 × 15163 export titled "Student Care Management", built at `/more-specialties/student-health` (files in `src/pages/StudentHealth/`, data in `data/studentHealth.js`).
- The request that came with this frame was the Telehealth brief, but the frame is a different page and its breadcrumb reads "Home > Student Health". Telehealth was already built, so this frame fills the remaining More Specialties child, Student Health (question 209).
- **Parent page: More Specialties**, unchanged (it has no page). Header: Solutions → More Specialties → Student Health now links here.
- Page-local components: `ShIntro` (`BhIntro` at 48/56, gold eyebrow for the frame's "the one to get right" sections, forced description breaks kept), `ShCards` (three-column card grid with lavender/lime/red icon discs, used by Intake and Care) and `ShNote` (the tinted info strip).
- The hero reuses the Outpatient Clinics five-line set-up; the CTA band reuses Small Practices'.

Results against the export:
- Every band from the hero through Privacy, and the CTA band, lands on the export's height exactly.
  - The bands are 648, 332, 990, 1168, 1352, 1100, 1264, 1192, 1246, 898, 1142 and 519 (FAQ excluded).
- Text lines sit within 0–2px and wrap as in the frame. One documentation row and one claims step carry a per-item width (`copyWidth`, `titleWidth`) to match the frame's breaks.

**Sections:** hero ("Enrolled, but not billing" → `#enrolled-gap`, question 210); pillars; the enrolled-vs-billing gap (CYBHI funnel card); intake; consent (three obligations); routing (dark, three levels and "What a referral can become"); care; documentation; which program pays (a real `<table>`); claims (dark); California programs; FERPA vs HIPAA; FAQ (the shared accordion, ordered so each question keeps its column, question 211); CTA ("Request a Demo" → `/request-demo`, "Mental Health" → `/behavioral-health/mental-health`).

**Responsive:** grids step to two columns then one; two-column bands stack below 1024px; the program table stacks per row on phones; forced description breaks are dropped on phones. No horizontal overflow from 320 to 1440.

**Assets** (`src/assets/student-health/`): 32 glyph crops. The hero reuses the shared placeholder.

## Care Plan Management build notes (2026-10-22)

**Source:** a 1280 × 8070 export, built at `/care-management/care-plan-management` (files in `src/pages/CarePlanManagement/`, data in `data/carePlanManagement.js`).
- **Parent page: Care Management.** It has no page and no route — only a header group. The child sits under the parent's path, following the More Specialties pattern; no parent page was built (question 214).
- Header: Solutions → Care Management → Care Plan Management now links here. "Social Determinants of Health" stays unlinked. (The Care Management item itself now links to `/care-management`; see Care Management build notes.)
- The breadcrumb follows the frame: "Home > Care Plan Management".
- The live sticky header and footer are used unchanged. Each section was built and compared one at a time, at 1280.
- Components:
  - Reused: `PageHero` + `WideTiltedHeroMedia` (the Small Practices four-line hero set-up), `Section`, `Container`, `CtaBanner` (single button, no eyebrow).
  - Page-local: `CpSplit` (the alternating 36/43.5 purple H2 + copy beside a mock-up; the frame offsets copy and mock-up differently in each band, so each instance passes `offsets`), `CpCard` (the white rounded mock-up card), `tones.module.css` (level tags and status pills shared by the mock-ups), and eight `visuals/` built in HTML/CSS from the frame (levels, goal, interventions, barriers, outcomes, status, approvals, workflows).
- The mock-ups are drawn UI, not images: their text is real text from the frame. The levels mock-up repeats its state for screen readers.

Results against the export:
- Every band from the hero through the CTA lands on the export's height exactly.
  - The bands are 600, 212, 589, 567, 503, 587, 558, 512, 504, 531, 1010, 454, 461 and 416.
- Headings, body copy and card text sit within 0–1px and wrap as in the frame.

**Sections:**
1. **Hero:** "Take a test drive" → `/request-demo`; "Explore the platform" → `/what-is-elixir` (question 215).
2. **Pillars:** four hairline-separated columns.
3–10. **Feature bands:** customizable plans, goals, interventions, barriers (SDOH), outcomes, status, approvals and e-signatures, workflows — each with its mock-up, alternating sides as drawn.
11. **Features:** twelve cards.
12. **Built on Salesforce** (dark): four points on lime top rules.
13. **Care settings:** six labels. They are drawn as pills but carry no destinations, so they are static labels, not links (question 216).
14. **CTA band:** "Take a test drive" → `/request-demo`.
- The frame has no FAQ, so none was added.

**Responsive (no tablet/mobile frames):**
- Feature bands stack below 1024px with the copy first; the per-band offsets are dropped.
- Grids step down to two columns and then one; the pillars lose their side hairlines and stack with top rules.
- Mock-ups keep their content; nested indents collapse on phones, the status track keeps all five steps with smaller labels.
- No horizontal overflow from 320 to 1440.

**Assets:** none needed beyond the shared hero placeholder — the frame draws no icons. The hero image is the frame's grey placeholder.

## ONC MFA Use Cases build notes (2026-10-22)

**Source:** a 1280 × 2455 export, built at `/onc-certification/onc-mfa-use-cases` (files in `src/pages/OncMfaUseCases/`, data in `data/oncMfaUseCases.js`).
- **Parent page: ONC Certification.** It has no page and no route — only an item in the header's Compliance & Security menu. The child sits under the parent's path; no parent page was built (question 219).
- Header: Compliance & Security → ONC Certification → ONC MFA Use Cases now links here. "Elixir Certified Module" is linked too (see below); "Patient EHI Export" stays unlinked.
- The breadcrumb follows the frame: "Home > ONC MFA Use Cases".
- Reused: `PageHero` + `WideTiltedHeroMedia` (the Small Practices hero set-up; this hero has no buttons), `Section`, and the shared `ContactForm`, relabelled and reordered through its `fieldNames` / `fieldOverrides` props and tuned through its `--contact-form-*` variables. Its submit arrow is hidden on this page only.

Results against the export:
- Hero (600) and use cases (503) land on the export's height exactly; card text wraps as drawn and sits within 0–2px.
- Assessment: the copy column and every form field sit within 0–1px. The band is 734px against the frame's 786 because the reCAPTCHA box is not built (question 220); the form card is correspondingly shorter.

**Sections:**
1. **Hero:** breadcrumb, title, description and the placeholder card. No buttons in the frame.
2. **Use cases:** ten cards in five columns (title only, no descriptions in the frame).
3. **Get started:** eyebrow, title, description (its forced break before "day." is kept), four points, the trust row, and the "Request an ONC MFA Assessment" form (First Name*, Last Name, Mobile*, Company*, Email*, Description*, Submit). The form submits through the existing `services/contactService`.
- The frame has no CTA band or FAQ, so none was added.

**Responsive:** cards step 5 → 3 → 2 → 1 columns; the assessment stacks below 1024px; the description's forced break is dropped there. No horizontal overflow from 320 to 1440.

**Assets** (`src/assets/onc-mfa/`, 1× glyph crops): 10 use-case icons, the check and four trust icons. The hero image is the frame's grey placeholder.

## Elixir Certified Module build notes (2026-10-23)

**Source:** a 1280 × 5893 export, built at `/onc-certification/elixir-certified-module` (files in `src/pages/ElixirCertifiedModule/`, data in `data/elixirCertifiedModule.js`).
- **Parent page: ONC Certification** — still no page or route (question 219). The child sits under the parent's path, beside ONC MFA Use Cases.
- Header: Compliance & Security → ONC Certification → Elixir Certified Module now links here. The breadcrumb follows the frame: "Home > Elixir Certified Module".
- Reused: `PageHero` + `WideTiltedHeroMedia` (the ONC MFA hero set-up), `Section`, `Button`, `Icon` (download) and the shared `ContactForm` (relabelled with the frame's placeholders through `fieldNames` / `fieldOverrides`). `ContactForm` gained a `--contact-form-column-gap` variable (default 24px, unchanged elsewhere) for this frame's 16px field gap.

Results against the export (1280, same viewport):
- Hero 600 / details 953 (frame 954) / assessment 949 (frame 945): within a few pixels; facts rows, cards and form fields within 0–4px.
- Criteria: 2798 against 2828. Rows follow the frame's 33 + 23px-per-line rhythm; three of the frame's two-line rows are drawn ~16px taller than the rest, which was not copied.

**Sections:**
1. **Hero:** breadcrumb, two-line title, description, placeholder card (no buttons in the frame).
2. **Certification details:** the certificate image with its "Verified Health IT Module Certification" caption; the facts list (HIT vendor, date certified, product and version, certificate number, relied-upon software chips); the ONC disclaimer; the two download cards (RWT Plan 2025, Real World Testing Results Report CY 2025).
3. **Certified criteria:** pill, title, lead, four group links and the full criteria table (22 rows, verbatim). Each group link jumps to its group's first row and marks itself current (the frame shows every row with group (a) selected, so the links do not filter).
4. **Get started:** pill, title, description (the frame's breaks after "needs." and before "day." are kept), four points, four badges and the "Request a Module Configuration Assessment" form.

**Deliberate differences:**
- The frame clips the table header ("APABILITY", "certificatio…"); the header here shows the full text, aligned with the body columns.
- "170.315(b)(10)" is underlined in lime in the frame, suggesting a link (probably to Patient EHI Export, which has no page). It is plain text (question 230).
- The Download PDF buttons are inert (`aria-disabled`, dimmed) because the PDFs were not supplied (question 228).
- The reCAPTCHA box is not rendered (question 220), so the form card is ~107px shorter than drawn.

**Responsive:** details and downloads stack below 1024px (certificate card centred); facts rows stack label-over-value on phones; the table becomes one block per criterion with column names as labels below 768px; the assessment stacks below 1024px. No horizontal overflow from 320 to 1920.

**Assets** (`src/assets/elixir-certified-module/`): the certificate image (a 396 × 297 crop from the 1× frame), and 1× crops of the verified check, two file icons, the point check and the badge shield. The hero image is the frame's grey placeholder.

## Care Management build notes (2026-10-23)

**Source:** a 1280 × 11309 export, built at `/care-management` (files in `src/pages/CareManagement/`, data in `data/careManagement.js`).
- **Independent top-level page.** No parent; the breadcrumb is "Home > Care Management", as drawn. The existing child Care Plan Management (`/care-management/care-plan-management`) is unchanged, and the CTA band's "Care Plan Software" button links to it.
- Header: Solutions → Care Management now links here (its Care Plan Management child was already linked).
- Reused: `PageHero` + `WideTiltedHeroMedia` (the Telehealth hero set-up), `Section`, `Container`, `RichText`, the shared `FaqSection` and `CtaBanner`. The other sections are page-scoped, as on the sibling pages.

Results against the export (1280, same viewport), band heights:

| Band | Built | Frame |
|---|---|---|
| Hero | 622 | 622 |
| Pillars | 262 | 263 |
| Product | 1805 | 1802 |
| Commercial case (billing) | 1632 | 1637 |
| The shift (APCM) | 1102 | 1098 |
| Transitions | 1221 | 1217 |
| Compliance | 993 | 992 |
| Straight answers | 1155 | 1161 |
| CTA | 576 | 575 |

The FAQ is 576 against the frame's 1372 because the shared accordion starts closed (standing rule).

**Sections:** hero (Request a Demo; "What the codes pay for" scrolls to the billing table — the frame gives no destination); pillars strip; the product (nine cards, Salesforce note); the commercial case (program-family table, rule note); the shift (three APCM cards, CMS note); transitions (four timeline cards, integration note); compliance (two mistakes, the fix, OIG note); straight answers (copy beside the "Four things we will not tell you" panel); FAQ; CTA band.

**Deliberate differences:**
- FAQ: the shared accordion (title and description, no eyebrow, items closed) instead of the frame's open cards.
- Links in the frame to pages that do not exist are plain text: "Value-Based Care" (product note), "Integrations" and "guide to ADT feeds" (transitions note).
- "Detailed on our care plan software page" (first product card) is plain text in the frame, so it is not linked.

**Responsive:** pillars 4 → 2 → 1 columns; card grids 3 → 2 → 1; the table narrows below 1024px and becomes one block per program family below 768px; timeline cards stack badge over copy on phones; the claims panel drops below the copy below 1024px. No horizontal overflow from 320 to 1920.

**Assets** (`src/assets/care-management/`, 1× glyph crops): 4 pillar icons, 9 product icons, the note/info/OIG/claims icons, 3 APCM chip icons and the check, 2 compliance header icons, 4 timeline badge icons. The hero image is the frame's grey placeholder.

## Social Determinants of Health build notes (2026-10-23)

**Source:** a 1280 × 10828 export, built at `/social-determinants-of-health` (files in `src/pages/SocialDeterminants/`, data in `data/socialDeterminants.js`).
- **Independent top-level page** on a flat route. The header already listed it under Solutions → Care Management; that item now links here. The breadcrumb is "Home > Social Determinants of Health", as drawn (no parent crumb).
- Reused: `PageHero` + `WideTiltedHeroMedia` (the Care Management hero set-up), `Section`, `Container`, the shared `FaqSection` and `CtaBanner`. Other sections are page-scoped, as on the sibling pages.

Results against the export (1280, same viewport), band heights:

| Band | Built | Frame |
|---|---|---|
| Hero | 704 | 704 |
| Pillars | 309 | 309 |
| Product | 1545 | 1546 |
| Coverage (domains) | 1722 | 1718 |
| Policy picture | 1164 | 1161 |
| The money | 730 | 729 |
| The gap that matters | 1358 | 1352 |
| Documentation (Z codes) | 1148 | 1147 |
| CTA | 516 | 519 |

The FAQ is 596 against 1074, because the shared accordion starts closed (standing rule).

**Sections:**
- Hero: Request a Demo; "The eight domains" scrolls to the domains table (the frame gives no destination).
- Pillars: four dark cards.
- The product: nine outlined cards.
- Coverage: the domains table, with copy beside the "On screening instruments" callout.
- The policy picture: three cards and the rule note.
- The money: title and lead beside three run-in paragraphs and the code note.
- The gap that matters: two scenario bar cards, with copy beside "Three more things we will not claim".
- Documentation: four Z-code rows with status pills and the guidance note.
- FAQ.
- CTA band: Request a Demo and Care Management (`/care-management`).

**Deliberate differences:**
- FAQ: the shared accordion (no eyebrow, items closed). The frame supplies an answer only for "What is SDOH software…"; the other five render as static rows (question 236).
- The policy cards' list markers are missing-glyph boxes in the frame (red and lime outlines). They are drawn as small coloured outlined markers here, and the third card's arrows as "→" (question 237).
- The Z-code rows' text widths differ in the frame (the first row runs wider); both widths are kept so the lines break as drawn.

**Responsive:** pillars 4 → 2 → 1 columns; card grids 3 → 2 → 1; the domains table narrows below 1024px and becomes one block per domain below 768px; the split sections and the money layout stack below 1024px; the Z-code pill moves under the copy on phones. No horizontal overflow from 320 to 1920.

**Assets** (`src/assets/social-determinants/`, 1× glyph crops): 4 pillar icons, 9 product icons, the instruments icon. The hero image is the frame's grey placeholder.

## Site-wide interaction pass (2026-10-23)

Requested content changes and an audit of every page's tabs, sliders and controls.

**Content:**
- Home "Trusted by" heading now reads "Trusted by Healthcare Providers Worldwide" (`data/home.js`).
- The Contact Us panel's own label "TRUSTED BY MORE THAN 1,200 CLINICS WORLDWIDE" (`data/contact.js`) was not part of the request and is unchanged (question 240).
- Home Kratu AI diagram: the 01–06 number badges are removed. The cards keep their positions on the columns' inner edges, so the connectors and nodes still meet them.

**Tabs:**
- What Is Elixir "Our Modular Solutions" — the four category pills are now tabs (click, arrow keys, Home/End) that switch the module cards, which fade in.
  - Core EHR keeps the designed modules.
  - Contact Center, Billing and Patient Portal hold interim cards with copy taken from those pages and purple-tinted copies of this page's own icons (`assets/what-is-elixir/demo/`; question 241).
- Caregiver Mobile App tour — all six steps switch the panel (question 62).
- Already working, unchanged: Home features (auto-advancing), the Knowledge Base tabs (Home, Referral Program) and the Insights category filter.

**Sliders:**
- New shared `hooks/useSwipe.js`: horizontal touch swipe, with mouse drags ignored and `touch-action: pan-y` on the swipe area.
- Home testimonials (already looping and auto-advancing via `useAutoRotate`): added swipe, plus hover, press and focus states on the arrows; disabled arrows are dimmed.
- Success Stories featured story: see the Success Stories notes.

**Left as they are, deliberately:**
- Product mock-up illustrations are figures, not controls: the Co-Pilot insights pane, the Visit Prep safeguards, the Care Plan visuals and the mock UIs. Making their drawn tabs clickable would mean inventing product screens.
- The Electronic Prior Authorization module grid is drawn as plain cards, so it is not linked.

**Checked:**
- No `href="#"`, empty handlers or alert placeholders remain.
- Video and webinar play buttons open the post page, but the demo posts there have no recording (question 242).

## Home hero slider (2026-10-23)

The Home hero is now a two-slide carousel (`pages/Home/sections/HeroSection/`):
1. The original "The AI-Powered EHR…" hero, unchanged.
2. The Figma "Meet Kratu AI" banner (1280 × 634 frame). Its copy is in `kratuHeroSlide` (`data/home.js`). The product mock-up is the frame's composed artwork, cropped to `assets/home/hero/kratu-ai-workspace.png` (643 × 566).

**Behaviour:**
- Both slides share the existing 718px band and background, stacked in one grid cell, so the band never changes height. The frame's 634px content sits centred, about 42px lower than in the frame.
- Slides cross-fade over 600ms and auto-advance every 4 seconds (`useAutoRotate`). A manual choice restarts the countdown.
- Rotation pauses on mouse hover, on keyboard focus inside, with the pause button, and for reduced motion.
- Touch screens can swipe (`useSwipe`).
- Hidden slides are `inert`. Only slide 1 holds the page's `h1`; the Kratu title is an `h2`.

**Measured at 1280:** the Kratu slide's badge, title lines, description and buttons are within 0–2px of the frame (after the 42px band offset).

**Not in the frame:** the frame shows no slide controls. A small pause button and two dot indicators sit at the foot of the band so visitors can choose or stop a slide (question 244).

## Salesforce Web-to-Lead forms (2026-10-23)

Every lead form posts natively to Salesforce Web-to-Lead with the values from the supplied HTML: org `00Dd0000000hivg`, return URL `https://elixirehr.com/thank-you/`, lead source `Web`, and reCAPTCHA key name `ElixirEHR` with site key `6Lf5…Qs_`. All of these live in `data/webToLead.js`.

**Components:**
- `components/forms/WebToLead` renders the hidden inputs and refreshes the `captcha_settings` timestamp every 500ms until the reCAPTCHA is answered, as Salesforce's snippet does.
- It loads Google's reCAPTCHA once, rendered explicitly, which works on client-side navigation.

**Forms:**
- The shared `ContactForm` (Contact Us, About Us, What Is Elixir, Referral Program, Contact Center, EVV for Field Service, ONC MFA, Elixir Certified Module) posts its fields under the Salesforce names:
  - First Name → `first_name`, Last Name → `last_name`, Email → `email`;
  - Mobile → `mobile`, Company → `company`, Message → `description`;
  - each with the supplied maximum length.

  Pages keep their own labels and required flags.
- The No-Show ROI Calculator form:
  - splits Full Name into `first_name` and `last_name`, and sends Organization as `company` and Email as `email`;
  - puts the request, the Title / Role and the calculator inputs and results into `description`, since the supplied form has no fields for them.

**Behaviour:**
- The browser checks required fields and email format.
- The form does not send until the reCAPTCHA has been completed; a status message asks for it.
- The button disables while sending and re-enables if the visitor comes back with the Back button.
- There is no client-side success message: success is Salesforce's redirect.
- The reCAPTCHA (a fixed 304 × 78 widget) sits above Submit. The Figma has no reCAPTCHA, so this is the one visual addition. It is scaled to 85% below 400px so it fits 320px screens.

**Testing:** the site key is limited to Elixir's domains, so locally the widget shows "Localhost is not in the list of supported domains". Each form was tested with the Salesforce request intercepted and aborted, so no lead was created.

`services/contactService.js` and `VITE_CONTACT_ENDPOINT` were removed. The newsletter is not a lead form and still uses `VITE_NEWSLETTER_ENDPOINT`.

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
35. Contact Us: the form is the existing shared form, which posts JSON to `VITE_CONTACT_ENDPOINT`. That variable is not set in this repository, so submissions currently fail gracefully with the screen-reader error message. A Salesforce Web-to-Lead + reCAPTCHA form exists only in the standalone `test.html` (Mirketa "AI Readiness Assessment", redirecting to mirketa.com/thank-you); it is not wired into the site. Decide which backend the site should use. **Resolved 2026-10-23:** lead forms now post to Salesforce Web-to-Lead with reCAPTCHA (see "Salesforce Web-to-Lead forms").
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
62. Caregiver Mobile App: the tour shows six steps but the frame has only Step 1's panel. Steps 2–6 are now working tabs with interim panels written only from what the page already states (FAQ, offline and submission sections), without step durations. Please supply the final panel copy, tags, durations and status cards.
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
80. Insights: there is no frame for Newsletter. Its category pill links to the planned `/insights/newsletter`, which redirects to Home until the page is built. Please supply the frame.
81. Insights: the frames' sidebars show placeholder data ("Category Here", counts 24/18/12/9/15) and the cards say "Author Name". The build lists categories from `data/insights.js` (Blog: the categories found on its posts) with real counts, and shows each post's own author. The Videos sidebar highlights the active filter ("All" by default); the frame draws no active state. Confirm.
82. Insights: the frames show pagination ("1 2 3 … 12"). Pagination appears only when a listing has more than one page, so with the current demo posts it is hidden on most pages.
83. All Resources: the frame's sample content differs from the other Insights frames. Examples: "The 2024 AI Maturity Model…" e-book, a live webinar "Integrating Large Language Models in EHR Workflows" dated Oct 24, 2024 (a past date), and a featured video "Elixir AI Platform Overview". The page draws from the same posts as the category pages, so in development it shows their demo posts instead.
84. All Resources: the frame does not say which items fill the lead row or how the feed is ordered. The build uses the newest e-book, the next upcoming webinar and the newest video, then alternates types (Article, Webinar, Release, …), three per "Load More Resources". Confirm.
85. All Resources: the frame's "RELEASE" card uses "Read Whitepaper" with a download icon. This is reproduced for release notes, though the Release Notes page says "Read Notes" / "View Full Release Notes". The hero is the Contact Us hero ("Experience the Future of Healthcare Management") with no search field, unlike the other Insights frames. Confirm both.
86. E-Books: no PDFs are supplied. "Download" (and All Resources' "PDF Available") need a `file` on the post; until then "Download" opens the e-book's page and "PDF Available" is hidden. The All Resources card shows "15 min read" while the E-Book page shows a page count; both are optional post fields (`readingTime`, `pages`).
87. Webinars and Videos: no recording or registration URLs are supplied. Play buttons open the post's page (add a `video` content block there), and "Register Now" opens the webinar's page unless the post sets `event.registerUrl`. The upcoming webinar's description has a hard line break before "care.", reproduced as drawn.
88. Weekly Briefing: no endpoint or success/error design is supplied. Set `VITE_NEWSLETTER_ENDPOINT`; until then, subscribing reports an error (announced to assistive tech, with no visible message designed).
89. Header: now that the pages exist, Resources → Insights links to `/insights`, "Guides & E-books" to `/insights/e-book` and "Webinars & Events" to `/insights/webinars`. "Release Notes" and "Benchmark Surveys" link to `/insights/release-notes` and `/insights/benchmark-surveys`; the nav brief gave `/category/release-notes/` and `/category/benchmark-survey/`. Blog is at `/blog` as proposed. Confirm the URLs. Home's Knowledge Base links (question 49) still point at `/resources/...`; Home is unchanged.
90. Illustrations: no SVG or PNG files are supplied, so the buttons open each illustration's page. The cards' labels (Anatomy, System Architecture, Workflow) are a different taxonomy from the sidebar categories (Clinical AI, EHR Optimization, …), so the demo illustrations have no sidebar category and every count is 0. Confirm which field the sidebar should filter on. In the frame, the second card's buttons are 3px wider on each side than the first card's; the build uses the first card's spacing for all cards.
91. Referral Program: there is no referral form, portal or submission flow in the design or the project. "Send your Referral" opens the page's general contact form (`#contact`) and "Learn Benefits" scrolls to "Why join". The first step's copy mentions "our secure portal", which does not exist. Supply the referral form or portal (and its endpoint), or confirm these destinations.
92. Referral Program: the frame states rewards only in general terms ("industry leading commission", "uncapped earning potential", "industry-leading bonuses", "Receive your reward immediately upon successful implementation"). They are reproduced verbatim. No amounts, eligibility rules, payment conditions or terms exist and none were added. Please supply or approve the program terms before launch.
93. Referral Program: the hero photo and six icon glyphs are 1× crops of the export. Please supply source files: the hero photo (504 × 384, ideally 1008 × 768) and the six icons as SVG (refer a lead, close the deal, earn incentives, marketing resources, referral incentives, Elixir Elite).
94. Referral Program: the Knowledge Base cards are Home's (the frame shows the same three). Their links still point at `/resources/...` pages that don't exist and redirect to Home (question 49). The matching Insights pages (`/blog`, `/insights/webinars`, …) now exist; Home's data was left unchanged because Home is approved. Confirm whether to repoint them (it changes both pages).
95. Career: no job pages, application form, ATS or email address exist, so the three "View & Apply" buttons render as drawn but are not interactive (hidden from assistive tech). Set `applyUrl` on a job in `data/career.js` to link it. Please supply the application destination.
96. Career: the job listings (Senior Product Manager (EHR) in San Ramon, CA / Remote; AI Engineering Lead in Dublin, CA; Clinical Informatics Specialist, US Remote) and the culture copy are reproduced verbatim. Confirm the openings are current before launch. The first card's department pill repeats its title ("Senior Product Manager"), as drawn.
97. Career: in the frame, the first job card's location and button sit 2px lower (and the card is 2px taller) than the other two. The build uses the second and third cards' spacing for all three.
98. Career: the footer's "Careers" link still points at `/company/careers`, which doesn't exist (redirects to Home). The shared footer was left unchanged as instructed. Pointing it at `/career` is a one-line change in `data/footer.js` and affects every page's footer. Confirm.
99. Career: the hero photo and six icon glyphs are 1× crops of the export. Please supply source files: the hero photo (504 × 384, ideally 1008 × 768) and the icons as SVG (compensation, fun @ work, learning & development, growth, transparency, location pin).
100. Job posting: "Apply Now" has no destination (no application form, ATS link or careers email exists). It renders as drawn but is not interactive. Set `applyUrl` on the job in `pages/Career/data/jobOpenings.js` to link it.
101. Job posting: posting content exists only for Senior Product Manager (EHR). AI Engineering Lead and Clinical Informatics Specialist have no posting copy, so they have no pages, and their Career cards stay unlinked. Please supply their postings (type, level, about, responsibilities, requirements, facts).
102. Job posting: the posting and the Career card differ. Location: "San Ramon, CA" vs "San Ramon, CA / Remote". Department: "Engineering/Product" vs the card's "Senior Product Manager" pill. Both are reproduced as drawn; confirm the correct values.
103. Job posting: the salary range ($185k - $240k) and posted date (Oct 24, 2024) are reproduced verbatim from the frame. Confirm both are approved and current before launch; the posted date is almost two years old.
104. Job posting: the frame's copy has hard line breaks mid-sentence ("As a / Senior Product", "between / complex", "integration / engine,", "(HIPAA, / HL7 FHIR)", "teams / using Agile"). They are reproduced on desktop. Confirm whether they are intended or should wrap naturally.
105. Job posting: the facts card's salary value is 3px narrower in the frame than in the build (likely a different dash or space character in the source copy). Please confirm the exact characters.
106. Patient Portal: the hero image is Figma's grey placeholder (the same exported placeholder as EVV and Denial Management). Please supply the hero photo (467 × 460 visible area; 511 × 507 with the tilted backdrop). All 32 icons are 1× crops; supply SVGs.
107. Patient Portal: the "Connected" cards for Revenue Cycle Management and Scheduling contain hard line breaks ("claim, not / a separate ledger", "same rules / as the front desk"). This makes them taller than their row, so in the frame they overlap the cards below. This is reproduced as drawn on desktop. The note card ("…use it. / Something else…") and the alumni title "Referrals from people who / trust you" also have hard breaks. Confirm whether these are intended or should wrap naturally (which also removes the overlap).
108. Patient Portal: the FAQ uses the site's shared accordion (the RCM design), as required for every FAQ, not the frame's open two-column cards with "?" icons. Its answers drop the frame's mid-sentence line breaks. The page below the FAQ is therefore 451px shorter than the frame.
109. Patient Portal: claims reproduced verbatim from the frame need review before launch: "Intake time reduced by 40%" (hero badge), "Messaging is secure and HIPAA-compliant" (FAQ), the 42 CFR Part 2 wording (behavioral-health panel), and the "Granular scoping engine" status panel ("Active", "100% Logged"), which reads like live data but is static.
110. Patient Portal: there is no Visit Prep, Contact Center or Scheduling page, so "Explore Visit Prep" is not interactive and those two cards are plain. "Request a Demo" points at `/request-demo`, which has no page yet (redirects to Home), as on the other pages.
111. Patient No-Show Prediction: the hero image is the grey placeholder from the frame. A final image is needed, as PNG or WebP at 934 × 920 (2× of the 467 × 460 tilted frame).
112. Patient No-Show Prediction: no page exists for the No-Show ROI Calculator, Elixir Contact Center, Responsible AI at Elixir or KratuAI. "Calculate what no-shows cost you" and "Open the No-Show ROI Calculator" render as drawn and are not interactive. The related links and the platform cards for those pages are plain text. "Request a Demo" points at `/request-demo`, which has no page yet (redirects to Home), as on the other pages.
113. Patient No-Show Prediction: the frame's hard line breaks (Problem paragraph 2, the Specialty cards) and the Operations descriptions that run 24px past their card edge are reproduced at 1280. Should the descriptions be kept inside the card?
114. Patient No-Show Prediction: the Measurement cards in row 2 are taller (309px) than row 1, and the Problem section is 8px wider than the container. Both are reproduced as drawn. Are they intentional?
115. Patient No-Show Prediction: claims reproduced verbatim need review before launch:
   - the 18.8% / 12.6% / 25.7% study figures and the citation;
   - "about 12 months of scheduling history";
   - "smaller programs can start on a shared baseline", against "Does not learn from other organizations' patients" and the FAQ's no-cross-training answer;
   - the statements about which signals are excluded and about HIPAA and data use.
116. Contact Center: the hero image is the frame's grey placeholder (the card is 521 × 460, wider than the 467px frames on other pages). A final image is needed, as PNG or WebP at 1042 × 920 (2× the card).
117. Contact Center: answers for seven FAQ questions are missing. Only "What is a healthcare contact center?" has copy in the frame. The other seven render as static rows until their answers are supplied.
118. Contact Center: content reproduced verbatim needs review before launch:
   - the support number "+1 (888) 401-4475", which isn't in the approved contact data (the site uses 1-855-647-5382 elsewhere);
   - "Guaranteed 24-Hour Response" and "HIPAA & Part 2 Compliant";
   - the TCPA, FCC, 988, Section 1557 and 42 CFR Part 2 statements, including "max 3 voice/text communications weekly" and "Recent Supreme Court rulings";
   - the integration partner names (RingCentral, Amazon Connect, Waystar, Availity and others).
119. Contact Center: the intake checklist, omnichannel timeline and census board are static illustrations with example data (Eleanor Vance, Coordinator Marcus, bed numbers). Should they be marked as examples, or replaced by product screenshots?
120. Contact Center: the frame's spacing varies between sections. Title line pitch is 50 or 52px, the form's last row gap is tighter, and row heights are fixed per grid. All of it is reproduced as drawn. Should it be normalised?
121. No-Show ROI Calculator: the hero image is the frame's grey placeholder. A final image is needed for the 467 × 460 tilted frame, as PNG or WebP at 934 × 920.
122. No-Show ROI Calculator: the "Email me this estimate" form needs a backend that builds and emails the PDF summary. The page posts the request (name, organization, email, role, and the calculator inputs and results) to `VITE_CONTACT_ENDPOINT`; no PDF is generated in the browser.
123. No-Show ROI Calculator: answers for seven FAQ questions are missing. Only "What is a normal patient no-show rate?" has copy in the frame.
124. No-Show ROI Calculator: claims reproduced verbatim need review before launch:
   - "27% represents Elixir's validated behavioral health planning target";
   - "$189" as the default "Estimated Elixir intelligent platform license fee";
   - "baseline rates often reach 25–35%";
   - "Program maturation typically yields full results between months 3 and 6";
   - the 18.8% / 12.6% / 25.7% study figures;
   - "No figures leave your workstation unless you submit", which is true of the calculator as built.
125. No-Show ROI Calculator: the frame's numbers imply whole-appointment rounding (94 × 27% = 25.38 is shown as 25, giving $5,000 rather than $5,076). The calculator rounds the same way. Confirm that this is the intended method.
126. KratuAI: the hero image is the frame's grey placeholder (the same as Contact Center's). A final image is needed for the 521 × 460 card, as PNG or WebP at 1042 × 920.
127. KratuAI: the frame's breadcrumb reads "HOME > CONTACT CENTER", copied from the Contact Center frame. The page shows "KratuAI". Please confirm or correct the frame.
128. KratuAI: claims reproduced verbatim need review before launch:
   - the "HIPAA • SOC 2 Type II • HITRUST Certified" badge;
   - "PHI is never used to train public or cross-tenant foundational models";
   - "100% control" (Zero Order Auto-Send);
   - "Predicts … propensity 0–100";
   - the payer and product names in the mock-ups (BCBS, Aetna, UnitedHealth, Medicare, CMS122).
129. KratuAI: answers for five FAQ questions are missing. Only "What is KratuAI?" has copy in the frame.
130. KratuAI: the four "Explore …" buttons need destinations (Visit Prep, Kratu Co-Pilot, Policy Intelligence and A/R Agent pages, which don't exist yet). Their labels end in a missing-glyph box in the frame; the intended icon (likely an arrow) needs confirming.
131. Visit Prep: the hero image is the frame's grey placeholder (the same as Contact Center and KratuAI). A final image is needed for the 521 × 460 card, as PNG or WebP at 1042 × 920.
132. Visit Prep: "Kratu Co-Pilot (Clinical Scribe)" and "Payor Policy Intelligence" in the CTA band need their pages before they can link. They could point at the KratuAI sections instead, but the site's route-change scroll-to-top means a hash on another page would not scroll; please confirm the intended destination.
133. Visit Prep: claims reproduced verbatim need review before launch:
   - "under 3 minutes";
   - "48 hours prior";
   - "never at the expense of HIPAA compliance";
   - "Prioritization remains 100% with the licensed clinician";
   - "encrypted in transit and at rest and is never retained to train public or foundational AI models";
   - "first seven minutes".
134. Visit Prep: the frame's breadcrumb is "Home > Visit Prep". Should a child page show its parent ("Home > KratuAI > Visit Prep")?
135. Elixir Co-Pilot: the hero image is the frame's grey placeholder. A final image is needed for the 521 × 460 card, as PNG or WebP at 1042 × 920.
136. Elixir Co-Pilot: the Visit Flow band has a "Generic image placeholder" box asking for a lifestyle photograph ("revenue cycle team at work…"). The empty frame is reproduced. A photograph is needed for the 954 × 520 area, as PNG or WebP at 1908 × 1040. The note mentions a revenue cycle team on a clinical-documentation page; please confirm the subject.
137. Elixir Co-Pilot: "Schedule a 15-Minute Workflow Walkthrough" points at `/contact-us`, since the site has no scheduling page. Please confirm.
138. Elixir Co-Pilot: claims reproduced verbatim need review before launch:
   - "Patient data is not used to train AI" and "strictly prohibited from being used to train or fine-tune foundational public models";
   - "No credit card required · HIPAA BAA signed on day one · Built natively inside Elixir EHR";
   - "Zero autonomous charting", "100% Parsed", "Kratu Clinical Engine v4.2" and "Template: State BH Form v3.4";
   - "advanced acoustic noise cancellation and speaker diarization";
   - "return hours back to your clinicians every day";
   - "4-tab clinical intelligence" (the pane shows four tabs);
   - the quality measure "CMS122v10".
139. Elixir Co-Pilot: the frame's breadcrumb and hero call the page "Kratu Co-Pilot", while the navigation and route say "Elixir Co-Pilot (Clinical Assistant)". Which name should the page use, and should the breadcrumb show the parent ("Home > KratuAI > …")?
140. Elixir Co-Pilot: the frame's FAQ has a "Got questions?" eyebrow and all answers open in its own card style. It is rendered with the shared FAQ accordion, which has no eyebrow. Should the shared design gain an optional eyebrow?
141. Elixir Co-Pilot: the forced line breaks inside several card texts and FAQ answers (for example "Motor activity calm / with no psychomotor agitation") were dropped. Please confirm they are not intended.
142. Electronic Prior Authorization: the hero image is the frame's grey placeholder (the same export as Denial Management). A final image is needed for the 467 × 460 tilted card, as PNG or WebP at 934 × 920.
143. Electronic Prior Authorization: the six product screenshots are crops of the 1× export, so their small UI text is soft. Please supply the originals at 2× (each body is 554px wide in the layout, so 1108px wide). Their example data (patients, payers, dates, "Kratu"-free UI) should also be confirmed as fictitious.
144. Electronic Prior Authorization: the frame gives no destinations. "Explore Elixir" points at `/what-is-elixir` and "Talk to an Elixir Expert" at `/contact-us`; please confirm.
145. Electronic Prior Authorization: the breadcrumb is "Home > Electronic Prior Authorization". Should it show the parent ("Home > Revenue Cycle Management > …")? The Revenue Cycle Management page mentions prior authorization in its copy but does not link here. Should it?
146. Electronic Prior Authorization: forced mid-sentence line breaks in the frame's paragraphs and card texts were dropped. Please confirm they are not intended. Claims reproduced verbatim also need review before launch, notably the AI capabilities ("Decision prediction", "Turnaround prediction", "Denial prediction", "Authorization readiness scoring", "Appeal letter generation"), "Direct electronic 278/279 submission and receipt loops", "Real-time status inquiry" and "Bulk EDI 270/271". Note that the frame pairs the 278 request with a "279 response", while the standard X12 response to a 278 is also a 278. The "Bulk EDI 270/271" and "Automated batch verification" cards describe eligibility verification rather than prior authorization.
147. A/R Agent: the brief gave the route `/kartu-ai/ar-agent`, but KratuAI and its other children live under `/kratu-ai`. The page is at `/kratu-ai/ar-agent` and the brief's URL redirects there. Please confirm the spelling.
148. A/R Agent: the frame's breadcrumb reads "Home > Kratu Co-Pilot" and its title is "Revenue Kratu AI", while the navigation calls the page "A/R Agent". The breadcrumb shows "A/R Agent"; please confirm the page name.
149. A/R Agent: the hero image is the frame's grey placeholder. A final image is needed for the 521 × 460 card, as PNG or WebP at 1042 × 920. The six mock-ups are 1× crops of the export; 2× originals would sharpen their small text.
150. A/R Agent: the frame gives no destinations. "View Architecture" scrolls to the capabilities band, and the four value-card labels ("Deterministic Scoring", "Payment Windows", "Zero Draft Latency", "Native Embedded UX") scroll to the matching feature bands. Please confirm.
151. A/R Agent: claims reproduced verbatim need review before launch:
   - "98.4% first-pass clean claim acceptance rate across all major national commercial and managed Medicaid payers";
   - "evaluate predictive accuracy on historical claims in less than 48 hours";
   - "Generates fully cited payer-ready appeals in seconds";
   - the mock-ups' example data (patient "Lando Norris", payer names, claim numbers, "Confidence: 92%", "78%").
152. Payor Policy Intelligence: the hero image is the frame's grey placeholder. A final image is needed for the 521 × 460 card, as PNG or WebP at 1042 × 920. The two illustrative interfaces are 1× crops; 2× originals would sharpen their small text.
153. Payor Policy Intelligence: "See how it works" has no destination in the frame; it scrolls to "Why claims get denied…" and its three stages. Please confirm.
154. Payor Policy Intelligence: the FAQ uses the site's shared accordion, per the standing rule. The frame's own FAQ design (left-aligned heading, white band, open lime-topped cards) is not used. Should the shared design gain a variant for it?
155. Payor Policy Intelligence: claims reproduced verbatim need review before launch:
   - "optical character recognition for scanned policies";
   - "Every extracted value carries a confidence score" and the confidence thresholds;
   - "accuracy can be measured and improved against actual adjudication results";
   - the illustrative codes and values (90837 GT at 0.96, 96127 at 0.88, "87% likely to be accepted").
156. Responsible AI: the hero image is the frame's grey placeholder. A final image is needed for the 521 × 460 card, as PNG or WebP at 1042 × 920.
157. Responsible AI: the frame gives no destinations. "Read the principles" scrolls to the clinical principles, "Questions to ask any vendor" to the vendor questions, and "Request a KratuAI Demo" goes to `/request-demo`. Please confirm.
158. Responsible AI: the FAQ uses the site's shared accordion, per the standing rule. The frame's own FAQ design ("Answers" chip, left-aligned heading, open lime-edged cards) is not used.
159. Responsible AI: the page makes claims about data, privacy and governance. They are reproduced verbatim from the frame and need compliance review before launch:
   - "Patient data is not used to train AI";
   - identity verification with a one-time passcode before any patient information appears;
   - the audit ledger text ("Every KratuAI inference binds historical parameters, source token anchors, and the signing staff member's credentials…") and the retention table;
   - the enforcement statements under each principle (no auto-commit, confidence thresholds, recording controls).
160. Responsible AI: Patient No-Show Prediction still shows its "Responsible AI" references as inert text (`data/patientNoShowPrediction.js`, the "Responsible AI at Elixir" link and the "Responsible AI" related link). Should they now link to `/responsible-ai`?
161. Responsible AI: the CTA band's frame has a long underline running past the related links. It looks like an export artefact and was not reproduced. Please confirm.
162. Behavioral Health: the hero image is the frame's grey placeholder. A final image is needed for the 521 × 460 card, as PNG or WebP at 1042 × 920.
163. Behavioral Health: the frame gives no destinations. "Mental health or substance use" scrolls to the two service lines, "Request a Demo" goes to `/request-demo`, and "Explore the platform" goes to `/platform` (as on the approved pages; that route is not built yet). Please confirm.
164. Behavioral Health: resolved. The Mental Health and Substance Use Disorder links now go to `/behavioral-health/mental-health` and `/behavioral-health/substance-use-disorder`.
165. Behavioral Health: the FAQ uses the site's shared accordion, per the standing rule. The frame's own FAQ design (left-aligned heading, white band, open lime-topped cards) is not used.
166. Behavioral Health: claims reproduced verbatim need review before launch:
   - the 42 CFR Part 2 statements, including "the February 2024 final rule — whose compliance date of 16 February 2026 has now passed";
   - "Salesforce's HIPAA-compliant, HITRUST-certified cloud infrastructure";
   - "Zero-retention architecture" and "Your data is not used to train a model for anyone else";
   - the clinical and billing capability lists (EPCS, PDMP integration, ASAM Criteria 4th Edition, OTP dosing integration, +90833 / +90785 codes).
167. Mental Health: the breadcrumb in the frame reads "Home > Behavioral Health", not "Mental Health". It is reproduced as drawn. Should it read "Home > Behavioral Health > Mental Health", or "Home > Mental Health"?
168. Mental Health: the hero image is the frame's grey placeholder. A final image is needed for the 521 × 460 card, as PNG or WebP at 1042 × 920.
169. Mental Health: the frame gives no destinations. "See measurement-based care" scrolls to the Measurement section, and "Request a Demo" goes to `/request-demo`. Please confirm.
170. Mental Health: the FAQ uses the site's shared accordion, per the standing rule. The frame's own FAQ design (eyebrow, left-aligned heading, open surface cards) is not used.
171. Mental Health: the three related resources in the CTA ("Explore CCBHC Compliance", "Collaborative Care Registry Walkthrough", "Mobile Crisis Billing Brief") have no existing pages and render as text. (The "Substance use disorder EHR" button now goes to `/behavioral-health/substance-use-disorder`.)
172. Mental Health: the copy refers to "Source 1 below" and "Sources 9 and 10 below", but the frame has no sources section. Should one be added, or the references removed?
173. Mental Health: claims reproduced verbatim need review before launch:
   - the meta-analysis figures (2,019 patients, OR 1.83 / SMD 0.53 / OR 1.68 / OR 1.66 with their CIs and p-values);
   - "over 90 randomized controlled trials";
   - the CPT/HCPCS codes, time thresholds and CY2025/CY2026 PFS status;
   - the 2028 Medicare telehealth rule;
   - the "85% enhanced Medicaid match under the American Rescue Plan Act";
   - "EPCS-certified";
   - "Session audio is never retained" and "Client data is never used to train generalized models".
174. Substance Use Disorder: the hero image is the frame's grey placeholder. A final image is needed for the 521 × 460 card, as PNG or WebP at 1042 × 920.
175. Substance Use Disorder: the "Clinical Documentation Across Residential, Outpatient and Withdrawal Management" band repeats the six 42 CFR Part 2 cards from the Compliance band word for word. It looks like a copy-paste in the frame. It is reproduced as drawn; please supply the intended clinical-documentation cards.
176. Substance Use Disorder: the frame gives no destinations. "See the level-of-care coverage" scrolls to the crosswalk, and "Request a Demo" goes to `/request-demo`. Please confirm.
177. Substance Use Disorder: the FAQ uses the site's shared accordion, per the standing rule. The frame's own FAQ design (left-aligned heading, open white cards) is not used.
178. Substance Use Disorder: the copy refers to "Sources 1–4 below", but the frame has no sources section. Should one be added?
179. Substance Use Disorder: claims reproduced verbatim need review before launch:
   - the ASAM Fourth Edition level names and the state adoption dates (Colorado, Illinois SUPR, California Drug Medi-Cal, Washington);
   - the 42 CFR Part 2 final-rule statements, including "up to $2,067,813 per calendar year";
   - the methadone take-home maxima (42 CFR §8.12) and the SAMHSA 2024 rule, telehealth-initiation and MATE Act statements;
   - "reducing the UR team's drafting time from hours to minutes";
   - "AI models are trained on zero-retention infrastructure and comply with 42 CFR Part 2 and HIPAA privacy rules".
180. Care Coordination: the hero image is the frame's grey placeholder. A final image is needed for the 521 × 460 card, as PNG or WebP at 1042 × 920.
181. Care Coordination: the frame gives no destinations. "The loop that does not close" scrolls to that section, "Request a Demo" goes to `/request-demo`, and "Behavioral Health" goes to `/behavioral-health`. Please confirm.
182. Care Coordination: the FAQ uses the site's shared accordion, per the standing rule. The frame's own FAQ design (left-aligned heading, open lime-topped cards) is not used.
183. Care Coordination: the copy cites "Sources 9–10", "Source 13" and "Sources 17–22", but the frame has no sources section. Should one be added?
184. Care Coordination: claims reproduced verbatim need review before launch:
   - the referral study figures (103,737 attempts, 61.1%, 34.8%) and the Timmins 2022 survey figures (65%, 34%, 22%);
   - "23% reduction in errors, 30% reduction in preventable adverse events";
   - the 42 CFR Part 2 citations and dates;
   - "up to $1 million per violation";
   - the MIPS Measure 374 benchmarks (about 43% median, bottom deciles below 16%);
   - the TEFCA, CMS-0057-F, USCDI and HTI statuses;
   - the April 2026 ONC renaming;
   - "As of September 2026, OCR has not yet announced its first major enforcement action".
185. Outpatient Clinics: the hero image is the frame's grey placeholder. A final image is needed for the 521 × 460 card, as PNG or WebP at 1042 × 920.
186. Outpatient Clinics: the frame gives no destinations. "See how service lines work" scrolls to the core-idea section, and "Speak with an EHR Specialist" goes to `/contact-us`. More Specialties has no page; should one exist at `/more-specialties`?
187. Outpatient Clinics: the FAQ uses the site's shared accordion, per the standing rule. The frame's own FAQ design is not used.
188. Outpatient Clinics: claims reproduced verbatim need review before launch:
   - the No Surprises Act GFE deadlines and the enforcement notes;
   - the CMS EPCS 70% threshold and its exceptions;
   - the 2028 telehealth changes and the DEA flexibilities date;
   - the MIPS 75-point threshold and the 27 MVPs;
   - the CMS-0057-F deadlines (72 hours / 7 days);
   - the ONC HTI-1 criteria and the December 2025 proposed rule;
   - "Customizable templates at no extra cost" and the Full RCM service offering.
189. Small Practices: the hero image is the frame's grey placeholder. A final image is needed for the 521 × 460 card, as PNG or WebP at 1042 × 920.
190. Small Practices: the frame gives no destination for "What small practices actually need". It scrolls to the "Start here" section.
191. Small Practices: the frame cites "Source 1." to "Sources 7–8." with down arrows and underlines, but has no sources list. They are rendered as plain text; please supply the sources list (or their URLs) so they can link.
192. Small Practices: the FAQ uses the site's shared accordion, per the standing rule. The frame's own FAQ design and its "1."–"8." question numbers are not used.
193. Small Practices: the red mark on "Three things vendors get wrong" shows a missing-glyph box in the export. It is rendered as "✕"; please confirm the intended icon.
194. Small Practices: "See Behavioral Health." in the Permanent telehealth card is plain text in the frame. Should it link to `/behavioral-health`?
195. Small Practices: claims reproduced verbatim need review before launch:
   - the 2028 Medicare telehealth changes;
   - the 2026 MIPS low-volume thresholds, small-practice relief and the 75-point threshold;
   - the No Surprises Act GFE rules and the EPCS 70% threshold and 100-prescription exception;
   - the HIPAA proposed rule (January 2025) and the AES-256 / TLS 1.3 platform claims;
   - the pricing model, the 6-to-10-week go-live and "100% cloud-based".
196. Telehealth: the frame's monospace face (it looks like JetBrains Mono) is not loaded by the site, and adding it would mean a new font request. The labels use a local stack led by Consolas. Confirm the face, and whether it should be added to the site's font load.
197. Telehealth: the frame gives no destination for "See the 2027 and 2028 rule changes". It scrolls to the Medicare policy section.
198. Telehealth: the FAQ uses the site's shared accordion, per the standing rule. The frame's own FAQ design and its "Q // 01"–"Q // 08" labels are not used.
199. Telehealth: the frame cites "Source 1." to "Source 11." but has no sources list. They are plain text; please supply the sources (or their URLs).
200. Telehealth: the hero image is the frame's grey placeholder. A final image is needed for the 521 × 460 card, as PNG or WebP at 1042 × 920.
201. Telehealth: the Licensure table lists the Counseling Compact as "38 states + DC", while the notice below says "Thirty-nine jurisdictions have enacted it". Both are reproduced verbatim; please confirm which is right.
202. Telehealth: claims reproduced verbatim need review before launch:
   - the POS 10/02 rates, HCPCS Q3014 at $31.85, and the 95/93/FQ/FR/GT modifier rules;
   - the 31 December 2027 and 1 January 2028 Medicare dates, and the CY2026 changes;
   - the DEA flexibilities to 31 December 2026 and 21 CFR §1306.51;
   - the compact counts as of September 2026;
   - the OCR enforcement-discretion dates and the BAA and audio-only guidance.
203. Aesthetic Practices: the hero description repeats the Telehealth hero word for word ("Adopting telehealth should not mean adopting a second system…"). It is reproduced as drawn; please supply the intended Aesthetic Practices description.
204. Aesthetic Practices: the frame gives no destination for "The before-and-after problem". It scrolls to the before-and-after photos section.
205. Aesthetic Practices: the FAQ uses the site's shared accordion, per the standing rule. The frame's own FAQ design is not used.
206. Aesthetic Practices: the frame cites "Source 1." to "Sources 10–11." but has no sources list. They are plain text; please supply the sources (or their URLs).
207. Aesthetic Practices: the hero image is the frame's grey placeholder. A final image is needed for the 521 × 460 card, as PNG or WebP at 1042 × 920.
208. Aesthetic Practices: claims reproduced verbatim need review before launch:
   - the $182,000 OCR settlement (Cadia Healthcare, September 2025) and its details;
   - 45 CFR 164.508 and the de-identification safe harbor reading;
   - the Good Faith Estimate trigger, deadlines and the $400 dispute threshold;
   - the TCPA healthcare exemption and the FTC reviews rule (October 2024);
   - the April 2024 counterfeit Botox case and the MedWatch reporting statement;
   - the California and Texas scope-of-practice and supervision rules, and the March 2026 accreditation program;
   - IRS Publication 502 and HSA/FSA eligibility.
209. Student Health: the frame ("Student Care Management", breadcrumb "Home > Student Health") arrived with the Telehealth brief. It is built at `/more-specialties/student-health`; confirm the route and the nav label.
210. Student Health: the frame gives no destination for "Enrolled, but not billing". It scrolls to the enrolled-vs-billing section.
211. Student Health: the FAQ uses the site's shared accordion, per the standing rule. The frame's lime-topped open cards are not used.
212. Student Health: the frame cites "Source 4" to "Source 22" but has no sources list; they are plain text. The hero image is the grey placeholder (521 × 460; PNG or WebP at 1042 × 920).
213. Student Health: claims reproduced verbatim need review before launch: the DHCS CYBHI figures (700 / 243 / $20.79M, as of 31 August 2026); 34 CFR §300.154 and Cal. Fam. Code §6924; the 2018 CMS consent guidance; Education Code §215; the LEA BOP / CYBHI routing rule and W&I Code §14115.8; the 365-day filing window; the 85% RMTS threshold and retention periods; the 1 July 2026 decoupling; FERPA / HIPAA statements.
214. Care Plan Management: the parent Care Management page does not exist (no route, no page). The child is at `/care-management/care-plan-management`; should a Care Management page exist at `/care-management`?
215. Care Plan Management: no test-drive or platform route exists. "Take a test drive" (hero and CTA) goes to the site's demo destination, `/request-demo`; "Explore the platform" goes to `/what-is-elixir`, the existing platform overview. Please confirm both.
216. Care Plan Management: the six care-setting pills ("Primary care", "Behavioral health", …) are drawn like buttons but have no destinations. They are static labels; Behavioral Health (`/behavioral-health`) could be linked if intended.
217. Care Plan Management: the hero image is the frame's grey placeholder. A final image is needed for the 521 × 460 card, as PNG or WebP at 1042 × 920.
218. Care Plan Management: claims reproduced verbatim need review before launch: "HIPAA Compliant", "enterprise audit trails", "enterprise-grade security", "Native to Salesforce" and "Built to scale … without re-platforming".
219. ONC MFA Use Cases: the parent ONC Certification page does not exist (no route, no page). The child is at `/onc-certification/onc-mfa-use-cases`; should an ONC Certification page exist at `/onc-certification`?
220. ONC MFA Use Cases: the form shows a reCAPTCHA ("I'm not a robot"). The site has no reCAPTCHA integration (it needs a site key, Google's script and server-side verification), and a drawn checkbox would be a fake security control, so it is not rendered. Please supply the site key and confirm the verification endpoint; the box then slots in above Submit. **Resolved 2026-10-23:** lead forms now post to Salesforce Web-to-Lead with reCAPTCHA (see "Salesforce Web-to-Lead forms").
221. ONC MFA Use Cases: the trust row ("Certified Partner", "SOC 2 Certified", "HIPAA Ready", "Enterprise Ready") and the hero's MFA statements are reproduced verbatim from the frame; they need compliance review before launch, particularly "SOC 2 Certified".
222. ONC MFA Use Cases: the hero image is the frame's grey placeholder. A final image is needed for the 521 × 460 card, as PNG or WebP at 1042 × 920.
223. Site-wide: pages linked from the site that do not exist yet now land on the "not available yet" page instead of silently going home. These need pages or URLs:
   - Privacy Policy (`/privacy-policy`, linked from the footer and every contact form's consent line);
   - Support Center, Documentation and Developer API (`/resources/…`);
   - Partners (`/company/partners`);
   - whitepapers;
   - the remaining AI Engine capability pages (clinical notes summarization, lab result analysis);
   - hospitals and large networks.
224. Site-wide: legacy and planned URLs used by existing links are redirected to the existing page that covers them (`src/routes/aliases.js`). Confirm the mappings:
   - "Request a Demo" and "Watch Product Tour" → the Contact Us form;
   - `/platform` → What Is Elixir;
   - `/ai-engine/*` → the matching Kratu AI, Eligibility Verification, Denial Management or Patient Portal page;
   - `/resources/case-studies` → Success Stories.
225. Site-wide: the footer's YouTube and LinkedIn icons have no profile URLs, so they render unlinked. Please supply the URLs.
226. Site-wide: the contact and newsletter forms need `VITE_CONTACT_ENDPOINT` and `VITE_NEWSLETTER_ENDPOINT`. Without them, a submission shows the error message (with the info@elixirehr.com fallback) rather than pretending to succeed. **Partly resolved 2026-10-23:** lead forms now use Salesforce Web-to-Lead; only the newsletter still needs `VITE_NEWSLETTER_ENDPOINT`.
227. Elixir Certified Module: the certificate image is cropped from the 1× frame (396 × 297) and is soft. Please supply the original certificate (PNG or PDF) at 2× or better.
228. Elixir Certified Module: the "RWT Plan 2025" and "Real World Testing Results Report CY 2025" PDFs are not in the project. Supply the files or their URLs (`href` in `data/elixirCertifiedModule.js`) and the buttons become real downloads.
229. Elixir Certified Module: the certificate facts, criteria table, fee disclosures, ONC disclaimer and the badges ("SOC 2 Certified", "HIPAA Ready", …) are reproduced verbatim from the frame. They need compliance review against the current CHPL listing before launch. The frame text has a few apparent typos kept as drawn ("Release 2.1 10", "The API include").
230. Elixir Certified Module: "170.315(b)(10) : Electronic Health Information export" is underlined in lime, like a link. Should it link to the Patient EHI Export page once that exists?
231. Elixir Certified Module: the hero image is the frame's grey placeholder. A final image is needed for the 521 × 460 card.
232. Care Management: "Value-Based Care", "Integrations" and "guide to ADT feeds" are links in the frame, but none of those pages exist. They are plain text until the pages (or URLs) exist.
233. Care Management: the billing table, CMS/OIG references, thresholds and codes are reproduced verbatim from the frame (including "42 CFR 410.26(b)(5)" and OIG report A-07-21-06088). They need clinical-billing and compliance review before launch.
234. Care Management: "What the codes pay for" has no destination in the frame; it scrolls to the "Chronic Care Management Billing" table. Confirm.
235. Care Management: the hero image is the frame's grey placeholder. A final image is needed for the 521 × 460 card.
236. Social Determinants of Health: the FAQ supplies an answer only for the first question. "Can we bill for SDOH screening?", "How do you handle screening instruments like PRAPARE®?", "Didn’t CMS drop the SDOH screening measures?", "Does screening for social needs improve outcomes?" and "Where does the data go once it is captured?" need answer copy.
237. Social Determinants of Health: the list markers in the three policy cards render as missing-glyph boxes in the frame. Which icons were intended (for example ✕ / ✓ / →)?
238. Social Determinants of Health: the prevalence figures, federal-rule references (CMS-1807-F, CMS-1808-F, G0136, G0019–G0024), the AHC evaluation figures and the "Three more things we will not claim" statements are reproduced verbatim from the frame. They need clinical and compliance review, with sources, before launch.
239. Social Determinants of Health: "The eight domains" has no destination in the frame; it scrolls to the domains table. Confirm. The hero image is the frame's grey placeholder and needs a final image.
240. Contact Us: the form panel still reads "TRUSTED BY MORE THAN 1,200 CLINICS WORLDWIDE". The Home heading was changed to "Trusted by Healthcare Providers Worldwide" on request; should Contact Us match?
241. What Is Elixir: the Contact Center, Billing and Patient Portal tabs show interim module cards (copy from those pages, tinted icons from this page). Please supply the designed modules and icons for these three categories.
242. Insights videos and webinars: the play buttons open each post's page, but the (demo) posts carry no recording. Supply the video or webinar URLs (post `video` blocks) so they play.
243. Success Stories: only one featured story (with a quote) is supplied; the carousel's other six slides are the story cards. Please supply further featured stories, ideally with photos at 576 × 666.
244. Home hero slider: the Kratu frame shows no arrows or dots. A pause button and two dot indicators were added at the foot of the band (needed to pause an auto-advancing slider and to pick a slide). Please confirm or supply the intended controls, and a mobile frame if the slide should differ on phones.
