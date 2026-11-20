// Provider funnel logic: the tailored summary, the composed assistant prompt and the hand-off event.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { MAX_POINTS, MIN_POINTS, OPEN_ASSISTANT_EVENT, providerTypes } from '../src/features/provider-funnel/funnelData.mjs';
import {
  buildAssistantEventDetail,
  buildWhyElixir,
  clampStep,
  composeAssistantPrompt,
  getProviderType,
  openAssistant,
  resolveNeeds,
  toggleNeed,
} from '../src/features/provider-funnel/funnelLogic.mjs';

const treatment = getProviderType('treatment-center');

test('getProviderType finds known ids and returns null otherwise', () => {
  assert.equal(getProviderType('cybhi').label, 'CYBHI');
  assert.equal(getProviderType('nope'), null);
  assert.equal(getProviderType(null), null);
});

test('resolveNeeds keeps the type order and drops unknown or repeated ids', () => {
  const needs = resolveNeeds('treatment-center', ['billing-rcm', 'evv', 'intake', 'billing-rcm']);
  assert.deepEqual(
    needs.map((need) => need.id),
    ['intake', 'billing-rcm'],
  );
  assert.deepEqual(resolveNeeds('nope', ['intake']), []);
  assert.deepEqual(resolveNeeds('treatment-center', null), []);
});

test('toggleNeed adds and removes without duplicates', () => {
  assert.deepEqual(toggleNeed([], 'a'), ['a']);
  assert.deepEqual(toggleNeed(['a', 'b'], 'a'), ['b']);
  assert.deepEqual(toggleNeed(undefined, 'a'), ['a']);
});

test('with nothing selected the summary falls back to the core points', () => {
  const why = buildWhyElixir('treatment-center', []);
  assert.equal(why.title, 'Why Elixir for treatment centers');
  assert.equal(why.points.length, MIN_POINTS);
  assert.ok(why.points.every((point) => point.id.startsWith('core:')));
  assert.match(why.lead, /Pick what you are looking for/);
});

test('one selected need leads, padded with core points to the minimum', () => {
  const why = buildWhyElixir('treatment-center', ['compliance']);
  assert.equal(why.points.length, MIN_POINTS);
  assert.equal(why.points[0].id, 'need:compliance');
  assert.equal(why.points[0].title, treatment.needs.find((need) => need.id === 'compliance').point.title);
  assert.deepEqual(
    why.points.slice(1).map((point) => point.id),
    treatment.corePoints.slice(0, 2).map((point) => `core:${point.id}`),
  );
  assert.match(why.lead, /the need you picked/);
});

test('four selected needs give four need points and no padding', () => {
  const ids = treatment.needs.slice(0, 4).map((need) => need.id);
  const why = buildWhyElixir('treatment-center', [...ids].reverse());
  assert.deepEqual(
    why.points.map((point) => point.needId),
    ids,
  );
  assert.match(why.lead, /the 4 needs you picked/);
});

test('every type stays within three to five points for any selection', () => {
  for (const type of providerTypes) {
    const ids = type.needs.map((need) => need.id);
    // Every subset of the type's needs.
    for (let mask = 0; mask < 1 << ids.length; mask += 1) {
      const picked = ids.filter((_, index) => mask & (1 << index));
      const why = buildWhyElixir(type.id, picked);
      assert.ok(why.points.length >= MIN_POINTS && why.points.length <= MAX_POINTS, `${type.id} ${picked}`);
      assert.equal(new Set(why.points.map((point) => point.id)).size, why.points.length, 'no repeated point');
      for (const id of picked) {
        assert.ok(
          why.points.some((point) => point.needId === id),
          `${type.id}: selected need ${id} is answered`,
        );
      }
      for (const point of why.points) assert.ok(point.to && point.title && point.text);
    }
  }
});

test('buildWhyElixir returns null for an unknown type', () => {
  assert.equal(buildWhyElixir('nope', ['intake']), null);
});

test('the composed prompt states the type and the selections in order', () => {
  assert.equal(
    composeAssistantPrompt('homecare', ['billing-rcm', 'evv']),
    'I work at a home care agency. We are looking for help with: EVV compliance; billing and authorizations. How would Elixir help us?',
  );
  assert.equal(
    composeAssistantPrompt('online-behavioral-health', []),
    'I run an online behavioral health practice. How would Elixir help us?',
  );
  assert.match(composeAssistantPrompt('cybhi', ['compliance']), /CYBHI.*consent tracking\./);
  assert.equal(composeAssistantPrompt('nope', ['evv']), null);
});

test('the event detail carries the provider type id and the prompt', () => {
  assert.deepEqual(buildAssistantEventDetail('specialty-clinic', ['scheduling']), {
    providerType: 'specialty-clinic',
    prompt: composeAssistantPrompt('specialty-clinic', ['scheduling']),
  });
  assert.deepEqual(buildAssistantEventDetail(null, []), { providerType: null, prompt: null });
});

test('openAssistant dispatches the shared event on the given target', () => {
  const target = new EventTarget();
  const received = [];
  target.addEventListener(OPEN_ASSISTANT_EVENT, (event) => received.push(event.detail));
  const detail = buildAssistantEventDetail('cybhi', ['billing-rcm']);

  assert.equal(openAssistant(detail, target), true);
  assert.deepEqual(received, [detail]);
});

test('openAssistant is a safe no-op without a target (the prerender)', () => {
  assert.equal(openAssistant({ providerType: null, prompt: null }, null), false);
  // Under node there is no window, so the default target is absent too.
  assert.equal(openAssistant({ providerType: null, prompt: null }), false);
});

test('clampStep keeps the step inside the flow', () => {
  assert.equal(clampStep(-1), 0);
  assert.equal(clampStep(2), 2);
  assert.equal(clampStep(9), 3);
  assert.equal(clampStep(Number.NaN), 0);
});
