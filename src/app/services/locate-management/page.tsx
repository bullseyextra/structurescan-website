import type { Metadata } from "next";
import { Breadcrumbs, CtaBand, PageHero } from "@/components/PageHero";
import {
  Container,
  Eyebrow,
  Heading,
  MediaSplit,
  Prose,
  Section,
} from "@/components/LayoutBits";
import { DarkBand, ProofGallery } from "@/components/VisualBands";
import { pageMeta } from "@/lib/seo";
import { mapGallery } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Locate management",
  description:
    "Call Before You Dig ticket coordination, public locates, private sweeps, and GPS-mapped deliverables from Structure Scan’s locate management service.",
  path: "/services/locate-management",
});

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
      <PageHero
        eyebrow="Locate management system"
        title="We’ll wrangle the locates"
        lead="We coordinate Call Before You Dig tickets, public locates, and private sweeps, then deliver GPS-mapped information your crew can actually use."
        imageSrc="/images/aerial-locate.jpg"
        imageAlt="Aerial view of a commercial site with colour-coded utility paths overlaid"
      />
      <Section>
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { label: "Locate management" },
            ]}
          />
          <div className="mt-10">
            <MediaSplit
              imageSrc="/images/map-1.jpg"
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
          </div>
        </Container>
      </Section>
      <DarkBand
        eyebrow="How it works"
        title="One coordinated locate file"
        imageSrc="/images/painted-locates.jpg"
        imageAlt="Painted utility locates on a concrete pad"
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
