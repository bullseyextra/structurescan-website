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

export const media = {
  logo: "/media/logos/logo-transparent.png",
  logoOval: "/media/logos/structure-scan-inc-new.png",
  winnipeg: "/media/hero/structure-scan-gpr-winnipeg.jpg",
  brighter: "/media/hero/brighter.jpg",
  warehouseTechs: "/media/hero/warehouse-techs.jpg",
  warehouseGrid: "/media/hero/warehouse.jpg",
  rebarGrid: "/media/gpr/rebar-grid.jpg",
  slabThickness: "/media/gpr/slab-thickness.jpg",
  dowel: "/media/gpr/dowel-identification.jpg",
  conduit: "/media/gpr/conduit-id.jpg",
  structural: "/media/gpr/structural-component.jpg",
  voids: "/media/gpr/void-detection.jpg",
  inFloorHeat: "/media/gpr/in-floor-heat.jpg",
  gprJobs: "/media/gpr/gpr-jobs.jpg",
  gp8100: "/media/gpr/gp8100.jpg",
  equipmentHandheld: "/media/gpr/equipment-handheld.jpg",
  equipmentCart: "/media/gpr/equipment-cart.jpg",
  map1: "/media/utility/utility-map-1.jpg",
  map2: "/media/utility/utility-map-2.jpg",
  map3: "/media/utility/utility-map-3.jpg",
  map4: "/media/utility/utility-map-4.jpg",
  map5: "/media/utility/utility-map-5.jpg",
  map6: "/media/utility/utility-map-6.jpg",
  lmsFlow: "/media/utility/lms-flow.png",
  sewerCam: "/media/sewer/trenchless-sewer-camera.jpg",
  sewerSee: "/media/sewer/what-sewer-cameras-see.jpg",
  thermo1: "/media/thermo/thermo-1.jpg",
  thermo2: "/media/thermo/thermo-2.jpg",
  paintedLocates: "/media/field/painted-locates.jpg",
  locateTech: "/media/field/locate-tech.jpg",
  gprBridge: "/media/field/gpr-bridge.jpg",
  gprTower: "/media/field/gpr-tower.jpg",
  markedSlab: "/media/field/marked-slab.jpg",
  gpr3d: "/media/field/gpr-3d.jpg",
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
      "See what’s inside the slab before you cut or core. Rebar, post-tension cables, conduits, voids, and thickness—marked on the concrete and available in 2D and 3D.",
    heroEyebrow: "Ground penetrating radar",
    heroTitle: "Concrete scanning, without the guesswork",
    heroLead:
      "A non-destructive look inside the slab, wall, or deck before anyone cuts, cores, or drills—then a mark you can work from.",
    image: media.rebarGrid,
    heroImage: media.rebarGrid,
  },
  {
    slug: "utility-locating",
    href: "/services/utility-locating",
    name: "Utility locating",
    shortName: "Locates",
    navLabel: "Utility locating",
    cardTitle: "Utility locating",
    summary:
      "Electromagnetic locating of water, gas, electric, sewer, and telecom—private and public—with paint on the ground and geo-referenced maps to take home.",
    heroEyebrow: "Know what’s below",
    heroTitle: "Utility locating, marked and mapped",
    heroLead:
      "Find the pipes and cables before the bucket goes in. Surface marks for the crew on site, maps for the file afterward.",
    image: media.map1,
    heroImage: media.map1,
  },
  {
    slug: "locate-management",
    href: "/services/locate-management",
    name: "Locate management",
    shortName: "LMS",
    navLabel: "Locate management",
    cardTitle: "Locate management (LMS)",
    summary:
      "Call Before You Dig tickets, public locates, private sweeps, and GPS-mapped deliverables—one coordinated file instead of a messy inbox.",
    heroEyebrow: "Locate management system",
    heroTitle: "We’ll wrangle the locates",
    heroLead:
      "Tickets, public locates, private sweeps, and GPS maps in one package your superintendent can actually use.",
    image: media.warehouseTechs,
    heroImage: media.warehouseTechs,
  },
  {
    slug: "thermography",
    href: "/services/thermography",
    name: "Thermographic imaging",
    shortName: "Thermography",
    navLabel: "Thermography",
    cardTitle: "Thermographic imaging",
    summary:
      "Locate in-floor and radiant heating lines in concrete without cutting, drilling, or disruption—then mark the layout on the slab.",
    heroEyebrow: "Non-invasive inspection",
    heroTitle: "Find the heat lines first",
    heroLead:
      "Pinpoint in-floor heating in the slab so you can cut or core without a chilly surprise.",
    image: media.thermo1,
    heroImage: media.thermo1,
  },
  {
    slug: "sewer-camera",
    href: "/services/sewer-camera",
    name: "Sewer camera",
    shortName: "Camera",
    navLabel: "Sewer camera",
    cardTitle: "Sewer camera inspections",
    summary:
      "Residential sewer laterals and weeping tile: blockages, cracks, depths, pre-renovation and real estate inspections—without digging up the yard.",
    heroEyebrow: "Sewer & weeping tile",
    heroTitle: "A camera in the line, not a hole in the yard",
    heroLead:
      "Inspect residential drain lines and weeping tile without excavation, so you know what’s actually in the pipe.",
    image: media.sewerCam,
    heroImage: media.sewerCam,
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];

export const processSteps = [
  {
    label: "Scan",
    title: "Collect the picture",
    body: "GPR on concrete and in the field. Electromagnetic locators on conductive services. Camera in the line when you need to see the pipe itself.",
    image: media.winnipeg,
    alt: "Structure Scan technician pushing a GPR cart across the Manitoba Legislative Building grounds",
  },
  {
    label: "Mark",
    title: "Put it on the ground",
    body: "Paint, tape, and notes where the crew will actually work—rebar grids, post-tension paths, heat lines, and buried utilities.",
    image: media.rebarGrid,
    alt: "Rebar grid marked on a concrete slab beside a tablet showing the GPR radargram",
  },
  {
    label: "Deliver",
    title: "Leave a record",
    body: "2D and 3D concrete imaging, geo-referenced utility maps, and a digital archive you can hand to the next trade on site.",
    image: media.map1,
    alt: "Aerial utility map with colour-coded service paths around a commercial building",
  },
] as const;

export const mapGallery = [
  {
    src: media.map1,
    alt: "Colour-coded utility paths mapped over a large commercial parking lot",
  },
  {
    src: media.map2,
    alt: "Utility map showing services around a pair of commercial buildings",
  },
  {
    src: media.map3,
    alt: "Mapped utilities crossing a paved parking lot",
  },
  {
    src: media.map4,
    alt: "Close-in utility map of a busy parking lot",
  },
  {
    src: media.map5,
    alt: "Corridor-scale utility mapping along a highway interchange",
  },
  {
    src: media.map6,
    alt: "Geo-referenced utility map across a developed site",
  },
] as const;

export const fieldGallery = [
  {
    src: media.rebarGrid,
    alt: "Red rebar marks on a slab next to a tablet displaying GPR data",
    caption: "Marked slab after a concrete scan",
  },
  {
    src: media.dowel,
    alt: "Yellow chalk grid marking dowel locations in a sidewalk slab",
    caption: "Dowel identification, marked in place",
  },
  {
    src: media.warehouseGrid,
    alt: "Warehouse floor gridded in white chalk ahead of a concrete scan",
    caption: "Scan grid on a warehouse slab",
  },
  {
    src: media.thermo1,
    alt: "In-floor heating loops marked in red around vehicle lifts",
    caption: "Heat lines marked around shop lifts",
  },
  {
    src: media.paintedLocates,
    alt: "Colour-coded utility paint marks on a concrete pad",
    caption: "Painted locates, ready to dig around",
  },
  {
    src: media.gprJobs,
    alt: "Structure Scan technician operating a GPR cart in an open field",
    caption: "Open-field GPR with the GS cart",
  },
] as const;

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
