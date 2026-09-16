import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/JsonLd";
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
import { pageMeta, pageSeo } from "@/lib/seo";
import { equipment, media } from "@/lib/site";

export const metadata: Metadata = pageMeta(pageSeo.concreteScanning);

const targets = [
  "Rebar placement",
  "Post-tension cables",
  "Conduits",
  "Voids",
  "Structural components",
  "Slab and wall thickness",
  "Heat pipes",
];

const audiences = [
  {
    title: "Trades & contractors",
    body: "You cannot see what’s inside concrete before cutting or coring. Scanning removes the guesswork: rebar, post-tension cables, conduits, and other embedded objects, marked so you can work without an expensive surprise. Safer for the crew, cleaner for the schedule.",
  },
  {
    title: "Engineers & authorities",
    body: "GPR scanning supports quality control before and after construction. It is a non-destructive way to evaluate what sits inside a structure—cover, layout, deterioration clues—without opening the slab or stopping the workflow.",
  },
  {
    title: "Property owners & managers",
    body: "A single missed embedment can mean repairs, downtime, and a tenant conversation nobody wants. Scanning gives you a clear picture before renovation or maintenance work starts, so the people with the saws are not the first to find the cable.",
  },
];

export default function ConcreteScanningPage() {
  return (
    <>
      <ServiceJsonLd slug="concrete-scanning" />
      <PageHero
        eyebrow="Ground penetrating radar"
        title="Concrete scanning, without the guesswork"
        lead="A non-destructive look inside the slab before anyone cuts, cores, or drills. Findings marked on the concrete, with 2D and 3D imaging, a digital archive, and on-site reporting when you need answers the same day."
        imageSrc={media.rebarGrid}
        imageAlt="Rebar grid marked on a concrete slab beside a tablet showing the GPR radargram"
      />
      <Section>
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/services/concrete-scanning", label: "Concrete scanning" },
            ]}
          />
          <div className="mt-10">
            <MediaSplit
              imageSrc={media.warehouseGrid}
              imageAlt="Warehouse floor gridded in white chalk ahead of a concrete scan"
              caption="Scan grid on the slab—marks on the face of the work, not just a report in email"
            >
              <Eyebrow>On the job</Eyebrow>
              <Heading className="text-4xl">
                Cut or core with a map, not a guess
              </Heading>
              <Prose>
                <p className="mt-5">
                  Structure Scan uses ground penetrating radar to locate rebar,
                  pipes, post-tension cables, and hidden features in concrete.
                  We mark findings on the slab, wall, or deck so the saw
                  operator can see them. Reports are private and confidential.
                  On-site data processing and real-time reporting are available
                  when the schedule cannot wait for a PDF to land overnight.
                </p>
                <p>
                  This is the same work whether you are opening a floor for a
                  new mechanical riser, checking cover on a bridge deck, or
                  confirming what sits inside a masonry shaft before you cut a
                  door. The tool changes with the structure. The point does
                  not: know what’s in it before you damage it.
                </p>
              </Prose>
            </MediaSplit>
          </div>
          <ul className="mt-10 grid gap-2 sm:grid-cols-2">
            {targets.map((item) => (
              <li
                key={item}
                className="rounded-2xl border-l-4 border-brand bg-cream px-4 py-3 font-semibold"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container>
          <MediaSplit
            imageSrc={media.slabThickness}
            imageAlt="Technician scanning a large concrete pad with a handheld GPR antenna"
            reverse
            caption="Handheld GPR on a large concrete pad"
          >
            <Eyebrow>How GPR works</Eyebrow>
            <Heading className="text-4xl">
              A radar wave, a change in material, a mark on the slab
            </Heading>
            <Prose>
              <p className="mt-5">
                A high-frequency radar wave is sent into the ground or
                concrete. The two-way travel time is measured. Wave speed
                depends on the material it is moving through. When the wave
                crosses a boundary—a change in physical properties—an anomaly
                appears in the data. A certified GPR technician can mark that
                target in real time.
              </p>
              <p>
                Two-way travel time is also how we talk about thickness and
                depth: slab thickness, concrete cover over steel, and depth to
                subsurface targets. An optical survey wheel encoder is used to
                map depth and location of rebar directly on the concrete, so
                the marks match the data—not a sketch from memory.
              </p>
            </Prose>
          </MediaSplit>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Measure thickness and depth",
                body: "Two-way travel time is used to confirm slab thickness, concrete cover over steel, and depth to subsurface targets.",
              },
              {
                title: "Locate embeds",
                body: "Rebar, post-tension cables, conduits, radiant heating lines, and other objects in concrete.",
              },
              {
                title: "Find voids",
                body: "The contrast between air and concrete helps locate voids beneath asphalt and pavement, and check substrate displacement, without opening the slab.",
              },
              {
                title: "2D and 3D imaging",
                body: "Data can be provided in raw, 2D, and 3D formats—hard copy, email, or digital media—and is digitally archived.",
              },
              {
                title: "Mapped on the concrete",
                body: "An optical survey wheel encoder is used to map depth and location of rebar directly on the concrete.",
              },
              {
                title: "Infrastructure evaluation",
                body: "Mapping reflector strength helps locate areas of concrete deterioration.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-line bg-paper p-5"
              >
                <Heading as="h3" className="text-xl">
                  {item.title}
                </Heading>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <DarkBand
        eyebrow="Heavy structures"
        title="Decks, abutments, and vertical work—not just office slabs"
        imageSrc={media.structural}
        imageAlt="Structural components marked on a concrete surface after GPR scanning"
      >
        <p>
          Concrete scanning is not only a tidy interior floor. We scan bridge
          abutments, decks, and vertical masonry when the question is “what’s
          in this, and where can we cut?” The GS9000 is the unit we use for
          large-scale concrete scanning—bridge deck evaluation or a large-scale
          slab. The GS8000 is the unit we reach for on deeper and open-field
          work, including underground storage tanks and shallow scanning for
          concrete cover.
        </p>
        <p>
          Handheld Proceq units handle the close work: columns, walls, and
          tighter interiors where a cart cannot go. Technicians carry GP8000
          or GP8800 units capable of scanning through 24+ inches of concrete.
        </p>
      </DarkBand>

      <Section>
        <Container>
          <Eyebrow>Equipment</Eyebrow>
          <Heading className="mt-3 text-4xl">Proceq GPR on every crew</Heading>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted">
            We name the gear because contractors ask. These are the units on
            the truck—not a mystery “advanced system,” and not someone else’s
            product line.
          </p>
          <div className="mt-8 mb-8 grid gap-4 sm:grid-cols-3">
            <figure className="overflow-hidden rounded-3xl bg-cream p-4 card-shadow">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={media.equipmentHandheld}
                alt="Handheld Proceq GPR scanner against concrete with a tablet showing the scan"
                className="mx-auto h-40 w-auto object-contain"
              />
              <figcaption className="mt-3 text-center text-sm text-muted">
                Handheld GP8000 / GP8800 on concrete
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-3xl bg-cream p-4 card-shadow">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={media.equipmentCart}
                alt="Proceq GS8000 cart and tablet showing a mapped scan"
                className="mx-auto h-40 w-auto object-contain"
              />
              <figcaption className="mt-3 text-center text-sm text-muted">
                GS8000 cart for open-field and deeper work
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-3xl bg-ink p-4 card-shadow">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={media.gs9000}
                alt="Proceq GS9000 multichannel GPR cart, Screening Eagle product photography"
                className="mx-auto h-40 w-auto object-contain"
              />
              <figcaption className="mt-3 text-center text-sm text-cream/80">
                GS9000 cart — Screening Eagle / Proceq product photography
              </figcaption>
            </figure>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

      <Section className="bg-sand">
        <Container>
          <Heading className="text-4xl">Who we scan for</Heading>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {audiences.map((item) => (
              <article key={item.title} className="rounded-3xl bg-cream p-6">
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
          <Eyebrow>From jobs</Eyebrow>
          <Heading className="mt-3 text-4xl">Scanning evidence</Heading>
          <div className="mt-8">
            <ProofGallery
              items={[
                {
                  src: media.rebarGrid,
                  alt: "Marked interior slab after GPR scanning",
                  caption: "Rebar grid, marked in place",
                },
                {
                  src: media.dowel,
                  alt: "Yellow chalk grid marking dowels in a sidewalk",
                  caption: "Dowel identification",
                },
                {
                  src: media.conduit,
                  alt: "Conduit paths marked on a concrete slab",
                  caption: "Conduit identification",
                },
                {
                  src: media.slabThickness,
                  alt: "Technician scanning a large concrete pad with a handheld GPR antenna",
                  caption: "Handheld GPR on a large pad",
                },
                {
                  src: media.voids,
                  alt: "Void detection markings on a scanned surface",
                  caption: "Void detection",
                },
                {
                  src: media.structural,
                  alt: "Structural components marked after GPR scanning",
                  caption: "Structural components",
                },
              ]}
            />
          </div>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
