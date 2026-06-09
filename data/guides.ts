// data/guides.ts
//
// Pillar hubs for the /guides/ tree. Each hub owns one emergency-type head
// term, aligns to a /services pillar, and links down to its child spokes
// (data/blog.ts, matched by `hub`). YMYL urgent-care content: every hub leads
// with safe first-aid and a clear 999 / A&E / NHS 111 line, uses matching
// framing (we connect you with a vetted Enfield dentist, we do not treat), and
// never contradicts NHS first-aid guidance. Enfield-specific throughout; never
// paraphrase the Harlow sibling.

export interface GuideSection {
  id: string;
  heading: string;
  body: string[];
  list?: string[];
}

export interface GuideFAQ {
  question: string;
  answer: string;
}

export interface Guide {
  slug: string;
  title: string;            // H1
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroIntro: string;
  /** Safe first-aid + when-to-escalate line shown at the very top. */
  safetyNote: string;
  /** MedicalCondition name for MedicalWebPage schema. */
  about: string;
  /** Aligned /services pillar slug, where one applies. */
  serviceSlug?: string;
  intro: string[];
  sections: GuideSection[];
  faqs: GuideFAQ[];
  /** Sideways links to adjacent hub slugs. */
  relatedHubs: string[];
  publishDate: string;
  updatedDate: string;
}

const PUBLISHED = '2026-05-04';
const REVIEWED = '2026-06-09';

export const guides: Guide[] = [
  // H1 -------------------------------------------------------------------
  {
    slug: 'severe-toothache-enfield',
    title: 'Severe Toothache in Enfield: What to Do Now',
    metaTitle: 'Severe Toothache Enfield | Emergency Dental Help',
    metaDescription: 'Severe toothache in Enfield: safe pain relief while you wait, the warning signs that need urgent care, and same-day matching with a vetted Enfield emergency dentist.',
    heroEyebrow: 'Severe pain',
    heroIntro: 'Sudden, severe toothache is the most common reason people across Enfield search for an emergency dentist. This guide covers what helps before you are seen, what does not, and how fast a problem needs attention.',
    safetyNote: 'If you have swelling spreading to your eye or neck, difficulty breathing or swallowing, or a fever with facial swelling, treat it as a medical emergency: call 999 or go to A&E. For severe pain that is not life-threatening, call NHS 111 and use the form on this page to be matched with a vetted Enfield emergency dentist.',
    about: 'Toothache',
    serviceSlug: 'severe-toothache',
    intro: [
      'Toothache rarely improves on its own once it becomes severe, because the usual cause is an irritated or infected nerve inside the tooth. Pain relief can make the wait bearable, but it does not treat the cause, so the goal is to settle the pain safely and get seen quickly.',
      'We are a matching service for Enfield and the wider EN postcodes. We do not treat; we connect you with a GDC-registered dentist who has same-day or next-day emergency capacity, usually within the hour during the day.',
    ],
    sections: [
      {
        id: 'pain-relief',
        heading: 'Safe pain relief while you wait',
        body: [
          'Over-the-counter painkillers used correctly are the safest first step. Ibuprofen tends to work well for dental pain because it reduces inflammation, and it can be combined with paracetamol if you have no reason to avoid either. Always stay within the doses on the packet and follow NHS guidance.',
        ],
        list: [
          'Take painkillers to the packet dose; do not exceed it to chase relief.',
          'A cold compress against the cheek for 15 minutes at a time can ease throbbing.',
          'Keep your head propped up at night, as lying flat often makes the pain worse.',
          'Avoid very hot, cold or sugary food and drink on the painful side.',
        ],
      },
      {
        id: 'avoid',
        heading: 'What not to do',
        body: [
          'Some popular remedies make things worse. Do not hold an aspirin against the gum, as it burns the soft tissue. Do not rely on repeated courses of leftover antibiotics, which will not cure toothache and can mask a problem that still needs treatment.',
        ],
      },
      {
        id: 'when-urgent',
        heading: 'When toothache is an emergency',
        body: [
          'Most toothache is urgent rather than an emergency, meaning it needs prompt dental care but not a hospital. The picture changes when there are signs of spreading infection, which is covered in our abscess guide.',
        ],
        list: [
          'Facial swelling, especially if it is spreading or affecting your eye.',
          'Fever, feeling generally unwell, or swelling under the jaw.',
          'Difficulty opening your mouth, swallowing or breathing.',
          'Pain that wakes you and is not touched by painkillers.',
        ],
      },
    ],
    faqs: [
      { question: 'Can I get same-day toothache treatment in Enfield?', answer: 'Often yes. We match you with a vetted Enfield dentist holding same-day or next-day emergency slots. Use the form on this page or call NHS 111 if you cannot reach a dentist and the pain is severe.' },
      { question: 'What painkiller works best for toothache?', answer: 'Ibuprofen suits many people because it reduces inflammation, and it can be combined with paracetamol where appropriate. Stay within the packet doses and follow NHS advice, particularly if you have stomach, kidney or other health conditions.' },
      { question: 'Is toothache at night a sign of something serious?', answer: 'Pain that is worse lying down or that wakes you often points to nerve involvement that needs a dentist soon. Prop your head up, use painkillers to the packet dose, and arrange to be seen promptly.' },
    ],
    relatedHubs: ['dental-abscess-enfield', 'out-of-hours-emergency-dentist-enfield'],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H2 -------------------------------------------------------------------
  {
    slug: 'knocked-out-tooth-enfield',
    title: 'Knocked-Out Tooth in Enfield: The First Hour',
    metaTitle: 'Knocked-Out Tooth Enfield | Emergency Dentist',
    metaDescription: 'A knocked-out adult tooth is a true dental emergency. Step-by-step first aid, how to store the tooth, and same-day matching with a vetted Enfield emergency dentist.',
    heroEyebrow: 'Dental trauma',
    heroIntro: 'A knocked-out (avulsed) adult tooth is one of the few dental situations where minutes genuinely matter. Acting correctly in the first hour gives the best chance of saving it.',
    safetyNote: 'If the injury came with a head injury, loss of consciousness, or heavy bleeding that will not stop, call 999 or go to A&E first. For the tooth itself, follow the steps below and be seen by a dentist as fast as possible, ideally within the hour.',
    about: 'Tooth avulsion',
    serviceSlug: 'knocked-out-tooth',
    intro: [
      'An adult tooth that has been completely knocked out can sometimes be re-implanted if it is handled well and you reach a dentist quickly. The tooth must be kept moist and the root must not be scrubbed or dried.',
      'We connect you with a vetted Enfield emergency dentist who can see avulsion cases without delay. Start the first aid below immediately, then use the form on this page or call ahead.',
    ],
    sections: [
      {
        id: 'first-aid',
        heading: 'First aid in order',
        body: [
          'Speed and gentle handling matter more than anything else. The aim is to get the tooth back into the socket, or into a suitable storage liquid, within minutes.',
        ],
        list: [
          'Pick the tooth up by the white crown, never the root.',
          'If it is dirty, rinse briefly in milk or cool running water for a few seconds. Do not scrub it or wrap it in tissue.',
          'If you can, push it gently back into the socket the right way round and bite softly on a clean cloth to hold it.',
          'If you cannot re-implant it, store it in milk, or in saliva by holding it in the cheek (adults only), and bring it with you.',
        ],
      },
      {
        id: 'storage',
        heading: 'How to store the tooth',
        body: [
          'Milk is the best easily available storage option because it keeps the delicate root-surface cells alive far longer than water, which damages them. Do not let the tooth dry out and do not store it in water.',
        ],
      },
      {
        id: 'baby-teeth',
        heading: 'A note on baby teeth',
        body: [
          'A knocked-out baby (milk) tooth is generally not re-implanted, because doing so can harm the adult tooth developing underneath. Keep your child calm, control any bleeding with gentle pressure, and have them checked. Our childrens emergencies guide covers this in more detail.',
        ],
      },
    ],
    faqs: [
      { question: 'How long do I have to save a knocked-out tooth?', answer: 'The best window is the first 30 to 60 minutes. Re-implant it gently if you can, or store it in milk, and reach a dentist as fast as possible. The sooner it is back in place, the better the outcome.' },
      { question: 'Should I put a knocked-out tooth in water?', answer: 'No. Water damages the root-surface cells. Use milk, or hold the tooth in the cheek (adults only), to keep it moist until you are seen.' },
      { question: 'My child knocked out a baby tooth, do I push it back?', answer: 'No. Baby teeth are not re-implanted because it can damage the adult tooth forming beneath. Control bleeding with gentle pressure, keep your child calm, and have them checked the same day.' },
    ],
    relatedHubs: ['childrens-dental-emergencies-enfield', 'broken-chipped-tooth-enfield'],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H3 -------------------------------------------------------------------
  {
    slug: 'broken-chipped-tooth-enfield',
    title: 'Broken, Chipped or Cracked Tooth in Enfield',
    metaTitle: 'Broken or Chipped Tooth Enfield | Emergency Dentist',
    metaDescription: 'Broken, chipped or cracked tooth in Enfield: how urgent it is, safe first aid, temporary protection, and same-day matching with a vetted Enfield emergency dentist.',
    heroEyebrow: 'Dental trauma',
    heroIntro: 'A broken or chipped tooth ranges from a cosmetic nuisance to a painful emergency, depending on how deep the damage goes. This guide helps you judge which one you have.',
    safetyNote: 'If a broken tooth came with a facial or head injury, or there is bleeding you cannot control, seek urgent medical care: 999 or A&E. For the tooth itself, protect the area as below and arrange dental care promptly; call NHS 111 if you cannot reach a dentist.',
    about: 'Dental fracture',
    serviceSlug: 'broken-or-chipped-tooth',
    intro: [
      'Whether a broken tooth is an emergency depends on what is exposed. A small enamel chip with no pain can usually wait a day or two, while a fracture exposing the soft inner pulp is painful and needs prompt attention to prevent infection.',
      'We match you with a vetted Enfield dentist who can assess and stabilise a broken tooth. Keep any pieces, follow the first aid below, and use the form on this page.',
    ],
    sections: [
      {
        id: 'how-urgent',
        heading: 'How urgent is it?',
        body: [
          'Use sensitivity and pain as your guide. Sharp pain to cold or air, or visible pink or red at the centre of the break, suggests the pulp is involved and you should be seen quickly.',
        ],
        list: [
          'No pain, small chip: usually not an emergency, but get it smoothed and checked.',
          'Sensitive to cold or sweet: see a dentist within a day or two.',
          'Throbbing, or pink visible in the break: prompt, same-day care.',
          'Sharp edge cutting your tongue or cheek: protect it and be seen soon.',
        ],
      },
      {
        id: 'first-aid',
        heading: 'Safe first aid and temporary protection',
        body: [
          'Rinse gently with warm water and keep any fragments in milk in case the dentist can use them. A sharp edge can be covered with orthodontic wax or sugar-free chewing gum to stop it cutting your tongue until you are seen.',
        ],
      },
      {
        id: 'cracked',
        heading: 'Cracked teeth that look intact',
        body: [
          'A cracked tooth can hurt sharply when you bite and release, yet look normal. Cracks tend to spread, so it is worth having pain on biting assessed rather than waiting for the tooth to break further.',
        ],
      },
    ],
    faqs: [
      { question: 'Is a chipped tooth a dental emergency?', answer: 'A small chip with no pain is usually not an emergency, though it should be smoothed and checked. A break that is painful, sensitive, or shows pink at the centre needs prompt, often same-day, care.' },
      { question: 'What can I do about a sharp broken tooth edge?', answer: 'Cover it with orthodontic wax or a piece of sugar-free gum so it does not cut your tongue or cheek, rinse gently with warm water, and arrange to be seen.' },
      { question: 'Should I keep the broken piece of tooth?', answer: 'Yes. Store any fragment in milk and bring it with you. In some cases a clean fragment can be bonded back, and it helps the dentist judge the damage.' },
    ],
    relatedHubs: ['knocked-out-tooth-enfield', 'lost-filling-or-crown-enfield'],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H4 -------------------------------------------------------------------
  {
    slug: 'lost-filling-or-crown-enfield',
    title: 'Lost Filling or Crown in Enfield: What to Do',
    metaTitle: 'Lost Filling or Crown Enfield | Emergency Dentist',
    metaDescription: 'Lost a filling or crown in Enfield? How urgent it is, safe temporary measures, the limits of repair kits, and same-day matching with a vetted Enfield dentist.',
    heroEyebrow: 'Restorations',
    heroIntro: 'A filling or crown coming out is rarely a true emergency, but it can be uncomfortable and leaves the tooth vulnerable. This guide covers safe stop-gaps and when to be seen.',
    safetyNote: 'A lost filling or crown is usually urgent rather than an emergency. If you have severe pain, swelling or fever, treat it like an abscess and seek prompt care; call NHS 111 if you cannot reach a dentist. Use the form on this page to be matched with a vetted Enfield dentist.',
    about: 'Lost dental restoration',
    serviceSlug: 'lost-filling-or-crown',
    intro: [
      'When a filling or crown comes away, the exposed tooth can be sensitive and is more prone to chipping or decay, so it should be restored reasonably soon. The urgency depends mostly on pain and how much tooth is exposed.',
      'We connect you with a vetted Enfield dentist who can re-cement a sound crown or replace a filling. The measures below protect the tooth until your appointment.',
    ],
    sections: [
      {
        id: 'temporary',
        heading: 'Safe temporary measures',
        body: [
          'Keep the area clean and protect the exposed tooth. Pharmacy temporary materials can help for a day or two, but they are a stop-gap, not a repair.',
        ],
        list: [
          'Keep a lost crown safe, clean and dry, and bring it to your appointment.',
          'A pharmacy temporary cement can hold a crown back on briefly; never use household glue.',
          'Avoid chewing on that side and keep the area clean.',
          'Sugar-free gum or temporary filling material can shield an open cavity short term.',
        ],
      },
      {
        id: 'repair-kit-limits',
        heading: 'The limits of repair kits',
        body: [
          'Temporary crown-repair kits are designed to last days, not weeks. If a crown is re-seated at the wrong angle or over decay, it can trap bacteria and cause more harm, so the tooth still needs a professional check.',
        ],
      },
      {
        id: 'swallowed',
        heading: 'If you swallowed a crown',
        body: [
          'Swallowing a crown is usually harmless and it will pass naturally. If you inhaled it, or have any chest symptoms or breathing difficulty, seek urgent medical advice. Either way, the tooth will need a new restoration.',
        ],
      },
    ],
    faqs: [
      { question: 'Is a lost filling a dental emergency?', answer: 'Usually not, unless there is significant pain, swelling or a sharp edge causing damage. It is urgent rather than an emergency, so protect the tooth and arrange to be seen within a few days.' },
      { question: 'Can I glue my crown back on?', answer: 'Never use household glue. A pharmacy temporary dental cement can hold a clean, sound crown briefly, but the tooth still needs a dentist to re-cement it properly and check for decay.' },
      { question: 'I swallowed my crown, is that dangerous?', answer: 'Swallowing a crown is generally harmless and it passes naturally. If you think you inhaled it, or have any breathing or chest symptoms, seek urgent medical help. The tooth will still need restoring.' },
    ],
    relatedHubs: ['broken-chipped-tooth-enfield', 'severe-toothache-enfield'],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H5 -------------------------------------------------------------------
  {
    slug: 'dental-abscess-enfield',
    title: 'Dental Abscess and Infection in Enfield',
    metaTitle: 'Dental Abscess Enfield | Emergency Dental Care',
    metaDescription: 'A dental abscess can spread and become dangerous. Warning signs, when it is a 999 or A&E emergency, and same-day matching with a vetted Enfield emergency dentist.',
    heroEyebrow: 'Infection',
    heroIntro: 'A dental abscess is a pocket of infection that can spread if left untreated. Knowing the warning signs that turn it from urgent into a medical emergency is the most important thing on this page.',
    safetyNote: 'Call 999 or go to A&E now if facial or neck swelling is spreading, if you have difficulty breathing or swallowing, if swelling is closing an eye, or if you have a high fever with swelling. For an abscess without those signs, you still need prompt dental care: call NHS 111 and use the form on this page.',
    about: 'Dental abscess',
    serviceSlug: 'dental-abscess',
    intro: [
      'An abscess is the same underlying problem as a bad toothache, infection, but with the potential to escalate quickly. Antibiotics alone do not cure it; the source needs dental treatment, which is why being seen matters.',
      'We match you with a vetted Enfield dentist who can manage an abscess urgently. If the danger signs below are present, treat it as a medical emergency first.',
    ],
    sections: [
      {
        id: 'warning-signs',
        heading: 'Warning signs of a spreading infection',
        body: [
          'Most abscesses stay local and are dealt with by a dentist. The signs below mean the infection may be spreading and need emergency medical care, not just a dental appointment.',
        ],
        list: [
          'Swelling spreading across the face or down towards the neck.',
          'Difficulty breathing, swallowing or fully opening the mouth.',
          'Swelling closing an eye, or a high temperature with swelling.',
          'Feeling rapidly more unwell, confused or shivery.',
        ],
      },
      {
        id: 'what-helps',
        heading: 'What helps before you are seen',
        body: [
          'Keep taking painkillers to the packet dose and stay hydrated. Warm salt-water rinses can ease a gum abscess. Do not try to lance or squeeze the swelling, and do not rely on leftover antibiotics.',
        ],
      },
      {
        id: 'antibiotics',
        heading: 'Antibiotics and abscesses',
        body: [
          'Antibiotics may be prescribed if infection is spreading, but they buy time rather than fix the cause. The tooth still needs treatment such as drainage, root canal or extraction, so an abscess should always be assessed by a dentist.',
        ],
      },
    ],
    faqs: [
      { question: 'When is a dental abscess an emergency?', answer: 'Treat it as a 999 or A&E emergency if swelling is spreading across the face or neck, if you have difficulty breathing or swallowing, if an eye is closing, or if you have a high fever with swelling. Otherwise it is urgent and needs prompt dental care.' },
      { question: 'Can a dental abscess be dangerous?', answer: 'Yes, if the infection spreads. Most are dealt with promptly by a dentist, but spreading facial or neck swelling and difficulty breathing or swallowing are medical emergencies that need A&E or 999.' },
      { question: 'Will antibiotics cure my abscess?', answer: 'No. Antibiotics can slow a spreading infection but do not remove the source. The tooth still needs dental treatment, so you should be seen even if you are given antibiotics.' },
    ],
    relatedHubs: ['severe-toothache-enfield', 'what-counts-as-a-dental-emergency-enfield'],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H6 -------------------------------------------------------------------
  {
    slug: 'wisdom-tooth-emergency-enfield',
    title: 'Wisdom Tooth and Gum Emergencies in Enfield',
    metaTitle: 'Wisdom Tooth Pain Enfield | Emergency Dentist',
    metaDescription: 'Wisdom tooth pain, pericoronitis and dry socket in Enfield: safe relief, the signs that need urgent care, and same-day matching with a vetted Enfield dentist.',
    heroEyebrow: 'Wisdom teeth and gums',
    heroIntro: 'Wisdom teeth cause a particular cluster of emergencies, from inflamed gum flaps to dry socket after an extraction. This guide covers safe relief and when to escalate.',
    safetyNote: 'If swelling at the back of the jaw is spreading, you cannot open your mouth, or you have difficulty swallowing or breathing, call 999 or go to A&E. For wisdom-tooth pain without those signs, manage it as below and arrange prompt dental care; call NHS 111 if needed.',
    about: 'Wisdom tooth pain',
    serviceSlug: 'wisdom-tooth-pain',
    intro: [
      'A partly erupted wisdom tooth often traps food and bacteria under a flap of gum, which becomes inflamed and painful (pericoronitis). Dry socket is a separate, intensely painful problem that can follow an extraction.',
      'We connect you with a vetted Enfield dentist who can treat wisdom-tooth and gum emergencies. The measures below help while you wait.',
    ],
    sections: [
      {
        id: 'pericoronitis',
        heading: 'Inflamed gum flap (pericoronitis)',
        body: [
          'Warm salt-water rinses help clear debris from under the gum flap and ease mild inflammation. Painkillers to the packet dose help the discomfort. If the area is swelling, you have a fever, or it is hard to open your mouth, you need to be seen promptly.',
        ],
      },
      {
        id: 'dry-socket',
        heading: 'Dry socket after an extraction',
        body: [
          'Dry socket usually appears a few days after a tooth is removed, with a deep ache and often a bad taste, because the protective blood clot has been lost. It is not dangerous but it is very painful and a dentist can dress the socket to settle it quickly.',
        ],
        list: [
          'Avoid smoking, vigorous rinsing and straws after an extraction, which dislodge the clot.',
          'Keep the area clean with gentle salt-water rinses from the day after.',
          'See a dentist for a dressing if pain worsens two to four days later.',
        ],
      },
      {
        id: 'swollen-gum',
        heading: 'Swollen gum at the back',
        body: [
          'A swollen gum at the very back of the mouth that keeps recurring may mean the wisdom tooth needs assessment. Persistent or spreading swelling should be checked rather than repeatedly waiting it out.',
        ],
      },
    ],
    faqs: [
      { question: 'How do I relieve wisdom tooth pain quickly?', answer: 'Warm salt-water rinses to clean under the gum flap, plus painkillers to the packet dose, ease most flare-ups. If there is spreading swelling, fever, or difficulty opening your mouth, you need prompt dental care.' },
      { question: 'What is dry socket and is it an emergency?', answer: 'Dry socket is a painful loss of the healing clot a few days after an extraction. It is not dangerous but is very painful; a dentist can dress the socket to relieve it quickly.' },
      { question: 'When is wisdom tooth swelling serious?', answer: 'Spreading swelling at the back of the jaw, difficulty opening your mouth, or trouble swallowing or breathing are emergencies that need A&E or 999. Otherwise, arrange prompt dental assessment.' },
    ],
    relatedHubs: ['out-of-hours-emergency-dentist-enfield', 'dental-abscess-enfield'],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H7 -------------------------------------------------------------------
  {
    slug: 'out-of-hours-emergency-dentist-enfield',
    title: 'Out-of-Hours Emergency Dentist in Enfield',
    metaTitle: 'Out-of-Hours Emergency Dentist Enfield | NHS 111',
    metaDescription: 'Evening, weekend and bank-holiday dental emergencies in Enfield: how NHS 111 dental works, when to use A&E, typical costs, and same-day matching with a vetted dentist.',
    heroEyebrow: 'Access and out-of-hours',
    heroIntro: 'Dental emergencies do not keep office hours. This guide explains how to get help in Enfield in the evening, at the weekend, and on bank holidays, and which route fits which problem.',
    safetyNote: 'For a life-threatening emergency, including spreading facial or neck swelling, difficulty breathing or swallowing, or uncontrolled bleeding, call 999 or go to A&E. For urgent dental problems out of hours, call NHS 111, which can direct you to an urgent dental service, and use the form on this page for same-day matching.',
    about: 'Out-of-hours dental care',
    serviceSlug: 'out-of-hours',
    intro: [
      'Out of hours, your options in Enfield are NHS 111 for urgent dental triage, a private emergency dentist for speed and choice of time, and A&E or 999 for the small number of genuinely dangerous situations. Knowing which is which saves time when you are in pain.',
      'We are a matching service covering the EN postcodes. We connect you with a vetted dentist holding emergency capacity, including evenings and weekends where available.',
    ],
    sections: [
      {
        id: 'nhs-111',
        heading: 'NHS 111 for dental emergencies',
        body: [
          'NHS 111 is the front door for urgent NHS dental care when your own practice is closed. They triage by phone or online and can refer you to an urgent dental service. Availability of NHS emergency slots is limited and can fill quickly, especially at weekends.',
        ],
      },
      {
        id: 'nhs-vs-private',
        heading: 'NHS versus private emergency dental',
        body: [
          'NHS urgent care is the lower-cost route but slots are scarce and you take what is available. A private emergency appointment costs more but usually offers faster access and a choice of time, which matters when you are in severe pain or it is a weekend. Our spoke on this compares the two for Enfield.',
        ],
      },
      {
        id: 'aande',
        heading: 'When to use A&E',
        body: [
          'A&E is for the dental problems that are really medical emergencies: spreading facial or neck swelling, difficulty breathing or swallowing, trauma with a head injury, or bleeding that will not stop. A&E does not do routine dental treatment, so for pain or a broken tooth a dentist or NHS 111 is the right route. North Middlesex University Hospital is the main A&E serving much of the borough.',
        ],
      },
    ],
    faqs: [
      { question: 'How do I find an emergency dentist in Enfield at the weekend?', answer: 'Call NHS 111 for urgent NHS dental triage, or use the form on this page to be matched with a vetted private emergency dentist holding weekend capacity. For dangerous swelling or breathing problems, use A&E or 999.' },
      { question: 'Can I go to A&E for a toothache?', answer: 'A&E is for medical emergencies such as spreading swelling, difficulty breathing or swallowing, trauma with a head injury, or uncontrolled bleeding. For ordinary toothache or a broken tooth, a dentist or NHS 111 is the right route.' },
      { question: 'How much does an emergency dentist cost in Enfield?', answer: 'NHS urgent care is charged at the relevant NHS band where you qualify; private emergency appointments vary by practice and time. We give you a clear idea of cost before you commit to an introduction.' },
    ],
    relatedHubs: ['what-counts-as-a-dental-emergency-enfield', 'severe-toothache-enfield'],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H8 -------------------------------------------------------------------
  {
    slug: 'what-counts-as-a-dental-emergency-enfield',
    title: 'What Counts as a Dental Emergency? (Enfield Triage)',
    metaTitle: 'What Is a Dental Emergency? | Enfield Triage Guide',
    metaDescription: 'How to tell a dental emergency from urgent or routine, when to call 999 or go to A&E, and how to get same-day help in Enfield. A plain-English triage guide.',
    heroEyebrow: 'Triage',
    heroIntro: 'Not every dental problem is an emergency, and treating a routine issue as a crisis (or a crisis as routine) wastes time. This guide helps you place your situation on the right track.',
    safetyNote: 'Call 999 or go to A&E for difficulty breathing or swallowing, spreading facial or neck swelling, trauma with a head injury, or bleeding that will not stop. For everything else dental, NHS 111 or a same-day dentist is the right route. Use the form on this page to be matched quickly.',
    about: 'Dental emergency triage',
    serviceSlug: 'out-of-hours',
    intro: [
      'Dentists sort problems into three rough categories: medical emergency, dental emergency, and urgent or routine. The category decides where you go, how fast, and whether a hospital is involved at all.',
      'We connect you with a vetted Enfield dentist for the dental-emergency and urgent categories. The few situations that belong in A&E are flagged clearly below.',
    ],
    sections: [
      {
        id: 'categories',
        heading: 'Emergency, urgent or routine',
        body: [
          'A simple way to triage is to ask whether the problem threatens your airway or is causing spreading infection or uncontrolled bleeding. If yes, it is a medical emergency. If it is severe pain, swelling or trauma without those features, it is a dental emergency for same-day care. If it is mild and stable, it is urgent or routine.',
        ],
        list: [
          'Medical emergency: 999 or A&E. Breathing or swallowing difficulty, spreading swelling, head injury, uncontrolled bleeding.',
          'Dental emergency: same-day dentist. Severe pain, knocked-out tooth, significant swelling, dental trauma.',
          'Urgent: within days. Lost filling or crown, sensitive chip, mild recurring ache.',
          'Routine: book normally. Cosmetic chips, mild sensitivity, check-ups.',
        ],
      },
      {
        id: 'call-999',
        heading: 'When to call 999',
        body: [
          'Call 999 when breathing or swallowing is affected, when swelling is spreading fast towards the neck or eye, or when there is a serious injury. These are rare but they are true emergencies where minutes matter.',
        ],
      },
      {
        id: 'same-day-signs',
        heading: 'Signs you need same-day care',
        body: [
          'Severe pain that painkillers do not touch, a knocked-out or badly broken tooth, facial swelling, or bleeding that is slowing but persistent all warrant same-day dental attention even if they are not hospital emergencies.',
        ],
      },
    ],
    faqs: [
      { question: 'What is classed as a dental emergency?', answer: 'Severe uncontrolled pain, a knocked-out or badly broken tooth, significant facial swelling, and dental trauma are dental emergencies needing same-day care. Breathing or swallowing problems and spreading swelling are medical emergencies for A&E or 999.' },
      { question: 'Can you go to A&E for a tooth problem?', answer: 'A&E is appropriate for spreading swelling, difficulty breathing or swallowing, trauma with a head injury, or uncontrolled bleeding. It does not provide routine dental treatment, so for pain or a broken tooth use a dentist or NHS 111.' },
      { question: 'How do I get same-day dental care in Enfield?', answer: 'Use the form on this page to be matched with a vetted Enfield dentist holding same-day capacity, or call NHS 111 for urgent NHS triage when your practice is closed.' },
    ],
    relatedHubs: ['out-of-hours-emergency-dentist-enfield', 'dental-abscess-enfield'],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H9 -------------------------------------------------------------------
  {
    slug: 'childrens-dental-emergencies-enfield',
    title: "Children's Dental Emergencies in Enfield",
    metaTitle: "Children's Dental Emergencies Enfield | Help Fast",
    metaDescription: "A child's dental emergency in Enfield: knocked-out and broken baby teeth, night-time toothache, and when an injury needs A&E. Safe first aid and same-day matching.",
    heroEyebrow: 'Children',
    heroIntro: "Children's dental emergencies need a slightly different approach to adults, especially with baby teeth and head injuries. This guide covers the common situations calmly and safely.",
    safetyNote: "Call 999 or go to A&E if your child has a head injury with drowsiness or vomiting, difficulty breathing or swallowing, or spreading facial swelling. For dental injuries and pain without those signs, follow the first aid below and arrange same-day dental care; call NHS 111 if you cannot reach a dentist.",
    about: 'Paediatric dental emergency',
    intro: [
      "Children knock teeth, chip teeth and get toothache, and a calm, quick response usually leads to a good outcome. The key difference is that baby teeth are handled differently from adult teeth, and any head injury comes first.",
      'We match Enfield families with a vetted dentist who sees children for emergencies. Reassure your child, manage the immediate problem, and use the form on this page.',
    ],
    sections: [
      {
        id: 'knocked-out-baby',
        heading: 'Knocked-out baby tooth',
        body: [
          'A knocked-out baby tooth is not put back, because re-implanting it can damage the adult tooth developing underneath. Control bleeding with gentle pressure on clean gauze, keep your child calm, and have them seen the same day so the area can be checked.',
        ],
      },
      {
        id: 'child-toothache',
        heading: 'Child toothache at night',
        body: [
          'Night-time toothache in children is distressing for everyone. Give the correct childrens dose of paracetamol or ibuprofen for their age and weight, following the packet and NHS guidance, keep their head propped up, and arrange dental care promptly.',
        ],
      },
      {
        id: 'when-aande',
        heading: "When a child's injury needs A&E",
        body: [
          'A dental injury that comes with a blow to the head needs medical assessment first. Watch for drowsiness, repeated vomiting, or confusion after a fall, and go to A&E or call 999 if any appear. The tooth can be dealt with once your child is medically safe.',
        ],
      },
    ],
    faqs: [
      { question: 'My child knocked out a baby tooth, what do I do?', answer: 'Do not put it back, as that can harm the adult tooth forming underneath. Control bleeding with gentle pressure, keep your child calm, and have them seen the same day.' },
      { question: 'What painkiller can I give a child for toothache?', answer: 'Paracetamol or ibuprofen at the correct dose for your child\'s age and weight, following the packet and NHS guidance. Never exceed the stated dose, and arrange dental care promptly.' },
      { question: "When does a child's dental injury need A&E?", answer: 'If the injury came with a head injury and your child is drowsy, vomiting or confused, or has difficulty breathing or swallowing, go to A&E or call 999. The dental side can be treated once they are medically safe.' },
    ],
    relatedHubs: ['knocked-out-tooth-enfield', 'broken-chipped-tooth-enfield'],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },

  // H10 ------------------------------------------------------------------
  {
    slug: 'bleeding-swelling-denture-emergencies-enfield',
    title: 'Bleeding, Swelling, Dentures and Other Emergencies in Enfield',
    metaTitle: 'Bleeding, Swelling & Denture Emergencies Enfield',
    metaDescription: 'Less common dental emergencies in Enfield: bleeding after an extraction, facial swelling, broken dentures, orthodontic problems and objects stuck between teeth.',
    heroEyebrow: 'Other emergencies',
    heroIntro: 'Some dental emergencies do not fit the usual categories: bleeding that will not settle, a broken denture, a poking brace wire, or something wedged between teeth. This guide covers them safely.',
    safetyNote: 'Call 999 or go to A&E for bleeding you cannot control, spreading facial or neck swelling, or difficulty breathing or swallowing. For the problems below that are uncomfortable but stable, follow the first aid and arrange prompt dental care; call NHS 111 if you cannot reach a dentist.',
    about: 'Other dental emergencies',
    intro: [
      'This hub gathers the emergencies that are common enough to plan for but do not have a tooth-type of their own. The same rules apply: control the immediate problem safely, watch for the danger signs, and be seen promptly.',
      'We connect you with a vetted Enfield dentist for all of these. Use the form on this page for same-day matching.',
    ],
    sections: [
      {
        id: 'bleeding',
        heading: 'Bleeding after an extraction',
        body: [
          'Some oozing after a tooth is removed is normal for a few hours. To control it, roll clean gauze or a clean cloth into a pad, bite firmly on it over the socket for 20 minutes without checking, and avoid rinsing, spitting and hot drinks. If heavy bleeding continues despite 20 minutes of firm pressure, seek urgent care.',
        ],
      },
      {
        id: 'dentures-ortho',
        heading: 'Broken dentures and orthodontic problems',
        body: [
          'A broken denture should not be glued with household adhesives, which are toxic and ruin the fit. Keep the pieces and see a dentist or technician. For a poking brace wire, cover the end with orthodontic wax and contact your orthodontist; do not cut a wire yourself unless it risks being swallowed or inhaled.',
        ],
      },
      {
        id: 'stuck-object',
        heading: 'Object stuck between teeth',
        body: [
          'Something wedged between teeth can usually be eased out with gentle flossing. Do not use pins or sharp objects, which damage the gum. If it will not come free or the gum is swelling, have it removed professionally.',
        ],
      },
    ],
    faqs: [
      { question: 'How do I stop bleeding after a tooth extraction?', answer: 'Bite firmly on a clean gauze or cloth pad over the socket for 20 minutes without checking, and avoid rinsing, spitting and hot drinks. If heavy bleeding continues despite this, seek urgent care.' },
      { question: 'Can I glue a broken denture back together?', answer: 'No. Household glues are toxic and ruin the fit. Keep the pieces and see a dentist or technician for a proper repair; a same-day match can advise on interim options.' },
      { question: 'What do I do about a poking brace wire?', answer: 'Cover the sharp end with orthodontic wax and contact your orthodontist. Do not cut the wire yourself unless it is at risk of being swallowed or inhaled, in which case seek urgent help.' },
    ],
    relatedHubs: ['what-counts-as-a-dental-emergency-enfield', 'wisdom-tooth-emergency-enfield'],
    publishDate: PUBLISHED,
    updatedDate: REVIEWED,
  },
];

export const GUIDE_SLUGS = guides.map(g => g.slug);

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug);
}

export function getGuidesByHub(hubSlug: string): Guide[] {
  return guides.filter(g => g.relatedHubs.includes(hubSlug));
}
