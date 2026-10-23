import {
  cmApcm,
  cmBilling,
  cmClaims,
  cmCompliance,
  cmCtaBand,
  cmFaq,
  cmHero,
  cmPillars,
  cmProduct,
  cmTransitions,
} from '../../data/careManagement';
import PageHero from '../../components/sections/PageHero/PageHero';
import WideTiltedHeroMedia from '../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import Section from '../../components/layout/Section/Section';
import Container from '../../components/layout/Container/Container';
import FaqSection from '../../components/sections/FaqSection/FaqSection';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import RichText from '../../components/ui/RichText/RichText';
import { cn } from '../../utils/cn';
import styles from './CareManagement.module.css';

const Img = ({ icon, className }) => (
  <img src={icon.src} alt="" width={icon.size[0]} height={icon.size[1]} className={className} />
);

/** The frame's section opener: caps eyebrow, 52px title, 18px description. */
function Intro({ id, eyebrow, title, description, dark, className }) {
  return (
    <header className={cn(styles.intro, dark && styles.introDark, className)}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </header>
  );
}

function PillarsStrip() {
  return (
    <div className={styles.pillarsBand}>
      <Container>
        <ul className={styles.pillars}>
          {cmPillars.map((pillar) => (
            <li key={pillar.title}>
              <p className={styles.pillarLabel}>
                <Img icon={pillar.icon} />
                {pillar.label}
              </p>
              <h2 className={styles.pillarTitle}>{pillar.title}</h2>
              <p className={styles.pillarText}>{pillar.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

function ProductSection() {
  const { cards, note, ...intro } = cmProduct;
  return (
    <Section tone="white" spacing="none" className={styles.product} aria-labelledby="cm-product-title">
      <Intro id="cm-product-title" {...intro} className={styles.productIntro} />
      <ul className={styles.productGrid}>
        {cards.map((card) => (
          <li key={card.title} className={styles.productCard}>
            <span className={styles.productIcon}>
              <Img icon={card.icon} />
            </span>
            <h3 className={styles.productTitle}>{card.title}</h3>
            <p className={styles.productText}>{card.text}</p>
            <p className={styles.productTag}>{card.tag}</p>
          </li>
        ))}
      </ul>
      <p className={styles.productNote}>
        <Img icon={note.icon} className={styles.noteIcon} />
        <span>
          <RichText content={note.text} linkClassName={styles.noteLink} />
        </span>
      </p>
    </Section>
  );
}

function BillingSection() {
  const { id, columns, rows, note, ...intro } = cmBilling;
  return (
    <Section tone="surface" spacing="none" className={styles.billing} id={id} aria-labelledby="cm-billing-title">
      <Intro id="cm-billing-title" {...intro} />
      <div className={styles.tableCard}>
        <table className={styles.table}>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column} scope="col">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.family} className={cn(row.highlight && styles.highlight)}>
                <th scope="row" data-label={columns[0]}>
                  {row.family}
                </th>
                <td data-label={columns[1]}>
                  <span className={styles.codes}>{row.codes}</span>
                </td>
                <td data-label={columns[2]}>{row.requires}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={styles.billingNote}>
        <Img icon={note.icon} className={styles.noteIcon} />
        <span>{note.text}</span>
      </p>
    </Section>
  );
}

function ApcmSection() {
  const { cards, check, note, ...intro } = cmApcm;
  return (
    <Section tone="dark" spacing="none" className={styles.apcm} aria-labelledby="cm-apcm-title">
      <Intro id="cm-apcm-title" {...intro} dark />
      <ul className={styles.apcmGrid}>
        {cards.map((card) => (
          <li key={card.title} className={styles.apcmCard}>
            <p className={styles.chip}>
              <Img icon={card.icon} />
              {card.chip}
            </p>
            <h3 className={styles.apcmTitle}>{card.title}</h3>
            <ul className={styles.apcmPoints}>
              {card.points.map((point) => (
                <li key={point}>
                  <Img icon={check} className={styles.check} />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p className={styles.apcmNote}>{note}</p>
    </Section>
  );
}

function TransitionsSection() {
  const { steps, note, ...intro } = cmTransitions;
  return (
    <Section tone="white" spacing="none" className={styles.transitions} aria-labelledby="cm-transitions-title">
      <Intro id="cm-transitions-title" {...intro} />
      <ol className={styles.steps}>
        {steps.map((step) => (
          <li key={step.title} className={styles.step}>
            <p className={cn(styles.badge, styles[step.tone])}>
              <Img icon={step.icon} />
              {step.badge}
            </p>
            <div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className={styles.transitionsNote}>{note}</p>
    </Section>
  );
}

function ComplianceSection() {
  const { cards, note, ...intro } = cmCompliance;
  return (
    <Section tone="dark" spacing="none" className={styles.compliance} aria-labelledby="cm-compliance-title">
      <Intro id="cm-compliance-title" {...intro} dark />
      <ul className={styles.complianceGrid}>
        {cards.map((card) => (
          <li key={card.label} className={cn(styles.complianceCard, styles[card.tone])}>
            <p className={styles.complianceLabel}>
              <Img icon={card.icon} />
              {card.label}
            </p>
            <h3 className={styles.complianceTitle}>{card.title}</h3>
            <p className={styles.complianceText}>{card.text}</p>
            <p className={styles.complianceTag}>{card.tag}</p>
          </li>
        ))}
      </ul>
      <p className={styles.complianceNote}>
        <Img icon={note.icon} className={styles.noteIcon} />
        <span>{note.text}</span>
      </p>
    </Section>
  );
}

function ClaimsSection() {
  const { eyebrow, title, lead, paragraphs, panel } = cmClaims;
  return (
    <Section
      tone="white"
      spacing="none"
      className={styles.claims}
      containerClassName={styles.claimsLayout}
      aria-labelledby="cm-claims-title"
    >
      <div className={styles.claimsCopy}>
        <Intro id="cm-claims-title" eyebrow={eyebrow} title={title} className={styles.claimsIntro} />
        <p className={styles.claimsLead}>{lead}</p>
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.claimsText}>
            {paragraph}
          </p>
        ))}
      </div>
      <aside className={styles.panel} aria-labelledby="cm-claims-panel">
        <h3 id="cm-claims-panel" className={styles.panelTitle}>
          <Img icon={panel.icon} />
          {panel.title}
        </h3>
        <ul className={styles.panelList}>
          {panel.items.map((item) => (
            <li key={item.title} className={styles.panelCard}>
              <h4 className={styles.panelCardTitle}>{item.title}</h4>
              <p className={styles.panelCardText}>{item.text}</p>
            </li>
          ))}
        </ul>
      </aside>
    </Section>
  );
}

/** Care Management — an independent top-level page (Care Plan Management sits under its path). */
function CareManagement() {
  const { media, ...hero } = cmHero;

  return (
    <>
      <title>Care Management Software | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} />} />
      <PillarsStrip />
      <ProductSection />
      <BillingSection />
      <ApcmSection />
      <TransitionsSection />
      <ComplianceSection />
      <ClaimsSection />
      <FaqSection {...cmFaq} />
      <CtaBanner
        {...cmCtaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      />
    </>
  );
}

export default CareManagement;
