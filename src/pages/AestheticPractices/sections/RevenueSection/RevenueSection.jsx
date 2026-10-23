import { aeRevenue } from '../../../../data/aestheticPractices';
import Section from '../../../../components/layout/Section/Section';
import AeIntro from '../../components/AeIntro/AeIntro';
import AeCards from '../../components/AeCards/AeCards';
import styles from './RevenueSection.module.css';

/** "Manage Revenue: Invoices, Packages and Memberships" — six cards. */
function RevenueSection() {
  const { eyebrow, title, description, items } = aeRevenue;

  return (
    <Section tone="white" spacing="none" className={styles.section} aria-labelledby="ae-revenue-title">
      <AeIntro
        id="ae-revenue-title"
        eyebrow={eyebrow}
        title={title}
        description={description}
        className={styles.intro}
      />
      <AeCards items={items} variant="plain" className={styles.grid} />
    </Section>
  );
}

export default RevenueSection;
