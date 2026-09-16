import { media, serviceBySlug, services, site, type ServiceSlug } from "@/lib/site";

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
