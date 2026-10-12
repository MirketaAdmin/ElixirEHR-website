import { Link } from 'react-router-dom';

/**
 * Renders copy written as an array of segments: plain strings, or
 * { text, strong?, italic?, emphasis?, to?, href? } for the highlighted phrases and links in the frame.
 * `emphasis` phrases (darker or accent-coloured in the frame) get `emphasisClassName`.
 * A bare string is rendered as-is.
 */
function RichText({ content, strongClassName, emphasisClassName, linkClassName }) {
  if (!Array.isArray(content)) return content;

  return content.map((part, index) => {
    if (typeof part === 'string') return part;
    const { text, strong, italic, emphasis, to, href } = part;
    let body = italic ? <em>{text}</em> : text;
    if (strong) body = <strong className={strongClassName}>{body}</strong>;
    if (to) {
      return (
        <Link key={index} to={to} className={linkClassName}>
          {body}
        </Link>
      );
    }
    if (href) {
      return (
        <a key={index} href={href} className={linkClassName}>
          {body}
        </a>
      );
    }
    return (
      <span key={index} className={emphasis ? emphasisClassName : undefined}>
        {body}
      </span>
    );
  });
}

export default RichText;
