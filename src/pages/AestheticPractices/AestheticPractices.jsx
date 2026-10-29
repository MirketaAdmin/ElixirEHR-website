import { aeCtaBand, aeHero } from '../../data/aestheticPractices';
import PageHero from '../../components/sections/PageHero/PageHero';
import WideTiltedHeroMedia from '../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import PillarsStrip from './sections/PillarsStrip/PillarsStrip';
import SchedulingSection from './sections/SchedulingSection/SchedulingSection';
import ClinicalSection from './sections/ClinicalSection/ClinicalSection';
import PhotosSection from './sections/PhotosSection/PhotosSection';
import RevenueSection from './sections/RevenueSection/RevenueSection';
import EstimatesSection from './sections/EstimatesSection/EstimatesSection';
import GrowthSection from './sections/GrowthSection/GrowthSection';
import SafetySection from './sections/SafetySection/SafetySection';
import StructureSection from './sections/StructureSection/StructureSection';
import PlatformSection from './sections/PlatformSection/PlatformSection';
import PortalSection from './sections/PortalSection/PortalSection';
import FaqCardsSection from './sections/FaqCardsSection/FaqCardsSection';
import styles from './AestheticPractices.module.css';

/** Aesthetic Practices — a child page of More Specialties. */
function AestheticPractices() {
  const { media, ...hero } = aeHero;

  return (
    <>
      <title>Aesthetic Practice Management Software | More Specialties | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} />} />
      <PillarsStrip />
      <SchedulingSection />
      <ClinicalSection />
      <PhotosSection />
      <RevenueSection />
      <EstimatesSection />
      <GrowthSection />
      <SafetySection />
      <StructureSection />
      <PlatformSection />
      <PortalSection />
      <FaqCardsSection />
      <CtaBanner
        {...aeCtaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      />
    </>
  );
}

export default AestheticPractices;
