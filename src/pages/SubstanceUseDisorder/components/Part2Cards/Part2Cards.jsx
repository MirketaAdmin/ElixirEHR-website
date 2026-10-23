import { sudPart2Cards } from '../../../../data/substanceUseDisorder';
import { cn } from '../../../../utils/cn';
import styles from './Part2Cards.module.css';

/** The six white 42 CFR Part 2 cards: a lavender label chip, an icon, a title and the detail. */
function Part2Cards({ className }) {
  return (
    <ul className={cn(styles.grid, className)}>
      {sudPart2Cards.map((card) => (
        <li key={card.title} className={styles.card}>
          <div className={styles.head}>
            <span className={styles.chip}>{card.label}</span>
            <img src={card.icon.src} alt="" width={card.icon.size[0]} height={card.icon.size[1]} />
          </div>
          <h3 className={styles.title}>{card.title}</h3>
          <p className={styles.text}>{card.text}</p>
        </li>
      ))}
    </ul>
  );
}

export default Part2Cards;
