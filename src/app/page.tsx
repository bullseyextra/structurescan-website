import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/PageHero";
import { Container, Eyebrow, Section } from "@/components/LayoutBits";
import { ServiceCard } from "@/components/ServiceCard";
import { pageMeta } from "@/lib/seo";
import { certifications, services, site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Damage prevention, GPR & utility locating",
  description: `${site.tagline}. ${site.promise} Concrete scanning, utility locating, and related subsurface services from Winnipeg.`,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-cream">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/concrete-work.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/88 to-ink/55" />
        <div className="radar-grid pointer-events-none absolute inset-0" />
        <Container className="relative py-24 sm:py-32">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-brand">
            {site.tagline}
          </p>
          <h1 className="font-display mt-5 max-w-4xl text-5xl font-extrabold uppercase leading-[0.9] tracking-wide sm:text-7xl">
            {site.promise}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/80">
            Structure Scan Inc. is a Winnipeg family company providing
            non-invasive utility locating and ground penetrating radar. We help
            crews protect people, property, and infrastructure—so work can
            proceed without a strike, a delay, or a guess.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href={`tel:${site.phoneTel}`} variant="primary" size="lg" external>
              Call {site.phoneDisplay}
            </ButtonLink>
            <ButtonLink href="/contact#quote" variant="ghost" size="lg">
              Request a quote
            </ButtonLink>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <Eyebrow>Services</Eyebrow>
          <h2 className="font-display mt-3 max-w-2xl text-4xl font-bold uppercase leading-none tracking-wide">
            Subsurface information before you cut, core, or dig
          </h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </Section>

      <section className="border-y border-line bg-paper-2">
        <Container className="py-10">
          <p className="font-display text-center text-xs font-semibold uppercase tracking-[0.28em] text-muted">
            Qualifications
          </p>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {certifications.map((item) => (
              <li
                key={item}
                className="font-display text-xl font-semibold uppercase tracking-wide text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Service area</Eyebrow>
            <h2 className="font-display mt-3 text-4xl font-bold uppercase leading-none tracking-wide">
              Based in Winnipeg. Working across the Prairies, Western Ontario,
              and Nunavut.
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              From the shop at {site.address.street}, we travel to jobs in{" "}
              {site.serviceArea.slice(0, 3).join(", ")}, and {site.serviceArea[3]}.
              Call if you need a scan or locate in those regions.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3">
            {site.serviceArea.map((area) => (
              <li
                key={area}
                className="border border-line bg-cream px-5 py-6 font-display text-2xl font-bold uppercase tracking-wide"
              >
                {area}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>About</Eyebrow>
            <h2 className="font-display mt-3 text-4xl font-bold uppercase leading-none tracking-wide">
              A family company since {site.founded}
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted">
              Tony Brunette founded Structure Scan in Winnipeg in {site.founded}.
              The company is now owned by Michael Brunette (Owner/CFO) and Allan
              Gunter (Owner/CEO), with Janine Gunter as COO. Tony remains
              Founder. We are still family-owned, and still in the business of
              giving crews a clear picture of what sits below the surface.
            </p>
            <div className="mt-6">
              <ButtonLink href="/about" variant="outline">
                Read the story
              </ButtonLink>
            </div>
          </div>
          <aside className="border border-line bg-paper p-6 lg:col-span-5">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Winnipeg office
            </p>
            <p className="mt-3 text-lg">{site.address.line}</p>
            <p className="mt-4">
              <a className="font-semibold text-brand" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
              <br />
              <a className="font-semibold text-brand" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </aside>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
