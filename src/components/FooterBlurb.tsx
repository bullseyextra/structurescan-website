"use client";

import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

export function FooterBlurb() {
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const hideSlogan = pathname === "/services/utility-locating";

  return (
    <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
      {hideSlogan ? null : <>{site.tagline}. </>}
      A Winnipeg family shop since {site.founded}—still glad you called.
    </p>
  );
}
