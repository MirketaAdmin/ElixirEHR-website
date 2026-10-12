import { Link } from 'react-router-dom';
import Icon from '../../../../components/ui/Icon/Icon';
import { cn } from '../../../../utils/cn';
import styles from './ResourceCard.module.css';

/**
 * Insights resource card: photo with a yellow tag, a meta row, title, optional excerpt and an
 * action. `layout`: 'stacked' (photo on top) or 'horizontal' (photo left — featured items).
 * `size` sets the photo height of stacked cards ('compact' 225px, 'wide' 360px).
 * `meta` is [{ icon, text }]. `action` is { label, to } (router link) or { label, href, download }
 * (file); `button: true` draws it as the lime "Download" button.
 */
function ResourceCard({ post, tag, meta = [], excerpt, action, layout = 'stacked', size = 'compact' }) {
  const title = post.listingTitle ?? post.title;
  const label = (
    <>
      {action.button && <Icon name="download" size={20} />}
      {action.label}
      <span className="visually-hidden">: {title}</span>
      {!action.button && <Icon name="arrowRight" size={16} />}
    </>
  );
  const actionClass = action.button ? styles.button : styles.link;

  return (
    <article className={cn(styles.card, styles[layout], styles[size])}>
      <div className={styles.media}>
        <img src={post.cardImage.src} alt={post.cardImage.alt} className={styles.image} />
        {tag && <span className={styles.tag}>{tag}</span>}
      </div>
      <div className={styles.body}>
        {meta.length > 0 && (
          <ul className={styles.meta}>
            {meta.map((item) => (
              <li key={item.icon}>
                <Icon name={item.icon} size={14} />
                {item.text}
              </li>
            ))}
          </ul>
        )}
        <h3 className={styles.title}>{title}</h3>
        {excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
        {action.to ? (
          <Link to={action.to} className={actionClass}>
            {label}
          </Link>
        ) : (
          <a href={action.href} download={action.download || undefined} className={actionClass}>
            {label}
          </a>
        )}
      </div>
    </article>
  );
}

export default ResourceCard;
