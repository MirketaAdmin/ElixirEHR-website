import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import styles from './CpSplit.module.css';

/**
 * The frame's alternating feature band: a 40px purple H2 and body copy beside a product mock-up
 * (`visual`). `reverse` puts the mock-up on the left; `tone` white | warm | surface sets the band.
 * The frame offsets copy and mock-up differently in each band: `offsets` = [copy top, visual top,
 * band bottom padding] in px.
 */
function CpSplit({ id, title, paragraphs, visual, reverse = false, tone = 'white', offsets = [0, 0, 80] }) {
  const [copyTop, visualTop, bottom] = offsets;

  return (
    <Section
      tone="white"
      spacing="none"
      className={cn(styles.section, styles[tone])}
      containerClassName={cn(styles.layout, reverse && styles.reverse)}
      aria-labelledby={`${id}-title`}
      style={{ '--cp-copy-top': `${copyTop}px`, '--cp-visual-top': `${visualTop}px`, '--cp-bottom': `${bottom}px` }}
    >
      <div className={styles.copy}>
        <h2 id={`${id}-title`} className={styles.title}>
          {title}
        </h2>
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.text}>
            {paragraph}
          </p>
        ))}
      </div>
      <div className={styles.visual}>{visual}</div>
    </Section>
  );
}

export default CpSplit;
