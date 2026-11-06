// Home page content — copy reproduced exactly from the Figma Home frame.

import cannabisCardLogo from '../assets/home/trusted-by/cannabis-card-logo.png';
import genomicLifeLogo from '../assets/home/trusted-by/genomic-life-logo.png';
import bridgesOfHopeLogo from '../assets/home/trusted-by/bridges-of-hope-logo.png';
import graniteRecoveryLogo from '../assets/home/trusted-by/granite-recovery-centers-logo.png';
import withinLogo from '../assets/home/trusted-by/within-logo.png';
import alterHealthLogo from '../assets/home/trusted-by/alter-health-group-logo.png';
import caremoreLogo from '../assets/home/trusted-by/caremore-medical-supply-logo.png';
import cannabisCardOrlandoLogo from '../assets/home/trusted-by/cannabis-card-orlando.png';
import communityWellnessLogo from '../assets/home/trusted-by/community-wellness-ventures.png';
import trueNorthLogo from '../assets/home/trusted-by/truenorth-health-center.png';
import oncoHostLogo from '../assets/home/trusted-by/oncohost.png';
import upwardHealthLogo from '../assets/home/trusted-by/upward-health.png';
import floridaElderCareLogo from '../assets/home/trusted-by/florida-elder-care.png';
import yoloCountyLogo from '../assets/home/trusted-by/yolo-county-office-of-education.png';
import withinNewLogo from '../assets/home/trusted-by/within.png';
import secureDataIcon from '../assets/home/platform-intro/secure-data-icon.png';
import seamlessIntegrationIcon from '../assets/home/platform-intro/seamless-integration-icon.png';
import clinicalNotesAudioIcon from '../assets/home/kratu-intelligence/clinical-notes-audio-icon.png';
import payerPolicyBillingIcon from '../assets/home/kratu-intelligence/payer-policy-billing-icon.png';
import claimScoringIcon from '../assets/home/kratu-intelligence/claim-scoring-icon.png';
import denialManagementIcon from '../assets/home/kratu-intelligence/denial-management-icon.png';
import schedulingReferralsIcon from '../assets/home/kratu-intelligence/scheduling-referrals-icon.png';
import chartSummariesIcon from '../assets/home/kratu-intelligence/chart-summaries-icon.png';
import patientPortalTelehealthIcon from '../assets/home/challenges/patient-portal-telehealth-icon.png';
import doctorTimeIcon from '../assets/home/challenges/doctor-time-ehr-icon.png';
import dataBreachCostIcon from '../assets/home/challenges/data-breach-cost-icon.png';
import payerDenialsIcon from '../assets/home/challenges/payer-denials-icon.png';
import patientViewScreen from '../assets/home/features/patient-view.png';
import carePlanScreen from '../assets/home/features/care-plan.png';
import medicationsScreen from '../assets/home/features/medications-prescriptions.png';
import winterReleaseCover from '../assets/home/resources/elixir-winter-26-release-cover.png';
import clinicalOutcomesWebinarCover from '../assets/home/resources/ai-clinical-outcomes-webinar-cover.png';
import revenueCycleWhitepaperCover from '../assets/home/resources/revenue-cycle-whitepaper-cover.png';
import linkArrowIcon from '../assets/icons/link-arrow.png';
import linkPlayIcon from '../assets/icons/link-play.png';
import linkDownloadIcon from '../assets/icons/link-download.png';
import { getPostPath, getPosts } from '../posts';
import { formatCardDate } from '../utils/formatDate';
import exploreSolutionIcon from '../assets/home/cta/explore-solution-icon.png';
import personalizedDemoIcon from '../assets/home/cta/personalized-demo-icon.png';
import platformObject from '../assets/home/hero/platform-object.webp';
import kratuObject from '../assets/home/hero/kratu-object.webp';
import specialtyObject from '../assets/home/hero/specialty-object.webp';
import revenueObject from '../assets/home/hero/revenue-object.webp';



export const hero = {
  // One entry per line, matching the Figma line breaks. `accent` is rendered in lime.
  titleLines: ['The AI-Powered', 'EHR Built for', 'Modern', 'Healthcare Teams'],
  titleAccent: 'EHR',
  description:
    'Automate clinical documentation, predict claim denials, and streamline patient care with AI-powered clinical workflows that actually learn from your practice.',
  // Leads to the "Our AI Solutions" section further down Home (AiCapabilitiesSection, id ai-solutions).
  secondaryCta: { label: 'Kratu AI Capabilities', to: '/#ai-solutions' },
  primaryCta: { label: 'Request a Demo', to: '/request-demo/' },
  insight: {
    label: 'AI INSIGHT',
    text: 'Documentation accuracy improved by 42%.',
  },
};

// The hero slides after `hero`, one per supplied Figma banner, in order. Each line of `titleLines`
// is as broken in the frame; `accent` parts are lime. `media` is the supplied object, trimmed to its
// content; `box` is where the frame places it ({ width, top } in the 1280 frame; it runs to the
// frame's right edge, past the container, as drawn). The primary (lime) button comes first.
export const heroSlides = [
  {
    id: 'platform',
    label: 'Clinical and Revenue Cycle on One Salesforce Platform',
    titleLines: [
      [{ text: 'Clinical and' }],
      [{ text: 'Revenue Cycle', accent: true }, { text: ' on' }],
      [{ text: 'One Salesforce' }],
      [{ text: 'Platform' }],
    ],
    description:
      'The chart, the claim, the care plan and the outreach are the same data. A new program is a configuration change rather than a release, and nothing has to be reconciled between systems at month end.',
    primaryCta: { label: 'See the Platform', to: '/why-elixir/' },
    secondaryCta: { label: 'Request a Demo', to: '/request-demo/' },
    media: {
      src: platformObject,
      alt: 'Elixir on Salesforce: a patient record linked to clinical data, revenue cycle, patient engagement, program configuration and unified data, with the patient portal on a phone',
      width: 1154,
      height: 895,
    },
    box: { width: 583, top: 141, right: 1256 },
  },
  {
    // Supersedes the earlier "Meet Kratu AI" slide (same headline and buttons, new copy and object).
    id: 'kratu',
    label: 'Meet Kratu AI',
    titleLines: [
      [{ text: 'From Insight' }],
      [{ text: 'to Action.' }],
      [{ text: 'Meet ' }, { text: 'Kratu AI', accent: true }],
    ],
    description:
      "Kratu is Elixir's AI layer across clinical and revenue - preparing the visit, capturing the note from the conversation, generating the billing logic, scoring the claim before it goes out, and working denials after it lands.",
    primaryCta: { label: 'See Kratu in Action', to: '/healthcare-ai-platform/' },
    secondaryCta: { label: 'Book a 20-min Demo', to: '/request-demo/' },
    media: {
      src: kratuObject,
      alt: 'Kratu AI inside Elixir EHR: a patient visit summary with vital trends, surrounded by cards for Patient Visit Prep, Clinical Notes from Audio, Payor Policy Intelligence, the A/R Resolution Agent and an AI insight reporting 18 denials auto-resolved this week',
      width: 663,
      height: 496,
    },
    box: { width: 663, top: 104, right: 1246 },
  },
  {
    id: 'specialty',
    label: 'The EHR That Configures to Your Specialty',
    titleLines: [
      [{ text: 'The ' }, { text: 'EHR', accent: true }, { text: ' That' }],
      [{ text: 'Configures to' }],
      [{ text: 'Your Specialty' }],
    ],
    description:
      'ONC-certified and built on Salesforce. Behavioral health, addiction treatment, outpatient clinics, home and community-based care, student health, aesthetics and medical suppliers - each configured to how the program actually works, rather than forced into a generic template.',
    // Solutions has no specialty overview page, so the CTA names the page it opens (Behavioral Health).
    primaryCta: { label: 'Explore Behavioral Health', to: '/behavioral-health-ehr/' },
    secondaryCta: { label: 'Request a Demo', to: '/request-demo/' },
    media: {
      src: specialtyObject,
      alt: 'A clinician at a laptop in front of two Elixir patient profiles, one configured for behavioral health and one for an outpatient clinic',
      width: 1396,
      height: 802,
    },
    box: { width: 700, top: 173, right: 1260 },
  },
  {
    id: 'revenue',
    label: 'Get Paid for the Work You Already Did',
    titleLines: [[{ text: 'Get Paid for the' }], [{ text: 'Work You' }], [{ text: 'Already Did' }]],
    description:
      'Care management minutes captured while the work happens. Visits verified at the point of care. Documentation that supports the code. Most of the revenue organizations lose is not denied - it is never billed.',
    // The frame's label reads "Revenue Cycle Managemen" (cut off); shown in full.
    primaryCta: { label: 'Revenue Cycle Management', to: '/rcm-software/' },
    secondaryCta: { label: 'Request a Demo', to: '/request-demo/' },
    media: {
      src: revenueObject,
      alt: 'Elixir care management time ledger: captured care activities become billable services and a submitted claim, ending in a paid Chronic Care Management claim',
      width: 1032,
      height: 934,
    },
    box: { width: 518, top: 127, right: 1223 },
  },
];

export const trustedBy = {
  title: 'Trusted by Healthcare Providers Worldwide',
  // Seconds for one full loop of the logo strip (larger = slower).
  marqueeDuration: 45,
  // The supplied client logos, trimmed of empty margins and exported at 2x. Each one's display size
  // (width × height) gives every logo about the same visual weight — wide wordmarks shorter, square
  // marks taller — within a 190 × 72 box, so none looks oversized or squashed.
  logos: [
    { name: 'Cannabis Card Orlando', src: cannabisCardOrlandoLogo, width: 88, height: 72 },
    { name: 'Community Wellness Ventures', src: communityWellnessLogo, width: 177, height: 51 },
    { name: 'TrueNorth Health Center', src: trueNorthLogo, width: 190, height: 45 },
    { name: 'OncoHost', src: oncoHostLogo, width: 190, height: 34 },
    { name: 'Upward Health', src: upwardHealthLogo, width: 190, height: 31 },
    { name: 'Florida Elder Care', src: floridaElderCareLogo, width: 74, height: 72 },
    { name: 'Yolo County Office of Education', src: yoloCountyLogo, width: 148, height: 61 },
    { name: 'within', src: withinNewLogo, width: 124, height: 38 },
  ],
};

// The earlier client logos, still shown on the Contact Us page (data/contact.js picks them by name).
export const previousClientLogos = [
  { name: 'Cannabis Card Orlando', src: cannabisCardLogo, width: 99, height: 99 },
  { name: 'Genomic Life', src: genomicLifeLogo, width: 99, height: 99 },
  { name: 'Bridges of Hope', src: bridgesOfHopeLogo, width: 178, height: 60 },
  { name: 'Granite Recovery Centers', src: graniteRecoveryLogo, width: 97, height: 97 },
  { name: 'within', src: withinLogo, width: 99, height: 99 },
  { name: 'Alter Health Group', src: alterHealthLogo, width: 89, height: 89 },
  { name: 'caremore Medical Supply', src: caremoreLogo, width: 114, height: 114 },
];

export const kratuIntelligence = {
  badge: 'Kratu AI - Powered by Elixir',
  titleLines: ["Intelligence that doesn't", 'just think - it acts.'],
  description: 'From the moment a patient walks in to the moment a claim is paid, Kratu handles it.',
  // Left column (first three) then right column (last three). Title line breaks follow Figma.
  features: [
    {
      titleLines: ['Clinical Notes', 'from Audio'],
      description: 'Listens to visits and creates structured notes in real time.',
      icon: clinicalNotesAudioIcon,
    },
    {
      titleLines: ['Payer Policy →', 'Billing Rules'],
      description: 'Transforms payer policies into actionable billing logic.',
      icon: payerPolicyBillingIcon,
    },
    {
      titleLines: ['Claim Scoring', 'Before Submission'],
      description: 'Flags denial risk and suggests corrections before claims go out.',
      icon: claimScoringIcon,
    },
    {
      titleLines: ['Denial Management'],
      description: 'Categorizes denials, supports appeals, and tracks resolution.',
      icon: denialManagementIcon,
    },
    {
      titleLines: ['Scheduling, Referrals', '& Orders'],
      description: 'Creates next-step actions directly from clinical context.',
      icon: schedulingReferralsIcon,
    },
    {
      titleLines: ['Chart Summaries', '& Q&A'],
      description: 'Summarizes patient history and answers questions instantly.',
      icon: chartSummariesIcon,
    },
  ],
  cta: { label: 'See all Kratu AI capabilities', to: '/healthcare-ai-platform/' },
};

export const platformIntro = {
  title: 'One platform. Less administrative work.',
  description:
    'Elixir automates the work around care - documentation, eligibility, claim preparation and follow-up, so clinical staff spend less time on data entry and more time with patients. Because Elixir is built natively on Salesforce, the chart, the claim and the patient conversation are the same record rather than three systems kept in step.',
  cta: { label: 'Learn More About Elixir', to: '/about-us/' },
  cards: [
    {
      title: 'Secure by design',
      description: 'Enterprise platform controls, role-based access, and a Business Associate Agreement.',
      icon: secureDataIcon,
      iconSize: [24, 30],
      tone: 'light',
    },
    {
      title: 'One platform, not an integration',
      description: 'Clinical, billing and engagement run on the same data.',
      icon: seamlessIntegrationIcon,
      iconSize: [36, 35],
      tone: 'dark',
    },
  ],
};

export const challenges = {
  eyebrow: 'What Elixir Can Help You Avoid',
  title: 'Elixir Understands Your Challenges',
  // `accent` is the colour of each card's bottom bar.
  stats: [
    {
      value: '84%',
      description: 'Patients specifically looking for providers with Patient Portal and Telehealth.',
      icon: patientPortalTelehealthIcon,
      iconSize: [24, 12],
      accent: 'secondary',
    },
    {
      value: '62%',
      description: "Of doctors' time per patient is spent on EHRs for data entry instead of patients.",
      icon: doctorTimeIcon,
      iconSize: [18, 21],
      accent: 'primary',
    },
    {
      value: '$3533',
      description:
        'Average cost per employee for a patient data breach for providers with less than 500 staff.',
      icon: dataBreachCostIcon,
      iconSize: [22, 16],
      accent: 'secondary',
    },
    {
      value: '90%',
      description: 'Of payer denials are avoidable, with administrative errors being the primary cause.',
      icon: payerDenialsIcon,
      iconSize: [20, 20],
      accent: 'primary',
    },
  ],
};

export const features = {
  eyebrow: 'Features',
  titleLines: ['Elixir', 'Capabilities'],
  // Seconds each feature stays active before the section moves on to the next one.
  rotationSeconds: 6,
  // Each feature shows its own screenshot (810×530 export of the 665×370 card; drop shadow baked in).
  // Titles, copy and the Care Plan and Medications screenshots follow the Figma "Elixir Capabilities" frames.
  // The Patient View screenshot was supplied separately; it is set in the same card frame, 40px
  // shorter because the supplied screenshot is 649×314 (placed 1:1, not stretched).
  items: [
    {
      title: 'Patient View',
      description:
        'Unified patient dashboards that provide clinical context, insurance status, and vital history at a single glance.',
      image: {
        src: patientViewScreen,
        alt: 'Elixir patient view for a sample patient, with account details such as admit date, treatment center, house, bed and medical record number',
      },
    },
    {
      title: 'Care Plan',
      description:
        'Help care teams organize assessments, goals, and follow-up tasks.',
      image: {
        src: carePlanScreen,
        alt: 'Elixir care plan for a patient, with problems such as neck and upper back pain, linked goals and care plan dates',
      },
    },
    {
      title: 'Medications & Prescriptions',
      description:
        'Give nurses timely reminders for medications, tasks, and follow-ups.',
      image: {
        src: medicationsScreen,
        alt: 'Elixir Medications dialog listing PRN medications with frequency, dosage, reason and route columns',
      },
    },
  ],
};

export const testimonials = {
  eyebrow: 'Testimonials',
  titleLines: ['How customers feel', 'about Elixir'],
  linkLabel: 'Hear Story',
  // Seconds between automatic slides (one card per step).
  autoplaySeconds: 7,
  // Customer quotes as supplied (spacing before punctuation tidied); the card adds the quotation
  // marks. `role` (the organization) is optional. `rating` (out of 5) is the five stars shown in
  // the supplied card design; `logo` reuses the organization's logo from the Trusted By strip
  // where we have one.
  items: [
    {
      name: 'Dr. Manoj Battarai',
      role: 'Palm Beach Elderly Care',
      rating: 5,
      quote:
        'Elixir has transformed how we manage our daily operations. Having the contact center, EHR, billing, and patient portal fully integrated on Salesforce makes everything seamless. The interface is intuitive, and it has significantly improved our workflow and patient care. Highly recommended!',
    },
    {
      name: 'Ghazaleh Nazari',
      role: 'Genomic Life',
      rating: 5,
      logo: genomicLifeLogo,
      quote:
        'Elixir EHR has allowed our organization to have a custom EHR that meets our navigation process. Elixir is scalable, configurable and very robust. We have been one of the first adopter of Elixir and have witnessed how this app has grown over the years by adding new functionalities while staying configurable and following Salesforce platform best approaches. As a tech lead and architect who has implemented Elixir and works very closely with their team, I highly recommend this app. Not only they have a robust product but also an excellent customer success team who works very closely with clients and always ready to take the next challenge.',
    },
    {
      name: 'Yanique Lockhart-Walker',
      role: 'Community Wellness Ventures',
      rating: 5,
      logo: communityWellnessLogo,
      quote:
        'Elixir has allowed our company to customize our EHR to meet the needs of our agency needs and requirements of our governing body. The customer service is very responsive and supportive. I highly recommend this app to other organizations.',
    },
    {
      name: 'Central Florida Treatment Center',
      rating: 5,
      quote:
        'What an innovative tool, we have been demanding this for some time now. The ability to keep patient information and medical information in the same platform streamlines our processes which in return allows us to focus on client care. Mirketa is changing the game in the industry, all for the better.',
    },
  ],
};

const resourcePlaceholders = {
  eyebrow: 'Knowledge Base',
  title: 'Insights for Healthcare Teams',
  // One tab per category; every category renders the same card. Blog holds the three cards from
  // the Figma frame. The other categories hold DEMO cards (placeholder titles reusing the
  // existing cover images) until real e-books, surveys, release notes and webinars are supplied.
  // Card fields: tag, image, author, date, title, link { label, icon, iconSize, to }.
  categories: [
    {
      label: 'Blog',
      items: [
        {
          tag: 'Blog',
          image: winterReleaseCover,
          author: 'Author Name',
          date: '04 April 2026',
          title: "Elixir Winter'26 Version 1.960 EHR and Patient Care",
          link: { label: 'Read More', icon: linkArrowIcon, iconSize: [14, 11], to: '/blog/' },
        },
        {
          tag: 'Webinar',
          image: clinicalOutcomesWebinarCover,
          author: 'Author Name',
          date: '04 April 2026',
          title: 'How AI is Transforming Clinical Outcomes in 2026',
          link: { label: 'Watch Webinar', icon: linkPlayIcon, iconSize: [9, 11], to: '/webinars-podcasts/' },
        },
        {
          tag: 'Release',
          image: revenueCycleWhitepaperCover,
          author: 'Author Name',
          date: '04 April 2026',
          title: 'Optimizing Revenue Cycles with Kratu AI Predictive Models',
          link: {
            label: 'Read Whitepaper',
            icon: linkDownloadIcon,
            iconSize: [12, 13],
            to: '/insights/',
          },
        },
      ],
    },
    {
      label: 'E-Book',
      items: [
        {
          tag: 'E-Book',
          image: revenueCycleWhitepaperCover,
          author: 'Elixir Team',
          date: '12 March 2026',
          title: 'A Practical Guide to Connected Revenue Cycle Workflows',
          link: { label: 'Download E-Book', icon: linkDownloadIcon, iconSize: [12, 13], to: '/guides-ebooks/' },
        },
        {
          tag: 'E-Book',
          image: clinicalOutcomesWebinarCover,
          author: 'Elixir Team',
          date: '20 February 2026',
          title: 'Bringing AI into Everyday Clinical Documentation',
          link: { label: 'Download E-Book', icon: linkDownloadIcon, iconSize: [12, 13], to: '/guides-ebooks/' },
        },
        {
          tag: 'E-Book',
          image: winterReleaseCover,
          author: 'Elixir Team',
          date: '28 January 2026',
          title: 'Choosing an EHR Built on Salesforce: What to Look For',
          link: { label: 'Download E-Book', icon: linkDownloadIcon, iconSize: [12, 13], to: '/guides-ebooks/' },
        },
      ],
    },
    {
      label: 'Benchmark Survey',
      items: [
        {
          tag: 'Survey',
          image: clinicalOutcomesWebinarCover,
          author: 'Elixir Research',
          date: '18 March 2026',
          title: 'Benchmark Survey: Documentation Time in Behavioral Health',
          link: { label: 'Read Survey', icon: linkArrowIcon, iconSize: [14, 11], to: '/benchmark-surveys/' },
        },
        {
          tag: 'Survey',
          image: revenueCycleWhitepaperCover,
          author: 'Elixir Research',
          date: '05 February 2026',
          title: 'Benchmark Survey: Claim Denial Management Practices',
          link: { label: 'Read Survey', icon: linkArrowIcon, iconSize: [14, 11], to: '/benchmark-surveys/' },
        },
        {
          tag: 'Survey',
          image: winterReleaseCover,
          author: 'Elixir Research',
          date: '15 January 2026',
          title: 'Benchmark Survey: Patient Portal and Telehealth Adoption',
          link: { label: 'Read Survey', icon: linkArrowIcon, iconSize: [14, 11], to: '/benchmark-surveys/' },
        },
      ],
    },
    {
      label: 'Release Notes',
      items: [
        {
          tag: 'Release',
          image: winterReleaseCover,
          author: 'Product Team',
          date: '04 April 2026',
          title: "Elixir Winter'26 (Version 1.960) Release Notes",
          link: { label: 'Read Release Notes', icon: linkArrowIcon, iconSize: [14, 11], to: '/release-notes/' },
        },
        {
          tag: 'Release',
          image: revenueCycleWhitepaperCover,
          author: 'Product Team',
          date: '10 January 2026',
          title: 'Release Notes: Eligibility and Claims Updates',
          link: { label: 'Read Release Notes', icon: linkArrowIcon, iconSize: [14, 11], to: '/release-notes/' },
        },
        {
          tag: 'Release',
          image: clinicalOutcomesWebinarCover,
          author: 'Product Team',
          date: '02 December 2025',
          title: 'Release Notes: Kratu AI Clinical Assistant Updates',
          link: { label: 'Read Release Notes', icon: linkArrowIcon, iconSize: [14, 11], to: '/release-notes/' },
        },
      ],
    },
    {
      label: 'Webinar',
      items: [
        {
          tag: 'Webinar',
          image: clinicalOutcomesWebinarCover,
          author: 'Speaker Name',
          date: '22 April 2026',
          title: 'How AI is Transforming Clinical Outcomes in 2026',
          link: { label: 'Watch Webinar', icon: linkPlayIcon, iconSize: [9, 11], to: '/webinars-podcasts/' },
        },
        {
          tag: 'Webinar',
          image: revenueCycleWhitepaperCover,
          author: 'Speaker Name',
          date: '26 March 2026',
          title: 'Connecting Eligibility, Claims and ERA Posting',
          link: { label: 'Watch Webinar', icon: linkPlayIcon, iconSize: [9, 11], to: '/webinars-podcasts/' },
        },
        {
          tag: 'Webinar',
          image: winterReleaseCover,
          author: 'Speaker Name',
          date: '19 February 2026',
          title: "What's New in Elixir Winter'26",
          link: { label: 'Watch Webinar', icon: linkPlayIcon, iconSize: [9, 11], to: '/webinars-podcasts/' },
        },
      ],
    },
  ],
};

// Knowledge Base cards come from the published posts (src/posts/…), newest first, so a new post
// appears here as soon as its file is added. Each tab shows up to six of the newest posts of its
// own type (a carousel when there are more than fit on screen); tabs with fewer published posts
// are topped up with the placeholder cards above. Demo posts (src/posts/*/_demo) are not used.
const RESOURCE_CARDS_PER_TAB = 6;

// How each post type looks on a card: its tag, link label/icon and the byline when a post has none.
const resourceCardStyle = {
  blog: { tag: 'Blog', author: 'Elixir Team', link: { label: 'Read More', icon: linkArrowIcon, iconSize: [14, 11] } },
  'release-note': { tag: 'Release', author: 'Product Team', link: { label: 'Read Release Notes', icon: linkArrowIcon, iconSize: [14, 11] } },
  'e-book': { tag: 'E-Book', author: 'Elixir Team', link: { label: 'Read E-Book', icon: linkArrowIcon, iconSize: [14, 11] } },
  'benchmark-survey': { tag: 'Survey', author: 'Elixir Research', link: { label: 'Read Survey', icon: linkArrowIcon, iconSize: [14, 11] } },
  webinars: { tag: 'Webinar', author: 'Elixir Team', link: { label: 'Watch Webinar', icon: linkPlayIcon, iconSize: [9, 11] } },
  video: { tag: 'Video', author: 'Elixir Team', link: { label: 'Watch Video', icon: linkPlayIcon, iconSize: [9, 11] } },
  'press-release': { tag: 'Press', author: 'Elixir Team', link: { label: 'Read Press Release', icon: linkArrowIcon, iconSize: [14, 11] } },
  'case-study': { tag: 'Case Study', author: 'Elixir Team', link: { label: 'Read Case Study', icon: linkArrowIcon, iconSize: [14, 11] } },
};
const fallbackCardStyle = { tag: 'Article', author: 'Elixir Team', link: { label: 'Read More', icon: linkArrowIcon, iconSize: [14, 11] } };

function postToResourceCard(post) {
  const style = resourceCardStyle[post.type] ?? fallbackCardStyle;
  return {
    tag: style.tag,
    image: post.cardImage?.src ?? winterReleaseCover,
    author: post.author ?? style.author,
    date: formatCardDate(post.publishDate),
    title: post.title,
    link: { ...style.link, to: getPostPath(post) },
  };
}

// Tab label → the post type it lists.
const resourceTabTypes = {
  Blog: 'blog',
  'E-Book': 'e-book',
  'Benchmark Survey': 'benchmark-survey',
  'Release Notes': 'release-note',
  Webinar: 'webinars',
};

const published = (posts) => posts.filter((post) => !post.demo);

export const resources = {
  ...resourcePlaceholders,
  categories: resourcePlaceholders.categories.map((category) => {
    const type = resourceTabTypes[category.label];
    const posts = published(getPosts(type)).slice(0, RESOURCE_CARDS_PER_TAB);
    const cards = posts.map(postToResourceCard);
    const titles = new Set(cards.map((card) => card.title));
    const fill = category.items.filter((item) => !titles.has(item.title));
    return { ...category, items: [...cards, ...fill].slice(0, RESOURCE_CARDS_PER_TAB) };
  }),
};

export const conversionCtas = [
  {
    title: 'Explore our AI-powered solution',
    description:
      'Discover how our clinical-grade AI engines can transform your patient experience and operational efficiency.',
    icon: exploreSolutionIcon,
    iconSize: [50, 53],
    cta: { label: 'How Elixir works', to: '/why-elixir/', variant: 'secondary' },
    tone: 'dark',
  },
  {
    title: 'Get a personalized Elixir demo',
    description:
      'Ready to see Elixir in action? Book a session with our specialists to see a tailored walkthrough for your specific clinical needs.',
    icon: personalizedDemoIcon,
    iconSize: [50, 51],
    cta: { label: 'Schedule a demo today', to: '/request-demo/', variant: 'tertiary' },
    tone: 'light',
  },
];
