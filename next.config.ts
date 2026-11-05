import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/concrete-scanning",
        destination: "/services/concrete-scanning",
        permanent: true,
      },
      {
        source: "/concrete-scanning-services",
        destination: "/services/concrete-scanning",
        permanent: true,
      },
      {
        source: "/utility-locating",
        destination: "/services/utility-locating",
        permanent: true,
      },
      {
        source: "/utility-locating-service-winnipeg",
        destination: "/services/utility-locating",
        permanent: true,
      },
      {
        source: "/damage-prevention-services/locate-management-service",
        destination: "/services/locate-management",
        permanent: true,
      },
      {
        source: "/locate",
        destination: "/services/locate-management",
        permanent: true,
      },
      {
        source: "/thermography",
        destination: "/services/thermography",
        permanent: true,
      },
      {
        source: "/sewer-camera",
        destination: "/services/sewer-camera",
        permanent: true,
      },
      {
        source: "/about-structure-scan",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/company-profile",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/team",
        destination: "/about/team",
        permanent: true,
      },
      {
        source: "/certification",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/certifications",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about/certifications",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about/certification",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/gpr",
        destination: "/services/concrete-scanning",
        permanent: true,
      },
      {
        source: "/gpr-equipment",
        destination: "/services/concrete-scanning",
        permanent: true,
      },
      {
        source: "/ground-penetrating-radar",
        destination: "/services/concrete-scanning",
        permanent: true,
      },
      {
        source: "/contact-us-structure-scan",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/privacypolicy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/damage-prevention-services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/damage-prevention-specialists",
        destination: "/",
        permanent: true,
      },
      {
        source: "/gpr-concrete-analysis",
        destination: "/",
        permanent: true,
      },
      {
        source: "/gpr-concrete-inspection",
        destination: "/",
        permanent: true,
      },
      {
        source: "/gpr-benefits",
        destination: "/services/concrete-scanning",
        permanent: true,
      },
      {
        source: "/gpr-benefits/gpr-report-2",
        destination: "/services/concrete-scanning",
        permanent: true,
      },
      {
        source: "/gpr-structure-scan/gpr-scan-hydro-generating-station-2",
        destination: "/services/concrete-scanning",
        permanent: true,
      },
      {
        source: "/construction-tenders",
        destination: "/services/concrete-scanning",
        permanent: true,
      },
      {
        source: "/gpr-bridge-decks",
        destination: "/services/concrete-scanning",
        permanent: true,
      },
      {
        source: "/tender-bridge-repair",
        destination: "/services/concrete-scanning",
        permanent: true,
      },
      {
        source: "/damage-prevention-canada/logo-mcga",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/damage-prevention-canada/logo-boma",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/reviews",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/reviews/google-review-icon",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/safety-programs",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/whoisrsesponsible",
        destination: "/services/locate-management",
        permanent: true,
      },
      {
        source: "/how-to-read-a-locate-sheet",
        destination: "/services/locate-management",
        permanent: true,
      },
      {
        source: "/plan-scan-save",
        destination: "/services/locate-management",
        permanent: true,
      },
      {
        source: "/dig-safe-canada",
        destination: "/services/utility-locating",
        permanent: true,
      },
      {
        source: "/locating-the-top-of-the-world",
        destination: "/services/utility-locating",
        permanent: true,
      },
      {
        source: "/private-utility-locator",
        destination: "/services/utility-locating",
        permanent: true,
      },
      {
        source: "/jobs",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/gpr-insider",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/boma2022",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
