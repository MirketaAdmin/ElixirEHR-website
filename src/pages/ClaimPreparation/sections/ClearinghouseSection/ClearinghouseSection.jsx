import { pcClearinghouse } from '../../../../data/claimPreparation';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import PcCheckList from '../../components/PcCheckList/PcCheckList';
import styles from './ClearinghouseSection.module.css';

function ClearinghouseSection() {
  const { title, description, transactions, dayToDay, cards } = pcClearinghouse;

  return (
    <Section spacing="none" id="clearinghouse-connectivity" className={styles.section}>
      <div className={styles.intro}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.box}>
        <p className={styles.label}>{transactions.label}</p>
        <ul className={styles.transactions}>
          {transactions.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={cn(styles.box, styles.dayToDay)}>
        <h3 className={styles.dayTitle}>{dayToDay.title}</h3>
        <PcCheckList items={dayToDay.points} icon={dayToDay.icon} className={styles.dayList} />
      </div>

      <ul className={styles.cards}>
        {cards.map((card) => (
          <li key={card.title} className={styles.card}>
            <div className={styles.cardTop}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <span className={cn(styles.badge, styles[card.badge.tone])}>
                {card.badge.dot && <span className={styles.dot} aria-hidden="true" />}
                {card.badge.label}
              </span>
            </div>
            <p className={styles.cardText}>{card.description}</p>
            {card.points && <PcCheckList items={card.points} icon={card.icon} className={styles.cardList} />}
            {card.tags && (
              <ul className={styles.tags}>
                {card.tags.map((tag) => (
                  <li key={tag.label} className={cn(styles.tag, tag.highlighted && styles.tagDark)}>
                    {tag.label}
                  </li>
                ))}
              </ul>
            )}
            <p className={cn(styles.footer, styles[card.footer.tone])}>{card.footer.label}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default ClearinghouseSection;
