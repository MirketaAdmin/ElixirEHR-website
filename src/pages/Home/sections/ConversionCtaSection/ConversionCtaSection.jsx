import { conversionCtas } from '../../../../data/home';
import { cn } from '../../../../utils/cn';
import Section from '../../../../components/layout/Section/Section';
import Button from '../../../../components/ui/Button/Button';
import styles from './ConversionCtaSection.module.css';

function ConversionCtaSection() {
  return (
    <Section spacing="none" className={styles.section}>
      <ul className={styles.grid}>
        {conversionCtas.map((item) => (
          <li key={item.title} className={cn(styles.card, styles[item.tone])}>
            <img src={item.icon} alt="" width={item.iconSize[0]} height={item.iconSize[1]} />
            <h2 className={cn('text-headline-lg', styles.title)}>{item.title}</h2>
            <p className={styles.description}>{item.description}</p>
            <Button to={item.cta.to} variant={item.cta.variant} className={styles.cta}>
              {item.cta.label}
            </Button>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default ConversionCtaSection;
