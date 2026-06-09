import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { guides, getGuideBySlug, GUIDE_SLUGS } from '@/data/guides';
import { getArticlesByHub } from '@/data/blog';
import { getServiceBySlug } from '@/data/services';
import { siteConfig } from '@/data/site';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';
import {
  editorialAuthorJsonLd,
  buildArticleSchema,
  buildMedicalWebPageSchema,
  buildFaqPageSchema,
} from '@/lib/schema';
import GuideClient from './ClientPage';

interface Props {
  params: { slug: string };
}

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDE_SLUGS.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug);
  if (!guide) return { title: 'Not Found' };
  const canonical = `${siteConfig.url}/guides/${guide.slug}/`;
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url: canonical,
      type: 'article',
      publishedTime: guide.publishDate,
      modifiedTime: guide.updatedDate,
    },
    twitter: { card: 'summary_large_image', title: guide.metaTitle, description: guide.metaDescription },
  };
}

export default function Page({ params }: Props) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) notFound();

  const url = `${siteConfig.url}/guides/${guide.slug}/`;

  const spokes = getArticlesByHub(guide.slug).map(a => ({
    slug: a.slug,
    title: a.title,
    category: a.category,
    excerpt: a.excerpt,
  }));

  const pillar = guide.serviceSlug ? getServiceBySlug(guide.serviceSlug) : undefined;
  const service = pillar ? { slug: pillar.slug, title: pillar.title } : null;

  const relatedHubs = guide.relatedHubs
    .map(s => getGuideBySlug(s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g))
    .map(g => ({ slug: g.slug, title: g.title }));

  const schemas = [
    editorialAuthorJsonLd(),
    buildBreadcrumbSchema([
      { name: 'Guides', url: '/guides/' },
      { name: guide.title, url: `/guides/${guide.slug}/` },
    ]),
    buildArticleSchema({
      url,
      headline: guide.title,
      description: guide.metaDescription,
      datePublished: guide.publishDate,
      dateModified: guide.updatedDate,
    }),
    buildMedicalWebPageSchema({
      url,
      headline: guide.title,
      description: guide.metaDescription,
      datePublished: guide.publishDate,
      dateModified: guide.updatedDate,
      about: guide.about,
    }),
    buildFaqPageSchema(guide.faqs),
  ];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <GuideClient guide={guide} spokes={spokes} service={service} relatedHubs={relatedHubs} />
    </>
  );
}
