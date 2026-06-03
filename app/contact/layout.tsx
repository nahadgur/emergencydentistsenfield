import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact — Emergency Dentist Enfield Matching',
  description:
    'Tell us what is hurting and we will match you with a vetted, GDC-registered emergency dentist in Enfield within the hour. Free, no obligation.',
  alternates: { canonical: `${siteConfig.url}/contact/` },
  openGraph: {
    title: 'Contact — Emergency Dentist Enfield Matching',
    description:
      'Tell us what is hurting and we will match you with a vetted, GDC-registered emergency dentist in Enfield within the hour. Free, no obligation.',
    url: `${siteConfig.url}/contact/`,
    type: 'website',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
