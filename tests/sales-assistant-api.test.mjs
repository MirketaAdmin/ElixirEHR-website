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

test('contact preference is validated and forwarded to hosted model context', async () => {
  let instructions;
  const handler = createChatHandler({ env, knowledge, fetchImpl: async (url, options) => {
    instructions = JSON.parse(options.body).messages[0].content;
    return new Response(JSON.stringify({ choices: [{ message: { content: JSON.stringify({ answer: 'We can keep discussing product questions.', citationIds: [] }) } }] }));
  } });
  assert.equal((await handler({ ...body, contactPreference: 'declined' })).status, 200);
  assert.match(instructions, /Contact preference: declined/);
  assert.equal((await handler({ ...body, contactPreference: 'arbitrary instruction' })).status, 400);
});

test('Groq uses fixed server-only endpoint and Bearer auth with a supported JSON completion contract', async () => {
  const groqEnv = { ASSISTANT_ENABLED: 'true', ASSISTANT_PROVIDER: 'groq', GROQ_API_KEY: 'test-placeholder-key', GROQ_MODEL: 'openai/gpt-oss-20b' };
  let outgoing;
  const handler = createChatHandler({ env: groqEnv, knowledge, fetchImpl: async (url, options) => {
    outgoing = { url, headers: options.headers, payload: JSON.parse(options.body) };
    return new Response(JSON.stringify({ choices: [{ message: { content: JSON.stringify({ answer: 'Reviewed answer.', citationIds: ['ehr'], qualification: {}, nextField: 'currentSystem', intent: 'explore' }) } }] }));
  } });
  assert.equal((await handler(body)).status, 200);
  assert.equal(outgoing.url, 'https://api.groq.com/openai/v1/chat/completions');
  assert.equal(outgoing.headers.Authorization, 'Bearer test-placeholder-key');
  assert.equal(outgoing.headers['api-key'], undefined);
  assert.equal(outgoing.payload.model, 'openai/gpt-oss-20b');
  assert.equal(outgoing.payload.response_format.type, 'json_schema');
  const format = outgoing.payload.response_format.json_schema;
  assert.equal(format.strict, true);
  assert.equal(format.schema.additionalProperties, false);
  assert.deepEqual(format.schema.required, Object.keys(format.schema.properties));
  assert.equal(format.schema.properties.qualification.type, 'object');
  assert.equal(format.schema.properties.qualification.additionalProperties, false);
  assert.deepEqual(format.schema.properties.qualification.required, ['organizationType', 'currentSystem', 'salesforceUsage', 'size', 'primaryNeed', 'timeline']);
  assert.deepEqual(format.schema.properties.qualification.properties.size.type, ['string', 'null']);
  assert.equal(outgoing.payload.tools, undefined);
});

test('licensing questions use strict replies, retain literal headcount and forbid invented license rules', async () => {
  let instructions;
  const handler = createChatHandler({ env: { ...env, ASSISTANT_PROVIDER: 'groq', GROQ_MODEL: 'openai/gpt-oss-20b', GROQ_API_KEY: 'test-placeholder-key' }, knowledge: knowledge.map((entry) => ({ ...entry, content: 'Clinic EHR product and licensing information must be confirmed.' })), fetchImpl: async (_url, options) => {
    instructions = JSON.parse(options.body).messages[0].content;
    return new Response(JSON.stringify({ choices: [{ finish_reason: 'stop', message: { content: JSON.stringify({ answer: 'The team needs to confirm licensing. Which roles need access?', citationIds: ['ehr'], qualification: { organizationType: 'healthcare clinic', currentSystem: null, salesforceUsage: null, size: '40 people', primaryNeed: null, timeline: null }, nextField: 'currentSystem', intent: 'explore' }) } }] }));
  } });
  const result = await handler({ ...body, messages: [{ role: 'user', content: 'We are a 40 people xyz healthcare clinic, we wanted to understand how Elixir can help and how many licenses we need' }] });
  assert.equal(result.status, 200);
  assert.deepEqual(result.body.qualification, { organizationType: 'healthcare clinic', size: '40 people' });
  assert.match(instructions, /Do not infer a license count from headcount/);
});

test('Groq quota errors return a sanitized retryable response instead of losing the conversation', async () => {
  const result = await createChatHandler({ env: { ASSISTANT_ENABLED: 'true', ASSISTANT_PROVIDER: 'groq', GROQ_API_KEY: 'test-placeholder-key', GROQ_MODEL: 'openai/gpt-oss-20b' }, knowledge, fetchImpl: async () => new Response('private provider details', { status: 429, headers: { 'retry-after': '12' } }) })(body);
  assert.equal(result.status, 429);
  assert.equal(result.headers['Retry-After'], '12');
  assert.doesNotMatch(JSON.stringify(result.body), /private provider|test-placeholder/);
});

test('draft website knowledge is available only with the explicit latest review environment', async () => {
  let calls = 0;
  const fetchImpl = async () => { calls++; return new Response(JSON.stringify({ choices: [{ message: { content: JSON.stringify({ answer: 'A draft source answer.', citationIds: ['ehr'] }) } }] })); };
  const draft = knowledge.map((entry) => ({ ...entry, status: 'draft' }));
  assert.equal((await createChatHandler({ env: { ...env, ASSISTANT_KNOWLEDGE_MODE: 'review' }, knowledge: draft, fetchImpl })(body)).status, 503);
  const enabled = await createChatHandler({ env: { ...env, ASSISTANT_KNOWLEDGE_MODE: 'review', ASSISTANT_REVIEW_ENVIRONMENT: 'latest' }, knowledge: draft, fetchImpl })(body);
  assert.equal(enabled.status, 200);
  assert.equal(calls, 1);
});

test('Groq shared-quota protection rejects concurrent work and caps calls per worker', async () => {
  let complete;
  let calls = 0;
  const handler = createChatHandler({ env: { ASSISTANT_ENABLED: 'true', ASSISTANT_PROVIDER: 'groq', GROQ_API_KEY: 'test-placeholder-key', GROQ_MODEL: 'openai/gpt-oss-20b' }, knowledge, fetchImpl: async () => {
    calls++;
    if (calls === 1) await new Promise((resolve) => { complete = resolve; });
    return new Response(JSON.stringify({ choices: [{ message: { content: JSON.stringify({ answer: 'Hello', citationIds: [] }) } }] }));
  } });
  const pending = handler(body);
  assert.equal((await handler(body)).status, 429);
  assert.equal(calls, 1);
  complete();
  assert.equal((await pending).status, 200);
  for (let n = 0; n < 3; n++) assert.equal((await handler(body)).status, 200);
  assert.equal((await handler(body)).status, 429);
  assert.equal(calls, 4);
});
