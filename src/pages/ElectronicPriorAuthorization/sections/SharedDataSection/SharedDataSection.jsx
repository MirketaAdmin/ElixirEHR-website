import { epaSharedData } from '../../../../data/electronicPriorAuthorization';
import Section from '../../../../components/layout/Section/Section';
import EpaHeading from '../../components/EpaHeading/EpaHeading';
import styles from './SharedDataSection.module.css';

/** "Prior authorization works better when it shares data…" — three capability cards. */
function SharedDataSection() {
  const { title, items } = epaSharedData;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="epa-shared-title">
      <EpaHeading id="epa-shared-title" title={title} className={styles.heading} />
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item.title} className={styles.card}>
            <span className={styles.tile}>
              <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
            {item.badge && <p className={styles.badge}>{item.badge}</p>}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default SharedDataSection;
