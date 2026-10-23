// Visit Prep page (Figma "Visit Prep", 1280 frame), a child page of KratuAI (/kratu-ai/visit-prep).
// Copy is reproduced verbatim from the frame. The hero image is the frame's grey placeholder (the
// same export as the Contact Center and KratuAI heroes).
import heroPlaceholder from '../assets/contact-center/hero-placeholder.png';
import shieldIcon from '../assets/kratu-ai/visit-shield.png';
import globeIcon from '../assets/kratu-ai/visit-globe.png';
import doesIcon from '../assets/kratu-ai/visit-does.png';
import neverIcon from '../assets/kratu-ai/visit-never.png';
import starIcon from '../assets/kratu-ai/visit-star.png';
import checkLimeIcon from '../assets/kratu-ai/visit-check-lime.png';

export const visitPrepHero = {
  currentPage: 'Visit Prep',
  titleLines: ['AI Pre-Visit', 'Questionnaire', 'With Zero Portal', 'Login'],
  titleAccent: ['Zero Portal', 'Login'],
  description:
    'Patients receive a secure, frictionless text message before their appointment to co-create their visit agenda. No passwords, no app downloads, and no barriers. Clinicians open their chart to find clinical priorities already mapped.',
  primaryCta: { label: 'Request a Visit Prep Demo', to: '/request-demo', arrow: false },
  // Scrolls to "How the Pre-Visit Questionnaire Works".
  secondaryCta: { label: 'Explore Clinical Flow', href: '#clinical-flow' },
  media: { src: heroPlaceholder, alt: '' },
};

// tone: the item's left edge colour.
export const visitPrepStrip = [
  { title: 'Zero Portal Sign-In', text: 'Single SMS tap eliminates forgotten passwords and app drop-off.', tone: 'purple' },
  { title: 'Two-Factor Passcode', text: 'DOB match and OTP authentication prior to exposing PHI.', tone: 'lime' },
  { title: 'Full Bilingual AI', text: 'Native English and Spanish support across UI, prompts, and agenda generation.', tone: 'lime' },
  { title: 'Adaptive Workflows', text: 'Differentiated intake paths for first-time vs returning patient encounters.', tone: 'lime' },
];

// tone: the card's edge and tag colour (purple: automated by Elixir; lime: patient action).
export const visitPrepFlow = {
  eyebrow: 'Step-by-Step Architecture',
  title: 'How the Pre-Visit Questionnaire Works',
  description:
    'From automated delivery to provider agenda injection, the patient completes the whole experience on their mobile phone in under 3 minutes.',
  steps: [
    {
      tag: 'Handled by Elixir',
      tone: 'purple',
      title: 'Configurable Prep SMS',
      text: 'A clinic-branded text message reaches the patient ahead of their visit (e.g. 48 hours prior) with an encrypted, unique preparation link.',
    },
    {
      tag: 'Patient Verified',
      tone: 'lime',
      title: 'Secure Identity Verification',
      text: 'The patient inputs First Name, Last Name, and Date of Birth. Upon verification, an instant one-time security passcode is sent to their verified phone number.',
    },
    {
      tag: 'Language Choice',
      tone: 'lime',
      title: 'Confirm Details & Language',
      text: 'Appointment date, provider name, and location are confirmed. Patients seamlessly select between English and Spanish for their full interaction.',
    },
    {
      tag: 'Automated Triage',
      tone: 'purple',
      title: 'Dynamic Flow Routing',
      text: 'Elixir checks EHR records in real-time to determine if prior clinical encounters exist, routing into the New Patient or Returning Patient pathway.',
    },
    {
      tag: 'Patient Guided',
      tone: 'lime',
      title: 'AI Agenda Synthesis',
      text: 'The patient shares concerns in natural conversational language. Kratu AI synthesizes their input into concise, clinical agenda bullet items.',
    },
    {
      tag: 'Chart Sync',
      tone: 'lime',
      title: 'Review & Provider Handoff',
      text: "The patient reviews, refines, and signs off on the agenda. It is immediately delivered into the provider's EHR chart. Patients receive a copy day-of via SMS.",
    },
  ],
  legend: [
    { label: 'Automated Elixir Process', tone: 'purple' },
    { label: 'Patient In-Control Action', tone: 'lime' },
  ],
};

// pill tone: 'bypassed' (red) | 'active' (lime).
export const visitPrepPathways = {
  eyebrow: 'Context-Aware Clinical Pathways',
  title: 'New Patient vs. Returning Patient Flows',
  description:
    "A first visit and a routine check-up require fundamentally different clinical context. Visit Prep dynamically adapts questions so patients are never asked about histories that don't exist.",
  flows: [
    {
      tone: 'new',
      title: 'New Patient Intake',
      subtitle: 'No previous encounter on record in EHR',
      steps: [
        { label: 'No AI recap generated.', text: 'With no previous clinical record, retrospective summaries are bypassed.', pill: { label: 'Step Bypassed', tone: 'bypassed' } },
        { label: 'No medication adherence review.', text: 'Historical medication checks are suppressed to avoid confusion.', pill: { label: 'Step Bypassed', tone: 'bypassed' } },
        { label: 'Primary visit reason capture:', text: 'The session focuses on primary chief complaints and reasons for choosing this practice.' },
        { label: 'Patient input in their own words:', text: 'Guided prompts help articulate symptoms and expectations clearly.' },
        { label: 'AI formats the clinical agenda:', text: 'Translates patient descriptions into provider-friendly clinical groupings.' },
        { label: 'Patient edits & confirms:', text: 'Patient validates every item before submission.' },
        { label: 'Confirmation & SMS reminder:', text: 'Receives confirmation and appointment itinerary.' },
      ],
    },
    {
      tone: 'returning',
      title: 'Returning Patient Prep',
      subtitle: 'Prior encounters and historical record available',
      badge: 'AI Enhanced',
      steps: [
        { label: 'AI visit recap generated:', text: 'Kratu AI extracts key vitals, recent lab results, and medication changes since last visit.', pill: { label: 'AI Active', tone: 'active' } },
        { label: 'Patient confirms previous updates:', text: 'The patient reviews previous items and flags what needs re-discussion.' },
        { label: 'Medication adherence check:', text: 'Structured questions regarding prescription compliance, side effects, or renewal needs.' },
        { label: 'Additional concerns logged:', text: 'Space to enter any new symptoms or questions since last seeing the clinician.' },
        { label: 'AI organizes structured agenda:', text: 'Prioritizes historical follow-ups and new concerns into the physician view.' },
        { label: 'Final patient signoff:', text: 'Seamless review and submission with one tap.' },
        { label: 'Morning-of SMS dispatch:', text: "Agenda dispatched to the patient's phone the day of the visit." },
      ],
    },
  ],
};

export const visitPrepSafeguards = {
  identity: {
    icon: { src: shieldIcon, size: [22, 27], tone: 'purple' },
    title: 'Bulletproof Patient Identity Verification',
    text: 'Frictionless SMS links maximize patient participation, but never at the expense of HIPAA compliance. Patient identification is authenticated rigorously before any health data is surfaced.',
    checklistTitle: 'Before passcode is verified:',
    checklist: [
      'Zero Protected Health Information (PHI) displayed',
      'No provider, practice, or appointment time revealed',
      'Failed verification discloses zero patient existence confirmation',
    ],
  },
  language: {
    icon: { src: globeIcon, size: [26, 27], tone: 'lime' },
    title: 'Native Bilingual Capability in English & Spanish',
    text: 'Language should never be a barrier to clinical clarity. The initial questionnaire defaults to the preferred language stored in the EHR, with an immediate, prominent toggle for patient selection.',
    emphasis:
      'The chosen language controls everything: AI question comprehension, conversational responses, SMS notifications, and confirmation copy.',
    // The toggle drawn in the frame: an illustration of the patient-facing control, not interactive here.
    toggle: { label: 'Language Toggle:', options: ['English (US)', 'Español (América Latina)'] },
  },
};

export const visitPrepBoundary = {
  eyebrow: 'Trust & Clinical Safety',
  title: 'Strict AI Governance Boundary',
  description:
    'Visit Prep leverages AI to capture, structure, and format patient intent. It never practices medicine, never suggests treatments, and maintains strict ethical guardrails.',
  columns: [
    {
      tone: 'does',
      icon: { src: doesIcon, size: [18, 14] },
      title: 'What the AI Does',
      items: [
        { text: 'Organizes unstructured patient words into concise, clinician-ready agenda items.' },
        { text: 'Summarizes structured EHR data already logged in previous encounters.' },
        { text: 'Adapts tone and prompts to the exact language the patient selected.' },
        { text: 'Captures verbatim adherence notes on medication schedules.' },
      ],
    },
    {
      tone: 'never',
      icon: { src: neverIcon, size: [14, 14] },
      title: 'What the AI Never Does',
      items: [
        { label: 'Does NOT diagnose:', text: 'Never infers illness or suggests differential conditions.' },
        { label: 'Does NOT clinically triage:', text: 'Prioritization remains 100% with the licensed clinician.' },
        { label: 'Does NOT recommend therapies:', text: 'Medication adjustments are never advised.' },
        { label: 'Zero model training on patient data:', text: 'Protected health information is never used to train public LLMs.' },
      ],
    },
  ],
};

export const visitPrepClinician = {
  eyebrow: 'Clinician Experience',
  title: 'What the Provider Sees Before the Exam Begins',
  description:
    'The confirmed agenda is injected right into the encounter chart. Instead of wasting the first seven minutes uncovering why the patient is there, the doctor enters the room aligned on priorities.',
  checkIcon: { src: checkLimeIcon, size: [14, 11] },
  points: [
    {
      title: 'Preparation, Not Final Documentation',
      text: 'Patient answers do not auto-populate clinical diagnostic codes, preserving physician oversight.',
    },
    {
      title: 'No More "By The Way, Doctor..."',
      text: 'Surfacing secondary concerns up front reduces appointment overrun and patient anxiety.',
    },
  ],
  // The encounter chart drawn in the frame: an illustration with example data, not live data.
  mock: {
    location: 'Elixir Clinical EHR • Encounter Room 3',
    action: { label: 'Kratu Pre-Visit Brief', icon: { src: starIcon, size: [11, 11] } },
    patient: 'Maria Gonzalez • 48 yo Female',
    meta: 'MRN #891240 • Appt: Today 10:30 AM • Dr. Chen',
    status: 'Agenda Confirmed • Verified via OTP',
    prioritiesTitle: 'Patient-Agreed Visit Priorities',
    priorities: [
      {
        title: '1. Medication Adherence & Side Effects',
        status: 'Confirmed',
        tone: 'confirmed',
        text: 'Taking Lisinopril 20mg daily. Mentions persistent dry cough and mild morning lightheadedness after dose increase last month.',
      },
      {
        title: '2. Follow-Up: Recent Lipid Panel',
        status: 'Confirmed',
        tone: 'confirmed',
        text: 'Wants explanation of LDL results completed on Oct 12th; requested dietary recommendations before statin initiation.',
      },
      {
        title: '3. New Concern: Right Knee Stiffness',
        status: 'Patient Added',
        tone: 'added',
        text: 'Mild swelling after routine walking over the past 2 weeks. Has not taken OTC anti-inflammatories.',
      },
    ],
  },
};

// Rendered with the site's shared FAQ section (standing rule). The frame lays the questions out in
// two columns, read across; they are ordered here so each stays in its frame column.
export const visitPrepFaq = {
  title: 'Common Provider & Clinical Questions',
  description: 'Everything you need to know about implementing Elixir Visit Prep across clinic networks.',
  items: [
    {
      question: 'Do patients need a portal account or app download?',
      answer: 'No. Patients access their questionnaire via a secure SMS web link. Zero portal credentials, zero downloads, and zero forgotten passwords.',
    },
    {
      question: 'Does Visit Prep work for first-time patients?',
      answer:
        'Yes. First-time patients are automatically routed through our New Patient Intake flow, which bypasses medication adherence and prior visit recaps to focus directly on reasons for visit.',
    },
    {
      question: 'Does the AI diagnose or prioritize conditions?',
      answer:
        "No. The AI solely formats the patient's natural language input into readable clinical agenda items. All clinical prioritization, evaluation, and diagnosis remain with the care team.",
    },
    {
      question: 'When is the preparation SMS message dispatched?',
      answer:
        'Dispatches are fully configurable per clinic specialty (e.g., 48 hours in advance). In addition, patients receive an automated morning-of summary on appointment day.',
    },
    {
      question: 'How is patient identity verified securely?',
      answer:
        'Patients verify their First Name, Last Name, and Date of Birth. Elixir cross-checks this against the appointment chart and issues a one-time passcode to the verified mobile number before exposing any information.',
    },
    {
      question: 'What languages are supported?',
      answer:
        "Visit Prep provides native bilingual support in English and Spanish. Both the user interface and AI natural language processing respond in the patient's language of choice.",
    },
    {
      question: 'Can patients review and edit the agenda?',
      answer:
        'Yes. Patients have full control to edit items, add specifics, or remove topics before finalizing the agenda for their provider.',
    },
    {
      question: 'Is patient health information used to train AI models?',
      answer:
        'Never. Patient data is encrypted in transit and at rest and is never retained to train public or foundational AI models.',
    },
  ],
};

// "Kratu Co-Pilot" and "Payor Policy Intelligence" have no pages yet: they render as drawn.
export const visitPrepCtaBand = {
  eyebrow: 'Experience Kratu AI in Action',
  title: ['Turn Every Appointment Reminder', 'Into Clinical Preparation'],
  description:
    "Test-drive the new and returning patient workflows customized with your clinic's appointment types and languages.",
  cta: { label: 'Schedule a Clinical Demo', to: '/request-demo' },
  secondaryCta: { label: 'Contact Solutions Team', to: '/contact-us' },
  related: {
    label: 'Explore additional AI capabilities:',
    links: [{ label: 'Kratu Co-Pilot (Clinical Scribe)' }, { label: 'Payor Policy Intelligence' }],
  },
};
