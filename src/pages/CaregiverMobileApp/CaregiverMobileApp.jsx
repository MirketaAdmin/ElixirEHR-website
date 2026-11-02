import { cmaCtaBand, cmaHero } from '../../data/caregiverMobileApp';
import PageHero from '../../components/sections/PageHero/PageHero';
import WideTiltedHeroMedia from '../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import TourSection from './sections/TourSection/TourSection';
import OfflineSection from './sections/OfflineSection/OfflineSection';
import FaqCardsSection from './sections/FaqCardsSection/FaqCardsSection';
import SubmissionSection from './sections/SubmissionSection/SubmissionSection';
import PageSeo from '../../components/seo/PageSeo/PageSeo';
import styles from './CaregiverMobileApp.module.css';

function CaregiverMobileApp() {
  const { media, ...hero } = cmaHero;

  return (
    <>
      <PageSeo path="/caregiver-mobile-app" />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} />} />
      <TourSection />
      <OfflineSection />
      <FaqCardsSection />
      <SubmissionSection />
      <CtaBanner
        {...cmaCtaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      />
    </>
  );
}

export default CaregiverMobileApp;
