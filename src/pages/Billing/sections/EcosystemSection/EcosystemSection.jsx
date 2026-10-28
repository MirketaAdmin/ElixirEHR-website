import { billingEcosystem } from '../../../../data/billing';
import Section from '../../../../components/layout/Section/Section';
import styles from './EcosystemSection.module.css';

/** "Built for a Connected Healthcare Ecosystem": framed photo (backdrop baked in) and two integrations. */
function EcosystemSection() {
  const { titleLines, intro, items, image } = billingEcosystem;

  return (
    <Section spacing="none" className={styles.section} containerClassName={styles.inner}>
      <img src={image.src} alt={image.alt} width="534" height="392" className={styles.image} />
      <div>
        <h2 className={styles.title}>
          {titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className={styles.intro}>
          {intro.before}
          <strong>{intro.strong}</strong>
          {intro.after}
        </p>
        <ul className={styles.items}>
          {items.map((item) => (
            <li key={item.title} className={styles.item}>
              <img src={item.icon} alt="" width="48" height="48" className={styles.icon} />
              <div>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemText}>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default EcosystemSection;
