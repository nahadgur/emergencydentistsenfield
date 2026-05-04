import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Emergency Dentists by Area — Enfield EN/N',
  description:
    'Free matching with vetted emergency dentists across every Enfield Borough neighbourhood, EN1 to EN3 plus N9, N13, N14, N18, and N21 postcodes.',
  alternates: { canonical: `${siteConfig.url}/location/` },
  openGraph: {
    title: 'Emergency Dentists by Area — Enfield EN/N',
    description:
      'Free matching with vetted emergency dentists across every Enfield Borough neighbourhood, EN1 to EN3 plus N9, N13, N14, N18, and N21 postcodes.',
    url: `${siteConfig.url}/location/`,
    type: 'website',
  },
};

export default function LocationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
