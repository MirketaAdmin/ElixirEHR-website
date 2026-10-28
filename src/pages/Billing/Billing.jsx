import { billingAiCapabilities, billingCtaBand, billingHero } from '../../data/billing';
import PageHero from '../../components/sections/PageHero/PageHero';
import AiCapabilitiesSection from '../../components/sections/AiCapabilitiesSection/AiCapabilitiesSection';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import BadgeHeroMedia from '../../components/sections/BadgeHeroMedia/BadgeHeroMedia';
import StatsSection from './sections/StatsSection/StatsSection';
import EcosystemSection from './sections/EcosystemSection/EcosystemSection';
import InsightsSection from './sections/InsightsSection/InsightsSection';
import PartnersSection from './sections/PartnersSection/PartnersSection';
import QuestionsSection from './sections/QuestionsSection/QuestionsSection';
import styles from './Billing.module.css';

function Billing() {
  const { media, badge, ...hero } = billingHero;

  return (
    <>
      <title>Billing | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<BadgeHeroMedia media={media} badge={badge} />} />
      <StatsSection />
      {/* "Explore Features" in the hero scrolls here. */}
      <div id="billing-ai-capabilities">
        <AiCapabilitiesSection content={billingAiCapabilities} className={styles.ai} />
      </div>
      <EcosystemSection />
      <InsightsSection />
      <PartnersSection />
      <QuestionsSection />
      <CtaBanner
        {...billingCtaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      />
    </>
  );
}

export default Billing;
