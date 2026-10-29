import { vbReporting } from '../../../../data/valueBasedCare';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import VbIntro from '../../components/VbIntro/VbIntro';
import styles from './ReportingSection.module.css';

/** "Reporting You Should Not Have to Run a Project For": the argument and a quality dashboard card. */
function ReportingSection() {
  const { eyebrow, title, lead, paragraphs, note, dashboard } = vbReporting;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="vb-reporting">
      <VbIntro id="vb-reporting" eyebrow={eyebrow} title={title} tone="dark" />
      <p className={styles.lead}>{lead}</p>
      <div className={styles.body}>
        <div className={styles.copy}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          <p className={styles.note}>{note}</p>
        </div>
        <figure className={styles.dashboard}>
          <figcaption className={styles.dashHead}>
            <span className={styles.dashTitle}>{dashboard.title}</span>
            <span className={styles.badge}>{dashboard.badge}</span>
          </figcaption>
          <dl className={styles.rows}>
            {dashboard.rows.map((row) => (
              <div key={row.label} className={styles.row}>
                <dt>{row.label}</dt>
                <dd className={cn(styles.value, styles[row.tone])}>{row.value}</dd>
              </div>
            ))}
          </dl>
        </figure>
      </div>
    </Section>
  );
}

export default ReportingSection;
