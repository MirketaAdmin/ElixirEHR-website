// Why Elixir page content — copy reproduced exactly from the Figma "Why Elixir" frame.

import heroCard from '../assets/why-elixir/hero-card.png';
import patientTouchpoints from '../assets/why-elixir/patient-touchpoints.png';
import admissionsDashboard from '../assets/why-elixir/admissions-dashboard.png';
import addictionTreatmentIcon from '../assets/why-elixir/addiction-treatment-icon.png';
import clinicsMedicalIcon from '../assets/why-elixir/clinics-medical-icon.png';
import hospitalsNetworksIcon from '../assets/why-elixir/hospitals-networks-icon.png';

export const whyElixirHero = {
  currentPage: 'Why Elixir',
  titleLines: ['Choose an EHR Built', 'for the Users'],
  description:
    'Elixir provides an end-to-end integrated solution for delivering a seamless patient care experience and an even better provider experience through AI-driven intelligence.',
  primaryCta: { label: 'Explore Our Platform', to: '/platform' },
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

export const ctaBand = {
  // Line break follows the Figma frame.
  title: ['Ready to change how you handle', 'your patients?'],
  description:
    "Join hundreds of medical facilities that have already transitioned to the future of clinical intelligence. Let's build a better provider experience together.",
  cta: { label: 'Click Here To Be Future Ready', to: '/request-demo' },
  secondaryCta: { label: 'Contact Our Strategy Team', to: '/company/contact' },
};
