import { thExperience } from '../../../../data/telehealth';
import Section from '../../../../components/layout/Section/Section';
import RichText from '../../../../components/ui/RichText/RichText';
import ThIntro from '../../components/ThIntro/ThIntro';
import styles from './ExperienceSection.module.css';

/** "A Personalized Experience for Patients" — six numbered module cards. */
function ExperienceSection() {
  const { eyebrow, title, description, items } = thExperience;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="th-experience-title">
      <ThIntro id="th-experience-title" eyebrow={eyebrow} title={title} description={description} className={styles.intro} />
      <ul className={styles.grid}>
        {items.map((item, index) => (
          <li key={item.title} className={styles.card}>
            <p className={styles.label}>MOD-EXP // {String(index + 1).padStart(2, '0')}</p>
            <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} className={styles.icon} />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>
              <RichText content={item.text} linkClassName={styles.link} />
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default ExperienceSection;
