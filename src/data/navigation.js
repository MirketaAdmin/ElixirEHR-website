// Header navigation: one tree shared by the desktop mega menu and the mobile accordion.
// The hierarchy, labels and order follow the approved "ElixirEHR Website Architecture" sheet
// (struck-through entries are left out); routes are the approved SEO slugs (data/seo.js).
//
// Each item: { label, to?, plannedPath?, children? } — up to four levels deep.
//   to           an existing route in App.jsx; only these are rendered as links.
//   plannedPath  the approved slug of a page that is not built yet. It is kept for reference and
//                is NOT linked (the router would show the "not available yet" page); move it to `to` once the page
//                exists.
// The desktop header lays these groups out in megaPanels (below); the mobile drawer and the site
// search use the tree as is. Home is the logo link and is not part of it.

export const mainNav = [
  {
    label: 'Products',
    children: [
      { label: 'Electronic Health Record (EHR)', to: '/ehr-software/' },
      {
        label: 'Revenue Cycle Management',
        to: '/rcm-software/',
        children: [
          { label: 'Eligibility Verification', to: '/insurance-eligibility-verification/' },
          { label: 'Electronic Prior Authorization', to: '/electronic-prior-authorization/' },
          { label: 'Denial Management', to: '/denial-management-software/' },
          { label: 'Professional and Institutional Claim Preparation', to: '/claims-processing-software/' },
        ],
      },
      {
        label: 'Electronic Visit Verification',
        to: '/evv-software/',
        children: [
          { label: 'Caregiver Mobile App', to: '/caregiver-mobile-app/' },
          { label: 'EVV for Salesforce Field Service', to: '/salesforce-evv/' },
        ],
      },
      {
        label: 'Patient Portal',
        to: '/patient-portal-software/',
        children: [{ label: 'Patient No-Show Prediction', to: '/patient-no-show-software/' }],
      },
      { label: 'Contact Center', to: '/healthcare-contact-center/' },
    ],
  },
  {
    // "(AI Offerings)" in the sheet, renamed to AI Ecosystem as it instructs.
    label: 'AI Ecosystem',
    children: [
      {
        label: 'KratuAI',
        to: '/healthcare-ai-platform/',
        children: [
          { label: 'Visit Prep', to: '/ai-pre-visit-preparation/' },
          { label: 'Elixir Co-Pilot (Clinical Assistant)', to: '/ai-clinical-documentation/' },
          { label: 'A/R Agent', to: '/ai-accounts-receivable-management/' },
          { label: 'Payor Policy Intelligence', to: '/payer-policy-intelligence/' },
        ],
      },
      { label: 'Responsible AI', to: '/responsible-ai-in-healthcare/' },
    ],
  },
  {
    label: 'Solutions',
    children: [
      {
        label: 'Behavioral Health',
        to: '/behavioral-health-ehr/',
        children: [
          { label: 'Mental Health', to: '/mental-health-ehr/' },
          { label: 'Substance Use Disorder', to: '/addiction-treatment-emr/' },
        ],
      },
      { label: 'Value-Based Care', to: '/value-based-care-software/' },
      { label: 'Care Coordination', to: '/care-coordination-software/' },
      {
        label: 'More Specialties',
        children: [
          { label: 'Outpatient Clinics', to: '/ambulatory-ehr/' },
          { label: 'Small Practices', to: '/small-practice-ehr/' },
          { label: 'Telehealth', to: '/telehealth-ehr/' },
          { label: 'Aesthetic Practices', to: '/aesthetic-practice-ehr/' },
          { label: 'Student Health', to: '/student-health-records-software/' },
          { label: 'Treatment Center Solutions', to: '/treatment-center-software/' },
        ],
      },
      {
        label: 'Care Management',
        to: '/care-management-software/',
        children: [
          { label: 'Care Plan Management', to: '/care-plan-software/' },
          { label: 'Social Determinants of Health', to: '/sdoh-software/' },
        ],
      },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Success Stories', to: '/success-stories/' },
      {
        // "Insights (blog)" in the sheet. Its first entry is the existing blog list; the topic
        // entries are not linked yet (the blog has no categories by these topics).
        label: 'Insights',
        to: '/insights/',
        children: [
          { label: 'All Blogs', to: '/blog/' },
          { label: 'Behavioral Health' },
          { label: 'Home Care & EVV' },
          { label: 'Revenue Cycle' },
          { label: 'Care Management' },
          { label: 'Interoperability' },
          { label: 'Healthcare AI' },
        ],
      },
      {
        label: 'Healthcare Regulations',
        plannedPath: '/healthcare-regulations/',
        children: [
          { label: 'EVV Requirements by State', plannedPath: '/evv-requirements-by-state/' },
          { label: 'CMS Interoperability & Prior Authorization Rule', plannedPath: '/cms-interoperability-rule/' },
          { label: 'Information Blocking', plannedPath: '/information-blocking-rule/' },
          { label: '42 CFR Part 2', plannedPath: '/42-cfr-part-2/' },
        ],
      },
      { label: 'Guides & E-books', to: '/guides-ebooks/' },
      { label: 'Case Studies', to: '/case-studies/' },
      { label: 'Webinars & Podcasts', to: '/webinars-podcasts/' },
      // Listed twice in the sheet; shown once.
      { label: 'Release Notes', to: '/release-notes/' },
      { label: 'Benchmark Surveys', to: '/benchmark-surveys/' },
      // The newsletter sign-up section on the Blog page (the /newsletter page is not built yet).
      { label: 'Newsletter', to: '/blog/#newsletter' },
      { label: 'Feature Videos', to: '/feature-videos/' },
    ],
  },
  {
    label: 'Company',
    children: [
      { label: 'About Us', to: '/about-us/' },
      { label: 'Why Elixir', to: '/why-elixir/' },
      { label: 'Press', to: '/press-releases/' },
      { label: 'Referral Program', to: '/referral-program/' },
      { label: 'Careers', to: '/careers/' },
      { label: 'Contact Us', to: '/contact-us/' },
    ],
  },
  {
    label: 'Compliance & Security',
    children: [
      { label: 'HIPAA Compliance Center', to: '/hipaa-compliant-ehr/' },
      // The ONC Certification parent entry was removed from the menu; its pages are listed directly.
      { label: 'ONC MFA Use Cases', to: '/onc-certification/onc-mfa-use-cases/' },
      { label: 'Elixir Certified Module', to: '/onc-certification/elixir-certified-module/' },
      { label: 'Patient EHI Export', to: '/onc-certification/patient-ehi-export/' },
      { label: 'NAATP', to: '/naatp/' },
      { label: 'Salesforce Security Layer', plannedPath: '/salesforce-data-security/' },
      {
        label: 'Interoperability (FHIR/HL7)',
        plannedPath: '/healthcare-interoperability/',
        children: [{ label: 'FHIR API Documentation', plannedPath: '/fhir-api-documentation/' }],
      },
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
        link: { label: 'Learn More', to: '/responsible-ai-in-healthcare/' },
      },
      {
        type: 'rows',
        span: 5,
        divider: true,
        section: 'KratuAI',
        titleHeading: true,
        icon: 'sparkle',
        tone: 'lime',
        intro: 'Enterprise decision engines for revenue & prep.',
      },
      { type: 'cards', span: 3, items: ['Responsible AI'] },
    ],
  },
  {
    label: 'Solutions',
    groups: ['Solutions'],
    columns: [
      {
        type: 'rows',
        span: 4,
        divider: true,
        heading: 'Care Programs',
        tone: 'lime',
        plain: true,
        items: ['Behavioral Health', 'Value-Based Care', 'Care Coordination'],
      },
      {
        type: 'tiles',
        span: 8,
        section: 'More Specialties',
        tone: 'lavender',
        sub: { section: 'Care Management', tone: 'yellow' },
      },
    ],
  },
  {
    label: 'Resources',
    groups: ['Resources'],
    columns: [
      {
        type: 'links',
        span: 4,
        divider: true,
        heading: 'Library & Media',
        icon: 'pages',
        tone: 'lavender',
        items: [
          'Success Stories',
          'Guides & E-books',
          'Case Studies',
          'Webinars & Podcasts',
          'Release Notes',
          'Benchmark Surveys',
          'Newsletter',
          'Feature Videos',
        ],
      },
      { type: 'links', span: 4, divider: true, section: 'Insights', icon: 'lightbulb', tone: 'lime' },
      { type: 'links', span: 4, section: 'Healthcare Regulations', icon: 'gavel', tone: 'yellow' },
    ],
  },
  {
    label: 'Company',
    // The reference puts the compliance layer in the Company panel (five header triggers).
    groups: ['Company', 'Compliance & Security'],
    columns: [
      {
        type: 'links',
        span: 4,
        divider: true,
        heading: 'About Elixir',
        tone: 'lime',
        items: ['About Us', 'Why Elixir', 'Press', 'Referral Program', 'Careers'],
        cta: {
          title: 'Contact & Demos',
          text: 'Schedule a custom walkthrough tailored for your billing or clinical team.',
          item: 'Contact Us',
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
          // Eight entries: two equal columns of four.
          'HIPAA Compliance Center',
          'ONC MFA Use Cases',
          'Elixir Certified Module',
          'Patient EHI Export',
          'NAATP',
          'Salesforce Security Layer',
          'Interoperability (FHIR/HL7)',
          'FHIR API Documentation',
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
  'Visit Prep': 'SMS-based no-app agenda & confirmation assistant.',
  'Elixir Co-Pilot (Clinical Assistant)': 'Real-time ambient assistant for provider encounters.',
  'A/R Agent': 'Financial risk scoring & step-by-step denial guidance.',
  'Payor Policy Intelligence': 'Pre-submission claim evaluation against rules.',
  'Responsible AI': 'Governance, bias auditing, and HIPAA safety.',
  'Value-Based Care': 'Risk-sharing & quality metric tracking',
  'Care Coordination': 'Cross-specialty communication',
  'HIPAA Compliance Center': 'BAA agreements & encrypted data store',
  'ONC MFA Use Cases': 'Multi-Factor Authentication workflows',
  'Elixir Certified Module': 'Certified health IT product details',
  'Patient EHI Export': 'Single & bulk electronic health info export',
  'Salesforce Security Layer': 'Enterprise field service & CRM security',
  'Interoperability (FHIR/HL7)': 'FHIR R4 API Documentation & endpoints',
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

export const demoCta = { label: 'Request a Demo', to: '/request-demo/' };

/** True when `pathname` is the route of `item` or of any of its descendants. */
export function navContainsPath(item, pathname) {
  if (item.to && item.to === pathname) return true;
  return (item.children ?? []).some((child) => navContainsPath(child, pathname));
}
