import { dmSalesforceNative } from '../../../../data/denialManagement';
import Section from '../../../../components/layout/Section/Section';
import DmSectionHeading from '../../components/DmSectionHeading/DmSectionHeading';
import styles from './SalesforceNativeSection.module.css';

function SalesforceNativeSection() {
  return (
    <Section tone="dark" spacing="none" className={styles.section}>
      <DmSectionHeading
        title={dmSalesforceNative.title}
        description={dmSalesforceNative.description}
        tone="dark"
        className={styles.heading}
      />
      <ul className={styles.grid}>
        {dmSalesforceNative.items.map((item) => (
          <li key={item.title} className={styles.card}>
            <span className={styles.icon}>
              <img src={item.icon.src} alt="" width={item.icon.width} height={item.icon.height} />
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default SalesforceNativeSection;
