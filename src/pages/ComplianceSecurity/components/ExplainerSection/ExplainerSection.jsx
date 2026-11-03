import Section from '../../../../components/layout/Section/Section';
import RichText from '../../../../components/ui/RichText/RichText';
import styles from './ExplainerSection.module.css';

/**
 * Two-column explainer: eyebrow, H2, purple kicker and a lime-edged callout list on the left; the
 * body paragraphs (each opening with a bold lead sentence, as rich-text segments) on the right, with
 * an optional smaller `caption` under them. Callout items may be rich text too. Instead of the
 * callout, the left column can carry a purple-edged `attribution` box (small caps label + statement),
 * optionally preceded by a `tally` list (big count, label, code on the right) named by `tallyLabel`.
 */
function ExplainerSection({
  id,
  tone = 'white',
  eyebrow,
  title,
  kicker,
  callout,
  tally,
  tallyLabel,
  attribution,
  paragraphs,
  caption,
}) {
  const titleId = `${id}-title`;

  return (
    <Section tone={tone} spacing="none" id={id} className={styles.section} aria-labelledby={titleId}>
      <div className={styles.grid}>
        <div>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 id={titleId} className={styles.title}>
            {title}
          </h2>
          <p className={styles.kicker}>{kicker}</p>
          {callout && (
            <div className={styles.callout}>
              <h3 className={styles.calloutTitle}>{callout.title}</h3>
              <ul className={styles.calloutList}>
                {callout.items.map((item, index) => (
                  <li key={index}>
                    <RichText content={item} strongClassName={styles.strong} />
                  </li>
                ))}
              </ul>
            </div>
          )}
          {tally && (
            <ul className={styles.tally} aria-label={tallyLabel}>
              {tally.map((item) => (
                <li key={item.code}>
                  <b>{item.count}</b> {item.label} <code>{item.code}</code>
                </li>
              ))}
            </ul>
          )}
          {attribution && (
            <div className={styles.attribution}>
              <span className={styles.attributionLabel}>{attribution.label}</span>
              <p>{attribution.text}</p>
            </div>
          )}
        </div>
        <div className={styles.body}>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>
              <RichText
                content={paragraph}
                strongClassName={styles.strong}
                linkClassName={styles.link}
                codeClassName={styles.code}
              />
            </p>
          ))}
          {caption && (
            <p className={styles.caption}>
              <RichText content={caption} linkClassName={styles.link} />
            </p>
          )}
        </div>
      </div>
    </Section>
  );
}

export default ExplainerSection;
