import { bhConnected } from '../../../../data/behavioralHealth';
import Section from '../../../../components/layout/Section/Section';
import cloudIcon from '../../../../assets/behavioral-health/icon-cloud-check.png';
import BhIntro from '../../components/BhIntro/BhIntro';
import styles from './ConnectedSection.module.css';

/** "One Record Across Programs, Sites and States" (dark) — four numbered steps and a note. */
function ConnectedSection() {
  const { eyebrow, title, description, steps, note } = bhConnected;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="bh-connected-title">
      <BhIntro
        id="bh-connected-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        tone="dark"
        className={styles.intro}
      />
      <ol className={styles.grid}>
        {steps.map((step, index) => (
          <li key={step.title} className={styles.card}>
            <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
            <p className={styles.label}>
              <img src={step.icon.src} alt="" width={step.icon.size[0]} height={step.icon.size[1]} />
              {step.label}
            </p>
          </li>
        ))}
      </ol>
      <p className={styles.note}>
        <img src={cloudIcon} alt="" width="22" height="16" />
        <span>{note}</span>
      </p>
    </Section>
  );
}

export default ConnectedSection;
