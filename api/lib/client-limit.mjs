// Coarse per-client protection for one API worker: a bounded in-memory map, reset on restart.
// It limits how many model-backed messages one client address can trigger. It is not a
// distributed or account-wide budget; the per-worker caps in chat-handler.mjs still apply.

const ADDRESS = /^[0-9a-f:.]{2,45}$/;

// Azure sets x-azure-clientip itself. For x-forwarded-for, the last hop is the one the Azure edge
// appended; earlier entries can be supplied by the client and are ignored.
export function clientAddress(headers = {}) {
  const read = (name) => {
    if (!headers) return '';
    const value = typeof headers.get === 'function' ? headers.get(name) : headers[name] ?? headers[name.toLowerCase()];
    return typeof value === 'string' ? value : '';
  };
  const candidates = [read('x-azure-clientip'), read('x-forwarded-for').split(',').at(-1)];
  for (const raw of candidates) {
    let value = String(raw ?? '').trim().toLowerCase();
    if (!value) continue;
    const bracketed = /^\[([^\]]+)\](?::\d+)?$/.exec(value);
    if (bracketed) value = bracketed[1];
    else if (/^\d{1,3}(?:\.\d{1,3}){3}:\d+$/.test(value)) value = value.replace(/:\d+$/, '');
    if (ADDRESS.test(value)) return value;
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
