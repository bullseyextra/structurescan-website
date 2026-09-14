import Link from "next/link";
import { ServiceIcon } from "@/components/ServiceIcon";
import type { services } from "@/lib/site";

type Service = (typeof services)[number];

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={service.href}
      className="group flex h-full flex-col border border-line bg-cream p-6 transition hover:-translate-y-0.5 hover:border-ink hover:shadow-[0_18px_40px_rgba(12,12,13,0.08)]"
    >
      <ServiceIcon slug={service.slug} />
      <h3 className="font-display mt-5 text-2xl font-bold uppercase tracking-wide">
        {service.cardTitle}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {service.summary}
      </p>
      <span className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-brand group-hover:underline">
        Learn more
      </span>
    </Link>
  );
}
