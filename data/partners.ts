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

// No named partner is published until a referral agreement with a real
// GDC-registered practice is confirmed for this site. The previous
// "Enfield Smiles" entry was removed: the agreement could not be verified
// and the stated area (Enfield Town / EN1) did not match the practice on
// record. Listing an unverified partner is a DMCCA and YMYL risk. Re-add
// here only with a confirmed agreement and the correct area.
export const PARTNERS: Partner[] = [];

export const getPartnerById = (id: string): Partner | undefined =>
  PARTNERS.find(p => p.id === id);

export const getPartnersByAreaSlug = (slug: string): Partner[] =>
  PARTNERS.filter(p => p.areaSlug === slug);
