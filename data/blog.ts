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
      { type: 'p', text: 'Severe toothache that "settles by itself" is rarely good news. Most often it means the nerve has died and stopped sending pain signals — the underlying decay or infection is still progressing, just silently. Three weeks later it returns as an abscess or facial swelling. The matching service introduces you to a dentist who will diagnose the cause whether the pain has settled or not.' },
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
    ex