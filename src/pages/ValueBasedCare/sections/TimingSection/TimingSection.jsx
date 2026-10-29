import { vbTiming } from '../../../../data/valueBasedCare';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import Icon from '../../../../components/ui/Icon/Icon';
import VbIntro from '../../components/VbIntro/VbIntro';
import styles from './TimingSection.module.css';

/** "The Measures That Decide Your Payment…": the median-state bar chart, the argument and the non-claim. */
function TimingSection() {
  const { eyebrow, title, description, chart, paragraphs, claim } = vbTiming;

  return (
    <Section id="timing" spacing="none" className={styles.section} aria-labelledby="vb-timing">
      <VbIntro id="vb-timing" eyebrow={eyebrow} title={title} description={description} />

      <figure className={styles.chart}>
        <figcaption>
          <h3 className={styles.chartTitle}>{chart.title}</h3>
          <p className={styles.chartSubtitle}>{chart.subtitle}</p>
        </figcaption>
        <ul className={styles.bars}>
          {chart.bars.map((bar) => (
            <li key={bar.label} className={cn(styles.bar, styles[bar.tone])}>
              <p className={styles.barHead}>
                <span>{bar.label}</span>
                <span className={styles.value}>{bar.value.toFixed(1)}%</span>
              </p>
              <span className={styles.track} aria-hidden="true">
                <span className={styles.fill} style={{ width: `${bar.value}%` }} />
              </span>
            </li>
          ))}
        </ul>
        <p className={styles.note}>
          <Icon name="help" size={20} className={styles.noteIcon} />
          {chart.note}
        </p>
      </figure>

      <div className={styles.body}>
        <div className={styles.copy}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <aside className={styles.claim}>
          <h3 className={styles.claimTitle}>
            <Icon name="shieldCheck" size={22} />
            {claim.title}
          </h3>
          {claim.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </aside>
      </div>
    </Section>
  );
}

export default TimingSection;
