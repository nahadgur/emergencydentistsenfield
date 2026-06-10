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
