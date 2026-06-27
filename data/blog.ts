// data/blog.ts
// Hand-written blog content. Start small (4 posts) and add as you go.
// Every post is reviewed for clinical accuracy — YMYL niche, Google's
// E-E-A-T bar is high, generic AI-generated content is an active liability.

export interface ContentBlock {
  type: 'p' | 'h2' | 'h3' | 'list' | 'note';
  text?: string;
  items?: string[];
}

export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: 'Emergency basics' | 'Trauma & first aid' | 'Pain management' | 'Local';
  /** Parent guide-hub slug. */
  hub: string;
  /** draft:true 404s and is excluded from /blog, hub grids and the sitemap. */
  draft: boolean;
  publishDate: string;
  /** Optional last-reviewed date; falls back to publishDate in schema. */
  updatedDate?: string;
  excerpt: string;
  faqs?: { question: string; answer: string }[];
  content: ContentBlock[];
}

export const blogArticles: BlogArticle[] = [
  {
    slug: 'what-to-do-if-you-knock-out-a-tooth',
    hub: 'knocked-out-tooth-enfield',
    draft: false,
    title: 'What to do if you knock out a tooth: the first 60 minutes',
    metaTitle: 'Knocked-out Tooth: First 60 Minutes Guide (UK)',
    metaDescription:
      'Step-by-step guide for what to do in the first hour after a knocked-out adult tooth. How to pick up, store, and re-implant for the best chance of saving the tooth.',
    category: 'Trauma & first aid',
    publishDate: '2026-05-04',
    excerpt:
      'A knocked-out adult tooth is one of the few true dental emergencies where every minute counts. Here is exactly what to do in the first 60 minutes, and what to avoid.',
    content: [
      { type: 'p', text: 'A completely knocked-out adult permanent tooth (an "avulsion" in clinical terms) is one of the few dental emergencies where the first 60 minutes determine the outcome. The cells on the root surface that allow the tooth to re-attach to the jaw bone start dying within minutes of being out of the socket. By 30 minutes the success rate is dropping. By 60 minutes it has dropped sharply. By two hours, long-term success is rare.' },
      { type: 'p', text: 'The good news: re-implantation is straightforward in concept. A correctly preserved adult tooth, brought to a dentist within the hour, has an excellent chance of long-term survival. Here is exactly what to do.' },

      { type: 'h2', text: 'Step 1: Pick up the tooth correctly' },
      { type: 'p', text: 'Pick up the tooth by the crown — the white biting part you see in the mouth. Do NOT touch the root (the yellower, narrower part that was inside the gum). The cells on the root surface are exactly what make re-attachment possible, and they are easily damaged by handling.' },
      { type: 'p', text: 'If the tooth is dirty (covered in soil, blood, debris), rinse it briefly — under 10 seconds — in milk or saliva. Do not use water. Water is hypotonic relative to the cells on the root surface, which means it draws water into the cells and damages them by osmotic pressure. Milk and saliva have the right osmotic balance.' },

      { type: 'h2', text: 'Step 2: Re-insert the tooth into the socket if you can' },
      { type: 'p', text: 'If the patient is alert and you can do it without forcing, push the tooth gently back into the socket where it came from. It should slot in with mild pressure. Have the patient bite gently on a clean cloth or gauze to hold it in place during transport.' },
      { type: 'p', text: 'Re-implantation in the socket is the best preservation method by a wide margin. The natural socket environment maintains the cell viability better than any storage medium.' },

      { type: 'h2', text: 'Step 3: If you cannot re-insert, store correctly' },
      { type: 'p', text: 'Where re-insertion is not practical (a child too distressed, the patient unconscious or unable to cooperate, the tooth visibly fractured), store the tooth in:' },
      { type: 'list', items: [
        'Cold milk — best practical storage medium. Most households have it.',
        'The patient\'s own saliva — store the tooth inside the cheek pouch (NOT for small children who might swallow it).',
        'Saline solution — if you happen to have contact lens saline, this works too.',
      ] },
      { type: 'p', text: 'Avoid: water, dry tissue, bare hands. All damage the root cells.' },

      { type: 'h2', text: 'Step 4: Get to a dentist within the hour' },
      { type: 'p', text: 'Submit our matching form marked "knocked-out tooth" or call NHS 111 if you are out of normal hours. Avulsion calls bypass any normal queueing in our matching service — we aim to confirm a Enfield practice within 15 minutes during opening hours.' },
      { type: 'p', text: 'The dentist will clean the tooth and socket, re-implant if not already in place, splint the tooth to its neighbours for 1–2 weeks, prescribe antibiotics, and check tetanus status. Follow-up appointments monitor whether the tooth is taking root or being rejected.' },

      { type: 'h2', text: 'A different rule for baby teeth' },
      { type: 'p', text: 'If a child knocks out a baby (deciduous) tooth, do NOT try to re-insert it. Re-implanting a baby tooth risks damaging the developing adult tooth in the bone underneath. The child still needs an emergency dental check — the dentist will examine the socket for retained fragments, check for damage to the adult tooth bud, and manage pain. Bring the tooth so the dentist can confirm it is whole.' },

      { type: 'note', text: 'This guide is for adult permanent teeth. For children\'s baby teeth, do not re-insert — see a dentist for assessment but leave the tooth out.' },

      { type: 'h2', text: 'What if the tooth has been out for more than two hours?' },
      { type: 'p', text: 'Long-term success is rare beyond two hours, but not impossible — especially if the tooth was preserved in milk for some of that time. Bring the tooth in any case. The dentist will assess and either re-implant with realistic expectations or discuss replacement options (implant, bridge, or denture). A late-presented avulsion is still better managed by a dentist than left.' },
    ],
  },

  {
    slug: 'managing-severe-toothache-before-you-can-be-seen',
    hub: 'severe-toothache-enfield',
    draft: false,
    title: 'Managing severe toothache before you can be seen',
    metaTitle: 'Severe Toothache: Pain Relief Guide Before Dentist',
    metaDescription:
      'Practical guide to managing severe toothache while waiting for an emergency dental appointment in Enfield. Painkillers, what to avoid, when to seek urgent care.',
    category: 'Pain management',
    publishDate: '2026-05-04',
    excerpt:
      'Severe toothache rarely settles overnight. Here is what works to manage it while you wait for the matched dentist appointment — and what to avoid.',
    content: [
      { type: 'p', text: 'Severe toothache is one of the worst pains in dentistry. Throbbing, constant, often worse when lying down, sometimes radiating to the jaw and ear. Most patients reach for whatever painkiller is in the bathroom cabinet, take whatever the packet says, and find it does not touch the pain. There is a better approach.' },

      { type: 'h2', text: 'Combine ibuprofen and paracetamol' },
      { type: 'p', text: 'The single most effective over-the-counter approach for severe toothache is to take ibuprofen and paracetamol together. They work on different pain pathways — ibuprofen reduces inflammation, paracetamol blocks pain signals centrally — and the combined effect is materially greater than either alone. Adult dosing:' },
      { type: 'list', items: [
        'Ibuprofen 400mg every 6 hours (maximum 1200mg per day OTC; a doctor can prescribe higher)',
        'Paracetamol 1000mg every 4–6 hours (maximum 4000mg per day)',
        'You can take both at the same time, or stagger them — both work',
      ] },
      { type: 'p', text: 'This combination is not magic — it will not work as well as a dentist actually treating the cause — but it makes the wait considerably more bearable. Check the packets for any contraindications and do not exceed the stated doses.' },

      { type: 'h2', text: 'What to avoid' },
      { type: 'list', items: [
        'Aspirin against the gum — the old myth. Aspirin is acidic and burns soft tissue. It does nothing for the tooth and produces a chemical ulcer.',
        'Whisky against the tooth — alcohol mucosal application briefly numbs but the underlying pain returns intensified.',
        'Hot food and drink — heat dilates the inflamed pulp tissue and increases pain dramatically.',
        'Very cold food and drink — for the same reason, cold can spike pain in an inflamed tooth.',
        'Lying flat — gravity reduces blood flow to the head and reduces throbbing pain. Sleep with two or three pillows propping you up.',
      ] },

      { type: 'h2', text: 'Things that help mildly' },
      { type: 'list', items: [
        'Warm (not hot) salt-water rinses — a teaspoon of salt in a cup of warm water, rinsed several times. Particularly helpful where there is gum swelling.',
        'Clove oil dabbed sparingly on the tooth using a cotton bud — eugenol in clove oil has mild local anaesthetic effect. Do not swallow.',
        'Cold compress on the cheek (not directly on the tooth) — for visible facial swelling.',
      ] },

      { type: 'h2', text: 'When to escalate beyond the matching service' },
      { type: 'p', text: 'Call NHS 111 (free, 24/7) or 999 if you have any of:' },
      { type: 'list', items: [
        'Facial swelling spreading towards your eye, throat, or neck',
        'Difficulty swallowing or breathing',
        'High fever (over 38.5°C) with shaking chills',
        'Generally feeling very unwell — disoriented, severely fatigued',
      ] },
      { type: 'p', text: 'Spreading orofacial infection is a medical emergency requiring hospital admission, not a paid private dental visit. The matching service is for dental-only emergencies; call 111 or 999 for spreading infection signs.' },

      { type: 'h2', text: 'Why the dentist visit matters even after symptoms settle' },
      { type: 'p', text: 'Severe toothache that "settles by itself" is rarely good news. Most often it means the nerve has died and stopped sending pain signals, while the underlying decay or infection is still progressing, just silently. Three weeks later it returns as an abscess or facial swelling. The matching service introduces you to a dentist who will diagnose the cause whether the pain has settled or not. If the ache came on out of nowhere, our guide to [the common causes of sudden toothache](/blog/sudden-toothache-causes/) explains what is usually behind it.' },
    ],
  },

  {
    slug: 'nhs-vs-private-emergency-dental-enfield',
    hub: 'out-of-hours-emergency-dentist-enfield',
    draft: false,
    title: 'NHS vs private emergency dental in Enfield: the practical difference',
    metaTitle: 'NHS vs Private Emergency Dentist in Enfield (2026)',
    metaDescription:
      'Practical comparison of NHS and private emergency dental access in Enfield. Costs, waiting times, what is and is not covered, and how to use NHS 111.',
    category: 'Local',
    publishDate: '2026-05-04',
    excerpt:
      'Enfield has both NHS and private emergency dental routes. Here is how to choose between them based on your situation, urgency, and cost preference.',
    content: [
      { type: 'p', text: 'When you need an emergency dentist in Enfield, you have two parallel options: the NHS emergency dental service (accessed via NHS 111) and private emergency appointments (accessed via direct booking or our matching service). Most people don\'t know there is a choice, or assume "NHS for free" is always better. The reality is more nuanced.' },

      { type: 'h2', text: 'NHS emergency dental — how it works in Enfield' },
      { type: 'p', text: 'The NHS emergency dental pathway is via NHS 111 (free, 24/7). You call 111, describe your symptoms, and the operator either books you an emergency appointment with a dentist on the local out-of-hours rota or refers you to a clinic with NHS emergency capacity that day. The cost is fixed at the NHS Band 1 rate of £27.40 in 2026 for the consultation and any urgent treatment to relieve pain.' },
      { type: 'p', text: 'The catch: the NHS emergency rota covers a wide geographic area, not just Enfield. The dentist you see may be in Edmonton, Wood Green, or further afield in north London. Saturday and Sunday slots are particularly limited — the rota is staffed by whoever is on call, not by your usual practice. And NHS 111 may take 30–60 minutes to call back during busy periods, which feels long when you are in pain.' },

      { type: 'h2', text: 'Private emergency dental — how it works in Enfield' },
      { type: 'p', text: 'Private emergency appointments are booked either by calling round Enfield practices yourself or via a matching service like ours. Cost is higher — typically £80–£150 for the consultation alone, with treatment costed on top. But you choose the practice (we recommend based on your situation), you typically get the same dentist who would treat you as a regular patient, and out-of-hours slots (Saturday morning, Sunday) are more accessible.' },
      { type: 'p', text: 'The matching service exists because calling round is slow. A typical patient calls 5–8 Enfield practices on a Saturday morning before finding one with a slot — by which point the morning is gone. A matching service that already knows current capacity confirms a slot in 30–60 minutes.' },

      { type: 'h2', text: 'Which to choose: a practical guide' },
      { type: 'p', text: 'Use NHS 111 when:' },
      { type: 'list', items: [
        'Cost is the primary constraint',
        'Your symptoms are clear-cut (severe pain, abscess, knocked-out tooth) — the NHS pathway handles textbook emergencies well',
        'You can travel to wherever the rota dentist is located',
        'You are willing to wait for the call-back and the assigned slot',
      ] },
      { type: 'p', text: 'Use private emergency matching (or call private practices directly) when:' },
      { type: 'list', items: [
        'You need a specific Enfield location (mobility, no transport, child to collect)',
        'You want the same dentist for follow-up treatment, not a one-off rota dentist',
        'You need a Saturday or Sunday slot and NHS 111 has no rota slot available',
        'Your situation is sub-emergency (lost filling, mild ache) where NHS 111 will rightly tell you to wait until Monday',
        'You can absorb the higher consultation cost in exchange for speed and choice',
      ] },

      { type: 'h2', text: 'When the choice does not matter' },
      { type: 'p', text: 'For genuine medical emergencies — uncontrolled bleeding, facial swelling spreading to eye/throat/neck, breathing difficulty — neither NHS dental nor private dental is the right route. Call 999 or NHS 111 (medical, not dental). These are hospital problems requiring IV antibiotics and sometimes surgical drainage, not outpatient dental care.' },

      { type: 'h2', text: 'A note on NHS dental availability in Enfield generally' },
      { type: 'p', text: 'NHS dental access in Enfield has been under pressure for several years — many practices have NHS list closures, and routine NHS registration with a Enfield dentist can be difficult. Emergency NHS access via 111 is separate from this — the rota slots exist for genuine emergencies whether or not you are registered NHS with anyone. Use NHS 111 without hesitation if your situation fits.' },
    ],
  },

  {
    slug: 'recognising-a-dental-abscess-vs-routine-toothache',
    hub: 'dental-abscess-enfield',
    draft: false,
    title: 'Recognising a dental abscess vs routine toothache',
    metaTitle: 'Dental Abscess vs Toothache: Symptoms Guide',
    metaDescription:
      'How to tell a dental abscess from routine toothache. Warning signs, when to call 999 or NHS 111, and what an emergency dentist will do for an abscess.',
    category: 'Emergency basics',
    publishDate: '2026-05-04',
    excerpt:
      'Most toothache is just toothache. A dental abscess is a different category, the same underlying problem (infection) but with the potential to escalate fast. Here are the warning signs.',
    content: [
      { type: 'p', text: 'Most toothache is uncomfortable but not dangerous. A dental abscess is uncomfortable AND can become dangerous — the same underlying pathology (bacterial infection of the pulp or surrounding tissue) but with a meaningful risk of spreading to facial spaces where it becomes a hospital problem rather than a dental one. Telling the difference matters.' },

      { type: 'h2', text: 'Routine toothache — typical features' },
      { type: 'list', items: [
        'Sharp pain triggered by hot, cold, or sweet food and drink, settling within seconds of removing the trigger',
        'Mild constant ache that responds reasonably to over-the-counter painkillers',
        'No swelling — the gum and face look normal',
        'No bad taste or visible pus',
        'You feel generally well — no fever, no fatigue beyond what the pain causes',
      ] },
      { type: 'p', text: 'Routine toothache is usually pulpitis (inflamed nerve), early decay, or a cracked tooth. It needs a dentist within days but is not an immediate threat to your wellbeing. Manage with painkillers and see a dentist at the earliest sensible appointment.' },

      { type: 'h2', text: 'Dental abscess — typical features' },
      { type: 'list', items: [
        'Constant throbbing pain, often worse when lying down (gravity drains pus from the area when upright)',
        'Pain that does not respond fully to over-the-counter painkillers',
        'Visible gum swelling — a localised "boil" near a specific tooth, sometimes with a white pus head',
        'Bad taste in the mouth, often intermittent (the abscess discharges and refills)',
        'Mild facial swelling on the affected side',
        'Sometimes mild fever or general unwellness',
      ] },
      { type: 'p', text: 'A localised abscess is urgent — same-day matching — but rarely dangerous if seen promptly. The dentist drains the abscess, treats the underlying tooth (root canal or extraction), and prescribes antibiotics if appropriate. Pain relief is usually immediate.' },

      { type: 'h2', text: 'Spreading infection — the medical-emergency category' },
      { type: 'p', text: 'A small subset of dental abscess presentations escalate to spreading infection of the facial spaces. This is a hospital problem, not a dental one. Call 999 or NHS 111 — not a dentist — if you have any of:' },
      { type: 'list', items: [
        'Facial swelling extending towards your eye (preseptal or orbital cellulitis)',
        'Swelling spreading down towards the throat or neck (Ludwig\'s angina)',
        'Any difficulty swallowing — feels like there is something in your throat',
        'Any difficulty breathing — even mild',
        'Difficulty fully opening your mouth (severe trismus)',
        'High fever (over 38.5°C) with shaking chills',
        'Generally feeling very unwell — confused, severely tired, dizzy on standing',
      ] },
      { type: 'p', text: 'These presentations need IV antibiotics in hospital, sometimes airway protection, and urgent surgical drainage. They are uncommon — most dental abscesses do not progress this far — but when they do, the progression is fast and the outcome depends on early hospital admission. The matching service will tell you immediately if your symptoms suggest hospital care rather than dental care.' },

      { type: 'h2', text: 'What about antibiotics from a GP?' },
      { type: 'p', text: 'GPs are increasingly reluctant to prescribe antibiotics for dental abscess because antibiotics alone do not cure the infection — the source (the dead nerve, the infected socket) is still present, and the abscess returns once the antibiotic course finishes. Only the dentist can address the source through drainage and definitive treatment. The matching service connects you with a dentist who can do both — drain the acute abscess and start the definitive treatment plan.' },

      { type: 'h2', text: 'How fast should you act?' },
      { type: 'list', items: [
        'Routine toothache: see a dentist within the working week',
        'Localised abscess (visible gum boil, bad taste, no facial swelling): same-day if at all possible',
        'Mild facial swelling without the spreading-infection signs above: same-day urgently',
        'Spreading-infection signs (eye, throat, neck, breathing, swallowing): call 999 or NHS 111 immediately, not a dentist',
      ] },
    ],
  },
  {
    slug: 'what-to-do-if-you-break-a-tooth',
    hub: 'broken-chipped-tooth-enfield',
    draft: true,
    title: 'What to do if you break a tooth before you can be seen',
    metaTitle: "Broken Tooth: Safe First Aid Before You're Seen",
    metaDescription:
      'Broke a tooth in Enfield? Safe first-aid steps for a broken tooth, how to ease the pain, when to call 999 or NHS 111, and how to be seen the same day.',
    category: 'Trauma & first aid',
    publishDate: '2026-06-10',
    updatedDate: '2026-06-10',
    excerpt:
      'A broken tooth is rarely life-threatening, but it needs prompt care, and the first aid is simple. Here is what to do in Enfield before a dentist can see you, and the warning signs that mean hospital instead.',
    faqs: [
      {
        question: 'Is a broken tooth a dental emergency?',
        answer:
          'A broken tooth that is painful, has a sharp edge cutting your tongue or cheek, exposes the inner tooth, or follows a blow to the face counts as urgent and is worth same-day care. A small chip with no pain and no sharp edge can usually wait a few days for a routine appointment, but still have it checked, because damage below the surface is not always visible.',
      },
      {
        question: 'Should I keep the piece that broke off?',
        answer:
          'Yes. If a sizeable fragment has come away, keep it and bring it with you. Store a large piece in milk or in your own saliva, the same way you would a knocked-out tooth, because in some cases a dentist can bond a clean fragment back on. Small splinters of enamel are not usually reusable, but there is no harm in keeping them for the dentist to assess.',
      },
      {
        question: 'How do I stop a broken tooth hurting until I am seen?',
        answer:
          'Take paracetamol or ibuprofen at the dose on the packet, provided they are safe for you, and rinse gently with warm salt water. Hold a cold compress against the outside of your cheek for swelling. Do not place an aspirin tablet directly against the gum, as this burns the tissue. Avoid very hot, very cold, or hard foods, and chew on the other side.',
      },
      {
        question: 'When should I go to A&E instead of a dentist for a broken tooth?',
        answer:
          'Go to A&E or call 999 if the broken tooth came with a heavy blow to the head or face and you have any sign of a jaw fracture, were knocked out, have uncontrolled bleeding, or have difficulty breathing or swallowing. For Enfield, the nearest major A&E is North Middlesex University Hospital in Edmonton. Chase Farm Hospital runs an urgent treatment centre rather than a full A&E.',
      },
      {
        question: 'Can I get an emergency dentist in Enfield at the weekend?',
        answer:
          'Yes. Out of hours you can call NHS 111, which can direct you to urgent dental services across north London, or use our same-day matching to be connected with a vetted Enfield emergency dentist. We are a matching service and do not treat you ourselves, but we can usually arrange an introduction quickly, including at weekends and on bank holidays.',
      },
    ],
    content: [
      { type: 'p', text: 'Breaking a tooth is alarming, but most broken teeth are not a danger to your health, and the first aid is simple. The aim before you are seen is to protect the tooth, protect the soft tissue around it from any sharp edge, control pain and swelling, and avoid anything that makes the damage worse. A dentist then decides whether the tooth needs smoothing, a filling or bonding, a crown, root canal treatment, or in some cases extraction. Acting promptly gives the best chance of saving the tooth.' },
      { type: 'note', text: 'Call 999 or go to A&E if the broken tooth followed a heavy blow to the head or face and you were knocked out, have uncontrolled bleeding, suspect a broken jaw, or have any difficulty breathing or swallowing. For out-of-hours dental help in Enfield, call NHS 111. For same-day matching with a vetted Enfield emergency dentist, use the form on this page.' },

      { type: 'h2', text: 'First aid for a broken tooth, step by step' },
      { type: 'p', text: 'Work through these calmly. None of them needs anything you would not already have at home.' },
      { type: 'list', items: [
        'Rinse your mouth gently with warm salt water to clean the area and clear any small fragments.',
        'If there is bleeding from the gum or lip, press a clean piece of gauze or a folded tissue against it for ten minutes until it stops.',
        'Find and keep any sizeable piece that has broken off. Store a large fragment in milk or in saliva, not in water, and bring it with you.',
        'If the broken tooth has a sharp edge, cover it with a piece of sugar-free chewing gum or dental wax from a pharmacy so it does not cut your tongue or cheek.',
        'Hold a cold compress, a cloth-wrapped ice pack or a bag of frozen peas, against the outside of your cheek to ease swelling.',
        'Take paracetamol or ibuprofen at the dose on the packet if they are safe for you to use.',
        'Avoid chewing on that side, and steer clear of very hot, very cold, hard or sticky food until you are seen.',
      ] },

      { type: 'h2', text: 'Why you should keep the broken piece' },
      { type: 'p', text: 'People often throw the fragment away, but it is worth keeping. When a clean, reasonably sized piece of a front tooth breaks off in one part, a dentist can sometimes bond it back into place, which gives a better colour and shape match than rebuilding the tooth from filling material. Treat a large fragment the way you would a knocked-out tooth: handle it by the outer surface rather than the broken edge, and store it in a small pot of milk, or tucked inside your cheek if you are an adult and there is no risk of swallowing it. Small slivers of enamel are rarely reusable, but bring them anyway so the dentist can judge.' },

      { type: 'h2', text: 'Easing the pain safely' },
      { type: 'p', text: 'How much a broken tooth hurts depends on how deep the break goes. A chip of the outer enamel may not hurt at all. A break that reaches the softer dentine underneath is often sensitive to air, hot and cold. A break that exposes the nerve in the middle of the tooth can be sharply painful and needs same-day attention. For pain relief, paracetamol and ibuprofen taken as directed are the sensible first choice, and they can be taken together within their separate limits if both are safe for you. Never hold an aspirin tablet or any painkiller directly against the gum, because it burns the soft tissue and creates a second problem. The Oral Health Foundation is a useful independent source if you want to read more about caring for a damaged tooth, and it will not contradict this advice.' },
      { type: 'p', text: 'If you have a broken tooth with no pain at all, do not assume it is fine and ignore it. Damage can run below the gum line or into the root where you cannot see it, and an untreated crack can let bacteria into the tooth and lead to an abscess weeks later. Have it looked at even when it is comfortable.' },

      { type: 'h2', text: 'When a broken tooth is a hospital problem, not a dental one' },
      { type: 'p', text: 'Most broken teeth are a job for a dentist. A small number are a job for A&E first. The tooth itself is rarely the danger, what matters is how the injury happened and what else it affected. Treat it as a medical emergency and call 999 or go to A&E if any of the following apply:' },
      { type: 'list', items: [
        'A heavy blow to the head or face, especially with loss of consciousness, confusion, repeated vomiting or a severe headache.',
        'Signs of a broken jaw: your teeth no longer meet correctly, you cannot open or close your mouth properly, or there is numbness across the jaw.',
        'Bleeding from the mouth that you cannot control with ten minutes of pressure.',
        'Any difficulty breathing or swallowing.',
      ] },
      { type: 'p', text: 'For people in Enfield, the nearest major A&E is North Middlesex University Hospital on Sterling Way in Edmonton (N18). Chase Farm Hospital in Enfield runs an urgent treatment centre rather than a full twenty-four-hour A&E, so for a serious facial injury head to North Middlesex or call 999. Barnet Hospital A&E is the next nearest for residents on the western side of the borough. If you are unsure how serious it is, NHS 111 can assess your symptoms and tell you where to go.' },

      { type: 'h2', text: 'Getting seen quickly across Enfield' },
      { type: 'p', text: 'Once the immediate first aid is done, the priority is being seen by a dentist. During normal hours your own dentist should be your first call if you have one. If you do not, or you cannot get through, our service matches you with a vetted emergency dentist covering the Enfield area, from Enfield Town and Bush Hill Park in the EN1 and EN2 postcodes through to Enfield Highway, Ponders End and Brimsdown in EN3, and the southern neighbourhoods around Edmonton and Palmers Green. We are an independent matching service and do not treat you ourselves, but most introductions happen within the hour.' },
      { type: 'p', text: 'Out of hours, at the weekend or on a bank holiday, NHS 111 is the route to urgent NHS dental care across north London and can advise when no dentist is immediately available. You can also use the same-day matching form on this page at any time, and we will connect you with a dentist who can assess the broken tooth, ease the pain, and put a lasting repair in place.' },
    ],
  },
  {
    slug: 'lost-filling-first-aid',
    hub: 'lost-filling-or-crown-enfield',
    draft: true,
    title: 'What to do if a filling falls out',
    metaTitle: 'Lost a Filling? Safe First Aid Before the Dentist',
    metaDescription:
      'Lost a filling in Enfield? Safe first aid for the exposed tooth, temporary measures that genuinely help, the warning signs to act on, and how to be seen fast.',
    category: 'Emergency basics',
    publishDate: '2026-06-10',
    updatedDate: '2026-06-10',
    excerpt:
      'A filling coming out is rarely a true emergency, but the tooth is left exposed and tender. Here is the safe first aid before you are seen in Enfield, the temporary measures that actually help, and the signs that mean you should not wait.',
    faqs: [
      {
        question: 'How quickly do I need to see a dentist after losing a filling?',
        answer:
          'A lost filling is usually urgent rather than an emergency, so a few days is often acceptable if the tooth is comfortable and the gap is small. See a dentist sooner, within a day or two, if the tooth is painful, very sensitive, has a sharp edge, or the cavity is large, because an open cavity collects food and bacteria and can decay further or lead to an abscess if it is left.',
      },
      {
        question: 'What can I safely put on the tooth until my appointment?',
        answer:
          'A pharmacy temporary filling material, sometimes sold as a dental repair paste, can be pressed gently into a clean, dry cavity to shield it for a few days. Sugar-free chewing gum or a little softened dental wax can cover a sharp edge in a pinch. Never use household glue, superglue or filler of any kind, and do not pack the cavity with aspirin or painkiller tablets, as these damage the gum and soft tissue.',
      },
      {
        question: 'Why has the tooth become sensitive or painful?',
        answer:
          'A filling seals the inner layers of the tooth. Once it is gone, the dentine underneath is exposed to air, hot, cold and sweet things, which can give a sharp twinge. Mild to moderate sensitivity is common and not alarming. A deep, throbbing or spontaneous ache, pain that wakes you at night, or any swelling suggests the nerve is involved or infected, and that needs prompt dental care rather than a wait.',
      },
      {
        question: 'Can I use a pharmacy temporary filling kit, and how long does it last?',
        answer:
          'Yes, an over-the-counter temporary filling kit is a reasonable stop-gap and most Enfield pharmacies stock one. It is designed to last days, not weeks. Packed over hidden decay or used as a long-term fix it can trap bacteria and make matters worse, so it buys time until a dentist places a proper restoration, it does not replace one.',
      },
      {
        question: 'Can I eat normally with a hole where the filling was?',
        answer:
          'Try to chew on the other side and avoid hard, sticky, very hot or very cold food while the tooth is exposed, as these can break the weakened tooth further or trigger sensitivity. Rinse with warm water after eating to clear any food trapped in the cavity, and keep brushing gently around the area so it stays clean until you are seen.',
      },
    ],
    content: [
      { type: 'p', text: 'A filling falling out is one of the most common dental mishaps, and it usually happens at the worst moment, mid-meal or last thing at night. The good news is that a lost filling is rarely a true emergency. The tooth is not in danger in the next few hours, and the first aid is simple. What matters is protecting the now-exposed tooth, keeping the cavity clean, easing any sensitivity, and arranging to be seen before the gap causes a bigger problem. This guide sits within our full advice on a [lost filling or crown in Enfield](/guides/lost-filling-or-crown-enfield/), and focuses on what to do in the first day or two after a filling comes out.' },
      { type: 'note', text: 'A lost filling on its own is not a 999 emergency. Call 999 or go to A&E only if you have swelling spreading towards your eye, cheek, neck or the floor of your mouth, difficulty breathing or swallowing, or a high fever with shaking chills, as these are signs of a spreading infection. For dental pain or a lost filling out of hours in Enfield, call NHS 111. To be matched with a vetted Enfield dentist, use the form on this page.' },

      { type: 'h2', text: 'First, keep calm and clean the area' },
      { type: 'p', text: 'In the first few minutes, the aim is simply to clean the tooth and protect it. Work through these steps:' },
      { type: 'list', items: [
        'Rinse your mouth gently with warm water, or warm salt water, to clear away the loose filling and any food caught in the cavity.',
        'If the whole filling came out in one piece you can keep it, but a filling cannot be re-used, so there is no need to store it the way you would a knocked-out tooth.',
        'Run your tongue or a clean finger over the tooth to feel for a sharp edge, but do not poke at the cavity.',
        'Keep brushing the tooth gently, including over the open cavity, to stop food and plaque building up in it.',
      ] },
      { type: 'p', text: 'Most lost fillings cause a dull ache or sensitivity rather than severe pain. If the tooth is comfortable, you have time to arrange an unhurried appointment. If it is throbbing, that points to something deeper and is covered further down.' },

      { type: 'h2', text: 'Safe temporary measures for the gap' },
      { type: 'p', text: 'The exposed cavity is vulnerable to food, bacteria and temperature, so a short-term shield helps until a dentist restores the tooth. The safe options are limited but genuinely useful:' },
      { type: 'list', items: [
        'A pharmacy temporary filling material, pressed gently into a clean, dry cavity with a clean finger, then bitten down on lightly to settle it. Most Enfield pharmacies stock these dental repair pastes.',
        'A piece of sugar-free chewing gum moulded over a sharp edge, as an emergency cover only, not packed into a deep cavity.',
        'Softened dental wax from a pharmacy to blunt a sharp edge that is catching your tongue or cheek.',
      ] },
      { type: 'p', text: 'Just as important is what to avoid. Never use household glue, superglue, or any DIY filler to plug the gap, because they are toxic and set hard in the wrong place. Do not rest an aspirin or other painkiller tablet against the gum or in the cavity, as it burns the soft tissue and leaves a chemical ulcer. And treat any repair paste as a stop-gap that lasts days, not weeks. The Oral Health Foundation, an independent UK oral-health charity, gives similar guidance and is a reliable source if you want to read further, and it will not contradict the advice here.' },

      { type: 'h2', text: 'Managing sensitivity and protecting the tooth' },
      { type: 'p', text: 'Once a filling is gone, the softer dentine beneath is open to the mouth, so a twinge with cold, heat or sweet food is normal. For mild to moderate discomfort, paracetamol or ibuprofen taken at the dose on the packet, provided they are safe for you, is the sensible first choice, and a sensitive-teeth toothpaste rubbed onto the tooth can take the edge off. Chew on the other side, and steer clear of hard, sticky, very hot or very cold food, because a tooth that has lost a filling is weakened and can chip or crack. Rinse with warm water after meals to flush out anything lodged in the cavity.' },

      { type: 'h2', text: 'When a lost filling is more than a nuisance' },
      { type: 'p', text: 'A filling can come out for a simple reason, ordinary wear, or because decay has formed underneath and undermined it. The symptoms tell you which, and how urgently you need to be seen. Arrange prompt, same-day or next-day care if you notice any of the following:' },
      { type: 'list', items: [
        'A deep, throbbing or spontaneous ache, or pain that wakes you at night, which can mean the nerve is inflamed or infected.',
        'Pain that lingers for more than a few seconds after something hot or cold, rather than a quick twinge.',
        'A bad taste, a gum boil, or tenderness when you bite, which can signal infection starting.',
        'A large cavity, a crumbling tooth, or a sharp edge that keeps cutting your tongue or cheek.',
      ] },
      { type: 'p', text: 'Step the response up further if a true infection takes hold. Facial swelling, a fever, or feeling generally unwell are signs an abscess may be forming, and that should be treated like an [abscess emergency](/guides/dental-abscess-enfield/) rather than a simple lost filling. If swelling spreads towards your eye, neck or the floor of your mouth, or you have any difficulty breathing or swallowing, call 999 or go to A&E. For Enfield, the nearest major A&E is North Middlesex University Hospital in Edmonton, while Chase Farm Hospital runs an urgent treatment centre rather than a full A&E. Out of hours for dental-only problems, NHS 111 can assess you and point you to urgent care.' },

      { type: 'h2', text: 'Getting seen across Enfield' },
      { type: 'p', text: 'Once the tooth is clean and protected, the priority is a proper repair. During normal hours your own dentist is the first call if you have one. If you do not, or cannot get an appointment, we can connect you with a vetted dentist for [lost filling and crown repair](/services/lost-filling-or-crown/) across the borough, from [Enfield Town](/location/enfield-town/) and Bush Hill Park in EN1 and EN2 through to Enfield Highway and Ponders End in EN3, and the southern areas around Edmonton and Palmers Green. We are an independent matching service and do not treat you ourselves, but most introductions happen within the hour.' },
      { type: 'p', text: 'Out of hours, at the weekend or on a bank holiday, NHS 111 is the route to urgent NHS dental care across north London. You can also use the same-day matching form on this page at any time, and we will connect you with a dentist who can clean out the cavity, check for decay underneath, and place a lasting filling so the tooth is properly sealed again.' },
    ],
  },
  {
    slug: 'dry-socket-after-tooth-extraction',
    hub: 'wisdom-tooth-emergency-enfield',
    draft: true,
    title: 'Dry socket after a tooth extraction',
    metaTitle: 'Dry Socket After Extraction: Safe First Aid Guide',
    metaDescription:
      'Throbbing pain a few days after a tooth out in Enfield? How to spot dry socket, the safe first aid that eases it, what to avoid, and how to be seen quickly.',
    category: 'Pain management',
    publishDate: '2026-06-11',
    updatedDate: '2026-06-11',
    excerpt:
      'Pain that flares up a few days after an extraction, often after a lower wisdom tooth, can be dry socket. Here is how to recognise it, the safe first aid that takes the edge off, what to avoid, and how to be seen quickly across Enfield.',
    faqs: [
      {
        question: 'How do I know if it is dry socket or normal healing pain?',
        answer:
          'Ordinary healing pain is worst in the first day or two and then steadily eases. Dry socket tends to do the opposite: the socket feels better at first, then a deep, throbbing ache sets in around three to five days after the extraction, often spreading to the ear, eye or neck on that side. A bad taste, bad breath, and an empty-looking socket where the blood clot should be are the other tell-tale signs. If the pain is getting worse rather than better several days on, it is worth being seen.',
      },
      {
        question: 'How soon after an extraction does dry socket happen?',
        answer:
          'It usually appears three to five days after the tooth is removed, once the protective blood clot over the socket has broken down or been dislodged before the gum has healed over it. It is more common after lower back teeth and wisdom teeth, and in people who smoke. It does not come on within the first 24 hours, so very early pain is normally just the extraction settling rather than dry socket.',
      },
      {
        question: 'Can I treat dry socket at home?',
        answer:
          'Home care helps you cope, but it does not cure dry socket. Gentle warm salt-water rinses after meals, keeping the area clean, and over-the-counter painkillers such as paracetamol or ibuprofen at the dose on the packet, if they are safe for you, will take the edge off. The lasting relief comes from a dentist cleaning the socket and placing a soothing medicated dressing, which most people find settles the pain quickly. Home measures are for bridging the gap until you are seen.',
      },
      {
        question: 'Does dry socket need antibiotics?',
        answer:
          'Usually not. Dry socket is not primarily an infection, it is an exposed, inflamed socket where the clot has been lost, so antibiotics are not normally needed and the dressing is what relieves it. A dentist may consider antibiotics only if there are separate signs of spreading infection, such as a fever or facial swelling. Do not start leftover antibiotics yourself, and do not pack painkiller tablets into the socket.',
      },
      {
        question: 'How long does dry socket last?',
        answer:
          'Left alone it can ache for around a week to ten days as the socket slowly heals over. Once a dentist cleans and dresses the socket the pain typically eases within a day, and the dressing may be refreshed once or twice over the following week. Because it tends to recur until the socket has healed, do not assume a quiet day means it has gone, keep up the gentle rinses and avoid smoking until it has fully settled.',
      },
    ],
    content: [
      { type: 'p', text: 'Most tooth extractions heal quietly, with the soreness fading day by day. Dry socket is the common exception. It happens when the blood clot that should protect the empty socket is lost or breaks down too early, leaving the bone and nerve endings underneath exposed. The result is a deep, throbbing pain that often arrives a few days after the tooth came out, just when you expected to be over the worst. It is most common after lower wisdom teeth and back teeth. This guide explains how to recognise it and ease it safely, and sits within our fuller advice on [wisdom tooth and gum emergencies in Enfield](/guides/wisdom-tooth-emergency-enfield/).' },
      { type: 'note', text: 'Dry socket itself is painful but not a 999 emergency. Call 999 or go to A&E only if you have swelling spreading towards your eye, cheek, neck or the floor of your mouth, difficulty breathing or swallowing, or a high fever with shaking chills, as these point to a spreading infection rather than dry socket. For dental pain out of hours in Enfield, call NHS 111. To be matched with a vetted Enfield dentist, use the form on this page.' },

      { type: 'h2', text: 'What dry socket is, and when it shows up' },
      { type: 'p', text: 'After an extraction, a blood clot forms in the socket like a natural plaster, sealing the wound and protecting the bone and nerves while new tissue grows underneath. Dry socket, known clinically as alveolar osteitis, is when that clot is dislodged, dissolves, or never forms properly. The socket is left open and the exposed bone becomes inflamed, which is why the pain can be so sharp and persistent.' },
      { type: 'p', text: 'The timing is the giveaway. Normal healing pain peaks in the first day or two and then settles. Dry socket usually flares three to five days after the extraction, after a period of feeling better. The signs to watch for are:' },
      { type: 'list', items: [
        'A deep, throbbing ache in the jaw on the side of the extraction, often radiating up to the ear, eye or temple.',
        'Pain that is getting worse several days on, rather than easing.',
        'A socket that looks empty or whitish, where you might expect a dark blood clot.',
        'A bad taste in the mouth and noticeable bad breath.',
      ] },
      { type: 'p', text: 'It is more likely after a difficult or lower wisdom tooth removal, and in people who smoke, because smoking and sucking on a cigarette can pull the clot out. It is not something that happens in the first few hours, so early discomfort right after the extraction is almost always ordinary healing rather than dry socket.' },

      { type: 'h2', text: 'Safe first aid to ease the pain' },
      { type: 'p', text: 'The aim of home care is to keep the area clean and take the edge off the pain until a dentist can treat the socket properly. These steps are safe and match NHS aftercare advice for extractions:' },
      { type: 'list', items: [
        'Rinse gently with warm salt water, about half a teaspoon of salt in a cup of warm water, several times a day and especially after eating, to keep food out of the socket. Let it fall out of your mouth rather than spitting forcefully.',
        'Take an over-the-counter painkiller such as paracetamol or ibuprofen at the dose on the packet, provided it is safe for you. Ibuprofen helps with the inflammation in particular.',
        'Keep brushing your other teeth as normal, being gentle around the healing socket.',
        'Hold a cold compress against the cheek for short spells if the area feels swollen or tender.',
      ] },
      { type: 'p', text: 'These measures help you cope, but they do not fix dry socket on their own. The reliable relief comes from a dentist, which is covered below.' },

      { type: 'h2', text: 'What to avoid while it heals' },
      { type: 'p', text: 'Just as important is what not to do, because several everyday habits can dislodge the clot or irritate the exposed socket and make things worse:' },
      { type: 'list', items: [
        'Do not smoke or vape. This is the single biggest risk factor, and stopping even for a few days gives the socket the best chance to heal.',
        'Do not use straws or rinse and spit vigorously, as the suction and pressure can pull a forming clot out.',
        'Do not pack aspirin or any painkiller tablet into the socket. It burns the exposed tissue and leaves a chemical ulcer, and it does nothing for the pain.',
        'Avoid very hot drinks, alcohol, and hard, crunchy or chewy food on that side until the area has settled.',
      ] },
      { type: 'p', text: 'No home remedy seals an open socket safely, so resist any urge to plug it with clove oil packed into the hole, cotton wool or DIY filler. A thin dab of clove oil on a cotton bud touched to the gum nearby can be soothing, but it is no substitute for the dressing a dentist places.' },

      { type: 'h2', text: 'Why the dentist visit is the real fix' },
      { type: 'p', text: 'Dry socket is one of those problems where a quick professional treatment makes a big difference. A dentist will gently clean out the socket to clear any debris, then pack it with a soothing, medicated dressing that covers the exposed bone. Most people feel the throbbing settle within a day, and the dressing may be changed once or twice over the following week as the socket heals. Antibiotics are usually not needed, because dry socket is an inflamed exposed socket rather than an infection, although a dentist will look for any separate signs of infection while you are there.' },
      { type: 'p', text: 'See a dentist promptly if the pain is severe, getting worse after the first few days, or not controlled by ordinary painkillers. Step the response up to NHS 111, A&E or 999 only if you develop the spreading-infection signs in the box above, such as facial swelling, difficulty swallowing or breathing, or a high fever. For Enfield, the nearest major A&E is North Middlesex University Hospital in Edmonton, while Chase Farm Hospital runs an urgent treatment centre rather than a full A&E. None of this changes the basic point: dry socket is dental work, and a dentist clearing and dressing the socket is what ends the pain.' },

      { type: 'h2', text: 'Getting seen across Enfield' },
      { type: 'p', text: 'If your pain started days after an extraction and you cannot get back to the dentist who removed the tooth, we can help. Use the same-day matching form on this page and we will connect you with a vetted dentist for [wisdom tooth pain](/services/wisdom-tooth-pain/) and post-extraction problems across the borough, from [Enfield Town](/location/enfield-town/) and Bush Hill Park in EN1 and EN2, through Enfield Highway and Ponders End in EN3, to Edmonton and Palmers Green in the south. We are an independent matching service and do not treat you ourselves, but most introductions happen within the hour.' },
      { type: 'p', text: 'At the weekend or on a bank holiday, when many practices are shut, NHS 111 can assess you and point you to urgent NHS dental care, and our advice on getting an emergency dentist [out of hours in Enfield](/guides/out-of-hours-emergency-dentist-enfield/) walks through the options. Dry socket will not usually wait comfortably until a routine appointment weeks away, so it is worth using one of these routes to be seen and have the socket dressed.' },
    ],
  },
  {
    slug: 'can-ae-help-dental-emergency',
    hub: 'what-counts-as-a-dental-emergency-enfield',
    draft: true,
    title: 'Can A&E help with a dental emergency in Enfield?',
    metaTitle: 'Can A&E Help With a Dental Emergency? (Enfield)',
    metaDescription:
      'When A&E is the right place for a dental problem in Enfield and when it is not, what hospitals can and cannot do for teeth, plus the faster route to a dentist.',
    category: 'Emergency basics',
    publishDate: '2026-06-11',
    updatedDate: '2026-06-11',
    excerpt:
      'A&E is the right place for some dental emergencies and the wrong place for most. Here is how to tell which is which in Enfield, what a hospital can actually do for a tooth, and the quicker way to reach a dentist.',
    faqs: [
      {
        question: 'Can I go to A&E for severe toothache?',
        answer:
          'A&E is not set up to treat toothache. Hospitals very rarely have a dentist on site, so they cannot fill, root-treat or pull the tooth that is causing the pain. For toothache without any danger signs, you will be seen and treated faster by a dentist. Use NHS 111 out of hours, or our same-day matching, rather than spending hours in A&E only to be referred on.',
      },
      {
        question: 'Does A&E have a dentist on site?',
        answer:
          'Usually not. A&E departments are staffed by emergency medicine doctors and nurses, not dentists. They can give pain relief, treat a spreading infection or facial injury, and refer urgent cases to the hospital maxillofacial team, but the routine dental work that fixes the underlying problem is done by a dentist, either in the community or at a dental access centre.',
      },
      {
        question: 'When should I call 999 rather than go to A&E myself?',
        answer:
          'Call 999 if someone has difficulty breathing or swallowing, a swelling closing the throat, heavy bleeding from the mouth that you cannot control with ten minutes of pressure, or a serious head or facial injury with loss of consciousness, confusion or repeated vomiting. These need an ambulance. If you can travel safely and the situation is urgent but not immediately life-threatening, going straight to A&E is reasonable.',
      },
      {
        question: 'Is Chase Farm Hospital an A&E?',
        answer:
          'No. Chase Farm Hospital in Enfield runs an urgent treatment centre for minor injuries and illnesses, not a full twenty-four-hour A&E. For a serious dental or facial emergency in the borough, the nearest major A&E is North Middlesex University Hospital in Edmonton. Barnet Hospital A&E is the next nearest for people on the western side of Enfield.',
      },
      {
        question: 'Will A&E give me antibiotics for a dental abscess?',
        answer:
          'A&E may prescribe antibiotics and pain relief if you have a spreading infection or are unwell, and will arrange urgent care for severe facial swelling. Antibiotics calm an infection but do not cure the cause, so you still need a dentist to drain the abscess or treat the tooth. For an abscess without danger signs, a dentist or NHS 111 is the better first call.',
      },
    ],
    content: [
      { type: 'p', text: 'Many people facing a dental emergency wonder whether to head to the hospital. It is a fair question, because dental pain can be severe and dentists are not always open. The short answer is that A&E is the right place for a small number of dental emergencies and the wrong place for most of them. Knowing which is which saves you a long, uncomfortable wait and gets you to the person who can actually fix the problem. This guide is part of our wider advice on [what counts as a dental emergency in Enfield](/guides/what-counts-as-a-dental-emergency-enfield/).' },
      { type: 'note', text: 'Call 999 or go to A&E now if you have difficulty breathing or swallowing, a swelling spreading towards your eye, neck or the floor of your mouth, uncontrolled bleeding from the mouth, or a serious head or facial injury. For dental pain, a lost filling, a broken tooth or an abscess without these danger signs, call NHS 111 out of hours or use the same-day matching form on this page to reach a vetted Enfield dentist.' },

      { type: 'h2', text: 'When A&E is the right place' },
      { type: 'p', text: 'A&E exists for medical emergencies, and a dental problem becomes a medical emergency when it threatens your airway, causes bleeding you cannot stop, or comes with a serious injury. Treat it as a hospital matter and go to A&E, or call 999 if you cannot travel safely, in any of these situations:' },
      { type: 'list', items: [
        'Difficulty breathing or swallowing, or a swelling under the jaw or in the floor of the mouth that is getting worse quickly. A dental infection that spreads this way is dangerous and needs hospital care without delay.',
        'Facial swelling spreading towards the eye or down the neck, especially with a high fever, shaking chills or feeling very unwell.',
        'Bleeding from the mouth that has not stopped after ten minutes of firm pressure with clean gauze.',
        'A heavy blow to the head or face with loss of consciousness, confusion, repeated vomiting, or a suspected broken jaw where the teeth no longer meet correctly.',
      ] },
      { type: 'p', text: 'In these cases the tooth is not the main concern. What matters is the infection, the bleeding or the injury, and those are jobs for a hospital, not a dental chair.' },

      { type: 'h2', text: 'What A&E can and cannot do for a tooth' },
      { type: 'p', text: 'It helps to know what to expect if you do go. An A&E department is staffed by emergency doctors and nurses, and very rarely by a dentist. They are excellent at the things hospitals are built for and limited on the things only a dentist can do.' },
      { type: 'p', text: 'A&E can give strong pain relief, treat or stabilise a spreading infection, manage bleeding, deal with a facial fracture or soft-tissue injury, and refer urgent cases straight to the hospital oral and maxillofacial team. What A&E generally cannot do is the everyday dental work that resolves the cause: filling a tooth, fitting a crown, carrying out root canal treatment, or routinely extracting the tooth that is hurting. That is why someone who arrives with ordinary toothache is often given painkillers and advised to see a dentist, after a long wait. For a problem that is painful but not dangerous, going straight to a dentist is both faster and more useful.' },

      { type: 'h2', text: 'Where to go in Enfield, and where not to' },
      { type: 'p', text: 'Local geography matters when minutes count, and Enfield has a particular layout worth knowing in advance. The nearest major A&E for most of the borough is North Middlesex University Hospital on Sterling Way in Edmonton (N18), which runs a full twenty-four-hour emergency department. Chase Farm Hospital on The Ridgeway in Enfield (EN2) has an urgent treatment centre for minor injuries and illnesses, not a full A&E, so it is not the place for a serious facial swelling or a major injury. For residents on the western edge of the borough, around Cockfosters and Hadley Wood, Barnet Hospital A&E may be closer.' },
      { type: 'p', text: 'If you are not sure how serious the problem is, NHS 111 is the safest first step. It is free, open day and night, and a trained adviser will assess your symptoms and tell you whether to manage at home, see an urgent dentist, go to an urgent treatment centre, or head to A&E. Calling first can save you a wasted journey to the wrong place. You can read more about local routing in our guide to finding an emergency dentist [out of hours in Enfield](/guides/out-of-hours-emergency-dentist-enfield/).' },

      { type: 'h2', text: 'The faster route for a dental-only emergency' },
      { type: 'p', text: 'Most dental emergencies, a bad toothache, a broken tooth, a lost filling or crown, or an abscess without spreading swelling, are best handled by a dentist rather than a hospital. The treatment that ends the problem, cleaning and dressing, a filling, a crown, root canal work or an extraction, can only be done in a dental chair. Going to a dentist first avoids hours in a waiting room and a likely referral back to dental care anyway.' },
      { type: 'p', text: 'During normal hours your own dentist should be the first call if you have one. If you do not, or cannot get an appointment, we connect you with a vetted dentist for [out-of-hours and emergency dental care](/services/out-of-hours/) across the borough, from [Edmonton](/location/edmonton/) and Palmers Green in the south, through Enfield Town and Bush Hill Park in EN1 and EN2, to Enfield Highway and Ponders End in EN3. We are an independent matching service and do not treat you ourselves, but most introductions happen within the hour. Out of hours, at the weekend or on a bank holiday, NHS 111 is the route to urgent NHS dental care across north London, and you can use the same-day matching form on this page at any time.' },
    ],
  },
  {
    slug: 'child-toothache-at-night',
    hub: 'childrens-dental-emergencies-enfield',
    draft: true,
    title: 'Child toothache at night: what to do in Enfield',
    metaTitle: 'Child Toothache at Night: What Helps (Enfield)',
    metaDescription:
      'Safe first aid for a child with toothache at night, what pain relief suits children, the danger signs that need urgent care, and how to reach an Enfield dentist.',
    category: 'Pain management',
    publishDate: '2026-06-12',
    updatedDate: '2026-06-12',
    excerpt:
      'A child in pain at night is distressing for the whole family. Here is how to settle a child with toothache safely overnight, the warning signs that need urgent care, and how to reach an emergency dentist in Enfield in the morning.',
    faqs: [
      {
        question: 'What can I give my child for toothache at night?',
        answer:
          'Children\'s paracetamol or ibuprofen, given at the dose printed on the packet for your child\'s age and weight, is the usual first step for dental pain at home. Never give aspirin to anyone under sixteen, as it carries a rare but serious risk. Do not rub painkilling tablets or adult gels onto the gum, because they can burn the soft tissue. If you are unsure what is suitable for your child, call NHS 111 and a trained adviser will guide you.',
      },
      {
        question: 'How can I ease my child\'s toothache without medicine?',
        answer:
          'Help your child rinse gently with warm water and check for any food trapped between the teeth, easing it out carefully with floss rather than anything sharp. A cool, soft pillow and keeping the head slightly raised can take the throb out of lying flat. Offer cool water and soft, lukewarm food, and avoid anything very hot, very cold or sugary until a dentist has seen them.',
      },
      {
        question: 'Is my child\'s toothache an emergency?',
        answer:
          'Most toothache is not a same-night emergency and can wait until you can reach a dentist in the morning. Treat it as urgent and seek immediate help if your child has facial swelling that is spreading towards the eye or down the neck, a high temperature with that swelling, difficulty breathing or swallowing, or bleeding from the mouth you cannot stop. Those signs need 999 or A&E, not a wait until morning.',
      },
      {
        question: 'Should I take my child to A&E for toothache in Enfield?',
        answer:
          'A&E cannot fill or treat the tooth that is hurting, so for ordinary toothache a dentist is both faster and more useful. A&E is the right place only when there are danger signs such as spreading facial swelling, breathing or swallowing difficulty, or a serious injury. For most of Enfield the nearest full A&E is North Middlesex University Hospital in Edmonton; Chase Farm Hospital runs an urgent treatment centre rather than a full A&E.',
      },
      {
        question: 'Could it be teething rather than toothache?',
        answer:
          'In babies and toddlers, sore, swollen gums and dribbling often point to teething rather than a dental problem, and teething settles with a chilled teething ring and comfort. A persistent ache in an older child with a full set of teeth, especially with a hole, a broken tooth or a high fever, is more likely a problem that needs a dentist. If you are unsure, NHS 111 can help you decide whether it can wait until morning.',
      },
    ],
    content: [
      { type: 'p', text: 'Toothache always seems to peak at night, and in a child it can turn into a long, distressing few hours for the whole household. The good news is that most childhood toothache is not a true emergency and can be settled safely at home until you can reach a dentist in the morning. A small number of situations do need urgent care the same night, and the most important thing you can do is know how to tell the difference. This guide is part of our wider advice on [children\'s dental emergencies in Enfield](/guides/childrens-dental-emergencies-enfield/).' },
      { type: 'note', text: 'Call 999 or go to A&E now if your child has swelling spreading towards the eye or down the neck, difficulty breathing or swallowing, a high temperature alongside facial swelling, or bleeding from the mouth you cannot stop. For toothache without these danger signs, settle your child overnight, call NHS 111 if you are worried out of hours, and use the same-day matching form on this page to reach a vetted Enfield dentist in the morning.' },

      { type: 'h2', text: 'First steps to settle your child tonight' },
      { type: 'p', text: 'Start by staying calm, because a frightened child feels pain more keenly. Sit them up under a good light and have a gentle look in the mouth to see whether there is an obvious cause, such as food wedged between the teeth, a broken or chipped tooth, or a red, swollen patch of gum. Often a piece of trapped food is the whole problem, and easing it out brings quick relief.' },
      { type: 'p', text: 'Help your child rinse gently with warm water, and if you can see something stuck between two teeth, ease it out carefully with dental floss rather than a pin, cocktail stick or anything sharp. Keeping the head slightly raised on an extra pillow can take the throb out of lying flat, which is often why the pain feels worse at bedtime. Offer cool water and, if they are hungry, soft lukewarm food, and steer clear of anything very hot, very cold or sugary until a dentist has had a look.' },

      { type: 'h2', text: 'Pain relief that is safe for children' },
      { type: 'p', text: 'For dental pain at home, children\'s paracetamol or ibuprofen is the usual choice. Give it at the dose printed on the packet for your child\'s age and weight, and never exceed it or double up the two medicines beyond what the labels allow. If your child has asthma or a stomach condition, check the ibuprofen guidance on the packet or with a pharmacist first.' },
      { type: 'p', text: 'Two rules matter for safety. Never give aspirin to a child under sixteen, because it is linked to a rare but serious condition called Reye\'s syndrome. And never rub painkilling tablets, clove oil or adult numbing gels directly onto the gum or tooth, as these can burn a child\'s soft tissue and make matters worse. The British Dental Association and the [NHS toothache guidance](https://www.nhs.uk/conditions/toothache/) both stress treating the pain gently while you arrange to see a dentist, rather than reaching for stronger remedies. If you are unsure what is suitable, NHS 111 can advise you at any hour.' },

      { type: 'h2', text: 'When a child\'s toothache is an emergency' },
      { type: 'p', text: 'Pain on its own, even quite bad pain, is usually safe to manage overnight. What turns toothache into a same-night emergency is a spreading infection or an injury. Seek urgent help straight away, by calling 999 or going to A&E, if your child has any of these:' },
      { type: 'list', items: [
        'Swelling of the face that is spreading towards the eye, or down under the jaw and into the neck, particularly if it is getting worse quickly.',
        'A high temperature, shivering or seeming very unwell alongside a swollen face.',
        'Difficulty breathing or swallowing, or a change in the sound of their voice.',
        'Bleeding from the mouth that has not stopped after ten minutes of gentle pressure with clean gauze or a clean cloth.',
        'A heavy blow to the head or face, especially with drowsiness, confusion or repeated vomiting.',
      ] },
      { type: 'p', text: 'If none of these apply, the pain is the main issue, and that can wait for a dentist in the morning. When you are simply not sure how serious it is, NHS 111 is the safest first call out of hours. It is free, open day and night, and an adviser will tell you whether to manage at home, see an urgent dentist, or go to hospital. You can read more about local routing in our guide to finding care [out of hours in Enfield](/guides/out-of-hours-emergency-dentist-enfield/).' },

      { type: 'h2', text: 'Could it be teething rather than toothache?' },
      { type: 'p', text: 'In babies and younger toddlers, what looks like toothache is often teething. Sore, slightly swollen gums, more dribbling than usual, flushed cheeks and a need to chew on things tend to point to a tooth coming through rather than a dental problem. Teething settles with comfort, a clean chilled teething ring rather than a frozen one, and gentle reassurance. A high fever, diarrhoea or a child who is genuinely unwell is not normal teething and should be checked.' },
      { type: 'p', text: 'In an older child with a full set of teeth, a persistent ache is more likely to be a real dental issue, especially if you can see a hole, a dark spot, a broken tooth or a swollen patch of gum. That is the kind of toothache that needs a dentist to find and treat the cause, because home measures only hold the pain at bay rather than fixing it. The Oral Health Foundation has helpful background on children\'s teeth at [dentalhealth.org](https://www.dentalhealth.org/), and a dentist can tell you for certain what is going on.' },

      { type: 'h2', text: 'Getting your child seen in Enfield' },
      { type: 'p', text: 'Once your child is settled for the night, the aim is a dental appointment as soon as possible the next day, because a tooth that hurts enough to wake a child usually needs treatment rather than just painkillers. During normal hours your own dentist should be the first call if your child is registered. If you do not have a dentist, or cannot get a same-day appointment, we connect families with a vetted local dentist for [urgent toothache care](/services/severe-toothache/) right across the borough.' },
      { type: 'p', text: 'We match families from [Enfield Town](/location/enfield-town/) and Edmonton in the south through to Enfield Highway and Ponders End in EN3, and we are an independent matching service rather than a dental practice, so we do not treat your child ourselves. Most introductions happen within the hour during opening times. Out of hours, at the weekend or on a bank holiday, NHS 111 is the route to urgent NHS dental care across north London, and you can submit the same-day matching form on this page at any time so a practice can call you first thing. Bring a note of any painkillers you have given and when, as the dentist will want to know.' },
    ],
  },

  {
    slug: 'bleeding-after-tooth-extraction',
    hub: 'bleeding-swelling-denture-emergencies-enfield',
    draft: true,
    title: 'Bleeding after a tooth extraction: how to stop it safely',
    metaTitle: 'Bleeding After Tooth Extraction: First Aid (Enfield)',
    metaDescription:
      'How to stop bleeding after a tooth extraction, the 20-minute pressure rule, danger signs that need A&E, and same-day help from a vetted Enfield dentist.',
    category: 'Trauma & first aid',
    publishDate: '2026-06-12',
    updatedDate: '2026-06-12',
    excerpt:
      'Some oozing after an extraction is normal, but a socket that keeps bleeding is frightening. Here is the pressure technique that stops most bleeds, the danger signs that need A&E, and how to reach urgent dental help in Enfield.',
    faqs: [
      {
        question: 'How long should a tooth extraction bleed for?',
        answer:
          'Light oozing mixed with saliva is normal for several hours after an extraction, and a pink tinge on the pillow the next morning is common. Active bleeding, where blood is pooling or dripping rather than just tinting your spit, should stop after 20 minutes of firm, uninterrupted pressure on a gauze pad. If it has not slowed after two rounds of proper pressure, seek urgent help rather than repeating the cycle all evening.',
      },
      {
        question: 'Does biting on a tea bag really stop a bleeding socket?',
        answer:
          'It can help, yes. A clean, dampened black-tea bag works like a gauze pad with the added benefit of tannins, which encourage the blood to clot. Wrap it in a single layer of clean gauze or kitchen roll if the bag feels fragile, bite firmly on it over the socket for 20 to 30 minutes, and do not keep removing it to check. It is a useful follow-up if plain gauze has not worked.',
      },
      {
        question: 'I take blood thinners and my extraction will not stop bleeding. What should I do?',
        answer:
          'Apply the same firm pressure with gauze or a dampened tea bag for a full 30 minutes, and do not stop or skip a dose of your medication on your own. If the bleeding continues despite two rounds of pressure, contact the practice that removed the tooth, call NHS 111, or go to A&E if it is heavy. Tell whoever treats you exactly which medication you take, including warfarin, apixaban, rivaroxaban or clopidogrel.',
      },
      {
        question: 'Can I go to sleep if my extraction site is still oozing?',
        answer:
          'If it is only a slight ooze that tints your saliva, yes. Put an old towel over your pillow, sleep with your head raised on an extra pillow, and expect a little spotting overnight. If blood is actively pooling in your mouth, do not settle for the night until you have controlled it with firm pressure or sought help, because swallowing a steady flow of blood will also make you feel sick.',
      },
      {
        question: 'Should I go to A&E for a bleeding tooth socket in Enfield?',
        answer:
          'A&E is the right place if bleeding is heavy and has not responded to two rounds of firm 20-minute pressure, if you feel faint, dizzy or unwell from blood loss, or if you have a bleeding disorder or take anticoagulants and cannot get dental advice quickly. For most of the borough the nearest full A&E is North Middlesex University Hospital in Edmonton. Chase Farm Hospital runs an urgent treatment centre rather than a full A&E, so for heavy bleeding North Middlesex is the safer destination.',
      },
    ],
    content: [
      { type: 'p', text: 'A socket that keeps bleeding hours after a tooth extraction is one of the more alarming dental problems to deal with at home, but it is usually one of the most fixable. Firm, uninterrupted pressure on the right spot stops the great majority of post-extraction bleeds within 20 minutes. This page covers how to apply that pressure properly, what counts as normal oozing, and the small number of situations that need A&E. It is part of our wider guide to [bleeding, swelling and other dental emergencies in Enfield](/guides/bleeding-swelling-denture-emergencies-enfield/).' },
      { type: 'note', text: 'Call 999 or go to A&E now if bleeding is heavy and continuous despite firm pressure, if you feel faint, dizzy or short of breath, if you are coughing or vomiting blood, or if swelling in your mouth or neck is making it hard to breathe or swallow. For bleeding that is slowing but will not quite stop, follow the steps below, call NHS 111 if you cannot reach a dentist, and use the matching form on this page for same-day dental help in Enfield.' },

      { type: 'h2', text: 'First, know what normal looks like' },
      { type: 'p', text: 'Some bleeding after an extraction is expected. For the first few hours the socket will ooze, and because a small amount of blood mixes with a large amount of saliva, it often looks far worse than it is. Pink-tinged spit for the rest of the day, and a few spots on the pillow the next morning, are within the range of normal healing. What you are watching for is active bleeding: blood that pools in the mouth, drips, or soaks through gauze within a few minutes. That is the situation the rest of this page deals with.' },

      { type: 'h2', text: 'The 20-minute pressure technique' },
      { type: 'p', text: 'Pressure works by holding the blood still long enough for a clot to form in the socket. Most home attempts fail for one of two reasons: the pad is in the wrong place, or it is lifted every few minutes to check. Do it like this:' },
      { type: 'list', items: [
        'Roll clean gauze, a clean cotton handkerchief or kitchen roll into a firm pad about the size of your thumb, and dampen it slightly so it does not stick to the clot.',
        'Place the pad directly over the socket, not the teeth beside it, and bite down firmly. You should feel pressure on the gum where the tooth was.',
        'Keep biting for a full 20 minutes by the clock. Do not lift the pad to look, talk as little as possible, and stay sitting upright.',
        'After 20 minutes, remove the pad gently. If the socket is still actively bleeding, repeat once with a fresh pad, or with a dampened black-tea bag, whose tannins help the clot form.',
      ] },
      { type: 'p', text: 'If a second full round of pressure has not brought the bleeding under control, stop repeating the cycle and get help: contact the practice that took the tooth out, call NHS 111, or go to A&E if it is heavy. Two failed rounds of proper pressure is the signal to escalate, not to keep trying alone into the night.' },

      { type: 'h2', text: 'Protect the clot once bleeding stops' },
      { type: 'p', text: 'The clot that forms in the socket is the wound dressing, and losing it restarts the bleeding and can lead to the very painful problem of dry socket a few days later. For the first 24 hours, avoid rinsing, spitting and drinking through straws, all of which create suction or wash the clot away. Avoid alcohol, hot drinks, vigorous exercise and, above all, smoking, which is the biggest single risk to a healing socket. Eat soft, lukewarm food on the other side of the mouth, and from the day after the extraction begin gentle warm salt-water bathing rather than forceful swilling. The Oral Health Foundation publishes good plain-language aftercare advice at [dentalhealth.org](https://www.dentalhealth.org/) if you want a second reference for the days ahead.' },

      { type: 'h2', text: 'Blood thinners and conditions that affect clotting' },
      { type: 'p', text: 'If you take warfarin, apixaban, rivaroxaban, clopidogrel or another medicine that affects clotting, bleeding after an extraction may be slower to settle, and the pressure technique matters even more. Use a full 30 minutes of pressure rather than 20, and never stop or skip a dose of your medication on your own initiative, because the risk that protects you from is far more serious than a bleeding socket. The same applies if you have a diagnosed bleeding disorder such as haemophilia or von Willebrand disease, or liver problems that affect clotting. In all of these cases, a socket that is still bleeding after two rounds of pressure deserves a lower threshold for seeking help, and the team treating you needs to know exactly what you take.' },

      { type: 'h2', text: 'Where to get help in Enfield, hour by hour' },
      { type: 'p', text: 'During working hours, your first call should be the practice that removed the tooth, because the dentist who took it out is best placed to pack or stitch the socket, and aftercare for a recent extraction is normally part of the treatment. If you cannot reach them, or the extraction happened elsewhere and you are stuck, we connect people across the borough, from [Edmonton](/location/edmonton/) and Ponders End up to Enfield Town and the EN2 villages, with a vetted local dentist who can see urgent cases the same day. We are an independent matching service rather than a practice, so we do not treat you ourselves, but introductions usually happen within the hour while practices are open.' },
      { type: 'p', text: 'In the evening, overnight or at the weekend, [NHS 111](https://111.nhs.uk/) is the route into urgent NHS dental care for north London and can book you into an out-of-hours clinic if the socket needs packing. For heavy bleeding that pressure has not controlled, or any faintness or breathing difficulty, go to A&E at North Middlesex University Hospital in Edmonton rather than waiting for a dental appointment. Keep up gentle pressure on the way, stay upright, and bring a list of any medication you take.' },
    ],
  },

  {
    slug: 'sudden-toothache-causes',
    hub: 'severe-toothache-enfield',
    draft: false,
    title: 'Common causes of sudden toothache',
    metaTitle: 'Sudden Toothache: Common Causes Explained (Enfield)',
    metaDescription:
      'Why a toothache can start out of nowhere: decay reaching the nerve, cracked teeth, infection, sinus pressure. Danger signs, and same-day dentist matching in Enfield.',
    category: 'Emergency basics',
    publishDate: '2026-06-15',
    updatedDate: '2026-06-15',
    excerpt:
      'A toothache that appears out of nowhere almost always has a cause that has been building quietly. Here are the usual culprits, the warning signs that make sudden tooth pain an emergency, and how to get seen quickly in Enfield.',
    faqs: [
      {
        question: 'Why did my toothache start suddenly when the tooth seemed fine yesterday?',
        answer:
          'Most "sudden" toothache is the final stage of a slow process. Decay can tunnel through a tooth for months without symptoms because enamel and dentine have no nerve supply of their own. Pain only arrives when bacteria or temperature changes finally reach the pulp at the centre of the tooth, and at that point it tends to arrive hard and fast. A crack, a failing old filling or an infection at the root tip behave the same way: quiet for a long time, then suddenly very loud.',
      },
      {
        question: 'My sudden toothache disappeared on its own. Is the problem gone?',
        answer:
          'Usually not. When severe tooth pain stops abruptly without treatment, the most common explanation is that the nerve inside the tooth has died, so it can no longer send pain signals. The decay or infection that killed it is still there and still progressing, and it frequently returns weeks later as an abscess or facial swelling. A tooth that hurt badly and then went silent still needs a dental examination.',
      },
      {
        question: 'How do I tell sinus pressure from a real toothache?',
        answer:
          'Sinusitis tends to make several upper back teeth ache at once rather than one tooth, the ache changes when you bend forward or lie down, and it usually comes with a blocked or runny nose, facial pressure under the eyes, or a recent cold. A genuine dental cause more often picks out one tooth, reacts sharply to hot, cold or biting, and does not care which way your head is tilted. If you cannot tell, a dentist can test the individual teeth and rule the mouth in or out.',
      },
      {
        question: 'Is sudden toothache an emergency or can it wait for a routine appointment?',
        answer:
          'Severe pain that paracetamol and ibuprofen cannot control, pain with facial swelling, a bad taste with fever, or a tooth that has cracked and is hurting all justify a same-day appointment. A mild ache or a brief twinge with cold that settles in seconds can usually wait a few days, but should still be checked rather than ignored. If you have swelling spreading towards the eye or neck, difficulty swallowing or breathing, or a high fever, that is beyond a dentist: call 999 or go to A&E.',
      },
      {
        question: 'Why is my sudden toothache so much worse at night?',
        answer:
          'Lying flat increases blood pressure in the head, which raises pressure inside an already inflamed tooth, and at night there are no distractions to dilute the signal. Grinding or clenching during sleep can add to it. Propping yourself up on two or three pillows, taking ibuprofen and paracetamol within their stated limits, and avoiding very hot or cold drinks late in the evening usually makes the night survivable until you can be seen the next morning.',
      },
    ],
    content: [
      { type: 'p', text: 'Toothache that arrives out of nowhere almost never comes from nowhere. The usual causes are decay finally reaching the nerve, a crack or failing filling, an infection brewing at the root, gum problems, or pressure from the sinuses above the upper teeth. This page walks through each cause, the danger signs, and how to get examined quickly in Enfield. It sits within our [Enfield guide to severe toothache and dental pain](/guides/severe-toothache-enfield/).' },
      { type: 'note', text: 'Call 999 or go to A&E now if you have swelling spreading towards your eye, throat or neck, difficulty swallowing or breathing, or a high fever with feeling very unwell. For severe dental pain without those signs, call NHS 111 (free, 24 hours) if you cannot reach a dentist, or use the matching form on this page for a same-day introduction to a vetted Enfield dentist.' },

      { type: 'h2', text: 'Decay that has reached the nerve' },
      { type: 'p', text: 'The single most common cause of sudden severe toothache is tooth decay that has finally tunnelled through to the pulp, the bundle of nerves and blood vessels at the centre of the tooth. Enamel and dentine have no pain supply of their own, so a cavity can grow for months in silence. Once bacteria reach the pulp it becomes inflamed inside a rigid chamber that cannot swell, and the result is the throbbing, hot-and-cold-sensitive, worse-when-lying-down pain dentists call irreversible pulpitis. The name is the important part: at this stage the nerve will not recover on its own, and the choices are root canal treatment or extraction. Painkillers buy time, but only a dentist can deal with the cause, which is why this kind of pain justifies a same-day [severe toothache appointment](/services/severe-toothache/) rather than a place on a routine waiting list.' },

      { type: 'h2', text: 'A cracked tooth or a failing filling' },
      { type: 'p', text: 'A tooth can crack on a stray olive stone, an unpopped popcorn kernel, or simply from years of clenching, and the crack is often invisible. The classic pattern is a sharp pain on biting, especially on release of the bite, with sensitivity to cold, in a tooth that looks normal. Old large fillings are a related culprit: the seal around a filling breaks down over the years, fluid and bacteria leak underneath, and one day the tooth that has been quietly deteriorating announces itself. Heavily filled teeth are also the ones most likely to crack, because less natural tooth structure is holding them together. Cracks do not heal, and biting on one repeatedly can split the tooth beyond saving, so chew on the other side and get it examined within a day or two.' },

      { type: 'h2', text: 'Infection at the root' },
      { type: 'p', text: 'When the nerve of a tooth dies, the space inside becomes a sheltered home for bacteria, and infection can build at the root tip into a dental abscess. Sudden severe pain with a tooth that feels raised in its socket and is tender to the slightest tap, a foul taste, a bad smell, swelling in the gum or face, or fever alongside the toothache all point this way. An abscess does not settle by itself, and antibiotics alone are at best a holding measure; the infection needs draining and the tooth needs treating. This cause carries the genuine emergencies of dentistry: if swelling spreads towards the eye or down into the neck, or swallowing or breathing becomes difficult, that is a hospital problem, not a dental appointment. The NHS advice on dental abscesses at nhs.uk says the same: see a dentist urgently, and treat spreading facial swelling as an emergency.' },

      { type: 'h2', text: 'Pain that is not coming from a tooth at all' },
      { type: 'p', text: 'The roots of the upper back teeth sit directly beneath the maxillary sinuses, so a heavy cold or sinusitis can make a whole row of upper teeth ache convincingly. The giveaways are several teeth aching at once, pain that changes when you bend forward, and congestion or facial pressure alongside it. Jaw clenching and grinding, often during sleep and often in stressful weeks, can also produce aching teeth and jaw muscles that feel worse first thing in the morning. Less commonly, gum disease or food packed hard between two teeth produces a localised ache that feels dental but starts in the gum. These causes matter because the treatment is completely different, and a dentist can usually separate them from true tooth pain in one examination by testing the individual teeth.' },

      { type: 'h2', text: 'Finding the cause quickly in Enfield' },
      { type: 'p', text: 'Working out which of these is behind your pain takes an examination and usually an X-ray, not guesswork. We are an independent matching service, not a practice, and we connect people across the borough, from Enfield Town and Bush Hill Park out to [Palmers Green](/location/palmers-green/) and Edmonton, with vetted local dentists who keep same-day slots for urgent cases. Introductions usually happen within the hour during working hours. In the evening or at the weekend, NHS 111 can book urgent NHS dental care for north London. While you wait to be seen, our guide to [managing severe toothache before you can be seen](/blog/managing-severe-toothache-before-you-can-be-seen/) covers safe pain relief and the mistakes, like aspirin on the gum, that make things worse. The Oral Health Foundation at dentalhealth.org also publishes plain-language advice on toothache and decay. Whatever the cause turns out to be, sudden tooth pain is the tooth telling you something has changed, and it is always worth listening within a day or two rather than waiting for it to shout louder.' },
    ],
  },

  {
    slug: 'loose-or-displaced-tooth-first-aid',
    hub: 'knocked-out-tooth-enfield',
    draft: true,
    title: 'What to do if a tooth is loose or pushed out of place',
    metaTitle: 'Loose or Displaced Tooth: Safe First Aid (Enfield)',
    metaDescription:
      'A tooth knocked loose or pushed out of place in Enfield needs the right first aid, not force. What to do, what to leave alone, and how to be seen same day.',
    category: 'Trauma & first aid',
    publishDate: '2026-06-13',
    updatedDate: '2026-06-13',
    excerpt:
      'A tooth that is loose or pushed out of position after a knock is still attached, and how you handle it matters. Here is the safe first aid before a dentist sees you in Enfield, what to leave well alone, and the signs that mean hospital instead.',
    faqs: [
      {
        question: 'Is a loose or displaced tooth a dental emergency?',
        answer:
          'Yes, treat it as a same-day problem. A permanent tooth that has been knocked loose, pushed sideways, driven up into the gum, or moved out of line after a blow has injured the ligament and bone that hold it, and the sooner a dentist repositions and supports it the better the outlook. Use NHS 111 out of hours, or our same-day matching during the day, to be seen quickly.',
      },
      {
        question: 'Should I push a displaced tooth back into position myself?',
        answer:
          'Only very gently, and only a tooth that has been pushed outwards and feels like it will slot back with light finger pressure. If it resists, stop. Never force a tooth that has been driven up into the gum or shoved sideways into the bone, and never try to reposition a baby tooth in a child. Forcing a displaced tooth can damage the root and the bone further. Leave it as it is and let a dentist do the repositioning.',
      },
      {
        question: 'What is the difference between a knocked-out tooth and a displaced one?',
        answer:
          'A knocked-out tooth has come completely out of the socket and is in your hand or on the floor, which is the most time-critical dental injury. A displaced tooth is still attached but has been loosened, pushed out, or moved out of line. Both need urgent care, but the first aid differs. If the tooth is fully out, follow our guide on [a knocked-out tooth in the first 60 minutes](/blog/what-to-do-if-you-knock-out-a-tooth/) instead.',
      },
      {
        question: 'Can a loosened tooth tighten back up on its own?',
        answer:
          'A tooth that was only slightly loosened and is still in its normal position often does firm up over a couple of weeks if you rest it on a soft diet and avoid biting on it. Even so, have it checked, because the nerve can die quietly after an injury and show up later as discolouration or an abscess. A tooth that has actually moved out of line needs a dentist to reposition and splint it; it will not correct itself.',
      },
      {
        question: 'Where can I get an emergency dentist in Enfield for a displaced tooth?',
        answer:
          'During the day, call your own dentist first if you have one. If you do not, or cannot get through, our same-day matching connects you with a vetted emergency dentist across the EN postcodes within about an hour. Out of hours, at the weekend, or on a bank holiday, NHS 111 directs you to urgent NHS dental care for north London. For a serious facial injury, A&E or 999 comes first.',
      },
    ],
    content: [
      { type: 'p', text: 'A tooth that has been knocked loose or pushed out of line after a fall, a sporting knock or a blow to the face is still attached, unlike a tooth that has come fully out. That changes the first aid completely. The aim before you are seen is to leave the tooth roughly where it is, protect it, ease the pain, and get to a dentist the same day, because the ligament and bone holding the tooth recover far better when it is repositioned and supported early. This guide is part of our wider advice on a [knocked-out or dislodged tooth in Enfield](/guides/knocked-out-tooth-enfield/).' },
      { type: 'note', text: 'Call 999 or go to A&E first if the injury came with a heavy blow to the head and you were knocked out, are confused or vomiting, may have a broken jaw, have bleeding you cannot control with ten minutes of pressure, or any difficulty breathing or swallowing. For out-of-hours dental-only help in Enfield, call NHS 111. For same-day matching with a vetted Enfield emergency dentist, use the form on this page.' },

      { type: 'h2', text: 'The different ways a tooth can be displaced' },
      { type: 'p', text: 'Dentists group these injuries by how the tooth has moved, and the right first aid depends on which one you are looking at:' },
      { type: 'list', items: [
        'Loosened but in place: the tooth is wobbly to the touch but sitting in its normal position. This is the mildest type and often settles with rest.',
        'Pushed outwards: the tooth looks longer than its neighbours or feels like it is sticking down or up out of the socket.',
        'Moved sideways: the tooth has been shoved forwards, backwards or to one side and no longer lines up with the others. It is often locked in the new position and feels firm.',
        'Driven into the gum: the tooth looks shorter than the others because it has been forced up into the bone. This can look deceptively minor.',
      ] },
      { type: 'p', text: 'You do not need to name the injury correctly to give good first aid. What matters is knowing when to leave the tooth alone, which is most of the time.' },

      { type: 'h2', text: 'Safe first aid, step by step' },
      { type: 'p', text: 'Stay calm and work through these. Nothing here needs anything you would not have at home.' },
      { type: 'list', items: [
        'Leave the tooth where it is. The one exception is below.',
        'If the tooth has been pushed outwards and feels like it will move back with very light finger pressure, you can gently guide it towards its normal position. If it resists at all, stop and leave it.',
        'Never force a tooth that has been pushed sideways or driven up into the gum, and never reposition a baby tooth in a child. Forcing it can harm the root, the bone and, in a child, the adult tooth developing underneath.',
        'Bite gently on a clean, folded piece of gauze or a clean cloth to steady the tooth and ease any oozing from the gum.',
        'Hold a cold compress or a cloth-wrapped ice pack against the outside of your cheek for swelling.',
        'Take paracetamol or ibuprofen at the dose on the packet if they are safe for you. Do not hold a painkiller against the gum, as it burns the tissue.',
        'Switch to soft, cool foods and chew on the other side until you are seen.',
      ] },

      { type: 'h2', text: 'Why getting seen quickly matters' },
      { type: 'p', text: 'A displaced tooth is held by a thin layer of ligament fibres and the surrounding bone, both of which are injured when the tooth moves. A dentist can reposition the tooth accurately and splint it to its neighbours for a couple of weeks so it heals in the right place, and can check whether the nerve has survived. Left out of position, a tooth heals where it lies, which can leave the bite wrong and the tooth harder to save. The NHS advises seeing a dentist as soon as possible after any injury that loosens or moves a tooth, and not waiting for pain to build. Even a tooth that only feels slightly loose deserves a check, because the nerve can die silently and surface weeks later as a darkened tooth or a [dental abscess](/guides/dental-abscess-enfield/).' },

      { type: 'h2', text: 'When it is a hospital problem first' },
      { type: 'p', text: 'Most loosened and displaced teeth are a job for an emergency dentist, but the way these injuries happen, a fall, a tackle, a collision, means a head or facial injury sometimes comes with them, and that takes priority. Treat it as a medical emergency and call 999 or go to A&E if there was a heavy blow to the head with loss of consciousness, confusion, repeated vomiting or a severe headache, if you suspect a broken jaw because the teeth no longer meet or the jaw will not open and close properly, if there is bleeding you cannot control, or if breathing or swallowing is affected. For people in Enfield, the nearest major A&E is North Middlesex University Hospital on Sterling Way in Edmonton. Chase Farm Hospital in Enfield runs an urgent treatment centre rather than a full A&E, so for a serious facial injury go to North Middlesex or call 999. If you are unsure how serious it is, NHS 111 can assess you and tell you where to go.' },

      { type: 'h2', text: 'Being seen the same day across Enfield' },
      { type: 'p', text: 'Once the tooth is steadied and the pain is managed, the priority is a dentist. During normal hours your own dentist is the first call if you have one. If you do not, or cannot get an appointment, we connect you with a vetted dentist for a [knocked-out or displaced tooth](/services/knocked-out-tooth/) across the borough, from [Enfield Town](/location/enfield-town/) and Bush Hill Park in EN1 and EN2, through Enfield Highway and Ponders End in EN3, to Edmonton and Palmers Green in the south. We are an independent matching service and do not treat you ourselves, but most introductions happen within the hour.' },
      { type: 'p', text: 'Out of hours, at the weekend or on a bank holiday, NHS 111 is the route to urgent NHS dental care across north London and can advise when no dentist is immediately available. You can also use the same-day matching form on this page at any time, and we will connect you with a dentist who can reposition the tooth, splint it if needed, and check that it heals in the right place.' },
    ],
  },
  {
    slug: 'cracked-tooth-pain',
    hub: 'broken-chipped-tooth-enfield',
    draft: true,
    title: 'Cracked tooth pain: why it hurts and what to do',
    metaTitle: 'Cracked Tooth Pain: Causes and Safe First Aid',
    metaDescription:
      'Cracked tooth that hurts to bite on in Enfield? Why a crack causes sharp pain, safe first aid, the warning signs, and how to be seen the same day.',
    category: 'Pain management',
    publishDate: '2026-06-15',
    updatedDate: '2026-06-15',
    excerpt:
      'A cracked tooth often hurts in a very particular way, a sharp jab as you bite and a twinge as you let go, sometimes with no break you can see. Here is what causes it, how to ease it safely in Enfield, and the signs that mean you need to be seen quickly.',
    faqs: [
      {
        question: 'Why does my cracked tooth only hurt when I bite down?',
        answer:
          'A crack lets the two halves of the tooth flex apart slightly under biting pressure, then snap back as you release. That movement irritates the nerve inside, which is why the classic sign of a cracked tooth is a sharp pain on biting and a second twinge as you let go, often worse on hard or chewy food. Pain that comes and goes like this, rather than a constant ache, is typical and is worth getting checked even between flare-ups.',
      },
      {
        question: 'Is a cracked tooth a dental emergency?',
        answer:
          'Most cracked teeth are urgent rather than a true emergency. They need a dentist promptly, usually within a day or two, but they are not normally a danger to your health in the next few hours. It becomes more pressing if the pain is constant and throbbing, you have facial or gum swelling, a fever, or the pain wakes you at night, as these suggest the nerve or a deeper split is involved.',
      },
      {
        question: 'I cannot see a crack. Could my tooth still be cracked?',
        answer:
          'Yes. Many cracks are hairline and invisible to the eye, which is why dentists sometimes call the symptoms cracked tooth syndrome. A crack can run under a filling or below the gum where you cannot see it. A dentist can find it with a bite test, a dye, magnification or an X-ray. Do not assume your tooth is fine simply because it looks intact.',
      },
      {
        question: 'How do I ease cracked tooth pain until I am seen?',
        answer:
          'Chew on the other side, avoid very hot, very cold, hard or sticky food, and take paracetamol or ibuprofen at the dose on the packet if they are safe for you. A cold compress on the outside of the cheek helps any swelling. Never hold an aspirin tablet against the gum, as it burns the tissue. These measures manage the pain but do not fix the crack, so still arrange to be seen.',
      },
      {
        question: 'Can I get a same-day emergency dentist for a cracked tooth in Enfield?',
        answer:
          'Often, yes. During normal hours your own dentist is the first call if you have one. If you do not, or cannot get an appointment, our same-day matching connects you with a vetted Enfield emergency dentist, usually within the hour. We are an independent matching service and do not treat you ourselves. Out of hours, at the weekend or on a bank holiday, NHS 111 can direct you to urgent NHS dental care across north London.',
      },
    ],
    content: [
      { type: 'p', text: 'A cracked tooth often hurts in a very particular way, a sharp jab when you bite down and a second twinge as you release, sometimes with sensitivity to cold and frequently with no break you can see. Most cracked teeth are not a true emergency, but they do need a dentist promptly before the crack deepens. Here is what to do in Enfield while you arrange to be seen.' },
      { type: 'note', text: 'Call 999 or go to A&E if a cracked tooth followed a heavy blow to the head or face and you were knocked out, have uncontrolled bleeding, suspect a broken jaw, or have any difficulty breathing or swallowing. For out-of-hours dental help in Enfield, call NHS 111. For same-day matching with a vetted Enfield emergency dentist, use the form on this page.' },

      { type: 'h2', text: 'Why a cracked tooth hurts the way it does' },
      { type: 'p', text: 'A cracked tooth behaves differently from a tooth that has visibly chipped or broken. When a crack runs through the hard outer layers, the two sides can flex apart a fraction under the force of biting and then close again as you let go. That tiny movement disturbs the pulp, the bundle of nerves and blood vessels at the centre of the tooth, which produces the hallmark of a crack: a sharp pain on biting and a distinct second twinge on release. Cold drinks and air can set off the same nerve, so sensitivity often comes alongside it. Because the pain comes in flashes rather than as a constant ache, it is easy to dismiss, but a crack rarely heals on its own and tends to spread over time. This guide sits within our wider advice on [a broken, chipped or cracked tooth in Enfield](/guides/broken-chipped-tooth-enfield/), and focuses on the cracked tooth that hurts without an obvious break.' },

      { type: 'h2', text: 'First aid for a cracked tooth before you are seen' },
      { type: 'p', text: 'The aim is to calm the nerve, protect the tooth from further flexing, and avoid anything that makes the crack worse. None of this needs anything beyond what you would have at home.' },
      { type: 'list', items: [
        'Chew on the opposite side of your mouth, and keep that tooth out of action until a dentist has assessed it.',
        'Avoid very hot, very cold, hard or sticky food and drink, as temperature changes and pressure both trigger the pain.',
        'Rinse gently with warm salt water to keep the area clean, especially if the gum around the tooth is tender.',
        'Take paracetamol or ibuprofen at the dose on the packet if they are safe for you, ibuprofen helps if there is any swelling.',
        'Hold a cold compress, a cloth-wrapped ice pack or a bag of frozen peas, against the outside of the cheek for swelling.',
        'If a piece has lifted and left a sharp edge, cover it with dental wax from a pharmacy or a piece of sugar-free chewing gum so it does not cut your tongue.',
        'Never hold an aspirin tablet or any painkiller directly against the gum. It burns the soft tissue and creates a second, separate problem.',
      ] },

      { type: 'h2', text: 'Cracked, chipped or broken: telling them apart' },
      { type: 'p', text: 'It helps to know which problem you have, because the urgency differs. A chip is a small piece of enamel lost from the surface, often painless and rarely urgent, though still worth a check. A tooth that has visibly broken, with a fragment gone and the inner tooth exposed, needs prompt first aid of its own and can be sharply painful. A crack is the one that catches people out: the tooth looks whole, yet it hurts to bite on. Cracks range from a harmless surface line in the enamel to a cracked cusp, a crack reaching the nerve, or in the worst case a tooth split in two. You cannot tell from the outside how deep a crack runs, which is exactly why a dentist needs to examine it rather than you waiting to see if it settles.' },

      { type: 'h2', text: 'Warning signs that mean urgent care' },
      { type: 'p', text: 'A cracked tooth that only twinges on biting can usually wait a day or two for an appointment. Treat it as more urgent, and aim to be seen the same day, if you notice any of the following, because they suggest the nerve is inflamed or infected or the tooth has split:' },
      { type: 'list', items: [
        'A constant, throbbing ache rather than a brief flash of pain when you bite.',
        'Pain that wakes you at night or that painkillers no longer hold.',
        'Swelling of the gum around the tooth or of the face or cheek.',
        'A bad taste, a gum boil, fever or feeling generally unwell, which can mean infection.',
        'A tooth that now feels loose, or a piece that visibly moves when you press it.',
      ] },
      { type: 'p', text: 'Swelling that spreads towards the eye, the neck or the floor of the mouth, or any difficulty breathing or swallowing, is a medical emergency: call 999 or go to A&E. For Enfield, the nearest major A&E is North Middlesex University Hospital on Sterling Way in Edmonton. Chase Farm Hospital in Enfield runs an urgent treatment centre rather than a full twenty-four-hour A&E, so for a serious facial injury head to North Middlesex or call 999. The NHS advises seeing a dentist as soon as possible after any dental injury rather than waiting for the pain to build, and the Oral Health Foundation at dentalhealth.org publishes plain-language advice on cracked and sensitive teeth that does not contradict this guidance. Left untreated, a crack can let bacteria reach the pulp and turn into a painful infection weeks later, so it is worth acting while the problem is still small.' },

      { type: 'h2', text: 'Getting seen quickly across Enfield' },
      { type: 'p', text: 'Once the pain is settled, the priority is an examination, because only a dentist can find the crack and decide whether the tooth needs a filling, a crown to hold it together, root canal treatment or, for a tooth split below the gum, extraction. Acting early often makes the difference between saving the tooth with a crown and losing it. During normal hours your own dentist is the first call if you have one. If you do not, or cannot get an appointment, we connect you with a vetted dentist for the [repair of a cracked or broken tooth](/services/broken-or-chipped-tooth/) across the borough, from [Enfield Town](/location/enfield-town/) and Bush Hill Park in EN1 and EN2, through Enfield Highway and Ponders End in EN3, to Edmonton and Palmers Green in the south.' },
      { type: 'p', text: 'We are an independent matching service and do not treat you ourselves, but most introductions happen within the hour during working hours. Out of hours, at the weekend or on a bank holiday, NHS 111 is the route to urgent NHS dental care across north London and can advise when no dentist is immediately available. You can also use the same-day matching form on this page at any time, and we will connect you with a dentist who can find the crack, ease the pain, and put a lasting repair in place before it gets worse.' },
    ],
  },
  {
    slug: 'lost-crown-first-aid',
    hub: 'lost-filling-or-crown-enfield',
    draft: true,
    title: 'What to do if a crown comes off',
    metaTitle: 'Lost a Crown? Safe First Aid Before the Dentist',
    metaDescription:
      'Lost a crown in Enfield? How to keep it safe, the temporary cement that can hold it back on, the warning signs to act on, and how to be seen fast.',
    category: 'Emergency basics',
    publishDate: '2026-06-15',
    updatedDate: '2026-06-15',
    excerpt:
      'A crown coming off is rarely a true emergency, and unlike a filling the crown itself can often be re-cemented. Here is the safe first aid before you are seen in Enfield, how to protect the tooth, and the signs that mean you should not wait.',
    faqs: [
      {
        question: 'Should I keep the crown, and can it be put back on?',
        answer:
          'Yes, keep it. Unlike a filling, a crown is a custom-made cap and in many cases a dentist can clean and re-cement the same crown, so it is worth holding on to. Rinse it gently, dry it, and store it somewhere safe such as a small pot or sealed bag. There is no need to keep it in milk the way you would a knocked-out tooth, because it is not living tissue. Bring it to your appointment even if it looks worn, as the dentist will decide whether it can be reused or needs replacing.',
      },
      {
        question: 'Can I cement my crown back on myself until I am seen?',
        answer:
          'A pharmacy temporary dental cement, sold for exactly this, can hold a clean, sound crown back on for a few days. Clean and dry both the crown and the tooth, apply a thin layer of the cement inside the crown, seat it the right way round, bite gently to settle it, and wipe away the excess. Only do this if the crown clearly fits back over the tooth without forcing. Never use household glue, superglue or any DIY adhesive, as these are toxic, set hard in the wrong place, and can ruin a crown that could otherwise have been saved.',
      },
      {
        question: 'I swallowed my crown, is that dangerous?',
        answer:
          'Swallowing a crown is usually harmless. It will normally pass through naturally over a day or two without causing any problem. The exception is if you think you may have breathed it in rather than swallowed it, or you develop coughing, wheezing, chest pain or any difficulty breathing, in which case you should seek urgent medical help or call 999. Either way the tooth underneath is now exposed and will need a new crown, so still arrange to be seen.',
      },
      {
        question: 'Is a lost crown a dental emergency, and how fast do I need to be seen?',
        answer:
          'A lost crown is usually urgent rather than a true emergency, so a few days is often acceptable if the tooth is comfortable. See a dentist sooner, within a day or two, if the tooth is painful or very sensitive, if there is a sharp edge or an exposed post, or if much of the tooth has broken away with the crown. An exposed core can decay or chip quickly, and a tooth that has had root canal treatment can fracture without its crown to protect it.',
      },
      {
        question: 'Why has the tooth become sensitive now the crown is off?',
        answer:
          'A crown covers and seals the prepared tooth underneath. Once it is off, that inner surface is open to air, hot, cold and sweet things, which can give a sharp twinge. Mild sensitivity is normal and not alarming. A deep, throbbing or spontaneous ache, pain that wakes you at night, or any swelling suggests the nerve is involved or infected, and that needs prompt dental care rather than a wait.',
      },
    ],
    content: [
      { type: 'p', text: 'A crown coming off is unsettling, but it is rarely a true emergency, and there is one piece of good news that sets it apart from a lost filling: the crown itself can often be re-cemented. A crown is a custom-made cap that was fitted to your tooth, so where a filling that drops out cannot be reused, a sound crown frequently can. The first aid is simple. The aim before you are seen is to keep the crown safe, protect and clean the exposed tooth, ease any sensitivity, and arrange a proper re-cementing before the open tooth causes a bigger problem. This guide sits within our fuller [advice on a lost filling or crown in Enfield](/guides/lost-filling-or-crown-enfield/) and focuses on what to do in the first day or two after a crown comes off.' },
      { type: 'note', text: 'A lost crown on its own is not a 999 emergency. Call 999 or go to A&E only if you have swelling spreading towards your eye, cheek, neck or the floor of your mouth, difficulty breathing or swallowing, or a high fever with shaking chills, as these are signs of a spreading infection. For dental pain or a lost crown out of hours in Enfield, call NHS 111. To be matched with a vetted Enfield dentist, use the form on this page.' },

      { type: 'h2', text: 'First, look after the crown and clean the tooth' },
      { type: 'p', text: 'In the first few minutes, the priority is to protect the crown so it can be reused, and to clean the tooth it came off. Work through these steps:' },
      { type: 'list', items: [
        'Take the crown out of your mouth so you do not swallow or inhale it, then rinse it gently under cool water.',
        'Dry the crown and store it somewhere safe, such as a small pot or a sealed bag. It does not need to be kept in milk, because it is not living tissue.',
        'Rinse your mouth gently with warm water or warm salt water to clear away any debris around the exposed tooth.',
        'Run your tongue or a clean finger over the tooth to feel for a sharp edge, but do not poke inside it, and keep brushing the area gently so it stays clean.',
      ] },
      { type: 'p', text: 'Most crowns come off cleanly, leaving the prepared tooth or a small post underneath. If the crown is full of old cement or a chunk of tooth has come away inside it, keep it anyway and let the dentist judge whether it can still be used.' },

      { type: 'h2', text: 'Holding a crown back on temporarily' },
      { type: 'p', text: 'If the crown clearly slots back over the tooth, a pharmacy temporary dental cement can hold it in place for a few days until you are seen. Most Enfield pharmacies stock these small kits. To use one safely:' },
      { type: 'list', items: [
        'Clean and dry both the crown and the tooth first, so the cement has a clean surface to grip.',
        'Apply a thin layer of the temporary cement inside the crown, place it on the tooth the right way round, and bite down gently to seat it.',
        'Wipe away any cement that squeezes out around the gum, and rinse gently.',
        'Only do this if the crown seats fully without forcing. If it will not go back cleanly, leave it out, keep it safe, and protect the tooth instead.',
      ] },
      { type: 'p', text: 'Just as important is what to avoid. Never use household glue, superglue or any DIY adhesive to stick a crown back on. They are toxic, set hard in the wrong position, and can wreck a crown that a dentist could otherwise have re-cemented properly. Treat any pharmacy cement as a short-term stop-gap that lasts days, not weeks. The Oral Health Foundation, an independent UK oral-health charity, gives similar guidance on caring for a loose or lost crown and is a reliable source if you want to read further, and it will not contradict the advice here.' },

      { type: 'h2', text: 'Protecting the tooth and managing sensitivity' },
      { type: 'p', text: 'If you cannot or would rather not re-seat the crown, the exposed tooth still needs looking after. The prepared surface underneath a crown is softer and more vulnerable than enamel, so a twinge with cold, heat or sweet food is common. For mild to moderate discomfort, paracetamol or ibuprofen taken at the dose on the packet, provided they are safe for you, is the sensible first choice, and a sensitive-teeth toothpaste rubbed onto the tooth can take the edge off. Chew on the other side, and steer clear of hard, sticky, very hot or very cold food, because a tooth without its crown can chip or, if it has had root canal treatment, fracture. Rinse with warm water after meals to flush out anything lodged around the tooth, and never rest an aspirin or other painkiller tablet against the gum, as it burns the soft tissue.' },

      { type: 'h2', text: 'When a lost crown is more than a nuisance' },
      { type: 'p', text: 'A crown can come off for a simple reason, such as the cement giving way over time, or because decay has formed in the tooth underneath and loosened it. The symptoms tell you how urgently you need to be seen. Arrange prompt, same-day or next-day care if you notice any of the following:' },
      { type: 'list', items: [
        'A deep, throbbing or spontaneous ache, or pain that wakes you at night, which can mean the nerve is inflamed or infected.',
        'Pain that lingers for more than a few seconds after something hot or cold, rather than a quick twinge.',
        'A bad taste, a gum boil, or tenderness when you bite, which can signal infection starting.',
        'Much of the tooth broken away with the crown, a wobbly post, or a sharp edge that keeps catching your tongue.',
      ] },
      { type: 'p', text: 'Step the response up further if a true infection takes hold. Facial swelling, a fever, or feeling generally unwell are signs an abscess may be forming, and that should be treated as an urgent infection rather than a simple lost crown. If swelling spreads towards your eye, neck or the floor of your mouth, or you have any difficulty breathing or swallowing, call 999 or go to A&E. For Enfield, the nearest major A&E is North Middlesex University Hospital in Edmonton, while Chase Farm Hospital runs an urgent treatment centre rather than a full A&E. Out of hours for dental-only problems, NHS 111 can assess you and point you to urgent care.' },

      { type: 'h2', text: 'Getting seen across Enfield' },
      { type: 'p', text: 'Once the crown is safe and the tooth is clean, the priority is a proper re-cementing or, where the crown cannot be reused, a new one. During normal hours your own dentist is the first call if you have one. If you do not, or cannot get an appointment, we can connect you with a vetted dentist for [crown re-cementing and filling repair](/services/lost-filling-or-crown/) across the borough, from [Enfield Town](/location/enfield-town/) and Bush Hill Park in EN1 and EN2, through Enfield Highway and Ponders End in EN3, to Edmonton and Palmers Green in the south. We are an independent matching service and do not treat you ourselves, but most introductions happen within the hour.' },
      { type: 'p', text: 'Out of hours, at the weekend or on a bank holiday, NHS 111 is the route to urgent NHS dental care across north London. You can also use the same-day matching form on this page at any time, bringing the crown with you, and we will connect you with a dentist who can check the tooth for decay, re-cement a sound crown, or fit a new one so the tooth is properly protected again.' },
    ],
  },
  {
    slug: 'antibiotics-dental-abscess',
    hub: 'dental-abscess-enfield',
    draft: true,
    title: 'Do Antibiotics Cure a Dental Abscess?',
    metaTitle: 'Do Antibiotics Cure a Dental Abscess? | Enfield',
    metaDescription:
      'Antibiotics can slow a dental abscess but will not cure it. Why the tooth still needs treatment, when they are prescribed, and how to be seen fast in Enfield.',
    category: 'Emergency basics',
    publishDate: '2026-06-15',
    updatedDate: '2026-06-15',
    excerpt:
      'Antibiotics can slow a dental abscess, but they do not cure it. Here is where antibiotics fit, why the tooth itself still needs treating, and how to be matched with a vetted Enfield dentist fast.',
    faqs: [
      {
        question: 'Will antibiotics cure a dental abscess on their own?',
        answer:
          'No. Antibiotics can slow an infection that is spreading into the surrounding tissue and ease swelling for a while, but they cannot reach into the dead nerve space or the sealed pocket of pus that is feeding the abscess. Once the course finishes, the source is still there and the abscess usually flares again. Curing it means a dentist removing the source, by draining the pus, doing root canal treatment, or taking the tooth out. Antibiotics are support, not a substitute for that.',
      },
      {
        question: 'Can I take leftover or old antibiotics for a tooth abscess?',
        answer:
          'No, and it is worth being firm about this. Taking the wrong antibiotic, the wrong dose, or an incomplete course can fail to touch the infection while still driving antibiotic resistance, which makes future infections harder to treat. Old packets may also be out of date or the wrong type for a dental infection altogether. If you genuinely need antibiotics, a dentist or NHS 111 will prescribe the right one. Never self-prescribe from a previous illness or take someone else\'s.',
      },
      {
        question: 'When will a dentist prescribe antibiotics for an abscess?',
        answer:
          'Usually only when the infection is spreading beyond the tooth, for example with facial swelling, a fever, or signs of the infection moving into nearby tissue, or when treatment has to be delayed and the infection needs holding in check in the meantime. For an abscess that is still contained, the standard approach is to treat the tooth directly rather than reach for antibiotics. Your dentist decides based on what they find when they examine you.',
      },
      {
        question: 'I am already on antibiotics, do I still need to see a dentist?',
        answer:
          'Yes. Feeling better on antibiotics does not mean the abscess is cured, only that the infection has been quietened. The underlying tooth still needs treatment, and if you stop there the problem will almost always return, sometimes worse. Finish the full course exactly as prescribed, do not stop early because the swelling has gone down, and keep your dental appointment so the source can be dealt with properly.',
      },
      {
        question: 'How quickly do antibiotics work, and will they stop the pain?',
        answer:
          'If antibiotics are prescribed, any improvement in swelling usually takes a day or two to show, and they are not really a painkiller. For the pain itself, paracetamol or ibuprofen at the dose on the packet, where they are safe for you, tends to do more in the short term. If swelling is spreading towards your eye, neck or the floor of your mouth, or you have any difficulty breathing or swallowing, do not wait for antibiotics to work: call 999 or go to A&E.',
      },
    ],
    content: [
      { type: 'p', text: 'Antibiotics can slow a dental abscess, but they do not cure it. An abscess is a pocket of infection driven by a problem inside or around a tooth, and that source has to be treated by a dentist before the infection truly clears. This guide, part of our wider advice on [dealing with a dental abscess in Enfield](/guides/dental-abscess-enfield/), explains where antibiotics genuinely help, where they do not, and why being seen still matters even after the pain settles.' },
      { type: 'note', text: 'Most abscesses are urgent rather than immediately life-threatening, but call 999 or go to A&E if swelling is spreading across your face or towards your eye, neck or the floor of your mouth, if you have difficulty breathing or swallowing, or a high fever with shaking chills. While you wait, painkillers at the packet dose and warm salt-water rinses can ease the pain, but do not squeeze or lance the swelling. For an abscess out of hours in Enfield, call NHS 111, and use the form on this page to be matched with a vetted Enfield dentist.' },

      { type: 'h2', text: 'Why antibiotics alone do not cure an abscess' },
      { type: 'p', text: 'An abscess forms when bacteria build up and the body walls the infection off into a pocket of pus, usually because the nerve inside a tooth has died or deep gum disease has taken hold. Antibiotics travel in the bloodstream and can slow bacteria spreading into the surrounding tissue, which is why they sometimes reduce swelling and buy a little time. What they cannot do is reach into the dead nerve space or the sealed pocket of pus where the infection is being fed, because there is little or no blood supply there to carry the drug. So when a course of antibiotics ends, the source is still present and the abscess tends to flare again. The NHS is clear that antibiotics are not a replacement for dental treatment of an abscess.' },

      { type: 'h2', text: 'What actually clears the infection' },
      { type: 'p', text: 'Curing an abscess means removing the source, and only a dentist can do that. Depending on the tooth, it usually involves one of three things:' },
      { type: 'list', items: [
        'Draining the pus to relieve the pressure, which often eases the pain quickly.',
        'Root canal treatment to clean out the dead nerve space and seal the tooth, where the tooth can be saved.',
        'Removing the tooth if it is too damaged to keep.',
      ] },
      { type: 'p', text: 'Once the source is dealt with, the infection has nothing left to feed on and settles for good. This is why an appointment matters even when the swelling has come down. The British Dental Association describes abscess care the same way: treat the cause, and use antibiotics only as support when the infection is spreading or when treatment has to be delayed.' },

      { type: 'h2', text: 'Never rely on leftover or old antibiotics' },
      { type: 'p', text: 'It can be tempting to reach for a half-used packet from a previous illness, or to ask around for someone else\'s. Do not. Taking the wrong antibiotic, the wrong dose, or an incomplete course can fail to touch the infection while still encouraging antibiotic resistance, which makes future infections harder to treat. Old antibiotics may also be out of date or simply the wrong type for a dental infection. If your dentist or NHS 111 decides you need antibiotics, they will prescribe the right one and tell you to finish the full course. Take them exactly as directed, and do not stop early just because the swelling has gone down.' },

      { type: 'h2', text: 'What helps while you wait to be seen' },
      { type: 'p', text: 'While you arrange an appointment, the aim is to stay comfortable and watch for the danger signs. Paracetamol or ibuprofen at the dose on the packet, where they are safe for you, manages most abscess pain, and ibuprofen can help with the inflammation. Warm salt-water rinses can ease a gum abscess and help keep the area clean. Stay hydrated and stick to soft food on the other side of your mouth. Do not press, squeeze or try to lance the swelling yourself, and never rest a painkiller tablet against the gum, as it burns the soft tissue. If you are not certain that what you have is an abscess at all, our guide on [telling a dental abscess from an ordinary toothache](/blog/recognising-a-dental-abscess-vs-routine-toothache/) walks through the warning signs.' },

      { type: 'h2', text: 'Getting seen across Enfield' },
      { type: 'p', text: 'Because an abscess always needs its source treated, the priority is a dental appointment, not just a prescription. During the day, your own dentist is the first call if you have one. If you do not, or cannot get in quickly, we can connect you with a vetted dentist for [urgent abscess and infection care](/services/dental-abscess/) across the borough, from Enfield Town and Bush Hill Park in EN1 and EN2 to Edmonton and Palmers Green in the south. We are an independent matching service and do not treat you ourselves, but most introductions during opening hours happen within the hour.' },
      { type: 'p', text: 'Out of hours, at the weekend or on a bank holiday, NHS 111 is the route to urgent NHS dental care across north London. If swelling is spreading or you have any difficulty breathing or swallowing, this is no longer just a dental problem: call 999 or go to A&E, the nearest major one being North Middlesex University Hospital in [Edmonton](/location/edmonton/). Use the same-day matching form on this page at any time, and we will connect you with a dentist who can treat the abscess at its source.' },
    ],
  },

  {
    slug: 'pericoronitis-wisdom-tooth-gum-flap',
    hub: 'wisdom-tooth-emergency-enfield',
    draft: true,
    title: 'Pericoronitis and Inflamed Wisdom Tooth Gum Flaps in Enfield',
    metaTitle: 'Pericoronitis Enfield | Inflamed Wisdom Tooth Gum',
    metaDescription:
      'Pericoronitis is an inflamed gum flap over a partly erupted wisdom tooth. Safe relief, the signs that need urgent care, and same-day matching in Enfield.',
    category: 'Emergency basics',
    publishDate: '2026-06-16',
    updatedDate: '2026-06-16',
    excerpt:
      'When a wisdom tooth only partly comes through, the gum flap over it can trap food and become inflamed. Here is how to settle pericoronitis safely, the warning signs that need urgent care, and how to be matched with a vetted Enfield dentist.',
    faqs: [
      {
        question: 'What is pericoronitis?',
        answer:
          'Pericoronitis is inflammation of the gum that partly covers a tooth which has only come through some of the way, almost always a lower wisdom tooth. The loose flap of gum sitting over the tooth is called an operculum, and food and bacteria collect underneath it where a toothbrush cannot reach. The trapped debris irritates the gum, which swells, throbs and can become tender to bite on. It is one of the most common wisdom-tooth problems in adults in their late teens and twenties.',
      },
      {
        question: 'How do I relieve an inflamed gum flap at home?',
        answer:
          'Warm salt-water rinses are the mainstay: dissolve half a teaspoon of salt in a cup of warm water and rinse gently several times a day, especially after eating, to flush debris from under the flap. Keep the area as clean as you can with careful brushing, and take paracetamol or ibuprofen at the dose on the packet where they are safe for you. Stick to softer food and chew on the other side. These steps ease a mild flare-up, but if swelling spreads or you develop a fever you need to be seen.',
      },
      {
        question: 'Is pericoronitis an emergency?',
        answer:
          'Most cases are urgent rather than an emergency, meaning they need prompt dental care but not a hospital. It becomes a medical emergency if the swelling spreads across the face or down towards the neck, if you cannot open your mouth properly, or if you have any difficulty swallowing or breathing. Those signs can mean the infection is spreading into the deeper tissues, so call 999 or go to A&E rather than waiting for a dental appointment.',
      },
      {
        question: 'Why does my wisdom tooth gum keep flaring up?',
        answer:
          'A partly erupted wisdom tooth leaves a permanent trap for food and bacteria under the gum flap, so once it has flared once it often flares again whenever the area gets irritated, run down or hard to keep clean. Each episode usually settles with cleaning and time, but the underlying gap does not go away on its own. That is why a dentist will want to assess whether the tooth is likely to come through fully, whether the flap can be managed, or whether removing the tooth is the long-term fix.',
      },
      {
        question: 'Can pericoronitis go away on its own?',
        answer:
          'A mild flare-up can settle within a few days with salt-water rinses, good cleaning and painkillers, but the problem tends to return because the gum flap is still there. Do not ignore a flare-up that is getting worse, spreading, or coming with a fever, and never rely on leftover antibiotics to ride it out. A dentist can clean under the flap properly and advise on whether the wisdom tooth needs to be removed to stop it recurring.',
      },
    ],
    content: [
      { type: 'p', text: 'Pericoronitis is the medical name for an inflamed flap of gum over a wisdom tooth that has only partly come through. Food and bacteria collect under the flap, the gum swells and throbs, and biting down can hurt. This guide, part of our wider advice on [wisdom tooth and gum emergencies in Enfield](/guides/wisdom-tooth-emergency-enfield/), covers how to settle it safely and when it needs urgent attention.' },
      { type: 'note', text: 'Pericoronitis is usually urgent rather than immediately dangerous, but call 999 or go to A&E if the swelling is spreading across your face or towards your neck, if you cannot open your mouth, or if you have any difficulty swallowing or breathing. While you wait, warm salt-water rinses and painkillers at the packet dose help, but do not press or squeeze the swelling. Out of hours in Enfield, call NHS 111, and use the form on this page to be matched with a vetted Enfield dentist.' },

      { type: 'h2', text: 'What pericoronitis is and why it happens' },
      { type: 'p', text: 'A wisdom tooth often does not have enough room to come through fully, so it stays partly buried with a flap of gum, called an operculum, lying over part of the biting surface. That flap creates a pocket that traps food, plaque and bacteria in a spot a toothbrush simply cannot clean. Over time the trapped debris irritates the gum and it becomes inflamed, which is pericoronitis. It is most common around the lower wisdom teeth and most often affects people in their late teens and twenties, when these teeth are erupting. The Oral Health Foundation lists it among the usual reasons wisdom teeth cause trouble even before they are fully through.' },
      { type: 'p', text: 'The first sign is usually a dull ache and tenderness at the very back of the lower jaw, often on one side. The gum there may look red and swollen, feel sore when you bite because the upper teeth catch the puffy flap, and leave a bad taste from the trapped debris. A mild episode is uncomfortable rather than alarming, but it is worth dealing with early before it builds.' },

      { type: 'h2', text: 'Safe relief while you wait to be seen' },
      { type: 'p', text: 'The aim before your appointment is to clean the area gently and keep the inflammation down. Warm salt-water rinses are the single most useful thing you can do, because they flush debris from under the flap and soothe the gum.' },
      { type: 'list', items: [
        'Dissolve about half a teaspoon of salt in a cup of warm water and rinse gently several times a day, especially after meals.',
        'Brush the area carefully even though it is sore, as keeping it clean is what calms the inflammation.',
        'Take paracetamol or ibuprofen at the dose on the packet, where they are safe for you; ibuprofen also helps with the swelling.',
        'Stick to softer food and chew on the opposite side to avoid catching the flap.',
      ] },
      { type: 'p', text: 'Do not press or squeeze the swelling, and do not rest a painkiller tablet against the gum, which burns the soft tissue. Avoid relying on leftover antibiotics from a previous illness: they will not fix the underlying trap and can drive antibiotic resistance, and the NHS is clear that antibiotics are not a substitute for proper dental treatment of a gum infection.' },

      { type: 'h2', text: 'When pericoronitis becomes urgent or an emergency' },
      { type: 'p', text: 'Most flare-ups stay local and settle with cleaning and time. The picture changes when the infection starts to spread, and a few signs mean you should stop self-managing and seek help straight away.' },
      { type: 'list', items: [
        'Swelling spreading across the cheek, under the jaw or down towards the neck.',
        'Being unable to open your mouth more than a little way, known as trismus.',
        'Any difficulty swallowing or breathing, which is a 999 or A&E situation.',
        'A fever, feeling generally unwell, or swelling that is getting worse by the hour.',
      ] },
      { type: 'p', text: 'Difficulty breathing or swallowing, or swelling spreading towards the neck, can mean the infection is moving into the deeper tissues of the floor of the mouth, which is a genuine medical emergency. Do not wait for a dental appointment in that situation: call 999 or go to A&E, the nearest major one for much of the borough being North Middlesex University Hospital in [Edmonton](/location/edmonton/). For a flare-up that is painful but stable, you still need a dentist soon rather than later, because each episode tends to be worse than the last.' },

      { type: 'h2', text: 'What a dentist does, and why it keeps coming back' },
      { type: 'p', text: 'A dentist will clean thoroughly under the gum flap to remove the trapped debris, which often settles an acute flare-up quickly, and will check whether your bite is making things worse by trapping the flap against an upper tooth. Antibiotics are used only when the infection is spreading, not as a routine fix. The reason pericoronitis so often returns is simple: as long as the wisdom tooth stays partly erupted, the gum flap and the pocket beneath it remain, so the trap is still there once the swelling goes down.' },
      { type: 'p', text: 'That is why the longer-term decision is about the tooth itself. If the wisdom tooth is likely to come through into a useful position it may be left and monitored, but where it is impacted and the flare-ups keep recurring, removing the tooth is usually the definitive answer. A dentist will weigh this up with you based on x-rays and how often the problem returns, rather than treating each episode in isolation.' },

      { type: 'h2', text: 'Getting seen across Enfield' },
      { type: 'p', text: 'Because a recurring gum flap rarely resolves for good on its own, a dental assessment is the priority once an acute flare-up is settling. During the day your own dentist is the first call if you have one. If you do not, or cannot get in quickly, we can connect you with a vetted dentist for [urgent wisdom tooth and gum care](/services/wisdom-tooth-pain/) across the borough, from Enfield Town and Bush Hill Park in EN1 and EN2 to Palmers Green and Edmonton in the south. We are an independent matching service and do not treat you ourselves, but most introductions during opening hours happen within the hour.' },
      { type: 'p', text: 'Out of hours, at the weekend or on a bank holiday, NHS 111 is the route to urgent NHS dental care across north London. If the swelling is spreading, you cannot open your mouth, or you have any difficulty swallowing or breathing, treat it as a medical emergency and call 999 or go to A&E. Use the same-day matching form on this page at any time, and we will connect you with a dentist who can clean the area and advise on whether the wisdom tooth needs to come out.' },
    ],
  },
  {
    slug: 'emergency-dentist-cost-enfield',
    hub: 'out-of-hours-emergency-dentist-enfield',
    draft: false,
    title: 'How much does an emergency dentist cost in Enfield?',
    metaTitle: 'Emergency Dentist Cost in Enfield (NHS & Private)',
    metaDescription:
      'What an emergency dentist costs in Enfield: the NHS urgent care charge, typical private emergency fees, what drives the price, and when getting help is free.',
    category: 'Emergency basics',
    publishDate: '2026-06-22',
    excerpt:
      'Worried about the bill before you are even seen? Here is what an emergency dentist costs in Enfield, on the NHS and privately, and what moves the price.',
    faqs: [
      { question: 'How much is an emergency dentist on the NHS?', answer: 'Urgent NHS dental care is charged as a single Band 1 fee for the whole course of urgent treatment, whatever is done to get you out of pain. The NHS sets the figure nationally and reviews it each April, so check the NHS dental costs page for the current amount.' },
      { question: 'How much does a private emergency dentist cost in Enfield?', answer: 'Expect a consultation fee of roughly £80 to £150, with any treatment charged on top, so a simple problem is cheaper than one needing a root canal or an extraction. Ask for the consultation fee and a treatment estimate when you book.' },
      { question: 'Can I get free emergency dental treatment?', answer: 'Yes. NHS dental treatment, including urgent care, is free if you are under 18, under 19 and in full-time education, pregnant or have had a baby in the last 12 months, or you receive certain low-income benefits.' },
      { question: 'Is NHS 111 free for a dental problem?', answer: 'Yes. NHS 111 is free and open day and night, and can direct you to urgent dental care, an urgent treatment centre or A&E depending on your symptoms.' },
    ],
    content: [
      { type: 'p', text: "When something goes wrong with a tooth, the first worry is the pain. The second, almost always, is the cost. If you are looking for an emergency dentist in Enfield, it helps to know roughly what you will pay before you pick up the phone, because the figure depends far more on which route you take than on the practice's postcode. This guide sets out the NHS urgent charge, what a private emergency appointment typically costs, and the things that move the price up or down." },
      { type: 'h2', text: 'The NHS urgent dental charge' },
      { type: 'p', text: "If you are seen for urgent NHS dental treatment, you pay a single Band 1 charge for the whole course of urgent care, no matter how many problems are dealt with in that visit. That covers the examination, the diagnosis and the urgent treatment needed to get you out of pain, such as a temporary filling, dressing a socket or settling an infection. The NHS reviews its dental charges every April, so for the exact current figure check the [NHS guide to dental costs](https://www.nhs.uk/nhs-services/dentists/dental-costs/), which is the authoritative source. The point that matters is that urgent care is charged once, at the lowest band, rather than per procedure." },
      { type: 'p', text: "Some people pay nothing at all. NHS dental treatment is free if you are under 18, under 19 and in full-time education, pregnant or have had a baby in the last twelve months, or you receive certain low-income benefits. If any of those apply to you, an urgent NHS appointment costs you nothing." },
      { type: 'h2', text: 'What a private emergency appointment costs' },
      { type: 'p', text: "Privately, you are paying for the appointment and then for whatever treatment you need on top, so there is no single figure. As a rough guide, a private emergency consultation in and around Enfield typically runs from about £80 to £150, with any treatment, an extraction, the start of a root canal, a permanent filling, charged separately. A straightforward problem might be settled within the consultation; a complex one can run to several hundred pounds once treatment is added. Always ask the practice for the consultation fee and a treatment estimate when you book, so there are no surprises." },
      { type: 'p', text: "What you are buying privately is speed and choice of time. Private practices can often see you the same day, including evenings and weekends, where NHS urgent slots are limited and routed through triage. For many people in pain out of hours, that availability is the thing they are paying for." },
      { type: 'h2', text: 'What changes the price' },
      { type: 'list', items: [
        'The route: NHS urgent care is a fixed low charge, while private is a consultation fee plus the cost of treatment.',
        'The treatment needed: a dressing or temporary filling costs far less than a root canal or an extraction.',
        'The timing: out-of-hours, evening and weekend appointments often carry a premium privately.',
        'Your exemption status: NHS treatment is free for under-18s, during and just after pregnancy, and on qualifying low-income benefits.',
      ] },
      { type: 'h2', text: 'When getting help costs nothing' },
      { type: 'p', text: "Before any of this, if you are unsure how urgent the problem is, NHS 111 is free and open day and night. An adviser will assess your symptoms and point you to the right place, which can save you both a wasted journey and an unnecessary private fee. For impartial advice on a dental problem and what treatment might involve, the Oral Health Foundation runs a free, independent [dental helpline](https://www.dentalhealth.org/dental-helpline) that is not tied to any practice." },
      { type: 'h2', text: 'Cost is only half the decision' },
      { type: 'p', text: "Whether NHS or private is the right call for your situation depends on more than the headline price. We weigh that up in our guide to [NHS versus private emergency dental care in Enfield](/blog/nhs-vs-private-emergency-dental-enfield/), and if it is the middle of the night or a weekend, our guide to finding an emergency dentist [out of hours in Enfield](/guides/out-of-hours-emergency-dentist-enfield/) walks through how to get seen quickly." },
      { type: 'p', text: "If you need to be seen now, tell us what is wrong using the form on this page and we will match you with an Enfield emergency dentist who can confirm the cost and the appointment up front. We are an independent matching service and do not treat you ourselves." },
    ],
  },
  {
    slug: 'dental-emergencies-in-pregnancy-enfield',
    hub: 'severe-toothache-enfield',
    draft: false,
    title: 'Dental Emergencies in Pregnancy: What to Do in Enfield',
    metaTitle: 'Dental Emergencies in Pregnancy: What to Do | Enfield',
    metaDescription:
      'Pregnant with severe toothache, an abscess or a broken tooth in Enfield? What is safe, which painkillers to avoid, why treatment beats waiting, and free NHS care.',
    category: 'Pain management',
    publishDate: '2026-06-27',
    updatedDate: '2026-06-27',
    excerpt:
      'A dental emergency during pregnancy is worrying, but treatment is safer than leaving it. Here is what is safe, which pain relief to use and avoid, and how to be seen in Enfield, with NHS dental care free while you are pregnant.',
    faqs: [
      {
        question: 'Is it safe to have emergency dental treatment while pregnant?',
        answer:
          'Yes. Routine and emergency dental treatment, including fillings, extractions and draining an abscess, can safely be carried out during pregnancy, and the second trimester is often the most comfortable time. Leaving an infection or severe pain untreated tends to be more of a risk to you and the baby than the treatment itself. Always tell the dentist you are pregnant and how many weeks, so they can tailor care and choose suitable medicines.',
      },
      {
        question: 'Can I have a dental X-ray when I am pregnant?',
        answer:
          'Dental X-rays use a very small, tightly focused dose and the abdomen is shielded with a lead apron, so they are considered safe in pregnancy when there is a clear clinical need, such as locating an abscess. Where it makes no difference to your care, a dentist may still choose to delay non-urgent X-rays. Tell the dentist you are pregnant so they can weigh up whether the X-ray is needed now.',
      },
      {
        question: 'Which painkillers are safe for toothache in pregnancy?',
        answer:
          'Paracetamol at the recommended dose is the first choice for dental pain in pregnancy. Ibuprofen and other anti-inflammatory painkillers are generally avoided, especially in the third trimester, and you should not take them in pregnancy unless a doctor, midwife or pharmacist has told you to. Avoid aspirin too. If paracetamol is not controlling the pain, contact your dentist, GP, midwife or a pharmacist rather than reaching for stronger tablets.',
      },
      {
        question: 'Is NHS dental treatment free when you are pregnant?',
        answer:
          'Yes. NHS dental treatment is free if you are pregnant or have had a baby in the twelve months before treatment starts. You will usually need a valid maternity exemption certificate, which your midwife or doctor can arrange. This covers urgent and emergency care as well as check-ups, so cost should never be a reason to put off being seen for a dental emergency in pregnancy.',
      },
      {
        question: 'Can a dental infection harm my baby?',
        answer:
          'An untreated dental infection is best dealt with promptly rather than left. The bigger danger comes from an infection that is allowed to spread, along with the stress and poor sleep that severe pain causes. This is why dentists treat the cause of an abscess in pregnancy rather than waiting. If you have facial swelling, a fever, or any difficulty breathing or swallowing, treat it as urgent and call 999 or NHS 111.',
      },
    ],
    content: [
      { type: 'p', text: 'A dental emergency is stressful at the best of times, and more so when you are pregnant and worried about what is safe for the baby. The reassuring news is that the common dental emergencies, severe toothache, an abscess, a knocked-out or broken tooth, can all be treated safely during pregnancy, and that treating them is almost always safer than leaving them. This guide explains what is safe, which pain relief to use and which to avoid, and how to be seen quickly in Enfield. It sits within our wider advice on [severe toothache and dental pain in Enfield](/guides/severe-toothache-enfield/).' },
      { type: 'note', text: 'Call 999 or go to A&E now if you are pregnant and have swelling spreading towards your eye, cheek, neck or the floor of your mouth, a high fever with shaking chills, or any difficulty breathing or swallowing. These are signs of a spreading infection and need hospital care. For dental pain or an abscess without these danger signs, call NHS 111 out of hours or use the same-day matching form on this page to reach a vetted Enfield dentist.' },

      { type: 'h2', text: 'Why treatment is safer than waiting' },
      { type: 'p', text: 'It is natural to want to avoid any dental work until after the baby arrives, but with a genuine emergency that instinct usually works against you. A toothache rarely settles on its own, and a [dental abscess](/blog/recognising-a-dental-abscess-vs-routine-toothache/) is an infection that tends to grow rather than fade. An infection left to spread, the severe pain itself, and the lost sleep and stress that come with it are more of a concern in pregnancy than the straightforward treatment that fixes the problem. Dentists are very used to caring for pregnant patients, and the standard [NHS advice on dental care in pregnancy](https://www.nhs.uk/conditions/baby/support-and-services/dental-care-in-pregnancy/) is to deal with the cause promptly rather than postpone it.' },
      { type: 'p', text: 'Whatever the problem, the single most useful thing you can do is tell the dentist you are pregnant and roughly how many weeks along you are. That lets them choose suitable medicines, decide whether any X-ray is genuinely needed now, and pick the most comfortable position and timing for your appointment.' },

      { type: 'h2', text: 'Dental treatment and X-rays during pregnancy' },
      { type: 'p', text: 'Fillings, extractions, draining an abscess and emergency pain relief can all be carried out while you are pregnant. Many dentists find the second trimester, roughly weeks fourteen to twenty-seven, the most comfortable window for any non-urgent work, simply because lying back is easier then and the early-pregnancy tiredness and nausea have usually eased. A true emergency, though, should not wait for a convenient trimester. If you have severe pain or a spreading infection, it needs treating when it happens, at any stage of pregnancy.' },
      { type: 'p', text: 'Dental X-rays often worry people, but the dose from a small dental film is very low and tightly aimed at the jaw, and the dentist shields your abdomen with a lead apron. Where an X-ray is needed to locate an abscess or assess a broken tooth, it is considered safe in pregnancy. Where it would make no difference to your immediate care, the dentist may simply choose to delay it. Either way, this is a decision to make together, which is why telling them you are pregnant matters.' },

      { type: 'h2', text: 'Safe pain relief, and what to avoid' },
      { type: 'p', text: 'Managing the pain safely while you arrange to be seen comes down to a few clear rules:' },
      { type: 'list', items: [
        'Paracetamol at the recommended dose is the first-choice painkiller for dental pain throughout pregnancy. Follow the instructions on the packet and do not exceed the stated dose.',
        'Avoid ibuprofen and other anti-inflammatory painkillers in pregnancy unless a doctor, midwife or pharmacist has specifically advised it, and avoid them in particular in the third trimester. This is different from the usual toothache advice, which combines ibuprofen with paracetamol, so do not follow general pain-relief guidance here.',
        'Avoid aspirin, including the old trick of holding a tablet against the gum, which burns the soft tissue and does nothing for the tooth.',
        'Gentle warm salt-water rinses, a teaspoon of salt in a cup of warm water, can soothe a sore or swollen gum and are safe to use.',
        'A cold compress held against the outside of the cheek can ease swelling and take the edge off.',
      ] },
      { type: 'p', text: 'If paracetamol is not controlling the pain, do not reach for stronger tablets on your own. Contact your dentist, GP, midwife or a pharmacist, who can advise on what is safe for you at your stage of pregnancy. Our guide to [managing severe toothache before you can be seen](/blog/managing-severe-toothache-before-you-can-be-seen/) covers the wider self-care steps, but the pregnancy rule on ibuprofen above overrides the combination it describes.' },

      { type: 'h2', text: 'Antibiotics and abscesses in pregnancy' },
      { type: 'p', text: 'If you have a dental abscess, the infection is being fed by a problem inside or around the tooth, and clearing it means a dentist treating that source, not antibiotics alone. Where antibiotics are needed, for example if the infection is spreading, there are options a dentist can prescribe that are suitable in pregnancy, so do not let worry about medication stop you being seen. What you should not do is take leftover or someone else\'s antibiotics, which may be the wrong type or unsafe for pregnancy. Our guide on whether [antibiotics cure a dental abscess](/blog/antibiotics-dental-abscess/) explains why the tooth itself still needs treating either way.' },
      { type: 'p', text: 'A note on bleeding gums, which many people first notice in pregnancy: hormonal changes make gums more prone to swelling and bleeding, sometimes called pregnancy gingivitis. This is common and usually settles with good cleaning, and the [Oral Health Foundation](https://www.dentalhealth.org/dental-care-during-pregnancy) covers looking after your gums in pregnancy in more depth. A painful, swollen gum with a bad taste can also be an abscess, though, so if in doubt have it checked rather than assuming it is just pregnancy gums.' },

      { type: 'h2', text: 'NHS dental care is free while you are pregnant' },
      { type: 'p', text: 'Cost should never be the reason you put off emergency dental care in pregnancy, because for most people there is none. NHS dental treatment, including urgent and emergency care, is free if you are pregnant or have had a baby in the twelve months before your treatment starts. You will usually need a maternity exemption certificate, which your midwife or doctor can arrange for you, and it stays valid for a year after the birth. If you are matched with a dentist who can offer NHS emergency care, bring or mention the certificate and the urgent appointment costs you nothing.' },
      { type: 'p', text: 'NHS dental access across Enfield can be stretched, so an NHS emergency slot is not always available immediately. If you choose or need a private appointment to be seen quickly, that is a personal decision, but the free NHS route exists and is worth asking about whenever you are pregnant or recently gave birth.' },

      { type: 'h2', text: 'Getting seen quickly in Enfield' },
      { type: 'p', text: 'Once you have managed the pain safely, the priority is being seen. During normal hours your own dentist is the first call if you have one. If you do not, or cannot get through, we can match you with a vetted emergency dentist across the borough, from Enfield Town and Bush Hill Park in EN1 and EN2 through to Enfield Highway and Ponders End in EN3, and the southern areas around Edmonton and Palmers Green. Tell us you are pregnant when you use the form, so we can flag it to the practice. We are an independent matching service and do not treat you ourselves, but most introductions happen within the hour.' },
      { type: 'p', text: 'Out of hours, at the weekend or on a bank holiday, NHS 111 is the route to urgent NHS dental care across north London and can advise where to go. For any sign of a spreading infection, facial swelling, a fever, or difficulty breathing or swallowing, do not wait, call 999 or go to A&E, where the nearest major department is North Middlesex University Hospital in Edmonton. A dental emergency in pregnancy is very treatable, and being seen promptly is the safest course for both you and the baby.' },
    ],
  },
];

export const getArticleBySlug = (slug: string): BlogArticle | undefined =>
  blogArticles.find(a => a.slug === slug);

// Draft gate: draft spokes 404 and are excluded from /blog, hub grids and the
// sitemap until the publisher flips them live.
export const getPublishedArticles = (): BlogArticle[] =>
  blogArticles.filter(a => !a.draft);

export const getArticlesByHub = (hub: string): BlogArticle[] =>
  blogArticles.filter(a => a.hub === hub && !a.draft);

export const getAllBlogSlugs = (): string[] => getPublishedArticles().map(a => a.slug);
