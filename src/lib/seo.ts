import type { Metadata } from "next";
import { media, site } from "@/lib/site";

export const defaultTitle = {
  default: `${site.shortName} | Winnipeg GPR & utility locating`,
  template: `%s | ${site.shortName}`,
};

export const defaultOgImage = {
  url: media.winnipeg,
  width: 1200,
  height: 698,
  alt: "Structure Scan technician using a ground penetrating radar cart on the Manitoba Legislative Building grounds in Winnipeg",
};

export type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: {
    url: string;
    alt: string;
    width?: number;
    height?: number;
  };
  index?: boolean;
};

export function canonicalUrl(path: string) {
  if (path === "/") return site.url;
  return new URL(path, site.url).toString();
}

export function pageMeta({
  title,
  description,
  path,
  image,
  index = true,
}: PageMetaInput): Metadata {
  const url = canonicalUrl(path);
  const ogImage = image
    ? [
        {
          url: image.url,
          alt: image.alt,
          width: image.width ?? 1200,
          height: image.height ?? 630,
        },
      ]
    : [defaultOgImage];
  const brandedTitle = `${title} | ${site.shortName}`;

  return {
    title: { absolute: brandedTitle },
    description,
    alternates: { canonical: url },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      title: brandedTitle,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_CA",
      images: ogImage,
    },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description,
      images: [
        {
          url: ogImage[0].url,
          alt: ogImage[0].alt,
          width: ogImage[0].width,
          height: ogImage[0].height,
        },
      ],
    },
  };
}

export const pageSeo = {
  home: {
    title: "Winnipeg GPR, utility locating & damage prevention",
    description:
      "Family-owned damage prevention in Winnipeg: concrete scanning (GPR), utility locating, locate management, thermography, and sewer camera inspections across Manitoba, Saskatchewan, Western Ontario, and Nunavut.",
    path: "/",
    image: defaultOgImage,
  },
  services: {
    title: "Damage prevention services in Manitoba",
    description:
      "Concrete scanning, utility locating, locate management, thermography, and sewer camera inspections from Structure Scan Inc. in Winnipeg.",
    path: "/services",
    image: {
      url: media.warehouseGrid,
      alt: "Warehouse concrete floor marked with a white scan grid before ground penetrating radar work",
    },
  },
  concreteScanning: {
    title: "Concrete scanning & GPR in Winnipeg",
    description:
      "Non-destructive ground penetrating radar to locate rebar, post-tension cables, conduits, voids, and slab thickness before you cut or core. Based in Winnipeg.",
    path: "/services/concrete-scanning",
    image: {
      url: media.rebarGrid,
      alt: "Rebar grid marked on a concrete slab beside a tablet showing a GPR radargram",
    },
  },
  utilityLocating: {
    title: "Utility locating in Manitoba",
    description:
      "Electromagnetic locating of water, gas, electric, sewer, and telecom—private and public—with surface marks and geo-referenced maps from Structure Scan in Winnipeg.",
    path: "/services/utility-locating",
    image: {
      url: media.map1,
      alt: "Colour-coded utility paths mapped over a commercial parking lot in Manitoba",
    },
  },
  locateManagement: {
    title: "Locate management (LMS) in Winnipeg",
    description:
      "Call Before You Dig tickets, public locates, private sweeps, and GPS-mapped deliverables coordinated by Structure Scan’s locate management service.",
    path: "/services/locate-management",
    image: {
      url: media.warehouseTechs,
      alt: "Two technicians reviewing scan data on a tablet on a marked warehouse slab",
    },
  },
  thermography: {
    title: "Thermography for in-floor heating",
    description:
      "Locate in-floor and radiant heating lines in concrete without cutting or drilling. Thermographic imaging from Structure Scan Inc. in Winnipeg.",
    path: "/services/thermography",
    image: {
      url: media.thermo1,
      alt: "In-floor heating loops marked in red around vehicle lifts on a shop floor",
    },
  },
  sewerCamera: {
    title: "Sewer camera inspections in Winnipeg",
    description:
      "Inspect residential sewer laterals and weeping tile for blockages, cracks, and depth without digging. Pre-renovation and real estate inspections available.",
    path: "/services/sewer-camera",
    image: {
      url: media.sewerCam,
      alt: "Sewer camera view of a drain line showing a root intrusion on screen",
    },
  },
  about: {
    title: "Family-owned damage prevention since 1999",
    description:
      "Founded in Winnipeg in 1999 by Tony Brunette. Family-owned GPR and utility locating across Manitoba, Saskatchewan, Western Ontario, and Nunavut.",
    path: "/about",
    image: defaultOgImage,
  },
  team: {
    title: "Owners and technicians in Winnipeg",
    description:
      "Meet Structure Scan’s Winnipeg team: Michael Brunette (CFO), Allan Gunter (CEO), Janine Gunter (COO), founder Tony Brunette, and lead technicians.",
    path: "/about/team",
    image: {
      url: media.warehouseTechs,
      alt: "Structure Scan technicians reviewing scan data on a warehouse slab",
    },
  },
  contact: {
    title: "Call or request a quote in Winnipeg",
    description: `Call ${site.phoneDisplay}, email ${site.email}, or request a quote. Structure Scan Inc., 7 Valde Avenue, Winnipeg, MB R2C 2K8.`,
    path: "/contact",
    image: {
      url: media.brighter,
      alt: "Structure Scan technician scanning with GPR on the Manitoba Legislative Building grounds",
    },
  },
  privacy: {
    title: "Privacy policy",
    description: `How ${site.name} collects and uses personal information through this website, in line with Canadian privacy law.`,
    path: "/privacy",
    image: {
      url: media.logoOval,
      alt: `${site.name} logo`,
    },
  },
} as const satisfies Record<string, PageMetaInput>;
