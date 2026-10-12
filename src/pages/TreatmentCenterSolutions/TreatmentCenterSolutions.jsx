import { tcCtaBand, tcHero } from '../../data/treatmentCenterSolutions';
import PageHero from '../../components/sections/PageHero/PageHero';
import TiltedHeroMedia from '../../components/sections/TiltedHeroMedia/TiltedHeroMedia';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import IntakeSection from './sections/IntakeSection/IntakeSection';
import IntakeFeaturesSection from './sections/IntakeFeaturesSection/IntakeFeaturesSection';
import ClinicalExcellenceSection from './sections/ClinicalExcellenceSection/ClinicalExcellenceSection';
import OutcomesFeaturesSection from './sections/OutcomesFeaturesSection/OutcomesFeaturesSection';
import FinancialPerformanceSection from './sections/FinancialPerformanceSection/FinancialPerformanceSection';
import FinancialFeaturesSection from './sections/FinancialFeaturesSection/FinancialFeaturesSection';
import styles from './TreatmentCenterSolutions.module.css';

function TreatmentCenterSolutions() {
  const { media, ...hero } = tcHero;

  return (
    <>
      <title>Treatment Center Solutions | Elixir</title>
      <meta name="description" content={tcHero.description} />
      <PageHero {...hero} className={styles.hero} media={<TiltedHeroMedia {...media} />} />
      <IntakeSection />
      <IntakeFeaturesSection />
      <ClinicalExcellenceSection />
      <OutcomesFeaturesSection />
      <FinancialPerformanceSection />
      <FinancialFeaturesSection />
      <CtaBanner {...tcCtaBand} />
    </>
  );
}

export default TreatmentCenterSolutions;
