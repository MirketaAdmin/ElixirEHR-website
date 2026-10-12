import Container from '../../layout/Container/Container';
import Button from '../../ui/Button/Button';
import styles from './CTABannerSection.module.css';

/**
 * Full-width single-CTA banner, reusable across inner pages wherever the
 * design calls for a centered "Take the Next Step"-style prompt.
 */
function CTABannerSection({ title, subtitle, cta }) {
  return (
    <section className={styles.section}>
      <Container className={styles.content}>
        <h2 className={`${styles.title} headline-lg`}>{title}</h2>
        {subtitle && <p className={`${styles.subtitle} body-lg`}>{subtitle}</p>}
        <Button as="a" href={cta.href} variant="primary" className={styles.cta}>
          {cta.label}
        </Button>
      </Container>
    </section>
  );
}

export default CTABannerSection;
