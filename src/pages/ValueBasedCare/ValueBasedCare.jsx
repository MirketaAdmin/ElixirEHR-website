import { vbCtaBand, vbHero } from '../../data/valueBasedCare';
import PageHero from '../../components/sections/PageHero/PageHero';
import WideTiltedHeroMedia from '../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import PillarsStrip from './sections/PillarsStrip/PillarsStrip';
import TimingSection from './sections/TimingSection/TimingSection';
import EvidenceSection from './sections/EvidenceSection/EvidenceSection';
import TransitionsSection from './sections/TransitionsSection/TransitionsSection';
import ClocksSection from './sections/ClocksSection/ClocksSection';
import MeasurementSection from './sections/MeasurementSection/MeasurementSection';
import CcbhcSection from './sections/CcbhcSection/CcbhcSection';
import ModelsSection from './sections/ModelsSection/ModelsSection';
import ReportingSection from './sections/ReportingSection/ReportingSection';
import FaqSection from './sections/FaqSection/FaqSection';
import styles from './ValueBasedCare.module.css';

/** Value-Based Care — behavioral health and addiction treatment quality measures (Figma frame). */
function ValueBasedCare() {
  const { media, ...hero } = vbHero;

  return (
    <>
      <title>Value-Based Care Software for Behavioral Health | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} />} />
      <PillarsStrip />
      <TimingSection />
      <EvidenceSection />
      <TransitionsSection />
      <ClocksSection />
      <MeasurementSection />
      <CcbhcSection />
      <ModelsSection />
      <ReportingSection />
      <FaqSection />
      <CtaBanner
        {...vbCtaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      />
    </>
  );
}

export default ValueBasedCare;
