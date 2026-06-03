// lib/attribution.ts
//
// First-touch lead attribution. Captures UTM params + ad-click IDs +
// external referrer on the first page of a session and persists them in
// sessionStorage so they ride along with the lead payload even after the
// visitor navigates internally before submitting the form.
//
// sessionStorage (not localStorage): cleared when the tab closes, scoped to
// the visit, lowest-footprint. First-touch only — we never overwrite the
// origin of the session, so the channel that actually won the lead is the
// one recorded.
//
// This is NOT silent lead filtering. It only annotates a lead the visitor is
// consensually submitting; it never blocks, drops, or alters a submission.

const KEY = 'edn_attr';

const PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'gbraid',
  'wbraid',
  'fbclid',
  'msclkid',
] as const;

export function captureAttribution(): void {
  if (typeof window === 'undefined') return;
  try {
    // First-touch: once set this session, never overwrite.
    if (sessionStorage.getItem(KEY)) return;

    const sp = new URLSearchParams(window.location.search);
    const data: Record<string, string> = {};
    for (const p of PARAMS) {
      const v = sp.get(p);
      if (v) data[p] = v;
    }

    const ref = document.referrer;
    if (ref && !ref.includes(window.location.host)) data.referrer = ref;

    data.landing_page = window.location.pathname + window.location.search;

    sessionStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    // sessionStorage unavailable (private mode / blocked) — attribution is
    // best-effort, so fail silently without touching the lead flow.
  }
}

export function getAttribution(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}
