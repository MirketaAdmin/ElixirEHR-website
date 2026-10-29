import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { sudCtaBand, sudHero } from '../../data/substanceUseDisorder';
import PageHero from '../../components/sections/PageHero/PageHero';
import WideTiltedHeroMedia from '../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import HighlightsStrip from './sections/HighlightsStrip/HighlightsStrip';
import ContinuumSection from './sections/ContinuumSection/ContinuumSection';
import ProblemSection from './sections/ProblemSection/ProblemSection';
import AssessmentSection from './sections/AssessmentSection/AssessmentSection';
import ComplianceSection from './sections/ComplianceSection/ComplianceSection';
import MedicationSection from './sections/MedicationSection/MedicationSection';
import AdmissionsSection from './sections/AdmissionsSection/AdmissionsSection';
import ClinicalSection from './sections/ClinicalSection/ClinicalSection';
import RevenueSection from './sections/RevenueSection/RevenueSection';
import OutcomesSection from './sections/OutcomesSection/OutcomesSection';
import KratuSection from './sections/KratuSection/KratuSection';
import FaqCardsSection from './sections/FaqCardsSection/FaqCardsSection';
import styles from './SubstanceUseDisorder.module.css';

/** Substance Use Disorder — an independent page (no parent route). */
function SubstanceUseDisorder() {
  const { media, ...hero } = sudHero;
  const { related, ...ctaBand } = sudCtaBand;

  return (
    <>
      <title>Substance Use Disorder EHR Software | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} />} />
      <HighlightsStrip />
      <ContinuumSection />
      <ProblemSection />
      <AssessmentSection />
      <ComplianceSection />
      <MedicationSection />
      <AdmissionsSection />
      <ClinicalSection />
      <RevenueSection />
      <OutcomesSection />
      <KratuSection />
      <FaqCardsSection />
      <CtaBanner
        {...ctaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      >
        <p className={styles.ctaLinks}>
          {related.map((link, index) => (
            <Fragment key={link.label}>
              {index > 0 && (
                <span aria-hidden="true" className={styles.ctaDot}>
                  ·
                </span>
              )}
              <Link to={link.to} className={styles.ctaLink}>
                {link.label}
              </Link>
            </Fragment>
          ))}
        </p>
      </CtaBanner>
    </>
  );
}

export default SubstanceUseDisorder;
