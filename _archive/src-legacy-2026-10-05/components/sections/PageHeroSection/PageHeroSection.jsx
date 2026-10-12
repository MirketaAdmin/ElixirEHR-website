import Container from '../../layout/Container/Container';
import Breadcrumb from '../../ui/Breadcrumb/Breadcrumb';
import Button from '../../ui/Button/Button';
import ImagePlaceholder from '../../ui/ImagePlaceholder/ImagePlaceholder';
import styles from './PageHeroSection.module.css';

/**
 * Reusable secondary-page hero: breadcrumb + headline + subtitle + up to
 * two CTAs + a right-side image slot with an optional floating badge.
 * Intended for every inner page (About, Products, Solutions, Platform...),
 * not just this one.
 */
function PageHeroSection({
  breadcrumb,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  imageAlt,
  imageLabel,
  badge,
}) {
  return (
    <section className={styles.hero}>
      <Container className={styles.grid}>
        <div className={styles.copy}>
          <Breadcrumb items={breadcrumb} />
          <h1 className={`${styles.title} headline-lg`}>{title}</h1>
          {subtitle && <p className={`${styles.subtitle} body-lg`}>{subtitle}</p>}

          {(primaryCta || secondaryCta) && (
            <div className={styles.ctaRow}>
              {primaryCta && (
                <Button as="a" href={primaryCta.href} variant="primary">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button as="a" href={secondaryCta.href} variant="ghost">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>

        <div className={styles.visual}>
          <ImagePlaceholder label={imageLabel ?? imageAlt} ratio="4 / 3" rounded="xl" />
          {badge && <div className={styles.badgeSlot}>{badge}</div>}
        </div>
      </Container>
    </section>
  );
}

export default PageHeroSection;
