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
import patientViewDashboard from '../assets/home/features/patient-view-dashboard.png';
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
import kratuWorkspaceImage from '../assets/home/hero/kratu-ai-workspace.png';



export const hero = {
  // One entry per line, matching the Figma line breaks. `accent` is rendered in lime.
  titleLines: ['The AI-Powered', 'EHR Built for', 'Modern', 'Healthcare Teams'],
  titleAccent: 'EHR',
  description:
    'Automate clinical documentation, predict claim denials, and streamline patient care with AI-powered clinical workflows that actually learn from your practice.',
  secondaryCta: { label: 'Watch Product Tour', to: '/product-tour' },
  primaryCta: { label: 'Request a Demo', to: '/request-demo' },
  insight: {
    label: 'AI INSIGHT',
    text: 'Documentation accuracy improved by 42%.',
  },
};

// Second hero slide (Figma "Meet Kratu AI" banner). The hero rotates between `hero` and this slide.
// `media` is the frame's composed product mock-up (Kratu workspace with its four agent cards).
export const kratuHeroSlide = {
  badge: 'Kratu AI - Powered by Elixir',
  // Each line as broken in the frame; `accent` words are lime.
  titleLines: [
    [{ text: 'From Insight' }],
    [{ text: 'to ' }, { text: 'Action.', accent: true }],
    [{ text: 'Meet Kratu ' }, { text: 'AI', accent: true }],
  ],
  description:
    "Kratu is Elixir's AI intelligence layer - built into every workflow to capture clinical notes, generate billing logic, score claims, and manage denials automatically.",
  secondaryCta: { label: 'See Kratu in Action', to: '/kratu-ai' },
  primaryCta: { label: 'Book a 20-min Demo', to: '/request-demo' },
  media: {
    src: kratuWorkspaceImage,
    alt: 'Kratu AI inside Elixir EHR: a patient visit summary with vital trends, surrounded by cards for Patient Visit Prep, Clinical Notes from Audio, the A/R Resolution Agent and an AI insight reporting 18 denials auto-resolved this week',
    width: 643,
    height: 566,
  },
};

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
  cta: { label: 'See all Kratu AI capabilities', to: '/ai-engine' },
};

export const platformIntro = {
  badge: 'EHR and more with AI',
  description:
    'Elixir empowers your healthcare facility by effectively automating various business processes, hence minimizing interaction with the EHR system and allowing your staff to spend more time on patient care. It leverages various Salesforce functionalities to ensure data security and provides seamless integrations.',
  cta: { label: 'Learn More About Elixir', to: '/company/about' },
  cards: [
    {
      title: 'Secure Data',
      description: 'HIPAA compliant architecture for ultimate patient privacy.',
      icon: secureDataIcon,
      iconSize: [24, 30],
      tone: 'light',
    },
    {
      title: 'Seamless Integration',
      description: 'Connect with existing Salesforce systems effortlessly.',
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
  items: [
    {
      title: 'Patient View',
      description:
        'Unified patient dashboards that provide clinical context, insurance status, and vital history at a single glance.',
      image: { src: patientViewDashboard, alt: 'Elixir patient record dashboard' },
    },
    {
      title: 'Care Plan',
      description:
        'Elixir’s Assessments help the care team in being planned and organized, hence avoiding any possible confusion.',
      image: {
        src: carePlanScreen,
        alt: 'Elixir care plan for a patient, with problems such as neck and upper back pain, linked goals and care plan dates',
      },
    },
    {
      title: 'Medications & Prescriptions',
      description:
        'With Elixir every nurse gets a personal secretary like experience to remind them of events, medication and much more at the right time.',
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
  title: 'Resources must be read',
  // One tab per category; every category renders the same card. Blog holds the three cards from
  // the Figma frame. The other categories hold DEMO cards (placeholder titles reusing the
  // existing cover images) until real e-books, surveys, release notes and webinars are supplied.
  // Card fields: tag, image, author, date, title, link { label, icon, iconSize, to }.
  categories: [
    {
      label: 'Blog',
      items: [
        {
          tag: 'Article',
          image: winterReleaseCover,
          author: 'Author Name',
          date: '04 April 2026',
          title: "Elixir Winter'26 Version 1.960 EHR and Patient Care",
          link: { label: 'Read More', icon: linkArrowIcon, iconSize: [14, 11], to: '/blog' },
        },
        {
          tag: 'Webinar',
          image: clinicalOutcomesWebinarCover,
          author: 'Author Name',
          date: '04 April 2026',
          title: 'How AI is Transforming Clinical Outcomes in 2026',
          link: { label: 'Watch Webinar', icon: linkPlayIcon, iconSize: [9, 11], to: '/insights/webinars' },
        },
        {
          tag: 'Release',
          image: revenueCycleWhitepaperCover,
          author: 'Author Name',
          date: '04 April 2026',
          title: 'Optimizing Revenue Cycles with Elixir AI Predictive Models',
          link: {
            label: 'Read Whitepaper',
            icon: linkDownloadIcon,
            iconSize: [12, 13],
            to: '/insights',
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
          link: { label: 'Download E-Book', icon: linkDownloadIcon, iconSize: [12, 13], to: '/insights/e-book' },
        },
        {
          tag: 'E-Book',
          image: clinicalOutcomesWebinarCover,
          author: 'Elixir Team',
          date: '20 February 2026',
          title: 'Bringing AI into Everyday Clinical Documentation',
          link: { label: 'Download E-Book', icon: linkDownloadIcon, iconSize: [12, 13], to: '/insights/e-book' },
        },
        {
          tag: 'E-Book',
          image: winterReleaseCover,
          author: 'Elixir Team',
          date: '28 January 2026',
          title: 'Choosing an EHR Built on Salesforce: What to Look For',
          link: { label: 'Download E-Book', icon: linkDownloadIcon, iconSize: [12, 13], to: '/insights/e-book' },
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
          link: { label: 'Read Survey', icon: linkArrowIcon, iconSize: [14, 11], to: '/insights/benchmark-surveys' },
        },
        {
          tag: 'Survey',
          image: revenueCycleWhitepaperCover,
          author: 'Elixir Research',
          date: '05 February 2026',
          title: 'Benchmark Survey: Claim Denial Management Practices',
          link: { label: 'Read Survey', icon: linkArrowIcon, iconSize: [14, 11], to: '/insights/benchmark-surveys' },
        },
        {
          tag: 'Survey',
          image: winterReleaseCover,
          author: 'Elixir Research',
          date: '15 January 2026',
          title: 'Benchmark Survey: Patient Portal and Telehealth Adoption',
          link: { label: 'Read Survey', icon: linkArrowIcon, iconSize: [14, 11], to: '/insights/benchmark-surveys' },
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
          link: { label: 'Read Release Notes', icon: linkArrowIcon, iconSize: [14, 11], to: '/insights/release-notes' },
        },
        {
          tag: 'Release',
          image: revenueCycleWhitepaperCover,
          author: 'Product Team',
          date: '10 January 2026',
          title: 'Release Notes: Eligibility and Claims Updates',
          link: { label: 'Read Release Notes', icon: linkArrowIcon, iconSize: [14, 11], to: '/insights/release-notes' },
        },
        {
          tag: 'Release',
          image: clinicalOutcomesWebinarCover,
          author: 'Product Team',
          date: '02 December 2025',
          title: 'Release Notes: Kratu AI Clinical Assistant Updates',
          link: { label: 'Read Release Notes', icon: linkArrowIcon, iconSize: [14, 11], to: '/insights/release-notes' },
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
          link: { label: 'Watch Webinar', icon: linkPlayIcon, iconSize: [9, 11], to: '/insights/webinars' },
        },
        {
          tag: 'Webinar',
          image: revenueCycleWhitepaperCover,
          author: 'Speaker Name',
          date: '26 March 2026',
          title: 'Connecting Eligibility, Claims and ERA Posting',
          link: { label: 'Watch Webinar', icon: linkPlayIcon, iconSize: [9, 11], to: '/insights/webinars' },
        },
        {
          tag: 'Webinar',
          image: winterReleaseCover,
          author: 'Speaker Name',
          date: '19 February 2026',
          title: "What's New in Elixir Winter'26",
          link: { label: 'Watch Webinar', icon: linkPlayIcon, iconSize: [9, 11], to: '/insights/webinars' },
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
  blog: { tag: 'Article', author: 'Elixir Team', link: { label: 'Read More', icon: linkArrowIcon, iconSize: [14, 11] } },
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
    cta: { label: 'How Elixir work', to: '/platform', variant: 'secondary' },
    tone: 'dark',
  },
  {
    title: 'Get a personalized Elixir demo',
    description:
      'Ready to see Elixir in action? Book a session with our specialists to see a tailored walkthrough for your specific clinical needs.',
    icon: personalizedDemoIcon,
    iconSize: [50, 51],
    cta: { label: 'Schedule a demo today', to: '/request-demo', variant: 'tertiary' },
    tone: 'light',
  },
];
