import type { Metadata } from "next";
import Link from "next/link";
import { UtilityLocatingJsonLd, type FaqItem } from "@/components/JsonLd";
import { Breadcrumbs, PageHero } from "@/components/PageHero";
import { ButtonLink } from "@/components/ButtonLink";
import {
  Container,
  Heading,
  Prose,
  Section,
} from "@/components/LayoutBits";
import { ProofGallery } from "@/components/VisualBands";
import { pageMeta, pageSeo } from "@/lib/seo";
import { mapGallery, media, site } from "@/lib/site";

export const metadata: Metadata = pageMeta(pageSeo.utilityLocating);

const linkClass =
  "font-semibold text-brand underline decoration-brand/40 underline-offset-2 hover:text-brand-dark";

const phone = site.phoneDisplay;
const hydroPhone = "1-800-940-3447";

const pricingRows = [
  {
    type: "Regular hours",
    minimum: "$300",
    additional: "$200/hr",
  },
  {
    type: "Scheduled after-hours (booked ahead, non-emergency)",
    minimum: "$800",
    additional: "$300/hr",
  },
  {
    type: "Holidays",
    minimum: "Estimated case by case",
    additional: "None listed",
  },
  {
    type: "24/7 emergency",
    minimum: "Quoted case by case; COD",
    additional: "None listed",
  },
  {
    type: "Travel outside Winnipeg",
    minimum: "$200/hr plus meals and accommodation",
    additional: "None listed",
  },
] as const;

const prepareItems = [
  "The reason for the work.",
  "The number of locations or the size of the area.",
  "Any known buried services or embedments.",
  "Drawings, if you have them.",
  "Locate areas marked, accessible and relatively clean.",
  "A site contact name and number, or access arranged.",
  "A PO number, if applicable.",
] as const;

const faqs = [
  {
    question: "Do I still need Click Before You Dig MB if I hire Structure Scan?",
    answer:
      "Yes. A Click Before You Dig MB ticket is still required before you dig deeper than 15 cm (about 6 inches). That service notifies registered utility owners; it does not mark customer-owned lines. Structure Scan locates those private services, and can fold public locates into a managed file if you need that as well.",
  },
  {
    question: "What does Click Before You Dig MB not mark?",
    answer:
      "Customer-owned lines are not registered with Click Before You Dig MB. Official examples include water and sewer service lines, sprinkler systems, and lines connecting buildings on a property. Manitoba Hydro also does not locate privately owned electrical or gas lines past the meter (for example, to a garage or outbuilding). A private locator has to mark those.",
  },
  {
    question: "How much does a private utility locate cost in Winnipeg?",
    answer: `Structure Scan bills by time: a $300 minimum during regular hours, then $200 per additional hour on the same callout. Scheduled after-hours work is an $800 minimum, then $300/hr. Rates are plus GST. Emergency callouts are quoted case by case and are COD. Call ${phone} for an estimate.`,
  },
  {
    question: "How soon can you be on site?",
    answer: `Small jobs are usually booked one to two days out, and up to a week out in the summer peak. Most locate jobs take about an hour on site, and some take up to two. For 24/7 emergency locates, call ${phone}; emergencies are quoted case by case, with no promised response time.`,
  },
  {
    question:
      "Can you locate plastic water lines and other non-metallic utilities?",
    answer:
      "Yes. Electromagnetic locating is the primary method for conductive services, and ground penetrating radar is used when you also need non-metallic utilities, tanks, voids or unexpected buried objects. No method finds everything; if the data is inconclusive, the crew will say so.",
  },
  {
    question: "Do I get a map, or just paint on the ground?",
    answer:
      "You get surface marks (paint and flags) for the crew on site, a jobsheet the same day, and, when you need a record, submeter GNSS maps in digital and printed form. Written reports default to one week and are agreed before work starts.",
  },
  {
    question: "How long is a locate good for?",
    answer:
      "Manitoba Hydro locates must be re-marked, and a new Facilities Locate form issued, if work has not started within 14 calendar days of receiving the locate. Paint and flags also fade. Structure Scan's GNSS maps stay in the project file as a record; if marks are gone or the site has changed, call us to have the area re-marked.",
  },
  {
    question: "Do you locate for homeowners, or only contractors?",
    answer:
      "Both, though most of our work is for contractors, engineers and property managers. Homeowners hire Structure Scan for private locates before a fence, deck, garage line, pool or landscaping project.",
  },
] as const satisfies readonly FaqItem[];

function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={linkClass}>
      {children}
    </Link>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={linkClass} rel="noreferrer">
      {children}
    </a>
  );
}

function PhoneLink({
  display,
  tel,
}: {
  display: string;
  tel: string;
}) {
  return (
    <a href={`tel:${tel}`} className={linkClass}>
      {display}
    </a>
  );
}

export default function UtilityLocatingPage() {
  return (
    <>
      <UtilityLocatingJsonLd faqs={faqs} />
      <PageHero
        eyebrow="Utility locating"
        title="Private Utility Locates in Winnipeg"
        lead={
          <>
            Structure Scan provides private utility locates in Winnipeg for
            contractors, engineers and property managers. Click Before You Dig
            MB does not mark customer-owned lines. We mark those on the surface
            and, when you need a record, map them with GNSS. Call{" "}
            <a
              href={`tel:${site.phoneTel}`}
              className="font-semibold text-white underline decoration-white/50 underline-offset-2"
            >
              {phone}
            </a>{" "}
            for an estimate.
          </>
        }
        imageSrc={media.paintedLocates}
        imageAlt="Colour-coded utility locate paint marks on a concrete pad in Winnipeg"
      />

      <Section>
        <Container className="max-w-3xl">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/services/utility-locating", label: "Utility locating" },
            ]}
          />

          <Heading className="mt-10 text-3xl text-ink sm:text-4xl">
            Private locates vs Click Before You Dig MB
          </Heading>
          <Prose>
            <p className="mt-5">
              A Click Before You Dig MB ticket is required before you dig
              deeper than 15 cm in Manitoba, but that service does not mark
              customer-owned lines. Water and sewer service lines, sprinkler
              systems, lines between buildings, and electrical or gas lines
              past the meter are not registered with ClickBeforeYouDigMB.com.
              Structure Scan is a Winnipeg private locator for those lines.
            </p>
            <p>
              Click Before You Dig MB sends your request to the registered
              utility owners in your dig area. Submit it at{" "}
              <ExternalLink href="https://clickbeforeyoudigmb.com/">
                clickbeforeyoudigmb.com
              </ExternalLink>{" "}
              or <PhoneLink display={hydroPhone} tel="+18009403447" />, at
              least three full working days before work starts.
            </p>
            <p>
              Each registered owner marks its own lines. Manitoba Hydro marks
              the electrical and natural gas lines it owns and issues a
              Facilities Locate form that stays on site until backfill. Hydro
              does not locate lines past the meter, such as power to a garage,
              pump, pool or hot tub.
            </p>
            <p>Two official rules to know:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="font-semibold text-ink">Re-marks:</strong>{" "}
                If work has not started within 14 calendar days of receiving a
                Manitoba Hydro locate, contact Click Before You Dig MB to have
                the lines re-marked.
              </li>
              <li>
                <strong className="font-semibold text-ink">Hand digging:</strong>{" "}
                Marks show the approximate location. Within one metre on either
                side of the marks (five metres from high-pressure pipelines),
                expose the line carefully with hand tools.
              </li>
            </ul>
            <p>
              For the full rules, see{" "}
              <ExternalLink href="https://www.hydro.mb.ca/safety/outdoor/click-before-you-dig/">
                Manitoba Hydro&apos;s guidance
              </ExternalLink>
              .
            </p>
            <p>
              The short version: you need the public ticket and a private
              locator for customer-owned lines. That private locate is what we
              do.
            </p>
          </Prose>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container className="max-w-3xl">
          <Heading className="text-3xl text-ink sm:text-4xl">
            What you get from a Structure Scan locate
          </Heading>
          <Prose>
            <p className="mt-5">
              Structure Scan technicians mark located water, gas, electric,
              sewer and telecom services with paint and flags, explain the
              marks to your crew, send a jobsheet the same day, and, when you
              need a record, produce submeter GNSS maps in digital and printed
              form.
            </p>
            <p>
              <strong className="font-semibold text-ink">
                Written reports on request.
              </strong>{" "}
              The default is one week, agreed before work starts.
            </p>
            <p>
              <strong className="font-semibold text-ink">
                Maps you can keep.
              </strong>{" "}
              Our GNSS maps show the path of each pipe and cable we locate, in
              submeter-accurate digital and printed form. Use them for
              planning, permits, maintenance and the next crew on site.
            </p>
            <p>
              Paint fades. Tickets expire. A map in the project folder still
              helps months later.
            </p>
            <p>
              Need tickets, public locates and private sweeps in one file? See{" "}
              <TextLink href="/services/locate-management">
                locate management
              </TextLink>
              .
            </p>
          </Prose>
        </Container>
        <Container className="mt-10">
          <p className="max-w-3xl leading-relaxed text-muted">
            Colour-coded paths over aerials: parking lots, building perimeters,
            and larger corridors. These are Structure Scan deliverables, not
            stock diagrams.
          </p>
          <div className="mt-8">
            <ProofGallery items={mapGallery} />
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <Heading className="text-3xl text-ink sm:text-4xl">
            How we locate: electromagnetic and GPR
          </Heading>
          <Prose>
            <p className="mt-5">
              Electromagnetic (EM) locating is our primary method for conductive
              services, such as metal pipes and cables.
            </p>
            <p>
              Ground penetrating radar (GPR) is used when you also need
              non-metallic utilities, underground storage tanks, voids or
              unexpected buried objects that other methods can miss.
            </p>
            <p>
              No method sees everything. If the data is inconclusive, our crew
              will tell you so.
            </p>
          </Prose>

          <Heading className="mt-12 text-3xl text-ink sm:text-4xl">
            How our pricing works (and why it&apos;s time-based)
          </Heading>
          <Prose>
            <p className="mt-5">
              Private utility locates in Winnipeg are billed by time: a $300
              minimum during regular hours, then $200 per additional hour on
              the same callout. Scheduled after-hours work is an $800 minimum,
              then $300 per hour, plus GST.
            </p>
            <p>
              We price by time because locate time varies from site to site.
              Per-location or per-area pricing would overcharge simple sites and
              undercharge busy ones. Time-based pricing is fairer and more
              stable.
            </p>
          </Prose>
          <div className="mt-6 overflow-x-auto rounded-3xl border border-line bg-paper">
            <table className="w-full min-w-[44rem] text-left text-sm">
              <caption className="sr-only">
                Utility locate rates in CAD, plus GST
              </caption>
              <thead>
                <tr className="border-b border-line text-ink">
                  <th
                    scope="col"
                    className="px-4 py-3 font-display text-base font-semibold"
                  >
                    Work type (CAD, plus GST)
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 font-display text-base font-semibold"
                  >
                    Minimum
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 font-display text-base font-semibold"
                  >
                    Additional time on the same callout
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {pricingRows.map((row) => (
                  <tr
                    key={row.type}
                    className="border-b border-line last:border-b-0"
                  >
                    <th scope="row" className="px-4 py-3 font-semibold text-ink">
                      {row.type}
                    </th>
                    <td className="px-4 py-3">{row.minimum}</td>
                    <td className="px-4 py-3">{row.additional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Prose>
            <p className="mt-6">
              The minimum covers the callout, and additional hours apply only
              to that visit. After-hours rates are for work booked in advance,
              not emergencies. For an estimate, call{" "}
              <PhoneLink display={phone} tel={site.phoneTel} />.
            </p>
            <p>
              <TextLink href="/services/concrete-scanning/cost">
                Concrete scanning
              </TextLink>{" "}
              uses the same time-based pricing.
            </p>
          </Prose>

          <Heading className="mt-12 text-3xl text-ink sm:text-4xl">
            24/7 emergency locates
          </Heading>
          <Prose>
            <p className="mt-5">
              Emergency locates are available 24/7 at our regular number,{" "}
              <PhoneLink display={phone} tel={site.phoneTel} />, which is
              always answered. Emergency callouts are quoted case by case, and
              payment is due at the time of service (COD). There is no fixed
              emergency rate or promised response time.
            </p>
            <p>
              For emergency public locates of Manitoba Hydro lines, call{" "}
              <PhoneLink display={hydroPhone} tel="+18009403447" />.
            </p>
          </Prose>

          <Heading className="mt-12 text-3xl text-ink sm:text-4xl">
            Where we work
          </Heading>
          <Prose>
            <p className="mt-5">
              Based in Winnipeg, we also work in Selkirk, Steinbach, Portage la
              Prairie, Brandon and across Manitoba.
            </p>
            <p>
              Our crews travel to Saskatchewan, Ontario, Nunavut and the
              Northwest Territories, with travel billed at $200 per hour plus
              meals and accommodation. One Nunavut job had us locating at the
              top of the world.
            </p>
          </Prose>

          <Heading className="mt-12 text-3xl text-ink sm:text-4xl">
            Credentials
          </Heading>
          <Prose>
            <p className="mt-5">
              Structure Scan is a family-owned Winnipeg company, in business
              since {site.founded}, with six full-time technicians trained on
              every service we offer. We are COR certified and members of the
              Winnipeg Construction Association (WCA), BOMA and the Manitoba
              Heavy Construction Association (MHCA). More{" "}
              <TextLink href="/about">about us</TextLink>.
            </p>
          </Prose>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container className="max-w-3xl">
          <Heading className="text-3xl text-ink sm:text-4xl">
            How to book, and what to have ready
          </Heading>
          <Prose>
            <p className="mt-5">
              Call <PhoneLink display={phone} tel={site.phoneTel} /> or use our{" "}
              <TextLink href="/contact">contact page</TextLink>. Most locate
              jobs take about an hour, and some take up to two. Small jobs are
              usually booked one to two days out, and up to a week out in the
              summer peak.
            </p>
            <p>To help us estimate the time, have this ready:</p>
            <ol className="list-decimal space-y-2 pl-5">
              {prepareItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <p>
              This helps us estimate time. It is not how the price is
              calculated.
            </p>
          </Prose>

          <Heading className="mt-12 text-3xl text-ink sm:text-4xl">
            Homeowners: fences, decks, garage lines and yard work
          </Heading>
          <Prose>
            <p className="mt-5">
              Homeowners need a Click Before You Dig MB ticket too, and it will
              not mark your own lines, such as garage power or sprinklers. We
              locate those before a fence, deck, pool or landscaping dig. Call{" "}
              <PhoneLink display={phone} tel={site.phoneTel} /> to book.
            </p>
            <p>
              For a look inside a sewer lateral or weeping tile, see{" "}
              <TextLink href="/services/sewer-camera">
                sewer camera inspections
              </TextLink>
              .
            </p>
          </Prose>
        </Container>
      </Section>

      <Section id="faq">
        <Container className="max-w-3xl">
          <Heading className="text-3xl text-ink sm:text-4xl">FAQ</Heading>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-3xl border border-line bg-cream p-5"
              >
                <Heading as="h3" className="text-xl text-ink">
                  {faq.question}
                </Heading>
                <p className="mt-2 leading-relaxed text-muted">{faq.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/*
        TESTIMONIAL PLACEHOLDER
        The owner is gathering 2 to 3 short customer testimonials (name and
        company, or initials) for this page. Do not publish invented
        testimonials, review counts, star ratings, or aggregateRating schema.
        Leave this block off the live page until real quotes exist.
      */}

      <section className="bg-paper pb-16">
        <Container className="max-w-3xl">
          <div className="rounded-3xl bg-brand px-6 py-12 text-white sm:px-10">
            <Heading className="text-3xl text-white sm:text-4xl">
              Get an estimate
            </Heading>
            <p className="mt-3 max-w-2xl text-white/90">
              Call{" "}
              <a
                href={`tel:${site.phoneTel}`}
                className="font-semibold underline decoration-white/50 underline-offset-2"
              >
                {phone}
              </a>{" "}
              or email{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-semibold underline decoration-white/50 underline-offset-2"
              >
                {site.email}
              </a>{" "}
              for an estimate. Our office is at {site.address.street},{" "}
              {site.address.city}, {site.address.region} {site.address.postal}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact#quote" variant="cream">
                Book a scan
              </ButtonLink>
              <ButtonLink href={`tel:${site.phoneTel}`} variant="ghost" external>
                Talk to us
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
