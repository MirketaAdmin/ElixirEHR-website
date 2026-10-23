import { epaCtaBand, epaHero } from '../../data/electronicPriorAuthorization';
import PageHero from '../../components/sections/PageHero/PageHero';
import TiltedHeroMedia from '../../components/sections/TiltedHeroMedia/TiltedHeroMedia';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import PathSection from './sections/PathSection/PathSection';
import AiSection from './sections/AiSection/AiSection';
import SharedDataSection from './sections/SharedDataSection/SharedDataSection';
import WorkflowSection from './sections/WorkflowSection/WorkflowSection';
import FeaturesSection from './sections/FeaturesSection/FeaturesSection';
import BenefitsSection from './sections/BenefitsSection/BenefitsSection';
import AudiencesSection from './sections/AudiencesSection/AudiencesSection';
import WhyElixirSection from './sections/WhyElixirSection/WhyElixirSection';
import styles from './ElectronicPriorAuthorization.module.css';

/** Electronic Prior Authorization — a child page of Revenue Cycle Management. */
function ElectronicPriorAuthorization() {
  const { media, ...hero } = epaHero;

  return (
    <>
      <title>Electronic Prior Authorization Software | Revenue Cycle Management | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<TiltedHeroMedia {...media} />} />
      <PathSection />
      <AiSection />
      <SharedDataSection />
      <WorkflowSection />
      <FeaturesSection />
      <BenefitsSection />
      <AudiencesSection />
      <WhyElixirSection />
      <CtaBanner
        {...epaCtaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      />
    </>
  );
}

export default ElectronicPriorAuthorization;
