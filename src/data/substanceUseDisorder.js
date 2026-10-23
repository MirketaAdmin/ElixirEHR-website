// Substance Use Disorder page (/behavioral-health/substance-use-disorder) — an independent page with
// no parent route. Copy is verbatim from the Figma. Links only point at routes that exist.
import heroPlaceholder from '../assets/contact-center/hero-placeholder.png';
import recordIcon from '../assets/substance-use-disorder/icon-strip-record.png';
import editionsIcon from '../assets/substance-use-disorder/icon-strip-editions.png';
import part2Icon from '../assets/substance-use-disorder/icon-strip-part2.png';
import salesforceIcon from '../assets/substance-use-disorder/icon-strip-salesforce.png';
import dimension1Icon from '../assets/substance-use-disorder/icon-dimension-1.png';
import dimension2Icon from '../assets/substance-use-disorder/icon-dimension-2.png';
import dimension3Icon from '../assets/substance-use-disorder/icon-dimension-3.png';
import dimension4Icon from '../assets/substance-use-disorder/icon-dimension-4.png';
import dimension5Icon from '../assets/substance-use-disorder/icon-dimension-5.png';
import dimension6Icon from '../assets/substance-use-disorder/icon-dimension-6.png';
import checkCircleIcon from '../assets/substance-use-disorder/icon-check-circle.png';
import part2ConsentIcon from '../assets/substance-use-disorder/icon-part2-consent.png';
import part2NotesIcon from '../assets/substance-use-disorder/icon-part2-notes.png';
import part2RightsIcon from '../assets/substance-use-disorder/icon-part2-rights.png';
import part2RedisclosureIcon from '../assets/substance-use-disorder/icon-part2-redisclosure.png';
import part2LegalIcon from '../assets/substance-use-disorder/icon-part2-legal.png';
import part2BreachIcon from '../assets/substance-use-disorder/icon-part2-breach.png';
import kratuVisitPrepIcon from '../assets/substance-use-disorder/icon-kratu-visit-prep.png';
import kratuCoPilotIcon from '../assets/substance-use-disorder/icon-kratu-co-pilot.png';
import kratuPayorIcon from '../assets/substance-use-disorder/icon-kratu-payor.png';
import kratuNoShowIcon from '../assets/substance-use-disorder/icon-kratu-no-show.png';
import kratuResponsibleIcon from '../assets/substance-use-disorder/icon-kratu-responsible.png';
import kratuEngineIcon from '../assets/substance-use-disorder/icon-kratu-engine.png';
import aiXCircleIcon from '../assets/substance-use-disorder/icon-ai-x-circle.png';

export const sudHero = {
  currentPage: 'Substance Use Disorder',
  titleLines: ['Substance Use', 'Disorder EHR', 'Software Built for', 'Every ASAM Level of', 'Care'],
  titleAccent: [],
  description:
    'One Salesforce-native record that follows the patient from withdrawal management through residential, intensive outpatient and long-term remission monitoring \u2014 with 42 CFR Part 2 controls in the record itself, and both ASAM editions supported while your states finish transitioning.',
  primaryCta: { label: 'Request a Demo', to: '/request-demo', arrow: false },
  // The frame gives no destination; it scrolls to the level-of-care crosswalk.
  secondaryCta: { label: 'See the level-of-care coverage', href: '#continuum' },
  media: { src: heroPlaceholder, alt: '' },
};

export const sudHighlights = [
  {
    icon: { src: recordIcon, size: [16, 12] },
    title: 'One record, every level',
    text: 'A patient stepping down from residential to IOP keeps one chart, one episode, one medication history. Nothing is re-keyed at transfer.',
  },
  {
    icon: { src: editionsIcon, size: [16, 14] },
    title: 'Both ASAM editions',
    text: 'Assess and document against the Third or Fourth Edition per state and per payer contract, in the same instance, during the transition.',
  },
  {
    icon: { src: part2Icon, size: [12, 16] },
    title: 'Part 2 in the record',
    text: 'Consent, counseling-note separation, disclosure accounting and legal-proceeding controls built into the chart, not layered on top.',
  },
  {
    icon: { src: salesforceIcon, size: [18, 12] },
    title: 'Built on Salesforce',
    text: 'Configuration rather than custom code when you add a state, a program, a payer or a level of care.',
  },
];

// The crosswalk: each Fourth Edition cell may carry a `removed` or `new` chip, as drawn.
export const sudContinuum = {
  id: 'continuum',
  eyebrow: 'Continuum of care',
  title: 'One Substance Use Disorder EHR Across the Full Continuum of Care',
  description:
    'Most addiction treatment organizations do not run one level of care. They run four or five, often across several states, and the patients move between them \u2014 which is exactly where systems stitched together from separate products start losing information. The table below is the ASAM Fourth Edition adult continuum with its Third Edition equivalents, because both are live in the US market right now.',
  table: {
    caption: 'ASAM Third Edition to Fourth Edition crosswalk, adult continuum. Sources 1\u20134 below.',
    chip: 'Crosswalk reference',
    columns: ['ASAM Third Edition', 'ASAM Fourth Edition', 'What changed'],
    rows: [
      {
        third: 'Level 0.5 \u2014 Early Intervention',
        fourth: { chip: 'removed', text: 'Not a level' },
        change: 'Early intervention and prevention are addressed in a new chapter rather than as a rung on the continuum.',
      },
      {
        third: '\u2014',
        fourth: { chip: 'new', text: 'Level 1.0 \u2014 Long-Term Remission Monitoring' },
        change: 'A new low-intensity level for patients in sustained remission who still need monitoring and medication continuation.',
      },
      {
        third: 'Level 1 \u2014 Outpatient Services',
        fourth: { text: 'Level 1.5 \u2014 Outpatient Therapy' },
        change: 'Renumbered. The familiar standard outpatient level moves from 1 to 1.5.',
      },
      {
        third: 'Level 1-WM \u2014 Ambulatory Withdrawal Management',
        fourth: { chip: 'new', text: 'Level 1.7 \u2014 Medically Managed Outpatient' },
        change: 'The separate withdrawal management ladder is gone. Ambulatory WM is absorbed into the new 1.7 level.',
      },
      {
        third: 'Level 2.1 \u2014 Intensive Outpatient',
        fourth: { text: 'Level 2.1 \u2014 Intensive Outpatient' },
        change: 'Number and name both retained.',
      },
      {
        third: 'Level 2.5 \u2014 Partial Hospitalization',
        fourth: { text: 'Level 2.5 \u2014 High-Intensity Outpatient' },
        change: 'Same number, renamed. \u201cPartial hospitalization\u201d is retired as the label for this level.',
      },
      {
        third: 'Level 2-WM \u2014 Ambulatory WM with Extended On-Site Monitoring',
        fourth: { chip: 'new', text: 'Level 2.7 \u2014 Medically Managed Intensive Outpatient' },
        change: 'Absorbed into the new 2.7 level.',
      },
      {
        third: 'Level 3.1 \u2014 Clinically Managed Low-Intensity Residential',
        fourth: { text: 'Level 3.1 \u2014 Clinically Managed Low-Intensity Residential' },
        change: 'Unchanged.',
      },
      {
        third: 'Level 3.3 \u2014 Clinically Managed Population-Specific High-Intensity Residential',
        fourth: { chip: 'removed', text: 'Not a level' },
        change: 'Removed, on the basis that cognitive impairment should be accommodated at every level rather than in one.',
      },
      {
        third: 'Level 3.5 \u2014 Clinically Managed High-Intensity Residential / Level 3.2-WM \u2014 Clinically Managed Residential WM',
        fourth: { text: 'Level 3.5 \u2014 Clinically Managed High-Intensity Residential' },
        change: '3.2-WM is folded into 3.5.',
      },
      {
        third: 'Level 3.7 \u2014 Medically Monitored Inpatient / Level 3.7-WM \u2014 Medically Monitored Inpatient WM',
        fourth: { text: 'Level 3.7 \u2014 Medically Managed Residential' },
        change: 'Renamed from \u201cmonitored\u201d to \u201cmanaged\u201d; its withdrawal management counterpart is folded in. A biomedically enhanced variant (3.7 BIO) is available.',
      },
      {
        third: 'Level 4 \u2014 Medically Managed Intensive Inpatient',
        fourth: { text: 'Level 4 \u2014 Medically Managed Inpatient' },
        change: 'Retained.',
      },
    ],
    note: 'The Fourth Edition also layers modifiers rather than adding rungs: COE for co-occurring enhanced programs, BIO for biomedically enhanced Level 3.7, and a psychiatric variant of Level 4. Recovery residences sit alongside the continuum as supportive housing rather than as a clinical level. Exact level names should be confirmed against your licensed copy of the Criteria before they are printed in patient-facing documents.',
  },
};

export const sudProblem = {
  eyebrow: 'The real problem',
  title: 'Running ASAM 3rd and 4th Edition Side by Side While Your States Transition',
  callout:
    'There is no national switchover date. If you operate in more than one state, you are almost certainly required to use both editions at the same time.',
  paragraphs: [
    'The Fourth Edition was published in late 2023, but state adoption is fragmented. Colorado adopted it early. Illinois SUPR is transitioning providers through July 1, 2025. California\u2019s Drug Medi-Cal timeline runs through July 1, 2027. Washington State is scheduling adoption for its Medicaid programs in January 2028. Commercial plans in the same states frequently move on different timelines from Medicaid, and Medicare Advantage plans follow their own rules.',
    'An EHR that only supports the Fourth Edition breaks compliance in states that have not yet adopted it. An EHR that has not started building the Fourth Edition leaves you stranded as your payers transition.',
    'Elixir handles this by configuring assessment instruments, placement logic and service codes per state and per payer. Clinicians in your Illinois facilities document against the Fourth Edition while clinicians in your Washington facilities continue on the Third \u2014 in the same Elixir instance, on the same patient chart when someone transfers across state lines.',
  ],
};

export const sudAssessment = {
  eyebrow: 'Assessment',
  title: 'Level-of-Care Assessment, Placement and Medical Necessity Documentation',
  description:
    'The Fourth Edition reordered the six assessment dimensions and replaced \u201creadiness to change\u201d with a new person-centered dimension. Dimensions 1 to 5 drive the level-of-care recommendation; Dimension 6 enters through shared decision-making rather than by moving the score.',
  dimensions: [
    {
      icon: { src: dimension1Icon, size: [16, 14] },
      title: 'Intoxication, Withdrawal and Addiction Medications',
      text: 'Acute status and medication needs, including continuation of medications for opioid use disorder at every level.',
    },
    {
      icon: { src: dimension2Icon, size: [12, 16] },
      title: 'Biomedical Conditions',
      text: 'Physical health problems that affect placement, staffing and the level of medical oversight required.',
    },
    {
      icon: { src: dimension3Icon, size: [15, 16] },
      title: 'Psychiatric and Cognitive Conditions',
      text: 'Co-occurring mental health and cognitive presentation, which in the Fourth Edition is accommodated at every level rather than in a dedicated one.',
    },
    {
      icon: { src: dimension4Icon, size: [17, 15] },
      title: 'Substance Use-Related Risks',
      text: 'Risk of harm arising from continued use, including overdose risk and its implications for setting.',
    },
    {
      icon: { src: dimension5Icon, size: [12, 14] },
      title: 'Recovery Environment Interactions',
      text: 'Housing, relationships, employment and the surroundings the patient returns to between contacts.',
    },
    {
      icon: { src: dimension6Icon, size: [12, 12] },
      title: 'Person-Centered Considerations',
      text: 'Barriers to care including social determinants of health, patient preference and motivational needs \u2014 new in the Fourth Edition.',
    },
  ],
  platform: {
    title: 'What the platform does with the assessment',
    icon: { src: checkCircleIcon, size: [17, 17] },
    items: [
      {
        label: 'Structured scoring:',
        text: 'Each dimension is scored through configurable assessment templates aligned to the edition your state requires.',
      },
      {
        label: 'Level-of-care recommendation:',
        text: 'A placement recommendation generated from Dimensions 1 to 5, with Dimension 6 captured as clinical context. When clinician judgement differs from the algorithm, the discrepancy is documented with a required rationale \u2014 protecting you in utilization reviews.',
      },
      {
        label: 'Gap tracking:',
        text: 'When a patient is placed in a lower level than recommended because a bed or an authorization was unavailable, Elixir records the gap. Aggregated gap data gives you leverage in payer contract negotiations.',
      },
      {
        label: 'Medical necessity narrative:',
        text: 'Assessment data flows directly into the authorization request packet, reducing the UR team\u2019s drafting time from hours to minutes.',
      },
      {
        label: 'Continued-stay reviews:',
        text: 'Reassessment prompts are scheduled against each level\u2019s review intervals, catching authorization expiry before the bed day is unbillable.',
      },
    ],
  },
};

// The six 42 CFR Part 2 cards. The frame shows them twice: in the Compliance band and again,
// unchanged, in the Clinical documentation band (see DESIGN-SYSTEM.md question 175).
export const sudPart2Cards = [
  {
    label: 'Consent',
    icon: { src: part2ConsentIcon, size: [15, 14] },
    title: 'One consent for treatment, payment and operations',
    text: 'The rule replaced per-disclosure consent with a single consent covering all future TPO uses and disclosures. Elixir captures this consent electronically, timestamps it, and applies it to every downstream billing, referral and coordination event without re-prompting.',
  },
  {
    label: 'Counseling notes',
    icon: { src: part2NotesIcon, size: [12, 16] },
    title: 'SUD counseling notes held separately',
    text: 'The rule created a new protection modelled on HIPAA psychotherapy notes: clinicians\u2019 personal session notes must be kept separate from the rest of the record and require a distinct, dedicated consent to disclose. Elixir stores these in an access-restricted layer that does not release them into general chart exports or TPO workflows.',
  },
  {
    label: 'Patient rights',
    icon: { src: part2RightsIcon, size: [14, 14] },
    title: 'Accounting, restrictions and opt-outs',
    text: 'Patients gained the right to an accounting of consent-based disclosures made through an electronic health record over the preceding three years, and the right to request restrictions on TPO disclosures to health plans when paying out-of-pocket in full. Both workflows are native functions in the Elixir patient record.',
  },
  {
    label: 'Redisclosure',
    icon: { src: part2RedisclosureIcon, size: [14, 16] },
    title: 'Controlled onward sharing',
    text: 'HIPAA-covered recipients may redisclose records received under a TPO consent as HIPAA permits, but non-covered recipients cannot. When records leave Elixir via HIE or direct integration, the accompanying Notice to Accompany Disclosure is attached automatically.',
  },
  {
    label: 'Legal proceedings',
    icon: { src: part2LegalIcon, size: [14, 15] },
    title: 'Still restricted, and still enforced',
    text: 'Part 2 records may not be used in civil, criminal, administrative or legislative proceedings against a patient without consent or a court order that meets the heightened Part 2 standard. Elixir flags subpoena and legal-request exports with a mandatory compliance-review gate before release.',
  },
  {
    label: 'Breach',
    icon: { src: part2BreachIcon, size: [12, 16] },
    title: 'Notification and penalties aligned to HIPAA',
    text: 'The HITECH breach notification rule now applies, and Part 2\u2019s old criminal-only penalty scheme is replaced by HIPAA\u2019s enforcement authorities \u2014 up to $2,067,813 per calendar year for willful neglect uncorrected. Detailed audit logs on every view, edit, export and print are the first line of defense.',
  },
];

export const sudCompliance = {
  eyebrow: 'Compliance',
  title: '42 CFR Part 2 Compliance Built Into the Record, Not Bolted On',
  description:
    'The February 2024 final rule aligned Part 2 much more closely with HIPAA, and its compliance date \u2014 16 February 2026 \u2014 has passed. Part 2 records now sit under HIPAA\u2019s breach notification rule and HIPAA\u2019s civil and criminal penalty tiers, which is a material change in exposure for any organization still handling consent on paper.',
  note: 'A note on how we describe this: the final rule imposes these duties, but it does not prescribe a named technical segmentation standard for meeting them. An EHR vendor claiming \u201ccertified 42 CFR Part 2 data segmentation\u201d is describing marketing, not a federal certification. What matters is whether the record actually keeps counseling notes separate, logs disclosures, attaches the notice and blocks unconsented releases. That is what Elixir implements.',
};

export const sudMedication = {
  eyebrow: 'Medication',
  title: 'Medication-Assisted Treatment and Opioid Treatment Program Workflows',
  description:
    'SAMHSA\u2019s 2024 final rule made the pandemic-era flexibilities permanent and moved take-home decisions toward clinical judgement. An EHR built before that rule tends to encode the old rigid tests, which quietly constrains what your clinicians are now allowed to do.',
  schedule: {
    title: 'Methadone Take-Home Schedule (42 CFR \u00a78.12)',
    columns: ['Time in treatment', 'Federal maximum take-home doses'],
    rows: [
      ['First 14 days', 'Up to 7 days of take-home doses'],
      ['Days 15 to 30', 'Up to 14 days of take-home doses'],
      ['Day 31 onward', 'Up to 28 days of take-home doses'],
    ],
    note: 'These are federal maxima; state rules may be stricter. Decisions must be based on clinical judgement and documented against the Criteria.',
  },
  items: [
    {
      title: 'Telehealth initiation',
      text: 'Patients can be initiated on buprenorphine via audio-visual or audio-only telehealth if an in-person assessment is not clinically feasible. Methadone initiation requires an audio-visual encounter (or an in-person visit); audio-only is not permitted for methadone initiation. Elixir tracks encounter modality and blocks methadone initiation workflows on audio-only visit types.',
    },
    {
      title: 'DATA-Waiver elimination & MATE Act',
      text: 'The X-waiver is gone. Any DEA-registered prescriber with Schedule III authority can prescribe buprenorphine for OUD, subject to the one-time 8-hour MATE Act training requirement. Elixir stores prescriber training attestations alongside DEA registrations so you know which clinicians are cleared before scheduling.',
    },
    {
      title: 'PDMP review',
      text: 'SAMHSA\u2019s 2024 rule requires OTP prescribers to check the state Prescription Drug Monitoring Program before initiating treatment and periodically thereafter. Elixir integrates with state PDMPs to bring prescription histories directly into the intake and review workflow.',
    },
  ],
};

// Each row: a coloured chip (lime, yellow or red), a title, the text and a right-hand pill.
export const sudAdmissions = {
  eyebrow: 'Admissions',
  title: 'Intake, Admissions and Referral Management for Addiction Treatment Centers',
  description:
    'In residential and inpatient addiction treatment the gap between the first call and the admission is where the patient is most likely to be lost \u2014 and it is almost never a clinical failure. It is a verification that took two days, a bed that was not really open, or a travel arrangement nobody owned.',
  items: [
    {
      chip: 'Inquiry',
      tone: 'lime',
      title: 'Every enquiry is a tracked record from the first contact',
      text: 'Calls, web forms and walk-ins land in an inquiry pipeline with call-recording notes, referral source tagging, and SLA alerts if a callback is missed. Because Elixir is built on Salesforce, this is native CRM behavior rather than an EHR trying to do marketing.',
      pill: 'Native CRM',
    },
    {
      chip: 'Referral',
      tone: 'lime',
      title: 'Referral source management that survives staff turnover',
      text: 'Track admissions, conversions and time-to-admit by referring hospital, therapist, court, employer or alumni. When an outreach rep leaves, their relationships stay in the system.',
      pill: 'Conversion Tracking',
    },
    {
      chip: 'Pre-assessment',
      tone: 'yellow',
      title: 'Pre-admission screening that feeds the clinical record',
      text: 'Substance use history, medical acuity, psychiatric history and withdrawal risk captured during intake flow straight into the clinician\u2019s assessment queue. The admitting nurse does not re-ask questions the admissions team already answered.',
      pill: 'Direct Pipeline',
    },
    {
      chip: 'Benefits',
      tone: 'yellow',
      title: 'Eligibility and benefits verified before the bed is promised',
      text: 'Real-time 270/271 eligibility checks pull copays, deductibles, prior authorization requirements and behavioral health benefit carve-outs before admission. Patient financial responsibility is calculated and presented during intake.',
      pill: '270/271 Integration',
    },
    {
      chip: 'Travel',
      tone: 'yellow',
      title: 'Travel and arrival logistics owned in the system',
      text: 'Flight itineraries, ground transport, arrival windows and escort details logged on the admission record so the floor team knows who is arriving and when.',
      pill: 'Logistics Sync',
    },
    {
      chip: 'Census',
      tone: 'red',
      title: 'Real-time census and bed availability',
      text: 'Admissions coordinators see occupied beds, scheduled discharges, pending admissions and blocked beds across every facility in real time. Never turn away a patient for lack of a bed that was emptied two hours ago.',
      pill: 'Multi-facility Visibility',
    },
  ],
};

// The frame repeats the six Part 2 cards here (sudPart2Cards); only the intro and note differ.
export const sudClinical = {
  eyebrow: 'Clinical',
  title: 'Clinical Documentation Across Residential, Outpatient and Withdrawal Management',
  description:
    'The documentation burden in addiction treatment is not one big form; it is a hundred small ones, different at every level of care, and different again by state. Elixir configures them rather than shipping one template and a workaround.',
  note: 'Withdrawal management note: CIWA-Ar for alcohol, COWS for opioids, and CWS for cannabis can be scored in the flowsheet and graphed against medication administration events. The clinician sees dose, time and score on one screen rather than checking two systems.',
};

// The ninth card ends with the frame's inline link to the Payor Policy Intelligence page.
export const sudRevenue = {
  eyebrow: 'Revenue',
  title: 'Revenue Cycle Management for Substance Use Disorder Billing',
  description:
    'Addiction treatment billing fails in specific, repeatable places: an authorization that lapsed mid-stay, a level of care billed that the documentation does not support, and a claim for a service the patient did not attend. All three are visible in the record before they become a denial.',
  items: [
    {
      title: 'Eligibility and benefits',
      text: 'Verified electronically before admission, with behavioral health carve-out identification.',
    },
    { title: 'Authorization tracking', text: 'Units, days and dollars tracked with alerts before expiry.' },
    {
      title: 'Cost of care estimation',
      text: 'Out-of-pocket estimates generated at intake to protect cash flow and patient expectations.',
    },
    {
      title: 'Claim generation and submission',
      text: '837P and 837I claims created directly from signed notes and attendance records.',
    },
    {
      title: 'ERA handling and EOB processing',
      text: '835 remittance advice posted automatically, flagging exceptions and underpayments.',
    },
    {
      title: 'Denial management',
      text: 'Automated worklists grouped by CARC/RARC codes, with clinical notes and authorization records one click away.',
    },
    {
      title: 'Payment processing and plans',
      text: 'Patient payment portal with recurring payment plans and automated receipts.',
    },
    { title: 'A/R follow-up', text: 'Aging buckets by payer and program, with task assignment and productivity tracking.' },
    {
      title: 'Payor Policy Intelligence',
      text: 'AI-driven comparison between clinical notes and specific payer policies before the claim leaves the building.',
      link: { label: 'See how Payor Policy Intelligence works', to: '/kratu-ai/payor-policy-intelligence' },
    },
  ],
};

export const sudOutcomes = {
  eyebrow: 'Outcomes',
  title: 'Discharge Planning, Recovery Monitoring and Outcome-Based Treatment',
  description:
    'The measure that matters in addiction treatment is not how the episode ended but what happened after it. The Fourth Edition\u2019s new Level 1.0, Long-Term Remission Monitoring, gives that follow-up a place on the continuum for the first time.',
  items: [
    {
      title: 'Step-down as a plan',
      text: 'Discharge planning begins at admission. Step-down transitions (residential to PHP, IOP to outpatient) are treated as continued care, not as discharges and new intakes.',
    },
    {
      title: 'Long-term remission monitoring (Level 1.0)',
      text: 'For patients who have completed intensive treatment, a dedicated low-intensity schedule tracks medication adherence, periodic check-ins and recovery milestones.',
    },
    {
      title: 'Post-discharge contact and alumni',
      text: 'Scheduled automated check-ins at 30, 60, 90, 180 and 365 days, capturing recovery status and offering early re-engagement if a patient is struggling.',
    },
    {
      title: 'Outcome measurement',
      text: 'Standardized instruments (BAM, PHQ-9, GAD-7, WHO-5) administered on a cadence and graphed against time in treatment.',
    },
    {
      title: 'Readmission visibility',
      text: 'When a former patient contacts admissions again, their prior history, prior treatment plans and discharge notes are immediately visible \u2014 preventing repeated mistakes.',
    },
    {
      title: 'Reporting for funders and states',
      text: 'Aggregate outcome reports formatted for state reporting requirements, accreditation bodies (Joint Commission, CARF) and value-based payer contracts.',
    },
  ],
};

// The frame shows these six as labelled cards without links, so none is linked here.
export const sudKratu = {
  eyebrow: 'AI',
  title: 'KratuAI for Substance Use Disorder Treatment',
  description:
    'The AI layer across Elixir is built to reduce documentation time and catch revenue problems early \u2014 never to make a clinical placement decision. Every output is reviewed by a person before it enters the record.',
  items: [
    {
      icon: { src: kratuVisitPrepIcon, size: [15, 18] },
      label: 'Visit Prep',
      title: 'Visit Prep',
      text: 'Summarizes recent notes, toxicology results, attendance patterns and medication changes before the clinician walks into the session.',
    },
    {
      icon: { src: kratuCoPilotIcon, size: [15, 14] },
      label: 'Kratu Co-Pilot',
      title: 'Kratu Co-Pilot',
      text: 'Drafts session note structure from ambient audio or clinician prompts, leaving the clinician to review and sign. Group note documentation generates individual progress notes from one shared session summary.',
    },
    {
      icon: { src: kratuPayorIcon, size: [14, 18] },
      label: 'Payor Policy Intelligence',
      title: 'Payor Policy Intelligence',
      text: 'Reads the clinical note against the specific payer\u2019s medical necessity guidelines before claim submission, highlighting missing documentation elements before they trigger a denial.',
    },
    {
      icon: { src: kratuNoShowIcon, size: [15, 18] },
      label: 'No-Show Prediction',
      title: 'No-Show Prediction',
      text: 'Scores the probability of missed appointments in outpatient and IOP programs based on historical patterns, transportation distance and weather \u2014 triggering automated reminders and transport offers.',
    },
    {
      icon: { src: kratuResponsibleIcon, size: [14, 18] },
      label: 'Responsible AI',
      title: 'Responsible AI',
      text: 'Every AI suggestion requires human acceptance. AI models are trained on zero-retention infrastructure and comply with 42 CFR Part 2 and HIPAA privacy rules.',
    },
    {
      icon: { src: kratuEngineIcon, size: [15, 16] },
      label: 'The KratuAI engine',
      title: 'The KratuAI engine',
      text: 'The underlying intelligence layer powers workflow automation across scheduling, clinical notes and revenue cycle.',
    },
  ],
  limits: {
    title: 'What AI does not do here',
    icon: { src: aiXCircleIcon, size: [15, 15] },
    items: [
      'It does not score ASAM dimensions or recommend a level of care on its own.',
      'It does not make methadone take-home decisions.',
      'It does not submit claims without review.',
      'It does not sign notes. Every clinical action remains the clinician\u2019s responsibility.',
    ],
  },
};

// Shared FaqSection: the first half of `items` fills the left column, so the order keeps each
// question in its frame column.
export const sudFaq = {
  title: 'Substance Use Disorder EHR: Frequently Asked Questions',
  description: 'What clinical, compliance and IT leaders in addiction treatment ask us first.',
  items: [
    {
      question: 'Does Elixir support both ASAM 3rd Edition and 4th Edition?',
      answer:
        'Yes. Elixir supports both editions simultaneously within the same organization. Assessment instruments, dimension structures, placement logic and service-code crosswalks can be configured per state, per facility and per payer. Organizations operating across states with different adoption timelines can document against the Fourth Edition in states that have adopted it while continuing on the Third Edition elsewhere.',
    },
    {
      question: 'Is Elixir compliant with 42 CFR Part 2?',
      answer:
        'Yes. Elixir incorporates the requirements of the February 2024 final rule: single TPO consent management, segregated SUD counseling notes, disclosure accounting for electronic records, the revised Notice to Accompany Disclosure, and legal-proceeding export safeguards. Detailed audit logging aligns with HIPAA and HITECH enforcement expectations.',
    },
    {
      question: 'Can one instance run outpatient, residential and withdrawal management together?',
      answer:
        'Yes. That is the architecture\u2019s primary advantage. Patients stepping down or up move between levels within a single chart. Episode history, medication records, lab results and consent documents carry over without transfer packets or duplicate charting.',
    },
    {
      question: 'Is Elixir suitable for a CCBHC?',
      answer:
        'Yes. Certified Community Behavioral Health Clinics provide comprehensive SUD and mental health services across outpatient, crisis and care-coordination settings. Elixir supports CCBHC quality measures, PPS billing requirements and multi-disciplinary care coordination.',
    },
    {
      question: 'Which levels of care does Elixir support?',
      answer:
        'Elixir supports the full ASAM continuum: Level 1.0 (Long-Term Remission Monitoring), Level 1.5 (Outpatient Therapy), Level 1.7 (Medically Managed Outpatient), Level 2.1 (Intensive Outpatient), Level 2.5 (High-Intensity Outpatient), Level 2.7 (Medically Managed IOP), Level 3.1 (Low-Intensity Residential), Level 3.5 (High-Intensity Residential), Level 3.7 (Medically Managed Residential), and Level 4 (Medically Managed Inpatient). Modifiers (COE, BIO) and Third Edition equivalents are supported.',
    },
    {
      question: 'Can we run an opioid treatment program in Elixir?',
      answer:
        'Yes. Elixir supports OTP workflows under 42 CFR Part 8, including dispensing integration, methadone take-home schedule configuration aligned to the 2024 final rule, buprenorphine prescribing, telehealth encounter tracking, and PDMP query workflows.',
    },
    {
      question: 'Does Elixir handle multi-state operations with different Medicaid rules?',
      answer:
        'Yes. Clinical templates, billing rules, fee schedules and state reporting formats are configured at the program and facility level. Multi-state operators manage all locations in one instance while complying with state-specific regulations.',
    },
    {
      question: 'How does Elixir handle telehealth prescribing requirements for buprenorphine?',
      answer:
        'Elixir tracks the modality of every telehealth visit (audio-visual vs. audio-only), records prescriber MATE Act training attestations, flags DEA telemedicine flexibilities applicable to the encounter, and verifies state-level prescribing requirements before an electronic prescription is transmitted.',
    },
  ],
};

export const sudCtaBand = {
  eyebrow: 'Every level, one record',
  title: 'See Elixir running your continuum of care',
  description:
    'Bring your levels of care, your states and your payer mix. We will show you the assessment, the placement decision, the Part 2 consent trail and the claim that comes out the other end \u2014 on the ladder your contracts actually use.',
  cta: { label: 'Request a Demo', to: '/request-demo' },
  secondaryCta: { label: 'Explore the EHR', to: '/electronic-health-record' },
  related: [
    { label: 'Revenue Cycle Management', to: '/revenue-cycle-management' },
    { label: 'KratuAI', to: '/kratu-ai' },
    { label: 'Patient Portal', to: '/patient-portal' },
  ],
};
