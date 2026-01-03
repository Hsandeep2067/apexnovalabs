import type { Metadata } from "next";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { ValuePillars } from "@/components/marketing/value-pillars";
import { buttonClasses } from "@/components/ui/button";
import { siteConfig } from "@/lib/content";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Apex Nova Labs Sri Lanka",
  description:
    "Meet the leadership team behind Apex Nova Labs Sri Lanka and learn the principles that guide our work.",
  alternates: {
    canonical: "/about",
  },
};

const leadership = [
  {
    name: "Anushka De Silva",
    role: "Founder & CEO",
    bio: "Product strategist and systems thinker. Previously led digital transformations for Sri Lankan banks and telcos, building pods of designers and engineers across Colombo, Kandy, and remote talent.",
  },
  {
    name: "Tharindu Ranasinghe",
    role: "Head of Engineering",
    bio: "Loves building resilient systems with high-performing teams. Expert in cloud-native architectures, Next.js, and DevOps cultures suited to Sri Lankan enterprises.",
  },
  {
    name: "Sharanya Nadarajah",
    role: "Head of Design & Research",
    bio: "Designs inclusive experiences grounded in Sinhala, Tamil, and English research. Leads design systems, discovery programmes, and storytelling for complex products.",
  },
];

const principles = [
  {
    title: "Default to clarity",
    description:
      "Every engagement begins with a shared understanding of goals, constraints, and metrics. We make the invisible visible.",
  },
  {
    title: "Build with craft",
    description:
      "Quality is not negotiable. We pair attention to detail with automation that keeps releases confident.",
  },
  {
    title: "Work in the open",
    description:
      "Transparency builds trust. We share progress, blockers, and learnings without being asked.",
  },
  {
    title: "Optimize for outcomes",
    description:
      "Shipping features is not the finish line. We anchor work to the business metrics that matter.",
  },
];

const milestones = [
  { year: "2018", detail: "Apex Nova Labs Sri Lanka founded in Colombo to help local startups ship production-ready products." },
  { year: "2020", detail: "Scaled to multidisciplinary pods supporting national banks, apparel exporters, and logistics teams." },
  { year: "2022", detail: "Opened delivery hubs in Kandy and Jaffna, formalising bilingual research and discovery programmes." },
  { year: "2024", detail: "Launched platform enablement offerings for fintech, public sector, and tourism partners across Sri Lanka." },
];

export default function AboutPage() {
  return (
    <>
      <Section padding="lg" className="pt-24 sm:pt-28">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted-foreground)]">
            About
          </p>
          <h1 className="text-balance text-4xl font-semibold sm:text-5xl md:text-6xl">
            We build peak-quality software with teams who value craft and results.
          </h1>
          <p className="max-w-3xl text-lg text-[var(--color-muted-foreground)]">
            Apex Nova Labs Sri Lanka exists to help ambitious teams across the island ship with confidence. We specialise in bridging product strategy, design systems, and engineering excellence so launches feel effortless, performant, and measurable for local customers.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-[var(--color-muted-foreground)]">
            <span>Colombo HQ + distributed Sri Lankan team</span>
            <span>-</span>
            <span>Serving Sri Lanka & South Asia</span>
            <span>-</span>
            <span>64+ launches shipped</span>
          </div>
        </div>
      </Section>

      <Section padding="lg" background="muted">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Values"
            title="What guides our partnerships."
            description="Our values describe how we show up for clients, collaborators, and each other. They keep us aligned, curious, and accountable."
          />
          <ValuePillars />
        </div>
      </Section>

      <Section padding="lg">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]">
          <div className="space-y-4">
            <SectionHeading
              eyebrow="Principles"
              title="How we operate day to day."
              description="We combine startup scrappiness with enterprise rigor. These principles keep collaboration honest, efficient, and inspiring."
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-3xl border border-[var(--color-border)] bg-white/80 p-6 shadow-[0_28px_85px_-55px_rgba(37,99,235,0.6)] backdrop-blur"
              >
                <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section padding="lg" background="muted">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Leadership"
            title="A multidisciplinary leadership team."
            description="Our principals bring decades of experience across product, design, and engineering. We embed with your teams and work shoulder to shoulder."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {leadership.map((leader) => (
              <article
                key={leader.name}
                className="flex h-full flex-col justify-between rounded-3xl border border-[var(--color-border)] bg-white/85 p-8 shadow-[0_30px_90px_-60px_rgba(15,23,42,0.55)] backdrop-blur"
              >
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-muted-foreground)]">
                    {leader.role}
                  </p>
                  <h3 className="text-xl font-semibold text-[var(--color-foreground)]">
                    {leader.name}
                  </h3>
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    {leader.bio}
                  </p>
                </div>
                <div className="mt-6 text-xs uppercase tracking-[0.3em] text-[var(--color-muted-foreground)]">
                  Trusted by scale-ups and enterprise teams alike.
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section padding="lg">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Milestones"
            title="From prototype partners to trusted product team."
            description="We started as a two-person consultancy and scaled into a studio capable of shipping high-impact products while enabling internal teams."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="rounded-3xl border border-[var(--color-border)] bg-white/80 p-6 shadow-[0_35px_90px_-60px_rgba(37,99,235,0.55)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted-foreground)]">
                  {milestone.year}
                </p>
                <p className="mt-2 text-base text-[var(--color-foreground)]">
                  {milestone.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section padding="lg" background="muted">
        <div className="flex flex-col gap-6 rounded-3xl border border-[var(--color-border)] bg-white/85 p-10 shadow-[0_45px_120px_-60px_rgba(37,99,235,0.6)] sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-muted-foreground)]">
              Meet the team
            </p>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)] sm:text-3xl">
              Interested in collaborating or joining Apex Nova Labs Sri Lanka?
            </h2>
            <p className="text-sm text-[var(--color-muted-foreground)]">
              We&apos;d love to hear from you. Whether you&apos;re a partner or a potential teammate,
              start the conversation and we&apos;ll schedule time with the right folks.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className={buttonClasses({ size: "md" })}
            >
              Request a consult
            </Link>
            <Link
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-sm font-medium text-[var(--color-brand)] transition hover:text-[var(--color-brand-muted)]"
            >
              {siteConfig.contactEmail}
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
