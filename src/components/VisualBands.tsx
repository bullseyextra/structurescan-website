import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Container, Heading, Photo } from "@/components/LayoutBits";
import { processSteps, services, site } from "@/lib/site";

export function SplitHero({
  eyebrow,
  title,
  lead,
  imageSrc,
  imageAlt,
  compact = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead: string;
  imageSrc: string;
  imageAlt: string;
  compact?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div className="grid-texture pointer-events-none absolute inset-0" />
      <Container
        className={`relative grid items-center gap-10 ${
          compact ? "py-14 sm:py-16" : "py-16 sm:py-24"
        } lg:grid-cols-2`}
      >
        <div>
          {eyebrow ? (
            <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-display mt-4 max-w-xl text-4xl font-extrabold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85">
            {lead}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact#quote" variant="primary" size="lg">
              Book a scan
            </ButtonLink>
            <ButtonLink
              href={`tel:${site.phoneTel}`}
              variant="ghost"
              size="lg"
              external
            >
              Talk to us
            </ButtonLink>
          </div>
        </div>
        <figure className="relative">
          <Photo
            src={imageSrc}
            alt={imageAlt}
            className="h-[22rem] w-full rounded-3xl object-cover sm:h-[28rem] lg:h-[32rem]"
          />
        </figure>
      </Container>
    </section>
  );
}

export function ServiceRibbon() {
  return (
    <div className="border-y border-line bg-cream">
      <Container className="flex gap-2 overflow-x-auto py-3 sm:grid sm:grid-cols-5 sm:overflow-visible sm:py-1">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={service.href}
            className="flex min-w-[13.5rem] items-center gap-3 rounded-2xl px-2 py-3 hover:bg-paper sm:min-w-0 sm:justify-center"
          >
            <Photo
              src={service.image}
              alt=""
              className="h-11 w-11 shrink-0 rounded-full object-cover"
            />
            <span className="font-display max-w-[8.75rem] text-xs font-semibold uppercase leading-[1.2] tracking-[0.1em] text-ink">
              {service.shortName}
            </span>
          </Link>
        ))}
      </Container>
    </div>
  );
}

export function ProcessTrio() {
  return (
    <section className="bg-ink py-3 sm:py-4">
      <Container>
        <div className="grid gap-3 md:grid-cols-3">
          {processSteps.map((step) => (
            <article
              key={step.label}
              className="relative min-h-[22rem] overflow-hidden rounded-3xl sm:min-h-[26rem]"
            >
              <Photo
                src={step.image}
                alt={step.alt}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="photo-scrim absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-brand">
                  {step.label}
                </p>
                <Heading as="h2" className="mt-2 text-4xl text-cream">
                  {step.title}
                </Heading>
                <p className="mt-3 text-sm leading-relaxed text-cream/85">
                  {step.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function DarkBand({
  eyebrow,
  title,
  children,
  imageSrc,
  imageAlt,
  reverse = false,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div className="grid-texture pointer-events-none absolute inset-0" />
      <Container className="relative py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <figure className={reverse ? "lg:order-2" : ""}>
            <Photo
              src={imageSrc}
              alt={imageAlt}
              className="h-full max-h-[32rem] w-full rounded-3xl object-cover"
            />
          </figure>
          <div>
            {eyebrow ? (
              <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand">
                {eyebrow}
              </p>
            ) : null}
            <Heading className="mt-3 text-4xl text-cream sm:text-5xl">
              {title}
            </Heading>
            <div className="mt-5 space-y-4 leading-relaxed text-cream/80">
              {children}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact#quote" variant="primary">
                Book a scan
              </ButtonLink>
              <ButtonLink
                href={`tel:${site.phoneTel}`}
                variant="ghost"
                external
              >
                Talk to us
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ProofGallery({
  items,
  columns = 3,
}: {
  items: readonly { src: string; alt: string; caption?: string }[];
  columns?: 2 | 3;
}) {
  return (
    <div
      className={`grid gap-4 ${
        columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {items.map((item) => (
        <figure
          key={item.src}
          className="overflow-hidden rounded-3xl bg-cream card-shadow"
        >
          <Photo
            src={item.src}
            alt={item.alt}
            className="h-56 w-full object-cover sm:h-64"
          />
          {item.caption ? (
            <figcaption className="px-4 py-3 text-sm text-muted">
              {item.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}
