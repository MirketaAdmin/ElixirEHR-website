import { cmaOffline } from '../../../../data/caregiverMobileApp';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import styles from './OfflineSection.module.css';

function OfflineSection() {
  const { title, cards, pipeline } = cmaOffline;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="cma-offline">
      <h2 id="cma-offline" className={styles.title}>
        {title}
      </h2>

      <div className={styles.cards}>
        {cards.map((card) => (
          <article key={card.title} className={styles.card}>
            <span className={styles.iconTile}>
              <img src={card.icon} alt="" width="32" height="32" />
            </span>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardText}>{card.text}</p>
          </article>
        ))}
      </div>

      <div className={styles.pipeline}>
        <h3 className={styles.pipelineTitle}>{pipeline.title}</h3>
        <ol className={styles.statuses}>
          {pipeline.items.map((item) => (
            <li key={item.title} className={cn(styles.status, styles[item.tone])}>
              <span className={styles.circle}>
                <img src={item.icon} alt="" width="24" height="24" />
              </span>
              <div>
                <p className={styles.statusTitle}>{item.title}</p>
                <p className={styles.statusText}>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export default OfflineSection;
