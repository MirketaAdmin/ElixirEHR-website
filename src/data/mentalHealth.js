// Mental Health page (/behavioral-health/mental-health) — an independent page with no parent route.
// Copy is verbatim from the Figma. Links only point at routes that exist; items whose destination
// is not built yet carry `to: null` and render as text.
import heroMedia from '../assets/mental-health/hero-media.png';
import measuresIcon from '../assets/mental-health/icon-strip-measures.png';
import registryIcon from '../assets/mental-health/icon-strip-registry.png';
import fieldIcon from '../assets/mental-health/icon-strip-field.png';
import sudIcon from '../assets/mental-health/icon-strip-sud.png';
import measureSchedulesIcon from '../assets/mental-health/icon-measure-schedules.png';
import measureCollectsIcon from '../assets/mental-health/icon-measure-collects.png';
import measureTrendsIcon from '../assets/mental-health/icon-measure-trends.png';
import measureFlagsIcon from '../assets/mental-health/icon-measure-flags.png';
import measureEscalatesIcon from '../assets/mental-health/icon-measure-escalates.png';
import measureReportsIcon from '../assets/mental-health/icon-measure-reports.png';
import communityActIcon from '../assets/mental-health/icon-community-act.png';
import communityFieldIcon from '../assets/mental-health/icon-community-field.png';
import communityIpsIcon from '../assets/mental-health/icon-community-ips.png';
import communityCoordinationIcon from '../assets/mental-health/icon-community-coordination.png';
import communityPeersIcon from '../assets/mental-health/icon-community-peers.png';
import communityReportingIcon from '../assets/mental-health/icon-community-reporting.png';
import crisisBellIcon from '../assets/mental-health/icon-crisis-bell.png';
import crisisShieldIcon from '../assets/mental-health/icon-crisis-shield.png';
import kratuVisitPrepIcon from '../assets/mental-health/icon-kratu-visit-prep.png';
import kratuCoPilotIcon from '../assets/mental-health/icon-kratu-co-pilot.png';
import kratuNoShowIcon from '../assets/mental-health/icon-kratu-no-show.png';
import kratuResponsibleIcon from '../assets/mental-health/icon-kratu-responsible.png';

export const mhHero = {
  // The frame's breadcrumb reads "Home > Behavioral Health" (see DESIGN-SYSTEM.md question 167).
  currentPage: 'Behavioral Health',
  titleLines: ['Mental Health EHR', 'Software for', 'Outpatient and', 'Community', 'Behavioral Health', 'Programs'],
  titleAccent: [],
  description:
    'A Salesforce-native record built for how outpatient and community mental health actually runs — repeated outcome measures that get looked at, a real collaborative care registry, and documentation that works in a client’s kitchen as well as in a clinic room.',
  primaryCta: { label: 'Request a Demo', to: '/request-demo', arrow: false },
  // The frame gives no destination; it scrolls to the measurement-based care section.
  secondaryCta: { label: 'See measurement-based care', href: '#measurement' },
  media: {
    src: heroMedia,
    alt: 'Clinician reviewing outcome measures on a tablet with a client in a therapy room',
  },
};

export const mhHighlights = [
  {
    icon: { src: measuresIcon, size: [17, 10] },
    title: 'Measures that change decisions',
    textWidth: 212,
    text: 'Scores are trended, overdue measures surface on a worklist, and a flat trajectory is visible in week nine rather than month six.',
  },
  {
    icon: { src: registryIcon, size: [17, 16] },
    title: 'A real CoCM registry',
    textWidth: 232,
    text: 'Caseload review, time tracking and progress monitoring in the form CMS actually describes — not a spreadsheet beside the chart.',
  },
  {
    icon: { src: fieldIcon, size: [14, 18] },
    title: 'Built for the field',
    textWidth: 232,
    text: 'ACT, case management and in-home visits documented on a mobile device, offline when connectivity fails.',
  },
  {
    icon: { src: sudIcon, size: [14, 18] },
    title: 'One record with SUD',
    textWidth: 220,
    text: 'Co-occurring care on one chart, with 42 CFR Part 2 controls applied to the substance use portion.',
  },
];

export const mhMeasurement = {
  id: 'measurement',
  eyebrow: 'Measurement',
  title: 'Measurement-Based Care That Is Actually Measured',
  description:
    'Nearly every mental health EHR can store a PHQ-9 score. Very few make it consequential. The difference between collecting measures and practicing measurement-based care is whether anything happens when the number does not move — and the evidence is specifically about the second one.',
  evidence:
    'A 2021 meta-analysis of seven randomized controlled trials covering 2,019 patients with depressive disorders found measurement-based care outperformed usual care on three outcomes — and not on a fourth.',
  stats: [
    { label: 'Clinical remission', value: 'OR 1.83', detail: '95% CI 1.12–2.97 • p = .015' },
    { label: 'Depression severity at endpoint', value: 'SMD 0.53', detail: '95% CI 0.06–0.99 • p = .026' },
    { label: 'Medication adherence', value: 'OR 1.68', detail: '95% CI 1.22–2.30 • p = .001' },
    {
      label: 'Clinical response',
      value: 'OR 1.66',
      detail: '95% CI 0.66–4.17 • p = .279 — not statistically significant',
      chip: 'Non-sig',
      muted: true,
    },
  ],
  note: 'We publish the fourth result because leaving it out would be the kind of selective reporting this section is arguing against. Measurement-based care has good evidence for remission, symptom severity and adherence. The evidence for response rates, in this analysis, did not reach significance. Source 1 below.',
  platform: {
    title: 'What the platform does with a measure',
    items: [
      {
        icon: { src: measureSchedulesIcon, size: [18, 20] },
        title: 'Schedules it',
        text: 'Measures are tied to visit types or treatment plans — every four weeks for depression screening, every visit for GAD-7 when anxiety is the primary problem list item.',
      },
      {
        icon: { src: measureCollectsIcon, size: [21, 20] },
        title: 'Collects it before the session',
        text: 'Sent by SMS or portal link 24 hours before the appointment, completed on a phone in two minutes, scored and in the chart before the client sits down.',
      },
      {
        icon: { src: measureTrendsIcon, size: [21, 14] },
        title: 'Trends it where the clinician looks',
        text: 'Longitudinal score graphs sit directly inside the progress note and the caseload review list, not in a separate report tab nobody navigates to during a session.',
      },
      {
        icon: { src: measureFlagsIcon, size: [20, 20] },
        title: 'Flags non-response',
        text: "When a client's PHQ-9 has not moved after eight weeks of treatment, the chart flags this in the caseload review view for clinical discussion rather than six months later at discharge.",
      },
      {
        icon: { src: measureEscalatesIcon, size: [23, 20] },
        title: 'Escalates risk items',
        tone: 'red',
        text: 'Item 9 on the PHQ-9 (suicidal ideation) or any positive C-SSRS screen creates a visual banner on the chart, triggers a Columbia protocol prompt if not yet completed, and routes to a designated clinician or supervisor based on program rules.',
      },
      {
        icon: { src: measureReportsIcon, size: [21, 20] },
        title: 'Reports it',
        text: 'Program-level response and remission rates for CCBHC, Joint Commission, state contract or commercial payer value-based contracts without manual data pulls.',
      },
    ],
  },
  instruments: {
    title: 'Standard Instruments Included',
    columns: ['Instrument', 'Measures', 'Terms of use'],
    rows: [
      [
        'PHQ-9',
        'Depression severity, 9 items, DSM-5 aligned',
        'Public domain (developed by Drs. Robert L. Spitzer, Janet B.W. Williams, Kurt Kroenke and colleagues; no fee or permission required for clinical use)',
      ],
      [
        'GAD-7',
        'Generalized anxiety severity, 7 items',
        'Public domain (developed by Drs. Robert L. Spitzer, Kurt Kroenke, Janet B.W. Williams, Bernd Löwe; no fee or permission required for clinical use)',
      ],
      [
        'C-SSRS (Columbia Protocol)',
        'Suicide risk assessment, screener and lifetime/recent versions',
        'Available without royalty for clinical use through the Columbia Lighthouse Project',
      ],
      [
        'PCL-5',
        'PTSD symptom severity, 20 items, DSM-5 aligned',
        'Government work product (VA National Center for PTSD); public domain, no permission required for clinical use',
      ],
    ],
    footnote:
      'Additional validated instruments (AUDIT, DAST-10, WHODAS 2.0, PSC-35 for pediatric, and custom program forms) are configurable without code.',
  },
};

export const mhIntegrated = {
  eyebrow: 'Integrated care',
  title: 'Collaborative Care Model Billing Needs a Registry — Most EHRs Do Not Have One',
  paragraphs: [
    'The Collaborative Care Model (CoCM) is one of the best-evidenced models in behavioral health, with over 90 randomized controlled trials demonstrating superior outcomes compared to usual care. Medicare and most commercial payers cover it with dedicated CPT codes.',
    "Yet programs struggle to bill it. The primary reason is that CMS requires three specific things most EHRs were not built to do together: a continuous registry that tracks every client's scores and contacts, documentation of regular caseload review with a psychiatric consultant (not per-patient appointments, but review of the registry as a whole), and monthly cumulative time tracking across multiple clinical team members.",
    'Elixir provides the registry as a native capability:',
  ],
  steps: [
    {
      title: 'Registry-driven follow-up',
      text: 'Clients enrolled in CoCM appear on a dedicated registry view that shows days since last contact, latest PHQ-9/GAD-7, score trajectory, and whether a psychiatric review is overdue.',
    },
    {
      title: 'Weekly psychiatric caseload review',
      text: 'The psychiatric consultant reviews the caseload directly in the registry view, adding treatment change recommendations, medication adjustments, or step-down notes without opening and closing dozens of separate individual records.',
    },
    {
      title: 'Audit-defensible monthly time capture',
      text: 'Every clinical contact, case review minute, and psychiatric consultation is aggregated across the calendar month. The system flags when the threshold for 99492 (70 minutes, initial month) or 99493 (60 minutes, subsequent month) has been reached and generates the claim automatically at month close.',
    },
  ],
  codes: {
    title: 'Behavioral Health Integration and Collaborative Care Codes Supported',
    columns: ['Code', 'Description', 'Time / Requirement'],
    rows: [
      ['99492', 'Initial psychiatric collaborative care management, first 70 minutes in first calendar month', '70 min/month; requires behavioral health care manager + psychiatric consultant'],
      ['99493', 'Subsequent psychiatric collaborative care management, first 60 minutes in calendar month', '60 min/month; ongoing caseload review'],
      ['99494', 'Initial or subsequent collaborative care, each additional 30 minutes in calendar month', 'Each additional 30 min; list separately with 99492 or 99493'],
      ['G2214', 'Initial or subsequent collaborative care, first 30 minutes in calendar month', '30 min/month; for months with shorter duration of contact'],
      ['99484', 'General behavioral health integration care management, at least 20 minutes in calendar month', '20 min/month; does not require designated psychiatric consultant'],
      ['G0323', 'General behavioral health integration care management by clinical social worker or clinical psychologist, 20 minutes', '20 min/month; CSW or CP billable'],
      {
        cells: ['G0560', 'Safety planning intervention for patients at risk for suicide or self-harm (approx. 20 minutes, CY2025 PFS)', 'Documented evidence-based safety plan; standalone or add-on'],
        highlight: true,
      },
      {
        cells: ['G0544', 'Post-discharge follow-up bundle for patients with suicide/overdose risk (four contacts over 30 days, CY2025 PFS)', 'Four contacts in 30 days post-discharge from ED or crisis facility'],
        highlight: true,
      },
      {
        cells: ['G0552–G0554', 'Digital mental health treatment devices supplied to a patient, initial and ongoing service codes (CY2025 PFS)', 'Cleared DMHT devices; initial supply and subsequent monthly management'],
        highlight: true,
      },
      {
        cells: ['G0568–G0570', 'Collaborative care add-on codes for multi-condition and high-complexity patients (CY2026 PFS proposed/final)', 'Additional time and complexity requirements'],
        highlight: true,
      },
    ],
    footnote:
      'Codes G0560, G0544, G0552–G0554 finalized in the CY2025 Medicare Physician Fee Schedule. Codes G0568–G0570 introduced in the CY2026 proposed/final rule. Confirm individual payer coverage and local fee schedules.',
  },
};

export const mhCommunity = {
  eyebrow: 'Community programs',
  title: 'Community Mental Health Programs: ACT, Case Management and Supported Employment',
  description:
    'Community mental health is delivered where the client is — a flat, a shelter, a job site, a school, the back of a car. An EHR designed around a clinic room fails here in a specific way: the documentation happens hours later from memory, and the fidelity data nobody captured is the data the state asks for.',
  items: [
    {
      icon: { src: communityActIcon, size: [22, 16] },
      label: 'ACT',
      title: 'Assertive community treatment',
      text: 'Team-based caseload sharing where any team member can see recent notes, current location notes, and risk updates without owning a separate caseload. TMACT and DACTS fidelity reporting built in.',
    },
    {
      icon: { src: communityFieldIcon, size: [15, 22] },
      label: 'Field work',
      title: 'Mobile documentation that works offline',
    titleWidth: 260,
      text: 'Complete progress notes, capture client signatures, complete crisis screenings, and log travel and encounter time on a tablet or phone without cellular connectivity; syncs automatically when reconnected.',
    },
    {
      icon: { src: communityIpsIcon, size: [20, 20] },
      label: 'IPS',
      title: 'Supported employment',
      text: 'Track job development contacts, employer relationships, employment status changes, and time-in-community against the 25-item IPS fidelity scale without separate tracking spreadsheets.',
    },
    {
      icon: { src: communityCoordinationIcon, size: [18, 20] },
      label: 'Coordination',
      title: 'Case management and care coordination',
      text: 'Log collateral contacts, housing applications, benefits navigation, court reports, and multi-agency team meetings with time tracking mapped to state targeted case management codes.',
    },
    {
      icon: { src: communityPeersIcon, size: [20, 19] },
      label: 'Peers',
      title: 'Peer support services',
      text: 'Progress note templates that reflect recovery-oriented, non-clinical language while still satisfying Medicaid documentation requirements for peer support encounter billing.',
    },
    {
      icon: { src: communityReportingIcon, size: [16, 20] },
      label: 'Reporting',
      title: 'Fidelity and state contract reporting',
      text: 'Generate the reporting required for state block grants, SAMHSA grants, county behavioral health contracts, and CCBHC demonstration programs from chart data rather than manual surveys.',
    },
  ],
};

// Each row: a coloured chip, a title, the text and a right-hand badge. `chipWidth` keeps the
// frame's two-line "Safety plan" chip.
export const mhCrisis = {
  eyebrow: 'Crisis',
  title: 'Crisis Services, Safety Planning and Post-Discharge Follow-Up',
  description:
    'The period after a crisis contact is the highest-risk window in outpatient mental health, and it is also the one most likely to fall between two organizations. Two relatively new billing codes now describe exactly this work.',
  items: [
    {
      chip: 'Risk',
      chipTone: 'red',
      title: 'Screening that escalates to a person',
      text: 'The Columbia-Suicide Severity Rating Scale (C-SSRS) is built into intake, crisis contacts, and routine measure sets. A positive screen does not just change a score field — it places a persistent banner on the chart, opens the safety plan prompt, and notifies the assigned clinician or supervisor based on configurable program rules.',
      badge: { label: 'Immediate Routing', tone: 'red', icon: { src: crisisBellIcon, size: [16, 20] } },
    },
    {
      chip: 'Safety plan',
      chipTone: 'lime',
      chipWidth: 98,
      title: 'Safety planning as a documented intervention (G0560)',
      text: "The Stanley-Brown Safety Planning Intervention is structured as a dedicated workflow — warning signs, internal coping strategies, social contacts, professional contacts, making the environment safe. The completed plan is immediately accessible on the client's mobile portal, available in the chart for any team member, and documented with the elements required for code G0560.",
      badge: { label: 'G0560 Billable', tone: 'purple' },
    },
    {
      chip: 'Transitions',
      chipTone: 'purple',
      title: 'Follow-up after an emergency department discharge (G0544)',
      text: "Code G0544 describes a bundle of four contacts within 30 days after a client is discharged from an emergency department or crisis facility following a suicide or overdose risk event. Elixir tracks the 30-day window, schedules the contacts on the care team's worklist, logs each contact with time, and generates the bundled claim when the requirements are met.",
      badge: { label: 'G0544 30-Day Bundle', tone: 'purple' },
    },
    {
      chip: '988 & mobile crisis',
      chipTone: 'purple',
      title: 'Mobile crisis and Lifeline coordination',
      text: 'For community behavioral health centers operating or coordinating with mobile crisis teams, Elixir captures the required elements for the 85% enhanced Medicaid match under the American Rescue Plan Act (qualifying team composition, response time, location, warm handoff).',
      badge: { label: '85% ARPA Match', tone: 'green' },
    },
    {
      chip: 'Re-engagement',
      chipTone: 'lime',
      title: 'Nobody disappears quietly',
      text: 'Clients with elevated suicide risk who cancel or no-show an appointment do not just sit in an attendance log. The system triggers an immediate outreach task to the clinician or case manager, documented with outreach attempts and escalation steps if contact fails.',
      badge: { label: 'Safety Closed-Loop', tone: 'green', icon: { src: crisisShieldIcon, size: [17, 20] } },
    },
  ],
};

export const mhTelehealth = {
  eyebrow: 'Telehealth',
  title: 'Telehealth for Mental Health: What Is Required Now and What Changes in 2028',
  intro:
    'Telehealth for mental health has different regulatory rules than telehealth for medical services, and programs need an EHR that enforces the specific rules that apply to their payers.',
  periods: [
    {
      title: 'Through December 31, 2027',
      tone: 'purple',
      text: "Under current legislation, Medicare's requirement for an in-person visit within six months prior to an initial tele-mental health service — and every 12 months thereafter — remains waived. Clients may receive tele-mental health services in their homes without an in-person visit requirement through the end of 2027.",
    },
    {
      title: 'Starting January 1, 2028',
      tone: 'red',
      text: 'Unless Congress extends the waiver again, the in-person visit requirement will take effect for Medicare tele-mental health services: an in-person visit within six months prior to the initial tele-mental health service and every 12 months thereafter, with exceptions documented in the medical record. Elixir tracks the in-person visit interval and flags clients approaching the 12-month threshold.',
    },
  ],
  permanent:
    'Permanent flexibilities: The removal of geographic restrictions for mental health telehealth — allowing clients to receive care in their homes regardless of location — is permanent under Medicare law (CAA 2021). Audio-only telehealth remains covered for mental health when the patient cannot or does not consent to video.',
  sources:
    'Sources: HHS Telehealth Policy, Medicare Claims Processing Manual Chapter 12; Consolidated Appropriations Act 2023, CAA 2024. See Sources 9 and 10 below.',
};

export const mhDocumentation = {
  eyebrow: 'Documentation',
  title: 'Clinical Documentation for Outpatient Mental Health',
  description:
    "Configured to your programs and your state's requirements rather than shipped as one template with a workaround attached.",
  items: [
    {
      title: 'Comprehensive diagnostic assessment',
      text: 'Structured biopsychosocial with DSM-5-TR diagnostic crosswalk, ICD-10 coding, and state-mandated assessment domains.',
    },
    {
      title: 'Treatment planning (golden thread)',
      text: 'Goals linked to assessed needs, objectives with measurable criteria, and interventions linked to progress notes so every note defends the service against the plan.',
    },
    {
      title: 'Progress note formats',
      text: 'DAP, SOAP, BIRP, GIRP, and narrative formats configured per program or provider type, with time-in/time-out capture for timed CPT codes.',
    },
    {
      title: 'Concurrent documentation',
      text: 'Note layouts designed to be completed collaboratively with the client during the last 7–10 minutes of the session, reducing after-hours charting.',
    },
    {
      title: 'Psychiatric evaluations and med management',
      text: 'Templates tailored for psychiatrists and PMHNPs: psychiatric ROS, mental status exam, medication history, metabolic monitoring for atypical antipsychotics.',
    },
    {
      title: 'Integrated e-prescribing',
      text: 'EPCS-certified for controlled substances, PDMP query integration where supported by state, drug interaction checking, and formulary transparency.',
    },
    {
      title: 'Group therapy notes',
      text: 'Document group attendance, general group narrative, and individual client response notes in one workflow without opening each record individually.',
    },
    {
      title: 'Supervision and co-signature',
      text: 'Automated routing of unlicensed or associate-level notes to supervising clinicians based on payer rules, licensure type, and program policy.',
    },
    {
      title: 'Children and adolescents',
      text: 'Collateral contact documentation (parents, schools, child welfare), age-appropriate screening instruments (PSC-35, SCARED), and guardian consent management.',
    },
    {
      title: 'Discharge and transition summaries',
      text: 'Auto-populated outcome measure comparison (intake vs. discharge PHQ-9/GAD-7), treatment goals achieved, continuing care recommendations, and crisis safety plan.',
    },
    {
      title: 'Client portal',
      text: 'Appointment scheduling, intake paperwork completion, outcome measure completion, secure messaging, and tele-visit launch from any browser or phone.',
    },
    {
      title: 'Offline mobile app',
      text: 'Full documentation capability for community and home-based clinicians without cellular connectivity, with automatic background sync when reconnected.',
    },
  ],
};

export const mhRevenue = {
  eyebrow: 'Revenue',
  title: 'Revenue Cycle Management for Mental Health Practices',
  description:
    'Outpatient mental health billing fails in narrower places than medical billing, and the same few causes recur: a supervision rule not met, a time threshold not evidenced, an authorization that expired between sessions, and a session that did not happen.',
  items: [
    {
      title: 'Eligibility and benefits',
      text: 'Real-time verification of behavioral health copays, deductibles, preauthorization requirements, and carve-out payer identification before the appointment.',
    },
    {
      title: 'Authorization tracking',
      text: 'Tracks approved sessions, expiration dates, and remaining authorized units with proactive warnings before the last authorized session is scheduled.',
    },
    {
      title: 'Time-based code support',
      text: 'Ensures the documented start and stop time supports the billed CPT code (90832, 90834, 90837, and add-on codes 90833, 90836, 90838) before the claim goes out.',
    },
    {
      title: 'Supervision and licensure rules',
      text: 'Automates incident-to billing, supervisor NPI application, and modifier appending (HO, SA, AJ, etc.) based on clinician credentials and payer policy.',
    },
    {
      title: 'Registry-based program billing',
      text: 'Aggregates monthly Collaborative Care (99492/99493) and Behavioral Health Integration (99484/G0323) time automatically and generates the monthly claim when thresholds are reached.',
    },
    {
      title: 'Claims, ERA and denials',
      text: 'Direct clearinghouse integration with electronic 837 claim submission, 835 electronic remittance posting, and automated denial categorization with work queues.',
    },
    {
      title: 'Patient responsibility',
      text: 'Card-on-file with automated copay collection, sliding fee scale calculation based on federal poverty guidelines, and transparent client statements.',
    },
    {
      title: 'Grant and contract billing',
      text: 'Splits encounter costs between commercial/Medicaid billing and state block grants, county behavioral health contracts, or philanthropic funding sources.',
    },
    {
      title: 'Payor Policy Intelligence',
      text: 'Maintains rules for Medicaid managed care plans, commercial insurers, and Medicare administrative contractors in your specific state so claims match payer expectations before submission.',
    },
  ],
};

// The frame shows these four as labelled cards without links, so none is linked here.
export const mhKratu = {
  eyebrow: 'AI',
  title: 'KratuAI for Mental Health',
  description:
    'The AI layer reduces documentation time and surfaces what a clinician would want to notice. It does not assess risk, make clinical judgements, or write anything into the record that a person has not reviewed.',
  items: [
    {
      icon: { src: kratuVisitPrepIcon, size: [19, 20] },
      title: 'Visit Prep',
      text: 'Synthesizes the last three progress notes, latest outcome score change, active problem list items, and outstanding tasks into a 60-second summary before the clinician begins the session.',
    },
    {
      icon: { src: kratuCoPilotIcon, size: [22, 20] },
      title: 'Kratu Co-Pilot (ambient documentation)',
      text: "Listens to the session with client consent and generates a draft progress note in the provider's preferred format (DAP, SOAP, BIRP). The clinician reviews, edits, and signs. Session audio is never retained after the note is generated.",
    },
    {
      icon: { src: kratuNoShowIcon, size: [20, 21] },
      title: 'No-Show Prediction',
      text: 'Identifies scheduled appointments at elevated risk of cancellation or no-show based on attendance history, appointment time, and engagement factors — allowing proactive outreach before the slot is lost.',
    },
    {
      icon: { src: kratuResponsibleIcon, size: [16, 20] },
      title: 'Responsible AI Architecture',
      text: 'Client data is never used to train generalized models. All AI processing occurs within dedicated, HIPAA-compliant, BAA-covered infrastructure. Every AI suggestion requires affirmative clinician acceptance before entering the chart.',
    },
  ],
  limits: {
    title: 'What AI does not do here',
    items: [
      'It does not assess suicide risk or assign risk levels',
      'It does not make diagnostic determinations',
      'It does not sign notes or submit claims autonomously',
      'It does not replace human caseload review in Collaborative Care',
      'It does not communicate directly with clients without clinician mediation',
    ],
  },
};

// Shared FaqSection: the first half of `items` fills the left column, so the order keeps each
// question in its frame column.
export const mhFaq = {
  eyebrow: 'Questions',
  title: 'Mental Health EHR: Frequently Asked Questions',
  description: 'What clinical and operations leaders in outpatient and community mental health ask us first.',
  items: [
    {
      question: 'Can we use our own screening tools and assessment forms?',
      answer:
        'Yes. The standard validated instruments (PHQ-9, GAD-7, C-SSRS, PCL-5, AUDIT, DAST-10) are included out of the box with automated scoring and trending. Custom clinical assessments, state-mandated intake forms, program-specific questionnaires, and specialized rating scales can be built and modified without code.',
    },
    {
      question: 'Does documentation work when clinicians are in the field without internet?',
      answer:
        'Yes. The Elixir mobile application allows clinicians to complete progress notes, crisis screenings, and encounter logs offline. Data is stored encrypted on the device and syncs automatically with the central record when connectivity is restored, with conflict resolution rules to prevent overwrites.',
    },
    {
      question: 'How does the system handle supervision and associate-level billing?',
      answer:
        "Configurable supervision hierarchies route notes written by associates, trainees, or unlicensed clinicians to designated supervisors for review and co-signature before claims are generated. Payer-specific billing rules determine whether the claim is submitted under the supervisor's NPI (incident-to) or the clinician's own credentials with appropriate modifiers attached automatically.",
    },
    {
      question: 'Can we bill both commercial insurance and state/county grants from the same system?',
      answer:
        'Yes. Elixir supports split billing workflows where services are billed to commercial payers, Medicaid managed care, or Medicare first, and uncovered services, co-pays, or unbillable community activities are allocated to state block grants, local behavioral health authorities, or philanthropic funding sources with dedicated reporting for each funder.',
    },
    {
      question: 'How does Elixir support Collaborative Care Model (CoCM) billing?',
      answer:
        "Elixir includes a dedicated CoCM registry that satisfies all three CMS requirements: longitudinal tracking of every enrolled client's outcome measures, a shared view for the weekly psychiatric caseload review that allows recommendations to be entered directly, and continuous time tracking that aggregates monthly clinical contacts toward the thresholds for 99492, 99493, 99494, and G2214.",
    },
    {
      question: 'Can mental health and substance use disorder records be kept on the same platform?',
      answer:
        'Yes. For dual-diagnosis or co-occurring programs, Elixir supports a single unified patient record with granular access controls that apply 42 CFR Part 2 consent and disclosure rules specifically to the substance use disorder portion of the chart, so mental health clinicians can access what they need while SUD records remain protected under the more stringent federal standard.',
    },
    {
      question: 'What telehealth capabilities are included?',
      answer:
        'Integrated HIPAA-compliant video visits launched directly from the appointment schedule or client portal, with concurrent documentation open alongside the video window, automated appointment reminders with visit links by SMS and email, and billing code modifiers (-95, POS 02/10) applied automatically based on payer rules. Audio-only visits are supported with appropriate billing code tracking.',
    },
    {
      question: 'Is Elixir suitable for Certified Community Behavioral Health Clinics (CCBHCs)?',
      answer:
        'Yes. Elixir supports the core CCBHC operational requirements: open-access/same-day scheduling, 24/7 crisis service documentation, standard outcome measurement across the required domains, care coordination with physical health and criminal justice partners, PPS rate billing, and state-level demonstration reporting.',
    },
  ],
};

// The three related resources are not built yet, so they render as text.
export const mhCtaBand = {
  eyebrow: 'Measurable by design',
  title: 'See what your outcome data would actually look like',
  description:
    'Bring your programs, your measures and your payer mix. We will show you the registry, the caseload review, the measure trajectory a clinician sees, and the claim that comes out the other end.',
  cta: { label: 'Request a Demo', to: '/request-demo' },
  secondaryCta: { label: 'Substance use disorder EHR', to: '/behavioral-health/substance-use-disorder' },
  related: [
    { label: 'Explore CCBHC Compliance', to: null },
    { label: 'Collaborative Care Registry Walkthrough', to: null },
    { label: 'Mobile Crisis Billing Brief', to: null },
  ],
};
