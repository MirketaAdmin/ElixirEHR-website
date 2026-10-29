import { opCtaBand, opHero } from '../../data/outpatientClinics';
import PageHero from '../../components/sections/PageHero/PageHero';
import WideTiltedHeroMedia from '../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import PillarsStrip from './sections/PillarsStrip/PillarsStrip';
import CoreSection from './sections/CoreSection/CoreSection';
import IntakeSection from './sections/IntakeSection/IntakeSection';
import CoverageSection from './sections/CoverageSection/CoverageSection';
import GfeSection from './sections/GfeSection/GfeSection';
import SchedulingSection from './sections/SchedulingSection/SchedulingSection';
import ClinicalSection from './sections/ClinicalSection/ClinicalSection';
import PrescribingSection from './sections/PrescribingSection/PrescribingSection';
import RevenueSection from './sections/RevenueSection/RevenueSection';
import TelehealthSection from './sections/TelehealthSection/TelehealthSection';
import ReportingSection from './sections/ReportingSection/ReportingSection';
import InteropSection from './sections/InteropSection/InteropSection';
import FaqCardsSection from './sections/FaqCardsSection/FaqCardsSection';
import styles from './OutpatientClinics.module.css';

/** Outpatient Clinics — a child page of More Specialties. */
function OutpatientClinics() {
  const { media, ...hero } = opHero;

  return (
    <>
      <title>Outpatient Clinic EHR Software | More Specialties | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} />} />
      <PillarsStrip />
      <CoreSection />
      <IntakeSection />
      <CoverageSection />
      <GfeSection />
      <SchedulingSection />
      <ClinicalSection />
      <PrescribingSection />
      <RevenueSection />
      <TelehealthSection />
      <ReportingSection />
      <InteropSection />
      <FaqCardsSection />
      <CtaBanner
        {...opCtaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      />
    </>
  );
}

export default OutpatientClinics;
