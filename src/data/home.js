// Home page content — copy reproduced exactly from the Figma Home frame.

import cannabisCardLogo from '../assets/home/trusted-by/cannabis-card-logo.png';
import genomicLifeLogo from '../assets/home/trusted-by/genomic-life-logo.png';
import bridgesOfHopeLogo from '../assets/home/trusted-by/bridges-of-hope-logo.png';
import graniteRecoveryLogo from '../assets/home/trusted-by/granite-recovery-centers-logo.png';
import withinLogo from '../assets/home/trusted-by/within-logo.png';
import alterHealthLogo from '../assets/home/trusted-by/alter-health-group-logo.png';
import caremoreLogo from '../assets/home/trusted-by/caremore-medical-supply-logo.png';
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
import drJenJhonePhoto from '../assets/home/testimonials/dr-jen-jhone.png';
import marcusSterlingPhoto from '../assets/home/testimonials/marcus-sterling.png';
import winterReleaseCover from '../assets/home/resources/elixir-winter-26-release-cover.png';
import clinicalOutcomesWebinarCover from '../assets/home/resources/ai-clinical-outcomes-webinar-cover.png';
import revenueCycleWhitepaperCover from '../assets/home/resources/revenue-cycle-whitepaper-cover.png';
import linkArrowIcon from '../assets/icons/link-arrow.png';
import linkPlayIcon from '../assets/icons/link-play.png';
import linkDownloadIcon from '../assets/icons/link-download.png';
import exploreSolutionIcon from '../assets/home/cta/explore-solution-icon.png';
import personalizedDemoIcon from '../assets/home/cta/personalized-demo-icon.png';



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

export const trustedBy = {
  title: 'Trusted by more than 1,200 Clinics Worldwide',
  // Seconds for one full loop of the logo strip (larger = slower).
  marqueeDuration: 45,
  // Order and names as shown in the Figma logo strip.
  logos: [
    { name: 'Cannabis Card Orlando', src: cannabisCardLogo, width: 99, height: 99 },
    { name: 'Genomic Life', src: genomicLifeLogo, width: 99, height: 99 },
    { name: 'Bridges of Hope', src: bridgesOfHopeLogo, width: 178, height: 60 },
    { name: 'Granite Recovery Centers', src: graniteRecoveryLogo, width: 97, height: 97 },
    { name: 'within', src: withinLogo, width: 99, height: 99 },
    { name: 'Alter Health Group', src: alterHealthLogo, width: 89, height: 89 },
    { name: 'caremore Medical Supply', src: caremoreLogo, width: 114, height: 114 },
  ],
};

export const kratuIntelligence = {
  badge: 'Kratu AI - Powered by Elixir',
  titleLines: ["Intelligence that doesn't", 'just think - it acts.'],
  description: 'From the moment a patient walks in to the moment a claim is paid, Kratu handles it.',
  // Left column (01–03) then right column (04–06). Title line breaks follow Figma.
  features: [
    {
      number: '01',
      titleLines: ['Clinical Notes', 'from Audio'],
      description: 'Listens to visits and creates structured notes in real time.',
      icon: clinicalNotesAudioIcon,
    },
    {
      number: '02',
      titleLines: ['Payer Policy →', 'Billing Rules'],
      description: 'Transforms payer policies into actionable billing logic.',
      icon: payerPolicyBillingIcon,
    },
    {
      number: '03',
      titleLines: ['Claim Scoring', 'Before Submission'],
      description: 'Flags denial risk and suggests corrections before claims go out.',
      icon: claimScoringIcon,
    },
    {
      number: '04',
      titleLines: ['Denial Management'],
      description: 'Categorizes denials, supports appeals, and tracks resolution.',
      icon: denialManagementIcon,
    },
    {
      number: '05',
      titleLines: ['Scheduling, Referrals', '& Orders'],
      description: 'Creates next-step actions directly from clinical context.',
      icon: schedulingReferralsIcon,
    },
    {
      number: '06',
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
  // Each feature shows its own screenshot (810×530 export, drop shadow baked in). Only Patient
  // View's was supplied; the others show the generic image placeholder until theirs exist.
  items: [
    {
      title: 'Patient View',
      description:
        'Unified patient dashboards that provide clinical context, insurance status, and vital history at a single glance.',
      image: { src: patientViewDashboard, alt: 'Elixir patient record dashboard' },
    },
    {
      title: 'Inventory Management',
      description:
        'Intelligent stock tracking and automated reordering for medical supplies based on patient volume trends.',
      image: null,
    },
    {
      title: 'Telehealth Integration',
      description:
        'Full-featured video consultations that sync notes directly back to the patient record in real-time.',
      image: null,
    },
  ],
};

export const testimonials = {
  eyebrow: 'Testimonials',
  titleLines: ['How customers feel', 'about Elixir'],
  linkLabel: 'Hear Story',
  // Seconds between automatic slides (one card per step).
  autoplaySeconds: 7,
  // `featured` renders the purple card variant (first card in the Figma frame). `to` (the
  // "Hear Story" link) and `photo` are optional.
  items: [
    {
      name: 'Dr. Jen Jhone',
      role: 'Clinical Director, Metro Health',
      quote:
        '"Elixir\'s AI summarization has saved our clinicians over 10 hours a week on documentation alone. It\'s the most intuitive EHR we\'ve ever used."',
      photo: drJenJhonePhoto,
      to: '/resources/case-studies',
      featured: true,
    },
    {
      name: 'Marcus Sterling',
      role: 'Health Systems Administrator',
      quote:
        '"The ROI was immediate. Predicting claim rejections before submission cut our administrative overhead by nearly 30% in the first quarter."',
      photo: marcusSterlingPhoto,
      to: '/resources/case-studies',
    },
    // DEMO testimonial (placeholder copy, no photo) added to exercise the carousel — replace it
    // with a real, approved customer quote before launch. Without `photo`, initials are shown.
    {
      name: 'Sarah Mitchell',
      role: 'Practice Administrator',
      quote:
        '"Having scheduling, documentation and billing in one place means our front desk and clinicians finally work from the same record."',
      demo: true,
    },
  ],
};

export const resources = {
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
          link: { label: 'Read More', icon: linkArrowIcon, iconSize: [14, 11], to: '/resources/blog' },
        },
        {
          tag: 'Webinar',
          image: clinicalOutcomesWebinarCover,
          author: 'Author Name',
          date: '04 April 2026',
          title: 'How AI is Transforming Clinical Outcomes in 2026',
          link: { label: 'Watch Webinar', icon: linkPlayIcon, iconSize: [9, 11], to: '/resources/webinars' },
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
            to: '/resources/whitepapers',
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
          link: { label: 'Download E-Book', icon: linkDownloadIcon, iconSize: [12, 13], to: '/resources/e-books' },
        },
        {
          tag: 'E-Book',
          image: clinicalOutcomesWebinarCover,
          author: 'Elixir Team',
          date: '20 February 2026',
          title: 'Bringing AI into Everyday Clinical Documentation',
          link: { label: 'Download E-Book', icon: linkDownloadIcon, iconSize: [12, 13], to: '/resources/e-books' },
        },
        {
          tag: 'E-Book',
          image: winterReleaseCover,
          author: 'Elixir Team',
          date: '28 January 2026',
          title: 'Choosing an EHR Built on Salesforce: What to Look For',
          link: { label: 'Download E-Book', icon: linkDownloadIcon, iconSize: [12, 13], to: '/resources/e-books' },
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
          link: { label: 'Read Survey', icon: linkArrowIcon, iconSize: [14, 11], to: '/resources/benchmark-surveys' },
        },
        {
          tag: 'Survey',
          image: revenueCycleWhitepaperCover,
          author: 'Elixir Research',
          date: '05 February 2026',
          title: 'Benchmark Survey: Claim Denial Management Practices',
          link: { label: 'Read Survey', icon: linkArrowIcon, iconSize: [14, 11], to: '/resources/benchmark-surveys' },
        },
        {
          tag: 'Survey',
          image: winterReleaseCover,
          author: 'Elixir Research',
          date: '15 January 2026',
          title: 'Benchmark Survey: Patient Portal and Telehealth Adoption',
          link: { label: 'Read Survey', icon: linkArrowIcon, iconSize: [14, 11], to: '/resources/benchmark-surveys' },
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
          link: { label: 'Read Release Notes', icon: linkArrowIcon, iconSize: [14, 11], to: '/resources/release-notes' },
        },
        {
          tag: 'Release',
          image: revenueCycleWhitepaperCover,
          author: 'Product Team',
          date: '10 January 2026',
          title: 'Release Notes: Eligibility and Claims Updates',
          link: { label: 'Read Release Notes', icon: linkArrowIcon, iconSize: [14, 11], to: '/resources/release-notes' },
        },
        {
          tag: 'Release',
          image: clinicalOutcomesWebinarCover,
          author: 'Product Team',
          date: '02 December 2025',
          title: 'Release Notes: Kratu AI Clinical Assistant Updates',
          link: { label: 'Read Release Notes', icon: linkArrowIcon, iconSize: [14, 11], to: '/resources/release-notes' },
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
          link: { label: 'Watch Webinar', icon: linkPlayIcon, iconSize: [9, 11], to: '/resources/webinars' },
        },
        {
          tag: 'Webinar',
          image: revenueCycleWhitepaperCover,
          author: 'Speaker Name',
          date: '26 March 2026',
          title: 'Connecting Eligibility, Claims and ERA Posting',
          link: { label: 'Watch Webinar', icon: linkPlayIcon, iconSize: [9, 11], to: '/resources/webinars' },
        },
        {
          tag: 'Webinar',
          image: winterReleaseCover,
          author: 'Speaker Name',
          date: '19 February 2026',
          title: "What's New in Elixir Winter'26",
          link: { label: 'Watch Webinar', icon: linkPlayIcon, iconSize: [9, 11], to: '/resources/webinars' },
        },
      ],
    },
  ],
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
