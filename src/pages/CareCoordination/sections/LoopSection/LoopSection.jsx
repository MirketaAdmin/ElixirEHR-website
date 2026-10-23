import { ccLoop } from '../../../../data/careCoordination';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import BhIntro from '../../../BehavioralHealth/components/BhIntro/BhIntro';
import styles from './LoopSection.module.css';

/**
 * "The Loop That Does Not Close": the referral funnel (three bars, the last flagged as the
 * critical gap), the evidence paragraphs and the red "What we will not claim" panel.
 */
function LoopSection() {
  const { id, eyebrow, title, description, chart, paragraphs, disclaimer } = ccLoop;

  return (
    <Section tone="surface" spacing="none" id={id} className={styles.section} aria-labelledby="cc-loop-title">
      <BhIntro id="cc-loop-title" eyebrow={eyebrow} title={title} description={description} className={styles.intro} />
      <figure className={styles.chart}>
        <figcaption className={styles.chartHead}>
          <span>
            <span className={styles.chartTitle}>{chart.title}</span>
            <span className={styles.chartSubtitle}>{chart.subtitle}</span>
          </span>
          <span className={styles.benchmark}>{chart.chip}</span>
        </figcaption>
        <ol className={styles.rows}>
          {chart.rows.map((row) => (
            <li key={row.label} className={cn(styles.row, styles[row.tone])}>
              <div className={styles.rowHead}>
                <span className={styles.rowLabel}>{row.label}</span>
                <span className={styles.rowValue}>
                  {row.chip && <span className={styles.gap}>{row.chip}</span>}
                  <strong>{row.value}</strong>
                  {row.share && <span className={styles.share}>{row.share}</span>}
                </span>
              </div>
              <span className={styles.track} aria-hidden="true">
                <span className={styles.fill} style={{ width: `${row.width}%` }} />
              </span>
            </li>
          ))}
        </ol>
        <p className={styles.note}>
          <img src={chart.note.icon.src} alt="" width={chart.note.icon.size[0]} height={chart.note.icon.size[1]} />
          <span>{chart.note.text}</span>
        </p>
      </figure>
      <div className={styles.lower}>
        <div className={styles.paragraphs}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <aside className={styles.disclaimer} aria-labelledby="cc-disclaimer-title">
          <h3 id="cc-disclaimer-title" className={styles.disclaimerTitle}>
            <img src={disclaimer.icon.src} alt="" width={disclaimer.icon.size[0]} height={disclaimer.icon.size[1]} />
            {disclaimer.title}
          </h3>
          <p className={styles.disclaimerText}>{disclaimer.text}</p>
          <p className={styles.statement}>{disclaimer.statement}</p>
        </aside>
      </div>
    </Section>
  );
}

export default LoopSection;
