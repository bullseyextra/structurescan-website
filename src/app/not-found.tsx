import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { Container, Heading } from "@/components/LayoutBits";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Container className="py-24">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-brand">
        404
      </p>
      <Heading as="h1" className="mt-3 text-5xl">
        That page isn’t here
      </Heading>
      <p className="mt-4 max-w-xl text-muted">
        The address may be from the old WordPress site. Try the home page, or
        call if you need a scan or locate—we’re happy to point you the right
        way.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Back home</ButtonLink>
        <ButtonLink href="/contact" variant="outline">
          Talk to us
        </ButtonLink>
      </div>
    </Container>
  );
}
