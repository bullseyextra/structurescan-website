import type { Metadata } from "next";
import { Breadcrumbs, CtaBand, PageHero } from "@/components/PageHero";
import { Container, Section } from "@/components/LayoutBits";
import { pageMeta } from "@/lib/seo";

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
        title="Thermographic imaging"
        lead="Locate in-floor heating lines embedded in concrete slabs without cutting, drilling, or disruption."
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
          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-muted">
            Structure Scan uses non-invasive thermographic imaging to find
            in-floor and radiant heating lines in concrete. If you need to cut
            or core a slab that may contain heat pipes, this is the way to see
            them first.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {points.map((item) => (
              <article key={item.title} className="border border-line bg-cream p-6">
                <h2 className="font-display text-xl font-bold uppercase tracking-wide">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
