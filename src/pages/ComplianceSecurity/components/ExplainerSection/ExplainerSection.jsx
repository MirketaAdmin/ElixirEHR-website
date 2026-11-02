import Section from '../../../../components/layout/Section/Section';
import RichText from '../../../../components/ui/RichText/RichText';
import styles from './ExplainerSection.module.css';

/**
 * Two-column explainer: eyebrow, H2, purple kicker and a lime-edged callout list on the left; the
 * body paragraphs (each opening with a bold lead sentence, as rich-text segments) on the right.
 */
function ExplainerSection({ id, eyebrow, title, kicker, callout, paragraphs }) {
  const titleId = `${id}-title`;

  return (
    <Section tone="white" spacing="none" id={id} className={styles.section} aria-labelledby={titleId}>
      <div className={styles.grid}>
        <div>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id={titleId} className={styles.title}>
            {title}
          </h2>
          <p className={styles.kicker}>{kicker}</p>
          <div className={styles.callout}>
            <h3 className={styles.calloutTitle}>{callout.title}</h3>
            <ul className={styles.calloutList}>
              {callout.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.body}>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>
              <RichText content={paragraph} strongClassName={styles.strong} linkClassName={styles.link} />
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default ExplainerSection;
