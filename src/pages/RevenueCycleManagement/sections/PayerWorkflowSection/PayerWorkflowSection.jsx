import { payerWorkflow } from '../../../../data/revenueCycleManagement';
import Section from '../../../../components/layout/Section/Section';
import rulesIcon from '../../../../assets/revenue-cycle-management/icon-rules-automation.png';
import RcmBadge from '../../components/RcmBadge/RcmBadge';
import RichText from '../../../../components/ui/RichText/RichText';
import CheckList from '../../components/CheckList/CheckList';
import ImagePlaceholder from '../../../../components/ui/ImagePlaceholder/ImagePlaceholder';
import styles from './PayerWorkflowSection.module.css';

function PayerWorkflowSection() {
  const { badge, titleLines, body, points } = payerWorkflow;

  return (
    <Section
      id="payer-workflow-management"
      tone="white"
      spacing="none"
      className={styles.section}
      containerClassName={styles.inner}
    >
      <ImagePlaceholder className={styles.media} />
      <div className={styles.content}>
        <RcmBadge tone="lavender" icon={rulesIcon} iconSize={[14, 13]}>
          {badge}
        </RcmBadge>
        <h2 className={styles.title}>
          {titleLines.map((line) => (
            <span key={line} className={styles.titleLine}>
              {line}
            </span>
          ))}
        </h2>
        <p className={styles.body}>
          <RichText content={body} strongClassName={styles.strong} />
        </p>
        <CheckList items={points} className={styles.points} />
      </div>
    </Section>
  );
}

export default PayerWorkflowSection;
