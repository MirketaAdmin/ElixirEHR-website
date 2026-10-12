import { integrationPortfolio } from '../../../../data/electronicHealthRecord';
import Section from '../../../../components/layout/Section/Section';
import styles from './IntegrationPortfolioSection.module.css';

function IntegrationPortfolioSection() {
  return (
    <Section spacing="none" className={styles.section}>
      <h2 className={styles.title}>{integrationPortfolio.title}</h2>
      <ul className={styles.list}>
        {integrationPortfolio.items.map((item) => (
          <li key={item.label} className={styles.item}>
            <img src={item.icon} alt="" width={item.iconWidth} height="36" />
            {item.label}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default IntegrationPortfolioSection;
