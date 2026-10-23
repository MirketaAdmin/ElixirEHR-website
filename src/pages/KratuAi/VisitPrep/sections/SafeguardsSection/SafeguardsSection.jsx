import { visitPrepSafeguards } from '../../../../../data/visitPrep';
import Section from '../../../../../components/layout/Section/Section';
import { cn } from '../../../../../utils/cn';
import styles from './SafeguardsSection.module.css';

function Tile({ icon }) {
  return (
    <span className={cn(styles.tile, styles[icon.tone])}>
      <img src={icon.src} alt="" width={icon.size[0]} height={icon.size[1]} />
    </span>
  );
}

/** Identity verification and bilingual support: two feature cards. */
function SafeguardsSection() {
  const { identity, language } = visitPrepSafeguards;

  return (
    <Section tone="surface" spacing="none" className={styles.section}>
      <div className={styles.grid}>
        <article className={styles.card}>
          <Tile icon={identity.icon} />
          <h2 className={styles.title}>{identity.title}</h2>
          <p className={styles.text}>{identity.text}</p>
          <div className={styles.checklist}>
            <p className={styles.checklistTitle}>{identity.checklistTitle}</p>
            <ul>
              {identity.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </article>

        <article className={styles.card}>
          <Tile icon={language.icon} />
          <h2 className={styles.title}>{language.title}</h2>
          <p className={styles.text}>{language.text}</p>
          <p className={styles.emphasis}>{language.emphasis}</p>
          <p className={styles.toggle}>
            <span className={styles.toggleLabel}>{language.toggle.label}</span>
            {language.toggle.options.map((option, index) => (
              <span key={option} className={cn(styles.option, index === 0 && styles.selected)}>
                {option}
              </span>
            ))}
          </p>
        </article>
      </div>
    </Section>
  );
}

export default SafeguardsSection;
