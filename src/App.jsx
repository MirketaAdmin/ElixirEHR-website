import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import WhyElixir from './pages/WhyElixir/WhyElixir';
import ElectronicHealthRecord from './pages/ElectronicHealthRecord/ElectronicHealthRecord';
import RevenueCycleManagement from './pages/RevenueCycleManagement/RevenueCycleManagement';
import EligibilityVerification from './pages/EligibilityVerification/EligibilityVerification';
import TreatmentCenterSolutions from './pages/TreatmentCenterSolutions/TreatmentCenterSolutions';
import ContactUs from './pages/ContactUs/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import ElectronicPriorAuthorization from './pages/ElectronicPriorAuthorization/ElectronicPriorAuthorization';
import DenialManagement from './pages/DenialManagement/DenialManagement';
import ClaimPreparation from './pages/ClaimPreparation/ClaimPreparation';
import ElectronicVisitVerification from './pages/ElectronicVisitVerification/ElectronicVisitVerification';
import CaregiverMobileApp from './pages/CaregiverMobileApp/CaregiverMobileApp';
import EvvFieldService from './pages/EvvFieldService/EvvFieldService';
import SuccessStories from './pages/SuccessStories/SuccessStories';
import CaseStudies from './pages/CaseStudies/CaseStudies';
import ReferralProgram from './pages/ReferralProgram/ReferralProgram';
import Career from './pages/Career/Career';
import PatientPortal from './pages/PatientPortal/PatientPortal';
import Billing from './pages/Billing/Billing';
import PatientNoShowPrediction from './pages/PatientNoShowPrediction/PatientNoShowPrediction';
import ContactCenter from './pages/ContactCenter/ContactCenter';
import NoShowRoiCalculator from './pages/NoShowRoiCalculator/NoShowRoiCalculator';
import KratuAi from './pages/KratuAi/KratuAi';
import VisitPrep from './pages/KratuAi/VisitPrep/VisitPrep';
import CoPilot from './pages/KratuAi/CoPilot/CoPilot';
import ArAgent from './pages/KratuAi/ArAgent/ArAgent';
import PayorPolicy from './pages/KratuAi/PayorPolicy/PayorPolicy';
import ResponsibleAi from './pages/ResponsibleAi/ResponsibleAi';
import BehavioralHealth from './pages/BehavioralHealth/BehavioralHealth';
import MentalHealth from './pages/MentalHealth/MentalHealth';
import SubstanceUseDisorder from './pages/SubstanceUseDisorder/SubstanceUseDisorder';
import CareCoordination from './pages/CareCoordination/CareCoordination';
import OutpatientClinics from './pages/OutpatientClinics/OutpatientClinics';
import SmallPractices from './pages/SmallPractices/SmallPractices';
import Telehealth from './pages/Telehealth/Telehealth';
import AestheticPractices from './pages/AestheticPractices/AestheticPractices';
import StudentHealth from './pages/StudentHealth/StudentHealth';
import SocialDeterminants from './pages/SocialDeterminants/SocialDeterminants';
import CareManagement from './pages/CareManagement/CareManagement';
import ValueBasedCare from './pages/ValueBasedCare/ValueBasedCare';
import CarePlanManagement from './pages/CarePlanManagement/CarePlanManagement';
import PatientEhiExport from './pages/PatientEhiExport/PatientEhiExport';
import OncMfaUseCases from './pages/OncMfaUseCases/OncMfaUseCases';
import ElixirCertifiedModule from './pages/ElixirCertifiedModule/ElixirCertifiedModule';
import HipaaComplianceCenter from './pages/ComplianceSecurity/HipaaComplianceCenter/HipaaComplianceCenter';
import Naatp from './pages/ComplianceSecurity/Naatp/Naatp';
import SalesforceSecurityLayer from './pages/ComplianceSecurity/SalesforceSecurityLayer/SalesforceSecurityLayer';
import Interoperability from './pages/ComplianceSecurity/Interoperability/Interoperability';
import ApiDeveloperPortal from './pages/ComplianceSecurity/ApiDeveloperPortal/ApiDeveloperPortal';
import OpenPositionDetail from './pages/Career/open-positions/OpenPositionDetail';
import BlogListing from './pages/Insights/BlogListing/BlogListing';
import EbookListing from './pages/Insights/EbookListing/EbookListing';
import SurveyListing from './pages/Insights/SurveyListing/SurveyListing';
import ReleaseNotesListing from './pages/Insights/ReleaseNotesListing/ReleaseNotesListing';
import WebinarListing from './pages/Insights/WebinarListing/WebinarListing';
import VideoListing from './pages/Insights/VideoListing/VideoListing';
import IllustrationListing from './pages/Insights/IllustrationListing/IllustrationListing';
import AllResources from './pages/Insights/AllResources/AllResources';
import PressReleases from './pages/PressReleases/PressReleases';
import PostDetail, { LegacyPressReleaseRedirect } from './pages/PostDetail/PostDetail';
import { postTypes } from './posts/types';
import { routeAliases } from './routes/aliases';
import NotFound from './pages/NotFound/NotFound';
import ThankYou from './pages/ThankYou/ThankYou';

/**
 * The route tree, without a router: App wraps it in a BrowserRouter, and the build-time prerender
 * (src/entry-server.jsx) in a StaticRouter for each page's URL.
 */
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        {/* Page routes use the approved SEO slugs (data/seo.js); earlier URLs redirect via routes/aliases.js. */}
        <Route path="about-us" element={<AboutUs />} />
        <Route path="why-elixir" element={<WhyElixir />} />
        <Route path="ehr-software" element={<ElectronicHealthRecord />} />
        <Route path="rcm-software" element={<RevenueCycleManagement />} />
        <Route path="electronic-prior-authorization" element={<ElectronicPriorAuthorization />} />
        <Route path="insurance-eligibility-verification" element={<EligibilityVerification />} />
        <Route path="treatment-center-software" element={<TreatmentCenterSolutions />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="thank-you" element={<ThankYou />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="denial-management-software" element={<DenialManagement />} />
        <Route path="claims-processing-software" element={<ClaimPreparation />} />
        <Route path="evv-software" element={<ElectronicVisitVerification />} />
        <Route path="caregiver-mobile-app" element={<CaregiverMobileApp />} />
        <Route path="salesforce-evv" element={<EvvFieldService />} />
        <Route path="success-stories" element={<SuccessStories />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="referral-program" element={<ReferralProgram />} />
        <Route path="careers" element={<Career />} />
        <Route path="patient-portal-software" element={<PatientPortal />} />
        <Route path="billing" element={<Billing />} />
        <Route path="patient-no-show-software" element={<PatientNoShowPrediction />} />
        <Route path="healthcare-contact-center" element={<ContactCenter />} />
        <Route path="no-show-cost-calculator" element={<NoShowRoiCalculator />} />
        <Route path="responsible-ai-in-healthcare" element={<ResponsibleAi />} />
        <Route path="behavioral-health-ehr" element={<BehavioralHealth />} />
        <Route path="mental-health-ehr" element={<MentalHealth />} />
        <Route path="addiction-treatment-emr" element={<SubstanceUseDisorder />} />
        <Route path="care-coordination-software" element={<CareCoordination />} />
        <Route path="ambulatory-ehr" element={<OutpatientClinics />} />
        <Route path="small-practice-ehr" element={<SmallPractices />} />
        <Route path="telehealth-ehr" element={<Telehealth />} />
        <Route path="aesthetic-practice-ehr" element={<AestheticPractices />} />
        <Route path="student-health-records-software" element={<StudentHealth />} />
        <Route path="care-management-software" element={<CareManagement />} />
        <Route path="value-based-care-software" element={<ValueBasedCare />} />
        <Route path="care-plan-software" element={<CarePlanManagement />} />
        <Route path="sdoh-software" element={<SocialDeterminants />} />
        {/* ONC Certification has no page yet; the sheet gives no new slugs for its children, so they keep theirs. */}
        <Route path="onc-certification/onc-mfa-use-cases" element={<OncMfaUseCases />} />
        <Route path="onc-certification/elixir-certified-module" element={<ElixirCertifiedModule />} />
        <Route path="onc-certification/patient-ehi-export" element={<PatientEhiExport />} />
        <Route path="hipaa-compliant-ehr" element={<HipaaComplianceCenter />} />
        <Route path="naatp" element={<Naatp />} />
        <Route path="salesforce-data-security" element={<SalesforceSecurityLayer />} />
        <Route path="healthcare-interoperability" element={<Interoperability />} />
        <Route path="onc-certification/api-developer-portal" element={<ApiDeveloperPortal />} />
        <Route path="healthcare-ai-platform" element={<KratuAi />} />
        <Route path="ai-pre-visit-preparation" element={<VisitPrep />} />
        <Route path="ai-clinical-documentation" element={<CoPilot />} />
        <Route path="ai-accounts-receivable-management" element={<ArAgent />} />
        {/* The A/R Agent and Payor Policy briefs spelled the parent "kartu-ai"; those URLs redirect. */}
        <Route path="kartu-ai/ar-agent" element={<Navigate to="/ai-accounts-receivable-management/" replace />} />
        <Route path="payer-policy-intelligence" element={<PayorPolicy />} />
        <Route
          path="kartu-ai/payor-policy-intelligence"
          element={<Navigate to="/payer-policy-intelligence/" replace />}
        />
        <Route path="career/open-positions/:jobSlug" element={<OpenPositionDetail />} />
        {/* Insights: category listings (detail pages are the post routes below). */}
        <Route path="insights" element={<AllResources />} />
        <Route path="blog" element={<BlogListing />} />
        <Route path="guides-ebooks" element={<EbookListing />} />
        <Route path="benchmark-surveys" element={<SurveyListing />} />
        <Route path="release-notes" element={<ReleaseNotesListing />} />
        <Route path="webinars-podcasts" element={<WebinarListing />} />
        <Route path="insights/illustrations" element={<IllustrationListing />} />
        <Route path="feature-videos" element={<VideoListing />} />
        <Route path="press-releases" element={<PressReleases />} />
        <Route path="press-releases/:slug" element={<LegacyPressReleaseRedirect />} />
        {/* Post detail pages: /blog/:slug, /press-release/:slug, /case-study/:slug, … (src/posts/types.js). */}
        {Object.entries(postTypes).map(([type, { path }]) => (
          <Route key={type} path={`${path}/:slug`} element={<PostDetail type={type} />} />
        ))}
        {/* Legacy and planned URLs used by the site's own links → the page that covers them (routes/aliases.js). */}
        {Object.entries(routeAliases).map(([from, to]) => (
          <Route key={from} path={from.slice(1)} element={<Navigate to={to} replace />} />
        ))}
        {/* Anything else says plainly that the page is not available, rather than silently going home. */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
