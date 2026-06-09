'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { EmergencyDisclaimer } from '@/components/EmergencyDisclaimer';

interface Item { slug: string; title: string; heroEyebrow: string; metaDescription: string }

export default function GuidesIndexClient({ items }: { items: Item[] }) {
  const [modal, setModal] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />

      <main id="main" className="flex-grow bg-cream">
        <section className="bg-ink text-white">
          <div className="container-width pt-10 pb-12">
            <Breadcrumbs dark items={[{ label: 'Guides' }]} />
            <div className="max-w-3xl mt-6">
              <p className="eyebrow text-brand-300 mb-3">Emergency dental guides</p>
              <h1 className="font-sans font-medium text-[32px] lg:text-[44px] leading-tight text-white mb-4">
                Emergency dental guides for Enfield
              </h1>
              <p className="text-[15px] lg:text-[17px] text-white/75 leading-relaxed">
                Plain-English help for the most common dental emergencies, written for Enfield and the EN postcodes. Each guide leads with safe first aid and a clear line on when to call 999, go to A&amp;E, or use NHS 111. We are a matching service and connect you with a vetted local dentist fast.
              </p>
            </div>
          </div>
        </section>

        <div className="container-width py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map(item => (
              <Link
                key={item.slug}
                href={`/guides/${item.slug}/`}
                className="block bg-white border border-ink/10 rounded-lg p-6 group hover:border-brand-400 transition-colors"
              >
                <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-brand-600 mb-2">{item.heroEyebrow}</p>
                <h2 className="font-sans font-medium text-[19px] text-ink leading-tight mb-2 group-hover:text-brand-600 transition-colors">
                  {item.title}
                </h2>
                <p className="text-[13.5px] text-ink/70 leading-relaxed line-clamp-3 mb-3">{item.metaDescription}</p>
                <span className="inline-flex items-center gap-1 text-[12px] font-bold text-brand-600">
                  Read guide <ArrowRight size={11} />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 max-w-3xl">
            <EmergencyDisclaimer variant="block" />
          </div>
        </div>

        <section className="bg-brand-600 text-white text-center py-14">
          <div className="container-width max-w-3xl">
            <h2 className="font-sans font-medium text-[26px] lg:text-[36px] leading-tight mb-3">
              In pain now? Get matched with an Enfield dentist
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
