import { fsTalk } from '../../../../data/evvFieldService';
import Section from '../../../../components/layout/Section/Section';
import ContactForm from '../../../../components/sections/ContactSection/ContactForm';
import styles from './TalkSection.module.css';

/** "Talk to Elixir": intro, checklist and trust line beside the shared contact form. */
function TalkSection() {
  const { eyebrow, titleLines, description, checkIcon, points, trustedLine, form } = fsTalk;

  return (
    <Section id="talk-to-elixir" tone="surface" spacing="none" className={styles.section} aria-labelledby="fs-talk">
      <div className={styles.grid}>
        <div>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id="fs-talk" className={styles.title}>
            {titleLines.map((line) => (
              <span key={line} className={styles.line}>
                {line}
              </span>
            ))}
          </h2>
          <p className={styles.description}>{description}</p>
          <ul className={styles.points}>
            {points.map((point) => (
              <li key={point}>
                <img src={checkIcon} alt="" width="20" height="20" />
                {point}
              </li>
            ))}
          </ul>
          <p className={styles.trusted}>
            <span>{trustedLine}</span>
          </p>
        </div>

        <ContactForm {...form} showConsent={false} className={styles.form} />
      </div>
    </Section>
  );
}

export default TalkSection;
