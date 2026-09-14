import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    image: `${site.url}/logo.svg`,
    url: site.url,
    telephone: site.phoneTel,
    email: site.email,
    foundingDate: String(site.founded),
    founder: {
      "@type": "Person",
      name: site.founder,
    },
    slogan: site.tagline,
    description: site.description,
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
    areaServed: site.serviceArea.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    knowsAbout: [
      "Ground penetrating radar",
      "Concrete scanning",
      "Utility locating",
      "Locate management",
      "Thermographic imaging",
      "Sewer camera inspection",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
