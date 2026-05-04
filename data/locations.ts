// data/locations.ts — Enfield Borough neighbourhoods + adjacent areas
// Sub-areas listed per neighbourhood for content signals (no separate pages).

export interface AreaHub {
  name: string;
  slug: string;
  postcode: string;
  area: 'Enfield Town' | 'East Enfield' | 'South Enfield' | 'North Enfield' | 'West Enfield';
  subAreas: SubArea[];
}

export interface SubArea {
  name: string;
  postcode?: string;
  note?: string;
}

export const AREA_HUBS: AreaHub[] = [
  {
    name: 'Enfield Town',
    slug: 'enfield-town',
    postcode: 'EN1',
    area: 'Enfield Town',
    subAreas: [
      { name: 'Enfield Market Square',  postcode: 'EN2', note: 'Historic centre with the Tudor church and Saturday market' },
      { name: 'Palace Gardens Centre',  postcode: 'EN2', note: 'Indoor shopping anchor for the town' },
      { name: 'Chase Side',             postcode: 'EN2', note: 'Residential street running north from the town centre' },
      { name: 'Baker Street',           postcode: 'EN1', note: 'Mixed retail and professional offices' },
      { name: 'Silver Street',          postcode: 'EN1', note: 'Connecting road towards Edmonton' },
    ],
  },
  {
    name: 'Bush Hill Park',
    slug: 'bush-hill-park',
    postcode: 'EN1',
    area: 'Enfield Town',
    subAreas: [
      { name: 'Village Road',           postcode: 'EN1', note: 'Heart of the original Bush Hill Park village' },
      { name: 'Bush Hill',              postcode: 'EN1', note: 'Hillside residential streets' },
      { name: 'St Marks Road',          postcode: 'EN1', note: 'Period-property family residential' },
      { name: 'Wellington Road',        postcode: 'EN1', note: 'Established Edwardian residential' },
    ],
  },
  {
    name: 'Enfield Highway',
    slug: 'enfield-highway',
    postcode: 'EN3',
    area: 'East Enfield',
    subAreas: [
      { name: 'Hertford Road',          postcode: 'EN3', note: 'Main thoroughfare with the Lock and Roman Catholic church' },
      { name: 'Ordnance Road',          postcode: 'EN3', note: 'Connecting road towards the Lee Valley' },
      { name: 'Enfield Lock',           postcode: 'EN3', note: 'Historic small-arms factory area, now mixed residential' },
      { name: 'Brimsdown',              postcode: 'EN3', note: 'Industrial-edge residential adjacent to the railway' },
    ],
  },
  {
    name: 'Ponders End',
    slug: 'ponders-end',
    postcode: 'EN3',
    area: 'East Enfield',
    subAreas: [
      { name: 'High Street',            postcode: 'EN3', note: 'Local shopping parade and post office' },
      { name: 'Lincoln Road',           postcode: 'EN3', note: 'Mid-density family residential' },
      { name: 'Wharf Road',             postcode: 'EN3', note: 'Edge of the Lee Navigation' },
      { name: 'Alma Road',              postcode: 'EN3', note: 'Established residential streets' },
    ],
  },
  {
    name: 'Edmonton',
    slug: 'edmonton',
    postcode: 'N9',
    area: 'South Enfield',
    subAreas: [
      { name: 'Edmonton Green',         postcode: 'N9',  note: 'Major shopping centre and bus interchange' },
      { name: 'Fore Street',            postcode: 'N18', note: 'High-volume retail strip towards Tottenham' },
      { name: 'Lower Edmonton',         postcode: 'N9',  note: 'High-diversity residential with strong community character' },
      { name: 'Upper Edmonton',         postcode: 'N18', note: 'Family residential between Edmonton Green and Tottenham' },
    ],
  },
  {
    name: 'Palmers Green',
    slug: 'palmers-green',
    postcode: 'N13',
    area: 'South Enfield',
    subAreas: [
      { name: 'Green Lanes',            postcode: 'N13', note: 'Greek and Cypriot community heart with restaurants and bakeries' },
      { name: 'Aldermans Hill',         postcode: 'N13', note: 'Period family residential with local shops' },
      { name: 'Broomfield Park edge',   postcode: 'N13', note: 'Park-adjacent residential streets' },
      { name: 'Bowes Park',             postcode: 'N22', note: 'Adjacent residential area straddling Haringey boundary' },
    ],
  },
  {
    name: 'Winchmore Hill',
    slug: 'winchmore-hill',
    postcode: 'N21',
    area: 'South Enfield',
    subAreas: [
      { name: 'The Green',              postcode: 'N21', note: 'Conservation-area village green at the heart of the area' },
      { name: 'Station Road',           postcode: 'N21', note: 'Local commercial street near the railway station' },
      { name: 'Compton Road',           postcode: 'N21', note: 'Period residential close to the Green' },
      { name: 'Highfield Road',         postcode: 'N21', note: 'Larger detached homes towards Grange Park' },
    ],
  },
  {
    name: 'Southgate',
    slug: 'southgate',
    postcode: 'N14',
    area: 'West Enfield',
    subAreas: [
      { name: 'Chase Road',             postcode: 'N14', note: 'Spine road through Southgate centre' },
      { name: 'Southgate Circus',       postcode: 'N14', note: 'Charles Holden tube station and shopping anchor' },
      { name: 'Bourne Hill',            postcode: 'N13', note: 'Residential connecting road towards Palmers Green' },
      { name: 'Cannon Hill',            postcode: 'N14', note: 'Family residential adjacent to Grovelands Park' },
    ],
  },
  {
    name: 'Cockfosters',
    slug: 'cockfosters',
    postcode: 'EN4',
    area: 'West Enfield',
    subAreas: [
      { name: 'Cockfosters Road',       postcode: 'EN4', note: 'Spine road with retail and the tube terminus' },
      { name: 'Bramley Road',           postcode: 'EN4', note: 'Affluent residential close to Trent Park' },
      { name: 'Hadley Road',            postcode: 'EN4', note: 'Connection towards Hadley Wood' },
      { name: 'Trent Park edge',        postcode: 'EN4', note: 'Premium residential overlooking the park' },
    ],
  },
  {
    name: 'Hadley Wood',
    slug: 'hadley-wood',
    postcode: 'EN4',
    area: 'North Enfield',
    subAreas: [
      { name: 'Crescent West',          postcode: 'EN4', note: 'Original Edwardian crescent of detached villas' },
      { name: 'Camlet Way',             postcode: 'EN4', note: 'Premier residential road with substantial detached homes' },
      { name: 'Beech Hill',             postcode: 'EN4', note: 'Premium residential adjacent to the golf course' },
      { name: 'The Crescent',           postcode: 'EN4', note: 'Conservation area with period architecture' },
    ],
  },
];

// Helpers
export function getAreaHubBySlug(slug: string): AreaHub | undefined {
  return AREA_HUBS.find(a => a.slug === slug);
}

export function getAllAreaSlugs(): string[] {
  return AREA_HUBS.map(a => a.slug);
}

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
