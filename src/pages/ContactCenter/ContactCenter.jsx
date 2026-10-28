import { ccAiCapabilities, ccHero } from '../../data/contactCenter';
import PageHero from '../../components/sections/PageHero/PageHero';
import BadgeHeroMedia from '../../components/sections/BadgeHeroMedia/BadgeHeroMedia';
import AiCapabilitiesSection from '../../components/sections/AiCapabilitiesSection/AiCapabilitiesSection';
import IntakeSection from './sections/IntakeSection/IntakeSection';
import VerificationSection from './sections/VerificationSection/VerificationSection';
import AssessmentsSection from './sections/AssessmentsSection/AssessmentsSection';
import PaymentSection from './sections/PaymentSection/PaymentSection';
import CensusSection from './sections/CensusSection/CensusSection';
import styles from './ContactCenter.module.css';

function ContactCenter() {
  const { media, badge, ...hero } = ccHero;

  return (
    <>
      <title>Healthcare Contact Center | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<BadgeHeroMedia media={media} badge={badge} />} />
      <IntakeSection />
      <VerificationSection />
      <AssessmentsSection />
      <PaymentSection />
      <CensusSection />
      {/* "Explore Features" in the hero scrolls here. */}
      <div id="contact-center-ai-capabilities">
        <AiCapabilitiesSection content={ccAiCapabilities} />
      </div>
    </>
  );
}

export default ContactCenter;
