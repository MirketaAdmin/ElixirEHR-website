import { cn } from '../../../../utils/cn';
import RichText from '../../../../components/ui/RichText/RichText';
import IconTile from '../IconTile/IconTile';
import styles from './FeatureCard.module.css';

/**
 * The page's white feature card (intake workflow and insurance verification grids): a 50px icon
 * tile, a 19px title (a "\n" keeps a frame line break at desktop width) and 14/24 text, which may
 * be RichText segments (e.g. an inline link). `badge` renders in the top-right corner and
 * `children` after the text.
 */
function FeatureCard({ icon, title, text, badge, className, children }) {
  return (
    <article className={cn(styles.card, className)}>
      {badge && <p className={styles.badge}>{badge}</p>}
      <IconTile icon={icon} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>
        <RichText content={text} linkClassName={styles.link} />
      </p>
      {children}
    </article>
  );
}

export default FeatureCard;
