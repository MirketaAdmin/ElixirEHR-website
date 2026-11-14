import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { prepareTeamPreview } from '../scripts/prepare-team-preview.mjs';

test('team preview retains live routes, strips tracking from all HTML and blocks indexing/submissions', () => {
  const dir = mkdtempSync(join(tmpdir(), 'elixir-preview-test-'));
  try {
    const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
    writeFileSync(join(dir, 'index.html'), html);
    mkdirSync(join(dir, 'contact-us'));
    writeFileSync(join(dir, 'contact-us/index.html'), html);
    const routingConfig = { routes: [{ route: '/old', redirect: '/new/', statusCode: 301 }], navigationFallback: { rewrite: '/app-shell.html' }, globalHeaders: { 'X-Content-Type-Options': 'nosniff' } };
    const result = prepareTeamPreview({ distDir: dir, routingConfig, revision: 'feature-sha', baseRevision: 'live-sha', environment: 'latest' });
    assert.equal(result.htmlFiles, 2);
    for (const file of ['index.html', 'contact-us/index.html']) {
      const output = readFileSync(join(dir, file), 'utf8');
      assert.doesNotMatch(output, /googletagmanager\.com|GTM-524CCF2|G-HE9TB0G122/);
      assert.match(output, /name="robots" content="noindex,nofollow,noarchive"/);
    }
    const config = JSON.parse(readFileSync(join(dir, 'staticwebapp.config.json')));
    assert.deepEqual(config.routes, routingConfig.routes);
    assert.match(config.globalHeaders['Content-Security-Policy'], /form-action 'none'/);
    assert.match(config.globalHeaders['Content-Security-Policy'], /connect-src 'self'/);
    assert.equal(config.globalHeaders['X-Robots-Tag'], 'noindex, nofollow, noarchive');
    assert.match(readFileSync(join(dir, 'robots.txt'), 'utf8'), /Disallow: \//);
    assert.equal(JSON.parse(readFileSync(join(dir, 'preview-info.json'))).baseRevision, 'live-sha');
    const manyRoutes = { ...routingConfig, routes: Array.from({ length: 157 }, (_, n) => ({ route: `/legacy-${n}-elixir-article-path*`, redirect: `/blog/new-healthcare-article-${n}-updated/`, statusCode: 301 })) };
    prepareTeamPreview({ distDir: dir, routingConfig: manyRoutes, environment: 'latest' });
    assert.ok(Buffer.byteLength(readFileSync(join(dir, 'staticwebapp.config.json'))) <= 20 * 1024, 'Preview config must fit Azure’s 20 KB limit with the full redirect collection.');
    assert.throws(() => prepareTeamPreview({ distDir: dir, routingConfig, environment: 'production' }), /latest/);
  } finally { rmSync(dir, { recursive: true }); }
});
