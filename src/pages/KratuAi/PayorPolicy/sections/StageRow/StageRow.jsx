import Section from '../../../../../components/layout/Section/Section';
import { cn } from '../../../../../utils/cn';
import PpIntro from '../../components/PpIntro/PpIntro';
import styles from './StageRow.module.css';

/**
 * Stage 02 / Stage 03: copy, paragraphs and a lavender summary beside the stage's illustrative
 * interface and its disclaimer. The mock-up image carries its shadow, so negative margins
 * (`media.inset`) line its frame up with the column. tone: the band colour ('white' | 'surface').
 */
function StageRow({ stage, tone = 'white' }) {
  const { id, eyebrow, title, paragraphs, quote, media, mediaFirst, alignTop } = stage;
  const [top, right, bottom, left] = media.inset;

  return (
    <Section
      id={id}
      tone={tone}
      spacing="none"
      className={cn(styles.section, mediaFirst && styles.mediaFirst)}
      aria-labelledby={`${id}-title`}
    >
      <div className={cn(styles.row, alignTop && styles.alignTop)}>
        <div className={styles.copy}>
          <PpIntro id={`${id}-title`} eyebrow={eyebrow} title={title} className={styles.intro} />
          <div className={styles.paragraphs}>
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className={styles.quote}>{quote}</p>
        </div>
        <figure className={styles.media}>
          <img
            src={media.src}
            alt={media.alt}
            width={media.size[0]}
            height={media.size[1]}
            loading="lazy"
            style={{
              '--inset-top': `${top}px`,
              '--inset-right': `${right}px`,
              '--inset-bottom': `${bottom}px`,
              '--inset-left': `${left}px`,
            }}
          />
          <figcaption className={styles.caption}>{media.caption}</figcaption>
        </figure>
      </div>
    </Section>
  );
}

export default StageRow;
