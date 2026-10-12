import { orderFromChaos } from '../../../../data/electronicHealthRecord';
import Section from '../../../../components/layout/Section/Section';
import styles from './OrderFromChaosSection.module.css';

function OrderFromChaosSection() {
  return (
    <Section tone="surface" spacing="none" className={styles.section}>
      <h2 className={styles.title}>{orderFromChaos.title}</h2>
      <p className={styles.description}>{orderFromChaos.description}</p>
      <ul className={styles.grid}>
        {orderFromChaos.items.map((item) => (
          <li key={item.title} className={styles.item}>
            <span className={styles.tile}>
              <img src={item.icon} alt="" width="36" height="36" />
            </span>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemDescription}>{item.description}</p>
            <span className={styles.bar} aria-hidden="true" />
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default OrderFromChaosSection;
