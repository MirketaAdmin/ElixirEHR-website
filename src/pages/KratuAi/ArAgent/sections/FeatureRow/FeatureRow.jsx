import Section from '../../../../../components/layout/Section/Section';
import sparkleBadge from '../../../../../assets/kratu-ai/ar-sparkle-badge.png';
import { cn } from '../../../../../utils/cn';
import styles from './FeatureRow.module.css';

/**
 * One feature band: chip, title, purple subtitle, paragraph and an optional extra (risk legend,
 * key-advantage box or sparkle note) beside the row's mock-up. The mock-up image carries its
 * shadow, so negative margins (`media.inset`) line its frame up with the column.
 * tone: the band colour ('light' | 'surface').
 */
function FeatureRow({ row, tone = 'light' }) {
  const { id, padding, chip, title, subtitle, text, legend, advantage, note, media, mediaFirst } = row;
  const [left, right, bottom] = media.inset;

  return (
    <Section
      id={id}
      tone="surface"
      spacing="none"
      className={cn(styles.section, styles[tone], mediaFirst && styles.mediaFirst)}
      aria-labelledby={`${id}-title`}
      style={{ '--pad-top': `${padding[0]}px`, '--pad-bottom': `${padding[1]}px` }}
    >
      <div className={styles.row} style={{ '--media-width': `${media.frameWidth}px` }}>
        <div className={styles.copy}>
          <p className={styles.chip}>{chip}</p>
          <h2 id={`${id}-title`} className={styles.title}>
            {title}
          </h2>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.text}>{text}</p>
          {legend && (
            <ul className={styles.legend}>
              {legend.map((item) => (
                <li key={item.label} className={styles[item.tone]}>
                  {item.label}
                </li>
              ))}
            </ul>
          )}
          {advantage && (
            <div className={styles.advantage}>
              <p className={styles.advantageLabel}>{advantage.label}</p>
              <p className={styles.advantageText}>{advantage.text}</p>
            </div>
          )}
          {note && (
            <p className={styles.note}>
              <img src={sparkleBadge} alt="" width="38" height="38" />
              {note}
            </p>
          )}
        </div>
        <div className={styles.media}>
          <img
            src={media.src}
            alt={media.alt}
            width={media.size[0]}
            height={media.size[1]}
            loading="lazy"
            style={{ '--inset-left': `${left}px`, '--inset-right': `${right}px`, '--inset-bottom': `${bottom}px` }}
          />
        </div>
      </div>
    </Section>
  );
}

export default FeatureRow;
