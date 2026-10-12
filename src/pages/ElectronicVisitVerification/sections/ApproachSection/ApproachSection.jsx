import { evvApproach } from '../../../../data/electronicVisitVerification';
import Section from '../../../../components/layout/Section/Section';
import EyebrowHeading from '../../../../components/ui/EyebrowHeading/EyebrowHeading';
import styles from './ApproachSection.module.css';

function ApproachSection() {
  const { eyebrow, title, description, items } = evvApproach;

  return (
    <Section spacing="none" className={styles.section} aria-labelledby="evv-approach">
      <div className={styles.intro}>
        <EyebrowHeading id="evv-approach" eyebrow={eyebrow} title={title} align="center" tone="dark" />
        <p className={styles.description}>{description}</p>
      </div>

      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <span className={styles.iconBox}>
              <img src={item.icon} alt="" width="24" height="24" />
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default ApproachSection;
