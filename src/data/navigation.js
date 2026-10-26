// Header navigation: one tree shared by the desktop mega menu and the mobile accordion.
//
// Each item: { label, to?, plannedPath?, children? } — up to four levels deep.
//   to           an existing route in App.jsx; only these are rendered as links.
//   plannedPath  the URL supplied for a page that is not built yet. It is kept for reference and
//                is NOT linked (the router would show the "not available yet" page); move it to `to` once the page
//                exists.
// The desktop header lays these groups out in megaPanels (below); the mobile drawer and the site
// search use the tree as is. Home is the logo link and is not part of it.

export const mainNav = [
  {
    label: 'Products',
    children: [
      // Supplied as /ehr/; the existing EHR page lives at /electronic-health-record.
      { label: 'Electronic Health Record (EHR)', to: '/electronic-health-record' },
      {
        label: 'Revenue Cycle Management',
        to: '/revenue-cycle-management',
        children: [
          { label: 'Eligibility Verification', to: '/eligibility-verification' },
          { label: 'Electronic Prior Authorization', to: '/revenue-cycle-management/electronic-prior-authorization' },
          { label: 'Denial Management', to: '/denial-management' },
          {
            label: 'Professional and Institutional Claim Preparation',
            to: '/professional-and-institutional-claim-preparation',
          },
        ],
      },
      {
        label: 'Electronic Visit Verification',
        to: '/electronic-visit-verification',
        children: [
          { label: 'Caregiver Mobile App', to: '/caregiver-mobile-app' },
          { label: 'EVV for Salesforce Field Service', to: '/evv-for-salesforce-field-service' },
        ],
      },
      {
        label: 'Patient Portal',
        // Supplied as /patient-portal/; the route is /patient-portal (the trailing-slash form also works).
        to: '/patient-portal',
        children: [
          {
            label: 'Patient No-Show Prediction',
            to: '/patient-no-show-prediction',
            children: [{ label: 'No-Show ROI Calculator', to: '/no-show-roi-calculator' }],
          },
        ],
      },
      { label: 'Contact Center', to: '/contact-center' },
    ],
  },
  {
    label: 'AI Ecosystem',
    children: [
      { label: 'Elixir Co-Pilot (Clinical Assistant)', to: '/kratu-ai/elixir-co-pilot-clinical-assistant' },
      { label: 'AI Medical Scribe' },
      { label: 'Agentic AI Healthcare' },
      { label: 'MCP in EHR' },
      {
        label: 'KratuAI',
        to: '/kratu-ai',
        children: [
          { label: 'Visit Prep', to: '/kratu-ai/visit-prep' },
          { label: 'Elixir Co-Pilot (Clinical Assistant)', to: '/kratu-ai/elixir-co-pilot-clinical-assistant' },
          { label: 'A/R Agent', to: '/kratu-ai/ar-agent' },
          { label: 'Payor Policy Intelligence', to: '/kratu-ai/payor-policy-intelligence' },
        ],
      },
      { label: 'Responsible AI', to: '/responsible-ai' },
    ],
  },
  {
    label: 'Solutions',
    children: [
      {
        label: 'Behavioral Health',
        // Independent pages on flat routes (no parent route).
        to: '/behavioral-health',
        children: [
          { label: 'Mental Health', to: '/behavioral-health/mental-health' },
          { label: 'Substance Use Disorder', to: '/behavioral-health/substance-use-disorder' },
        ],
      },
      { label: 'Home & Community-Based Care' },
      { label: 'Value-Based Care' },
      { label: 'Care Coordination', to: '/care-coordination' },
      {
        label: 'More Specialties',
        children: [
          { label: 'Outpatient Clinics', to: '/more-specialties/outpatient-clinics' },
          { label: 'Small Practices', to: '/more-specialties/small-practices' },
          { label: 'Telehealth', to: '/more-specialties/telehealth' },
          { label: 'Aesthetic Practices', to: '/more-specialties/aesthetic-practices' },
          { label: 'Medical Suppliers' },
          { label: 'Student Health', to: '/more-specialties/student-health' },
          { label: 'Treatment Center Solutions', to: '/treatment-center-solutions' },
        ],
      },
      {
        label: 'Care Management',
        to: '/care-management',
        children: [
          { label: 'Care Plan Management', to: '/care-management/care-plan-management' },
          { label: 'Social Determinants of Health', to: '/social-determinants-of-health' },
        ],
      },
      {
        label: 'Solutions by Challenges',
        children: [
          { label: 'Workflow Efficiencies' },
          { label: 'Profitability' },
          { label: 'Reporting' },
          { label: 'Healthcare Cybersecurity' },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    children: [
      // Supplied as /client-success-stories/; the page was built at /success-stories.
      { label: 'Success Stories', to: '/success-stories' },
      { label: 'Insights', to: '/insights' },
      {
        label: 'Healthcare Regulations',
        children: [
          { label: 'EVV Requirements by State' },
          { label: 'CMS Interoperability & Prior Authorization Rule' },
          { label: 'Information Blocking' },
          { label: '42 CFR Part 2' },
        ],
      },
      { label: 'Guides & E-books', to: '/insights/e-book' },
      { label: 'Case Studies' },
      { label: 'Webinars & Podcasts', to: '/insights/webinars' },
      // Listed twice in the supplied structure; shown once. The nav brief gave /category/… URLs;
      // the Insights brief built these pages under /insights/….
      { label: 'Release Notes', to: '/insights/release-notes' },
      { label: 'ROI Calculator', to: '/no-show-roi-calculator' },
      { label: 'Benchmark Surveys', to: '/insights/benchmark-surveys' },
      // The newsletter sign-up section on the Blog page.
      { label: 'Newsletter', to: '/blog#newsletter' },
      { label: 'Illustrations', to: '/insights/illustrations' },
      { label: 'Feature Videos', to: '/insights/videos' },
      {
        label: 'Support & Learning',
        children: [
          { label: 'Help Center' },
          { label: 'Product Documentation' },
        ],
      },
    ],
  },
  {
    label: 'Company',
    children: [
      { label: 'About Us', to: '/about-us' },
      { label: 'What is Elixir', to: '/what-is-elixir' },
      { label: 'Why Elixir', to: '/why-elixir' },
      { label: 'Press', to: '/press-releases' },
      { label: 'Referral Program', to: '/referral-program' },
      { label: 'Careers', to: '/career' },
      { label: 'Contact Us', to: '/contact-us' },
      // Same destination as the header and footer "Request a Demo" buttons.
      { label: 'Request a Demo', to: '/request-demo' },
    ],
  },
  {
    label: 'Compliance & Security',
    children: [
      { label: 'HIPAA Compliance Center' },
      {
        label: 'ONC Certification',
        children: [
          { label: 'ONC MFA Use Cases', to: '/onc-certification/onc-mfa-use-cases' },
          { label: 'Elixir Certified Module', to: '/onc-certification/elixir-certified-module' },
          { label: 'Patient EHI Export' },
        ],
      },
      { label: 'NAATP' },
      { label: 'Salesforce Security Layer' },
      {
        label: 'Interoperability (FHIR/HL7)',
        children: [{ label: 'FHIR API Documentation' }],
      },
      { label: 'SOC 2 Type II' },
    ],
  },
];

// Desktop mega menu (reference navbar): one full-width panel per top-level trigger, each laid out on
// a 12-column grid. Columns name the entries above by label (looked up in the panel's `groups`),
// so routes stay defined once, in mainNav. Every entry of a panel's groups appears in its columns.
// Column types: featured (intro + icon cards), sections (one list per section), banner, cards,
// rows (title + description; `filled` for the boxed style), links (plain list, optional `cta`
// card), tiles (two-column tiles + an inline `sub` section) and grid (two-column cards).
// `tone` picks the brand accent of a heading or icon: lime, yellow or lavender.
export const megaPanels = [
  {
    label: 'Products',
    groups: ['Products'],
    columns: [
      {
        type: 'featured',
        span: 3,
        divider: true,
        heading: 'Core Products',
        icon: 'widgets',
        tone: 'lime',
        intro: 'Integrated cloud platform powering clinical care, revenue workflows, and engagement.',
        items: [
          { label: 'Electronic Health Record (EHR)', icon: 'medical', tone: 'lime' },
          { label: 'Contact Center', icon: 'headset', tone: 'lavender' },
        ],
      },
      {
        type: 'sections',
        span: 9,
        sections: [
          { label: 'Revenue Cycle Management', icon: 'money', tone: 'lime' },
          { label: 'Electronic Visit Verification', icon: 'place', tone: 'yellow' },
          { label: 'Patient Portal', icon: 'person', tone: 'lavender' },
        ],
      },
    ],
  },
  {
    label: 'AI Ecosystem',
    groups: ['AI Ecosystem'],
    columns: [
      {
        type: 'banner',
        span: 4,
        badge: 'Next-Gen Intelligence',
        icon: 'lightbulb',
        title: 'Healthcare AI Ecosystem',
        text: 'Human-in-the-loop governance seamlessly integrated into clinical charting and revenue workflows to eliminate manual burden.',
        note: 'Powered by Kratu AI Architecture',
        link: { label: 'Learn More', to: '/responsible-ai' },
      },
      {
        type: 'cards',
        span: 4,
        divider: true,
        section: 'Elixir Co-Pilot (Clinical Assistant)',
        titleHeading: true,
        icon: 'medical',
        tone: 'lavender',
        intro: 'Real-time ambient assistant for provider encounters.',
        items: ['AI Medical Scribe', 'Agentic AI Healthcare', 'MCP in EHR'],
      },
      {
        type: 'rows',
        span: 4,
        section: 'KratuAI',
        titleHeading: true,
        icon: 'sparkle',
        tone: 'lime',
        intro: 'Enterprise decision engines for revenue & prep.',
        items: ['Visit Prep', 'A/R Agent', 'Payor Policy Intelligence', 'Responsible AI'],
      },
    ],
  },
  {
    label: 'Solutions',
    groups: ['Solutions'],
    columns: [
      {
        type: 'rows',
        span: 3,
        divider: true,
        heading: 'Care Programs',
        tone: 'lime',
        plain: true,
        items: ['Behavioral Health', 'Home & Community-Based Care', 'Value-Based Care', 'Care Coordination'],
      },
      {
        type: 'tiles',
        span: 5,
        divider: true,
        section: 'More Specialties',
        tone: 'lavender',
        sub: { section: 'Care Management', tone: 'yellow' },
      },
      {
        type: 'rows',
        span: 4,
        section: 'Solutions by Challenges',
        tone: 'lime',
        filled: true,
        icons: {
          'Workflow Efficiencies': 'bolt',
          Profitability: 'trendingUp',
          Reporting: 'pieChart',
          'Healthcare Cybersecurity': 'shield',
        },
      },
    ],
  },
  {
    label: 'Resources',
    groups: ['Resources'],
    columns: [
      { type: 'links', span: 4, divider: true, section: 'Healthcare Regulations', icon: 'gavel', tone: 'yellow' },
      {
        type: 'links',
        span: 4,
        divider: true,
        heading: 'Library & Media',
        icon: 'pages',
        tone: 'lavender',
        items: [
          'Insights',
          'Success Stories',
          'Guides & E-books',
          'Case Studies',
          'Webinars & Podcasts',
          'Release Notes',
          'ROI Calculator',
          'Benchmark Surveys',
          'Newsletter',
          'Illustrations',
          'Feature Videos',
        ],
      },
      { type: 'rows', span: 4, section: 'Support & Learning', icon: 'school', tone: 'yellow', filled: true },
    ],
  },
  {
    label: 'Company',
    // The reference puts the compliance layer in the Company panel.
    groups: ['Company', 'Compliance & Security'],
    columns: [
      {
        type: 'links',
        span: 4,
        divider: true,
        heading: 'About Elixir',
        tone: 'lime',
        items: ['About Us', 'What is Elixir', 'Why Elixir', 'Press', 'Referral Program', 'Careers', 'Contact Us'],
        cta: {
          title: 'Contact & Demos',
          text: 'Schedule a custom walkthrough tailored for your billing or clinical team.',
          item: 'Request a Demo',
        },
      },
      {
        type: 'grid',
        span: 8,
        heading: 'Compliance & Security Layer',
        icon: 'shieldCheck',
        tone: 'lime',
        note: 'Enterprise Standard Protections',
        items: [
          'HIPAA Compliance Center',
          'ONC Certification',
          'ONC MFA Use Cases',
          'Elixir Certified Module',
          'Patient EHI Export',
          'NAATP',
          'Salesforce Security Layer',
          'Interoperability (FHIR/HL7)',
          'FHIR API Documentation',
          'SOC 2 Type II',
        ],
      },
    ],
  },
];

// One-line descriptions shown under menu entries, taken from the supplied reference navbar.
// Entries without one show their label only.
export const navDescriptions = {
  'Electronic Health Record (EHR)': 'Clinical workflows & documentation',
  'Contact Center': 'Unified patient communication',
  'AI Medical Scribe': 'Transcribes visits, formats SOAP notes & recommends diagnoses.',
  'Agentic AI Healthcare': 'Autonomous task execution with clinical guardrails.',
  'MCP in EHR': 'Model Context Protocol for synchronized clinical context.',
  'Visit Prep': 'SMS-based no-app agenda & confirmation assistant.',
  'A/R Agent': 'Financial risk scoring & step-by-step denial guidance.',
  'Payor Policy Intelligence': 'Pre-submission claim evaluation against rules.',
  'Responsible AI': 'Governance, bias auditing, and HIPAA safety.',
  'Home & Community-Based Care': 'EVV & caregiver field dispatch',
  'Value-Based Care': 'Risk-sharing & quality metric tracking',
  'Care Coordination': 'Cross-specialty communication',
  'Workflow Efficiencies': 'Eliminate repetitive administrative tasks',
  Profitability: 'Reduce claim denial cycles & clean claims',
  Reporting: 'Real-time operational dashboards',
  'Healthcare Cybersecurity': 'End-to-end HIPAA compliance protection',
  'Help Center': 'Search knowledge base & FAQs',
  'Product Documentation': 'Technical API specs & user guides',
  'HIPAA Compliance Center': 'BAA agreements & encrypted data store',
  'ONC Certification': '2015 Edition Cures Update Criteria',
  'ONC MFA Use Cases': 'Multi-Factor Authentication workflows',
  'Elixir Certified Module': 'Certified health IT product details',
  'Patient EHI Export': 'Single & bulk electronic health info export',
  'Salesforce Security Layer': 'Enterprise field service & CRM security',
  'Interoperability (FHIR/HL7)': 'FHIR R4 API Documentation & endpoints',
  'SOC 2 Type II': 'Annual security & privacy audit reports',
};

// Icons and accents of the top-level groups in the mobile drawer.
export const groupIcons = {
  Products: { icon: 'widgets', tone: 'lime' },
  'AI Ecosystem': { icon: 'sparkle', tone: 'lavender' },
  Solutions: { icon: 'heart', tone: 'lime' },
  Resources: { icon: 'pages', tone: 'yellow' },
  Company: { icon: 'business', tone: 'lime' },
  'Compliance & Security': { icon: 'shieldCheck', tone: 'lime' },
};

/** The entry labelled `label` anywhere under `groups` (depth-first, so a top-level entry wins). */
export function findNavItem(groups, label) {
  const search = (items) => {
    for (const item of items) {
      if (item.label === label) return item;
      const found = item.children && search(item.children);
      if (found) return found;
    }
    return null;
  };
  return search(mainNav.filter((group) => groups.includes(group.label)));
}

export const demoCta = { label: 'Request a Demo', to: '/request-demo' };

/** True when `pathname` is the route of `item` or of any of its descendants. */
export function navContainsPath(item, pathname) {
  if (item.to && item.to === pathname) return true;
  return (item.children ?? []).some((child) => navContainsPath(child, pathname));
}
