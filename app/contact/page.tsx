import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import ContactPageClient from './ClientPage';

const title = 'Contact';
const description =
  'How to reach Emergency Dentists Enfield. Same-day matching with vetted, GDC-registered emergency dentists across EN1, EN2, EN3, N9, N13, N14, N18, and N21.';
const canonical = `${siteConfig.url}/contact/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: 'website' },
};

export default function Page() {
  return <ContactPageClient />;
}
