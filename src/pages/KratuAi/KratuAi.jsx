import {
  kratuArAgent,
  kratuCoPilot,
  kratuCtaBand,
  kratuFaq,
  kratuHero,
  kratuPayorPolicy,
  kratuVisitPrep,
} from '../../data/kratuAi';
import PageHero from '../../components/sections/PageHero/PageHero';
import WideTiltedHeroMedia from '../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import FaqSection from '../../components/sections/FaqSection/FaqSection';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import StagesSection from './sections/StagesSection/StagesSection';
import AgentSection from './components/AgentSection/AgentSection';
import VisitPrepMock from './mocks/VisitPrepMock/VisitPrepMock';
import CoPilotMock from './mocks/CoPilotMock/CoPilotMock';
import PayorPolicyMock from './mocks/PayorPolicyMock/PayorPolicyMock';
import ArAgentMock from './mocks/ArAgentMock/ArAgentMock';
import CohesionSection from './sections/CohesionSection/CohesionSection';
import GovernanceSection from './sections/GovernanceSection/GovernanceSection';
import styles from './KratuAi.module.css';

function KratuAi() {
  const { media, ...hero } = kratuHero;

  return (
    <>
      <title>KratuAI | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} />} />
      <StagesSection />
      <AgentSection agent={kratuVisitPrep}>
        <VisitPrepMock mock={kratuVisitPrep.mock} />
      </AgentSection>
      <AgentSection agent={kratuCoPilot} tone="surface" reverse className={styles.coPilot}>
        <CoPilotMock mock={kratuCoPilot.mock} />
      </AgentSection>
      <AgentSection agent={kratuPayorPolicy} className={styles.payorPolicy}>
        <PayorPolicyMock mock={kratuPayorPolicy.mock} />
      </AgentSection>
      <AgentSection agent={kratuArAgent} reverse className={styles.arAgent}>
        <ArAgentMock mock={kratuArAgent.mock} />
      </AgentSection>
      <CohesionSection />
      <GovernanceSection />
      <FaqSection {...kratuFaq} />
      <CtaBanner {...kratuCtaBand} className={styles.ctaBand} ctaClassName={styles.ctaButton} />
    </>
  );
}

export default KratuAi;
