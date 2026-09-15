import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/PageHero";
import {
  Container,
  Eyebrow,
  Heading,
  MediaSplit,
  Prose,
  Section,
} from "@/components/LayoutBits";
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
        imageSrc="/images/gpr-tower.jpg"
        imageAlt="Vertically marked masonry tower after GPR scanning"
      />
      <Section>
        <Container>
          <MediaSplit
            imageSrc="/images/hydro-site.jpg"
            imageAlt="Industrial river site with substations and transmission infrastructure"
          >
            <Eyebrow>Company</Eyebrow>
            <Heading className="text-4xl">Structure Scan is</Heading>
            <Prose>
              <p className="mt-5">
                Technicians demonstrate a proven level of competency and stay
                current on damage prevention practices, with ongoing testing and
                training. Facility access credentials matter on the jobs we are
                invited onto—rail, energy, and government sites included.
              </p>
            </Prose>
          </MediaSplit>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((item) => (
              <li
                key={item}
                className="rounded-3xl bg-cream px-5 py-6 font-display text-xl font-bold tracking-tight card-shadow"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <Section className="bg-cream">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Technicians</Eyebrow>
            <Heading className="mt-3 text-4xl">Training and access</Heading>
            <ul className="mt-6 space-y-2">
              {technicianTraining.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border-l-4 border-brand bg-paper px-4 py-3 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Industry</Eyebrow>
            <Heading className="mt-3 text-4xl">Tony Brunette</Heading>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              The founder remains active in the industry:
            </p>
            <ul className="mt-4 space-y-3">
              {tonyIndustryRoles.map((item) => (
                <li key={item.org} className="rounded-3xl border border-line p-4">
                  <p className="font-display text-lg font-bold tracking-tight">
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
