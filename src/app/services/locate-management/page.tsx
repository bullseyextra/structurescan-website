import type { Metadata } from "next";
import { Breadcrumbs, CtaBand, PageHero } from "@/components/PageHero";
import { Container, Eyebrow, Section } from "@/components/LayoutBits";
import { pageMeta } from "@/lib/seo";

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
        title="From tickets to GPS-mapped results"
        lead="We coordinate Call Before You Dig tickets, public locates, and private sweeps, then deliver GPS-mapped information your crew can actually use."
        imageSrc="/images/utility-trench.jpg"
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
            <Eyebrow>The problem we take off your plate</Eyebrow>
            <h2 className="font-display mt-3 max-w-3xl text-4xl font-bold uppercase leading-none tracking-wide">
              Locate chaos is a project risk
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {problems.map((item) => (
                <article key={item.title} className="border border-line bg-cream p-6">
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <Section className="bg-cream">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>How it works</Eyebrow>
            <h2 className="font-display mt-3 text-4xl font-bold uppercase leading-none tracking-wide">
              One coordinated locate file
            </h2>
            <ol className="mt-6 space-y-4">
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
                  <p className="pt-1 leading-relaxed text-muted">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <aside className="border border-line bg-paper p-6">
            <h3 className="font-display text-2xl font-bold uppercase tracking-wide">
              Built for the field
            </h3>
            <p className="mt-3 leading-relaxed text-muted">
              Structure Scan has been producing GPS-referenced locate
              information for years. The locate management system is how we turn
              that work into a single, usable package instead of a folder of
              mismatched files.
            </p>
          </aside>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
