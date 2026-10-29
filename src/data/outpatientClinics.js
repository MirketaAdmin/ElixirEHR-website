// Outpatient Clinics page (/more-specialties/outpatient-clinics) — a child page of More Specialties.
// Copy is verbatim from the Figma. Links only point at routes that exist.
import heroMedia from '../assets/outpatient-clinics/hero-media.png';
import pillar1Icon from '../assets/outpatient-clinics/icon-pillar-1.png';
import pillar2Icon from '../assets/outpatient-clinics/icon-pillar-2.png';
import pillar3Icon from '../assets/outpatient-clinics/icon-pillar-3.png';
import pillar4Icon from '../assets/outpatient-clinics/icon-pillar-4.png';
import intake1Icon from '../assets/outpatient-clinics/icon-intake-1.png';
import intake2Icon from '../assets/outpatient-clinics/icon-intake-2.png';
import intake3Icon from '../assets/outpatient-clinics/icon-intake-3.png';
import intake4Icon from '../assets/outpatient-clinics/icon-intake-4.png';
import intake5Icon from '../assets/outpatient-clinics/icon-intake-5.png';
import intake6Icon from '../assets/outpatient-clinics/icon-intake-6.png';
import sched1Icon from '../assets/outpatient-clinics/icon-sched-1.png';
import sched2Icon from '../assets/outpatient-clinics/icon-sched-2.png';
import sched3Icon from '../assets/outpatient-clinics/icon-sched-3.png';
import sched4Icon from '../assets/outpatient-clinics/icon-sched-4.png';
import sched5Icon from '../assets/outpatient-clinics/icon-sched-5.png';
import sched6Icon from '../assets/outpatient-clinics/icon-sched-6.png';
import sched7Icon from '../assets/outpatient-clinics/icon-sched-7.png';
import sched8Icon from '../assets/outpatient-clinics/icon-sched-8.png';
import sched9Icon from '../assets/outpatient-clinics/icon-sched-9.png';
import sched10Icon from '../assets/outpatient-clinics/icon-sched-10.png';
import sched11Icon from '../assets/outpatient-clinics/icon-sched-11.png';
import sched12Icon from '../assets/outpatient-clinics/icon-sched-12.png';
import clinical1Icon from '../assets/outpatient-clinics/icon-clinical-1.png';
import clinical2Icon from '../assets/outpatient-clinics/icon-clinical-2.png';
import clinical3Icon from '../assets/outpatient-clinics/icon-clinical-3.png';
import clinical4Icon from '../assets/outpatient-clinics/icon-clinical-4.png';
import clinical5Icon from '../assets/outpatient-clinics/icon-clinical-5.png';
import clinical6Icon from '../assets/outpatient-clinics/icon-clinical-6.png';
import rev1Icon from '../assets/outpatient-clinics/icon-rev-1.png';
import rev2Icon from '../assets/outpatient-clinics/icon-rev-2.png';
import rev3Icon from '../assets/outpatient-clinics/icon-rev-3.png';
import rev4Icon from '../assets/outpatient-clinics/icon-rev-4.png';
import rev5Icon from '../assets/outpatient-clinics/icon-rev-5.png';
import rev6Icon from '../assets/outpatient-clinics/icon-rev-6.png';
import report1Icon from '../assets/outpatient-clinics/icon-report-1.png';
import report2Icon from '../assets/outpatient-clinics/icon-report-2.png';
import report3Icon from '../assets/outpatient-clinics/icon-report-3.png';
import report4Icon from '../assets/outpatient-clinics/icon-report-4.png';
import report5Icon from '../assets/outpatient-clinics/icon-report-5.png';
import report6Icon from '../assets/outpatient-clinics/icon-report-6.png';
import interop1Icon from '../assets/outpatient-clinics/icon-interop-1.png';
import interop2Icon from '../assets/outpatient-clinics/icon-interop-2.png';
import interop3Icon from '../assets/outpatient-clinics/icon-interop-3.png';
import interop4Icon from '../assets/outpatient-clinics/icon-interop-4.png';
import interop5Icon from '../assets/outpatient-clinics/icon-interop-5.png';
import interop6Icon from '../assets/outpatient-clinics/icon-interop-6.png';

const icon = (src, w, h) => ({ src, size: [w, h] });

export const opHero = {
  currentPage: 'Outpatient Clinics',
  titleLines: ['Outpatient Clinic', 'EHR Software for', 'Practices Running', 'Multiple Service', 'Lines'],
  titleAccent: [],
  description:
    'An integrated, cloud-based platform for outpatient clinics — one patient record across every line of service you run, with the scheduling, charting, billing and reporting each one needs configured separately.',
  primaryCta: { label: 'Request a Demo', to: '/request-demo', arrow: false },
  // The frame gives no destination; it scrolls to "One Platform for Every Service Line".
  secondaryCta: { label: 'See how service lines work', href: '#service-lines' },
  media: {
    src: heroMedia,
    alt: 'Physician at an Elixir dashboard in a busy multi-specialty clinic',
  },
};

export const opPillars = [
  {
    icon: icon(pillar1Icon, 24, 23),
    title: 'Integrated across processes',
    text: 'Intake, scheduling, charting, and billing operate on a singular persistent patient thread.',
  },
  {
    icon: icon(pillar2Icon, 22, 20),
    title: 'Multiple service lines',
    text: 'Support disparate clinical disciplines concurrently without cross-specialty data pollution.',
  },
  {
    icon: icon(pillar3Icon, 18, 18),
    title: 'Scalable by configuration',
    text: 'Spin up fresh clinics, new sites, and auxiliary provider suites via modular parameters.',
  },
  {
    icon: icon(pillar4Icon, 20, 16),
    title: 'Operational efficiency',
    text: 'Eradicate repetitive administrative transcription and reclaim lost clinical encounter margins.',
  },
];

export const opCore = {
  id: 'service-lines',
  eyebrow: 'The core idea',
  title: 'One Platform for Every Service Line Your Clinic Runs',
  description:
    'An outpatient clinic is rarely just one thing. It is a primary care office that also does minor procedures. It is a multi-specialty group with cardiology on Tuesday, dermatology on Thursday, and physical therapy all week. It is a community health center with behavioral health counselors sharing a building with pediatricians.',
  split: {
    title: 'What a split actually costs',
    lead: 'Symptoms of a multi-system clinic:',
    items: [
      "A patient has one chart in the primary care EHR and another in the therapy software — and the therapist doesn't know about the new medication the physician started on Monday.",
      'Front desk staff run two separate scheduling screens, doubling check-in time and booking errors.',
      'Billing generates two separate statements for the same visit date, confusing patients and increasing phone volume.',
      'Clinical quality reporting requires pulling data from two sources and deduplicating manually.',
      'IT pays for two EHR subscriptions, two clearinghouse feeds, two patient portal licenses, and two support contracts.',
    ],
  },
  paragraphs: [
    "When software can't accommodate that mix, practices compromise. They force a single template structure onto providers whose notes look nothing like each other. Or they maintain two systems and bridge them with human effort — an administrative tax on every patient encounter.",
    'Elixir supports multiple service lines within a single EHR instance. Each line gets the documentation templates, scheduling rules, and billing workflows it needs. But the patient has one chart, one problem list, one medication record, and one bill.',
  ],
  lines: {
    title: 'Service lines commonly configured:',
    items: [
      'Primary care',
      'Internal medicine',
      'Pediatrics',
      "Women's health",
      'Behavioral health',
      'Physical therapy',
      'Pain management',
      'Infusion',
    ],
  },
};

export const opIntake = {
  eyebrow: 'Front of house',
  title: 'Patient Intake Management Across Every Touchpoint',
  description:
    'Front desk staff at a multi-service clinic handle completely different types of patients every 10 minutes. A behavioral health intake has different legal and clinical requirements than a physical therapy visit or an annual wellness check. Elixir adapts the intake flow to the service being delivered:',
  items: [
    {
      chip: 'Capture',
      icon: icon(intake1Icon, 18, 21),
      title: 'Digital forms that match the appointment type',
      text: 'Send PHQ-9 and GAD-7 screeners ahead of a behavioral health visit, mobility questionnaires before physical therapy, and standard demographics before an annual exam. Patients complete them on their phone before arriving.',
    },
    {
      chip: 'Consistency',
      icon: icon(intake2Icon, 20, 19),
      title: 'Data writes directly to the chart',
      text: 'Patient-entered history, allergies, medications, and contact information flow into structured fields — not an unsearchable PDF attachment that clinical staff have to retype.',
    },
    {
      chip: 'Engagement',
      icon: icon(intake3Icon, 19, 19),
      title: 'Consent and policy management',
      text: 'General consent, service-line-specific consents (telehealth consent, controlled substance agreements, psychotherapy privacy notices), and financial policies are tracked by version, signed electronically, and flagged when due for renewal.',
    },
    {
      chip: 'Self-service',
      icon: icon(intake4Icon, 20, 17),
      title: 'Kiosk and tablet mode',
      text: "Patients who didn't complete intake at home can check in on a clinic tablet. Data entered at check-in is immediately available to the clinical team in the exam room.",
    },
    {
      chip: 'Check-in',
      icon: icon(intake5Icon, 20, 17),
      title: 'ID and card capture',
      text: 'Front and back card images captured via mobile upload or front-desk scanner, with optical character recognition to reduce manual entry errors.',
    },
    {
      chip: 'Referrals',
      icon: icon(intake6Icon, 20, 22),
      title: 'Referral tracking at intake',
      text: 'Capture the referring provider, attach referral documents, track authorization numbers, and set up automatic notification back to the referrer when the visit is completed.',
    },
  ],
};

export const opCoverage = {
  eyebrow: 'Coverage',
  title: 'Insurance Eligibility Verification and Patient Responsibility',
  description:
    "Eligibility verification fails most often when a clinic offers services that have different coverage rules under the same plan. A patient's commercial insurance might cover their primary care visit with a simple copay, require prior authorization for physical therapy, and carve out behavioral health to a different payer entirely.",
  badge: {
    title: 'Automated Clearinghouse Verification',
    text: 'Standard EDI 270/271 real-time eligibility inquiry protocol across all payers.',
  },
  items: [
    {
      title: 'Service-specific eligibility checks',
      text: 'Verify coverage for the specific service being booked — not just generic active/inactive status. Know whether therapy requires prior authorization, what the copay is for specialty vs. primary, and whether behavioral health benefits are managed by a third party.',
    },
    {
      title: 'Automated batch verification ahead of the schedule',
      text: 'Run automated checks 48–72 hours before every scheduled appointment, with an exception queue that flags coverage issues so your front desk can resolve them before the patient arrives.',
    },
    {
      title: 'Real-time patient responsibility calculation',
      text: 'Show copay, coinsurance, and remaining deductible at check-in so staff collect the correct amount at the point of care.',
    },
    {
      title: 'Secondary and tertiary payer management',
      text: "Verify and sequence multiple coverages properly so coordination-of-benefits claims don't get rejected downstream.",
    },
  ],
};

export const opGfe = {
  eyebrow: 'Price transparency',
  title: 'Good Faith Estimates and Cost Transparency at Scheduling',
  description:
    'The No Surprises Act requires providers to give uninsured and self-pay patients a written Good Faith Estimate of expected charges before scheduled services. When a clinic offers multiple services that may be delivered together — an exam plus an in-office procedure, or an evaluation plus lab work — calculating that estimate manually is slow and error-prone.',
  table: {
    caption: 'GFE Timing Requirements for Uninsured & Self-Pay Patients',
    chip: 'Statutory deadlines',
    columns: ['When the service is scheduled', 'When the GFE must be provided'],
    rows: [
      ['At least 3 business days before the appointment', 'No later than 1 business day after scheduling'],
      ['At least 10 business days before the appointment', 'No later than 3 business days after scheduling'],
      ['Patient requests an estimate (without scheduling)', 'No later than 3 business days after the request'],
    ],
  },
  handles: {
    title: 'How Elixir handles it:',
    items: [
      'Bundles anticipated services based on appointment type and clinic fee schedules.',
      'Generates compliant GFE documents automatically when uninsured or self-pay appointments are booked.',
      'Delivers the estimate to the patient electronically via portal or SMS with tracking of delivery timestamps.',
      'Stores the GFE in the patient record so billing staff can reference it if the final charges differ.',
    ],
  },
  note: {
    title: 'Two honest notes on where the law stands:',
    text: 'First, enforcement of the requirement to include co-provider and co-facility charges on GFEs has been deferred pending further rulemaking — though convening providers are still expected to provide estimates for their own services. Second, the requirement to provide advanced explanations of benefits (AEOBs) to insured patients has not been implemented yet; it will require future federal rulemaking before it takes effect. Elixir tracks both developments and will update workflows when rules are finalized.',
  },
};

export const opScheduling = {
  eyebrow: 'Scheduling',
  title: 'Multi-Specialty, Multi-Resource Scheduling',
  description: 'Scheduling for an outpatient clinic isn\'t just "find an open 20-minute slot." It is:',
  items: [
    {
      icon: icon(sched1Icon, 17, 18),
      title: 'Appointment types',
      text: 'Different default lengths, intake requirements, and billing codes per service line.',
    },
    {
      icon: icon(sched2Icon, 17, 15),
      title: 'Provider templates',
      text: 'Different schedule templates per provider, per day of the week, per location.',
    },
    {
      icon: icon(sched3Icon, 16, 16),
      title: 'Resource scheduling',
      text: 'Book exam rooms, procedure suites, ultrasound equipment, or infusion chairs alongside the provider so resources are never double-booked.',
    },
    {
      icon: icon(sched4Icon, 19, 15),
      title: 'Multi-provider visits',
      text: 'Schedule a patient to see a physician and a counselor on the same day, sequentially, without overlapping or leaving large gaps.',
    },
    {
      icon: icon(sched5Icon, 16, 17),
      title: 'Recurring series',
      text: 'Book 6–12 therapy sessions in a single workflow, respecting provider availability and authorization limits.',
    },
    {
      icon: icon(sched6Icon, 14, 18),
      title: 'Waitlists with smart fill',
      text: 'When a cancellation happens, notify waitlisted patients automatically by SMS and let them claim the open slot.',
    },
    {
      icon: icon(sched7Icon, 17, 15),
      title: 'Double-booking rules',
      text: 'Allow or restrict double-booking by appointment type and provider preference.',
    },
    {
      icon: icon(sched8Icon, 14, 18),
      title: 'Multi-location availability',
      text: 'Manage providers who rotate across clinic sites, with travel-time buffers built into scheduling rules.',
    },
    {
      icon: icon(sched9Icon, 12, 19),
      title: 'Same-day and walk-in queues',
      text: 'Separate scheduled appointments from urgent-care or walk-in arrivals, with real-time wait-time tracking.',
    },
    {
      icon: icon(sched10Icon, 17, 18),
      title: 'Automated reminders',
      text: 'Email, SMS, and voice reminders customized by appointment type — behavioral health reminders can include pre-visit screeners; procedure reminders include fasting instructions.',
    },
    {
      icon: icon(sched11Icon, 16, 15),
      title: 'Portal self-scheduling',
      text: 'Controlled by your rules — choose which service lines, which appointment types, and which providers are open for online booking, and hold slots for clinical review if needed.',
    },
    {
      icon: icon(sched12Icon, 16, 16),
      title: 'Cancellation analytics',
      text: 'Track no-show and cancellation rates by service line, provider, day of week, and appointment type to find patterns and adjust scheduling strategy.',
    },
  ],
  promo: {
    title: 'Looking to reduce no-shows?',
    text: 'Explore our AI-driven no-show prediction model and calculate clinic ROI.',
    link: { label: 'Patient No-Show Prediction and ROI calculator', to: '/patient-no-show-prediction' },
  },
};

export const opClinical = {
  eyebrow: 'Clinical',
  title: 'Customizable EHR, Forms and Progress Notes',
  description:
    "Clinical documentation has to fit the provider who's writing it. A family physician's SOAP note, a therapist's DAP note, a physical therapist's functional assessment, and an urgent-care provider's focused exam note have fundamentally different structures. Elixir accommodates all of them:",
  items: [
    {
      tile: clinical1Icon,
      title: 'Customizable templates at no extra cost',
      text: 'Build, modify, and clone note templates using a visual builder. Create specialty-specific templates with default text, macro buttons, scoring tools, and clinical prompts. No vendor professional services fee required.',
    },
    {
      tile: clinical2Icon,
      title: 'Care plans and case management',
      text: 'Track multidisciplinary care plans across service lines. When a patient receives chronic care management from primary care and behavioral health counseling, both providers see the active plan, their individual goals, and progress measures.',
    },
    {
      tile: clinical3Icon,
      title: 'Structured clinical documentation',
      text: 'Document diagnoses (ICD-10-CM with search and common-code favorites), procedures (CPT and HCPCS), vitals, screening results, and risk assessments in structured fields that feed reporting automatically.',
    },
    {
      tile: clinical4Icon,
      title: 'Orders, labs and results',
      text: 'Electronic lab ordering and result receipt with major diagnostic labs (Quest, Labcorp, regional systems) and in-house point-of-care testing. Flag abnormal results, route to the ordering provider for sign-off, and notify the patient via portal.',
    },
    {
      tile: clinical5Icon,
      title: 'Problem, medication and allergy lists',
      text: 'A single, unified medication list across every service line. When the psychiatrist prescribes an antidepressant, the primary care physician sees it immediately. Drug-drug, drug-allergy, and drug-condition interaction checking runs against the complete list.',
    },
    {
      tile: clinical6Icon,
      title: 'Supervision and co-signature',
      text: 'Configurable co-signature queues for residents, fellows, physician assistants, nurse practitioners, and associate therapists. Notes route to the supervising provider with diff highlighting and approval workflows.',
    },
  ],
};

export const opPrescribing = {
  eyebrow: 'Prescribing',
  title: 'e-Prescribing, EPCS and Medication Management',
  description:
    'Prescribing in a multi-specialty setting has high stakes. Pain management and behavioral health prescribe controlled substances with strict regulatory requirements; primary care handles routine maintenance medications; physical therapy needs to know about muscle relaxants and NSAIDs.',
  badge: {
    label: 'CMS Regulatory Mandate',
    title: '70% Threshold',
    text: 'CMS Part D compliance threshold for electronic prescribing of Schedule II–V controlled substances.',
  },
  items: [
    {
      title: 'CMS EPCS mandate compliance',
      chip: 'Active',
      tone: 'lime',
      text: 'CMS enforces the electronic prescribing requirement for Schedule II–V controlled substances under Medicare Part D. In Measurement Year 2026, prescribers must transmit at least 70% of Part D controlled substance prescriptions electronically (unless an exception applies, such as the small-prescriber threshold under 100 Part D controlled substance prescriptions per year, declared emergency, or CMS waiver). Elixir provides certified EPCS workflows that meet DEA and CMS standards.',
    },
    {
      title: 'PDMP integration',
      chip: 'Integrated',
      text: "Access your state's Prescription Drug Monitoring Program directly from the prescribing screen — no separate browser tab, no re-authenticating, no manual patient lookup. View full dispensing history before prescribing controlled substances.",
    },
    {
      title: 'Two-factor authentication for EPCS',
      chip: 'DEA certified',
      text: 'DEA-compliant identity proofing and two-factor credential management (token, push, biometric) built into the prescribing workflow for Schedule II–V medications.',
    },
    {
      title: 'Formulary and benefit checking',
      chip: 'Real-time',
      text: 'Real-time prescription benefit check shows coverage, copay tier, and whether prior authorization is required at the moment of prescribing — allowing providers to choose covered alternatives before the patient leaves the clinic.',
    },
  ],
};

export const opRevenue = {
  eyebrow: 'Revenue',
  title: 'Integrated Billing and Revenue Cycle Management',
  description:
    'Billing across multiple service lines is where single-specialty EHRs break down completely. Physical therapy bills by timed units (8-minute rule). Behavioral health uses distinct CPT codes with add-ons for psychotherapy. Primary care bills E/M with complex code leveling. Procedures require modifier management (25, 59, XS). Elixir handles all of it in a unified billing engine:',
  items: [
    {
      icon: icon(rev1Icon, 18, 21),
      label: 'Claim Scrubbing',
      title: 'Electronic claim generation',
      text: 'Generate ANSI 837P claims automatically from signed encounter notes. Built-in claim scrubbing catches missing modifiers, diagnosis-to-procedure mismatches, and authorization issues before submission.',
    },
    {
      icon: icon(rev2Icon, 22, 17),
      label: 'Auto-Posting',
      title: 'Electronic Remittance Advice (ERA)',
      text: 'Auto-post ANSI 835 remittance files, apply contractual adjustments, and automatically route patient responsibility amounts to the billing queue.',
    },
    {
      icon: icon(rev3Icon, 20, 21),
      label: 'Payments',
      title: 'Payment processing integration',
      text: 'Collect at check-in (card swipe/chip/contactless), take payments over the phone, let patients pay online through the portal, or send text-to-pay links. Card-on-file with patient authorization for recurring therapy copays or payment plans.',
    },
    {
      icon: icon(rev4Icon, 19, 19),
      label: 'Unified Ledger',
      title: 'One balance per patient',
      text: 'Regardless of how many service lines a patient uses, their financial picture is unified. One statement. One balance. One portal screen. No more explaining why the patient received three bills from three "departments" of the same clinic.',
    },
    {
      icon: icon(rev5Icon, 20, 20),
      label: 'Resolution',
      title: 'Denial management',
      text: 'Track denials by reason code, payer, service line, and provider. Work denials in prioritized queues with appeal letter templates and tracking of appeal deadlines.',
    },
    {
      icon: icon(rev6Icon, 20, 19),
      label: 'Managed Services',
      title: 'Full RCM option',
      text: "For practices that don't want to run billing in-house, Elixir offers an end-to-end RCM service with certified billers experienced in multi-specialty coding, payer contracting, credentialing, and collections.",
    },
  ],
};

export const opTelehealth = {
  eyebrow: 'Telehealth',
  title: 'Telehealth for Outpatient Clinics — and What Changes in 2028',
  description:
    "Telehealth is no longer a temporary workaround. For outpatient clinics, it's a permanent care delivery channel. But the regulatory ground beneath it is scheduled to shift, and clinics need software that supports today's rules while preparing for tomorrow's.",
  cards: [
    {
      tone: 'lime',
      chip: 'Current rule',
      when: 'Through 2027',
      // The frame breaks this date onto two lines beside the two-line chip.
      whenWidth: 52,
      title: 'Today',
      text: 'Through December 31, 2027, statutory telehealth flexibilities remain in effect under the Consolidated Appropriations Act, 2026. Medicare beneficiaries can receive telehealth services from home, regardless of geographic location; FQHCs and RHCs can serve as distant site providers; an expanded list of practitioners can bill for telehealth; and audio-only visits remain eligible for reimbursement.',
    },
    {
      tone: 'red',
      chip: 'Alert',
      when: '1 Jan 2028',
      title: '1 Jan 2028',
      text: 'Starting January 1, 2028, unless Congress acts again: pre-pandemic originating site restrictions return for non-behavioral telehealth. Medicare will only reimburse telehealth if the patient is at an approved clinical facility in a designated rural area. Audio-only coverage ends for non-behavioral services. Cross-state practice flexibilities will be governed entirely by state-level licensure compacts.',
    },
    {
      tone: 'purple',
      chip: 'Protected',
      when: 'Statutory',
      title: 'Permanent',
      text: 'Behavioral health is different. Congress made telehealth flexibilities for behavioral and mental health services permanent. Patients can continue receiving mental health care via telehealth from their homes, without geographic restrictions, even after 2027. (An in-person visit requirement for mental health telehealth has been repeatedly delayed and will not apply before 2028.)',
    },
    {
      tone: 'yellow',
      chip: 'Watch',
      when: 'Through 2026',
      title: 'Controlled Rx',
      text: 'DEA telemedicine flexibilities for prescribing controlled substances without an initial in-person evaluation have been extended through December 31, 2026. A permanent regulatory framework from DEA and HHS is expected before that expiration.',
    },
  ],
  means: {
    title: 'What this means for your clinic:',
    lead: 'If your clinic delivers both medical care and behavioral health via telehealth, your software needs to treat them differently. Elixir applies service-line-aware telehealth rules:',
    items: [
      'Integrated video visits that require no app download for patients — one click from a text or email link.',
      "Modality-aware billing that automatically applies the correct POS codes (02 for telehealth outside patient's home, 10 for telehealth in patient's home) and modifiers (95, GT, FQ for audio-only).",
      'Patient location tracking to verify that the patient is in a state where the provider holds an active license.',
      "Regulatory readiness: when non-behavioral rules change in 2028, Elixir's scheduling and billing logic will update automatically so your practice isn't caught submitting non-compliant claims.",
    ],
  },
};

export const opReporting = {
  eyebrow: 'Reporting',
  title: 'Reporting, Analytics and Quality Programs',
  description:
    'Multi-service clinics need reporting that cuts both ways: high-level aggregated data for the executive team, and granular, service-line-specific metrics for clinical directors and billing managers.',
  items: [
    {
      tile: report1Icon,
      title: 'Custom reports and dashboards',
      text: "Build operational, clinical, and financial dashboards with role-based access. Clinic managers see today's throughput; billing managers see AR aging; medical directors see quality measure performance.",
    },
    {
      tile: report2Icon,
      title: 'By service line, provider, and location',
      text: 'Filter every report by service line, individual provider, clinic site, or date range. Compare productivity, reimbursement rates, and no-show patterns across your different operations.',
    },
    {
      tile: report3Icon,
      title: 'Schedule utilization',
      text: 'See open appointment slots, fill rates, cancellation reasons, and average wait times. Identify which providers have capacity and which service lines are bottlenecked.',
    },
    {
      tile: report4Icon,
      title: 'MIPS and quality reporting',
      text: 'For clinicians participating in the Merit-based Incentive Payment System: CMS maintains the performance threshold at 75 points for the 2026 performance period (affecting 2028 payment adjustments). Clinicians can participate through traditional MIPS or choose from 27 available MIPS Value Pathways (MVPs). Elixir tracks quality measure data during normal clinical documentation — no end-of-year data scramble.',
    },
    {
      tile: report5Icon,
      title: 'Electronic prior authorization ahead',
      text: 'Under the CMS Interoperability and Prior Authorization final rule (CMS-0057-F), impacted payers (Medicare Advantage, state Medicaid and CHIP agencies, Medicaid and CHIP managed care entities, and QHP issuers on FFEs) must implement FHIR-based electronic prior authorization APIs by January 1, 2027. They must also meet shorter turnaround deadlines (72 hours for urgent, 7 calendar days for standard) and provide specific denial reasons. Elixir is building the provider-facing FHIR API integration so clinics can submit and track prior auth requests directly within the EHR workflow.',
    },
    {
      tile: report6Icon,
      title: 'Financial reporting',
      text: "Days in AR, collection rates, net revenue by service line, payer mix analysis, adjustment analysis, and unbilled encounter reports that flag visits where documentation is complete but charges haven't been submitted.",
    },
  ],
};

export const opInterop = {
  eyebrow: 'For your IT team',
  title: 'Built for Interoperability: ONC Certification, FHIR and Standards',
  description:
    "Healthcare IT leaders know that software isn't evaluated on features alone. It's evaluated on compliance, security, and whether it plays well with the rest of the healthcare ecosystem.",
  items: [
    {
      cornerIcon: icon(interop1Icon, 17, 14),
      label: 'USCDI v3',
      title: 'USCDI v3 operative version',
      text: 'Under the ONC HTI-1 final rule, the United States Core Data for Interoperability Version 3 is the mandatory baseline across multiple certification criteria, expanding standardized data elements for patient demographics, health status assessments, and social drivers of health.',
    },
    {
      cornerIcon: icon(interop2Icon, 17, 19),
      label: '§ 170.315(b)(1)',
      title: 'C-CDA Release 4.1',
      text: 'Certified transitions-of-care criteria require support for C-CDA 4.1 companion guide standards to maintain certified status and ensure seamless clinical document exchange with external health systems.',
    },
    {
      cornerIcon: icon(interop3Icon, 19, 19),
      label: '§ 170.315(g)(10)',
      title: 'FHIR US Core 6.1.0',
      textWidth: 255,
      text: 'Standardized API criterion updated to FHIR US Core Implementation Guide 6.1.0, providing standardized, secure patient and population-level RESTful API access.',
    },
    {
      cornerIcon: icon(interop4Icon, 16, 18),
      label: '§ 170.315(b)(11)',
      title: 'Decision Support Interventions',
      text: 'Replaces traditional clinical decision support with requirements covering Predictive Decision Support Interventions — ensuring transparency, risk management, and governance for AI-driven clinical suggestions.',
    },
    {
      cornerIcon: icon(interop5Icon, 15, 16),
      label: 'OIG Mandate',
      title: 'Information blocking compliance',
      text: 'Full electronic health information (EHI) export capabilities at both the individual patient and clinic-wide level, with audit logging and no artificial export barriers that could trigger OIG civil monetary penalties.',
    },
    {
      cornerIcon: icon(interop6Icon, 15, 16),
      label: 'Notice: In Flux',
      labelTone: 'yellow',
      title: 'Dec 2025 deregulatory rule proposed not final',
      text: 'Note that HHS and ONC have proposed further updates (including a December 2025 proposed deregulatory rule); Elixir monitors regulatory actions and maintains compliance as rules are finalized.',
    },
  ],
};

// Shared FaqSection: the first half of `items` fills the left column, so the order keeps each
// question in its frame column.
export const opFaq = {
  eyebrow: 'Questions',
  title: 'Outpatient Clinic EHR: Frequently Asked Questions',
  description:
    'Everything your clinical leaders, administrative staff, and IT personnel need to understand about configuring and deploying Elixir.',
  items: [
    {
      question: 'How does Elixir handle different service lines in one clinic?',
      answer:
        'Elixir uses a single patient chart with service-line-specific views and workflows. Each service line — primary care, behavioral health, physical therapy, etc. — gets its own note templates, scheduling rules, fee schedules, and intake forms. But medications, allergies, problem lists, and demographics are shared across the patient record, so every provider sees the full clinical picture. Billing can generate separate claims by service line or combine them on a single patient statement.',
    },
    {
      question: 'Is Elixir certified for ONC and MIPS reporting?',
      answer:
        'Yes. Elixir maintains ONC Health IT certification aligned with current HTI-1 requirements, including USCDI v3 standards, FHIR US Core 6.1.0 API capabilities, C-CDA 4.1 transitions of care, and Decision Support Interventions. For MIPS, Elixir tracks quality measure data within normal clinical workflows and supports both traditional MIPS and MIPS Value Pathways (MVPs).',
    },
    {
      question: 'Can behavioral health notes be kept confidential from other clinic staff?',
      answer:
        'Yes. Elixir supports granular, role-based access controls. Psychotherapy notes can be restricted to authorized behavioral health providers, while general clinical notes, medication lists, and diagnoses remain visible to the primary care team. This protects sensitive mental health documentation while maintaining safe coordinated care.',
    },
    {
      question: 'Can we migrate data from our existing EHRs into Elixir?',
      answer:
        "Yes. Elixir's migration team routinely migrates data from legacy EHRs, including demographics, appointment history, problem lists, medication lists, allergy records, clinical notes, and scanned documents. If your clinic currently runs two different systems for different service lines, we can merge those records into a single patient chart during the migration process.",
    },
    {
      question: 'Can different providers have different scheduling rules?',
      answer:
        'Yes. Every provider can have custom schedule templates with different appointment lengths, buffer times, double-booking permissions, and resource requirements (such as linking a provider to an exam room or specific equipment). Rules can vary by day of the week, clinic location, or appointment type.',
    },
    {
      question: 'How does Good Faith Estimate generation work for multi-service visits?',
      answer:
        "When an uninsured or self-pay appointment is scheduled, Elixir bundles the expected services based on the appointment type and your clinic's fee schedule, generates a compliant GFE document, and delivers it electronically to the patient via SMS or portal with delivery timestamp tracking. The estimate is saved in the patient chart for billing reconciliation.",
    },
    {
      question: 'How does the 2028 telehealth change affect outpatient clinics?',
      answer:
        "Current statutory telehealth flexibilities remain in effect through December 31, 2027. On January 1, 2028, non-behavioral telehealth will revert to pre-pandemic rules (originating-site restrictions, rural-only coverage, no audio-only for medical visits) unless Congress extends them. However, behavioral health telehealth was made permanently flexible by Congress and will continue from patients' homes regardless of location. Elixir's billing and scheduling logic will automatically enforce the correct rules by service line and visit date.",
    },
    {
      question: 'Does Elixir support electronic prior authorization?',
      answer:
        'Elixir is built to support the FHIR-based electronic prior authorization standards mandated by CMS-0057-F, which requires impacted payers to implement ePA APIs by January 1, 2027. In the interim, Elixir tracks prior authorization requirements, stores authorization numbers, alerts staff when authorizations are nearing expiration or unit limits, and attaches auth documentation to claims.',
    },
  ],
};

// "Speak with an EHR Specialist" has no destination in the frame; it goes to Contact Us.
export const opCtaBand = {
  eyebrow: 'Take the next step',
  title: 'See your clinic running on one platform',
  description:
    "Let us show you how Elixir brings scheduling, documentation, and billing together for every service line your clinic operates. We'll build a live demo tailored to your exact mix of specialties.",
  cta: { label: 'Request a Demo', to: '/request-demo' },
  secondaryCta: { label: 'Speak with an EHR Specialist', to: '/contact-us' },
};
