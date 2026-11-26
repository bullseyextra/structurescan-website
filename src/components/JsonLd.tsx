import { canonicalUrl } from "@/lib/seo";
import { media, serviceBySlug, services, site, type ServiceSlug } from "@/lib/site";

export type FaqItem = {
  question: string;
  answer: string;
};

export function JsonLd() {
  const businessId = `${site.url}/#business`;
  const websiteId = `${site.url}/#website`;
  const logoUrl = new URL(media.logo, site.url).toString();
  const heroUrl = new URL(media.winnipeg, site.url).toString();

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": businessId,
        name: site.name,
        legalName: site.name,
        url: site.url,
        image: [logoUrl, heroUrl],
        logo: logoUrl,
        telephone: site.phoneTel,
        email: site.email,
        foundingDate: String(site.founded),
        slogan: site.tagline,
        description: site.description,
        founder: {
          "@type": "Person",
          name: site.founder,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          postalCode: site.address.postal,
          addressCountry: "CA",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.lat,
          longitude: site.geo.lng,
        },
        hasMap: `https://www.openstreetmap.org/?mlat=${site.geo.lat}&mlon=${site.geo.lng}#map=16/${site.geo.lat}/${site.geo.lng}`,
        foundingLocation: {
          "@type": "Place",
          name: "Winnipeg, Manitoba",
          address: {
            "@type": "PostalAddress",
            addressLocality: site.address.city,
            addressRegion: site.address.region,
            addressCountry: "CA",
          },
        },
        areaServed: site.serviceArea.map((name) => ({
          "@type": "AdministrativeArea",
          name,
        })),
        contactPoint: {
          "@type": "ContactPoint",
          telephone: site.phoneTel,
          email: site.email,
          contactType: "customer service",
          areaServed: "CA",
          availableLanguage: ["en"],
        },
        knowsAbout: [
          "Ground penetrating radar",
          "Concrete scanning",
          "Utility locating",
          "Locate management",
          "Thermographic imaging",
          "Sewer camera inspection",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Damage prevention services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.name,
              description: service.summary,
              url: new URL(service.href, site.url).toString(),
              provider: { "@id": businessId },
              areaServed: site.serviceArea.map((name) => ({
                "@type": "AdministrativeArea",
                name,
              })),
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: site.name,
        url: site.url,
        description: site.description,
        inLanguage: "en-CA",
        publisher: { "@id": businessId },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceJsonLd({ slug }: { slug: ServiceSlug }) {
  const service = serviceBySlug(slug);
  if (!service) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    alternateName: service.cardTitle,
    description: service.summary,
    url: new URL(service.href, site.url).toString(),
    image: new URL(service.image, site.url).toString(),
    provider: { "@id": `${site.url}/#business` },
    areaServed: site.serviceArea.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    serviceType: service.cardTitle,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const placeAreas = [
  { "@type": "City", name: "Winnipeg" },
  { "@type": "City", name: "Selkirk" },
  { "@type": "City", name: "Steinbach" },
  { "@type": "City", name: "Portage la Prairie" },
  { "@type": "City", name: "Brandon" },
  { "@type": "AdministrativeArea", name: "Manitoba" },
  { "@type": "AdministrativeArea", name: "Saskatchewan" },
  { "@type": "AdministrativeArea", name: "Ontario" },
  { "@type": "AdministrativeArea", name: "Nunavut" },
  { "@type": "AdministrativeArea", name: "Northwest Territories" },
] as const;

export function UtilityLocatingJsonLd({
  faqs,
}: {
  faqs: readonly FaqItem[];
}) {
  const url = `${site.url}/services/utility-locating`;
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: "Private utility locates",
    serviceType: "Utility locating",
    url,
    provider: { "@id": `${site.url}/#business` },
    areaServed: placeAreas,
    offers: {
      "@type": "Offer",
      name: "Regular-hours minimum callout",
      description: "Regular-hours minimum callout, plus GST",
      price: "300",
      priceCurrency: "CAD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "300",
        priceCurrency: "CAD",
        valueAddedTaxIncluded: false,
        description: "Regular-hours minimum callout, plus GST",
      },
    },
  };
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}

export function SewerCameraJsonLd({ faqs }: { faqs: readonly FaqItem[] }) {
  const url = `${site.url}/services/sewer-camera`;
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: "Sewer camera and weeping tile inspections",
    serviceType: "Sewer camera inspection",
    url,
    provider: { "@id": `${site.url}/#business` },
    areaServed: placeAreas,
    offers: {
      "@type": "Offer",
      name: "Regular-hours minimum callout",
      description: "Regular-hours minimum callout, plus GST",
      price: "300",
      priceCurrency: "CAD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "300",
        priceCurrency: "CAD",
        valueAddedTaxIncluded: false,
        description: "Regular-hours minimum callout, plus GST",
      },
    },
  };
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}

export function UtilityColoursJsonLd({
  faqs,
}: {
  faqs: readonly FaqItem[];
}) {
  const url = `${site.url}/utility-codes-colours`;
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#webpage`,
    headline: "Utility Locate Colours and Codes in Manitoba | Structure Scan",
    description:
      "What each paint and flag colour means on a utility locate in Manitoba: red, yellow, orange, blue, green, purple, pink and white.",
    url,
    mainEntityOfPage: url,
    datePublished: "2026-11-23",
    dateModified: "2026-11-23",
    image: new URL(media.paintedLocates, site.url).toString(),
    publisher: {
      "@id": `${site.url}/#business`,
      name: site.name,
    },
    provider: {
      "@id": `${site.url}/#business`,
    },
  };
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}

export function AdvancedGprJsonLd({
  faqs,
}: {
  faqs: readonly FaqItem[];
}) {
  const url = `${site.url}/services/advanced-gpr`;
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Advanced GPR condition assessments",
    serviceType: "Bridge deck and roadway GPR condition assessment",
    description:
      "GPR bridge deck and road assessments with cover maps, deterioration maps and a written report your engineer can use. Parkades and large slabs too.",
    url,
    provider: { "@id": `${site.url}/#business` },
    areaServed: [
      "Manitoba",
      "Saskatchewan",
      "Ontario",
      "Nunavut",
      "Northwest Territories",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Advanced GPR services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bridge deck condition assessment",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Roadway and pavement GPR",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Parkade and large-slab GPR",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Corrosion and deterioration assessment",
          },
        },
      ],
    },
  };
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${site.url}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${site.url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Advanced GPR",
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  );
}

export function ServiceFaqJsonLd({
  name,
  description,
  path,
  faqs,
}: {
  name: string;
  description: string;
  path: string;
  faqs: readonly FaqItem[];
}) {
  const url = canonicalUrl(path);
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name,
        description,
        url,
        serviceType: "Concrete scanning",
        provider: { "@id": `${site.url}/#business` },
        areaServed: site.serviceArea.map((area) => ({
          "@type": "AdministrativeArea",
          name: area,
        })),
      },
      {
        "@type": "FAQPage",
        url,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
