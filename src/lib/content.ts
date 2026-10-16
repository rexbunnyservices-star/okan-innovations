// ─────────────────────────────────────────────────────────────
//  Okan Innovations — SINGLE CONTENT FILE
//  Every string, number and image path on the site lives here.
//  The client edits this file only. Nothing else.
//
//  ⚠️ TODO (marked FIX below) — still to be supplied by the client:
//  whatsapp, phone, email.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Okan Innovations', // FIX if legal spelling differs
  tagline: 'Design. Build. Delivered.',
  description:
    'Design-and-Build contractor delivering interior design, interior decoration, electrical solutions and full MEP works — one accountable team from concept to handover.',
  city: 'Dehradun',
  whatsapp: '', // FIX digits only, with country code, no + or spaces
  email: 'hello@okaninnovations.com', // FIX
  phone: '', // FIX
  address: 'Dehradun, Uttarakhand, India',
  areaServed: ['Dehradun', 'Dehradun district', 'Uttarakhand'],
  hours: 'Sat–Thu, 9:00 – 18:00',
  locale: 'en',
  image: '/renders/hero-villa.jpg',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export type Service = {
  slug: string;
  num: string;
  icon: 'interior' | 'fitout' | 'electrical' | 'mep';
  title: string;
  blurb: string;
  scope: string[];
  deliverables: string[];
  timeline: string;
  image: string;
};

export const services: Service[] = [
  {
    slug: 'interior-design',
    num: '01',
    icon: 'interior',
    title: 'Interior Design',
    blurb: 'Concept to construction-ready drawings. Space planning, material palettes, lighting design and 3D visualisation for residential and commercial interiors.',
    scope: [
      'Space planning and layout optimisation',
      'Concept boards and material palettes',
      '3D visualisation before a single wall moves',
      'Lighting and acoustic design',
      'Furniture, fixture and equipment specification',
    ],
    deliverables: ['Concept deck', '3D renders', 'GFC drawing set', 'BOQ and material schedule'],
    timeline: '2–4 weeks',
    image: '/renders/svc-interior-design.jpg',
  },
  {
    slug: 'interior-decoration',
    num: '02',
    icon: 'fitout',
    title: 'Interior Decoration & Fit-Out',
    blurb: 'The build side of design. Joinery, flooring, ceilings, wall finishes and styling — executed by the same team that drew it.',
    scope: [
      'Bespoke joinery and cabinetry',
      'Flooring, cladding and wall finishes',
      'False ceiling and feature lighting install',
      'Window treatments and soft furnishing',
      'Snagging, touch-up and styling before handover',
    ],
    deliverables: ['Shop drawings', 'Finish samples', 'Install supervision', 'Handover report'],
    timeline: '3–8 weeks',
    image: '/renders/svc-fitout.jpg',
  },
  {
    slug: 'electrical',
    num: '03',
    icon: 'electrical',
    title: 'Electrical Solutions',
    blurb: 'Safe, compliant, future-proof electrical works — distribution, lighting, smart control and energy-efficient upgrades.',
    scope: [
      'Distribution boards and circuit design',
      'Indoor, outdoor and landscape lighting',
      'Smart switching, dimming and automation',
      'Cabling, containment and trunking',
      'Testing, certification and compliance sign-off',
    ],
    deliverables: ['Load calculation', 'Circuit schedule', 'As-built drawings', 'Test certificate'],
    timeline: '1–4 weeks',
    image: '/renders/svc-electrical.jpg',
  },
  {
    slug: 'mep',
    num: '04',
    icon: 'mep',
    title: 'MEP Engineering',
    blurb: 'Mechanical, electrical and plumbing coordinated as one system — so services never fight the ceiling or each other.',
    scope: [
      'HVAC design, ducting and installation',
      'Plumbing, drainage and water heating',
      'Fire and life-safety coordination',
      'BIM clash detection across trades',
      'Commissioning and performance testing',
    ],
    deliverables: ['MEP coordination model', 'Shop drawings', 'Commissioning report', 'O&M manual'],
    timeline: '4–10 weeks',
    image: '/renders/svc-mep.jpg',
  },
];

export type Project = {
  title: string;
  category: 'Interior' | 'Electrical' | 'MEP' | 'Turnkey';
  location: string;
  blurb: string;
  image: string;
  year: string;
};

export const projects: Project[] = [
  { title: 'Skyline Residence', category: 'Interior', location: 'Dehradun', blurb: 'Full living-space redesign: open plan, custom joinery and a layered lighting scheme.', image: '/renders/proj-01.jpg', year: '2025' },
  { title: 'Chef’s Kitchen Fit-Out', category: 'Interior', location: 'Dehradun', blurb: 'Stone tops, handleless cabinetry and integrated appliances delivered in six weeks.', image: '/renders/proj-02.jpg', year: '2025' },
  { title: 'Quiet Suite', category: 'Interior', location: 'Dehradun', blurb: 'Bedroom suite with acoustic panelling, blackout automation and bespoke headboard wall.', image: '/renders/proj-03.jpg', year: '2024' },
  { title: 'Modern Facade Refurb', category: 'Turnkey', location: 'Dehradun', blurb: 'Exterior re-cladding, facade lighting and entrance works — design through completion.', image: '/renders/proj-04.jpg', year: '2025' },
  { title: 'Marble Bath Renovation', category: 'Electrical', location: 'Dehradun', blurb: 'Full rewire, wet-zone lighting and underfloor heating behind a book-matched marble wall.', image: '/renders/proj-05.jpg', year: '2024' },
  { title: 'Open-Plan Office', category: 'MEP', location: 'Dehradun', blurb: 'Floor-to-floor HVAC, lighting controls and power distribution for a 40-desk workplace.', image: '/renders/proj-06.jpg', year: '2025' },
];

export const stats = [
  { value: '150+', label: 'Projects delivered' },
  { value: '12', label: 'Years on site' },
  { value: '4', label: 'Trades, one contract' },
  { value: '100%', label: 'Snag-free handover' },
];

export const process = [
  { num: '01', title: 'Consult', text: 'Site visit, brief and budget alignment. You get a scope you can actually hold us to.' },
  { num: '02', title: 'Design', text: 'Concepts, 3D visualisation and a costed drawing set — approved before anything is ordered.' },
  { num: '03', title: 'Build', text: 'One contract, one site manager, all four trades sequenced instead of fighting.' },
  { num: '04', title: 'Handover', text: 'Snagged, tested, certified and walked through with you. Then we stay reachable.' },
];

export const about = {
  kicker: 'About us',
  title: 'One team from first sketch to final screw.',
  body: [
    'Most projects lose time and money at the seam — where the designer hands over to the contractor, and nobody owns what happens next.',
    'Okan Innovations removes that seam. Design, decoration, electrical and MEP sit under one roof, on one programme, with one point of contact. What you approved on screen is what gets built on site.',
  ],
  image: '/renders/about-team.jpg',
};

export const hero = {
  eyebrow: 'Architecture · Interiors · Landscapes',
  title: 'Spaces That Inspire',
  text: 'Interior design, decoration, electrical and MEP — coordinated under a single contract so your project lands on time, on budget and snag-free.',
  image: '/renders/hero-villa.jpg',
  chip: { title: 'Turnkey Delivery', text: 'Concept → handover, no handover gap' },
};

export const zonesHeader = {
  eyebrow: 'Spaces We Shape',
  title: 'Explore by room',
  text: 'Bedroom, kitchen, bathroom and terrace — fit out under one contract, every trade sequenced.',
};

export type Zone = {
  id: string;
  label: string;
  image: string;
};

export const zones: Zone[] = [
  { id: 'bedroom', label: 'Bedroom', image: '/renders/proj-03.jpg' },
  { id: 'kitchen', label: 'Kitchen', image: '/renders/proj-02.jpg' },
  { id: 'bathroom', label: 'Bathroom', image: '/renders/proj-05.jpg' },
  { id: 'terrace', label: 'Terrace', image: '/renders/terrace.jpg' },
];
