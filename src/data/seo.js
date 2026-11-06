// Page-level SEO from the approved "ElixirEHR Website Architecture" SEO sheet: meta title and meta
// description per page, keyed by the page's approved slug (routes in App.jsx use the same path
// without the trailing slash). Copy is verbatim from the sheet; do not rewrite it here.
// Only pages that exist are listed. Pages the sheet covers that are not built yet (Healthcare
// Regulations and its children, ONC Certification, SOC 2 Type II) are added
// when they are built.
export const pageSeo = {
  '/ehr-software': {
    title: 'EHR Software That Connects Your Practice | ElixirEHR',
    description:
      'Bring patient charts, appointments, billing and care workflows into one EHR experience. See how ElixirEHR can fit the way your practice works.',
  },
  '/rcm-software': {
    title: 'Revenue Cycle Management Software | ElixirEHR',
    description:
      'From insurance verification to payment follow-up, bring clarity to each stage of the revenue cycle with connected billing workflows.',
  },
  '/insurance-eligibility-verification': {
    title: 'Insurance Eligibility Verification | ElixirEHR',
    description:
      'Check coverage before appointments, spot eligibility issues sooner and help front-desk teams prepare for fewer billing surprises.',
  },
  '/electronic-prior-authorization': {
    title: 'Electronic Prior Authorization Tools | ElixirEHR',
    description:
      'Keep authorization requests, documentation and payer responses organized so care teams can follow each request from start to decision.',
  },
  '/denial-management-software': {
    title: 'Denial Management Software for Claims | ElixirEHR',
    description:
      'Find why claims were denied, prioritize next steps and track appeals without losing sight of repeat issues affecting reimbursements.',
  },
  '/claims-processing-software': {
    title: 'Healthcare Claims Processing Software | ElixirEHR',
    description:
      'Move claims from preparation through submission and follow-up with clearer status tracking and a more organized billing workflow.',
  },
  '/evv-software': {
    title: 'Electronic Visit Verification Software | ElixirEHR',
    description:
      'Capture the visit details home care teams need, review exceptions and manage EVV records in a workflow built for accountability.',
  },
  '/caregiver-mobile-app': {
    title: 'Caregiver Mobile App for Visits | ElixirEHR',
    description:
      'Give caregivers a practical way to review visit information, complete documentation and stay connected while delivering care in the field.',
  },
  '/salesforce-evv': {
    title: 'Salesforce EVV for Connected Home Care | ElixirEHR',
    description:
      'See how an EVV workflow on Salesforce can connect visit records with care teams, service coordination and operational reporting.',
  },
  '/patient-portal-software': {
    title: 'Patient Portal Software for Easy Access | ElixirEHR',
    description:
      'Help patients handle everyday tasks online, from completing forms to viewing appointment information and communicating with their care team',
  },
  '/patient-no-show-software': {
    title: 'Patient No-Show Software for Scheduling | ElixirEHR',
    description:
      'See how missed-visit tracking, appointment reminders and follow-up workflows can help practices address gaps in their schedules',
  },
  '/no-show-cost-calculator': {
    title: 'No-Show Cost Calculator | Estimate Lost Revenue',
    description:
      'How much do missed appointments cost your clinic? Use a no-show cost calculator to estimate the revenue impact from your own numbers.',
  },
  '/healthcare-contact-center': {
    title: 'Healthcare Contact Center Software | ElixirEHR',
    description:
      'Bring patient calls and service requests into a coordinated workflow for appointment questions, follow-ups and everyday support.',
  },
  '/healthcare-ai-platform': {
    title: 'Healthcare AI Platform for Daily Work | ElixirEHR',
    description:
      'See where AI can help care teams with information access, routine administration and clinical workflow support, with people in control.',
  },
  '/ai-pre-visit-preparation': {
    title: 'AI Pre-Visit Preparation for Clinicians | ElixirEHR',
    description:
      'Prepare for the next encounter with AI-assisted patient context and a more organized view of information to review before a visit.',
  },
  '/ai-clinical-documentation': {
    title: 'AI Clinical Documentation for Visit Notes | ElixirEHR',
    description:
      'Spend less effort starting notes. Learn how AI-assisted drafts can support clinical documentation while keeping clinician review essential.',
  },
  '/ai-accounts-receivable-management': {
    title: 'AI Accounts Receivable Management | ElixirEHR',
    description:
      'Identify accounts that need attention, organize follow-up tasks and explore AI-assisted workflows for healthcare receivables.',
  },
  '/payer-policy-intelligence': {
    title: 'Payer Policy Intelligence for Billing | ElixirEHR',
    description:
      'Make payer rules easier to follow by organizing policy details and changes that influence coverage checks, authorizations and claims.',
  },
  '/responsible-ai-in-healthcare': {
    title: 'Responsible AI in Healthcare: A Practical Guide',
    description:
      'What does responsible healthcare AI require? Examine oversight, transparency, patient privacy and safeguards for AI-enabled workflows.',
  },
  '/behavioral-health-ehr': {
    title: 'Behavioral Health EHR for Treatment Teams | ElixirEHR',
    description:
      'Keep assessments, progress notes and treatment plans connected across behavioral health workflows, from intake through ongoing care.',
  },
  '/mental-health-ehr': {
    title: 'Mental Health EHR for Therapy Practices | ElixirEHR',
    description:
      'Support counseling and psychiatric care with organized notes, appointments, patient histories and treatment planning in one workflow',
  },
  '/addiction-treatment-emr': {
    title: 'Addiction Treatment EMR for Recovery Care | ElixirEHR',
    description:
      'Bring intake, assessments, clinical notes and recovery planning together for teams supporting substance use disorder treatment.',
  },
  '/value-based-care-software': {
    title: 'Value Based Care Software for Outcomes | ElixirEHR',
    description:
      'Connect care activities with quality measures, patient engagement and follow-up tracking for programs focused on better outcomes.',
  },
  '/care-coordination-software': {
    title: 'Care Coordination Software for Teams | ElixirEHR',
    description:
      'Keep referrals, handoffs and follow-ups visible across teams so important care activities do not get lost between visits.',
  },
  '/ambulatory-ehr': {
    title: 'Ambulatory EHR for Outpatient Care | ElixirEHR',
    description:
      'Manage outpatient encounters, records and scheduling in workflows designed around the pace of ambulatory care.',
  },
  '/small-practice-ehr': {
    title: 'EHR for Small Practice Teams | ElixirEHR',
    description:
      'A smaller practice still handles complex work. Bring charts, appointments and daily administration into a more manageable EHR workflow.',
  },
  '/telehealth-ehr': {
    title: 'Telehealth EHR for Connected Virtual Care | ElixirEHR',
    description:
      'Keep virtual visits tied to patient records, documentation and follow-up rather than managing remote care in disconnected tools.',
  },
  '/aesthetic-practice-ehr': {
    title: 'Aesthetic Practice EHR for Clinics | ElixirEHR',
    description:
      'Organize consultations, treatment histories, client notes and bookings for aesthetic services with a more connected clinic workflow.',
  },
  '/student-health-records-software': {
    title: 'Student Health Records Software | ElixirEHR',
    description:
      'Help campus health teams document visits, manage student health information and coordinate clinic services through organized records.',
  },
  '/treatment-center-software': {
    title: 'Treatment Center Software for Programs | ElixirEHR',
    description:
      'Coordinate admissions, assessments, treatment plans and ongoing documentation across the moving parts of a treatment program.',
  },
  '/care-management-software': {
    title: 'Care Management Software for Programs | ElixirEHR',
    description:
      'Track patient goals, outreach and follow-up across ongoing care programs with a clearer picture of what each person needs next.',
  },
  '/care-plan-software': {
    title: 'Care Plan Software for Personalized Care | ElixirEHR',
    description:
      'Build and update individualized plans, assign care tasks and keep progress visible as patient needs change.',
  },
  '/sdoh-software': {
    title: 'SDOH Software for Social Needs Screening | ElixirEHR',
    description:
      'Capture social needs screening results, identify barriers to care and support referral workflows beyond the clinical encounter.',
  },
  '/success-stories': {
    title: 'ElixirEHR Customer Success Stories',
    description:
      'Hear how healthcare teams use ElixirEHR, the challenges they faced and the experiences they share along the way.',
  },
  '/guides-ebooks': {
    title: 'Healthcare Guides and E-books | ElixirEHR',
    description:
      'Find practical guides and e-books on EHR technology, practice management and healthcare workflows. Browse resources for informed decisions.',
  },
  '/case-studies': {
    title: 'Healthcare Case Studies: Real-World Results | ElixirEHR',
    description:
      'Read detailed healthcare case studies covering the challenges, approaches and outcomes behind real customer projects.',
  },
  '/newsletter': {
    title: 'ElixirEHR Newsletter | Healthcare Insights',
    description:
      'Get healthcare technology insights, product news and useful resources from ElixirEHR delivered to your inbox.',
  },
  '/webinars-podcasts': {
    title: 'Healthcare Webinars and Podcasts | ElixirEHR',
    description:
      'Watch discussions and listen to conversations on healthcare technology, EHR trends and practical lessons from industry voices.',
  },
  '/release-notes': {
    title: 'ElixirEHR Release Notes | Product Updates',
    description:
      'Follow ElixirEHR release notes for updates, improvements and fixes. Review what has changed across product versions.',
  },
  '/benchmark-surveys': {
    title: 'Healthcare Benchmark Surveys & Findings | ElixirEHR',
    description:
      'Browse healthcare benchmark surveys and findings to understand industry trends, operational challenges and opportunities for improvement.',
  },
  '/feature-videos': {
    title: 'ElixirEHR Feature Videos | See the Platform',
    description:
      'See ElixirEHR features in action with short videos showcasing product workflows and tools for healthcare teams.',
  },
  '/about-us': {
    title: 'About ElixirEHR | Our Mission and Team',
    description:
      'Learn about ElixirEHR, the people behind the platform and our approach to helping healthcare organizations improve everyday work.',
  },
  '/why-elixir': {
    title: 'Why ElixirEHR? Explore What Sets Us Apart',
    description:
      'Discover the thinking behind ElixirEHR and how its approach to connected workflows, usability and care team needs differs.',
  },
  '/press-releases': {
    title: 'ElixirEHR Press Releases | Company News',
    description:
      'Read official ElixirEHR press releases for company announcements, launches, partnerships and other news as it is published.',
  },
  '/referral-program': {
    title: 'ElixirEHR Referral Program | How It Works',
    description:
      'Learn about the ElixirEHR referral program, who can participate and how to recommend our platform to healthcare organizations.',
  },
  '/careers': {
    title: 'Careers at ElixirEHR | Join Our Team',
    description:
      'Explore career opportunities at ElixirEHR and learn about the teams building technology for modern healthcare organizations.',
  },
  '/contact-us': {
    title: 'Contact ElixirEHR | Request a Product Demo',
    description:
      'Have a question or want to see ElixirEHR in action? Contact our team to discuss your practice needs or request a product walkthrough.',
  },
  '/hipaa-compliant-ehr': {
    title: 'HIPAA Compliant EHR Software: What to Check',
    description:
      'Choosing an EHR? Review access controls, audit features, vendor responsibilities and other safeguards that support your HIPAA program.',
  },
  '/naatp': {
    title: 'NAATP: Membership, Ethics and Quality Standards',
    description:
      'Get to know the National Association of Addiction Treatment Providers, including membership, its Code of Ethics and quality resources.',
  },
  '/salesforce-data-security': {
    title: 'Salesforce Data Security in Healthcare | ElixirEHR',
    description:
      'Understand how Salesforce permissions, access settings and optional security tools can help organizations manage sensitive health data.',
  },
  '/healthcare-interoperability': {
    title: 'Healthcare Interoperability With FHIR and HL7',
    description:
      'Learn how health systems share clinical information through FHIR, HL7 and EHR connections, and why usable data exchange matters to care.',
  },
  // Not in the sheet's rows: title and description are the supplied "ONC Certification.html" page's own.
  '/onc-certification/elixir-certified-module': {
    title: 'ONC-Certified EHR | Certification Criteria & Real World Testing | Elixir',
    description:
      "Elixir's ONC Health IT certification record in full: certificate number, date certified, all 21 certified criteria under 45 CFR 170.315, the costs and limitations disclosure, real world testing documents, and the open FHIR and C-CDA API developer documentation.",
  },
  // Not in the sheet's rows: title and description are the supplied "API Developer Portal.html" page's own.
  '/onc-certification/api-developer-portal': {
    title: 'Elixir API Developer Portal | FHIR & C-CDA API Documentation | Elixir',
    description:
      'Open API documentation for Elixir EHR: OAuth 2.0 authentication, fourteen FHIR-formatted resource endpoints, the C-CDA all-data request, HTTP error handling and terms of use. Published without registration under the API Condition of Certification.',
  },
};
