import { pillars } from '../../../../data/whyElixir';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import WhySectionHeading from '../../components/WhySectionHeading/WhySectionHeading';
import checkIcon from '../../../../assets/icons/check-circle-lime.png';
import waveformIcon from '../../../../assets/why-elixir/dictation-waveform.png';
import nurseAvatars from '../../../../assets/why-elixir/nurse-avatars.png';
import analyticsIcon from '../../../../assets/why-elixir/admissions-analytics-icon.png';
import mapIcon from '../../../../assets/why-elixir/admissions-map-icon.png';
import styles from './PillarsSection.module.css';

function ReasonExtras({ reason }) {
  if (reason.status) {
    return (
      <div className={styles.status}>
        <p className={styles.statusRow}>
          <span>{reason.status.label}</span>
          <span>{reason.status.value}</span>
        </p>
        <img src={waveformIcon} alt="" width="37" height="42" className={styles.waveform} />
      </div>
    );
  }
  if (reason.avatars) {
    return <img src={nurseAvatars} alt="" width="68" height="36" className={styles.avatars} />;
  }
  if (reason.tools) {
    return (
      <div className={styles.tools}>
        <span className={cn(styles.tool, styles.toolLime)}>
          <img src={analyticsIcon} alt="" width="21" height="22" />
        </span>
        <span className={cn(styles.tool, styles.toolPurple)}>
          <img src={mapIcon} alt="" width="20" height="19" />
        </span>
      </div>
    );
  }
  if (reason.risk) {
    return (
      <p className={styles.risk}>
        <span className={styles.riskLabel}>{reason.risk.label}</span>
        <span className={styles.riskValue}>{reason.risk.value}</span>
      </p>
    );
  }
  if (reason.metric) {
    return (
      <p className={styles.metric}>
        <span className={styles.metricValue}>{reason.metric.value}</span>
        <span className={styles.metricLabel}>
          {reason.metric.labelLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </span>
      </p>
    );
  }
  if (reason.progress) {
    return (
      <div className={styles.progress}>
        <div
          className={styles.bar}
          role="progressbar"
          aria-valuenow={reason.progress.value}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={reason.progress.label}
        >
          <span className={styles.barFill} />
          <span className={styles.barRest} />
        </div>
        <p className={styles.progressRow}>
          <span>{reason.progress.label}</span>
          <span>{reason.progress.value}%</span>
        </p>
      </div>
    );
  }
  return null;
}

function PillarsSection() {
  return (
    <Section spacing="none" className={styles.section} containerClassName={styles.inner}>
      <WhySectionHeading eyebrow={pillars.eyebrow} title={pillars.title} />

      <ul className={styles.grid}>
        {pillars.reasons.map((reason) => (
          <li key={reason.id} className={cn(styles.card, styles[`card${reason.id}`])}>
            <div className={styles.cardBody}>
              <p className={styles.label}>Reason #{reason.id}</p>
              <h3 className={styles.cardTitle}>{reason.title}</h3>
              {reason.points ? (
                <ul className={styles.points}>
                  {reason.points.map((point) => (
                    <li key={point} className={styles.point}>
                      <img src={checkIcon} alt="" width="22" height="22" className={styles.check} />
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={styles.description}>{reason.description}</p>
              )}
              <ReasonExtras reason={reason} />
            </div>
            {reason.image && (
              <img
                src={reason.image.src}
                alt={reason.image.alt}
                width={reason.image.size[0]}
                height={reason.image.size[1]}
                className={styles.image}
              />
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default PillarsSection;
