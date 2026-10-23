import { shCtaBand, shFaq, shHero } from '../../data/studentHealth';
import PageHero from '../../components/sections/PageHero/PageHero';
import WideTiltedHeroMedia from '../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import FaqSection from '../../components/sections/FaqSection/FaqSection';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import PillarsStrip from './sections/PillarsStrip/PillarsStrip';
import GapSection from './sections/GapSection/GapSection';
import IntakeSection from './sections/IntakeSection/IntakeSection';
import ConsentSection from './sections/ConsentSection/ConsentSection';
import RoutingSection from './sections/RoutingSection/RoutingSection';
import CareSection from './sections/CareSection/CareSection';
import DocumentationSection from './sections/DocumentationSection/DocumentationSection';
import ProgramsSection from './sections/ProgramsSection/ProgramsSection';
import ClaimsSection from './sections/ClaimsSection/ClaimsSection';
import CaliforniaSection from './sections/CaliforniaSection/CaliforniaSection';
import PrivacySection from './sections/PrivacySection/PrivacySection';
import styles from './StudentHealth.module.css';

/** Student Health — a child page of More Specialties (the "Student Care Management" frame). */
function StudentHealth() {
  const { media, ...hero } = shHero;

  return (
    <>
      <title>Student Care Management Software | More Specialties | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} />} />
      <PillarsStrip />
      <GapSection />
      <IntakeSection />
      <ConsentSection />
      <RoutingSection />
      <CareSection />
      <DocumentationSection />
      <ProgramsSection />
      <ClaimsSection />
      <CaliforniaSection />
      <PrivacySection />
      <FaqSection {...shFaq} />
      <CtaBanner
        {...shCtaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      />
    </>
  );
}

export default StudentHealth;
