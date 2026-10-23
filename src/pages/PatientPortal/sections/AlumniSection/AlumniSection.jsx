import { patientPortalAlumni } from '../../../../data/patientPortal';
import Container from '../../../../components/layout/Container/Container';
import EyebrowHeading from '../../../../components/ui/EyebrowHeading/EyebrowHeading';
import styles from './AlumniSection.module.css';

/** "After discharge": the gradient band with four alumni-engagement cards (yellow accents). */
function AlumniSection() {
  const { eyebrow, title, description, items } = patientPortalAlumni;

  return (
    <section className={styles.section} aria-labelledby="pp-alumni-title">
      <Container>
        <EyebrowHeading
          id="pp-alumni-title"
          eyebrow={eyebrow}
          title={title}
          tone="dark"
          className={styles.heading}
        />
        <p className={styles.description}>{description}</p>
        <ul className={styles.grid}>
          {items.map((item) => (
            <li key={item.title} className={styles.card}>
              <span className={styles.tile}>
                <img src={item.icon} alt="" width="28" height="28" />
              </span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.text}>{item.text}</p>
              <p className={styles.tag}>
                <img src={item.tagIcon} alt="" width="14" height="14" />
                {item.tag}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default AlumniSection;
