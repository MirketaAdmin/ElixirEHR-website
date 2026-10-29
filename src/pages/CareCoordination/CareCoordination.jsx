import { ccCtaBand, ccHero } from '../../data/careCoordination';
import PageHero from '../../components/sections/PageHero/PageHero';
import WideTiltedHeroMedia from '../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import PillarsStrip from './sections/PillarsStrip/PillarsStrip';
import LoopSection from './sections/LoopSection/LoopSection';
import TeamSection from './sections/TeamSection/TeamSection';
import ProgramsSection from './sections/ProgramsSection/ProgramsSection';
import Part2Section from './sections/Part2Section/Part2Section';
import ConsentSection from './sections/ConsentSection/ConsentSection';
import PartnersSection from './sections/PartnersSection/PartnersSection';
import BlockingSection from './sections/BlockingSection/BlockingSection';
import StandardsSection from './sections/StandardsSection/StandardsSection';
import FaqCardsSection from './sections/FaqCardsSection/FaqCardsSection';
import styles from './CareCoordination.module.css';

/** Care Coordination — an independent page (no parent). */
function CareCoordination() {
  const { media, ...hero } = ccHero;

  return (
    <>
      <title>Care Coordination Software | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} />} />
      <PillarsStrip />
      <LoopSection />
      <TeamSection />
      <ProgramsSection />
      <Part2Section />
      <ConsentSection />
      <PartnersSection />
      <BlockingSection />
      <StandardsSection />
      <FaqCardsSection />
      <CtaBanner
        {...ccCtaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      />
    </>
  );
}

export default CareCoordination;
