import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import RichText from '../../ui/RichText/RichText';
import keyBenefitsIcon from '../../../assets/icons/post-key-benefits.png';
import checkIcon from '../../../assets/icons/post-benefit-check.png';
import styles from './PostContent.module.css';

/*
 * Article body. A post's `content` is an array of blocks; text fields accept a string or
 * RichText segments ({ text, strong, italic, to, href }).
 *
 *   lead        { text }                          intro paragraph (larger)
 *   paragraph   { text }
 *   heading     { level: 2 | 3, text }
 *   list        { items: [text], ordered? }
 *   highlights  { title, items: [{ label, text }] } the "Key Benefits" panel
 *   quote       { text, cite? }
 *   cta         { title, text?, action: { label, to | href, download? } }
 *   image       { src, alt, width?, height?, caption? }
 *   video       { src (embed URL), title }
 *   table       { head: [text], rows: [[text]], caption? }
 */

function Text({ value }) {
  return <RichText content={value} linkClassName={styles.link} />;
}

function Action({ action }) {
  const { label, to, href, download } = action;
  if (to) {
    return (
      <Link to={to} className={styles.ctaButton}>
        {label}
      </Link>
    );
  }
  return (
    <a href={href} download={download || undefined} className={styles.ctaButton}>
      {label}
    </a>
  );
}

const renderers = {
  lead: ({ text }) => (
    <p className={styles.lead}>
      <Text value={text} />
    </p>
  ),
  paragraph: ({ text }) => (
    <p>
      <Text value={text} />
    </p>
  ),
  heading: ({ level = 2, text }) => {
    const Tag = level === 3 ? 'h3' : 'h2';
    return (
      <Tag className={level === 3 ? styles.h3 : styles.h2}>
        <Text value={text} />
      </Tag>
    );
  },
  list: ({ items, ordered }) => {
    const Tag = ordered ? 'ol' : 'ul';
    return (
      <Tag className={ordered ? styles.orderedList : styles.list}>
        {items.map((item, index) => (
          <li key={index}>
            <Text value={item} />
          </li>
        ))}
      </Tag>
    );
  },
  highlights: ({ title, items }) => (
    <section className={styles.highlights}>
      <h2 className={styles.highlightsTitle}>
        <img src={keyBenefitsIcon} alt="" width="18" height="18" />
        {title}
      </h2>
      <ul className={styles.highlightsList}>
        {items.map((item, index) => (
          <li key={index}>
            <img src={checkIcon} alt="" width="17" height="23" className={styles.check} />
            <p>
              <span className={styles.highlightLabel}>{item.label}</span> <Text value={item.text} />
            </p>
          </li>
        ))}
      </ul>
    </section>
  ),
  quote: ({ text, cite }) => (
    <figure className={styles.quote}>
      <blockquote>
        <p>
          <Text value={text} />
        </p>
      </blockquote>
      {cite && <figcaption className={styles.cite}>— {cite}</figcaption>}
    </figure>
  ),
  cta: ({ title, text, action }) => (
    <section className={styles.cta}>
      <div className={styles.ctaCopy}>
        <h2 className={styles.ctaTitle}>{title}</h2>
        {text && (
          <p className={styles.ctaText}>
            <Text value={text} />
          </p>
        )}
      </div>
      {action && <Action action={action} />}
    </section>
  ),
  image: ({ src, alt, width, height, caption }) => (
    <figure className={styles.figure}>
      <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  ),
  video: ({ src, title }) => (
    <div className={styles.video}>
      <iframe src={src} title={title} loading="lazy" allowFullScreen />
    </div>
  ),
  table: ({ head, rows, caption }) => (
    <div className={styles.tableWrap}>
      <table className={styles.table}>
        {caption && <caption>{caption}</caption>}
        {head && (
          <thead>
            <tr>
              {head.map((cell, index) => (
                <th key={index} scope="col">
                  <Text value={cell} />
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, index) => (
                <td key={index}>
                  <Text value={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
};

function PostContent({ blocks }) {
  return (
    <div className={styles.content}>
      {blocks.map((block, index) => {
        const render = renderers[block.type];
        if (!render) {
          if (import.meta.env.DEV) console.warn(`Unknown post content block "${block.type}"`);
          return null;
        }
        return <Fragment key={index}>{render(block)}</Fragment>;
      })}
    </div>
  );
}

export default PostContent;
