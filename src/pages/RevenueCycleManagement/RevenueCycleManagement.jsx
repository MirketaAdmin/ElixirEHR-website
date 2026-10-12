import { rcmCtaBand, rcmFaq, rcmHero } from '../../data/revenueCycleManagement';
import PageHero from '../../components/sections/PageHero/PageHero';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import TiltedHeroMedia from '../../components/sections/TiltedHeroMedia/TiltedHeroMedia';
import UnifiedPlatformSection from './sections/UnifiedPlatformSection/UnifiedPlatformSection';
import PatientJourneySection from './sections/PatientJourneySection/PatientJourneySection';
import EligibilitySection from './sections/EligibilitySection/EligibilitySection';
import PayerWorkflowSection from './sections/PayerWorkflowSection/PayerWorkflowSection';
import ClaimFormsSection from './sections/ClaimFormsSection/ClaimFormsSection';
import MedicalClaimsSection from './sections/MedicalClaimsSection/MedicalClaimsSection';
import ClearinghouseSection from './sections/ClearinghouseSection/ClearinghouseSection';
import EraPostingSection from './sections/EraPostingSection/EraPostingSection';
import DenialManagementSection from './sections/DenialManagementSection/DenialManagementSection';
import SalesforcePlatformSection from './sections/SalesforcePlatformSection/SalesforcePlatformSection';
import ConnectedEhrSection from './sections/ConnectedEhrSection/ConnectedEhrSection';
import RcmWorkflowsSection from './sections/RcmWorkflowsSection/RcmWorkflowsSection';
import MultiPayerSection from './sections/MultiPayerSection/MultiPayerSection';
import RcmAiCapabilitiesSection from './sections/RcmAiCapabilitiesSection/RcmAiCapabilitiesSection';
import FaqSection from '../../components/sections/FaqSection/FaqSection';
import styles from './RevenueCycleManagement.module.css';

function RevenueCycleManagement() {
  const { media, ...hero } = rcmHero;

  return (
    <>
      <title>Healthcare Revenue Cycle Management and Payer Workflows | Elixir</title>
      <meta name="description" content={rcmHero.description} />
      <PageHero {...hero} className={styles.hero} media={<TiltedHeroMedia {...media} />} />
      <UnifiedPlatformSection />
      <PatientJourneySection />
      <EligibilitySection />
      <PayerWorkflowSection />
      <ClaimFormsSection />
      <MedicalClaimsSection />
      <ClearinghouseSection />
      <EraPostingSection />
      <DenialManagementSection />
      <SalesforcePlatformSection />
      <ConnectedEhrSection />
      <RcmWorkflowsSection />
      <MultiPayerSection />
      <RcmAiCapabilitiesSection />
      <FaqSection {...rcmFaq} />
      <CtaBanner
        {...rcmCtaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      />
    </>
  );
}

export default RevenueCycleManagement;
