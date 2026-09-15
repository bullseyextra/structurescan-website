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
  title: "Sewer camera inspections",
  description:
    "Inspect residential sewer laterals and weeping tile for blockages, cracks, and depths—without digging. Pre-renovation and real estate inspections available.",
  path: "/services/sewer-camera",
});

export default function SewerCameraPage() {
  return (
    <>
      <PageHero
        eyebrow="Sewer & weeping tile"
        title="A camera in the line, not a hole in the yard"
        lead="Inspect residential drain lines and weeping tile systems without digging or disruption—so you know whether the problem is roots, a crack, a belly, or something else before anyone excavates."
        imageSrc={media.sewerCam}
        imageAlt="Trenchless sewer camera inspection of an underground drain line"
      />
      <Section>
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { label: "Sewer camera" },
            ]}
          />
          <div className="mt-10">
            <MediaSplit
              imageSrc={media.sewerSee}
              imageAlt="Sewer camera views showing pipe interiors, debris, and standing water"
            >
              <Eyebrow>Residential work</Eyebrow>
              <Heading className="text-4xl">
                Laterals, weeping tile, and peace of mind
              </Heading>
              <Prose>
                <p className="mt-5">
                  A camera inspection is a non-destructive way to evaluate
                  underground drainage before you commit to excavation, a
                  renovation, or a purchase. Handy for homeowners, real estate
                  inspections, and pre-reno checks.
                </p>
                <p>
                  Slow drains, backups, and dampness around a foundation all
                  have more than one possible cause. Looking inside the line
                  tells you whether you are dealing with roots, grease, a
                  collapsed section, an offset joint, or a weeping tile system
                  that is not doing its job—and it gives a location and depth
                  so excavation, if it is needed, is a targeted repair instead
                  of a treasure hunt.
                </p>
              </Prose>
            </MediaSplit>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>What we can detect</Eyebrow>
              <ul className="mt-5 space-y-3">
                {[
                  "Blockages from tree roots, grease, debris, or collapsed sections",
                  "Cracks, offsets, corrosion, or structural damage",
                  "Precise locations and depths—pinpointing problems before excavation",
                  "Causes of slow drains, backups, or water seepage around foundations",
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border-l-4 border-brand bg-cream px-4 py-3 text-sm leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow>Common residential uses</Eyebrow>
              <ul className="mt-5 space-y-3">
                {[
                  "Locating and tracing sewer lateral lines from house to main",
                  "Inspecting and mapping weeping tile (foundation drainage) systems",
                  "Diagnosing sources of foundation water infiltration or dampness",
                  "Pre-renovation checks and real estate inspections",
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border-l-4 border-sand bg-cream px-4 py-3 text-sm leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
      <DarkBand
        eyebrow="Before you dig"
        title="Eliminate the guesswork in the pipe"
        imageSrc={media.sewerCam}
        imageAlt="Camera inspection of a residential sewer lateral"
      >
        <p>
          The camera is for when the question is inside the line. If the
          question is beside the line—other buried utilities you might hit on
          the way down—ask for a locate on the same visit. We would rather
          mark both than watch a repair turn into a second strike.
        </p>
      </DarkBand>
      <CtaBand />
    </>
  );
}
