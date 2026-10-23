import { raRule } from '../../../../data/responsibleAi';
import Section from '../../../../components/layout/Section/Section';
import shieldCheckIcon from '../../../../assets/responsible-ai/icon-shield-check.png';
import shieldIcon from '../../../../assets/responsible-ai/icon-shield.png';
import checkIcon from '../../../../assets/responsible-ai/icon-check.png';
import Icon from '../../../../components/ui/Icon/Icon';
import RaIntro from '../../components/RaIntro/RaIntro';
import styles from './RuleSection.module.css';

/** "Every KratuAI agent prepares the work. A person makes the decision." — the two-sided diagram. */
function RuleSection() {
  const { chip, title, description, prepares, gate, decides, callout } = raRule;

  return (
    <Section tone="surface" spacing="none" className={styles.section} aria-labelledby="ra-rule-title">
      <RaIntro id="ra-rule-title" chip={chip} title={title} description={description} align="center" className={styles.intro} />

      <div className={styles.diagram}>
        <div className={styles.prepares}>
          <p className={styles.head}>
            <span className={styles.pill}>{prepares.pill}</span>
            <span className={styles.tag}>{prepares.tag}</span>
          </p>
          <h3 className={styles.title}>{prepares.title}</h3>
          <ol className={styles.items}>
            {prepares.items.map((item, index) => (
              <li key={item}>
                <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </ol>
          <p className={styles.foot}>
            <span>{prepares.stage}</span>
            <strong>{prepares.status}</strong>
          </p>
        </div>

        <div className={styles.gate}>
          <span className={styles.gateTile}>
            <img src={shieldCheckIcon} alt="" width="19" height="23" />
          </span>
          <p className={styles.gateLabel}>{gate.label}</p>
          <p className={styles.gateNote}>{gate.note}</p>
          <span className={styles.gateArrow}>
            <Icon name="arrowRight" size={16} />
          </span>
        </div>

        <div className={styles.decides}>
          <p className={styles.head}>
            <span className={styles.pill}>{decides.pill}</span>
            <span className={styles.tag}>{decides.tag}</span>
          </p>
          <h3 className={styles.title}>{decides.title}</h3>
          <ul className={styles.items}>
            {decides.items.map((item) => (
              <li key={item}>
                <span className={styles.check}>
                  <img src={checkIcon} alt="" width="11" height="8" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className={styles.foot}>
            <span>{decides.stage}</span>
            <strong>{decides.status}</strong>
          </p>
        </div>
      </div>

      <p className={styles.callout}>
        <span className={styles.calloutTile}>
          <img src={shieldIcon} alt="" width="20" height="24" />
        </span>
        {callout}
      </p>
    </Section>
  );
}

export default RuleSection;
