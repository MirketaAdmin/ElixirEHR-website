// Behavioral Health page (/behavioral-health) — an independent page with no parent.
// Copy is verbatim from the Figma. Links only point at routes that exist.
import heroMedia from '../assets/behavioral-health/hero-media.png';
import connectedIcon from '../assets/behavioral-health/icon-pillar-connected.png';
import measurableIcon from '../assets/behavioral-health/icon-pillar-measurable.png';
import compliantIcon from '../assets/behavioral-health/icon-pillar-compliant.png';
import configurableIcon from '../assets/behavioral-health/icon-pillar-configurable.png';
import legacySplitIcon from '../assets/behavioral-health/icon-legacy-split.png';
import withinRecordIcon from '../assets/behavioral-health/icon-within-record.png';
import fragmentationIcon from '../assets/behavioral-health/icon-fragmentation.png';
import mentalHealthIcon from '../assets/behavioral-health/icon-mental-health.png';
import substanceUseIcon from '../assets/behavioral-health/icon-substance-use.png';
import unifiedIntakeIcon from '../assets/behavioral-health/icon-step-unified-intake.png';
import clinicalRationaleIcon from '../assets/behavioral-health/icon-step-clinical-rationale.png';
import unifiedChartIcon from '../assets/behavioral-health/icon-step-unified-chart.png';
import continuousHistoryIcon from '../assets/behavioral-health/icon-step-continuous-history.png';
import measureScheduleIcon from '../assets/behavioral-health/icon-measure-schedule.png';
import measureDecisionsIcon from '../assets/behavioral-health/icon-measure-decisions.png';
import measureActedIcon from '../assets/behavioral-health/icon-measure-acted.png';
import measureRiskIcon from '../assets/behavioral-health/icon-measure-risk.png';
import measureRolledIcon from '../assets/behavioral-health/icon-measure-rolled.png';
import measureContractsIcon from '../assets/behavioral-health/icon-measure-contracts.png';

export const bhHero = {
  currentPage: 'Behavioral Health',
  titleLines: ['Behavioral Health', 'EHR Software for', 'Connected,', 'Measurable Care'],
  titleAccent: [],
  description:
    'One Salesforce-native platform for mental health and substance use disorder treatment — because a large share of the people you treat have both, and two systems means the clinician treating one cannot see the other.',
  primaryCta: { label: 'Request a Demo', to: '/request-demo', arrow: false },
  // The frame gives no destination; it scrolls to the two service lines.
  secondaryCta: { label: 'Mental health or substance use', href: '#two-paths' },
  media: {
    src: heroMedia,
    alt: 'Clinicians reviewing a shared patient record on a tablet with a patient in a care team meeting',
  },
};

export const bhPillars = [
  {
    icon: { src: connectedIcon, size: [18, 18] },
    title: 'Connected',
    text: 'One record across programs, sites and states. A patient moving between services keeps their history rather than starting a new one.',
  },
  {
    icon: { src: measurableIcon, size: [16, 16] },
    title: 'Measurable',
    text: 'Outcomes collected on schedule, trended where clinicians look, and reportable to a payer, a board or a state.',
  },
  {
    icon: { src: compliantIcon, size: [14, 18] },
    title: 'Compliant by construction',
    text: '42 CFR Part 2 and HIPAA controls in the record itself, with consent and disclosure trails that survive an audit.',
  },
  {
    icon: { src: configurableIcon, size: [18, 18] },
    title: 'Configurable',
    text: 'Built on Salesforce, so a new state, program, payer or level of care is configuration rather than custom code.',
  },
];

export const bhCase = {
  eyebrow: 'The case for one platform',
  title: 'Why Behavioral Health Needs One Record, Not Two Systems',
  callout:
    'Co-occurring mental health and substance use conditions are not an edge case in behavioral health. They are close to the default.',
  cards: [
    {
      text: 'Organizations rarely choose two systems deliberately. They acquire one, add a service line, buy something specialized for it, and end up with a mental health record and a substance use record that do not speak — usually justified by a belief that 42 CFR Part 2 requires the separation.',
      label: 'The legacy split',
      tone: 'purple',
      icon: { src: legacySplitIcon, size: [12, 12] },
    },
    {
      text: 'It does not. Part 2 protections attach to substance use disorder records specifically, not to the whole patient. The correct answer is separation within the record, with its own consent and disclosure trail, rather than a second system with its own login, its own intake, and its own version of the patient’s medication list.',
      label: 'Within-record segregation',
      tone: 'green',
      icon: { src: withinRecordIcon, size: [14, 13] },
    },
    {
      text: 'The cost of the split lands on the clinician. A prescriber treating depression cannot see the buprenorphine. A counsellor cannot see last week’s crisis contact. A utilization review nurse rebuilds a history that already exists. And the organization cannot answer the question a payer increasingly asks — what happened to this person across all of their care — because no single system ever held it.',
      label: 'Clinical fragmentation cost',
      tone: 'red',
      icon: { src: fragmentationIcon, size: [13, 12] },
    },
  ],
};

// The two service lines, each linking to its own page.
export const bhPaths = {
  id: 'two-paths',
  eyebrow: 'Two paths',
  title: 'Mental Health and Substance Use Disorder EHR on One Platform',
  description:
    'The same record, the same configuration model and the same AI governance — with the clinical depth each side actually needs. Start wherever your organization starts.',
  lines: [
    {
      tone: 'purple',
      label: 'Service line 01',
      icon: { src: mentalHealthIcon, size: [19, 20] },
      title: 'Mental Health EHR',
      description:
        'For outpatient and community behavioral health programs — clinic-based therapy and psychiatry, community teams working in the field, and integrated care embedded in primary care.',
      items: [
        'Scheduled outcomes (PHQ-9, GAD-7, Columbia-SSRS, WHODAS) with trend charts clinicians actually look at',
        'Therapy note templates (SOAP, DAP, BIRP, EMDR, group therapy) configured to state Medicaid and commercial rules',
        'Mobile, offline-capable documentation for ACT, ICM, mobile crisis and street medicine teams',
        'Full psychiatric prescribing: EPCS, PDMP integration, state-mandated vitals and lab tracking for antipsychotics',
        'Collaborative Care Model (CoCM) support: psychiatric registry, systematic reviews, monthly billing calculation',
        'Billing for behavioral health: incident-to rules, supervised billing, state Medicaid fee schedules, interactive complexity',
      ],
      link: { label: 'Explore the mental health EHR', to: '/behavioral-health/mental-health' },
    },
    {
      tone: 'green',
      label: 'Service line 02',
      icon: { src: substanceUseIcon, size: [20, 20] },
      title: 'Substance Use Disorder EHR',
      description:
        'For addiction treatment across every level of care — outpatient and intensive outpatient through residential, withdrawal management and medically managed inpatient.',
      items: [
        'Native 42 CFR Part 2 consent engine: granular disclosure tracking, consent expiry, re-disclosure notices',
        'ASAM Criteria 4th Edition assessment alignment and multi-dimensional placement documentation',
        'Withdrawal management workflows (CIWA-Ar, COWS, vital sign triggers) linked to medication administration',
        'Medication-Assisted Treatment (MAT / MOUD) support: buprenorphine, naltrexone, OTP dosing integration',
        'Residential and bed management: census tracking, room assignments, observation rounds and discharge planning',
        'Toxicology and lab interface: urine drug screen ordering, result ingestion, mismatch alerts against reported use',
      ],
      link: { label: 'Explore the substance use disorder EHR', to: '/behavioral-health/substance-use-disorder' },
    },
  ],
};

export const bhConnected = {
  eyebrow: 'Connected',
  title: 'One Record Across Programs, Sites and States',
  description:
    'A person in behavioral health treatment rarely stays in one place. The record should be the thing that does not change when everything else does.',
  steps: [
    {
      title: 'Referral and intake',
      text: 'One enquiry queue across programs, with eligibility verified and screening captured once — not re-asked at every handoff.',
      label: 'Unified Intake',
      icon: { src: unifiedIntakeIcon, size: [14, 12] },
    },
    {
      title: 'Assessment and placement',
      text: 'The right assessment for the service, feeding a documented placement decision with the clinician’s rationale attached.',
      label: 'Clinical Rationale',
      icon: { src: clinicalRationaleIcon, size: [14, 12] },
    },
    {
      title: 'Treatment across settings',
      text: 'Clinic, group, home, field and telehealth encounters landing on the same chart, whichever program delivered them.',
      label: 'Unified Chart',
      icon: { src: unifiedChartIcon, size: [12, 14] },
    },
    {
      title: 'Transition and follow-up',
      text: 'Step-downs scheduled before discharge, crisis follow-up tracked, and readmission arriving with the full history rather than as a new intake.',
      label: 'Continuous History',
      icon: { src: continuousHistoryIcon, size: [11, 12] },
    },
  ],
  note: 'Because Elixir is built on Salesforce, the configuration that makes this work for one state and payer is repeated for the next without a second instance to maintain.',
};

export const bhMeasurable = {
  eyebrow: 'Measurable',
  title: 'Outcomes You Can Show a Payer, a Board and a State',
  description:
    '“Measurable” is an easy word to put on a website. What it has to mean operationally is that the measure gets collected when it is due, gets seen by the person who can act on it, and adds up to something reportable at the end of the quarter.',
  items: [
    {
      icon: { src: measureScheduleIcon, size: [16, 18] },
      title: 'Collected on schedule',
      text: 'Due dates for PHQ-9, GAD-7, Columbia-SSRS, BAM or service-specific instruments trigger prompts to the clinician or go to the patient portal before the visit — not left to memory.',
    },
    {
      icon: { src: measureDecisionsIcon, size: [19, 15] },
      title: 'Seen where decisions happen',
      text: 'Scores trend on the encounter screen, not buried in an outcomes tab. A prescriber sees the symptom trajectory alongside the medication list.',
    },
    {
      icon: { src: measureActedIcon, size: [17, 18] },
      title: 'Acted on',
      text: 'No change or deterioration after the expected interval surfaces in supervision and team huddles — not just in a post-discharge review.',
    },
    {
      icon: { src: measureRiskIcon, size: [19, 16] },
      title: 'Attached to risk',
      text: 'A positive Columbia-SSRS or audit score automatically opens the corresponding safety plan or assessment workflow, with the response documented before the encounter closes.',
    },
    {
      icon: { src: measureRolledIcon, size: [17, 18] },
      title: 'Rolled up honestly',
      text: 'Reports distinguish between patients who improved, patients who stayed stable, and patients whose measure was never collected — so an executive or a board sees actual performance, not an inflated numerator.',
    },
    {
      icon: { src: measureContractsIcon, size: [16, 18] },
      title: 'Ready for value-based contracts',
      text: 'Because measures sit as structured data on Salesforce objects, building a payer-specific outcomes extract is a report configuration, not an engineering ticket.',
    },
  ],
};

export const bhCompliance = {
  eyebrow: 'Compliance',
  title: 'The Behavioral Health Compliance Spine: HIPAA, 42 CFR Part 2 and Consent',
  description:
    'Behavioral health carries a confidentiality regime that general healthcare does not, and the February 2024 final rule — whose compliance date of 16 February 2026 has now passed — brought substance use records under HIPAA’s breach notification rule and penalty tiers.',
  items: [
    {
      label: 'Scope',
      title: 'Separation by scope',
      text: 'Mental health records and Part 2 substance use records live on the same patient chart with role- and consent-governed access controls, so clinicians see what they are legally permitted to see and no more.',
    },
    {
      label: 'Consent',
      title: 'Granular Part 2 consent',
      text: 'Single-consent models for treatment, payment and operations (TPO) with explicit capture of patient-specified restrictions, entity-specific consents where required, and automatic revocation handling.',
    },
    {
      label: 'Notes',
      title: 'Psychotherapy notes',
      text: 'True separation of psychotherapy notes from the rest of the medical record under 45 CFR § 164.501, requiring specific authorization for disclosure outside the treating clinician.',
    },
    {
      label: 'Trail',
      title: 'Accounting of disclosures',
      text: 'Every disclosure of Part 2 records — internal and external, electronic and exported — captured in an immutable audit trail fulfilling the 2024 final rule’s accounting requirements.',
    },
    {
      label: 'Legal',
      title: 'Court-order safeguards',
      text: 'Guardrails that prevent unauthorized disclosure of Part 2 records in civil, criminal, administrative or legislative proceedings without the heightened court order Part 2 explicitly requires.',
    },
    {
      label: 'Shared',
      title: 'Single audit boundary',
      text: 'Because both service lines share Salesforce’s enterprise trust infrastructure, your security team defends and audits one environment rather than two vendors’ distinct tech stacks.',
    },
  ],
  footnote: {
    text: 'For full detail on Elixir’s Part 2 consent engine, see the substance use disorder page.',
    link: { label: 'Go to Substance Use Disorder Page', to: '/behavioral-health/substance-use-disorder' },
  },
};

// Each card links to the existing KratuAI page it names.
export const bhKratu = {
  eyebrow: 'AI',
  title: 'KratuAI Across Behavioral Health',
  description:
    'One AI engine and one governance model across both service lines — built to reduce documentation time and catch revenue problems early, never to make a clinical decision.',
  items: [
    {
      title: 'Visit Prep',
      text: 'Pulls prior goals, last session’s plan, current meds and overdue measures into a one-page summary before the patient walks in.',
      to: '/kratu-ai/visit-prep',
    },
    {
      title: 'Kratu Co-Pilot',
      text: 'Ambient draft documentation from the session audio, structured to your note format and ready for clinician review and signature.',
      to: '/kratu-ai/elixir-co-pilot-clinical-assistant',
    },
    {
      title: 'Payor Policy Intelligence',
      text: 'Flags missing medical-necessity documentation, overlapping billing codes or uncovered service combinations before claim submission.',
      to: '/kratu-ai/payor-policy-intelligence',
    },
    {
      title: 'No-Show Prediction',
      text: 'Identifies appointments with high cancellation probability so front-desk staff can offer transportation support or proactive outreach.',
      to: '/patient-no-show-prediction',
    },
    {
      title: 'Responsible AI',
      text: 'Zero-retention architecture, transparent prompt models, and clinician sign-off on every generated word.',
      to: '/responsible-ai',
    },
    {
      title: 'The KratuAI engine',
      text: 'Learn more about the models, security boundaries, and enterprise governance powering Kratu across Elixir.',
      to: '/kratu-ai',
    },
  ],
  note: 'Across both service lines the same limits apply: AI does not assess risk, determine a level of care, decide medical necessity, or write anything into the record a person has not reviewed and signed. Your data is not used to train a model for anyone else.',
};

// Shared FaqSection: the first half of `items` fills the left column, so the order keeps each
// question in its frame column. The frame has no FAQ description.
export const bhFaq = {
  eyebrow: 'FAQ',
  title: 'Behavioral Health EHR: Frequently Asked Questions',
  items: [
    {
      question: 'Do we have to buy both mental health and substance use modules together?',
      answer:
        'No. Many organizations start with one — mental health for an outpatient clinic, or substance use for an addiction treatment facility — and add the second when they expand service lines or bring a new program onto the platform. Because both live in the same Elixir data model, turning on the second does not require a data migration, a second login, or a fresh integration to your billing or lab partners.',
    },
    {
      question: 'Can we configure different clinical forms for each state we operate in?',
      answer:
        'Yes. Because Elixir is built natively on Salesforce, form configuration, field requirements, assessment templates and billing rules are defined per service line, per program, and per state. You can maintain state-specific Medicaid assessment formats and clinical summaries in the same instance without custom code, using standard Salesforce configuration tools your administrator can manage.',
    },
    {
      question: 'What does "Salesforce-native" actually mean for a behavioral health organization?',
      answer:
        'It means Elixir is built entirely within Salesforce — not connected to it through an API or middleware. Your patient data, clinical notes, consents and billing records sit on Salesforce’s HIPAA-compliant, HITRUST-certified cloud infrastructure. You inherit Salesforce’s role-based access controls, reporting engine, integration ecosystem (including MuleSoft and AppExchange) and multi-region availability without managing your own server infrastructure.',
    },
    {
      question: 'How does Elixir separate 42 CFR Part 2 substance use records from mental health records on the same chart?',
      answer:
        'Through data-level security controls configured to the patient’s active Part 2 consents. Mental health encounters and substance use encounters live as separate record types with their own permission boundaries. A mental health clinician without Part 2 authorization cannot view the SUD portion of the chart unless a valid consent covering that clinician is on file. Disclosures, revocations and expiry are managed in the consent engine and recorded in the audit log.',
    },
    {
      question: 'How does Elixir handle outcome measures for patients receiving both mental health and SUD services?',
      answer:
        'Each service line maintains its own outcome schedule — for example, a PHQ-9 every four weeks in mental health therapy and a BAM or urine drug screen schedule in addiction treatment. Clinicians on each side see the measures relevant to their work, but authorized clinicians can view the combined timeline: symptom scores plotted alongside substance use frequency and medication changes on a single view.',
    },
    {
      question: 'How does Elixir support billing for behavioral health specifically?',
      answer:
        'Elixir’s revenue cycle engine supports the billing rules unique to behavioral health: incident-to billing, supervised billing (with the supervising clinician’s review captured in the note workflow), time-based evaluation and management codes, psychiatric add-on codes (such as +90833), interactive complexity (+90785), state Medicaid fee schedules, and per-diem / bundled billing for residential and withdrawal management programs.',
    },
  ],
};

// "Explore the platform" follows the site's existing `/platform` destination (as on About Us and
// What Is Elixir).
export const bhCtaBand = {
  eyebrow: 'Connected and measurable',
  title: 'See both service lines on one record',
  description:
    'Bring your programs, your states and your payer mix. We will show you a co-occurring patient moving through the continuum — the consent trail, the measures, the placement decision and the claim — on one chart.',
  cta: { label: 'Request a Demo', to: '/request-demo' },
  secondaryCta: { label: 'Explore the platform', to: '/platform' },
  related: {
    label: 'Related links:',
    links: [
      { label: 'Mental Health', to: '/behavioral-health/mental-health' },
      { label: 'Substance Use Disorder', to: '/behavioral-health/substance-use-disorder' },
    ],
  },
};
