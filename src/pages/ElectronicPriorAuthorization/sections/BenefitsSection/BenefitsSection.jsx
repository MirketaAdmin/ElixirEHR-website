import { epaBenefits } from '../../../../data/electronicPriorAuthorization';
import Section from '../../../../components/layout/Section/Section';
import EpaHeading from '../../components/EpaHeading/EpaHeading';
import styles from './BenefitsSection.module.css';

/** "Benefits of Prior Authorization Automation" — ten outlined benefit tiles (the last two span two columns). */
function BenefitsSection() {
  const { title, description, items } = epaBenefits;

  return (
    <Section tone="dark" spacing="none" className={styles.section} aria-labelledby="epa-benefits-title">
      <EpaHeading id="epa-benefits-title" title={title} description={description} tone="dark" className={styles.heading} />
      <ul className={styles.grid}>
        {items.map((item) => (
          <li key={item} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default BenefitsSection;
