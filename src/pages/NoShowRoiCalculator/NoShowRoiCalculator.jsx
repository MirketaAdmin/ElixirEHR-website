import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { roiCtaBand, roiFaq, roiHero } from '../../data/noShowRoiCalculator';
import PageHero from '../../components/sections/PageHero/PageHero';
import TiltedHeroMedia from '../../components/sections/TiltedHeroMedia/TiltedHeroMedia';
import FaqSection from '../../components/sections/FaqSection/FaqSection';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import HighlightsStrip from './sections/HighlightsStrip/HighlightsStrip';
import CalculatorSection from './sections/CalculatorSection/CalculatorSection';
import LogicSection from './sections/LogicSection/LogicSection';
import ScopeSection from './sections/ScopeSection/ScopeSection';
import TargetsSection from './sections/TargetsSection/TargetsSection';
import BenchmarkSection from './sections/BenchmarkSection/BenchmarkSection';
import BriefSection from './sections/BriefSection/BriefSection';
import { ROI_DEFAULTS } from './roiModel';
import styles from './NoShowRoiCalculator.module.css';

function NoShowRoiCalculator() {
  const { media, ...hero } = roiHero;
  const { related, ...ctaBand } = roiCtaBand;
  // The calculator's inputs live here so the executive-summary request can include them.
  const [inputs, setInputs] = useState(ROI_DEFAULTS);

  return (
    <>
      <title>No-Show ROI Calculator | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<TiltedHeroMedia {...media} />} />
      <HighlightsStrip />
      <CalculatorSection inputs={inputs} onChange={setInputs} onReset={() => setInputs(ROI_DEFAULTS)} />
      <LogicSection />
      <ScopeSection />
      <TargetsSection />
      <BenchmarkSection />
      <BriefSection inputs={inputs} />
      <FaqSection {...roiFaq} />
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
              <Link to={link.to}>{link.label}</Link>
            </Fragment>
          ))}
        </p>
      </CtaBanner>
    </>
  );
}

export default NoShowRoiCalculator;
