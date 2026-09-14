import type { Metadata } from "next";
import { Breadcrumbs, CtaBand, PageHero } from "@/components/PageHero";
import { Container, Eyebrow, Section } from "@/components/LayoutBits";
import { pageMeta } from "@/lib/seo";

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
        title="Sewer camera inspections"
        lead="Inspect residential sewer drain lines and weeping tile systems without digging or disruption."
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
                    className="border-l-2 border-brand bg-cream px-4 py-3 text-sm leading-relaxed"
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
                    className="border-l-2 border-ink bg-cream px-4 py-3 text-sm leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-10 max-w-3xl leading-relaxed text-muted">
            A camera inspection is a non-destructive way to evaluate underground
            drainage before you commit to excavation, a renovation, or a
            purchase.
          </p>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
