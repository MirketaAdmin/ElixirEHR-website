import { opCore } from '../../../../data/outpatientClinics';
import Section from '../../../../components/layout/Section/Section';
import warningIcon from '../../../../assets/outpatient-clinics/icon-warning.png';
import warningSmallIcon from '../../../../assets/outpatient-clinics/icon-warning-sm.png';
import OpIntro from '../../components/OpIntro/OpIntro';
import styles from './CoreSection.module.css';

/** "One Platform for Every Service Line" — the red symptoms panel beside the explanation. */
function CoreSection() {
  const { id, eyebrow, title, description, split, paragraphs, lines } = opCore;

  return (
    <Section tone="white" spacing="none" id={id} className={styles.section} aria-labelledby="op-core-title">
      <OpIntro id="op-core-title" eyebrow={eyebrow} title={title} description={description} />
      <div className={styles.layout}>
        <div className={styles.split}>
          <h3 className={styles.splitTitle}>
            <img src={warningIcon} alt="" width="26" height="23" />
            {split.title}
          </h3>
          <p className={styles.lead}>{split.lead}</p>
          <ul className={styles.symptoms}>
            {split.items.map((item) => (
              <li key={item}>
                <img src={warningSmallIcon} alt="" width="19" height="16" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.right}>
          <div className={styles.copy}>
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className={styles.lines}>
            <h3 className={styles.linesTitle}>{lines.title}</h3>
            <ul className={styles.chips}>
              {lines.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default CoreSection;
