import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { noShowCtaBand, noShowFaq, noShowHero } from '../../data/patientNoShowPrediction';
import PageHero from '../../components/sections/PageHero/PageHero';
import TiltedHeroMedia from '../../components/sections/TiltedHeroMedia/TiltedHeroMedia';
import FaqSection from '../../components/sections/FaqSection/FaqSection';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import ProblemSection from './sections/ProblemSection/ProblemSection';
import ScopeSection from './sections/ScopeSection/ScopeSection';
import SignalsSection from './sections/SignalsSection/SignalsSection';
import OperationsSection from './sections/OperationsSection/OperationsSection';
import PositionSection from './sections/PositionSection/PositionSection';
import MeasurementSection from './sections/MeasurementSection/MeasurementSection';
import SpecialtySection from './sections/SpecialtySection/SpecialtySection';
import PlatformSection from './sections/PlatformSection/PlatformSection';
import styles from './PatientNoShowPrediction.module.css';

function PatientNoShowPrediction() {
  const { media, ...hero } = noShowHero;
  const { related, ...ctaBand } = noShowCtaBand;

  return (
    <>
      <title>Patient No-Show Prediction | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<TiltedHeroMedia {...media} />} />
      <ProblemSection />
      <ScopeSection />
      <SignalsSection />
      <OperationsSection />
      <PositionSection />
      <MeasurementSection />
      <SpecialtySection />
      <PlatformSection />
      <FaqSection {...noShowFaq} />
      <CtaBanner
        {...ctaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      >
        <p className={styles.ctaLinks}>
          Related:{' '}
          {related.map((link, index) => (
            <Fragment key={link.label}>
              {index > 0 && <span aria-hidden="true"> · </span>}
              {link.to ? <Link to={link.to}>{link.label}</Link> : <span>{link.label}</span>}
            </Fragment>
          ))}
        </p>
      </CtaBanner>
    </>
  );
}

export default PatientNoShowPrediction;
