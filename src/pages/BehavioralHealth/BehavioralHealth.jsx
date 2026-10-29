import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { bhCtaBand, bhHero } from '../../data/behavioralHealth';
import PageHero from '../../components/sections/PageHero/PageHero';
import WideTiltedHeroMedia from '../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import PillarsStrip from './sections/PillarsStrip/PillarsStrip';
import CaseSection from './sections/CaseSection/CaseSection';
import PathsSection from './sections/PathsSection/PathsSection';
import ConnectedSection from './sections/ConnectedSection/ConnectedSection';
import MeasurableSection from './sections/MeasurableSection/MeasurableSection';
import ComplianceSection from './sections/ComplianceSection/ComplianceSection';
import KratuSection from './sections/KratuSection/KratuSection';
import FaqCardsSection from './sections/FaqCardsSection/FaqCardsSection';
import styles from './BehavioralHealth.module.css';

/** Behavioral Health — an independent page (no parent). */
function BehavioralHealth() {
  const { media, ...hero } = bhHero;
  const { related, ...ctaBand } = bhCtaBand;

  return (
    <>
      <title>Behavioral Health EHR Software | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} />} />
      <PillarsStrip />
      <CaseSection />
      <PathsSection />
      <ConnectedSection />
      <MeasurableSection />
      <ComplianceSection />
      <KratuSection />
      <FaqCardsSection />
      <CtaBanner
        {...ctaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      >
        <p className={styles.ctaLinks}>
          <span className={styles.ctaLabel}>{related.label}</span>
          {related.links.map((link, index) => (
            <Fragment key={link.label}>
              {index > 0 && (
                <span aria-hidden="true" className={styles.ctaDot}>
                  ·
                </span>
              )}
              {link.to ? (
                <Link to={link.to} className={styles.ctaLink}>
                  {link.label}
                </Link>
              ) : (
                <span className={styles.ctaLink}>{link.label}</span>
              )}
            </Fragment>
          ))}
        </p>
      </CtaBanner>
    </>
  );
}

export default BehavioralHealth;
