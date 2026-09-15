import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/PageHero";
import {
  Container,
  Eyebrow,
  Heading,
  MediaSplit,
  Prose,
  Section,
} from "@/components/LayoutBits";
import { ServiceCard } from "@/components/ServiceCard";
import { DarkBand, ProofGallery, ServiceRibbon } from "@/components/VisualBands";
import { pageMeta } from "@/lib/seo";
import { fieldGallery, media, services } from "@/lib/site";

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
        imageSrc={media.warehouseGrid}
        imageAlt="Warehouse floor gridded for a concrete scan"
      />
      <ServiceRibbon />
      <Section>
        <Container>
          <MediaSplit
            imageSrc={media.rebarGrid}
            imageAlt="Interior slab marked after a ground penetrating radar scan"
          >
            <Eyebrow>How to choose</Eyebrow>
            <Heading className="text-4xl">
              Not sure which service you need? That’s a fair question.
            </Heading>
            <Prose>
              <p className="mt-5">
                Cutting or coring concrete? Start with GPR. Digging? Start with
                locates. Heating lines in a slab? Thermography. A drain you
                don’t want to excavate on a hunch? Camera. If the job is “all of
                the above, and also the tickets are a mess,” that’s locate
                management plus the field work.
              </p>
              <p>
                We talk to contractors and engineers the same way: what’s the
                work, where is it, and what do you need in your hand when we
                leave—marks, maps, imaging, or a camera recording. Call if you
                want a human to sort it out with you.
              </p>
            </Prose>
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
      <DarkBand
        eyebrow="The point of the work"
        title="A picture the crew can use, not a folder they ignore"
        imageSrc={media.warehouseTechs}
        imageAlt="Technicians reviewing locate and scan data on site"
      >
        <p>
          Damage prevention only works if the next person on site can see it.
          That’s why every service is paired with a mark, a map, a scan image,
          or a camera view—something you can point at when the saw, the bucket,
          or the plumber shows up.
        </p>
      </DarkBand>
      <Section>
        <Container>
          <Eyebrow>From the field</Eyebrow>
          <Heading className="mt-3 text-4xl">What the work looks like</Heading>
          <div className="mt-8">
            <ProofGallery items={fieldGallery} />
          </div>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
