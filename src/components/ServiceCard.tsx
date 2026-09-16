import Link from "next/link";
import type { services } from "@/lib/site";

type Service = (typeof services)[number];

export function ServiceCard({
  service,
}: {
  service: Service;
  index?: number;
}) {
  return (
    <Link
      href={service.href}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-cream card-shadow transition hover:-translate-y-0.5 hover:border-brand/40"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={service.image}
        alt={service.imageAlt}
        className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
      />
      <span className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-bold tracking-tight">
          {service.cardTitle}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {service.summary}
        </p>
        <span className="mt-5 text-sm font-semibold text-brand group-hover:underline">
          Have a look →
        </span>
      </span>
    </Link>
  );
}
