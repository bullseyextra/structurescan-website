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
import { DarkBand } from "@/components/VisualBands";
import { pageMeta } from "@/lib/seo";
import { media } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Thermographic imaging",
  description:
    "Locate in-floor and radiant heating lines in concrete without cutting or drilling, using thermographic imaging from Structure Scan Inc.",
  path: "/services/thermography",
});

const points = [
  {
    title: "Prevents costly damage",
    body: "Pinpoint heating lines so you can cut or core concrete without hitting them.",
  },
  {
    title: "Non-invasive",
    body: "Results without drilling or breaking the slab, so the job site stays intact.",
  },
  {
    title: "Clear layouts",
    body: "Straightforward heating line layouts you can proceed from without guesswork.",
  },
  {
    title: "Safer work",
    body: "Lower the risk of damaging in-floor heating systems before renovation or core drilling.",
  },
];

export default function ThermographyPage() {
  return (
    <>
      <PageHero
        eyebrow="Non-invasive inspection"
        title="Find the heat lines first"
        lead="Locate in-floor heating lines embedded in concrete slabs without cutting, drilling, or disruption—then mark the layout where the saw will actually run."
        imageSrc={media.thermo1}
        imageAlt="Concrete shop floor with in-floor heating paths marked in red around vehicle lifts"
      />
      <Section>
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { label: "Thermography" },
            ]}
          />
          <div className="mt-10">
            <MediaSplit
              imageSrc={media.thermo2}
              imageAlt="Red layout marks showing radiant heating lines under a vehicle lift"
            >
              <Eyebrow>In-floor heat</Eyebrow>
              <Heading className="text-4xl">
                See the warm lines before you cut
              </Heading>
              <Prose>
                <p className="mt-5">
                  Structure Scan uses non-invasive thermographic imaging to
                  find in-floor and radiant heating lines in concrete. If you
                  need to cut or core a slab that may contain heat pipes, this
                  is the way to see them first—without opening the floor to
                  “check.”
                </p>
                <p>
                  The useful part is not a colourful picture on a tablet. It is
                  a layout you can work from: lines marked on the slab so the
                  people with the saws know where the loops run, including
                  around equipment pads, lifts, and the messy parts of a shop
                  floor where a drawing from ten years ago no longer matches
                  reality.
                </p>
                <p>
                  Pair it with GPR when you also need rebar, post-tension, or
                  conduits in the same slab. Heat lines are one question.
                  Everything else in the concrete is another. We can help you
                  decide which service—or both—belongs on the ticket.
                </p>
              </Prose>
            </MediaSplit>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {points.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-line bg-cream p-6"
              >
                <Heading as="h2" className="text-xl">
                  {item.title}
                </Heading>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <DarkBand
        eyebrow="When to call"
        title="Renovation, core drilling, and any slab that might be warm"
        imageSrc={media.inFloorHeat}
        imageAlt="In-floor heating layout marked on a concrete slab"
      >
        <p>
          Thermography is the right first call when the known risk is in-floor
          heat. If the slab is a mystery in every other way too—rebar layout,
          conduits, thickness—ask for concrete scanning on the same visit. One
          crew, two looks, fewer surprises.
        </p>
      </DarkBand>
      <CtaBand />
    </>
  );
}
