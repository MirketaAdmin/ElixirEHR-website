import { aeGrowth } from '../../../../data/aestheticPractices';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import AeIntro from '../../components/AeIntro/AeIntro';
import styles from './GrowthSection.module.css';

/** "Marketing, Reviews and Text Campaigns Without the Legal Exposure" — five tagged rule rows. */
function GrowthSection() {
  const { eyebrow, title, description, items } = aeGrowth;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="ae-growth-title">
      <AeIntro
        id="ae-growth-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        className={styles.intro}
      />
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.title} className={styles.row}>
            <div>
              <h3 className={styles.title}>
                <span className={cn(styles.tag, styles[item.tone])}>{item.tag}</span> {item.title}
              </h3>
              <p className={styles.text}>{item.text}</p>
            </div>
            <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default GrowthSection;
