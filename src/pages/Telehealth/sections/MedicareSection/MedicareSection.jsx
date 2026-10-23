import { thMedicare } from '../../../../data/telehealth';
import Section from '../../../../components/layout/Section/Section';
import RichText from '../../../../components/ui/RichText/RichText';
import { cn } from '../../../../utils/cn';
import ThIntro from '../../components/ThIntro/ThIntro';
import styles from './MedicareSection.module.css';

/** "Medicare Telehealth Rules and the 31 December 2027 Cliff" — the dated rule timeline (the hero's second CTA lands here). */
function MedicareSection() {
  const { eyebrow, title, description, items, sources } = thMedicare;

  return (
    <Section
      id="medicare-policy"
      tone="white"
      spacing="none"
      className={styles.section}
      aria-labelledby="th-medicare-title"
    >
      <ThIntro
        id="th-medicare-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        layout="stacked"
        className={styles.intro}
      />
      <ol className={styles.list}>
        {items.map((item) => (
          <li key={item.title} className={cn(styles.row, styles[item.tone])}>
            <div className={styles.when}>
              <span className={styles.chip}>{item.chip}</span>
              <span className={styles.status}>{item.status}</span>
            </div>
            <div>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>
                <RichText content={item.text} linkClassName={styles.link} />
              </p>
            </div>
          </li>
        ))}
      </ol>
      <p className={styles.sources}>
        <span>
          <img src={sources.icon.src} alt="" width={sources.icon.size[0]} height={sources.icon.size[1]} />
          {sources.text}
        </span>
        <span className={styles.ref}>{sources.ref}</span>
      </p>
    </Section>
  );
}

export default MedicareSection;
