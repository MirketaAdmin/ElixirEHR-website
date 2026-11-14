import fs from 'node:fs';
import { spawnSync, execFileSync } from 'node:child_process';
import { prepareTeamPreview } from './prepare-team-preview.mjs';

const routingPath = process.argv[2];
if (!routingPath) throw new Error('Usage: node scripts/build-team-preview.mjs <current-live-routing-config.json>');
const routingConfig = JSON.parse(fs.readFileSync(routingPath, 'utf8'));
const env = { ...process.env, VITE_SITE_URL: 'https://www.elixirehr.com', VITE_ELIXIR_ASSISTANT_MODE: 'sample', VITE_ELIXIR_LEAD_SUBMISSION_ENABLED: 'false' };
for (const args of [
  ['node_modules/vite/bin/vite.js', 'build', '--mode', 'preview'],
  ['node_modules/vite/bin/vite.js', 'build', '--ssr', 'src/entry-server.jsx', '--outDir', 'dist-ssr', '--mode', 'preview'],
  ['scripts/prerender.mjs'],
]) {
  const result = spawnSync(process.execPath, args, { env, stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}
console.log(JSON.stringify(prepareTeamPreview({ distDir: 'dist', routingConfig, revision: execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(), baseRevision: execFileSync('git', ['rev-parse', 'origin/main'], { encoding: 'utf8' }).trim(), environment: 'latest' })));
