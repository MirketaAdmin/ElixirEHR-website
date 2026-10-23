import { coPilotOverview } from '../../../../../data/coPilot';
import Section from '../../../../../components/layout/Section/Section';
import Icon from '../../../../../components/ui/Icon/Icon';
import { cn } from '../../../../../utils/cn';
import KrIntro from '../../../components/KrIntro/KrIntro';
import styles from './OverviewSection.module.css';

/** "Three Kratu Co-Pilot features across one patient encounter": a card per feature. */
function OverviewSection() {
  const { eyebrow, title, description, features } = coPilotOverview;

  return (
    <Section id="features" tone="surface" spacing="none" className={styles.section} aria-labelledby="cp-overview-title">
      <KrIntro id="cp-overview-title" eyebrow={eyebrow} title={title} description={description} tone="feature" className={styles.intro} />
      <ul className={styles.grid}>
        {features.map((feature) => (
          <li key={feature.title} className={styles.card}>
            <span className={cn(styles.tile, styles[feature.icon.tone])}>
              <img src={feature.icon.src} alt="" width={feature.icon.size[0]} height={feature.icon.size[1]} />
            </span>
            <p className={styles.tag}>{feature.tag}</p>
            <h3 className={styles.title}>{feature.title}</h3>
            <p className={styles.text}>{feature.text}</p>
            <a href={feature.link.href} className={styles.link}>
              {feature.link.label}
              <Icon name="arrowRight" size={13} />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default OverviewSection;
