import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/PageHero";
import { Container, Eyebrow, Section } from "@/components/LayoutBits";
import { pageMeta } from "@/lib/seo";
import { leadership, technicians } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Team",
  description:
    "Meet Structure Scan’s owners, founder, and lead technicians in Winnipeg: Michael Brunette, Allan Gunter, Janine Gunter, Tony Brunette, and the field team.",
  path: "/about/team",
});

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="People"
        title="The team"
        lead="Owners, founder, and the technicians who scan and locate. Family-owned, Winnipeg-based."
      />
      <Section>
        <Container>
          <Eyebrow>Leadership</Eyebrow>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {leadership.map((person) => (
              <article key={person.name} className="border border-line bg-cream p-6">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                  {person.role}
                </p>
                <h2 className="font-display mt-2 text-3xl font-bold uppercase tracking-wide">
                  {person.name}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">{person.bio}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-cream">
        <Container>
          <Eyebrow>Field team</Eyebrow>
          <h2 className="font-display mt-3 text-4xl font-bold uppercase tracking-wide">
            Technicians
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {technicians.map((person) => (
              <li key={person.name} className="border border-line bg-paper p-6">
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide">
                  {person.name}
                </h3>
                <p className="mt-2 text-sm text-muted">{person.role}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
