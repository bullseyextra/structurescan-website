import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container } from "@/components/LayoutBits";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-brand">
        404
      </p>
      <h1 className="font-display mt-3 text-5xl font-bold uppercase tracking-wide">
        That page isn’t here
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        The address may be from the old WordPress site. Try the home page, or
        call if you need a scan or locate.
      </p>
      <div className="mt-8">
        <ButtonLink href="/">Back home</ButtonLink>
      </div>
    </Container>
  );
}
