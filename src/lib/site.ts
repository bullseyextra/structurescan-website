export const site = {
  name: "Structure Scan Inc.",
  shortName: "Structure Scan",
  url: "https://www.structurescan.ca",
  tagline: "Canada's Leader in Damage Prevention Services",
  promise: "Dig and drill with confidence.",
  description:
    "Family-owned damage prevention specialists in Winnipeg. Concrete scanning, utility locating, locate management, thermography, and sewer camera inspections across Manitoba, Saskatchewan, Western Ontario, and Nunavut.",
  founded: 1999,
  founder: "Tony Brunette",
  phoneDisplay: "1-204-777-6590",
  phoneTel: "+12047776590",
  email: "info@structurescan.ca",
  address: {
    street: "7 Valde Avenue",
    city: "Winnipeg",
    region: "MB",
    postal: "R2C 2K8",
    country: "Canada",
    line: "7 Valde Avenue, Winnipeg, MB R2C 2K8, Canada",
  },
  geo: {
    lat: 49.9112187,
    lng: -97.0028772,
  },
  serviceArea: [
    "Manitoba",
    "Saskatchewan",
    "Western Ontario",
    "Nunavut",
  ],
  jotforms: {
    schedule: "https://form.jotform.com/261134632326046",
    consultation: "https://form.jotform.com/261134622246046",
    estimate: "https://form.jotform.com/261125084766055",
  },
} as const;

export const services = [
  {
    slug: "concrete-scanning",
    href: "/services/concrete-scanning",
    name: "Concrete scanning",
    shortName: "GPR",
    navLabel: "Concrete scanning",
    cardTitle: "Concrete scanning / GPR",
    summary:
      "See what’s inside the slab before you cut or core. Rebar, post-tension cables, conduits, voids, and more—mapped in 2D and 3D.",
    heroEyebrow: "Ground penetrating radar",
    heroTitle: "Concrete scanning, without the guesswork",
    heroLead:
      "A friendly, non-destructive look inside the slab before anyone cuts, cores, or drills.",
    image: "/images/equipment-gpr.jpg",
    heroImage: "/images/slab-marks.jpg",
  },
  {
    slug: "utility-locating",
    href: "/services/utility-locating",
    name: "Utility locating",
    shortName: "Locates",
    navLabel: "Utility locating",
    cardTitle: "Utility locating",
    summary:
      "Electromagnetic locating of water, gas, electric, sewer, and telecom—private and public—with surface marks and geo-referenced maps.",
    heroEyebrow: "Know what’s below",
    heroTitle: "Utility locating, marked and mapped",
    heroLead:
      "Private and public locates so crews can dig with confidence—and a little less stress.",
    image: "/images/locate-tech.jpg",
    heroImage: "/images/excavator-sky.jpg",
  },
  {
    slug: "locate-management",
    href: "/services/locate-management",
    name: "Locate management",
    shortName: "LMS",
    navLabel: "Locate management",
    cardTitle: "Locate management (LMS)",
    summary:
      "Call Before You Dig ticket coordination, public locates, private sweeps, and GPS-mapped deliverables—without the paperwork scramble.",
    heroEyebrow: "Locate management system",
    heroTitle: "We’ll wrangle the locates",
    heroLead:
      "Tickets, public locates, private sweeps, and GPS maps—one coordinated file instead of a messy inbox.",
    image: "/images/utility-map.jpg",
    heroImage: "/images/office-plans.jpg",
  },
  {
    slug: "thermography",
    href: "/services/thermography",
    name: "Thermographic imaging",
    shortName: "Thermography",
    navLabel: "Thermography",
    cardTitle: "Thermographic imaging",
    summary:
      "Locate in-floor and radiant heating lines in concrete without cutting, drilling, or disruption.",
    heroEyebrow: "Non-invasive inspection",
    heroTitle: "Find the heat lines first",
    heroLead:
      "Pinpoint in-floor heating in the slab so you can cut or core without a chilly surprise.",
    image: "/images/thermo.jpg",
    heroImage: "/images/thermo.jpg",
  },
  {
    slug: "sewer-camera",
    href: "/services/sewer-camera",
    name: "Sewer camera",
    shortName: "Camera",
    navLabel: "Sewer camera",
    cardTitle: "Sewer camera inspections",
    summary:
      "Residential sewer laterals and weeping tile: blockages, cracks, depths, pre-renovation and real estate inspections.",
    heroEyebrow: "Sewer & weeping tile",
    heroTitle: "A camera in the line, not a hole in the yard",
    heroLead:
      "Inspect residential drain lines and weeping tile without digging up the lawn.",
    image: "/images/deck.jpg",
    heroImage: "/images/deck.jpg",
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];

export const leadership = [
  {
    name: "Michael Brunette",
    role: "Owner / CFO",
    bio: "Michael Brunette is CFO and co-owner of Structure Scan Inc., with more than 15 years of hands-on experience. He stepped into the family business straight out of high school and honed his skills under the founder—his father, Tony. He is dedicated to building on that foundation and shaping Structure Scan’s next chapter in GPR and utility locating. A proud father of three—two girls and a boy—Michael is married to his partner, Jaqueline. Away from the office, his heart is at the family hobby farm. Whether tackling farm projects, tossing boots, or finding some other outdoor excuse to be outside, he values connection, hard work, and making memories under the sun.",
  },
  {
    name: "Allan Gunter",
    role: "Owner / CEO",
    bio: "Allan is CEO and co-owner of Structure Scan. He has been in the industry for seven years—starting with no background in GPR or utility locating, and a healthy desire to learn. His other passion is archery. In his younger years he was a competitive archer, named to the Canadian National Archery team for four separate World Championships. He still shoots in local competitions with friends and coaches up-and-coming competitive archers. He also loves watching his daughter on the competitive dance stage and his son on the soccer field. Allan is the company’s resident wildlife “expert” and wild mushroom picker. Really, he’s into anything he can do outdoors.",
  },
  {
    name: "Janine Gunter",
    role: "COO",
    bio: "Janine is COO and the person who keeps the office and staff organized. She is a dedicated mother of two. When she’s not chauffeuring her daughter to dance classes or competitions… who are we kidding, she’s always chauffeuring her daughter to dance. She also loves watching her son play soccer or jam on his electric guitar. When she finally gets time to herself, she curls up with a good book and a glass of wine. Allan notes that she is a coffee snob—so if anyone has extra work he can do to support that habit, he’s available.",
  },
  {
    name: "Tony Brunette",
    role: "Founder",
    bio: "Tony was born on an Air Force base in France and made Canada his home in 1960. He grew up in a time when men were defined by their work ethic, and has watched the shift toward balancing work and life. He is not sure he will ever fully retire, but he enjoys more time in Mexico and with family each year. Happily married for 42 years, he has the joy of watching his two sons and three grandchildren grow. His sons like to joke that he’s “older than dirt,” while his wife teases that he acts like a child. One of the best pieces of advice he received was to “choose to live the dream”—happiness isn’t a result, it’s a choice. The East Coast of Canada is the last place on his travel bucket list. In his free time you’ll find him fishing, walking in the bush, or lost in a good book.",
  },
] as const;

export const technicians = [
  {
    name: "Andrew Lawes",
    role: "Lead GPR Technician",
  },
  {
    name: "Ryan McGaw",
    role: "Lead Locate Technician",
  },
  {
    name: "Max Pilote",
    role: "GPR / Locate Technician, Safety Officer",
  },
] as const;

export const values = [
  {
    name: "Safety first",
    body: "Every scan and locate is about sending people home in one piece—and keeping the pipes, cables, and concrete around them intact.",
  },
  {
    name: "Accuracy & reliability",
    body: "We deliver precise, dependable data that crews and engineers can actually use on site.",
  },
  {
    name: "Integrity",
    body: "Straight talk. If we see it, we say it. If we don’t, we won’t pretend we did.",
  },
  {
    name: "Clear communication",
    body: "Subsurface data is only helpful if you can understand it. We mark it, map it, and explain it in plain language.",
  },
  {
    name: "Expertise",
    body: "Our technicians stay trained and certified so the person on your slab knows the gear and the job.",
  },
  {
    name: "Client partnership",
    body: "We’re easier to reach than a faceless dispatch line. Call, and you’ll talk to the people who actually do the work.",
  },
] as const;

export const certifications = [
  "eRailSafe",
  "COR",
  "ISN",
  "Accredited BBB member",
] as const;

export const technicianTraining = [
  "Ground Disturbance Supervisors Level 2",
  "Staking University",
  "Locate Management — Canadian Association of Pipeline and Utility Locating Contractors (CAPULC)",
  "eRailSafe",
  "Imperial Oil facility access",
  "Shell Canada facility access",
  "Canadian Railway access",
  "High-level security access for Canadian government facilities",
] as const;

export const tonyIndustryRoles = [
  {
    org: "CAPULC",
    detail:
      "Board of Directors — Canadian Association of Pipeline and Utility Locating Contractors",
  },
  {
    org: "CSDA",
    detail:
      "Member of the Concrete Sawing and Drilling Association GPR Imaging Certification Program",
  },
  {
    org: "MCGA",
    detail: "Board Member — Manitoba Common Ground Alliance",
  },
] as const;

export const equipment = [
  {
    name: "Proceq GP8000",
    use: "Concrete scanning. Technicians carry GP8000 or GP8800 units capable of scanning through 24+ inches of concrete.",
  },
  {
    name: "Proceq GP8800",
    use: "Concrete scanning alongside the GP8000, for 24+ inches of concrete.",
  },
  {
    name: "Proceq GS8000",
    use: "Deeper and open-field work: off-road sites, larger areas, and applications such as underground storage tanks or shallow scanning for concrete cover on bridge decks.",
  },
] as const;

export function serviceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
