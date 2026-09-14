"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/Logo";
import { site, services } from "@/lib/site";

const aboutLinks = [
  { href: "/about", label: "Our story" },
  { href: "/about/team", label: "Team" },
  { href: "/about/certifications", label: "Certifications" },
];

export function Header() {
  const pathname = usePathname();
  return <HeaderBar key={pathname} />;
}

function HeaderBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const servicesId = useId();
  const aboutId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex h-[5.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex h-[4.35rem] items-center sm:h-[4.75rem]"
          aria-label={`${site.name} home`}
        >
          <Logo />
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          <NavDropdown
            id={servicesId}
            label="Services"
            href="/services"
            open={servicesOpen}
            setOpen={setServicesOpen}
            onOtherOpen={() => setAboutOpen(false)}
            items={services.map((service) => ({
              href: service.href,
              label: service.navLabel,
            }))}
            current={pathname.startsWith("/services")}
          />
          <NavDropdown
            id={aboutId}
            label="About"
            href="/about"
            open={aboutOpen}
            setOpen={setAboutOpen}
            onOtherOpen={() => setServicesOpen(false)}
            items={aboutLinks}
            current={pathname.startsWith("/about")}
          />
          <Link
            href="/contact"
            className={`rounded-full px-3 py-2 text-[0.95rem] font-semibold ${
              pathname.startsWith("/contact")
                ? "text-brand"
                : "text-ink hover:text-brand"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${site.phoneTel}`}
            className="text-sm font-semibold tracking-wide text-ink hover:text-brand"
          >
            {site.phoneDisplay}
          </a>
          <Link
            href="/contact#quote"
            className="inline-flex items-center rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            Book a scan
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span
              className={`block h-0.5 w-5 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-ink transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-cream px-4 py-4 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            <Link
              href="/services"
              className="rounded-2xl px-3 py-3 font-semibold"
            >
              All services
            </Link>
            {services.map((service) => (
              <Link
                key={service.slug}
                href={service.href}
                className="rounded-lg px-3 py-2 text-muted"
              >
                {service.navLabel}
              </Link>
            ))}
            <Link
              href="/about"
              className="mt-2 rounded-2xl px-3 py-3 font-semibold"
            >
              About
            </Link>
            {aboutLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-muted"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 rounded-2xl px-3 py-3 font-semibold"
            >
              Contact
            </Link>
            <a
              href={`tel:${site.phoneTel}`}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-brand px-4 py-3 font-semibold text-white"
            >
              Call {site.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function NavDropdown({
  id,
  label,
  href,
  open,
  setOpen,
  onOtherOpen,
  items,
  current,
}: {
  id: string;
  label: string;
  href: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  onOtherOpen: () => void;
  items: readonly { href: string; label: string }[];
  current: boolean;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={() => {
        onOtherOpen();
        setOpen(true);
      }}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center">
        <Link
          href={href}
          className={`rounded-full px-3 py-2 text-[0.95rem] font-semibold ${
            current ? "text-brand" : "text-ink hover:text-brand"
          }`}
        >
          {label}
        </Link>
        <button
          type="button"
          className="px-1 text-ink"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => {
            onOtherOpen();
            setOpen(!open);
          }}
        >
          <span className="sr-only">{`Toggle ${label} menu`}</span>
          <svg width="12" height="8" viewBox="0 0 12 8" aria-hidden="true">
            <path
              d="M1 1.5 L6 6.5 L11 1.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          </svg>
        </button>
      </div>
      {open ? (
        <ul
          id={id}
          className="absolute left-0 top-full z-20 min-w-56 rounded-2xl border border-line bg-cream py-2 card-shadow"
        >
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block px-4 py-2.5 text-sm text-ink hover:bg-paper-2 hover:text-brand"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
