// A/R Agent page (Figma "Revenue Kratu AI", 1280 frame), a child page of KratuAI
// (/kratu-ai/ar-agent). Copy is reproduced verbatim from the frame; forced mid-sentence line breaks
// are dropped. The hero image is the frame's grey placeholder (the same export as the KratuAI hero).
import heroPlaceholder from '../assets/contact-center/hero-placeholder.png';
import valueRiskIcon from '../assets/kratu-ai/ar-value-risk.png';
import valueCashIcon from '../assets/kratu-ai/ar-value-cash.png';
import valueAppealsIcon from '../assets/kratu-ai/ar-value-appeals.png';
import valueLearnIcon from '../assets/kratu-ai/ar-value-learn.png';
import mockPatientRecord from '../assets/kratu-ai/ar-mock-patient-record.png';
import mockPatientInsights from '../assets/kratu-ai/ar-mock-patient-insights.png';
import mockClaimRecommendation from '../assets/kratu-ai/ar-mock-claim-recommendation.png';
import mockAdjudicationQueue from '../assets/kratu-ai/ar-mock-adjudication-queue.png';
import mockDenialIntelligence from '../assets/kratu-ai/ar-mock-denial-intelligence.png';
import mockSettlementRange from '../assets/kratu-ai/ar-mock-settlement-range.png';

export const arHero = {
  // The frame's breadcrumb reads "Kratu Co-Pilot" (copied from that page's frame); this page's
  // name is used instead (see DESIGN-SYSTEM.md open questions).
  currentPage: 'A/R Agent',
  titleLines: ['Revenue Kratu AI'],
  // The whole title is white in this frame (no accent).
  titleAccent: [],
  description:
    'Stop working denials after they land. Elixir scores every account and every claim as it is created, so your team spends its day on the money actually at risk.',
  primaryCta: { label: 'Explore Live Demo', to: '/request-demo', arrow: false },
  // No destination in the frame; scrolls to "Revenue Kratu AI capabilities" on this page.
  secondaryCta: { label: 'View Architecture', href: '#capabilities' },
  media: { src: heroPlaceholder, alt: '' },
};

// Each card's link label has no destination in the frame; it scrolls to the matching feature row
// on this page.
export const arValue = {
  title: 'Your next denial is often predictable',
  description:
    'Four models read the account, the claim and the payer, then hand your team a decision instead of another dashboard.',
  items: [
    {
      icon: { src: valueRiskIcon, size: [24, 24] },
      title: 'Risk you can act on',
      text: 'Every account and every claim arrives with a 0–100 score and a clear band. No sorting by age, no guesswork.',
      link: { label: 'Deterministic Scoring', href: '#account-revenue-risk' },
    },
    {
      icon: { src: valueCashIcon, size: [30, 22] },
      title: 'Cash you can commit to',
      text: 'Know the window each claim will pay in, and exactly how much to trust it.',
      link: { label: 'Payment Windows', href: '#predicted-days-to-pay' },
    },
    {
      icon: { src: valueAppealsIcon, size: [28, 24] },
      title: 'Appeals already written',
      text: 'Root cause, ANSI codes, next steps and a ready-to-send appeal letter, in one pass.',
      link: { label: 'Zero Draft Latency', href: '#denial-intelligence' },
    },
    {
      icon: { src: valueLearnIcon, size: [24, 28] },
      title: 'Nothing new to learn',
      text: 'The intelligence sits in the patient header and claims table your team already works in.',
      link: { label: 'Native Embedded UX', href: '#ai-patient-insights' },
    },
  ],
};

// tone: the phase's dot and step-label colour (lime, gold, red). `team` marks the steps the billing
// team performs (lavender cards).
export const arCycle = {
  chip: 'End-to-End Cycle',
  title: 'Kratu AI prepares the work. Your team decides.',
  description:
    'One account, followed from the first look at the balance through submission, follow-up and appeal.',
  phases: [
    {
      tone: 'lime',
      title: 'Before Submission',
      note: 'Opening the account and building the claim',
      steps: [
        { title: 'Account Revenue Risk', text: 'Scored 0–100 with probability bands before opening.' },
        { title: 'AI Patient Insights', text: 'Instant account summary and top 5 priority actions.' },
        { title: 'Claim Recommendation', text: 'Rejection propensity checks and specific field alerts.' },
        { title: 'Your team', text: 'Billers verify recommended fixes and submit cleanly.', team: true },
      ],
    },
    {
      tone: 'gold',
      title: 'After Submission',
      note: 'Following up on what is outstanding',
      steps: [
        { title: 'Denial Risk Score', text: 'Claim-line likelihood rating while in adjudication.' },
        { title: 'Predicted Days to Pay', text: 'Payer-specific arrival window for defensible cash forecast.' },
        { title: 'Your team', text: 'Prioritizes follow-up on high-risk, delayed encounters.', team: true },
      ],
    },
    {
      tone: 'red',
      title: 'After a Denial',
      note: 'Deciding and appealing',
      steps: [
        { title: 'Denial Intelligence', text: 'ANSI code breakdown, viability check & write-off audit.' },
        { title: 'Your team', text: 'Approves appeal pathway or executes justified write-off.', team: true },
        { title: 'Appeal draft', text: 'Complete payer-specific clinical argument compiled.' },
        { title: 'Review and send', text: 'One-click electronic submission or print export with tracking.', team: true },
      ],
    },
  ],
};

// Six feature rows on alternating bands. Each mock-up is exported from the frame at 1× together with
// its shadow; `inset` is the shadow margin around the frame (left, right, bottom) so the frame
// itself lines up with the layout. `mediaFirst` puts the mock-up in the left column. `padding`
// is the band's top and bottom padding in the frame.
export const arFeatures = [
  {
    id: 'account-revenue-risk',
    padding: [81, 63],
    chip: 'Pre-encounter Metric',
    title: 'Account Revenue Risk',
    subtitle: 'Spot the accounts that will cost you, first',
    text: 'Kratu AI continuously evaluates insurance eligibility, past encounter patterns, deductible depletion, and historical collections propensity. Every account surface presents a clean 0–100 score classified into actionable high, medium, and low revenue risk tiers before any clinician or biller enters the file.',
    legend: [
      { label: 'Low Risk (0–30)', tone: 'lime' },
      { label: 'Moderate (31–65)', tone: 'gold' },
      { label: 'High Risk (66–100)', tone: 'red' },
    ],
    media: {
      src: mockPatientRecord,
      size: [682, 282],
      frameWidth: 650,
      inset: [17, 15, 35],
      alt: 'Example patient record header for Lando Norris showing Account Revenue Risk High 82 and collections propensity Medium',
    },
  },
  {
    id: 'ai-patient-insights',
    padding: [79, 80],
    chip: 'Synthesized Briefings',
    title: 'AI Patient Insights',
    subtitle: 'The score says attention. This says what to do.',
    text: 'Raw figures alone create cognitive fatigue. Kratu AI synthesizes months of patient charts, electronic remittance advices, and payer rule shifts into a concise written summary with five immediate, sequenced tasks directly beneath the patient header.',
    mediaFirst: true,
    media: {
      src: mockPatientInsights,
      size: [682, 737],
      frameWidth: 653,
      inset: [15, 14, 35],
      alt: 'Example AI Patient Insights panel: a patient summary, key drivers and five recommended next actions',
    },
  },
  {
    id: 'claim-recommendation',
    padding: [64, 64],
    chip: 'Pre-Submission Scrubbing',
    title: 'Claim Recommendation',
    subtitle: 'Catch the errors before the claim leaves the building',
    text: 'Standard clearinghouse scrubbers rely on rigid syntax checks. Kratu AI applies deep clinical coding context, pinpointing missing modifiers, incompatible diagnosis pairings, or missing medical necessity flags before batch submission takes place.',
    advantage: {
      label: 'Key Advantage',
      text: '98.4% first-pass clean claim acceptance rate across all major national commercial and managed Medicaid payers.',
    },
    media: {
      src: mockClaimRecommendation,
      size: [689, 1181],
      frameWidth: 652,
      inset: [18, 19, 38],
      alt: 'Example Claim Recommendation Matrix: 60% rejection probability, three issues identified, three recommendations and a line item analysis',
    },
  },
  {
    id: 'denial-risk-score',
    padding: [64, 64],
    chip: 'Dynamic Prioritization',
    title: 'Denial Risk Score',
    subtitle: 'Work the claims that may be denied, not the oldest ones',
    text: 'Legacy revenue cycle workflows sort follow-up queues by aging (30, 60, 90+ days). Kratu AI inverts this obsolete paradigm. Claims are ranked by dynamic denial propensity so collectors address high-dollar exposures before contractual filing deadlines expire.',
    mediaFirst: true,
    media: {
      src: mockAdjudicationQueue,
      size: [607, 540],
      frameWidth: 578,
      inset: [15, 14, 35],
      alt: 'Example Active Adjudication Queue listing seven claims with their Denial Risk scores',
    },
  },
  {
    id: 'denial-intelligence',
    padding: [64, 64],
    chip: 'Automated Adjudication Analysis',
    title: 'Denial Intelligence',
    subtitle: 'Every denial, already worked out',
    text: 'When a payer issues a denial, Kratu AI immediately translates cryptic ANSI remark codes into clear clinical english, cross-references payer policy updates, evaluates recovery viability, and compiles an automated appeal letter with full supporting chart references.',
    note: 'Generates fully cited payer-ready appeals in seconds',
    media: {
      src: mockDenialIntelligence,
      size: [689, 872],
      frameWidth: 652,
      inset: [18, 19, 38],
      alt: 'Example denial root cause classification (Missing Authorization) with ANSI codes, 78% confidence and three recommended next steps',
    },
  },
  {
    id: 'predicted-days-to-pay',
    padding: [80, 58],
    chip: 'Cashflow Predictability',
    title: 'Predicted Days to Pay',
    subtitle: 'Forecast cash with a number you can defend',
    text: 'Revenue teams no longer rely on static averages. Kratu AI models seasonality, weekly batch cadences, and specific adjudication turnaround per clearinghouse to calculate defensible expected remittance dates.',
    mediaFirst: true,
    media: {
      src: mockSettlementRange,
      size: [607, 598],
      frameWidth: 578,
      inset: [15, 14, 35],
      alt: 'Example Payer Settlement Range table listing claims with predicted days to pay',
    },
  },
];

// Destinations are not in the frame: the demo CTA matches the other pages, and "Contact Specialist"
// goes to Contact Us.
export const arCtaBand = {
  eyebrow: 'Stop paying for denials you could have seen coming',
  title: ['Run Revenue Kratu AI on your', 'own claims'],
  description:
    'Connect Elixir directly to your current EHR or clearinghouse and evaluate predictive accuracy on historical claims in less than 48 hours.',
  cta: { label: 'Request a Demo', to: '/request-demo' },
  secondaryCta: { label: 'Contact Specialist', to: '/contact-us' },
};

// tag: the stage pill in each card's top-right corner.
export const arCapabilities = {
  id: 'capabilities',
  eyebrow: 'Precision Engine',
  title: 'Revenue Kratu AI capabilities',
  description: 'Wherever you see the purple sparkle, Elixir has already done the analysis for you.',
  items: [
    {
      tag: 'Pre-Claim',
      title: 'Account Revenue Risk',
      text: 'How much of this account is genuinely at risk, scored 0–100 with collections propensity, before you open a single claim.',
    },
    {
      tag: 'Scrubbing',
      title: 'Claim Recommendation',
      text: 'Rejection probability with the exact fields to correct, before the claim is submitted.',
    },
    {
      tag: 'Claim Line',
      title: 'Denial Risk Score',
      text: 'The odds this claim comes back denied, on the claim line, while there is still time to fix it.',
    },
    {
      tag: 'Remittance',
      title: 'Denial Intelligence',
      text: 'Why the claim was denied, what to do about it today, and whether an appeal is worth filing.',
    },
    {
      tag: 'Cashflow',
      title: 'Predicted Days to Pay',
      text: 'When the money actually arrives, as a window you can put in a forecast.',
    },
    {
      tag: 'Appeals',
      title: 'Appeal Letter Drafting',
      text: 'A payer-ready letter drafted for the claim in front of you. Edit, export and track it as sent.',
    },
    {
      tag: 'Closure',
      title: 'Write-Off Assessment',
      text: 'When a claim is not worth chasing, the evidence to close it cleanly and defend the decision.',
    },
    {
      tag: 'Patient Desk',
      title: 'AI Patient Insights',
      text: 'A written account summary with five next actions in priority order, below the patient header.',
    },
  ],
};
