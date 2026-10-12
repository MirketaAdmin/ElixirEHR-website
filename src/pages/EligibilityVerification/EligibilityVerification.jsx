import { evCtaBand, evHero } from '../../data/eligibilityVerification';
import PageHero from '../../components/sections/PageHero/PageHero';
import TiltedHeroMedia from '../../components/sections/TiltedHeroMedia/TiltedHeroMedia';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import FrontDeskSection from './sections/FrontDeskSection/FrontDeskSection';
import StatsSection from './sections/StatsSection/StatsSection';
import CapabilitiesSection from './sections/CapabilitiesSection/CapabilitiesSection';
import HowItWorksSection from './sections/HowItWorksSection/HowItWorksSection';
import SalesforceEhrSection from './sections/SalesforceEhrSection/SalesforceEhrSection';
import ClearinghouseChecksSection from './sections/ClearinghouseChecksSection/ClearinghouseChecksSection';
import BenefitsAuditSection from './sections/BenefitsAuditSection/BenefitsAuditSection';
import BulkVerificationSection from './sections/BulkVerificationSection/BulkVerificationSection';
import BuyerChecklistSection from './sections/BuyerChecklistSection/BuyerChecklistSection';
import CareSettingsSection from './sections/CareSettingsSection/CareSettingsSection';
import styles from './EligibilityVerification.module.css';

function EligibilityVerification() {
  const { media, ...hero } = evHero;

  return (
    <>
      <title>Real-Time Insurance Eligibility Verification | Elixir</title>
      <meta name="description" content={evHero.description} />
      <PageHero {...hero} className={styles.hero} media={<TiltedHeroMedia {...media} />} />
      <FrontDeskSection />
      <StatsSection />
      <CapabilitiesSection />
      <HowItWorksSection />
      <SalesforceEhrSection />
      <ClearinghouseChecksSection />
      <BenefitsAuditSection />
      <BulkVerificationSection />
      <BuyerChecklistSection />
      <CareSettingsSection />
      <CtaBanner
        {...evCtaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      />
    </>
  );
}

export default EligibilityVerification;
