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
        destination: "/about/certifications",
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
    ];
  },
};

export default nextConfig;
