import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/PageHero";
import { Container, Section } from "@/components/LayoutBits";
import { ServiceCard } from "@/components/ServiceCard";
import { pageMeta } from "@/lib/seo";
import { services } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Damage prevention services",
  description:
    "Concrete scanning, utility locating, locate management, thermographic imaging, and sewer camera inspections from Structure Scan Inc.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="All services"
        title="Five ways to see what’s below"
        lead="Structure Scan provides concrete scanning, utility locating, locate management, thermographic imaging, and sewer camera inspections. Choose a service for methods, deliverables, and who it helps."
        imageSrc="/images/industrial-interior.jpg"
      />
      <Section>
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
