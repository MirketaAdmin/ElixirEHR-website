import { arCtaBand, arFeatures, arHero } from '../../../data/arAgent';
import { resources } from '../../../data/home';
import PageHero from '../../../components/sections/PageHero/PageHero';
import WideTiltedHeroMedia from '../../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import ResourcesSection from '../../../components/sections/ResourcesSection/ResourcesSection';
import CtaBanner from '../../../components/sections/CtaBanner/CtaBanner';
import ValueSection from './sections/ValueSection/ValueSection';
import CapabilitiesSection from './sections/CapabilitiesSection/CapabilitiesSection';
import CycleSection from './sections/CycleSection/CycleSection';
import FeatureRow from './sections/FeatureRow/FeatureRow';
import styles from './ArAgent.module.css';

/** A/R Agent ("Revenue Kratu AI") — a child page of KratuAI. */
function ArAgent() {
  const { media, ...hero } = arHero;

  return (
    <>
      <title>A/R Agent: Revenue Kratu AI | KratuAI | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} />} />
      <ValueSection />
      <CapabilitiesSection />
      <CycleSection />
      {/* The bands alternate: light, surface, light… */}
      {arFeatures.map((row, index) => (
        <FeatureRow key={row.id} row={row} tone={index % 2 ? 'surface' : 'light'} />
      ))}
      {/* The site's shared Knowledge Base, with Home's content (the frame shows the same cards). */}
      <ResourcesSection {...resources} className={styles.resources} />
      <CtaBanner
        {...arCtaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      />
    </>
  );
}

export default ArAgent;
