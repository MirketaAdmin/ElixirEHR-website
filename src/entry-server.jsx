// Build-time renderer — never shipped to the browser.
// scripts/prerender.mjs imports the SSR build of this file and calls render(url) once per page,
// writing the result into dist/<url>/index.html, so every page's title, meta description,
// canonical, Open Graph tags, H1, text, links and JSON-LD are in the HTML the server sends, before
// any JavaScript runs. In the browser, src/main.jsx then hydrates that HTML.
import { StrictMode } from 'react';
import { prerenderToNodeStream } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import { AppRoutes } from './App.jsx';
import { getAllPosts, getPostPath } from './posts';
import { getJobPath, jobOpenings } from './pages/Career/data/jobOpenings';

/** The finished HTML of one page (React waits for every Suspense boundary before resolving). */
export async function render(url) {
  // A render error inside a Suspense boundary doesn't reject the prerender (React would leave that
  // part to the browser), so errors are collected and fail the page explicitly.
  const errors = [];
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(new Error(`Prerender of ${url} timed out`)), 30000);
  try {
    const { prelude } = await prerenderToNodeStream(
      <StrictMode>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </StrictMode>,
      {
        signal: controller.signal,
        // Keep every boundary inline, in document order, rather than streamed to the end of the
        // HTML and stitched back with inline scripts.
        progressiveChunkSize: Infinity,
        onError(error) {
          errors.push(error);
        },
      },
    );
    let html = '';
    for await (const chunk of prelude) html += chunk;
    if (errors.length > 0) throw errors[0];
    return html;
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Pages that come from content rather than a literal route in App.jsx, each with the date it last
 * changed (for the sitemap's <lastmod>): every published post (demo posts are left out of
 * production builds) and every job opening with a detail page. A new post or job file is picked
 * up by the next build automatically.
 */
export function listContentRoutes() {
  return [
    ...getAllPosts()
      .filter((post) => !post.demo)
      .map((post) => ({ path: getPostPath(post), lastmod: post.updatedDate || post.publishDate })),
    ...jobOpenings
      .filter((job) => job.detail)
      .map((job) => ({ path: getJobPath(job), lastmod: job.detail.facts?.postedDate })),
  ];
}
