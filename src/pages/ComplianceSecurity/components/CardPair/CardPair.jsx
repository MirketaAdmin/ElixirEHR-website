import RichText from '../../../../components/ui/RichText/RichText';
import styles from './CardPair.module.css';

/** Two plain white cards side by side, each a purple H3 over one or more rich-text paragraphs. */
function CardPair({ cards }) {
  return (
    <div className={styles.pair}>
      {cards.map((card) => (
        <article key={card.title} className={styles.card}>
          <h3 className={styles.title}>{card.title}</h3>
          {card.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.text}>
              <RichText content={paragraph} strongClassName={styles.strong} />
            </p>
          ))}
        </article>
      ))}
    </div>
  );
}

export default CardPair;
