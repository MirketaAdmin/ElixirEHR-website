import {
  sdCtaBand,
  sdDomains,
  sdGap,
  sdHero,
  sdMoney,
  sdPillars,
  sdPolicy,
  sdProduct,
  sdZCodes,
} from '../../data/socialDeterminants';
import PageHero from '../../components/sections/PageHero/PageHero';
import WideTiltedHeroMedia from '../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import Section from '../../components/layout/Section/Section';
import Container from '../../components/layout/Container/Container';
import CtaBanner from '../../components/sections/CtaBanner/CtaBanner';
import { cn } from '../../utils/cn';
import FaqCardsSection from './sections/FaqCardsSection/FaqCardsSection';
import styles from './SocialDeterminants.module.css';

const Img = ({ icon, className }) => (
  <img src={icon.src} alt="" width={icon.size[0]} height={icon.size[1]} className={className} />
);

/** The frame's section opener: lime caps eyebrow, 48px title, 18px description. */
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
          {sdPillars.map((pillar) => (
            <li key={pillar.title} className={styles.pillar}>
              <Img icon={pillar.icon} className={styles.pillarIcon} />
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
  const { cards, ...intro } = sdProduct;
  return (
    <Section tone="white" spacing="none" className={styles.product} aria-labelledby="sd-product-title">
      <Intro id="sd-product-title" {...intro} />
      <ul className={styles.productGrid}>
        {cards.map((card) => (
          <li key={card.title} className={styles.productCard}>
            <span className={styles.productIcon}>
              <Img icon={card.icon} />
            </span>
            <h3 className={styles.productTitle}>{card.title}</h3>
            <p className={styles.productText}>{card.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function DomainsSection() {
  const { id, caption, columns, rows, paragraphs, callout, ...intro } = sdDomains;
  return (
    <Section tone="surface" spacing="none" className={styles.domains} id={id} aria-labelledby="sd-domains-title">
      <Intro id="sd-domains-title" {...intro} />
      <div className={styles.tableCard}>
        <table className={styles.table}>
          <caption className={styles.caption}>{caption}</caption>
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
              <tr key={row.domain} className={cn(row.highlight && styles.highlight)}>
                <th scope="row" data-label={columns[0]}>
                  {row.domain}
                </th>
                <td data-label={columns[1]}>
                  <span className={cn(styles.tier, row.tier === 'Supplemental' && styles.tierSupplemental)}>
                    {row.tier}
                  </span>
                </td>
                <td data-label={columns[2]} className={styles.prevalence}>
                  {row.prevalence === '—' ? <span aria-label="Not reported">—</span> : row.prevalence}
                </td>
                <td data-label={columns[3]}>{row.why}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.split}>
        <div>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.bodyText}>
              {paragraph}
            </p>
          ))}
        </div>
        <aside className={styles.callout} aria-labelledby="sd-instruments">
          <h3 id="sd-instruments" className={styles.calloutTitle}>
            <Img icon={callout.icon} />
            {callout.title}
          </h3>
          <ul className={styles.calloutList}>
            {callout.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}

function PolicySection() {
  const { cards, note, ...intro } = sdPolicy;
  return (
    <Section tone="dark" spacing="none" className={styles.policy} aria-labelledby="sd-policy-title">
      <Intro id="sd-policy-title" {...intro} dark />
      <ul className={styles.policyGrid}>
        {cards.map((card) => (
          <li key={card.label} className={styles.policyCard}>
            <p className={styles.policyLabel}>{card.label}</p>
            <h3 className={styles.policyTitle}>{card.title}</h3>
            <ul className={cn(styles.policyList, styles[card.marker])}>
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p className={styles.policyNote}>{note}</p>
    </Section>
  );
}

function MoneySection() {
  const { eyebrow, title, lead, paragraphs, note } = sdMoney;
  return (
    <Section
      tone="white"
      spacing="none"
      className={styles.money}
      containerClassName={styles.moneyLayout}
      aria-labelledby="sd-money-title"
    >
      <div>
        <Intro id="sd-money-title" eyebrow={eyebrow} title={title} className={styles.moneyIntro} />
        <p className={styles.moneyLead}>{lead}</p>
      </div>
      <div>
        {paragraphs.map((paragraph) => (
          <p key={paragraph.lead} className={styles.moneyText}>
            <strong>{paragraph.lead}</strong> {paragraph.text}
          </p>
        ))}
        <p className={styles.moneyNote}>{note}</p>
      </div>
    </Section>
  );
}

function GapSection() {
  const { scenarios, paragraphs, panel, ...intro } = sdGap;
  return (
    <Section tone="surface" spacing="none" className={styles.gap} aria-labelledby="sd-gap-title">
      <Intro id="sd-gap-title" {...intro} />
      <ul className={styles.scenarios}>
        {scenarios.map((scenario) => (
          <li key={scenario.label} className={cn(styles.scenario, styles[scenario.tone])}>
            <p className={styles.scenarioLabel}>{scenario.label}</p>
            <h3 className={styles.scenarioTitle}>{scenario.title}</h3>
            {scenario.bars.map((bar, index) => (
              <div key={bar.label} className={cn(styles.bar, index === 1 && styles.barOutcome)}>
                <p className={styles.barLabel}>
                  <span>{bar.label}</span>
                  <span className={styles.barValue}>{bar.value}%</span>
                </p>
                <span className={styles.barTrack} aria-hidden="true">
                  <span className={styles.barFill} style={{ width: `${bar.value}%` }} />
                </span>
              </div>
            ))}
          </li>
        ))}
      </ul>
      <div className={styles.split}>
        <div>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.bodyText}>
              {paragraph}
            </p>
          ))}
        </div>
        <aside className={cn(styles.callout, styles.calloutPink)} aria-labelledby="sd-claims">
          <h3 id="sd-claims" className={styles.calloutTitle}>
            {panel.title}
          </h3>
          <ul className={styles.claimsList}>
            {panel.items.map((item) => (
              <li key={item.title}>
                <h4 className={styles.claimTitle}>{item.title}</h4>
                <p className={styles.claimText}>{item.text}</p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}

function ZCodesSection() {
  const { rows, note, ...intro } = sdZCodes;
  return (
    <Section tone="white" spacing="none" className={styles.zcodes} aria-labelledby="sd-zcodes-title">
      <Intro id="sd-zcodes-title" {...intro} />
      <ul className={styles.zrows}>
        {rows.map((row) => (
          <li key={row.title} className={styles.zrow}>
            <div>
              <h3 className={styles.zTitle}>{row.title}</h3>
              <p className={styles.zText}>{row.text}</p>
            </div>
            <p className={cn(styles.zBadge, styles[row.tone])}>{row.badge}</p>
          </li>
        ))}
      </ul>
      <p className={styles.zNote}>{note}</p>
    </Section>
  );
}

/** Social Determinants of Health — an independent top-level page. */
function SocialDeterminants() {
  const { media, ...hero } = sdHero;

  return (
    <>
      <title>Social Determinants of Health Software | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} />} />
      <PillarsStrip />
      <ProductSection />
      <DomainsSection />
      <PolicySection />
      <MoneySection />
      <GapSection />
      <ZCodesSection />
      <FaqCardsSection />
      <CtaBanner
        {...sdCtaBand}
        className={styles.ctaBand}
        ctaClassName={styles.ctaButton}
        secondaryCtaClassName={styles.ctaSecondary}
      />
    </>
  );
}

export default SocialDeterminants;
