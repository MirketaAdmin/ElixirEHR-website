import { shCalifornia } from '../../../../data/studentHealth';
import Section from '../../../../components/layout/Section/Section';
import ShIntro from '../../components/ShIntro/ShIntro';
import styles from './CaliforniaSection.module.css';

/** "LEA BOP, SMAA and CYBHI: Three Programs, One Time Study" — the time survey, the service-log checklist and the July change. */
function CaliforniaSection() {
  const { eyebrow, title, description, paragraphs, log, change } = shCalifornia;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="sh-california-title">
      <ShIntro id="sh-california-title" eyebrow={eyebrow} title={title} description={description} className={styles.intro} />
      <div className={styles.layout}>
        <div>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.text}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className={styles.side}>
          <div className={styles.log}>
            <h3 className={styles.logTitle}>{log.title}</h3>
            <p className={styles.logLead}>{log.lead}</p>
            <ol className={styles.logList}>
              {log.items.map((item, index) => (
                <li key={item}>
                  {index + 1}. {item}
                </li>
              ))}
            </ol>
          </div>
          <div className={styles.change}>
            <h3 className={styles.changeTitle}>
              <img src={change.icon.src} alt="" width={change.icon.size[0]} height={change.icon.size[1]} />
              {change.title}
            </h3>
            <p className={styles.changeText}>{change.text}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default CaliforniaSection;
