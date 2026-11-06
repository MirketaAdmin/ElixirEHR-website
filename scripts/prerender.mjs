// Static prerender — the last step of `npm run build` (package.json).
//
// Every page is rendered with dist-ssr/entry-server.js and written to dist/<url>/index.html, so its
// title, meta description, canonical, Open Graph/Twitter tags, H1, text, links and JSON-LD are in
// the HTML the server sends, before any JavaScript runs. In the browser, src/main.jsx hydrates it.
//
// Pages: every literal route in src/App.jsx (redirects, `:param` routes and the 404 catch-all are
// skipped) plus every published post and job page (listContentRoutes in src/entry-server.jsx), so
// new pages and posts are picked up by the next build without touching this file. The same list is
// written to dist/sitemap.xml, with each post's or job's date as <lastmod> and a <priority> per
// page type (PRIORITY_EXACT / PRIORITY_PATTERNS below).
//
// The untouched SPA template is kept as dist/app-shell.html: vercel.json serves it for every URL
// that has no prerendered file (redirect aliases, unknown URLs → NotFound), which render
// client-side as before.

import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// React's server renderer picks its build from NODE_ENV when first loaded.
process.env.NODE_ENV = 'production';

const DIST = path.resolve('dist');
const SSR_ENTRY = path.resolve('dist-ssr/entry-server.js');
const SHELL_FILE = 'app-shell.html';
const SITE_ORIGIN = (process.env.VITE_SITE_URL || 'https://elixirehr.com').replace(/\/$/, '');

const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
if (!template.includes('<div id="root"></div>')) {
  throw new Error('dist/index.html has no empty <div id="root"></div> — run the client build first.');
}
fs.writeFileSync(path.join(DIST, SHELL_FILE), template);

const { render, listContentRoutes } = await import(pathToFileURL(SSR_ENTRY).href);

/** Literal page routes of src/App.jsx, as canonical URLs ("/about-us/"). */
function appRoutes() {
  const source = fs.readFileSync(path.resolve('src/App.jsx'), 'utf8');
  const urls = new Set(['/']);
  for (const [, route, element] of source.matchAll(/<Route\s+path="([^"]*)"\s+element=\{<([A-Za-z0-9_.]+)/g)) {
    if (element === 'Navigate' || route === '*' || route.includes(':')) continue;
    urls.add(`/${route}/`);
  }
  return urls;
}

// url -> lastmod (posts and jobs carry their date; static pages have none).
const pages = new Map([...appRoutes()].map((url) => [url, null]));
for (const { path: url, lastmod } of listContentRoutes()) pages.set(url, lastmod || null);
const urls = [...pages.keys()].sort();

// <priority> per URL: a relative signal of each page's importance within this site (not a ranking
// factor). Exact paths win; otherwise the first matching pattern applies; anything else gets the
// default. Values were set page by page from the page's business role — keep new rules specific
// before general.
const PRIORITY_EXACT = new Map([
  ['/', 1.0],
  // Core products
  ['/ehr-software/', 0.9],
  ['/rcm-software/', 0.9],
  ['/healthcare-ai-platform/', 0.9],
  ['/patient-portal-software/', 0.9],
  ['/evv-software/', 0.9],
  ['/healthcare-contact-center/', 0.9],
  // Conversion and positioning
  ['/why-elixir/', 0.8],
  ['/contact-us/', 0.8],
  // Care management sub-pages
  ['/care-plan-software/', 0.7],
  ['/sdoh-software/', 0.7],
  // Compliance & Security, ONC certification record
  ['/hipaa-compliant-ehr/', 0.7],
  ['/onc-certification/elixir-certified-module/', 0.7],
  ['/healthcare-interoperability/', 0.7],
  ['/salesforce-data-security/', 0.7],
  ['/responsible-ai-in-healthcare/', 0.7],
  ['/onc-certification/api-developer-portal/', 0.6],
  ['/naatp/', 0.6],
  ['/onc-certification/onc-mfa-use-cases/', 0.5],
  ['/onc-certification/patient-ehi-export/', 0.5],
  // Company, proof and tools
  ['/about-us/', 0.7],
  ['/billing/', 0.7],
  ['/success-stories/', 0.7],
  ['/case-studies/', 0.7],
  ['/careers/', 0.6],
  ['/no-show-cost-calculator/', 0.6],
  ['/referral-program/', 0.5],
  // Insights listings
  ['/insights/', 0.7],
  ['/blog/', 0.7],
  ['/guides-ebooks/', 0.6],
  ['/benchmark-surveys/', 0.6],
  ['/feature-videos/', 0.6],
  ['/release-notes/', 0.5],
  ['/press-releases/', 0.5],
  ['/webinars-podcasts/', 0.5],
  ['/insights/illustrations/', 0.4],
  // Legal
  ['/privacy-policy/', 0.3],
]);
const PRIORITY_PATTERNS = [
  // RCM, EVV, portal and AI product pages
  [/^\/(insurance-eligibility-verification|electronic-prior-authorization|denial-management-software|claims-processing-software|caregiver-mobile-app|salesforce-evv|patient-no-show-software|ai-pre-visit-preparation|ai-clinical-documentation|ai-accounts-receivable-management|payer-policy-intelligence)\/$/, 0.8],
  // Solutions and specialties
  [/^\/(behavioral-health-ehr|mental-health-ehr|addiction-treatment-emr|value-based-care-software|care-coordination-software|care-management-software|ambulatory-ehr|small-practice-ehr|telehealth-ehr|aesthetic-practice-ehr|student-health-records-software|treatment-center-software)\/$/, 0.8],
  [/^\/blog\/.+/, 0.6],
  [/^\/(e-book|benchmark-survey)\/.+/, 0.6],
  [/^\/(release-note|video|press-release)\/.+/, 0.5],
  [/^\/career\/open-positions\/.+/, 0.5],
];
const DEFAULT_PRIORITY = 0.5;

// Prerendered but never listed in the sitemap: pages marked noindex (the Web-to-Lead thank-you page).
const SITEMAP_EXCLUDED = new Set(['/thank-you/']);

function priorityFor(url) {
  if (PRIORITY_EXACT.has(url)) return PRIORITY_EXACT.get(url);
  const rule = PRIORITY_PATTERNS.find(([pattern]) => pattern.test(url));
  return rule ? rule[1] : DEFAULT_PRIORITY;
}

// React hoists the page's <title>/<meta>/<link> tags (PageSeo, PostSeo) to the start of its output;
// they belong in <head>.
const HOISTED_TAG = /^(?:<title>[^<]*<\/title>|<meta\b[^>]*\/>|<link\b[^>]*\/>)/;
function splitHoisted(html) {
  let head = '';
  let body = html;
  let match;
  while ((match = body.match(HOISTED_TAG))) {
    head += match[0];
    body = body.slice(match[0].length);
  }
  return { head, body };
}

function pageHtml(url, html) {
  const { head, body } = splitHoisted(html);
  if (!/<title>[^<]+<\/title>/.test(head)) throw new Error(`no <title> rendered for ${url}`);
  // Executable inline scripts would mean React streamed an unfinished page — only JSON-LD is expected.
  const inlineScript = body.match(/<script(?![^>]*type="application\/ld\+json")[^>]*>/);
  if (inlineScript) throw new Error(`unexpected inline script in ${url}: ${inlineScript[0]}`);
  // main.jsx removes everything between these markers if it renders the page client-side instead
  // of hydrating it.
  return template
    .replace('</head>', `<!--ssr-head-->${head}<!--/ssr-head-->\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root" data-prerendered="${url}">${body}</div>`);
}

const failures = [];
let written = 0;
const started = Date.now();
for (const url of urls) {
  try {
    const out = pageHtml(url, await render(url));
    const file = url === '/' ? path.join(DIST, 'index.html') : path.join(DIST, url, 'index.html');
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, out);
    written++;
  } catch (error) {
    failures.push({ url, error });
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .filter((url) => !SITEMAP_EXCLUDED.has(url))
  .map((url) => {
    const lastmod = pages.get(url) ? `\n    <lastmod>${pages.get(url)}</lastmod>` : '';
    return `  <url>\n    <loc>${SITE_ORIGIN}${url}</loc>${lastmod}\n    <priority>${priorityFor(url).toFixed(1)}</priority>\n  </url>`;
  })
  .join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), sitemap);

// robots.txt: the site had none, so crawlers could not discover the sitemap from it. Everything is
// crawlable; noindex pages (thank-you, "not available") say so in their own <meta name="robots">,
// which crawlers can only read if the page is not blocked here.
fs.writeFileSync(path.join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`);

console.log(
  `prerendered ${written}/${urls.length} pages in ${((Date.now() - started) / 1000).toFixed(1)}s (SPA fallback: dist/${SHELL_FILE})`,
);
if (failures.length > 0) {
  for (const { url, error } of failures) console.error(`prerender failed: ${url}\n  ${error?.stack || error}`);
  process.exitCode = 1;
}
process.exit();
