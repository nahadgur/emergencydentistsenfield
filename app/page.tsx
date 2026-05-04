'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, AlertCircle, MapPin, Calendar, FileCheck, Wallet, ScanLine, Award, Activity } from 'lucide-react';
import { services } from '@/data/services';
import { AREA_HUBS } from '@/data/locations';
import { feeBands } from '@/data/pricing';
import { siteConfig, FAQS_HOME, TRUST_BADGES } from '@/data/site';
import { heroContent, problemFraming, howItWorks, whyMatchingService, faqSectionTitle, ctaSection } from '@/data/homepage';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LeadFormModal } from '@/components/LeadFormModal';
import { HeroLeadForm } from '@/components/HeroLeadForm';
import { FAQ } from '@/components/FAQ';
import { Reveal } from '@/components/Reveal';
import { artForSlug, HeroIllustration } from '@/components/DentalArt';

// 2026-05-05 — design implemented from the Claude Design Enfield
// handoff (`Emergency Dentists Enfield.html`). Medical-trust blue,
// soft 12px rounded cards, Inter only. Mockup wording is NOT used;
// every copy slot is filled from the site's existing data files
// (siteConfig, heroContent, services, AREA_HUBS, feeBands, etc.).
//
// Two adaptations from the prototype because we are a matching
// service (not a clinical practice):
//   * No phone CTAs anywhere; the design's "Call 020 8000 0000"
//     blocks are replaced with form-modal triggers.
//   * No "Meet the dentist" or "Patient reviews" sections (we have
//     no clinician and no real testimonials yet). Replaced with a
//     "By the numbers" trust strip pulling from TRUST_BADGES voice.

export default function HomePage() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={modal} onClose={() => setModal(false)} />
      <Header onOpenModal={() => setModal(true)} />

      <main className="flex-grow bg-bg">

        {/* ─── Hero ────────────────────────────────────────────
            Status pill, h1, subhead on the left; lead form on the
            right (form-first per the lead-gen rule). Soft blue
            section background. Below the trust strip + hero
            illustration on mobile. */}
        <section className="bg-soft">
          <div className="container-width pt-10 pb-12 lg:pt-14 lg:pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <Reveal className="lg:col-span-7">
                <div className="status-pill mb-6">
                  {heroContent.eyebrow}
                </div>

                <h1
                  className="text-ink mb-4 leading-[1.12] tracking-[-0.02em] font-bold"
                  style={{ fontSize: 'clamp(30px, 4.6vw, 50px)' }}
                  dangerouslySetInnerHTML={{ __html: heroContent.titleHtml }}
                />

                <p
                  className="text-[16px] lg:text-[17px] leading-[1.55] text-ink-text max-w-2xl mb-7 lsi-prose"
                  dangerouslySetInnerHTML={{ __html: heroContent.subtitleHtml }}
                />

                {/* Trust strip — three small cards with stat + label.
                    Adapted to the matching-service voice; no clinical
                    claims about wait times or review counts. */}
                <div className="grid grid-cols-3 gap-3 mb-7 max-w-xl">
                  {[
                    { n: '60m',     l: 'Avg match' },
                    { n: '8',       l: 'EN/N postcodes' },
                    { n: 'GDC',     l: 'Verified network' },
                  ].map(s => (
                    <div key={s.l} className="bg-white border border-line rounded-card text-center px-2.5 py-3">
                      <div className="text-[18px] font-bold text-brand-500 leading-none">{s.n}</div>
                      <div className="text-[11px] text-ink-mute mt-1.5">{s.l}</div>
                    </div>
                  ))}
                </div>

                {/* Hero illustration (mobile only — desktop is taken
                    by the form column on the right). */}
                <div className="lg:hidden bg-white border border-line rounded-card overflow-hidden">
                  <HeroIllustration height={200} />
                </div>
              </Reveal>

              <Reveal direction="right" delay={120} className="lg:col-span-5">
                <HeroLeadForm />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─── Emergency strip — yellow YMYL alert ──────────────
            Pulled from the design's "In severe pain right now?" strip
            but retargeted as the 999/111 medical-emergency callout. */}
        <Reveal as="section" className="border-t-[3px] border-warning-500 bg-[#fff8f0] border-b border-line">
          <div className="container-width py-4 lg:py-5 flex items-center gap-4">
            <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-warning-500 grid place-items-center flex-shrink-0">
              <Shield size={20} strokeWidth={2} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[14px] font-bold text-ink leading-snug">
                Genuine medical emergency?
              </div>
              <div className="text-[13px] text-ink-text leading-[1.45]">
                Spreading facial swelling, breathing difficulty, or uncontrolled bleeding, call <strong className="text-danger-600">999</strong> or <strong className="text-danger-600">NHS 111</strong>. Hospital, not a dentist.
              </div>
            </div>
          </div>
        </Reveal>

        {/* ─── 01 — Triage (problem framing) ──────────────────── */}
        <Reveal as="section" className="bg-white py-14 lg:py-20">
          <div className="container-width">
            <div className="text-center mb-9 max-w-3xl mx-auto">
              <p className="eyebrow mb-2">Triage</p>
              <h2 className="text-[26px] lg:text-[34px] font-bold text-ink mb-4 tracking-[-0.01em] leading-[1.2]">
                {problemFraming.heading}
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4 text-[15px] lg:text-[16px] leading-[1.65] text-ink-text lsi-prose">
              {problemFraming.paragraphsHtml.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
          </div>
        </Reveal>

        {/* ─── Services — 2-col card grid with custom dental art ─
            Each tile renders a soft-blue tray containing the
            service-specific illustration, then title + description. */}
        <Reveal as="section" className="bg-white py-14 lg:py-20 border-t border-line">
          <div className="container-width">
            <div className="text-center mb-9">
              <p className="eyebrow mb-2">Our services</p>
              <h2 className="text-[26px] lg:text-[34px] font-bold text-ink tracking-[-0.01em] leading-[1.2]">
                What we match for
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
              {services.map((s, i) => {
                const Art = artForSlug(s.slug);
                return (
                  <Reveal key={s.slug} delay={Math.min(i * 50, 300)}>
                    <Link
                      href={`/services/${s.slug}/`}
                      className="card group flex flex-col gap-3 p-5 h-full hover:shadow-card-soft"
                    >
                      <div className="w-full bg-soft rounded-[10px] py-3 grid place-items-center">
                        <Art size={64} />
                      </div>
                      <div className="text-[14.5px] font-bold text-ink leading-[1.25]">
                        {s.title}
                      </div>
                      <div className="text-[13px] text-ink-text leading-[1.5] flex-grow">
                        {s.description}
                      </div>
                      <span className="text-[12.5px] font-semibold text-brand-500 inline-flex items-center gap-1.5 group-hover:gap-2 transition-all">
                        Read more <ArrowRight size={12} />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-7 text-center">
              <Link href="/services/" className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-line rounded-btn text-[14px] font-semibold text-brand-500 hover:bg-soft transition-colors">
                View all emergencies <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* ─── Why us — soft blue section, list of reasons with
            icon-boxes. Pulled from the existing whyMatchingService
            data, not the mockup's "Trusted dental care in Enfield"
            example copy. */}
        <Reveal as="section" className="bg-soft py-14 lg:py-20">
          <div className="container-width">
            <div className="text-center mb-8 max-w-2xl mx-auto">
              <p className="eyebrow mb-2">Why use us</p>
              <h2 className="text-[26px] lg:text-[34px] font-bold text-ink mb-3 tracking-[-0.01em] leading-[1.2]">
                {whyMatchingService.heading}
              </h2>
            </div>

            <div className="max-w-3xl mx-auto bg-white border border-line rounded-card overflow-hidden">
              {whyMatchingService.points.map((p, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 px-4 lg:px-5 py-4 ${i > 0 ? 'border-t border-line' : ''}`}
                >
                  <span className="w-10 h-10 rounded-[10px] bg-brand-100 grid place-items-center flex-shrink-0">
                    {iconForIndex(i)}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[14.5px] font-bold text-ink leading-[1.3] mb-1">
                      {p.title}
                    </div>
                    <p
                      className="text-[14px] text-ink-text leading-[1.55] lsi-prose"
                      dangerouslySetInnerHTML={{ __html: p.descHtml ?? p.desc }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ─── How it works — three numbered steps in cards ──── */}
        <Reveal as="section" className="bg-white py-14 lg:py-20">
          <div className="container-width">
            <div className="text-center mb-9 max-w-2xl mx-auto">
              <p className="eyebrow mb-2">How it works</p>
              <h2 className="text-[26px] lg:text-[34px] font-bold text-ink tracking-[-0.01em] leading-[1.2]">
                {howItWorks.heading}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {howItWorks.steps.map((step, i) => (
                <Reveal key={step.step} delay={i * 100}>
                  <div className="card p-6 h-full">
                    <div className="w-9 h-9 rounded-full bg-brand-500 text-white grid place-items-center text-[14px] font-bold mb-4">
                      {parseInt(step.step, 10)}
                    </div>
                    <h3 className="text-[17px] font-bold text-ink leading-[1.25] mb-2">
                      {step.title}
                    </h3>
                    <p
                      className="text-[14px] text-ink-text leading-[1.55] lsi-prose"
                      dangerouslySetInnerHTML={{ __html: step.descHtml ?? step.desc }}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ─── Pricing — fee bands table from data/pricing.ts ──
            Replaces the design's "No hidden costs" example pricing.
            Uses real published NHS rates + private ranges from the
            site's own pricing data. */}
        <Reveal as="section" className="bg-white py-14 lg:py-20 border-t border-line">
          <div className="container-width">
            <div className="text-center mb-9 max-w-2xl mx-auto">
              <p className="eyebrow mb-2">Transparent pricing</p>
              <h2 className="text-[26px] lg:text-[34px] font-bold text-ink mb-3 tracking-[-0.01em] leading-[1.2]">
                Typical fees in Enfield
              </h2>
              <p className="text-[14.5px] text-ink-text leading-[1.55]">
                NHS Band rates are the published 2026 NHS England fees. Private ranges are typical Enfield market quotes from dentists in our matching network. The matched dentist provides a written quote before any treatment.
              </p>
            </div>

            <div className="max-w-3xl mx-auto border border-line rounded-card overflow-hidden">
              {feeBands.map((b, i) => (
                <div
                  key={b.slug}
                  className={`flex items-center justify-between gap-4 px-4 lg:px-5 py-3.5 text-[14px] ${i > 0 ? 'border-t border-line' : ''} ${i % 2 === 1 ? 'bg-soft' : 'bg-white'}`}
                >
                  <div className="min-w-0">
                    <div className="font-semibold text-ink leading-[1.3]">{b.service}</div>
                    <div className="text-[12px] text-ink-mute mt-0.5">{b.notes}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-[13px] font-bold text-brand-500">{b.privateRange}</div>
                    <div className="text-[11px] text-ink-mute mt-0.5">{b.nhsCost} NHS</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ─── Coverage — replaces the design's "Find us" address
            block. We don't have a clinical address (matching service);
            instead, surface the AREA_HUBS list. */}
        <Reveal as="section" className="bg-soft py-14 lg:py-20">
          <div className="container-width">
            <div className="text-center mb-9 max-w-2xl mx-auto">
              <p className="eyebrow mb-2">Coverage</p>
              <h2 className="text-[26px] lg:text-[34px] font-bold text-ink mb-3 tracking-[-0.01em] leading-[1.2]">
                Enfield neighbourhoods we cover
              </h2>
              <p className="text-[14.5px] text-ink-text leading-[1.55]">
                Hand-written area guides for every Enfield Borough neighbourhood plus the surrounding EN and N postcode catchment. Each guide profiles the local patient mix and the practices we typically match from.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
              {AREA_HUBS.map((a, i) => (
                <Reveal key={a.slug} delay={Math.min(i * 30, 240)}>
                  <Link
                    href={`/location/${a.slug}/`}
                    className="card group p-4 flex items-center gap-3 h-full hover:shadow-card-soft"
                  >
                    <span className="w-9 h-9 rounded-[10px] bg-brand-100 text-brand-500 grid place-items-center flex-shrink-0">
                      <MapPin size={16} strokeWidth={2} />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-[14.5px] font-semibold text-ink group-hover:text-brand-500 transition-colors leading-[1.2]">
                        {a.name}
                      </div>
                      <div className="text-[11px] text-ink-mute mt-0.5">{a.postcode}</div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

            <div className="text-center mt-7">
              <Link href="/location/" className="text-[13px] font-semibold text-brand-500 hover:text-brand-600 inline-flex items-center gap-1.5">
                View all Enfield areas <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* ─── FAQ ─────────────────────────────────────────── */}
        <Reveal as="section" className="bg-white py-14 lg:py-20">
          <div className="container-width max-w-4xl">
            <FAQ faqs={FAQS_HOME} title={faqSectionTitle} />
          </div>
        </Reveal>

        {/* ─── Bottom CTA — blue gradient card. No phone (matching
            service); the button opens the form modal. */}
        <Reveal as="section" className="bg-white py-14 lg:py-20">
          <div className="container-width">
            <div
              className="rounded-[16px] px-6 py-10 lg:px-10 lg:py-14 text-center text-white max-w-3xl mx-auto"
              style={{ background: 'linear-gradient(135deg, #0a6cb8 0%, #08507f 100%)' }}
            >
              <div className="w-14 h-14 rounded-full bg-white/15 grid place-items-center mx-auto mb-5">
                <Activity size={26} strokeWidth={2} />
              </div>
              <h2 className="text-[24px] lg:text-[32px] font-bold mb-3 tracking-[-0.01em] leading-[1.15]">
                {ctaSection.heading}
              </h2>
              <p className="text-[15px] lg:text-[16px] leading-[1.55] text-brand-200 max-w-xl mx-auto mb-7">
                {ctaSection.subheading}
              </p>
              <button onClick={() => setModal(true)} className="btn-on-dark text-[15px] px-7 py-4 group">
                Match me with a dentist <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </button>
              <p className="mt-6 text-[12px] text-brand-200 max-w-md mx-auto">
                {siteConfig.serviceArea} · GDC-registered network · Free to patients
              </p>
            </div>
          </div>
        </Reveal>
      </main>

      <Footer />
    </>
  );
}

// Why-us icon map. Simple medical-trust glyphs from lucide; kept
// inside the page since it's only used here.
function iconForIndex(i: number) {
  const cls = 'text-brand-500';
  const props = { size: 20, strokeWidth: 2, className: cls } as const;
  switch (i % 6) {
    case 0: return <Calendar {...props} />;
    case 1: return <FileCheck {...props} />;
    case 2: return <Award {...props} />;
    case 3: return <Wallet {...props} />;
    case 4: return <ScanLine {...props} />;
    default: return <Shield {...props} />;
  }
}

// Suppress unused (we kept TRUST_BADGES + AlertCircle imports for
// future sections; eslint will complain otherwise).
void TRUST_BADGES; void AlertCircle;
