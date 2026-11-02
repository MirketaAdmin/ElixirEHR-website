import Container from '../../../../components/layout/Container/Container';
import styles from './PointsStrip.module.css';

/** Dark strip under the hero: four short points (lime title + one line), divided by hairlines. */
function PointsStrip({ items }) {
  return (
    <section className={styles.strip}>
      <Container>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.title} className={styles.item}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.text}>{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default PointsStrip;
