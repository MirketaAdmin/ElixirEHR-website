import { Link } from 'react-router-dom';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import KrIntro from '../KrIntro/KrIntro';
import styles from './AgentSection.module.css';

/**
 * One agent band: the chip, purple title, paragraphs, an edge-accented quote, four feature cards
 * and the "Explore …" button beside the agent's product mock-up (`children`).
 * `reverse` puts the mock-up on the left; `tone` is the band colour ('white' | 'surface');
 * `agent.quoteTone` colours the quote's edge ('lime' | 'purple' | 'teal' | 'yellow').
 * The "Explore …" button links to `agent.ctaTo` (the agent's own page); without one (page not
 * built yet) it renders as drawn but is inert.
 */
function AgentSection({ agent, tone = 'white', reverse = false, className, children }) {
  const titleId = `${agent.id}-title`;

  return (
    <Section
      id={agent.id}
      tone={tone}
      spacing="none"
      className={cn(styles.section, styles[tone], className)}
      aria-labelledby={titleId}
    >
      <div className={cn(styles.layout, reverse && styles.reverse)}>
        <div className={styles.copy}>
          <KrIntro id={titleId} eyebrow={agent.chip} title={agent.title} eyebrowStyle="chip" tone="agent" className={styles.intro} />
          {agent.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
          <p className={cn(styles.quote, styles[agent.quoteTone])}>{agent.quote}</p>
          <ul className={styles.features}>
            {agent.features.map((feature) => (
              <li key={feature.title}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureText}>{feature.text}</p>
              </li>
            ))}
          </ul>
          {agent.ctaTo ? (
            <Link to={agent.ctaTo} className={styles.cta}>
              {agent.cta}
            </Link>
          ) : (
            <span className={styles.cta} aria-disabled="true">
              {agent.cta}
            </span>
          )}
        </div>
        <div className={styles.mock}>{children}</div>
      </div>
    </Section>
  );
}

export default AgentSection;
