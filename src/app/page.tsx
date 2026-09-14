import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/PageHero";
import {
  Container,
  Eyebrow,
  Heading,
  MediaSplit,
  Section,
} from "@/components/LayoutBits";
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
          src="/images/gpr-winnipeg.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
        />
        <div className="hero-scrim absolute inset-0" />
        <Container className="relative py-24 sm:py-32">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-white drop-shadow">
            {site.tagline}
          </p>
          <h1 className="font-display mt-5 max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-balance drop-shadow-[0_2px_18px_rgba(36,28,24,0.45)] sm:text-7xl">
            {site.promise}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream drop-shadow-[0_2px_12px_rgba(36,28,24,0.5)]">
            We’re a Winnipeg family company. We scan concrete, locate utilities,
            and help crews protect people, pipes, and property—so the job can
            keep moving.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="/contact#quote" variant="primary" size="lg">
              Book a scan
            </ButtonLink>
            <ButtonLink href={`tel:${site.phoneTel}`} variant="ghost" size="lg" external>
              Talk to us
            </ButtonLink>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <Eyebrow>Services</Eyebrow>
          <Heading className="mt-3 max-w-2xl text-4xl">
            Five ways we keep you out of trouble underground
          </Heading>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            Need a scan, a locate, or a look inside a drain? Start here—we’ll
            help you pick the right service for the job.
          </p>
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

      <Section className="bg-cream">
        <Container>
          <MediaSplit
            imageSrc="/images/locate-tech.jpg"
            imageAlt="Technician marking a buried utility on a gravel site"
            reverse
          >
            <Eyebrow>On the job</Eyebrow>
            <Heading className="mt-3 text-4xl">
              Daylight, hi-vis, and a clear mark on the ground
            </Heading>
            <p className="mt-5 leading-relaxed text-muted">
              Structure Scan shows up with GPR, electromagnetic locators, and
              people who like solving puzzles under the surface. We mark what we
              find, map it when you need a record, and leave you with a picture
              you can work from.
            </p>
            <div className="mt-6">
              <ButtonLink href="/services" variant="outline">
                See all services
              </ButtonLink>
            </div>
          </MediaSplit>
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
            imageSrc="/images/sunny-crew.jpg"
            imageAlt="Construction crew standing on a sunlit concrete deck"
          >
            <Eyebrow>Service area</Eyebrow>
            <Heading className="mt-3 text-4xl">
              Based in Winnipeg. Happy to travel.
            </Heading>
            <p className="mt-5 leading-relaxed text-muted">
              From the shop at {site.address.street}, we work across{" "}
              {site.serviceArea.slice(0, 3).join(", ")}, and {site.serviceArea[3]}.
              If the job is in those regions, give us a call.
            </p>
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
          </MediaSplit>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container>
          <MediaSplit
            imageSrc="/images/gpr-winnipeg.jpg"
            imageAlt="Structure Scan technician using ground penetrating radar on the Manitoba Legislative Building grounds"
            reverse
          >
            <Eyebrow>Family business</Eyebrow>
            <Heading className="mt-3 text-4xl">
              A family company since {site.founded}
            </Heading>
            <p className="mt-5 leading-relaxed text-muted">
              Tony Brunette started Structure Scan in Winnipeg in {site.founded}.
              Michael Brunette (Owner/CFO) and Allan Gunter (Owner/CEO) own it
              now, with Janine Gunter as COO. Tony remains Founder. Same family,
              same idea: give crews a clear picture of what’s below before they
              dig, cut, or drill.
            </p>
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
                <a className="font-semibold text-brand" href={`tel:${site.phoneTel}`}>
                  {site.phoneDisplay}
                </a>
                <br />
                <a className="font-semibold text-brand" href={`mailto:${site.email}`}>
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
