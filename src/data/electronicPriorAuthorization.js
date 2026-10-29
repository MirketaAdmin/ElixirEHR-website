// Electronic Prior Authorization page (Figma "Electronic Prior Authorization", 1280 frame), a child
// page of Revenue Cycle Management (/revenue-cycle-management/electronic-prior-authorization).
// Copy is reproduced verbatim from the frame; forced mid-sentence line breaks in the frame's
// paragraphs are dropped (see DESIGN-SYSTEM.md).
import heroMediaPlaceholder from '../assets/denial-management/hero-media-placeholder.png';
import serviceLevelIcon from '../assets/electronic-prior-authorization/icon-service-level.png';
import bulkEdiIcon from '../assets/electronic-prior-authorization/icon-bulk-edi.png';
import batchIcon from '../assets/electronic-prior-authorization/icon-batch.png';
import screenPriorAuthorizations from '../assets/electronic-prior-authorization/screen-prior-authorizations.png';
import screenAddPaServices from '../assets/electronic-prior-authorization/screen-add-pa-services.png';
import screenAuthorizationPackage from '../assets/electronic-prior-authorization/screen-authorization-package.png';
import screenUtilizationReview from '../assets/electronic-prior-authorization/screen-utilization-review.png';
import screenSupportingDocuments from '../assets/electronic-prior-authorization/screen-supporting-documents.png';
import screenAppeal from '../assets/electronic-prior-authorization/screen-appeal.png';

export const epaHero = {
  currentPage: 'Electronic Prior Authorization',
  titleLines: ['Electronic Prior', 'Authorization Software', 'for Connected Care'],
  // The whole title is white in this frame (no accent).
  titleAccent: [],
  description:
    'Manage prior authorizations alongside patient, clinical, insurance, and revenue workflows—all in one Salesforce-native platform.',
  primaryCta: { label: 'Request a Demo', to: '/request-demo' },
  // No destination in the frame; What Is Elixir is the site's platform overview.
  secondaryCta: { label: 'Explore Elixir', to: '/why-elixir' },
  // The frame shows Figma's grey "missing image" box on the tilted backdrop (the same export as
  // Denial Management): the hero photo has not been supplied.
  media: {
    src: heroMediaPlaceholder,
    alt: 'Image placeholder',
  },
};

export const epaPath = {
  title: 'From Clinical Need to Authorized Care',
  description: 'One connected path across the Elixir platform.',
  steps: [
    { title: 'Clinical Need', text: 'A provider orders a service during the care episode.' },
    {
      title: 'Electronic Prior Authorization',
      text: 'The request is built from existing patient, insurance and clinical data.',
    },
    { title: 'Payer', text: 'Submitted through the configured payer or clearinghouse channel.' },
    { title: 'Authorization Decision', text: 'Decisions recorded per service, with numbers, dates and approved units.' },
    { title: 'Care & RCM', text: 'Approved services flow into scheduling, documentation and billing.' },
  ],
};

export const epaAi = {
  title: 'AI-Powered Prior Authorization',
  description:
    "Elixir's AI Co-Pilot surfaces guidance at each stage of the authorization lifecycle. Every insight is assistive - reviewers confirm before anything is submitted.",
  stages: [
    {
      title: 'Before Submission',
      items: [
        'Medical necessity assessment',
        'Authorization readiness scoring',
        'Missing documentation detection',
        'CPT-diagnosis validation',
        'Payer policy review',
      ],
      outcome: 'Prevent denials',
    },
    {
      title: 'During Submission',
      items: [
        'Clinical narrative generation',
        'Prior authorization letter generation',
        'Supporting document selection',
        'Submission quality review',
      ],
      outcome: 'Assisted drafting',
    },
    {
      title: 'After Submission',
      items: ['Decision prediction', 'Turnaround prediction', 'Additional information request support'],
      outcome: 'Tracking',
    },
    {
      title: 'Denial Intelligence',
      items: ['Denial prediction', 'Root cause analysis', 'Appeal recommendation', 'Appeal letter generation'],
      outcome: 'Recovery',
    },
  ],
  footnote: 'Capability availability varies by release. Roadmap items are marked and confirmed during scoping.',
};

export const epaSharedData = {
  title: 'Prior authorization works better when it shares data with the rest of the record',
  items: [
    {
      icon: { src: serviceLevelIcon, size: [12, 21] },
      title: 'Service-Level Control',
      text: 'Each requested service carries its own decision, authorization number, dates and approved units, so a partially approved request stays accurate rather than being flattened into one status.',
    },
    {
      icon: { src: bulkEdiIcon, size: [21, 19] },
      title: 'Bulk EDI 270/271',
      text: 'Select insurance records and use Generate Bulk EDI 270 to send eligibility requests for many patients in one action.',
      badge: 'Standard product feature',
    },
    {
      icon: { src: batchIcon, size: [21, 21] },
      title: 'Automated batch verification',
      text: 'Schedule real-time checks for upcoming appointments or your active patient list, so coverage is confirmed before the day starts.',
      badge: 'Configured for your organization',
    },
  ],
};

export const epaWorkflow = {
  title: 'The Electronic Prior Authorization Workflow',
  description: 'Each step happens inside Elixir, against the same patient and care episode record.',
  steps: [
    { title: 'Identify Need', text: 'Authorization requirement flagged during the clinical workflow.' },
    {
      title: 'Create Authorization',
      text: 'Start from the care episode or utilization review: parent data carries over.',
    },
    { title: 'Select Services', text: "Choose procedures from the patient's ordered services; add units and dates." },
    { title: 'Add Documentation', text: 'Attach clinical evidence and medical necessity as Salesforce Files.' },
    { title: 'Review', text: 'Validate completeness before anything leaves the organization.' },
    { title: 'Submit', text: 'Send through the configured payer, portal, fax or clearinghouse channel.' },
    { title: 'Track Payer Response', text: 'Monitor status and manage additional information requests.' },
    { title: 'Record Decision', text: 'Capture the outcome per service with numbers, dates and restrictions.' },
    { title: 'Monitor Authorization', text: 'Track used and remaining units against the approval window.' },
    { title: 'Appeal if Needed', text: 'Create an appeal from denied or partially approved services.' },
  ],
};

export const epaBenefits = {
  title: 'Benefits of Prior Authorization Automation',
  description: 'What teams gain when authorization stops living in a separate system.',
  items: [
    'Centralized authorization information across the organization',
    'Less manual administrative and re-keying work',
    'Clinical and authorization workflows in one system',
    'Clearer visibility into where each request stands',
    'Service-level authorization tracking, not just request-level',
    'Reduced duplicate data entry between systems',
    'Documentation connected to the request it supports',
    'Utilization management connected to authorization',
    'Appeals connected to the original decision',
    'Authorization data available to downstream RCM workflows',
  ],
};

export const epaAudiences = {
  title: 'Who Uses Electronic Prior Authorization Software?',
  description:
    'Elixir suits clinical organizations where authorization volume, payer variety or multi-site coordination makes manual tracking costly.',
  items: [
    {
      title: 'Behavioral Health Organizations',
      text: 'Recurring authorizations, unit-based approvals and frequent continued-stay reviews across long treatment episodes.',
    },
    {
      title: 'Specialty Clinics',
      text: 'High-cost imaging, procedures and therapies where medical necessity documentation drives the decision.',
    },
    {
      title: 'Medical Groups',
      text: 'Many providers and payers, with authorization work spread across clinical and administrative staff.',
    },
    {
      title: 'Ambulatory Care Organizations',
      text: 'Scheduled procedures where authorization timing directly affects whether care can proceed.',
    },
    {
      title: 'Multi-Location Organizations',
      text: 'Shared authorization queues and consistent workflow across sites and service lines.',
    },
    {
      title: 'Healthcare Billing Organizations',
      text: 'Teams managing authorization on behalf of providers, needing an auditable trail per request.',
    },
    {
      title: 'Complex Payer Environments',
      text: 'Organizations working across many payer rules, portals and submission channels at once.',
    },
  ],
};

// The frame draws these as plain cards (no links); `current` marks this page's module, which the
// frame outlines in purple.
export const epaWhyElixir = {
  title: 'Why Elixir for Electronic Prior Authorization?',
  description:
    'EHR, prior authorization, utilization management, RCM and patient engagement run on one Salesforce-native healthcare platform, against shared data.',
  modules: [
    { title: 'EHR', text: 'Patient, care episode, encounters and clinical documentation.' },
    { title: 'Prior Authorization', text: 'Requests, services, submissions, decisions and appeals.', current: true },
    { title: 'Utilization Management', text: 'Admission, concurrent and retrospective reviews.' },
    { title: 'Revenue Cycle Management', text: 'Claims, remits, payments and patient statements.' },
    { title: 'Patient Engagement', text: 'Communication and coordination across the episode.' },
  ],
};

// Destinations are not in the frame: the demo CTA matches the other pages, and the expert CTA goes
// to Contact Us (its form takes consultation requests).
export const epaCtaBand = {
  eyebrow: 'Ready to change how you handle prior authorization?',
  title: ['Connect Prior Authorization to the', 'Rest of Your Healthcare Workflow'],
  cta: { label: 'Request a Demo', to: '/request-demo' },
  secondaryCta: { label: 'Talk to an Elixir Expert', to: '/contact-us' },
};

// Seven alternating feature rows. `media` is a window mock-up (title bar drawn in HTML, the
// screenshot body exported from the frame at 1×) or, for the clearinghouse row, the EDI 278 flow
// card. `mediaFirst` puts the media in the left column. badgeTone: 'lavender' | 'green' | 'yellow'.
export const epaFeatures = [
  {
    id: 'prior-authorization-management',
    eyebrow: 'Prior Authorization Management',
    title: 'Prior Authorization Management Software Built Around the Request',
    text: 'Create authorization requests directly from clinical workflows, with the patient, care episode, insurance and payer already attached. Capture everything a payer asks for without leaving the record.',
    points: [
      'Initiate authorization from the care episode or utilization review',
      'Capture CPT and procedure information, requested units, service dates and place of service',
      'Record clinical information, medical necessity and supporting documentation',
      'Track submission, payer follow-up and additional information requests',
      'Manage denied and partially approved services, then initiate appeals',
    ],
    media: {
      title: 'Salesforce Lightning • Prior Authorizations',
      badge: 'Active Records',
      badgeTone: 'lavender',
      image: { src: screenPriorAuthorizations, size: [554, 208], alt: 'Salesforce list view of open prior authorizations with patient, care episode, payer, priority and status columns' },
    },
  },
  {
    id: 'authorization-decisions',
    eyebrow: 'Authorization Decisions',
    title: 'Service-Level Authorization Decisions',
    text: 'A single authorization can contain several requested services, and payers rarely treat them identically. Elixir records the decision against each service so teams can see exactly what was approved.',
    points: [
      'Pending, Approved, Partially Approved and Denied tracked per service',
      'Authorization number, start date and end date held at the service level',
      'Approved units, restrictions, decision date and approval notes captured individually',
      'Used and remaining units visible against each approved service',
    ],
    mediaFirst: true,
    media: {
      title: 'Add PA Services Modal',
      badge: 'Service Level Details',
      badgeTone: 'green',
      image: { src: screenAddPaServices, size: [554, 412], alt: 'Add PA Services form with service, procedure, units, dates and clinical information fields' },
    },
  },
  {
    id: 'salesforce-native',
    eyebrow: 'Salesforce-Native Healthcare Platform',
    title: 'Salesforce-Native Electronic Prior Authorization',
    text: 'Elixir is built natively on Salesforce, so prior authorization uses the same platform, security model and data as the rest of your healthcare operation. Configuration happens through Salesforce tooling rather than custom code.',
    points: [
      'Lightning-based record pages, list views and related lists',
      'Shared healthcare data across EHR, utilization management and RCM',
      'Configurable page layouts, picklists, validation and automation',
      'Less context switching between clinical and authorization systems',
      'Connected authorization and financial workflows',
    ],
    media: {
      title: 'Screen Flow • Generate Authorization Package',
      badge: 'Step 4: Delivery',
      badgeTone: 'lavender',
      image: { src: screenAuthorizationPackage, size: [554, 243], alt: 'Generate Authorization Package screen flow at the delivery step: download PDF, print, send fax or save package' },
    },
  },
  {
    id: 'payer-clearinghouse-integration',
    eyebrow: 'Payer & Clearinghouse Integration',
    title: 'Electronic Prior Authorization with Payer and Clearinghouse Integration',
    text: 'Submit authorization requests and receive determinations electronically via standard EDI 278 transactions, payer portal integrations, or clearinghouse gateways.',
    points: [
      'Direct electronic 278/279 submission and receipt loops',
      'Portal bridge for payers requiring proprietary web submission',
      'Real-time status inquiry and automatic logging of responses',
    ],
    mediaFirst: true,
    flow: {
      label: 'EDI 278 Flow',
      steps: [
        {
          title: 'Elixir builds the 278 request',
          text: 'Patient, member ID, provider, CPT, units and dates taken from the Prior Authorization.',
        },
        {
          title: 'Clearinghouse parses 279 response',
          text: 'Automated ingest updates authorization status, reference number and service lines directly.',
        },
      ],
    },
  },
  {
    id: 'utilization-management',
    eyebrow: 'Utilization Management',
    title: 'Prior Authorization and Utilization Management Software Together',
    text: 'Utilization reviews and authorizations describe the same episode of care. In Elixir they share services and documentation, so a review can generate the authorization it justifies.',
    points: [
      'Admission, concurrent and retrospective utilization reviews',
      'Service-level review with requested and approved units',
      'Coverage outcomes and authorization information recorded on the review',
      'Generate a prior authorization from a review, carrying the selected services',
      'Authorization lifecycle tracked from review through decision',
    ],
    media: {
      title: 'Salesforce Lightning • Utilization Review REV-1002',
      badge: 'Admission Review',
      badgeTone: 'green',
      image: { src: screenUtilizationReview, size: [554, 455], alt: 'Utilization review record REV-1002 with review, patient, admission and clinical assessment details' },
    },
  },
  {
    id: 'clinical-documentation',
    eyebrow: 'Clinical Documentation',
    title: 'Supporting Documentation That Stays With the Authorization',
    text: 'Clinical evidence is what payers actually evaluate. Elixir keeps it attached to the authorization it supports, using standard Salesforce Files.',
    points: [
      'Clinical records, provider documentation and supporting evidence in one place',
      'Standard Salesforce Files; upload, preview, download, share and version',
      'Documentation linked to the specific authorization or appeal',
      'Select which documents accompany a submission package',
    ],
    mediaFirst: true,
    media: {
      title: 'Supporting Documents Attachment Flow',
      badge: 'Step 2: Files',
      badgeTone: 'lavender',
      image: { src: screenSupportingDocuments, size: [554, 327], alt: 'Supporting documents step listing clinical files with category, upload date, version and size' },
    },
  },
  {
    id: 'appeals',
    eyebrow: 'Appeals',
    title: 'Prior Authorization Appeal Software',
    text: 'When a payer denies or partially approves a request, the appeal starts from the authorization itself, carrying the denial detail and the services in dispute.',
    points: [
      'Create an appeal directly from a prior authorization',
      'Select the specific denied or partially approved services to appeal',
      'Relationship between authorization and appeal maintained throughout',
      'Appeal documentation, correspondence and decisions managed on the record',
      'Multiple appeal levels supported where the payer allows them',
    ],
    media: {
      title: 'Salesforce Lightning • Appeal AP-3009',
      badge: 'Level 2 Appeal',
      badgeTone: 'yellow',
      image: { src: screenAppeal, size: [554, 381], alt: 'Appeal record AP-3009 with appeal information, related prior authorization and appeal details' },
    },
  },
];
