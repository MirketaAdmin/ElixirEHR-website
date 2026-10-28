import { patientPortalCtaBand, patientPortalHero } from '../../data/patientPortal';
import PageHero from '../../components/sections/PageHero/PageHero';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import BadgeHeroMedia from '../../components/sections/BadgeHeroMedia/BadgeHeroMedia';
import HighlightsStrip from './sections/HighlightsStrip/HighlightsStrip';
import TasksSection from './sections/TasksSection/TasksSection';
import AdoptionSection from './sections/AdoptionSection/AdoptionSection';
import AccessSection from './sections/AccessSection/AccessSection';
import LimitsSection from './sections/LimitsSection/LimitsSection';
import FaqCardsSection from './sections/FaqCardsSection/FaqCardsSection';
import AlumniSection from './sections/AlumniSection/AlumniSection';
import styles from './PatientPortal.module.css';

function PatientPortal() {
  const { media, badge, ...hero } = patientPortalHero;

  return (
    <>
      <title>Patient Portal | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<BadgeHeroMedia media={media} badge={badge} className={styles.heroMedia} />} />
      <HighlightsStrip />
      <TasksSection />
      <AdoptionSection />
      <AccessSection />
      <LimitsSection />
      <FaqCardsSection />
      <AlumniSection />
      <CtaBanner {...patientPortalCtaBand} className={styles.ctaBand} ctaClassName={styles.ctaButton} />
    </>
  );
}

export default PatientPortal;
