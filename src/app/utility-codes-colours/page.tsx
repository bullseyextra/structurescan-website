import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { UtilityColoursJsonLd, type FaqItem } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/PageHero";
import { ButtonLink } from "@/components/ButtonLink";
import {
  Container,
  Heading,
  Photo,
  Prose,
  Section,
} from "@/components/LayoutBits";
import { pageMeta, pageSeo } from "@/lib/seo";
import { media, site } from "@/lib/site";

export const metadata: Metadata = pageMeta(pageSeo.utilityCodesColours);

const linkClass =
  "font-semibold text-brand underline decoration-brand/40 underline-offset-2 hover:text-brand-dark";

const lightLinkClass =
  "font-semibold text-white underline decoration-white/50 underline-offset-2";

const phoneLabel = "1-204-777-6590";

const colours = [
  {
    name: "White",
    hex: "#ffffff",
    meaning:
      "Proposed excavation (the route or boundary where the dig is planned)",
  },
  {
    name: "Pink",
    hex: "#ff5fa8",
    meaning: "Temporary survey markings",
  },
  {
    name: "Red",
    hex: "#d7261e",
    meaning: "Electric power lines, cables, conduit and lighting cables",
  },
  {
    name: "Yellow",
    hex: "#ffd60a",
    meaning: "Gas, oil, steam, petroleum or gaseous materials",
  },
  {
    name: "Orange",
    hex: "#ff7a00",
    meaning:
      "Communications, alarm or signal lines, cables or conduit (telephone, cable TV, fibre)",
  },
  {
    name: "Blue",
    hex: "#0a5bd3",
    meaning: "Potable (drinking) water",
  },
  {
    name: "Green",
    hex: "#1b9a3c",
    meaning: "Sewers and drain lines (sanitary and storm)",
  },
  {
    name: "Purple",
    hex: "#7a2bbf",
    meaning: "Reclaimed water, irrigation and slurry lines",
  },
] as const;

const sources = [
  {
    href: "https://www.apwa.org/wp-content/uploads/Uniform-Color-Code-1.pdf",
    label: "APWA Uniform Color Code card",
  },
  {
    href: "https://www.apwa.org/wp-content/uploads/APWA-Guide_UniformTempMarkingsNEW-V1-02-25-22.pdf",
    label:
      "APWA Guide, Uniform Temporary Marking of Underground Facilities (2022)",
  },
  {
    href: "https://www.info-ex.com/wp-content/uploads/2024/09/Chapter-3.CCGA-Best-Practices-Manual-Version-5.0.pdf",
    label:
      "Canadian Common Ground Alliance Best Practices v5.0, practice 3-3 Colour Code",
  },
  {
    href: "https://www.info-ex.com/en/damages-prevention/guides-and-tools/colour-code/",
    label: "Info-Ex, Colour Code",
  },
  {
    href: "https://utilitysafety.ca/wp-content/uploads/2022/08/Colour-Code.pdf",
    label: "Utility Safety Partners, Colour Code Explanation",
  },
  {
    href: "https://www.cer-rec.gc.ca/en/safety-environment/damage-prevention/contractors/construction-near-pipelines/construction-near-pipelines.pdf",
    label: "Canadian Energy Regulator, Construction Near Pipelines",
  },
  {
    href: "https://clickbeforeyoudigmb.com/homeowners/",
    label: "Click Before You Dig MB, for homeowners",
  },
  {
    href: "https://www.hydro.mb.ca/safety/outdoor/click-before-you-dig/",
    label: "Manitoba Hydro, Click Before You Dig",
  },
  {
    href: "https://www.hydro.mb.ca/docs/safety/safe_excavation_safety_watch_guidelines.pdf",
    label: "Manitoba Hydro, Safe Excavation and Safety Watch guidelines",
  },
] as const;

const ccgaHref =
  "https://www.info-ex.com/wp-content/uploads/2024/09/Chapter-3.CCGA-Best-Practices-Manual-Version-5.0.pdf";
const cbydHref = "https://clickbeforeyoudigmb.com/homeowners/";
const hydroHref = "https://www.hydro.mb.ca/safety/outdoor/click-before-you-dig/";
const hydroGuideHref =
  "https://www.hydro.mb.ca/docs/safety/safe_excavation_safety_watch_guidelines.pdf";
const apwaHref = "https://www.apwa.org/wp-content/uploads/Uniform-Color-Code-1.pdf";
const homeownersId = "what-to-do-if-you-see-marks-on-your-property-homeowners";

type PageFaq = FaqItem & {
  body?: ReactNode;
};

const faqs: readonly PageFaq[] = [
  {
    question: "What do the different utility locate colours mean?",
    answer:
      "White marks the proposed excavation. Pink is temporary survey markings. Red is electric power lines, cables, conduit and lighting cables. Yellow is gas, oil, steam, petroleum or gaseous materials. Orange is communications, alarm or signal lines, cables or conduit. Blue is potable (drinking) water. Green is sewers and drain lines. Purple is reclaimed water, irrigation and slurry lines.",
  },
  {
    question: "What does pink paint mean on the ground?",
    answer: "Pink paint is a temporary survey marking, not a buried utility.",
  },
  {
    question: "What does white paint or a white flag mean?",
    answer:
      "White marks the planned excavation area, put down by the excavator before locators arrive.",
  },
  {
    question: "What does blue paint mean? What about green?",
    answer:
      "Blue is potable (drinking) water. Green is sewers and drain lines, both sanitary and storm.",
  },
  {
    question: "Do locate marks show how deep the line is?",
    answer:
      "No. Locate marks show horizontal position only. Click Before You Dig MB says to expose the line with hand tools within one metre on either side of the marks, or within five metres of high-pressure pipelines.",
    body: (
      <>
        No. Locate marks show horizontal position only.{" "}
        <ExternalLink href={cbydHref}>Click Before You Dig MB</ExternalLink>{" "}
        says to expose the line with hand tools within one metre on either side
        of the marks, or within five metres of high-pressure pipelines.
      </>
    ),
  },
  {
    question: "How long are locate marks good for in Manitoba?",
    answer:
      "Manitoba Hydro asks for a re-mark if work has not started within 14 days of the locate. Marks also fade, so check the locate form.",
    body: (
      <>
        <ExternalLink href={hydroHref}>Manitoba Hydro</ExternalLink> asks for a
        re-mark if work has not started within 14 days of the locate. Marks
        also fade, so check the locate form.
      </>
    ),
  },
  {
    question: "Are private utility lines marked in these colours?",
    answer:
      "Yes, a private locator uses the same colour code. Click Before You Dig MB does not mark customer-owned lines. For those lines, see private utility locates in Winnipeg.",
    body: (
      <>
        Yes, a private locator uses the same colour code. Click Before You Dig
        MB does not mark customer-owned lines. For those lines, see{" "}
        <TextLink href="/services/utility-locating">
          private utility locates in Winnipeg
        </TextLink>
        .
      </>
    ),
  },
  {
    question: "Who do I call if I see marks I do not recognize?",
    answer:
      "Call the number on the locate form, Click Before You Dig MB at 1-800-940-3447, or Structure Scan at 1-204-777-6590 for a private locate.",
  },
  {
    question: "What should I do if I find paint or flags on my lawn or driveway?",
    answer:
      "Do not scrub, paint over or pull out the marks or flags. See What to do if you see marks on your property for the full steps, including when to call Click Before You Dig MB or a private locator.",
    body: (
      <>
        Do not scrub, paint over or pull out the marks or flags. See{" "}
        <TextLink href={`#${homeownersId}`}>
          What to do if you see marks on your property
        </TextLink>{" "}
        for the full steps, including when to call Click Before You Dig MB or a
        private locator.
      </>
    ),
  },
  {
    question: "How much does a private locate cost?",
    answer:
      "Call for an estimate. Time-based rates are published on the utility locating page. Emergency callouts are quoted case by case and are COD.",
    body: (
      <>
        Call for an estimate. Time-based rates are published on the{" "}
        <TextLink href="/services/utility-locating">
          utility locating page
        </TextLink>
        . Emergency callouts are quoted case by case and are COD.
      </>
    ),
  },
];

function TextLink({
  href,
  children,
  className = linkClass,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function ExternalLink({
  href,
  children,
  className = linkClass,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

function ColourChip({ hex }: { hex: string }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block h-6 w-9 shrink-0 rounded-[0.4rem] border border-ink/35"
      style={{ backgroundColor: hex }}
    />
  );
}

export default function UtilityCodesColoursPage() {
  return (
    <>
      <UtilityColoursJsonLd faqs={faqs} />
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="grid-texture pointer-events-none absolute inset-0" />
        <Container className="relative grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
              Locate colours &amp; codes
            </p>
            <h1 className="font-display mt-3 max-w-xl text-4xl font-extrabold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Utility Locate Colours and Codes: What the Paint and Flags Mean
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
              Locators in Manitoba use a standard colour (color) code so anyone
              on a Winnipeg site can read the marks. Red is electric, yellow is
              gas, orange is communications, blue is water, green is sewer,
              purple is reclaimed water and irrigation, pink is survey and
              white is the planned dig. Marks show where, not how deep. The
              colour table is below.
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
          {/* PHOTOS: owner says locate jobsheet attachments hold real photos of Structure Scan's own utility markings (flags, paint on grass, asphalt, concrete). Owner to pick and approve; need the file and permission to show any site, address or client names. Replace/add after approval. */}
          <figure className="relative">
            <Photo
              src={media.paintedLocates}
              alt="Colour-coded utility locate paint marks on a concrete pad in Winnipeg"
              className="h-auto max-h-[36rem] w-full rounded-3xl object-cover"
            />
          </figure>
        </Container>
      </section>

      <Section>
        <Container className="max-w-3xl!">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              {
                href: "/utility-codes-colours",
                label: "Utility colours and codes",
              },
            ]}
          />
          <Heading className="mt-8 text-3xl text-ink sm:text-4xl">
            Utility locate colours at a glance
          </Heading>
          <Prose>
            <p className="mt-5">
              This is the colour code used in Canada (see CSA Z247 and the{" "}
              <ExternalLink href={ccgaHref}>
                Canadian Common Ground Alliance Best Practices
              </ExternalLink>
              ). Flags and stakes use the same colours as the paint.
            </p>
          </Prose>
          <div className="mt-6 overflow-x-auto rounded-3xl border border-line bg-cream">
            <table className="w-full text-left text-base">
              <caption className="sr-only">Utility locate colour code</caption>
              <thead>
                <tr className="border-b border-line text-ink">
                  <th
                    scope="col"
                    className="px-4 py-3.5 font-display text-[1.0625rem] font-semibold"
                  >
                    Colour
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3.5 font-display text-[1.0625rem] font-semibold"
                  >
                    Meaning
                  </th>
                </tr>
              </thead>
              <tbody>
                {colours.map((colour) => (
                  <tr
                    key={colour.name}
                    className="border-b border-line last:border-b-0"
                  >
                    <th
                      scope="row"
                      className="whitespace-nowrap px-4 py-3.5 align-middle"
                    >
                      <span className="inline-flex items-center gap-3 font-display text-xl font-bold text-ink">
                        <ColourChip hex={colour.hex} />
                        {colour.name}
                      </span>
                    </th>
                    <td className="px-4 py-3.5 align-middle text-muted">
                      {colour.meaning}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Prose>
            <p className="mt-5">
              If you see a colour not on this list, ask the owner of the land
              or call{" "}
              <ExternalLink href={cbydHref}>Click Before You Dig MB</ExternalLink>
              .
            </p>
          </Prose>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container className="max-w-3xl!">
          <Heading className="text-3xl text-ink sm:text-4xl">
            What the paint, flags and stakes tell you
          </Heading>
          <Prose>
            <p className="mt-5">
              Paint, flags and stakes carry the same colours. The marks show a
              line&apos;s horizontal position only. They do not show depth.
            </p>
            <p>
              The marks are also approximate.{" "}
              <ExternalLink href={cbydHref}>Click Before You Dig MB</ExternalLink>{" "}
              says that within one metre on either side of the marks (five
              metres from high-pressure pipelines), you should expose the line
              with hand tools.
            </p>
            <p>
              The{" "}
              <ExternalLink href={ccgaHref}>
                Canadian Common Ground Alliance Best Practices
              </ExternalLink>{" "}
              describe paint marks as 30 to 90 cm long and about 3 cm wide,
              placed at least every 3 m and at changes in direction. Letters,
              initials or a logo beside the marks may name the owner, and the
              width of a larger facility (over 50 mm) may be written there, as
              shown on the{" "}
              <ExternalLink href={apwaHref}>
                APWA Uniform Color Code card
              </ExternalLink>
              .
            </p>
            <p>
              Crews that mark their own sites can buy marking paint and flags
              from <ExternalLink href="https://mb1call.ca">MB1Call</ExternalLink>
              .
            </p>
          </Prose>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl!">
          <Heading className="text-3xl text-ink sm:text-4xl">
            White and pink: not a utility
          </Heading>
          <Prose>
            <p className="mt-5">
              White paint or a white flag is not a buried line. It marks the
              planned excavation, put down by the excavator so locators know
              where to work.{" "}
              <ExternalLink href={hydroGuideHref}>Manitoba Hydro</ExternalLink>{" "}
              asks excavators to pre-mark the proposed excavation with white
              paint, stakes or flags, and not to drive stakes or flags deeper
              than 150 mm. In winter, Hydro says to mark in black paint when
              snow conditions warrant.
            </p>
            <p>
              Pink is a temporary survey marking. It is not a buried utility.
            </p>
          </Prose>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container className="max-w-3xl!">
          <Heading className="text-3xl text-ink sm:text-4xl">
            Who marks what in Manitoba
          </Heading>
          <Prose>
            <p className="mt-5">
              <ExternalLink href={cbydHref}>Click Before You Dig MB</ExternalLink>{" "}
              notifies registered utility owners when someone plans to dig. Give
              at least three full working days&apos; notice, at{" "}
              <ExternalLink href={cbydHref}>clickbeforeyoudigmb.com</ExternalLink>{" "}
              or 1-800-940-3447. Each owner marks its own lines.{" "}
              <ExternalLink href={hydroHref}>Manitoba Hydro</ExternalLink> marks
              the electric and gas lines it owns.
            </p>
            <p>
              Customer-owned lines are not registered with Click Before You Dig
              MB, so they are not marked on that ticket. That includes water
              and sewer service lines, sprinkler systems and lines between
              buildings. A private locator marks those lines, using the same
              colour code.
            </p>
            <p>
              Need those private lines marked? See{" "}
              <TextLink href="/services/utility-locating">
                private utility locates in Winnipeg
              </TextLink>
              . Call {phoneLabel} or <TextLink href="/contact">get an estimate</TextLink>
              .
            </p>
          </Prose>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl!">
          <Heading className="text-3xl text-ink sm:text-4xl">
            What to do when you see marks (contractors and crews)
          </Heading>
          <Prose>
            <ul className="mt-5 list-disc space-y-2 pl-5">
              <li>
                Do not remove, scrub or paint over the marks or flags. Keep
                them visible.
              </li>
              <li>
                Keep the locate form on site. For Manitoba Hydro work, that is
                the Facilities Locate form, as{" "}
                <ExternalLink href={hydroHref}>Hydro requires</ExternalLink>.
              </li>
              <li>
                Treat the marks as approximate.{" "}
                <ExternalLink href={cbydHref}>
                  Click Before You Dig MB
                </ExternalLink>{" "}
                says to hand-dig within one metre of the marks, and within five
                metres of high-pressure pipelines.
              </li>
              <li>
                If work has not started within 14 days of a{" "}
                <ExternalLink href={hydroHref}>Manitoba Hydro</ExternalLink>{" "}
                locate, ask for a re-mark.
              </li>
              <li>
                If the marks do not match the locate map, call the number on
                the form.
              </li>
            </ul>
          </Prose>
        </Container>
      </Section>

      <Section id={homeownersId} className="bg-cream">
        <Container className="max-w-3xl!">
          <Heading className="text-3xl text-ink sm:text-4xl">
            What to do if you see marks on your property (homeowners)
          </Heading>
          <Prose>
            <p className="mt-5">
              Do not scrub, paint over or pull out the marks or flags.
            </p>
            <p>
              The marks may be there because a utility or contractor requested
              a locate, a survey crew is working, or a neighbour or contractor
              plans to dig. Pink means a survey, not a buried line.
            </p>
            <p>
              Keep children, pets and any digging off the marked line until the
              work is done.
            </p>
            <p>
              If you plan to dig yourself, for a fence post, a deck footing or
              a tree, request a locate at least three full working days ahead
              through{" "}
              <ExternalLink href={cbydHref}>Click Before You Dig MB</ExternalLink>{" "}
              at 1-800-940-3447, then hand-dig within one metre of the marks, as
              that service requires.
            </p>
            <p>
              If you did not request a locate and are not sure why the marks
              are there, call Click Before You Dig MB or the contractor named
              on the marks or flags.
            </p>
            <p>
              If your lines to a garage, shed, pool, sprinkler system or the
              property line are customer-owned, the utilities will not mark
              them. Call a{" "}
              <TextLink href="/services/utility-locating">
                private locator
              </TextLink>
              . A missing colour does not mean the ground is clear, and no mark
              does not mean there is no utility.
            </p>
          </Prose>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl!">
          <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-8 text-cream sm:px-10 sm:py-10">
            <div className="grid-texture pointer-events-none absolute inset-0" />
            <div className="relative">
              <Heading className="text-3xl text-cream sm:text-4xl">
                When the colours are not enough
              </Heading>
              <div className="mt-5 space-y-4 leading-relaxed text-cream/80">
                <p>
                  A missing colour does not mean nothing is there. Private
                  lines, unregistered lines and abandoned lines may still be in
                  the ground.
                </p>
                <p>
                  Structure Scan technicians locate with electromagnetic tools
                  and ground penetrating radar. They mark located water, gas,
                  electric, sewer and telecom services with paint and flags,
                  explain the marks to your crew, send a jobsheet the same day,
                  and, when you need a record, produce submeter GNSS maps in
                  digital and printed form. See{" "}
                  <TextLink
                    href="/services/utility-locating"
                    className={lightLinkClass}
                  >
                    private utility locates in Winnipeg
                  </TextLink>
                  . Need tickets, public locates and private sweeps in one
                  file? See{" "}
                  <TextLink
                    href="/services/locate-management"
                    className={lightLinkClass}
                  >
                    locate management
                  </TextLink>
                  .
                </p>
                <p>
                  Need private lines marked? Call {phoneLabel} or{" "}
                  <TextLink href="/contact" className={lightLinkClass}>
                    get an estimate
                  </TextLink>
                  .
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section id="faq">
        <Container className="max-w-3xl!">
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
                <p className="mt-2 leading-relaxed text-muted">
                  {faq.body ?? faq.answer}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-cream">
        <Container className="max-w-3xl!">
          <Heading className="text-3xl text-ink sm:text-4xl">Sources</Heading>
          <ul className="mt-5 list-disc columns-1 gap-10 pl-5 text-muted md:columns-2">
            {sources.map((source) => (
              <li key={source.href} className="mb-2 break-inside-avoid">
                <ExternalLink href={source.href}>{source.label}</ExternalLink>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <section className="bg-paper pb-16">
        <Container className="max-w-3xl!">
          <div className="rounded-3xl bg-brand px-6 py-12 text-white sm:px-10">
            <Heading className="text-3xl text-white sm:text-4xl">
              Get an estimate
            </Heading>
            <p className="mt-3 max-w-2xl text-white/90">
              Need private lines marked in Winnipeg or elsewhere in Manitoba?
              Call {phoneLabel} or use the form on our{" "}
              <TextLink href="/contact" className={lightLinkClass}>
                contact page
              </TextLink>{" "}
              to tell us about the job.
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
