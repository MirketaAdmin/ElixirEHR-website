// Payor Policy Intelligence page (Figma "Kratu Payor Policy Intelligence", 1280 frame), a child page
// of KratuAI (/kratu-ai/payor-policy-intelligence). Copy is reproduced verbatim from the frame;
// forced mid-sentence line breaks are dropped. The hero image is the frame's grey placeholder (the
// same export as the KratuAI hero).
import heroMedia from '../assets/kratu-ai/pp-hero-media.png';
import confidenceHighIcon from '../assets/kratu-ai/pp-confidence-high.png';
import confidenceMediumIcon from '../assets/kratu-ai/pp-confidence-medium.png';
import confidenceLowIcon from '../assets/kratu-ai/pp-confidence-low.png';
import auditSourceIcon from '../assets/kratu-ai/pp-audit-source.png';
import auditProvenanceIcon from '../assets/kratu-ai/pp-audit-provenance.png';
import auditPredictionsIcon from '../assets/kratu-ai/pp-audit-predictions.png';
import auditOutcomesIcon from '../assets/kratu-ai/pp-audit-outcomes.png';
import mockProcedureCodes from '../assets/kratu-ai/pp-mock-procedure-codes.png';
import mockClaimSummary from '../assets/kratu-ai/pp-mock-claim-summary.png';

export const ppHero = {
  currentPage: 'Kratu Payor Policy Intelligence',
  titleLines: ['Payor Policy', 'Intelligence:', 'Turn Payer Policy', 'Documents Into Live', 'Billing Rules'],
  // The whole title is white in this frame (no accent).
  titleAccent: [],
  description:
    'The rules that decide whether a claim gets paid already exist — in a 200-page PDF, a billing grid and a guideline document nobody has time to reread. Payor Policy Intelligence makes them machine-readable once, then puts the same rules to work recommending codes and scoring claims before you submit.',
  primaryCta: { label: 'Request a Demo', to: '/request-demo', arrow: false },
  // No destination in the frame; scrolls to "Why claims get denied…" (the three stages).
  secondaryCta: { label: 'See how it works', href: '#how-it-works' },
  media: {
    src: heroMedia,
    alt: 'Policy documents flowing through Elixir into structured billing rules and an approved check',
  },
};

// Each stage card's link scrolls to that stage's section on this page. tone: the card's edge colour.
export const ppProblem = {
  id: 'how-it-works',
  eyebrow: 'The Problem',
  title: 'Why claims get denied for rules that were written down all along',
  description:
    "Payer policies arrive as PDF manuals, Excel billing grids and Word guideline documents, revised several times a year and often without notice. Someone reads them line by line — daily unit limits, covered CPTs, modifier requirements, place-of-service restrictions — and retypes each rule by hand. Then the same gap reappears downstream: codes get picked without the payer's rules in view, and a denial comes back weeks later that traces to a limit buried on page 200. It is not a diligence problem. It is a format problem.",
  stages: [
    {
      label: 'Stage 01',
      tone: 'purple',
      title: 'Policies become structured rules',
      text: 'Every policy document is read into a structured, queryable form — organized by payer, addressable down to the section a rule came from.',
      link: { label: 'How ingestion works', href: '#stage-01' },
    },
    {
      label: 'Stage 02',
      tone: 'lime',
      title: 'Codes recommended against those rules',
      text: "When an appointment completes, CPT recommendations are produced with the payer's current billing rules in view, each with a confidence score and the rule it came from.",
      link: { label: 'How coding works', href: '#stage-02' },
    },
    {
      label: 'Stage 03',
      tone: 'magenta',
      title: 'Claims scored before submission',
      text: 'Every draft claim is checked against the same rules and scored for acceptance, with rejection reasons and specific fixes attached to the claim record.',
      link: { label: 'How scoring works', href: '#stage-03' },
    },
  ],
  quote: 'One set of rules, read once, working the whole revenue cycle.',
};

// `team` marks the step your team performs (lime card).
export const ppIngestion = {
  id: 'stage-01',
  eyebrow: 'Stage 01',
  title: 'How payer policy documents become machine-readable billing rules',
  description:
    "The documents are already arriving in your team's inbox. This is not a new data-collection project — it is reading what you already receive, once, into a form the rest of the revenue cycle can use.",
  steps: [
    {
      label: 'Ingest',
      title: 'Any document format',
      text: 'PDF policy manuals, Excel billing grids and Word guideline documents go through one pipeline, with optical character recognition for scanned policies.',
    },
    {
      label: 'Structure',
      title: 'Segmented, never mid-sentence',
      text: 'Content is segmented with its structure preserved, and passages containing codes, limits or rules are tagged so they surface first when the rule is needed.',
    },
    {
      label: 'Organize',
      title: 'Addressable by payer',
      text: 'Everything is organized by payer, document type and section, so any rule stays traceable back to the page it was read from.',
    },
    {
      label: 'Extract',
      title: 'Rules matched to your fields',
      text: "Your own payer policy configuration defines what to look for. Each value comes back with the payer's source text beside it and a confidence score.",
    },
    {
      label: 'Your team',
      title: 'Review what is uncertain',
      text: 'Values the model is unsure about are held for a person to check. Nothing uncertain is written into your configuration.',
      team: true,
    },
    {
      label: 'Apply',
      title: 'Live where billing happens',
      text: 'Approved values become live billing rules on the payer record, available to coding and claim checks without re-reading the document.',
    },
  ],
  legend: [
    { label: 'Payor Policy Intelligence', tone: 'purple' },
    { label: 'Your team decides', tone: 'lime' },
  ],
};

// tone: the band colour of each confidence card's header.
export const ppConfidence = {
  eyebrow: 'Confidence Routing',
  title: 'Where a person stays in the loop, decided by policy not by the model',
  description:
    'Extraction from a document is never uniformly reliable, and a system that pretends otherwise is the one that quietly corrupts your payer configuration. Every extracted value carries a confidence score, and what happens next is governed by thresholds your organization sets.',
  levels: [
    {
      tone: 'high',
      icon: { src: confidenceHighIcon, size: [12, 9] },
      label: 'High Confidence',
      title: 'Applied automatically',
      text: 'The value is written to the payer policy record, with the source text retained so it can be checked later.',
    },
    {
      tone: 'medium',
      icon: { src: confidenceMediumIcon, size: [14, 15] },
      label: 'Medium Confidence',
      title: 'Flagged for review',
      text: 'The suggested value is shown pending approval rather than committed. A reviewer confirms or corrects it before it is written.',
    },
    {
      tone: 'low',
      icon: { src: confidenceLowIcon, size: [14, 15] },
      label: 'Low Confidence',
      title: 'Held for a person',
      text: 'Nothing is written to the field. A task is created and routed to your review queue for manual entry.',
    },
  ],
  rules: {
    title: 'Two rules that do not bend',
    items: [
      'A field with no matching content in the policy is returned as unmapped. It is never guessed at.',
      'The thresholds are configuration, not model behaviour. Your compliance team sets where the lines fall.',
    ],
  },
};

// Stage 02 and Stage 03 rows. Each mock-up is the frame's illustrative interface exported at 1×
// with its shadow; `inset` is the shadow margin (top, right, bottom, left) so the frame itself lines
// up with the column. The caption under each one is the frame's own disclaimer.
export const ppStages = [
  {
    id: 'stage-02',
    eyebrow: 'Stage 02',
    title: "AI CPT code recommendation with the payer's rules in view",
    paragraphs: [
      'Manual coding is slow and inconsistent, and it fails in two directions: under-coding leaks revenue, over-coding creates audit exposure. Both happen because the person choosing the code cannot see the payer\'s rules while choosing it.',
      "When a care episode is open, a clinic user asks for recommendations. Visit type, duration and diagnosis flow in from the chart, the payer's current billing rules are retrieved, and each suggested code arrives with a confidence score and the reasoning behind it.",
      'Codes are added one at a time or in a batch, and every added code keeps its rationale, confidence and source — so a coding decision can be explained if it is ever audited.',
    ],
    quote: 'Recommend, explain, review, accept. No code reaches the episode without someone choosing it.',
    alignTop: true,
    media: {
      src: mockProcedureCodes,
      size: [592, 602],
      inset: [11, 24, 12, 24],
      alt: 'Example recommended procedure codes: 90837 with modifier GT at 0.96 confidence and 96127 at 0.88, each with its rationale and rule reference',
      caption: 'Illustrative interface. Shown to explain the recommendation workflow. Not a product screenshot; codes and values are examples.',
    },
  },
  {
    id: 'stage-03',
    eyebrow: 'Stage 03',
    title: 'Predict claim denials before submission, not weeks afterwards',
    paragraphs: [
      'The real cost of a denial is not the error. It is the delay. By the time the payer responds, the person who submitted the claim has moved on to dozens of other accounts, the documentation trail is cold, and fixing it means starting the cycle again.',
      'When a care episode closes, a draft claim is assembled and scored before it goes anywhere. The result lands on the claim record itself: an acceptance score, the reasons behind it, and a specific fix for each one — not a generic warning.',
    ],
    quote: 'Find the missing prior authorization now, not in six weeks.',
    mediaFirst: true,
    media: {
      src: mockClaimSummary,
      size: [591, 762],
      inset: [11, 23, 12, 24],
      alt: 'Example claim intelligence summary: 87% likely to be accepted, with two deterministic checks (one pass, one fail) and one risk signal',
      caption: 'Illustrative interface. Shown to explain pre-submission scoring. Not a product screenshot; values are examples.',
    },
  },
];

// tone: the card's edge and title colour (purple: deterministic; teal: probabilistic).
export const ppScoring = {
  eyebrow: 'How the score is built',
  title: 'Deterministic checks and probabilistic risk scoring, kept separate',
  description:
    'These are two different kinds of statement and it matters that a page, and a product, does not blur them. One is a rule that either passes or fails. The other is a likelihood. Mixing them is how a confident-sounding score talks a biller past a hard failure.',
  groups: [
    {
      tone: 'purple',
      title: 'Deterministic checks',
      note: 'Pass or fail, each citing the rule it was checked against.',
      items: [
        'Daily utilization limit for the code',
        'Rendering provider credentialing',
        'Payer identifier validity',
        'Prior authorization requirement',
      ],
    },
    {
      tone: 'teal',
      title: 'Probabilistic risk signals',
      note: 'Likelihoods that shape the score and are named when they matter.',
      items: [
        'Diagnosis and procedure clinical alignment',
        'Modifier approval probability',
        'Documentation completeness risk',
        "This payer's adjudication tendencies",
      ],
    },
  ],
  rules: {
    title: 'The rule that governs both',
    items: [
      'A deterministic failure is always surfaced as a rejection reason, and is never overridden by a favourable probabilistic score.',
      'Every claim with a rejection reason gets at least one specific, actionable recommendation.',
    ],
  },
};

export const ppAudit = {
  eyebrow: 'Audit',
  title: 'Every value traceable to the policy page it came from',
  description:
    'Automation that cannot be audited is a liability, not an efficiency. Payor Policy Intelligence is built so that any value, code or score can be explained after the fact.',
  items: [
    {
      icon: { src: auditSourceIcon, size: [16, 20] },
      title: 'Source text retained',
      text: 'Every extracted policy value keeps a reference to the passage it was read from, so a rule can be traced back to the original document.',
    },
    {
      icon: { src: auditProvenanceIcon, size: [16, 20] },
      title: 'Provenance on every code',
      text: 'Added codes are marked as AI suggested or manually entered, and keep their rationale and confidence score, not just the code value.',
    },
    {
      icon: { src: auditPredictionsIcon, size: [20, 20] },
      title: 'Predictions retained',
      text: 'Each claim prediction is kept alongside the claim rather than overwritten by the next run, so adjudication decisions can be reviewed.',
    },
    {
      icon: { src: auditOutcomesIcon, size: [20, 18] },
      title: 'Outcomes fed back',
      text: 'Real payer outcomes, accepted or denied, are linked back to the original prediction so accuracy can be measured over time.',
    },
  ],
};

export const ppBoundaries = {
  eyebrow: 'Boundaries',
  title: 'What Payor Policy Intelligence does not do',
  description: 'Worth stating plainly, because these are the assumptions buyers most often arrive with.',
  columns: ['Not included', 'What happens instead'],
  rows: [
    [
      'Automatic claim submission',
      'A draft claim is created and scored. Submitting it stays a deliberate, separate action by your team.',
    ],
    [
      'Automatic appeal filing',
      'Rejection reasons and recommended fixes are surfaced on the claim. Appeals are not drafted or filed for you.',
    ],
    [
      'Auto-committed procedure codes',
      'Recommended codes are added only when a user selects them. Nothing is written to the episode automatically.',
    ],
    [
      'Guessed policy values',
      'A field with no matching content in the policy comes back unmapped and goes to your review queue.',
    ],
    ['Email, fax and phone policy notes', 'Document ingestion covers PDF, Excel and Word policy documents.'],
  ],
};

// Rendered with the site's shared FAQ accordion. Ordered so the shared two-column split (first half
// left) matches the frame's columns.
export const ppFaq = {
  title: 'Frequently asked questions about payer policy automation',
  description:
    'The questions RCM and compliance leaders ask most often when evaluating Payor Policy Intelligence.',
  items: [
    {
      question: 'What document formats can be ingested?',
      answer:
        'PDF policy manuals, Excel billing rules sheets and Word guideline documents, including optical character recognition for scanned policies. Email, fax and phone notes are not ingested.',
    },
    {
      question: 'Can an extracted rule be traced back to the source document?',
      answer:
        'Yes. Every extracted value retains a reference to the passage it was read from, so a policy value can be checked against the original document if it is ever questioned.',
    },
    {
      question: 'Are AI-recommended CPT codes added to the record automatically?',
      answer:
        'No. A user reviews each suggestion with its rationale and confidence, then adds the codes they accept. Nothing is committed without that action.',
    },
    {
      question: 'What happens when a payer updates its policy?',
      answer:
        'The revised document is ingested through the same pipeline, and the updated rules become available to coding and claim checks without re-reading the document by hand.',
    },
    {
      question: 'What happens when the AI is not confident about a policy value?',
      answer:
        'Medium-confidence values are held for a reviewer to approve before they are written. Low-confidence values are not written at all — a task is created and routed to your review queue.',
    },
    {
      question: 'Does it submit claims automatically?',
      answer:
        'No. A draft claim is generated and scored before submission. Submitting the claim remains a deliberate, separate action.',
    },
    {
      question: 'How is a deterministic failure treated differently from a risk signal?',
      answer:
        'A deterministic check produces a pass or fail against a cited rule, and a failure is always surfaced as a rejection reason. It is never overridden by a favourable probabilistic score.',
    },
    {
      question: 'Do predictions improve over time?',
      answer:
        'Real payer outcomes, accepted or denied, are captured and linked back to the original prediction, so accuracy can be measured and improved against actual adjudication results.',
    },
  ],
};

// The demo CTA matches the other pages; the related links go to the other KratuAI pages.
export const ppCtaBand = {
  eyebrow: 'See Payor Policy Intelligence in Elixir',
  title: ["Put the payer's own rules to work, from PDF to", 'paid claim'],
  description:
    'Walk through policy ingestion, code recommendation and pre-submission claim scoring against the payers and plans your team bills today.',
  cta: { label: 'Request a Demo', to: '/request-demo' },
  related: {
    label: 'Working denials after they land?',
    links: [
      { label: 'Explore Revenue Kratu AI', to: '/kratu-ai/ar-agent' },
      { label: 'Kratu Co-Pilot', to: '/kratu-ai/elixir-co-pilot-clinical-assistant' },
      { label: 'Kratu AI overview', to: '/kratu-ai' },
    ],
  },
};

export const ppHighlights = [
  { title: 'Rules, not retyping', text: 'PDF, Excel and Word policies read once into structured billing rules.' },
  { title: 'Evidence on every value', text: 'Each extracted rule keeps its source text and a confidence score.' },
  { title: 'Nothing silently guesses', text: 'Low-confidence values are held for a person, never written quietly.' },
  { title: 'Fix before you file', text: 'Denial reasons and specific fixes arrive before the claim is submitted.' },
];
