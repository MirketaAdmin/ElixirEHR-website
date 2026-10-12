import { dmHero } from '../../data/denialManagement';
import PageHero from '../../components/sections/PageHero/PageHero';
import TiltedHeroMedia from '../../components/sections/TiltedHeroMedia/TiltedHeroMedia';
import ChallengeSection from './sections/ChallengeSection/ChallengeSection';
import WorkflowSection from './sections/WorkflowSection/WorkflowSection';
import FeaturesSection from './sections/FeaturesSection/FeaturesSection';
import ClearinghouseSection from './sections/ClearinghouseSection/ClearinghouseSection';
import SalesforceNativeSection from './sections/SalesforceNativeSection/SalesforceNativeSection';
import CareSettingsSection from './sections/CareSettingsSection/CareSettingsSection';
import styles from './DenialManagement.module.css';

function DenialManagement() {
  const { media, ...hero } = dmHero;

  return (
    <>
      <title>AI Denial Management Software, Native to Salesforce | Elixir</title>
      <meta name="description" content={dmHero.description} />
      <PageHero {...hero} className={styles.hero} media={<TiltedHeroMedia {...media} />} />
      <ChallengeSection />
      <WorkflowSection />
      <FeaturesSection />
      <ClearinghouseSection />
      <SalesforceNativeSection />
      <CareSettingsSection />
    </>
  );
}

export default DenialManagement;
