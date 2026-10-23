import { Link } from 'react-router-dom';
import { sudRevenue } from '../../../../data/substanceUseDisorder';
import Section from '../../../../components/layout/Section/Section';
import SudIntro from '../../components/SudIntro/SudIntro';
import styles from './RevenueSection.module.css';

/** "Revenue Cycle Management for Substance Use Disorder Billing" — nine numbered cards. */
function RevenueSection() {
  const { eyebrow, title, description, items } = sudRevenue;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="sud-revenue-title">
      <SudIntro id="sud-revenue-title" eyebrow={eyebrow} title={title} description={description} />
      <ol className={styles.grid}>
        {items.map((item, index) => (
          <li key={item.title} className={styles.card}>
            <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>
              {item.text}
              {item.link && (
                <>
                  {' '}
                  <Link to={item.link.to} className={styles.link}>
                    {item.link.label}
                  </Link>
                  .
                </>
              )}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default RevenueSection;
