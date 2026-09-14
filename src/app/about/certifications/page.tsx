import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/PageHero";
import { Container, Eyebrow, Section } from "@/components/LayoutBits";
import { pageMeta } from "@/lib/seo";
import { certifications, technicianTraining, tonyIndustryRoles } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Qualifications & certifications",
  description:
    "Structure Scan is eRailSafe, COR, and ISN certified, and an accredited BBB member. Technician training includes Ground Disturbance Level 2, Staking University, and CAPULC locate management.",
  path: "/about/certifications",
});

export default function CertificationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Qualifications"
        title="Certified crews, current training"
        lead="Company certifications, technician competency, and industry roles. An accurate analysis of a worksite by an experienced technician saves time, prevents mistakes, and avoids hazards."
      />
      <Section>
        <Container>
          <Eyebrow>Company</Eyebrow>
          <h2 className="font-display mt-3 text-4xl font-bold uppercase tracking-wide">
            Structure Scan is
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((item) => (
              <li
                key={item}
                className="border border-line bg-cream px-5 py-6 font-display text-xl font-bold uppercase tracking-wide"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl leading-relaxed text-muted">
            Technicians demonstrate a proven level of competency and stay current
            on damage prevention practices, with ongoing testing and training.
          </p>
        </Container>
      </Section>
      <Section className="bg-cream">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Technicians</Eyebrow>
            <h2 className="font-display mt-3 text-4xl font-bold uppercase tracking-wide">
              Training and access
            </h2>
            <ul className="mt-6 space-y-2">
              {technicianTraining.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-brand bg-paper px-4 py-3 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Industry</Eyebrow>
            <h2 className="font-display mt-3 text-4xl font-bold uppercase tracking-wide">
              Tony Brunette
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              The founder remains active in the industry:
            </p>
            <ul className="mt-4 space-y-3">
              {tonyIndustryRoles.map((item) => (
                <li key={item.org} className="border border-line p-4">
                  <p className="font-display text-lg font-bold uppercase tracking-wide">
                    {item.org}
                  </p>
                  <p className="mt-1 text-sm text-muted">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
