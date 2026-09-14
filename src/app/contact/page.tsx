import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { Container, Eyebrow, Section } from "@/components/LayoutBits";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Contact",
  description: `Call ${site.phoneDisplay}, email ${site.email}, or request a quote. Structure Scan Inc., ${site.address.line}.`,
  path: "/contact",
});

const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${
  site.geo.lng - 0.01
}%2C${site.geo.lat - 0.008}%2C${site.geo.lng + 0.01}%2C${
  site.geo.lat + 0.008
}&layer=mapnik&marker=${site.geo.lat}%2C${site.geo.lng}`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Call, email, or send a quote request"
        lead="The office is in Winnipeg. We work across Manitoba, Saskatchewan, Western Ontario, and Nunavut."
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Office</Eyebrow>
            <h2 className="font-display mt-3 text-4xl font-bold uppercase tracking-wide">
              Structure Scan Inc.
            </h2>
            <address className="mt-6 space-y-3 not-italic leading-relaxed">
              <p>
                {site.address.street}
                <br />
                {site.address.city}, {site.address.region} {site.address.postal}
                <br />
                {site.address.country}
              </p>
              <p>
                Phone:{" "}
                <a className="font-semibold text-brand" href={`tel:${site.phoneTel}`}>
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                Email:{" "}
                <a className="font-semibold text-brand" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
            </address>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Service area: {site.serviceArea.join(", ")}. We do not publish
              hours, pricing, or response times here—call the office for
              scheduling.
            </p>
            <div className="mt-8">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                Existing request forms
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    className="text-brand underline"
                    href={site.jotforms.estimate}
                    rel="noreferrer"
                  >
                    Estimate request
                  </a>
                </li>
                <li>
                  <a
                    className="text-brand underline"
                    href={site.jotforms.schedule}
                    rel="noreferrer"
                  >
                    Schedule a service
                  </a>
                </li>
                <li>
                  <a
                    className="text-brand underline"
                    href={site.jotforms.consultation}
                    rel="noreferrer"
                  >
                    Free consultation
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-display mb-4 text-3xl font-bold uppercase tracking-wide">
              Request a quote
            </h2>
            <ContactForm />
          </div>
        </Container>
      </Section>
      <Section className="bg-cream pt-0">
        <Container>
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide">
            Map
          </h2>
          <p className="mt-2 text-sm text-muted">{site.address.line}</p>
          <div className="mt-5 overflow-hidden border border-line">
            <iframe
              title={`Map of ${site.address.line}`}
              src={mapSrc}
              className="h-80 w-full grayscale"
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-sm">
            <a
              className="text-brand underline"
              href={`https://www.openstreetmap.org/?mlat=${site.geo.lat}&mlon=${site.geo.lng}#map=16/${site.geo.lat}/${site.geo.lng}`}
              rel="noreferrer"
            >
              Open a larger map
            </a>
          </p>
        </Container>
      </Section>
    </>
  );
}
