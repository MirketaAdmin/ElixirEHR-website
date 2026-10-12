import { cn } from '../../../utils/cn';
import Section from '../../layout/Section/Section';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import Button from '../../ui/Button/Button';
import styles from './CtaBanner.module.css';

/**
 * Centred dark CTA band (About Us "Take The next Step", What Is Elixir "Ready to Change…").
 * `title` may be a string or an array of lines (Figma line breaks); `eyebrow`, `description` and
 * `secondaryCta` are optional, and `children` render under the buttons (e.g. a row of text links).
 * `ctaClassName` / `secondaryCtaClassName` let a page apply its frame's button styling.
 */
function CtaBanner({
  eyebrow,
  title,
  description,
  cta,
  secondaryCta,
  className,
  ctaClassName,
  secondaryCtaClassName,
  children,
}) {
  const heading = Array.isArray(title)
    ? title.map((line) => (
        <span key={line} className={styles.line}>
          {line}
        </span>
      ))
    : title;

  return (
    <Section tone="dark" spacing="none" className={cn(styles.section, className)} containerClassName={styles.inner}>
      <SectionHeading
        eyebrow={eyebrow}
        eyebrowCaps
        title={heading}
        description={description}
        align="center"
        tone="dark"
        className={styles.heading}
      />
      <div className={styles.actions}>
        <Button href={cta.href} to={cta.to} size="xxl" className={cn(styles.cta, ctaClassName)}>
          {cta.label}
        </Button>
        {secondaryCta && (
          <Button
            href={secondaryCta.href}
            to={secondaryCta.to}
            variant="outline"
            size="xxl"
            className={cn(styles.cta, secondaryCtaClassName)}
          >
            {secondaryCta.label}
          </Button>
        )}
      </div>
      {children}
    </Section>
  );
}

export default CtaBanner;
