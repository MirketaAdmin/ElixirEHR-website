import Container from '../../layout/Container/Container';
import { features } from '../../../data/features';
import dashboardScreenshot from '../../../assets/home/features/patient-view-dashboard.png';
import styles from './FeaturesSection.module.css';

function FeaturesSection() {
  return (
    <section className={styles.section}>
      <Container className={styles.grid}>
        <div className={styles.list}>
          <p className={`${styles.eyebrow} eyebrow`}>Features</p>
          <h2 className={`${styles.title} headline-lg`}>Elixir Capabilities</h2>

          <ul className={styles.items}>
            {features.map((feature) => (
              <li key={feature.title} className={styles.item}>
                <h3 className={`${styles.itemTitle} headline-sm`}>{feature.title}</h3>
                <p className={`${styles.itemDescription} body-md`}>{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visual}>
          <img
            src={dashboardScreenshot}
            alt="Elixir patient record dashboard showing clinical overview, vitals, and care team"
            className={styles.image}
            width={810}
            height={530}
            loading="lazy"
          />
        </div>
      </Container>
    </section>
  );
}

export default FeaturesSection;
