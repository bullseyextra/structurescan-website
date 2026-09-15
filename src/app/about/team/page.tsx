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
import { DarkBand } from "@/components/VisualBands";
import { pageMeta } from "@/lib/seo";
import { leadership, media, technicians } from "@/lib/site";

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
        title="The crew behind the scans"
        lead="Owners, founder, and the technicians who scan and locate. Family-owned, Winnipeg-based, and a little more fun than the average damage-prevention shop."
        imageSrc={media.warehouseTechs}
        imageAlt="Technicians reviewing scan data on a warehouse slab"
      />
      <Section>
        <Container>
          <MediaSplit
            imageSrc={media.winnipeg}
            imageAlt="Technician with a GPR cart on the Manitoba Legislative Building grounds"
          >
            <Eyebrow>Family first</Eyebrow>
            <Heading className="text-4xl">
              Hobby farms, archery, dance recitals, and GPR
            </Heading>
            <Prose>
              <p className="mt-5">
                The bios below are the real ones. We like outdoor projects,
                kids’ sports, and getting the scan right the first time. If you
                call the office, you’re talking to this group—not a call
                centre.
              </p>
              <p>
                Michael came up under his father, Tony. Allan learned the
                trade after coming in from outside the industry. Janine keeps
                the office and the staff moving. Tony is still Founder, still
                in the story, and still the person who started this shop in
                1999.
              </p>
            </Prose>
          </MediaSplit>
        </Container>
      </Section>
      <Section className="bg-cream">
        <Container>
          <Eyebrow>Leadership</Eyebrow>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {leadership.map((person) => (
              <article
                key={person.name}
                className="rounded-3xl border border-line bg-paper p-6"
              >
                <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                  {person.role}
                </p>
                <Heading as="h2" className="mt-2 text-3xl">
                  {person.name}
                </Heading>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {person.bio}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <DarkBand
        eyebrow="Field team"
        title="The people on the slab and in the gravel"
        imageSrc={media.gprJobs}
        imageAlt="Lead field work: Structure Scan technician with a GPR cart"
      >
        <p>
          If you have a safety question, Max is the Safety Officer. If you have
          a GPR question, start with Andrew. Locates, Ryan. They are the ones
          who will be on your site with the cart, the wand, and the paint.
        </p>
      </DarkBand>
      <Section>
        <Container>
          <ul className="grid gap-4 md:grid-cols-3">
            {technicians.map((person) => (
              <li
                key={person.name}
                className="rounded-3xl bg-cream p-6 card-shadow"
              >
                <Heading as="h3" className="text-2xl">
                  {person.name}
                </Heading>
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
