// Responsible AI page (Figma "Responsible AI", 1280 frame), an independent page (/responsible-ai)
// with no parent. Copy is reproduced verbatim from the frame; forced mid-sentence line breaks are
// dropped. The hero image is the frame's grey placeholder (the same export as the KratuAI hero).
import heroMedia from '../assets/responsible-ai/hero-media.png';
import dataTrainingIcon from '../assets/responsible-ai/icon-data-training.png';
import dataSystemsIcon from '../assets/responsible-ai/icon-data-systems.png';
import dataVerificationIcon from '../assets/responsible-ai/icon-data-verification.png';
import dataQuestionsIcon from '../assets/responsible-ai/icon-data-questions.png';

export const raHero = {
  currentPage: 'Responsible AI',
  titleLines: ['Responsible AI in', 'Healthcare: How We', 'Build AI That', 'Clinicians Can Trust'],
  // The whole title is white in this frame (no accent).
  titleAccent: [],
  // The second paragraph is the frame's yellow summary line.
  description: [
    "Trust in clinical software is not earned by a statement of values. It is earned by being specific about where the software stops, who decides, and what can be reconstructed afterwards if someone asks how an entry got into a patient's chart or onto a claim.",
    'So this page describes mechanisms, not intentions.',
  ],
  // No destinations in the frame; both scroll to sections on this page.
  primaryCta: { label: 'Read the principles', href: '#clinical-principles', arrow: false },
  secondaryCta: { label: 'Questions to ask any vendor', href: '#vendor-questions' },
  media: {
    src: heroMedia,
    alt: 'Clinician reviewing a tablet beside AI workflow panels that end in an approval check',
  },
};

// The two-sided diagram: what KratuAI prepares (dark), the human gate, what your team decides.
export const raRule = {
  chip: 'The rule behind everything',
  title: 'Every KratuAI agent prepares the work. A person makes the decision.',
  description:
    'One rule governs all four agents, and everything else on this page is a consequence of it. AI assembles, drafts, scores and suggests. It does not diagnose, prescribe, code, submit or write off. Those remain acts performed by a named person who can be asked why.',
  prepares: {
    pill: 'KratuAI prepares',
    tag: 'Autonomous Substrate',
    title: 'Assembles, drafts, scores, suggests',
    items: [
      'Organizes what a patient wrote into agenda items',
      'Drafts documentation on your clinical template',
      'Surfaces gaps, diagnoses and referrals from the record',
      'Extracts billing rules from payer policy documents',
      'Recommends codes with the rule behind each one',
      'Scores claims and accounts for risk',
      'Drafts an appeal letter',
    ],
    stage: 'Stage 1: Pre-Execution',
    status: 'Zero Autonomous Commit',
  },
  gate: {
    label: 'Irreversible Human Gate',
    note: 'Decisions are gated by named credentials',
  },
  decides: {
    pill: 'Your team decides',
    tag: 'Credentialed Human',
    title: 'Reviews, edits, approves, acts',
    items: [
      'The patient edits their own agenda before sending it',
      'The clinician edits and approves every note',
      'The clinician confirms each insight before it reaches the chart',
      'A reviewer approves low-confidence policy values',
      'A coder accepts or rejects each recommended code',
      'A biller decides to escalate, appeal or write off',
      'A person sends the claim, the order and the prescription',
    ],
    stage: 'Stage 2: Execution & Record Entry',
    status: 'Authenticated Clinician Only',
  },
  callout:
    'If an AI output reached a patient record or a payer without someone choosing it, that would be a defect, not a feature.',
};

// Three swimlanes of two principles each (numbered 1–6 across the lanes).
export const raRevenue = {
  chip: 'Revenue',
  title: 'Responsible AI principles for coding, claims and the revenue cycle',
  description:
    'These govern Payor Policy Intelligence and the A/R Agent — everything that touches a code, a claim or a payer. Coding carries billing and licensing consequences, so the bar here is different from a recommendation engine.',
  lanes: [
    {
      label: 'Deterministic Checks vs Probabilistic Uncertainty',
      principles: [
        {
          title: 'A certainty and a likelihood are never blended',
          text: 'A rule that failed and a risk that is elevated are different kinds of statement. Averaging them into one confident number is how a biller gets talked past a hard failure.',
          enforced:
            'Deterministic checks — utilization limits, provider credentialing, payer identifier validity, prior authorization — produce a pass or fail against a cited rule and are shown separately from probabilistic risk signals. A deterministic failure is always surfaced as a rejection reason and is never overridden by a favourable score.',
          appliesTo: 'Payor Policy Intelligence',
        },
        {
          title: 'Uncertainty is surfaced, never smoothed over',
          text: 'Extraction from a document is not uniformly reliable. A system that hides that fact is the one that quietly corrupts your payer configuration.',
          enforced:
            'Every extracted value carries a confidence score. High-confidence values are applied, medium-confidence values are held for a reviewer to approve, and low-confidence values are not written at all — a task is created and routed to your queue. A field with no matching content in the policy is returned as unmapped rather than guessed.',
          appliesTo: 'Payor Policy Intelligence',
        },
      ],
    },
    {
      label: 'Organization Policy Thresholds vs Score Prioritization',
      principles: [
        {
          title: "The thresholds are yours, not the model's",
          text: 'Where the line falls between "apply this automatically" and "a person should look at this" is a policy decision belonging to your compliance team.',
          enforced:
            'Confidence routing is configuration rather than model behaviour. Your organization sets the thresholds that decide what is applied, what is reviewed and what is held.',
          appliesTo: 'Payor Policy Intelligence',
        },
        {
          title: 'A score ranks the work; it does not do the work',
          text: "Prioritization and action are separate. Telling a team which accounts deserve today's attention is useful. Deciding to write one off is not the software's call.",
          enforced:
            'Accounts and claims arrive scored and banded, with the figures behind the score on screen to be checked. Whether a high-risk band means escalation, a phone call or a payment plan is decided by your team. Appeal letters are drafted for review, edit and export — not filed.',
          appliesTo: 'A/R Agent',
        },
      ],
    },
    {
      label: 'Execution Authorization vs Longitudinal Accuracy Verification',
      principles: [
        {
          title: 'No code is committed and no claim is sent by AI',
          text: "Under-coding leaks revenue and over-coding creates audit exposure. Neither risk should be taken on a clinician's behalf.",
          enforced:
            'Recommended codes are presented with their rationale and confidence, and a user adds the ones they accept — individually or in a batch. Nothing is auto-committed. Claims are generated in draft and scored; submitting one remains a deliberate, separate action.',
          appliesTo: 'Payor Policy Intelligence',
        },
        {
          title: 'Predictions are measured against what actually happened',
          text: "A model's accuracy is a claim about the world, and claims about the world should be checked rather than asserted.",
          enforced:
            "Real payer outcomes — accepted or denied, and the payer's own reason codes — are captured and linked back to the original prediction, so predicted acceptance can be compared against actual acceptance over time.",
          appliesTo: 'Payor Policy Intelligence, A/R Agent',
        },
      ],
    },
  ],
};

// tone: each record's dot colour.
export const raAudit = {
  chip: 'Audit',
  title: 'Making every AI output explainable after the fact',
  description:
    'The question that matters is not whether the AI was right. It is whether, months later, someone can reconstruct why a code, a diagnosis or a policy value is on the record — and who agreed to it.',
  note: {
    title: 'Audit Ledger Governance Protocol',
    text: "Every KratuAI inference binds historical parameters, source token anchors, and the signing staff member's credentials directly to the resulting database row.",
  },
  columns: ['What was produced', 'What is retained with it'],
  rows: [
    {
      tone: 'purple',
      produced: 'A recommended code',
      retained:
        'The rationale, the confidence score, and whether it was AI suggested or manually entered — kept with the record, not only displayed at the time.',
    },
    {
      tone: 'teal',
      produced: 'An extracted billing rule',
      retained:
        "A reference to the passage of the payer's document it was read from, so the value can be checked against the original.",
    },
    {
      tone: 'purple',
      produced: 'A clinical insight',
      retained: "The source it was drawn from — today's documentation, a previous encounter, results on file.",
    },
    {
      tone: 'teal',
      produced: 'A claim prediction',
      retained:
        'The score, the reasons and the recommendations, retained alongside the claim rather than overwritten by the next run.',
    },
    {
      tone: 'lime',
      produced: 'An approved note',
      retained: 'The clinician who reviewed and approved it, and the items they selected afterwards.',
    },
  ],
};

// Rendered with the site's shared FAQ accordion. Ordered so the shared two-column split (first half
// left) matches the frame's columns.
export const raFaq = {
  chip: 'Answers',
  title: 'Frequently asked questions about responsible AI at Elixir',
  description: 'The questions clinical, compliance and IT leaders ask most often.',
  items: [
    {
      question: 'Does KratuAI make clinical decisions?',
      answer:
        'No. It does not diagnose, prescribe or determine medical necessity. Agents organize, draft, surface and score. Clinical judgement remains with the clinician.',
    },
    {
      question: 'Can AI write to a patient record without a person?',
      answer:
        'No. Draft documentation is reviewed and edited before approval, and insight recommendations open the record for the clinician to update and confirm. Nothing is added until they confirm it.',
    },
    { question: 'Is patient data used to train AI?', answer: 'No. Patient data is not used to train AI.' },
    {
      question: 'What happens when the AI is not confident?',
      answer:
        'Uncertainty is surfaced rather than hidden. Medium-confidence values are held for a reviewer to approve, and low-confidence values are not written at all — a task is routed to your queue instead.',
    },
    {
      question: 'Can an AI-generated output be explained months later?',
      answer:
        'Yes. Recommendations retain their source — the rationale and confidence behind a code, the policy passage a rule was read from, the reasons behind a claim score — kept with the record rather than only shown at the time.',
    },
    {
      question: 'Does a good risk score ever override a failed rule check?',
      answer:
        'No. Deterministic checks produce a pass or fail against a cited rule, and a failure is always surfaced as a rejection reason regardless of the probabilistic score.',
    },
    {
      question: 'Can a clinician stop the AI capturing a conversation?',
      answer: 'Yes. Recording, pause and stop controls stay with the clinician throughout the encounter.',
    },
    {
      question: 'Does responsible AI mean the AI does less?',
      answer:
        'It means the AI does the preparation and a person makes the decision. That boundary is what makes the output usable in a record that has to withstand review.',
    },
  ],
};

// The demo CTA matches the other pages; the related links go to the KratuAI pages.
export const raCtaBand = {
  eyebrow: 'See it rather than read it',
  title: 'Ask us the hard questions on a live record',
  description:
    'Bring your compliance lead. Pick any recommendation in the demo and ask where it came from, what happens on approval, and what is retained afterwards.',
  cta: { label: 'Request a KratuAI Demo', to: '/request-demo' },
  links: [
    { label: 'KratuAI overview', to: '/kratu-ai' },
    { label: 'Kratu Co-Pilot', to: '/kratu-ai/elixir-co-pilot-clinical-assistant' },
    { label: 'Payor Policy Intelligence', to: '/kratu-ai/payor-policy-intelligence' },
  ],
};

export const raNonClaims = {
  chip: 'Boundaries',
  title: 'What we do not claim',
  description:
    'Responsible AI pages are usually a list of things a vendor is good at. These are the things we are not, stated here so nobody discovers them during an implementation.',
  items: [
    {
      title: 'KratuAI is not a clinical decision maker',
      text: 'It does not diagnose, prescribe or determine medical necessity. Clinical judgement remains with the clinician, and the software is designed so that it cannot appear otherwise.',
    },
    {
      title: 'It does not remove the coder or the biller',
      text: 'It reduces the typing and the searching. Someone still accepts the code, works the denial and decides whether to appeal.',
    },
    {
      title: 'It is not a compliance guarantee',
      text: 'Correct configuration, current payer policies and your own review processes still determine compliance. The software supports that work; it does not certify it.',
    },
    {
      title: 'A confidence score is not a promise',
      text: 'It expresses how strongly the system supports a suggestion, not how likely a payer or reviewer is to agree. Scores rank work; they do not settle questions.',
    },
  ],
};

export const raVendor = {
  id: 'vendor-questions',
  chip: 'Evaluation Aid',
  title: 'Questions to ask any healthcare AI vendor, including us',
  description:
    'If you are evaluating clinical or revenue cycle AI, these are the questions that separate a governed system from a demo. Ask them of every vendor on your list. We would rather you asked them than took this page on faith.',
  questions: [
    {
      category: 'Execution Surface',
      question: 'What exactly happens when a clinician clicks approve?',
      guidance:
        'Is anything transmitted, or only created? Ask them to name each object and its resulting status. Vague answers here are the ones that surprise you in production.',
    },
    {
      category: 'Autonomous Writes',
      question: 'Can the AI write to the record without a person?',
      guidance:
        'If the answer is "only in certain cases," ask which cases, who configured them, and whether the configuration is visible to your compliance team.',
    },
    {
      category: 'Confidence Thresholds',
      question: 'What happens when the model is not confident?',
      guidance:
        'Is uncertainty surfaced at all? Is there a threshold below which output is withheld rather than shown with a caveat? Who sets it?',
    },
    {
      category: 'Provenance & Source',
      question: 'Can you show me the source behind one recommendation?',
      guidance:
        'Pick a code, a rule or an insight in the demo and ask where it came from. The answer should be immediate and specific.',
    },
    {
      category: 'Logic Separation',
      question: 'Is a rule failure ever outweighed by a good score?',
      guidance:
        'Ask how deterministic checks and probabilistic risk are combined. If they are blended into a single number, ask what happens to a hard failure.',
    },
    {
      category: 'Data Rights',
      question: 'Is our patient data used to train your models?',
      guidance:
        'Ask for it in writing, and ask whether the answer differs for de-identified data, for aggregate statistics, or for prompts sent at inference time.',
    },
    {
      category: 'Real-world Benchmark',
      question: 'How is accuracy measured, not asserted?',
      guidance:
        'Ask what outcome the vendor compares predictions against, over what period, and whether you will be able to see that comparison for your own organization.',
    },
    {
      category: 'Boundary Definition',
      question: 'What does the AI refuse to do?',
      guidance:
        'A vendor who cannot name a limit has not thought about one. The answer tells you more than any capability list.',
    },
  ],
};

// tone: each card's tile and footer-label colour.
export const raData = {
  chip: 'Data',
  title: 'How we handle patient data and AI training',
  description: 'The shortest section on this page, because the answer is short.',
  items: [
    {
      tone: 'lime',
      icon: { src: dataTrainingIcon, size: [18, 21] },
      title: 'Not used for training',
      text: 'Patient data is not used to train AI.',
      label: 'Strict Boundary',
    },
    {
      tone: 'blue',
      icon: { src: dataSystemsIcon, size: [22, 19] },
      title: 'Inside the systems you already run',
      text: 'Every agent works within Elixir, on the records your organization already holds, rather than moving patient data into a separate product.',
      label: 'Zero External Export',
    },
    {
      tone: 'yellow',
      icon: { src: dataVerificationIcon, size: [20, 21] },
      title: 'Shown only after verification',
      text: "In patient-facing flows, no protected health information is displayed until the patient's identity has been verified.",
      label: 'Pre-Verification Gate',
    },
    {
      tone: 'grey',
      icon: { src: dataQuestionsIcon, size: [22, 21] },
      title: 'Questions answered specifically',
      text: 'Retention, access scope and processing questions are answered against your agreement and configuration, not with a general statement.',
      label: 'Contractual Specificity',
    },
  ],
};

// Each principle: the statement, the reason, and how it is enforced. `boxFirst` puts the
// enforcement box on the left (the frame alternates).
export const raClinical = {
  id: 'clinical-principles',
  chip: 'Clinical',
  title: 'Responsible AI principles for clinical documentation and insights',
  description:
    'These govern Visit Prep and Kratu Co-Pilot — everything that touches a patient, a clinician or the medical record.',
  principles: [
    {
      title: 'AI does not practise medicine',
      text: 'An agent may organize what a patient said, or point out that a recorded condition never reached the problem list. It does not conclude what is wrong with anyone.',
      enforced:
        "Visit Prep structures the patient's own words into agenda items and is constrained from diagnosing, prioritizing items clinically or suggesting conditions. Co-Pilot Insights presents findings as flagged for the clinician to consider rather than concluded, and names the source each one came from.",
      appliesTo: 'Visit Prep, Kratu Co-Pilot',
    },
    {
      title: 'Nothing enters the record without a clinician',
      text: 'The review step is not a formality bolted onto a finished action. It is the point at which the action happens at all.',
      enforced:
        'Draft documentation is reviewed and edited before approval. Approving a note does not send orders, prescriptions or referrals — it brings the identified items forward for the clinician to select, and selected items are created but remain unsent until a separate sending step. Insight recommendations open the record for the clinician to update and confirm; nothing is added until they do.',
      appliesTo: 'Kratu Co-Pilot',
      boxFirst: true,
    },
    {
      title: 'The clinician controls what is captured',
      text: 'In behavioral health and addiction treatment, a patient may disclose something they do not want recorded, or ask for capture to stop entirely. That has to be possible in the moment, without leaving the encounter.',
      enforced:
        'Recording, pause and stop controls stay with the clinician throughout the encounter, in view rather than buried in a settings screen. The transcript builds visibly, so what has been captured is never a matter of trust.',
      appliesTo: 'Kratu Co-Pilot',
    },
    {
      title: 'The software adapts to your clinical practice, not the reverse',
      text: 'An AI that only produces one note format quietly pushes every organization toward documenting the same way. That is a clinical decision being made by a vendor.',
      enforced:
        'Documentation follows the clinical templates configured for your organization during implementation, beyond SOAP notes to the templates your teams already use. The clinician selects the template for the encounter.',
      appliesTo: 'Kratu Co-Pilot',
      boxFirst: true,
    },
    {
      title: 'Patient identity is verified before any information appears',
      text: "A link convenient enough that patients actually use it must not also be a link that shows a stranger someone's chart.",
      enforced:
        'The patient enters name and date of birth, which is matched against the patient and the upcoming appointment. A one-time passcode is sent to the phone number already on record, and no patient information is displayed until that passcode is verified.',
      appliesTo: 'Visit Prep',
    },
  ],
};
