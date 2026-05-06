// data/homepage.ts
//
// 2026-05-05 SEO pass:
//   * 20 niche-specific LSI keywords bolded with <strong>.
//   * 5 keyword-rich internal links woven into body copy:
//       1. knocked-out tooth          → /services/knocked-out-tooth/
//       2. dental abscess             → /services/dental-abscess/
//       3. wisdom-tooth pain          → /services/wisdom-tooth-pain/
//       4. Enfield neighbourhoods     → /location/
//       5. about the matching service → /about/
//
// *Html fields render via dangerouslySetInnerHTML at the call site in
// app/page.tsx; the legacy plain-text fields are kept for any consumer
// that hasn't migrated.

export const heroContent = {
  eyebrow: 'Free matching · Vetted Enfield emergency dentists',
  titleHtml:
    '<strong>Severe toothache</strong>, <strong>knocked-out tooth</strong>, or sudden <strong>swelling on the gum</strong>?',
  subtitleHtml:
    'Tell us what happened and where in the borough you are. We match you with a vetted Enfield <strong>emergency dental appointment</strong> within 60 minutes in working hours, first thing the next morning otherwise. <strong>GDC-registered</strong>, <strong>indemnity-insured</strong>, free to patients.',
};

// Plain-text aliases for legacy consumers.
export const heroContentPlain = {
  title: 'Severe toothache, knocked-out tooth, or sudden swelling on the gum?',
  subtitle:
    'Tell us what happened and where in the borough you are. We match you with a vetted Enfield emergency dental appointment within 60 minutes in working hours, first thing the next morning otherwise. GDC-registered, indemnity-insured, free to patients.',
};

export const problemFraming = {
  heading: 'Three categories of dental emergency we triage every day in Enfield',
  paragraphsHtml: [
    'A <strong>dental emergency</strong> is anything where waiting a fortnight for a routine slot makes the outcome materially worse: pain that doesn\'t respond to ibuprofen and paracetamol stacked properly, a broken or <a href="/services/knocked-out-tooth/" class="lsi-link">knocked-out tooth</a>, infection visible as a gum boil or facial swelling, or a <strong>lost filling</strong> / <strong>lost crown</strong> exposing nerve. The matching service exists because, since 2020, finding same-day capacity at an Enfield practice — particularly NHS — has stopped being something you can do by ringing round. North Central London ICB capacity has been under sustained pressure and several borough practices have closed their NHS lists.',
    '<strong>Critical presentations</strong> route to a hospital, not a dentist. <strong>Avulsed adult tooth</strong> (knocked completely out), uncontrolled post-extraction bleeding, or a swelling spreading toward the eye, neck or floor of the mouth — that\'s a North Middlesex A&E or 999 problem, immediately. The matched dentist will say so on first contact. We will not book a paid private appointment for something that needs a hospital that day. Most Enfield-residents who need this go to North Mid (N18) for facial trauma; Chase Farm (EN2) is a planned-care site and not the right destination for an acute emergency.',
    '<strong>Urgent presentations</strong> are what most enquiries actually are: <strong>severe toothache</strong>, <a href="/services/dental-abscess/" class="lsi-link">dental abscess</a> with localised gum swelling, painful <strong>broken tooth</strong>, <strong>acute pericoronitis</strong> from a partially erupted <a href="/services/wisdom-tooth-pain/" class="lsi-link">lower wisdom tooth</a>. These match for <strong>same-day appointments</strong> in working hours. Persistent severe pain you can hold with painkillers until morning is matched first thing the next working day. Lost fillings without nerve exposure, lost crowns on intact stumps, and asymptomatic chips are matched within the working week — usually with the practice closest to your specific Enfield postcode rather than just whichever has next-day capacity.',
  ],
};

export const howItWorks = {
  heading: 'How the matching works in Enfield',
  steps: [
    {
      step: '1',
      title: 'Describe what is happening',
      desc: 'Tell us your name, a phone or email we can reach you on, where in the borough you are (a neighbourhood like Edmonton, Palmers Green, or Cockfosters is fine — postcode is even better), what happened with the tooth and when, and how soon you can travel. Two minutes, no account, no pressure.',
    },
    {
      step: '2',
      title: 'We triage and route to the right Enfield practice',
      descHtml:
        'A real person reads every enquiry. <strong>Critical cases</strong> (avulsion, spreading infection, uncontrolled bleeding) get NHS-111 or A&E redirection within minutes — North Mid for facial trauma if you\'re EN3 / N9 / N18, NHS 111 for the rest. <strong>Urgent cases</strong> get matched within the hour to a practice with current capacity, factoring travel time from your postcode (we don\'t send a Cockfosters resident to Edmonton when there\'s a Southgate slot open). Specific clinical needs route specifically — paediatric trauma, sedation requirement, Turkish-speaking preference for the Palmers Green / Edmonton communities, a known dental phobia.',
      desc: 'A real person reads every enquiry. Critical cases (avulsion, spreading infection, uncontrolled bleeding) get NHS-111 or A&E redirection within minutes — North Mid for facial trauma if you are EN3 / N9 / N18, NHS 111 for the rest. Urgent cases get matched within the hour to a practice with current capacity, factoring travel time from your postcode. Specific clinical needs route specifically — paediatric trauma, sedation requirement, Turkish-speaking preference for the Palmers Green / Edmonton communities, a known dental phobia.',
    },
    {
      step: '3',
      title: 'Attend the appointment, get pain controlled',
      descHtml:
        'The matched practice provides immediate <strong>dental pain relief</strong> at the first visit (drainage, temporary dressing, prescription antibiotics where indicated), takes any necessary X-rays, and quotes treatment beyond the consultation up front. You decide whether to proceed. We don\'t take a follow-up cut and the practice doesn\'t price differently because you came through us.',
      desc: 'The matched practice provides immediate dental pain relief at the first visit (drainage, temporary dressing, prescription antibiotics where indicated), takes any necessary X-rays, and quotes treatment beyond the consultation up front. You decide whether to proceed. We do not take a follow-up cut and the practice does not price differently because you came through us.',
    },
  ],
};

export const whyMatchingService = {
  heading: 'Why use a matching service rather than calling round Enfield practices',
  points: [
    {
      title: 'Same-hour answer in a borough where access is genuinely tight',
      descHtml:
        'Calling round yourself burns an afternoon and often still gets you "we can fit you in next Wednesday." NHS dental access across the North Central London ICB area (Enfield, Barnet, Camden, Haringey, Islington) has been under sustained strain since 2020 — multiple Enfield practices closed their NHS lists during the pandemic and have not reopened. We know which practices currently have private same-day capacity, which still hold any NHS slots, and which handle specific emergency types (avulsion versus abscess versus paediatric trauma versus sedation cases) competently. <a href="/location/" class="lsi-link">Browse our covered Enfield neighbourhoods</a> for area-specific options.',
      desc: 'Calling round yourself burns an afternoon and often still gets you "we can fit you in next Wednesday." NHS dental access across the North Central London ICB area has been under sustained strain since 2020 — multiple Enfield practices closed their NHS lists during the pandemic and have not reopened. We know which practices currently have private same-day capacity, which still hold any NHS slots, and which handle specific emergency types competently.',
    },
    {
      title: 'GDC-verified, indemnity-insured, no exceptions',
      descHtml:
        'Every dentist we route to is checked annually for current <strong>GDC registration</strong> and live <strong>professional indemnity insurance</strong>. You are not introduced to anyone who is not legitimately registered to practise in the UK — including nobody operating under "associate cover" without their own indemnity, and nobody whose registration is suspended pending a Fitness to Practise hearing.',
      desc: 'Every dentist we route to is checked annually for current GDC registration and live professional indemnity insurance. You are not introduced to anyone who is not legitimately registered to practise in the UK — including nobody operating under "associate cover" without their own indemnity, and nobody whose registration is suspended pending a Fitness to Practise hearing.',
    },
    {
      title: 'Honest about what is dental and what is hospital',
      descHtml:
        'Spreading facial cellulitis below the jawline, post-extraction bleeding that hasn\'t stopped after 30 minutes of firm pressure, or a tooth knocked out more than 60 minutes ago and dry — those belong at North Middlesex A&E or NHS 111, not a private dental chair. We tell you that on first contact rather than booking and billing. <a href="/about/" class="lsi-link">Read more about how the matching service works</a>.',
      desc: 'Spreading facial cellulitis below the jawline, post-extraction bleeding that has not stopped after 30 minutes of firm pressure, or a tooth knocked out more than 60 minutes ago and dry — those belong at North Middlesex A&E or NHS 111, not a private dental chair. We tell you that on first contact rather than booking and billing.',
    },
    {
      title: 'Free to the patient, no exceptions',
      desc: 'The matched practice pays us a small referral fee when an introduction turns into a booked appointment. You pay only the practice, only for the treatment you agree to. No markup, no commission inside the dentist\'s quote, no upsell to extras you didn\'t ask for. Your contact details go to one practice — the one that matches — never to a list.',
    },
  ],
};

export const faqSectionTitle = 'Common questions about emergency dental access in Enfield';

export const ctaSection = {
  heading: 'Get matched with an Enfield emergency dentist',
  subheading:
    'Free, no obligation, GDC-verified network across all Enfield postcodes — EN1, EN2, EN3, N9, N13, N14, N18, N21. Submit the form. We read every enquiry and triage within the hour in working hours.',
};
