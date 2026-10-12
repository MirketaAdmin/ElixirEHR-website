# Elixir — Marketing Website

React 19 + Vite. Plain CSS (CSS Modules + global tokens). The visual source of truth is the Figma design; every value is documented in [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md).

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run lint     # oxlint
```

## Structure

```
src/
├── main.jsx                 Entry: global styles + <App />
├── App.jsx                  Routes (react-router-dom)
├── styles/
│   ├── tokens.css           Design tokens — colours, fonts, radii, spacing, shadows
│   ├── base.css             Reset + element defaults
│   ├── typography.css       Type-scale classes (.text-display-lg, .text-headline-lg, …)
│   └── global.css           Imports the three files above
├── layouts/
│   └── MainLayout/          Header + <Outlet /> + Footer
├── components/
│   ├── layout/              Page structure: Container, Section, Header, Footer
│   ├── sections/            Sections used on more than one page: PageHero, TiltedHeroMedia, AiCapabilitiesSection, CtaBanner, ContactSection (+ ContactForm), FaqSection
│   ├── posts/               The post inner-page template: PostDetailTemplate, PostHero, PostContent, PostSidebar, PostShare, PostSeo
│   └── ui/                  Shared primitives: Button, Icon, Logo, SectionHeading, RichText, ImagePlaceholder, Marquee, BorderGlow
├── pages/
│   ├── Home/                `/` — one folder per page; page-only sections live in `sections/`
│   ├── AboutUs/             `/about-us`
│   ├── WhatIsElixir/        `/what-is-elixir`
│   ├── WhyElixir/           `/why-elixir`
│   ├── ElectronicHealthRecord/ `/electronic-health-record`
│   ├── RevenueCycleManagement/ `/revenue-cycle-management` (page-local helpers in `components/`)
│   ├── EligibilityVerification/ `/eligibility-verification` (page-local `EvCheckList` in `components/`)
│   ├── TreatmentCenterSolutions/ `/treatment-center-solutions` (page-local `IconFeatureGrid` in `components/`)
│   ├── ContactUs/           `/contact-us`
│   ├── DenialManagement/    `/denial-management` (page-local `DmSectionHeading` in `components/`)
│   ├── ClaimPreparation/    `/professional-and-institutional-claim-preparation` (page-local `PcSplit`, `PcMediaFrame`, `PcCheckList` in `components/`)
│   ├── ElectronicVisitVerification/  `/electronic-visit-verification` (page-local `EvvSource` in `components/`)
│   ├── CaregiverMobileApp/  `/caregiver-mobile-app`
│   ├── EvvFieldService/     `/evv-for-salesforce-field-service` (page-local `ScreenshotNote` in `components/`)
│   ├── SuccessStories/      `/success-stories`
│   ├── Insights/            `/insights`, `/blog`, `/insights/e-book`, `/insights/benchmark-surveys`, `/insights/release-notes`, `/insights/webinars`, `/insights/videos` (one folder per listing; shared `InsightsShell`, `InsightsNav`, `CategoryFilter`, `WeeklyBriefing`, `ResourceCard`, `ListingStatus` in `components/`; search/filter/paging in `useResourceListing.js`)
│   ├── PressReleases/       `/press-releases` (listing; page-local `ReleaseCard`, `FeaturedRelease`, `DateField` in `components/`; pagination is the shared `ui/Pagination`)
│   └── PostDetail/          Route element for every post URL (`/blog/:slug`, `/press-release/:slug`, …)
├── posts/                   Post content, one file per post: blog/, press-release/, case-study/, release-note/, e-book/, benchmark-survey/, webinars/, video/ (source folders only — never part of a URL)
├── data/                    Content as plain JS (navigation, footer, home, about, whatIsElixir, whyElixir, electronicHealthRecord, revenueCycleManagement, eligibilityVerification, treatmentCenterSolutions, contactUs, denialManagement, claimPreparation, electronicVisitVerification, caregiverMobileApp, evvFieldService, successStories, insights (Insights hero, category nav, page titles, sidebar categories), pressReleases (listing copy), plus shared aiCapabilities and contact), not hard-coded in JSX
├── assets/
│   ├── brand/               Logos
│   ├── icons/               Small UI glyphs extracted from the Figma exports
│   ├── home/<section>/      Home images and icons, grouped by section
│   ├── about/               About Us images (team photos in about/team/)
│   ├── what-is-elixir/      What Is Elixir images and icons
│   ├── why-elixir/          Why Elixir images and icons
│   ├── electronic-health-record/ EHR images and icons
│   ├── revenue-cycle-management/ RCM screenshots and icons
│   ├── eligibility-verification/ Eligibility Verification images and icons
│   ├── treatment-center-solutions/ Treatment Center Solutions images and icons
│   ├── contact-us/          Contact Us images and icons
│   ├── denial-management/   Denial Management images and icons
│   ├── claim-preparation/   Claim Preparation icons
│   ├── electronic-visit-verification/  EVV icons
│   ├── caregiver-mobile-app/  Caregiver Mobile App icons
│   ├── evv-field-service/   EVV for Salesforce Field Service icons
│   ├── success-stories/     Success Stories photos (1× crops of the frame)
│   ├── press-releases/      Press Releases listing hero image
│   └── posts/<type>/<slug>/ Post images (card.png, hero.png, …)
├── hooks/                   useMediaQuery / usePrefersReducedMotion, useAutoRotate (timed index for tabs and carousels)
├── services/                API clients (contactService — the shared Contact Us form)
└── utils/                   Small helpers (cn, formatDate)
```

### Conventions
- **Tokens only.** Components use `var(--…)` from `tokens.css` and never hard-code brand colours.
- **Shared vs page-specific.** A component goes in `components/` only if more than one section or page uses it. Anything used by one section only lives in `pages/<Page>/sections/`.
- **Content in `data/`.** Labels, links and card content live in `data/*.js`, so copy changes don't touch JSX.
- **Links.** Internal links use `to` (router `<Link>`); external links use `href`.

### Shared components
| Component | Purpose |
|---|---|
| `Container` | 1152px content width with 64px side padding |
| `Section` | Full-bleed band. `tone`: white / surface / dark / primary. `spacing`: lg 100px / md 80px / none |
| `Header` | Sticky 79px purple bar: logo (Home), primary nav, search, "Request a Demo". ≥ 1200px: `DesktopNav` with `MegaMenu` panels (hover/click, Escape, outside click); below: hamburger + `MobileNav` accordion (Levels 1–4). Menu content lives in `data/navigation.js` (`mainNav`): items link only when `to` is an existing route; `plannedPath` records a URL for a page not built yet |
| `Footer` | Brand column + 3 link columns + bottom bar |
| `Button` | Pill. `variant`: primary / secondary / tertiary / outline / ghost. `size`: sm 36 / md 48 / lg 56 / xl 58 / xxl 64 |
| `SectionHeading` | Eyebrow + H2 + optional description. `align`: left / center. `tone`: light / dark |
| `EyebrowHeading` | Lime Inter-caps eyebrow + 48px H2 (EVV, Caregiver Mobile App). `align`: left / center. `tone`: light / dark. Eyebrow-to-title gap via `--eyebrow-heading-gap` (default 8px) |
| `Icon` | Inline SVG glyphs not supplied as assets (search, arrow, play, social) |
| `Pagination` | Numbered pager with previous/next and ellipses (Press Releases, Insights listings). Props: `page`, `totalPages`, `onChange`, `label` (the nav's accessible name). Render it only when `totalPages > 1` |
| `Logo` | White Elixir logo linking home |
| `RichText` | Renders copy written as segments (plain strings, `strong`/`italic`/`emphasis` phrases, `to`/`href` links) from `data/` |
| `ImagePlaceholder` | The Figma "Generic image placeholder" card; size and copy position set by the consuming section; optional `description` names the missing image |
| `Marquee` | Seamless, slow horizontal loop of its children (rendered twice, copy hidden from assistive tech). `duration` (seconds per loop) is the one speed control; pauses on hover; static under reduced motion |
| `BorderGlow` | Edge glow that follows the pointer, adapted from React Bits "Border Glow" (Elixir lime/lavender). `as` (e.g. `Link`), `sweep` (one glow pass when first scrolled into view), colour/intensity props. The glow extends `glowRadius` px past the card, so clip horizontal overflow on the section |

### Shared sections (`components/sections/`)
| Section | Used on | Notes |
|---|---|---|
| `PageHero` | About Us, What Is Elixir, Why Elixir, EHR, RCM, Eligibility Verification, Treatment Center Solutions, Contact Us, Press Releases, Denial Management, Claim Preparation, EVV, Caregiver Mobile App | Props: `currentPage`, `titleLines`, optional `titleAccent` (highlighted substring, or one substring per line; default highlights line 2), `description` (string, or an array of paragraphs spaced by `--page-hero-paragraph-gap`, default 24px), optional `primaryCta` (with optional `icon` { src, width, height } shown before the label in place of the arrow), optional `secondaryCta` (`to` or `href`), `image` + `badge` (default right column) or `media` (custom right column), `className`, and `children` (rendered under the description, e.g. the Insights search field). CSS variables `--page-hero-padding`, `--page-hero-primary-height`, `--page-hero-primary-size`, `--page-hero-description-width`, `--page-hero-description-gap`, `--page-hero-description-size`, `--page-hero-description-leading` and `--page-hero-content-offset` allow frame-specific tuning |
| `AiCapabilitiesSection` | Home, What Is Elixir, Why Elixir, EHR | Content in `data/aiCapabilities.js` |
| `TiltedHeroMedia` | RCM, Eligibility Verification, Treatment Center Solutions | 467×460 hero photo on a tilted backdrop (exported as one image) |
| `CtaBanner` | About Us, What Is Elixir, Why Elixir, EHR, RCM, Eligibility Verification, Treatment Center Solutions, Claim Preparation, EVV | `title` (string or lines), optional `eyebrow`, `description` and `secondaryCta`, optional `children` rendered under the buttons; `className`/`ctaClassName`/`secondaryCtaClassName` for frame-specific styling |
| `ContactSection` | About Us, What Is Elixir | Content in `data/contact.js`; renders `ContactForm` |
| `ContactForm` | About Us, What Is Elixir, Contact Us, EVV for Salesforce Field Service | The one contact form: fields from `data/contact.js`, submits via `services/contactService.js`. Optional `intro` (content inside the card), `fieldNames` (subset/order of the shared fields), `submitLabel`, `showConsent` (default true) and `className`; CSS variables `--contact-form-row-gap`, `--contact-form-label-gap`, `--contact-form-submit-gap`, `--contact-form-background` for frame-specific spacing |
| `FaqSection` | RCM, EVV, Caregiver Mobile App, EVV for Salesforce Field Service (and any page that needs an FAQ) | The site's one FAQ design, used unchanged on every page (no per-page variants). Props: `title` (default "Frequently Asked Questions"), optional `description`, `items` = `[{ question, answer }]` (answer: string or RichText segments; an item without `answer` renders as a static row), `className`. Questions sit in two columns (first half left) on white 64px cards; each question is a button that opens its answer in the same card. Items toggle independently. Keep FAQ copy in the page's `data/` file and pass it in: `<FaqSection {...rcmFaq} />` |

### Data persistence
The only feature that sends data is the contact form (`ContactForm`, on About Us, What Is Elixir and Contact Us). `services/contactService.js` POSTs the form as JSON to `VITE_CONTACT_ENDPOINT`, set in a `.env.local` file or the host's environment. Storing the submissions (a database or a CRM) is the endpoint's job and isn't part of this front end. If the variable is unset, submitting fails gracefully and an error message is announced to screen readers.

The Insights pages' "Weekly Briefing" sign-up works the same way: `services/newsletterService.js` POSTs `{ email }` to `VITE_NEWSLETTER_ENDPOINT`. Until that variable is set, subscribing shows an error.

### Posts (blog, press releases, case studies, release notes, e-books, benchmark surveys, webinars, videos)
Every post type shares one inner-page template, `components/posts/PostDetailTemplate` (built from the Figma "Press Release" detail frame), and is served at a root-level URL:

| Type | Source folder | Public URL |
|---|---|---|
| Blog | `src/posts/blog/` | `/blog/<slug>` (listing: `/blog`) |
| Press Release | `src/posts/press-release/` | `/press-release/<slug>` (listing: `/press-releases`) |
| Case Study | `src/posts/case-study/` | `/case-study/<slug>` |
| Release Note | `src/posts/release-note/` | `/release-note/<slug>` (listing: `/insights/release-notes`) |
| E-book | `src/posts/e-book/` | `/e-book/<slug>` (listing: `/insights/e-book`) |
| Benchmark Survey | `src/posts/benchmark-survey/` | `/benchmark-survey/<slug>` (listing: `/insights/benchmark-surveys`) |
| Webinar | `src/posts/webinars/` | `/webinars/<slug>` (listing: `/insights/webinars`) |
| Video | `src/posts/video/` | `/video/<slug>` (listing: `/insights/videos`) |

`/insights` (All Resources) mixes every Insights type. Its lead row is the newest e-book, the next upcoming webinar and the newest video. The feed then takes the newest remaining post of each type in turn, three at a time ("Load More Resources").

`posts` is only the source folder; it never appears in a URL. Types, labels and URL segments live in `src/posts/types.js`; routes are generated from it in `App.jsx`. The old `/press-releases/<slug>` detail URLs redirect to `/press-release/<slug>`. Unknown slugs redirect to Home (the app's existing not-found behaviour).

**Adding a post:** create `src/posts/<type>/<slug>.js` (the file name is the slug) with a default-exported object, and put its images in `src/assets/posts/<type>/<slug>/`. No page or route changes are needed. Fields (only `title`, `excerpt` and `publishDate` are required; anything missing is simply not shown):

- `title`, `excerpt`, `publishDate` (ISO `yyyy-mm-dd`), optional `updatedDate`
- `listingTitle`: a different title for listing cards
- `category`: listing card badge
- `tags`: the sidebar "Categories" list
- `location`, `author`, `details` (extra hero pills, e.g. `'Version 2.4'`, `'Client: …'`, `'Speakers: …'`)
- `heroImage` `{ src, alt, width, height }` and `cardImage` `{ src, alt }`
- `content`: an array of blocks (`lead`, `paragraph`, `heading`, `list`, `highlights`, `quote`, `cta`, `image`, `video`, `table`); see the comment at the top of `PostContent.jsx`
- `mediaContact`, `about`: press releases inherit both from `press-release/_shared.js`
- `event` `{ startDate, endDate?, attendanceMode, timeLabel?, registerUrl? }` (webinars): makes the structured data an Event. A webinar whose `startDate` is still ahead is shown as the upcoming/live webinar. `timeLabel` is the displayed time (e.g. `'2:00 PM EST'`). `registerUrl` is where "Register Now" goes; without it, the button opens the webinar's page
- Insights listing fields (all optional): `category` (sidebar filters on Webinars and Videos; Blog lists the categories found on its posts), `version` (release notes), `pages`, `readingTime` (e.g. `'15 min read'`) and `file` (a PDF URL: makes "Download" and "PDF Available" download it) for e-books, `speaker` `{ name, role, avatar }` for webinars, and `label`, `duration` (`'12:45'`) and `views` for webinars and videos. Put the recording itself in `content` as a `video` block
- `seo` `{ title?, description?, keywords?, image? }`: overrides

`src/posts/index.js` exposes `getPosts(type)` (newest first), `getPost(type, slug)`, `getPostPath(post)` and `getLatestPosts(post)`. The Press Releases listing (search, date range, pagination) reads the same registry.

**Demo content:** `src/posts/<type>/_demo/` holds test posts. Press releases, case studies and others have one minimal post each. The Insights types have posts that reproduce the Figma cards, with 1× image crops from the frames, so the listings can be checked against the design. These load only in development or when `VITE_SHOW_DEMO_POSTS=true`, are marked `noindex`, and are left out of production builds.

**SEO:** `PostSeo` renders the title, description, canonical URL, Open Graph, Twitter card and `article:*` tags, plus JSON-LD (BlogPosting, NewsArticle, TechArticle, Article, or Event for webinars with an `event`). Set `VITE_SITE_URL` (e.g. `https://www.example.com`) so canonical and `og:image` URLs use the public domain; the current origin is used otherwise.

### Hosting
The app uses client-side routing, so the host must serve `index.html` for unknown paths (for example `/about-us`). `vite preview` does this automatically.

### Legacy code
The previous implementation, built from an older spec, is preserved in `_archive/src-legacy-2026-10-05/`. It is excluded from the build and lint.
