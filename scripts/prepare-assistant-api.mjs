import { copyFileSync, existsSync, lstatSync, mkdtempSync, mkdirSync, readdirSync, renameSync, rmSync } from 'node:fs';
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

// Keep deployment inputs separate from api/, which may contain local credentials.
export function prepareAssistantApi({ sourceDir = 'api', outputDir = 'work/team-preview-api' } = {}) {
  const source = resolve(sourceDir);
  const output = resolve(outputDir);
  const isWithin = (path, parent) => path === parent || path.startsWith(`${parent}${sep}`);
  if (isWithin(source, output) || isWithin(output, source)) throw new Error('API source and output paths must not overlap.');
  if (lstatSync(source).isSymbolicLink() || (existsSync(output) && lstatSync(output).isSymbolicLink())) throw new Error('API artifact roots must not be symbolic links.');
  mkdirSync(dirname(output), { recursive: true });
  const staging = mkdtempSync(join(dirname(output), '.assistant-api-'));
  const files = [];
  function visit(folder) {
    for (const entry of readdirSync(folder, { withFileTypes: true })) {
      if (entry.isSymbolicLink() || entry.name.startsWith('.') || entry.name.startsWith('local.settings')) continue;
      const path = join(folder, entry.name);
      const name = relative(source, path).split(sep).join('/');
      if (entry.isDirectory()) {
        if (['chat', 'lib', 'shared'].includes(name)) visit(path);
        continue;
      }
      const allowed = ['host.json', 'package.json', 'chat/function.json', 'chat/index.cjs'].includes(name) || /^(?:lib|shared)\/[^/]+\.(?:mjs|cjs|json)$/.test(name);
      if (!entry.isFile() || !allowed) continue;
      mkdirSync(dirname(join(staging, name)), { recursive: true });
      copyFileSync(path, join(staging, name));
      files.push(name);
    }
  }
  try {
    visit(source);
    for (const required of ['host.json', 'package.json', 'chat/function.json', 'chat/index.cjs']) {
      if (!files.includes(required)) throw new Error(`Missing API runtime file: ${required}`);
    }
    rmSync(output, { recursive: true, force: true });
    renameSync(staging, output);
    return { outputDir: output, files: files.sort() };
  } finally { rmSync(staging, { recursive: true, force: true }); }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  if (process.argv.length > 4 || process.argv.slice(2).some((arg) => !arg || (!isAbsolute(arg) && arg.startsWith('-')))) throw new Error('Usage: node scripts/prepare-assistant-api.mjs [sourceDir] [outputDir]');
  console.log(JSON.stringify(prepareAssistantApi({ sourceDir: process.argv[2], outputDir: process.argv[3] })));
}
