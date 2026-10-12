import copilotIcon from '../assets/home/solutions/elixir-copilot-icon.png';
import notesIcon from '../assets/home/solutions/clinical-notes-summarization-icon.png';
import eligibilityIcon from '../assets/home/solutions/insurance-eligibility-icon.png';
import labIcon from '../assets/home/solutions/lab-result-analysis-icon.png';
import claimIcon from '../assets/home/solutions/claim-rejection-prediction-icon.png';
import portalIcon from '../assets/home/solutions/patient-portal-agent-icon.png';

export const solutions = [
  {
    icon: copilotIcon,
    title: 'Elixir Co-Pilot (Clinical Assistant)',
    description:
      'Real-time clinical assistant that suggests documentation updates and flags potential issues during charting.',
  },
  {
    icon: notesIcon,
    title: 'Clinical Notes Summarization',
    description:
      'Instantly transforms lengthy, unstructured clinical notes into concise, EHR-ready summaries.',
  },
  {
    icon: eligibilityIcon,
    title: 'Insurance Eligibility Summarization',
    description:
      'Automatically parses complex insurance documents to provide clinicians with clear eligibility details and coverage limits.',
  },
  {
    icon: labIcon,
    title: 'Lab Result Analysis & Q&A',
    description:
      'Interact with lab data using natural language queries to identify trends or specific findings across patient history.',
  },
  {
    icon: claimIcon,
    title: 'Claim Rejection Prediction',
    description:
      'Flags claims that are likely to be rejected before submission, reducing revenue cycle overhead for your staff.',
  },
  {
    icon: portalIcon,
    title: 'AI Agent for Patient Portal',
    description:
      'Empowers patients with an intelligent virtual assistant that answers basic queries and simplifies appointment booking.',
  },
];
