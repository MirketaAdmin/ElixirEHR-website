import MockCard from '../../components/MockCard/MockCard';
import ambientIcon from '../../../../assets/kratu-ai/mock-ambient.png';
import styles from './CoPilotMock.module.css';

/** Kratu Co-Pilot mock-up: the workspace tabs, the drafted SOAP note and an EHR insight. */
function CoPilotMock({ mock }) {
  return (
    <MockCard
      icon={{ src: ambientIcon, size: [15, 11] }}
      title={mock.title}
      badge={mock.badge}
      badgeTone="lavender"
      bodyClassName={styles.body}
    >
      <ul className={styles.tabs}>
        {mock.tabs.map((tab, index) => (
          <li key={tab} className={index === 0 ? styles.active : undefined}>
            {tab}
          </li>
        ))}
      </ul>
      <div className={styles.note}>
        {mock.note.map((part) => (
          <div key={part.heading}>
            <p className={styles.heading}>{part.heading}</p>
            {part.lines.map((line) => (
              <p key={line} className={styles.line}>
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
      <p className={styles.insight}>
        <span>
          <strong>{mock.insight.label}</strong> {mock.insight.text}
        </span>
        <span className={styles.action}>{mock.insight.action}</span>
      </p>
    </MockCard>
  );
}

export default CoPilotMock;
