// Care Plan Management page (/care-management/care-plan-management) — a child page of Care Management.
// Copy is verbatim from the Figma. Links only point at routes that exist.
import heroMedia from '../assets/care-plan-management/hero-media.png';

export const cpHero = {
  currentPage: 'Care Plan Management',
  titleLines: ['The Salesforce care', 'plan software built', 'for how US clinics', 'deliver care'],
  titleAccent: [],
  description:
    'Turn every care plan from a static document into a living roadmap that your whole care team works from and your patients can feel.',
  // No test-drive route exists; the site's demo destination is used (see DESIGN-SYSTEM.md).
  primaryCta: { label: 'Take a test drive', to: '/request-demo', arrow: false },
  // No platform route exists; What Is Elixir is the existing platform overview.
  secondaryCta: { label: 'Explore the platform', to: '/why-elixir' },
  media: {
    src: heroMedia,
    alt: 'Care team reviewing a shared care plan on a large screen in a clinic workroom',
  },
};

export const cpPillars = [
  {
    title: 'Native to Salesforce',
    text: 'One platform, one patient record, zero duplicate systems or synchronizations.',
  },
  {
    title: 'HIPAA Compliant',
    text: 'Role-based access controls and enterprise audit trails protect every detail.',
  },
  {
    title: 'Multidisciplinary Routing',
    text: 'Place interventions at care plan, goal, or objective level with clear owners.',
  },
  {
    title: 'Measurable & Proved',
    text: 'Continuous outcome tracking against baselines and targets across all programs.',
  },
];

export const cpCustomizable = {
  title: 'Customizable care plans, shaped around every program you run',
  paragraphs: [
    "Great care isn't one-size-fits-all, and neither are Elixir care plans. Switch levels on or off to keep a wellness plan lean, or take a complex chronic care plan into full clinical depth.",
    'Every goal, objective, intervention, outcome and barrier is a reusable building block. Assemble them into templates for chronic care, behavioral health, post-discharge follow-up and more, then launch the right plan for each patient in seconds. Providers can craft their own too, turning your best clinical thinking into the standard across your organization.',
  ],
  tabs: ['Chronic care', 'Behavioral health', 'Post-discharge'],
  levels: [
    { label: 'Goals', tone: 'lime', on: true },
    { label: 'Objectives', tone: 'blue', on: true },
    { label: 'Interventions', tone: 'lavender', on: true },
    { label: 'Outcomes', tone: 'yellow', on: true },
    { label: 'Barriers', tone: 'stone', on: false },
  ],
};

export const cpGoals = {
  title: 'Patient-centered care plan goals with clear, achievable objectives',
  paragraphs: [
    'Lasting change happens one step at a time. Anchor every plan in goals that truly matter to the patient, then break them into focused, time-bound objectives your team and your patient can actually reach.',
    'Clear owners, due dates and live status on every step keep momentum high and make sure no part of the plan is left behind.',
  ],
  goal: { label: 'Goal', title: 'Improve BMI into a healthy range', meta: 'Obesity · In progress' },
  objectives: [
    { text: 'Lose 5% of body weight in 90 days', status: 'Due Oct 30', tone: 'lavender' },
    { text: 'Walk 30 minutes, five days a week', status: 'Due Sep 30', tone: 'lavender' },
    { text: 'Keep a daily food journal', status: 'Complete', tone: 'lime' },
  ],
};

export const cpInterventions = {
  title: 'Care plan interventions, placed exactly where the work belongs',
  paragraphs: [
    'Interventions are where a plan becomes care. Attach them to the care plan as a whole, to a single goal or to a specific objective, and put each one in the hands of the right member of your team.',
    'Everyone knows what to do, when to do it and why it matters, so coordinated care stops being an aspiration and becomes the everyday norm.',
  ],
  items: [
    { level: 'Care plan', tone: 'dark', title: 'Monthly care coordination call', owner: 'MG', ownerTone: 'purple' },
    { level: 'Goal', tone: 'lime', title: 'Medication adherence check-in', owner: 'DP', ownerTone: 'ink' },
    { level: 'Objective', tone: 'blue', title: 'Nutrition coaching session', owner: 'LR', ownerTone: 'lime' },
  ],
};

export const cpBarriers = {
  title: 'Care plan barriers informed by social determinants of health',
  paragraphs: [
    'Health is shaped long before a patient walks into the clinic. Elixir draws on the social determinants of health captured for each patient, from transportation and food access to housing and cost, and brings them into the plan as barriers on the care plan or on a specific goal.',
    'Your team sees the whole person, plans around real-world obstacles and connects patients with the support they need to succeed.',
  ],
  card: {
    title: 'Social determinants captured',
    rows: [
      { label: 'Transportation', status: 'At risk', tone: 'yellow' },
      { label: 'Food access', status: 'At risk', tone: 'yellow' },
      { label: 'Housing', status: 'Stable', tone: 'lime' },
    ],
    barriers: [
      { label: 'Care plan barrier', text: 'No reliable transportation to appointments' },
      { label: 'Goal barrier: Improve BMI', text: 'Limited access to affordable fresh food', nested: true },
    ],
  },
};

export const cpOutcomes = {
  title: 'Care plan outcomes you can measure, describe and prove',
  paragraphs: [
    "Progress deserves more than a checkbox. Track measurable outcomes against a baseline and target when there's a number to move, and descriptive outcomes when the story is best told in words.",
    "Capture outcomes for the care plan, every goal and every intervention, with a complete history that shows what's working, surfaces what isn't and demonstrates your impact to patients, payers and quality programs.",
  ],
  measures: [
    { label: 'Care plan: BMI', range: '30 to 24', progress: 50, tone: 'lime' },
    { label: 'Goal: A1c', range: '8.9% to 7.0%', progress: 58, tone: 'blue' },
  ],
  note: {
    label: 'Intervention: Nutrition coaching',
    quote: '"Patient is cooking at home most nights and reports more energy during the day."',
  },
};

export const cpStatus = {
  title: 'Care plan status tracking that shows progress at a glance',
  paragraphs: [
    'Always know exactly where every plan stands. Care plans move from draft to review, approval, active care and completion, giving leaders a real-time view across every patient and program.',
    "Every goal, objective and intervention reports its own status too, so care teams can see what's moving, what's stalled and where to step in next.",
  ],
  steps: ['Draft', 'In review', 'Approved', 'Active', 'Completed'],
  // Draft–Approved are done, Active is current, Completed is still to come.
  current: 3,
  rows: [
    { level: 'Goal', tone: 'lime', text: 'Improve BMI', status: 'In progress', statusTone: 'blue' },
    { level: 'Objective', tone: 'blue', text: 'Keep a daily food journal', status: 'Complete', statusTone: 'lime' },
    { level: 'Objective', tone: 'blue', text: 'Walk 30 minutes, five days a week', status: 'In progress', statusTone: 'blue' },
    { level: 'Intervention', tone: 'lavender', text: 'Nutrition coaching session', status: 'Pending', statusTone: 'yellow' },
  ],
};

export const cpApprovals = {
  title: 'Care plan approvals and e-signatures, audit-ready from day one',
  paragraphs: [
    'Bring the right people into every decision. Built-in sign and approve lets providers, clinical supervisors, patients and guardians review and sign care plans electronically, wherever they are.',
    'Plans can be routed for supervisor review before they go live, and every signature is stamped with its date and time. The result is a complete, compliant record, without chasing paperwork.',
  ],
  card: {
    title: 'Sign and approve',
    rows: [
      { role: 'Provider', status: 'Signed Sep 12, 9:41 AM', tone: 'lime' },
      { role: 'Clinical supervisor', status: 'Approved Sep 12, 2:15 PM', tone: 'lime' },
      { role: 'Patient', status: 'Signed Sep 13, 11:03 AM', tone: 'lime' },
      { role: 'Guardian', status: 'Awaiting signature', tone: 'yellow' },
    ],
  },
};

export const cpWorkflows = {
  title: 'Care plan workflows configured around your practice',
  paragraphs: [
    'Your processes are part of what makes your care exceptional. Elixir adapts to them, not the other way around. Route plans for supervisor approval, schedule periodic reviews, alert the care team when statuses change and create follow-up tasks the moment a barrier appears or an outcome slips.',
    'Because Elixir is built on Salesforce, your workflows evolve as quickly as your programs do, without waiting on a vendor roadmap.',
  ],
  rules: [
    { when: 'A care plan is submitted for review', then: 'Route to the clinical supervisor for approval' },
    { when: 'A barrier is added to a goal', then: 'Create a follow-up task for the care manager' },
    { when: 'A care plan reaches 90 days', then: 'Schedule a care plan review' },
  ],
};

export const cpFeatures = {
  title: 'Care plan software features for US healthcare providers',
  description:
    'Every capability your facility needs to plan, coordinate, approve and measure care, unified in a single Salesforce-native solution.',
  items: [
    { title: 'Configurable levels', text: 'Keep plans lean or go deep, program by program.' },
    {
      title: 'Templates from components',
      text: 'Build unlimited templates from reusable building blocks, or let providers design their own.',
    },
    { title: 'Goals and objectives', text: 'Turn patient-centered goals into clear, achievable steps.' },
    {
      title: 'Interventions at every level',
      text: 'Place work on the care plan, a goal or an objective, wherever it belongs.',
    },
    { title: 'Care team assignment', text: 'Give every task a clear owner across your multidisciplinary team.' },
    {
      title: 'Linked to patient problems',
      text: "Ground every part of the plan in the patient's problems and diagnoses.",
    },
    {
      title: 'SDOH-informed barriers',
      text: 'Bring social determinants of health into the plan at care plan or goal level.',
    },
    {
      title: 'Measurable and descriptive outcomes',
      text: 'Prove progress with numbers and narrative, backed by full history.',
    },
    {
      title: 'Status tracking',
      text: "See every plan, goal, objective and intervention's progress at a glance.",
    },
    {
      title: 'Approvals and e-signatures',
      text: 'Route plans for review and capture provider, supervisor, patient and guardian sign-off.',
    },
    { title: 'Configurable workflows', text: 'Automate approvals, reviews, alerts and tasks around your practice.' },
    {
      title: 'Collaboration and reporting',
      text: 'Keep the team aligned with Salesforce feeds and make results visible with live dashboards.',
    },
  ],
};

export const cpPlatform = {
  title: 'Built on Salesforce, ready for US care teams',
  description:
    'Elixir runs natively inside Salesforce, so care plans live right on the patient record, protected by enterprise-grade security and connected to everything your team already relies on.',
  items: [
    { title: 'Salesforce native', text: 'One platform, one patient record, zero duplicate systems.' },
    { title: 'HIPAA compliant', text: 'Role-based access and a full audit trail protect every patient detail.' },
    { title: 'Care from anywhere', text: 'Desktop, tablet or mobile, the plan goes wherever your team does.' },
    { title: 'Built to scale', text: 'From a single clinic to a multi-site network, without re-platforming.' },
  ],
};

export const cpSettings = {
  title: 'Care plan management software for every US care setting',
  description:
    'Whether you run a single practice or a multi-site network, Elixir flexes to the way you deliver care.',
  // Labels only in the frame — none is drawn as a link.
  items: [
    'Primary care',
    'Chronic care management',
    'Behavioral health',
    'Home health',
    'Long-term care',
    'Value-based care',
  ],
};

export const cpCtaBand = {
  title: 'Give your care team a care plan they will actually use',
  description: 'See Elixir care plans running on Salesforce, tailored to your programs, in a guided test drive.',
  cta: { label: 'Take a test drive', to: '/request-demo' },
};
