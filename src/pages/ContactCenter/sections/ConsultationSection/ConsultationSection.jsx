import { ccConsultation } from '../../../../data/contactCenter';
import Section from '../../../../components/layout/Section/Section';
import ContactForm from '../../../../components/sections/ContactSection/ContactForm';
import CcIntro from '../../components/CcIntro/CcIntro';
import styles from './ConsultationSection.module.css';

/** "Schedule a Contact Center Consultation": intro card beside the shared contact form. */
function ConsultationSection() {
  const { chip, title, description, points, support, form } = ccConsultation;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="cc-consultation-title">
      <div className={styles.grid}>
        <div className={styles.intro}>
          <CcIntro
            id="cc-consultation-title"
            chip={chip}
            title={title}
            description={description}
            className={styles.heading}
          />
          <ul className={styles.points}>
            {points.map((point) => (
              <li key={point.title}>
                <span className={styles.circle}>
                  <img src={point.icon.src} alt="" width={point.icon.size[0]} height={point.icon.size[1]} />
                </span>
                <div>
                  <h3 className={styles.pointTitle}>{point.title}</h3>
                  <p className={styles.pointText}>{point.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className={styles.support}>
            {support.text} <a href={support.href}>{support.phone}</a>
          </p>
        </div>

        <ContactForm {...form} className={styles.form} />
      </div>
    </Section>
  );
}

export default ConsultationSection;
