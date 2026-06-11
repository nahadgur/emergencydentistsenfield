// components/SpokeHero.tsx
// Inline-SVG hero for blog spokes + guide hubs. No <img>, no file, no external
// host. Motif: a heartbeat/vitals line with a small care cross (matches the
// urgent-dental vertical). The gradient hue is seeded by the hub slug, so every
// spoke under a hub shares a colour and different hubs differ. The SVG is
// decorative (aria-hidden); the page keeps the real <h1> (rendered sr-only by
// the caller).

// Brand name baked as a const so the eyebrow does not depend on data/site.ts.
const SITE_NAME = 'Emergency Dentist Enfield';

// Each pair is a [dark, mid] gradient; the hub hash picks one so hubs differ
// but stay on-brand.
const PAIRS: ReadonlyArray<readonly [string, string]> = [
  ['#063e62', '#08507f'],
  ['#04304b', '#0a6cb8'],
  ['#063e62', '#0a6cb8'],
];
const SUBTLE = '#cfe4f4';
const ACCENT = '#f5b400';

function hashIndex(s: string, mod: number): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h % mod;
}

// Balance a title across two lines by word count.
function twoLines(t: string): [string, string] {
  const w = t.trim().split(/\s+/);
  if (w.length < 3) return [t, ''];
  const cut = Math.ceil(w.length / 2);
  return [w.slice(0, cut).join(' '), w.slice(cut).join(' ')];
}

export function SpokeHero({
  title,
  hubName,
  hubSlug,
  readMins,
}: {
  title: string;
  hubName: string | null;
  hubSlug: string;
  readMins: number;
}) {
  const seed = hubSlug || title;
  const [d0, d1] = PAIRS[hashIndex(seed, PAIRS.length)];
  const [l1, l2] = twoLines(title);
  const eyebrow = `${SITE_NAME}${hubName ? ' · ' + hubName : ''}`;
  const gid = `sh-${hashIndex(seed, 99999)}`;
  // Smaller type for long single lines so they don't overflow.
  const fs = Math.max(l1.length, l2.length) > 40 ? 28 : 34;

  return (
    <svg
      viewBox="0 0 1100 340"
      className="w-full h-auto block rounded-2xl"
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <title>{title}</title>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={d0} />
          <stop offset="1" stopColor={d1} />
        </linearGradient>
      </defs>
      <rect width="1100" height="340" fill={`url(#${gid})`} />
      <path d="M620 180 H 720 L 745 120 L 790 250 L 825 180 L 880 180 L 905 150 L 935 180 H 1060" fill="none" stroke="#f5b400" strokeOpacity="0.55" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/><g fill="#d93b3b" fillOpacity="0.5"><rect x="980" y="60" width="18" height="58" rx="3"/><rect x="960" y="80" width="58" height="18" rx="3"/></g>
      <text x="60" y="150" fill={SUBTLE} fontSize="16" fontWeight="600">{eyebrow}</text>
      <text x="60" y="202" fill="#ffffff" fontSize={fs} fontWeight="800">{l1}</text>
      {l2 ? <text x="60" y={202 + fs + 8} fill="#ffffff" fontSize={fs} fontWeight="800">{l2}</text> : null}
      <text x="60" y={l2 ? 202 + (fs + 8) * 2 - 4 : 248} fill={ACCENT} fontSize="15">{readMins} min read</text>
    </svg>
  );
}
