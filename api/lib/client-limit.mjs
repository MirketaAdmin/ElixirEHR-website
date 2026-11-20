// Coarse per-client protection for one API worker: a bounded in-memory map, reset on restart.
// It limits how many model-backed messages one client address can trigger. It is not a
// distributed or account-wide budget; the per-worker caps in chat-handler.mjs still apply.

const ADDRESS = /^[0-9a-f:.]{2,45}$/;

const SOURCES = new Set(['auto', 'azure-clientip', 'client-ip', 'forwarded-first', 'forwarded-last', 'forwarded-second-last', 'off']);

function readHeader(headers, name) {
  if (!headers) return '';
  const value = typeof headers.get === 'function' ? headers.get(name) : headers[name] ?? headers[name.toLowerCase()];
  return typeof value === 'string' ? value : '';
}

function normalizeAddress(raw) {
  let value = String(raw ?? '').trim().toLowerCase();
  if (!value) return null;
  const bracketed = /^\[([^\]]+)\](?::\d+)?$/.exec(value);
  if (bracketed) value = bracketed[1];
  else if (/^\d{1,3}(?:\.\d{1,3}){3}:\d+$/.test(value)) value = value.replace(/:\d+$/, '');
  return ADDRESS.test(value) ? value : null;
}

// Verified on the hosted `latest` preview (2026-11-19, see "Verify the client address headers" in
// docs/ELIXIR-SALES-ASSISTANT.md): the managed function gets no x-azure-clientip or x-client-ip, and
// the edge keeps any client-supplied x-forwarded-for entries, then appends the visitor address and
// its own hop. So the visitor is the second-to-last hop. `source` comes from the
// ASSISTANT_CLIENT_ADDRESS_SOURCE app setting so it can be corrected without a code change:
// - auto (default): the second-to-last x-forwarded-for hop (the only hop when there is one). It
//   never reads x-azure-clientip: the edge does not send it, so a client could set its own.
// - azure-clientip | client-ip: only that header.
// - forwarded-first | forwarded-last: that end of x-forwarded-for.
// - forwarded-second-last: the hop before the last one, for an edge that keeps any client-supplied
//   entries and then appends the visitor address and its own hop (falls back to the only entry).
// - off: no per-client limit (the per-worker caps still apply).
// An unknown value falls back to auto.
export function clientAddressSource(value) {
  const source = String(value ?? '').trim().toLowerCase();
  return SOURCES.has(source) ? source : 'auto';
}

export function clientAddress(headers = {}, { source = 'auto' } = {}) {
  const forwarded = readHeader(headers, 'x-forwarded-for').split(',');
  const candidates = {
    auto: () => [forwarded.length > 1 ? forwarded.at(-2) : forwarded[0]],
    'azure-clientip': () => [readHeader(headers, 'x-azure-clientip')],
    'client-ip': () => [readHeader(headers, 'x-client-ip')],
    'forwarded-first': () => [forwarded[0]],
    'forwarded-last': () => [forwarded.at(-1)],
    'forwarded-second-last': () => [forwarded.length > 1 ? forwarded.at(-2) : forwarded[0]],
    off: () => [],
  }[clientAddressSource(source)]();
  for (const raw of candidates) {
    const value = normalizeAddress(raw);
    if (value) return value;
  }
  return null;
}

export function createClientLimiter({ limit = 20, windowMs = 10 * 60 * 1000, dailyLimit = 60, maxClients = 5000, now = Date.now } = {}) {
  const clients = new Map();
  return {
    // Returns { allowed: true } after counting the call, or { allowed: false, retryAfter } without counting it.
    take(address) {
      if (!address) return { allowed: true };
      const time = now();
      let record = clients.get(address);
      if (record) clients.delete(address);
      if (!record || time - record.dayStart >= 86400000) record = { windowStart: time, count: 0, dayStart: time, dayCount: 0 };
      if (time - record.windowStart >= windowMs) { record.windowStart = time; record.count = 0; }
      let result;
      if (record.dayCount >= dailyLimit) result = { allowed: false, retryAfter: String(Math.min(3600, Math.ceil((record.dayStart + 86400000 - time) / 1000))) };
      else if (record.count >= limit) result = { allowed: false, retryAfter: String(Math.max(1, Math.ceil((record.windowStart + windowMs - time) / 1000))) };
      else { record.count++; record.dayCount++; result = { allowed: true }; }
      // Re-insert so Map order is least-recently-used first, then trim the oldest clients.
      clients.set(address, record);
      while (clients.size > maxClients) clients.delete(clients.keys().next().value);
      return result;
    },
    get size() { return clients.size; },
  };
}
