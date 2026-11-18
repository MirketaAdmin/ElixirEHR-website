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
  '/insights/newsletter': '/newsletter/',
  // The old site's newsletter sign-up page (listed in the architecture sheet's "all links").
  '/subscribe-to-our-newsletter': '/newsletter/',

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

  // A duplicate upload of the Secure Patient Messaging video (YouTube ZHCtCSkB8lk, deleted from the
  // channel); the same video, uploaded first, stays at this page.
  '/video/elixir-ehr-secure-patient-messaging-hipaa-communication': '/video/elixir-ehr-secure-patient-messaging/',

  // The Spring’26 release note moved to its requested slug; its previous URL and the old root URL
  // (from the previous website) both land on it.
  '/release-note/elixir-spring-26-version-1-1020-release-is-available': '/release-note/elixir-spring-26-release-ehr-rcm-patient-portal-updates/',
  '/elixir-spring-26-release-ehr-rcm-patient-portal-updates': '/release-note/elixir-spring-26-release-ehr-rcm-patient-portal-updates/',

  // The AI in Healthcare Workflows post moved to its requested slug; its previous URL and the old
  // root URL (from the previous website) both land on it.
  '/blog/ai-in-healthcare-workflows-where-we-are-and-whats-next': '/blog/ai-healthcare-workflows-whats-next/',
  '/ai-healthcare-workflows-whats-next': '/blog/ai-healthcare-workflows-whats-next/',

  // The small-practice compliance post moved to its requested slug; its previous URL and the old
  // root URL (from the previous website) both land on it.
  '/blog/healthcare-compliance-made-simple-for-small-practices': '/blog/healthcare-compliance-small-practices-ehr/',
  '/healthcare-compliance-small-practices-ehr': '/blog/healthcare-compliance-small-practices-ehr/',

  // The AI coding accuracy post moved to its requested slug; its previous URL and the old root URL
  // (from the previous website) both land on it.
  '/blog/ai-in-healthcare-a-smarter-path-to-coding-accuracy-and-compliance': '/blog/ai-healthcare-coding-compliance-accuracy/',
  '/ai-healthcare-coding-compliance-accuracy': '/blog/ai-healthcare-coding-compliance-accuracy/',

  // Old blogs from the previous website, published again under /blog/: their old root URLs land on them.
  '/why-are-treatment-centers-struggling-with-digital-innovation': '/blog/why-are-treatment-centers-struggling-with-digital-innovation/',
  '/new-tefca-interoperability-framework-for-healthcare-providers': '/blog/new-tefca-interoperability-framework-for-healthcare-providers/',
  '/new-guidelines-on-hospital-co-location-by-cms': '/blog/new-guidelines-on-hospital-co-location-by-cms/',
  '/how-to-prepare-your-team-for-a-new-practice-management-software': '/blog/how-to-prepare-your-team-for-a-new-practice-management-software/',
  '/self-service-portal-for-enhanced-customer-experience': '/blog/self-service-portal-for-enhanced-customer-experience/',
  '/digital-engagement-the-way-forward-for-bridging-revenue-gap-of-healthcare-providers': '/blog/digital-engagement-the-way-forward-for-bridging-revenue-gap-of-healthcare-providers/',
  '/behavioural-health-becomes-a-priority-under-american-rescue-plan-act-of-2021': '/blog/behavioural-health-becomes-a-priority-under-american-rescue-plan-act-of-2021/',
  '/contactless-patient-intake': '/blog/contactless-patient-intake/',
  '/manage-the-insurance-verification-process-and-reduce-claim-denials-with-elixir': '/blog/manage-the-insurance-verification-process-and-reduce-claim-denials-with-elixir/',
  '/optimizing-the-patient-intake-management-process-in-salesforce': '/blog/optimizing-the-patient-intake-management-process-in-salesforce/',
  '/upgrade-your-old-rcm-with-the-next-gen-elixir-billing-built-on-salesforce-to-increase-profitability': '/blog/upgrade-your-old-rcm-with-the-next-gen-elixir-billing-built-on-salesforce-to-increase-profitability/',
  '/bed-management-in-the-healthcare-industry': '/blog/bed-management-in-the-healthcare-industry/',
  '/introduction-to-salesforce-health-cloud': '/blog/introduction-to-salesforce-health-cloud/',
  '/artificial-intelligence-in-healthcare-sector': '/blog/artificial-intelligence-in-healthcare-sector/',
  '/proactive-measures-for-addiction-recovery-ceos-during-coronavirus-pandemic': '/blog/proactive-measures-for-addiction-recovery-ceos-during-coronavirus-pandemic/',

  // Recovered success story: the old site's story URL, its earlier body URL and the root slug.
  '/stories/elixir-contact-center-implementation-with-multi-party-integrations-for-an-addiction-recovery-center': '/case-study/elixir-contact-center-implementation-with-multi-party-integrations-for-an-addiction-recovery-center/',
  '/elixir-contact-center-implementation-with-multiparty-integrations': '/case-study/elixir-contact-center-implementation-with-multi-party-integrations-for-an-addiction-recovery-center/',
  '/elixir-contact-center-implementation-with-multi-party-integrations-for-an-addiction-recovery-center': '/case-study/elixir-contact-center-implementation-with-multi-party-integrations-for-an-addiction-recovery-center/',
  '/stories/process-automation-and-complete-system-setup-for-a-sleep-apnea-treatment-center': '/case-study/process-automation-and-complete-system-setup-for-a-sleep-apnea-treatment-center/',
  '/complete-elixir-implementation-for-sleep-apnea-clinic': '/case-study/process-automation-and-complete-system-setup-for-a-sleep-apnea-treatment-center/',
  '/process-automation-and-complete-system-setup-for-a-sleep-apnea-treatment-center': '/case-study/process-automation-and-complete-system-setup-for-a-sleep-apnea-treatment-center/',
  '/stories/marketing-admission-and-alumni-process-automation-for-an-eating-disorder-treatment-center': '/case-study/marketing-admission-and-alumni-process-automation-for-an-eating-disorder-treatment-center/',
  '/elixir-contact-center-implementation-for-eating-disorder-clinic': '/case-study/marketing-admission-and-alumni-process-automation-for-an-eating-disorder-treatment-center/',
  '/marketing-admission-and-alumni-process-automation-for-an-eating-disorder-treatment-center': '/case-study/marketing-admission-and-alumni-process-automation-for-an-eating-disorder-treatment-center/',
  '/stories/completely-eliminated-the-use-of-spreadsheets-for-bed-management': '/case-study/completely-eliminated-the-use-of-spreadsheets-for-bed-management/',
  '/elixir-contact-center-implementation-and-ehr-integration': '/case-study/completely-eliminated-the-use-of-spreadsheets-for-bed-management/',
  '/completely-eliminated-the-use-of-spreadsheets-for-bed-management': '/case-study/completely-eliminated-the-use-of-spreadsheets-for-bed-management/',
  '/stories/it-provider': '/case-study/it-provider/',
  '/elixir-bed-management-implementation': '/case-study/it-provider/',
  '/it-provider': '/case-study/it-provider/',
  '/stories/product-management': '/case-study/product-management/',
  '/elixir-integration': '/case-study/product-management/',
  '/product-management': '/case-study/product-management/',
  '/stories/app-developement': '/case-study/app-developement/',
  '/elixir-implementation': '/case-study/app-developement/',
  '/app-developement': '/case-study/app-developement/',

  // Press releases migrated from the previous website, which served them at the root slug.
  '/true-north-selecting-elixir-to-streamline-their-patient-journey': '/press-release/true-north-selecting-elixir-to-streamline-their-patient-journey/',
  '/granite-recovery-centers-sign-for-elixir-to-manage-their-patient-intake-process': '/press-release/granite-recovery-centers-sign-for-elixir-to-manage-their-patient-intake-process/',
  '/alter-health-group-signs-for-elixir-to-support-its-facilities-across-united-states': '/press-release/alter-health-group-signs-for-elixir-to-support-its-facilities-across-united-states/',
  '/elixehr-announces-launch-of-an-automated-medical-coding-feature-available-immediately-to-medical-providers': '/press-release/elixehr-announces-launch-of-an-automated-medical-coding-feature-available-immediately-to-medical-providers/',
  '/elixir-ehrs-referral-program-debuts': '/press-release/elixir-ehrs-referral-program-debuts/',
  '/elixir-ehr-partners-with-change-healthcare-to-dramatically-enhance-prescribing-safety-and-efficiency': '/press-release/elixir-ehr-partners-with-change-healthcare-to-dramatically-enhance-prescribing-safety-and-efficiency/',
  '/elixir-ehr-takes-system-customizability-to-next-level-with-note-and-form-builder': '/press-release/elixir-ehr-takes-system-customizability-to-next-level-with-note-and-form-builder/',
};
