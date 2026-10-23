import { useState } from 'react';
import { ecmAssessment, ecmCriteria, ecmDetails, ecmHero } from '../../data/elixirCertifiedModule';
import PageHero from '../../components/sections/PageHero/PageHero';
import WideTiltedHeroMedia from '../../components/sections/WideTiltedHeroMedia/WideTiltedHeroMedia';
import Section from '../../components/layout/Section/Section';
import Button from '../../components/ui/Button/Button';
import Icon from '../../components/ui/Icon/Icon';
import ContactForm from '../../components/sections/ContactSection/ContactForm';
import { cn } from '../../utils/cn';
import styles from './ElixirCertifiedModule.module.css';

const Img = ({ icon, alt = '', className }) => (
  <img src={icon.src} alt={alt} width={icon.size[0]} height={icon.size[1]} className={className} />
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

/** Elixir Certified Module — a child page of ONC Certification (which has no page of its own). */
function ElixirCertifiedModule() {
  const { media, ...hero } = ecmHero;
  const { certificate, facts, disclaimer, downloads, downloadLabel } = ecmDetails;
  const { columns, groups, rows } = ecmCriteria;
  const assessment = ecmAssessment;
  const [activeGroup, setActiveGroup] = useState(groups[0].id);
  const firstOfGroup = new Set(groups.map((group) => rows.find((row) => row.group === group.id)));

  return (
    <>
      <title>Elixir Certified Module | ONC Certification | Elixir</title>
      <meta name="description" content={hero.description} />
      <PageHero {...hero} className={styles.hero} media={<WideTiltedHeroMedia {...media} />} />

      <Section tone="surface" spacing="none" className={styles.details} aria-labelledby="ecm-details-title">
        <header className={styles.head}>
          <p className={styles.eyebrow}>{ecmDetails.eyebrow}</p>
          <h2 id="ecm-details-title" className={styles.title}>
            {ecmDetails.title}
          </h2>
          <span className={styles.rule} aria-hidden="true" />
        </header>

        <div className={styles.detailsGrid}>
          <figure className={styles.certificate}>
            <Img icon={certificate.image} alt={certificate.alt} className={styles.certificateImage} />
            <figcaption className={styles.caption}>
              <Img icon={certificate.captionIcon} />
              {certificate.caption}
            </figcaption>
          </figure>

          <div className={styles.factsCard}>
            <dl className={styles.facts}>
              {facts.map((fact) => (
                <div key={fact.label} className={styles.fact}>
                  <dt>{fact.label}</dt>
                  <dd className={cn(fact.code && styles.code)}>
                    {fact.chips ? (
                      <ul className={styles.chips}>
                        {fact.chips.map((chip) => (
                          <li key={chip}>{chip}</li>
                        ))}
                      </ul>
                    ) : (
                      fact.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <p className={styles.disclaimer}>{disclaimer}</p>
          </div>
        </div>

        <ul className={styles.downloads}>
          {downloads.map((item) => (
            <li key={item.title} className={styles.downloadCard}>
              <span className={cn(styles.fileTile, styles[item.tone])}>
                <Img icon={item.icon} />
              </span>
              <div className={styles.downloadText}>
                <h3 className={styles.downloadTitle}>{item.title}</h3>
                <p className={styles.downloadMeta}>
                  {item.meta}
                  {item.code && <code className={styles.metaCode}>{item.code}</code>}
                </p>
              </div>
              <DownloadButton href={item.href} label={downloadLabel} />
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white" spacing="none" className={styles.criteria} aria-labelledby="ecm-criteria-title">
        <header className={styles.head}>
          <p className={styles.pill}>{ecmCriteria.eyebrow}</p>
          <h2 id="ecm-criteria-title" className={cn(styles.title, styles.criteriaTitle)}>
            {ecmCriteria.title}
          </h2>
          <p className={styles.lead}>{ecmCriteria.description}</p>
        </header>

        <nav className={styles.groups} aria-label="Criteria groups">
          {groups.map((group) => (
            <a
              key={group.id}
              href={`#criteria-${group.id}`}
              className={cn(styles.group, activeGroup === group.id && styles.groupActive)}
              aria-current={activeGroup === group.id ? 'true' : undefined}
              onClick={() => setActiveGroup(group.id)}
            >
              {group.label}
            </a>
          ))}
        </nav>

        <div className={styles.tableWrap}>
          <table className={styles.table} aria-labelledby="ecm-criteria-title">
            <thead>
              <tr>
                <th scope="col">{columns.capability}</th>
                <th scope="col">{columns.description}</th>
                <th scope="col">
                  {columns.fees}
                  <span className={styles.feesNote}>{columns.feesNote}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.capability} id={firstOfGroup.has(row) ? `criteria-${row.group}` : undefined}>
                  <th scope="row" data-label={columns.capability}>
                    {row.capability}
                  </th>
                  <td data-label={columns.description}>{row.description}</td>
                  <td data-label={columns.fees} className={styles.fees}>
                    {row.fees.map((fee) => (
                      <p key={fee}>{fee}</p>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        tone="surface"
        spacing="none"
        className={styles.assessment}
        containerClassName={styles.layout}
        aria-labelledby="ecm-assessment-title"
      >
        <div className={styles.copy}>
          <p className={styles.pill}>{assessment.eyebrow}</p>
          <h2 id="ecm-assessment-title" className={styles.assessmentTitle}>
            {assessment.title}
          </h2>
          <p className={styles.description}>{assessment.description}</p>
          <ul className={styles.points}>
            {assessment.points.map((point) => (
              <li key={point}>
                <Img icon={assessment.check} />
                {point}
              </li>
            ))}
          </ul>
          <ul className={styles.badges}>
            {assessment.badges.map((badge) => (
              <li key={badge}>
                <Img icon={assessment.badgeIcon} />
                {badge}
              </li>
            ))}
          </ul>
        </div>
        <ContactForm
          intro={<h3 className={styles.formTitle}>{assessment.form.title}</h3>}
          fieldNames={assessment.form.fieldNames}
          fieldOverrides={assessment.form.fieldOverrides}
          submitLabel={assessment.form.submitLabel}
          showConsent={false}
          className={styles.form}
        />
      </Section>
    </>
  );
}

export default ElixirCertifiedModule;
