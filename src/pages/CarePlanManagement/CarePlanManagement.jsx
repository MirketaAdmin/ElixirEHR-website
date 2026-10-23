import {
  cpApprovals,
  cpBarriers,
  cpCtaBand,
  cpCustomizable,
  cpGoals,
  cpHero,
  cpInterventions,
  cpOutcomes,
  cpStatus,
  cpWorkflows,
} from '../../data/carePlanManagement';
import PageHero from '../../components/sections/PageHero/PageHero';
import WideTiltedHeroMedia from '../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import CpSplit from './components/CpSplit/CpSplit';
import PillarsStrip from './sections/PillarsStrip/PillarsStrip';
import LevelsVisual from './visuals/LevelsVisual/LevelsVisual';
import GoalVisual from './visuals/GoalVisual/GoalVisual';
import InterventionsVisual from './visuals/InterventionsVisual/InterventionsVisual';
import BarriersVisual from './visuals/BarriersVisual/BarriersVisual';
import OutcomesVisual from './visuals/OutcomesVisual/OutcomesVisual';
import StatusVisual from './visuals/StatusVisual/StatusVisual';
import ApprovalsVisual from './visuals/ApprovalsVisual/ApprovalsVisual';
import WorkflowsVisual from './visuals/WorkflowsVisual/WorkflowsVisual';
import FeaturesSection from './sections/FeaturesSection/FeaturesSection';
import PlatformSection from './sections/PlatformSection/PlatformSection';
import SettingsSection from './sections/SettingsSection/SettingsSection';
import styles from './CarePlanManagement.module.css';

/**
 * Care Plan Management — a child page of Care Management (which has no page of its own).
 * Eight alternating feature bands share `CpSplit`; each carries its own product mock-up.
 */
function CarePlanManagement() {
  const { media, ...hero } = cpHero;

  return (
    <>
      <title>Care Plan Management Software | Care Management | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} />} />
      <PillarsStrip />
      <CpSplit id="cp-customizable" {...cpCustomizable} tone="white" offsets={[0, 0, 81]} visual={<LevelsVisual />} />
      <CpSplit id="cp-goals" {...cpGoals} tone="warm" reverse offsets={[29, 0, 82]} visual={<GoalVisual />} />
      <CpSplit id="cp-interventions" {...cpInterventions} tone="white" offsets={[0, 24, 98]} visual={<InterventionsVisual />} />
      <CpSplit id="cp-barriers" {...cpBarriers} tone="warm" reverse offsets={[26, 0, 82]} visual={<BarriersVisual />} />
      <CpSplit id="cp-outcomes" {...cpOutcomes} tone="white" offsets={[0, 46, 100]} visual={<OutcomesVisual />} />
      <CpSplit id="cp-status" {...cpStatus} tone="surface" reverse offsets={[2, 0, 79]} visual={<StatusVisual />} />
      <CpSplit id="cp-approvals" {...cpApprovals} tone="white" offsets={[0, 15, 99]} visual={<ApprovalsVisual />} />
      <CpSplit id="cp-workflows" {...cpWorkflows} tone="surface" reverse offsets={[0, 7, 88]} visual={<WorkflowsVisual />} />
      <FeaturesSection />
      <PlatformSection />
      <SettingsSection />
      <CtaBanner {...cpCtaBand} className={styles.ctaBand} ctaClassName={styles.ctaButton} />
    </>
  );
}

export default CarePlanManagement;
