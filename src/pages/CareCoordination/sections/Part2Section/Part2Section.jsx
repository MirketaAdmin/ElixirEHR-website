import { ccPart2 } from '../../../../data/careCoordination';
import Section from '../../../../components/layout/Section/Section';
import BhIntro from '../../../BehavioralHealth/components/BhIntro/BhIntro';
import styles from './Part2Section.module.css';

/**
 * "42 CFR Part 2 Changed" (dark): outdated guidance (dashed) beside what the regulation now
 * provides, then the distinction copy and the "Worth checking this quarter" card.
 */
function Part2Section() {
  const { eyebrow, title, description, myths, facts, distinction, permission, checklist } = ccPart2;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="cc-part2-title">
      <BhIntro
        id="cc-part2-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        tone="dark"
        className={styles.intro}
      />
      <div className={styles.compare}>
        <div className={styles.myths}>
          <h3 className={styles.panelTitle}>
            <img src={myths.icon.src} alt="" width={myths.icon.size[0]} height={myths.icon.size[1]} />
            {myths.title}
          </h3>
          <ul className={styles.mythList}>
            {myths.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.facts}>
          <h3 className={styles.panelTitle}>
            <img src={facts.icon.src} alt="" width={facts.icon.size[0]} height={facts.icon.size[1]} />
            {facts.title}
          </h3>
          <ul className={styles.factList}>
            {facts.items.map((item) => (
              <li key={item}>
                <img src={facts.itemIcon.src} alt="" width={facts.itemIcon.size[0]} height={facts.itemIcon.size[1]} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.copy}>
          <h3 className={styles.copyTitle}>{distinction.title}</h3>
          {distinction.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <h3 className={styles.copyTitle}>{permission.title}</h3>
          <p>{permission.text}</p>
        </div>
        <aside className={styles.checklist} aria-labelledby="cc-checklist-title">
          <p className={styles.checklistEyebrow}>{checklist.eyebrow}</p>
          <h3 id="cc-checklist-title" className={styles.checklistTitle}>
            {checklist.title}
          </h3>
          {checklist.items.map((item) => (
            <div key={item.title} className={styles.check}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
          <p className={styles.checklistNote}>{checklist.note}</p>
        </aside>
      </div>
    </Section>
  );
}

export default Part2Section;
