// 2026-05-05 — custom dental SVG illustrations from the Claude Design
// Enfield handoff. One per emergency category; intentionally larger
// than icon-scale (64-80px) so the cards have a hero illustration
// rather than a tiny corner icon.
//
// Pure presentation — these don't carry copy. Used in the homepage
// services grid, mapped from the existing data/services.ts slugs.

interface ArtProps { size?: number }

export const ToothPain = ({ size = 72 }: ArtProps) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <path d="M28 14c-5 0-9 4-9 10 0 5 2 7.5 3.5 12s.7 7.5 1.7 12.5c1 5 2.4 9 4.4 9 2.3 0 2.6-5 3.7-8.5C33.2 46 34 45 36 45s2.8 1 3.7 4c1.1 3.5 1.4 8.5 3.7 8.5 2 0 3.4-4 4.4-9 1-5 .2-8 1.7-12.5C50.5 31.5 53 29 53 24c0-6-4-10-9-10-3.5 0-5 1.5-7 2.5-1.2.6-1.8 1-3 1s-1.8-.4-3-1c-2-1-3.5-2.5-7-2.5z" fill="#0a6cb8" opacity="0.18"/>
    <path d="M28 14c-5 0-9 4-9 10 0 5 2 7.5 3.5 12s.7 7.5 1.7 12.5c1 5 2.4 9 4.4 9 2.3 0 2.6-5 3.7-8.5C33.2 46 34 45 36 45s2.8 1 3.7 4c1.1 3.5 1.4 8.5 3.7 8.5 2 0 3.4-4 4.4-9 1-5 .2-8 1.7-12.5C50.5 31.5 53 29 53 24c0-6-4-10-9-10-3.5 0-5 1.5-7 2.5-1.2.6-1.8 1-3 1s-1.8-.4-3-1c-2-1-3.5-2.5-7-2.5z" stroke="#0a6cb8" strokeWidth="1.6"/>
    <path d="M58 18l4-4M62 26h6M58 32l5 2" stroke="#d93b3b" strokeWidth="2.4" strokeLinecap="round"/>
    <path d="M22 18l-4-4M18 26h-6M22 32l-5 2" stroke="#d93b3b" strokeWidth="2.4" strokeLinecap="round"/>
  </svg>
);

export const ToothBroken = ({ size = 72 }: ArtProps) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <path d="M28 14c-5 0-9 4-9 10 0 5 2 7.5 3.5 12s.7 7.5 1.7 12.5c1 5 2.4 9 4.4 9 2.3 0 2.6-5 3.7-8.5C33.2 46 34 45 36 45L38 30 36 22 34 16c-1.5-1-3.5-2-6-2z" fill="#0a6cb8" opacity="0.22" stroke="#0a6cb8" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M44 14c-1.5 0-2.7.4-3.8.9L38 22l-2 8 2 9c2 .3 2.7 1.4 3.7 4 1.1 3.5 1.4 8.5 3.7 8.5 2 0 3.4-4 4.4-9 1-5 .2-8 1.7-12.5C50.5 31.5 53 29 53 24c0-6-4-10-9-10z" fill="#0a6cb8" opacity="0.18" stroke="#0a6cb8" strokeWidth="1.6" strokeLinejoin="round" transform="translate(2 1)"/>
    <path d="M37 18l1 5-2 4 2 5-1 4 2 5-1 4 2 4" stroke="#d93b3b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

export const ToothCrown = ({ size = 72 }: ArtProps) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <path d="M28 22c-5 0-9 4-9 10 0 5 2 7.5 3.5 12s.7 7.5 1.7 12.5c1 5 2.4 9 4.4 9 2.3 0 2.6-5 3.7-8.5C33.2 54 34 53 36 53s2.8 1 3.7 4c1.1 3.5 1.4 8.5 3.7 8.5 2 0 3.4-4 4.4-9 1-5 .2-8 1.7-12.5C50.5 39.5 53 37 53 32c0-6-4-10-9-10-3.5 0-5 1.5-7 2.5-1.2.6-1.8 1-3 1s-1.8-.4-3-1c-2-1-3.5-2.5-7-2.5z" fill="#0a6cb8" opacity="0.18" stroke="#0a6cb8" strokeWidth="1.6"/>
    <path d="M16 18l5-8 4 5 4-7 4 7 4-5 4 7 4-7 4 5 4-5 5 8H16z" fill="#f5b400" stroke="#b88800" strokeWidth="1.4" strokeLinejoin="round"/>
    <circle cx="40" cy="14" r="1.6" fill="#fff"/>
    <circle cx="28" cy="14" r="1.4" fill="#fff"/>
    <circle cx="52" cy="14" r="1.4" fill="#fff"/>
  </svg>
);

export const ToothExtract = ({ size = 72 }: ArtProps) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <path d="M14 64l14-14M66 64L52 50" stroke="#5b6679" strokeWidth="3.5" strokeLinecap="round"/>
    <path d="M28 50l8-8M52 50l-8-8" stroke="#5b6679" strokeWidth="3.5" strokeLinecap="round"/>
    <path d="M28 12c-5 0-9 4-9 10 0 5 2 7.5 3.5 12s.7 7.5 1.7 12.5c1 5 2.4 9 4.4 9 2.3 0 2.6-5 3.7-8.5C33.2 44 34 43 36 43s2.8 1 3.7 4c1.1 3.5 1.4 8.5 3.7 8.5 2 0 3.4-4 4.4-9 1-5 .2-8 1.7-12.5C50.5 29.5 53 27 53 22c0-6-4-10-9-10-3.5 0-5 1.5-7 2.5-1.2.6-1.8 1-3 1s-1.8-.4-3-1c-2-1-3.5-2.5-7-2.5z" fill="#fff" stroke="#0a6cb8" strokeWidth="1.6"/>
    <path d="M36 8l4-4 4 4M40 4v8" stroke="#2e9c6b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ToothInfect = ({ size = 72 }: ArtProps) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <path d="M28 14c-5 0-9 4-9 10 0 5 2 7.5 3.5 12s.7 7.5 1.7 12.5c1 5 2.4 9 4.4 9 2.3 0 2.6-5 3.7-8.5C33.2 46 34 45 36 45s2.8 1 3.7 4c1.1 3.5 1.4 8.5 3.7 8.5 2 0 3.4-4 4.4-9 1-5 .2-8 1.7-12.5C50.5 31.5 53 29 53 24c0-6-4-10-9-10-3.5 0-5 1.5-7 2.5-1.2.6-1.8 1-3 1s-1.8-.4-3-1c-2-1-3.5-2.5-7-2.5z" fill="#0a6cb8" opacity="0.18" stroke="#0a6cb8" strokeWidth="1.6"/>
    <circle cx="36" cy="34" r="6" fill="#d93b3b" opacity="0.85"/>
    <circle cx="36" cy="34" r="3" fill="#fff8f0"/>
    <circle cx="50" cy="20" r="1.6" fill="#d93b3b"/>
    <circle cx="56" cy="32" r="2.2" fill="#d93b3b" opacity="0.6"/>
    <circle cx="22" cy="22" r="1.4" fill="#d93b3b" opacity="0.7"/>
    <circle cx="20" cy="38" r="1.8" fill="#d93b3b" opacity="0.5"/>
  </svg>
);

export const ToothKnocked = ({ size = 72 }: ArtProps) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <path d="M8 60h64" stroke="#e3a4a4" strokeWidth="3" strokeLinecap="round"/>
    <ellipse cx="32" cy="60" rx="6" ry="3" fill="#5b6679" opacity="0.3"/>
    <g transform="translate(38 18) rotate(35)">
      <path d="M-8-10c-4 0-7 3-7 8 0 4 1.5 6 2.5 9.5s.5 6 1.3 9.5c.7 3.5 1.7 7 3 7 1.7 0 1.8-3.5 2.5-6C-5-1.5-4.5-2-3-2s2 .5 2.5 3C0 4.5 0 8 1.7 8 3 8 4 4.5 4.7 1c.7-3.5-.2-6 1.3-9.5C7 -2-9-4-9-8c0-5-3-8-7-8 .5 0-1 1.5-2 2-.4.3-.6.5-1 .5s-.6-.2-1-.5c-.5-.5-2-2-3-2z" fill="#fff" stroke="#0a6cb8" strokeWidth="1.6" transform="scale(0.8)"/>
    </g>
    <path d="M14 36l4 4M12 44l5 1M18 28l3 4" stroke="#0a6cb8" strokeWidth="1.6" strokeLinecap="round" opacity="0.5"/>
    <circle cx="60" cy="22" r="9" fill="#fff" stroke="#0a6cb8" strokeWidth="1.6"/>
    <path d="M60 16v6l4 2" stroke="#0a6cb8" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

// Generic "out of hours" / clock-tooth illustration for the
// out-of-hours service tile.
export const ToothClock = ({ size = 72 }: ArtProps) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
    <path d="M22 18c-4 0-7 3-7 8 0 4 1.5 6 2.5 9.5.8 2.5.5 5 1.3 9 .8 4 1.7 7 3 7 1.7 0 1.8-3 2.5-6 .5-2 1-2.5 2.5-2.5s2 .5 2.5 3c.7 3 .8 5.5 2.5 5.5 1.3 0 2.2-3 3-7 .8-4 .5-6.5 1.3-9C37 32 38 30 38 26c0-5-3-8-7-8-2.7 0-3.8 1.2-5.5 2-.9.4-1.4.7-2.5.7s-1.6-.3-2.5-.7C19 19.2 17.7 18 22 18z" fill="#0a6cb8" opacity="0.18" stroke="#0a6cb8" strokeWidth="1.6"/>
    <circle cx="55" cy="48" r="16" fill="#fff" stroke="#0a6cb8" strokeWidth="2"/>
    <path d="M55 38v10l8 5" stroke="#0a6cb8" strokeWidth="2.2" strokeLinecap="round"/>
    <circle cx="55" cy="48" r="1.4" fill="#0a6cb8"/>
  </svg>
);

// Hero illustration — tooth + shield + check badge. Used in the
// hero's right column on mobile when the form sits below.
export const HeroIllustration = ({ height = 220 }: { height?: number }) => (
  <svg viewBox="0 0 360 240" width="100%" height={height} preserveAspectRatio="xMidYMid meet">
    <ellipse cx="180" cy="200" rx="160" ry="20" fill="#0a6cb8" opacity="0.06"/>
    <path d="M180 30c-30 12-60 16-78 14v60c0 60 50 96 78 110 28-14 78-50 78-110V44c-18 2-48-2-78-14z"
          fill="#cfe4f4" stroke="#0a6cb8" strokeWidth="2.5"/>
    <g transform="translate(150 70)">
      <path d="M14 0C6 0 0 6 0 16c0 8 3 12 5.5 19s1 12 2.5 20c1.6 8 3.7 14 7 14 3.6 0 4.1-8 5.8-13.4C22 50 23.5 48 26 48s4 2 5.2 7.6C32.9 61 33.4 69 37 69c3.3 0 5.4-6 7-14 1.5-8 0-13 2.5-20S52 24 52 16C52 6 46 0 38 0c-5.5 0-7.8 2.5-11 4-1.8 1-2.8 1.6-5 1.6S19.7 5 18 4c-3-1.5-5.3-4-9-4z"
            fill="#fff" stroke="#0a6cb8" strokeWidth="2"/>
      <path d="M40 14l1.5 4 4 1.5-4 1.5L40 25l-1.5-4-4-1.5 4-1.5z" fill="#f5b400"/>
    </g>
    <g transform="translate(248 168)">
      <circle cx="0" cy="0" r="22" fill="#2e9c6b"/>
      <path d="M-9 0l6 6 12-12" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </g>
    <g transform="translate(80 70)">
      <path d="M0-8l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" fill="#f5b400"/>
    </g>
  </svg>
);

// Map by service slug, so the homepage can render the right
// illustration for each services.ts entry without hard-coding.
export const artForSlug = (slug: string) => {
  switch (slug) {
    case 'severe-toothache':       return ToothPain;
    case 'broken-or-chipped-tooth': return ToothBroken;
    case 'lost-filling-or-crown':  return ToothCrown;
    case 'wisdom-tooth-pain':      return ToothExtract;
    case 'dental-abscess':         return ToothInfect;
    case 'knocked-out-tooth':      return ToothKnocked;
    case 'out-of-hours':           return ToothClock;
    default:                       return ToothPain;
  }
};
