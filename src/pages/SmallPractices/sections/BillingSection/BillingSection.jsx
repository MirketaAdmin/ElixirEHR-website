import { spBilling } from '../../../../data/smallPractices';
import Section from '../../../../components/layout/Section/Section';
import SpIntro from '../../components/SpIntro/SpIntro';
import SpTiles from '../../components/SpTiles/SpTiles';
import styles from './BillingSection.module.css';

/** "Integrated Billing and Payment Workflows" — six cards with icon discs. */
function BillingSection() {
  const { eyebrow, title, description, items } = spBilling;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="sp-billing-title">
      <SpIntro
        id="sp-billing-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        className={styles.intro}
      />
      <SpTiles items={items} lead="circle" className={styles.grid} />
    </Section>
  );
}

export default BillingSection;
