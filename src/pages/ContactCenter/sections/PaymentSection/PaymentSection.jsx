import { ccPayment } from '../../../../data/contactCenter';
import Section from '../../../../components/layout/Section/Section';
import styles from './PaymentSection.module.css';

/** "Smart Payment & Billing Workflows": one white panel holding the copy, two features and a photo. */
function PaymentSection() {
  const { titleLines, description, items, image } = ccPayment;

  return (
    <Section tone="surface" spacing="none" className={styles.section}>
      <div className={styles.panel}>
        <div>
          <h2 className={styles.title}>
            {titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className={styles.description}>{description}</p>
          <ul className={styles.items}>
            {items.map((item) => (
              <li key={item.title} className={styles.item}>
                <img src={item.icon} alt="" width="56" height="56" className={styles.icon} />
                <div>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemText}>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <img src={image.src} alt={image.alt} width="504" height="576" className={styles.image} />
      </div>
    </Section>
  );
}

export default PaymentSection;
