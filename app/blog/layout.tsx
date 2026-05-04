import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Dental Emergency Guides — Enfield Patients',
  description:
    'Practical guides on dental emergencies. What to do for a knocked-out tooth, abscess, broken tooth, wisdom-tooth pain. Written for Enfield patients.',
  alternates: { canonical: `${siteConfig.url}/blog/` },
  openGraph: {
    title: 'Dental Emergency Guides — Enfield Patients',
    description:
      'Practical guides on dental emergencies. What to do for a knocked-out tooth, abscess, broken tooth, wisdom-tooth pain. Written for Enfield patients.',
    url: `${siteConfig.url}/blog/`,
    type: 'website',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
