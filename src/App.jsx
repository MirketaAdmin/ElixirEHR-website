import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import WhatIsElixir from './pages/WhatIsElixir/WhatIsElixir';
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
import CarePlanManagement from './pages/CarePlanManagement/CarePlanManagement';
import OncMfaUseCases from './pages/OncMfaUseCases/OncMfaUseCases';
import ElixirCertifiedModule from './pages/ElixirCertifiedModule/ElixirCertifiedModule';
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="what-is-elixir" element={<WhatIsElixir />} />
          <Route path="why-elixir" element={<WhyElixir />} />
          <Route path="electronic-health-record" element={<ElectronicHealthRecord />} />
          <Route path="revenue-cycle-management" element={<RevenueCycleManagement />} />
          <Route
            path="revenue-cycle-management/electronic-prior-authorization"
            element={<ElectronicPriorAuthorization />}
          />
          <Route path="eligibility-verification" element={<EligibilityVerification />} />
          <Route path="treatment-center-solutions" element={<TreatmentCenterSolutions />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="denial-management" element={<DenialManagement />} />
          <Route path="professional-and-institutional-claim-preparation" element={<ClaimPreparation />} />
          <Route path="electronic-visit-verification" element={<ElectronicVisitVerification />} />
          <Route path="caregiver-mobile-app" element={<CaregiverMobileApp />} />
          <Route path="evv-for-salesforce-field-service" element={<EvvFieldService />} />
          <Route path="success-stories" element={<SuccessStories />} />
          <Route path="referral-program" element={<ReferralProgram />} />
          <Route path="career" element={<Career />} />
          <Route path="patient-portal" element={<PatientPortal />} />
          <Route path="billing" element={<Billing />} />
          <Route path="patient-no-show-prediction" element={<PatientNoShowPrediction />} />
          <Route path="contact-center" element={<ContactCenter />} />
          <Route path="no-show-roi-calculator" element={<NoShowRoiCalculator />} />
          <Route path="responsible-ai" element={<ResponsibleAi />} />
          <Route path="behavioral-health" element={<BehavioralHealth />} />
          {/* Flat routes: Mental Health and Substance Use Disorder are independent pages, not nested under Behavioral Health. */}
          <Route path="behavioral-health/mental-health" element={<MentalHealth />} />
          <Route path="behavioral-health/substance-use-disorder" element={<SubstanceUseDisorder />} />
          <Route path="care-coordination" element={<CareCoordination />} />
          {/* More Specialties has no page of its own; its children live under its path. */}
          <Route path="more-specialties/outpatient-clinics" element={<OutpatientClinics />} />
          <Route path="more-specialties/small-practices" element={<SmallPractices />} />
          <Route path="more-specialties/telehealth" element={<Telehealth />} />
          <Route path="more-specialties/aesthetic-practices" element={<AestheticPractices />} />
          <Route path="more-specialties/student-health" element={<StudentHealth />} />
          {/* Care Management: an independent top-level page; Care Plan Management lives under its path. */}
          <Route path="care-management" element={<CareManagement />} />
          <Route path="care-management/care-plan-management" element={<CarePlanManagement />} />
          {/* Listed under Care Management in the header, but on its own top-level route. */}
          <Route path="social-determinants-of-health" element={<SocialDeterminants />} />
          {/* ONC Certification has no page of its own; its children live under its path. */}
          <Route path="onc-certification/onc-mfa-use-cases" element={<OncMfaUseCases />} />
          <Route path="onc-certification/elixir-certified-module" element={<ElixirCertifiedModule />} />
          <Route path="kratu-ai" element={<KratuAi />} />
          <Route path="kratu-ai/visit-prep" element={<VisitPrep />} />
          <Route path="kratu-ai/elixir-co-pilot-clinical-assistant" element={<CoPilot />} />
          <Route path="kratu-ai/ar-agent" element={<ArAgent />} />
          {/* The A/R Agent and Payor Policy briefs spelled the parent "kartu-ai"; those URLs redirect. */}
          <Route path="kartu-ai/ar-agent" element={<Navigate to="/kratu-ai/ar-agent" replace />} />
          <Route path="kratu-ai/payor-policy-intelligence" element={<PayorPolicy />} />
          <Route
            path="kartu-ai/payor-policy-intelligence"
            element={<Navigate to="/kratu-ai/payor-policy-intelligence" replace />}
          />
          <Route path="career/open-positions/:jobSlug" element={<OpenPositionDetail />} />
          {/* Insights: category listings (detail pages are the post routes below). */}
          <Route path="insights" element={<AllResources />} />
          <Route path="blog" element={<BlogListing />} />
          <Route path="insights/e-book" element={<EbookListing />} />
          <Route path="insights/benchmark-surveys" element={<SurveyListing />} />
          <Route path="insights/release-notes" element={<ReleaseNotesListing />} />
          <Route path="insights/webinars" element={<WebinarListing />} />
          <Route path="insights/illustrations" element={<IllustrationListing />} />
          <Route path="insights/videos" element={<VideoListing />} />
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
    </BrowserRouter>
  );
}

export default App;
