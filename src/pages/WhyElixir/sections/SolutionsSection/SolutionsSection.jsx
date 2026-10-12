import { Link } from 'react-router-dom';
import { healthcareSolutions } from '../../../../data/whyElixir';
import Section from '../../../../components/layout/Section/Section';
import Icon from '../../../../components/ui/Icon/Icon';
import WhySectionHeading from '../../components/WhySectionHeading/WhySectionHeading';
import styles from './SolutionsSection.module.css';

function SolutionsSection() {
  return (
    <Section spacing="none" className={styles.section}>
      <WhySectionHeading eyebrow={healthcareSolutions.eyebrow} title={healthcareSolutions.title} />
      <ul className={styles.grid}>
        {healthcareSolutions.items.map((item) => (
          <li key={item.title} className={styles.card}>
            <span className={styles.tile}>
              <img src={item.icon} alt="" width={item.iconSize[0]} height={item.iconSize[1]} />
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
            <Link to={item.to} className={styles.link}>
              {healthcareSolutions.linkLabel}
              <span className="visually-hidden"> about {item.title}</span>
              <Icon name="chevronRight" />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default SolutionsSection;
