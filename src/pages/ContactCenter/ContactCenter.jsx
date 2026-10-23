import { ccCtaBand, ccFaq, ccHero } from '../../data/contactCenter';
import PageHero from '../../components/sections/PageHero/PageHero';
import FaqSection from '../../components/sections/FaqSection/FaqSection';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import WideTiltedHeroMedia from '../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import HighlightsStrip from './sections/HighlightsStrip/HighlightsStrip';
import AgentSection from './sections/AgentSection/AgentSection';
import IntakeSection from './sections/IntakeSection/IntakeSection';
import OutreachSection from './sections/OutreachSection/OutreachSection';
import ComplianceSection from './sections/ComplianceSection/ComplianceSection';
import VerificationSection from './sections/VerificationSection/VerificationSection';
import CensusSection from './sections/CensusSection/CensusSection';
import ReferralSection from './sections/ReferralSection/ReferralSection';
import BehavioralSection from './sections/BehavioralSection/BehavioralSection';
import IntegrationsSection from './sections/IntegrationsSection/IntegrationsSection';
import ConsultationSection from './sections/ConsultationSection/ConsultationSection';
import styles from './ContactCenter.module.css';

function ContactCenter() {
  const { media, ...hero } = ccHero;

  return (
    <>
      <title>Healthcare Contact Center | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} />} />
      <HighlightsStrip />
      <AgentSection />
      <IntakeSection />
      <OutreachSection />
      <ComplianceSection />
      <VerificationSection />
      <CensusSection />
      <ReferralSection />
      <BehavioralSection />
      <IntegrationsSection />
      <FaqSection {...ccFaq} />
      <ConsultationSection />
      <CtaBanner
        {...ccCtaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      />
    </>
  );
}

export default ContactCenter;
