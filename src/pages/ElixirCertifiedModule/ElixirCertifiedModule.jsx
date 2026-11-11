import { Link } from 'react-router-dom';
import {
  ecmCriteria,
  ecmCta,
  ecmDocumentation,
  ecmFacts,
  ecmHero,
  ecmMeaning,
  ecmRwt,
  ecmStrip,
  ecmVerify,
} from '../../data/elixirCertifiedModule';
import PageSeo from '../../components/seo/PageSeo/PageSeo';
import PageHero from '../../components/sections/PageHero/PageHero';
import Section from '../../components/layout/Section/Section';
import Button from '../../components/ui/Button/Button';
import Icon from '../../components/ui/Icon/Icon';
import RichText from '../../components/ui/RichText/RichText';
import PointsStrip from '../ComplianceSecurity/components/PointsStrip/PointsStrip';
import ExplainerSection from '../ComplianceSecurity/components/ExplainerSection/ExplainerSection';
import TopicCards from '../ComplianceSecurity/components/TopicCards/TopicCards';
import ComplianceCta from '../ComplianceSecurity/components/ComplianceCta/ComplianceCta';
import { cn } from '../../utils/cn';
import styles from './ElixirCertifiedModule.module.css';

const Img = ({ icon, alt = '', className }) => (
  <img loading="lazy" decoding="async" src={icon.src} alt={alt} width={icon.size[0]} height={icon.size[1]} className={className} />
);

/** A download card's button: a real link once the PDF's URL is supplied, otherwise visibly inert. */
function DownloadButton({ href, label }) {
  const content = (
    <>
      <Icon name="download" size={16} />
      {label}
    </>
  );
  if (href) {
    return (
      <Button href={href} download className={styles.download}>
        {content}
      </Button>
    );
  }
  return (
    <Button aria-disabled="true" title="This PDF is not available yet" className={styles.download}>
      {content}
      <span className={styles.srOnly}> (not available yet)</span>
    </Button>
  );
}

/** The page's centred section heading: caps eyebrow, title, lime rule and an optional lead. */
function Head({ id, eyebrow, title, description }) {
  return (
    <header className={styles.head}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      <span className={styles.rule} aria-hidden="true" />
      {description && <p className={styles.lead}>{description}</p>}
    </header>
  );
}

/**
 * ONC-Certified EHR — the ONC Certification record: certificate facts in the hero, what certification
 * means, the 21 criteria by group with the cost disclosure, real world testing, the published
 * artifacts and how to verify them.
 */
function ElixirCertifiedModule() {
  const { columns, groups, disclosure } = ecmCriteria;

  return (
    <>
      <PageSeo path="/onc-certification/elixir-certified-module" />
      <PageHero
        {...ecmHero}
        className={styles.hero}
        media={
          <div className={styles.factsCard}>
            <dl className={styles.facts}>
              {ecmFacts.map((fact) => (
                <div key={fact.label} className={styles.fact}>
                  <dt>{fact.label}</dt>
                  <dd className={cn(fact.code && styles.code)}>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        }
      />
      <PointsStrip items={ecmStrip} />

      <ExplainerSection {...ecmMeaning} />

      <Section
        tone="surface"
        spacing="none"
        id={ecmCriteria.id}
        className={styles.criteria}
        aria-labelledby="ecm-criteria-title"
      >
        <Head {...ecmCriteria} id="ecm-criteria-title" />

        {groups.map((group) => (
          <div key={group.code} className={styles.group}>
            <h3 className={styles.groupTitle}>
              {group.title} · <code>{group.code}</code>
            </h3>
            <p className={styles.groupNote}>{group.note}</p>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <caption className={styles.srOnly}>{group.caption}</caption>
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
                  {group.rows.map((row) => (
                    <tr key={row.code}>
                      <th scope="row" data-label={columns[0]}>
                        <code>{row.code}</code>
                      </th>
                      <td data-label={columns[1]}>
                        <strong className={styles.capability}>{row.name}</strong>
                        <br />
                        {row.description}
                      </td>
                      <td data-label={columns[2]} className={styles.fees}>
                        {row.fees}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <div className={styles.disclosure}>
          <h3 className={styles.disclosureTitle}>{disclosure.title}</h3>
          <p>{disclosure.intro}</p>
          <ul>
            {disclosure.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{disclosure.outro}</p>
        </div>
      </Section>

      <Section tone="white" spacing="none" id={ecmRwt.id} className={styles.details} aria-labelledby="ecm-rwt-title">
        <Head {...ecmRwt} id="ecm-rwt-title" />
        <ul className={styles.downloads}>
          {ecmRwt.downloads.map((item) => (
            <li key={item.title} className={styles.downloadCard}>
              <span className={cn(styles.fileTile, styles[item.tone])}>
                <Img icon={item.icon} />
              </span>
              <div className={styles.downloadText}>
                <p className={styles.format}>{item.format}</p>
                <h3 className={styles.downloadTitle}>{item.title}</h3>
                <p className={styles.downloadMeta}>
                  <RichText content={item.text} codeClassName={styles.metaCode} />
                </p>
              </div>
              <DownloadButton href={item.href} label={item.label} />
            </li>
          ))}
        </ul>
        <p className={styles.note}>{ecmRwt.note}</p>
      </Section>

      <Section
        tone="surface"
        spacing="none"
        id={ecmDocumentation.id}
        className={styles.criteria}
        aria-labelledby="ecm-docs-title"
      >
        <Head {...ecmDocumentation} id="ecm-docs-title" />
        <ul className={styles.docs}>
          {ecmDocumentation.cards.map((card) => (
            <li key={card.code} className={styles.doc}>
              <code className={styles.docCode}>{card.code}</code>
              <h3 className={styles.docTitle}>
                <Link to={card.to}>{card.title}</Link>
              </h3>
              <p>{card.text}</p>
              {card.meta && <p className={styles.docMeta}>{card.meta}</p>}
            </li>
          ))}
        </ul>
        <p className={styles.note}>
          <RichText content={ecmDocumentation.note} linkClassName={styles.noteLink} />
        </p>
      </Section>

      <Section tone="white" spacing="none" id={ecmVerify.id} className={styles.details} aria-labelledby="ecm-verify-title">
        <Head {...ecmVerify} id="ecm-verify-title" />
        <TopicCards cards={ecmVerify.cards} />
      </Section>

      <ComplianceCta {...ecmCta} />
    </>
  );
}

export default ElixirCertifiedModule;
