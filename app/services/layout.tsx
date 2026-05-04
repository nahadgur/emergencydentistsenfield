import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

// Title under 60 chars, description under 160.
export const metadata: Metadata = {
  title: 'Dental Emergencies Covered — Match in Enfield',
  description:
    'Seven dental emergency types we match for in Enfield: toothache, abscess, knocked-out tooth, broken tooth, lost crown, trauma, wisdom-tooth pain. Free.',
  alternates: { canonical: `${siteConfig.url}/services/` },
  openGraph: {
    title: 'Dental Emergencies Covered — Match in Enfield',
    description:
      'Seven dental emergency types we match for in Enfield: toothache, abscess, knocked-out tooth, broken tooth, lost crown, trauma, wisdom-tooth pain. Free.',
    url: `${siteConfig.url}/services/`,
    type: 'website',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
