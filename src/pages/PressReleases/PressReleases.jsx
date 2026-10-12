import { pressReleasesHero } from '../../data/pressReleases';
import PageHero from '../../components/sections/PageHero/PageHero';
import PressReleaseListing from './sections/PressReleaseListing/PressReleaseListing';
import styles from './PressReleases.module.css';

function PressReleases() {
  const { image, ...hero } = pressReleasesHero;

  return (
    <>
      <title>Press Releases | Elixir</title>
      <meta name="description" content={hero.description} />
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
