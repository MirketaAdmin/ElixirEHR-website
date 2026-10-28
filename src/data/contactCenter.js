// Contact Center page content — copy reproduced exactly from the Figma "Contact Center" frame.
// Photos and icons are 1× crops of the frame export (no source files were supplied); two AI card
// icons reuse the Home / Billing icons, which match the frame.

import heroMedia from '../assets/contact-center/redesign/hero-media.png';
import efficiencyIcon from '../assets/patient-portal/badge-efficiency.png';
import intakeMedia from '../assets/contact-center/redesign/intake-media.png';
import automationIcon from '../assets/contact-center/redesign/pill-automation.png';
import workflowsIcon from '../assets/contact-center/redesign/intake-workflows.png';
import dataIcon from '../assets/contact-center/redesign/intake-data.png';
import outreachIcon from '../assets/contact-center/redesign/intake-outreach.png';
import verificationMedia from '../assets/contact-center/redesign/verification-media.png';
import docsIcon from '../assets/contact-center/redesign/assess-docs.png';
import integrationIcon from '../assets/contact-center/redesign/assess-integration.png';
import carePlansIcon from '../assets/contact-center/redesign/assess-care-plans.png';
import paymentMedia from '../assets/contact-center/redesign/payment-media.png';
import schedulesIcon from '../assets/contact-center/redesign/payment-schedules.png';
import rcmIcon from '../assets/contact-center/redesign/payment-rcm.png';
import censusMedia from '../assets/contact-center/redesign/census-media.png';
import occupancyIcon from '../assets/contact-center/redesign/census-occupancy.png';
import maintenanceIcon from '../assets/contact-center/redesign/census-maintenance.png';
import patientPortalAgentIcon from '../assets/home/ai-capabilities/patient-portal-agent-icon.png';
import ocrReaderIcon from '../assets/billing/ai-ocr-reader-icon.png';
import knowledgeBaseIcon from '../assets/contact-center/redesign/ai-knowledge-base-icon.png';

// The frame's hero copy and badge are the same as the Billing hero's.
export const ccHero = {
  currentPage: 'Contact Center',
  titleLines: ['360° AI-Powered Patient', 'Intake Management', 'Solution'],
  titleAccent: '360° AI-Powered',
  description:
    "Elixir's 360° Patient Intake Management Solution combines healthcare automation, intelligent workflows, and Salesforce EHR integration.",
  // "Explore Features" scrolls to this page's AI capabilities.
  primaryCta: { label: 'Take A Test Drive', to: '/request-demo' },
  secondaryCta: { label: 'Explore Features', href: '#contact-center-ai-capabilities' },
  media: { src: heroMedia, alt: 'Contact center agent with a headset working at two monitors' },
  badge: { label: 'Efficiency', text: 'Intake time reduced by 40%', icon: efficiencyIcon },
};

export const ccIntake = {
  badge: { label: 'Intelligent Automation', icon: automationIcon },
  titleLines: ['Simplified Patient', 'Intake with Intelligent', 'Automation'],
  description:
    'Patient intake is often the first impression your organization makes and it needs to be flawless. Elixir transforms traditional intake into a seamless digital experience using advanced healthcare software solutions.',
  image: { src: intakeMedia, alt: 'Patient checking in at an Elixir self-service kiosk in a clinic lobby' },
  features: [
    { title: 'Custom Workflows', text: 'Automate the entire intake journey with adaptable routing.', icon: workflowsIcon },
    { title: 'Centralized Patient Data', text: 'Captured seamlessly through integrated CRM systems.', icon: dataIcon },
    {
      title: 'Multi-Channel Outreach',
      text: 'Engage via digital forms, calls, and dedicated patient communication software.',
      icon: outreachIcon,
    },
  ],
};

export const ccVerification = {
  badge: 'Verification',
  titleLines: ['AI-Driven Insurance', 'Verification &', 'Eligibility Checks'],
  description:
    'Insurance verification is one of the most critical—and error-prone—steps in patient intake. Delays or mistakes here directly affect medical billing services, claims processing, and overall healthcare revenue cycle management.',
  items: [
    'Automated workflows powered by AI in healthcare',
    'Real-time verification through integrated clearinghouses',
    'Reduced claim rejections and improved denial management',
  ],
  image: { src: verificationMedia, alt: 'Nurse in navy scrubs reviewing a tablet' },
};

export const ccAssessments = {
  titleLines: ['Integrated Pre-Admission &', 'Clinical Assessments'],
  description:
    'A smooth intake process goes beyond registration—it requires accurate clinical context. Elixir ensures this through intelligent workflows.',
  // The middle card is drawn dark in the frame.
  cards: [
    {
      title: 'Structured Docs',
      text: 'Support for comprehensive clinical documentation, ensuring all necessary data is captured seamlessly before admission.',
      icon: docsIcon,
    },
    {
      title: 'Seamless Integration',
      text: 'Tightly connected electronic health record systems that communicate in real-time, eliminating redundant data entry.',
      icon: integrationIcon,
      dark: true,
    },
    {
      title: 'Care Plans',
      text: 'Personalized care plans based on patient preferences and historical data, generated intelligently during intake.',
      icon: carePlansIcon,
    },
  ],
};

export const ccPayment = {
  titleLines: ['Smart Payment &', 'Billing Workflows'],
  description:
    'Billing shouldn’t be a bottleneck it should be a seamless extension of care delivery. Elixir integrates financial processes directly into intake workflows, supporting efficient healthcare billing.',
  items: [
    { title: 'Automated Schedules', text: 'Tailored payment schedules adapting to patient needs.', icon: schedulesIcon },
    { title: 'End-to-End RCM', text: 'Integration with gateways and complete claims management.', icon: rcmIcon },
  ],
  image: { src: paymentMedia, alt: 'Billing specialist reviewing statements with a calculator beside a dashboard' },
};

export const ccCensus = {
  titleLines: ['Intelligent Census &', 'Capacity', 'Management'],
  description:
    'Managing patient flow across facilities requires real-time visibility. Elixir brings advanced healthcare analytics software and automation into census management.',
  // The card over the photo's lower right.
  overlay: { title: 'Multi-Facility View', text: 'Monitor occupancy across all your locations on a single dashboard.' },
  items: [
    { title: 'Real-time Occupancy', text: 'Intuitive heatmaps for instant visual tracking.', icon: occupancyIcon },
    { title: 'Maintenance Status', text: 'Track operational readiness for beds and rooms with instant alerts.', icon: maintenanceIcon },
  ],
  image: { src: censusMedia, alt: 'Administrator and nurse reviewing occupancy dashboards on a wall display' },
};

// Rendered by the shared AiCapabilitiesSection. No AI capability pages exist yet, so the cards
// have no `to` (they render as plain cards).
export const ccAiCapabilities = {
  eyebrow: 'Our AI Solutions',
  title: 'Contact Center AI Capabilities',
  description: 'Revolutionize your healthcare workflows with our suite of AI-powered tools.',
  badge: 'Powered by Kratu AI',
  items: [
    {
      title: 'AI Agent for Patient Portal',
      description:
        'Empower patients with an intelligent virtual assistant that answers basic queries and simplifies appointment booking.',
      icon: patientPortalAgentIcon,
      iconSize: [28, 24],
    },
    {
      title: 'Intelligent OCR Reader',
      description:
        'Automated document processing for EHR and RCM intake. Eliminates manual data entry and reduces clerical errors significantly.',
      icon: ocrReaderIcon,
      iconSize: [30, 34],
    },
    {
      title: 'Knowledge Base Q&A',
      description:
        'AI agents trained on Elixir product documentation and selected clinical guidelines to speed up problem resolution.',
      icon: knowledgeBaseIcon,
      iconSize: [30, 27],
    },
  ],
};
