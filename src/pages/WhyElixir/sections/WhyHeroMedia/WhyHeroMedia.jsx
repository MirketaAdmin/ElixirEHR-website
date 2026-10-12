import trendingUpIcon from '../../../../assets/icons/trending-up-dark.png';
import styles from './WhyHeroMedia.module.css';

/** Right column of the Why Elixir hero: framed photo with the white "Efficiency Gain" stat card. */
function WhyHeroMedia({ image, stat }) {
  return (
    <div className={styles.media}>
      <img src={image.src} alt={image.alt} width="504" height="384" className={styles.image} />
      <div className={styles.stat}>
        <p className={styles.statHeader}>
          <span className={styles.statIcon}>
            <img src={trendingUpIcon} alt="" width="22" height="14" />
          </span>
          {stat.label}
        </p>
        <p className={styles.statValue}>{stat.value}</p>
        <p className={styles.statCaption}>{stat.caption}</p>
      </div>
    </div>
  );
}

export default WhyHeroMedia;
