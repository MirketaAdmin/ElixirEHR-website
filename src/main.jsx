import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './styles/global.css';
import App from './App.jsx';

const root = document.getElementById('root');
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Prerendered pages (scripts/prerender.mjs) arrive with their HTML already in #root, marked with the
// URL they were rendered for; React takes that HTML over instead of re-rendering it. Anything else
// (the plain SPA shell: redirects, unknown URLs) renders fresh.
if (root.dataset.prerendered && root.dataset.prerendered === window.location.pathname) {
  hydrateRoot(root, app);
} else {
  removePrerenderedHead();
  root.replaceChildren();
  delete root.dataset.prerendered;
  createRoot(root).render(app);
}

// The prerendered page's own <title>/meta/canonical, which would otherwise sit in front of the ones
// the client render adds.
function removePrerenderedHead() {
  let node = document.head.firstChild;
  let inside = false;
  while (node) {
    const next = node.nextSibling;
    if (node.nodeType === Node.COMMENT_NODE && node.data === 'ssr-head') inside = true;
    if (inside) node.remove();
    if (node.nodeType === Node.COMMENT_NODE && node.data === '/ssr-head') inside = false;
    node = next;
  }
}
