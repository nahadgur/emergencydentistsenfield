// middleware.ts
//
// Two responsibilities:
//
// 1. Canonical-host enforcement (301 apex to www). Without this, the
//    GSC "URL not allowed for a Sitemap at this location" error fires:
//    Google fetches the sitemap from one host and finds URLs for the
//    other host inside, so it rejects every entry. The site canonical
//    is www.emergencydentistsenfield.co.uk; the bare apex 301s here.
//    Submit the sitemap in GSC at the www property only.
//
// 2. Cull-and-deepen 410 infrastructure. Currently no culls configured —
//    the site is brand new. When pages are retired, add their slugs to
//    the appropriate set below to start returning HTTP 410 with a
//    branded HTML body.
//
//    410 is more decisive than 404 — Google drops 410s from the index
//    promptly, while 404s sit in soft-404 limbo for weeks.
//
//    DO NOT redirect retired URLs to / — that creates the soft-404
//    problem (every dead URL looks like a duplicate of the homepage).

import { NextRequest, NextResponse } from 'next/server';

const CANONICAL_HOST = 'www.emergencydentistsenfield.co.uk';
const APEX_HOST = 'emergencydentistsenfield.co.uk';

// Add slugs here as pages are retired.
const REMOVED_AREA_SLUGS = new Set<string>([]);
const REMOVED_SERVICE_SLUGS = new Set<string>([]);

const GONE_HTML = `<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="robots" content="noindex,nofollow" />
<title>Page no longer available</title>
<style>
  *,*::before,*::after{box-sizing:border-box}
  html,body{margin:0;padding:0;background:#fafaf6;color:#0f172a;font-family:'Inter',system-ui,sans-serif;-webkit-font-smoothing:antialiased}
  .wrap{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:32px 20px;text-align:center}
  .num{font-family:'Source Serif 4',Georgia,serif;font-weight:600;font-size:clamp(96px,18vw,200px);line-height:1;color:#0284c7;letter-spacing:-.02em;margin-bottom:8px}
  .eyebrow{font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:rgba(15,23,42,.55);margin:0 0 24px;font-weight:500}
  h1{font-family:'Source Serif 4',Georgia,serif;font-weight:600;font-size:clamp(28px,5vw,48px);line-height:1.05;margin:0 0 20px;max-width:36ch}
  p{font-size:clamp(15px,1.6vw,17px);line-height:1.7;color:rgba(15,23,42,.7);max-width:60ch;margin:0 auto 36px}
  .btns{display:flex;flex-wrap:wrap;gap:12px;justify-content:center}
  a.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 24px;border-radius:6px;font-weight:600;font-size:14px;text-decoration:none;transition:all .15s}
  a.primary{background:#0369a1;color:#fff}
  a.primary:hover{background:#075985}
  a.secondary{border:1px solid rgba(15,23,42,.25);color:#0f172a}
  a.secondary:hover{background:#0f172a;color:#fff}
</style>
</head>
<body>
<main class="wrap">
  <div class="num">410</div>
  <div class="eyebrow">Page no longer available</div>
  <h1>This page has been retired</h1>
  <p>The page you were looking for is no longer part of the site. The matching service is still running &mdash; pick a destination below and we&rsquo;ll help you find a vetted Enfield emergency dentist.</p>
  <div class="btns">
    <a class="btn primary" href="/">Go to homepage <span aria-hidden="true">&rarr;</span></a>
    <a class="btn secondary" href="/services/">Browse emergencies</a>
    <a class="btn secondary" href="/location/">Browse Enfield areas</a>
  </div>
</main>
</body>
</html>`;

function gone() {
  return new NextResponse(GONE_HTML, {
    status: 410,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'x-robots-tag': 'noindex, nofollow',
      'cache-control': 'public, max-age=86400',
    },
  });
}

export function middleware(req: NextRequest) {
  // Strip the port if present (e.g. when running locally on :3000).
  const host = (req.headers.get('host') || '').toLowerCase().split(':')[0];

  // 1. Canonical-host enforcement. Only runs on the production apex
  //    host; leaves localhost and Vercel preview deploys alone.
  if (host === APEX_HOST) {
    const url = req.nextUrl.clone();
    url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, 301);
  }

  // 2. 410 handling for retired pages.
  const { pathname } = req.nextUrl;

  const areaMatch = pathname.match(/^\/location\/([^\/]+)\/?$/);
  if (areaMatch && REMOVED_AREA_SLUGS.has(areaMatch[1])) {
    return gone();
  }

  const serviceMatch = pathname.match(/^\/services\/([^\/]+)\/?$/);
  if (serviceMatch && REMOVED_SERVICE_SLUGS.has(serviceMatch[1])) {
    return gone();
  }

  return NextResponse.next();
}

// Matcher must cover everything except Next.js internals and static
// assets — in particular it MUST cover /sitemap.xml, /robots.txt, and
// / so the canonical-host redirect fires on those paths too. That's
// the whole point of the sitemap-host fix.
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|favicon-|apple-touch|images/|fonts/|api/).*)',
  ],
};
