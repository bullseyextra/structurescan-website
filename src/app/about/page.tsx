import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand, PageHero } from "@/components/PageHero";
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
import { equipment, fieldGallery, site, values } from "@/lib/site";

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
        imageSrc="/images/gpr-legislature.jpg"
        imageAlt="Structure Scan technician with a GPR cart on the Manitoba Legislative Building grounds"
      />
      <Section>
        <Container>
          <MediaSplit
            imageSrc="/images/gpr-bridge.jpg"
            imageAlt="Two technicians standing at a marked concrete bridge abutment"
          >
            <Eyebrow>Story</Eyebrow>
            <Heading className="text-4xl">
              From one technician’s shop to a family company
            </Heading>
            <Prose>
              <p className="mt-6">
                Structure Scan Inc. was founded in {site.founded} by Tony
                Brunette in Winnipeg. What began as a small venture has become a
                trusted name in ground penetrating radar and utility locating
                across {site.serviceArea.join(", ")}.
              </p>
              <p>
                From the start, the work was the same: high-quality,
                non-invasive subsurface services with integrity, attention to
                detail, and a personal touch. At a time when accurate underground
                information was often incomplete, Tony saw the need for damage
                prevention that construction professionals could depend on—marks
                on the ground, data you could read, and someone who would pick
                up the phone.
              </p>
              <p>
                That company is now owned by Tony’s son, Michael Brunette, and
                nephew, Allan Gunter. After Tony sold the company to them,
                Michael and Allan have brought their own experience to the
                work—while staying committed to the values Tony established.
                Janine Gunter is COO. Tony remains Founder.
              </p>
              <p>
                We still approach every project with care, and we still aim to
                be honest, straightforward, and easy to work with. If you call
                the office on Valde Avenue, you are talking to this group—not a
                dispatch script in another province.
              </p>
            </Prose>
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
      <DarkBand
        eyebrow="How we like to work"
        title="Straight talk, clear marks, no theatre"
        imageSrc="/images/locate-tech.jpg"
        imageAlt="Locate technician marking a line on gravel"
        reverse
      >
        <p>
          Subsurface work is only useful if the people holding the tools
          understand it. We mark what we find, map it when you need a record,
          and explain the limits of the method. If the data is inconclusive, we
          say so. That is the job.
        </p>
      </DarkBand>
      <Section className="bg-sand">
        <Container>
          <Eyebrow>Values</Eyebrow>
          <Heading className="mt-3 text-4xl">What we hold ourselves to</Heading>
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
            imageSrc="/images/gpr-legislature.jpg"
            imageAlt="GPR cart work on the grounds of the Manitoba Legislative Building"
            reverse
          >
            <Eyebrow>Equipment</Eyebrow>
            <Heading className="text-4xl">
              Proceq GPR, GPS-referenced locates, careful marks
            </Heading>
            <Prose>
              <p className="mt-5">
                Technicians work with Proceq GPR equipment. For utility
                locating, GPS referenced information is a core part of how we
                deliver maps. We also use environmentally safer marking paints
                so the work on the ground matches the care we take below it.
              </p>
              <p>
                GP8000 and GP8800 units handle concrete through 24+ inches.
                The GS8000 is for deeper and open-field work: off-road sites,
                larger areas, underground storage tanks, and shallow scanning
                for concrete cover on bridge decks.
              </p>
            </Prose>
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
      <Section className="bg-cream">
        <Container>
          <Eyebrow>Service area</Eyebrow>
          <Heading className="mt-3 text-4xl">
            Based in Winnipeg. Happy to travel.
          </Heading>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            From {site.address.street} we work across the regions below. We do
            not publish hours or travel minimums here—call the office and we
            will tell you whether we can be there.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {site.serviceArea.map((area) => (
              <li
                key={area}
                className="rounded-2xl bg-paper px-5 py-5 font-display text-2xl font-bold tracking-tight card-shadow"
              >
                {area}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <ProofGallery items={fieldGallery.slice(0, 3)} />
          </div>
        </Container>
      </Section>
      <CtaBand title="Talk to the people who will do the work" />
    </>
  );
}
