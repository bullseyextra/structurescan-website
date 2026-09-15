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
import { DarkBand, ProofGallery } from "@/components/VisualBands";
import { pageMeta } from "@/lib/seo";
import { mapGallery, media } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Utility locating",
  description:
    "Electromagnetic locating of water, gas, electric, sewer, and telecom—private and public—with surface marking and geo-referenced GNSS maps.",
  path: "/services/utility-locating",
});

export default function UtilityLocatingPage() {
  return (
    <>
      <PageHero
        eyebrow="Know what’s below"
        title="Utility locating, marked and mapped"
        lead="Trained technicians use electromagnetic locating equipment to find buried pipes and cables before digging starts—then mark them on the surface and, when you need a record, map them."
        imageSrc={media.map1}
        imageAlt="Colour-coded utility paths mapped over a commercial parking lot"
      />
      <Section>
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { label: "Utility locating" },
            ]}
          />
          <div className="mt-10">
            <MediaSplit
              imageSrc={media.paintedLocates}
              imageAlt="Colour-coded utility paint marks on a concrete pad"
            >
              <Eyebrow>EM locating</Eyebrow>
              <Heading className="text-4xl">
                Water, gas, electric, sewer, and telecom
              </Heading>
              <Prose>
                <p className="mt-5">
                  We locate private and public utilities and mark them on the
                  surface so you can avoid striking lines. Electromagnetic
                  locating is the primary method for conductive services.
                  Ground penetrating radar is used when you also need
                  non-metallic utilities, underground storage tanks, voids, or
                  unexpected buried objects that other methods can miss.
                </p>
                <p>
                  That combination matters on real sites: plastic water, old
                  foundations, a tank nobody put on the as-built, a duct bank
                  that only shows up when you look with more than one tool. The
                  point is a more complete picture before the bucket goes in—not
                  a single-method checkbox.
                </p>
              </Prose>
            </MediaSplit>
          </div>
        </Container>
      </Section>
      <DarkBand
        eyebrow="Before the excavator"
        title="Hitting a line is a people problem first, a money problem second"
        imageSrc={media.map5}
        imageAlt="Corridor-scale utility mapping along a developed site"
      >
        <p>
          A gas line, power cable, or water main is not an abstract risk. It
          injures people, stops a job, and creates repair and liability costs
          that nobody scheduled. Locating first gives crews a picture of what’s
          buried—paint they can see, and maps they can keep.
        </p>
        <p>
          We work for excavators and ground disturbers, homeowners putting in a
          fence or a pool, and property managers coordinating work across more
          than one site. Same method. Same courtesy: mark it clearly, explain
          what we found, and don’t pretend we saw something we didn’t.
        </p>
      </DarkBand>
      <Section className="bg-cream">
        <Container>
          <MediaSplit
            imageSrc={media.map2}
            imageAlt="Aerial utility map with colour-coded service paths around commercial buildings"
            reverse
          >
            <Eyebrow>Take-home maps</Eyebrow>
            <Heading className="text-4xl">Geo-referenced maps</Heading>
            <Prose>
              <p className="mt-5">
                We produce professional utility maps using GNSS satellite
                positioning and mapping software. You receive submeter-accurate
                digital and printed maps that show the path of each pipe and
                cable we locate. Keep them for planning, permitting, future
                maintenance, and the next crew on the site.
              </p>
              <p>
                Paint fades. Tickets expire. A map in the project folder is
                how the locate still helps six months later. If you also need
                Call Before You Dig coordination and private sweeps in the same
                package, look at locate management.
              </p>
            </Prose>
          </MediaSplit>
        </Container>
      </Section>
      <Section>
        <Container>
          <Heading className="text-4xl">Who this is for</Heading>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Excavators & ground disturbers",
                body: "Hitting a gas line, power cable, or water main can injure people, stop a job, and create repair and liability costs. Locating first gives crews a reliable picture of what’s buried.",
              },
              {
                title: "Homeowners",
                body: "Renovations, landscaping, fences, and pools all involve digging. We identify buried utilities on the property before work starts.",
              },
              {
                title: "Property managers",
                body: "Whether you are coordinating repairs, landscaping, or new installations, locating reduces the chance of service disruptions and damaged assets across a portfolio of sites.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-line bg-cream p-6"
              >
                <Heading as="h3" className="text-xl">
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
      <Section className="bg-cream">
        <Container>
          <Eyebrow>Map gallery</Eyebrow>
          <Heading className="mt-3 text-4xl">
            What a finished locate file can look like
          </Heading>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            Colour-coded paths over aerials—parking lots, building perimeters,
            and larger corridors. These are Structure Scan deliverables, not
            stock diagrams.
          </p>
          <div className="mt-8">
            <ProofGallery items={mapGallery} />
          </div>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
