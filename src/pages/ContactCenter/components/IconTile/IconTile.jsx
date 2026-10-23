import { cn } from '../../../../utils/cn';
import styles from './IconTile.module.css';

/**
 * The page's rounded icon tile: a 1× glyph crop centred on a CSS-drawn tile.
 * icon: { src, size: [w, h], tone: 'lime' | 'purple' | 'yellow' | 'dark' }. `className` sets the
 * frame's tile size where it differs from the default 50px.
 */
function IconTile({ icon, className }) {
  return (
    <span className={cn(styles.tile, styles[icon.tone], className)}>
      <img src={icon.src} alt="" width={icon.size[0]} height={icon.size[1]} />
    </span>
  );
}

export default IconTile;
