import { demoRequest } from '../../../../data/contactUs';
import { contact } from '../../../../data/contact';
import Section from '../../../../components/layout/Section/Section';
import ContactForm from '../../../../components/sections/ContactSection/ContactForm';
import sparkleIcon from '../../../../assets/contact-us/icon-sparkle.png';
import styles from './DemoRequestSection.module.css';

/** The approved contact form (shared with About Us / What Is Elixir) next to the "Why Elixir AI" panel. */
function DemoRequestSection() {
  const { title, description, media, insight, whyTitle, reasons } = demoRequest;

  return (
    <Section tone="white" spacing="none" id="contact" className={styles.section} containerClassName={styles.inner}>
      <ContactForm
        className={styles.form}
        intro={
          <div className={styles.intro}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
          </div>
        }
      />

      <div className={styles.panel}>
        <div className={styles.media}>
          <div className={styles.frame}>
            <img src={media.src} alt={media.alt} width="528" height="296" className={styles.image} />
          </div>
          <div className={styles.insight}>
            <img src={sparkleIcon} alt="" width="23" height="23" className={styles.sparkle} />
            <p>
              <span className={styles.insightLabel}>{insight.label}</span>
              <span className={styles.insightText}>{insight.text}</span>
            </p>
          </div>
        </div>

        <h3 className={styles.whyTitle}>{whyTitle}</h3>
        <ul className={styles.reasons}>
          {reasons.map((reason) => (
            <li key={reason.title} className={styles.reason}>
              <img src={reason.icon} alt="" width={reason.iconSize[0]} height={reason.iconSize[1]} />
              <h4 className={styles.reasonTitle}>{reason.title}</h4>
              <p className={styles.reasonText}>{reason.description}</p>
            </li>
          ))}
        </ul>

        <p className={styles.trustedLabel}>{contact.trustedLabel}</p>
        <ul className={styles.logos}>
          {contact.logos.map((logo) => (
            <li key={logo.name}>
              <img
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                style={{ width: logo.width * 0.72, height: logo.height * 0.72 }}
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default DemoRequestSection;
