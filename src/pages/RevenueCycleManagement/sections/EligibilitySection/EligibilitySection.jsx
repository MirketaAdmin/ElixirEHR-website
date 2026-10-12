import { eligibility } from '../../../../data/revenueCycleManagement';
import Section from '../../../../components/layout/Section/Section';
import { cn } from '../../../../utils/cn';
import shieldIcon from '../../../../assets/revenue-cycle-management/icon-shield.png';
import refreshIcon from '../../../../assets/revenue-cycle-management/icon-refresh.png';
import RcmBadge from '../../components/RcmBadge/RcmBadge';
import RichText from '../../../../components/ui/RichText/RichText';
import CheckList from '../../components/CheckList/CheckList';
import styles from './EligibilitySection.module.css';

function InsuranceCard({ title, status, fields, action }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <span className={styles.status}>{status}</span>
      </div>
      <dl className={styles.fields}>
        {fields.map((field) => (
          <div key={field.label} className={styles.field}>
            <dt className={styles.fieldLabel}>{field.label}</dt>
            {field.value && (
              <dd className={cn(styles.fieldValue, styles[field.style])}>{field.value}</dd>
            )}
          </div>
        ))}
      </dl>
      {/* Static product preview: the button is part of the illustrated screen, not a page action. */}
      <div className={styles.cardAction} aria-hidden="true">
        <img src={refreshIcon} alt="" width="12" height="12" />
        {action}
      </div>
    </div>
  );
}

function EligibilitySection() {
  const { badge, title, body, points, note, insuranceCard } = eligibility;

  return (
    <Section
      id="eligibility-verification"
      tone="surface"
      spacing="none"
      className={styles.section}
      containerClassName={styles.inner}
    >
      <div className={styles.content}>
        <RcmBadge tone="lime" icon={shieldIcon} iconSize={[11, 14]}>
          {badge}
        </RcmBadge>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.body}>
          <RichText content={body} emphasisClassName={styles.emphasis} />
        </p>
        <CheckList items={points} className={styles.points} />
        <p className={styles.note}>{note}</p>
      </div>
      <InsuranceCard {...insuranceCard} />
    </Section>
  );
}

export default EligibilitySection;
