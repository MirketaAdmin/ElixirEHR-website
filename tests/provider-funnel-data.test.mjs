// Provider funnel content: every flow is complete and every link lands on a real route.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  DISCOVERY_CALL_URL,
  FUNNEL_STEPS,
  MAX_POINTS,
  MIN_POINTS,
  OPEN_ASSISTANT_EVENT,
  providerTypes,
} from '../src/features/provider-funnel/funnelData.mjs';
import { routeAliases } from '../src/routes/aliases.js';

const EXPECTED_IDS = ['online-behavioral-health', 'treatment-center', 'cybhi', 'homecare', 'specialty-clinic'];

/** Every path App.jsx registers (`path="..."`), plus the alias redirects, without slashes. */
function knownRoutes() {
  const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8');
  const paths = [...app.matchAll(/\bpath="([^"]+)"/g)].map((match) => match[1]).filter((path) => !path.includes(':'));
  const aliases = Object.keys(routeAliases).map((path) => path.slice(1));
  return new Set([...paths, ...aliases].map(normalize));
}

function normalize(path) {
  return path.split('#')[0].replace(/^\/+|\/+$/g, '');
}

function allLinks(type) {
  return [
    ...type.world.sources,
    ...type.needs.map((need) => need.point.to),
    ...type.corePoints.map((point) => point.to),
  ];
}

test('the five provider types, with the shared ids, in order', () => {
  assert.deepEqual(
    providerTypes.map((type) => type.id),
    EXPECTED_IDS,
  );
});

test('the flow has the four presentation steps in order', () => {
  assert.deepEqual(
    FUNNEL_STEPS.map((step) => step.id),
    ['world', 'needs', 'why', 'next'],
  );
});

test('the shared constants match the agreed interface', () => {
  assert.equal(OPEN_ASSISTANT_EVENT, 'elixir:open-assistant');
  assert.equal(DISCOVERY_CALL_URL, 'https://www.elixirehr.com/contact-us/');
  assert.equal(MIN_POINTS, 3);
  assert.equal(MAX_POINTS, 5);
});

for (const type of providerTypes) {
  test(`${type.id}: every step has its content`, () => {
    for (const key of ['label', 'audience', 'visitorIntro', 'teaser']) {
      assert.equal(typeof type[key], 'string', key);
      assert.ok(type[key].trim().length > 0, key);
    }
    // Step 1: their world.
    assert.ok(type.world.headline.trim());
    assert.ok(type.world.intro.trim());
    assert.ok(type.world.challenges.length >= 3, 'at least three challenges');
    assert.ok(type.world.sources.length >= 1, 'world copy names its source pages');
    // Step 2: needs, each with the capability point step 3 shows.
    assert.ok(type.needs.length >= 3 && type.needs.length <= MAX_POINTS, 'three to five needs');
    for (const need of type.needs) {
      assert.match(need.id, /^[a-z0-9-]+$/);
      assert.ok(need.label.trim() && need.phrase.trim(), `${need.id} label and phrase`);
      assert.doesNotMatch(need.phrase, /[,;]/, `${need.id} phrase reads as one list item`);
      for (const key of ['title', 'text', 'to', 'linkLabel']) {
        assert.ok(need.point[key]?.trim(), `${need.id} point.${key}`);
      }
    }
    // Step 3 fallback: enough core points to reach the minimum with nothing selected.
    assert.ok(type.corePoints.length >= MIN_POINTS);
    for (const point of type.corePoints) {
      for (const key of ['id', 'title', 'text', 'to', 'linkLabel']) {
        assert.ok(point[key]?.trim(), `${point.id} ${key}`);
      }
    }
  });

  test(`${type.id}: ids are unique`, () => {
    const needIds = type.needs.map((need) => need.id);
    const coreIds = type.corePoints.map((point) => point.id);
    assert.equal(new Set(needIds).size, needIds.length);
    assert.equal(new Set(coreIds).size, coreIds.length);
  });

  test(`${type.id}: every link is an existing route`, () => {
    const routes = knownRoutes();
    for (const link of allLinks(type)) {
      assert.match(link, /^\/[a-z0-9/-]+\/$/, `${link} is a site-relative path with a trailing slash`);
      assert.ok(routes.has(normalize(link)), `${link} is registered in src/App.jsx or src/routes/aliases.js`);
    }
  });
}

test('route discovery itself finds the practice-type pages', () => {
  const routes = knownRoutes();
  for (const path of ['telehealth-ehr', 'treatment-center-software', 'student-health-records-software', 'evv-software', 'ambulatory-ehr']) {
    assert.ok(routes.has(path), path);
  }
  assert.ok(!routes.has('not-a-real-page'));
});
