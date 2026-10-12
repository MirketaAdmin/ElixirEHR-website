import { kratuIntelligence } from '../../../../data/home';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import Button from '../../../../components/ui/Button/Button';
import sparkleIcon from '../../../../assets/icons/sparkle-lime.png';
import kratuLogo from '../../../../assets/home/kratu-intelligence/kratu-ai-logo.png';
import styles from './KratuIntelligenceSection.module.css';

function FeatureCard({ feature, side }) {
  return (
    <li className={cn(styles.row, styles[side])}>
      <span className={styles.number}>{feature.number}</span>
      <div className={styles.card}>
        <img src={feature.icon} alt="" width="24" height="24" className={styles.icon} />
        <div className={styles.text}>
          <h3 className={styles.cardTitle}>
            {feature.titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h3>
          <p className={styles.cardDescription}>{feature.description}</p>
        </div>
        <span className={styles.node} aria-hidden="true" />
      </div>
    </li>
  );
}

function KratuIntelligenceSection() {
  const { features } = kratuIntelligence;

  return (
    <Section tone="surface" spacing="none" className={styles.section} containerClassName={styles.inner}>
      <p className={styles.badge}>
        <img src={sparkleIcon} alt="" width="17" height="17" />
        {kratuIntelligence.badge}
      </p>
      <h2 className={cn('text-headline-lg', styles.title)}>
        {kratuIntelligence.titleLines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h2>
      <p className={styles.description}>{kratuIntelligence.description}</p>

      <div className={styles.diagram}>
        <ul className={styles.column}>
          {features.slice(0, 3).map((feature) => (
            <FeatureCard key={feature.number} feature={feature} side="left" />
          ))}
        </ul>
        <div className={styles.hub}>
          <img src={kratuLogo} alt="Kratu AI — AI Intelligence" width="222" height="59" />
        </div>
        <ul className={styles.column}>
          {features.slice(3).map((feature) => (
            <FeatureCard key={feature.number} feature={feature} side="right" />
          ))}
        </ul>
        <span className={cn(styles.connector, styles.connectorLeft)} aria-hidden="true" />
        <span className={cn(styles.connector, styles.connectorRight)} aria-hidden="true" />
        {/* Lights travelling from each card's node along its connector into the hub. */}
        <span className={styles.flow} aria-hidden="true">
          {['l1', 'l2', 'l3', 'r1', 'r2', 'r3'].map((path) => (
            <i key={path} className={styles[path]} />
          ))}
        </span>
      </div>

      <Button to={kratuIntelligence.cta.to} variant="tertiary" size="xxl" className={styles.cta}>
        {kratuIntelligence.cta.label}
      </Button>
    </Section>
  );
}

export default KratuIntelligenceSection;
