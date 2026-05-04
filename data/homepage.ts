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
    '<strong>Severe toothache</strong>, <strong>knocked-out tooth</strong>, or <strong>broken filling</strong>?',
  subtitleHtml:
    'Tell us what is wrong and we will match you with a vetted Enfield <strong>emergency dental appointment</strong> within 60 minutes during opening hours, first thing the next morning otherwise. <strong>GDC-registered dentist</strong>, <strong>professional indemnity insurance</strong>, free to patients.',
};

// Plain-text aliases for legacy consumers.
export const heroContentPlain = {
  title: 'Severe toothache, knocked-out tooth, or broken filling?',
  subtitle:
    'Tell us what is wrong and we will match you with a vetted Enfield emergency dental appointment within 60 minutes during opening hours, first thing the next morning otherwise. GDC-registered, professional indemnity insured, free to patients.',
};

export const problemFraming = {
  heading: 'Three categories of dental emergency we handle every day',
  paragraphsHtml: [
    'A <strong>dental emergency</strong> is anything where waiting two weeks for the next routine appointment will make the situation materially worse: pain that does not respond to over-the-counter painkillers, a broken or <a href="/services/knocked-out-tooth/" class="lsi-link">knocked-out tooth</a>, an infection causing facial swelling, a <strong>lost filling</strong> or <strong>lost crown</strong> leaving the underlying tooth exposed. The <strong>dental matching service</strong> exists because finding a dentist with same-day capacity in Enfield is genuinely hard outside of established patient relationships.',
    'Critical presentations: <strong>avulsed tooth</strong> (knocked-out adult teeth), spreading facial swelling, uncontrolled bleeding. These are routed for same-hour attention, or referred immediately to NHS 111 / 999 if the situation is genuinely a medical rather than dental emergency. Spreading <strong>orofacial infection</strong> that involves the eye, throat, or neck is a hospital problem, not a dental one, and we will tell you so. We classify this as <strong>dental trauma</strong> with a hospital-first triage path.',
    'Urgent presentations: <strong>severe toothache</strong>, <a href="/services/dental-abscess/" class="lsi-link">dental abscess</a>, painful <strong>broken tooth</strong> (or chipped tooth), <strong>acute pericoronitis</strong> from <a href="/services/wisdom-tooth-pain/" class="lsi-link">wisdom-tooth pain</a>. These are matched for <strong>same-day appointments</strong> during opening hours. <strong>Out-of-hours dental care</strong> for severe pain that you can manage with painkillers until morning is matched first thing the next working day. Lost fillings, lost crowns, and asymptomatic chips are matched within the working week.',
  ],
};

export const howItWorks = {
  heading: 'How the matching works',
  steps: [
    {
      step: '1',
      title: 'Describe the emergency',
      desc: 'Fill in the matching form with your name, contact details, where in Enfield you are (or which postcode), what is happening with your tooth, and how soon you can attend. Takes under two minutes.',
    },
    {
      step: '2',
      title: 'We triage and introduce',
      descHtml:
        'A real person reads every enquiry and runs a <strong>dental triage</strong>. Critical cases (avulsion, spreading infection) bypass the queue. <strong>Urgent cases</strong> match within the hour. We confirm an Enfield practice with availability that matches your situation.',
      desc: 'A real person reads every enquiry and runs a dental triage. Critical cases (avulsion, spreading infection) bypass the queue. Urgent cases match within the hour. We confirm an Enfield practice with availability that matches your situation.',
    },
    {
      step: '3',
      title: 'Attend the emergency appointment',
      descHtml:
        'The matched dentist provides immediate <strong>dental pain relief</strong>, takes any necessary X-rays, and quotes any treatment beyond the consultation itself. You decide whether to proceed.',
      desc: 'The matched dentist provides immediate dental pain relief, takes any necessary X-rays, and quotes any treatment beyond the consultation itself. You decide whether to proceed.',
    },
  ],
};

export const whyMatchingService = {
  heading: 'Why use a matching service rather than calling round?',
  points: [
    {
      title: 'Same-hour answer',
      descHtml:
        'Calling round Enfield practices yourself can take an afternoon and still produce no slot. NHS dental capacity in Enfield has been under pressure for several years. We know which practices have current capacity for an <strong>emergency dental appointment</strong> and which dentists handle which kinds of emergency best. <a href="/location/" class="lsi-link">Browse our covered Enfield neighbourhoods</a> to see local options.',
      desc: 'Calling round Enfield practices yourself can take an afternoon and still produce no slot. NHS dental capacity in Enfield has been under pressure for several years. We know which practices have current capacity for an emergency dental appointment and which dentists handle which kinds of emergency best.',
    },
    {
      title: 'GDC-verified network',
      descHtml:
        'Every dentist in our network is verified annually for current <strong>GDC registration</strong> and <strong>professional indemnity insurance</strong>. You are not introduced to anyone who is not legitimately registered to practise.',
      desc: 'Every dentist in our network is verified annually for current GDC registration and professional indemnity insurance. You are not introduced to anyone who is not legitimately registered to practise.',
    },
    {
      title: 'Honest medical-vs-dental triage',
      descHtml:
        'Some presentations belong with NHS 111 or A&E rather than a dentist. We tell you which is which rather than booking everything as a paid appointment. <a href="/about/" class="lsi-link">Read about how the matching service works</a>.',
      desc: 'Some presentations belong with NHS 111 or A&E rather than a dentist. We tell you which is which rather than booking everything as a paid appointment.',
    },
    {
      title: 'Free to patients, always',
      desc: 'Dentists in our network pay us a small fee when an introduction leads to an appointment. You pay only the dentist for the treatment. We add no markup, charge no commission, and never share your data outside the matched practice.',
    },
  ],
};

export const faqSectionTitle = 'Common questions about emergency dental access in Enfield';

export const ctaSection = {
  heading: 'Get matched with an Enfield emergency dentist',
  subheading:
    'Free, no obligation, GDC-verified network. Submit the form below. We triage every enquiry within the hour during opening hours.',
};
