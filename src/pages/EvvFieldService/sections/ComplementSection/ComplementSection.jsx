import { fsComplement } from '../../../../data/evvFieldService';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import styles from './ComplementSection.module.css';

/** "Built to complement Salesforce": gradient card comparing Field Service and Elixir. */
function ComplementSection() {
  const { eyebrow, title, description, columns } = fsComplement;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="fs-complement">
      <div className={styles.card}>
        <div>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id="fs-complement" className={styles.title}>
            {title}
          </h2>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.columns}>
          {columns.map((column, index) => (
            <div key={column.title} className={styles.column}>
              <h3 className={styles.columnTitle}>
                <img src={column.icon} alt="" width="24" height="24" />
                {column.title}
              </h3>
              <ul className={cn(styles.list, index === 0 ? styles.checks : styles.badges)}>
                {column.items.map((item) => (
                  <li key={item}>
                    <img src={column.itemIcon} alt="" width={index === 0 ? 16 : 20} height={index === 0 ? 16 : 20} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default ComplementSection;
