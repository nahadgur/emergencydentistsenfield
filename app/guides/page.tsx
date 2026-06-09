import type { Metadata } from 'next';
import { guides } from '@/data/guides';
import { siteConfig } from '@/data/site';
import GuidesIndexClient from './GuidesIndexClient';

const TITLE = 'Emergency Dental Guides for Enfield | Safe First Aid';
const DESCRIPTION =
  'Plain-English emergency dental guides for Enfield: toothache, knocked-out and broken teeth, abscesses, out-of-hours access and more. Safe first aid and same-day matching.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${siteConfig.url}/guides/` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${siteConfig.url}/guides/`, type: 'website', locale: 'en_GB' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

export default function GuidesIndexPage() {
  const items = guides.map(g => ({
    slug: g.slug,
    title: g.title,
    heroEyebrow: g.heroEyebrow,
    metaDescription: g.metaDescription,
  }));

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${siteConfig.url}/guides/#collection`,
    name: 'Emergency Dental Guides for Enfield',
    description: DESCRIPTION,
    url: `${siteConfig.url}/guides/`,
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    inLanguage: 'en-GB',
    hasPart: guides.map(g => ({
      '@type': 'MedicalWebPage',
      headline: g.title,
      url: `${siteConfig.url}/guides/${g.slug}/`,
      datePublished: g.publishDate,
      dateModified: g.updatedDate,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <GuidesIndexClient items={items} />
    </>
  );
}
