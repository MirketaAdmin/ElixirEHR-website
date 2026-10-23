// Legacy and planned URLs that the site's own links use, mapped to the existing page that covers
// the same content. App.jsx registers each as a redirect, so a link never silently drops the
// reader on Home. Only map a path here when the destination genuinely covers it; anything without
// a real destination falls through to the "not available yet" page (pages/NotFound).
export const routeAliases = {
  // Demo and contact requests: the Contact Us page carries the request form.
  '/request-demo': '/contact-us#contact',
  '/product-tour': '/contact-us#contact',
  '/company/contact': '/contact-us#contact',

  // Company
  '/company/about': '/about-us',
  '/company/careers': '/career',

  // Platform and AI
  '/platform': '/what-is-elixir',
  '/ai-engine': '/kratu-ai',
  '/ai-engine/clinical-assistant': '/kratu-ai/elixir-co-pilot-clinical-assistant',
  '/ai-engine/insurance-eligibility': '/eligibility-verification',
  '/ai-engine/claim-rejection-prediction': '/denial-management',
  '/ai-engine/patient-portal-agent': '/patient-portal',

  // Solutions
  '/solutions/telehealth': '/more-specialties/telehealth',
  '/solutions/patient-engagement': '/patient-portal',
  '/solutions/addiction-treatment-centers': '/behavioral-health/substance-use-disorder',
  '/solutions/clinics-medical-offices': '/more-specialties/outpatient-clinics',
  '/home-care-and-evv': '/electronic-visit-verification',
  '/field-caregiver-experience': '/caregiver-mobile-app',

  // Resources
  '/resources/blog': '/blog',
  '/resources/webinars': '/insights/webinars',
  '/resources/e-books': '/insights/e-book',
  '/resources/benchmark-surveys': '/insights/benchmark-surveys',
  '/resources/release-notes': '/insights/release-notes',
  '/resources/case-studies': '/success-stories',
  '/insights/newsletter': '/blog#newsletter',
};
