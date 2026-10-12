import { clearinghouse } from '../../../../data/revenueCycleManagement';
import Section from '../../../../components/layout/Section/Section';
import ediIcon from '../../../../assets/revenue-cycle-management/icon-clearinghouse-edi.png';
import RcmBadge from '../../components/RcmBadge/RcmBadge';
import styles from './ClearinghouseSection.module.css';

function ClearinghouseSection() {
  const { badge, titleLines, body, subtitle, detail, benefits, image, table } = clearinghouse;

  return (
    <Section tone="surface" spacing="none" className={styles.section}>
      <div className={styles.intro}>
        <div className={styles.content}>
          <RcmBadge tone="lavender" icon={ediIcon} iconSize={[14, 13]}>
            {badge}
          </RcmBadge>
          <h2 className={styles.title}>
            {titleLines.map((line) => (
              <span key={line} className={styles.titleLine}>
                {line}
              </span>
            ))}
          </h2>
          <p className={styles.body}>{body}</p>
          <h3 className={styles.subtitle}>{subtitle}</h3>
          <p className={styles.detail}>{detail}</p>
          <ul className={styles.benefits}>
            {benefits.map((benefit) => (
              <li key={benefit} className={styles.benefit}>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <img src={image.src} alt={image.alt} width="504" height="273" className={styles.image} />
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              {table.columns.map((column) => (
                <th key={column} scope="col">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map(([code, purpose, location]) => (
              <tr key={code}>
                <th scope="row" className={styles.code}>
                  {code}
                </th>
                <td className={styles.purpose}>{purpose}</td>
                <td>{location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

export default ClearinghouseSection;
