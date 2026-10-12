import Container from '../../layout/Container/Container';
import FeatureCard from '../../ui/FeatureCard/FeatureCard';
import elixirWordmark from '../../../assets/home/platform-intro/elixir-wordmark-light.png';
import secureDataIcon from '../../../assets/home/platform-intro/secure-data-icon.png';
import seamlessIntegrationIcon from '../../../assets/home/platform-intro/seamless-integration-icon.png';
import styles from './PlatformIntroSection.module.css';

function PlatformIntroSection() {
  return (
    <section className={styles.section}>
      <Container className={styles.grid}>
        <div className={styles.copy}>
          <img
            src={elixirWordmark}
            alt="Elixir"
            className={styles.wordmark}
            width={333}
            height={90}
            loading="lazy"
          />
          <p className={`${styles.tagline} label-md`}>EHR and more with AI</p>
          <p className={`${styles.description} body-lg`}>
            Elixir empowers your healthcare facility by effectively automating various business
            processes, hence minimizing interaction with the EHR system and allowing your staff
            to spend more time on patient care. It leverages various Salesforce functionalities
            to ensure data security and provides seamless integrations.
          </p>
          <a href="/platform" className={`${styles.link} label-md`}>
            Learn More About Elixir →
          </a>
        </div>

        <div className={styles.cards}>
          <FeatureCard
            tone="light"
            icon={<img src={secureDataIcon} alt="" width={24} height={30} />}
            title="Secure Data"
            description="HIPAA compliant architecture for ultimate patient privacy."
          />
          <FeatureCard
            tone="dark"
            icon={<img src={seamlessIntegrationIcon} alt="" width={36} height={35} />}
            title="Seamless Integration"
            description="Connects with existing Salesforce systems effortlessly."
          />
        </div>
      </Container>
    </section>
  );
}

export default PlatformIntroSection;
