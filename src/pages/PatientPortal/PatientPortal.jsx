import { patientPortalCtaBand, patientPortalFaq, patientPortalHero } from '../../data/patientPortal';
import PageHero from '../../components/sections/PageHero/PageHero';
import FaqSection from '../../components/sections/FaqSection/FaqSection';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import HeroMedia from './sections/HeroMedia/HeroMedia';
import HighlightsStrip from './sections/HighlightsStrip/HighlightsStrip';
import TasksSection from './sections/TasksSection/TasksSection';
import AdoptionSection from './sections/AdoptionSection/AdoptionSection';
import AccessSection from './sections/AccessSection/AccessSection';
import LimitsSection from './sections/LimitsSection/LimitsSection';
import AlumniSection from './sections/AlumniSection/AlumniSection';
import styles from './PatientPortal.module.css';

function PatientPortal() {
  const { media, badge, ...hero } = patientPortalHero;

  return (
    <>
      <title>Patient Portal | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<HeroMedia media={media} badge={badge} />} />
      <HighlightsStrip />
      <TasksSection />
      <AdoptionSection />
      <AccessSection />
      <LimitsSection />
      <FaqSection {...patientPortalFaq} />
      <AlumniSection />
      <CtaBanner {...patientPortalCtaBand} className={styles.ctaBand} ctaClassName={styles.ctaButton} />
    </>
  );
}

export default PatientPortal;
