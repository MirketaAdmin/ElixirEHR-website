import { Link } from 'react-router-dom';
import { aiCapabilities } from '../../../data/aiCapabilities';
import { cn } from '../../../utils/cn';
import Section from '../../layout/Section/Section';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import BorderGlow from '../../ui/BorderGlow/BorderGlow';
import Icon from '../../ui/Icon/Icon';
import sparkleIcon from '../../../assets/icons/sparkle-lime.png';
import styles from './AiCapabilitiesSection.module.css';

function CardContent({ item }) {
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
        {aiCapabilities.badge}
      </p>
      <p className={styles.description}>{item.description}</p>
    </>
  );
}

/**
 * "Kratu AI - Full Capabilities" (Home, What Is Elixir, Why Elixir, EHR).
 * `glow` (Home): every card the same size at each breakpoint, with the BorderGlow edge effect.
 * Without it the section renders exactly as in the other pages' frames.
 */
function AiCapabilitiesSection({ glow = false }) {
  return (
    <Section tone="dark" spacing="none" className={cn(styles.section, glow && styles.glow)}>
      <SectionHeading
        eyebrow={aiCapabilities.eyebrow}
        eyebrowCaps
        title={aiCapabilities.title}
        description={aiCapabilities.description}
        align="center"
        tone="dark"
        className={styles.heading}
      />
      <ul className={styles.grid}>
        {aiCapabilities.items.map((item, index) => (
          <li key={item.title}>
            {glow ? (
              <BorderGlow
                as={Link}
                to={item.to}
                className={styles.card}
                innerClassName={styles.cardInner}
                sweep
                sweepDelay={index * 250}
              >
                <CardContent item={item} />
              </BorderGlow>
            ) : (
              <Link to={item.to} className={styles.card}>
                <CardContent item={item} />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default AiCapabilitiesSection;
