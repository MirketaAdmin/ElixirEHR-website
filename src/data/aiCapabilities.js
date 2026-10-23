// "Our AI Solutions — Kratu AI - Full Capabilities" content, shared by Home, What Is Elixir, Why Elixir and EHR
// (identical in their Figma frames). A page with its own copy passes `content` to AiCapabilitiesSection.

import kratuClinicalAssistantIcon from '../assets/home/ai-capabilities/kratu-clinical-assistant-icon.png';
import clinicalNotesSummarizationIcon from '../assets/home/ai-capabilities/clinical-notes-summarization-icon.png';
import insuranceEligibilityIcon from '../assets/home/ai-capabilities/insurance-eligibility-icon.png';
import labResultAnalysisIcon from '../assets/home/ai-capabilities/lab-result-analysis-icon.png';
import claimRejectionPredictionIcon from '../assets/home/ai-capabilities/claim-rejection-prediction-icon.png';
import patientPortalAgentIcon from '../assets/home/ai-capabilities/patient-portal-agent-icon.png';

export const aiCapabilities = {
  eyebrow: 'Our AI Solutions',
  title: 'Kratu AI - Full Capabilities',
  description:
    "Kratu is Elixir's AI intelligence layer - built in, not bolted on. From clinical notes to claim defense, Kratu acts across every workflow.",
  badge: 'Powered by Kratu AI',
  items: [
    {
      title: 'Kratu AI Clinical Assistant',
      description:
        'Real-time clinical assistance that suggests documentation updates and flags potential drug-to-drug interactions during the encounter.',
      icon: kratuClinicalAssistantIcon,
      iconSize: [24, 25],
      to: '/ai-engine/clinical-assistant',
    },
    {
      title: 'Clinical Notes Summarization',
      description:
        'Instantly transform long patient history and encounter recordings into structured, concise clinical notes following SOAP formats.',
      icon: clinicalNotesSummarizationIcon,
      iconSize: [20, 25],
      to: '/ai-engine/clinical-notes-summarization',
    },
    {
      title: 'Insurance Eligibility Summarization',
      description:
        'Automatically parse complex insurance documents to provide clinicians with clear eligibility statuses and coverage limits.',
      icon: insuranceEligibilityIcon,
      iconSize: [20, 25],
      to: '/ai-engine/insurance-eligibility',
    },
    {
      title: 'Lab Result Analysis & Q&A',
      description:
        'Interact with lab data using natural language queries to identify trends or specific abnormal findings across patient history.',
      icon: labResultAnalysisIcon,
      iconSize: [28, 27],
      to: '/ai-engine/lab-result-analysis',
    },
    {
      title: 'Claim Rejection Prediction',
      description:
        'Our neural models flag claims at high risk of denial before they are submitted, reducing revenue cycle overhead.',
      icon: claimRejectionPredictionIcon,
      iconSize: [23, 23],
      to: '/ai-engine/claim-rejection-prediction',
    },
    {
      title: 'AI Agent for Patient Portal',
      description:
        'Empower patients with an intelligent virtual assistant that answers basic queries and simplifies appointment booking.',
      icon: patientPortalAgentIcon,
      iconSize: [28, 24],
      to: '/ai-engine/patient-portal-agent',
    },
  ],
};
