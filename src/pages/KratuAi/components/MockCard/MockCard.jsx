import { cn } from '../../../../utils/cn';
import styles from './MockCard.module.css';

/**
 * Frame for the agents' product mock-ups (illustrations, static example data): a coloured header
 * with an icon, title and status badge over a tinted body.
 * tone: header colour — 'purple' | 'teal' | 'bronze'. badgeTone: 'lime' | 'lavender' | 'sky' | 'yellow'.
 */
function MockCard({ icon, title, badge, tone = 'purple', badgeTone = 'lime', bodyClassName, children }) {
  return (
    <figure className={styles.card}>
      <figcaption className={cn(styles.header, styles[tone])}>
        <span className={styles.title}>
          <img src={icon.src} alt="" width={icon.size[0]} height={icon.size[1]} />
          {title}
        </span>
        <span className={cn(styles.badge, styles[`badge-${badgeTone}`])}>{badge}</span>
      </figcaption>
      <div className={cn(styles.body, bodyClassName)}>{children}</div>
    </figure>
  );
}

export default MockCard;
