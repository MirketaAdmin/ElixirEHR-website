import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { raCtaBand, raHero } from '../../data/responsibleAi';
import PageHero from '../../components/sections/PageHero/PageHero';
import WideTiltedHeroMedia from '../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import RuleSection from './sections/RuleSection/RuleSection';
import ClinicalSection from './sections/ClinicalSection/ClinicalSection';
import RevenueSection from './sections/RevenueSection/RevenueSection';
import AuditSection from './sections/AuditSection/AuditSection';
import DataSection from './sections/DataSection/DataSection';
import VendorSection from './sections/VendorSection/VendorSection';
import NonClaimsSection from './sections/NonClaimsSection/NonClaimsSection';
import FaqCardsSection from './sections/FaqCardsSection/FaqCardsSection';
import styles from './ResponsibleAi.module.css';

/** Responsible AI — an independent page (no parent). */
function ResponsibleAi() {
  const { media, ...hero } = raHero;
  const { links, ...ctaBand } = raCtaBand;

  return (
    <>
      <title>Responsible AI in Healthcare | Elixir</title>
      <meta name="description" content={hero.description[0]} />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} />} />
      <RuleSection />
      <ClinicalSection />
      <RevenueSection />
      <AuditSection />
      <DataSection />
      <VendorSection />
      <NonClaimsSection />
      <FaqCardsSection />
      <CtaBanner {...ctaBand} className={styles.ctaBand} ctaClassName={styles.ctaButton}>
        <p className={styles.ctaLinks}>
          {links.map((link, index) => (
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

export default ResponsibleAi;
