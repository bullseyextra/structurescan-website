import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { AdvancedGprJsonLd, type FaqItem } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/PageHero";
import { ButtonLink } from "@/components/ButtonLink";
import { Container, Heading, Prose, Section } from "@/components/LayoutBits";
import { pageMeta, pageSeo } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta(pageSeo.advancedGpr);

const linkClass =
  "font-semibold text-brand underline decoration-brand/40 underline-offset-2 hover:text-brand-dark";

const lightLinkClass =
  "font-semibold text-white underline decoration-white/50 underline-offset-2";

const phoneLabel = site.phoneDisplay;

const faqs: readonly FaqItem[] = [
  {
    question: "What is a GPR bridge deck condition assessment?",
    answer:
      "It's a non-destructive radar survey of the whole deck that maps concrete cover and the relative likelihood of deterioration at or above the top rebar mat. Engineers use it to target cores and testing and to plan milling and rehabilitation.",
  },
  {
    question: "Can GPR assess a bridge deck through the asphalt?",
    answer:
      "Yes. ASTM D6087 describes GPR as currently the only non-destructive method that can evaluate the condition of an asphalt-covered concrete deck without removing the overlay.",
  },
  {
    question: "What does a deterioration map show?",
    answer:
      "It shows where reflections from the top rebar are weaker than across the rest of the deck, which points to zones more likely to have corrosion, deteriorated concrete or delamination. The map is relative, so we recommend confirming flagged zones with cores, chloride testing, half-cell surveys or sounding.",
  },
  {
    question: "Does GPR show delamination?",
    answer:
      "GPR flags zones where corrosion-related delamination is likely, but on its own it does not identify most delaminations. FHWA notes it does so directly only under restrictive conditions, so we recommend confirming with cores or sounding.",
  },
  {
    question: "How accurate is GPR for concrete cover?",
    answer:
      "Every report states its tolerance. Recent bridge deck reports used ±¼ in. (±6 mm) to the top bar. Accuracy depends on the asphalt thickness and calibration, so a few cores turn readings into verified cover.",
  },
  {
    question: "Which standards do you follow?",
    answer:
      "Deterioration maps use the amplitude method described in ASTM D6087, and ACI 228.2R is the general reference for concrete NDT. If your project has its own specification, send it with your estimate request and we'll confirm whether our equipment and method fit.",
  },
  {
    question: "Are your reports stamped by an engineer?",
    answer:
      "No. Our written reports are not stamped. They give your engineer the data and interpretation needed to make structural decisions.",
  },
  {
    question: "How long does the written report take?",
    answer:
      "Typically 7 working days from data collection. Larger reports follow a schedule agreed at the estimate stage, and the standard jobsheet goes out the same day.",
  },
  {
    question: "When can deck surveys be done, and who handles traffic control?",
    answer:
      "We schedule deck condition surveys spring to fall, on a dry to damp surface with no snow, ice or standing water. The client or contractor arranges traffic control and lane closures.",
  },
  {
    question: "Can you assess parkades and large slabs?",
    answer:
      "Yes. The same multichannel equipment maps cover, deterioration likelihood, slab thickness, voids and embedded conduits or post-tension layout across parkade decks and large floors, with detail maps for each feature type.",
  },
  {
    question: "How is advanced GPR priced?",
    answer: `Case by case. Each project gets an estimate based on the structure, area, access and report scope, so call ${phoneLabel} or send us the job details.`,
  },
];

const deckMaps = [
  "Concrete cover to the top rebar mat, as a heat map with tabulated readouts",
  "The relative likelihood of deterioration and corrosion at or above the top mat, using the amplitude method described in ASTM D6087",
  "Zones prone to delamination, flagged for confirmation",
  "Asphalt or overlay thickness, where the interfaces show in the data",
  "Deck thickness, rebar layout, conduits and other embedments",
] as const;

const limits = [
  {
    lead: "It does not directly identify most delaminations.",
    rest: " FHWA notes GPR assesses delamination directly only under restrictive conditions. It points to where delamination is likely.",
  },
  {
    lead: "It reads the upper part of the deck best.",
    rest: " Sensitivity is highest in the upper half of the deck, at and above the top mat.",
  },
  {
    lead: "The maps are relative.",
    rest: " A deterioration map compares one part of a deck with the rest. Cores provide the ground truth that turns it into confirmed condition.",
  },
  {
    lead: "Conditions affect the data.",
    rest: " De-icing salts, standing water, snow, ice and cold all change the signal, which is why we schedule deck surveys spring to fall.",
  },
  {
    lead: "Some decks are not suitable.",
    rest: " ASTM D6087 notes the method may not suit decks with cathodic protection (coke breeze) or conductive aggregate such as slag.",
  },
] as const;

const reportSections = [
  "Executive summary with key findings and recommendations",
  "Introduction, purpose and scope",
  "Objectives of the investigation",
  "Methodology: scan pattern and orientation to the top mat, positioning (GNSS or reference markers) and processing",
  "Equipment and software",
  "How to read the report, and its limitations: positioning, depth reference (top of asphalt or net cover), measurement tolerance and the relative nature of the maps",
  "Findings by objective, such as cover heat maps, shallow-bar readouts, deterioration and corrosion-likelihood maps with delamination-prone zones, asphalt thickness or layer maps, feature detail maps and AR overlays",
  "Conclusions",
  "Recommendations, for example milling depths, locations for cores, chloride testing, half-cell surveys or sounding, re-scans, field marking and monitoring",
  "Appendices: grid layout, detail maps, site photos and AR images",
] as const;

const equipment = [
  {
    name: "Proceq GS9000 with GX1 array",
    what: "Multichannel stepped-frequency GPR cart with real-time 3D",
    specs:
      "500 to 3000 MHz; 50 channels; 0.85 m scan width; multiband GNSS (typically 1 to 5 cm with RTK/SSR corrections)",
    use: "Bridge decks, roadways, parkades and large slabs: full-coverage cover, deterioration and condition maps, 3D volumes and depth slices",
    webp: "/media/advanced-gpr/equipment-gs9000.webp",
    src: "/media/advanced-gpr/equipment-gs9000.png",
    alt: "Proceq GS9000 multichannel GPR pushcart with GNSS receiver and tablet sunshade",
  },
  {
    name: "Proceq GS8000",
    what: "Stepped-frequency subsurface GPR cart",
    specs:
      "40 to 3440 MHz; minimum detectable target 1 cm; up to 100 scans/m; multiband GNSS (typically 1 to 5 cm)",
    use: "Deeper and open-field work along road corridors: utilities and other buried features before rehab",
    webp: "/media/advanced-gpr/equipment-gs8000.webp",
    src: "/media/advanced-gpr/equipment-gs8000.png",
    alt: "Proceq GS8000 GPR pushcart with GNSS receiver and tablet sunshade, side view",
  },
  {
    name: "Proceq GP8100",
    what: "Portable stepped-frequency concrete GPR array",
    specs:
      "400 to 4000 MHz; 6 antennas; 25 cm effective scan width; 80 cm penetration depth",
    use: "Targeted confirmation scans, columns, walls and tight areas; verifying features found by the cart",
    webp: "/media/advanced-gpr/equipment-gp8100.webp",
    src: "/media/advanced-gpr/equipment-gp8100.png",
    alt: "Proceq GP8100 portable concrete GPR scanner",
  },
] as const;

const recentWork = [
  {
    title: "Two highway bridge decks, asphalt-surfaced, Manitoba.",
    body: "Before milling, the contractor needed to know where the top rebar sat. Both decks were scanned with a GS9000 in a single field day. The written report, delivered within 7 working days, gave cover heat maps, radargram depth readings at the shallowest bars, and clear limitations. Recommendations covered milling depths and confirmation cores.",
  },
  {
    title: "Rural bridge deck, Manitoba. Cover plus deterioration.",
    body: "Full-deck GS9000 survey. The report paired a cover map with a deterioration-likelihood map and AR overlays. It flagged where to focus coring, chloride testing and half-cell surveys before rehabilitation.",
  },
  {
    title: "Large industrial floor slab, Manitoba.",
    body: "GS9000 grid survey with GP8100 confirmation and a drain camera. Mapped embedded conduits, voids, thickened pads (about 6 in. to over 16 in.) and drain lines. Delivered separate detail maps for each feature, AR overlays, depth slices and the full dataset for the design team.",
  },
] as const;

function TextLink({
  href,
  children,
  className = linkClass,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const external = href.startsWith("http");
  if (external || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={className}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function AssetImage({
  webp,
  src,
  alt,
  width,
  height,
  className,
  priority = false,
}: {
  webp: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <picture>
      <source type="image/webp" srcSet={webp} />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
      />
    </picture>
  );
}

function EquipmentPhoto({
  item,
  frameClassName,
}: {
  item: (typeof equipment)[number];
  frameClassName: string;
}) {
  return (
    <AssetImage
      webp={item.webp}
      src={item.src}
      alt={item.alt}
      width={800}
      height={600}
      className={frameClassName}
    />
  );
}

export default function AdvancedGprPage() {
  return (
    <>
      <AdvancedGprJsonLd faqs={faqs} />
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="grid-texture pointer-events-none absolute inset-0" />
        <Container className="relative grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
              Advanced GPR
            </p>
            <h1 className="font-display mt-3 max-w-xl text-4xl font-extrabold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Advanced GPR for Bridge Decks, Roadways and Parkades
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
              Structure Scan runs large-scale GPR condition assessments for
              bridge decks and roadways, plus parkades and other large concrete
              structures, using multichannel Proceq equipment. You get a written
              report built to give engineers the information they need: cover
              maps, deterioration and corrosion-likelihood maps, 3D data,
              limitations and recommendations, typically within 7 working days.
              We are based in Winnipeg and work across Manitoba, Saskatchewan,
              Ontario, Nunavut and the Northwest Territories.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/contact" variant="primary" size="lg">
                Get an estimate
              </ButtonLink>
              <span className="text-[1.0625rem] text-cream/85">
                or call{" "}
                <TextLink
                  href={`tel:${site.phoneTel}`}
                  className="font-semibold whitespace-nowrap text-white underline decoration-white/50 underline-offset-2"
                >
                  {phoneLabel}
                </TextLink>
                .
              </span>
            </div>
          </div>
          <figure className="flex justify-center">
            <AssetImage
              webp="/media/advanced-gpr/gpr-ar-overlay-asphalt-deck.webp"
              src="/media/advanced-gpr/gpr-ar-overlay-asphalt-deck.jpg"
              width={522}
              height={394}
              priority
              alt="Augmented-reality overlay of GPR scan data on an asphalt-surfaced bridge deck, with coloured reflection bands across the lanes"
              className="h-auto w-auto max-w-full rounded-[1.25rem] shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
            />
          </figure>
        </Container>
      </section>

      <Section id="bridge-decks">
        <Container className="max-w-3xl!">
          <Breadcrumbs
            includeJsonLd={false}
            items={[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/services/advanced-gpr", label: "Advanced GPR" },
            ]}
          />
          <Heading className="mt-8 text-3xl text-ink sm:text-4xl">
            Bridge deck condition assessments with GPR
          </Heading>
          <Prose>
            <p className="mt-5">
              A GPR deck survey covers the whole deck in dense, closely spaced
              passes, so you see the deck as a set of maps instead of a handful
              of spot checks. On a bridge deck we map:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              {deckMaps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>The survey works through asphalt without removing it.</p>
            <blockquote className="border-l-4 border-brand py-1 pl-5 font-medium text-ink">
              <p>
                ASTM D6087 describes GPR as &quot;currently the only
                nondestructive method that can evaluate bridge deck condition
                on bridge decks containing an asphalt overlay.&quot;
              </p>
            </blockquote>
          </Prose>
          <Heading as="h3" className="mt-12 text-2xl text-ink sm:text-[1.75rem]">
            Before milling or overlay work
          </Heading>
          <Prose>
            <p className="mt-4">
              Milling into the top mat turns a resurfacing job into a repair
              job. A cover map shows where the top rebar sits across the deck,
              and radargram readouts at the shallowest bars give the depths
              that matter most. Engineers and contractors use those numbers to
              set milling depths, decide where to confirm with cores or test
              pits, and plan any field marking before the milling crew arrives.
            </p>
          </Prose>
        </Container>
        <Container className="max-w-5xl!">
          <figure className="mt-8">
            <AssetImage
              webp="/media/advanced-gpr/gpr-cover-heat-map-radargram.webp"
              src="/media/advanced-gpr/gpr-cover-heat-map-radargram.jpg"
              width={1370}
              height={475}
              alt="Concrete cover heat map of a bridge deck strip above a GPR radargram, with a crosshair on a shallow top-mat bar"
              className="h-auto w-full rounded-2xl bg-[#141414] shadow-[0_18px_40px_rgba(28,23,20,0.08)]"
            />
          </figure>
        </Container>
        <Container className="max-w-3xl!">
          <Heading as="h3" className="mt-12 text-2xl text-ink sm:text-[1.75rem]">
            Corrosion, deterioration and delamination assessments for rehab
            planning
          </Heading>
          <Prose>
            <p className="mt-4">
              As steel corrodes, the concrete around it breaks down, and
              delaminations form at or just above the rebar level, where you
              cannot see them from the surface. GPR flags zones where
              deterioration, including corrosion-related delamination, is
              likely, based on how strongly the top rebar reflects compared
              with the rest of the deck. We mark those zones for confirmation
              by cores and sounding. Large separations, for example a debonded
              overlay, can sometimes show directly in the data.
            </p>
            <p>
              The value is in where the testing goes. Instead of spreading
              cores across a deck at random, your engineer can target coring,
              chloride testing, half-cell surveys and sounding at the zones the
              map flags, and compare them against areas that look sound.
            </p>
          </Prose>
          <figure className="mt-8">
            <AssetImage
              webp="/media/advanced-gpr/gpr-deterioration-likelihood-map.webp"
              src="/media/advanced-gpr/gpr-deterioration-likelihood-map.jpg"
              width={718}
              height={161}
              alt="Relative deterioration-likelihood map of a bridge deck strip, with a High to Low colour legend"
              className="mx-auto block h-auto w-[718px] max-w-full rounded-2xl bg-[#141414] shadow-[0_18px_40px_rgba(28,23,20,0.08)]"
            />
            <figcaption className="mt-3 text-center text-sm text-muted">
              Deterioration-likelihood map (relative), asphalt-covered bridge
              deck.
            </figcaption>
          </figure>
          <div className="relative mt-12 overflow-hidden rounded-3xl bg-ink px-6 py-8 text-cream sm:px-10 sm:py-10">
            <div className="grid-texture pointer-events-none absolute inset-0" />
            <div className="relative">
              <Heading as="h3" className="text-[1.75rem] text-cream">
                What GPR won&apos;t tell you on its own
              </Heading>
              <div className="mt-5 space-y-4 leading-relaxed text-cream/80">
                <p>
                  GPR is a screening and mapping tool. It works best alongside
                  other testing, and our reports say so. Based on{" "}
                  <TextLink
                    href="https://infotechnology.fhwa.dot.gov/ground-penetrating-radar-locating-reinforcement/"
                    className={lightLinkClass}
                  >
                    FHWA guidance on GPR for bridges
                  </TextLink>{" "}
                  and ASTM D6087:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  {limits.map((item) => (
                    <li key={item.lead}>
                      <strong className="font-semibold text-white">
                        {item.lead}
                      </strong>
                      {item.rest}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3 text-[1.0625rem] text-muted">
            <ButtonLink href="/contact" variant="primary" size="md">
              Get an estimate
            </ButtonLink>
            <span>
              for a bridge deck survey, or call{" "}
              <TextLink
                href={`tel:${site.phoneTel}`}
                className="font-semibold whitespace-nowrap text-ink no-underline hover:text-brand"
              >
                {phoneLabel}
              </TextLink>
              .
            </span>
          </div>
        </Container>
      </Section>

      <Section id="roadways" className="bg-cream">
        <Container className="max-w-3xl!">
          <Heading className="text-3xl text-ink sm:text-4xl">
            Roadway and pavement GPR assessments
          </Heading>
          <Prose>
            <p className="mt-5">
              The same approach applies to roads. On roadway and pavement
              projects we provide:
            </p>
            <ul className="list-disc space-y-2 pl-5 [&_strong]:font-semibold [&_strong]:text-ink">
              <li>
                <strong>Asphalt layer thickness mapping.</strong> ASTM D4748
                covers non-destructive thickness measurement of bound pavement
                layers with GPR. We use it as background and recommend
                confirming with cores.
              </li>
              <li>
                <strong>
                  Concrete cover on reinforced concrete pavement and approach
                  slabs.
                </strong>
              </li>
              <li>
                <strong>
                  Voids and anomalies under concrete pavement and slabs.
                </strong>
              </li>
              <li>
                <strong>
                  Utilities and buried features in the road corridor before
                  rehab,
                </strong>{" "}
                using the GS8000. For public and private locates on the same
                corridor, see{" "}
                <TextLink href="/services/utility-locating">
                  utility locating
                </TextLink>{" "}
                and{" "}
                <TextLink href="/services/locate-management">
                  locate management
                </TextLink>
                .
              </li>
              <li>
                <strong>Dowel and tie bar checks.</strong> We locate dowels and
                tie bars and check their spacing and position.
              </li>
            </ul>
            <p>
              Survey data is GNSS-referenced and can be exported to CAD, SHP or
              KML, so it drops into your design and asset files.
            </p>
            <p>
              Cart surveys need the lane closed. The client or contractor
              arranges traffic control and lane closures, and we schedule
              around them.
            </p>
          </Prose>
        </Container>
      </Section>

      <Section id="parkades">
        <Container className="max-w-3xl!">
          <Heading className="text-3xl text-ink sm:text-4xl">
            Parkades and other large concrete structures
          </Heading>
          <Prose>
            <p className="mt-5">
              Parkades take the same beating from salt and water that bridge
              decks do, and they carry people and vehicles while repairs are
              planned. On parkade decks and other suspended slabs, we map
              cover, deterioration and corrosion likelihood, delamination-prone
              zones, and rebar and post-tension layout before repairs, coring
              or anchoring. The method is the same whether the owner calls it a
              parkade or a parking garage.
            </p>
            <p>
              On large slabs-on-grade, such as warehouses and plants, we map
              embedded conduits, voids, slab thickness changes and thickened
              pads, and confirm drain lines with a camera. For scan-and-mark
              work before a single cut or core, see{" "}
              <TextLink href="/services/concrete-scanning">
                concrete scanning
              </TextLink>
              .
            </p>
          </Prose>
        </Container>
        <Container className="max-w-5xl!">
          <figure className="mt-8">
            <AssetImage
              webp="/media/advanced-gpr/gpr-ar-overlay-conduits-slab.webp"
              src="/media/advanced-gpr/gpr-ar-overlay-conduits-slab.jpg"
              width={1600}
              height={996}
              alt="Augmented-reality overlay showing an embedded conduit run as a bright red line in GPR data on a large industrial floor slab"
              className="h-auto w-full rounded-2xl bg-[#141414] shadow-[0_18px_40px_rgba(28,23,20,0.08)]"
            />
            <figcaption className="mt-3 text-center text-sm text-muted">
              AR overlay of an embedded conduit run, large industrial slab.
            </figcaption>
          </figure>
        </Container>
      </Section>

      <Section id="equipment" className="bg-cream">
        <Container className="max-w-5xl!">
          <div className="max-w-3xl">
            <Heading className="text-3xl text-ink sm:text-4xl">
              Equipment: multichannel GPR built for large areas
            </Heading>
            <Prose>
              <p className="mt-5">
                A 0.85 m, 50-channel array collects dense, full-coverage data
                in fewer passes, and GNSS ties every scan to real coordinates.
                Data is processed in Screening Eagle&apos;s GPR Insights
                software, which produces the cover, deterioration, layer and 3D
                maps in our reports.
              </p>
            </Prose>
          </div>
          <div className="mt-6 hidden overflow-x-auto rounded-3xl border border-line bg-paper md:block">
            <table className="w-full border-collapse text-left text-[0.9rem]">
              <caption className="sr-only">GPR equipment</caption>
              <thead>
                <tr className="border-b border-line text-ink">
                  <th
                    scope="col"
                    className="px-4 py-3 font-display text-base font-semibold"
                  >
                    Unit
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 font-display text-base font-semibold"
                  >
                    What it is
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 font-display text-base font-semibold"
                  >
                    Key published specs
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 font-display text-base font-semibold"
                  >
                    How we use it
                  </th>
                </tr>
              </thead>
              <tbody>
                {equipment.map((item) => (
                  <tr key={item.name} className="border-b border-line last:border-b-0">
                    <th
                      scope="row"
                      className="w-52 px-4 py-4 align-top font-display text-[1.05rem] font-bold text-ink"
                    >
                      <EquipmentPhoto
                        item={item}
                        frameClassName="mb-3 block h-auto w-full rounded-[0.85rem] border border-line bg-cream"
                      />
                      {item.name}
                    </th>
                    <td className="px-4 py-4 align-top text-muted">{item.what}</td>
                    <td className="px-4 py-4 align-top text-muted">{item.specs}</td>
                    <td className="px-4 py-4 align-top text-muted">{item.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 space-y-3 md:hidden">
            {equipment.map((item) => (
              <article
                key={item.name}
                className="rounded-3xl border border-line bg-paper p-4"
              >
                <EquipmentPhoto
                  item={item}
                  frameClassName="mb-4 block h-auto max-h-[22rem] w-auto max-w-full rounded-[0.85rem] border border-line bg-cream"
                />
                <Heading as="h3" className="text-lg text-ink">
                  {item.name}
                </Heading>
                <dl className="mt-3 space-y-2 text-sm">
                  <div>
                    <dt className="text-muted">What it is</dt>
                    <dd className="font-medium text-ink">{item.what}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">Key published specs</dt>
                    <dd className="font-medium text-ink">{item.specs}</dd>
                  </div>
                  <div>
                    <dt className="text-muted">How we use it</dt>
                    <dd className="font-medium text-ink">{item.use}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
          <Prose>
            <p className="mt-6">
              Prefer to run your own survey? Our sister company{" "}
              <TextLink href="https://smartscanning.ca">Smart Scanning</TextLink>{" "}
              rents Proceq GPR equipment across Canada.
            </p>
          </Prose>
        </Container>
      </Section>

      <Section id="deliverables">
        <Container className="max-w-5xl!">
          <Heading className="text-3xl text-ink sm:text-4xl">
            What you get: the jobsheet and the written report
          </Heading>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-line border-l-4 border-l-brand bg-cream p-6">
              <p className="leading-relaxed text-muted">
                <strong className="mb-1.5 block font-display text-xl font-bold tracking-tight text-ink">
                  Standard jobsheet, every job, same day.
                </strong>
                It covers the scope, what was scanned, notes and
                recommendations, and a Green/Yellow/Red data quality rating
                that tells you how confident the technician is in the data.
              </p>
            </div>
            <div className="rounded-3xl border border-line border-l-4 border-l-brand bg-cream p-6">
              <p className="leading-relaxed text-muted">
                <strong className="mb-1.5 block font-display text-xl font-bold tracking-tight text-ink">
                  Written report, for advanced projects.
                </strong>
                Written reports are typically delivered within 7 working days
                of data collection. Larger reports follow a schedule agreed at
                the estimate stage. A typical report includes:
              </p>
            </div>
          </div>
          <ol className="mt-5 grid list-none gap-2.5 p-0 md:grid-cols-2 md:gap-x-6">
            {reportSections.map((item, index) => (
              <li
                key={item}
                className="relative rounded-[0.9rem] border border-line bg-cream py-3 pr-4 pl-12 text-[0.95rem] leading-normal text-muted"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-2.5 left-3 flex h-6 w-6 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-cream"
                >
                  {index + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
          <Prose>
            <div className="mt-6 max-w-3xl space-y-4">
              <p>
                Processed data, depth slices, CAD/SHP/KML exports and the
                native dataset are available on request.
              </p>
              <p>
                Every report states its limitations and tolerances, and
                recommends confirming results, for example by coring, before
                critical decisions. Our reports are not stamped. They give
                engineers the data and interpretation they need to make their
                decisions.
              </p>
            </div>
          </Prose>
        </Container>
      </Section>

      <Section id="process" className="bg-cream">
        <Container className="max-w-3xl!">
          <Heading className="text-3xl text-ink sm:text-4xl">
            How a project runs
          </Heading>
          <ol className="mt-8 list-none space-y-4 p-0">
            <li className="relative rounded-[1.25rem] border border-line bg-paper py-5 pr-5 pl-[4.25rem] text-muted leading-relaxed">
              <StepNumber>1</StepNumber>
              <strong className="font-semibold text-ink">
                Scope and estimate.
              </strong>{" "}
              Send drawings, the deck, slab or road area, access details, any
              project specification, and the decisions the data needs to
              support. If your project has a specification, send it with your
              estimate request and we&apos;ll confirm whether our equipment and
              method fit.
            </li>
            <li className="relative rounded-[1.25rem] border border-line bg-paper py-5 pr-5 pl-[4.25rem] text-muted leading-relaxed">
              <StepNumber>2</StepNumber>
              <strong className="font-semibold text-ink">Planning.</strong> You
              arrange traffic control and lane closures. We schedule deck
              condition surveys spring to fall, on a dry to damp surface,
              because winter salt, snow and ice affect results. We complete a
              hazard assessment before work starts.
            </li>
            <li className="relative rounded-[1.25rem] border border-line bg-paper py-5 pr-5 pl-[4.25rem] text-muted leading-relaxed">
              <StepNumber>3</StepNumber>
              <strong className="font-semibold text-ink">Field survey.</strong>{" "}
              The jobsheet with the data quality rating goes out the same day.
              We can mark findings on the surface if you request it.
            </li>
            <li className="relative rounded-[1.25rem] border border-line bg-paper py-5 pr-5 pl-[4.25rem] text-muted leading-relaxed">
              <StepNumber>4</StepNumber>
              <strong className="font-semibold text-ink">
                Processing and QC review.
              </strong>{" "}
              The data is processed and reviewed before the report is written.
            </li>
            <li className="relative rounded-[1.25rem] border border-line bg-paper py-5 pr-5 pl-[4.25rem] text-muted leading-relaxed">
              <StepNumber>5</StepNumber>
              <strong className="font-semibold text-ink">
                Written report and data handover.
              </strong>{" "}
              Typically within 7 working days of data collection: a PDF with
              maps, plus the dataset and CAD/SHP/KML exports on request.
            </li>
            <li className="relative rounded-[1.25rem] border border-line bg-paper py-5 pr-5 pl-[4.25rem] text-muted leading-relaxed">
              <StepNumber>6</StepNumber>
              <strong className="font-semibold text-ink">
                Need cores or cuts to confirm?
              </strong>{" "}
              We don&apos;t core or cut, but we can refer you to{" "}
              <TextLink href="https://www.di-techinternational.com/">
                Di-Tech International
              </TextLink>
              , a Manitoba concrete cutting and coring contractor we work with
              closely.
            </li>
          </ol>
        </Container>
      </Section>

      <Section id="recent-work">
        <Container className="max-w-5xl!">
          <Heading className="text-3xl text-ink sm:text-4xl">Recent work</Heading>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {recentWork.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.25rem] border border-line border-t-4 border-t-brand bg-cream px-5 pt-5 pb-6 text-[0.975rem] leading-relaxed text-muted"
              >
                <Heading as="h3" className="text-[1.2rem] leading-tight text-ink">
                  {item.title}
                </Heading>
                <p className="mt-2.5">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="service-area" className="bg-cream">
        <Container className="max-w-3xl!">
          <Heading className="text-3xl text-ink sm:text-4xl">Where we work</Heading>
          <Prose>
            <p className="mt-5">
              We are based in Winnipeg and work across Manitoba. We welcome
              bridge, road and large-structure projects in Saskatchewan,
              Ontario, Nunavut and the Northwest Territories. Travel is
              included in your estimate. Meet the{" "}
              <TextLink href="/about/team">team</TextLink> that runs the
              surveys.
            </p>
          </Prose>
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
                <p className="mt-2 leading-relaxed text-muted">{faq.answer}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <section className="bg-paper py-16">
        <Container className="max-w-3xl!">
          <div className="rounded-3xl bg-brand px-6 py-12 text-white sm:px-10">
            <Heading className="text-3xl text-white sm:text-4xl">
              Get an estimate
            </Heading>
            <p className="mt-3 max-w-2xl text-white/90">
              Send us the structure, the area and any specification, and
              we&apos;ll come back with an estimate scoped to your project.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="/contact" variant="cream">
                Get an estimate
              </ButtonLink>
              <p className="min-w-0 flex-1 text-white/90 leading-relaxed basis-72">
                or call{" "}
                <TextLink
                  href={`tel:${site.phoneTel}`}
                  className="font-semibold whitespace-nowrap text-white no-underline"
                >
                  {phoneLabel}
                </TextLink>
                . You can also email{" "}
                <TextLink href={`mailto:${site.email}`} className={lightLinkClass}>
                  {site.email}
                </TextLink>
                . Our office is at {site.address.street}, {site.address.city},{" "}
                {site.address.region} {site.address.postal}.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            <strong className="font-semibold text-ink">Sources:</strong>{" "}
            <TextLink href="https://store.astm.org/d6087-22.html">
              ASTM D6087-22
            </TextLink>
            ,{" "}
            <TextLink href="https://store.astm.org/d4748-26.html">
              ASTM D4748-26
            </TextLink>
            ,{" "}
            <TextLink href="https://www.concrete.org/Portals/0/Files/PDF/Previews/228213.pdf">
              ACI 228.2R-13
            </TextLink>
            ,{" "}
            <TextLink href="https://infotechnology.fhwa.dot.gov/ground-penetrating-radar-locating-reinforcement/">
              FHWA InfoTechnology, GPR for bridges
            </TextLink>
            , Screening Eagle product pages for the{" "}
            <TextLink href="https://www.screeningeagle.com/en/products/proceq-gs9000">
              GS9000
            </TextLink>
            ,{" "}
            <TextLink href="https://www.screeningeagle.com/en/products/proceq-gs8000">
              GS8000
            </TextLink>{" "}
            and{" "}
            <TextLink href="https://www.screeningeagle.com/en/products/proceq-gp8100">
              GP8100
            </TextLink>
            .
          </p>
        </Container>
      </section>
    </>
  );
}

function StepNumber({ children }: { children: ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className="absolute top-[1.15rem] left-[1.1rem] flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full bg-brand font-display text-[1.15rem] font-extrabold text-white"
    >
      {children}
    </span>
  );
}
