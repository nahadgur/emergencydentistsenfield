# Emergency Dentist Enfield (emergencydentistsenfield) — silo plan

Niche: emergency dentistry, Enfield. Independent **matching** service ("same-day
matching with vetted Enfield emergency dentists"; does not treat). Domain
emergencydentistsenfield.co.uk. YMYL health site (urgent care) -> accuracy and safe
first-aid framing are the bar. UK English. No `/guides` route yet: services
`/services/[serviceSlug]/`, locations `/location/[area]/`, blog `/blog/[slug]/`.
Build a `/guides/[slug]/` hub layer.

Status: 7 emergency-type service pillars, 21 locations, 4 blog spokes, no hubs. Build:
a 10-hub `/guides` layer + draft gate + spoke buildout (quality-gated; narrow niche).
Testimonials array EMPTY (keep it). partners.ts lists "Enfield Smiles" — VERIFY it is
a real GDC-registered practice with an agreement, or remove (fabricated partner = DMCCA
+ YMYL risk).

## 0. Thin-content + safety caveats

Emergency dentistry is a narrow niche; 100 distinct spokes is ambitious. Target ~8/hub
(~80) of genuinely distinct intents; the writer STOPS a hub when it can only repeat
itself. YMYL safety: every emergency spoke leads with safe first-aid and a clear
"when to call 999 / go to A&E / call NHS 111" line; no diagnosis, no treatment
guarantees; matching framing (we connect you with a vetted dentist fast).

## 1. Cross-domain rule

Sibling of emergencydentistsharlow (same service, different town). Different SERP, but
every page must be Enfield-specific (EN postcodes, Enfield areas, local NHS 111 / A&E
routing, London Borough of Enfield). NEVER paraphrase the Harlow site.

## 2. Reserved head terms (not targeted by hubs/spokes)

| Reserved | Owned by |
|---|---|
| emergency dentist Enfield | Homepage + services index |
| emergency dentist [area] (Edmonton, Palmers Green...) | `/location/[area]/` |
| each emergency-type head term (toothache, knocked-out tooth, abscess...) | the matching `/guides/` hub |

## 3. The ten pillar hubs (/guides), aligned to the 7 service pillars

| ID | Hub | Service pillar |
|---|---|---|
| H1 | Severe toothache and dental pain | severe-toothache |
| H2 | Knocked-out / dislodged tooth | knocked-out-tooth |
| H3 | Broken, chipped or cracked tooth | broken-or-chipped-tooth |
| H4 | Lost filling or crown | lost-filling-or-crown |
| H5 | Dental abscess and infection | dental-abscess |
| H6 | Wisdom tooth and gum emergencies | wisdom-tooth-pain |
| H7 | Out-of-hours, NHS 111 and emergency access in Enfield | out-of-hours |
| H8 | What counts as a dental emergency (triage) | (cross all) |
| H9 | Children's dental emergencies | (cross all) |
| H10 | Bleeding, swelling, broken dentures and other emergencies | (cross all) |

## 4. Spoke fan-out (~8/hub, Enfield + safe first-aid framed)

- **H1 toothache:** managing severe toothache before you're seen (exists); what causes sudden toothache; toothache at night; painkillers that help (and limits); toothache vs abscess (cross H5); when toothache is an emergency.
- **H2 knocked-out:** the first 60 minutes (exists); how to store a knocked-out tooth; can a knocked-out tooth be saved; knocked-out baby tooth (cross H9); partially dislodged tooth.
- **H3 broken/chipped:** what to do for a broken tooth; chipped tooth, is it urgent; cracked tooth pain; broken tooth with no pain; temporary fixes before your appointment.
- **H4 lost filling/crown:** what to do if a filling falls out; lost crown first aid; temporary crown-repair kits (and limits); is a lost filling an emergency; swallowed a crown.
- **H5 abscess:** recognising an abscess vs toothache (exists); abscess warning signs; when an abscess is an emergency (facial swelling, fever); can an abscess be dangerous; antibiotics and abscesses.
- **H6 wisdom tooth:** wisdom tooth pain relief; pericoronitis; impacted wisdom tooth emergency; dry socket after extraction; swollen gum at the back.
- **H7 out-of-hours:** NHS vs private emergency dental in Enfield (exists); NHS 111 for dental emergencies; out-of-hours dental access in Enfield; emergency dental cost in Enfield; what to do at the weekend / bank holiday; when to go to A&E vs a dentist.
- **H8 triage:** what counts as a dental emergency; dental emergency vs urgent vs routine; when to call 999; can you go to A&E for a tooth; signs you need same-day care.
- **H9 children:** child knocked-out tooth; child toothache at night; child chipped tooth; teething vs emergency; when a child's dental injury needs A&E.
- **H10 other:** uncontrolled bleeding after extraction; facial swelling; broken denture repair; orthodontic emergencies (broken brace/wire); object stuck between teeth.

## 5. Architecture prerequisite (Claude Code, before the writer runs)

1. Build a `/guides/[slug]/` route + `data/guides.ts` with the 10 hubs; align each to
   its service pillar; hub pages render a child-spoke grid by `hub`. Add Guides to nav
   + sitemap.
2. `data/blog.ts`: add `hub: string` + `draft: boolean` (keep/fold the category enum);
   set `hub` on the 4 existing spokes. Draft gate: draft:true 404s, excluded from
   /blog, hub grids, sitemap.
3. Schema: Article/MedicalWebPage + BreadcrumbList + FAQPage on hubs + spokes, author
   `@id` to the editorial entity, datePublished + dateModified.
4. Author byline = "EDE" (Emergency Dentist Enfield), an editorial entity `@id` (no
   invented person). Keep testimonials empty.
5. VERIFY or remove the partners.ts entry ("Enfield Smiles").

## 6. Internal-linking rules (silo-tight, within-site)

- Each spoke links UP once to its hub, to its `/services/<serviceSlug>/` pillar (and a
  `/location/<area>/` page where local), plus the same-day matching CTA.
- Hubs link down to spokes + their service pillar; sideways to 1-2 adjacent hubs
  (H1<->H5 toothache/abscess, H2<->H9, H6<->H7, H8 links to all).
- External: max 2/page, one per domain, cite a named authority (NHS 111 / NHS dental,
  British Dental Association, Oral Health Foundation) first mention; attribute clinical
  claims; never contradict NHS first-aid guidance.

## 7. Automation (schedulers, mirror essexdental)

- **`ede-emergency-writer`** (writer): one Enfield + safe-first-aid-framed spoke per
  run, draft:true, under the right hub, schema + up-link + pillar/location link +
  matching CTA. STOP a hub when repetitive (section 0); never duplicate the Harlow
  site. Created DISABLED until section 5 exists.
- **`ede-emergency-publisher`** (publisher): flips the oldest parked draft live 2/week;
  enable AFTER a human-reviewed batch (YMYL urgent-care content needs review).

## 8. Status tracker

10 hubs live (/guides). Spokes: 11 mapped (4 live + 7 draft buffered), target ~80
(~8/hub), quality-gated. Every hub H1-H10 now has at least one spoke. Last writer
run 2026-06-13: added H1 second spoke `sudden-toothache-causes` (draft, causes
intent, distinct from the existing management/pain-relief spoke). Round-robin pass
two continues at H2 (second spoke per hub, distinct intents only).
## Slug rules (writer: follow on every spoke)

Kebab-case: lowercase, hyphens only, ASCII only, 3-6 words, under ~60 chars.
Do NOT: include a year/date; reuse or near-duplicate an existing slug; use a
reserved head term or the parent hub's head term; keyword-stuff or repeat a word;
use stop words (a/the/to/for). Never rename or reuse a published slug.
