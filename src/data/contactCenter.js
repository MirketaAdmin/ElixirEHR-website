// Contact Center page (Figma "Contact Center", 1280 frame). Copy is reproduced verbatim from the frame.
import heroPlaceholder from '../assets/contact-center/hero-placeholder.png';
import stripRecordIcon from '../assets/contact-center/strip-record.png';
import stripAdmissionIcon from '../assets/contact-center/strip-admission.png';
import stripConsentIcon from '../assets/contact-center/strip-consent.png';
import stripSalesforceIcon from '../assets/contact-center/strip-salesforce.png';
import badgeGenericIcon from '../assets/contact-center/badge-generic.png';
import badgeElixirIcon from '../assets/contact-center/badge-elixir.png';
import crossMark from '../assets/contact-center/mark-cross.png';
import checkMark from '../assets/contact-center/mark-check.png';
import intakeWorkflowsIcon from '../assets/contact-center/intake-workflows.png';
import intakeCrmIcon from '../assets/contact-center/intake-crm.png';
import intakeTeamsIcon from '../assets/contact-center/intake-teams.png';
import intakeServiceIcon from '../assets/contact-center/intake-service.png';
import intakeShiftsIcon from '../assets/contact-center/intake-shifts.png';
import outreachConsentIcon from '../assets/contact-center/outreach-consent.png';
import outreachCampaignsIcon from '../assets/contact-center/outreach-campaigns.png';
import outreachOptOutIcon from '../assets/contact-center/outreach-optout.png';
import timelineThreadIcon from '../assets/contact-center/timeline-thread.png';
import timelineFormIcon from '../assets/contact-center/timeline-form.png';
import timelineSmsIcon from '../assets/contact-center/timeline-sms.png';
import timelineCallIcon from '../assets/contact-center/timeline-call.png';
import chipShieldIcon from '../assets/contact-center/chip-shield.png';
import claimBadgeIcon from '../assets/contact-center/claim-badge.png';
import verifyAutomatedIcon from '../assets/contact-center/verify-automated.png';
import verifyValidationIcon from '../assets/contact-center/verify-validation.png';
import verifyClearinghouseIcon from '../assets/contact-center/verify-clearinghouse.png';
import verifyFinancialIcon from '../assets/contact-center/verify-financial.png';
import verifyReverifyIcon from '../assets/contact-center/verify-reverify.png';
import verifyRcmIcon from '../assets/contact-center/verify-rcm.png';
import bhProtectionIcon from '../assets/contact-center/bh-protection.png';
import bhIntakeIcon from '../assets/contact-center/bh-intake.png';
import bhCrisisIcon from '../assets/contact-center/bh-crisis.png';
import bhFamilyIcon from '../assets/contact-center/bh-family.png';
import intTelephonyIcon from '../assets/contact-center/int-telephony.png';
import intMeetingsIcon from '../assets/contact-center/int-meetings.png';
import intMarketingIcon from '../assets/contact-center/int-marketing.png';
import intDocumentsIcon from '../assets/contact-center/int-documents.png';
import consultResponseIcon from '../assets/contact-center/consult-response.png';
import consultAssessmentIcon from '../assets/contact-center/consult-assessment.png';
import consultCompliantIcon from '../assets/contact-center/consult-compliant.png';

export const ccHero = {
  currentPage: 'Contact Center',
  titleLines: ['A Healthcare', 'Contact Center', 'Connected to the', 'Patient Record'],
  titleAccent: ['Connected to the', 'Patient Record'],
  description:
    'Every call, text, form, and referral lands on the patient’s chart rather than in a separate ticketing CRM — so the agent answering knows who is calling, what was promised last time, and what must happen next to turn an inquiry into an admission.',
  primaryCta: { label: 'Request a Demo', to: '/request-demo', arrow: false },
  // Scrolls to "What Your Agents See When the Phone Rings".
  secondaryCta: { label: 'See Agent Experience', href: '#agent-experience', icon: 'eye' },
  // The frame shows the grey image placeholder (with its tilted backdrop); no final image supplied.
  media: { src: heroPlaceholder, alt: '' },
};

export const ccStrip = [
  {
    icon: stripRecordIcon,
    iconSize: [20, 16],
    tone: 'purple',
    title: 'The Record, Not a Ticket',
    text: 'Agents operate directly in the patient chart. Inquiries, calls, and texts build a unified clinical record.',
  },
  {
    icon: stripAdmissionIcon,
    iconSize: [22, 20],
    tone: 'lime',
    title: 'First Contact to Admission',
    text: 'Inquiry, eligibility verification, clinical screening, financial review, and travel in one continuous stream.',
  },
  {
    icon: stripConsentIcon,
    iconSize: [16, 20],
    tone: 'yellow',
    title: 'Consent at First Ring',
    text: 'TCPA communication, 42 CFR Part 2, and recording consent evidenced at the very first contact.',
  },
  {
    icon: stripSalesforceIcon,
    iconSize: [24, 24],
    tone: 'purple',
    title: 'Built Native on Salesforce',
    text: 'Queues, routing, scripts, and dispositions are configuration. Adding programs requires zero dev code.',
  },
];

export const ccAgent = {
  chip: 'The Agent Experience',
  title: 'What Your Agents See When the Phone Rings',
  description:
    'The difference between a healthcare contact center and a generic call center with a medical logo shows up in the first four seconds of a call.',
  cards: [
    {
      tone: 'generic',
      badge: { label: 'Generic Call Center Tool', icon: badgeGenericIcon, size: [13, 13] },
      title: 'Disconnected Ticketing CRM',
      text: 'Forces staff to search duplicate databases while distressed callers repeat trauma stories.',
      mark: { src: crossMark, size: [10, 11] },
      items: [
        { label: 'Asks DOB & Repeats Story:', text: 'Searches disconnected records while caller explains crisis for the 3rd time.' },
        { label: 'Blind Eligibility:', text: 'Insurance coverage requires contacting external clearinghouse portals.' },
        { label: 'Free Text Notes:', text: 'Dispositions stored in notes nobody reads or reports on across shifts.' },
        { label: 'Disjointed Intake Handoff:', text: 'Clinical intake team receives unverified fax or emailed leads.' },
      ],
    },
    {
      tone: 'elixir',
      badge: { label: 'Elixir EHR-Native Contact Center', icon: badgeElixirIcon, size: [15, 15] },
      title: 'Instant Historical & Clinical Clarity',
      text: 'Inbound numbers instantly resolve against the unified electronic health record upon first ring.',
      mark: { src: checkMark, size: [10, 11] },
      items: [
        { label: 'Instant Clinical Context:', text: 'Answers knowing which program, which clinician, and what was promised last time.' },
        { label: 'Real-Time Eligibility:', text: 'Inbound call pop displays active copays, deductibles, and pre-auth status.' },
        { label: 'Structured Dispositions:', text: '"Transport unresolved" or "declined on cost" tracked with automated SLAs.' },
        { label: 'Chart Continuity:', text: "Inbound notes instantly convert into the attending clinician's admission record." },
      ],
    },
  ],
};

export const ccIntake = {
  chip: 'Intake Workflows',
  title: 'One Patient Intake Workflow From First Contact to Admission',
  description:
    'Patient intake is usually the first impression your organization makes, and it is where prospective patients are lost — almost never for clinical reasons, but due to delayed verifications, printed forms, and dropped callbacks.',
  feature: {
    icon: { src: intakeWorkflowsIcon, size: [18, 20], tone: 'lime' },
    badge: 'Core Engine',
    title: 'Custom Workflows That Automate Intake',
    text: 'Each program defines its own path from inquiry to admission with required checkpoints, owners, and SLAs rather than a rigid generic process.',
    // The intake checklist drawn in the frame: an illustration, not live data.
    steps: [
      { label: 'Inbound Inquiry & TCPA Consent', status: 'Verified', state: 'done' },
      { label: 'Real-Time Insurance Verification', status: 'Aetna In-Network', state: 'done' },
      { label: 'Pre-Admission Clinical Screening', status: 'ASAM Level 3.7 In Review', state: 'active' },
      { label: 'Bed Assignment & Admission Order', status: 'Pending Confirmation', state: 'pending' },
    ],
  },
  cards: [
    {
      icon: { src: intakeCrmIcon, size: [25, 24], tone: 'purple' },
      title: 'Unified Healthcare CRM on Salesforce',
      text: 'Inquiries captured as Salesforce leads and opportunities convert seamlessly into the clinical patient record upon admission without manual re-keying.',
    },
    {
      icon: { src: intakeTeamsIcon, size: [23, 16], tone: 'yellow' },
      title: 'Accurate Data Across Care Teams',
      text: 'Intake, clinical, billing, and UR teams read from the identical record. Contact details given at intake remain accurate throughout billing.',
    },
    {
      icon: { src: intakeServiceIcon, size: [21, 17], tone: 'dark' },
      title: 'Measured Service Levels',
      text: 'Track time to first response, time to verification, and conversion duration per facility and referral source instead of guessing at monthly retrospectives.',
    },
    {
      icon: { src: intakeShiftsIcon, size: [17, 23], tone: 'lime' },
      // The frame breaks this title after "Between" (kept at desktop width).
      title: 'Zero Drops Between\nShifts',
      text: 'Open tasks, promised callbacks, and unresolved barriers carry across shifts with explicit owners so evening teams inherit organized work rather than confusion.',
    },
  ],
};

export const ccOutreach = {
  chip: 'Outreach & Engagement',
  title: 'Multi-Channel Patient Outreach: Calls, Texts, Digital Forms, and Email',
  description:
    'Outbound communication is where healthcare contact centers frequently introduce legal exposure. Elixir embeds the consent trail directly into each message rather than treating it as a static setting.',
  items: [
    {
      icon: { src: outreachConsentIcon, size: [18, 15], tone: 'lime' },
      title: 'Consent Evidenced at First Ring',
      text: 'Stores which telephone number gave permission, when it was recorded, for what scope, and through which channel.',
    },
    {
      icon: { src: outreachCampaignsIcon, size: [16, 15], tone: 'yellow' },
      title: 'Automated Outbound Campaigns With Suppression',
      text: 'Re-engagement and recall workflows automatically respect patient opt-outs, quiet hours, and frequency caps.',
    },
    {
      icon: { src: outreachOptOutIcon, size: [20, 17], tone: 'red' },
      title: 'Immediate Multi-Channel Opt-Out Enforcement',
      text: 'When a patient replies STOP, communication is immediately suppressed across automated calls, SMS, and agent dials.',
    },
  ],
  // The omnichannel timeline drawn in the frame: an illustration with example data, not live data.
  timeline: {
    icon: { src: timelineThreadIcon, size: [17, 18] },
    title: 'Omnichannel Timeline · Eleanor Vance',
    status: 'Active Thread',
    events: [
      {
        icon: { src: timelineFormIcon, size: [12, 16], tone: 'yellow' },
        title: 'Digital Intake Webform Received',
        time: '10:14 AM',
        text: 'Submitted insurance card photos, primary complaint, and opt-in consent for admissions text notifications. Stored directly to EHR record.',
      },
      {
        icon: { src: timelineSmsIcon, size: [16, 16], tone: 'purple' },
        title: 'Automated SMS Confirmation Sent',
        time: '10:15 AM',
        text: '"Hi Eleanor, we received your inquiry. Our clinical intake team is verifying your Aetna coverage now. Reply STOP to opt out."',
        quote: true,
      },
      {
        icon: { src: timelineCallIcon, size: [14, 15], tone: 'lime' },
        title: 'Inbound Voice Call Connected',
        time: '10:28 AM',
        text: 'Inbound call answered by Coordinator Marcus. Verified ASAM criteria and scheduled medical transport for today at 3:00 PM.',
      },
    ],
  },
};

export const ccCompliance = {
  chip: 'Regulatory Compliance Architecture',
  chipIcon: { src: chipShieldIcon, width: 11, height: 14 },
  title: 'Consent, Recording, and Language Access on the First Call',
  description:
    'The single most expensive assumption in healthcare operations is that "we are a healthcare provider, so texting patients is automatically covered." For intake teams, it frequently is not.',
  cards: [
    {
      label: 'Exemption Scope',
      title: 'Healthcare TCPA Exemption Limits',
      text: 'The federal wireless call exemption applies strictly to closed treatment purposes like reminders and post-op care. Pre-admission outreach to individuals not yet admitted is excluded.',
    },
    {
      label: 'Frequency Rules',
      title: 'Strict Frequency & Duration Caps',
      text: 'Where exemptions apply, federal limits restrict outreach to 1 message daily and max 3 voice/text communications weekly per patient, with immediate opt-out compliance.',
    },
    {
      label: 'Phone Assignment',
      title: 'Per-Number Consent Tracking',
      text: 'Elixir tracks consent per telephone number rather than per contact identity, shielding your team if a telephone number is reassigned to another consumer.',
    },
    {
      label: 'Revocation Windows',
      title: 'Configurable Revocation Windows',
      text: 'FCC revocation timelines continue to evolve. Rules are maintained via platform configuration parameters rather than hard-coded constants.',
    },
    {
      label: 'Recording Laws',
      title: 'State-by-State Recording Consent',
      text: 'Call recording announcements and behaviors adapt automatically according to state jurisdiction, distinguishing one-party and all-party consent states.',
    },
    {
      label: 'Language Equity',
      title: 'Section 1557 Language Access',
      text: 'Identifies limited English proficiency before routing and immediately prompts staff to connect certified medical interpreters rather than relying on unvetted family members.',
    },
  ],
  notClaim: {
    icon: { src: claimBadgeIcon, size: [18, 18] },
    title: 'What Elixir Will Not Claim',
    items: [
      {
        label: 'That any software can make an organization "TCPA compliant" by itself:',
        text: 'Recent Supreme Court rulings hold that courts evaluate statutory TCPA claims independently; no vendor can guarantee immunity.',
      },
      {
        label: 'That a single federal warm-transfer standard exists for 988:',
        text: 'We deliver prioritized routing and protocol logging, but your organization’s clinical policies define local crisis transfers.',
      },
      {
        label: 'That compliance is purely the vendor’s responsibility:',
        text: 'The platform furnishes strict audit controls and safeguards; client policies and staff execution govern operational compliance.',
      },
    ],
  },
};

export const ccVerification = {
  chip: 'Real-Time Verification',
  title: 'Insurance Verification & Eligibility Checks at First Contact',
  description:
    'Insurance verification errors during intake feed directly into billing denials, delayed revenue cycles, and stalled admissions that prospective patients urgently need.',
  cards: [
    {
      icon: { src: verifyAutomatedIcon, size: [16, 20], tone: 'lime' },
      title: 'Automated Verification Workflows',
      text: 'Eligibility queries trigger automatically as soon as subscriber details are keyed in, eliminating batch delays and overnight queues.',
    },
    {
      icon: { src: verifyValidationIcon, size: [19, 20], tone: 'purple' },
      title: 'Upfront Field Validation',
      text: 'Plan IDs, subscriber numbers, and group codes validate instantly against clearinghouse syntax to catch transposed numbers during the live call.',
    },
    {
      icon: { src: verifyClearinghouseIcon, size: [21, 18], tone: 'yellow' },
      title: 'Live Clearinghouse Integration',
      text: 'Integrated EDI 270/271 clearinghouse connections return active copays, deductibles, and authorization requirements in real time.',
    },
    {
      icon: { src: verifyFinancialIcon, size: [22, 17], tone: 'purple' },
      title: 'Patient Financial Responsibility',
      text: 'Translates complex co-insurance percentages into clear, calculated estimates of out-of-pocket patient responsibility.',
    },
    {
      icon: { src: verifyReverifyIcon, size: [19, 19], tone: 'lime' },
      title: 'Scheduled Re-Verification',
      text: 'For longer treatment episodes, coverage checks re-run automatically on a recurring schedule to catch silent policy terminations.',
    },
    {
      icon: { src: verifyRcmIcon, size: [19, 21], tone: 'yellow' },
      title: 'Direct Pipeline to RCM',
      text: [
        'Verified insurance records flow straight into billing and claim generation without re-entry. Learn more about ',
        { text: 'Revenue Cycle Management', to: '/revenue-cycle-management' },
        '.',
      ],
    },
  ],
};

export const ccCensus = {
  chip: 'Capacity Management',
  title: 'Intelligent Census & Real-Time Capacity Tracking',
  description:
    'Admissions coordinators can only promise beds they can verify. Census managed via dry-erase boards or morning spreadsheets leads to confirmed patients being turned away at the door.',
  // The census board drawn in the frame: an illustration with example data, not live data.
  board: {
    title: 'Facility Census Overview · West Wing Residential',
    subtitle: 'Live Synchronized Bed Inventory across Intake & Nursing Units',
    legend: [
      { label: '4 Beds Available', tone: 'available' },
      { label: '2 Reserved / Intake Holds', tone: 'hold' },
      { label: '18 Occupied', tone: 'occupied' },
    ],
    beds: [
      { id: 'BED-101A', status: 'Available', tone: 'available', unit: 'Detox Unit 1 · Adult Male', note: 'Sanitized · Ready for Admission' },
      { id: 'BED-101B', status: 'Hold (2H Left)', tone: 'hold', unit: 'Detox Unit 1 · Adult Male', note: 'Reserved for: Eleanor V. (In Transit)' },
      { id: 'BED-102A', status: 'Available', tone: 'available', unit: 'Res Rehab · Adult Female', note: 'Housekeeping Completed 10:00 AM' },
      { id: 'BED-102B', status: 'Occupied', tone: 'occupied', unit: 'Res Rehab · Adult Female', note: 'Discharge Scheduled: Tomorrow' },
    ],
  },
};

export const ccReferral = {
  chip: 'Analytics & Pipeline',
  title: 'Referral Source Management & Speed to Admission',
  description:
    'Most organizations can state how many inquiries they received. Far fewer can identify which referral sources produce patients who successfully complete treatment.',
  columns: ['Referral & Intake Metric', 'How It Informs Operational Decisions'],
  rows: [
    {
      metric: 'Time to First Response',
      text: 'The single highest predictor of inquiry conversion. Tracked per marketing channel, facility, and shift rather than averaged monthly.',
    },
    {
      metric: 'Inquiry-to-Admission Days',
      text: 'Isolates bottlenecks across each stage to reveal whether delays stem from insurance verification, bed holds, or follow-up coordination.',
    },
    {
      metric: 'Conversion by Referral Source',
      text: 'Differentiates conversion velocity between hospitals, detox clinics, EAPs, and web leads to guide business development investments.',
    },
    {
      metric: 'Treatment Completion Rates',
      text: 'Separates high-volume referral sources from high-quality sources by measuring which partners yield patients who complete care.',
    },
    {
      metric: 'Structured Loss Reason Coding',
      text: 'Captures precise barriers—deductible costs, lack of immediate transport, family hesitation—so operational leaders can fix pipeline leaks.',
    },
    {
      metric: 'After-Hours & Abandoned Calls',
      text: 'Surfaces calls that were missed during off-peak hours and routes them into prioritized next-morning outreach queues.',
    },
  ],
};

export const ccBehavioral = {
  chip: 'Specialty Practice',
  title: 'Behavioral Health Contact Center: Crisis Protocols & Part 2',
  description:
    'Two factors differentiate a behavioral health contact center from standard medical answering services, and both activate from the very first ring.',
  cards: [
    {
      icon: { src: bhProtectionIcon, size: [16, 22], tone: 'purple' },
      title: 'Protection Attaches at the Inquiry, Not at Admission',
      text: 'Federal 42 CFR Part 2 regulations explicitly define a protected patient as any individual who has applied for diagnosis, treatment, or referral. An inquiry to an addiction facility is protected medical data from the moment the call begins, requiring specialized disclosure boundaries.',
    },
    {
      icon: { src: bhIntakeIcon, size: [20, 16], tone: 'lime' },
      title: 'Why Intake Belongs in the EHR, Not a Separate Marketing Tool',
      text: 'Storing addiction treatment inquiries inside commercial marketing CRMs risks non-compliant data disclosures. Integrating the contact center directly into Elixir’s healthcare cloud ensures identical security policies govern both intake and the chart.',
    },
    {
      icon: { src: bhCrisisIcon, size: [18, 19], tone: 'yellow' },
      title: 'Protocol-Driven Crisis Call Escalation',
      text: 'Callers experiencing acute distress trigger priority routing, warm-transfer workflows to designated clinical crisis teams or 988 lines, and auditable protocol logging.',
    },
    {
      icon: { src: bhFamilyIcon, size: [22, 21], tone: 'lime' },
      title: 'Family Communications Handled With Care',
      text: 'Many behavioral health inquiries come from family members. Elixir tracks caller relationships and explicit disclosures on file, shielding staff from unintentional privacy breaches.',
    },
  ],
};

export const ccIntegrations = {
  chip: 'Ecosystem & APIs',
  title: 'Telephony, Marketing, & Healthcare Integrations',
  description:
    'Because Elixir is native to Salesforce, the contact center connects directly with existing communications, marketing, and telephony systems without complex custom middleware.',
  groups: [
    {
      icon: { src: intTelephonyIcon, size: [18, 19] },
      title: 'Telephony & CTI',
      items: ['RingCentral', 'CallTrackingMetrics', 'DialogTech', 'CallRail', 'Amazon Connect'],
    },
    {
      icon: { src: intMeetingsIcon, size: [20, 17] },
      title: 'Meetings & Video',
      items: ['Zoom Healthcare', 'Microsoft Teams', 'Outlook Calendar', 'Google Workspace'],
    },
    {
      icon: { src: intMarketingIcon, size: [20, 17] },
      title: 'Marketing & Web',
      items: ['Salesforce MC', 'Google Analytics 4', 'Mailchimp', 'Digital Webforms'],
    },
    {
      icon: { src: intDocumentsIcon, size: [22, 22] },
      title: 'Documents & EDI',
      items: ['DocuSign', 'Change Healthcare', 'Waystar', 'Availity'],
    },
  ],
};

// Rendered with the site's shared FAQ section (standing rule). The frame supplies an answer for the
// first question only; the others render as static rows until their answers are written.
export const ccFaq = {
  title: 'Healthcare Contact Center Software: Questions Answered',
  description: 'What intake directors, compliance executives, and clinical IT leaders ask us first.',
  items: [
    {
      question: 'What is a healthcare contact center?',
      answer:
        'A healthcare contact center coordinates every inbound and outbound patient touchpoint across the care journey — new inquiries, scheduling, insurance validation, payment plans, and follow-up. Unlike generic call centers, Elixir connects directly into the electronic health record, so agents see complete clinical, billing, and consent context on their screen pop.',
    },
    { question: 'How does this differ from generic call center software?' },
    { question: 'Does Elixir Contact Center integrate with existing telephony?' },
    { question: 'Can agents text patients directly from the interface?' },
    { question: 'Is an intake call covered by 42 CFR Part 2 rules?' },
    { question: 'Can Elixir record inbound and outbound calls?' },
    { question: 'How are behavioral health crisis calls handled?' },
    { question: 'What is required to implement the contact center?' },
  ],
};

export const ccConsultation = {
  chip: 'Get in Touch',
  title: 'Schedule a Contact Center Consultation',
  description:
    'See how Elixir connects your intake team directly to the patient record with live screen pops and native Salesforce workflows.',
  points: [
    {
      icon: { src: consultResponseIcon, size: [18, 22] },
      title: 'Guaranteed 24-Hour Response',
      text: 'Our specialized clinical intake architects respond by the next business morning.',
    },
    {
      icon: { src: consultAssessmentIcon, size: [18, 22] },
      title: 'Custom Workflow Assessment',
      text: 'We review your current telephony, intake queues, and insurance verification pipelines.',
    },
    {
      icon: { src: consultCompliantIcon, size: [20, 22] },
      title: 'HIPAA & Part 2 Compliant',
      text: 'Strict healthcare encryption, signed BAAs, and auditable data controls.',
    },
  ],
  // The phone number is shown in the frame only (not in the approved contact data) — confirm before launch.
  support: { text: 'Need immediate support? Call our team directly at', phone: '+1 (888) 401-4475', href: 'tel:+18884014475' },
  // The shared contact form (Salesforce Web-to-Lead), relabelled as drawn in this frame.
  form: {
    fieldOverrides: {
      firstName: { placeholder: 'e.g. Sarah' },
      lastName: { placeholder: 'e.g. Jenkins' },
      email: { placeholder: 'sarah@clinic.org' },
      phone: { label: 'Phone Number', placeholder: '(555) 000-0000' },
      company: { label: 'Organization / Health System', placeholder: 'Regional Behavioral Health System' },
      message: {
        label: 'How can our solutions team help?',
        placeholder: 'Tell us about your facility bed volume, current phone system, or specific intake priorities...',
      },
    },
    submitLabel: 'Submit Consultation Request',
    // (the shared form appends its arrow icon, drawn as "→" in the frame)
    consent: {
      before: 'Protected under our strict security standards. See our ',
      link: 'Privacy Policy',
      to: '/privacy-policy',
      after: '.',
    },
  },
};

export const ccCtaBand = {
  eyebrow: 'First Contact to Admission',
  title: 'See What Your Intake Team Would Actually See',
  description:
    'Bring your call workflows, referral pipelines, and clinical programs. We will demonstrate the live screen pop, eligibility check, and admission transition on a single patient record.',
  cta: { label: 'Request a Demo', to: '/request-demo' },
  secondaryCta: { label: 'Explore the Patient Portal', to: '/patient-portal' },
};
