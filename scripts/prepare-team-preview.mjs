import fs from 'node:fs';
import path from 'node:path';

/** Apply only to a separately built team-preview artifact, never a live source/config directory. */
export function prepareTeamPreview({ distDir, routingConfig, revision, baseRevision, environment }) {
  if (environment !== 'latest') throw new Error('This team artifact is restricted to the latest staging environment.');
  if (!Array.isArray(routingConfig?.routes) || !routingConfig.navigationFallback) throw new Error('Current live routing configuration is required.');
  const htmlFiles = [];
  function visit(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const file = path.join(dir, entry.name);
      if (entry.isDirectory()) visit(file);
      else if (entry.name.endsWith('.html')) htmlFiles.push(file);
    }
  }
  visit(distDir);
  if (!htmlFiles.length) throw new Error('No built HTML found. Build the preview first.');
  for (const file of htmlFiles) {
    let html = fs.readFileSync(file, 'utf8');
    html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, (tag) => /googletagmanager\.com|gtm\.start|gtag\(['"](?:js|config)['"]/.test(tag) ? '' : tag);
    html = html.replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, (tag) => tag.includes('googletagmanager.com') ? '' : tag);
    html = html.replace(/<!--[\s\S]*?-->/g, (comment) => /Google Tag Manager|Google tag \(gtag\.js\)/.test(comment) ? '' : comment);
    html = html.replace(/<meta\b[^>]*\bname=["']robots["'][^>]*>/gi, '');
    html = html.replace('</head>', '<meta name="robots" content="noindex,nofollow,noarchive">\n</head>');
    if (/googletagmanager\.com|GTM-524CCF2|G-HE9TB0G122/.test(html)) throw new Error(`Production tracking remains in ${path.relative(distDir, file)}`);
    fs.writeFileSync(file, html);
  }
  const csp = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; media-src 'self' https:; connect-src 'self'; frame-src https://www.youtube.com https://www.youtube-nocookie.com https://player.vimeo.com; form-action 'none'; object-src 'none'; base-uri 'self'";
  const config = { ...routingConfig, globalHeaders: { ...routingConfig.globalHeaders, 'X-Robots-Tag': 'noindex, nofollow, noarchive', 'Content-Security-Policy': csp } };
  const configJson = `${JSON.stringify(config)}\n`;
  if (Buffer.byteLength(configJson) > 20 * 1024) throw new Error('Preview routing configuration exceeds Azure’s 20 KB limit.');
  fs.writeFileSync(path.join(distDir, 'staticwebapp.config.json'), configJson);
  fs.writeFileSync(path.join(distDir, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
  const manifest = { environment, featureRevision: revision, baseRevision, assistantMode: 'sample', externalSubmissions: false, apiIncluded: false };
  fs.writeFileSync(path.join(distDir, 'preview-info.json'), `${JSON.stringify(manifest, null, 2)}\n`);
  return { ...manifest, htmlFiles: htmlFiles.length, routes: config.routes.length };
}
