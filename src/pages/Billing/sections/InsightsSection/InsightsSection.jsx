import { billingInsights } from '../../../../data/billing';
import Section from '../../../../components/layout/Section/Section';
import Icon from '../../../../components/ui/Icon/Icon';
import styles from './InsightsSection.module.css';

/** "Actionable Insights & Operational Analytics": badge, title, three feature rows and a tilted photo. */
function InsightsSection() {
  const { badge, titleLines, description, items, image } = billingInsights;

  return (
    <Section tone="surface" spacing="none" className={styles.section} containerClassName={styles.inner}>
      <div>
        <p className={styles.badge}>
          <Icon name="trendingUp" size={16} />
          {badge}
        </p>
        <h2 className={styles.title}>
          {titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className={styles.description}>{description}</p>
        <ul className={styles.items}>
          {items.map((item) => (
            <li key={item.text} className={styles.item}>
              <img src={item.icon} alt="" width="26" height="26" />
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <img src={image.src} alt={image.alt} width="594" height="520" className={styles.image} />
    </Section>
  );
}

export default InsightsSection;
