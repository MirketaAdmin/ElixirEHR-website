import { mhIntegrated } from '../../../../data/mentalHealth';
import Section from '../../../../components/layout/Section/Section';
import BhIntro from '../../../BehavioralHealth/components/BhIntro/BhIntro';
import MhTable from '../../components/MhTable/MhTable';
import styles from './IntegratedCareSection.module.css';

/** "Collaborative Care Model Billing Needs a Registry" — three numbered cards and the codes table. */
function IntegratedCareSection() {
  const { eyebrow, title, paragraphs, steps, codes } = mhIntegrated;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="mh-integrated-title">
      <BhIntro id="mh-integrated-title" eyebrow={eyebrow} title={title} className={styles.intro} />
      <div className={styles.copy}>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <ol className={styles.steps}>
        {steps.map((step, index) => (
          <li key={step.title} className={styles.step}>
            <span className={styles.number}>{index + 1}</span>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepText}>{step.text}</p>
          </li>
        ))}
      </ol>
      <h3 id="mh-codes-title" className={styles.tableTitle}>
        {codes.title}
      </h3>
      <MhTable
        columns={codes.columns}
        rows={codes.rows}
        widths={[211, 520]}
        labelledBy="mh-codes-title"
        className={styles.table}
      />
      <p className={styles.footnote}>{codes.footnote}</p>
    </Section>
  );
}

export default IntegratedCareSection;
