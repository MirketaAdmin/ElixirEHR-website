import { thEngagement } from '../../../../data/telehealth';
import Section from '../../../../components/layout/Section/Section';
import RichText from '../../../../components/ui/RichText/RichText';
import ThIntro from '../../components/ThIntro/ThIntro';
import styles from './EngagementSection.module.css';

/** "How Telehealth Improves Patient Engagement" — six grid-referenced cards. */
function EngagementSection() {
  const { eyebrow, title, description, items } = thEngagement;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="th-engagement-title">
      <ThIntro id="th-engagement-title" eyebrow={eyebrow} title={title} description={description} className={styles.intro} />
      <ul className={styles.grid}>
        {items.map((item, index) => (
          <li key={item.title} className={styles.card}>
            <div className={styles.head}>
              <span className={styles.label}>GRID-REF: ENG-{String(index + 1).padStart(2, '0')}</span>
              <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
            </div>
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

export default EngagementSection;
