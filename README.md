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
│   ├── motion.css           Site-wide motion: scroll reveals, card hover, inline-link underline, focus, reduced motion
│   └── global.css           Imports the files above
├── layouts/
│   └── MainLayout/          Header + <Outlet /> + Footer + MotionController; scrolls to top or to the URL's #anchor
├── components/
│   ├── layout/              Page structure: Container, Section, Header (with SiteSearch), Footer
│   ├── motion/              MotionController (scroll reveals + card tagging, once per route) and CareNetwork (the signature canvas)
│   ├── sections/            Sections used on more than one page: PageHero, TiltedHeroMedia, WideTiltedHeroMedia (521 × 460 hero card: Contact Center, KratuAI), AiCapabilitiesSection, CtaBanner, ContactSection (+ ContactForm), FaqSection, ResourcesSection
│   ├── posts/               The post inner-page template: PostDetailTemplate, PostHero, PostContent, PostSidebar, PostShare, PostSeo
│   └── ui/                  Shared primitives: Button, Icon, Logo, SectionHeading, RichText, ImagePlaceholder, Marquee, BorderGlow
├── routes/
│   └── aliases.js           Legacy/planned URLs → the existing page that covers them (registered as redirects)
├── pages/
│   ├── NotFound/            Any URL without a page: says so plainly, with Home and Contact links
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
│   ├── ElectronicPriorAuthorization/ `/revenue-cycle-management/electronic-prior-authorization`, a child page of RCM (page-local `EpaHeading`, `EpaWindow`, `EpaFlowCard` in `components/`)
│   ├── ClaimPreparation/    `/professional-and-institutional-claim-preparation` (page-local `PcSplit`, `PcMediaFrame`, `PcCheckList` in `components/`)
│   ├── ElectronicVisitVerification/  `/electronic-visit-verification` (page-local `EvvSource` in `components/`)
│   ├── CaregiverMobileApp/  `/caregiver-mobile-app`
│   ├── EvvFieldService/     `/evv-for-salesforce-field-service` (page-local `ScreenshotNote` in `components/`)
│   ├── SuccessStories/      `/success-stories`
│   ├── PatientPortal/       `/patient-portal` (page-local `HeroMedia`, `HighlightsStrip`, `TasksSection`, `AdoptionSection`, `AccessSection`, `LimitsSection`, `AlumniSection` in `sections/`)
│   ├── ContactCenter/       `/contact-center` (page-local `CcIntro`, `IconTile`, `FeatureCard` in `components/`; `HighlightsStrip`, `AgentSection`, `IntakeSection`, `OutreachSection`, `ComplianceSection`, `VerificationSection`, `CensusSection`, `ReferralSection`, `BehavioralSection`, `IntegrationsSection`, `ConsultationSection` in `sections/`)
│   ├── KratuAi/             `/kratu-ai` (page-local `KrIntro`, `AgentSection`, `MockCard` in `components/`; the four product mock-ups in `mocks/`; `StagesSection`, `CohesionSection`, `GovernanceSection` in `sections/`)
│   │   ├── VisitPrep/       `/kratu-ai/visit-prep`, a child page reusing the parent's `KrIntro` (`HighlightsStrip`, `FlowSection`, `PathwaysSection`, `SafeguardsSection`, `BoundarySection`, `ClinicianSection` in `sections/`)
│   │   ├── CoPilot/         `/kratu-ai/elixir-co-pilot-clinical-assistant`, a child page reusing the parent's `KrIntro` (`PillarsStrip`, `OverviewSection`, `VisitFlowSection`, `InsightsSection`, `DictationSection`, `SafetySection`, `ControlSection`, `BehavioralSection` in `sections/`)
│   │   ├── ArAgent/         `/kratu-ai/ar-agent` (`/kartu-ai/ar-agent` redirects here), a child page with the six feature bands from one `FeatureRow` (`ValueSection`, `CapabilitiesSection`, `CycleSection`, `FeatureRow` in `sections/`)
│   │   └── PayorPolicy/     `/kratu-ai/payor-policy-intelligence` (`/kartu-ai/payor-policy-intelligence` redirects here), a child page (page-local `PpIntro`, `PpRuleBox` in `components/`; `HighlightsStrip`, `ProblemSection`, `IngestionSection`, `ConfidenceSection`, `StageRow`, `ScoringSection`, `AuditSection`, `BoundariesSection` in `sections/`)
│   ├── NoShowRoiCalculator/ `/no-show-roi-calculator` (`roiModel.js`: the calculator's arithmetic; page-local `RoiIntro`, `NoteCard` in `components/`; `HighlightsStrip`, `CalculatorSection`, `LogicSection`, `ScopeSection`, `TargetsSection`, `BenchmarkSection`, `BriefSection` in `sections/`)
│   ├── PatientNoShowPrediction/  `/patient-no-show-prediction` (page-local `SectionIntro` in `components/`; `ProblemSection`, `ScopeSection`, `SignalsSection`, `OperationsSection`, `PositionSection`, `MeasurementSection`, `SpecialtySection`, `PlatformSection` in `sections/`)
│   ├── BehavioralHealth/    `/behavioral-health`, an independent page with no parent (page-local `BhIntro` in `components/`; `PillarsStrip`, `CaseSection`, `PathsSection`, `ConnectedSection`, `MeasurableSection`, `ComplianceSection`, `KratuSection` in `sections/`)
│   ├── MentalHealth/        `/behavioral-health/mental-health`, an independent page on a flat route (no parent route); reuses Behavioral Health's `BhIntro` (page-local `MhTable` in `components/`; `HighlightsStrip`, `MeasurementSection`, `IntegratedCareSection`, `CommunitySection`, `CrisisSection`, `TelehealthSection`, `DocumentationSection`, `RevenueSection`, `KratuSection` in `sections/`)
│   ├── SubstanceUseDisorder/ `/behavioral-health/substance-use-disorder`, an independent page on a flat route (no parent route) (page-local `SudIntro`, `Part2Cards` in `components/`; `HighlightsStrip`, `ContinuumSection`, `ProblemSection`, `AssessmentSection`, `ComplianceSection`, `MedicationSection`, `AdmissionsSection`, `ClinicalSection`, `RevenueSection`, `OutcomesSection`, `KratuSection` in `sections/`)
│   ├── CareCoordination/    `/care-coordination`, an independent page with no parent; reuses Behavioral Health's `BhIntro` (page-local `CcRows` in `components/`; `PillarsStrip`, `LoopSection`, `TeamSection`, `ProgramsSection`, `Part2Section`, `ConsentSection`, `PartnersSection`, `BlockingSection`, `StandardsSection` in `sections/`)
│   ├── OutpatientClinics/   `/more-specialties/outpatient-clinics`, a child page of More Specialties (which has no page of its own); reuses Behavioral Health's `BhIntro` (page-local `OpIntro`, `OpCardGrid` in `components/`; `PillarsStrip`, `CoreSection`, `IntakeSection`, `CoverageSection`, `GfeSection`, `SchedulingSection`, `ClinicalSection`, `PrescribingSection`, `RevenueSection`, `TelehealthSection`, `ReportingSection`, `InteropSection` in `sections/`)
│   ├── SmallPractices/      `/more-specialties/small-practices`, a child page of More Specialties; reuses Behavioral Health's `BhIntro` (page-local `SpIntro`, `SpTiles` in `components/`; `PillarsStrip`, `NeedsSection`, `ImplementationSection`, `ClinicalSection`, `BillingSection`, `TelehealthSection`, `ExperienceSection`, `ReportingSection`, `MipsSection`, `ObligationsSection`, `SecuritySection`, `GrowthSection` in `sections/`)
│   ├── Telehealth/          `/more-specialties/telehealth`, a child page of More Specialties (page-local `ThIntro`, `ThSplit` in `components/`; `PillarsStrip`, `EngagementSection`, `DataSection`, `ExperienceSection`, `OperationsSection`, `BillingSection`, `MedicareSection`, `PrescribingSection`, `LicensureSection`, `PrivacySection`, `WhySection` in `sections/`)
│   ├── AestheticPractices/  `/more-specialties/aesthetic-practices`, a child page of More Specialties; reuses Behavioral Health's `BhIntro` (page-local `AeIntro`, `AeCards` in `components/`; `PillarsStrip`, `SchedulingSection`, `ClinicalSection`, `PhotosSection`, `RevenueSection`, `EstimatesSection`, `GrowthSection`, `SafetySection`, `StructureSection`, `PlatformSection`, `PortalSection` in `sections/`)
│   ├── StudentHealth/       `/more-specialties/student-health` (the "Student Care Management" frame), a child page of More Specialties; reuses Behavioral Health's `BhIntro` (page-local `ShIntro`, `ShCards`, `ShNote` in `components/`; `PillarsStrip`, `GapSection`, `IntakeSection`, `ConsentSection`, `RoutingSection`, `CareSection`, `DocumentationSection`, `ProgramsSection`, `ClaimsSection`, `CaliforniaSection`, `PrivacySection` in `sections/`)
│   ├── CarePlanManagement/  `/care-management/care-plan-management`, a child page of Care Management (which has no page of its own); page-local `CpSplit` (the alternating feature band), `CpCard` and `tones.module.css` in `components/`, eight product mock-ups in `visuals/`, and `PillarsStrip`, `FeaturesSection`, `PlatformSection`, `SettingsSection` in `sections/`
│   ├── OncMfaUseCases/      `/onc-certification/onc-mfa-use-cases`, a child page of ONC Certification (which has no page of its own); one page file — hero, the ten use-case cards and the assessment section, which reuses the shared `ContactForm`
│   ├── ElixirCertifiedModule/ `/onc-certification/elixir-certified-module`, a child page of ONC Certification; one page file — hero, certification details (certificate, facts, disclaimer, downloads), the criteria table with group links, and the assessment section, which reuses the shared `ContactForm`
│   ├── CareManagement/ `/care-management`, an independent top-level page (Care Plan Management sits under its path); one page file holding its sections — pillars, product cards, billing table, APCM, transitions timeline, compliance, straight answers — plus the shared FAQ and CTA band
│   ├── SocialDeterminants/ `/social-determinants-of-health`, an independent top-level page (listed under Care Management in the header); one page file holding its sections — pillars, product cards, domains table, policy, money, referral gap, Z codes — plus the shared FAQ and CTA band
│   ├── ResponsibleAi/       `/responsible-ai`, an independent page with no parent (page-local `RaIntro`, `RaEnforced` in `components/`; `RuleSection`, `ClinicalSection`, `RevenueSection`, `AuditSection`, `DataSection`, `VendorSection`, `NonClaimsSection` in `sections/`)
│   ├── ReferralProgram/     `/referral-program` (page-local `ReferralSteps`, `ReferralBenefits` in `sections/`)
│   ├── Career/              `/career` and `/career/open-positions/:jobSlug`
│   │   ├── sections/        page-local `CultureSection`
│   │   ├── job-openings/    `JobOpenings` — the "Open Positions" cards on /career
│   │   ├── open-positions/  `OpenPositionDetail` — the job posting template
│   │   └── data/            `jobOpenings.js` — every job (card fields, slug, optional posting)
│   ├── Insights/            `/insights`, `/blog`, `/insights/e-book`, `/insights/benchmark-surveys`, `/insights/release-notes`, `/insights/webinars`, `/insights/illustrations`, `/insights/videos` (one folder per listing; shared `InsightsShell`, `InsightsNav`, `CategoryFilter`, `WeeklyBriefing`, `ResourceCard`, `ListingStatus` in `components/`; search/filter/paging in `useResourceListing.js`)
│   ├── PressReleases/       `/press-releases` (listing; page-local `ReleaseCard`, `FeaturedRelease`, `DateField` in `components/`; pagination is the shared `ui/Pagination`)
│   └── PostDetail/          Route element for every post URL (`/blog/:slug`, `/press-release/:slug`, …)
├── posts/                   Post content, one file per post: blog/, press-release/, case-study/, release-note/, e-book/, benchmark-survey/, webinars/, illustration/, video/ (source folders only — never part of a URL)
├── data/                    Content as plain JS (navigation, footer, home, about, whatIsElixir, whyElixir, electronicHealthRecord, revenueCycleManagement, eligibilityVerification, treatmentCenterSolutions, contactUs, denialManagement, claimPreparation, electronicVisitVerification, caregiverMobileApp, evvFieldService, successStories, referralProgram, career, patientPortal, patientNoShowPrediction, contactCenter, noShowRoiCalculator, kratuAi, visitPrep, coPilot, arAgent, payorPolicy, electronicPriorAuthorization, responsibleAi, behavioralHealth, mentalHealth, substanceUseDisorder, careCoordination, outpatientClinics, smallPractices, telehealth, aestheticPractices, studentHealth, carePlanManagement, oncMfaUseCases, insights (Insights hero, category nav, page titles, sidebar categories), pressReleases (listing copy), plus shared aiCapabilities and contact), not hard-coded in JSX
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
├── services/                API clients (newsletterService)
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
| `PageHero` | About Us, What Is Elixir, Why Elixir, EHR, RCM, Eligibility Verification, Treatment Center Solutions, Contact Us, Press Releases, Denial Management, Claim Preparation, EVV, Caregiver Mobile App | Props: `currentPage`, `titleLines`, optional `titleAccent` (highlighted substring, or one substring per line; default highlights line 2), `description` (string, or an array of paragraphs spaced by `--page-hero-paragraph-gap`, default 24px), optional `primaryCta` (`to` or `href`; optional `icon` { src, width, height } shown before the label in place of the arrow, or `arrow: false` to drop the arrow), optional `secondaryCta` (`to` or `href`; optional `icon` naming an `Icon` shown before the label, or after it with `iconAfter: true`; with neither it renders as drawn with `aria-disabled="true"`), `image` + `badge` (default right column) or `media` (custom right column), `className`, and `children` (rendered under the description, e.g. the Insights search field). CSS variables `--page-hero-padding`, `--page-hero-primary-height`, `--page-hero-primary-size`, `--page-hero-description-width`, `--page-hero-description-gap`, `--page-hero-description-size`, `--page-hero-description-leading` and `--page-hero-content-offset` allow frame-specific tuning |
| `AiCapabilitiesSection` | Home, What Is Elixir, Why Elixir, EHR | "Our AI Solutions — Kratu AI - Full Capabilities". One design everywhere (Home's: equal cards, `BorderGlow` with a one-time sweep). Content defaults to `data/aiCapabilities.js`; pass `content` ({ eyebrow, title, description, badge, items }) for page-specific copy |
| `TiltedHeroMedia` | RCM, Eligibility Verification, Treatment Center Solutions | 467×460 hero photo on a tilted backdrop (exported as one image) |
| `CtaBanner` | About Us, What Is Elixir, Why Elixir, EHR, RCM, Eligibility Verification, Treatment Center Solutions, Claim Preparation, EVV | `title` (string or lines), optional `eyebrow`, `description` and `secondaryCta` (`aria-disabled="true"` when it has no `to`/`href`), optional `children` rendered under the buttons; `className`/`ctaClassName`/`secondaryCtaClassName` for frame-specific styling |
| `ContactSection` | About Us, What Is Elixir | Content in `data/contact.js`; renders `ContactForm` |
| `ContactForm` | About Us, What Is Elixir, Contact Us, EVV for Salesforce Field Service, Contact Center | The one contact form, a Salesforce Web-to-Lead form: fields from `data/contact.js`, posted under the Salesforce names in `data/webToLead.js` with the hidden inputs and reCAPTCHA from `components/forms/WebToLead`. Optional `intro` (content inside the card), `fieldNames` (subset/order of the shared fields), `fieldOverrides` ({ [name]: { label, placeholder } }, a frame's relabelling of the same fields), `submitLabel`, `consent` ({ before, link, to, after }), `showConsent` (default true) and `className`; CSS variables `--contact-form-row-gap`, `--contact-form-label-gap`, `--contact-form-submit-gap`, `--contact-form-background` for frame-specific spacing |
| `FaqSection` | RCM, EVV, Caregiver Mobile App, EVV for Salesforce Field Service (and any page that needs an FAQ) | The site's one FAQ design, used unchanged on every page (no per-page variants). Props: `title` (default "Frequently Asked Questions"), optional `description`, `items` = `[{ question, answer }]` (answer: string or RichText segments; an item without `answer` renders as a static row), `className`. Questions sit in two columns (first half left) on white 64px cards; each question is a button that opens its answer in the same card. Items toggle independently. Keep FAQ copy in the page's `data/` file and pass it in: `<FaqSection {...rcmFaq} />` |
| `ResourcesSection` | Home, Referral Program | Knowledge Base: category tabs (arrow keys, Home/End) switching a three-card grid. Props: `eyebrow`, `title`, `categories` (Home's content is `resources` in `data/home.js`, used by both pages), `tagTone` ('yellow' default, 'purple' on Referral Program), `className` |

### Data persistence
Lead forms are Salesforce Web-to-Lead forms. The shared `ContactForm` is on Contact Us, About Us, What Is Elixir, Referral Program, Contact Center, EVV for Salesforce Field Service, ONC MFA Use Cases and Elixir Certified Module; the No-Show ROI Calculator's executive-summary form is a second one.

- **Submission:** the browser POSTs the form natively to the Salesforce endpoint in `data/webToLead.js` (org ID, return URL, lead source and reCAPTCHA keys exactly as supplied). Salesforce then redirects to `https://elixirehr.com/thank-you/`.
- **Before sending:** the browser checks required fields and email format, and the form will not send until the reCAPTCHA has been completed.
- **Hidden values:** `components/forms/WebToLead` renders the hidden inputs and keeps the `captcha_settings` timestamp current, as Salesforce's snippet does.
- **Newsletter:** the Insights and Blog newsletter is separate and still posts to `VITE_NEWSLETTER_ENDPOINT`.

The Insights pages' "Weekly Briefing" sign-up works the same way: `services/newsletterService.js` POSTs `{ email }` to `VITE_NEWSLETTER_ENDPOINT`. Until that variable is set, subscribing shows an error.

### Posts (blog, press releases, case studies, release notes, e-books, benchmark surveys, webinars, illustrations, videos)
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
| Illustration | `src/posts/illustration/` | `/illustration/<slug>` (listing: `/insights/illustrations`) |
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
- Insights listing fields (all optional): `category` (sidebar filters on Webinars and Videos; Blog lists the categories found on its posts), `version` (release notes), `pages`, `readingTime` (e.g. `'15 min read'`) and `file` (a PDF URL: makes "Download" and "PDF Available" download it) for e-books, `speaker` `{ name, role, avatar }` for webinars, `label`, `duration` (`'12:45'`) and `views` for webinars and videos, and `label` plus `files` `{ svg, png }` (download URLs) for illustrations. Put the recording itself in `content` as a `video` block
- `seo` `{ title?, description?, keywords?, image? }`: overrides

`src/posts/index.js` exposes `getPosts(type)` (newest first), `getPost(type, slug)`, `getPostPath(post)` and `getLatestPosts(post)`. The Press Releases listing (search, date range, pagination) reads the same registry.

**Demo content:** `src/posts/<type>/_demo/` holds test posts. Press releases, case studies and others have one minimal post each. The Insights types have posts that reproduce the Figma cards, with 1× image crops from the frames, so the listings can be checked against the design. These load only in development or when `VITE_SHOW_DEMO_POSTS=true`, are marked `noindex`, and are left out of production builds.

**SEO:** `PostSeo` renders the title, description, canonical URL, Open Graph, Twitter card and `article:*` tags, plus JSON-LD (BlogPosting, NewsArticle, TechArticle, Article, or Event for webinars with an `event`). Set `VITE_SITE_URL` (e.g. `https://www.example.com`) so canonical and `og:image` URLs use the public domain; the current origin is used otherwise.

### Hosting
The app uses client-side routing, so the host must serve `index.html` for unknown paths (for example `/about-us`). `vite preview` does this automatically.

### Legacy code
The previous implementation, built from an older spec, is preserved in `_archive/src-legacy-2026-10-05/`. It is excluded from the build and lint.
