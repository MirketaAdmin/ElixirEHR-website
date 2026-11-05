import { resources } from '../../data/home';
import HeroSection from './sections/HeroSection/HeroSection';
import TrustedBySection from './sections/TrustedBySection/TrustedBySection';
import KratuIntelligenceSection from './sections/KratuIntelligenceSection/KratuIntelligenceSection';
import PlatformIntroSection from './sections/PlatformIntroSection/PlatformIntroSection';
import AiCapabilitiesSection from '../../components/sections/AiCapabilitiesSection/AiCapabilitiesSection';
import ChallengesSection from './sections/ChallengesSection/ChallengesSection';
import FeaturesSection from './sections/FeaturesSection/FeaturesSection';
import TestimonialsSection from './sections/TestimonialsSection/TestimonialsSection';
import ResourcesSection from '../../components/sections/ResourcesSection/ResourcesSection';
import ConversionCtaSection from './sections/ConversionCtaSection/ConversionCtaSection';
import PageSeo from '../../components/seo/PageSeo/PageSeo';

function Home() {
  return (
    <>
      <PageSeo
        path=""
        title="Elixir | The AI-Powered EHR Built for Modern Healthcare Teams"
        description="Automate clinical documentation, predict claim denials, and streamline patient care with AI-powered clinical workflows that actually learn from your practice."
      />
      <HeroSection />
      <TrustedBySection />
      <KratuIntelligenceSection />
      <PlatformIntroSection />
      <AiCapabilitiesSection id="ai-solutions" />
      <ChallengesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ResourcesSection {...resources} />
      <ConversionCtaSection />
    </>
  );
}

export default Home;
