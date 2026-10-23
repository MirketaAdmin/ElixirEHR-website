import { Link } from 'react-router-dom';
import { bhKratu } from '../../../../data/behavioralHealth';
import Section from '../../../../components/layout/Section/Section';
import arrowIcon from '../../../../assets/behavioral-health/icon-arrow-up-right.png';
import badgeIcon from '../../../../assets/behavioral-health/icon-badge-check.png';
import BhIntro from '../../components/BhIntro/BhIntro';
import styles from './KratuSection.module.css';

/** "KratuAI Across Behavioral Health" (dark) — six linked cards and the shared limits note. */
function KratuSection() {
  const { eyebrow, title, description, items, note } = bhKratu;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="bh-kratu-title">
      <BhIntro
        id="bh-kratu-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        tone="dark"
        className={styles.intro}
      />
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title}>
            <Link to={item.to} className={styles.card}>
              <div className={styles.head}>
                <h3 className={styles.title}>{item.title}</h3>
                <img src={arrowIcon} alt="" width="10" height="10" />
              </div>
              <p className={styles.text}>{item.text}</p>
            </Link>
          </li>
        ))}
      </ul>
      <p className={styles.note}>
        <img src={badgeIcon} alt="" width="22" height="21" />
        <span>{note}</span>
      </p>
    </Section>
  );
}

export default KratuSection;
