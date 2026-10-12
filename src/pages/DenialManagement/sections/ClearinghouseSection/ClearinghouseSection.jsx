import { dmClearinghouse } from '../../../../data/denialManagement';
import Section from '../../../../components/layout/Section/Section';
import Button from '../../../../components/ui/Button/Button';
import arrowIcon from '../../../../assets/denial-management/icon-arrow-right-white.png';
import DmSectionHeading from '../../components/DmSectionHeading/DmSectionHeading';
import styles from './ClearinghouseSection.module.css';

function ClearinghouseSection() {
  const { badge, title, description, transactions, cta } = dmClearinghouse;

  return (
    <Section tone="surface" spacing="none" className={styles.section} containerClassName={styles.inner}>
      <DmSectionHeading
        badge={badge}
        title={title}
        description={
          <>
            {description[0]}
            <br className={styles.desktopBreak} /> {description[1]}
          </>
        }
        className={styles.heading}
      />
      <ul className={styles.grid}>
        {transactions.map((item) => (
          <li key={item.code} className={styles.card}>
            <p className={styles.code}>{item.code}</p>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
            <p className={styles.footer}>
              <img src={item.tag.icon} alt="" width={item.tag.size[0]} height={item.tag.size[1]} />
              {item.tag.label}
            </p>
          </li>
        ))}
      </ul>
      <Button to={cta.to} variant="tertiary" className={styles.cta}>
        {cta.label}
        <img src={arrowIcon} alt="" width="11" height="12" />
      </Button>
    </Section>
  );
}

export default ClearinghouseSection;
