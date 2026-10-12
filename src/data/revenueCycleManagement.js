// Revenue Cycle Management page content — copy reproduced exactly from the Figma "RCM" frame.

import heroMedia from '../assets/revenue-cycle-management/hero-media.png';
import cms1500Form from '../assets/revenue-cycle-management/cms-1500-form.png';
import ub04Form from '../assets/revenue-cycle-management/ub-04-form.png';
import claimValidationErrors from '../assets/revenue-cycle-management/claim-validation-errors.png';
import clearinghouseRejections from '../assets/revenue-cycle-management/clearinghouse-rejections.png';
import eraPaymentPosting from '../assets/revenue-cycle-management/era-payment-posting.png';
import eraIngestionIcon from '../assets/revenue-cycle-management/icon-era-ingestion.png';
import eraClaimDetailIcon from '../assets/revenue-cycle-management/icon-era-claim-detail.png';
import eraAdjustmentsIcon from '../assets/revenue-cycle-management/icon-era-adjustments.png';
import eraPostingIcon from '../assets/revenue-cycle-management/icon-era-posting.png';
import behavioralHealthIcon from '../assets/revenue-cycle-management/icon-behavioral-health.png';
import medicalGroupsIcon from '../assets/revenue-cycle-management/icon-medical-groups.png';
import communityHealthIcon from '../assets/revenue-cycle-management/icon-community-health.png';
import billingOrganizationsIcon from '../assets/revenue-cycle-management/icon-billing-organizations.png';

export const rcmHero = {
  currentPage: 'Revenue Cycle Management',
  titleLines: ['Healthcare Revenue', 'Cycle Management and', 'Payer Workflows'],
  titleAccent: ['Healthcare Revenue', 'Cycle'],
  description:
    'Unified, native clinical-financial synchronization delivering end-to-end adjudication transparency and automated payer reconciliation.',
  media: {
    src: heroMedia,
    alt: 'Revenue cycle team reviewing a patient dashboard on a large screen',
  },
};

export const unifiedPlatform = {
  badge: 'Unified RCM Platform',
  title: 'Connect Every Step of the Healthcare Revenue Cycle',
  lead:
    'Revenue cycle problems are rarely billing problems. They start upstream, with an unverified plan, a missing authorization, or a code the payer will not accept, and surface weeks later as a denial.',
  // Emphasised phrases follow the frame; each links to the section that covers it on this page.
  // The frame has a wide (three-space) gap before "medical claims management".
  body: [
    'Elixir brings ',
    { text: 'eligibility verification', href: '#eligibility-verification' },
    ', ',
    { text: 'payer workflows', href: '#payer-workflow-management' },
    ',   ',
    { text: 'medical claims management', href: '#medical-claims-management', strong: true },
    ', clearinghouse transactions, ',
    { text: 'ERA payment posting', href: '#era-payment-posting' },
    ', denials and patient billing into the same healthcare platform your clinical and front-office teams already work in. Built natively on Salesforce, Elixir keeps clinical, payer and financial activity on one record, so the information that determines whether a claim gets paid is captured where the work actually happens.',
  ],
  primaryCta: { label: 'Request an Elixir Demo', to: '/request-demo' },
  secondaryCta: { label: 'Explore RCM Workflows', href: '#rcm-workflows' },
};

// Stage groups drive the card's top bar and label colour, and the legend.
export const patientJourney = {
  title: 'Healthcare RCM Across the Patient Journey',
  description:
    'Sixteen connected stages, from patient registration to reconciliation, on one platform rather than across disconnected applications.',
  // Only the "All stages" state is designed; the other pills are shown inactive.
  filters: ['All stages', 'Patient access', 'Clinical & coding', 'Claims & payer', 'Payment & resolution'],
  legend: [
    { group: 'access', label: 'Patient access' },
    { group: 'clinical', label: 'Clinical and coding' },
    { group: 'claims', label: 'Claims and payer' },
    { group: 'payment', label: 'Payment and resolution' },
  ],
  stages: [
    { group: 'access', label: 'Patient access', title: 'Patient' },
    { group: 'access', label: 'Patient access', title: 'Insurance' },
    { group: 'access', label: 'Patient access', title: 'Eligibility' },
    { group: 'access', label: 'Patient access', title: 'Authorization' },
    { group: 'clinical', label: 'Clinical', title: 'Encounter' },
    { group: 'clinical', label: 'Clinical', title: 'Documentation' },
    { group: 'clinical', label: 'Clinical', title: 'Coding' },
    { group: 'claims', label: 'Claims', title: 'Claim creation' },
    { group: 'claims', label: 'Claims', title: 'Validation' },
    { group: 'claims', label: 'Claims', title: 'Clearinghouse' },
    { group: 'claims', label: 'Payer', title: 'Claim status' },
    { group: 'payment', label: 'Remittance', title: 'ERA (835)' },
    { group: 'payment', label: 'Remittance', title: 'Payment posting' },
    { group: 'payment', label: 'Resolution', title: 'Denials' },
    { group: 'payment', label: 'Resolution', title: 'Appeals' },
    { group: 'payment', label: 'Resolution', title: 'Patient\nbalance' }, // line break as in the frame
  ],
};

export const eligibility = {
  badge: 'Upstream Verification',
  title: 'Healthcare Eligibility Verification',
  body: [
    'Eligibility is the first financial checkpoint in the revenue cycle, and the cheapest place to catch a problem. Elixir supports ',
    { text: 'insurance eligibility verification', emphasis: true },
    ' through 270 eligibility inquiry and 271 response transactions exchanged with supported payers and clearinghouse connections, so staff can confirm coverage before a patient is seen rather than after a claim is denied.',
  ],
  points: [
    'Coverage status, plan and payer identification from the 271 response',
    'Benefit detail including copay, coinsurance and deductible information returned by the payer',
    'Coverage effective and termination dates, with the last verified date on the record',
    'Verification status and coverage status shown separately, so a plan that verified but has since lapsed is visible',
    'Eligibility history retained for audit and follow-up',
  ],
  note: 'Results are stored against the patient and the insurance record, which means the front desk, the clinical team and the billing team are all reading the same answer.',
  // Sample record shown in the frame's "Insurance Details" card.
  insuranceCard: {
    title: 'Insurance Details',
    status: 'Active Coverage',
    fields: [
      { label: 'Primary Payer', value: 'Aetna Choice POS II', style: 'lead' },
      { label: 'Payer ID', value: '60054', style: 'mono-lead' },
      { label: 'Member ID', value: 'W102948190', style: 'mono' },
      { label: 'Group Number', value: 'GRP-88204-TX', style: 'mono' },
      { label: 'Copay / Coinsurance', value: '$30.00 / 20%', style: 'strong' },
      { label: 'Remaining Deductible', value: '$350.00 / $1,500.00', style: 'strong' },
      { label: 'Effective Window', value: '01/01/2025 - 12/31/2025', style: 'mono' },
      { label: 'Last Verified (271)' },
    ],
    action: 'Verify Coverage (270)',
  },
};

export const payerWorkflow = {
  badge: 'Rules Automation',
  // Line break follows the frame.
  titleLines: ['Payer Workflow', 'Management'],
  body: [
    'Every payer has its own rules, forms, timelines and tolerances. ',
    { text: 'Payer workflow management', strong: true },
    " in Elixir means payer-specific requirements are configured into the work rather than carried in a spreadsheet or in someone's head, and that every payer interaction stays attached to the patient, the claim and the money.",
  ],
  points: [
    'Payers, payer IDs, plans and subscriber detail maintained as records that claims read from',
    {
      bold: true,
      content: [
        { text: 'Prior authorization', strong: true },
        ' numbers, covered services, units and validity dates tracked and surfaced at claim validation',
      ],
    },
    'Payer-specific rules applied when the claim is built, including timely filing windows and NDC reporting',
    'Submission, acknowledgement, rejection, payment and denial tracked against the claim',
    'Adjudication detail returned to the claim at claim and line level',
  ],
};

export const claimForms = {
  title: 'Professional and Institutional Claim Forms',
  description:
    'Elixir produces both claim types from the same patient and encounter data, so professional and institutional billing run on one record set.',
  // `lines` keeps the frame's hard line breaks inside each card description.
  forms: [
    {
      title: 'CMS-1500 Professional Claims',
      lines: [
        'Generate and review professional claims on the NUCC-approved CMS-1500 layout,',
        'populated from patient, subscriber, provider and procedure data in Elixir. Corresponds to the 837P transaction.',
      ],
      image: { src: cms1500Form, alt: 'CMS-1500 health insurance claim form screen in Elixir' },
    },
    {
      title: 'UB-04 Institutional Claims',
      lines: [
        'Support institutional billing on the UB-04 layout, including type of bill, statement covers period, condition codes, and occurrence codes and dates. Corresponds to the',
        '837I transaction.',
      ],
      image: { src: ub04Form, alt: 'UB-04 institutional claim form screen in Elixir' },
    },
  ],
};

export const medicalClaims = {
  badge: 'Clean Claims Engine',
  title: 'Medical Claims Management',
  body: [
    "Elixir's ",
    { text: 'medical claims management software', emphasis: true },
    ' builds claims from the patient, coverage, provider and encounter data already held in the platform, then validates them against the rules that decide whether a payer will accept them.',
  ],
  callout:
    'Validation runs before submission and returns errors at the field the biller has to fix, on the claim and on the individual claim line.',
  points: [
    'Claim and claim-line validation with the specific reason shown beside the field',
    'Coding edits including NCCI bundling relationships and Medically Unlikely Edit unit limits',
    'Modifier requirements when procedures are billed together on the same date of service',
    'Medical necessity checks against local coverage determination policy',
    "Timely filing awareness, including how much of the payer's window remains",
    'Corrections, replacements and resubmission with history retained on the record',
  ],
  image: {
    src: claimValidationErrors,
    alt: 'Elixir claim record showing claim-level and line-level validation errors',
  },
};

export const clearinghouse = {
  badge: 'Clearinghouse EDI',
  // Line break follows the frame.
  titleLines: ['Integrated Healthcare', 'Clearinghouse Connectivity'],
  body: 'Connect Elixir to supported clearinghouse workflows to exchange eligibility, claims, remittance and claim-status transactions without forcing revenue cycle teams to manage disconnected systems. EDI transactions are staged, tracked and reconciled inside the platform, and responses come back to the claim they belong to.',
  subtitle: 'Rejections are resolved on the claim, not in a portal',
  detail:
    'When a clearinghouse rejects a claim, the rejection is written back to the claim record with the offending field and the message beside it: an invalid procedure code, an invalid modifier, an NPI that does not validate, a diagnosis code the payer will not accept, a subscriber ID that does not match. Claim errors, validation errors and EDI errors are kept separate, so teams can tell a data problem Elixir caught from one the clearinghouse caught.',
  benefits: [
    'Fewer disconnected workflows between billing system, clearinghouse and payer portal',
    'Centralized visibility of transactions and their responses',
    'Less manual re-keying between systems',
    'Traceability from transaction back to claim, encounter and patient',
  ],
  image: {
    src: clearinghouseRejections,
    alt: 'Elixir claim record showing clearinghouse rejection errors beside each field',
  },
  table: {
    columns: ['Transaction', 'What it does', 'Where it appears in Elixir'],
    rows: [
      ['270', 'Eligibility and benefit inquiry sent to the payer', 'Eligibility verification from the patient insurance record'],
      ['271', 'Eligibility and benefit response returned by the payer', 'Coverage, benefits and eligibility history on the patient'],
      ['837P', 'Professional claim submission', 'CMS-1500 claims created and validated in Elixir'],
      ['837I', 'Institutional claim submission', 'UB-04 claims created and validated in Elixir'],
      ['276', 'Claim status inquiry', 'Claim status follow-up on the claim record'],
      ['277', 'Claim status response and acknowledgement', 'Claim status, acknowledgement and rejection detail'],
      ['835', 'Electronic remittance advice', 'ERA ingestion, matching and payment posting'],
    ],
  },
};

export const eraPosting = {
  // Line break follows the frame.
  titleLines: ['Electronic Remittance Advice and', 'Payment Posting'],
  description:
    'An 835 ERA tells you what the payer decided and what it paid. Elixir ingests the file, matches it to the claims it covers and turns it into a posting worklist, so teams are reconciling rather than re-typing.',
  image: {
    src: eraPaymentPosting,
    alt: 'Elixir ERA Payment Posting screen with parent ERA details, payment summary and child ERAs',
  },
  caption: 'Parent remittance, matched claims and the action to be taken on each line. Sample data shown.',
  steps: [
    {
      title: 'Remittance ingestion and matching',
      description:
        'The 835 is processed into a parent ERA with payer, provider, payment method, payment trace number and EFT date, then matched against the claims it references. Matched and unmatched amounts are shown so nothing posts against an unexplained balance.',
      icon: eraIngestionIcon,
      iconSize: [14, 15],
    },
    {
      title: 'Claim-level and line-level detail',
      description:
        'Each child ERA carries the claim, claim type, ERA status code, total billed, total allowed, total paid, patient responsibility, interest and net paid.',
      icon: eraClaimDetailIcon,
      iconSize: [16, 15],
    },
    {
      title: 'Provider-level adjustments',
      description:
        'Provider-level adjustments (PLB) are accounted for against the remittance total, so the difference between the payment and the sum of claim payments is explained rather than written off blind.',
      icon: eraAdjustmentsIcon,
      iconSize: [16, 15],
    },
    {
      title: 'Posting and downstream action',
      description:
        'Post all lines or post selected lines, and set the action each line requires: contractual write-off, patient responsibility, or route to the denial worklist.',
      icon: eraPostingIcon,
      iconSize: [16, 15],
    },
  ],
};

export const denialManagement = {
  badge: 'Active Resolution',
  // Line break follows the frame.
  titleLines: ['Healthcare Denial', 'Management'],
  body: "A denial is only workable if the person working it can see why it happened. In Elixir, denials arrive through the remittance with the payer's reason code attached, and stay connected to the claim, the claim line, the encounter, the payer and the patient balance they affect.",
  points: [
    {
      bold: true,
      content: [
        { text: 'Identification:', strong: true },
        ' denied lines flagged as the ERA is processed and routed to a denial worklist during posting, rather than discovered in a later A/R review',
      ],
    },
    {
      bold: true,
      content: [
        { text: 'Reason and context:', strong: true },
        ' the reason code sits with the claim line, the procedure, the diagnosis, the authorization on file and the eligibility response captured before the visit',
      ],
    },
    {
      bold: true,
      content: [
        { text: 'Financial impact:', strong: true },
        ' billed, allowed, paid and patient responsibility make the value of each denial visible at the line that caused it',
      ],
    },
    {
      bold: true,
      content: [
        { text: 'Corrective action:', strong: true },
        ' correct the data, produce a corrected or replacement claim and resubmit, with the original claim, the denial and the correction retained in history',
      ],
    },
  ],
};

export const appeals = {
  title: 'Healthcare Appeals and Payer Follow-Up',
  description:
    "Some denials are corrections. Others are disagreements, and they need an appeal. Elixir keeps the evidence in one place: the claim as submitted, the payer's adjudication, the clinical documentation from the encounter, the authorization on file and the eligibility response captured at intake.",
  // `lines` keeps the frame's hard line breaks inside each card description.
  steps: [
    {
      title: 'Identify claims to appeal',
      lines: [
        'Work denied claims from the denial worklist and separate the ones that need data correction from the',
        'ones that need to be argued.',
      ],
    },
    {
      title: 'Assemble supporting information',
      lines: [
        'Pull the documentation, coding and coverage detail already connected to the claim instead of rebuilding',
        'the case from separate systems, and draft the appeal',
        'letter from that context.',
      ],
    },
    {
      title: 'Track and retain',
      lines: [
        'Record appeal activity, dates and outcomes against the claim and payer so follow-up and timely filing deadlines stay visible.',
      ],
    },
  ],
  footnote:
    'Appeal submission methods vary by payer and by plan. Electronic appeal submission is available only where the payer supports it and where the connection has been implemented for your organization.',
};

export const salesforcePlatform = {
  title: 'Salesforce Healthcare RCM Software',
  description:
    'Elixir is built natively on Salesforce. For an organization evaluating Salesforce revenue cycle management, that architecture decision has practical consequences for how the system is configured, secured, reported on and extended.',
  // `accent` is the colour of each card's short top bar in the frame.
  features: [
    {
      title: 'One data model',
      description:
        'Patients, coverage, providers, encounters, claims, remittances and payments are records in the same platform, related to each other rather than synchronized between products.',
      accent: 'lime',
    },
    {
      title: 'Configurable to your workflow',
      description:
        'Page layouts, fields, list views, validation and automation are configured to the way your revenue cycle team works, not the other way round.',
      accent: 'yellow',
    },
    {
      title: 'Role-based access',
      description:
        'Salesforce profiles, permission sets and sharing rules govern who can see and do what across clinical, billing and payer data.',
      accent: 'lime',
    },
    {
      title: 'Reporting on live records',
      description:
        'Salesforce reports and dashboards run on the same records your teams work in, so operational reporting does not require a separate extract.',
      accent: 'yellow',
    },
    {
      title: 'Integration capability',
      description:
        'Salesforce APIs and integration patterns are available for connecting Elixir to the other systems in your environment, scoped during implementation.',
      accent: 'lime',
    },
    {
      title: 'Platform security architecture',
      description:
        'Elixir inherits the infrastructure and security architecture of the Salesforce platform. Compliance obligations remain a shared responsibility, addressed in your implementation and agreements.',
      accent: 'lime',
    },
  ],
  disclaimer:
    'Elixir is an independently developed application built on the Salesforce platform. Elixir is not a Salesforce product, and nothing here should be read as a Salesforce endorsement or certification of Elixir. Salesforce platform capabilities described above are capabilities of the underlying platform and are distinct from Elixir functionality.',
};

export const connectedEhr = {
  title: 'Connect EHR and Revenue Cycle Management',
  description:
    'An EHR records care. An RCM system gets that care paid for. They are different jobs, but they run on the same facts, and when they run on different systems, those facts stop agreeing with each other.',
  separation: {
    title: 'What separation costs',
    points: [
      'The same patient, coverage and provider data entered more than once',
      'Interfaces that drift, so clinical and billing records disagree',
      'Coding that happens away from the documentation that supports it',
      'Billing teams without clinical context, and clinical teams without financial context',
      'Reconciliation performed manually across exports from two systems',
    ],
  },
  connected: {
    title: 'The connected model',
    body: 'In Elixir, documentation, coding, charges, claims, remittance and payment are stages of one record rather than handoffs between products. Clinical documentation supports the codes. The codes build the claim. The claim carries the coverage verified at intake and the authorization recorded before the visit. The remittance posts back against the claim it paid, and what the patient owes is calculated from what the payer actually allowed.',
    // The highlighted phrase links to the existing EHR page.
    conclusion: [
      'That is the difference between ',
      { text: 'integrated EHR and RCM software', to: '/electronic-health-record' },
      ' and a billing system with an interface bolted to it.',
    ],
  },
};

export const rcmWorkflows = {
  // Line break follows the frame.
  titleLines: ['RCM Workflows for Healthcare', 'Organizations'],
  description:
    'The revenue cycle is the same shape everywhere, but the pressure points differ. These are the patterns Elixir is configured around.',
  // Copy is reproduced exactly as in the frame (including "fromencounters" and "claims,payments").
  organizations: [
    {
      title: 'Behavioral health organizations',
      description:
        'Intake and coverage capture, authorization tracking against approved units, recurring service documentation, claim generation fromencounters, and denial follow-up where authorization and medical necessity are the common causes.',
      icon: behavioralHealthIcon,
      iconSize: [16, 17],
    },
    {
      title: 'Medical groups and specialty practices',
      description:
        "Eligibility before the visit, coding tied to documentation, professional claims on CMS-1500, ERA posting, and patient statements calculated from the payer's allowed amount.",
      icon: medicalGroupsIcon,
      iconSize: [16, 15],
    },
    {
      title: 'Community and public health',
      description:
        'Multiple programs and funding sources against one patient record, insurance where it exists, and claims,payments and patient financial workflows kept distinct per program.',
      icon: communityHealthIcon,
      iconSize: [20, 11],
    },
    {
      title: 'Healthcare billing organizations',
      description:
        'Multiple client providers, multiple billing NPIs and multiple payer mixes in one platform, with claims, clearinghouse transactions, ERA posting and denial management separated by client.',
      icon: billingOrganizationsIcon,
      iconSize: [16, 17],
    },
  ],
};

// "\n" marks the frame's hard line breaks.
export const multiPayer = {
  titleLines: ['Multi-Payer and Multi-NPI', 'Revenue Cycle Management'],
  body: 'Growth usually means more payers, more provider numbers and more service locations, and more ways for a claim to be built incorrectly. Elixir is structured so those variables are configuration rather than exceptions.',
  points: [
    {
      bold: true,
      content: [
        { text: 'Multiple payers and plans', strong: true },
        ' with their own identifiers and requirements, and primary, secondary and\nsubsequent coverage on the same patient',
      ],
    },
    {
      bold: true,
      content: [
        { text: 'Multiple providers and NPIs', strong: true },
        ' across rendering, billing and pay-to relationships, and multiple tax\nidentification numbers',
      ],
    },
    {
      bold: true,
      content: [
        { text: 'Multiple service locations', strong: true },
        ', with encounters and claims associated to the correct location and place of\nservice',
      ],
    },
    {
      bold: true,
      content: [
        { text: 'Payer-specific requirements', strong: true },
        ' configured so the rules follow the claim instead of relying on institutional\nmemory',
      ],
    },
  ],
};

export const revenueCycleTeams = {
  title: 'Built for Revenue Cycle Teams',
  description: 'Connected workflows matter differently depending on which part of the cycle you own.',
  teams: [
    {
      title: 'Revenue cycle leadership',
      description: 'Operational reporting on live records across eligibility, claims, remittance and denials.',
    },
    {
      title: 'RCM managers',
      description:
        'Visibility into where claims are stalling, and the ability to configure\nthe rules that stop them stalling again.',
    },
    {
      title: 'Eligibility specialists',
      description: 'Coverage and benefit verification recorded where clinical and billing teams can both see it.',
    },
    {
      title: 'Billing specialists',
      description: 'Claims built from existing data, with errors surfaced at the field\nrather than after rejection.',
    },
    {
      title: 'Claims specialists',
      description:
        'Validation, clearinghouse and EDI errors separated, with correction and resubmission on the same record.',
    },
    {
      title: 'Payment posting teams',
      description: 'Matched remittance, provider-level adjustments accounted for,\nand posting actions per line.',
    },
    {
      title: 'Denial management teams',
      description: 'Denial reason, claim line, payer and financial impact together in\none worklist.',
    },
    {
      title: 'Providers and clinical staff',
      description:
        'Documentation and coding in the same place, with coverage and\nauthorization context visible.',
    },
    {
      title: 'Practice administrators',
      description: 'Patient balance, insurance status and claim history answerable\nfrom the patient record.',
    },
  ],
};

// "\n" marks the frame's hard line breaks; `accent` is the title and tag colour.
export const rcmAiCapabilities = {
  badge: 'Predictive Intelligence',
  title: 'Elixir RCM AI Capabilities',
  description:
    'Elixir scores financial risk, predicts denials and payment timing, and works up denied claims. Every output is a recommendation with its reasoning shown, so the person working the account decides what happens next.',
  capabilities: [
    {
      title: 'AI Risk Score',
      tag: '0-100 Band',
      accent: 'lime',
      description:
        'An account-level financial risk score from 0 to 100 with a High, Medium or Low band, shown in the patient\nheader before any claim is opened. It weighs unpaid\nclaim count and value, balance trend, denial rate against peer benchmarks and days in A/R, and is accompanied by a collections propensity.',
    },
    {
      title: 'Denial Risk Score',
      tag: 'Triage Pill',
      accent: 'lime',
      description:
        'A denial likelihood from 0 to 100 on every claim, shown as a colour-banded pill in the claims table and\non the claims list. It indicates which claims are likely\nto be denied rather than simply which are unpaid, so a\nsubmission batch can be triaged at a glance.',
    },
    {
      title: 'Predicted Days to Pay',
      tag: 'Cash Forecast',
      accent: 'lime',
      description:
        'The expected payment window for a claim, expressed\nas a day range rather than a single date. The midpoint\nis the expected payment day and the width of the range reflects confidence, so a low-risk claim with a\nnarrow window can be relied on for cash-flow planning\nand a high-risk claim with a wide one is worked instead of forecast.',
    },
    {
      // Title and tag wrap in the frame, and the tag runs into the card's right inset.
      title: 'Denial root cause\nclassification',
      tag: 'ANSI\nCARC',
      accent: 'yellow',
      tagOverflow: true,
      description:
        'Classifies a denied claim as missing authorization, coding error, eligibility, medical necessity, timely filing\nor duplicate claim, with the reasoning for that call, the\nlikely ANSI claim adjustment reason codes and a confidence level. Three prioritised next steps follow,\neach marked by how soon to act.',
    },
    {
      title: 'Appeal viability',
      tag: 'Decision Engine',
      accent: 'yellow',
      description:
        'Scores the likelihood an appeal succeeds and returns\na recommendation: appeal, resubmit, write off or contact the payer. The driving factors are shown alongside it, including payer behaviour, denial type, provider match and the days left in the filing window. A\nlow score is the evidence for a write-off decision.',
    },
    {
      title: 'Appeal letter drafting',
      tag: 'Auto-Gen PDF',
      accent: 'lime',
      description:
        'Generates an editable appeal letter for a denied claim\nfrom the claim, the denial and the supporting record,\nwith copy, PDF export and tracking of what has been\nsent.',
    },
  ],
};

// Only the collapsed questions are designed; no answer copy exists in the frame.
export const rcmFaq = {
  title: 'Frequently Asked Questions',
  description: 'Detailed answers on how Elixir connects revenue cycle management and payer workflows.',
  // FAQ content supplied with the FAQ design (questions as in the frame, answers verbatim).
  items: [
    {
      question: 'What is healthcare revenue cycle management software?',
      answer:
        'Healthcare revenue cycle management software manages the financial process of a patient encounter from registration through final payment. It covers insurance capture, eligibility verification, authorization, charge capture and coding, claim creation and submission, clearinghouse and payer transactions, remittance and payment posting, denial management, appeals and patient billing.',
    },
    {
      question: 'What is the difference between EHR and RCM software?',
      answer:
        'An EHR is the clinical record: documentation, orders, results and care history. RCM software is the financial process that converts that care into a paid claim. They are distinct functions, but they depend on the same patient, coverage, provider and encounter data, which is why organizations increasingly want them on one platform.',
    },
    {
      question: 'Can an EHR include revenue cycle management?',
      answer:
        'Yes. An integrated EHR and RCM platform holds clinical documentation and revenue cycle workflows in the same system, so coding, claims and payment posting run against the same records as the clinical work. Elixir provides EHR and RCM capabilities on a single Salesforce-based platform.',
    },
    {
      question: 'What is payer workflow management?',
      answer:
        'Payer workflow management is the operational handling of everything that passes between a provider and an insurance payer: coverage verification, prior authorization, claim submission, claim status, remittance, denials and appeals. Managing it well means payer-specific requirements are applied consistently and every payer response stays connected to the claim and patient it concerns.',
    },
    {
      question: 'What is healthcare eligibility verification?',
      answer:
        'Eligibility verification confirms with the payer that a patient\'s coverage is active and what it covers before services are provided. It typically returns plan status, coverage dates, copay, coinsurance and deductible information. Verifying eligibility early is one of the most effective ways to prevent avoidable claim denials.',
    },
    {
      question: 'What are 270 and 271 eligibility transactions?',
      answer:
        'The 270 is the standard X12 EDI eligibility and benefit inquiry a provider sends to a payer. The 271 is the payer\'s response, containing coverage status, plan information and benefit details such as copay, coinsurance, deductible and coverage dates. Elixir supports eligibility verification using 270/271 transactions through supported connections.',
    },
    {
      question: 'What are 837 healthcare claims?',
      answer:
        'The 837 is the standard X12 EDI format for submitting healthcare claims electronically. The 837P carries professional claims, which correspond to the CMS-1500 form, and the 837I carries institutional claims, which correspond to the UB-04 form. Elixir supports professional and institutional claim creation and submission.',
    },
    {
      question: 'What is an 835 ERA?',
      answer:
        'An 835 electronic remittance advice is the payer\'s electronic explanation of how a claim was adjudicated. It reports billed, allowed and paid amounts, contractual adjustments, denial reason codes, patient responsibility and provider-level adjustments. Elixir ingests 835 files, matches them to claims and presents them for payment posting.',
    },
    {
      question: 'Can Elixir integrate with a healthcare clearinghouse?',
      answer:
        'Yes. Elixir supports clearinghouse connectivity for exchanging eligibility, claim, claim status and remittance transactions. Supported clearinghouse connections are established per organization during implementation.',
    },
    {
      question: 'Is Elixir built on Salesforce?',
      answer:
        'Yes. Elixir is built natively on the Salesforce platform, which means patient, clinical, payer and financial records live in one data model with Salesforce configuration, role-based access, automation and reporting available to them. Elixir is an independent application and is not a Salesforce product.',
    },
    {
      question: 'Can Salesforce be used for healthcare revenue cycle management?',
      answer:
        'Salesforce is a platform rather than a revenue cycle system. Healthcare RCM on Salesforce requires an application that supplies the healthcare data model, EDI transactions, claim logic and payer workflows. Elixir provides those capabilities natively on Salesforce.',
    },
    {
      question: 'Does Elixir support medical claims management?',
      answer:
        'Yes. Elixir supports claim creation, claim validation against required and payer-specific data, submission through supported clearinghouse connectivity, claim status tracking, correction and resubmission, and claim history, for both CMS-1500 professional and UB-04 institutional claims.',
    },
    {
      question: 'Does Elixir support denial management?',
      answer:
        'Yes. Denials are identified during remittance processing with the payer\'s reason code, can be routed to a denial worklist during payment posting, and remain connected to the claim, claim line, payer and patient balance so teams can correct, resubmit or appeal.',
    },
    {
      question: 'Can Elixir support multiple payers and billing NPIs?',
      answer:
        'Yes. Elixir supports multiple payers and plans, primary and secondary coverage on the same patient, and multiple providers, billing NPIs and service locations, which is typical for medical groups operating across sites and for billing organizations serving several provider clients from one platform.',
    },
    {
      question: 'How does Elixir connect clinical workflows and RCM?',
      answer:
        'Clinical documentation, coding, charges, claims, remittance and payments are related records in the same Salesforce-based platform. Coding draws on the documentation that supports it, claims draw on the coverage verified at intake, and remittance posts back against the claim it paid, without interfaces between separate systems.',
    },
    {
      question: 'What healthcare organizations can use Elixir?',
      answer:
        'Elixir is used by behavioral health organizations, medical groups and specialty practices, community and public health organizations, and healthcare billing organizations that need clinical, payer and revenue cycle workflows connected in one platform.',
    },
  ],
};

export const rcmCtaBand = {
  title: 'See the Revenue Cycle Connected End to End',
  description:
    'Walk through eligibility, claim validation, clearinghouse transactions, ERA posting and denial management on real Elixir screens, with your payer mix and organization type in mind.',
  // Destinations are not in the frame; these match the CTAs on the other pages.
  cta: { label: 'Take A Test Drive', to: '/request-demo' },
  secondaryCta: { label: 'Contact Sales', to: '/company/contact' },
};
