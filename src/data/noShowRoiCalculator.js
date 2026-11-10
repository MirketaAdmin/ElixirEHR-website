// No-Show ROI Calculator page (Figma "No-Show ROI Calculator", 1280 frame). Copy is reproduced
// verbatim from the frame. The hero image is the frame's grey placeholder (the same exported
// placeholder as the EVV, Denial Management, Patient Portal and No-Show Prediction heroes).
import heroMedia from '../assets/no-show-roi-calculator/hero-media.png';

export const roiHero = {
  currentPage: 'No-Show ROI Calculator',
  titleLines: ['No-Show ROI Calculator:', 'What Missed Appointments', 'Really Cost Your Practice'],
  // The whole title is white in this frame (no accent).
  titleAccent: [],
  description:
    'Enter the numbers you already know — practitioners, appointment volume, your no-show rate and what a completed visit is worth — and see the monthly revenue lost to missed appointments, what a reduction recovers, and the return after software cost. The arithmetic is printed in full, and nothing is emailed anywhere unless you ask.',
  // Scrolls to the calculator on this page.
  primaryCta: { label: 'Open the calculator', href: '#calculator' },
  secondaryCta: { label: 'How no-show prediction works', to: '/patient-no-show-software/' },
  // Scheduling photo supplied by the product team, composited onto the shared tilted backdrop (511×507).
  media: {
    src: heroMedia,
    alt: 'Practice manager reviewing appointment schedules and no-show trends on a laptop',
  },
};

export const roiStrip = [
  {
    title: 'Zero Email Requirement',
    text: 'The calculation runs client-side in your browser. No figures leave your workstation unless you submit.',
  },
  {
    title: 'Transparent Arithmetic',
    text: 'Every formula is printed in full below, enabling your CFO and finance team to audit every step.',
  },
  {
    title: 'Deliberately Conservative',
    text: 'Models direct visit revenue only. We document exactly what the estimate leaves out on both sides.',
  },
  {
    title: 'Full Control Over Assumptions',
    text: 'Every field is fully editable, including the targeted reduction percentage. No locked multipliers.',
  },
];

// The calculator's labels and copy. The arithmetic lives in pages/NoShowRoiCalculator/roiModel.js.
export const roiCalculator = {
  eyebrow: 'Interactive Tool',
  title: 'Estimate the Monthly Cost of Patient No-Shows at Your Practice',
  description:
    'Change any parameter to update the financial impact instantly. The defaults reflect standard behavioral health and specialty clinic benchmarks.',
  formTitle: 'Practice Operating Parameters',
  fields: [
    { name: 'practitioners', label: 'Number of Practitioners', step: '1' },
    { name: 'visitsPerPractitioner', label: 'Visits / Practitioner / Mo', step: '1' },
    { name: 'noShowRate', label: 'Current No-Show Rate (%)', step: '0.1', max: '100', help: 'Benchmark default 18.8% (Kheirkhah et al.).' },
    { name: 'revenuePerVisit', label: 'Avg Net Revenue / Visit ($)', step: '0.01', help: 'Net collected amount after contractual allowances.' },
    { name: 'reduction', label: 'Estimated Reduction (%)', step: '0.1', max: '100', help: 'Relative reduction (e.g. 27% off 18.8% is 13.7%).' },
    { name: 'costPerProvider', label: 'Software Cost / Provider / Mo ($)', step: '0.01', help: 'Estimated Elixir intelligent platform license fee.' },
  ],
  totalCost: { label: 'Total Solution Cost / Month ($)', help: 'Computed: practitioners × monthly license cost.' },
  recalculateLabel: 'Recalculate Estimate',
  resetLabel: 'Reset Defaults',
  disclaimer: {
    label: 'Disclaimer:',
    text: 'This calculator is provided for estimation purposes only. It isolates direct visit revenues and software licensing expenses; it does not account for internal staff outreach time or downstream tertiary services. Results depend entirely on your clinical inputs.',
  },
  summary: {
    title: 'Financial Return Summary',
    roiLabel: 'ROI / Month (%)',
    roiCaption: 'Return on platform software investment alone.',
    recoveredLabel: 'Recovered Revenue / Mo',
    netLabel: 'Net Financial Impact / Mo',
    rows: [
      { key: 'totalAppointments', label: 'Total Scheduled Appointments / Mo', format: 'count' },
      { key: 'missedAppointments', label: 'Projected Missed Visits / Mo', format: 'count' },
      { key: 'revenueLost', label: 'Gross Revenue Lost to No-Shows / Mo', format: 'dollars' },
      { key: 'recoveredAppointments', label: 'Recovered Appointments / Mo', format: 'count' },
      { key: 'resultingRate', label: 'Resulting No-Show Rate', format: 'rate' },
    ],
    tables: [
      { key: 'recoveredByYear', caption: 'Projected Revenue Recovered ($)' },
      { key: 'netByYear', caption: 'Net Financial Impact After Software ($)' },
    ],
    columns: ['Year 1', 'Year 2', 'Year 3', '3-Year Total'],
  },
};

export const roiLogic = {
  eyebrow: 'Transparent Logic',
  title: 'How This No-Show ROI Calculator Works',
  description:
    'Every mathematical line is documented so your finance leadership can verify calculations without relying on proprietary or hidden coefficients.',
  formulas: [
    { term: 'Total appointments / month', expression: 'practitioners × appointments per practitioner per month' },
    { term: 'Missed appointments / month', expression: 'total appointments × no-show rate' },
    { term: 'Revenue lost to no-shows', expression: 'missed appointments × average revenue per appointment' },
    { term: 'Appointments recovered', expression: 'missed appointments × estimated no-show reduction' },
    { term: 'Revenue recovered / month', expression: 'appointments recovered × average revenue per appointment' },
    { term: 'Total cost / month', expression: 'practitioners × cost of AI solution per practitioner' },
    { term: 'Net financial impact / month', expression: 'revenue recovered − total cost' },
    { term: 'ROI / month (%)', expression: '(net financial impact ÷ total cost) × 100' },
    { term: 'Annualized Figures', expression: 'monthly run rate × 12 (held flat over 3-year term)' },
  ],
  assumptions: {
    title: 'Four Operating Assumptions Worth Naming',
    items: [
      { label: 'Direct revenue model:', text: 'Treats each missed slot as forfeited appointment fees without factoring same-day waitlist backfills.' },
      { label: 'Constant appointment valuation:', text: 'Assumes recovered slots earn identical net reimbursement to your clinical average.' },
      { label: 'Software-isolated denominator:', text: 'Software ROI isolates platform software expense; staff outreach hours represent a separate operational variable.' },
      { label: 'Flat yearly projection:', text: 'Multi-year totals reflect direct linear accumulation without compounding growth or inflation assumptions.' },
    ],
  },
};

export const roiScope = {
  eyebrow: 'Fiduciary Precision',
  title: 'What the Calculator Does and Does Not Count',
  description:
    'Responsible forecasting requires acknowledging both unmeasured upside and hidden operational friction.',
  cards: [
    {
      title: 'Upside Costs Left Out of Model',
      titleTone: 'purple',
      items: [
        { label: 'Downstream care orders:', text: 'Diagnostic lab revenues, medication therapies, and tertiary specialty referrals.' },
        { label: 'Staff rework hours:', text: 'Administrative burden of re-contacting patients and obtaining second authorizations.' },
        { label: 'Auth expirations:', text: 'Level-of-care coverage authorizations that lapse due to missed visit milestones.' },
        { label: 'Waitlist denial:', text: 'High-acuity patients kept off panels while empty appointment hours go unutilized.' },
        { label: 'Clinician productivity:', text: 'Returning predictable, billable time to salary-compensated medical staff.' },
        { label: 'Clinical continuity:', text: 'Preventing avoidable emergency department escalations due to missed dosing or therapy.' },
      ],
    },
    {
      title: 'Friction Costs That Reduce Net Gain',
      titleTone: 'red',
      items: [
        { label: 'Front desk outreach:', text: 'The human staff time dedicated to personalized high-risk call lists.' },
        { label: 'Telephony & SMS volume:', text: 'Direct telecommunications routing and SMS carrier dispatch fees.' },
        { label: 'Workflow change management:', text: 'Training clinic coordinators and tuning worklist escalation thresholds.' },
        { label: 'Visit type mix:', text: 'Recovered appointments that land in lower-reimbursing short check-in codes.' },
        { label: 'Ramp-up timeline:', text: 'Program maturation typically yields full results between months 3 and 6, rather than week 1.' },
      ],
    },
  ],
};

export const roiTargets = {
  eyebrow: 'Target Setting',
  title: 'Choosing a Realistic No-Show Reduction Target',
  description:
    'The estimated reduction percentage is the pivot on which your business case rests. Different operational plays yield dramatically different results.',
  // tone: the row's edge and tag colour (red baseline, yellow lifts, lime high impact).
  rows: [
    {
      tag: 'Baseline',
      tone: 'red',
      title: 'Why the calculator starts at 27%',
      text: "27% represents Elixir's validated behavioral health planning target. Always test sensitivity at 10% and 15% alongside it to prove business case viability under conservative adoption curves.",
    },
    {
      tag: 'Modest Lift',
      tone: 'yellow',
      title: 'Automated cadence and channel optimization',
      text: 'Targeted reminder schedules resolve patient forgetfulness, but quickly plateau if structural barriers to attendance are not addressed.',
    },
    {
      tag: 'Moderate Lift',
      tone: 'yellow',
      title: 'Shortening booking lead times',
      text: 'Lead time is the strongest single predictor of appointment drop-off. Holding near-term capacity recovers slots without adding per-visit costs.',
    },
    {
      tag: 'High Impact',
      tone: 'lime',
      title: 'Frictionless self-reschedule via Patient Portal',
      text: 'Allowing patients to reschedule in 3 clicks converts a silent no-show into a kept visit on a different day, bypassing administrative phone trees.',
    },
    {
      tag: 'High Impact',
      tone: 'lime',
      title: 'Resolving root cause barriers (Transport & Telehealth)',
      text: 'Addressing transit limitations or offering seamless 1-click telehealth conversion directly overcomes the operational reasons visits fail.',
    },
  ],
};

// Paragraphs and source are RichText segments (the journal title is italic in the frame).
export const roiBenchmark = {
  eyebrow: 'Clinical Benchmarks',
  title: 'What Is a Normal Patient No-Show Rate?',
  lead: '18.8% is an established academic benchmark — but variation across clinical departments is substantial.',
  paragraphs: [
    [
      "The calculator's baseline reflects a widely cited retrospective study of ten outpatient clinics published in ",
      { text: 'BMC Health Services Research', italic: true },
      ', which documented an aggregate no-show rate of 18.8%, ranging between 12.6% and 25.7% across specialties within the same health system.',
    ],
    'Specialty mental health, addiction treatment, and intensive outpatient (IOP) programs frequently report baseline no-show rates at or exceeding the top quartile. Social determinants of health and transport barriers often track directly with treatment needs, making department-specific baseline tracking essential.',
  ],
  // The source is plain text in the frame (not a link).
  source: [
    'Source: Kheirkhah P, Feng Q, Travis LM, et al. "Prevalence, predictors and economic consequences of no-shows." ',
    { text: 'BMC Health Services Research', italic: true },
    ' 2016;16:13. doi:10.1186/s12913-015-1243-z',
  ],
};

// A Salesforce Web-to-Lead form (data/webToLead.js). `salesforceName` fields post directly; Full Name
// is split into first/last name, and Title / Role goes into the description with the calculator's
// inputs and results. Producing and emailing the PDF summary is a follow-up in Salesforce.
export const roiBrief = {
  eyebrow: 'Executive Brief',
  title: 'Get This ROI Model Delivered as an Executive Summary',
  description:
    'Receive a cleanly formatted PDF summary containing your specific inputs, full formula proofs, and methodology notes ready for presentation to leadership.',
  fields: [
    { name: 'fullName', label: 'Full Name', placeholder: 'Dr. Sarah Jenkins', autoComplete: 'name', required: true },
    { name: 'organization', salesforceName: 'company', maxLength: 40, label: 'Organization Name', placeholder: 'Regional Behavioral Health Group', autoComplete: 'organization' },
    { name: 'email', salesforceName: 'email', maxLength: 80, label: 'Work Email', placeholder: 's.jenkins@clinic.org', type: 'email', autoComplete: 'email', required: true },
    { name: 'role', label: 'Title / Role', placeholder: 'Chief Executive Officer', autoComplete: 'organization-title' },
  ],
  submitLabel: 'Email me this estimate',
  note: {
    before: 'We will send your calculation report alongside scheduling extract guidance. Review our ',
    link: 'Privacy Policy',
    to: '/privacy-policy/',
    after: '.',
  },
};

// Rendered with the site's shared FAQ section (standing rule). The frame supplies an answer for the
// first question only; the other answers were written for the site from this page's own copy.
export const roiFaq = {
  title: 'No-Show ROI Calculator: Frequently Asked Questions',
  description: 'Technical details on metric calculation, data privacy, and interpreting clinical ROI.',
  items: [
    {
      question: 'What is a normal patient no-show rate?',
      answer:
        'One widely cited US study of ten outpatient specialty clinics found an overall rate of 18.8%, ranging from 12.6% to 25.7% across departments. In behavioral health and addiction medicine, baseline rates often reach 25–35% due to social determinants of health and transportation challenges.',
    },
    {
      question: 'How is the financial cost of a no-show calculated?',
      answer:
        "Total monthly appointments (practitioners × visits per practitioner) are multiplied by your no-show rate to give missed visits, and missed visits are multiplied by your average net revenue per visit. That is the direct revenue lost each month. Every formula is printed in full in the “How This No-Show ROI Calculator Works” section so your finance team can check each step.",
    },
    {
      question: 'What revenue figure should I enter per appointment?',
      answer:
        "Your average net collected revenue per completed visit — what you actually receive after contractual allowances and adjustments, not the billed charge. If your visit types are paid very differently, run the calculator for each major service line or use a weighted average.",
    },
    {
      question: 'Is a 27% reduction in no-shows realistic?',
      answer:
        "27% is the calculator's default planning target, not a guarantee. What you achieve depends on your starting rate, your patients and which interventions you use: reminders alone tend to plateau, while shorter booking lead times, easy self-rescheduling and addressing transport barriers go further. Test your business case at 10% and 15% as well.",
    },
    {
      question: 'Why is the ROI percentage so high?',
      answer:
        "Because the denominator is software cost only. ROI divides net recovered revenue by the monthly licence cost; it leaves out staff outreach time, SMS and telephony fees and change management, which all reduce the real gain. A few recovered visits can be large relative to a per-practitioner licence fee, so read the ROI together with the net financial impact in dollars.",
    },
    {
      question: 'What does the "Cost of AI Solution" field mean?',
      answer:
        "It is the monthly software cost per practitioner (the “Software Cost / Provider / Mo” field). The calculator multiplies it by your number of practitioners to give the total monthly solution cost. Enter your quoted Elixir licence fee if you have one; otherwise treat the default as an estimate and ask us for pricing for your organization.",
    },
    {
      question: 'Does this calculator transmit practice data to Elixir?',
      answer:
        "No. The calculation runs entirely in your browser, and nothing is sent while you change the numbers. Data is sent only if you request the executive summary: the form then sends your name, organization, email, role and the calculator's inputs and results to our team so the summary can be prepared.",
    },
    {
      question: 'Can we model these numbers against our live schedule?',
      answer:
        "Yes. The calculator works from averages. In a working session we can use an export of your scheduling history to measure your actual no-show rate by clinic, visit type and booking lead time, and show where prediction and outreach would apply. Request the executive summary or a demo to set this up.",
    },
  ],
};

export const roiCtaBand = {
  eyebrow: 'The Next Step',
  title: ['Run These Calculations on', 'Your Live Schedule'],
  description:
    'In an Elixir demonstration, we examine your actual scheduling data rather than general benchmarks — illustrating exactly where uncaptured capacity sits across your departments.',
  cta: { label: 'Request a Live Demo', to: '/request-demo/' },
  secondaryCta: { label: 'Explore No-Show Prediction', to: '/patient-no-show-software/' },
  related: [
    { label: 'Patient No-Show Prediction', to: '/patient-no-show-software/' },
    { label: 'Patient Portal', to: '/patient-portal-software/' },
    { label: 'Contact Center', to: '/healthcare-contact-center/' },
  ],
};
