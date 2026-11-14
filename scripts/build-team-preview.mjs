import fs from 'node:fs';
import { spawnSync, execFileSync } from 'node:child_process';
import { prepareTeamPreview } from './prepare-team-preview.mjs';

const args = process.argv.slice(2);
const hosted = args.includes('--hosted');
const positional = args.filter((arg) => arg !== '--hosted');
const routingPath = positional[0];
if (positional.length !== 1 || routingPath.startsWith('-')) throw new Error('Usage: node scripts/build-team-preview.mjs <current-live-routing-config.json> [--hosted]');
const routingConfig = JSON.parse(fs.readFileSync(routingPath, 'utf8'));
const env = { ...process.env, VITE_SITE_URL: 'https://www.elixirehr.com', VITE_ELIXIR_ASSISTANT_MODE: hosted ? 'hosted' : 'sample', VITE_ELIXIR_HOSTED_PREVIEW_ENABLED: String(hosted), VITE_ELIXIR_LEAD_SUBMISSION_ENABLED: 'false' };
for (const buildArgs of [
  ['node_modules/vite/bin/vite.js', 'build', '--mode', 'preview'],
  ['node_modules/vite/bin/vite.js', 'build', '--ssr', 'src/entry-server.jsx', '--outDir', 'dist-ssr', '--mode', 'preview'],
  ['scripts/prerender.mjs'],
]) {
  const result = spawnSync(process.execPath, buildArgs, { env, stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}
console.log(JSON.stringify(prepareTeamPreview({ distDir: 'dist', routingConfig, revision: execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(), baseRevision: execFileSync('git', ['rev-parse', 'origin/main'], { encoding: 'utf8' }).trim(), environment: 'latest', hosted })));
