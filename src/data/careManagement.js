// Care Management page (/care-management) — an independent top-level page.
// Copy is verbatim from the Figma. Links only point at routes that exist; Value-Based Care, Integrations
// and the ADT-feeds guide have no pages yet, so they render as plain text.
import heroPlaceholder from '../assets/contact-center/hero-placeholder.png';
import pillar1Icon from '../assets/care-management/icon-pillar-1.png';
import pillar2Icon from '../assets/care-management/icon-pillar-2.png';
import pillar3Icon from '../assets/care-management/icon-pillar-3.png';
import pillar4Icon from '../assets/care-management/icon-pillar-4.png';
import product1Icon from '../assets/care-management/icon-product-1.png';
import product2Icon from '../assets/care-management/icon-product-2.png';
import product3Icon from '../assets/care-management/icon-product-3.png';
import product4Icon from '../assets/care-management/icon-product-4.png';
import product5Icon from '../assets/care-management/icon-product-5.png';
import product6Icon from '../assets/care-management/icon-product-6.png';
import product7Icon from '../assets/care-management/icon-product-7.png';
import product8Icon from '../assets/care-management/icon-product-8.png';
import product9Icon from '../assets/care-management/icon-product-9.png';
import noteIcon from '../assets/care-management/icon-salesforce-note.png';
import infoIcon from '../assets/care-management/icon-info.png';
import apcm1Icon from '../assets/care-management/icon-apcm-1.png';
import apcm2Icon from '../assets/care-management/icon-apcm-2.png';
import apcm3Icon from '../assets/care-management/icon-apcm-3.png';
import apcmCheckIcon from '../assets/care-management/icon-apcm-check.png';
import badge1Icon from '../assets/care-management/icon-badge-1.png';
import badge2Icon from '../assets/care-management/icon-badge-2.png';
import badge3Icon from '../assets/care-management/icon-badge-3.png';
import badge4Icon from '../assets/care-management/icon-badge-4.png';
import mistakeIcon from '../assets/care-management/icon-mistake.png';
import fixIcon from '../assets/care-management/icon-fix.png';
import oigIcon from '../assets/care-management/icon-oig.png';
import claimsIcon from '../assets/care-management/icon-claims.png';

const icon = (src, w, h) => ({ src, size: [w, h] });

export const cmHero = {
  currentPage: 'Care Management',
  titleLines: ['Care Management', 'Software That Keeps', 'Every Team on One', 'Plan'],
  titleAccent: [],
  description:
    'Most of care management happens with no patient in the room — the call, the medication check, the chase after a discharge. It is also one of the few places in healthcare where that invisible work is paid for directly. It pays on a plan, an owner and documented time.',
  primaryCta: { label: 'Request a Demo', to: '/request-demo', arrow: false },
  // The frame gives no destination; it scrolls to "Chronic Care Management Billing", the codes table.
  secondaryCta: { label: 'What the codes pay for', href: '#billing' },
  media: { src: heroPlaceholder, alt: '' },
};

export const cmPillars = [
  {
    icon: icon(pillar1Icon, 20, 19),
    label: 'Unified Core',
    title: 'One plan, not four',
    text: 'A single care plan every team writes into, rather than a copy per program that drifts within a month.',
  },
  {
    icon: icon(pillar2Icon, 15, 17),
    label: 'Accountability',
    title: 'Every task has a name on it',
    text: 'Goals and interventions carry an owner and a due date, so “the team is following up” becomes a person and a date.',
  },
  {
    icon: icon(pillar3Icon, 15, 18),
    label: 'Ledger Fidelity',
    title: 'Time that counts',
    text: 'Care management minutes captured against the right patient, program and month while the work is happening.',
  },
  {
    icon: icon(pillar4Icon, 18, 18),
    label: 'Rule Shield',
    title: 'Conflicts caught before the claim',
    text: 'One patient, one care management month, one billing practitioner — enforced in the record, not found in an audit.',
  },
];

export const cmProduct = {
  eyebrow: 'The product',
  title: 'What Elixir Care Management Software Actually Does',
  description:
    'Care management breaks in the gap between the plan and the work. Elixir closes it by keeping both in the same record: the plan, the tasks, the minutes, the outreach and the claim are one set of data on the Salesforce platform, not four systems reconciled at month end.',
  cards: [
    {
      icon: icon(product1Icon, 18, 12),
      title: 'One shared care plan',
      text: 'Goals, objectives and interventions as real objects with owners, due dates and status at every level, with barriers drawn from the patient’s social determinants record. Detailed on our care plan software page.',
      tag: 'Active Care Mapping',
    },
    {
      icon: icon(product2Icon, 18, 18),
      title: 'A contemporaneous time ledger',
      text: 'Minutes recorded as the work happens, by the person who did it, against the patient and the enrolled program. Time reconstructed at month end is the weakest evidence in an audit and the main reason organizations under-bill.',
      tag: 'Audit-Grade Trace',
    },
    {
      icon: icon(product3Icon, 20, 16),
      title: 'Thresholds visible during the month',
      text: 'How close each enrolled patient is to this month’s threshold, while there is still time in the month to act on it. The care manager should not have to remember which program applies.',
      tag: 'Proactive Tracking',
    },
    {
      icon: icon(product4Icon, 16, 18),
      title: 'Clocks that start from the event',
      text: 'Admission, discharge and transfer feeds, plan notifications and referrals land as events against the patient, so a transitional care window starts on the discharge date rather than when the fax is opened.',
      tag: 'ADT Event Sync',
    },
    {
      icon: icon(product5Icon, 18, 18),
      title: 'Consent captured once',
      text: 'Consent, the care plan, the time entries and the practitioner of record all attached to the care management month, so an audit response is a query rather than a project.',
      tag: 'Single-Click Binder',
    },
    {
      icon: icon(product6Icon, 18, 20),
      title: 'A collaborative care registry',
      text: 'A live list of every patient in the program with current score, last contact, trajectory and time in treatment — so the weekly psychiatric caseload review is a working session, not a spreadsheet.',
      tag: 'CoCM Registry',
    },
    {
      icon: icon(product7Icon, 20, 20),
      title: 'Panel and caseload views',
      text: 'Who has had no contact, who has an open goal, who is drifting — and assigned caseload against contact actually delivered, per care manager, this month.',
      tag: 'Caseload Balancing',
    },
    {
      icon: icon(product8Icon, 16, 18),
      title: 'Billing conflict detection',
      text: 'A patient’s care management month is a single object with one program and one billing practitioner. A second claim against it is a conflict raised before submission.',
      tag: 'Pre-Claim Guardrail',
    },
    {
      icon: icon(product9Icon, 18, 18),
      title: 'Programs as configuration',
      text: 'Eligibility, required services, cadence, documentation and billing shape are configured, not coded. Adding a state Medicaid program or absorbing a rule change is a data change.',
      tag: 'Metadata-Driven Engine',
    },
  ],
  note: {
    icon: icon(noteIcon, 22, 16),
    text: [
      'Built on Salesforce, so the care plan, the outreach, the scheduling and the claim are the same record. Related: ',
      { text: 'Care Coordination', to: '/care-coordination' },
      ' for work that crosses an organizational boundary, Value-Based Care for the measures that score the result, and ',
      { text: 'Contact Center', to: '/contact-center' },
      ' for the outreach.',
    ],
  },
};

export const cmBilling = {
  id: 'billing',
  eyebrow: 'The commercial case',
  title: 'Chronic Care Management Billing: Getting Paid for the Work Between Visits',
  description:
    'Nearly all of this pays on documented time against a monthly threshold, which makes the record the revenue. Two features of the rules matter more than the rest: the work may be furnished under general supervision, so a centralized care team is viable at all — and almost nobody is using the codes. Chronic care management reaches a low single-digit percentage of eligible Medicare patients; collaborative care reaches well under one per cent of beneficiaries with a behavioral health condition.',
  columns: ['Program family', 'Typical codes', 'What Medicare requires'],
  rows: [
    {
      family: 'Chronic care management',
      codes: '99490, 99439, 99491, 99437',
      requires:
        'Two or more chronic conditions expected to last a year or until death. 20 minutes of clinical staff time in the month, or 30 of the practitioner’s own; a comprehensive care plan; patient consent; certified EHR technology',
    },
    {
      family: 'Complex chronic care',
      codes: '99487, 99489',
      requires:
        '60 minutes of clinical staff time and moderate or high complexity medical decision-making — the complexity is a clinical judgment, not a time bracket',
    },
    {
      family: 'Principal care management',
      codes: '99424–99427',
      requires:
        'A single high-risk condition expected to last at least three months, with a disease-specific care plan rather than a comprehensive one. The route in for specialists',
    },
    {
      family: 'Transitional care',
      codes: '99495, 99496',
      requires:
        'Contact within two business days of a discharge, then a face-to-face visit within fourteen days, or within seven for the higher-complexity code. The clock starts on the discharge day',
    },
    {
      family: 'Behavioral health integration',
      codes: '99484, G0323',
      requires: '20 minutes in the month, a validated rating scale, a care plan and systematic follow-up',
    },
    {
      family: 'Collaborative care',
      codes: '99492, 99493, 99494, G2214',
      requires:
        '70 minutes in the first month and 60 thereafter, a patient registry, and weekly caseload review with a psychiatric consultant',
    },
    {
      family: 'Advanced primary care',
      codes: 'G0556–G0558',
      highlight: true,
      requires:
        'No time threshold at all. Ten service elements must be in place, including 24/7 access, an electronic care plan and population-level management of the attributed panel',
    },
    {
      family: 'Community health integration',
      codes: 'G0019, G0022',
      requires:
        'Unmet social needs interfering with a diagnosis or treatment plan. 60 minutes by auxiliary personnel incident to the practitioner, under general supervision',
    },
    {
      family: 'Principal illness navigation',
      codes: 'G0023, G0024, G0140, G0146',
      requires:
        'Navigating a serious, high-risk illness. 60 minutes by navigators or certified peer support specialists under general supervision',
    },
    {
      family: 'Caregiver training',
      codes: '96202, 96203, 97550–97552',
      requires:
        'Training the caregiver in the techniques the patient’s care depends on. The patient does not have to be present — which is the point, and the thing most organizations do not realize is payable',
    },
  ],
  note: {
    icon: icon(infoIcon, 17, 17),
    text: 'Thresholds reflect the calendar year 2026 Physician Fee Schedule final rule; general supervision for designated care management sits at 42 CFR 410.26(b)(5). Nothing on this page is billing advice, and we would encourage you to verify every requirement against the published rule rather than a vendor’s summary, ours included.',
  },
};

export const cmApcm = {
  eyebrow: 'The shift',
  title: 'Advanced Primary Care Management: Care Management Without the Stopwatch',
  description:
    'The most interesting thing Medicare has done here recently is to stop counting minutes. These codes pay monthly for an attributed panel and ask instead whether a defined set of capabilities genuinely exists — which makes them a better fit for organizations whose care management is real but whose minute capture is patchy.',
  check: icon(apcmCheckIcon, 9, 7),
  cards: [
    {
      icon: icon(apcm1Icon, 14, 14),
      chip: 'What changes',
      title: 'A capability test, not a time test',
      points: [
        'Payment is monthly, per attributed patient, across three clinical levels.',
        'No minimum minutes per patient per month to track.',
        'No stopwatches running during patient calls.',
        'Cannot be billed in the same month as CCM, PCM, TCM, BHI or CoCM for the same patient.',
      ],
    },
    {
      icon: icon(apcm2Icon, 14, 10),
      chip: 'What you have to have',
      title: 'Ten service elements, several of them structural',
      points: [
        '24/7 access to care team members with EHR access.',
        'Continuity of care with a designated practitioner.',
        'Comprehensive electronic care plan available to the patient and other care team members.',
        'Care management for transitions of care.',
        'Ongoing population-level management of the panel.',
      ],
    },
    {
      icon: icon(apcm3Icon, 12, 14),
      chip: 'What Elixir contributes',
      title: 'The elements as working features, not attestations',
      points: [
        'The shared care plan that survives the encounter.',
        'Automated transitional care tracking off ADT feeds.',
        'Population-level panel views for gap closure.',
        'Attribution ledger linked to the patient record.',
        'Billing conflict rules that stop a CCM claim going out in an APCM month.',
      ],
    },
  ],
  note: 'Levels, required elements and the interaction with the time-based families are set by CMS and were revised again for 2026. Elixir holds program definitions as configuration, so a rule change is a data change.',
};

export const cmTransitions = {
  eyebrow: 'Transitions',
  title: 'Transitional Care Management: the Thirty Days After a Discharge',
  description:
    'The most time-bound care management work, and the most frequently lost. Three clocks start at once, they start on the day of discharge rather than the day you hear about it, and two of them are short.',
  steps: [
    {
      tone: 'red',
      icon: icon(badge1Icon, 16, 16),
      badge: 'Day 0',
      title: 'The discharge happens, whether or not you know',
      text: 'The clock starts on the calendar day the patient leaves an inpatient hospital, observation, SNF, partial hospitalization or rehab stay. TCM cannot be billed if you do not know the discharge happened until day four. Elixir consumes ADT and event notification feeds directly onto the patient record, so the case opens and the window starts the day the patient leaves.',
    },
    {
      tone: 'lime',
      icon: icon(badge2Icon, 15, 16),
      badge: '2 business days',
      title: 'Interactive contact, and a documented attempt counts',
      text: 'Telephone, email or face-to-face. Clinical staff under general supervision can make it. Two failed attempts qualify if made within the two business days and documented contemporaneously, with continuing effort thereafter. Elixir logs the attempt, the channel and the timestamp against the transitional care episode.',
    },
    {
      tone: 'lime',
      icon: icon(badge3Icon, 15, 16),
      badge: '7 or 14 days',
      title: 'The face-to-face visit, inside the window the complexity sets',
      text: 'Within 14 calendar days of discharge for moderate medical decision-making (99495), within 7 for high complexity (99496). Must be delivered by a physician or qualifying non-physician practitioner. Elixir links the post-discharge visit scheduling to the TCM episode so the open window is visible to scheduling staff.',
    },
    {
      tone: 'lavender',
      icon: icon(badge4Icon, 16, 15),
      badge: 'The miss',
      title: 'Escalation while the window is still open',
      text: 'If day two passes without contact or day twelve without a scheduled visit, the episode flags for supervisor intervention. If the face-to-face is missed, the work already done converts where eligible to a general care management month, rather than being written off as lost time.',
    },
  ],
  // "Integrations" and "guide to ADT feeds" are links in the frame; neither page exists yet.
  note: 'For the integration work that brings discharge notifications in, see Integrations and our guide to ADT feeds.',
};

export const cmCompliance = {
  eyebrow: 'Compliance',
  title: 'Care Management Billing Compliance: Where the Audits Actually Land',
  description:
    'Federal audits of chronic care management have found overpayments in the millions. Almost all of it comes from two mistakes, and both are structural rather than clinical.',
  cards: [
    {
      tone: 'mistake',
      icon: icon(mistakeIcon, 20, 21),
      label: 'Mistake 1',
      title: 'The same month, billed twice.',
      text: 'CMS allows only one practitioner to bill chronic care management for a patient in a given calendar month. When a primary care clinic and a cardiologist each run a care management program without knowing about the other, one of the claims is an overpayment.',
      tag: 'Frequent Audit Finding',
    },
    {
      tone: 'mistake',
      icon: icon(mistakeIcon, 20, 21),
      label: 'Mistake 2',
      title: 'Overlapping services.',
      text: 'CCM cannot be billed during the 30-day post-discharge period of Transitional Care Management by the same practitioner; collaborative care, complex chronic care, remote patient monitoring and the new APCM codes each have their own mutual-exclusion rules.',
      tag: 'Structural Rule Friction',
    },
    {
      tone: 'fix',
      icon: icon(fixIcon, 22, 21),
      label: 'The Elixir Fix',
      title: 'What Elixir does about it.',
      text: 'Because a patient’s care management month is a single object in Elixir, the platform enforces these rules before claim submission: a second enrollment in the same month requires explicit override, a TCM episode suppresses CCM claims across the 30-day window, and time entries can belong to only one program at once.',
      tag: 'Automated Enforcement',
    },
  ],
  note: {
    icon: icon(oigIcon, 14, 17),
    text: 'OIG report A-07-21-06088 (November 2023) examined Medicare payments for chronic care management services and found that CMS paid millions in improper payments for CCM claims that did not comply with Medicare requirements, principally through duplicate monthly claims and claims overlapping with other services.',
  },
};

export const cmClaims = {
  eyebrow: 'Straight answers',
  title: 'What We Will Not Claim About Care Management Software',
  lead: 'So why do it? Because it is now paid for directly.',
  paragraphs: [
    'Under fee-for-service, phone calls with patients, coordination with pharmacies and follow-ups after discharge were uncompensated overhead. Under the care management code families, they are reimbursable encounters with defined billing rules. Even without an active value-based contract, an organization that delivers this care can bill for it legally and profitably.',
    'And under value-based contracts, care management is the primary mechanism for closing quality gaps, preventing avoidable readmissions, and keeping attributed populations healthy enough to stay out of the hospital. The codes provide the immediate cash flow to sustain teams that would otherwise be cost centers while long-term shared-savings metrics mature.',
  ],
  panel: {
    icon: icon(claimsIcon, 15, 19),
    title: 'Four things we will not tell you:',
    items: [
      {
        title: 'That care management cuts hospitalizations and costs.',
        text: 'Sometimes it does; often it does not. The evidence across large trials is mixed, because care management frequently uncovers unmet needs that lead to more care, not less. We will not promise an ROI based on cost reduction that the literature does not support.',
      },
      {
        title: 'A before-and-after improvement percentage.',
        text: 'Vendor websites are full of claims that software alone reduced readmissions by 34% or increased revenue by 40%. Those numbers depend on the patient panel, the staffing model, the local payer mix and the baseline — none of which are the software.',
      },
      {
        title: 'That a risk score will tell you who to enroll.',
        text: 'Risk algorithms find high-cost patients; they do not find “impactable” patients. Enrolling people who are either too sick to benefit from phone calls or healthy enough to do fine without them wastes care manager time. The clinical team has to decide who is impactable.',
      },
      {
        title: 'A caseload number.',
        text: '“One care manager can handle 250 patients” is a sales number, not an operational one. A realistic caseload depends on acuity, the code family, whether outreach is telephone or home-visit, and how much administrative work sits on the care manager.',
      },
    ],
  },
};

// Shared FAQ (RCM accordion). The shared section fills its left column first, so the frame's left
// column (questions 1, 3, 5) comes first here, then its right column (2, 4, 6).
export const cmFaq = {
  title: 'Care Management Software: Frequently Asked Questions',
  description: 'What care management directors, quality leads and finance teams ask us first.',
  items: [
    {
      question: 'What is care management software?',
      answer:
        'Care management software supports the clinical and operational work delivered between encounters to patients with chronic conditions, high utilization or complex health and social needs. Unlike an EHR, which is structured around discrete visits, care management software tracks longitudinal goals, outreach, time spent on non-face-to-face services, and the documentation required to bill Medicare and commercial care management codes.',
    },
    {
      question: 'What is the difference between care management and care coordination software?',
      answer:
        'Care management focuses on longitudinal clinical oversight of an enrolled population — establishing goals, monitoring status, coordinating interventions and documenting time for billing or quality programs. Care coordination is a component of care management that specifically manages handoffs, referrals, transitions of care and information exchange across organizational boundaries. Elixir supports both within the same patient record.',
    },
    {
      question: 'How does care management software capture billable time?',
      answer:
        'Elixir logs time contemporaneously against the patient record as clinical staff perform qualifying activities — phone calls, chart reviews, care plan updates, coordination with specialists or community services. Time entries record the staff member, duration, activity type and associated care plan goal. As monthly thresholds are reached (e.g., 20 minutes for 99490), the system flags the patient as billing-eligible.',
    },
    {
      question: 'Can care management software prevent duplicate billing audits?',
      answer:
        'Yes, when built with structural billing rules. Federal audits (such as OIG report A-07-21-06088) frequently cite duplicate monthly claims and unallowed overlapping services (e.g., billing CCM during a TCM 30-day window). Elixir treats a patient’s care management month as a single object, preventing conflicting claims from being generated across programs or practitioners.',
    },
    {
      question: 'Does care management software support behavioral health integration?',
      answer:
        'Elixir supports both General Behavioral Health Integration (BHI, CPT 99484) and the Psychiatric Collaborative Care Model (CoCM, CPT 99492–99494). For CoCM, the platform includes the required electronic registry: tracking validated rating scale scores (PHQ-9, GAD-7) over time, logging time against monthly thresholds (70 min initial, 60 min subsequent), and supporting weekly caseload reviews with the consulting psychiatrist.',
    },
    {
      question: 'How does care management software integrate with our existing EHR?',
      answer:
        'Elixir integrates via FHIR APIs, HL7 v2 and direct database connections to exchange demographic data, clinical encounters, problem lists, medications and ADT feeds. When implemented on Salesforce Health Cloud, Elixir can either serve as the care management layer alongside an existing EHR or operate as a fully unified EHR and care management environment.',
    },
  ],
};

export const cmCtaBand = {
  eyebrow: 'Start with one month',
  title: 'How many care management minutes did your team deliver last month?',
  description:
    'If answering that takes a spreadsheet and a week, you already know where the revenue is going. Bring us one program and one month, and we will show you the work that happened and was never captured.',
  cta: { label: 'Request a Demo', to: '/request-demo' },
  secondaryCta: { label: 'Care Plan Software', to: '/care-management/care-plan-management' },
};
