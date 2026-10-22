import type { Metadata } from "next";
import Link from "next/link";
import { ServiceFaqJsonLd, type FaqItem } from "@/components/JsonLd";
import { Breadcrumbs, PageHero } from "@/components/PageHero";
import { ButtonLink } from "@/components/ButtonLink";
import {
  Container,
  Heading,
  Prose,
  Section,
} from "@/components/LayoutBits";
import { pageMeta, pageSeo } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta(pageSeo.concreteScanningCost);

const serviceDescription =
  "Concrete scanning in Winnipeg with Structure Scan is billed by time. During regular hours, a callout has a $300 minimum, and each additional hour on the same callout is $200. Written reports are extra and only apply if you ask for one.";

const pricingRows = [
  {
    type: "Winnipeg, regular hours",
    minimum: "$300",
    additional: "$200",
  },
  {
    type: "After hours",
    minimum: "$800",
    additional: "$300",
  },
  {
    type: "Emergency and holidays",
    minimum: "Estimated case by case",
    additional: "Estimated case by case",
  },
  {
    type: "Travel outside Winnipeg",
    minimum: "Travel hours at $200/hr",
    additional: "Meals and accommodation extra",
  },
] as const;

const prepareItems = [
  "The reason for the scan: cutting, coring, drilling, or information only.",
  "The number of core locations or the size of the scan area.",
  "Slab details if you know them: structural or suspended, or slab-on-grade.",
  "Any other known embedments, such as heat lines.",
  "Structural, plumbing and electrical drawings, if available.",
  "Scan locations identified, marked, accessible and reasonably clean.",
  "A site contact name and number, or access arranged ahead of time.",
  "A PO number, if your company uses one.",
] as const;

const faqs = [
  {
    question: "How much does concrete scanning cost in Winnipeg?",
    answer:
      "Cost depends on how much time the scan takes, plus a written report if you ask for one. During regular hours in Winnipeg, there is a $300 minimum call and $200 for each additional hour on the same callout.",
  },
  {
    question: "Is there a minimum charge?",
    answer:
      "Yes. The minimum is $300 for a regular-hours callout in Winnipeg and $800 for an after-hours callout.",
  },
  {
    question: "Is GPR cheaper than X-ray?",
    answer:
      "Generally yes, because GPR needs access to only one side, uses no radiation and requires no evacuation. That means less downtime for the rest of the site.",
  },
  {
    question: "How deep can GPR scan concrete?",
    answer:
      "Structure Scan's handheld units scan through 24+ inches of concrete. Actual depth depends on rebar density and moisture in the slab.",
  },
  {
    question: "Can GPR find post-tension cables?",
    answer:
      "Yes. GPR locates post-tension cables so they can be marked before you core, cut or drill.",
  },
  {
    question: "Do I get results the same day?",
    answer:
      "Yes, findings are marked on the slab during the scan. Jobsheets for basic services are sent the same day, and written reports default to a one-week turnaround.",
  },
  {
    question: "How long does a scan take?",
    answer:
      "It depends on the slab type, the number of locations and the purpose of the scan. The average job takes about one hour, which falls within the $300 minimum call during regular hours. Complex structural slabs and large areas take longer.",
  },
  {
    question: "Is GPR safe for workers nearby?",
    answer:
      "Yes. GPR is non-ionizing, so no evacuation is needed and nearby trades can keep working.",
  },
  {
    question: "What should I prepare before the crew arrives?",
    answer:
      "Have the reason for the scan, the number of locations or the area size, slab details, known embedments, drawings, marked and accessible scan locations, a site contact, and a PO number if needed. The full list is in the section above.",
  },
  {
    question: "Do you work outside Winnipeg?",
    answer:
      "Yes. We work across Manitoba, Saskatchewan, Western Ontario and Nunavut. Travel hours are billed at $200 per hour, with meals and accommodation extra.",
  },
] as const satisfies readonly FaqItem[];

const linkClass =
  "font-semibold text-brand underline decoration-brand/40 underline-offset-2 hover:text-brand-dark";

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

export default function ConcreteScanningCostPage() {
  return (
    <>
      <ServiceFaqJsonLd
        name="Concrete scanning"
        description={serviceDescription}
        path={pageSeo.concreteScanningCost.path}
        faqs={faqs}
      />
      <PageHero
        eyebrow="Concrete scanning"
        title="Concrete Scanning Cost in Winnipeg: What Affects Price (and FAQ)"
        lead={serviceDescription}
      />
      <Section>
        <Container className="max-w-3xl">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              {
                href: "/services/concrete-scanning",
                label: "Concrete scanning",
              },
              { href: "/services/concrete-scanning/cost", label: "Cost" },
            ]}
          />
          <Prose>
            <p className="mt-10">
              Want an estimate? Call{" "}
              <a href={`tel:${site.phoneTel}`} className={linkClass}>
                1-204-777-6590
              </a>{" "}
              or email{" "}
              <a href={`mailto:${site.email}`} className={linkClass}>
                info@structurescan.ca
              </a>{" "}
              with your locations and slab type.
            </p>
            <p>
              Structure Scan is a family company based at 7 Valde Ave in
              Winnipeg. We have been scanning concrete since 1999 and work
              across Manitoba, Saskatchewan, Western Ontario and Nunavut.
            </p>
          </Prose>

          <Heading className="mt-12 text-3xl text-ink sm:text-4xl">
            How our pricing works (and why it&apos;s time-based)
          </Heading>
          <Prose>
            <p className="mt-5">
              You pay for the time we spend scanning on site, plus a written
              report if you request one. We do not price by the number of core
              locations or by square footage.
            </p>
            <p>
              The reason is simple: scan time varies a lot from one slab to the
              next. Marking a 2&apos; x 2&apos; area on hollowcore is much
              faster than marking the same area on a structural slab with
              several layers of rebar and conduit running through it. A
              per-location price would be too high for easy jobs and too low
              for hard ones.
            </p>
            <p>
              Billing by time keeps pricing stable and fair for both sides. You
              pay for the work your slab actually needs.
            </p>
            <p>
              When you call, we will still ask how many locations you have or
              how big the area is. That helps us estimate the time and book the
              right slot. It is not how the price is calculated.
            </p>
          </Prose>

          <Heading as="h3" className="mt-10 text-2xl text-ink">
            Slab type: on-grade, suspended, post-tension, decks, walls and
            columns
          </Heading>
          <Prose>
            <p className="mt-4">
              Slab type is the biggest factor in how long a scan takes.
              Slab-on-grade, suspended slabs, post-tension slabs, bridge decks,
              walls and columns each have different layouts and different things
              buried inside them.
            </p>
            <p>
              A post-tension slab needs careful work, because cutting a PT cable
              is dangerous and expensive. A suspended slab with dense rebar and
              conduits takes longer to read than a lightly reinforced slab. More
              complexity means more time on site.
            </p>
            <p>
              Large areas such as bridge decks are scanned with our GS8000 and
              GS9000 cart systems. Smaller locations are scanned with our Proceq
              GP8000 and GP8800 handheld units.
            </p>
          </Prose>

          <Heading as="h3" className="mt-10 text-2xl text-ink">
            Access, after-hours work and travel outside Winnipeg
          </Heading>
          <Prose>
            <p className="mt-4">
              After-hours callouts have an $800 minimum, then $300 per hour on
              the same callout. Emergency and holiday rates are estimated case
              by case, because they depend on the day. For example, a major
              holiday like Christmas Day costs more than a regular long weekend.
            </p>
            <p>
              For jobs outside Winnipeg, travel hours are billed at the $200 per
              hour rate. Meals and accommodation are extra.
            </p>
            <p>
              Access affects time too. If scan areas are blocked, dirty or hard
              to reach, the crew spends more time getting ready and less time
              scanning.
            </p>
          </Prose>

          <Heading as="h3" className="mt-10 text-2xl text-ink">
            Deliverable: marks only vs a 2D/3D report
          </Heading>
          <Prose>
            <p className="mt-4">
              Every scan includes marks made directly on the concrete. For basic
              services, a jobsheet is sent the same day.
            </p>
            <p>
              If you need a written report with 2D or 3D data, that is billed as
              extra time. Reports suit engineers, owners and anyone who needs a
              record of what was found. All scan data is digitally archived, and
              reports are private and confidential.
            </p>
          </Prose>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container className="max-w-3xl">
          <Heading className="text-3xl text-ink sm:text-4xl">
            Typical Winnipeg pricing
          </Heading>
          <Prose>
            <p className="mt-5">Here is how a typical callout is billed:</p>
          </Prose>
          <div className="mt-6 overflow-x-auto rounded-3xl border border-line bg-paper">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <thead>
                <tr className="border-b border-line text-ink">
                  <th
                    scope="col"
                    className="px-4 py-3 font-display text-base font-semibold"
                  >
                    Callout type
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 font-display text-base font-semibold"
                  >
                    Minimum call
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 font-display text-base font-semibold"
                  >
                    Each additional hour (same callout)
                  </th>
                </tr>
              </thead>
              <tbody className="text-muted">
                {pricingRows.map((row) => (
                  <tr key={row.type} className="border-b border-line last:border-b-0">
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
              Written reports are billed on top of scan time. The scope of the
              report is agreed before work starts.
            </p>
            <p>
              Booking is usually 1 to 2 days out for a small job. In the summer
              peak, it can be up to a week out, so call early if your schedule
              is tight.
            </p>
          </Prose>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <Heading className="text-3xl text-ink sm:text-4xl">
            GPR vs X-ray for concrete
          </Heading>
          <Prose>
            <p className="mt-5">
              Ground penetrating radar (GPR) only needs access to one side of
              the concrete. X-ray needs access to both sides, which rules it out
              for slab-on-grade.
            </p>
            <p>
              GPR uses no radiation. Nobody needs to leave the area, so other
              trades can keep working nearby.
            </p>
            <p>
              GPR results are available on site. Findings are marked on the slab
              as we scan, so you can core or cut once the marks are down.
            </p>
            <p>
              On cost, GPR is generally the cheaper option. There is no
              evacuation, no film processing and less disruption to the rest of
              the site. Each job is different, so ask us which method fits your
              slab.
            </p>
          </Prose>

          <Heading className="mt-12 text-3xl text-ink sm:text-4xl">
            How deep GPR scans concrete
          </Heading>
          <Prose>
            <p className="mt-5">
              Our Proceq GP8000 and GP8800 handheld units can scan through 24+
              inches of concrete.
            </p>
            <p>
              Real results depend on the slab. Dense rebar can hide what sits
              below it, and moisture in the concrete reduces how deep the signal
              travels. We will tell you on site if conditions are limiting what
              we can see.
            </p>
            <p>
              GPR can locate rebar, post-tension cables, conduits, heat pipes
              and voids, and it can measure slab thickness. No scanning method
              can promise to find everything, which is why good drawings and
              site information help.
            </p>
          </Prose>

          <Heading className="mt-12 text-3xl text-ink sm:text-4xl">
            Same-day results and reports
          </Heading>
          <Prose>
            <p className="mt-5">
              Yes, you get results the same day. Findings are marked on the
              concrete during the scan, and on-site data processing and
              real-time reporting are available.
            </p>
            <p>For basic services, a jobsheet is sent the same day.</p>
            <p>
              Written reports have a default turnaround of one week. Smaller
              reports may be faster and larger ones may take longer. We agree on
              the timeline with you before work starts.
            </p>
          </Prose>
        </Container>
      </Section>

      <Section className="bg-cream" id="prepare">
        <Container className="max-w-3xl">
          <Heading className="text-3xl text-ink sm:text-4xl">
            What to have ready before the crew arrives
          </Heading>
          <Prose>
            <p className="mt-5">
              Good information up front helps us estimate time accurately and
              finish faster. Please have the following ready:
            </p>
            <ol className="list-decimal space-y-2 pl-5">
              {prepareItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <p>
              The location count and area help us plan the time on site. They do
              not set the price.
            </p>
            <p>
              If heat lines are a concern, our{" "}
              <TextLink href="/services/thermography">
                thermography service
              </TextLink>{" "}
              can help trace them. For buried services outside the building, see{" "}
              <TextLink href="/services/utility-locating">
                utility locating
              </TextLink>
              .
            </p>
          </Prose>

          <Heading className="mt-12 text-3xl text-ink sm:text-4xl">
            Who does the work
          </Heading>
          <Prose>
            <p className="mt-5">
              Structure Scan has six full-time technicians. Every technician is
              trained on every service we offer, through internal and third-party
              training, with proven competency.
            </p>
            <p>
              Learn more <TextLink href="/about">about us</TextLink> or see our
              full list of <TextLink href="/services">services</TextLink>.
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
                1-204-777-6590
              </a>{" "}
              or email{" "}
              <a
                href={`mailto:${site.email}`}
                className="font-semibold underline decoration-white/50 underline-offset-2"
              >
                info@structurescan.ca
              </a>{" "}
              with your locations and slab type for an estimate. You can also
              reach us through our{" "}
              <Link
                href="/contact"
                className="font-semibold underline decoration-white/50 underline-offset-2"
              >
                contact page
              </Link>{" "}
              or read more about{" "}
              <Link
                href="/services/concrete-scanning"
                className="font-semibold underline decoration-white/50 underline-offset-2"
              >
                concrete scanning
              </Link>
              .
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
