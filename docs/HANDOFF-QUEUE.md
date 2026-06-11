# Handoff queue — emergencydentistsenfield

Dated run-blocks from the `ede-emergency-writer` scheduler and any build handoffs.
Most recent at the bottom.

## 2026-06-10 — writer run (ede-emergency-writer)

- Site: emergencydentistsenfield
- Spoke written: `what-to-do-if-you-break-a-tooth`
- Hub: broken-chipped-tooth-enfield (H3 — broken, chipped or cracked tooth)
- Service pillar referenced: broken-or-chipped-tooth
- draft: true (parked for human YMYL review before publisher flips it live)
- Words: ~1,050 body; 5 FAQs; safe first-aid lead + 999/A&E/NHS 111 line
- Enfield substance: EN1/EN2/EN3 postcodes, Enfield Town, Bush Hill Park,
  Enfield Highway, Ponders End, Brimsdown, Edmonton, Palmers Green; North
  Middlesex University Hospital A&E (Edmonton, N18), Chase Farm UTC (not full
  A&E), Barnet Hospital A&E, NHS 111 routing. Original, not paraphrased from
  the Harlow sibling.
- Schema: Article + MedicalWebPage + BreadcrumbList + FAQPage auto-emitted by
  app/blog/[slug] from the entry; author @id = EDE editorial entity.
- tsc: `npx tsc --noEmit` clean.
- Buffer (unpublished drafts): 1. Total spokes mapped: 5 (4 live + 1 draft).
- Next round-robin candidate hub: H4 (lost-filling-or-crown-enfield), still 0 spokes.

### Environment note (needs attention)

This run hit a sandbox sync fault: file-tool (Edit/Write) writes to data/blog.ts
did not flush fully to the shared filesystem (the bash/git view saw a truncated
file ending mid-string). Worked around by rebuilding blog.ts in place from the
pristine `git show HEAD:data/blog.ts` plus the new entry, written via bash, then
tsc-verified. A leftover sentinel `data/_sync_test.txt` (20 bytes, untracked)
could not be removed from the sandbox (rm: Operation not permitted); delete it
manually. Not staged, so it is not in the commit.

### Git status for this run: COMMIT BLOCKED (sandbox permission fault)

`npx tsc --noEmit` is clean and the three files are correct on disk and STAGED
(`git add` succeeded: M data/blog.ts, A docs/SILO-PLAN.md, A docs/HANDOFF-QUEUE.md).
`git commit` could NOT complete: the sandbox denies unlink inside `.git`
(`.git/index.lock` and `.git/objects/tmp_obj_*` cannot be removed —
"Operation not permitted"), leaving a stale `.git/index.lock` that blocks the
commit. No commit hash; nothing pushed to main.

ACTION FOR NEXT CLAUDE CODE SESSION (has real git access): remove the stale
`.git/index.lock`, then `git commit` the already-staged changes and push to main.
The content itself needs no rework — it is tsc-clean and review-ready (draft).
Also delete the stray untracked `data/_sync_test.txt`.

## 2026-06-10 — writer run (ede-emergency-writer)

- Site: emergencydentistsenfield
- Spoke written: `lost-filling-first-aid`
- Hub: lost-filling-or-crown-enfield (H4 — lost filling or crown)
- Service pillar linked: lost-filling-or-crown (inline body link)
- draft: true (parked for human YMYL review before publisher flips it live)
- Words: ~1,276 (body + 5 FAQs + excerpt); safe first-aid lead + a clear
  999 / A&E / NHS 111 escalation note. 5 sections, 5 distinct FAQs.
- Distinct intent vs hub: filling-specific first aid (clean the cavity, safe
  temporary measures, sensitivity, the urgency ladder by symptom). Does NOT
  repeat the hub's crown re-cementing / repair-kit-limits / swallowed-crown angles.
- Internal silo links (inline, via new renderText markdown-link parser):
  UP to /guides/lost-filling-or-crown-enfield/ (varied anchor), sideways to the
  adjacent H5 hub /guides/dental-abscess-enfield/, pillar /services/lost-filling-or-crown/,
  and a location link /location/enfield-town/. Plus chrome hub up-link + matching CTA.
- Enfield substance: EN1/EN2 (Enfield Town, Bush Hill Park), EN3 (Enfield Highway,
  Ponders End), Edmonton, Palmers Green; North Middlesex University Hospital A&E
  (Edmonton), Chase Farm UTC (not full A&E), NHS 111 routing. Original, not
  paraphrased from the Harlow sibling.
- External authority: Oral Health Foundation named in-prose (no contradiction of
  NHS first-aid guidance). Testimonials untouched (empty). Author = EDE entity.
- Schema: Article + MedicalWebPage + BreadcrumbList + FAQPage auto-emitted by
  app/blog/[slug] from the entry; author @id = EDE editorial entity.
- Code change: added a backward-compatible inline-link parser (`renderText`) to
  app/blog/[slug]/ClientPage.tsx so spoke body prose can carry internal silo
  links. Plain text with no [label](/path/) token renders unchanged.
- tsc: `npx tsc --noEmit` clean.
- Buffer (unpublished drafts): 2. Total spokes mapped: 6 (4 live + 2 draft).
- Next round-robin candidate hub: H6 (wisdom-tooth-emergency-enfield), still 0 spokes.

### Environment note (recurring sandbox fault)

Same fault as the earlier 2026-06-10 run: the file-edit tool truncated large
writes (data/blog.ts and app/blog/[slug]/ClientPage.tsx each ended mid-string
on the shared filesystem). Worked around by rebuilding both files in place via
bash — pristine head from `git show HEAD:<file>` plus the new content — then
tsc-verified clean. A stray untracked `data/_sync_test.txt` (20 bytes) and a
stale `.git/index.lock` (0 bytes) persist and CANNOT be removed from the sandbox
(`rm: Operation not permitted` inside `.git` and on the sentinel).

### Git status for this run: COMMIT BLOCKED (sandbox permission fault)

`git add` fails: `fatal: Unable to create .git/index.lock: File exists`, and the
lock cannot be unlinked from the sandbox. So nothing was staged, committed, or
pushed. No commit hash. The two changed files are correct on disk and tsc-clean:
  M app/blog/[slug]/ClientPage.tsx   (renderText inline-link parser)
  M data/blog.ts                     (new draft spoke `lost-filling-first-aid`)
Docs updated on disk: docs/SILO-PLAN.md (section 8 counts), docs/HANDOFF-QUEUE.md.

ACTION FOR NEXT CLAUDE CODE SESSION (real git access): remove the stale
`.git/index.lock`, then commit the changes and push to main. Suggested message:
`Add draft lost-filling first-aid spoke (H4) + inline-link renderer`. Content is
review-ready (draft); no rework needed. Also delete stray `data/_sync_test.txt`.
