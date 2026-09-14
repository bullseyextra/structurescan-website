import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/LayoutBits";
import { site } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  lead,
  imageSrc,
}: {
  eyebrow?: string;
  title: string;
  lead: string;
  imageSrc?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      {imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
      ) : null}
      <div className="absolute inset-0 bg-linear-to-b from-ink/70 via-ink/80 to-ink" />
      <div className="radar-grid pointer-events-none absolute inset-0 opacity-70" />
      <Container className="relative py-20 sm:py-28">
        {eyebrow ? (
          <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-brand">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="font-display mt-4 max-w-4xl text-4xl font-bold uppercase leading-[0.95] tracking-wide sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/80">
          {lead}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={`tel:${site.phoneTel}`} variant="primary" external>
            Call {site.phoneDisplay}
          </ButtonLink>
          <ButtonLink href="/contact#quote" variant="ghost">
            Request a quote
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export function CtaBand({
  title = "Ready to scan or locate?",
  body = "Call the Winnipeg office or send a quote request. We’ll help you choose the right service for the job.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-ink text-cream">
      <Container className="flex flex-col items-start justify-between gap-6 py-14 sm:flex-row sm:items-center">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide">
            {title}
          </h2>
          <p className="mt-3 text-cream/75">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={`tel:${site.phoneTel}`} variant="primary" external>
            Call {site.phoneDisplay}
          </ButtonLink>
          <ButtonLink href="/contact#quote" variant="ghost">
            Request a quote
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { href?: string; label: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {item.href ? (
              <Link href={item.href} className="hover:text-brand">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
