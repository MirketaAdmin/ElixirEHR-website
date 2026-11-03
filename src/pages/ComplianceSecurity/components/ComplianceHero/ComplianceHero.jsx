import { Link } from 'react-router-dom';
import { cn } from '../../../../utils/cn';
import Container from '../../../../components/layout/Container/Container';
import Button from '../../../../components/ui/Button/Button';
import Icon from '../../../../components/ui/Icon/Icon';
import RichText from '../../../../components/ui/RichText/RichText';
import styles from './ComplianceHero.module.css';

/**
 * Compliance & Security page hero: breadcrumb (Home › Compliance & Security › [parent ›] page; the
 * section has no page of its own, so its crumb is text), a section pill, two-line H1 (second line
 * yellow), lede, CTAs (each by `to` or by in-page `href`), and on the right the page's statement panel
 * — one card per party or point (`highlight` marks the lime one), each with an optional muted `note` —
 * plus an optional caption.
 */
function ComplianceHero({
  currentPage,
  parentCrumb,
  pill,
  titleLines,
  lede,
  primaryCta,
  secondaryCta,
  statementsLabel,
  statements,
  caption,
}) {
  return (
    <section className={styles.hero} data-hero>
      <Container className={styles.inner}>
        <div className={styles.content}>
          <nav aria-label="Breadcrumb">
            <ol className={styles.breadcrumb}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li aria-hidden="true" className={styles.separator}>
                <Icon name="chevronRight" size={20} />
              </li>
              <li>Compliance &amp; Security</li>
              <li aria-hidden="true" className={styles.separator}>
                <Icon name="chevronRight" size={20} />
              </li>
              {parentCrumb && (
                <>
                  <li>
                    <Link to={parentCrumb.to}>{parentCrumb.label}</Link>
                  </li>
                  <li aria-hidden="true" className={styles.separator}>
                    <Icon name="chevronRight" size={20} />
                  </li>
                </>
              )}
              <li aria-current="page" className={styles.current}>
                {currentPage}
              </li>
            </ol>
          </nav>
          <p className={styles.pill}>{pill}</p>
          <h1 className={styles.title}>
            {titleLines.map((line, index) => (
              <span key={line} className={cn(styles.titleLine, index === 1 && styles.accent)}>
                {line}
              </span>
            ))}
          </h1>
          <p className={styles.lede}>
            <RichText content={lede} linkClassName={styles.link} />
          </p>
          <div className={styles.actions}>
            <Button to={primaryCta.to} href={primaryCta.href} size="lg" className={styles.primary}>
              {primaryCta.label}
            </Button>
            <Button href={secondaryCta.href} variant="ghost" size="lg" className={styles.secondary}>
              {secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className={styles.panel}>
          <ul className={styles.statements} aria-label={statementsLabel}>
            {statements.map((statement) => (
              <li key={statement.who} className={cn(styles.statement, statement.highlight && styles.highlight)}>
                <span className={styles.who}>{statement.who}</span>
                <p>
                  <RichText content={statement.text} />
                  {statement.note && <span className={styles.note}> {statement.note}</span>}
                </p>
              </li>
            ))}
          </ul>
          {caption && <p className={styles.caption}>{caption}</p>}
        </div>
      </Container>
    </section>
  );
}

export default ComplianceHero;
