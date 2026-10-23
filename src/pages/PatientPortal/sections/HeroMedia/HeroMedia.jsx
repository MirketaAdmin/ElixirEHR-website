import TiltedHeroMedia from '../../../../components/sections/TiltedHeroMedia/TiltedHeroMedia';
import styles from './HeroMedia.module.css';

/** Hero right column: the shared tilted image with the frame's white "Efficiency" badge over its lower left. */
function HeroMedia({ media, badge }) {
  return (
    <div className={styles.wrap}>
      <TiltedHeroMedia {...media} />
      <div className={styles.badge}>
        <span className={styles.icon}>
          <img src={badge.icon} alt="" width="48" height="48" />
        </span>
        <p>
          <span className={styles.label}>{badge.label}</span>
          <span className={styles.text}>{badge.text}</span>
        </p>
      </div>
    </div>
  );
}

export default HeroMedia;
