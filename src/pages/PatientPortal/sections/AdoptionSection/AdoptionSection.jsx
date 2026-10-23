import { patientPortalAdoption } from '../../../../data/patientPortal';
import Section from '../../../../components/layout/Section/Section';
import EyebrowHeading from '../../../../components/ui/EyebrowHeading/EyebrowHeading';
import RichText from '../../../../components/ui/RichText/RichText';
import styles from './AdoptionSection.module.css';

/** "Why most patient portals go unused": four reason cards (lime pill, "What we do", outcome) and the quote band. */
function AdoptionSection() {
  const { eyebrow, title, description, items, outcomeIcon, quote } = patientPortalAdoption;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="pp-adoption-title">
      <EyebrowHeading id="pp-adoption-title" eyebrow={eyebrow} title={title} className={styles.heading} />
      <p className={styles.description}>{description}</p>
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <span className={styles.pill}>{item.tag}</span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>
              <RichText content={item.text} emphasisClassName={styles.emphasis} />
            </p>
            <p className={styles.outcome}>
              <img src={outcomeIcon} alt="" width="14" height="14" />
              {item.outcome}
            </p>
          </li>
        ))}
      </ul>
      <blockquote className={styles.quote}>
        <p>{quote}</p>
      </blockquote>
    </Section>
  );
}

export default AdoptionSection;
