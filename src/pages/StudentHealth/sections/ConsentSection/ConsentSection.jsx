import { shConsent } from '../../../../data/studentHealth';
import Section from '../../../../components/layout/Section/Section';
import ShIntro from '../../components/ShIntro/ShIntro';
import { cn } from '../../../../utils/cn';
import styles from './ConsentSection.module.css';

/** "Consent Is Not One Thing" — three obligation cards, what it means in a system, and the distinction to check. */
function ConsentSection() {
  const { eyebrow, title, description, obligations, paragraphs, note } = shConsent;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="sh-consent-title">
      <ShIntro
        id="sh-consent-title"
        accent="gold"
        eyebrow={eyebrow}
        title={title}
        description={description}
        className={styles.intro}
      />
      <ol className={styles.cards}>
        {obligations.map((item, index) => (
          <li key={item.title} className={cn(styles.card, styles[item.tone])}>
            <div className={styles.head}>
              <span className={styles.chip}>Obligation {index + 1}</span>
              <span className={styles.cite}>{item.cite}</span>
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
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
        <aside className={styles.note}>
          <h3 className={styles.noteTitle}>
            <img src={note.icon.src} alt="" width={note.icon.size[0]} height={note.icon.size[1]} />
            {note.title}
          </h3>
          <p className={styles.noteText}>{note.text}</p>
          <p className={styles.noteAside}>{note.aside}</p>
        </aside>
      </div>
    </Section>
  );
}

export default ConsentSection;
