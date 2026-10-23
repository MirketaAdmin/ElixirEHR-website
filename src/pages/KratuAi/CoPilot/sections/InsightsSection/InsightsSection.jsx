import { coPilotInsights } from '../../../../../data/coPilot';
import Section from '../../../../../components/layout/Section/Section';
import Icon from '../../../../../components/ui/Icon/Icon';
import { cn } from '../../../../../utils/cn';
import KrIntro from '../../../components/KrIntro/KrIntro';
import styles from './InsightsSection.module.css';

/** Feature 02 — "Co-Pilot Insights": the Insights pane mock-up and four capability cards. */
function InsightsSection() {
  const { id, eyebrow, title, description, pane, capabilities } = coPilotInsights;

  return (
    <Section id={id} tone="white" spacing="none" className={styles.section} aria-labelledby="cp-insights-title">
      <KrIntro id="cp-insights-title" eyebrow={eyebrow} title={title} description={description} tone="feature" className={styles.intro} />

      {/* Illustration of the pane with example data; the tabs and actions are not controls. */}
      <figure className={styles.pane} aria-label={pane.label}>
        <ul className={styles.tabs}>
          {pane.tabs.map((tab, index) => (
            <li key={tab.label} className={index === 0 ? styles.activeTab : undefined}>
              <img src={tab.icon.src} alt="" width={tab.icon.size[0]} height={tab.icon.size[1]} />
              {tab.label}
            </li>
          ))}
        </ul>
        <div className={styles.paneBody}>
          <ul className={styles.labs}>
            {pane.labs.map((lab) => (
              <li key={lab.label} className={styles.lab}>
                <p className={styles.labLabel}>{lab.label}</p>
                <p className={styles.labValue}>
                  <span className={cn(styles.value, lab.tone && styles[lab.tone])}>{lab.value}</span>
                  {lab.unit && <span className={styles.unit}>{lab.unit}</span>}
                  {lab.flag && <span className={styles.flag}>↑ {lab.flag}</span>}
                </p>
                <p className={styles.labNote}>{lab.note}</p>
              </li>
            ))}
          </ul>
          <ul className={styles.alerts}>
            {pane.alerts.map((alert) => (
              <li key={alert.title} className={cn(styles.alert, styles[alert.tone])}>
                <img src={alert.icon.src} alt="" width={alert.icon.size[0]} height={alert.icon.size[1]} />
                <span className={styles.alertCopy}>
                  <span className={styles.alertTitle}>{alert.title}</span>
                  <span className={styles.alertText}>{alert.text}</span>
                </span>
                <span className={styles.action}>
                  {alert.action}
                  <Icon name="arrowRight" size={12} />
                </span>
              </li>
            ))}
          </ul>
        </div>
        <figcaption className={styles.paneFooter}>
          <span>{pane.footnote}</span>
          <strong>{pane.engine}</strong>
        </figcaption>
      </figure>

      <ul className={styles.grid}>
        {capabilities.map((item) => (
          <li key={item.title} className={styles.card}>
            <span className={cn(styles.tile, styles[item.icon.tone])}>
              <img src={item.icon.src} alt="" width={item.icon.size[0]} height={item.icon.size[1]} />
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default InsightsSection;
