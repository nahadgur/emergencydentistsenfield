// data/locationProfiles.ts
// Compact rich profile per area — used in sidebars and header bands
// alongside the longer-form areaContent. Maps slugs to a one-liner
// character + dominant patient mix + key clinical challenge.

export interface LocationProfile {
  name: string;
  slug: string;
  postcode: string;
  character: string;
  dominantPatientType: string;
  keyClinicalChallenge: string;
  patientMix: string[];
}

export const locationProfiles: Record<string, LocationProfile> = {

  'enfield-town': {
    name: 'Enfield Town',
    slug: 'enfield-town',
    postcode: 'EN1 / EN2',
    character: 'Historic and commercial heart of the borough — Tudor church, Saturday market, highest dental practice density in Enfield',
    dominantPatientType: 'Mixed long-tenured residents and newer apartment-development arrivals',
    keyClinicalChallenge: 'Broad case mix from one of the highest-density dental-practice catchments in north London',
    patientMix: [
      'long-tenured Enfield residents',
      'apartment-development arrivals around the station',
      'working-age adults employed locally',
      'older residents with crown maintenance needs',
      'families with children at central Enfield schools',
    ],
  },

  'bush-hill-park': {
    name: 'Bush Hill Park',
    slug: 'bush-hill-park',
    postcode: 'EN1',
    character: 'Conservation-area Edwardian village just south of Enfield Town with longer-tenured affluent families',
    dominantPatientType: 'Established residents with decades of dental restoration history',
    keyClinicalChallenge: 'Crown and bridge maintenance on heavily restored teeth, often dating back to the 1980s',
    patientMix: [
      'long-established Edwardian-property residents',
      'older homeowners with crown-and-bridge maintenance needs',
      'families with school-age children',
      'local professionals working from home',
    ],
  },

  'enfield-highway': {
    name: 'Enfield Highway',
    slug: 'enfield-highway',
    postcode: 'EN3',
    character: 'East Enfield industrial-heritage corridor along the Hertford Road, working-age demographic',
    dominantPatientType: 'Working-age adults and Lee Valley industrial-park employees',
    keyClinicalChallenge: 'Trauma from sport, occupational injury, and DIY accidents — often needs same-hour priority',
    patientMix: [
      'working-age adults on shift patterns',
      'sports and occupational trauma cases',
      'families with school-age children',
      'Lee Valley industrial-park workers',
      'long-established residents',
    ],
  },

  'ponders-end': {
    name: 'Ponders End',
    slug: 'ponders-end',
    postcode: 'EN3',
    character: 'Established east-Enfield residential between Edmonton and Enfield Highway, mid-density family housing',
    dominantPatientType: 'Long-tenured Enfield families with mixed ages and standard restorative history',
    keyClinicalChallenge: 'Mixed presentations — paediatric trauma, working-age toothache, older-resident crown failures',
    patientMix: [
      'established families',
      'school-age children',
      'older residents with crown maintenance',
      'working-age adults employed in Enfield or central London',
    ],
  },

  'edmonton': {
    name: 'Edmonton',
    slug: 'edmonton',
    postcode: 'N9 / N18',
    character: 'One of north London\'s most diverse and densely-populated neighbourhoods, multilingual community',
    dominantPatientType: 'Multicultural families and new arrivals to the UK',
    keyClinicalChallenge: 'Multilingual consultation needs, cultural-preference accommodation, and high-volume case mix',
    patientMix: [
      'multicultural families',
      'new arrivals without registered dentist',
      'young men with sports trauma',
      'working-age adults in central London or local retail',
      'multilingual patients',
    ],
  },

  'palmers-green': {
    name: 'Palmers Green',
    slug: 'palmers-green',
    postcode: 'N13',
    character: 'Heart of the British Cypriot community in north London — Greek-language signage and community character',
    dominantPatientType: 'Greek-Cypriot families and settled residents around Broomfield Park',
    keyClinicalChallenge: 'Greek-language consultation for elderly Cypriot relatives, cultural familiarity expectations',
    patientMix: [
      'Greek-Cypriot families',
      'older Cypriot relatives needing Greek-speaking dentists',
      'school-age children',
      'working-age adults using the Piccadilly line',
    ],
  },

  'winchmore-hill': {
    name: 'Winchmore Hill',
    slug: 'winchmore-hill',
    postcode: 'N21',
    character: 'Conservation-area village green and prime north London family residential — period housing, settled affluent demographic',
    dominantPatientType: 'Long-tenured affluent families with established dental history',
    keyClinicalChallenge: 'Higher consultation-experience expectations and established restorative complexity',
    patientMix: [
      'long-established residents around The Green',
      'affluent families with prep-school children',
      'older residents managing extensive restorative history',
      'working-age professionals in central London',
      'private-insurance patients',
    ],
  },

  'southgate': {
    name: 'Southgate',
    slug: 'southgate',
    postcode: 'N14',
    character: '1930s Piccadilly line family suburb anchored by Charles Holden\'s iconic tube station',
    dominantPatientType: 'Family-suburb residents and London commuters',
    keyClinicalChallenge: 'Working-week time constraints — Saturday morning and early-evening slot demand',
    patientMix: [
      '1930s suburban-housing long-tenured families',
      'Piccadilly line London commuters',
      'apartment-development residents around Southgate Circus',
      'families with secondary-school children',
      'older residents with restorative history',
    ],
  },

  'cockfosters': {
    name: 'Cockfosters',
    slug: 'cockfosters',
    postcode: 'EN4',
    character: 'Piccadilly line terminus on the Enfield-Barnet boundary, leafy affluent residential adjacent to Trent Park',
    dominantPatientType: 'Affluent settled families in period housing along the Trent Park edge',
    keyClinicalChallenge: 'Heavily restored mouths in older residents with restoration history dating to the 1980s',
    patientMix: [
      'affluent settled families',
      'older residents with extensive restorative history',
      'Piccadilly line commuters',
      'Trent Park-edge premium residential',
      'cross-borough East Barnet patients',
    ],
  },

  'hadley-wood': {
    name: 'Hadley Wood',
    slug: 'hadley-wood',
    postcode: 'EN4',
    character: 'One of London\'s most exclusive residential enclaves — gated estates, period villas, top-50 UK property values',
    dominantPatientType: 'High-net-worth residents with established central London private dental relationships',
    keyClinicalChallenge: 'Discreet, high-standard consultation experience — patients use matching only for genuine emergencies between Harley Street appointments',
    patientMix: [
      'high-net-worth residents in period villas',
      'patients with established Harley Street dental practices',
      'family emergencies needing local coverage',
      'visiting family members and house guests',
      'cross-border Hertsmere patients',
    ],
  },
};

export const getLocationProfile = (slug: string): LocationProfile | undefined =>
  locationProfiles[slug];
