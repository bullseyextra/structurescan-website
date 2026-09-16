import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CtaBand, PageHero } from "@/components/PageHero";
import {
  Container,
  Eyebrow,
  Heading,
  MediaSplit,
  Photo,
  Prose,
  Section,
} from "@/components/LayoutBits";
import { DarkBand, ProofGallery } from "@/components/VisualBands";
import { pageMeta, pageSeo } from "@/lib/seo";
import { mapGallery, media } from "@/lib/site";

export const metadata: Metadata = pageMeta(pageSeo.locateManagement);

const problems = [
  {
    title: "Chaotic, mismatched data",
    body: "Public locates arrive as scattered PDFs, emails, and sketches that rarely align, forcing guesswork about what’s underground.",
  },
  {
    title: "Paperwork overload",
    body: "Tickets, reviews, and tracking consume hours, introduce errors, delay projects, and risk fines.",
  },
  {
    title: "Unreliable marks",
    body: "Inaccurate, vague, or confusing locates put crews at risk and invite utility strikes.",
  },
  {
    title: "Short-lived locates and delays",
    body: "Tickets expire quickly. Marks fade or get destroyed, triggering re-submissions and downtime.",
  },
];

export default function LocateManagementPage() {
  return (
    <>
      <ServiceJsonLd slug="locate-management" />
      <PageHero
        eyebrow="Locate management system"
        title="We’ll wrangle the locates"
        lead="We coordinate Call Before You Dig tickets, public locates, and private sweeps, then deliver GPS-mapped information your crew can actually use."
        imageSrc={media.warehouseTechs}
        imageAlt="Technicians reviewing scan data on a warehouse slab"
      />
      <Section>
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/services/locate-management", label: "Locate management" },
            ]}
          />
          <div className="mt-10">
            <MediaSplit
              imageSrc={media.map1}
              imageAlt="Utility map of a large commercial parking lot with colour-coded services"
            >
              <Eyebrow>The problem we take off your plate</Eyebrow>
              <Heading className="text-4xl">
                Locate chaos is a project risk
              </Heading>
              <Prose>
                <p className="mt-5">
                  You shouldn’t need a second full-time job just to keep
                  tickets, PDFs, and paint marks in the same conversation.
                  Public locates are necessary. They are also often incomplete
                  for private plant, and they rarely arrive as one clean
                  drawing. That’s the scramble we handle.
                </p>
                <p>
                  Structure Scan has been producing GPS-referenced locate
                  information for years. Locate management is how we turn that
                  field work plus the public process into a single, usable
                  package instead of a folder of mismatched files.
                </p>
              </Prose>
            </MediaSplit>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {problems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-line bg-cream p-6"
                >
                  <Heading as="h3" className="text-xl">
                    {item.title}
                  </Heading>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
            <figure className="mt-12 overflow-hidden rounded-3xl bg-ink p-4 sm:p-8">
              <Photo
                src={media.lmsFlow}
                alt="Locate Management System step-by-step flow from ticket submission through compilation and delivery"
                className="mx-auto h-auto w-full"
              />
              <figcaption className="mt-4 text-center text-sm text-cream/75">
                Ticket to delivery: how a locate management file is built
              </figcaption>
            </figure>
          </div>
        </Container>
      </Section>
      <DarkBand
        eyebrow="How it works"
        title="One coordinated locate file"
        imageSrc={media.map3}
        imageAlt="GPS-mapped utilities across a commercial parking lot"
        reverse
      >
        <ol className="space-y-4">
          {[
            "Call Before You Dig ticket coordination so public utilities are requested and tracked.",
            "Public locates gathered and reviewed against the work area.",
            "Private sweeps for services the public process does not cover.",
            "GPS-mapped deliverables that document what was found, where, and in a format you can keep.",
          ].map((step, index) => (
            <li key={step} className="flex gap-4">
              <span className="font-display text-2xl font-bold text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="pt-1 leading-relaxed text-cream/80">{step}</p>
            </li>
          ))}
        </ol>
      </DarkBand>
      <Section className="bg-cream">
        <Container>
          <Eyebrow>Utility map gallery</Eyebrow>
          <Heading className="mt-3 text-4xl">
            The maps that replace the messy inbox
          </Heading>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            Parking lots, building envelopes, and larger corridors—colour-coded
            paths you can share with the superintendent, the engineer, and the
            next contractor.
          </p>
          <div className="mt-8">
            <ProofGallery items={mapGallery} />
          </div>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
