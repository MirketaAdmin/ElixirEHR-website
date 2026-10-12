import { connectedEhr } from '../../../../data/revenueCycleManagement';
import Section from '../../../../components/layout/Section/Section';
import xCircleIcon from '../../../../assets/revenue-cycle-management/icon-x-circle.png';
import checkCircleIcon from '../../../../assets/revenue-cycle-management/icon-check-circle-large.png';
import RichText from '../../../../components/ui/RichText/RichText';
import styles from './ConnectedEhrSection.module.css';

function ConnectedEhrSection() {
  const { title, description, separation, connected } = connectedEhr;

  return (
    <Section tone="white" spacing="none" className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>

      <div className={styles.grid}>
        <div className={styles.separation}>
          <h3 className={styles.cardTitle}>
            <img src={xCircleIcon} alt="" width="20" height="20" />
            {separation.title}
          </h3>
          <ul className={styles.costs}>
            {separation.points.map((point) => (
              <li key={point} className={styles.cost}>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.connected}>
          <h3 className={styles.cardTitle}>
            <img src={checkCircleIcon} alt="" width="20" height="20" />
            {connected.title}
          </h3>
          <p className={styles.connectedText}>{connected.body}</p>
          <p className={styles.conclusion}>
            <RichText content={connected.conclusion} linkClassName={styles.conclusionLink} />
          </p>
        </div>
      </div>
    </Section>
  );
}

export default ConnectedEhrSection;
