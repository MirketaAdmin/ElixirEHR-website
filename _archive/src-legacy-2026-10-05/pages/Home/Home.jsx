import { Helmet } from 'react-helmet-async';
import HeroSection from '../../components/sections/HeroSection/HeroSection';
import TrustedBySection from '../../components/sections/TrustedBySection/TrustedBySection';
import PlatformIntroSection from '../../components/sections/PlatformIntroSection/PlatformIntroSection';
import SolutionsSection from '../../components/sections/SolutionsSection/SolutionsSection';
import ChallengesStatsSection from '../../components/sections/ChallengesStatsSection/ChallengesStatsSection';
import FeaturesSection from '../../components/sections/FeaturesSection/FeaturesSection';
import TestimonialsSection from '../../components/sections/TestimonialsSection/TestimonialsSection';
import ResourcesSection from '../../components/sections/ResourcesSection/ResourcesSection';
import ConversionCTASection from '../../components/sections/ConversionCTASection/ConversionCTASection';

function Home() {
  return (
    <>
      <Helmet>
        <title>Elixir | The AI-Powered EHR Built for Modern Healthcare Teams</title>
        <meta
          name="description"
          content="Elixir is the AI-powered EHR built for modern healthcare teams. Automate clinical documentation, predict claim denials, and streamline patient care with AI-powered clinical workflows."
        />
        <meta property="og:title" content="Elixir | AI-Powered EHR for Modern Healthcare Teams" />
        <meta
          property="og:description"
          content="Automate clinical documentation, predict claim denials, and streamline patient care with Elixir's AI-powered clinical workflows."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        <HeroSection />
        <TrustedBySection />
        <PlatformIntroSection />
        <SolutionsSection />
        <ChallengesStatsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <ResourcesSection />
        
        <ConversionCTASection />
      </main>
    </>
  );
}

export default Home;
