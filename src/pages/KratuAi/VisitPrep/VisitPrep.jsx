import { Fragment } from 'react';
import { visitPrepCtaBand, visitPrepHero } from '../../../data/visitPrep';
import PageHero from '../../../components/sections/PageHero/PageHero';
import WideTiltedHeroMedia from '../../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import CtaBanner from '../../../components/sections/CtaBanner/CtaBanner';
import HighlightsStrip from './sections/HighlightsStrip/HighlightsStrip';
import FlowSection from './sections/FlowSection/FlowSection';
import PathwaysSection from './sections/PathwaysSection/PathwaysSection';
import SafeguardsSection from './sections/SafeguardsSection/SafeguardsSection';
import BoundarySection from './sections/BoundarySection/BoundarySection';
import ClinicianSection from './sections/ClinicianSection/ClinicianSection';
import FaqCardsSection from './sections/FaqCardsSection/FaqCardsSection';
import PageSeo from '../../../components/seo/PageSeo/PageSeo';
import styles from './VisitPrep.module.css';

/** Visit Prep — a child page of KratuAI (/ai-pre-visit-preparation). */
function VisitPrep() {
  const { media, ...hero } = visitPrepHero;
  const { related, ...ctaBand } = visitPrepCtaBand;

  return (
    <>
      <PageSeo path="/ai-pre-visit-preparation" />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} className={styles.heroMedia} />} />
      <HighlightsStrip />
      <FlowSection />
      <PathwaysSection />
      <SafeguardsSection />
      <BoundarySection />
      <ClinicianSection />
      <FaqCardsSection />
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
