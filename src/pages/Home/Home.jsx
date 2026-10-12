import HeroSection from './sections/HeroSection/HeroSection';
import TrustedBySection from './sections/TrustedBySection/TrustedBySection';
import KratuIntelligenceSection from './sections/KratuIntelligenceSection/KratuIntelligenceSection';
import PlatformIntroSection from './sections/PlatformIntroSection/PlatformIntroSection';
import AiCapabilitiesSection from '../../components/sections/AiCapabilitiesSection/AiCapabilitiesSection';
import ChallengesSection from './sections/ChallengesSection/ChallengesSection';
import FeaturesSection from './sections/FeaturesSection/FeaturesSection';
import TestimonialsSection from './sections/TestimonialsSection/TestimonialsSection';
import ResourcesSection from './sections/ResourcesSection/ResourcesSection';
import ConversionCtaSection from './sections/ConversionCtaSection/ConversionCtaSection';

function Home() {
  return (
    <>
      <title>Elixir | The AI-Powered EHR Built for Modern Healthcare Teams</title>
      <meta
        name="description"
        content="Automate clinical documentation, predict claim denials, and streamline patient care with AI-powered clinical workflows that actually learn from your practice."
      />
      <HeroSection />
      <TrustedBySection />
      <KratuIntelligenceSection />
      <PlatformIntroSection />
      <AiCapabilitiesSection glow />
      <ChallengesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ResourcesSection />
      <ConversionCtaSection />
    </>
  );
}

export default Home;
