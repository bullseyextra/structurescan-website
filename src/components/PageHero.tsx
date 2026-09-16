import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/LayoutBits";
import { SplitHero } from "@/components/VisualBands";
import { site } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  lead,
  imageSrc,
  imageAlt,
}: {
  eyebrow?: string;
  title: string;
  lead: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  if (imageSrc) {
    return (
      <SplitHero
        eyebrow={eyebrow}
        title={title}
        lead={lead}
        imageSrc={imageSrc}
        imageAlt={imageAlt || ""}
        compact
      />
    );
  }

  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div className="grid-texture pointer-events-none absolute inset-0" />
      <Container className="relative py-20 sm:py-28">
        {eyebrow ? (
          <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-display mt-4 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/85">
          {lead}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/contact#quote" variant="primary">
            Book a scan
          </ButtonLink>
          <ButtonLink href={`tel:${site.phoneTel}`} variant="ghost" external>
            Talk to us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export function CtaBand({
  title = "Got a job coming up?",
  body = "Call the Winnipeg office or send a note. We’ll help you pick the right service—no jargon wall, just a clear next step.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-paper pb-16">
      <Container>
        <div className="rounded-3xl bg-brand px-6 py-12 text-white sm:px-10">
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
              </h2>
              <p className="mt-3 text-white/90">{body}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact#quote" variant="cream">
                Book a scan
              </ButtonLink>
              <ButtonLink href={`tel:${site.phoneTel}`} variant="ghost" external>
                Talk to us
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { href: string; label: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: new URL(item.href, site.url).toString(),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {isCurrent ? (
                <span aria-current="page" className="text-ink">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-brand">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
