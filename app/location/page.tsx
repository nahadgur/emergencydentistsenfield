import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';
import LocationsIndexClient from './ClientPage';

const title = 'Areas we cover in Enfield';
const description =
  'Same-day emergency dental matching across Enfield Borough: Enfield Town, Bush Hill Park, Enfield Highway, Ponders End, Edmonton, Palmers Green, Winchmore Hill, Southgate, Cockfosters, and Hadley Wood.';
const canonical = `${siteConfig.url}/location/`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title, description, url: canonical, type: 'website' },
};

export default function Page() {
  return <LocationsIndexClient />;
}
