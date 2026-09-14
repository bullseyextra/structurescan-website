import type { ServiceSlug } from "@/lib/site";

export function ServiceIcon({ slug }: { slug: ServiceSlug }) {
  const common = {
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <span className="inline-flex h-12 w-12 items-center justify-center border border-line text-ink">
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
        {slug === "concrete-scanning" ? (
          <>
            <circle {...common} cx="16" cy="16" r="10" />
            <circle {...common} cx="16" cy="16" r="5" />
            <path {...common} d="M16 6 v4 M16 22 v4 M6 16 h4 M22 16 h4" />
          </>
        ) : null}
        {slug === "utility-locating" ? (
          <>
            <path {...common} d="M5 24 C9 10 23 10 27 24" />
            <path {...common} d="M10 24 C13 16 19 16 22 24" />
            <circle {...common} cx="16" cy="9" r="2.2" />
          </>
        ) : null}
        {slug === "locate-management" ? (
          <>
            <rect {...common} x="7" y="6" width="18" height="20" rx="1.5" />
            <path {...common} d="M11 12 h10 M11 16 h10 M11 20 h6" />
          </>
        ) : null}
        {slug === "thermography" ? (
          <>
            <path {...common} d="M16 7 c3 0 5 2.4 5 5.4 0 3.6-5 10.6-5 10.6S11 16 11 12.4C11 9.4 13 7 16 7z" />
            <path {...common} d="M16 11.2 v4.2" />
          </>
        ) : null}
        {slug === "sewer-camera" ? (
          <>
            <rect {...common} x="4" y="10" width="14" height="10" rx="1.5" />
            <path {...common} d="M18 14 l7-3 v10 l-7-3" />
            <circle {...common} cx="10.5" cy="15" r="2.2" />
          </>
        ) : null}
      </svg>
    </span>
  );
}
