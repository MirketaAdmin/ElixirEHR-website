import { cn } from '../../../utils/cn';
import Container from '../Container/Container';
import styles from './Section.module.css';

/**
 * Full-bleed section band with the design's background tones and vertical padding.
 * tone:    white | surface | dark | primary
 * spacing: lg (100px) | md (80px) | none
 */
function Section({ tone = 'white', spacing = 'lg', className, containerClassName, children, ...rest }) {
  return (
    <section className={cn(styles.section, styles[tone], styles[spacing], className)} {...rest}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export default Section;
