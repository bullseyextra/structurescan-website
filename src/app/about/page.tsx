import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand, PageHero } from "@/components/PageHero";
import {
  Container,
  Eyebrow,
  Heading,
  MediaSplit,
  Section,
} from "@/components/LayoutBits";
import { pageMeta } from "@/lib/seo";
import { equipment, site, values } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "About Structure Scan",
  description:
    "Founded in Winnipeg in 1999 by Tony Brunette. Family-owned GPR and utility locating serving Manitoba, Saskatchewan, Western Ontario, and Nunavut.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A Winnipeg family company, built on damage prevention"
        lead="Founded in 1999 by Tony Brunette. Still family-owned. Still glad to show crews what’s below before they dig, cut, or drill."
        imageSrc="/images/gpr-winnipeg.jpg"
      />
      <Section>
        <Container>
          <MediaSplit
            imageSrc="/images/sunny-crew.jpg"
            imageAlt="Crew standing together on a sunlit construction deck"
          >
            <Eyebrow>Story</Eyebrow>
            <Heading className="text-4xl">
              From one technician’s shop to a family company
            </Heading>
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                Structure Scan Inc. was founded in {site.founded} by Tony
                Brunette in Winnipeg. What began as a small venture has become a
                trusted name in ground penetrating radar and utility locating.
              </p>
              <p>
                From the start, the work was the same: high-quality,
                non-invasive subsurface services with integrity, attention to
                detail, and a personal touch. At a time when accurate underground
                information was often incomplete, Tony saw the need for damage
                prevention that construction professionals could depend on.
              </p>
              <p>
                That company is now owned by Tony’s son, Michael Brunette, and
                nephew, Allan Gunter. After Tony sold the company to them,
                Michael and Allan have brought their own experience to the
                work—while staying committed to the values Tony established.
                Janine Gunter is COO. Tony remains Founder.
              </p>
              <p>
                We serve {site.serviceArea.join(", ")}. We still approach every
                project with care, and we still aim to be honest,
                straightforward, and easy to work with.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/about/team" variant="outline">
                Meet the crew
              </ButtonLink>
              <ButtonLink href="/about/certifications" variant="outline">
                Certifications
              </ButtonLink>
            </div>
          </MediaSplit>
        </Container>
      </Section>
      <Section className="bg-cream">
        <Container className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-paper p-6 sm:p-8">
            <Heading as="h3" className="text-2xl">
              Mission
            </Heading>
            <p className="mt-3 leading-relaxed text-muted">
              Protect people, property, and infrastructure through accurate,
              non-invasive utility locating and GPR services. Prevent damage
              and downtime by combining technology with expert insight—and by
              being honest, straightforward, and easy to work with.
            </p>
          </div>
          <div className="rounded-3xl bg-paper p-6 sm:p-8">
            <Heading as="h3" className="text-2xl">
              Vision
            </Heading>
            <p className="mt-3 leading-relaxed text-muted">
              To be the industry leader in safe, reliable utility locating and
              GPR services—setting the standard for trust, innovation, and
              damage prevention across the regions we serve.
            </p>
          </div>
        </Container>
      </Section>
      <Section className="bg-sand">
        <Container>
          <Eyebrow>Values</Eyebrow>
          <Heading className="mt-3 text-4xl">How we like to work</Heading>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {values.map((item) => (
              <article
                key={item.name}
                className="rounded-3xl bg-cream p-5 card-shadow"
              >
                <Heading as="h3" className="text-xl">
                  {item.name}
                </Heading>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <MediaSplit
            imageSrc="/images/equipment-gpr.jpg"
            imageAlt="Handheld ground penetrating radar scanner and tablet showing a concrete scan"
            reverse
          >
            <Eyebrow>Equipment</Eyebrow>
            <Heading className="text-4xl">
              Proceq GPR, GPS-referenced locates, careful marks
            </Heading>
            <p className="mt-5 leading-relaxed text-muted">
              Technicians work with Proceq GPR equipment. For utility locating,
              GPS referenced information is a core part of how we deliver maps.
              We also use environmentally safer marking paints so the work on
              the ground matches the care we take below it.
            </p>
          </MediaSplit>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {equipment.map((item) => (
              <article
                key={item.name}
                className="rounded-3xl border border-line bg-cream p-5"
              >
                <Heading as="h3" className="text-xl">
                  {item.name}
                </Heading>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.use}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand title="Talk to the people who will do the work" />
    </>
  );
}
