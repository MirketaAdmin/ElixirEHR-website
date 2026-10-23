// KratuAI page (Figma "KratuAI", 1280 frame). Copy is reproduced verbatim from the frame.
// The hero image is the frame's grey placeholder, the same export as the Contact Center hero.
import heroPlaceholder from '../assets/contact-center/hero-placeholder.png';
import cohesionRecordIcon from '../assets/kratu-ai/cohesion-record.png';
import cohesionContextIcon from '../assets/kratu-ai/cohesion-context.png';
import cohesionLearningIcon from '../assets/kratu-ai/cohesion-learning.png';
import cohesionAccountabilityIcon from '../assets/kratu-ai/cohesion-accountability.png';

export const kratuHero = {
  // The frame's crumb reads "Contact Center" (copied from that frame); the page name is used here.
  currentPage: 'KratuAI',
  titleLines: ['KratuAI: Intelligent', 'Agents Across the', 'Visit and Revenue', 'Cycle'],
  titleAccent: ['Revenue', 'Cycle'],
  description:
    'Four specialized agents, one unified engine inside the chart and the claims table your team already works in. KratuAI prepares the patient before the visit, documents the encounter, verifies payer rules, and resolves accounts receivable.',
  primaryCta: { label: 'Request a KratuAI Demo', to: '/request-demo', arrow: false },
  // Scrolls to "One AI Engine, Four Agents, One Patient Journey".
  secondaryCta: { label: 'Explore the 4 Agents', href: '#four-agents', icon: 'arrowDown', iconAfter: true },
  media: { src: heroPlaceholder, alt: '' },
};

// The four agents' section ids (the stage cards' "View Agent" links scroll to them).
export const agentIds = ['visit-prep', 'kratu-co-pilot', 'payor-policy-intelligence', 'ar-agent'];

export const kratuStages = {
  eyebrow: 'Unified Architecture',
  title: 'One AI Engine, Four Agents, One Patient Journey',
  description:
    'Most healthcare AI arrives as disconnected point tools — a scribe here, a claim scrubber there, each with its own login and isolated data silo. KratuAI operates as one continuous engine across four vital milestones in the exact same record.',
  // tone: the card's top bar colour. The first card is highlighted (lime border) in the frame.
  stages: [
    {
      stage: 'Stage 01 • Before Visit',
      title: 'Visit Prep',
      text: "Patients share their goals via secure SMS links with zero portal logins. Agendas land structured in the clinician's chart.",
      link: 'View Agent 01',
      tone: 'lime',
      highlighted: true,
    },
    {
      stage: 'Stage 02 • During & Post Visit',
      title: 'Kratu Co-Pilot',
      text: "Ambient clinical documentation drafts directly on your organization's custom templates with deep EHR care insights.",
      link: 'View Agent 02',
      tone: 'purple',
    },
    {
      stage: 'Stage 03 • Before Claim Filing',
      title: 'Payor Policy Intelligence',
      text: 'Complex payer manuals and billing grids are converted into live pre-submission claim validation rules with reason codes.',
      link: 'View Agent 03',
      tone: 'teal',
    },
    {
      stage: 'Stage 04 • Post-Submission',
      title: 'A/R Agent',
      text: 'Continuous revenue exposure scoring, root-cause denial intelligence, and fully drafted, evidentiary appeal packets.',
      link: 'View Agent 04',
      tone: 'yellow',
    },
  ],
  handoff:
    'The handoffs are the point: what the patient said before the visit informs the documentation, which informs the billing rules, which shields the claim from denials.',
};

/*
 * The four agent sections. Each "Explore …" button links to the agent's page (the frame's labels
 * end in a missing-glyph box, left out here). The product mock-ups are illustrations with example
 * data, not live data.
 */
export const kratuVisitPrep = {
  id: 'visit-prep',
  chip: 'Agent 01 • Pre-Visit Access',
  title: 'Visit Prep: AI Pre-Visit Questionnaire with Zero Portal Friction',
  paragraphs: [
    'Patients arrive unprepared because preparing is inconvenient: forgotten passwords, complex portal apps, or rushed waiting room clipboard forms that clinicians skim seconds before entering.',
    'Visit Prep sends an encrypted, clinic-branded SMS link before the appointment. After rapid biometric or one-time passcode verification, patients articulate their chief complaints, questions, and medication changes in conversational English or Spanish.',
  ],
  quote: "The appointment opens on the patient's priorities instead of five minutes of awkward administrative catching up.",
  quoteTone: 'lime',
  features: [
    { title: 'No App or Portal', text: 'Frictionless 1-click web experience via encrypted SMS. Nothing to download.' },
    { title: 'Identity-Verified', text: 'Name, DOB, and secure OTP token verification required before any PHI access.' },
    { title: 'Bilingual Native', text: 'Automatic Spanish/English conversational language switching.' },
    { title: 'Chart Integration', text: 'Confirmed agenda items attach directly to the scheduled encounter in Elixir.' },
  ],
  cta: 'Explore Visit Prep Details',
  ctaTo: '/kratu-ai/visit-prep',
  mock: {
    title: 'Patient Mobile Check-in (SMS Secured)',
    badge: 'Verified (OTP)',
    messages: [
      { from: 'agent', text: 'Hello Elena. Welcome to West Valley Clinic. What is the main priority you would like to discuss with Dr. Alvarez tomorrow?' },
      { from: 'patient', text: 'My knee has been swelling again after physical therapy, and I need a refill for my blood pressure medication.' },
      { from: 'agent', text: 'Thank you. I have drafted an agenda with your knee pain and prescription review. Would you like to add anything else?' },
    ],
    agendaTitle: 'Agenda Transferred to Clinician EHR:',
    agenda: ['Chief Complaint: Right Knee Post-PT Swelling', 'Med Refill: Lisinopril 20mg', 'Language: English'],
  },
};

export const kratuCoPilot = {
  id: 'kratu-co-pilot',
  chip: 'Agent 02 • Clinical Encounter',
  title: "Kratu Co-Pilot: Ambient Documentation on Your Own Organization's Templates",
  paragraphs: [
    'Generic ambient scribes produce a rigid SOAP summary and stop. In specialized clinics — behavioral health intakes, addiction treatment plans, IOP reviews — clinicians end up spending their evenings retyping unstructured audio notes into mandatory forms.',
    'Kratu Co-Pilot listens ambiently and populates the exact EHR templates your organization designed during onboarding. Simultaneously, an intelligent Insights panel compares conversational facts against the longitudinal chart.',
  ],
  quote: 'Approving documentation brings orders and referrals forward for review — but nothing is transmitted without clinician sign-off.',
  quoteTone: 'purple',
  features: [
    { title: 'Custom Templates', text: 'Conforms to intake assessments, group therapies, and ASAM criteria.' },
    { title: 'Care Gap Radar', text: 'Surfaces missed screenings, HEDIS gaps, and undocumented comorbidities.' },
    { title: 'Form Dictation Scribe', text: 'Speak naturally once; AI routes details into separate specific fields.' },
    { title: 'Zero Order Auto-Send', text: 'Clinicians maintain 100% control over meds, referrals, and diagnoses.' },
  ],
  cta: 'Explore Kratu Co-Pilot',
  ctaTo: '/kratu-ai/elixir-co-pilot-clinical-assistant',
  mock: {
    title: 'Kratu Co-Pilot Clinical Workspace',
    badge: 'Template Matched',
    tabs: ['SOAP Note Draft', 'Patient Insights (4)', 'Care Plan', 'Form Scribe'],
    note: [
      {
        heading: 'Subjective',
        lines: ['Patient reports bilateral knee tenderness following moderate exertion. Denies acute trauma. Adherent with home stretching regimen.'],
      },
      {
        heading: 'Objective',
        lines: ['Active ROM limited to 110 degrees on right flexion. No erythema or effusion observed upon manual palpation.'],
      },
      {
        heading: 'Assessment & Plan',
        lines: ['1. Right knee osteoarthritic flare. Prescribe NSAID regimen.', '2. Referral to physical medicine evaluation.'],
      },
    ],
    insight: {
      label: 'EHR Insight:',
      text: 'Patient due for annual diabetic foot screening (Quality Measure CMS122).',
      action: 'Add to Orders',
    },
  },
};

export const kratuPayorPolicy = {
  id: 'payor-policy-intelligence',
  chip: 'Agent 03 • Pre-Claim Intelligence',
  title: 'Payor Policy Intelligence: Transforming 200-Page PDFs into Active Billing Rules',
  paragraphs: [
    'The rules governing claim adjudication already exist — buried inside 200-page policy PDFs, Excel reimbursement grids, and clinical coverage bulletins that no human coder has time to read on every claim.',
    'Payor Policy Intelligence reads and indexes payer documentation into live deterministic validation rules. It recommends compliant CPT/HCPCS codes with citation links, scoring each draft claim prior to 837 transmission.',
  ],
  quote: 'Billing errors are not a diligence failure — they are a document format failure solved by AI.',
  quoteTone: 'teal',
  features: [
    { title: 'Multi-Format Parser', text: 'Ingests PDF guidelines, Excel fee schedules, and Word policy updates.' },
    { title: 'Evidence Backlinks', text: 'Every recommended code displays the specific clause, page, and policy year.' },
    { title: 'Pre-Submission Scoring', text: 'Distinguishes deterministic structural edits from probabilistic risk signals.' },
    { title: 'Explicit Action Fixes', text: 'Provides exact corrective field entries before clearinghouse submission.' },
  ],
  cta: 'Explore Policy Intelligence',
  ctaTo: '/kratu-ai/payor-policy-intelligence',
  mock: {
    title: 'Pre-Claim Scoring • BCBS Commercial Episode',
    badge: '94 / 100 Clean Pass',
    score: { value: '94', label: 'Score' },
    summaryTitle: 'CMS-1500 Ready for 837P Transmission',
    summaryText: 'Evaluated against BCBS Provider Manual v2026.3, Section 14.8',
    checks: [
      { status: 'pass', text: 'CPT 90834 requires Modifier 95 for Telehealth encounter — Verified on Line 24d.' },
      { status: 'pass', text: 'Primary Diagnosis F33.1 supports Medical Necessity threshold under policy §4.2.' },
      { status: 'warn', text: 'Frequency Limit: Prior service on 10/12 exceeds 1 visit/7 days without prior authorization note.' },
    ],
    resolution: {
      label: 'Recommended Resolution:',
      text: 'Attach Auth #77291B from EHR encounter tab before transmitting to clearinghouse.',
    },
  },
};

export const kratuArAgent = {
  id: 'ar-agent',
  chip: 'Agent 04 • Post-Claim Recovery',
  title: 'A/R Agent: Scoring Accounts and Claims by Real Financial Exposure',
  paragraphs: [
    'Traditional billing teams prioritize aging claims by day count alone (30, 60, 90+ days), because older reports are the only thing legacy EHRs can sort by. As a result, a $5,000 recoverable balance and a $20 balance get identical priority.',
    'The A/R Agent scores every account at creation using historical payment propensity and contract analytics. When denials occur, root causes, payer overturn odds, and ready-to-mail appeal letters arrive bundled together.',
  ],
  quote: 'Your billing staff spends their day recovering money that is genuinely collectable instead of drowning in spreadsheets.',
  quoteTone: 'yellow',
  features: [
    { title: 'Account Risk Score', text: 'Predicts patient and payer collection propensity 0–100 before claims open.' },
    { title: 'Root Cause Clarity', text: 'Translates obscure ANSI/CARC/RARC denial codes into plain remediation actions.' },
    { title: 'Drafted Appeals', text: 'Assembles clinical excerpts and policy citations into complete appeal packets.' },
    { title: 'Forecasted Pay Window', text: 'Provides statistically backed expected payment days for CFO cash forecasting.' },
  ],
  cta: 'Explore the A/R Agent',
  ctaTo: '/kratu-ai/ar-agent',
  mock: {
    title: 'A/R Worklist Intelligence • High Exposure Queue',
    badge: 'Scored by Risk',
    columns: ['Claim ID', 'Payer', 'Balance', 'Risk Score', 'Status'],
    rows: [
      { id: '#CLM-8831', payer: 'Aetna Choice', balance: '$4,850.00', risk: '89 / High', tone: 'high', status: 'CO-197 Denied' },
      { id: '#CLM-8849', payer: 'UnitedHealth', balance: '$1,220.00', risk: '45 / Med', tone: 'med', status: 'Pended 18 Days' },
      { id: '#CLM-8890', payer: 'Medicare Part B', balance: '$3,140.00', risk: '82 / High', tone: 'high', status: 'CO-16 Info Req' },
    ],
    appeal: {
      title: 'AI-Generated Appeal Packet Available',
      text: 'Re: Denial CO-197 (Pre-certification missing). Root cause identified: Hospital transfer auth was granted under parent NPI. Formal reconsideration letter with admission timestamps generated and ready for billing approval.',
    },
  },
};

export const kratuCohesion = {
  eyebrow: 'Platform Cohesion',
  title: 'Why One AI Engine Beats Four Disconnected Point Tools',
  description:
    'Buying four point solutions means four separate vendor contracts, four software logins, four complex API syncs, and four systems that each see only an incomplete fragment of the patient record.',
  cards: [
    {
      icon: { src: cohesionRecordIcon, size: [20, 23] },
      title: 'One Single Record, Never Reconciled',
      text: 'Every agent reads and writes directly to the primary Elixir patient chart and claims ledger. Zero night batch syncs, zero discrepancies between third-party databases.',
    },
    {
      icon: { src: cohesionContextIcon, size: [24, 23] },
      title: 'Context Connects Across Handoffs',
      text: "What the patient shared in pre-visit check-in flows seamlessly into the clinician's draft. The clinical notes directly validate the billing rules scored prior to submission.",
    },
    {
      icon: { src: cohesionLearningIcon, size: [22, 21] },
      title: 'Zero Friction Learning Curve',
      text: 'KratuAI surfaces directly within the native EHR chart, care episode, and claims grid your staff already uses everyday. No new tabs, no extra logins, no workflow disruptions.',
    },
    {
      icon: { src: cohesionAccountabilityIcon, size: [18, 23] },
      title: 'Single Accountability Partner',
      text: 'One trusted healthcare technology vendor responsible for both the clinical documentation and the revenue cycle outcomes — eliminating cross-vendor blame.',
    },
  ],
};

export const kratuGovernance = {
  eyebrow: 'Responsible Governance',
  title: 'How KratuAI Keeps Clinicians and Billers in Total Control',
  description:
    'Every agent prepares work and hands the final decision to an authorized person. That is not a temporary limitation — it is our foundational system architecture that guarantees complete auditability when payers or regulators inspect a decision.',
  columns: ['Agent', 'What AI Prepares', 'Where the Human Decides'],
  rows: [
    {
      agent: 'Visit Prep',
      prepares: 'Synthesizes open-ended patient remarks into structured, clinical agenda items prior to check-in.',
      decides: 'Never diagnoses or prioritizes triage severity. The patient confirms their agenda, and the provider reviews before opening the chart.',
    },
    {
      agent: 'Kratu Co-Pilot',
      prepares: 'Drafts documentation on configured organizational templates and highlights potential care gaps.',
      decides: 'The clinician must review, edit, and sign notes. Approval alone never triggers automated medication orders or specialty referrals.',
    },
    {
      agent: 'Payor Policy Intel',
      prepares: 'Extracts rules from payer policies, suggests code sets with confidence scores, and flags claim risk factors.',
      decides: 'Uncertain or low-confidence values are held for manual coding review. No code is committed and no claim filed without user confirmation.',
    },
    {
      agent: 'A/R Agent',
      prepares: 'Ranks accounts by risk, diagnoses denial root causes, and compiles evidentiary appeal packets.',
      decides: "Risk ranks the team's worklist but never executes automated adjustments or writes off balances without billing manager sign-off.",
    },
  ],
  note: 'Protected Health Information (PHI) is never used to train public or cross-tenant foundational models.',
  // Reproduced from the frame; certification claims to be confirmed before launch.
  badge: 'HIPAA • SOC 2 Type II • HITRUST Certified',
};

// Rendered with the site's shared FAQ section (standing rule). The frame supplies an answer for the
// first question only; the others render as static rows until their answers are written.
export const kratuFaq = {
  title: 'Frequently Asked Questions About KratuAI',
  description:
    'What clinical leaders, revenue executives, and healthcare CIOs ask most often when evaluating KratuAI.',
  items: [
    {
      question: 'What is KratuAI?',
      answer:
        'KratuAI is the native AI engine embedded across Elixir EHR and RCM. It operates as four specialized agents: Visit Prep before the visit, Kratu Co-Pilot during and after documentation, Payor Policy Intelligence before filing claims, and the A/R Agent for post-submission denial resolution.',
    },
    { question: 'Is KratuAI a separate application with its own login?' },
    { question: 'Do we have to adopt all four agents simultaneously?' },
    { question: 'Does KratuAI take clinical or billing decisions autonomously?' },
    { question: 'Can AI recommendations be explained during external payer audits?' },
    { question: 'Is our patient data ever used to train external models?' },
  ],
};

export const kratuCtaBand = {
  eyebrow: 'Next-Generation Healthcare Intelligence',
  title: 'See All Four Agents Running on Your Own Workflows',
  description:
    "Walk through the visit, the clinical documentation, the claim scoring, and the denial follow-up using your organization's custom templates, payer mix, and appointment types.",
  cta: { label: 'Request a KratuAI Demo', to: '/request-demo' },
};
