import { ccOutreach } from '../../../../data/contactCenter';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import CcIntro from '../../components/CcIntro/CcIntro';
import IconTile from '../../components/IconTile/IconTile';
import styles from './OutreachSection.module.css';

/** "Multi-Channel Patient Outreach": intro and three points beside the omnichannel timeline card. */
function OutreachSection() {
  const { chip, title, description, items, timeline } = ccOutreach;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="cc-outreach-title">
      <div className={styles.layout}>
        <div>
          <CcIntro id="cc-outreach-title" chip={chip} title={title} description={description} className={styles.intro} />
          <ul className={styles.items}>
            {items.map((item) => (
              <li key={item.title}>
                <IconTile icon={item.icon} className={styles.circle} />
                <div>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemText}>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.timeline}>
          <div className={styles.header}>
            <p className={styles.headerTitle}>
              <img src={timeline.icon.src} alt="" width={timeline.icon.size[0]} height={timeline.icon.size[1]} />
              {timeline.title}
            </p>
            <span className={styles.status}>{timeline.status}</span>
          </div>
          <ol className={styles.events}>
            {timeline.events.map((event) => (
              <li key={event.title}>
                <IconTile icon={event.icon} className={styles.circle} />
                <div className={styles.event}>
                  <p className={styles.eventHead}>
                    <span className={styles.eventTitle}>{event.title}</span>
                    <span className={styles.eventTime}>{event.time}</span>
                  </p>
                  <p className={cn(styles.eventText, event.quote && styles.quote)}>{event.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

export default OutreachSection;
