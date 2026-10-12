import { claimForms } from '../../../../data/revenueCycleManagement';
import Section from '../../../../components/layout/Section/Section';
import styles from './ClaimFormsSection.module.css';

function ClaimFormsSection() {
  const { title, description, forms } = claimForms;

  return (
    <Section tone="surface" spacing="none" className={styles.section} containerClassName={styles.inner}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>

      <div className={styles.grid}>
        {forms.map((form) => (
          <article key={form.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{form.title}</h3>
            <p className={styles.cardText}>
              {form.lines.map((line) => (
                <span key={line} className={styles.line}>
                  {line}
                </span>
              ))}
            </p>
          </article>
        ))}
        {forms.map((form) => (
          <img
            key={form.image.alt}
            src={form.image.src}
            alt={form.image.alt}
            width="552"
            height="298"
            className={styles.image}
          />
        ))}
      </div>
    </Section>
  );
}

export default ClaimFormsSection;
