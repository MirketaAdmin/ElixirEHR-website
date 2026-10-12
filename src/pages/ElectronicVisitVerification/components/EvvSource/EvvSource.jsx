import { cn } from '../../../../utils/cn';
import styles from './EvvSource.module.css';

/**
 * "Source: <link>." citation line under a section (external, opens in a new tab), with an optional
 * trailing note.
 */
function EvvSource({ source, note, className }) {
  return (
    <p className={cn(styles.source, className)}>
      Source:{' '}
      <a href={source.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
        {source.label}
      </a>
      .{note && ` ${note}`}
    </p>
  );
}

export default EvvSource;
