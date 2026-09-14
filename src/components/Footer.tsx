import Link from "next/link";
import { Logo } from "@/components/Logo";
import { services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link href="/" className="inline-flex h-[4.5rem]">
            <Logo variant="dark" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
            {site.tagline}. Family-owned damage prevention from Winnipeg since{" "}
            {site.founded}.
          </p>
        </div>

        <div className="md:col-span-3">
          <h2 className="font-display text-lg font-semibold uppercase tracking-[0.18em] text-cream">
            Services
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={service.href} className="hover:text-white">
                  {service.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h2 className="font-display text-lg font-semibold uppercase tracking-[0.18em] text-cream">
            Contact
          </h2>
          <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed text-cream/75">
            <p>{site.address.street}</p>
            <p>
              {site.address.city}, {site.address.region} {site.address.postal}
            </p>
            <p>{site.address.country}</p>
            <p>
              <a className="hover:text-white" href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a className="hover:text-white" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-cream">
              Privacy
            </Link>
            <Link href="/about" className="hover:text-cream">
              About
            </Link>
            <Link href="/contact" className="hover:text-cream">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
