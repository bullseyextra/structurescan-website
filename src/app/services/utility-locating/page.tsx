import type { Metadata } from "next";
import { Breadcrumbs, CtaBand, PageHero } from "@/components/PageHero";
import { Container, Eyebrow, Section } from "@/components/LayoutBits";
import { pageMeta } from "@/lib/seo";

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
        title="Utility locating services"
        lead="Trained technicians use electromagnetic locating equipment to find buried pipes and cables before digging starts—then mark them on the surface."
        imageSrc="/images/utility-trench.jpg"
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
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow>EM locating</Eyebrow>
              <h2 className="font-display mt-3 text-4xl font-bold uppercase leading-none tracking-wide">
                Water, gas, electric, sewer, and telecom
              </h2>
              <p className="mt-5 leading-relaxed text-muted">
                We locate private and public utilities and mark them on the
                surface so you can avoid striking lines. Electromagnetic
                locating is the primary method for conductive services. Ground
                penetrating radar is used when you also need non-metallic
                utilities, underground storage tanks, voids, or unexpected
                buried objects that other methods can miss.
              </p>
            </div>
            <div className="border border-line bg-cream p-6">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide">
                Geo-referenced maps
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                We produce professional utility maps using GNSS satellite
                positioning and mapping software. You receive submeter-accurate
                digital and printed maps that show the path of each pipe and
                cable we locate. Keep them for planning, permitting, future
                maintenance, and the next crew on the site.
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <Section className="bg-cream">
        <Container>
          <h2 className="font-display text-4xl font-bold uppercase tracking-wide">
            Who this is for
          </h2>
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
              <article key={item.title} className="border border-line p-6">
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
