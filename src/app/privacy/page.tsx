import type { Metadata } from "next";
import { Container, Section } from "@/components/LayoutBits";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Privacy policy",
  description: `How ${site.name} collects and uses personal information through this website, in line with Canadian privacy law.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-brand">
          Legal
        </p>
        <h1 className="font-display mt-3 text-4xl font-bold uppercase tracking-wide">
          Privacy policy
        </h1>
        <p className="mt-4 text-sm text-muted">Last updated September 2026.</p>
        <div className="mt-8 space-y-6 leading-relaxed text-muted">
          <p>
            This policy describes how {site.name} (“we”) handles personal
            information collected through {site.url.replace("https://", "")} and
            related quote or scheduling forms. It applies to this website. It
            does not cover information collected only in person or by phone,
            except where that information is later stored with a web inquiry.
          </p>
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-ink">
            Who we are
          </h2>
          <p>
            {site.name}
            <br />
            {site.address.line}
            <br />
            Email: {site.email}
            <br />
            Phone: {site.phoneDisplay}
          </p>
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-ink">
            What we collect
          </h2>
          <p>
            If you contact us, we may collect your name, company, email address,
            phone number, the service you are asking about, and any project
            details you send. If you use our linked Jotform estimate, schedule,
            or consultation forms, Jotform collects the fields on those forms on
            our behalf.
          </p>
          <p>
            This marketing site does not use advertising pixels or third-party
            ad cookies. Server logs from our hosting provider may include IP
            address, browser type, and pages requested, used to operate and
            secure the site.
          </p>
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-ink">
            Why we collect it
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>To respond to quote, scheduling, and service questions</li>
            <li>To communicate about work you have asked us to perform</li>
            <li>To improve how this website works</li>
            <li>To meet legal and safety obligations related to a job</li>
          </ul>
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-ink">
            Sharing
          </h2>
          <p>
            We do not sell personal information. We may share it with service
            providers who help us operate the website or forms (for example,
            hosting or Jotform), and only as needed to provide that service. We
            may disclose information if required by law or to protect the
            safety of people or property.
          </p>
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-ink">
            Retention and security
          </h2>
          <p>
            We keep inquiry information as long as needed to handle your
            request and for ordinary business records. Hosting and email
            providers use encrypted connections. Access is limited to people
            who need it to do their jobs.
          </p>
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-ink">
            Your rights
          </h2>
          <p>
            Under Canadian privacy law, you may request access to personal
            information we hold about you, and ask us to correct it. To do that,
            email {site.email} or write to the address above. You may also
            complain to the Office of the Privacy Commissioner of Canada, or to
            the privacy commissioner in your province or territory.
          </p>
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-ink">
            Changes
          </h2>
          <p>
            If this policy changes, we will post the update on this page with a
            new date.
          </p>
        </div>
      </Container>
    </Section>
  );
}
