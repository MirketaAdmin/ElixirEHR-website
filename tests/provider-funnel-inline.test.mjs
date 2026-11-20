import test from 'node:test';
import assert from 'node:assert/strict';
import { askInline, inlineAvailable, inlineConversation, inlineReducer, questionTurns } from '../src/features/provider-funnel/inlineAssistant.mjs';
import { composeAssistantPrompt } from '../src/features/provider-funnel/funnelLogic.mjs';
import { createSessionBudget, MAX_VISITOR_MESSAGES, SESSION_BUDGET_KEY } from '../src/features/sales-assistant/discovery.mjs';
import { welcomeFor } from '../src/features/sales-assistant/conversation.mjs';

function memoryStorage() {
  const values = new Map();
  return { getItem: (key) => values.get(key) ?? null, setItem: (key, value) => values.set(key, String(value)) };
}
const reply = (answer) => new Response(JSON.stringify({ answer, citations: [{ id: 'ehr', title: 'EHR overview', url: 'https://www.elixirehr.com/electronic-health-record/' }], citationIds: ['ehr'], qualification: {}, nextField: null, intent: 'explore' }));

test('the inline conversation is the assistant conversation for the provider type, without the lead form', () => {
  const state = inlineConversation('treatment-center');
  assert.equal(state.providerType, 'treatment-center');
  assert.equal(state.sourcePath, '/');
  assert.equal(state.leadForm, false);
  assert.equal(state.messages[0].content, welcomeFor('treatment-center'));
  assert.equal(inlineReducer(state, { type: 'init', typeId: 'homecare' }).providerType, 'homecare');
});

test('only hosted and sample modes ask the model inline', () => {
  assert.equal(inlineAvailable('hosted'), true);
  assert.equal(inlineAvailable('sample'), true);
  assert.equal(inlineAvailable('off'), false);
  assert.equal(inlineAvailable(undefined), false);
});

test('the composed funnel prompt goes once to /api/chat with the provider type and counts against the session cap', async () => {
  const storage = memoryStorage();
  const budget = createSessionBudget({ storage });
  const prompt = composeAssistantPrompt('treatment-center', ['intake', 'billing-rcm']);
  const sent = [];
  let started = 0;
  const result = await askInline({
    state: inlineConversation('treatment-center'), text: prompt, mode: 'hosted', budget,
    onStart: () => { started++; },
    fetchImpl: async (url, options) => { sent.push({ url, body: JSON.parse(options.body) }); return reply('Elixir keeps intake and billing on one record.'); },
  });
  assert.equal(result.status, 'ok');
  assert.equal(result.reply.answer, 'Elixir keeps intake and billing on one record.');
  assert.equal(result.reply.citations.length, 1);
  assert.equal(sent.length, 1);
  assert.equal(started, 1);
  assert.equal(sent[0].url, '/api/chat');
  assert.equal(sent[0].body.providerType, 'treatment-center');
  assert.equal(sent[0].body.messages.at(-1).content, prompt);
  assert.equal(storage.getItem(SESSION_BUDGET_KEY), '1');
});

test('off mode, an empty question and a spent budget make no request and use no budget', async () => {
  let calls = 0;
  const fetchImpl = async () => { calls++; return reply('unexpected'); };
  const storage = memoryStorage();
  const budget = createSessionBudget({ storage });
  const state = inlineConversation('cybhi');
  assert.equal((await askInline({ state, text: 'How does billing work?', mode: 'off', budget, fetchImpl })).status, 'off');
  assert.equal((await askInline({ state, text: '   ', mode: 'hosted', budget, fetchImpl })).status, 'empty');
  assert.equal(budget.used(), 0);
  storage.setItem(SESSION_BUDGET_KEY, String(MAX_VISITOR_MESSAGES));
  assert.equal((await askInline({ state, text: 'How does billing work?', mode: 'hosted', budget, fetchImpl })).status, 'limit');
  assert.equal(calls, 0);
});

test('a failed request reports an error and the reducer drops the unanswered question', async () => {
  const budget = createSessionBudget({ storage: memoryStorage() });
  let state = inlineConversation('homecare');
  const result = await askInline({ state, text: 'Do you support EVV?', mode: 'hosted', budget, fetchImpl: async () => new Response('private upstream body', { status: 503 }) });
  assert.equal(result.status, 'error');
  assert.match(result.message, /unavailable|try again/i);
  assert.doesNotMatch(result.message, /private upstream body/);
  assert.equal(budget.used(), 1);
  state = inlineReducer(state, { type: 'request', id: 1, text: 'Do you support EVV?' });
  assert.equal(state.messages.length, 2);
  state = inlineReducer(state, { type: 'failure', id: 1, error: result.message });
  assert.equal(state.pending, false);
  assert.equal(state.messages.length, 1);
  assert.equal(state.messages[0].role, 'assistant');
});

test('an aborted request rejects with AbortError for the caller to ignore', async () => {
  const controller = new AbortController();
  controller.abort();
  await assert.rejects(
    askInline({ state: inlineConversation('cybhi'), text: 'Hello', mode: 'sample', budget: createSessionBudget({ storage: memoryStorage() }), signal: controller.signal }),
    { name: 'AbortError' },
  );
});

test('follow-up questions carry the earlier turns, and the question log hides tailored-summary exchanges', async () => {
  const budget = createSessionBudget({ storage: memoryStorage() });
  let state = inlineConversation('specialty-clinic');
  state = inlineReducer(state, { type: 'request', id: 1, text: 'Summary prompt' });
  state = inlineReducer(state, { type: 'success', id: 1, reply: { answer: 'Summary answer', citations: [], qualification: {}, nextField: null, intent: 'explore' } });
  let body;
  const result = await askInline({ state, text: 'What about scheduling?', mode: 'hosted', budget, fetchImpl: async (_url, options) => { body = JSON.parse(options.body); return reply('Scheduling answer'); } });
  assert.equal(result.status, 'ok');
  assert.deepEqual(body.messages.map((message) => message.content).slice(1), ['Summary prompt', 'Summary answer', 'What about scheduling?']);
  state = inlineReducer(state, { type: 'request', id: 2, text: 'What about scheduling?' });
  state = inlineReducer(state, { type: 'success', id: 2, reply: result.reply });
  assert.deepEqual(questionTurns(state.messages, [1]).map((turn) => turn.content), ['What about scheduling?', 'Scheduling answer']);
  assert.deepEqual(questionTurns(state.messages).map((turn) => turn.index), [1, 2, 3, 4]);
  assert.deepEqual(questionTurns(null), []);
});
