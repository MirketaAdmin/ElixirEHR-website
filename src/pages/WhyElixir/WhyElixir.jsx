import { whyElixirHero, ctaBand } from '../../data/whyElixir';
import PageHero from '../../components/sections/PageHero/PageHero';
import WhyHeroMedia from './sections/WhyHeroMedia/WhyHeroMedia';
import PillarsSection from './sections/PillarsSection/PillarsSection';
import AiCapabilitiesSection from '../../components/sections/AiCapabilitiesSection/AiCapabilitiesSection';
import SolutionsSection from './sections/SolutionsSection/SolutionsSection';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import styles from './WhyElixir.module.css';

function WhyElixir() {
  const { image, stat, ...hero } = whyElixirHero;

  return (
    <>
      <title>Why Elixir | Elixir</title>
      <meta name="description" content={whyElixirHero.description} />
      <PageHero {...hero} className={styles.hero} media={<WhyHeroMedia image={image} stat={stat} />} />
      <PillarsSection />
      <AiCapabilitiesSection />
      <SolutionsSection />
      <CtaBanner
        {...ctaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      />
    </>
  );
}

export default WhyElixir;
