import { Link } from 'react-router-dom';
import { mhCtaBand, mhHero } from '../../data/mentalHealth';
import PageHero from '../../components/sections/PageHero/PageHero';
import WideTiltedHeroMedia from '../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import arrowIcon from '../../assets/mental-health/icon-cta-arrow.png';
import HighlightsStrip from './sections/HighlightsStrip/HighlightsStrip';
import MeasurementSection from './sections/MeasurementSection/MeasurementSection';
import IntegratedCareSection from './sections/IntegratedCareSection/IntegratedCareSection';
import CommunitySection from './sections/CommunitySection/CommunitySection';
import CrisisSection from './sections/CrisisSection/CrisisSection';
import TelehealthSection from './sections/TelehealthSection/TelehealthSection';
import DocumentationSection from './sections/DocumentationSection/DocumentationSection';
import RevenueSection from './sections/RevenueSection/RevenueSection';
import KratuSection from './sections/KratuSection/KratuSection';
import FaqCardsSection from './sections/FaqCardsSection/FaqCardsSection';
import styles from './MentalHealth.module.css';

/** Mental Health — an independent page (no parent route). */
function MentalHealth() {
  const { media, ...hero } = mhHero;
  const { related, ...ctaBand } = mhCtaBand;

  return (
    <>
      <title>Mental Health EHR Software | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} />} />
      <HighlightsStrip />
      <MeasurementSection />
      <IntegratedCareSection />
      <CommunitySection />
      <CrisisSection />
      <TelehealthSection />
      <DocumentationSection />
      <RevenueSection />
      <KratuSection />
      <FaqCardsSection />
      <CtaBanner
        {...ctaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      >
        <ul className={styles.ctaLinks}>
          {related.map((link) => {
            const content = (
              <>
                {link.label}
                <img src={arrowIcon} alt="" width="11" height="11" />
              </>
            );
            return (
              <li key={link.label}>
                {link.to ? (
                  <Link to={link.to} className={styles.ctaLink}>
                    {content}
                  </Link>
                ) : (
                  <span className={styles.ctaLink}>{content}</span>
                )}
              </li>
            );
          })}
        </ul>
      </CtaBanner>
    </>
  );
}

export default MentalHealth;
