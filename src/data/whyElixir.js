// Why Elixir page content — copy reproduced exactly from the Figma "Why Elixir" frame. The page also
// carries the What Is Elixir frame's unique sections (Modular Solutions, Explore All Possibilities,
// Leverage the World's #1 CRM), merged in when /what-is-elixir was folded into this page.

import heroCard from '../assets/why-elixir/hero-card.png';
import patientTouchpoints from '../assets/why-elixir/patient-touchpoints.png';
import admissionsDashboard from '../assets/why-elixir/admissions-dashboard.png';
import addictionTreatmentIcon from '../assets/why-elixir/addiction-treatment-icon.png';
import clinicsMedicalIcon from '../assets/why-elixir/clinics-medical-icon.png';
import hospitalsNetworksIcon from '../assets/why-elixir/hospitals-networks-icon.png';
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
import demoCloudIcon from '../assets/what-is-elixir/demo/cloud-advantage.png';
import demoSecurityIcon from '../assets/what-is-elixir/demo/gold-standard-security.png';
import demoBillingIcon from '../assets/what-is-elixir/demo/integrated-billing.png';
import demoClinicalUiIcon from '../assets/what-is-elixir/demo/intuitive-clinical-ui.png';
import demoDeviceIcon from '../assets/what-is-elixir/demo/patient-empowerment.png';
import demoTemplatesIcon from '../assets/what-is-elixir/demo/personalized-templates.png';
import demoReportsIcon from '../assets/what-is-elixir/demo/reports-insights.png';
import demoIntakeTimeIcon from '../assets/what-is-elixir/demo/shorten-intake-time.png';
import demoTypeLessIcon from '../assets/what-is-elixir/demo/type-less.png';
import demoVirtualHealthIcon from '../assets/what-is-elixir/demo/virtual-health.png';
import demoCalendarIcon from '../assets/what-is-elixir/demo/zero-conflict-calendar.png';

export const whyElixirHero = {
  currentPage: 'Why Elixir',
  titleLines: ['Choose an EHR Built', 'for the Users'],
  description:
    'Elixir provides an end-to-end integrated solution for delivering a seamless patient care experience and an even better provider experience through AI-driven intelligence.',
  // Scrolls to the modular solutions on this page (/platform now points here).
  primaryCta: { label: 'Explore Our Platform', href: '#modular-solutions' },
  image: {
    src: heroCard,
    alt: 'Clinicians reviewing patient data on a tablet in a meeting room',
  },
  stat: { label: 'Efficiency Gain', value: '+42%', caption: 'Workflow speed increase' },
};

export const pillars = {
  eyebrow: 'PRECISION INTELLIGENCE',
  title: 'The 7 core pillars why leading institutions choose Elixir AI.',
  // Order, copy and per-card extras exactly as in the Figma bento grid.
  reasons: [
    {
      id: 1,
      title: 'Reinvent Your Patient Touchpoints',
      points: [
        'Empower your patients to book appointments online at their time and convenience.',
        'Enable patients to access health information anytime, anywhere.',
        'Telehealth and seamless payment systems integration.',
      ],
      image: { src: patientTouchpoints, alt: 'Patient checking in on a tablet at the Elixir clinic', size: [319, 296] },
    },
    {
      id: 2,
      title: 'Empower Your Doctors',
      description:
        'Build unlimited personalized templates and review 360-degree patient information with a single click. Save time extensively through AI dictation.',
      status: { label: 'DICTATION STATUS', value: 'ACTIVE' },
    },
    {
      id: 3,
      title: 'Rescue Your Nurses From Burnout',
      description:
        'Auto-populate long forms and smart schedule caseloads. Every nurse gets a personal AI secretary to remind them of events.',
      avatars: true,
    },
    {
      id: 4,
      title: 'Increase Admissions Efficiency',
      description:
        'Real-time census information and heatmaps optimize your operational decision making. Precise planning for precise results.',
      image: { src: admissionsDashboard, alt: 'Elixir facility performance dashboard on a monitor', size: [330, 238] },
      tools: true,
    },
    {
      id: 5,
      title: 'Better Reimbursements',
      description:
        'Significantly reduce the workload of your accounts team by enabling patients to schedule and pay online. Put out the fire before it starts with AI Denial Prediction.',
      risk: { label: 'DENIAL RISK PREDICTION', value: 'LOW (0.4%)' },
    },
    {
      id: 6,
      title: 'More Leads, Higher Conversion',
      description:
        'Leverage Salesforce to automate marketing and reduce lead conversion time with foolproof tools.',
      metric: { value: '22%', labelLines: ['Increase in Rev', 'last 2 months'] },
    },
    {
      id: 7,
      title: 'Help CXOs Achieve Goals',
      description:
        'Tap into valuable insights and make informed business decisions with real-time facility monitoring.',
      progress: { label: 'GOAL REACHED', value: 85 },
    },
  ],
};

export const healthcareSolutions = {
  eyebrow: 'SPECIALIZED SOLUTIONS',
  title: 'Healthcare Solutions We Offer',
  linkLabel: 'Learn more',
  // Destination pages are not designed yet; the router redirects unknown paths home.
  items: [
    {
      title: 'Addiction Treatment Centers',
      description:
        'Tailored workflows for behavioral health, integrating clinical records with recovery milestone tracking and specialized therapy group management.',
      icon: addictionTreatmentIcon,
      iconSize: [26, 27],
      to: '/solutions/addiction-treatment-centers',
    },
    {
      title: 'Clinics & Medical Offices',
      description:
        'Streamlined scheduling, billing, and clinical tools designed for fast-paced outpatient environments with high patient throughput.',
      icon: clinicsMedicalIcon,
      iconSize: [27, 27],
      to: '/solutions/clinics-medical-offices',
    },
    {
      title: 'Hospitals & Large Networks',
      description:
        'Enterprise-grade scalability with centralized data management, robust interoperability, and advanced executive reporting for complex systems.',
      icon: hospitalsNetworksIcon,
      iconSize: [29, 22],
      to: '/solutions/hospitals-large-networks',
    },
  ],
};

export const modularSolutions = {
  eyebrow: 'Integrated Ecosystem',
  title: 'Our Modular Solutions',
  // Each category is a tab. The Figma frame designs only "Core EHR" (selected); the other three tabs
  // carry interim cards whose copy is taken from the Contact Center, Revenue Cycle Management and
  // Patient Portal pages, with purple-tinted copies of this page's own icons. Swap in final content
  // when it is supplied.
  categories: [
    {
      label: 'Core EHR',
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
    },
    {
      label: 'Contact Center',
      modules: [
        {
          title: 'The Record, Not a Ticket',
          description: 'Agents operate directly in the patient chart, so inquiries, calls and texts build one record.',
          icon: demoTypeLessIcon,
          iconSize: [25, 22],
        },
        {
          title: 'First Contact to Admission',
          description: 'Inquiry, eligibility, screening, financial review and travel in one continuous stream.',
          icon: demoIntakeTimeIcon,
          iconSize: [25, 28],
        },
        {
          title: 'Consent at First Ring',
          description: 'Communication and recording consent evidenced at the very first contact.',
          icon: demoVirtualHealthIcon,
          iconSize: [27, 26],
        },
        {
          title: 'Native on Salesforce',
          description: 'Queues, routing, scripts and dispositions are configuration, not custom code.',
          icon: demoCloudIcon,
          iconSize: [29, 22],
        },
      ],
    },
    {
      label: 'Billing',
      modules: [
        {
          title: 'Eligibility Checks',
          description: 'Confirm coverage before the patient is seen, through 270/271 transactions with supported payers.',
          icon: demoSecurityIcon,
          iconSize: [22, 27],
        },
        {
          title: 'Claim Creation',
          description: 'Professional and institutional claims built from the same patient and encounter data.',
          icon: demoTemplatesIcon,
          iconSize: [25, 24],
        },
        {
          title: 'Claim Validation',
          description: 'Errors returned at the field the biller has to fix, before the claim is submitted.',
          icon: demoReportsIcon,
          iconSize: [25, 24],
        },
        {
          title: 'ERA Posting',
          description: '835 remittances matched to the claims they cover and turned into a posting worklist.',
          icon: demoBillingIcon,
          iconSize: [30, 22],
        },
      ],
    },
    {
      label: 'Patient Portal',
      modules: [
        {
          title: 'Self-Scheduling',
          description: 'Patients book, reschedule or cancel online, with reminders for the visits people forget.',
          icon: demoCalendarIcon,
          iconSize: [25, 27],
        },
        {
          title: 'Own Records',
          description: 'History, diagnoses, medications and immunisations in one place, not three phone calls.',
          icon: demoDeviceIcon,
          iconSize: [27, 22],
        },
        {
          title: 'Lab Results',
          description: 'Results when they are released, downloadable to take to another provider.',
          icon: demoClinicalUiIcon,
          iconSize: [25, 24],
        },
        {
          title: 'Secure Messaging',
          description: 'Messages reach the care team that knows the patient, not a general inbox.',
          icon: demoVirtualHealthIcon,
          iconSize: [27, 26],
        },
      ],
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
  title: ['Ready to change how you handle', 'your patients?'],
  description:
    "Join hundreds of medical facilities that have already transitioned to the future of clinical intelligence. Let's build a better provider experience together.",
  cta: { label: 'Click Here To Be Future Ready', to: '/request-demo' },
  secondaryCta: { label: 'Contact Our Strategy Team', to: '/company/contact' },
};
