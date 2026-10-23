// Header navigation: one tree shared by the desktop mega menu and the mobile accordion.
//
// Each item: { label, to?, plannedPath?, children? } — up to four levels deep.
//   to           an existing route in App.jsx; only these are rendered as links.
//   plannedPath  the URL supplied for a page that is not built yet. It is kept for reference and
//                is NOT linked (the router would show the "not available yet" page); move it to `to` once the page
//                exists.
// Top-level groups take `layout`: 'mega' (full-width panel of columns) or 'dropdown' (a short
// list under the trigger). Home is the logo link and is intentionally not part of this tree.

export const mainNav = [
  {
    label: 'Products',
    layout: 'mega',
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
    layout: 'mega',
    children: [
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
    layout: 'mega',
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
    ],
  },
  {
    label: 'Resources',
    layout: 'mega',
    children: [
      // Supplied as /client-success-stories/; the page was built at /success-stories.
      { label: 'Success Stories', to: '/success-stories' },
      {
        label: 'Insights',
        to: '/insights',
        children: [
          { label: 'Insights: Behavioral Health' },
          { label: 'Insights: Home Care & EVV' },
          { label: 'Insights: Revenue Cycle' },
          { label: 'Insights: Care Management' },
          { label: 'Insights: Interoperability' },
          { label: 'Insights: Healthcare AI' },
        ],
      },
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
      { label: 'Webinars & Events', to: '/insights/webinars' },
      // Listed twice in the supplied structure; shown once. The nav brief gave /category/… URLs;
      // the Insights brief built these pages under /insights/….
      { label: 'Release Notes', to: '/insights/release-notes' },
      { label: 'Benchmark Surveys', to: '/insights/benchmark-surveys' },
      {
        label: 'Support & Learning',
        children: [
          { label: 'Help Center' },
          { label: 'Product Documentation' },
          { label: 'Training Resources' },
        ],
      },
    ],
  },
  {
    label: 'Company',
    layout: 'dropdown',
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
    layout: 'mega',
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

export const demoCta = { label: 'Request a Demo', to: '/request-demo' };

/** True when `pathname` is the route of `item` or of any of its descendants. */
export function navContainsPath(item, pathname) {
  if (item.to && item.to === pathname) return true;
  return (item.children ?? []).some((child) => navContainsPath(child, pathname));
}
