import { crmPartnership } from '../../../../data/whatIsElixir';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import checkIcon from '../../../../assets/icons/check-circle-olive.png';
import styles from './CrmPartnershipSection.module.css';

function CrmPartnershipSection() {
  return (
    <Section tone="surface" spacing="none" className={styles.section}>
      <p className={styles.eyebrow}>{crmPartnership.eyebrow}</p>
      <h2 className={cn('text-headline-lg', styles.title)}>{crmPartnership.title}</h2>
      <p className={styles.description}>{crmPartnership.description}</p>

      <ul className={styles.grid}>
        {crmPartnership.cards.map((card) => (
          <li key={card.title} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.tile} style={{ width: card.tile[0], height: card.tile[1] }}>
                <img src={card.icon} alt="" width={card.iconSize[0]} height={card.iconSize[1]} />
              </span>
              <h3 className={styles.cardTitle}>{card.title}</h3>
            </div>
            <ul className={styles.points}>
              {card.points.map((point) => (
                <li key={point} className={styles.point}>
                  <img src={checkIcon} alt="" width="14" height="13" className={styles.check} />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default CrmPartnershipSection;
