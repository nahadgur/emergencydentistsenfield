// data/partners.ts
//
// Named partner surgeries that the matching service routes enquiries to.
// These are the visible/verifiable network anchors — patients can recognise
// the names and verify they are real GDC-registered practices in the borough.
//
// Adding a partner here is a real claim — only list practices we have an
// actual referral agreement with. The whole credibility of the matching
// service rests on this list being accurate.

export interface Partner {
  /** Short identifier used as React key. */
  id: string;
  /** Practice display name. */
  name: string;
  /** Enfield neighbourhood / area where the practice sits. */
  area: string;
  /** Slug of the location hub the practice maps to (for cross-linking). */
  areaSlug: string;
  /** One-line description of what the practice covers within our network. */
  description: string;
  /** Optional postcode — outward part only (e.g. "EN1") so we don't
   *  publish the full practice address. */
  postcode?: string;
  /** Optional public website URL. Rendered as a verifiable external link
   *  for trust signal — patients can confirm the practice is real. */
  website?: string;
}

export const PARTNERS: Partner[] = [
  {
    id: 'enfield-smiles',
    name: 'Enfield Smiles',
    area: 'Ponders End',
    areaSlug: 'ponders-end',
    description:
      'Established dental practice on Ponders End High Street (EN3). Takes NHS and private patients, and is routed for emergency presentations across north and east Enfield, including Edmonton, Palmers Green and the surrounding EN postcodes.',
    postcode: 'EN3',
  },
];

export const getPartnerById = (id: string): Partner | undefined =>
  PARTNERS.find(p => p.id === id);

export const getPartnersByAreaSlug = (slug: string): Partner[] =>
  PARTNERS.filter(p => p.areaSlug === slug);
