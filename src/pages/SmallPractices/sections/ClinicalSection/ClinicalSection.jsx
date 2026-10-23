import { spClinical } from '../../../../data/smallPractices';
import Section from '../../../../components/layout/Section/Section';
import SpIntro from '../../components/SpIntro/SpIntro';
import styles from './ClinicalSection.module.css';

/** "A Customizable EHR You Can Change Without a Consultant" — four cards in two independent columns. */
function ClinicalSection() {
  const { eyebrow, title, description, items } = spClinical;
  // As drawn: odd cards stack in the left column, even cards in the right.
  const columns = [items.filter((_, i) => i % 2 === 0), items.filter((_, i) => i % 2 === 1)];

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="sp-clinical-title">
      <SpIntro id="sp-clinical-title" eyebrow={eyebrow} title={title} description={description} strong />
      <div className={styles.columns}>
        {columns.map((column, index) => (
          <ul key={index} className={styles.column}>
            {column.map((item) => (
              <li key={item.title} className={styles.card}>
                <span className={styles.tile}>
                  <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
                </span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.text} style={item.textWidth && { '--sp-text-width': `${item.textWidth}px` }}>
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </Section>
  );
}

export default ClinicalSection;
