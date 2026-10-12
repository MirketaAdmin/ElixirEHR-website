// EVV for Salesforce Field Service page content (Figma frame of the same name). Copy is
// reproduced verbatim.

// Same Figma "missing image" hero box as the Denial Management frame (pixel-identical export).
import heroMediaPlaceholder from '../assets/denial-management/hero-media-placeholder.png';
import iconCheckInOut from '../assets/evv-field-service/icon-feature-check-in-out.png';
import iconGpsGeofencing from '../assets/evv-field-service/icon-feature-gps-geofencing.png';
import iconOffline from '../assets/evv-field-service/icon-feature-offline.png';
import iconSupervisorExceptions from '../assets/evv-field-service/icon-feature-supervisor-exceptions.png';
import iconSignature from '../assets/evv-field-service/icon-feature-signature.png';
import iconAudit from '../assets/evv-field-service/icon-feature-audit.png';
import iconMobile from '../assets/evv-field-service/icon-mobile.png';
import iconDesktop from '../assets/evv-field-service/icon-desktop.png';
import iconCheckCircle from '../assets/evv-field-service/icon-check-circle.png';
import iconExceptionMissed from '../assets/evv-field-service/icon-exception-missed.png';
import iconExceptionLate from '../assets/evv-field-service/icon-exception-late.png';
import iconExceptionGeofence from '../assets/evv-field-service/icon-exception-geofence.png';
import iconExceptionManual from '../assets/evv-field-service/icon-exception-manual.png';
import iconSalesforceCloud from '../assets/evv-field-service/icon-salesforce-cloud.png';
import iconElixir from '../assets/evv-field-service/icon-elixir.png';
import iconCheckYellow from '../assets/evv-field-service/icon-check-yellow.png';
import iconBadgeCheckYellow from '../assets/evv-field-service/icon-badge-check-yellow.png';

export const fsHero = {
  currentPage: 'EVV for Salesforce Field Service',
  titleLines: ['Salesforce-Native EVV', 'for Field Service, Home', 'Care, EHR & Billing'],
  // The whole title is white in this frame (no accent).
  titleAccent: [],
  description:
    'Extend Salesforce Field Service with healthcare-specific Electronic Visit Verification. Elixir connects GPS check-in/check-out, geofencing, service authorizations, care plans, supervisor exceptions, EVV compliance and billing—within your Salesforce ecosystem.',
  // No destinations in the frame: the demo CTA uses /request-demo, as on the other pages; the
  // second CTA scrolls to this page's EVV features section.
  primaryCta: { label: 'Request EVV Demo', to: '/request-demo' },
  secondaryCta: { label: 'Explore EVV Features', href: '#evv-features' },
  media: {
    src: heroMediaPlaceholder,
    alt: 'Image placeholder',
  },
};

export const fsSteps = ['Schedule', 'Caregiver Visit', 'EVV', 'Documentation', 'Supervisor Review', 'Billing'];

export const fsBuiltFor = {
  eyebrow: 'Salesforce Field Service + Healthcare EVV',
  title: 'Salesforce Field Service EVV Built for Home and Community-Based Care',
  description:
    'Salesforce Field Service is powerful for scheduling, dispatching and managing mobile work. Elixir complements it with the healthcare-specific EVV, clinical and billing controls needed around a home visit.',
  // The tiles carry short text marks in the frame ("SF", "360°", "$"), not icons.
  items: [
    {
      mark: 'SF',
      title: 'Complement Salesforce Field Service',
      text: 'Keep Salesforce scheduling and field operations while Elixir adds electronic visit verification and healthcare-specific controls around each visit.',
    },
    {
      mark: '360°',
      title: 'Keep EVV in the Salesforce Workflow',
      text: 'Connect visit verification to the environment used by supervisors, care teams, operations, compliance and billing staff.',
    },
    {
      mark: '$',
      title: 'Connect the Visit to the Claim',
      text: 'Use EVV verification and exception resolution as part of claim readiness instead of finding problems after billing.',
    },
  ],
};

export const fsFeatures = {
  eyebrow: 'Electronic Visit Verification',
  title: 'Native Salesforce EVV Software with GPS, Geofencing & Offline Visit Verification',
  description:
    'Elixir is designed for home health, personal care, behavioral health, skilled nursing and other home- and community-based service models where a visit needs to be verifiable, auditable and connected to care delivery.',
  items: [
    {
      title: 'Mobile Check-In & Check-Out',
      text: 'Capture visit start/end time and location and associate the activity to the scheduled caregiver and client visit.',
      icon: iconCheckInOut,
    },
    {
      title: 'GPS & Configurable Geofencing',
      text: 'Compare actual caregiver location with the expected service location and flag out-of-geofence visits for review.',
      icon: iconGpsGeofencing,
    },
    {
      title: 'Offline EVV',
      text: 'Support low-connectivity field work with queued visit activity and synchronization while retaining original visit timestamps.',
      icon: iconOffline,
    },
    {
      title: 'Supervisor Exception Management',
      text: 'Route missed check-ins, late arrivals, geofence exceptions, manual entries and unscheduled visits into controlled workflows.',
      icon: iconSupervisorExceptions,
    },
    {
      title: 'Signature & Visit Documentation',
      text: 'Capture client signatures, caregiver attestations, visit notes and task completion within the visit workflow.',
      icon: iconSignature,
    },
    {
      title: 'Audit & Compliance History',
      text: 'Maintain traceable timestamps, location information, edits, reason codes, approvals and exception resolution.',
      icon: iconAudit,
    },
  ],
  // The frame shows an image placeholder and a "Suggested screenshot placement" note here; both are
  // reproduced as drawn (see DESIGN-SYSTEM.md open questions).
  screenshotNote: {
    icon: { src: iconMobile, width: 28, height: 28 },
    title: 'Suggested screenshot placement',
    paragraphs: [
      'Use a caregiver mobile screen here because this section talks about GPS, geofencing and offline visit verification.',
      "Recommended screen ideas: Today's Schedule, Check-In screen, Check-Out screen or Client Signature screen.",
      'Developer can replace this placeholder block with a PNG, JPG, embedded Figma frame or HTML-based product mockup.',
    ],
  },
};

export const fsComplement = {
  eyebrow: 'Built to complement Salesforce',
  title: 'Field Service Manages the Workforce. Elixir Adds the Healthcare Visit.',
  description:
    'For organizations already investing in Salesforce, Elixir extends the platform instead of forcing home-care operations into another disconnected application.',
  columns: [
    {
      title: 'Salesforce Field Service',
      icon: iconSalesforceCloud,
      itemIcon: iconCheckYellow,
      items: ['Scheduling', 'Workforce assignment', 'Dispatch', 'Field operations'],
    },
    {
      title: 'Elixir',
      icon: iconElixir,
      itemIcon: iconBadgeCheckYellow,
      items: ['EVV + geofencing', 'EHR + care plans', 'Authorizations', 'RCM + claim readiness'],
    },
  ],
};

export const fsConnected = {
  eyebrow: 'One connected healthcare workflow',
  title: 'Integrated EVV, EHR and RCM on Salesforce',
  description:
    'EVV becomes more valuable when it is connected to the operational, clinical and revenue-cycle record. Elixir keeps the home visit connected from schedule through service delivery and billing.',
  items: [
    { title: 'Patient / Client', text: 'Connect the visit to the individual receiving care.' },
    { title: 'Scheduling', text: 'Match check-in to caregiver, client and service window.' },
    { title: 'Authorization', text: 'Validate service type, dates and remaining units.' },
    { title: 'Care Plan', text: 'Bring tasks and ADLs into the visit workflow.' },
    { title: 'Credentials', text: 'Support caregiver qualification checks.' },
    { title: 'Documentation', text: 'Associate notes, signatures and activities.' },
    { title: 'EVV Exceptions', text: 'Resolve issues before they reach billing.' },
    { title: 'RCM / Claims', text: 'Use verification status for claim readiness.' },
  ],
  banner:
    'Field Service tells you where your caregiver should be. Elixir EVV verifies the visit. Elixir EHR records the care. Elixir RCM gets the visit ready to bill.',
  screenshotNote: {
    icon: { src: iconDesktop, width: 32, height: 28 },
    title: 'Suggested screenshot placement',
    paragraphs: [
      'Use an operational screen here because this section discusses connected workflows.',
      'Recommended screen ideas: Visit record, Authorization validation, Care Plan tasks, or Billing readiness view.',
      'This is a good place to show how EVV sits inside the broader EHR and RCM experience.',
    ],
  },
};

export const fsExceptions = {
  eyebrow: 'Exception management',
  title: 'Supervisor EVV Exception Management on Salesforce',
  description:
    'Turn EVV exceptions into manageable workflows rather than downstream billing problems. Supervisors can review flagged visits, approve or reject corrections and preserve the rationale as part of the audit history.',
  items: [
    { title: 'Missed Check-In / Out', text: 'Capture and route missing verification.', icon: iconExceptionMissed },
    { title: 'Late / Early Visit', text: 'Flag schedule adherence exceptions.', icon: iconExceptionLate },
    { title: 'Geofence Violation', text: 'Review visits outside the service radius.', icon: iconExceptionGeofence },
    { title: 'Manual Entry', text: 'Require supervisor approval before billing.', icon: iconExceptionManual },
  ],
};

export const fsMedicaidData = {
  eyebrow: 'Medicaid EVV',
  title: 'Medicaid EVV Compliance Data Captured in the Salesforce Visit Workflow',
  description:
    "Elixir's EVV design captures the core visit information associated with Electronic Visit Verification while keeping that information connected to the underlying care record.",
  columns: ['EVV Information', 'How Elixir Captures It'],
  rows: [
    ['Type of service performed', 'Visit linked to the service type and authorization'],
    ['Individual receiving the service', 'Patient / client associated with the visit'],
    ['Date of service', 'Visit date and check-in activity'],
    ['Location of service delivery', 'GPS / location information associated with check-in and check-out'],
    ['Individual providing the service', 'Authenticated caregiver / field worker'],
    ['Service start and end time', 'Check-in and check-out timestamps'],
  ],
};

export const fsAggregator = {
  eyebrow: 'Aggregator connectivity',
  title: 'Salesforce EVV Integration for State & Payer Workflows',
  paragraphs: [
    'Elixir is designed with an EVV aggregator connector framework so visit data can be routed according to payer and state requirements, including open-model submission and other required export/integration patterns.',
    'Depending on the state and program, integrations may involve platforms such as Sandata, HHAeXchange or other designated EVV systems. Connector availability should be confirmed for the specific payer and state implementation.',
  ],
  status: {
    title: 'Track EVV Submission Status',
    items: [
      { title: 'Pending', text: 'Awaiting submission' },
      { title: 'Submitted', text: 'Sent to aggregator' },
      { title: 'Accepted', text: 'Submission accepted' },
      { title: 'Rejected', text: 'Surface reason for correction' },
    ],
  },
};

export const fsWhyNative = {
  eyebrow: 'Salesforce home care solution',
  title: 'Why Use a Salesforce-Native EVV Solution?',
  items: [
    {
      title: 'Reduce Application Silos',
      text: 'Keep visit verification closer to scheduling, care management, compliance and billing instead of creating another EVV data silo.',
    },
    {
      title: 'Improve Exception Visibility',
      text: 'Give supervisors visibility into problems while there is still time to correct a visit before downstream billing.',
    },
    {
      title: 'Extend Your Salesforce Investment',
      text: 'Add home-care-specific workflows around Salesforce rather than introducing another disconnected operational platform.',
    },
  ],
};

// Rendered exactly as the RCM FAQ (the site's one FAQ design); only the content is this page's.
// The frame supplies no answer copy, so the items have no `answer` yet and render as static rows
// (see DESIGN-SYSTEM.md open questions). Add `answer` to each item to make it expandable.
export const fsFaq = {
  title: 'Salesforce EVV FAQs',
  items: [
    { question: 'Does Salesforce Field Service include Electronic Visit Verification?' },
    { question: 'Is Elixir EVV native to Salesforce?' },
    { question: 'Can EVV information be connected to EHR and billing?' },
    { question: 'Can Elixir EVV work with Salesforce Field Service?' },
    { question: 'Does Elixir support GPS and geofencing for EVV?' },
    { question: 'Can Elixir integrate with Sandata or other EVV aggregators?' },
  ],
};

// Uses the shared contact form (same fields, styling and submission) without the company field and
// the consent line, which this frame leaves out.
export const fsTalk = {
  eyebrow: 'Talk to Elixir',
  titleLines: ['Ready to Bring EVV', 'into Your Salesforce', 'Home Care Workflow?'],
  description:
    'See how Elixir can complement Salesforce Field Service and connect Electronic Visit Verification with your EHR, care plans, service authorizations and RCM workflows.',
  checkIcon: iconCheckCircle,
  points: [
    'Review your Salesforce Field Service architecture',
    'Discuss state and payer EVV requirements',
    'See the caregiver and supervisor experience',
    'Explore EHR and billing integration',
  ],
  trustedLine: 'Trusted by Enterprise HCBS & Home Health Providers on Salesforce',
  form: {
    fieldNames: ['firstName', 'lastName', 'email', 'phone', 'message'],
    submitLabel: 'Request EVV Demo',
  },
};

// No destinations in the frame: both demo CTAs use /request-demo, as on the other pages.
export const fsCtaBand = {
  title: 'See Salesforce-Native EVV in Elixir',
  description:
    'If you use Salesforce Field Service, Health Cloud, Service Cloud or a Salesforce-based home- care workflow, see how Elixir can connect EVV to the rest of your care-delivery and billing process.',
  cta: { label: 'Request EVV Demo', to: '/request-demo' },
  secondaryCta: { label: 'Schedule a Demo', to: '/request-demo' },
};
