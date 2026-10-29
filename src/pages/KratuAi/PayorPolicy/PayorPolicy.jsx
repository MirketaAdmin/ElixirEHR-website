import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ppCtaBand, ppHero, ppStages } from '../../../data/payorPolicy';
import PageHero from '../../../components/sections/PageHero/PageHero';
import WideTiltedHeroMedia from '../../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import CtaBanner from '../../../components/sections/CtaBanner/CtaBanner';
import HighlightsStrip from './sections/HighlightsStrip/HighlightsStrip';
import ProblemSection from './sections/ProblemSection/ProblemSection';
import IngestionSection from './sections/IngestionSection/IngestionSection';
import ConfidenceSection from './sections/ConfidenceSection/ConfidenceSection';
import StageRow from './sections/StageRow/StageRow';
import ScoringSection from './sections/ScoringSection/ScoringSection';
import AuditSection from './sections/AuditSection/AuditSection';
import BoundariesSection from './sections/BoundariesSection/BoundariesSection';
import FaqCardsSection from './sections/FaqCardsSection/FaqCardsSection';
import styles from './PayorPolicy.module.css';

/** Payor Policy Intelligence — a child page of KratuAI. */
function PayorPolicy() {
  const { media, ...hero } = ppHero;
  const { related, ...ctaBand } = ppCtaBand;

  return (
    <>
      <title>Payor Policy Intelligence: Payer Policies as Live Billing Rules | KratuAI | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} />} />
      <HighlightsStrip />
      <ProblemSection />
      <IngestionSection />
      <ConfidenceSection />
      {ppStages.map((stage, index) => (
        <StageRow key={stage.id} stage={stage} tone={index ? 'surface' : 'white'} />
      ))}
      <ScoringSection />
      <AuditSection />
      <BoundariesSection />
      <FaqCardsSection />
      <CtaBanner {...ctaBand} className={styles.ctaBand} ctaClassName={styles.ctaButton}>
        <p className={styles.ctaLinks}>
          {related.label}{' '}
          {related.links.map((link, index) => (
            <Fragment key={link.to}>
              {index > 0 && <span aria-hidden="true"> · </span>}
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

export default PayorPolicy;
