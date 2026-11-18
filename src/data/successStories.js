// Success Stories page content — copy reproduced exactly from the Figma "Success Stories" frame.
// Photos are 1× crops of the frame export (no source files were supplied).

import heroCard from '../assets/success-stories/hero-card.webp';
import featuredImage from '../assets/success-stories/featured-primary-care.webp';
import bedManagementImage from '../assets/success-stories/story-bed-management.png';
import contactCenterImage from '../assets/success-stories/story-contact-center.png';
import patientIntakeImage from '../assets/success-stories/story-patient-intake.png';
import sleepApneaImage from '../assets/success-stories/story-sleep-apnea.png';
import populationHealthImage from '../assets/success-stories/story-population-health.png';
import treatmentCentersImage from '../assets/success-stories/story-treatment-centers.png';
import contactCenterMultiPartyImage from '../assets/posts/case-study/elixir-contact-center-implementation-with-multi-party-integrations-for-an-addiction-recovery-center.webp';
import graniteImage from '../assets/posts/case-study/granite-recovery-patient-pre-intake-automation.webp';
import vitraImage from '../assets/posts/case-study/vitra-health-revenue-cycle-operations-elixir-rcm.webp';
import upwardImage from '../assets/posts/case-study/upward-health-rcm-workflow-automation.webp';
import oncohostImage from '../assets/posts/case-study/oncohost-claim-processing-elixir-billing.webp';
import retreatImage from '../assets/posts/case-study/retreat-elixir-ehr-salesforce-health-cloud.webp';
import communityWellnessImage from '../assets/posts/case-study/community-wellness-behavioral-health-ehr-medical-billing.webp';
import palmBeachImage from '../assets/posts/case-study/palm-beach-eldercare-ehr-medical-billing-rcm.webp';
import contactCenterEhrIntegrationImage from '../assets/posts/case-study/completely-eliminated-the-use-of-spreadsheets-for-bed-management.webp';

export const successStoriesHero = {
  currentPage: 'Success Stories',
  titleLines: ['Client Success', 'Stories'],
  description: 'Discover the Latest Innovations, Partnerships, and Milestones in Healthcare Technology',
  // Same CTA and destination as the Press Releases and Why Elixir heroes.
  primaryCta: { label: 'Explore Our Platform', to: '/why-elixir/' },
  image: {
    src: heroCard,
    alt: 'Smiling clinicians in scrubs and white coats joining hands in a circle',
  },
};

export const successStoriesStats = [
  { value: '100+', label: 'Facilities Optimized' },
  { value: '40%', label: 'Reduced No-Shows' },
  { value: '24/7', label: 'AI Clinical Support' },
  { value: 'ZERO', label: 'Manual Spreadsheets' },
];

// No case-study write-ups exist yet (src/posts/case-study has only the demo). Stories with matching
// published content link to it; the rest have `to: null` and render inert until a story page is
// published. Set `to` (e.g. '/case-study/<slug>') to link them.
export const successStoriesImpact = {
  eyebrow: 'Success stories',
  title: 'Our Impact in Action',
  description: 'Real Results from Real Healthcare Providers Partnering with Elixir',
  // The frame shows previous/next arrows for the featured story; only one story is supplied.
  featured: [
    {
      tag: 'Featured story',
      title: 'Integrated Digital Care Delivery & Revenue Optimization for Primary Care Providers',
      quote:
        `"Kratu AI didn't just provide a tool; they transformed our entire operational DNA. We've seen a measurable shift in patient engagement and a dramatic decrease in administrative fatigue."`,
      attribution: '— Chief Medical Officer, Atlantic Primary Group',
      cta: { label: 'Read full transformation', to: null },
      image: {
        src: featuredImage,
        alt: 'Clinicians in scrubs and white coats reviewing tablets at a clinic reception desk',
      },
    },
  ],
  stories: [
    {
      category: 'Workflow',
      title: 'Eliminating Spreadsheets for Bed Management',
      text: "The client leveraged Elixir's capabilities to remove all manual steps involved in bed management, streamlining facility operations and reducing errors.",
      image: { src: bedManagementImage, alt: 'Administrator reviewing a bed management dashboard on a wall display' },
      // Recovered story (old /stories/it-provider/).
      to: '/case-study/it-provider/',
    },
    {
      category: 'Integration',
      title: 'Integrated Contact Center for Patient Experience',
      text: 'Integrating Elixir Contact Center with KIPU to improve overall patient management and create a seamless onboarding journey.',
      image: { src: contactCenterImage, alt: 'Contact center staff working at monitors with patient dashboards' },
      // Recovered story (old /stories/product-management/).
      to: '/case-study/product-management/',
    },
    {
      category: 'CRM',
      title: 'Enhanced Patient Intake via CRM Capabilities',
      text: 'Significant improvements in patient intake metrics through advanced automation of lead management and pre-assessment workflows.',
      image: { src: patientIntakeImage, alt: 'Patient intake workflow dashboard in a Kratu AI interface' },
      to: '/case-study/app-developement/',
    },
    {
      category: 'Automation',
      title: 'Process Automation for Sleep Apnea Centers',
      text: 'Elixir successfully automated the patient journey, unifying multiple disjointed systems into a single authoritative platform.',
      image: { src: sleepApneaImage, alt: 'Self check-in kiosks in a clinic lobby' },
      to: '/case-study/process-automation-and-complete-system-setup-for-a-sleep-apnea-treatment-center/',
    },
    {
      category: 'Billing & RCM',
      title: 'Transforming Billing for Population Health',
      text: 'Resolving fragmented data systems with a unified EHR & RCM solution, ensuring accuracy and profitability in population health management.',
      image: { src: populationHealthImage, alt: 'Unified population health management and billing dashboard' },
      to: null,
    },
    {
      category: 'Specialized Care',
      title: 'Digital Engagement for Treatment Centers',
      text: 'Achieved superior CRM experiences and boosted digital engagement metrics for specialized eating disorder treatment facilities.',
      image: { src: treatmentCentersImage, alt: 'Clinician and client in a virtual session in a treatment center lounge' },
      to: '/case-study/marketing-admission-and-alumni-process-automation-for-an-eating-disorder-treatment-center/',
    },
    // Recovered from the previous website: its title, card image and Results line (category from the
    // story's SOLUTION(S) field). Full story: src/posts/case-study/elixir-contact-center-implementation-with-multi-party-integrations-for-an-addiction-recovery-center.js.
    {
      category: 'Contact Center',
      title: 'Elixir Contact Center Implementation with Multi-Party Integrations for an Addiction Recovery Center',
      text: 'Elixir was successful in providing a superior CRM experience and the multiple integrations significantly boosted productivity and reduced the possibility of data errors.',
      image: {
        src: contactCenterMultiPartyImage,
        alt: 'Elixir Contact Center Implementation with Multi-Party Integrations for an Addiction Recovery Center',
      },
      to: '/case-study/elixir-contact-center-implementation-with-multi-party-integrations-for-an-addiction-recovery-center/',
    },
    // Recovered the same way. Full story: src/posts/case-study/completely-eliminated-the-use-of-spreadsheets-for-bed-management.js.
    {
      category: 'Contact Center',
      title: 'Marketing, Admission, Alumni Process Automation and EHR Integration for a Treatment Center',
      text: 'Elixir was successful in providing a superior CRM experience and the CRM-EHR Integration boosted productivity and reduced the possibility of data errors.',
      image: {
        src: contactCenterEhrIntegrationImage,
        alt: 'Marketing, Admission, Alumni Process Automation and EHR Integration for a Treatment Center',
      },
      to: '/case-study/completely-eliminated-the-use-of-spreadsheets-for-bed-management/',
    },
    // Video case studies from the Mirketa YouTube channel, written up from each video's description
    // and title slide (src/posts/case-study/<slug>.js). Images are the videos' YouTube thumbnails.
    {
      category: 'Contact Center',
      title: 'How Granite Recovery Automated Patient Pre-Intake with Elixir Contact Center & KIPU EHR',
      text: 'Unified lead capture, custom pre-intake and VOB forms, and a bi-directional KIPU EHR sync for a New Hampshire behavioral healthcare provider.',
      image: { src: graniteImage, alt: 'How Elixir Automated Patient Pre-Intake for Granite Recovery: case study title slide' },
      to: '/case-study/granite-recovery-patient-pre-intake-automation/',
    },
    {
      category: 'Billing & RCM',
      title: 'How Vitra Health Scaled Revenue Cycle Operations with Elixir RCM',
      text: 'Automated claims, real-time eligibility checks, faster ERA processing and denial management for a Home Healthcare and Adult Foster Care provider.',
      image: { src: vitraImage, alt: 'Scaling Revenue Cycle Operations for Vitra Health: case study title slide' },
      to: '/case-study/vitra-health-revenue-cycle-operations-elixir-rcm/',
    },
    {
      category: 'Billing & RCM',
      title: 'How Elixir Accelerated Workflows by approx 35% for Upward Health',
      text: '35% faster claim and payment workflows, 25% fewer errors and 90% user adoption within the first month.',
      image: { src: upwardImage, alt: 'Measurable impact for Upward Health: 35% faster workflows, 25% fewer errors, 90% user adoption' },
      to: '/case-study/upward-health-rcm-workflow-automation/',
    },
    {
      category: 'Billing & RCM',
      title: 'How Elixir Cut Claim Processing Time by 40% for OncoHost',
      text: '40% faster claim processing, 25% fewer manual errors and 95% user adoption for an AI-powered precision medicine company.',
      image: { src: oncohostImage, alt: 'How Elixir Automated Billing for OncoHost: case study title slide' },
      to: '/case-study/oncohost-claim-processing-elixir-billing/',
    },
    {
      category: 'Health & Wellness',
      title: 'How Retreat Transformed Patient Care with Elixir EHR on Salesforce Health Cloud',
      text: 'Onboarding, clinical care, lab ordering, e-prescribing, supplement commerce and payments unified on one connected platform.',
      image: { src: retreatImage, alt: 'How Elixir EHR Transformed Retreat: case study title slide' },
      to: '/case-study/retreat-elixir-ehr-salesforce-health-cloud/',
    },
    {
      category: 'Behavioral Health',
      title: 'How Elixir EHR Transformed Community Wellness',
      text: 'Patient CRM, EHR and medical billing on one platform for a non-profit behavioral healthcare provider in Washington, DC.',
      image: { src: communityWellnessImage, alt: 'How Elixir EHR Transformed Community Wellness: case study title slide' },
      to: '/case-study/community-wellness-behavioral-health-ehr-medical-billing/',
    },
    {
      category: 'Elder Care',
      title: 'How Elixir EHR Transformed Palm Beach Eldercare',
      text: 'Patient care, medical billing and third-party provider invoicing streamlined on a single Salesforce-native platform.',
      image: { src: palmBeachImage, alt: 'How Elixir EHR Transformed Palm Beach Eldercare: case study title slide' },
      to: '/case-study/palm-beach-eldercare-ehr-medical-billing-rcm/',
    },
  ],
};

// No destination in the frame: "Take a Test Drive" goes to /request-demo, as on the other pages.
export const successStoriesCtaBand = {
  title: 'Ready to scale your clinical impact?',
  description:
    'Join hundreds of forward-thinking healthcare organizations leveraging Kratu AI to deliver superior care while maintaining peak operational efficiency.',
  cta: { label: 'Take a Test Drive', to: '/request-demo/' },
};
