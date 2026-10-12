import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { evvCtaBand, evvFaq, evvHero } from '../../data/electronicVisitVerification';
import PageHero from '../../components/sections/PageHero/PageHero';
import TiltedHeroMedia from '../../components/sections/TiltedHeroMedia/TiltedHeroMedia';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import FaqSection from '../../components/sections/FaqSection/FaqSection';
import HighlightsSection from './sections/HighlightsSection/HighlightsSection';
import RequirementSection from './sections/RequirementSection/RequirementSection';
import ElementsSection from './sections/ElementsSection/ElementsSection';
import ModelsSection from './sections/ModelsSection/ModelsSection';
import ScopeSection from './sections/ScopeSection/ScopeSection';
import BreakpointsSection from './sections/BreakpointsSection/BreakpointsSection';
import ApproachSection from './sections/ApproachSection/ApproachSection';
import ExploreSection from './sections/ExploreSection/ExploreSection';
import styles from './ElectronicVisitVerification.module.css';

function ElectronicVisitVerification() {
  const { media, ...hero } = evvHero;
  const { links, ...ctaBand } = evvCtaBand;

  return (
    <>
      <title>Electronic Visit Verification for Medicaid Home Care | Elixir</title>
      <meta name="description" content={evvHero.description} />
      <PageHero {...hero} className={styles.hero} media={<TiltedHeroMedia {...media} />} />
      <HighlightsSection />
      <RequirementSection />
      <ElementsSection />
      <ModelsSection />
      <ScopeSection />
      <BreakpointsSection />
      <ApproachSection />
      <ExploreSection />
      <FaqSection {...evvFaq} />
      <CtaBanner
        {...ctaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      >
        <p className={styles.ctaLinks}>
          {links.map((link, index) => (
            <Fragment key={link.to}>
              {index > 0 && <span aria-hidden="true">·</span>}
              <Link to={link.to}>{link.label}</Link>
            </Fragment>
          ))}
        </p>
      </CtaBanner>
    </>
  );
}

export default ElectronicVisitVerification;
