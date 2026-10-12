// Success Stories page content — copy reproduced exactly from the Figma "Success Stories" frame.
// Photos are 1× crops of the frame export (no source files were supplied).

import heroCard from '../assets/success-stories/hero-card.png';
import featuredImage from '../assets/success-stories/featured-primary-care.png';
import bedManagementImage from '../assets/success-stories/story-bed-management.png';
import contactCenterImage from '../assets/success-stories/story-contact-center.png';
import patientIntakeImage from '../assets/success-stories/story-patient-intake.png';
import sleepApneaImage from '../assets/success-stories/story-sleep-apnea.png';
import populationHealthImage from '../assets/success-stories/story-population-health.png';
import treatmentCentersImage from '../assets/success-stories/story-treatment-centers.png';

export const successStoriesHero = {
  currentPage: 'Success Stories',
  titleLines: ['Client Success', 'Stories'],
  description: 'Discover the Latest Innovations, Partnerships, and Milestones in Healthcare Technology',
  // Same CTA and destination as the Press Releases and Why Elixir heroes.
  primaryCta: { label: 'Explore Our Platform', to: '/platform' },
  image: {
    src: heroCard,
    alt: 'Clinicians in white coats and scrubs joining hands in a circle, seen from above',
  },
};

export const successStoriesStats = [
  { value: '100+', label: 'Facilities Optimized' },
  { value: '40%', label: 'Reduced No-Shows' },
  { value: '24/7', label: 'AI Clinical Support' },
  { value: 'ZERO', label: 'Manual Spreadsheets' },
];

// No case-study pages exist yet (src/posts/case-study has only the demo), so "Read full
// transformation" and "Read more" have no destination: `to` is null and they render inert until a
// story page is published. Set `to` (e.g. '/case-study/<slug>') to link them.
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
        `"Elixir AI didn't just provide a tool; they transformed our entire operational DNA. We've seen a measurable shift in patient engagement and a dramatic decrease in administrative fatigue."`,
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
      to: null,
    },
    {
      category: 'Integration',
      title: 'Integrated Contact Center for Patient Experience',
      text: 'Integrating Elixir Contact Center with KIPU to improve overall patient management and create a seamless onboarding journey.',
      image: { src: contactCenterImage, alt: 'Contact center staff working at monitors with patient dashboards' },
      to: null,
    },
    {
      category: 'CRM',
      title: 'Enhanced Patient Intake via CRM Capabilities',
      text: 'Significant improvements in patient intake metrics through advanced automation of lead management and pre-assessment workflows.',
      image: { src: patientIntakeImage, alt: 'Patient intake workflow dashboard in an Elixir AI interface' },
      to: null,
    },
    {
      category: 'Automation',
      title: 'Process Automation for Sleep Apnea Centers',
      text: 'Elixir successfully automated the patient journey, unifying multiple disjointed systems into a single authoritative platform.',
      image: { src: sleepApneaImage, alt: 'Self check-in kiosks in a clinic lobby' },
      to: null,
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
      to: null,
    },
  ],
};

// No destination in the frame: "Take a Test Drive" goes to /request-demo, as on the other pages.
export const successStoriesCtaBand = {
  title: 'Ready to scale your clinical impact?',
  description:
    'Join hundreds of forward-thinking healthcare organizations leveraging Elixir AI to deliver superior care while maintaining peak operational efficiency.',
  cta: { label: 'Take a Test Drive', to: '/request-demo' },
};
