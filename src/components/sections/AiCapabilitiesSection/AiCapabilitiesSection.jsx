import { Link } from 'react-router-dom';
import { cn } from '../../../utils/cn';
import { aiCapabilities } from '../../../data/aiCapabilities';
import Section from '../../layout/Section/Section';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import BorderGlow from '../../ui/BorderGlow/BorderGlow';
import Icon from '../../ui/Icon/Icon';
import sparkleIcon from '../../../assets/icons/sparkle-lime.png';
import styles from './AiCapabilitiesSection.module.css';

function CardContent({ item, badge }) {
  return (
    <>
      <div className={styles.top}>
        <span className={styles.tile}>
          <img src={item.icon} alt="" width={item.iconSize[0]} height={item.iconSize[1]} />
        </span>
        <Icon name="arrowRight" className={styles.arrow} />
      </div>
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.badge}>
        <img src={sparkleIcon} alt="" width="17" height="17" />
        {badge}
      </p>
      <p className={styles.description}>{item.description}</p>
    </>
  );
}

/**
 * "Our AI Solutions — Kratu AI - Full Capabilities" (Home, What Is Elixir, Why Elixir, EHR).
 * One template everywhere: the approved Home design (six equal cards per breakpoint, BorderGlow
 * edge effect with a one-time sweep). Only the content may differ per page: pass `content`
 * ({ eyebrow, title, description, badge, items }); it defaults to the shared Kratu content.
 * An item without `to` (no page yet) renders as a plain card. `className` lets a page apply its
 * frame's layout (e.g. Billing's row of four).
 */
function AiCapabilitiesSection({ content = aiCapabilities, className }) {
  const { eyebrow, title, description, badge, items } = content;

  return (
    <Section tone="dark" spacing="none" className={cn(styles.section, className)}>
      <SectionHeading
        eyebrow={eyebrow}
        eyebrowCaps
        title={title}
        description={description}
        align="center"
        tone="dark"
        className={styles.heading}
      />
      <ul className={styles.grid}>
        {items.map((item, index) => (
          <li key={item.title}>
            <BorderGlow
              as={item.to ? Link : 'div'}
              to={item.to}
              className={styles.card}
              innerClassName={styles.cardInner}
              sweep
              sweepDelay={index * 250}
            >
              <CardContent item={item} badge={badge} />
            </BorderGlow>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default AiCapabilitiesSection;
