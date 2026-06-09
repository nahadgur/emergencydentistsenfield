// lib/schema.ts
// Shared JSON-LD builders for hubs and spokes. The editorial author is the
// brand acronym "EDE" (Emergency Dentist Enfield), an editorial Organization
// entity, not an invented person. YMYL pages reference it by @id.
import { siteConfig } from '@/data/site';

const ORG_ID = `${siteConfig.url}/#organization`;
export const AUTHOR_ID = `${siteConfig.url}/#editorial`;

export function editorialAuthorJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': AUTHOR_ID,
    name: 'EDE',
    alternateName: `${siteConfig.name} editorial team`,
    url: siteConfig.url,
    parentOrganization: { '@id': ORG_ID },
    description:
      'Editorial team for Emergency Dentist Enfield. Clinical and first-aid guidance is checked against NHS 111 and NHS dental advice, the British Dental Association, and the Oral Health Foundation. We are a matching service, not a treating practice.',
  };
}

interface ArticleOpts {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
}

export function buildArticleSchema(opts: ArticleOpts) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${opts.url}#article`,
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: { '@id': AUTHOR_ID },
    reviewedBy: { '@id': AUTHOR_ID },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: opts.url,
    inLanguage: 'en-GB',
  };
}

// MedicalWebPage for the YMYL urgent-care guides. lastReviewed + reviewedBy
// signal medical oversight without inventing a named clinician.
export function buildMedicalWebPageSchema(opts: ArticleOpts & { about?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': `${opts.url}#medicalwebpage`,
    url: opts.url,
    name: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    lastReviewed: opts.dateModified,
    reviewedBy: { '@id': AUTHOR_ID },
    author: { '@id': AUTHOR_ID },
    publisher: { '@id': ORG_ID },
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    inLanguage: 'en-GB',
    ...(opts.about
      ? { about: { '@type': 'MedicalCondition', name: opts.about } }
      : {}),
  };
}

export function buildFaqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer.replace(/<[^>]+>/g, '') },
    })),
  };
}
