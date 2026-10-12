import { modularSolutions } from '../../../../data/whatIsElixir';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import styles from './ModularSolutionsSection.module.css';

function ModularSolutionsSection() {
  const { categories, activeCategory, modules } = modularSolutions;

  return (
    <Section spacing="none" className={styles.section} containerClassName={styles.inner}>
      <p className={styles.eyebrow}>{modularSolutions.eyebrow}</p>
      <h2 className={cn('text-headline-lg', styles.title)}>{modularSolutions.title}</h2>

      {/* Category pills as designed; switching behaviour is not defined in the Figma file. */}
      <ul className={styles.categories} aria-label="Solution categories">
        {categories.map((category) => (
          <li
            key={category}
            className={cn(styles.category, category === activeCategory && styles.active)}
            aria-current={category === activeCategory ? 'true' : undefined}
          >
            {category}
          </li>
        ))}
      </ul>

      <ul className={styles.grid}>
        {modules.map((module) => (
          <li key={module.title} className={styles.card}>
            <img src={module.icon} alt="" width={module.iconSize[0]} height={module.iconSize[1]} className={styles.icon} />
            <h3 className={styles.cardTitle}>{module.title}</h3>
            <p className={styles.cardDescription}>{module.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default ModularSolutionsSection;
