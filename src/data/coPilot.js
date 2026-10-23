// Elixir Co-Pilot (Clinical Assistant) page (Figma "Kratu Co-Pilot", 1280 frame), a child page of
// KratuAI (/kratu-ai/elixir-co-pilot-clinical-assistant). Copy is reproduced verbatim from the
// frame. The hero image is the frame's grey placeholder (the same export as the KratuAI hero).
import heroPlaceholder from '../assets/contact-center/hero-placeholder.png';
import pillarTemplatesIcon from '../assets/kratu-ai/copilot-pillar-templates.png';
import pillarEhrIcon from '../assets/kratu-ai/copilot-pillar-ehr.png';
import pillarAutofiledIcon from '../assets/kratu-ai/copilot-pillar-autofiled.png';
import pillarTrainingIcon from '../assets/kratu-ai/copilot-pillar-training.png';
import featureFlowIcon from '../assets/kratu-ai/copilot-feature-flow.png';
import featureInsightsIcon from '../assets/kratu-ai/copilot-feature-insights.png';
import featureDictationIcon from '../assets/kratu-ai/copilot-feature-dictation.png';
import tabInsightsIcon from '../assets/kratu-ai/copilot-tab-insights.png';
import tabDiagnosesIcon from '../assets/kratu-ai/copilot-tab-diagnoses.png';
import tabReferralsIcon from '../assets/kratu-ai/copilot-tab-referrals.png';
import tabCarePlanIcon from '../assets/kratu-ai/copilot-tab-careplan.png';
import alertGapIcon from '../assets/kratu-ai/copilot-alert-gap.png';
import alertDiscrepancyIcon from '../assets/kratu-ai/copilot-alert-discrepancy.png';
import alertCorrelationIcon from '../assets/kratu-ai/copilot-alert-correlation.png';
import insightLabsIcon from '../assets/kratu-ai/copilot-insight-labs.png';
import insightGapsIcon from '../assets/kratu-ai/copilot-insight-gaps.png';
import insightReconcileIcon from '../assets/kratu-ai/copilot-insight-reconcile.png';
import insightCoordinationIcon from '../assets/kratu-ai/copilot-insight-coordination.png';
import dictationMicIcon from '../assets/kratu-ai/copilot-dictation-mic.png';
import dictationCheckIcon from '../assets/kratu-ai/copilot-dictation-check.png';
import dictationEditIcon from '../assets/kratu-ai/copilot-dictation-edit.png';
import safetyLabIcon from '../assets/kratu-ai/copilot-safety-lab.png';
import safetyRxIcon from '../assets/kratu-ai/copilot-safety-rx.png';
import safetyProblemIcon from '../assets/kratu-ai/copilot-safety-problem.png';
import safetyReferralIcon from '../assets/kratu-ai/copilot-safety-referral.png';
import safetyCheckIcon from '../assets/kratu-ai/copilot-safety-check.png';
import controlPauseIcon from '../assets/kratu-ai/copilot-control-pause.png';
import controlMseIcon from '../assets/kratu-ai/copilot-control-mse.png';
import controlTemplatesIcon from '../assets/kratu-ai/copilot-control-templates.png';

export const coPilotHero = {
  currentPage: 'Kratu Co-Pilot',
  titleLines: ['Kratu Co-Pilot: AI', 'Documentation,', 'Clinical Insights and', 'Dictation Inside the', 'Chart'],
  // The whole title is white in this frame (no accent).
  titleAccent: [],
  description:
    'Three capabilities in the chart your clinicians already use: an ambient scribe across the whole visit, an insights pane that surfaces what the record already knows, and dictation that fills your own clinical templates. Every entry is confirmed by the clinician',
  primaryCta: { label: 'Request a Kratu Co-Pilot Demo', to: '/request-demo', arrow: false },
  // Scrolls to "Three Kratu Co-Pilot features across one patient encounter".
  secondaryCta: { label: 'See the three features', href: '#features' },
  media: { src: heroPlaceholder, alt: '' },
};

// tone: the card's edge and tile colour.
export const coPilotPillars = [
  {
    icon: { src: pillarTemplatesIcon, size: [18, 18] },
    tone: 'lime',
    title: 'Your templates',
    text: 'Beyond SOAP, to the clinical templates configured for your organization.',
  },
  {
    icon: { src: pillarEhrIcon, size: [18, 18] },
    tone: 'purple',
    title: 'Inside the EHR',
    text: 'In the chart your clinicians already work in. No second app to open.',
  },
  {
    icon: { src: pillarAutofiledIcon, size: [20, 22] },
    tone: 'red',
    title: 'Nothing is auto-filed',
    text: 'Every recommendation opens for the clinician to update and confirm.',
  },
  {
    icon: { src: pillarTrainingIcon, size: [16, 20] },
    tone: 'lime',
    title: 'Not used for training',
    text: 'Patient data is not used to train AI.',
  },
];

// Each card's link scrolls to its feature section on this page.
export const coPilotOverview = {
  eyebrow: 'Overview',
  title: 'Three Kratu Co-Pilot features across one patient encounter',
  description:
    'Documentation is only part of the work. Kratu Co-Pilot also surfaces what the record already contains, and gives clinicians a faster way to complete the forms your organization actually uses.',
  features: [
    {
      icon: { src: featureFlowIcon, size: [28, 24], tone: 'lime' },
      tag: '01 · Clinical Flow',
      title: 'Co-Pilot Visit Flow',
      text: 'Pre-visit context, live ambient capture, template-mapped drafting, and inline staging of lab, imaging, and prescription orders.',
      link: { label: 'Explore Visit Flow', href: '#visit-flow' },
    },
    {
      icon: { src: featureInsightsIcon, size: [29, 22], tone: 'purple' },
      tag: '02 · Chart Intelligence',
      title: 'Co-Pilot Insights Pane',
      text: 'Real-time 4-tab clinical intelligence assistant querying past labs, flagging overdue care gaps, and mapping active problem lists.',
      link: { label: 'Inspect the Insights Pane', href: '#insights-pane' },
    },
    {
      icon: { src: featureDictationIcon, size: [26, 26], tone: 'lime' },
      tag: '03 · Template Dictation',
      title: 'Scribe for Template Forms',
      text: 'Continuous train-of-thought dictation that simultaneously parses complex clinical speech into dozens of distinct form fields.',
      link: { label: 'See Template Dictation', href: '#template-dictation' },
    },
  ],
};

// tone: the step's top edge and tag colour (purple: Kratu AI; lime: clinician action).
export const coPilotVisitFlow = {
  id: 'visit-flow',
  eyebrow: 'Feature 01',
  title: 'Co-Pilot Visit Flow: pre-visit chat, visit in progress, visit close-out',
  description:
    'Three stages across one encounter. Kratu Co-Pilot prepares; the clinician decides. Nothing reaches the record, the pharmacy or another provider without a clinician choosing it.',
  steps: [
    {
      tag: 'Clinician Control',
      tone: 'lime',
      title: 'Initiate Encounter Capture',
      text: 'Clinician selects mic source, starts recording, and has instant pause capability whenever sensitive disclosures are made.',
    },
    {
      tag: 'Kratu AI',
      tone: 'purple',
      title: 'Ambient Dialogue Capture',
      text: 'Continuous stream separates clinician dialogue from patient responses without requiring specialized wake-words or robotic syntax.',
    },
    {
      tag: 'Kratu AI',
      tone: 'purple',
      title: 'Dynamic Template Drafting',
      text: 'Maps ambient clinical findings straight into your organizational note format—whether specialty-specific or tailored internal layouts.',
    },
    {
      tag: 'Clinician Review',
      tone: 'lime',
      title: 'Inline Review & Edit',
      text: 'The clinician reviews drafted sections, alters wording with full keyboard or voice dictation, and marks approval block-by-block.',
    },
    {
      tag: 'Clinician Staging',
      tone: 'lime',
      title: 'Staged Action Selection',
      text: 'AI surfaces lab orders, medication changes, and referrals mentioned in room. The clinician checks or unchecks items to stage in the chart.',
    },
    {
      tag: 'Final Sign-Off',
      tone: 'lime',
      title: 'Independent Dispatch',
      text: 'Approving the note does NOT auto-transmit. Prescriptions and lab orders sit in standard entry queue for clinician signature and PIN entry.',
    },
  ],
  legend: [
    { label: 'Automated Kratu AI Processing', tone: 'purple' },
    { label: 'Clinician Authority & Authorization Action', tone: 'lime' },
  ],
  // The frame shows a generic image placeholder here (its note asks for a lifestyle photograph);
  // the photograph has not been supplied, so the frame renders empty.
  imageAlt: 'Image placeholder',
};

// The Insights pane mock-up is an illustration of the frame's example data (static; its actions
// are not controls). tone: the alert's colour (red: care gap; lime: discrepancy; purple: context).
export const coPilotInsights = {
  id: 'insights-pane',
  eyebrow: 'Feature 02',
  title: 'Co-Pilot Insights: what the record already knows, surfaced before you ask',
  description:
    "A patient's history is rarely missing — it is just spread across visits, labs and notes nobody has time to reopen. The Insights pane reads what is already recorded and puts four questions in front of the clinician: what should I know, what should be on the problem list, who else should see this patient, and what does the care plan look like.",
  pane: {
    label: 'Example Kratu Co-Pilot Insights pane',
    tabs: [
      { label: 'Patient Insights', icon: { src: tabInsightsIcon, size: [17, 13] } },
      { label: 'Diagnoses', icon: { src: tabDiagnosesIcon, size: [16, 16] } },
      { label: 'Referrals', icon: { src: tabReferralsIcon, size: [16, 15] } },
      { label: 'Care Plan', icon: { src: tabCarePlanIcon, size: [14, 16] } },
    ],
    labs: [
      { label: 'Most Recent HbA1c', value: '7.4%', flag: 'Elevated', note: 'Recorded 12 Mar · 7 months ago' },
      { label: 'Last Lipid Panel', value: '132', unit: 'mg/dL LDL', note: 'Recorded 14 Aug · Moderate control' },
      { label: 'Complete Blood Count', value: 'Normal', tone: 'normal', note: 'WBC 6.2 · Platelets 240k · Hgb 14.1' },
    ],
    alerts: [
      {
        tone: 'red',
        icon: { src: alertGapIcon, size: [22, 19] },
        title: 'Care Gap Detected: Overdue HbA1c',
        text: 'Patient has had no glycated hemoglobin lab test in the last 6 months (Quality Measure CMS122v10).',
        action: 'Stage Lab Order',
      },
      {
        tone: 'lime',
        icon: { src: alertDiscrepancyIcon, size: [18, 17] },
        title: 'Discrepancy: Unlisted Neuropathy',
        text: 'Peripheral Neuropathy documented in last Podiatry consult but missing from active EHR Problem List.',
        action: 'Review & Reconcile',
      },
      {
        tone: 'purple',
        icon: { src: alertCorrelationIcon, size: [20, 17] },
        title: 'Encounter Correlation',
        text: "Today's knee discomfort complaints match osteoarthritic history recorded in 2023 Orthopedic notes.",
        action: 'Examine Correlation',
      },
    ],
    footnote: 'Selecting an action opens clinical record for confirmation. Zero autonomous charting.',
    engine: 'Kratu Clinical Engine v4.2',
  },
  // The frame's forced line breaks inside two of these texts are dropped.
  capabilities: [
    {
      icon: { src: insightLabsIcon, size: [18, 19], tone: 'lime' },
      title: 'Laboratory Analytics',
      text: 'Instant chronologic view of past labs without digging through external PDF attachments.',
    },
    {
      icon: { src: insightGapsIcon, size: [18, 21], tone: 'purple' },
      title: 'Preventive Gap Flagging',
      text: 'Automatic tracking of overdue screenings, mammograms, colonoscopies, and A1c cycles.',
    },
    {
      icon: { src: insightReconcileIcon, size: [20, 17], tone: 'lime' },
      title: 'Problem Reconcile',
      text: 'Cross-references spoken encounter details against inactive or missing ICD-10 diagnostic codes.',
    },
    {
      icon: { src: insightCoordinationIcon, size: [20, 19], tone: 'purple' },
      title: 'Care Coordination',
      text: 'Pre-drafts specialist referrals with clear clinical rationale drawn directly from visit dialogue.',
    },
  ],
};

// The dictation mock-up is an illustration of the frame's example data; its "Commit" button is not
// a control.
export const coPilotDictation = {
  id: 'template-dictation',
  eyebrow: 'Feature 03 · Fast Documentation',
  title: 'Scribe for template forms: fill a clinical form by dictation',
  description:
    "Clinicians don't speak in form fields. Dictate naturally in a continuous train of thought; Kratu Co-Pilot parses clinical entities and slots them into Chief Complaint, Vitals, Assessment, Medication, and Follow-Up simultaneously.",
  mock: {
    label: 'Example dictation parsed into a clinical template',
    stream: {
      icon: { src: dictationMicIcon, size: [14, 20] },
      title: 'Continuous Voice Stream Recorded',
      meta: 'Length: 00:24 · Single continuous sentence flow',
      badge: '100% Parsed',
      quote:
        '“Patient presents with lingering productive cough for 4 days, low-grade fever, fatigue. Clear lung sounds bilaterally. Start 5-day course of Amoxicillin 500mg TID, follow up in 7 days if unresolved.”',
    },
    checkIcon: { src: dictationCheckIcon, size: [14, 13] },
    fields: [
      { label: 'Chief Complaint', value: 'Productive cough × 4 days' },
      { label: 'Associated Symptoms', value: 'Low-grade fever, fatigue, sputum production' },
      { label: 'Physical Examination', value: 'Lungs clear to auscultation bilaterally; no wheezing' },
      { label: 'Assessment & Impression', value: 'Acute Bronchitis (J20.9) · suspected bacterial onset' },
      { label: 'Medication Order (Staged)', value: 'Amoxicillin 500mg PO TID × 5 days (Draft)' },
      { label: 'Follow-Up Instructions', value: 'Re-evaluate in 7 days if symptoms fail to resolve' },
    ],
    note: {
      icon: { src: dictationEditIcon, size: [14, 14] },
      text: 'Fields are fully editable by hand or quick voice correction before submitting.',
    },
    action: 'Commit Template to Encounter Note',
  },
};

// The frame's forced line breaks inside two of the card texts are dropped.
export const coPilotSafety = {
  eyebrow: 'Clinical Safety Boundary',
  title: 'AI clinical notes on your own templates, not just SOAP notes',
  description:
    'Kratu strictly decouples documentation generation from clinical orders. The physician remains the absolute, legal barrier between recommendation and execution.',
  checkIcon: { src: safetyCheckIcon, size: [15, 15] },
  items: [
    {
      icon: { src: safetyLabIcon, size: [14, 20], tone: 'purple' },
      title: 'Lab & Diagnostic Orders',
      text: [
        'Saved strictly in ',
        { text: '"Draft / Entered"', emphasis: true },
        ' state. Requires clinician review, ICD-10 justification verification, and authorization.',
      ],
      guarantee: 'Never sent to lab automatically',
    },
    {
      icon: { src: safetyRxIcon, size: [14, 19], tone: 'lime' },
      title: 'Prescriptions (Rx)',
      text: 'Staged in the standard e-prescribing queue. Requires explicit clinician PIN entry and DEA verification for controlled substances.',
      guarantee: 'Zero auto-routing to pharmacy',
    },
    {
      icon: { src: safetyProblemIcon, size: [20, 19], tone: 'purple' },
      title: 'Problem List Diagnoses',
      text: "Presented as clinical suggestions. Added to the patient's legal active problem list only after explicit provider acceptance.",
      guarantee: 'Zero unconfirmed coding additions',
    },
    {
      icon: { src: safetyReferralIcon, size: [20, 21], tone: 'lime' },
      title: 'Specialist Referrals',
      text: 'Drafted with supporting chart history. Dispatching method, insurance prior auth, and network routing are provider-selected.',
      guarantee: 'Provider specifies routing target',
    },
  ],
};

// The Mental Status Exam template is an illustration of the frame's example data. The frame's forced
// line break inside the first block is dropped.
export const coPilotControl = {
  eyebrow: 'Clinical Control',
  title: 'Approving a note does not send orders or prescriptions',
  description:
    'Rigid general-practice SOAP formats fail in psychiatric intakes, addiction therapy, and multi-disciplinary specialties. Kratu Co-Pilot adapts natively to your exact clinical taxonomy.',
  items: [
    {
      icon: { src: controlPauseIcon, size: [20, 21] },
      title: 'One-Touch Privacy Pause',
      text: 'Behavioral health sessions frequently touch on trauma, legal proceedings, or sensitive family dynamics that do not belong in legal medical notes. Pause the stream instantly with zero audio buffering.',
    },
    {
      icon: { src: controlMseIcon, size: [19, 21] },
      title: 'Mental Status Exam (MSE) Mapping',
      text: 'Specialized behavioral templates map continuous clinical observations into Mood, Affect, Thought Process, Cognition, and Risk Assessments directly.',
    },
    {
      icon: { src: controlTemplatesIcon, size: [18, 15] },
      title: 'Unlimited Organizational Templates',
      text: 'Whether your clinic utilizes BIRP, DAP, custom intake questionnaires, or multi-page state compliance forms, Kratu populates them cleanly.',
    },
  ],
  template: {
    label: 'Example Mental Status Exam intake template',
    title: 'Mental Status Exam · Intake Template',
    badge: 'Specialty Mode',
    blocks: [
      {
        title: 'Appearance & Behavior',
        text: 'Casual, well-groomed. Eye contact sustained throughout interview. Motor activity calm with no psychomotor agitation.',
      },
      {
        title: 'Mood & Affect',
        text: 'Reported mood: “exhausted but trying.” Affect congruent, mildly constricted during trauma disclosure; reactive to neutral prompts.',
      },
      {
        title: 'Thought Process & Content',
        text: 'Goal-directed, linear. No evidence of loose associations or flight of ideas. Denies hallucinations. Zero suicidal/homicidal ideation.',
      },
      {
        title: 'Risk & Safety Plan',
        text: 'Low acute risk. Established coping mechanisms and crisis line contact confirmed on file.',
      },
    ],
    source: 'Template: State BH Form v3.4',
    status: 'Clinician Approved',
  },
};

export const coPilotBehavioral = {
  eyebrow: 'Behavioral Health',
  title: 'Kratu Co-Pilot for behavioral health documentation',
  paragraphs: [
    'Behavioral health and addiction treatment documentation is not a primary care note with different words in it. The templates differ, the sensitivity differs, and the consequences of an auto-sent prescription differ.',
    'During a follow-up encounter, Kratu Co-Pilot prepares draft documentation using the Behavioral Health template configured for your organization during implementation. The clinician reviews and edits the note, approves it, and selects any applicable follow-up items. Selected prescriptions and referrals remain unsent until the separate sending step.',
    'The pause control matters here more than anywhere. A patient can ask the clinician to stop capturing at any point, and the clinician can do so without leaving the encounter.',
  ],
  note: 'This example illustrates use with the templates and workflows configured for each organization.',
};

// Rendered with the site's shared FAQ accordion. Ordered so the shared two-column split (first half
// left) matches the frame's columns; the frame's forced line breaks inside the answers are dropped.
export const coPilotFaq = {
  title: 'Frequently Asked Questions',
  description:
    "Clear, straightforward answers about Kratu Co-Pilot's integration, security safeguards, and clinical capabilities.",
  items: [
    {
      question: 'Does Kratu only support SOAP note formats?',
      answer:
        'No. While SOAP is fully supported, Kratu Co-Pilot was engineered specifically for organizational flexibility. You can configure custom specialty templates, behavioral health formats (like BIRP or DAP), multi-discipline intake forms, or your existing EHR layouts.',
    },
    {
      question: 'Does approving a note automatically send prescriptions?',
      answer:
        'Never. Approving documentation simply saves the clinical text to the encounter. All lab orders, imaging requests, and prescriptions remain in draft/entered state and must be independently authorized through your standard provider sign-off workflow.',
    },
    {
      question: 'How does the ambient scribe handle background noise?',
      answer:
        'Kratu utilizes advanced acoustic noise cancellation and speaker diarization. It isolates the clinician and patient voices while filtering out ambient hall noise, typing, HVAC hum, and irrelevant casual family chatter in the room.',
    },
    {
      question: 'Can clinicians edit the AI-generated note?',
      answer:
        'Absolutely. Every single word and field can be refined via keyboard or quick voice corrections prior to saving. Kratu Co-Pilot serves as an intelligent staging assistant; the clinician maintains absolute editorial and legal authority over the final medical record.',
    },
    {
      question: 'Is patient data used to train AI models?',
      answer:
        'No. We maintain strict enterprise Business Associate Agreements (BAAs). Patient health information (PHI) is processed in isolated, HIPAA-compliant environments and is strictly prohibited from being used to train or fine-tune foundational public models.',
    },
    {
      question: 'Does Kratu work for telehealth visits?',
      answer:
        'Yes. Kratu Co-Pilot captures audio directly from browser audio or integrated Elixir telehealth sessions without requiring clinicians to place physical recording hardware next to computer speakers.',
    },
  ],
};

// The walkthrough goes to Contact Us (its form takes demo and consultation requests); the site has
// no separate scheduling page.
export const coPilotCtaBand = {
  eyebrow: 'Experience Kratu AI in Action',
  title: ['Experience Kratu Co-Pilot in Your', 'Clinical Workflow'],
  description:
    'See how seamless ambient scribe capture, 4-tab clinical insights, and instant template dictation return hours back to your clinicians every day.',
  cta: { label: 'Request a Kratu Co-Pilot Demo', to: '/request-demo' },
  secondaryCta: { label: 'Schedule a 15-Minute Workflow Walkthrough', to: '/contact-us' },
  footnote: 'No credit card required · HIPAA BAA signed on day one · Built natively inside Elixir EHR',
};
