'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, AlertCircle } from 'lucide-react';
import type { Guide } from '@/data/guides';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SpokeHero } from '@/components/SpokeHero';
import { FAQ } from '@/components/FAQ';
import { EmergencyDisclaimer } from '@/components/EmergencyDisclaimer';

interface Spoke { slug: string; title: string; category: string; excerpt: string }

export default function GuideClient({
  guide,
  spokes,
  service,
  relatedHubs,
}: {
  guide: Guide;
  spokes: Spoke[];
  service: { slug: string; title: string } | null;
  relatedHubs: { slug: string; title: string }[];
}) {
  const [modal, setModal] = useState(false);

  // No read-time field in the data, so estimate from the body word count.
  const words = (guide.heroIntro + ' ' + guide.intro.join(' ') + ' ' + guide.sections
    .map(s => `${s.heading} ${s.body.join(' ')} ${(s.list ?? []).join(' ')}`)
    .join(' '))
    .trim().split(/\s+/).length;
  const readMins = Math.max(3, Math.round(words / 200));

  return (
    <>
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />

      <main id="main" className="flex-grow bg-cream">
        {/* Hero */}
        <section className="bg-cream">
          <div className="container-width pt-8 pb-2">
            <Breadcrumbs items={[{ label: 'Guides', href: '/guides/' }, { label: guide.title }]} />
            <div className="mt-5">
              <SpokeHero
                title={guide.title}
                hubName="Guide"
                hubSlug={guide.slug}
                readMins={readMins}
              />
              <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.18em] text-brand-600 mt-4">
                <span>{guide.heroEyebrow}</span>
                <span className="w-1 h-1 rounded-full bg-ink/20" />
                <span className="flex items-center gap-1"><Clock size={11} /> Reviewed {guide.updatedDate}</span>
                <span className="w-1 h-1 rounded-full bg-ink/20" />
                <span>By EDE</span>
              </div>
              <h1 className="sr-only">{guide.title}</h1>
              <p className="text-[15px] lg:text-[17px] text-ink/75 leading-relaxed mt-3 max-w-3xl">
                {guide.heroIntro}
              </p>
            </div>
          </div>
        </section>

        {/* Safety note, leads the page */}
        <section className="bg-urgent-50 border-b border-urgent-200">
          <div className="container-width py-5">
            <div className="flex items-start gap-3 max-w-3xl">
              <AlertCircle size={18} className="text-urgent-600 flex-shrink-0 mt-0.5" />
              <p className="text-[14px] text-ink/85 leading-relaxed">
                <strong className="text-ink">First, safety.</strong> {guide.safetyNote}
              </p>
            </div>
          </div>
        </section>

        <div className="container-width py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            <article className="lg:col-span-2">
              {guide.intro.map((p, i) => (
                <p key={i} className={i === 0 ? 'text-[17px] text-ink/85 leading-relaxed mb-4 font-medium' : 'text-[15.5px] text-ink/80 leading-relaxed mb-4'}>
                  {p}
                </p>
              ))}

              {guide.sections.map(section => (
                <section key={section.id} id={section.id} className="scroll-mt-24">
                  <h2 className="font-sans font-medium text-[26px] lg:text-[32px] text-ink leading-tight mt-10 mb-4">
                    {section.heading}
                  </h2>
                  {section.body.map((p, i) => (
                    <p key={i} className="text-[15.5px] text-ink/80 leading-relaxed mb-4">{p}</p>
                  ))}
                  {section.list && (
                    <ul className="list-disc pl-6 space-y-2 mb-5 text-[15px] text-ink/80 leading-relaxed">
                      {section.list.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  )}
                </section>
              ))}

              {/* Child spokes in this hub (drafts excluded) */}
              {spokes.length > 0 && (
                <div className="mt-12">
                  <p className="eyebrow mb-4">More on this in our guides</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {spokes.map(sp => (
                      <Link key={sp.slug} href={`/blog/${sp.slug}/`} className="block bg-white border border-ink/10 rounded-lg p-5 group hover:border-brand-400 transition-colors">
                        <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-brand-600 mb-1.5">{sp.category}</p>
                        <p className="text-[15px] font-bold text-ink leading-tight mb-1.5 group-hover:text-brand-600 transition-colors">{sp.title}</p>
                        <p className="text-[13px] text-ink/70 leading-relaxed line-clamp-2">{sp.excerpt}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {guide.faqs.length > 0 && (
                <div className="mt-12">
                  <FAQ faqs={guide.faqs} title={`${guide.heroEyebrow}: common questions`} />
                </div>
              )}

              {relatedHubs.length > 0 && (
                <div className="mt-12">
                  <p className="eyebrow mb-3">Related emergencies</p>
                  <div className="flex flex-wrap gap-2.5">
                    {relatedHubs.map(h => (
                      <Link key={h.slug} href={`/guides/${h.slug}/`} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-brand-700 bg-brand-50 border border-brand-200 rounded-full px-3.5 py-1.5 hover:bg-brand-100 transition-colors">
                        {h.title} <ArrowRight size={12} />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-12">
                <EmergencyDisclaimer variant="block" />
              </div>
            </article>

            <aside>
              <div className="lg:sticky lg:top-24 space-y-5">
                <div className="hidden lg:block">
                  <HeroLeadForm />
                </div>

                {service && (
                  <div className="bg-white border border-ink/10 rounded-lg p-5">
                    <p className="eyebrow mb-2">Related service</p>
                    <Link href={`/services/${service.slug}/`} className="text-[15px] font-bold text-ink leading-tight hover:text-brand-600 transition-colors inline-flex items-center gap-1.5">
                      {service.title} <ArrowRight size={13} />
                    </Link>
                  </div>
                )}

                <div className="bg-white border border-ink/10 rounded-lg p-5">
                  <p className="eyebrow mb-3">All guides</p>
                  <Link href="/guides/" className="inline-flex items-center gap-1 text-[13px] font-bold text-brand-600 hover:text-brand-700">
                    Browse every emergency guide <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <section className="bg-brand-600 text-white text-center py-14">
          <div className="container-width max-w-3xl">
            <h2 className="font-sans font-medium text-[26px] lg:text-[36px] leading-tight mb-3">
              Need an Enfield emergency dentist now?
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
