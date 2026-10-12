import { fsCtaBand, fsFaq, fsHero } from '../../data/evvFieldService';
import PageHero from '../../components/sections/PageHero/PageHero';
import TiltedHeroMedia from '../../components/sections/TiltedHeroMedia/TiltedHeroMedia';
import FaqSection from '../../components/sections/FaqSection/FaqSection';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import StepsStrip from './sections/StepsStrip/StepsStrip';
import BuiltForSection from './sections/BuiltForSection/BuiltForSection';
import FeaturesSection from './sections/FeaturesSection/FeaturesSection';
import ComplementSection from './sections/ComplementSection/ComplementSection';
import ConnectedSection from './sections/ConnectedSection/ConnectedSection';
import ExceptionsSection from './sections/ExceptionsSection/ExceptionsSection';
import MedicaidDataSection from './sections/MedicaidDataSection/MedicaidDataSection';
import AggregatorSection from './sections/AggregatorSection/AggregatorSection';
import WhyNativeSection from './sections/WhyNativeSection/WhyNativeSection';
import TalkSection from './sections/TalkSection/TalkSection';
import styles from './EvvFieldService.module.css';

function EvvFieldService() {
  const { media, ...hero } = fsHero;

  return (
    <>
      <title>Salesforce-Native EVV for Field Service, Home Care, EHR &amp; Billing | Elixir</title>
      <meta name="description" content={fsHero.description} />
      <PageHero {...hero} className={styles.hero} media={<TiltedHeroMedia {...media} />} />
      <StepsStrip />
      <BuiltForSection />
      <FeaturesSection />
      <ComplementSection />
      <ConnectedSection />
      <ExceptionsSection />
      <MedicaidDataSection />
      <AggregatorSection />
      <WhyNativeSection />
      <FaqSection {...fsFaq} />
      <TalkSection />
      <CtaBanner
        {...fsCtaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      />
    </>
  );
}

export default EvvFieldService;
