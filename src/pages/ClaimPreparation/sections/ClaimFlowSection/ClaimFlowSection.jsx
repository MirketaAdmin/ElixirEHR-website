import { pcClaimFlow } from '../../../../data/claimPreparation';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import styles from './ClaimFlowSection.module.css';

function ClaimFlowSection() {
  const { title, description, stages, stats } = pcClaimFlow;

  return (
    <Section tone="dark" spacing="none" className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <ol className={styles.stages}>
        {stages.map((stage, index) => (
          <li key={stage.title} className={styles.stage}>
            <div className={styles.stageTop}>
              <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
              <span className={cn(styles.tag, styles[stage.tag.tone])}>{stage.tag.label}</span>
            </div>
            <h3 className={styles.stageTitle}>{stage.title}</h3>
            <p className={styles.stageText}>{stage.text}</p>
          </li>
        ))}
      </ol>
      <ul className={styles.stats}>
        {stats.map((stat) => (
          <li key={stat.value}>
            <p className={styles.value}>{stat.value}</p>
            <p className={styles.label}>{stat.label}</p>
            <p className={styles.statText}>{stat.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default ClaimFlowSection;
