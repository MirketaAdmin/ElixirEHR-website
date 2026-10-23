import { mhMeasurement } from '../../../../data/mentalHealth';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import BhIntro from '../../../BehavioralHealth/components/BhIntro/BhIntro';
import MhTable from '../../components/MhTable/MhTable';
import styles from './MeasurementSection.module.css';

/**
 * "Measurement-Based Care That Is Actually Measured": the evidence cards (the non-significant
 * result shown muted, as drawn), the platform panel and the standard instruments table.
 */
function MeasurementSection() {
  const { id, eyebrow, title, description, evidence, stats, note, platform, instruments } = mhMeasurement;

  return (
    <Section tone="surface" spacing="none" id={id} className={styles.section} aria-labelledby="mh-measurement-title">
      <BhIntro
        id="mh-measurement-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        className={styles.intro}
      />
      <p className={styles.evidence}>{evidence}</p>
      <ul className={styles.stats}>
        {stats.map((stat) => (
          <li key={stat.label} className={cn(styles.stat, stat.muted && styles.muted)}>
            <div className={styles.statHead}>
              <p className={styles.statLabel}>{stat.label}</p>
              {stat.chip && <span className={styles.chip}>{stat.chip}</span>}
            </div>
            <p className={styles.value}>{stat.value}</p>
            <p className={styles.detail}>{stat.detail}</p>
            <span className={styles.bar} aria-hidden="true" />
          </li>
        ))}
      </ul>
      <p className={styles.note}>
        <span>{note}</span>
      </p>
      <div className={styles.panel}>
        <h3 className={styles.panelTitle}>{platform.title}</h3>
        <ul className={styles.items}>
          {platform.items.map((item) => (
            <li key={item.title}>
              <h4 className={cn(styles.itemTitle, item.tone && styles[item.tone])}>
                <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
                {item.title}
              </h4>
              <p className={styles.itemText}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <h3 id="mh-instruments-title" className={styles.tableTitle}>
        {instruments.title}
      </h3>
      <MhTable
        columns={instruments.columns}
        rows={instruments.rows}
        widths={[267, 292]}
        labelledBy="mh-instruments-title"
        className={styles.table}
      />
      <p className={styles.footnote}>{instruments.footnote}</p>
    </Section>
  );
}

export default MeasurementSection;
