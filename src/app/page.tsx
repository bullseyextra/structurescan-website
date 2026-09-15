import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/PageHero";
import {
  Container,
  Eyebrow,
  Heading,
  MediaSplit,
  Prose,
  Section,
} from "@/components/LayoutBits";
import { ServiceCard } from "@/components/ServiceCard";
import {
  DarkBand,
  ProcessTrio,
  ProofGallery,
  ServiceRibbon,
  SplitHero,
} from "@/components/VisualBands";
import { pageMeta } from "@/lib/seo";
import {
  certifications,
  fieldGallery,
  mapGallery,
  media,
  services,
  site,
} from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Damage prevention, GPR & utility locating",
  description: `${site.tagline}. ${site.promise} Concrete scanning, utility locating, and related subsurface services from Winnipeg.`,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <SplitHero
        eyebrow={site.tagline}
        title={
          <>
            See what’s below.{" "}
            <span className="text-brand">Then get to work.</span>
          </>
        }
        lead="Contractors, engineers, and owners call Structure Scan when they need a clear picture before anyone cuts, cores, or digs. We’re a Winnipeg family company. We scan concrete, locate utilities, and leave marks and maps the crew can actually use."
        imageSrc={media.winnipeg}
        imageAlt="Structure Scan technician pushing a GPR cart across the Manitoba Legislative Building grounds"
      />

      <ServiceRibbon />
      <ProcessTrio />

      <Section>
        <Container>
          <Eyebrow>Services</Eyebrow>
          <Heading className="mt-3 max-w-3xl text-4xl sm:text-5xl">
            Five ways we keep you out of trouble underground
          </Heading>
          <Prose>
            <p className="mt-4 max-w-3xl">
              Hitting rebar, a post-tension cable, a gas line, or a heat pipe is
              the kind of surprise that stops a job. Structure Scan is the
              crew you call first: ground penetrating radar in concrete,
              electromagnetic locates in the field, a camera in the drain when
              you need to see the pipe, and maps you can keep after we leave.
            </p>
            <p className="max-w-3xl">
              Not sure which service you need? If you’re cutting or coring,
              start with GPR. If you’re digging, start with locates. If the slab
              might have in-floor heat, add thermography. If the question is
              inside a lateral or weeping tile, that’s the camera. Or just call
              the office—we’ll sort it with you.
            </p>
          </Prose>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className={`lg:col-span-2 ${index === 3 ? "lg:col-start-2" : ""}`}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <DarkBand
        eyebrow="On the ground"
        title="Paint on the pad. Notes on the slab. A map for the file."
        imageSrc={media.rebarGrid}
        imageAlt="Rebar grid marked on a concrete slab beside a tablet showing the GPR radargram"
        reverse
      >
        <p>
          Every unmarked line is a chance to hit something you didn’t budget
          for. We show up with GPR, electromagnetic locators, and people who
          like solving puzzles under the surface. Findings get marked where the
          work will happen—tape and crayon on a slab, colour-coded paint on
          gravel or asphalt—so the next trade isn’t guessing from a PDF in the
          truck.
        </p>
        <p>
          When you need a record, we produce geo-referenced utility maps and
          concrete imaging you can hand to an engineer, a superintendent, or
          the crew that shows up next month. Private. Confidential. Written so
          a human can read it.
        </p>
      </DarkBand>

      <Section className="bg-cream">
        <Container>
          <Eyebrow>Proof, not stock</Eyebrow>
          <Heading className="mt-3 max-w-3xl text-4xl">
            Real scans. Real marks. Real maps.
          </Heading>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            This is the work: a rebar grid marked beside the radargram, dowels
            chalked on a sidewalk, a warehouse slab gridded for scanning, heat
            lines painted around shop lifts, locates on the pad, and GPS maps
            of what we found. Field photos and Structure Scan deliverables—not
            a stock skyline.
          </p>
          <div className="mt-10">
            <ProofGallery items={fieldGallery} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <MediaSplit
            imageSrc={media.map1}
            imageAlt="Colour-coded utility paths mapped over a large commercial parking lot"
            reverse
            caption="GPS-mapped utilities, colour-coded for the file"
          >
            <Eyebrow>Deliverables</Eyebrow>
            <Heading className="mt-3 text-4xl">
              What you take home from a locate
            </Heading>
            <Prose>
              <p className="mt-5">
                Public locates often arrive as scattered PDFs, emails, and
                sketches that don’t quite line up. Our locate work is built to
                be used: surface marks for the people holding the shovel, and
                geo-referenced maps—submeter digital and printed—showing the
                path of each pipe and cable we located.
              </p>
              <p>
                Keep them for planning, permitting, future maintenance, and the
                next contractor who asks “what’s under the parking lot?” If you
                also need tickets coordinated and private sweeps folded in,
                that’s locate management.
              </p>
            </Prose>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/services/utility-locating" variant="outline">
                Utility locating
              </ButtonLink>
              <ButtonLink href="/services/locate-management" variant="outline">
                Locate management
              </ButtonLink>
            </div>
          </MediaSplit>
          <div className="mt-10">
            <ProofGallery items={mapGallery.slice(0, 3)} />
          </div>
        </Container>
      </Section>

      <section className="bg-sand">
        <Container className="py-12">
          <p className="font-display text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            Qualifications we actually hold
          </p>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {certifications.map((item) => (
              <li
                key={item}
                className="font-display text-xl font-semibold tracking-tight text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section>
        <Container>
          <MediaSplit
            imageSrc={media.brighter}
            imageAlt="Structure Scan technician using a GPR cart on the Manitoba Legislative Building grounds"
          >
            <Eyebrow>Family business</Eyebrow>
            <Heading className="mt-3 text-4xl">
              A Winnipeg shop since {site.founded}
            </Heading>
            <Prose>
              <p className="mt-5">
                Tony Brunette started Structure Scan in Winnipeg in{" "}
                {site.founded}. Michael Brunette (Owner/CFO) and Allan Gunter
                (Owner/CEO) own it now, with Janine Gunter as COO. Tony remains
                Founder. Same family, same idea: give crews a clear picture of
                what’s below before they dig, cut, or drill.
              </p>
              <p>
                From the shop at {site.address.street}, we work across{" "}
                {site.serviceArea.slice(0, 3).join(", ")}, and{" "}
                {site.serviceArea[3]}. If the job is in those regions, give us a
                call. You’ll talk to the people who actually do the work—not a
                call centre reading a script.
              </p>
            </Prose>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {site.serviceArea.map((area) => (
                <li
                  key={area}
                  className="rounded-2xl bg-cream px-5 py-5 font-display text-2xl font-bold tracking-tight card-shadow"
                >
                  {area}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/about" variant="outline">
                Read the story
              </ButtonLink>
              <ButtonLink href="/about/team" variant="outline">
                Meet the crew
              </ButtonLink>
            </div>
            <aside className="mt-8 rounded-3xl bg-paper p-6">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                Winnipeg office
              </p>
              <p className="mt-3 text-lg">{site.address.line}</p>
              <p className="mt-4">
                <a
                  className="font-semibold text-brand"
                  href={`tel:${site.phoneTel}`}
                >
                  {site.phoneDisplay}
                </a>
                <br />
                <a
                  className="font-semibold text-brand"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>
              </p>
            </aside>
          </MediaSplit>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
