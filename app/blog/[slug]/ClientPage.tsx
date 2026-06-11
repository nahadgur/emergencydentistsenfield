'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Clock, AlertCircle } from 'lucide-react';
import { getArticleBySlug, getArticlesByHub, getPublishedArticles, ContentBlock } from '@/data/blog';
import { getGuideBySlug } from '@/data/guides';
import { siteConfig } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SpokeHero } from '@/components/SpokeHero';
import { EmergencyDisclaimer } from '@/components/EmergencyDisclaimer';
import { buildBreadcrumbSchema } from '@/lib/breadcrumbs';
import { editorialAuthorJsonLd, buildMedicalWebPageSchema, buildFaqPageSchema, AUTHOR_ID } from '@/lib/schema';

// Lightweight inline-link parser. Renders [label](/internal/path/) as a
// Next.js <Link>. Backward compatible: plain text with no [..](..) token is
// returned unchanged. Only internal (leading "/") hrefs are linked.
function renderText(text: string) {
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: (string | JSX.Element)[] = [];
  let last = 0;
  let key = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const [full, label, href] = m;
    if (href.startsWith('/')) {
      nodes.push(
        <Link key={key++} href={href} className="font-semibold text-brand-600 hover:text-brand-700 underline underline-offset-2">
          {label}
        </Link>,
      );
    } else {
      nodes.push(full);
    }
    last = m.index + full.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes.length === 0 ? text : nodes;
}

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={i} className="font-sans font-medium text-[26px] lg:text-[32px] text-ink leading-tight mt-10 mb-4">
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={i} className="font-sans font-medium text-[20px] lg:text-[24px] text-ink leading-tight mt-8 mb-3">
          {block.text}
        </h3>
      );
    case 'p':
      return (
        <p key={i} className="text-[15.5px] text-ink/80 leading-relaxed mb-4">
          {renderText(block.text ?? '')}
        </p>
      );
    case 'list':
      return (
        <ul key={i} className="list-disc pl-6 space-y-2 mb-5 text-[15px] text-ink/80 leading-relaxed">
          {block.items?.map((item, j) => <li key={j}>{renderText(item)}</li>)}
        </ul>
      );
    case 'note':
      return (
        <div key={i} className="bg-urgent-50 border-l-4 border-urgent-500 rounded-md p-4 my-6">
          <div className="flex items-start gap-3">
            <AlertCircle size={16} className="text-urgent-600 flex-shrink-0 mt-0.5" />
            <p className="text-[14px] text-ink/85 leading-relaxed">{renderText(block.text ?? '')}</p>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [modal, setModal] = useState(false);
  const article = getArticleBySlug(params.slug);
  if (!article || article.draft) notFound();

  const url = `${siteConfig.url}/blog/${article.slug}/`;
  const dateModified = article.updatedDate ?? article.publishDate;
  const hub = getGuideBySlug(article.hub);

  // No read-time field in the data, so estimate from the body word count.
  const words = (article.excerpt + ' ' + article.content
    .map(b => `${b.text ?? ''} ${(b.items ?? []).join(' ')}`)
    .join(' '))
    .trim().split(/\s+/).length;
  const readMins = Math.max(3, Math.round(words / 200));

  // Related = live spokes in the same hub, falling back to other published spokes.
  const hubSiblings = getArticlesByHub(article.hub).filter(a => a.slug !== article.slug);
  const others = (hubSiblings.length > 0
    ? hubSiblings
    : getPublishedArticles().filter(a => a.slug !== article.slug)
  ).slice(0, 3);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Guides',     url: '/blog/' },
    { name: article.title, url: `/blog/${article.slug}/` },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishDate,
    dateModified,
    author: { '@id': AUTHOR_ID },
    reviewedBy: { '@id': AUTHOR_ID },
    publisher: { '@id': `${siteConfig.url}/#organization` },
    mainEntityOfPage: url,
    inLanguage: 'en-GB',
  };

  const medicalSchema = buildMedicalWebPageSchema({
    url,
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishDate,
    dateModified,
    about: hub?.about,
  });

  const faqSchema = article.faqs && article.faqs.length > 0 ? buildFaqPageSchema(article.faqs) : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(editorialAuthorJsonLd()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />

      <main id="main" className="flex-grow bg-cream">

        <section className="bg-cream">
          <div className="container-width pt-8 pb-2">
            <Breadcrumbs items={[{ label: 'Guides', href: '/blog/' }, { label: article.title }]} />
            <div className="mt-5">
              <SpokeHero
                title={article.title}
                hubName={hub ? hub.title : null}
                hubSlug={article.hub}
                readMins={readMins}
              />
              <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.18em] text-brand-600 mt-4">
                <span>{article.category}</span>
                <span className="w-1 h-1 rounded-full bg-ink/20" />
                <span className="flex items-center gap-1"><Clock size={11} /> {article.publishDate}</span>
              </div>
              <h1 className="sr-only">{article.title}</h1>
              <p className="text-[15px] lg:text-[17px] text-ink/75 leading-relaxed mt-3 max-w-3xl">
                {article.excerpt}
              </p>
            </div>
          </div>
        </section>

        <div className="container-width py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            <article className="lg:col-span-2">
              {hub && (
                <p className="text-[13px] text-ink/70 mb-6">
                  Part of our guide:{' '}
                  <Link href={`/guides/${hub.slug}/`} className="font-bold text-brand-600 hover:text-brand-700">
                    {hub.title}
                  </Link>
                </p>
              )}
              {article.content.map(renderBlock)}

              <div className="mt-12">
                <EmergencyDisclaimer variant="block" />
              </div>
            </article>

            <aside>
              <div className="lg:sticky lg:top-24 space-y-5">
                <div className="hidden lg:block">
                  <HeroLeadForm />
                </div>

                <div className="bg-white border border-ink/10 rounded-lg p-5">
                  <p className="eyebrow mb-3">Other guides</p>
                  <ul className="space-y-3">
                    {others.map(o => (
                      <li key={o.slug}>
                        <Link href={`/blog/${o.slug}/`} className="block group">
                          <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-brand-600 mb-1">{o.category}</p>
                          <p className="text-[14px] font-bold text-ink leading-tight group-hover:text-brand-600 transition-colors">{o.title}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href="/blog/" className="inline-flex items-center gap-1 mt-4 pt-3 border-t border-ink/8 text-[12px] font-bold text-brand-600 hover:text-brand-700">
                    All guides <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <section className="bg-brand-600 text-white text-center py-14">
          <div className="container-width max-w-3xl">
            <h2 className="font-sans font-medium text-[26px] lg:text-[36px] leading-tight mb-3">
              Need a Enfield emergency dentist now?
            </h2>
            <p className="text-[15px] text-white/85 max-w-xl mx-auto mb-6 leading-relaxed">
              Free matching, GDC-verified network, most introductions within the hour.
            </p>
            <button onClick={() => setModal(true)} className="btn-on-dark text-[15px] px-7 py-3.5">
              Open the matching form <ArrowRight size={14} />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
