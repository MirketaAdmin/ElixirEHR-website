import { ccCensus } from '../../../../data/contactCenter';
import Section from '../../../../components/layout/Section/Section';
import styles from './CensusSection.module.css';

/**
 * "Intelligent Census & Capacity Management": the photo (lime backdrop and shadow baked in) with the
 * "Multi-Facility View" card over its lower right, then the copy and two feature cards.
 */
function CensusSection() {
  const { titleLines, description, overlay, items, image } = ccCensus;

  return (
    <Section spacing="none" className={styles.section} containerClassName={styles.inner}>
      <figure className={styles.media}>
        <img src={image.src} alt={image.alt} width="584" height="510" className={styles.image} />
        <figcaption className={styles.overlay}>
          <span className={styles.overlayTitle}>{overlay.title}</span>
          <span className={styles.overlayText}>{overlay.text}</span>
        </figcaption>
      </figure>
      <div>
        <h2 className={styles.title}>
          {titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
        <p className={styles.description}>{description}</p>
        <ul className={styles.items}>
          {items.map((item) => (
            <li key={item.title} className={styles.item}>
              <img src={item.icon} alt="" width="48" height="48" className={styles.icon} />
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemText}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default CensusSection;
