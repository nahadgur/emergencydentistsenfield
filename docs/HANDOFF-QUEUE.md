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
