import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, mkdtempSync, mkdirSync, readFileSync, rmSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { prepareAssistantApi } from '../scripts/prepare-assistant-api.mjs';

test('API deployment artifact includes runtime code and excludes credentials, examples, dependencies and links', () => {
  const dir = mkdtempSync(join(tmpdir(), 'elixir-api-artifact-'));
  try {
    const sourceDir = join(dir, 'source');
    const outputDir = join(dir, 'artifact');
    for (const folder of ['', 'chat', 'lib', 'shared', 'node_modules', 'other']) mkdirSync(join(sourceDir, folder), { recursive: true });
    for (const file of ['host.json', 'package.json', 'chat/function.json']) writeFileSync(join(sourceDir, file), '{}');
    for (const file of ['chat/index.cjs', 'lib/knowledge.mjs', 'shared/contract.mjs']) writeFileSync(join(sourceDir, file), 'export const fixture = true;');
    for (const file of ['.env.local', 'local.settings.json', 'local.settings.example.json', 'lib/.env.json', 'node_modules/package.json', 'other/unexpected.json']) writeFileSync(join(sourceDir, file), 'fixture-must-never-be-packaged');
    symlinkSync(join(sourceDir, '.env.local'), join(sourceDir, 'lib/credential.mjs'));
    mkdirSync(outputDir);
    writeFileSync(join(outputDir, 'stale.json'), 'remove me');
    const result = prepareAssistantApi({ sourceDir, outputDir });
    assert.deepEqual(result.files.sort(), ['chat/function.json', 'chat/index.cjs', 'host.json', 'lib/knowledge.mjs', 'package.json', 'shared/contract.mjs']);
    assert.equal(readFileSync(join(outputDir, 'host.json'), 'utf8'), '{}');
    for (const file of ['.env.local', 'local.settings.json', 'local.settings.example.json', 'lib/.env.json', 'lib/credential.mjs', 'node_modules/package.json', 'other/unexpected.json', 'stale.json']) assert.equal(existsSync(join(outputDir, file)), false, file);
    assert.equal(readFileSync(join(sourceDir, '.env.local'), 'utf8'), 'fixture-must-never-be-packaged');
    assert.throws(() => prepareAssistantApi({ sourceDir, outputDir: sourceDir }), /overlap/);
    assert.throws(() => prepareAssistantApi({ sourceDir, outputDir: join(sourceDir, 'nested') }), /overlap/);
  } finally { rmSync(dir, { recursive: true }); }
});
