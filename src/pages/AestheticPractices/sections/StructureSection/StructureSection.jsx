import { aeStructure } from '../../../../data/aestheticPractices';
import Section from '../../../../components/layout/Section/Section';
import AeIntro from '../../components/AeIntro/AeIntro';
import styles from './StructureSection.module.css';

/** "Ownership, Supervision and Who May Treat" — six state-law cards and Elixir's configuration note. */
function StructureSection() {
  const { eyebrow, title, description, items, note } = aeStructure;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="ae-structure-title">
      <AeIntro
        id="ae-structure-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        className={styles.intro}
      />
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <p className={styles.label}>{item.label}</p>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text} style={item.textWidth && { '--ae-text-width': `${item.textWidth}px` }}>
              {item.text}
            </p>
          </li>
        ))}
      </ul>
      <p className={styles.note}>
        <img src={note.icon.src} alt="" width={note.icon.size[0]} height={note.icon.size[1]} />
        <span>{note.text}</span>
      </p>
    </Section>
  );
}

export default StructureSection;
