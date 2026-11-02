import { pressReleasesHero } from '../../data/pressReleases';
import PageHero from '../../components/sections/PageHero/PageHero';
import PressReleaseListing from './sections/PressReleaseListing/PressReleaseListing';
import PageSeo from '../../components/seo/PageSeo/PageSeo';
import styles from './PressReleases.module.css';

function PressReleases() {
  const { image, ...hero } = pressReleasesHero;

  return (
    <>
      <PageSeo path="/press-releases" />
      <PageHero
        {...hero}
        className={styles.hero}
        media={
          <div className={styles.heroMedia}>
            <img src={image.src} alt={image.alt} width="504" height="384" className={styles.heroImage} />
          </div>
        }
      />
      <PressReleaseListing />
    </>
  );
}

export default PressReleases;
