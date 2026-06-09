'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Clock, Shield } from 'lucide-react';

interface Props { onOpenModal?: () => void; }

const navLinks = [
  { href: '/services/', label: 'Emergencies' },
  { href: '/location/', label: 'Areas' },
  { href: '/guides/',   label: 'Guides' },
  { href: '/blog/',     label: 'Articles' },
  { href: '/about/',    label: 'About' },
];

// 2026-05-05 — Enfield design pattern from the Claude Design handoff.
// Two-tier header: dark blue utility bar at the top (status + GDC
// trust signal, NO phone since this is a matching service), white
// main nav below with the tooth-mark logo and two-line wordmark.
export function Header({ onOpenModal }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-line">
      {/* Utility bar — dark navy. Status on the left, trust signal on
          the right. NOT a phone number; we are a matching service. */}
      <div className="bg-brand-600 text-white text-[12px]">
        <div className="container-width flex items-center justify-between py-1.5 gap-3">
          <span className="flex items-center gap-1.5 min-w-0">
            <Clock size={13} strokeWidth={2} className="flex-shrink-0" />
            <span className="truncate">Same-day matching · 8am–10pm</span>
          </span>
          <span className="hidden sm:flex items-center gap-1.5 font-medium flex-shrink-0">
            <Shield size={13} strokeWidth={2} />
            GDC-registered network
          </span>
        </div>
      </div>

      {/* Main nav. Tooth-mark logo + wordmark on the left, links + CTA
          on the right (or hamburger on mobile). */}
      <nav className="container-width flex items-center justify-between py-3.5" aria-label="Site navigation">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo-mark.svg" alt="" width={28} height={28} priority />
          <span className="flex flex-col leading-[1.15]">
            <span className="text-[15px] font-bold text-ink tracking-[-0.01em]">
              Emergency Dentist
            </span>
            <span className="text-[11px] font-medium text-ink-mute tracking-[0.02em]">
              Enfield
            </span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-[14px] font-medium text-ink-text">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} className="hover:text-brand-500 transition-colors">
              {l.label}
            </Link>
          ))}
          {onOpenModal && (
            <button onClick={onOpenModal} className="btn-primary text-[13px] px-4 py-2.5">
              Find a dentist
            </button>
          )}
        </div>

        <button
          className="md:hidden grid place-items-center w-10 h-10 rounded-btn border border-line bg-white text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-white">
          <div className="container-width py-4 flex flex-col gap-2">
            {navLinks.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="py-2 text-[15px] text-ink-text hover:text-brand-500"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            {onOpenModal && (
              <button
                onClick={() => { setOpen(false); onOpenModal(); }}
                className="btn-primary text-[14px] mt-2 self-start"
              >
                Find a dentist
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

