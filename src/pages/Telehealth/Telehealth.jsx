import { thCtaBand, thHero } from '../../data/telehealth';
import PageHero from '../../components/sections/PageHero/PageHero';
import WideTiltedHeroMedia from '../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import PillarsStrip from './sections/PillarsStrip/PillarsStrip';
import EngagementSection from './sections/EngagementSection/EngagementSection';
import DataSection from './sections/DataSection/DataSection';
import ExperienceSection from './sections/ExperienceSection/ExperienceSection';
import OperationsSection from './sections/OperationsSection/OperationsSection';
import BillingSection from './sections/BillingSection/BillingSection';
import MedicareSection from './sections/MedicareSection/MedicareSection';
import PrescribingSection from './sections/PrescribingSection/PrescribingSection';
import LicensureSection from './sections/LicensureSection/LicensureSection';
import PrivacySection from './sections/PrivacySection/PrivacySection';
import WhySection from './sections/WhySection/WhySection';
import FaqCardsSection from './sections/FaqCardsSection/FaqCardsSection';
import styles from './Telehealth.module.css';

/** Telehealth — a child page of More Specialties. */
function Telehealth() {
  const { media, ...hero } = thHero;

  return (
    <>
      <title>Telehealth Software | More Specialties | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} />} />
      <PillarsStrip />
      <EngagementSection />
      <DataSection />
      <ExperienceSection />
      <OperationsSection />
      <BillingSection />
      <MedicareSection />
      <PrescribingSection />
      <LicensureSection />
      <PrivacySection />
      <WhySection />
      <FaqCardsSection />
      <CtaBanner
        {...thCtaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      />
    </>
  );
}

export default Telehealth;
