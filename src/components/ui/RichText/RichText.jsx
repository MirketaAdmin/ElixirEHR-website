import { Link } from 'react-router-dom';

/**
 * Renders copy written as an array of segments: plain strings, or
 * { text, strong?, italic?, code?, emphasis?, to?, href?, external? } for the highlighted phrases and
 * links in the frame (`external` is an off-site URL opened in a new tab; `code` is inline monospace).
 * `emphasis` phrases (darker or accent-coloured in the frame) get `emphasisClassName`.
 * A bare string is rendered as-is.
 */
function RichText({ content, strongClassName, emphasisClassName, linkClassName, codeClassName }) {
  if (!Array.isArray(content)) return content;

  return content.map((part, index) => {
    if (typeof part === 'string') return part;
    const { text, strong, italic, code, emphasis, to, href, external } = part;
    if (code) return <code key={index} className={codeClassName}>{text}</code>;
    let body = italic ? <em>{text}</em> : text;
    if (strong) body = <strong className={strongClassName}>{body}</strong>;
    if (external) {
      return (
        <a key={index} href={external} target="_blank" rel="noopener" className={linkClassName}>
          {body}
        </a>
      );
    }
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
