import { epaFeatures } from '../../../../data/electronicPriorAuthorization';
import Section from '../../../../components/layout/Section/Section';
import checkIcon from '../../../../assets/electronic-prior-authorization/icon-check.png';
import { cn } from '../../../../utils/cn';
import EpaWindow from '../../components/EpaWindow/EpaWindow';
import EpaFlowCard from '../../components/EpaFlowCard/EpaFlowCard';
import styles from './FeaturesSection.module.css';

/** Seven alternating rows: copy and checklist beside a product window (or the EDI 278 flow card). */
function FeaturesSection() {
  return (
    <Section tone="white" spacing="none" className={styles.section}>
      {epaFeatures.map((row) => (
        <section
          key={row.id}
          id={row.id}
          className={cn(styles.row, row.mediaFirst && styles.mediaFirst)}
          aria-labelledby={`${row.id}-title`}
        >
          <div className={styles.copy}>
            <p className={styles.eyebrow}>{row.eyebrow}</p>
            <h2 id={`${row.id}-title`} className={styles.title}>
              {row.title}
            </h2>
            <p className={styles.text}>{row.text}</p>
            <ul className={styles.points}>
              {row.points.map((point) => (
                <li key={point}>
                  <img src={checkIcon} alt="" width="9" height="10" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.media}>
            {row.media ? <EpaWindow {...row.media} /> : <EpaFlowCard {...row.flow} />}
          </div>
        </section>
      ))}
    </Section>
  );
}

export default FeaturesSection;
