import additionalServices from './additionalServices'
import serviceInformation from './serviceInformation'

export const coreDetailingPackages = [
  {
    id: 'maintenance-wash',
    slug: 'maintenance-wash',
    category: 'Core Detailing Packages',
    displayOrder: 1,
    title: 'Maintenance Wash',
    recommendedFrequency: 'Every 1–2 Weeks',
    duration: 'Approximately 1 Hour',
    price: 'From £50',
    priceLabel: 'From £50',
    description: 'Our Maintenance Wash is designed for vehicles already maintained to VVS Haus standards.',
    importantNote:
      'First-time customers must book a VVS Haus Special before becoming eligible for our Maintenance Programme.',
    image: '/assets/images/product-showcase-detailing.jpg',
    icon: 'droplet',
    exterior: [
      'Pre-wash snow foam',
      'Two-bucket contact wash',
      'Wheel foam and rinse',
      'Hand and air dry',
      'Tyre dressing',
    ],
    interior: [
      'Vacuum carpets and seats',
      'General interior wipe-down',
      'Interior glass cleaned',
      'Paper mats fitted',
      'Air freshener applied',
    ],
  },
  {
    id: 'vvs-haus-special',
    slug: 'vvs-haus-special',
    category: 'Core Detailing Packages',
    displayOrder: 2,
    title: 'VVS Haus Special',
    duration: '2–3 Hours',
    price: 'From £120',
    priceLabel: 'From £120',
    description:
      'Our most popular package and the recommended starting point for all first-time customers. This service deep cleans, decontaminates, and protects your vehicle inside and out.',
    image: '/assets/images/van-with-logo.jpg',
    icon: 'sparkles',
    exterior: [
      'Pre-wash',
      'Iron fallout removal',
      'Snow foam treatment',
      'Two-bucket wash',
      'Detailed brush work on intricate areas',
      'Wheel, tyre and arch decontamination',
      'Hand and air dry',
      'Protective sealant applied, lasting approximately 3–6 months',
      'Tyre dressing',
    ],
    interior: [
      'Full interior vacuum',
      'Boot vacuumed',
      'Steam-cleaned interior surfaces',
      'Interior trim dressing',
      'Glass cleaned throughout',
      'Paper mats fitted',
      'Air freshener applied',
    ],
  },
  {
    id: 'showroom-refresh',
    slug: 'showroom-refresh',
    category: 'Core Detailing Packages',
    displayOrder: 3,
    title: 'Showroom Refresh',
    duration: '3–4 Hours',
    price: 'From £200',
    priceLabel: 'From £200',
    description:
      'Our most comprehensive detailing package, designed to restore your vehicle to the highest possible standard.',
    additionalDescription:
      'Ideal before selling a vehicle, after purchasing a new vehicle, or simply when your car deserves extra attention.',
    image: '/assets/images/ceramic-coating-mercedes.jpg',
    icon: 'shield',
    exterior: [
      'Pre-wash',
      'Bug removal',
      'Iron fallout removal',
      'Tar and glue removal',
      'Snow foam treatment',
      'Three-bucket safe wash',
      'Detailed brush work throughout',
      'Wheel, tyre and arch decontamination',
      'Door shut cleaning',
      'Hand and air dry',
      'Plastic and rubber trim dressing',
      'Glass polishing and protection',
      'Graphene sealant, providing up to 6 months of protection',
      'Hand polish and wax',
      'Wheel protection',
      'Exhaust tip polish and protection',
      'Protective tyre dressing',
    ],
    interior: [
      'Full detailed vacuum',
      'Steam-cleaned interior',
      'Fabric extraction where applicable',
      'Leather cleaning and conditioning',
      'Vent and crevice detailing',
      'Interior trim dressing',
      'Interior glass protection',
      'Protective seat, steering wheel and pedal covers',
      'Paper mats fitted',
      'Air freshener applied',
    ],
  },
]

export const refreshServices = [
  {
    id: 'exterior-refresh',
    slug: 'exterior-refresh',
    category: 'Refresh Services',
    displayOrder: 1,
    title: 'Exterior Refresh',
    price: 'From £40',
    priceLabel: 'From £40',
    image: '/assets/images/deep-out-mercedes-clean.jpg',
    icon: 'droplet',
    includes: [
      'Pre-wash',
      'Wax-infused snow foam',
      'Two-bucket contact wash',
      'Wheel foam and rinse',
      'Hand and air dry',
      'Tyre dressing',
    ],
  },
  {
    id: 'interior-refresh',
    slug: 'interior-refresh',
    category: 'Refresh Services',
    displayOrder: 2,
    title: 'Interior Refresh',
    price: 'From £30',
    priceLabel: 'From £30',
    image: '/assets/images/interior-mercedes.jpg',
    icon: 'armchair',
    includes: [
      'Full interior vacuum',
      'Boot vacuumed',
      'Interior wipe-down',
      'Trim dressing',
      'Interior glass cleaned',
      'Paper mats fitted',
      'Air freshener applied',
    ],
  },
]

export const paintCorrectionAndPolishing = {
  id: 'paint-correction-polishing',
  slug: 'paint-correction-polishing',
  category: 'Paint Correction & Polishing',
  displayOrder: 3,
  introduction:
    'We offer multiple levels of paint enhancement depending on your vehicle’s condition and your desired finish.',
  featuredService: {
    id: 'paint-enhancement',
    slug: 'paint-enhancement',
    title: 'Paint Enhancement',
    price: 'From £200',
    priceLabel: 'From £200',
    description:
      'Perfect for removing light swirl marks and minor paint imperfections while restoring gloss and clarity.',
    image: '/assets/images/ceramic-coating-mercedes-shown.jpg',
    icon: 'sparkles',
    includes: [
      'Full exterior decontamination wash',
      'Clay bar treatment',
      'Single-stage machine polish',
      'Protective sealant, lasting up to 6 months',
    ],
  },
  additionalPolishingServices: [
    { id: 'stage-2-machine-polish', title: 'Stage 2 Machine Polish', price: 'POA' },
    { id: 'stage-3-machine-polish', title: 'Stage 3 Machine Polish', price: 'POA' },
    { id: 'wheel-polish', title: 'Wheel Polish', price: 'From £100' },
    { id: 'hand-wax-polish', title: 'Hand Wax Polish', price: 'From £100' },
    { id: 'interior-trim-polish', title: 'Interior Trim Polish', price: 'From £100' },
    { id: 'glass-polish', title: 'Glass Polish', price: 'From £60' },
    { id: 'headlight-restoration', title: 'Headlight Restoration', price: '£50' },
    { id: 'exhaust-tip-polish', title: 'Exhaust Tip Polish', price: '£20' },
  ],
}

export const ceramicCoatings = {
  id: 'ceramic-coatings',
  slug: 'ceramic-coatings',
  category: 'Ceramic Coatings',
  displayOrder: 4,
  introduction:
    'Protect your vehicle with long-lasting ceramic technology designed to enhance gloss and provide superior protection.',
  allPackagesInclude: [
    'Full decontamination wash',
    'Clay bar treatment',
    'Panel preparation cleanse',
    'Professional ceramic coating application',
  ],
  protectionPackages: [
    { id: 'one-year-protection', title: '1 Year Protection', price: 'From £200' },
    { id: 'two-year-protection', title: '2 Year Protection', price: 'From £350' },
    { id: 'four-year-protection', title: '4 Year Protection', price: 'POA' },
    { id: 'seven-plus-year-protection', title: '7+ Year Protection', price: 'POA' },
  ],
  additionalCeramicProtection: [
    { id: 'interior-plastics', title: 'Interior Plastics', price: 'From £100' },
    { id: 'fabric-protection', title: 'Fabric Protection', price: 'From £100' },
    { id: 'leather-protection', title: 'Leather Protection', price: 'From £100' },
    { id: 'wheel-ceramic-face-barrel', title: 'Wheel Ceramic, Face & Barrel', price: 'From £200' },
    { id: 'wheel-ceramic-face-only', title: 'Wheel Ceramic, Face Only', price: 'From £100' },
    { id: 'glass-mirror-ceramic', title: 'Glass & Mirror Ceramic', price: 'From £50' },
  ],
  importantNote: 'Vehicles should not be washed for 7 days following ceramic coating application.',
}

export const fleetMaintenance = {
  id: 'fleet-maintenance',
  slug: 'fleet-maintenance',
  category: 'Fleet Maintenance',
  displayOrder: 6,
  title: 'Fleet Maintenance',
  description:
    'We offer discounted rates for fleets of two or more vehicles maintained on a regular 1–2 week schedule.',
  suitableFor: [
    'Motorcycles',
    'Cars',
    'Vans',
    'Pickups',
    'Commercial Vehicles',
  ],
  cta: 'Please contact us for a bespoke quotation.',
}

export const serviceCategories = [
  {
    id: 'core-detailing-packages',
    slug: 'core-detailing-packages',
    title: 'Core Detailing Packages',
    displayOrder: 1,
    items: coreDetailingPackages,
  },
  {
    id: 'refresh-services',
    slug: 'refresh-services',
    title: 'Refresh Services',
    displayOrder: 2,
    items: refreshServices,
  },
  {
    id: paintCorrectionAndPolishing.id,
    slug: paintCorrectionAndPolishing.slug,
    title: paintCorrectionAndPolishing.category,
    displayOrder: paintCorrectionAndPolishing.displayOrder,
    items: [paintCorrectionAndPolishing],
  },
  {
    id: ceramicCoatings.id,
    slug: ceramicCoatings.slug,
    title: ceramicCoatings.category,
    displayOrder: ceramicCoatings.displayOrder,
    items: [ceramicCoatings],
  },
  {
    id: 'additional-services',
    slug: 'additional-services',
    title: 'Additional Services',
    displayOrder: 5,
    items: additionalServices,
  },
  {
    id: fleetMaintenance.id,
    slug: fleetMaintenance.slug,
    title: fleetMaintenance.category,
    displayOrder: fleetMaintenance.displayOrder,
    items: [fleetMaintenance],
  },
  {
    id: serviceInformation.id,
    slug: serviceInformation.slug,
    title: serviceInformation.category,
    displayOrder: serviceInformation.displayOrder,
    items: serviceInformation.items,
  },
]

export const serviceCatalogue = {
  categories: serviceCategories,
  coreDetailingPackages,
  refreshServices,
  paintCorrectionAndPolishing,
  ceramicCoatings,
  additionalServices,
  fleetMaintenance,
  importantInformation: serviceInformation.items,
}

const services = coreDetailingPackages

export default services
