import { Link } from 'react-router-dom';
import RichText from '../../../../components/ui/RichText/RichText';
import styles from './TopicCards.module.css';

/**
 * Three-up grid of lime-topped cards: a purple H3 (a link when the card has a built page, `to`)
 * over a short rich-text description.
 */
function TopicCards({ cards }) {
  return (
    <ul className={styles.grid}>
      {cards.map((card) => (
        <li key={card.title} className={styles.card}>
          <h3 className={styles.title}>
            {card.to ? (
              <Link to={card.to} className={styles.titleLink}>
                {card.title}
              </Link>
            ) : (
              card.title
            )}
          </h3>
          <p className={styles.text}>
            <RichText content={card.text} linkClassName={styles.link} />
          </p>
        </li>
      ))}
    </ul>
  );
}

export default TopicCards;
