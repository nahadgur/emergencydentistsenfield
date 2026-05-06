// data/site.ts
export const siteConfig = {
  name: 'Emergency Dentists Enfield',
  tagline: 'Same-day matching with vetted Enfield emergency dentists',
  url: 'https://www.emergencydentistsenfield.co.uk',
  description:
    'Free matching service for urgent dental care in Enfield. Severe toothache, knocked-out tooth, broken tooth, abscess, lost filling — matched within an hour during opening hours, next-morning otherwise. GDC-registered dentists across EN1, EN2, EN3, N9, N13, N14, N18, N21.',
  // Geographic service area (used in schema). Centralised so organisation/
  // service schemas don't depend on string-parsing the site name.
  serviceArea: 'London Borough of Enfield',
  // Google Analytics tracking ID — placeholder until set up. ConsentBanner
  // only loads GA when this is non-empty AND consent has been granted.
  gaId: '',
  // Phone disclaimer — we are NOT inbound-phone. The matched dentist
  // calls back. NHS 111 is for genuine medical emergencies (uncontrolled
  // bleeding, facial swelling spreading to eye/throat/neck, breathing
  // difficulty). 999 for life-threatening trauma.
};

// Real client testimonials only. Empty until verifiable reviews are
// collected; fabricated reviews are an E-E-A-T risk especially in a
// YMYL (Your Money Your Life) health niche where Google scrutinises
// trust signals more strictly.
export const TESTIMONIALS: {
  id: string; name: string; location: string; service: string; rating: number; text: string;
}[] = [];

export const TRUST_BADGES = [
  {
    icon: 'ShieldCheck',
    title: 'GDC-registered dentists only',
    description:
      'Every emergency dentist in our matching network is currently registered with the General Dental Council and carries professional indemnity insurance. We verify status annually.',
  },
  {
    icon: 'Clock',
    title: 'Matched within the hour',
    description:
      'Submit the form during opening hours and we aim to introduce you to a matched dentist within 60 minutes. Out-of-hours enquiries are matched first thing the next working morning.',
  },
  {
    icon: 'MapPin',
    title: 'Across all Enfield postcodes',
    description:
      'Coverage across Enfield Town, Edmonton, Southgate, Palmers Green, Winchmore Hill, Cockfosters and the wider EN/N postcode area. Many dentists offer Saturday and limited Sunday slots.',
  },
  {
    icon: 'Heart',
    title: 'Free to all patients',
    description:
      'You pay only the dentist for the treatment you receive. The matching service is funded by our network — never by patients.',
  },
];

export const FAQS_HOME = [
  {
    question: 'How quickly can I see an emergency dentist in Enfield?',
    answer:
      'Most enquiries received between 8am and 6pm Monday to Friday get an introduction within an hour, with the appointment itself usually scheduled the same day or first thing the next morning. North-of-the-borough enquiries (Cockfosters, Hadley Wood, Southgate) often resolve faster because the practice density is higher there; Edmonton and Ponders End sometimes take a little longer because we route to fewer practices with NHS-and-private mixed lists. Out-of-hours enquiries (evenings, Sundays, bank holidays) are matched first thing the next working morning. For uncontrolled bleeding, facial swelling spreading toward the eye or throat, or any breathing difficulty, call 999 or NHS 111 — do not wait on the form.',
  },
  {
    question: 'What does an emergency appointment cost in Enfield?',
    answer:
      'Private emergency consultations across the borough sit roughly £80–£180 for the visit itself, with the variance reflecting the inside/outside-North-Circular split: practices in Cockfosters, Hadley Wood, Southgate and Winchmore Hill tend to price toward the upper end (closer to North London / Hampstead averages), while Enfield Town, Edmonton, Palmers Green and Ponders End cluster lower. Treatment is costed on top — a written quote always comes before any work starts. NHS emergency appointments are £27.40 at Band 1 for assessment plus any pain-relieving treatment in the same visit.',
  },
  {
    question: 'Is the matching service actually free?',
    answer:
      'Yes — the service costs nothing to the patient. The matched practice pays us a small referral fee only if the introduction turns into a booked appointment; we add zero markup to the dentist\'s quoted fee, and you pay the practice directly for treatment. We exist to clear the bottleneck of "I need a dentist now and don\'t know who to call" — not to insert an extra cost into it.',
  },
  {
    question: 'Can you help me get an NHS emergency dentist in Enfield?',
    answer:
      'Honestly: NHS dental access in Enfield is tight and has been since 2020. North Central London ICB capacity has not recovered, several Enfield practices closed their NHS lists during the pandemic and have not reopened, and the genuine NHS emergency route runs through NHS 111 — call 111 free, they triage and book into whichever NHS-contracted Urgent Dental Centre has a slot (often Whittington, North Middlesex, or one of the borough\'s remaining NHS practices). We will route NHS-preference enquiries to network practices with NHS availability where it exists, but if it doesn\'t we will tell you straight, and discuss what a private emergency visit costs so you can decide.',
  },
];

export const FAQS_SERVICES = [
  {
    question: 'Do Enfield emergency dentists handle out-of-hours appointments?',
    answer:
      'Several dentists in our network offer Saturday morning emergency slots, and a smaller subset cover Sundays and bank holidays. Enfield\'s proximity to several private out-of-hours dental clinics in north London means more weekend access than typical for outer-London boroughs. For genuine out-of-hours emergencies that cannot wait until morning (severe uncontrolled pain, facial swelling), NHS 111 maintains a 24/7 emergency dental rota — call free on 111 for immediate guidance.',
  },
  {
    question: 'What payment methods do emergency dentists in Enfield accept?',
    answer:
      'Most accept card payment at the time of appointment (debit and credit), with a few offering payment plans for treatment over £500. Patients with private dental insurance (Bupa, Denplan, Simplyhealth) should bring their policy details — many emergency consultations are covered, though check your policy excess. NHS emergency treatment is paid at the standard NHS Band 1 rate (£27.40 in 2026).',
  },
  {
    question: 'Will the same dentist provide follow-up treatment?',
    answer:
      'In most cases yes — emergency consultations naturally lead to follow-up appointments for permanent fixes (crowns after root canals, implants for avulsion cases, etc.). The matched dentist will discuss the full treatment plan at the emergency visit and confirm whether they can take you on as a regular patient if you wish. Enfield has a higher density of private practices than NHS list capacity, so private follow-up is generally easier to secure than NHS.',
  },
];

export const FAQS_LOCATION = [
  {
    question: 'Which Enfield areas does the matching service cover?',
    answer:
      'All Enfield Borough neighbourhoods including Enfield Town, Enfield Highway, Bush Hill Park, Edmonton, Palmers Green, Winchmore Hill, Southgate, Cockfosters, Hadley Wood, and Ponders End. Coverage spans the EN1, EN2, EN3, N9, N13, N14, N18, and N21 postcodes. If you are unsure whether your area is covered, submit the form anyway and we will tell you.',
  },
  {
    question: 'How do you choose which dentist to match me with?',
    answer:
      'We read your enquiry, identify the closest GDC-registered dentists in our network with the right experience for your situation (some specialise in trauma, some in endodontic emergencies, etc.), and check who has availability that fits your urgency. Enfield\'s geographic spread is large — we aim to match you with a dentist within a reasonable travel distance from your specific postcode rather than just within the borough.',
  },
  {
    question: 'What if I am at the borough boundary or in a neighbouring area?',
    answer:
      'Many Enfield dentists regularly see patients from the Barnet, Haringey, and Waltham Forest borough boundaries — Cockfosters, Hadley Wood, Southgate, and Lower Edmonton residents in particular often live closer to a dentist across the borough line than to one inside Enfield. The matching covers your situation regardless, and we will introduce you to the closest practical practice rather than insist on a specific borough.',
  },
];

export const testimonials = TESTIMONIALS;
export const trustBadges = TRUST_BADGES;
