// What Is Elixir page content — copy reproduced exactly from the Figma "What is Elixir" frame.

import heroCard from '../assets/what-is-elixir/hero-card.png';
import patientIntakeIcon from '../assets/what-is-elixir/patient-intake-icon.png';
import assessmentsIcon from '../assets/what-is-elixir/assessments-icon.png';
import carePlansIcon from '../assets/what-is-elixir/care-plans-icon.png';
import ePrescriptionsIcon from '../assets/what-is-elixir/e-prescriptions-icon.png';
import shortenIntakeTimeIcon from '../assets/what-is-elixir/shorten-intake-time-icon.png';
import personalizedTemplatesIcon from '../assets/what-is-elixir/personalized-templates-icon.png';
import typeLessIcon from '../assets/what-is-elixir/type-less-icon.png';
import zeroConflictCalendarIcon from '../assets/what-is-elixir/zero-conflict-calendar-icon.png';
import virtualHealthIcon from '../assets/what-is-elixir/virtual-health-icon.png';
import integratedBillingIcon from '../assets/what-is-elixir/integrated-billing-icon.png';
import patientEmpowermentIcon from '../assets/what-is-elixir/patient-empowerment-icon.png';
import intuitiveClinicalUiIcon from '../assets/what-is-elixir/intuitive-clinical-ui-icon.png';
import cloudAdvantageIcon from '../assets/what-is-elixir/cloud-advantage-icon.png';
import reportsInsightsIcon from '../assets/what-is-elixir/reports-insights-icon.png';
import goldStandardSecurityIcon from '../assets/what-is-elixir/gold-standard-security-icon.png';

export const whatIsElixirHero = {
  currentPage: 'What Is Elixir',
  titleLines: ['One Stop Solution For', 'All Your Needs.'],
  description:
    'Elixir provides an end-to-end integrated solution for patients and providers. Its open architecture makes it fully customizable and easily configurable, ensuring powerful capabilities along with an easy transition experience.',
  primaryCta: { label: 'Take A Test Drive', to: '/request-demo' },
  secondaryCta: { label: 'Explore Capabilities', to: '/platform' },
  image: {
    src: heroCard,
    alt: 'Clinician working on a laptop surrounded by connected healthcare icons',
  },
  badge: { title: 'AI Insights Active', subtitle: 'Real-time analysis' },
};

export const modularSolutions = {
  eyebrow: 'Integrated Ecosystem',
  title: 'Our Modular Solutions',
  // The Figma frame shows "Core EHR" selected; only its modules are designed.
  categories: ['Core EHR', 'Contact Center', 'Billing', 'Patient Portal'],
  activeCategory: 'Core EHR',
  modules: [
    {
      title: 'Patient Intake',
      description:
        'Frequent follow-ups ensuring increased admissions and effective guidance helping patients recover.',
      icon: patientIntakeIcon,
      iconSize: [35, 26],
    },
    {
      title: 'Assessments',
      description:
        'Configurable alerts, smart reports, and dashboards for easy trackability and organized planning.',
      icon: assessmentsIcon,
      iconSize: [29, 29],
    },
    {
      title: 'Care Plans',
      description:
        'Patient-centric approach focused on short and long-term needs and staff responsibilities.',
      icon: carePlansIcon,
      iconSize: [32, 32],
    },
    {
      title: 'E-Prescriptions',
      description:
        'Pharmacy integration and Electronic Medical Administration Record (eMAR) just a click away.',
      icon: ePrescriptionsIcon,
      iconSize: [32, 35],
    },
  ],
};

export const possibilities = {
  eyebrow: 'Optimization Features',
  title: 'Explore All Possibilities',
  features: [
    {
      title: 'Shorten Intake Time',
      description:
        'Automating form filling, benefit verification, and travel arrangements for seamless onboarding.',
      icon: shortenIntakeTimeIcon,
      iconSize: [25, 28],
    },
    {
      title: 'Personalized Templates',
      description:
        'Unlimited custom templates that address subtle patient differences at no extra cost.',
      icon: personalizedTemplatesIcon,
      iconSize: [25, 24],
    },
    {
      title: 'Type Less, Document More',
      description:
        'Intelligent system aware of history, pre-filling documents so you only add new info.',
      icon: typeLessIcon,
      iconSize: [25, 22],
    },
    {
      title: 'Zero Conflict Calendar',
      description:
        'Manage all events with one unified calendar using intuitive clinical color-coding.',
      icon: zeroConflictCalendarIcon,
      iconSize: [25, 27],
    },
    {
      title: 'Virtual Health',
      description:
        'Limitless practice capacity through integrated telehealth serviced beyond proximity.',
      icon: virtualHealthIcon,
      iconSize: [27, 26],
    },
    {
      title: 'Integrated Billing',
      description:
        'Never lose money over manual errors with automated processing and medical code transcription.',
      icon: integratedBillingIcon,
      iconSize: [30, 22],
    },
    {
      title: 'Patient Empowerment',
      description: 'Online appointments, history access, and payments through a secure web portal.',
      icon: patientEmpowermentIcon,
      iconSize: [27, 22],
    },
    {
      title: 'Intuitive Clinical UI',
      description: 'Built to eliminate errors and avoid confusion with a clean, visionary interface.',
      icon: intuitiveClinicalUiIcon,
      iconSize: [25, 24],
    },
  ],
};

// Icon tile sizes differ slightly per card in the Figma frame.
export const crmPartnership = {
  eyebrow: 'Strategic Partnership',
  title: "Leverage the World's #1 CRM",
  description:
    'Elixir effectively leverages Salesforce to attract patients, shorten sales cycles, and provide unparalleled data security.',
  cards: [
    {
      title: 'The Cloud Advantage',
      icon: cloudAdvantageIcon,
      iconSize: [29, 22],
      tile: [48, 55],
      points: [
        'Use Health, Marketing, Sales, and Einstein clouds.',
        'Automated data management handled by Salesforce architecture.',
      ],
    },
    {
      title: 'Reports & Insights',
      icon: reportsInsightsIcon,
      iconSize: [25, 24],
      tile: [55, 55],
      points: [
        'Meaningful visualizations via built-in dashboards.',
        'Drive powerful business outcomes in seconds.',
      ],
    },
    {
      title: 'Gold-Standard Security',
      icon: goldStandardSecurityIcon,
      iconSize: [22, 27],
      tile: [45, 55],
      points: [
        'Exceptional data security for sensitive patient PHI.',
        'Compliant interoperability across different clinical systems.',
      ],
    },
  ],
};

export const ctaBand = {
  // Line break follows the Figma frame.
  title: ['Ready to Change How You', 'Handle Your Patients?'],
  cta: { label: 'Take A Test Drive Now', to: '/request-demo' },
};
