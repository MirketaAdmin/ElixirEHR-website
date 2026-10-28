// Billing page content — copy reproduced exactly from the Figma "Billing" frame.
// Photos and icons are 1× crops of the frame export (no source files were supplied); the AI card
// icons reuse the Home "Kratu AI - Full Capabilities" icons, which match the frame.

import heroMedia from '../assets/billing/hero-media.png';
import efficiencyIcon from '../assets/patient-portal/badge-efficiency.png';
import statErrorsIcon from '../assets/billing/stat-errors.png';
import statDenialsIcon from '../assets/billing/stat-denials.png';
import statClaimsIcon from '../assets/billing/stat-claims.png';
import patientPortalAgentIcon from '../assets/home/ai-capabilities/patient-portal-agent-icon.png';
import insuranceEligibilityIcon from '../assets/home/ai-capabilities/insurance-eligibility-icon.png';
import claimRejectionPredictionIcon from '../assets/home/ai-capabilities/claim-rejection-prediction-icon.png';
import ocrReaderIcon from '../assets/billing/ai-ocr-reader-icon.png';
import ecosystemMedia from '../assets/billing/ecosystem-media.png';
import ehrCrmIcon from '../assets/billing/ecosystem-ehr-crm.png';
import engagementIcon from '../assets/billing/ecosystem-engagement.png';
import insightsMedia from '../assets/billing/insights-media.png';
import claimsIcon from '../assets/billing/insight-claims.png';
import submissionIcon from '../assets/billing/insight-submission.png';
import paymentsIcon from '../assets/billing/insight-payments.png';

export const billingHero = {
  currentPage: 'Billing',
  titleLines: ['360° AI-Powered Patient', 'Intake Management', 'Solution'],
  titleAccent: '360° AI-Powered',
  description:
    "Elixir's 360° Patient Intake Management Solution combines healthcare automation, intelligent workflows, and Salesforce EHR integration.",
  // Same buttons as the About Us hero; "Explore Features" scrolls to this page's AI capabilities.
  primaryCta: { label: 'Take A Test Drive', to: '/request-demo' },
  secondaryCta: { label: 'Explore Features', href: '#billing-ai-capabilities' },
  media: { src: heroMedia, alt: 'Clinician pointing at a patient overview dashboard on a monitor during a team meeting' },
  // The frame's badge over the hero image (same badge as the Patient Portal hero).
  badge: { label: 'Efficiency', text: 'Intake time reduced by 40%', icon: efficiencyIcon },
};

export const billingStats = {
  title: 'Revenue Cycle Management platform that results in significant profitability',
  description: "Elixir's capabilities can help avoid most medical billing errors and optimize your entire financial lifecycle.",
  // `accent` is the coloured bar along each card's bottom edge.
  items: [
    { prefix: 'Nearly', value: '75%', text: 'Of all medical bills contain errors', icon: statErrorsIcon, accent: 'lime' },
    { prefix: 'Up to', value: '90%', text: 'Of payer denials are avoidable', icon: statDenialsIcon, accent: 'purple' },
    { prefix: 'Nearly', value: '60%', text: 'Of all Medical Claims Contain Errors', icon: statClaimsIcon, accent: 'lime' },
  ],
};

// Rendered by the shared AiCapabilitiesSection. No AI capability pages exist yet, so the cards
// have no `to` (they render as plain cards).
export const billingAiCapabilities = {
  eyebrow: 'Our AI Solutions',
  title: 'Elixir RCM AI Capabilities',
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
      title: 'Insurance Eligibility Summarization',
      description:
        'Automatically parse complex insurance documents to provide clinicians with clear eligibility statuses and coverage limits.',
      icon: insuranceEligibilityIcon,
      iconSize: [20, 25],
    },
    {
      title: 'Claim Rejection Prediction',
      description:
        'Our neural models flag claims at high risk of denial before they are submitted, reducing revenue cycle overhead.',
      icon: claimRejectionPredictionIcon,
      iconSize: [23, 23],
    },
    {
      title: 'Intelligent OCR Reader',
      description:
        'Automated document processing for EHR and RCM intake. Eliminates manual data entry and reduces clerical errors significantly.',
      icon: ocrReaderIcon,
      iconSize: [30, 34],
    },
  ],
};

export const billingEcosystem = {
  titleLines: ['Built for a Connected', 'Healthcare Ecosystem'],
  // `strong` is bolded inside the intro, as in the frame.
  intro: { before: 'Elixir integrates seamlessly with your broader ', strong: 'healthcare IT solutions', after: ', including:' },
  items: [
    {
      title: 'EHR & CRM Integration',
      text: 'Seamless connection with electronic health record systems and Salesforce EHR integration for unified workflows.',
      icon: ehrCrmIcon,
    },
    {
      title: 'Patient Engagement',
      text: 'Patient portal solutions and telehealth software platforms for better engagement and telemedicine solutions.',
      icon: engagementIcon,
    },
  ],
  image: { src: ecosystemMedia, alt: 'Clinician in scrubs working across three monitors in an open-plan office' },
};

export const billingInsights = {
  badge: 'Business Intelligence',
  titleLines: ['Actionable Insights', '& Operational', 'Analytics'],
  description:
    'Gain complete visibility into your financial health. Our platform provides real-time analytics to drive strategic decision-making.',
  items: [
    { text: 'Automate claim generation and verify status in real-time.', icon: claimsIcon },
    { text: 'Electronic submission to avoid delays in cash flow.', icon: submissionIcon },
    { text: 'Effectively track and manage patient payments.', icon: paymentsIcon },
  ],
  image: { src: insightsMedia, alt: 'Clinician presenting financial analytics dashboards to colleagues in a meeting room' },
};

// Drawn as text in the frame (no logo files).
export const billingPartners = {
  title: 'Trusted Integrations & Partners',
  names: ['Change Healthcare', 'CLAIM MD', 'VerifyTX', 'surescripts'],
};

// The frame shows the questions only; no answers were supplied, so they render as static rows.
export const billingFaq = {
  titleLines: ['Got', 'Questions?'],
  description: 'Find answers to the most common questions about our AI-driven revenue cycle management platform.',
  items: [
    { question: '1. What is AI-driven healthcare billing?' },
    { question: '2. How does AI improve revenue cycle management (RCM) in healthcare?' },
    { question: '3. What are the benefits of using Elixir for healthcare billing?' },
    { question: '4. How does real-time insurance verification work?' },
    { question: '5. Can Elixir help reduce claim denials?' },
  ],
};

// "Contact Us" goes to the Contact Us page; "Call Us Today" dials the number from the Contact section.
export const billingCtaBand = {
  title: 'Click Here To Be Future Ready With Elixir',
  cta: { label: 'Contact Us', to: '/contact-us' },
  secondaryCta: { label: 'Call Us Today', href: 'tel:+18556475382' },
};
