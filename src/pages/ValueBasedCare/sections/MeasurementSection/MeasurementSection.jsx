import { vbMeasurement } from '../../../../data/valueBasedCare';
import Section from '../../../../components/layout/Section/Section';
import Icon from '../../../../components/ui/Icon/Icon';
import VbIntro from '../../components/VbIntro/VbIntro';
import styles from './MeasurementSection.module.css';

// PHQ-9 runs 0–27. The chart plots each score left to right and draws the remission threshold.
const MAX_SCORE = 27;
const CHART = { width: 360, height: 90, padX: 16, padY: 10 };
const toneColor = { red: '#ba1a1a', yellow: '#f2c60f', green: '#4d7a00' };

function Trajectory({ trajectory }) {
  const { points, threshold } = trajectory;
  const step = (CHART.width - CHART.padX * 2) / (points.length - 1);
  const y = (score) => CHART.padY + (1 - score / MAX_SCORE) * (CHART.height - CHART.padY * 2);
  const coords = points.map((point, index) => [CHART.padX + index * step, y(point.score)]);
  const thresholdY = y(5);

  return (
    <div className={styles.plot}>
      <ol className={styles.points}>
        {points.map((point) => (
          <li key={point.label}>{point.label}</li>
        ))}
      </ol>
      <svg
        viewBox={`0 0 ${CHART.width} ${CHART.height}`}
        className={styles.svg}
        role="img"
        aria-label={`PHQ-9 scores: ${points.map((point) => point.label).join(', ')}`}
      >
        <line
          x1={CHART.padX}
          x2={CHART.width - CHART.padX}
          y1={thresholdY}
          y2={thresholdY}
          stroke="#c9c3cc"
          strokeDasharray="4 4"
        />
        <text x={CHART.width - CHART.padX} y={thresholdY - 4} textAnchor="end" className={styles.threshold}>
          {threshold}
        </text>
        <polyline points={coords.map((c) => c.join(',')).join(' ')} fill="none" stroke="#321b4f" strokeWidth="2" />
        {coords.map(([cx, cy], index) => (
          <circle key={points[index].label} cx={cx} cy={cy} r="5" fill={toneColor[points[index].tone]} />
        ))}
      </svg>
    </div>
  );
}

/** "Measurement-Based Care…": the argument on the left, a PHQ-9 trajectory card on the right. */
function MeasurementSection() {
  const { eyebrow, title, lead, paragraphs, note, trajectory } = vbMeasurement;

  return (
    <Section spacing="none" className={styles.section} aria-labelledby="vb-measurement">
      <VbIntro id="vb-measurement" eyebrow={eyebrow} title={title} description={lead} strong />
      <div className={styles.body}>
        <div className={styles.copy}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          <p className={styles.note}>{note}</p>
        </div>
        <figure className={styles.card}>
          <figcaption className={styles.cardHead}>
            <span className={styles.cardTitle}>
              <Icon name="document" size={22} />
              {trajectory.title}
            </span>
            <span className={styles.badge}>{trajectory.badge}</span>
          </figcaption>
          <Trajectory trajectory={trajectory} />
          <dl className={styles.result}>
            <div>
              <dt>{trajectory.instrument.label}</dt>
              <dd>{trajectory.instrument.value}</dd>
            </div>
            <p className={styles.met}>{trajectory.result}</p>
          </dl>
        </figure>
      </div>
    </Section>
  );
}

export default MeasurementSection;
