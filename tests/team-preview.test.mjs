import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { prepareTeamPreview } from '../scripts/prepare-team-preview.mjs';
import { resolveAssistantMode } from '../src/features/sales-assistant/transport.mjs';

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
    assert.equal(result.assistantMode, 'sample');
    assert.equal(result.apiIncluded, false);
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

test('hosted team preview includes an API runtime without weakening submission or indexing protection', () => {
  const dir = mkdtempSync(join(tmpdir(), 'elixir-hosted-preview-test-'));
  try {
    writeFileSync(join(dir, 'index.html'), '<html><head></head><body>Preview</body></html>');
    const routingConfig = {
      routes: [{ route: '/old', redirect: '/new/', statusCode: 301 }],
      navigationFallback: { rewrite: '/app-shell.html', exclude: ['/assets/*'] },
      platform: { apiRuntime: 'node:18' },
    };
    const result = prepareTeamPreview({ distDir: dir, routingConfig, revision: 'feature-sha', baseRevision: 'live-sha', environment: 'latest', hosted: true });
    const manifest = JSON.parse(readFileSync(join(dir, 'preview-info.json')));
    assert.equal(result.assistantMode, 'hosted');
    assert.equal(manifest.assistantMode, 'hosted');
    assert.equal(manifest.apiIncluded, true);
    assert.equal(manifest.externalSubmissions, false);
    const config = JSON.parse(readFileSync(join(dir, 'staticwebapp.config.json')));
    assert.deepEqual(config.routes, routingConfig.routes);
    assert.equal(config.platform.apiRuntime, 'node:22');
    assert.deepEqual(config.navigationFallback.exclude, ['/assets/*', '/api/*']);
    assert.match(config.globalHeaders['Content-Security-Policy'], /form-action 'none'/);
    assert.match(config.globalHeaders['Content-Security-Policy'], /connect-src 'self'/);
    assert.match(config.globalHeaders['X-Robots-Tag'], /noindex/);
    assert.deepEqual(routingConfig.navigationFallback.exclude, ['/assets/*']);
    assert.equal(routingConfig.platform.apiRuntime, 'node:18');
    prepareTeamPreview({ distDir: dir, routingConfig: config, environment: 'latest', hosted: true });
    assert.deepEqual(JSON.parse(readFileSync(join(dir, 'staticwebapp.config.json'))).navigationFallback.exclude, ['/assets/*', '/api/*']);
  } finally { rmSync(dir, { recursive: true }); }
});

test('hosted preview requires explicit opt-in on the exact team staging host', () => {
  const hostname = 'thankful-mud-07aadb71e-latest.westus2.3.azurestaticapps.net';
  assert.equal(resolveAssistantMode({ requested: 'hosted', preview: true, hostedPreview: true, hostname }), 'hosted');
  for (const host of ['', 'localhost', 'www.elixirehr.com', `${hostname}.example.com`, 'thankful-mud-07aadb71e.3.azurestaticapps.net']) {
    assert.equal(resolveAssistantMode({ requested: 'hosted', preview: true, hostedPreview: true, hostname: host }), 'sample');
  }
  for (const hostedPreview of [undefined, false, 'false', 'true']) {
    assert.equal(resolveAssistantMode({ requested: 'hosted', preview: true, hostedPreview, hostname }), 'sample');
  }
  assert.equal(resolveAssistantMode({ requested: 'sample', preview: true, hostedPreview: true, hostname }), 'sample');
  assert.equal(resolveAssistantMode({ requested: 'off', preview: true, hostedPreview: true, hostname }), 'off');
});
