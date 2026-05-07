import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/data/site';
import { ConsentBanner } from '@/components/ConsentBanner';

// 2026-05-05 — Enfield design from the Claude Design handoff uses Inter
// only across the entire system. JetBrains Mono retained for any code-
// style labels (postcodes, etc.) that remain in the existing pages.
const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

// Homepage meta — under 60 chars title, under 160 chars description.
// Per-page meta lives in segment-level layout.tsx files.
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Emergency Dentist Enfield — Same-Day Match · Free',
    template: `%s | ${siteConfig.name}`,
  },
  description:
    'Free same-day matching with vetted, GDC-registered emergency dentists across Enfield Borough. Toothache, abscess, knocked-out tooth, broken tooth.',
  alternates: { canonical: siteConfig.url },
  robots: { index: true, follow: true },
  verification: {
    google: 'UC7QnX5JEKov3zVFokmiHzfCnb0Sp_l3lheDZP-rF0o',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Emergency Dentist Enfield — Same-Day Match · Free',
    description:
      'Free same-day matching with vetted, GDC-registered emergency dentists across Enfield Borough. Toothache, abscess, knocked-out tooth, broken tooth.',
    locale: 'en_GB',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Emergency Dental Enfield — same-day matching' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emergency Dentist Enfield — Same-Day Match · Free',
    description:
      'Free same-day matching with vetted, GDC-registered emergency dentists across Enfield Borough.',
    images: ['/og-image.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#105088',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Schema graph — WebSite + Organization + Service. NOT Dentist /
  // LocalBusiness for the brand because we are a referral service.
  // Claiming Dentist would misrepresent under Google's YMYL rules.
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: siteConfig.tagline,
    url: siteConfig.url,
    publisher: { '@id': `${siteConfig.url}/#organization` },
    inLanguage: 'en-GB',
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/android-chrome-512x512.png`,
    description: siteConfig.description,
    sameAs: [siteConfig.url],
    areaServed: {
      '@type': 'AdministrativeArea',
      name: siteConfig.serviceArea,
      containedInPlace: { '@type': 'Country', name: 'United Kingdom' },
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'English',
      areaServed: 'GB',
    },
  };

  // The matching service — areaServed scoped to every Enfield postcode
  // we cover (EN1, EN2, EN3, N9, N13, N14, N18, N21).
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/#service`,
    name: 'Emergency dental matching service for Enfield',
    serviceType: 'Emergency dental matching and referral',
    description:
      'Free service connecting Enfield Borough patients with vetted, GDC-registered emergency dentists. Same-day toothache, knocked-out tooth, dental abscess, broken or chipped tooth, lost crown or filling, dental trauma, and wisdom-tooth pain triage covered.',
    provider: { '@id': `${siteConfig.url}/#organization` },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'London Borough of Enfield' },
      { '@type': 'PostalAddress', addressRegion: 'London', postalCode: 'EN1', addressCountry: 'GB' },
      { '@type': 'PostalAddress', addressRegion: 'London', postalCode: 'EN2', addressCountry: 'GB' },
      { '@type': 'PostalAddress', addressRegion: 'London', postalCode: 'EN3', addressCountry: 'GB' },
      { '@type': 'PostalAddress', addressRegion: 'London', postalCode: 'N9',  addressCountry: 'GB' },
      { '@type': 'PostalAddress', addressRegion: 'London', postalCode: 'N13', addressCountry: 'GB' },
      { '@type': 'PostalAddress', addressRegion: 'London', postalCode: 'N14', addressCountry: 'GB' },
      { '@type': 'PostalAddress', addressRegion: 'London', postalCode: 'N18', addressCountry: 'GB' },
      { '@type': 'PostalAddress', addressRegion: 'London', postalCode: 'N21', addressCountry: 'GB' },
    ],
    audience: {
      '@type': 'PeopleAudience',
      audienceType: 'Patients with urgent dental needs in Enfield Borough and surrounding EN/N postcodes',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
      description: 'Free to patients. We are a referral service.',
    },
    isPartOf: { '@id': `${siteConfig.url}/#website` },
  };

  return (
    <html lang="en-GB" className={`${sans.variable} ${mono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <ConsentBanner gaId={siteConfig.gaId} />
        {children}
      </body>
    </html>
  );
}
