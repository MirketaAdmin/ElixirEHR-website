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
import DenialManagement from './pages/DenialManagement/DenialManagement';
import ClaimPreparation from './pages/ClaimPreparation/ClaimPreparation';
import ElectronicVisitVerification from './pages/ElectronicVisitVerification/ElectronicVisitVerification';
import CaregiverMobileApp from './pages/CaregiverMobileApp/CaregiverMobileApp';
import EvvFieldService from './pages/EvvFieldService/EvvFieldService';
import SuccessStories from './pages/SuccessStories/SuccessStories';
import BlogListing from './pages/Insights/BlogListing/BlogListing';
import EbookListing from './pages/Insights/EbookListing/EbookListing';
import SurveyListing from './pages/Insights/SurveyListing/SurveyListing';
import ReleaseNotesListing from './pages/Insights/ReleaseNotesListing/ReleaseNotesListing';
import WebinarListing from './pages/Insights/WebinarListing/WebinarListing';
import VideoListing from './pages/Insights/VideoListing/VideoListing';
import AllResources from './pages/Insights/AllResources/AllResources';
import PressReleases from './pages/PressReleases/PressReleases';
import PostDetail, { LegacyPressReleaseRedirect } from './pages/PostDetail/PostDetail';
import { postTypes } from './posts/types';

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
          <Route path="eligibility-verification" element={<EligibilityVerification />} />
          <Route path="treatment-center-solutions" element={<TreatmentCenterSolutions />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="denial-management" element={<DenialManagement />} />
          <Route path="professional-and-institutional-claim-preparation" element={<ClaimPreparation />} />
          <Route path="electronic-visit-verification" element={<ElectronicVisitVerification />} />
          <Route path="caregiver-mobile-app" element={<CaregiverMobileApp />} />
          <Route path="evv-for-salesforce-field-service" element={<EvvFieldService />} />
          <Route path="success-stories" element={<SuccessStories />} />
          {/* Insights: category listings (detail pages are the post routes below). */}
          <Route path="insights" element={<AllResources />} />
          <Route path="blog" element={<BlogListing />} />
          <Route path="insights/e-book" element={<EbookListing />} />
          <Route path="insights/benchmark-surveys" element={<SurveyListing />} />
          <Route path="insights/release-notes" element={<ReleaseNotesListing />} />
          <Route path="insights/webinars" element={<WebinarListing />} />
          <Route path="insights/videos" element={<VideoListing />} />
          <Route path="press-releases" element={<PressReleases />} />
          <Route path="press-releases/:slug" element={<LegacyPressReleaseRedirect />} />
          {/* Post detail pages: /blog/:slug, /press-release/:slug, /case-study/:slug, … (src/posts/types.js). */}
          {Object.entries(postTypes).map(([type, { path }]) => (
            <Route key={type} path={`${path}/:slug`} element={<PostDetail type={type} />} />
          ))}
          {/* Other pages are not designed yet — send unknown paths home. */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
