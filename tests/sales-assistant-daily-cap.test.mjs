import test from 'node:test';
import assert from 'node:assert/strict';
import { createChatHandler, DEFAULT_DAILY_CAP, GROQ_DAILY_CAP, workerDailyCap } from '../api/lib/chat-handler.mjs';

const azureEnv = { ASSISTANT_ENABLED: 'true', AZURE_OPENAI_ENDPOINT: 'https://example.openai.azure.com', AZURE_OPENAI_DEPLOYMENT: 'configured-small-model', AZURE_OPENAI_API_KEY: 'test-only-not-a-real-key' };
const knowledge = [{ id: 'ehr', status: 'approved', owner: 'Test product owner', reviewedAt: '2026-11-13', title: 'EHR overview', url: 'https://www.elixirehr.com/electronic-health-record/', content: 'Approved test fixture: EHR information for a test organization.' }];
const body = { messages: [{ role: 'user', content: 'Tell me about your EHR.' }], qualification: {}, sourcePath: '/' };
const openLimiter = { take: () => ({ allowed: true }) };
const reply = () => new Response(JSON.stringify({ choices: [{ message: { content: JSON.stringify({ answer: 'Reviewed EHR information.', citationIds: ['ehr'], qualification: {}, nextField: null, intent: 'explore' }) } }] }));

test('every provider has a per-worker daily cap: Groq fixed at 100, Azure configurable with a 300 default', () => {
  assert.equal(GROQ_DAILY_CAP, 100);
  assert.equal(DEFAULT_DAILY_CAP, 300);
  assert.equal(workerDailyCap({ ASSISTANT_PROVIDER: 'groq' }), 100);
  assert.equal(workerDailyCap({ ASSISTANT_PROVIDER: 'groq', ASSISTANT_AZURE_DAILY_CAP: '5' }), 100);
  assert.equal(workerDailyCap({}), 300);
  assert.equal(workerDailyCap({ ASSISTANT_PROVIDER: 'azure' }), 300);
  assert.equal(workerDailyCap({ ASSISTANT_PROVIDER: 'azure', ASSISTANT_AZURE_DAILY_CAP: '50' }), 50);
  for (const bad of ['0', '-3', '2.5', 'lots', '', ' ']) assert.equal(workerDailyCap({ ASSISTANT_AZURE_DAILY_CAP: bad }), 300, `invalid cap ${JSON.stringify(bad)} falls back`);
});

test('the Azure daily cap stops model calls once reached and asks the visitor to retry later', async () => {
  let calls = 0;
  const handler = createChatHandler({ env: { ...azureEnv, ASSISTANT_AZURE_DAILY_CAP: '2' }, knowledge, clientLimiter: openLimiter, fetchImpl: async () => { calls++; return reply(); } });
  assert.equal((await handler(body)).status, 200);
  assert.equal((await handler(body)).status, 200);
  const third = await handler(body);
  assert.equal(third.status, 429);
  assert.equal(third.body.code, 'PLEASE_WAIT');
  assert.equal(third.headers['Retry-After'], '3600');
  assert.equal(calls, 2);
});
