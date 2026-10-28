// Electronic Health Record page content — copy reproduced exactly from the Figma "EHR" frame.

import heroMedia from '../assets/electronic-health-record/hero-media.png';
import iconCustomizable from '../assets/electronic-health-record/icon-customizable.png';
import iconEasyToUse from '../assets/electronic-health-record/icon-easy-to-use.png';
import iconSecure from '../assets/electronic-health-record/icon-secure.png';
import iconConnect from '../assets/electronic-health-record/icon-connect.png';
import patientManagementMedia from '../assets/electronic-health-record/patient-management.png';
import healthcareNotesMedia from '../assets/electronic-health-record/healthcare-notes.png';
import ePrescriptionMedia from '../assets/electronic-health-record/e-prescription.png';
import labOrderingMedia from '../assets/electronic-health-record/lab-ordering.png';
import salesforceIcon from '../assets/electronic-health-record/integration-salesforce.png';
import surescriptsIcon from '../assets/electronic-health-record/integration-surescripts.png';
import hl7FhirIcon from '../assets/electronic-health-record/integration-hl7-fhir.png';
import labNetworksIcon from '../assets/electronic-health-record/integration-lab-networks.png';

export const ehrHero = {
  currentPage: 'EHR',
  titleLines: ['Electronic Health', 'Record (EHR)'],
  titleAccent: '(EHR)',
  description:
    'Elixir is more than just about recording and reporting data. Elixir EHR offers out-of the box functionalities catered to your needs.',
  primaryCta: { label: 'Get a Personalized Demo', to: '/request-demo' },
  media: {
    src: heroMedia,
    alt: 'Physician with a tablet beside a monitor showing a patient dashboard',
    insight: { label: 'AI INSIGHT', text: '90% Less Data Entry' },
  },
};

export const orderFromChaos = {
  title: 'Bringing order to chaos',
  description:
    'Elixir is more than just about recording and reporting data. Elixir EHR offers out-of-the box functionalities catered to your needs.',
  items: [
    {
      title: 'Fully Customizable',
      description: 'Built on the Salesforce platform, Elixir offers complete customizability catered to your needs.',
      icon: iconCustomizable,
    },
    {
      title: 'Easy to use',
      description:
        'A single platform to manage patients, treatment plans and medications, and get a 360 view of the patient lifecycle.',
      icon: iconEasyToUse,
    },
    {
      title: 'Secure & Reliable',
      description: 'HIPAA compliant platform hosted on salesforce cloud for maximum reliability.',
      icon: iconSecure,
    },
    {
      title: 'Connect Anywhere',
      description: 'Achieve greater user experience by connecting with PC, Tablet, or mobile.',
      icon: iconConnect,
    },
  ],
};

// Image/text splits. `mediaSide` and `tone` follow the frame; each image is the photo together
// with its tilted backdrop, as exported.
export const ehrFeatures = [
  {
    id: 'patient-management',
    title: 'Patient Management',
    paragraphs: [
      'Elixir’s patient management system ensures a seamless flow of patient information, enabling care teams to deliver more personalized and efficient care. With real-time access to patient records, providers can create faster and more accurate treatment plans.',
      'Designed as a powerful medical practice management software, Elixir combines clinical workflows with healthcare CRM capabilities to improve collaboration between care teams and patients. Secure communication via messaging, email, and notifications strengthens patient engagement while maintaining healthcare cybersecurity standards.',
    ],
    image: { src: patientManagementMedia, alt: 'Clinician showing a patient information on a tablet across a desk' },
    mediaSide: 'left',
    tone: 'surface',
  },
  {
    id: 'healthcare-notes',
    title: 'Intelligent and customizable Healthcare Notes',
    paragraphs: [
      'Simplify documentation with advanced clinical documentation tools powered by AI in healthcare. Elixir allows providers to create fully customizable templates and digital forms tailored to their workflows.',
      'With smart automation features like auto-fill, AI-powered text suggestions, and real-time data sync, documentation becomes faster and more accurate. This reduces administrative burden while improving compliance with certified EHR technology standards. Healthcare professionals can also upload images, annotate reports, and export notes in secure formats.',
    ],
    image: { src: healthcareNotesMedia, alt: 'Clinician reviewing a patient note on a tablet' },
    mediaSide: 'right',
    tone: 'white',
  },
  {
    id: 'e-prescription',
    title: 'E-prescription & Medication Management',
    paragraphs: [
      'Elixir’s unified dashboard streamlines e-prescription and medication management, giving providers a complete view of patient medication history in one place.',
      'With seamless Salesforce EHR integration and Surescripts connectivity, clinicians can prescribe medications securely and stay compliant with regulatory standards. Built-in alerts for allergies, drug interactions, and dosage issues support safer clinical decisions. This integrated approach improves efficiency while supporting healthcare automation.',
    ],
    image: { src: ePrescriptionMedia, alt: 'Physician using a tablet in a clinic' },
    mediaSide: 'left',
    tone: 'surface',
  },
  {
    id: 'lab-ordering',
    title: 'Lab Ordering System',
    paragraphs: [
      'Elixir’s intelligent lab management features simplify test ordering and result tracking through a modern digital healthcare platform.',
      'Integrated with leading lab networks, the system accelerates diagnostics while supporting healthcare analytics software for deeper insights. Real-time dashboards powered by healthcare cloud solutions help providers monitor lab orders, results, and patient trends. With advanced analytics, healthcare teams can quickly identify abnormal results, enabling proactive care.',
    ],
    image: { src: labOrderingMedia, alt: 'Physicians reviewing lab results on a tablet in a laboratory' },
    mediaSide: 'right',
    tone: 'white',
  },
];

export const ehrInfoCards = [
  {
    title: 'Business Intelligence and Reporting',
    paragraphs: [
      'Elixir leverages advanced healthcare analytics and reporting tools to deliver actionable insights across clinical and operational workflows.',
      'With built-in Revenue Cycle Management (RCM Healthcare) capabilities, providers can optimize billing, reduce claim denials, and improve financial performance. Integration with Salesforce Billing and RCM solutions ensures efficient medical billing services. Track performance and analyze trends with real-time dashboards designed for healthcare operations management.',
    ],
    tone: 'primary',
  },
  {
    title: 'Auditing & Alerts & Cybersecurity',
    paragraphs: [
      'Stay compliant with evolving regulations using automated auditing and alert systems. Elixir ensures every process—from documentation to approvals is tracked and validated. Real-time alerts notify teams of pending tasks, ensuring timely action.',
      'Built with robust healthcare compliance software and healthcare cybersecurity, the system protects sensitive patient data while maintaining operational transparency and strict HIPAA compliance. Time tracking and reporting features also support denial management.',
    ],
    tone: 'light',
  },
];

export const integrationPortfolio = {
  title: 'Diverse Integration Portfolio',
  items: [
    { label: 'Salesforce', icon: salesforceIcon, iconWidth: 34 },
    { label: 'Surescripts', icon: surescriptsIcon, iconWidth: 31 },
    { label: 'HL7 / FHIR', icon: hl7FhirIcon, iconWidth: 34 },
    { label: 'Lab Networks', icon: labNetworksIcon, iconWidth: 37 },
  ],
};

export const ehrCtaBand = {
  // Line break follows the Figma frame.
  title: ['Click Here To Be Future Ready', 'With Elixir'],
  description:
    'Contact us for a Demo today and we will help you identify the Right Solution for your Healthcare Practice. Our clinical team is ready to support your transition.',
  cta: { label: 'Contact Us Now', to: '/company/contact' },
};
