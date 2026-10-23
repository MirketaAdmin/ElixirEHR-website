import { spCtaBand, spFaq, spHero } from '../../data/smallPractices';
import PageHero from '../../components/sections/PageHero/PageHero';
import WideTiltedHeroMedia from '../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import FaqSection from '../../components/sections/FaqSection/FaqSection';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import PillarsStrip from './sections/PillarsStrip/PillarsStrip';
import NeedsSection from './sections/NeedsSection/NeedsSection';
import ImplementationSection from './sections/ImplementationSection/ImplementationSection';
import ClinicalSection from './sections/ClinicalSection/ClinicalSection';
import BillingSection from './sections/BillingSection/BillingSection';
import TelehealthSection from './sections/TelehealthSection/TelehealthSection';
import ExperienceSection from './sections/ExperienceSection/ExperienceSection';
import ReportingSection from './sections/ReportingSection/ReportingSection';
import MipsSection from './sections/MipsSection/MipsSection';
import ObligationsSection from './sections/ObligationsSection/ObligationsSection';
import SecuritySection from './sections/SecuritySection/SecuritySection';
import GrowthSection from './sections/GrowthSection/GrowthSection';
import styles from './SmallPractices.module.css';

/** Small Practices — a child page of More Specialties. */
function SmallPractices() {
  const { media, ...hero } = spHero;

  return (
    <>
      <title>Small Practice EHR Software | More Specialties | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} />} />
      <PillarsStrip />
      <NeedsSection />
      <ImplementationSection />
      <ClinicalSection />
      <BillingSection />
      <TelehealthSection />
      <ExperienceSection />
      <ReportingSection />
      <MipsSection />
      <ObligationsSection />
      <SecuritySection />
      <GrowthSection />
      <FaqSection {...spFaq} />
      <CtaBanner
        {...spCtaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      />
    </>
  );
}

export default SmallPractices;
