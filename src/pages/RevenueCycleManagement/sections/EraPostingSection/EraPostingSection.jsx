import { eraPosting } from '../../../../data/revenueCycleManagement';
import Section from '../../../../components/layout/Section/Section';
import styles from './EraPostingSection.module.css';

function EraPostingSection() {
  const { titleLines, description, image, caption, steps } = eraPosting;

  return (
    <Section
      id="era-payment-posting"
      tone="white"
      spacing="none"
      className={styles.section}
      containerClassName={styles.inner}
    >
      <h2 className={styles.title}>
        {titleLines.map((line) => (
          <span key={line} className={styles.titleLine}>
            {line}
          </span>
        ))}
      </h2>
      <p className={styles.description}>{description}</p>

      <figure className={styles.figure}>
        <img src={image.src} alt={image.alt} width="682" height="401" className={styles.image} />
        <figcaption className={styles.caption}>{caption}</figcaption>
      </figure>

      <ul className={styles.steps}>
        {steps.map((step) => (
          <li key={step.title} className={styles.step}>
            <span className={styles.icon}>
              <img src={step.icon} alt="" width={step.iconSize[0]} height={step.iconSize[1]} />
            </span>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepText}>{step.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default EraPostingSection;
