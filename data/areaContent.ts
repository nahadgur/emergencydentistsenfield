// data/areaContent.ts
// Hand-written per-area content. Each entry powers the area detail page
// intro, why-specialist, who-we-match, common-triggers, local context.
// Genuinely differentiated per neighbourhood — no token-swap templates.

export interface AreaContent {
  heroHeading: string;
  heroParagraph: string;
  introHeading: string;
  introParagraphs: string[];
  whySpecialistMatters: string;
  patientProfile: { heading: string; points: string[] };
  commonTriggers: string[];
  localContext: string;
  faqOverride?: { question: string; answer: string }[];
}

export const areaContent: Record<string, AreaContent> = {

  'enfield-town': {
    heroHeading: 'Emergency dentists in Enfield Town (EN1, EN2)',
    heroParagraph:
      'Enfield Town is the historic and commercial heart of the borough — Tudor church, Saturday market, and the highest density of dental practices anywhere in Enfield. We match Enfield Town residents and the immediate EN1 / EN2 catchment with vetted GDC-registered dentists, usually within 60 minutes during opening hours.',
    introHeading: 'Same-day emergency dental matching for Enfield Town residents',
    introParagraphs: [
      'Enfield Town\'s position as the borough\'s commercial centre gives residents the widest practical choice of dental practices in the area — the central EN1 and EN2 cluster includes practices on Church Street, Baker Street, Chase Side, and the Palace Gardens area, all within a 5-minute walk or short drive of any town-centre address.',
      'The patient demographic here is broad — Enfield Town has both long-established residents in the period housing around the Town Park and Chase Green, and newer arrivals in the apartment developments around the station. The dental emergency mix reflects the breadth: paediatric trauma alongside crown failures alongside wisdom-tooth pain, with no single category dominating.',
      'NHS dental access in Enfield generally has been under significant pressure in recent years, but emergency NHS appointments booked through NHS 111 (free, 24/7) remain accessible regardless of registration status. Several Enfield Town practices in our network maintain NHS lists; where NHS preference is indicated, we prioritise these first.',
    ],
    whySpecialistMatters:
      'Enfield Town practices serve the widest case-mix in the borough — emergency dentists working in the central cluster typically see avulsions, abscesses, and complex trauma every week, not every few months. Matched dentists from this cluster bring this volume of recent experience to the appointment.',
    patientProfile: {
      heading: 'Patients we typically match in Enfield Town',
      points: [
        'Long-established residents in the period housing around Town Park and Chase Green',
        'Newer apartment-development residents needing first-time emergency access in Enfield',
        'Working-age adults employed in the town centre needing convenient appointment slots',
        'Families with children at the surrounding schools',
        'Older residents managing crown-and-bridge maintenance on heavily restored teeth',
      ],
    },
    commonTriggers: [
      'Severe toothache from neglected decay finally reaching the pulp',
      'Crown re-cementation requests from older residents',
      'Lost filling discovered over the weekend',
      'Trauma from local sports clubs and primary-school playgrounds',
      'New arrivals needing first-time emergency cover before they have registered',
    ],
    localContext:
      'Enfield Town remains one of north London\'s most architecturally distinct historic centres — the medieval core around the Tudor church (St Andrew\'s, dating from the 13th century) sits alongside Victorian and Edwardian commercial development. The dental practice landscape in central EN1 and EN2 is denser than anywhere else in the borough, making same-day matching faster here than in the outer neighbourhoods.',
  },

  'bush-hill-park': {
    heroHeading: 'Emergency dentists for Bush Hill Park (EN1)',
    heroParagraph:
      'Bush Hill Park is the conservation-area village just south of Enfield Town — established Edwardian residential streets, period properties, and longer-tenured families. We match Bush Hill Park residents with vetted GDC-registered dentists, typically in nearby Enfield Town (a 4-minute drive) or central Enfield.',
    introHeading: 'Emergency dental matching for Bush Hill Park residents',
    introParagraphs: [
      'Bush Hill Park\'s residential character — period Edwardian housing, conservation streets, longer-established families — produces a slightly different emergency dental presentation mix than the more transient parts of Enfield. We see a higher proportion of crown and bridge failures (older restorations finally giving up after 20+ years), root-canal pain in heavily restored teeth, and trauma from gardening and household DIY rather than from sport.',
      'No dental practice sits physically inside the small Bush Hill Park village core — most matched dentists are in central Enfield Town (5-minute drive) or along the Hertford Road corridor. Saturday morning slots are particularly relevant here given the longer-tenured working demographic.',
      'For serious presentations — facial swelling, knocked-out adult tooth, severe pain unrelieved by painkillers — the matching service prioritises Bush Hill Park enquiries to ensure same-day appointments. For non-urgent presentations (lost filling, mild ache), the matched dentist may book within the working week at standard rates.',
    ],
    whySpecialistMatters:
      'Bush Hill Park\'s building stock means many patients here have wells of dental history — multiple crowns, bridges, and historical fillings dating back decades. Treating an emergency in a heavily restored mouth is more nuanced than in a young patient with virgin teeth. Matched dentists with restorative experience produce better outcomes when the underlying tooth structure is already compromised.',
    patientProfile: {
      heading: 'Patients we typically match in Bush Hill Park',
      points: [
        'Long-established residents in period Edwardian properties with substantial historical restorations',
        'Older patients with crown or bridge failures requiring re-cementation or replacement',
        'Families dealing with paediatric trauma (knocked-out baby teeth, mouth injuries from playgrounds)',
        'Local professionals working from home and needing same-day cover during working hours',
        'Residents in the surrounding streets who do not have a dentist physically inside the village',
      ],
    },
    commonTriggers: [
      'A long-standing crown finally coming off after 15–25 years of service',
      'Severe ache from a heavily restored tooth where decay has reached the pulp',
      'Falling at home (pavement trips, ladder slips during DIY) producing chipped or broken front teeth',
      'Acute pericoronitis on an erupting wisdom tooth in late teens or early twenties',
      'Lost filling in residents who use the pharmacy on Village Road',
    ],
    localContext:
      'Bush Hill Park has a distinct conservation-area character within Enfield — a Victorian and Edwardian planned development built between 1872 and 1907, much of which retains its original architectural integrity. The area was developed as a "garden suburb" before that term existed, and the residents (then and now) skew older, more established, and more dentally-restored than the surrounding postcodes.',
  },

  'enfield-highway': {
    heroHeading: 'Emergency dentists for Enfield Highway (EN3)',
    heroParagraph:
      'Enfield Highway is the eastern part of the borough centred on the Hertford Road corridor and the historic Lock — mixed residential, light industrial, and a strong working-age demographic. We match EN3 residents with vetted Enfield dentists, typically in central Enfield Town or along the Hertford Road itself.',
    introHeading: 'Emergency dental matching for Enfield Highway residents',
    introParagraphs: [
      'Enfield Highway\'s patient demographic skews towards working-age adults and families — the area developed substantially around the Royal Small Arms Factory at Enfield Lock through the 19th and 20th centuries, and the dental emergency mix reflects this active demographic: working-age toothache, sports trauma, occupational dental injuries, and the inevitable "lost filling on a Friday night" presentations from busy working households.',
      'The matched dentists for Enfield Highway enquiries are typically in central Enfield Town (5 minutes via the Hertford Road) or in the smaller cluster of practices along the Hertford Road corridor itself. Saturday morning slots are particularly important here given the working-shift demographic.',
      'NHS dental access is variable in EN3 — some practices in the area maintain NHS lists, some are private-only. The matching form lets you indicate NHS preference and we prioritise practices with NHS availability where possible.',
    ],
    whySpecialistMatters:
      'Enfield Highway\'s working-age demographic produces a relatively high frequency of trauma cases — sports injuries, occupational injuries, and DIY accidents. Matched dentists for this catchment have explicit avulsion and trauma experience and are routinely briefed to treat trauma cases as same-hour priority.',
    patientProfile: {
      heading: 'Patients we typically match in Enfield Highway',
      points: [
        'Working-age adults needing same-day pain relief that fits around shift patterns',
        'Sports and occupational trauma cases (chipped teeth, knocked-out incisors)',
        'Families with school-age children needing paediatric emergency cover',
        'Long-established residents with extensive restorative history needing emergency repairs',
        'Lee Valley industrial-park workers needing accessible Saturday slots',
      ],
    },
    commonTriggers: [
      'Sports trauma from Lee Valley clubs — football, rugby, cycling',
      'Lost filling discovered over the weekend',
      'Severe toothache in shift-working adults',
      'Occupational injuries (machinery contact, lifted-object impacts) producing fractured teeth',
      'Acute pericoronitis flares in younger workers',
    ],
    localContext:
      'Enfield Highway grew around the Royal Small Arms Factory at Enfield Lock — operational from 1816 to 1988 — and the area retains a distinctly working-class industrial character compared to the more affluent western parts of the borough. The Lee Valley regeneration over the past decade has brought new residential development, but the demographic remains predominantly active-working-age families rather than retired homeowners.',
  },

  'ponders-end': {
    heroHeading: 'Emergency dentists for Ponders End (EN3)',
    heroParagraph:
      'Ponders End is the southern part of east Enfield, sitting between Edmonton and Enfield Highway along the Lee Valley. We match Ponders End residents with vetted Enfield emergency dentists, typically in central Enfield Town or the Edmonton catchment.',
    introHeading: 'Emergency dental matching for Ponders End residents',
    introParagraphs: [
      'Ponders End has a long-established residential character — predominantly mid-density family housing along Lincoln Road, Wharf Road, and the surrounding streets. The dental emergency mix is broadly typical of established residential Enfield: a mix of established-family crown maintenance, school-age trauma from the surrounding family demographic, and the occasional out-of-hours wisdom-tooth flare.',
      'The closest dental practices are in central Enfield Town (7 minutes via the Hertford Road) and Edmonton Green (5 minutes south). For urgent same-day matching we consider both depending on availability and your specific emergency type.',
      'Many Ponders End residents work in central London or the Lee Valley industrial areas, making working-day matching the dominant pattern. Saturday slots are available through the matched dentists for genuine weekend emergencies.',
    ],
    whySpecialistMatters:
      'Ponders End patients tend to be longer-tenured Enfield residents who may have had the same dentist for many years. Matched emergency dentists understand the value of continuity — the emergency visit is often the first introduction, and many Ponders End patients prefer to continue with the matched practice for routine care if the emergency experience is positive.',
    patientProfile: {
      heading: 'Patients we typically match in Ponders End',
      points: [
        'Established families with school-age children needing paediatric emergency cover',
        'Older residents with substantial restorative history requiring crown re-cementation or repair',
        'Working-age adults needing fast same-day pain relief during the working week',
        'Parents of teenagers with sports-related dental trauma',
        'Lee Valley workers and Edmonton-Enfield commuters',
      ],
    },
    commonTriggers: [
      'Crown loss in older residents with restoration history dating back to the 1990s',
      'Severe ache from a heavily filled tooth where decay has progressed beyond the existing repair',
      'Sports trauma from school-age and teenage children',
      'Lost filling that has been ignored for a few days and finally produced sensitivity',
      'Pericoronitis flares in the late-teens-to-early-twenties demographic',
    ],
    localContext:
      'Ponders End sits at the Lee Valley\'s western edge — historically a working-class residential area developed alongside the late-Victorian and Edwardian industrial expansion of the valley. The Lee Valley regeneration has brought some residential investment, but the area remains predominantly traditional family housing rather than the new-build apartment developments seen elsewhere in north London.',
  },

  'edmonton': {
    heroHeading: 'Emergency dentists for Edmonton (N9, N18)',
    heroParagraph:
      'Edmonton is one of north London\'s most diverse and densely-populated neighbourhoods — high-volume retail along Fore Street, the major Edmonton Green shopping centre and bus interchange, and a strongly multicultural community. We match Edmonton residents with vetted GDC-registered dentists across the N9 and N18 postcodes.',
    introHeading: 'Emergency dental matching for Edmonton residents',
    introParagraphs: [
      'Edmonton\'s demographic is one of the most diverse in London — strong African, Caribbean, Turkish, Eastern European, and South Asian communities, alongside long-established working-class English families. The dental emergency mix reflects this breadth: paediatric trauma from the high family demographic, sports trauma from local football and basketball communities, and a meaningful number of first-time presentations from new arrivals not yet registered with a UK dentist.',
      'The matched dentists for Edmonton enquiries are clustered around Edmonton Green and along Fore Street, with additional capacity available in central Enfield Town (10 minutes north) and Tottenham (5 minutes south, just over the borough boundary). NHS access in N9 and N18 is broadly typical of north London — pressure exists but emergency access through NHS 111 remains functional.',
      'Edmonton has one of the highest concentrations of multilingual dental practices in the borough — many practitioners speak Turkish, Polish, Romanian, Albanian, or African languages alongside English. The matching form lets you indicate language preference if relevant, and we prioritise where possible.',
    ],
    whySpecialistMatters:
      'Edmonton\'s diverse community means matched dentists routinely communicate in multiple languages and accommodate cultural preferences (modesty considerations, family-member-present requests, Ramadan-period scheduling). Matched dentists with this experience produce a materially better patient experience than generalists treating the patient as English-monolingual.',
    patientProfile: {
      heading: 'Patients we typically match in Edmonton',
      points: [
        'Multicultural families with school-age children needing paediatric emergency cover',
        'New arrivals to the UK without a registered dentist',
        'Young men with sports trauma (basketball, football, boxing) producing fractured incisors',
        'Working-age adults employed in central London or local retail',
        'Multilingual patients preferring a dentist who speaks their first language',
      ],
    },
    commonTriggers: [
      'Sports trauma from basketball, football, and boxing communities',
      'First-time emergency presentations from new arrivals to the UK',
      'Severe toothache from neglected decay in working-age adults',
      'Paediatric playground trauma in primary-school children',
      'Wisdom-tooth pain in late teens and early twenties',
    ],
    localContext:
      'Edmonton has been a major north London community since the medieval period — its name derives from "Eadhelm\'s town" — but its modern character was shaped by 20th-century post-war housing development and successive waves of immigration. Today Edmonton has one of the most diverse demographic profiles in the UK and a dental practice landscape that reflects this — multilingual practices, culturally-aware practitioners, and meaningfully different patient communication patterns from the rest of the borough.',
  },

  'palmers-green': {
    heroHeading: 'Emergency dentists for Palmers Green (N13)',
    heroParagraph:
      'Palmers Green is the heart of the Greek and Cypriot community in north London — Green Lanes lined with Cypriot bakeries, restaurants, and grocers, alongside settled family residential. We match Palmers Green residents with vetted GDC-registered dentists, often with Greek-speaking practitioners available.',
    introHeading: 'Emergency dental matching for Palmers Green residents',
    introParagraphs: [
      'Palmers Green is famously the heart of the British Cypriot community — the largest Cypriot diaspora population outside Cyprus itself. The area\'s commercial spine along Green Lanes reflects this strongly, with Cypriot bakeries, restaurants, and family-run businesses dominating the high street. The dental emergency mix here includes a meaningful proportion of Greek-speaking patients who appreciate matched dentists with Greek language capability.',
      'The demographic beyond the Cypriot community is broadly settled-family — period housing along Aldermans Hill, the streets adjacent to Broomfield Park, and the streets running off Green Lanes. The dental emergency mix is broad: established-family crown maintenance, school-age trauma, working-age toothache, and occasional weekend out-of-hours presentations.',
      'Matched dentists for Palmers Green enquiries include several practices with Greek-speaking practitioners — the matching form lets you indicate language preference if relevant. Travel time from any Palmers Green address to a matched practice is typically under 10 minutes.',
    ],
    whySpecialistMatters:
      'A meaningful share of Palmers Green dental emergencies involve Greek-Cypriot patients who appreciate Greek language capability and cultural familiarity. Matched dentists with this experience handle the consultation in the patient\'s preferred language, build rapport faster, and produce a materially better experience than English-only practitioners treating Greek-speaking elderly relatives.',
    patientProfile: {
      heading: 'Patients we typically match in Palmers Green',
      points: [
        'Greek-Cypriot families needing dentists with Greek language capability',
        'Established residents in the period housing around Broomfield Park',
        'School-age children with playground or sport-related trauma',
        'Working-age adults employed in central London via the Piccadilly line connection',
        'Older relatives needing dental care arranged by adult children',
      ],
    },
    commonTriggers: [
      'Greek-Cypriot elderly relatives needing emergency dental care arranged by family',
      'Sports trauma in school-age and teenage children',
      'Crown failures in older residents with restoration history dating to the 1990s',
      'Lost filling discovered while travelling to or returning from Cyprus',
      'Wisdom-tooth pain in twenty-something residents',
    ],
    localContext:
      'Palmers Green has been the British Cypriot community heart since the 1960s, when the first wave of Cypriot immigration concentrated in the area. The community character remains distinctive — Greek Orthodox churches, Greek-language signage on Green Lanes, and a continuing strong family presence even as the original immigrant generation has been succeeded by their British-born children and grandchildren. Several long-standing Cypriot-owned dental practices serve the community alongside the broader north London practices.',
  },

  'winchmore-hill': {
    heroHeading: 'Emergency dentists for Winchmore Hill (N21)',
    heroParagraph:
      'Winchmore Hill is one of north London\'s most desirable residential suburbs — a conservation-area village green, period properties, and a settled affluent family demographic. We match Winchmore Hill residents with vetted Enfield emergency dentists, with most appointments achievable within a 10-minute drive.',
    introHeading: 'Emergency dental matching for Winchmore Hill residents',
    introParagraphs: [
      'Winchmore Hill has long been one of north London\'s most desirable family residential areas — a conservation-area village centred on The Green, period housing along Compton Road and Highfield Road, and a settled affluent demographic that has often lived in the area for many years. The dental emergency mix reflects this: long-established residents needing crown and bridge maintenance, paediatric trauma from the strong family demographic, and the occasional dental tourism return (filling falling out the day after returning from holiday).',
      'No major dental cluster sits inside Winchmore Hill village itself — most matched dentists are in central Enfield Town (10 minutes north) or Southgate (8 minutes west). For urgent same-day matching we consider both depending on availability and your specific emergency type.',
      'Winchmore Hill\'s patient demographic skews towards higher private-pay capacity than the Enfield average — many residents have private dental insurance or are willing to pay private rates for faster access. The matching form lets you indicate preference, but most Winchmore Hill enquiries route to private appointments by default.',
    ],
    whySpecialistMatters:
      'Winchmore Hill patients tend to expect a higher standard of consultation experience and more thorough explanation than is typical of high-volume NHS practices. Matched dentists for this catchment understand this and bring an unhurried, detailed consultation approach — which makes a meaningful difference in dental emergencies where the patient is anxious and needs to understand the treatment options clearly.',
    patientProfile: {
      heading: 'Patients we typically match in Winchmore Hill',
      points: [
        'Long-established residents in period housing around The Green',
        'Affluent families with school-age children at the local prep schools',
        'Older residents managing extensive restorative history',
        'Working-age professionals employed in central London via the Piccadilly line',
        'Patients with private dental insurance preferring private emergency consultation',
      ],
    },
    commonTriggers: [
      'Crown failures in long-tenured residents with extensive restorative history',
      'Sports trauma at the private schools (Palmers Green High, Highgate prep links)',
      'Lost filling on returning from holiday',
      'Severe ache from a heavily restored tooth in older residents',
      'Wisdom-tooth pain in private-school-aged teenagers',
    ],
    localContext:
      'Winchmore Hill has been one of north London\'s most desirable residential suburbs since the late Victorian railway expansion brought the area into convenient commuting distance of central London. The conservation area around The Green retains its village character, and the surrounding streets (Compton Road, Highfield Road, Hoppers Road) are widely considered among the prime north London residential addresses outside the inner zones. The dental practice landscape skews towards private rather than NHS, reflecting the patient demographic.',
  },

  'southgate': {
    heroHeading: 'Emergency dentists for Southgate (N14)',
    heroParagraph:
      'Southgate is the western anchor of the borough — Charles Holden\'s iconic Piccadilly line tube station, the Southgate Circus shopping centre, and a strong family-suburb character. We match Southgate residents with vetted GDC-registered Enfield dentists, typically with travel times under 10 minutes.',
    introHeading: 'Emergency dental matching for Southgate residents',
    introParagraphs: [
      'Southgate has been one of the major north London family suburbs since the Piccadilly line extension reached it in 1933. Charles Holden\'s flying saucer-shaped station remains the architectural anchor of the area, and the surrounding residential streets contain a mix of 1930s suburban housing and newer apartment developments around Southgate Circus.',
      'The patient demographic in Southgate is broad — long-tenured family-suburb residents alongside London commuters who chose the area for its combination of greenery and Piccadilly line connectivity. The dental emergency mix is correspondingly varied: paediatric trauma from the family demographic, working-age toothache, older-resident crown maintenance, and a meaningful number of City-commuter Saturday-morning emergencies.',
      'Matched dentists for Southgate enquiries are typically in the Southgate Circus cluster or in central Enfield Town (8 minutes north). NHS access here is broadly typical of west Enfield — pressure exists but emergency access via NHS 111 remains functional.',
    ],
    whySpecialistMatters:
      'Southgate\'s position on the Piccadilly line means many residents work in central London and are acutely time-constrained on weekday mornings — the school run feeds directly into the commute. Matched dentists understand this rhythm and prioritise Saturday morning slots, early-evening slots, and short-notice cancellation list availability.',
    patientProfile: {
      heading: 'Patients we typically match in Southgate',
      points: [
        '1930s suburban-housing long-tenured families',
        'Piccadilly line London commuters needing Saturday slots',
        'Apartment-development residents around Southgate Circus',
        'Families with children at the local secondary schools',
        'Older residents with extensive restorative history',
      ],
    },
    commonTriggers: [
      'Saturday-morning urgency from City-commuting residents',
      'Crown failures in older 1930s-housing residents',
      'Sports trauma from school-age children',
      'Lost filling discovered the night before a working week',
      'Acute pericoronitis in late-teen and twenty-something residents',
    ],
    localContext:
      'Southgate is one of the textbook examples of inter-war Piccadilly line suburbanisation — built largely between 1933 and 1939 around the new tube station, with most residential streets dating from this period. The architectural unity of the area is one of its quiet strengths, and the housing stock has held value well as later north London suburbs have been more affected by post-war development. The dental practice landscape is moderate-density and skews towards private rather than NHS.',
  },

  'cockfosters': {
    heroHeading: 'Emergency dentists for Cockfosters (EN4)',
    heroParagraph:
      'Cockfosters is the western edge of the borough — Piccadilly line terminus, leafy residential, and the entrance to Trent Park. We match Cockfosters residents with vetted Enfield emergency dentists across the EN4 postcode area.',
    introHeading: 'Emergency dental matching for Cockfosters residents',
    introParagraphs: [
      'Cockfosters sits at the boundary between Enfield and Barnet — the Piccadilly line tube terminus marks the geographic edge, and the area\'s commercial centre on Cockfosters Road serves both EN4 (Enfield) and EN4 (Barnet) postcodes. The residential demographic skews affluent and settled — substantial detached and semi-detached homes along Bramley Road, Hadley Road, and the streets adjacent to Trent Park.',
      'The dental emergency mix in Cockfosters reflects the affluent family demographic — paediatric trauma from the strong family presence, working-age presentations from Piccadilly line commuters, and a higher-than-average proportion of restorative-maintenance work in older residents (heavily restored mouths typical of decades-long ownership of period housing).',
      'Matched dentists for Cockfosters enquiries are clustered along Cockfosters Road itself, with additional capacity in Hadley Wood (4 minutes north) and central Enfield Town (12 minutes east). Many residents at the borough boundary effectively have a wider catchment than typical, including practices in Hadley Wood (Hertsmere) and East Barnet (Barnet).',
    ],
    whySpecialistMatters:
      'Cockfosters patients often have established dental relationships dating back many years and bring substantial restorative history to the emergency consultation. Matched dentists with restorative experience handle this demographic better than newer practitioners — replacing a failed crown that has been in place for 25 years requires different judgement from placing a first-time crown.',
    patientProfile: {
      heading: 'Patients we typically match in Cockfosters',
      points: [
        'Affluent settled families in period housing',
        'Older residents managing extensive restorative history',
        'Piccadilly line London commuters',
        'Trent Park-edge residents in higher-value homes',
        'Cross-borough patients from East Barnet using Cockfosters as their nearest dental access point',
      ],
    },
    commonTriggers: [
      'Long-standing crown loss in established residents',
      'Severe ache from heavily restored teeth in older patients',
      'Sports trauma in school-age and teenage children',
      'Cycling injuries from the routes through Trent Park',
      'Wisdom-tooth pain in late-teen and twenty-something residents',
    ],
    localContext:
      'Cockfosters has the unusual characteristic of being a single commercial centre split across two London boroughs — the Piccadilly line station and the row of shops on Cockfosters Road sit in Enfield, but a meaningful share of the residential catchment is in Barnet. The combination of Piccadilly line connectivity and proximity to Trent Park (one of the largest parks in north London) has kept the area\'s residential prestige high since the inter-war suburbanisation.',
  },

  'hadley-wood': {
    heroHeading: 'Emergency dentists for Hadley Wood (EN4)',
    heroParagraph:
      'Hadley Wood is one of London\'s most exclusive residential enclaves — gated estates, period villas, and the highest property values anywhere in the borough. We match Hadley Wood residents with vetted Enfield and adjacent-area emergency dentists, typically via Cockfosters or central Enfield.',
    introHeading: 'Emergency dental matching for Hadley Wood residents',
    introParagraphs: [
      'Hadley Wood is one of the most exclusive residential areas in any London borough — Edwardian period villas in conservation areas (Crescent West, Camlet Way), gated estates, and average property values that put it consistently among the top 50 most expensive residential postcodes in the UK. The dental emergency mix here is small in volume but distinctive: high-net-worth patients accustomed to private medical and dental care, often with longstanding established relationships with specific practitioners.',
      'No dental practice sits physically inside Hadley Wood village — the area is too small and exclusive to support its own. Matched dentists for Hadley Wood enquiries are in nearby Cockfosters (3 minutes south), central Enfield Town (12 minutes east), or Barnet/Hadley (4 minutes west across the borough boundary). Many Hadley Wood residents have established private practices in central London (Harley Street, the City) and use these for routine care, with the matching service used principally for genuine emergencies that cannot wait for a central London appointment.',
      'The matching form lets you indicate any specific requirements — discreet practice, after-hours appointment, specific clinical specialism — and we prioritise accordingly. Hadley Wood enquiries are matched with care; the demographic expects a higher consultation standard than typical.',
    ],
    whySpecialistMatters:
      'Hadley Wood patients tend to have established private dental relationships in central London and use the matching service primarily for genuine emergencies that cannot wait. Matched dentists for this catchment understand this dynamic — they handle the immediate emergency professionally without trying to "convert" the patient to a regular registration, since most Hadley Wood patients will return to their established Harley Street practitioner for ongoing care.',
    patientProfile: {
      heading: 'Patients we typically match in Hadley Wood',
      points: [
        'High-net-worth residents in conservation-area period villas',
        'Patients with established central London private dental relationships',
        'Family emergencies (paediatric trauma, weekend wisdom-tooth flares) needing local coverage',
        'Visitors and house guests staying in the area',
        'Cross-border patients from the Hertfordshire side using Enfield practices for proximity',
      ],
    },
    commonTriggers: [
      'Children\'s sports trauma from the local prep schools (Lochinver House, Norfolk House)',
      'Weekend toothache in residents whose central London practice is closed',
      'Lost crown discovered before an important professional engagement',
      'Visiting family members needing emergency care while staying in Hadley Wood',
      'Cycling injuries from the country lanes around the area',
    ],
    localContext:
      'Hadley Wood was developed in the 1880s as a railway-driven exclusive suburb — Charles Jack\'s development around the King George railway station produced the period villas in Crescent West, Camlet Way, and the surrounding streets. The area\'s exclusivity has persisted through the 20th and into the 21st century, with heavy conservation-area protection preserving the original architectural character. Modern Hadley Wood is one of the most consistently desirable London suburb addresses — and one of the smallest, with a population well under 3,000.',
  },
};

export const getAreaContent = (slug: string): AreaContent | undefined => areaContent[slug];
