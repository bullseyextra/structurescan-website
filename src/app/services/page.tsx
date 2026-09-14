import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/PageHero";
import {
  Container,
  Eyebrow,
  Heading,
  MediaSplit,
  Section,
} from "@/components/LayoutBits";
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
        lead="Concrete scanning, utility locating, locate management, thermographic imaging, and sewer camera inspections. Pick a service for methods, deliverables, and who it helps."
        imageSrc="/images/sunny-crew.jpg"
      />
      <Section>
        <Container>
          <MediaSplit
            imageSrc="/images/worker-energy.jpg"
            imageAlt="Construction worker in an orange hard hat on a sunny job site"
          >
            <Eyebrow>How to choose</Eyebrow>
            <Heading className="text-4xl">
              Not sure which service you need? That’s a fair question.
            </Heading>
            <p className="mt-5 leading-relaxed text-muted">
              Cutting or coring concrete? Start with GPR. Digging? Start with
              locates. Heating lines in a slab? Thermography. A drain you don’t
              want to excavate on a hunch? Camera. Call if you want a human to
              sort it out with you.
            </p>
          </MediaSplit>
        </Container>
      </Section>
      <Section className="bg-cream">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
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
