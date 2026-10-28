import { Link } from 'react-router-dom';
import { privacyPolicy } from '../../data/privacyPolicy';
import Container from '../../components/layout/Container/Container';
import Icon from '../../components/ui/Icon/Icon';
import RichText from '../../components/ui/RichText/RichText';
import styles from './PrivacyPolicy.module.css';

function Text({ value }) {
  return <RichText content={value} linkClassName={styles.link} />;
}

function Note({ title, paragraphs }) {
  return (
    <aside className={styles.note}>
      <p className={styles.noteTitle}>
        <Icon name="shieldCheck" size={20} className={styles.noteIcon} />
        {title}
      </p>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </aside>
  );
}

function Block({ block }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p>
          <Text value={block.text} />
        </p>
      );
    case 'list':
      return (
        <ul className={styles.list}>
          {block.items.map((item, index) => (
            <li key={index}>
              <Text value={item} />
            </li>
          ))}
        </ul>
      );
    case 'note':
      return <Note title={block.title} paragraphs={block.paragraphs} />;
    case 'address':
      return (
        <address className={styles.address}>
          {block.lines.map((line, index) => (
            <span key={index}>
              <Text value={line} />
            </span>
          ))}
        </address>
      );
    default:
      return null;
  }
}

/**
 * /privacy-policy — the supplied policy text, unchanged, laid out for reading: a dark hero with the
 * breadcrumb and title (as on the post pages), the introduction and scope note, then the numbered
 * sections in a readable column with a sticky list of the section titles beside it on desktop.
 */
function PrivacyPolicy() {
  const { title, description, intro, scopeNote, sections } = privacyPolicy;

  return (
    <>
      <title>{`${title} | Elixir`}</title>
      <meta name="description" content={description} />

      <section className={styles.hero} data-header-overlap>
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className={styles.breadcrumb}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li aria-hidden="true" className={styles.separator}>
                <Icon name="chevronRight" size={20} />
              </li>
              <li aria-current="page" className={styles.current}>
                {title}
              </li>
            </ol>
          </nav>
          <h1 className={styles.title}>{title}</h1>
        </Container>
      </section>

      <Container className={styles.layout}>
        <nav className={styles.toc} aria-label="Privacy Policy sections">
          <ol>
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <article className={styles.body}>
          {intro.map((paragraph) => (
            <p key={paragraph} className={styles.intro}>
              {paragraph}
            </p>
          ))}
          <Note {...scopeNote} />

          {sections.map((section) => (
            <section key={section.id} id={section.id} className={styles.section} aria-labelledby={`${section.id}-title`}>
              <h2 id={`${section.id}-title`} className={styles.sectionTitle}>
                {section.title}
              </h2>
              {section.blocks.map((block, index) => (
                <Block key={index} block={block} />
              ))}
            </section>
          ))}
        </article>
      </Container>
    </>
  );
}

export default PrivacyPolicy;
