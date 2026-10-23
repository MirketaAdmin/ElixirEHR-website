import { mfaAssessment, mfaHero, mfaUseCases } from '../../data/oncMfaUseCases';
import PageHero from '../../components/sections/PageHero/PageHero';
import WideTiltedHeroMedia from '../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import Section from '../../components/layout/Section/Section';
import ContactForm from '../../components/sections/ContactSection/ContactForm';
import styles from './OncMfaUseCases.module.css';

/** ONC MFA Use Cases — a child page of ONC Certification (which has no page of its own). */
function OncMfaUseCases() {
  const { media, ...hero } = mfaHero;
  const { eyebrow, title, description, check, points, trust, form } = mfaAssessment;

  return (
    <>
      <title>ONC MFA Use Cases | ONC Certification | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} />} />

      <Section tone="white" spacing="none" className={styles.cases} aria-label="Multi-factor authentication use cases">
        <ul className={styles.grid}>
          {mfaUseCases.map((item) => (
            <li key={item.title} className={styles.card}>
              <span className={styles.tile}>
                <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
              </span>
              <h2 className={styles.cardTitle}>{item.title}</h2>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        tone="surface"
        spacing="none"
        className={styles.assessment}
        containerClassName={styles.layout}
        aria-labelledby="mfa-assessment-title"
      >
        <div>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id="mfa-assessment-title" className={styles.title}>
            {title}
          </h2>
          <p className={styles.description}>{description}</p>
          <ul className={styles.points}>
            {points.map((point) => (
              <li key={point}>
                <span className={styles.check}>
                  <img src={check.src} alt="" width={check.size[0]} height={check.size[1]} />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <ul className={styles.trust}>
            {trust.map((item) => (
              <li key={item.label}>
                <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
        <ContactForm
          intro={<h3 className={styles.formTitle}>{form.title}</h3>}
          fieldNames={form.fieldNames}
          fieldOverrides={form.fieldOverrides}
          submitLabel={form.submitLabel}
          showConsent={false}
          className={styles.form}
        />
      </Section>
    </>
  );
}

export default OncMfaUseCases;
