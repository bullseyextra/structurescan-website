import type { Metadata } from "next";
import Link from "next/link";
import { SewerCameraJsonLd, type FaqItem } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/PageHero";
import { ButtonLink } from "@/components/ButtonLink";
import {
  Container,
  Heading,
  MediaSplit,
  Photo,
  Prose,
  Section,
} from "@/components/LayoutBits";
import { pageMeta, pageSeo } from "@/lib/seo";
import { media, site } from "@/lib/site";

export const metadata: Metadata = pageMeta(pageSeo.sewerCamera);

const linkClass =
  "font-semibold text-brand underline decoration-brand/40 underline-offset-2 hover:text-brand-dark";

const lightLinkClass =
  "font-semibold text-white underline decoration-white/50 underline-offset-2";

const phoneLabel = "204-777-6590";

const findItems = [
  "Tree roots, grease, debris and collapsed sections",
  "Cracks, offset joints, corrosion and other structural damage",
  "The cause of slow drains, backups or seepage around a foundation",
  "The location and depth estimates of what it finds, so any excavation can be targeted",
] as const;

const audiences = [
  {
    title: "Homeowners.",
    body: "A slow drain, a backup, or water around the foundation, and you want the cause and location before paying anyone to dig.",
  },
  {
    title: "Buyers, sellers and realtors.",
    body: "A pre-purchase or listing inspection of the sewer lateral and, where accessible, the weeping tile.",
  },
  {
    title: "Renovators.",
    body: "A check of the lateral and weeping tile before new finishes go in.",
  },
] as const;

const inspectItems = [
  {
    title: "Sewer laterals and drain lines",
    rest: ", from the house toward the main.",
  },
  {
    title: "Weeping tile (foundation drainage),",
    rest: " also called drain tile.",
  },
  {
    title: "Septic systems.",
    rest: " We can locate septic systems and inspect them with the camera. This is inspection only, not a certified septic inspection.",
  },
  {
    title: "Commercial lines",
    rest: " as well as residential.",
  },
] as const;

const visitSteps = [
  {
    title: "Call or email.",
    rest: " Tell us the address and what you are noticing, and whether you also want a private utility locate because digging is likely.",
  },
  {
    title: "Have access ready.",
    rest: " Open or loosen cleanout caps before the crew arrives, so the visit is not delayed and the line can be located.",
  },
  {
    title: "We run the camera.",
    rest: " The technician feeds the camera into the line and inspects for deficiencies and breaks.",
  },
  {
    title: "We locate the line",
    rest: " on the same visit and give location and depth estimates.",
  },
  {
    title: "We walk you through the findings",
    rest: " on site before the crew leaves.",
  },
  {
    title: "The jobsheet goes out the same day.",
    rest: "",
  },
] as const;

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
    additional: "n/a",
  },
  {
    type: "24/7 emergency",
    minimum: "Quoted case by case; COD",
    additional: "n/a",
  },
  {
    type: "Travel outside Winnipeg",
    minimum: "$200/hr plus meals and accommodation",
    additional: "n/a",
  },
] as const;

const faqs = [
  {
    question: "Do you have to dig up the yard?",
    answer:
      "No. The camera goes inside the existing line, so the inspection itself needs no excavation. If a repair is needed, the location and depth estimates from the same visit mean the dig can be targeted.",
  },
  {
    question: "Can you inspect weeping tile, or just the sewer line?",
    answer:
      "Both. Structure Scan inspects sewer laterals and drain lines as well as weeping tile (foundation drainage), for residential and commercial sites, when there is access into the pipe.",
  },
  {
    question: "Should I get a camera inspection before buying a house?",
    answer:
      "It is a common reason people call. A camera inspection is a non-destructive way to check the sewer lateral, and the weeping tile when it is accessible, before you commit to a purchase. The crew walks you through the findings on site, the jobsheet goes out the same day, and video, if you request it, is delivered as a file in a shared Dropbox folder.",
  },
  {
    question: "What problems can the camera find?",
    answer:
      "Roots, grease, debris, collapsed sections, cracks, offset joints, corrosion and other structural damage, plus the location and depth estimates of what is found. It is also used to look for causes of slow drains, backups and seepage around a foundation.",
  },
  {
    question: "How much does a sewer camera inspection cost in Winnipeg?",
    answer:
      "Structure Scan bills by time, at the same rates as utility locates: a $300 minimum during regular hours, then $200 per additional hour on the same callout, plus GST. Scheduled after-hours work booked ahead on a non-emergency basis is an $800 minimum, then $300/hr. 24/7 emergency callouts are quoted case by case and are COD. Call 204-777-6590 for an estimate.",
  },
  {
    question: "What do I need to have ready?",
    answer:
      "Structure Scan needs access into the pipes to be scoped. Open or loosen cleanout caps before the crew arrives, so the visit is not delayed or called off because the line cannot be entered or located. If you have a floor plan and want it marked up, have it available.",
  },
  {
    question: "Do you clean, jet or repair the line?",
    answer:
      "No. This service is inspection only. Structure Scan does not clean, hydro-jet or repair pipes. If you also need buried services marked before a dig, ask for a private utility locate on the same visit.",
  },
  {
    question: "What do I get after the inspection, and can you locate the line too?",
    answer:
      "The crew walks you through the findings on site before leaving, and a jobsheet with notes, recommendations and site pictures goes out the same day. Video is available on request and is delivered as a file in a shared Dropbox folder. They can mark up a floor plan if you provide one, and GPS the location when marking outside. Locating the line, with location and depth estimates, is part of the same service call. A typical visit is about an hour on average.",
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

function PhoneLink({ className = linkClass }: { className?: string }) {
  return (
    <a href={`tel:${site.phoneTel}`} className={className}>
      {phoneLabel}
    </a>
  );
}

export default function SewerCameraPage() {
  return (
    <>
      <SewerCameraJsonLd faqs={faqs} />
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="grid-texture pointer-events-none absolute inset-0" />
        <Container className="relative grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
              Sewer &amp; weeping tile
            </p>
            <h1 className="font-display mt-3 max-w-xl text-4xl font-extrabold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Sewer camera and weeping tile inspections in Winnipeg
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
              Structure Scan provides sewer camera and weeping tile inspections
              in Winnipeg for homeowners, buyers and sellers, realtors and
              contractors. A technician runs a camera through the line,
              inspects for deficiencies and breaks, and locates the line on the
              same visit, with location and depth estimates. You know what the
              problem is and where it is before anyone digs.
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/85">
              <Link href="/contact" className={lightLinkClass}>
                Get an estimate
              </Link>{" "}
              or call <PhoneLink className={lightLinkClass} />.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="primary" size="lg">
                Get an estimate
              </ButtonLink>
              <ButtonLink
                href={`tel:${site.phoneTel}`}
                variant="ghost"
                size="lg"
                external
              >
                Call {phoneLabel}
              </ButtonLink>
            </div>
          </div>
          <figure className="relative">
            <Photo
              src={media.sewerCam}
              alt="Sewer camera recording of a pipe with root intrusion, with location and depth shown on the overlay"
              className="h-auto max-h-[32rem] w-full rounded-3xl bg-[#100e0c] object-contain sm:min-h-[22rem]"
            />
          </figure>
        </Container>
      </section>

      <Section>
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/services/sewer-camera", label: "Sewer camera" },
            ]}
          />
          <div className="mt-10">
            <MediaSplit
              imageSrc={media.sewerSee}
              imageAlt="Sewer camera views showing pipe interiors, debris, and standing water"
            >
              <Heading className="text-3xl text-ink sm:text-4xl">
                What a camera inspection can find
              </Heading>
              <Prose>
                <p className="mt-5">
                  The camera inspects for deficiencies and breaks without
                  digging up the yard. It can show:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  {findItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>
                  A damp basement can have more than one cause; looking inside
                  the foundation drain shows whether the weeping tile is
                  clogged, broken or displaced. This work is also called a CCTV
                  sewer inspection.
                </p>
              </Prose>
            </MediaSplit>
          </div>

          <div className="mt-12 max-w-3xl">
            <Heading className="text-3xl text-ink sm:text-4xl">
              Who we inspect for
            </Heading>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {audiences.map((item) => (
                <p
                  key={item.title}
                  className="rounded-2xl border-l-4 border-brand bg-cream px-4 py-4 text-[0.95rem] leading-relaxed text-muted"
                >
                  <strong className="font-semibold text-ink">{item.title}</strong>{" "}
                  {item.body}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-12 max-w-3xl">
            <Heading className="text-3xl text-ink sm:text-4xl">
              What we inspect
            </Heading>
            <Prose>
              <ul className="mt-5 list-disc space-y-2 pl-5">
                {inspectItems.map((item) => (
                  <li key={item.title}>
                    <strong className="font-semibold text-ink">{item.title}</strong>
                    {item.rest}
                  </li>
                ))}
              </ul>
              <p>
                What the camera needs: access into the pipe. Inspections cover
                up to 100 ft of run, from small drain lines through typical
                residential and commercial sewer lines.
              </p>
            </Prose>
          </div>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container className="max-w-3xl">
          <Heading className="text-3xl text-ink sm:text-4xl">
            What happens on the visit
          </Heading>
          <Prose>
            <ol className="mt-5 list-decimal space-y-2 pl-5">
              {visitSteps.map((step) => (
                <li key={step.title}>
                  <strong className="font-semibold text-ink">{step.title}</strong>
                  {step.rest}
                </li>
              ))}
            </ol>
            <p>
              A typical visit is about an hour on average. That is an average,
              not a guarantee.
            </p>
          </Prose>

          <Heading className="mt-12 text-3xl text-ink sm:text-4xl">
            What you get
          </Heading>
          <Prose>
            <p className="mt-5">
              The crew walks you through the findings on site, and a jobsheet
              with notes, recommendations and site pictures goes out the same
              day. Video is available on request and is delivered as a file in
              a shared Dropbox folder. A typical visit is about an hour on
              average. Inspections in Winnipeg are billed by time: a $300
              minimum during regular hours, then $200 per additional hour on
              the same callout, plus GST. Call <PhoneLink /> for an estimate.
            </p>
            <p>
              The jobsheet follows the same format as our locate and GPR
              jobsheets. We can also mark up a floor plan if you provide one,
              and GPS the location when we mark outside.
            </p>
          </Prose>

          <div className="relative mt-12 overflow-hidden rounded-3xl bg-ink px-6 py-8 text-cream sm:px-10 sm:py-10">
            <div className="grid-texture pointer-events-none absolute inset-0" />
            <div className="relative">
              <Heading className="text-3xl text-cream sm:text-4xl">
                The same visit: inspect the line and locate it
              </Heading>
              <div className="mt-5 space-y-4 leading-relaxed text-cream/80">
                <p>
                  On the same service call, Structure Scan locates the line and
                  gives location and depth estimates, so you are not hiring one
                  company to inspect the pipe and another to mark it. If a
                  repair means digging, a private utility locate can be added
                  on that visit as well.
                </p>
                <p>
                  The camera shows what is inside the line, and locating shows
                  where it runs and how deep. A private utility locate shows
                  what is beside it: gas, power, water and telecom. We would
                  rather mark both than watch a repair turn into a second
                  problem.
                </p>
                <p>
                  Planning to dig? See{" "}
                  <Link
                    href="/services/utility-locating"
                    className={lightLinkClass}
                  >
                    private utility locates in Winnipeg
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <Heading className="text-3xl text-ink sm:text-4xl">
            How our pricing works (and why it&apos;s time-based)
          </Heading>
          <Prose>
            <p className="mt-5">
              Time on site varies with the line and the access, so a minimum
              plus an hourly rate is fairer than a flat guess. Camera
              inspections use the same rates as our utility locates.
            </p>
          </Prose>
          <div className="mt-6 space-y-3 md:hidden">
            <p className="text-sm font-semibold text-ink">
              Work type (CAD, plus GST)
            </p>
            {pricingRows.map((row) => (
              <article
                key={row.type}
                className="rounded-3xl border border-line bg-paper p-4"
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {row.type}
                </h3>
                <dl className="mt-3 space-y-2 text-sm">
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-muted">Minimum</dt>
                    <dd className="text-right font-semibold text-ink">
                      {row.minimum}
                    </dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-muted">
                      Additional time on the same callout
                    </dt>
                    <dd className="max-w-[11rem] text-right font-semibold text-ink">
                      {row.additional}
                    </dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <div className="mt-6 hidden overflow-x-auto rounded-3xl border border-line bg-paper md:block">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">
                Camera inspection rates in CAD, plus GST
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
                    <th
                      scope="row"
                      className="px-4 py-3 align-top font-semibold text-ink"
                    >
                      {row.type}
                    </th>
                    <td className="px-4 py-3 align-top">{row.minimum}</td>
                    <td className="px-4 py-3 align-top">{row.additional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Prose>
            <p className="mt-6">
              The minimum covers the callout, and additional hours apply only
              to that same visit. For an estimate, call <PhoneLink />.
            </p>
          </Prose>

          <Heading className="mt-12 text-3xl text-ink sm:text-4xl">
            24/7 emergency and after-hours work
          </Heading>
          <Prose>
            <p className="mt-5">
              Camera work is part of our 24/7 emergency service. Emergency
              callouts are quoted case by case and are COD. After-hours rates
              apply only to work booked ahead on a non-emergency basis.
            </p>
          </Prose>

          <Heading className="mt-12 text-3xl text-ink sm:text-4xl">
            Where we work
          </Heading>
          <Prose>
            <p className="mt-5">
              Winnipeg first, then Selkirk, Steinbach, Portage la Prairie,
              Brandon and across Manitoba, plus Saskatchewan, Ontario, Nunavut
              and the Northwest Territories. Travel outside Winnipeg is $200/hr
              plus meals and accommodation.
            </p>
          </Prose>

          <Heading className="mt-12 text-3xl text-ink sm:text-4xl">
            Credentials
          </Heading>
          <Prose>
            <p className="mt-5">
              Structure Scan is family-owned in Winnipeg since {site.founded},
              with six full-time technicians trained on every service. We are
              COR certified and members of the Winnipeg Construction
              Association (WCA), BOMA and the Manitoba Heavy Construction
              Association (MHCA). Our camera is a Vivax-Metrotech vCamDrain
              with 100 ft of pushrod. More{" "}
              <TextLink href="/about">about Structure Scan</TextLink>.
            </p>
          </Prose>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container className="max-w-3xl">
          <Heading className="text-3xl text-ink sm:text-4xl">
            How to get an estimate, and what to have ready
          </Heading>
          <Prose>
            <p className="mt-5">
              Call <PhoneLink /> or use our{" "}
              <TextLink href="/contact">contact page</TextLink>. Have the
              address and the reason for the inspection, cleanout caps opened
              or loosened, a floor plan if you want one marked up, and a site
              contact or PO number if you use one.
            </p>
          </Prose>

          <Heading className="mt-12 text-3xl text-ink sm:text-4xl">
            Contractors, property managers and foundation crews
          </Heading>
          <Prose>
            <p className="mt-5">
              The same camera inspection, same-visit locate and jobsheet apply
              to commercial laterals, site drains and foundation work. It is
              inspection only; we do not clean or repair lines. Opening a
              trench? Add a{" "}
              <TextLink href="/services/utility-locating">
                private utility locate
              </TextLink>
              . Cutting or coring a slab? See{" "}
              <TextLink href="/services/concrete-scanning">
                concrete scanning
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
        [TESTIMONIAL PLACEHOLDER - do not publish invented quotes]
        UNPUBLISHED: this block must not appear on the rendered page.
        The owner is gathering customer quotes for service pages.
        Until those arrive, omit the testimonial block from the live page, or leave this hidden note for the implementer.
        Do not add review counts, star ratings, or aggregateRating schema.
      */}

      <section className="bg-paper pb-16">
        <Container className="max-w-3xl">
          <div className="rounded-3xl bg-brand px-6 py-12 text-white sm:px-10">
            <Heading className="text-3xl text-white sm:text-4xl">
              Get an estimate
            </Heading>
            <p className="mt-3 max-w-2xl text-white/90">
              Call <PhoneLink className={lightLinkClass} /> or email{" "}
              <a href={`mailto:${site.email}`} className={lightLinkClass}>
                {site.email}
              </a>
              . Our office is at {site.address.street}, {site.address.city},{" "}
              {site.address.region} {site.address.postal}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="cream">
                Get an estimate
              </ButtonLink>
              <ButtonLink
                href={`tel:${site.phoneTel}`}
                variant="ghost"
                external
              >
                Call {phoneLabel}
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
