import { visitPrepBoundary } from '../../../../../data/visitPrep';
import Section from '../../../../../components/layout/Section/Section';
import { cn } from '../../../../../utils/cn';
import KrIntro from '../../../components/KrIntro/KrIntro';
import styles from './BoundarySection.module.css';

/** "Strict AI Governance Boundary": what the AI does beside what it never does. */
function BoundarySection() {
  const { eyebrow, title, description, columns } = visitPrepBoundary;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="vp-boundary-title">
      <KrIntro
        id="vp-boundary-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        tone="lime"
        align="center"
        className={styles.intro}
      />
      <div className={styles.grid}>
        {columns.map((column) => (
          <article key={column.title} className={cn(styles.card, styles[column.tone])}>
            <h3 className={styles.title}>
              <span className={styles.circle}>
                <img src={column.icon.src} alt="" width={column.icon.size[0]} height={column.icon.size[1]} />
              </span>
              {column.title}
            </h3>
            <ul className={styles.items}>
              {column.items.map((item) => (
                <li key={item.text}>
                  <span>
                    {item.label && <strong>{item.label}</strong>} {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default BoundarySection;
