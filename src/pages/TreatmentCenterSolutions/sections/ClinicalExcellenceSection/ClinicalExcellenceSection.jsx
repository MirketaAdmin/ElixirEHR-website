import { clinicalExcellence } from '../../../../data/treatmentCenterSolutions';
import Section from '../../../../components/layout/Section/Section';
import styles from './ClinicalExcellenceSection.module.css';

function ClinicalExcellenceSection() {
  const { titleLines, body, features, image } = clinicalExcellence;

  return (
    <Section tone="white" spacing="none" className={styles.section} containerClassName={styles.inner}>
      <div>
        <h2 className={styles.title}>
          {titleLines.map((line) => (
            <span key={line} className={styles.titleLine}>
              {line}
            </span>
          ))}
        </h2>
        <p className={styles.body}>{body}</p>
        <ul className={styles.features}>
          {features.map((feature) => (
            <li key={feature.label} className={styles.feature}>
              <img src={feature.icon} alt="" width={feature.iconSize[0]} height={feature.iconSize[1]} />
              <span className={styles.featureLabel}>{feature.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.frame}>
        <img src={image.src} alt={image.alt} width="496" height="455" className={styles.image} />
      </div>
    </Section>
  );
}

export default ClinicalExcellenceSection;
