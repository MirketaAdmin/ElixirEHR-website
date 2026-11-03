import Section from '../../../../components/layout/Section/Section';
import RichText from '../../../../components/ui/RichText/RichText';
import ComplianceIntro from '../ComplianceIntro/ComplianceIntro';
import styles from './DarkCardsSection.module.css';

/**
 * Purple band of the Compliance & Security pages: an intro, three translucent cards (lime label, white
 * title, bulleted rich-text items), then a muted caption. Used for HIPAA's two-contract explanation and
 * Interoperability's in-force / proposed summary.
 */
function DarkCardsSection({ id, eyebrow, title, description, columns, caption }) {
  const titleId = `${id}-title`;

  return (
    <Section tone="dark" spacing="none" id={id} className={styles.section} aria-labelledby={titleId}>
      <ComplianceIntro id={titleId} eyebrow={eyebrow} title={title} description={description} tone="dark" />
      <div className={styles.grid}>
        {columns.map((column) => (
          <article key={column.label} className={styles.card}>
            <p className={styles.label}>{column.label}</p>
            <h3 className={styles.title}>{column.title}</h3>
            <ul className={styles.list}>
              {column.items.map((item, index) => (
                <li key={index}>
                  <RichText content={item} strongClassName={styles.strong} />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      {caption && <p className={styles.caption}>{caption}</p>}
    </Section>
  );
}

export default DarkCardsSection;
