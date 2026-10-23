import { spReporting } from '../../../../data/smallPractices';
import Section from '../../../../components/layout/Section/Section';
import SpIntro from '../../components/SpIntro/SpIntro';
import styles from './ReportingSection.module.css';

/** "Advanced Reporting Without a Data Analyst" — three white cards with lime icon discs. */
function ReportingSection() {
  const { eyebrow, title, description, items } = spReporting;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="sp-reporting-title">
      <SpIntro id="sp-reporting-title" eyebrow={eyebrow} title={title} description={description} strong />
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <span className={styles.disc}>
              <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text} style={item.textWidth && { '--sp-text-width': `${item.textWidth}px` }}>
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default ReportingSection;
