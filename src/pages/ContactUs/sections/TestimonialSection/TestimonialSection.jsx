import { contactTestimonial } from '../../../../data/contactUs';
import Section from '../../../../components/layout/Section/Section';
import styles from './TestimonialSection.module.css';

function TestimonialSection() {
  const { quote, name, role, photo } = contactTestimonial;

  return (
    <Section tone="dark" spacing="none" className={styles.section} containerClassName={styles.inner}>
      <img src={photo} alt={name} width="120" height="120" className={styles.photo} />
      <figure className={styles.figure}>
        <blockquote className={styles.quote}>
          <p>{quote}</p>
        </blockquote>
        <figcaption>
          <span className={styles.name}>{name}</span>
          <span className={styles.role}>{role}</span>
        </figcaption>
      </figure>
    </Section>
  );
}

export default TestimonialSection;
