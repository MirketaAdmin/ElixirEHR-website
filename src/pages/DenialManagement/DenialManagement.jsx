import { dmHero } from '../../data/denialManagement';
import PageHero from '../../components/sections/PageHero/PageHero';
import TiltedHeroMedia from '../../components/sections/TiltedHeroMedia/TiltedHeroMedia';
import ChallengeSection from './sections/ChallengeSection/ChallengeSection';
import WorkflowSection from './sections/WorkflowSection/WorkflowSection';
import FeaturesSection from './sections/FeaturesSection/FeaturesSection';
import ClearinghouseSection from './sections/ClearinghouseSection/ClearinghouseSection';
import SalesforceNativeSection from './sections/SalesforceNativeSection/SalesforceNativeSection';
import CareSettingsSection from './sections/CareSettingsSection/CareSettingsSection';
import PageSeo from '../../components/seo/PageSeo/PageSeo';
import styles from './DenialManagement.module.css';

function DenialManagement() {
  const { media, ...hero } = dmHero;

  return (
    <>
      <PageSeo path="/denial-management-software" />
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
