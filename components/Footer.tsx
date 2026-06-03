import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';
import { AREA_HUBS } from '@/data/locations';
import { siteConfig } from '@/data/site';

// 2026-05-05 — Enfield footer matching the Claude Design handoff.
// Dark ink (#1a2233) surface, tooth-mark + wordmark, two-column link
// grid, contact lines (no phone — matching service), light divider,
// small compliance footer. NOT a clinical-practice contact block.
export function Footer() {
  const footerLocations = AREA_HUBS.slice(0, 6);
  const footerServices = services.slice(0, 4);

  return (
    <footer className="bg-ink text-[#a8b1c2] mt-auto">
      <div className="container-width pt-12 pb-8">
        {/* Brand block */}
        <div className="flex items-center gap-2.5 mb-4">
          <Image src="/logo-mark-white.svg" alt="" width={26} height={26} />
          <div className="flex flex-col leading-[1.2]">
            <span className="text-[15px] font-bold text-white">Emergency Dentist</span>
            <span className="text-[11px] text-[#a8b1c2]">Enfield</span>
          </div>
        </div>

        <p className="text-[13px] leading-[1.65] mb-7 max-w-2xl">
          {siteConfig.description}
        </p>

        {/* Two-column link grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-7 gap-x-10 mb-7">
          <div>
            <p className="text-[11.5px] font-bold text-white uppercase tracking-[0.05em] mb-3">
              Care
            </p>
            <ul className="flex flex-col gap-2 text-[13px]">
              {footerServices.map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`} className="hover:text-brand-300 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services/" className="text-brand-300 hover:text-white transition-colors font-medium">
                  All emergencies →
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[11.5px] font-bold text-white uppercase tracking-[0.05em] mb-3">
              Areas
            </p>
            <ul className="flex flex-col gap-2 text-[13px]">
              {footerLocations.map(a => (
                <li key={a.slug}>
                  <Link href={`/location/${a.slug}/`} className="hover:text-brand-300 transition-colors">
                    {a.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/location/" className="text-brand-300 hover:text-white transition-colors font-medium">
                  All Enfield areas →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Practice / contact column. No phone — matching service. */}
        <div className="flex flex-col gap-2 text-[13px] mb-7">
          <p className="text-[11.5px] font-bold text-white uppercase tracking-[0.05em] mb-1">
            Practice
          </p>
          <Link href="/about/"   className="hover:text-brand-300 transition-colors">About the matching service</Link>
          <Link href="/contact/" className="hover:text-brand-300 transition-colors">Contact us</Link>
          <Link href="/blog/"    className="hover:text-brand-300 transition-colors">Guides and articles</Link>
        </div>

        {/* Compliance footer — small text, divider, copyright + legal
            links. */}
        <div className="border-t border-white/10 pt-5 text-[11px] leading-[1.7] text-[#7a8499]">
          © {new Date().getFullYear()} {siteConfig.name}.
          Free matching with vetted, GDC-registered emergency dentists across {siteConfig.serviceArea}.
          We are a referral service, not a clinical practice.
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/privacy/" className="text-brand-300 hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms/"   className="text-brand-300 hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

