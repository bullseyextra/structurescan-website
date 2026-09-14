import { site } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand bg-ink p-2 md:hidden">
      <a
        href={`tel:${site.phoneTel}`}
        className="flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-semibold text-white"
      >
        Call us · {site.phoneDisplay}
      </a>
    </div>
  );
}
