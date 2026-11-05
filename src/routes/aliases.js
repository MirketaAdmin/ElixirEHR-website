// Legacy and planned URLs that the site's own links use, mapped to the existing page that covers
// the same content. App.jsx registers each as a redirect, so a link never silently drops the
// reader on Home. Only map a path here when the destination genuinely covers it; anything without
// a real destination falls through to the "not available yet" page (pages/NotFound).
export const routeAliases = {
  // Demo and contact requests: the Contact Us page carries the request form.
  '/request-demo': '/contact-us/#contact',
  '/product-tour': '/contact-us/#contact',
  '/company/contact': '/contact-us/#contact',

  // Company
  '/company/about': '/about-us/',
  '/company/careers': '/careers/',

  // Platform and AI
  // What Is Elixir was merged into Why Elixir; old links and bookmarks land on the merged page.
  '/what-is-elixir': '/why-elixir/',
  '/platform': '/why-elixir/',
  '/ai-engine': '/healthcare-ai-platform/',
  '/ai-engine/clinical-assistant': '/ai-clinical-documentation/',
  '/ai-engine/insurance-eligibility': '/insurance-eligibility-verification/',
  '/ai-engine/claim-rejection-prediction': '/denial-management-software/',
  '/ai-engine/patient-portal-agent': '/patient-portal-software/',
  '/ai-engine/clinical-notes-summarization': '/ai-clinical-documentation/#visit-flow',
  '/ai-engine/lab-result-analysis': '/ai-clinical-documentation/#insights-pane',

  // Footer destinations that were never built.
  '/resources/support-center': '/contact-us/',
  '/resources/documentation': '/release-notes/',
  '/resources/developer-api': '/onc-certification/api-developer-portal/',
  '/company/partners': '/referral-program/',

  // Solutions
  '/solutions/telehealth': '/telehealth-ehr/',
  '/solutions/patient-engagement': '/patient-portal-software/',
  '/solutions/addiction-treatment-centers': '/addiction-treatment-emr/',
  '/solutions/clinics-medical-offices': '/ambulatory-ehr/',
  '/home-care-and-evv': '/evv-software/',
  '/field-caregiver-experience': '/caregiver-mobile-app/',

  // Resources
  '/resources/blog': '/blog/',
  '/resources/webinars': '/webinars-podcasts/',
  '/resources/e-books': '/guides-ebooks/',
  '/resources/benchmark-surveys': '/benchmark-surveys/',
  '/resources/release-notes': '/release-notes/',
  '/resources/case-studies': '/success-stories/',
  '/insights/newsletter': '/blog/#newsletter',

  // Approved SEO slugs (website architecture SEO sheet): the earlier URLs of each page redirect
  // to its approved slug.
  '/revenue-cycle-management/electronic-prior-authorization': '/electronic-prior-authorization/',
  '/electronic-health-record': '/ehr-software/',
  '/revenue-cycle-management': '/rcm-software/',
  '/eligibility-verification': '/insurance-eligibility-verification/',
  '/denial-management': '/denial-management-software/',
  '/professional-and-institutional-claim-preparation': '/claims-processing-software/',
  '/electronic-visit-verification': '/evv-software/',
  '/evv-for-salesforce-field-service': '/salesforce-evv/',
  '/patient-portal': '/patient-portal-software/',
  '/patient-no-show-prediction': '/patient-no-show-software/',
  '/no-show-roi-calculator': '/no-show-cost-calculator/',
  '/contact-center': '/healthcare-contact-center/',
  '/kratu-ai/visit-prep': '/ai-pre-visit-preparation/',
  '/kratu-ai/elixir-co-pilot-clinical-assistant': '/ai-clinical-documentation/',
  '/kratu-ai/ar-agent': '/ai-accounts-receivable-management/',
  '/kratu-ai/payor-policy-intelligence': '/payer-policy-intelligence/',
  '/kratu-ai': '/healthcare-ai-platform/',
  '/responsible-ai': '/responsible-ai-in-healthcare/',
  '/behavioral-health/mental-health': '/mental-health-ehr/',
  '/behavioral-health/substance-use-disorder': '/addiction-treatment-emr/',
  '/behavioral-health': '/behavioral-health-ehr/',
  '/value-based-care': '/value-based-care-software/',
  '/care-coordination': '/care-coordination-software/',
  '/more-specialties/outpatient-clinics': '/ambulatory-ehr/',
  '/more-specialties/small-practices': '/small-practice-ehr/',
  '/more-specialties/telehealth': '/telehealth-ehr/',
  '/more-specialties/aesthetic-practices': '/aesthetic-practice-ehr/',
  '/more-specialties/student-health': '/student-health-records-software/',
  '/treatment-center-solutions': '/treatment-center-software/',
  '/care-management/care-plan-management': '/care-plan-software/',
  '/care-management': '/care-management-software/',
  '/social-determinants-of-health': '/sdoh-software/',
  '/insights/e-book': '/guides-ebooks/',
  '/insights/webinars': '/webinars-podcasts/',
  '/insights/release-notes': '/release-notes/',
  '/insights/benchmark-surveys': '/benchmark-surveys/',
  '/insights/videos': '/feature-videos/',
  '/career': '/careers/',

  // The URLs the supplied Compliance & Security page files were drafted with.
  '/compliance-security/hipaa-compliance-center': '/hipaa-compliant-ehr/',
  '/compliance-security/naatp': '/naatp/',
  '/compliance-security/salesforce-security-layer': '/salesforce-data-security/',
  '/compliance-security/interoperability': '/healthcare-interoperability/',
  '/compliance-security/onc-certification/api-developer-portal': '/onc-certification/api-developer-portal/',
  // The API Developer Portal's earlier slug (it was "FHIR API Documentation").
  '/fhir-api-documentation': '/onc-certification/api-developer-portal/',
};
