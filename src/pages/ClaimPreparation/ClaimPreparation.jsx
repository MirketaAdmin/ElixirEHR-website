import { pcCtaBand, pcHero } from '../../data/claimPreparation';
import PageHero from '../../components/sections/PageHero/PageHero';
import TiltedHeroMedia from '../../components/sections/TiltedHeroMedia/TiltedHeroMedia';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import PlatformSection from './sections/PlatformSection/PlatformSection';
import ClaimFlowSection from './sections/ClaimFlowSection/ClaimFlowSection';
import ClaimTypesSection from './sections/ClaimTypesSection/ClaimTypesSection';
import ScrubbingSection from './sections/ScrubbingSection/ScrubbingSection';
import RejectionPredictionSection from './sections/RejectionPredictionSection/RejectionPredictionSection';
import EdiResolutionSection from './sections/EdiResolutionSection/EdiResolutionSection';
import EraPostingSection from './sections/EraPostingSection/EraPostingSection';
import ClearinghouseSection from './sections/ClearinghouseSection/ClearinghouseSection';
import HipaaSection from './sections/HipaaSection/HipaaSection';
import OrganizationsSection from './sections/OrganizationsSection/OrganizationsSection';
import styles from './ClaimPreparation.module.css';

function ClaimPreparation() {
  const { media, ...hero } = pcHero;

  return (
    <>
      <title>Professional & Institutional Claims Software Built on Salesforce | Elixir</title>
      <meta name="description" content={pcHero.description} />
      <PageHero {...hero} className={styles.hero} media={<TiltedHeroMedia {...media} />} />
      <PlatformSection />
      <ClaimFlowSection />
      <ClaimTypesSection />
      <ScrubbingSection />
      <RejectionPredictionSection />
      <EdiResolutionSection />
      <EraPostingSection />
      <ClearinghouseSection />
      <HipaaSection />
      <OrganizationsSection />
      <CtaBanner
        {...pcCtaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      />
    </>
  );
}

export default ClaimPreparation;
