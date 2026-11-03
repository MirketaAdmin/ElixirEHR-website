import { interopBlocking } from '../../../../../data/interoperability';
import { cn } from '../../../../../utils/cn';
import Section from '../../../../../components/layout/Section/Section';
import ComplianceIntro from '../../../components/ComplianceIntro/ComplianceIntro';
import styles from './BlockingSection.module.css';

/**
 * "Information Blocking Binds Us Directly": one row per consequence, each with a tag naming who it
 * applies to. The coloured edge and tag carry the tone (red: penalty or exposure, yellow: provider,
 * lime: the conditions), and the tag text says the same thing in words.
 */
function BlockingSection() {
  const { id, eyebrow, title, description, rows, caption } = interopBlocking;

  return (
    <Section tone="surface" spacing="none" id={id} className={styles.section} aria-labelledby="interop-blocking-title">
      <ComplianceIntro id="interop-blocking-title" eyebrow={eyebrow} title={title} description={description} />
      <ul className={styles.rows}>
        {rows.map((row) => (
          <li key={row.title} className={cn(styles.row, styles[row.tone])}>
            <span className={styles.tag}>{row.tag}</span>
            <div>
              <h3 className={styles.title}>{row.title}</h3>
              <p className={styles.text}>{row.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className={styles.caption}>{caption}</p>
    </Section>
  );
}

export default BlockingSection;
