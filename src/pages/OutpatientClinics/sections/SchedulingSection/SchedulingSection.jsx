import { Link } from 'react-router-dom';
import { opScheduling } from '../../../../data/outpatientClinics';
import Section from '../../../../components/layout/Section/Section';
import trendIcon from '../../../../assets/outpatient-clinics/icon-trend.png';
import OpIntro from '../../components/OpIntro/OpIntro';
import styles from './SchedulingSection.module.css';

/** "Multi-Specialty, Multi-Resource Scheduling" (dark) — twelve cards and the no-show promo. */
function SchedulingSection() {
  const { eyebrow, title, description, items, promo } = opScheduling;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="op-scheduling-title">
      <OpIntro id="op-scheduling-title" eyebrow={eyebrow} title={title} description={description} tone="dark" className={styles.intro} />
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <h3 className={styles.title}>
              <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
              {item.title}
            </h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
      <div className={styles.promo}>
        <img src={trendIcon} alt="" width="27" height="17" />
        <div className={styles.promoCopy}>
          <p className={styles.promoTitle}>{promo.title}</p>
          <p className={styles.promoText}>{promo.text}</p>
        </div>
        <Link to={promo.link.to} className={styles.promoLink}>
          {promo.link.label} <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </Section>
  );
}

export default SchedulingSection;
