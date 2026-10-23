import { shRouting } from '../../../../data/studentHealth';
import Section from '../../../../components/layout/Section/Section';
import ShIntro from '../../components/ShIntro/ShIntro';
import styles from './RoutingSection.module.css';

/** "School, District, County — and the Meeting in the Middle" (dark) — three levels and what a referral can become. */
function RoutingSection() {
  const { eyebrow, title, description, levels, paragraphs, outcomes } = shRouting;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="sh-routing-title">
      <ShIntro id="sh-routing-title" eyebrow={eyebrow} title={title} description={description} tone="dark" className={styles.intro} />
      <ol className={styles.levels}>
        {levels.map((level, index) => (
          <li key={level.title} className={styles.level}>
            <div className={styles.levelHead}>
              <span className={styles.levelLabel}>Level {index + 1}</span>
              <img src={level.icon.src} alt="" width={level.icon.size[0]} height={level.icon.size[1]} />
            </div>
            <h3 className={styles.levelTitle}>{level.title}</h3>
            <p className={styles.levelText}>{level.text}</p>
          </li>
        ))}
      </ol>
      <div className={styles.layout}>
        <div>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.body}>
              {paragraph}
            </p>
          ))}
        </div>
        <aside className={styles.panel}>
          <p className={styles.panelLabel}>{outcomes.label}</p>
          <h3 className={styles.panelTitle}>{outcomes.title}</h3>
          <ul className={styles.list}>
            {outcomes.items.map((item) => (
              <li key={item}>
                <img src={outcomes.icon.src} alt="" width={outcomes.icon.size[0]} height={outcomes.icon.size[1]} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}

export default RoutingSection;
