import { Link } from 'react-router-dom';
import { bhCompliance } from '../../../../data/behavioralHealth';
import Section from '../../../../components/layout/Section/Section';
import chevronIcon from '../../../../assets/behavioral-health/icon-chevron-right.png';
import BhIntro from '../../components/BhIntro/BhIntro';
import styles from './ComplianceSection.module.css';

/** "The Behavioral Health Compliance Spine" — six white cards and a footnote bar. */
function ComplianceSection() {
  const { eyebrow, title, description, items, footnote } = bhCompliance;
  const linkContent = (
    <>
      {footnote.link.label}
      <img src={chevronIcon} alt="" width="5" height="8" />
    </>
  );

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="bh-compliance-title">
      <BhIntro
        id="bh-compliance-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        className={styles.intro}
      />
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <p className={styles.label}>{item.label}</p>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
      <div className={styles.footnote}>
        <p>{footnote.text}</p>
        {footnote.link.to ? (
          <Link to={footnote.link.to} className={styles.link}>
            {linkContent}
          </Link>
        ) : (
          <span className={styles.link}>{linkContent}</span>
        )}
      </div>
    </Section>
  );
}

export default ComplianceSection;
