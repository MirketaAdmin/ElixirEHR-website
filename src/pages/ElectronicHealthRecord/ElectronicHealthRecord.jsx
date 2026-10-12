import { ehrCtaBand, ehrFeatures, ehrHero } from '../../data/electronicHealthRecord';
import PageHero from '../../components/sections/PageHero/PageHero';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import AiCapabilitiesSection from '../../components/sections/AiCapabilitiesSection/AiCapabilitiesSection';
import EhrHeroMedia from './sections/EhrHeroMedia/EhrHeroMedia';
import FeatureSplitSection from './sections/FeatureSplitSection/FeatureSplitSection';
import IntegrationPortfolioSection from './sections/IntegrationPortfolioSection/IntegrationPortfolioSection';
import InfoCardsSection from './sections/InfoCardsSection/InfoCardsSection';
import OrderFromChaosSection from './sections/OrderFromChaosSection/OrderFromChaosSection';
import styles from './ElectronicHealthRecord.module.css';

function ElectronicHealthRecord() {
  const { media, ...hero } = ehrHero;

  return (
    <>
      <title>Electronic Health Record (EHR) | Elixir</title>
      <meta name="description" content={ehrHero.description} />
      <PageHero {...hero} className={styles.hero} media={<EhrHeroMedia {...media} />} />
      <OrderFromChaosSection />
      <AiCapabilitiesSection />
      {ehrFeatures.map((feature) => (
        <FeatureSplitSection key={feature.id} {...feature} />
      ))}
      <InfoCardsSection />
      <IntegrationPortfolioSection />
      <CtaBanner
        {...ehrCtaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
      />
    </>
  );
}

export default ElectronicHealthRecord;
