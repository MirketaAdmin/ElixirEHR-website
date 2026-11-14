import test from 'node:test';
import assert from 'node:assert/strict';
import { resolveAssistantMode, requestReply } from '../src/features/sales-assistant/transport.mjs';

const body = { messages: [{ role: 'user', content: 'I would like a demo' }], qualification: {}, skipped: [], sourcePath: '/' };
test('sample mode is explicit and never becomes a production fallback', () => {
  assert.equal(resolveAssistantMode({ dev: true }), 'sample');
  assert.equal(resolveAssistantMode({}), 'off');
  assert.equal(resolveAssistantMode({ preview: true }), 'off');
  assert.equal(resolveAssistantMode({ requested: 'sample' }), 'off');
  assert.equal(resolveAssistantMode({ requested: 'hosted' }), 'hosted');
  assert.equal(resolveAssistantMode({ requested: 'hosted', preview: true }), 'sample');
  assert.equal(resolveAssistantMode({ requested: 'hosted', preview: true, hostedPreview: true, hostname: 'thankful-mud-07aadb71e-latest.westus2.3.azurestaticapps.net' }), 'hosted');
  assert.equal(resolveAssistantMode({ requested: 'hosted', preview: true, hostedPreview: true, hostname: 'thankful-mud-07aadb71e.3.azurestaticapps.net' }), 'sample');
});
test('sample replies perform no network calls; hosted replies use same-origin endpoint', async () => {
  let calls = 0;
  const fetchImpl = async (url, options) => { calls++; assert.equal(url, '/api/chat'); assert.equal(options.credentials, 'same-origin'); return new Response(JSON.stringify({ answer: 'Hello', citationIds: [], qualification: {}, intent: 'explore' })); };
  assert.equal((await requestReply(body, { mode: 'sample', fetchImpl })).intent, 'demo');
  assert.equal(calls, 0);
  assert.equal((await requestReply(body, { mode: 'hosted', fetchImpl })).answer, 'Hello');
  assert.equal(calls, 1);
});
test('missing, failed and invalid replies never silently produce sample answers', async () => {
  await assert.rejects(requestReply(body, { mode: 'off' }));
  await assert.rejects(requestReply(body, { mode: 'hosted', fetchImpl: async () => new Response('upstream private body', { status: 503 }) }), /try again|unavailable/i);
  await assert.rejects(requestReply(body, { mode: 'hosted', fetchImpl: async () => new Response(JSON.stringify({ answer: '' })) }));
  const controller = new AbortController(); controller.abort();
  await assert.rejects(requestReply(body, { mode: 'sample', signal: controller.signal }), { name: 'AbortError' });
});
