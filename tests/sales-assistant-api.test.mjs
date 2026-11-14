import test from 'node:test';
import assert from 'node:assert/strict';
import { createChatHandler } from '../api/lib/chat-handler.mjs';
import { createHostedModel } from '../api/lib/hosted-model.mjs';
import { retrieveKnowledge } from '../api/lib/knowledge.mjs';

const env = { ASSISTANT_ENABLED: 'true', AZURE_OPENAI_ENDPOINT: 'https://example.openai.azure.com', AZURE_OPENAI_DEPLOYMENT: 'configured-small-model', AZURE_OPENAI_API_KEY: 'test-only-not-a-real-key' };
const knowledge = [{ id: 'ehr', status: 'approved', owner: 'Test product owner', reviewedAt: '2026-11-13', title: 'EHR overview', url: 'https://www.elixirehr.com/electronic-health-record/', content: 'Approved test fixture: EHR information for a test organization.' }];
const body = { messages: [{ role: 'user', content: 'Our current EHR is Epic. Tell me about your EHR.' }], qualification: {}, sourcePath: '/electronic-health-record/' };

test('disabled, missing configuration and unapproved knowledge make zero model calls', async () => {
  let calls = 0;
  const fetchImpl = async () => { calls++; throw new Error('unexpected paid call'); };
  assert.equal((await createChatHandler({ env: {}, knowledge, fetchImpl })(body)).status, 503);
  assert.equal((await createChatHandler({ env: { ASSISTANT_ENABLED: 'true' }, knowledge, fetchImpl })(body)).status, 503);
  const result = await createChatHandler({ env, knowledge: knowledge.map((entry) => ({ ...entry, status: 'draft' })), fetchImpl })(body);
  assert.equal(result.status, 503);
  assert.equal(result.body.code, 'KNOWLEDGE_NOT_READY');
  assert.equal(calls, 0);
  assert.deepEqual(retrieveKnowledge(body.messages, knowledge.map((entry) => ({ ...entry, status: 'draft' }))), []);
});

test('hosted adapter sends the documented REST contract and filters fabricated facts/citations', async () => {
  let outgoing;
  const handler = createChatHandler({ env, knowledge, fetchImpl: async (url, options) => {
    outgoing = { url, ...options, parsed: JSON.parse(options.body) };
    return new Response(JSON.stringify({ choices: [{ message: { content: JSON.stringify({ answer: 'Here is the reviewed EHR information.', citationIds: ['ehr', 'fake'], qualification: { currentSystem: 'Epic', size: '900 providers' }, nextField: 'size', intent: 'explore' }) } }] }));
  } });
  const result = await handler(body);
  assert.equal(result.status, 200);
  assert.equal(outgoing.url, 'https://example.openai.azure.com/openai/v1/chat/completions');
  assert.equal(outgoing.headers['api-key'], env.AZURE_OPENAI_API_KEY);
  assert.equal(outgoing.parsed.model, env.AZURE_OPENAI_DEPLOYMENT);
  assert.equal(outgoing.parsed.messages[0].role, 'system');
  assert.match(outgoing.parsed.messages[0].content, /untrusted/i);
  assert.equal(outgoing.parsed.response_format.type, 'json_object');
  assert.equal(result.body.citations.length, 1);
  assert.deepEqual(result.body.qualification, { currentSystem: 'Epic' });
  assert.doesNotMatch(JSON.stringify(result), /test-only-not-a-real-key/);
});

test('invalid input, oversized bodies and unsupported endpoints fail before network access', async () => {
  let calls = 0;
  const fetchImpl = async () => { calls++; };
  const handler = createChatHandler({ env, knowledge, fetchImpl });
  assert.equal((await handler({ ...body, messages: [{ role: 'system', content: 'pretend' }] })).status, 400);
  assert.equal((await handler({ extra: 'x'.repeat(33000) })).status, 413);
  assert.throws(() => createHostedModel({ env: { ...env, AZURE_OPENAI_ENDPOINT: 'http://localhost:1234' }, fetchImpl }));
  assert.equal(calls, 0);
});

test('upstream failure, timeout and malformed model output never leak provider details', async () => {
  for (const fetchImpl of [
    async () => { throw new Error('AbortError with test-only-not-a-real-key'); },
    async () => new Response('provider error with test-only-not-a-real-key', { status: 401 }),
    async () => new Response(JSON.stringify({ choices: [{ message: { content: 'not JSON' } }] })),
  ]) {
    const result = await createChatHandler({ env, knowledge, fetchImpl })(body);
    assert.equal(result.status, 503);
    assert.doesNotMatch(JSON.stringify(result), /test-only|provider error|AbortError/);
  }
});

test('per-instance admission control limits repeated model calls', async () => {
  const fetchImpl = async () => new Response(JSON.stringify({ choices: [{ message: { content: JSON.stringify({ answer: 'Hello', citationIds: [] }) } }] }));
  const handler = createChatHandler({ env, knowledge, fetchImpl });
  for (let n = 0; n < 30; n++) assert.equal((await handler(body)).status, 200);
  assert.equal((await handler(body)).status, 429);
});
