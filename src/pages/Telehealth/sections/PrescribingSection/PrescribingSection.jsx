import { thPrescribing } from '../../../../data/telehealth';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import ThSplit from '../../components/ThSplit/ThSplit';
import styles from './PrescribingSection.module.css';

/** "Prescribing Controlled Substances by Telemedicine" — the DEA deadline, the OUD rule and Elixir's PDMP step. */
function PrescribingSection() {
  const { eyebrow, title, description, note, items } = thPrescribing;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="th-prescribing-title">
      <ThSplit
        id="th-prescribing-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        note={note}
        noteTone="red"
        dot="red"
      >
        {items.map((item) => (
          <article key={item.label} className={styles.card}>
            <h3 className={cn(styles.label, styles[item.tone])}>{item.label}</h3>
            <p className={styles.text}>{item.text}</p>
          </article>
        ))}
      </ThSplit>
    </Section>
  );
}

export default PrescribingSection;
