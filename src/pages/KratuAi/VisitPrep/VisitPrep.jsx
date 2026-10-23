import { Fragment } from 'react';
import { visitPrepCtaBand, visitPrepFaq, visitPrepHero } from '../../../data/visitPrep';
import PageHero from '../../../components/sections/PageHero/PageHero';
import WideTiltedHeroMedia from '../../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import FaqSection from '../../../components/sections/FaqSection/FaqSection';
import CtaBanner from '../../../components/sections/CtaBanner/CtaBanner';
import HighlightsStrip from './sections/HighlightsStrip/HighlightsStrip';
import FlowSection from './sections/FlowSection/FlowSection';
import PathwaysSection from './sections/PathwaysSection/PathwaysSection';
import SafeguardsSection from './sections/SafeguardsSection/SafeguardsSection';
import BoundarySection from './sections/BoundarySection/BoundarySection';
import ClinicianSection from './sections/ClinicianSection/ClinicianSection';
import styles from './VisitPrep.module.css';

/** Visit Prep — a child page of KratuAI (/kratu-ai/visit-prep). */
function VisitPrep() {
  const { media, ...hero } = visitPrepHero;
  const { related, ...ctaBand } = visitPrepCtaBand;

  return (
    <>
      <title>Visit Prep: AI Pre-Visit Questionnaire | KratuAI | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} />} />
      <HighlightsStrip />
      <FlowSection />
      <PathwaysSection />
      <SafeguardsSection />
      <BoundarySection />
      <ClinicianSection />
      <FaqSection {...visitPrepFaq} />
      <CtaBanner
        {...ctaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      >
        <p className={styles.ctaLinks}>
          {related.label}{' '}
          {related.links.map((link, index) => (
            <Fragment key={link.label}>
              {index > 0 && <span aria-hidden="true"> • </span>}
              <span className={styles.ctaLink}>{link.label}</span>
            </Fragment>
          ))}
        </p>
      </CtaBanner>
    </>
  );
}

export default VisitPrep;
