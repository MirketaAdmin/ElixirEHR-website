import { coPilotCtaBand, coPilotFaq, coPilotHero } from '../../../data/coPilot';
import PageHero from '../../../components/sections/PageHero/PageHero';
import WideTiltedHeroMedia from '../../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import FaqSection from '../../../components/sections/FaqSection/FaqSection';
import CtaBanner from '../../../components/sections/CtaBanner/CtaBanner';
import PillarsStrip from './sections/PillarsStrip/PillarsStrip';
import OverviewSection from './sections/OverviewSection/OverviewSection';
import VisitFlowSection from './sections/VisitFlowSection/VisitFlowSection';
import InsightsSection from './sections/InsightsSection/InsightsSection';
import DictationSection from './sections/DictationSection/DictationSection';
import SafetySection from './sections/SafetySection/SafetySection';
import ControlSection from './sections/ControlSection/ControlSection';
import BehavioralSection from './sections/BehavioralSection/BehavioralSection';
import styles from './CoPilot.module.css';

/** Elixir Co-Pilot (Clinical Assistant) — a child page of KratuAI. */
function CoPilot() {
  const { media, ...hero } = coPilotHero;
  const { footnote, ...ctaBand } = coPilotCtaBand;

  return (
    <>
      <title>Kratu Co-Pilot: AI Clinical Documentation | KratuAI | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} />} />
      <PillarsStrip />
      <OverviewSection />
      <VisitFlowSection />
      <InsightsSection />
      <DictationSection />
      <SafetySection />
      <ControlSection />
      <BehavioralSection />
      <FaqSection {...coPilotFaq} />
      <CtaBanner
        {...ctaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      >
        <p className={styles.ctaFootnote}>{footnote}</p>
      </CtaBanner>
    </>
  );
}

export default CoPilot;
