import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies, services } from "@/lib/content";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { CaseStudyCard } from "@/components/cards/case-study-card";
import { buttonClasses } from "@/components/ui/button";
import { HomeCTA } from "@/components/sections/home-cta";

export const metadata: Metadata = {
  title: "Work | Apex Nova Labs Sri Lanka",
  description:
    "Explore how Apex Nova Labs Sri Lanka approaches delivery. Full case studies are coming soon - reach out and we'll walk you through relevant Sri Lankan projects.",
  alternates: {
    canonical: "/work",
  },
};

const hasCaseStudies = caseStudies.length > 0;
const industries = hasCaseStudies
  ? Array.from(new Set(caseStudies.map((item) => item.industry)))
  : [];
const platforms = hasCaseStudies
  ? Array.from(new Set(caseStudies.map((item) => item.platform)))
  : [];

export default function WorkPage() {
  return (
    <>
      <Section padding="lg" className="pt-24 sm:pt-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted-foreground)]">
              Our work
            </p>
            <h1 className="text-balance text-4xl font-semibold sm:text-5xl md:text-6xl">
              {hasCaseStudies
                ? "Partnerships that ship measurable results."
                : "Project stories coming soon."}
            </h1>
            <p className="max-w-2xl text-lg text-[var(--color-muted-foreground)]">
              {hasCaseStudies
                ? "We lead cross-functional teams from discovery through delivery, partnering with product leaders to drive conversion, retention, and operational excellence. Explore engagements across industries and platforms."
                : "We're currently preparing in-depth case studies to share. Until then, we're happy to walk you through relevant work and outline how we can approach your roadmap."}
            </p>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-[var(--color-muted-foreground)]">
              {services.slice(0, 5).map((service) => (
                <span key={service.slug}>{service.name}</span>
              ))}
            </div>
          </div>
          {hasCaseStudies ? (
            <aside className="rounded-3xl border border-[var(--color-border)] bg-white/80 p-8 shadow-[0_25px_80px_-45px_rgba(37,99,235,0.6)] backdrop-blur">
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-muted-foreground)]">
                    Industries
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {industries.map((industry) => (
                      <span
                        key={industry}
                        className="rounded-full bg-[var(--color-muted)]/40 px-3 py-1 text-xs font-medium text-[var(--color-muted-foreground)]"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-muted-foreground)]">
                    Platforms
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {platforms.map((platform) => (
                      <span
                        key={platform}
                        className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs font-medium text-[var(--color-muted-foreground)]"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          ) : null}
        </div>
      </Section>

      <Section padding="lg" background="muted">
        {hasCaseStudies ? (
          <div className="space-y-10">
            <SectionHeading
              eyebrow="Case studies"
              title="Future-ready products, shipped."
              description="Each story includes the challenge, the approach, and the measurable results delivered by the Apex Nova Labs Sri Lanka pod."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-center">
            <SectionHeading
              eyebrow="Case studies"
              title="We're documenting recent launches."
              description="We're polishing up the details before we publish them here. Share what you're building and we'll highlight similar work during the intro call."
              align="center"
            />
            <Link
              href="/contact"
              className="text-sm font-medium text-[var(--color-brand)] transition hover:text-[var(--color-brand-muted)]"
            >
              Request a walkthrough {"->"}
            </Link>
          </div>
        )}
      </Section>

      <Section padding="lg">
        <div className="rounded-3xl border border-[var(--color-border)] bg-white/80 p-10 shadow-[0_40px_120px_-60px_rgba(15,23,42,0.55)]">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-muted-foreground)]">
                Engagement snapshot
              </p>
              <h2 className="text-3xl font-semibold text-[var(--color-foreground)]">
                How a typical collaboration unfolds
              </h2>
              <p className="text-sm text-[var(--color-muted-foreground)]">
                We adapt to your operating rhythm while bringing structured
                rituals and instrumentation. Most engagements run in eight-week
                increments with dedicated pods.
              </p>
            </div>
            <div className="grid gap-4 text-sm text-[var(--color-muted-foreground)]">
              {[
                {
                  label: "Discovery",
                  detail:
                    "Align on outcomes, run research, and define the roadmap in the first two weeks.",
                },
                {
                  label: "Delivery cycles",
                  detail:
                    "Operate in focused sprints with weekly demos, async updates, and paired QA.",
                },
                {
                  label: "Enablement",
                  detail:
                    "Document architecture decisions and onboard internal teams for long-term success.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-muted)]/40 px-5 py-4"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-muted-foreground)]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section padding="lg" background="muted">
        <div className="flex flex-col gap-6 rounded-3xl border border-[var(--color-border)] bg-white/80 p-10 shadow-[0_40px_120px_-55px_rgba(37,99,235,0.55)] sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-muted-foreground)]">
              Next project
            </p>
            <h2 className="text-2xl font-semibold text-[var(--color-foreground)] sm:text-3xl">
              Have a roadmap we should review together?
            </h2>
            <p className="text-sm text-[var(--color-muted-foreground)]">
              Send over context and we&apos;ll schedule a consult with the right
              principals for your domain.
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
              href="mailto:hello@apexnovalabs.lk"
              className="text-sm font-medium text-[var(--color-brand)] transition hover:text-[var(--color-brand-muted)]"
            >
              hello@apexnovalabs.lk
            </Link>
          </div>
        </div>
      </Section>

      <HomeCTA />
    </>
  );
}


