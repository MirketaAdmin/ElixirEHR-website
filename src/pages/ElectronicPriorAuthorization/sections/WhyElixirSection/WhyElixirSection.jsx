import { epaWhyElixir } from '../../../../data/electronicPriorAuthorization';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import EpaHeading from '../../components/EpaHeading/EpaHeading';
import styles from './WhyElixirSection.module.css';

/** "Why Elixir for Electronic Prior Authorization?" — the five platform modules, this one outlined. */
function WhyElixirSection() {
  const { title, description, modules } = epaWhyElixir;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="epa-why-title">
      <EpaHeading id="epa-why-title" title={title} description={description} tone="ink" className={styles.heading} />
      <ul className={styles.grid}>
        {modules.map((module) => (
          <li key={module.title} className={cn(styles.card, module.current && styles.current)}>
            <h3 className={styles.title}>{module.title}</h3>
            <p className={styles.text}>{module.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default WhyElixirSection;
