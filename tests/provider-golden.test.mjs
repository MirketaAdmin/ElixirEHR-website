import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { goldenRequest, loadGolden, scoreReply, validateGolden } from '../scripts/provider-golden.mjs';
import { validateChatRequest } from '../api/shared/contract.mjs';

test('the golden set has 10 well-formed questions covering every provider type, marked for oracle review', async () => {
  const golden = await loadGolden();
  assert.deepEqual(validateGolden(golden), []);
  assert.equal(golden.status, 'AGENT-GENERATED - ORACLE REVIEW NEEDED');
  const readme = await readFile(new URL('../tests/golden/README.md', import.meta.url), 'utf8');
  assert.match(readme, /^# AGENT-GENERATED - ORACLE REVIEW NEEDED/);
  for (const item of golden.questions) assert.equal(validateChatRequest(goldenRequest(item)).providerType, item.providerType);
});

test('the scoring rules accept a grounded discovery reply with one question and reject the rest', () => {
  const item = { id: 'x', expect: { mentionsDiscoveryCall: true, followUpQuestions: 1, minCitations: 1 } };
  const good = { answer: 'Elixir keeps intake and billing on one record. A discovery call can scope migration. Which EHR do you use today?', citations: [{ id: 'ehr' }] };
  assert.deepEqual(scoreReply(item, good), []);
  assert.deepEqual(scoreReply(item, { answer: '' }), ['no answer']);
  assert.match(scoreReply(item, { ...good, answer: 'Elixir helps. Which EHR do you use?' }).join(), /discovery call/);
  assert.match(scoreReply(item, { ...good, answer: 'Book a discovery call. Which EHR? How many sites?' }).join(), /asks 2 questions/);
  assert.match(scoreReply(item, { ...good, citations: [] }).join(), /cites 0 sources/);
  assert.match(scoreReply(item, { ...good, answer: `${good.answer} It costs $99. See https://example.com` }).join(), /price figure/);
  assert.match(scoreReply(item, { ...good, answer: `${good.answer} See www.example.com` }).join(), /URL/);
});

test('the live evaluation skips without ELIXIR_EVAL_URL and sends nothing', () => {
  const env = { ...process.env };
  delete env.ELIXIR_EVAL_URL;
  const run = spawnSync(process.execPath, [new URL('../scripts/eval-provider-questions.mjs', import.meta.url).pathname], { env, encoding: 'utf8', windowsHide: true });
  assert.equal(run.status, 0);
  assert.match(run.stdout, /^SKIP:/);
});
