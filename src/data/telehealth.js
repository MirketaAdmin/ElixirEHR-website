// Telehealth page (/more-specialties/telehealth) — a child page of More Specialties.
// Copy is verbatim from the Figma. Links only point at routes that exist.
import heroMedia from '../assets/telehealth/hero-media.png';
// The four pillar icons are the same crops as Small Practices'.
import pillar1Icon from '../assets/small-practices/icon-pillar-1.png';
import pillar2Icon from '../assets/small-practices/icon-pillar-2.png';
import pillar3Icon from '../assets/small-practices/icon-pillar-3.png';
import pillar4Icon from '../assets/small-practices/icon-pillar-4.png';
import eng1Icon from '../assets/telehealth/icon-eng-1.png';
import eng2Icon from '../assets/telehealth/icon-eng-2.png';
import eng3Icon from '../assets/telehealth/icon-eng-3.png';
import eng4Icon from '../assets/telehealth/icon-eng-4.png';
import eng5Icon from '../assets/telehealth/icon-eng-5.png';
import eng6Icon from '../assets/telehealth/icon-eng-6.png';
import dataNoteIcon from '../assets/telehealth/icon-data-note.png';
import exp1Icon from '../assets/telehealth/icon-exp-1.png';
import exp2Icon from '../assets/telehealth/icon-exp-2.png';
import exp3Icon from '../assets/telehealth/icon-exp-3.png';
import exp4Icon from '../assets/telehealth/icon-exp-4.png';
import exp5Icon from '../assets/telehealth/icon-exp-5.png';
import exp6Icon from '../assets/telehealth/icon-exp-6.png';
import ops1Icon from '../assets/telehealth/icon-ops-1.png';
import ops2Icon from '../assets/telehealth/icon-ops-2.png';
import ops3Icon from '../assets/telehealth/icon-ops-3.png';
import ops4Icon from '../assets/telehealth/icon-ops-4.png';
import opsNoteIcon from '../assets/telehealth/icon-ops-note.png';
import tableIcon from '../assets/telehealth/icon-table.png';
import infoIcon from '../assets/telehealth/icon-info.png';
import checkIcon from '../assets/telehealth/icon-check.png';
import warningIcon from '../assets/telehealth/icon-warning.png';
import verifiedIcon from '../assets/telehealth/icon-verified.png';

const icon = (src, w, h) => ({ src, size: [w, h] });

export const thHero = {
  currentPage: 'Telehealth',
  titleLines: ['Telehealth Software', 'That Runs Inside', 'Your EHR and Billing', 'System'],
  titleAccent: [],
  description:
    'Adopting telehealth should not mean adopting a second system. In Elixir the virtual visit is scheduled on the same calendar, documented in the same chart and billed from the same record as everything else you do.',
  primaryCta: { label: 'Request a Demo', to: '/request-demo', arrow: false },
  // The frame gives no destination; it scrolls to "Medicare Telehealth Rules and the 31 December 2027 Cliff".
  secondaryCta: { label: 'See the 2027 and 2028 rule changes', href: '#medicare-policy' },
  media: {
    src: heroMedia,
    alt: 'Clinician on a video visit with a patient, with the chart and claim shown alongside',
  },
};

export const thPillars = [
  {
    icon: icon(pillar1Icon, 20, 18),
    title: 'One record, not two systems',
    text: 'Schedule, chart and claim in the same place. No exporting a visit list from a video tool and matching it to the EHR.',
  },
  {
    icon: icon(pillar2Icon, 18, 16),
    title: 'Billing set from the visit',
    text: 'Place of service and modifier derived from how the visit actually happened, rather than inferred by a biller a week later.',
  },
  {
    icon: icon(pillar3Icon, 22, 16),
    title: 'Built for group programs',
    text: 'Group sessions with per-attendee attendance and documentation — how IOP and other group-based programs really run.',
  },
  {
    icon: icon(pillar4Icon, 20, 12),
    title: 'Rules tracked for you',
    text: 'Telehealth policy has three separate cliff dates in the next 26 months. We track them; this page names them.',
  },
];

export const thEngagement = {
  eyebrow: 'Engagement',
  title: 'How Telehealth Improves Patient Engagement',
  description:
    'The gains from telehealth are not evenly distributed. They are largest for the patients who were hardest to get into a room — and that is a group most practices have simply written off as unreliable.',
  items: [
    {
      icon: icon(eng1Icon, 12, 18),
      title: 'Care reaches patients wherever they live',
      text: 'Accessibility for everyone irrespective of place of residence, which matters most in rural catchments and for patients without reliable transport.',
    },
    {
      icon: icon(eng2Icon, 17, 14),
      title: 'Travel time and the stress around it removed',
      text: 'A 30-minute appointment stops costing half a working day. For hourly-paid patients that is the whole reason attendance improves.',
    },
    {
      icon: icon(eng3Icon, 15, 18),
      title: 'Unnecessary physical contact minimized',
      text: 'Routine follow-up, medication review and check-ins handled online, reserving the room for visits that need one.',
    },
    {
      icon: icon(eng4Icon, 14, 18),
      title: 'On-demand visits scheduled in minutes',
      text: 'Patients book a virtual slot themselves rather than waiting for a call back, which converts intent into an appointment while it still exists.',
    },
    {
      icon: icon(eng5Icon, 15, 18),
      title: 'Fewer missed appointments',
      text: [
        'Removing the journey removes the most common practical reason people miss care. Where outreach capacity is finite, ',
        { text: 'risk-ranked prediction decides who to call', to: '/patient-no-show-prediction' },
        '.',
      ],
    },
    {
      icon: icon(eng6Icon, 10, 15),
      title: 'The record does not fork',
      text: 'Virtual and in-person visits on one chart, so a patient alternating between them has one history rather than two partial ones.',
    },
  ],
};

export const thData = {
  eyebrow: 'Data',
  title: 'Seamless Patient Data Collection Before and During the Visit',
  description:
    'A virtual visit that starts with fifteen minutes of form-filling is a worse experience than the one it replaced.',
  note: {
    icon: icon(dataNoteIcon, 15, 16),
    label: 'Unified clinical ingestion',
    text: 'All biometrics, patient-reported outcome measures, and virtual chat transcripts stream directly into the active timeline without duplicate manual transcription.',
  },
  items: [
    {
      label: 'PHASE-01 // PRE-ENCOUNTER',
      tag: 'Structured form intake',
      title: 'Before the visit.',
      text: 'Intake forms, consents, questionnaires and outcome measures completed on the patient’s own device ahead of time, landing in the chart as structured data rather than as an attachment somebody re-types.',
    },
    {
      label: 'PHASE-02 // IN-TRANSIT',
      tag: 'Single-window EHR',
      title: 'During the visit.',
      text: 'In-visit documentation in the same window as the call, so the clinician is not alt-tabbing between a video tool and a chart — which is where eye contact and half the clinical detail get lost.',
    },
    {
      label: 'PHASE-03 // POST-VISIT',
      tag: 'Single origin claim',
      title: 'After the visit.',
      text: 'The note, the orders, the follow-up appointment and the claim all originate from the same encounter record. Nothing is re-entered, so nothing diverges.',
    },
    {
      label: 'PHASE-04 // ATTESTATION',
      tag: 'Jurisdiction capture',
      title: 'Consent captured properly.',
      text: 'Telehealth consent, recording consent where you record, and the state in which the patient was physically located — recorded at the visit, because reconstructing it later is not possible.',
    },
  ],
};

export const thExperience = {
  eyebrow: 'Experience',
  title: 'A Personalized Experience for Patients',
  description:
    'Virtual care is often accused of being impersonal. That is a property of how it is run, not of the medium.',
  items: [
    {
      icon: icon(exp1Icon, 22, 21),
      title: 'Nurtured at every touchpoint',
      text: 'Reminders, follow-up and check-ins driven from the record, so contact reflects what happened at the last visit.',
    },
    {
      icon: icon(exp2Icon, 18, 22),
      title: 'No physical barriers',
      text: 'Patients cared for without travel, childcare or time off entering the decision about whether to attend.',
    },
    {
      icon: icon(exp3Icon, 19, 24),
      title: 'On-demand virtual visits',
      text: [
        'Self-scheduled in minutes through the ',
        { text: 'Patient Portal', to: '/patient-portal' },
        ', at times a clinic room could not offer.',
      ],
    },
    {
      icon: icon(exp4Icon, 22, 12),
      title: 'Join without installing anything',
      text: 'A link on the device the patient already has. A required download before a first appointment costs attendance.',
    },
    {
      icon: icon(exp5Icon, 20, 20),
      title: 'Preferences that persist',
      text: 'Language, contact channel and modality held on the record, so the patient is not asked to re-state them every time.',
    },
    {
      icon: icon(exp6Icon, 24, 23),
      title: 'Interpreters supported',
      text: 'Third-party interpreters joined into the visit, with the need flagged before the call rather than discovered during it.',
    },
  ],
};

export const thOperations = {
  eyebrow: 'Operations',
  title: 'Higher Staff Productivity With In-Visit Workflows',
  description: 'The productivity gain in telehealth comes from the work around the visit, not the visit itself.',
  note: {
    icon: icon(opsNoteIcon, 12, 16),
    label: 'Native Salesforce ecosystem',
    text: 'Direct integration with claims adjudication, patient ledgers, and staff assignment without building or maintaining middleware.',
  },
  items: [
    {
      label: 'OPS-FLOW // DISTRIBUTED',
      icon: icon(ops1Icon, 23, 16),
      title: 'Staff work remotely too.',
      text: 'Scheduling, intake, eligibility, documentation review and billing all run from wherever your team is, which is what makes a distributed or part-time workforce practical.',
    },
    {
      label: 'OPS-FLOW // MID-CALL ACCESS',
      icon: icon(ops2Icon, 20, 20),
      title: 'Custom in-visit features.',
      text: 'The things a clinician needs mid-call — templates, orders, the previous note, the outcome measure just completed — available in the visit rather than after it.',
    },
    {
      label: 'OPS-FLOW // AUTOMATION',
      icon: icon(ops3Icon, 17, 21),
      title: 'Custom workflows for in-house processes.',
      text: 'The administrative sequences around a virtual visit configured once and then run automatically, rather than depending on someone remembering the order.',
    },
    {
      label: 'OPS-FLOW // INTEGRATION',
      icon: icon(ops4Icon, 19, 16),
      title: 'Additional integrations on Salesforce.',
      text: 'Because the platform is Salesforce-native, the other tools your practice runs connect without custom development.',
    },
  ],
};

export const thBilling = {
  eyebrow: 'Billing',
  title: 'Telehealth Billing: Place of Service, Modifiers and What Actually Gets Paid',
  description:
    'This is where telehealth revenue is quietly lost, and where most vendor documentation is out of date. Two details are worth more than the rest of this section combined.',
  details: [
    {
      chip: 'Detail one',
      param: 'PARAM: POS_RATE_DIFFERENTIAL',
      title: 'Place of service changes what you are paid',
      text: 'POS 10 means the patient was at home, and Medicare pays the higher non-facility rate. POS 02 means the patient was somewhere other than home, which pays the facility rate because that site may bill its own originating-site fee. Coding the wrong one is not a compliance footnote — it is a pay cut. Source 1.',
      rates: [
        { code: 'POS 10 (Home)', rate: 'Non-Facility Rate', tone: 'lime' },
        { code: 'POS 02 (Other)', rate: 'Facility Rate', tone: 'yellow' },
      ],
    },
    {
      chip: 'Detail two',
      param: 'PARAM: ORIGINATING_FEE',
      title: 'The originating-site fee has a 2026 figure',
      text: 'Where an originating site can bill the facility fee, HCPCS Q3014 is set at $31.85 for CY2026. Small, but it is per visit and it goes uncollected constantly. Source 2.',
      fee: { label: 'HCPCS CODE Q3014 (CY2026 RATE)', value: '$31.85 / visit' },
    },
  ],
  table: {
    icon: icon(tableIcon, 12, 13),
    caption: 'Current Medicare telehealth modifiers. Sources 1 and 3.',
    chip: 'Effective CY2026',
    columns: ['Modifier', 'What it signals', 'When it applies'],
    rows: [
      {
        code: '95',
        signal: 'Synchronous telemedicine via real-time audio and video',
        applies: 'Institutional and hospital claims, and where the practitioner is at a hospital and the patient at home.',
      },
      {
        code: '93',
        signal: 'Synchronous telemedicine via real-time audio-only',
        applies: 'Appended to the corresponding E/M code. The old telephone E/M codes 99441–99443 are no longer valid.',
      },
      {
        code: 'FQ',
        signal: 'Service furnished using audio-only technology',
        applies: 'Required on audio-only behavioral and mental health telehealth, and by FQHCs and RHCs billing audio-only.',
      },
      {
        code: 'FR',
        signal: 'Supervising practitioner present by real-time two-way audio/video',
        applies: 'Where virtual direct supervision applies — expanded in the CY2026 fee schedule.',
      },
      {
        code: 'GT',
        outdated: 'Outdated',
        signal: 'Via interactive audio and video',
        applies: 'No longer the general Medicare telehealth modifier. It now survives essentially only for distant-site practitioners billing under the critical access hospital optional payment Method II. Documentation still telling you to append GT to ordinary telehealth claims has not been updated in years.',
      },
    ],
  },
  note: {
    icon: icon(infoIcon, 15, 16),
    text: 'One more worth knowing: CMS declined to add the telemedicine evaluation and management code family 98000-98015 to the Medicare Telehealth Services List for CY2026. They remain CPT codes and commercial payers may treat them differently, but do not plan Medicare revenue around them. Source 2.',
  },
};

export const thMedicare = {
  eyebrow: 'Medicare policy',
  title: 'Medicare Telehealth Rules and the 31 December 2027 Cliff',
  description:
    'Telehealth policy currently has three separate expiry dates inside the next twenty-six months, and they do not move together. Any practice with meaningful virtual volume should know all three.',
  items: [
    {
      tone: 'active',
      chip: 'Now – 2027',
      status: 'Status: Active',
      title: 'Through 31 December 2027, the broad flexibilities hold',
      text: 'No geographic restriction, any site including the patient’s home qualifies as an originating site, and audio-only is permitted for non-behavioral services.',
    },
    {
      tone: 'cliff',
      chip: '1 Jan 2028',
      status: 'Cliff event 01',
      title: 'Pre-pandemic limits return for non-behavioral services',
      text: 'The patient must generally be in a qualifying rural or shortage area at an authorized originating site rather than at home, and audio-only stops qualifying. If a material share of your Medicare volume is non-behavioral telehealth, model this now.',
    },
    {
      tone: 'cliff',
      chip: '1 Jan 2028',
      status: 'Cliff event 02',
      title: 'The tele-mental health in-person requirement begins',
      text: 'Waived through 31 December 2027. From 2028 a new patient needs an in-person visit within the six months before their first mental health telehealth service, then within 12 months of each subsequent one. Elixir tracks the interval so you are ready — it does not enforce a rule that is not yet in force.',
    },
    {
      tone: 'permanent',
      chip: 'Permanent',
      status: 'Statute codified',
      title: 'Behavioral health keeps the core flexibilities',
      text: [
        'Home as originating site, no geographic restriction and audio-only are permanent for behavioral and mental health services — and only for those. Conflating this with general outpatient telehealth is the single most common error in this category. See ',
        { text: 'Behavioral Health', to: '/behavioral-health' },
        '.',
      ],
    },
    {
      tone: 'revision',
      chip: 'CY2026',
      status: 'Recent revision',
      title: 'What already changed this year',
      text: 'The provisional versus permanent distinction on the Medicare Telehealth Services List has been eliminated, frequency limits are permanently removed for subsequent inpatient and nursing facility visits and critical care consultations, direct supervision may now be met by real-time audio and video, and teaching physician virtual presence is permanent.',
    },
  ],
  sources: {
    icon: icon(checkIcon, 15, 15),
    text: 'Sources 2 and 4. Verified September 2026 — confirm before planning against these dates.',
    ref: 'REF: CMS-RULE-CY26/27',
  },
};

export const thPrescribing = {
  eyebrow: 'Prescribing',
  title: 'Prescribing Controlled Substances by Telemedicine',
  description: 'This is the nearest and least settled deadline in telehealth, and it is three months away.',
  note: {
    icon: icon(warningIcon, 15, 13),
    label: 'Imminent transition',
    text: 'Prescription Drug Monitoring Program (PDMP) checks must be executed directly prior to initiating Schedule III–V e-prescriptions.',
  },
  items: [
    {
      tone: 'red',
      label: 'DEADLINE STATUS: 31 DEC 2026 EXTENSION',
      text: 'The DEA flexibilities that permit prescribing controlled substances by telemedicine without a prior in-person examination currently run only to 31 December 2026. They have been extended four times. A fifth extension or a final rule is plausible but neither has been issued, and the proposed Special Registration for Telemedicine rule is not final.',
    },
    {
      tone: 'green',
      label: '21 CFR §1306.51 // OUD CODIFIED PROVISIONS',
      text: 'Separately and more durably, the rule permitting telemedicine prescribing of Schedule III–V medications for opioid use disorder is in the Code of Federal Regulations. It permits audio-only, requires the prescriber to be authorized for the applicable prescription drug monitoring program and to review the patient’s last twelve months of controlled substance data, and supports up to six calendar months from the first telemedicine prescription before an in-person or otherwise qualifying evaluation is needed.',
    },
    {
      tone: 'purple',
      label: 'ELIXIR AUDIT TRAIL // NATIVE INGESTION',
      text: 'Elixir supports the PDMP review step inside the prescribing workflow rather than as a separate lookup. What we will not do is tell you this area is settled, because it is not. Sources 5–6.',
    },
  ],
};

export const thLicensure = {
  eyebrow: 'Licensure',
  title: 'State Licensure and Interstate Compacts: Enacted Is Not the Same as Usable',
  description:
    'Telehealth is regulated by where the patient is, not where the clinician is. The licensure compacts are supposed to make multi-state practice workable — but several have been enacted in dozens of states while issuing precisely nothing. A hiring or expansion plan built on an enacted count is built on a number that does not yet mean anything.',
  table: {
    note: 'As of September 2026. These figures move monthly — four of the seven changed status in the three months before this page was written. Verify against each compact’s own site before making a decision. Sources 7–8.',
    // Two lines in the frame.
    report: 'REPORT:\n2026-SEP-REV',
    columns: ['Compact', 'Enacted', 'Actually issuing', 'Usable now?'],
    rows: [
      ['Nurse Licensure Compact (RN, LPN/LVN)', '43 jurisdictions', '~41 fully implemented', 'Yes'],
      ['PSYPACT (Psychology)', '~43', '41 effective', 'Yes'],
      ['Interstate Medical Licensure Compact (Physicians)', '44 states + 2 territories', '~40 jurisdictions', 'Yes'],
      ['Counseling Compact (LPC, LPCC, LMHC)', '38 states + DC', '9 states', 'Partly'],
      ['PA Licensure Compact (Physician assistants)', '29 states', 'None — early 2027 projected', 'Not yet'],
      ['Social Work Licensure Compact (LCSW, LMSW)', '35 states', 'None — spring 2027 at the earliest', 'Not yet'],
      ['APRN Compact (NP, CRNA, CNM, CNS)', 'A handful of states', 'Not activated — needs seven states', 'Not yet'],
    ],
  },
  notice: {
    label: 'Critical compliance notice',
    title: 'Three things to get right before you plan around this',
    items: [
      'The Interstate Medical Licensure Compact is not a multistate license. It is an expedited route to separate full licenses in each member state. Anyone describing it as “one license for 44 states” has misunderstood it.',
      'The Counseling Compact is the sharpest gap. Thirty-nine jurisdictions have enacted it; nine are issuing privileges. If your plan assumes counselors can practice across all thirty-nine today, it is wrong by thirty states.',
      'Do not plan on the social work or PA compacts at all yet. Both are enacted widely and issuing nothing, with 2027 projections that have already slipped once.',
    ],
  },
  note: {
    icon: icon(verifiedIcon, 22, 22),
    text: 'Elixir records the state in which the patient was physically located at the time of the visit, and the credential under which the clinician saw them, because that pairing is what a licensure question actually turns on — and it cannot be reconstructed from a calendar entry afterwards.',
  },
};

export const thPrivacy = {
  eyebrow: 'Privacy',
  title: 'HIPAA, Audio-Only and Privacy in a Virtual Visit',
  description:
    'The COVID-era latitude that let practices run visits on consumer video tools is gone, and has been for three years. A surprising number of practices have not revisited what they set up in 2020.',
  items: [
    {
      tag: 'OCR POST-PHE',
      kicker: 'The date',
      title: 'Enforcement discretion ended 9 August 2023',
      text: 'The OCR notification of enforcement discretion for telehealth expired with the public health emergency on 11 May 2023, followed by a 90-day transition period that closed on 9 August 2023. Vendor pages citing “May 2023” are skipping the transition; either way, none of it is still in force. Source 9.',
    },
    {
      tag: 'Contractual',
      kicker: 'The requirement',
      title: 'A business associate agreement is not optional',
      text: 'Telehealth services must comply with the HIPAA Rules, and covered entities must use vendors that do and execute a BAA with them. We sign one. A platform that will not is not a candidate. Source 10.',
    },
    {
      tag: 'Comm protocol',
      kicker: 'Audio-only',
      title: 'The rules differ by technology, not by the word “phone”',
      text: 'A traditional landline call is not electronic media, so the Security Rule does not reach it. VoIP, smartphone apps and internet-based systems do trigger Security Rule safeguards — and any platform that records or stores the session is handling PHI and needs a BAA. Source 11.',
    },
    {
      tag: 'Authentication',
      kicker: 'Identity',
      title: 'Verify who you are talking to',
      text: 'Reasonable safeguards and patient identity verification apply to a virtual visit exactly as they do to one in a room, and the verification belongs in the record.',
    },
    {
      tag: 'Accessibility',
      kicker: 'Language',
      title: 'Meaningful access applies to virtual visits',
      text: 'Interpreter obligations do not relax because a visit is remote. Interpreter need is flagged before the call rather than discovered on it.',
    },
    {
      tag: 'Risk allocation',
      kicker: 'Shared',
      title: 'Compliance remains shared',
      text: 'The platform supplies the controls and the audit trail. Your risk analysis, policies and workforce training stay with you. No software makes an organization HIPAA compliant.',
    },
  ],
};

export const thWhy = {
  eyebrow: 'Why Elixir',
  title: 'Why Choose Elixir for Telehealth',
  description:
    'Elixir’s telehealth runs inside the EHR and billing platform rather than alongside them, which is what makes the rest of this list possible.',
  items: [
    {
      title: 'Fewer barriers to attendance',
      text: 'Removing the journey removes the most common practical reason patients miss care — particularly the patients hardest to reach.',
    },
    {
      title: 'Flexible scheduling',
      text: 'Patients and staff schedule telehealth consultations on the same calendar as everything else, including out-of-hours slots a clinic room cannot offer.',
    },
    {
      title: 'Minimal onboarding time',
      text: 'Patients onboarded without the delay of multiple in-person visits to complete intake.',
    },
    {
      title: 'Increased patient satisfaction',
      text: 'Access to the services patients want without physical boundaries deciding whether they get them.',
    },
    {
      title: 'Custom workflows',
      text: 'Administrative sequences maintained without additional staff, so clinical time stays clinical.',
    },
    {
      title: 'Fewer no-shows',
      text: 'Flexible scheduling and consultation from anywhere remove two of the biggest causes of a missed appointment.',
    },
    {
      title: 'Easy payment collection',
      text: 'Payment details captured and collected as part of the visit rather than chased afterwards.',
    },
    {
      title: 'Streamlined communication',
      text: 'Patients reached through their preferred channel, with the whole journey on one record.',
    },
  ],
};

// The frame labels its questions "Q // 01"–"Q // 08"; the shared FAQ accordion has its own layout,
// so the labels are left off. Its first-half-left order matches the frame's columns (1–4, 5–8).
export const thFaq = {
  eyebrow: 'Questions',
  title: 'Telehealth Software: Frequently Asked Questions',
  description: 'What practice leaders, billers and compliance staff ask us first.',
  items: [
    {
      question: 'Is Elixir telehealth a separate product from the EHR?',
      answer:
        'No. Telehealth runs as a native feature inside the Elixir platform. Virtual visits appear on the same scheduling grid, link to the same patient chart and generate claims into the same billing workflow as in-person visits.',
    },
    {
      question: 'What do we bill for a telehealth visit?',
      answer:
        'Telehealth visits use the standard CPT evaluation and management or therapy codes, distinguished by place of service and modifier. For Medicare, POS 10 indicates the patient was at home (paying non-facility rates) while POS 02 indicates another site. Modifiers signal whether the visit was audio-video (modifier 95 on hospital/institutional claims) or audio-only (modifier 93 or FQ). Commercial payers establish their own POS and modifier rules, which Elixir maps by payer.',
    },
    {
      question: 'Is modifier GT still used for Medicare telehealth?',
      answer:
        'Essentially no. For Medicare fee-for-service, modifier GT has been deprecated for general telehealth claims for several years and now survives almost exclusively for distant-site practitioners billing under critical access hospital optional payment Method II. Documentation advising you to append GT to ordinary telehealth claims is out of date.',
    },
    {
      question: 'Can we treat patients in other states?',
      answer:
        'Only where the clinician is licensed in the state where the patient is physically located at the time of the visit, or holds active privileges through an interstate compact that is actually issuing them (such as the IMLC, PSYPACT or the Nurse Licensure Compact). Several enacted compacts — notably the Counseling, Social Work and PA compacts — are not yet issuing privileges in all member states.',
    },
    {
      question: 'Do the Medicare telehealth rules change soon?',
      answer:
        'Yes. Broad flexibilities (including home as originating site and audio-only for general services) run through 31 December 2027. On 1 January 2028, geographic and site restrictions return for non-behavioral services, and the six-month in-person requirement for mental health telehealth begins. Behavioral health keeps home-as-originating-site permanently. DEA prescribing flexibilities currently expire earlier, on 31 December 2026.',
    },
    {
      question: 'Does Elixir support group telehealth sessions?',
      answer:
        'Yes. Group sessions support multiple participants with individual attendance tracking, per-patient clinical documentation and independent claim generation, designed for intensive outpatient programs (IOP) and group therapy.',
    },
    {
      question: 'Is the platform HIPAA compliant?',
      answer:
        'Elixir provides the technical, physical and administrative safeguards required under the HIPAA Security Rule, and we execute a Business Associate Agreement with every covered entity customer. The enforcement discretion that permitted consumer video tools during the pandemic ended on 9 August 2023.',
    },
    {
      question: 'Can patients join without installing anything?',
      answer:
        'Yes. Visits run in standard modern web browsers on smartphones, tablets and desktop computers. Patients join through a secure link sent by SMS or email or from within the Patient Portal, with no app download required.',
    },
  ],
};

export const thCtaBand = {
  eyebrow: 'One system, not two',
  title: 'See a virtual visit from schedule to claim',
  description:
    'Bring your payer mix, your states and your visit types. We will show you the same patient scheduled, seen, documented and billed — without leaving the record once.',
  cta: { label: 'Request a Demo', to: '/request-demo' },
  secondaryCta: { label: 'Explore the Patient Portal', to: '/patient-portal' },
};
