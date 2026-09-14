import type { Metadata } from "next";
import { Breadcrumbs, CtaBand, PageHero } from "@/components/PageHero";
import { Container, Eyebrow, Section } from "@/components/LayoutBits";
import { pageMeta } from "@/lib/seo";
import { equipment } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Concrete scanning & GPR",
  description:
    "Non-destructive concrete scanning with ground penetrating radar. Locate rebar, post-tension cables, conduits, voids, and slab thickness before you cut or core.",
  path: "/services/concrete-scanning",
});

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
    body: "You cannot see what’s inside concrete before cutting or coring. Scanning removes the guesswork: rebar, post-tension cables, conduits, and other embedded objects, marked so you can work without an expensive surprise.",
  },
  {
    title: "Engineers & authorities",
    body: "GPR scanning supports quality control before and after construction. It is a non-destructive way to evaluate what sits inside a structure without disrupting the workflow.",
  },
  {
    title: "Property owners & managers",
    body: "A single missed embedment can mean repairs and downtime. Scanning gives you a clear picture before renovation or maintenance work starts.",
  },
];

export default function ConcreteScanningPage() {
  return (
    <>
      <PageHero
        eyebrow="Ground penetrating radar"
        title="Concrete scanning services"
        lead="Non-destructive insights you can trust before cutting, coring, or drilling. Clear deliverables, including 2D and 3D imaging, a digital archive, and real-time reporting on site."
        imageSrc="/images/industrial-interior.jpg"
      />
      <Section>
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { label: "Concrete scanning" },
            ]}
          />
          <div className="mt-10 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Eyebrow>On the job</Eyebrow>
              <h2 className="font-display mt-3 text-4xl font-bold uppercase leading-none tracking-wide">
                Cut or core with a map, not a guess
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                Structure Scan uses ground penetrating radar to locate rebar,
                pipes, and hidden features in concrete. We mark findings and
                provide results that are straightforward enough to act on the
                same day. Reports are private and confidential. On-site data
                processing and real-time reporting are available.
              </p>
            </div>
            <ul className="grid gap-2 lg:col-span-5">
              {targets.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-brand bg-cream px-4 py-3 font-semibold"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container>
          <Eyebrow>How GPR works</Eyebrow>
          <h2 className="font-display mt-3 max-w-3xl text-4xl font-bold uppercase leading-none tracking-wide">
            A radar wave, a change in material, a mark on the slab
          </h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted">
            A high-frequency radar wave is sent into the ground or concrete. The
            two-way travel time is measured. Wave speed depends on the material
            it is moving through. When the wave crosses a boundary—a change in
            physical properties—an anomaly appears in the data. A certified GPR
            technician can mark that target in real time.
          </p>
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
              <article key={item.title} className="border border-line bg-paper p-5">
                <h3 className="font-display text-xl font-bold uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Eyebrow>Equipment</Eyebrow>
          <h2 className="font-display mt-3 text-4xl font-bold uppercase leading-none tracking-wide">
            Proceq GPR on every crew
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {equipment.map((item) => (
              <article key={item.name} className="border border-line bg-cream p-5">
                <h3 className="font-display text-xl font-bold uppercase tracking-wide">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.use}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-paper-2">
        <Container>
          <h2 className="font-display text-4xl font-bold uppercase tracking-wide">
            Who we scan for
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {audiences.map((item) => (
              <article key={item.title} className="bg-cream p-6">
                <h3 className="font-display text-xl font-bold uppercase tracking-wide">
                  {item.title}
                </h3>
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
