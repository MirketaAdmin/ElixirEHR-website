import { cmaCtaBand, cmaFaq, cmaHero } from '../../data/caregiverMobileApp';
import PageHero from '../../components/sections/PageHero/PageHero';
import TiltedHeroMedia from '../../components/sections/TiltedHeroMedia/TiltedHeroMedia';
import FaqSection from '../../components/sections/FaqSection/FaqSection';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import TourSection from './sections/TourSection/TourSection';
import OfflineSection from './sections/OfflineSection/OfflineSection';
import SubmissionSection from './sections/SubmissionSection/SubmissionSection';
import styles from './CaregiverMobileApp.module.css';

function CaregiverMobileApp() {
  const { media, ...hero } = cmaHero;

  return (
    <>
      <title>Field Caregiver Experience with Salesforce EVV | Elixir</title>
      <meta name="description" content={cmaHero.description[0]} />
      <PageHero {...hero} className={styles.hero} media={<TiltedHeroMedia {...media} />} />
      <TourSection />
      <OfflineSection />
      <FaqSection {...cmaFaq} />
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
