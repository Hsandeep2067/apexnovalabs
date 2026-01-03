import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/content";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { ServicesGrid } from "@/components/marketing/services-grid";
import { buttonClasses } from "@/components/ui/button";
import { HomeCTA } from "@/components/sections/home-cta";

export const metadata: Metadata = {
  title: "Services | Apex Nova Labs Sri Lanka",
  description:
    "Discover Apex Nova Labs Sri Lanka services for mobile apps, high-performing websites, ERP systems, POS platforms, and bespoke software.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Section padding="lg" className="pt-24 sm:pt-28">
        <div className="space-y-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted-foreground)]">
            Services
          </p>
          <h1 className="text-balance text-4xl font-semibold sm:text-5xl md:text-6xl">
            Software services tailored to how you operate.
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-[var(--color-muted-foreground)]">
            Whether you need a launch-ready mobile app, a conversion-focused website, an ERP or POS platform, or a custom-built tool, we assemble the right specialists to deliver measurable outcomes.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className={buttonClasses({ size: "lg" })}
            >
              Request a consult
            </Link>
          </div>
        </div>
      </Section>

      <Section padding="lg" background="muted">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Core capabilities"
            title="Where we deliver the most impact."
            description="Explore our primary service lines. Each can be engaged individually or as part of an integrated product squad."
            align="center"
          />
          <ServicesGrid />
        </div>
      </Section>

      <Section padding="lg">
        <div className="space-y-12">
          {services.map((service) => (
            <article
              key={service.slug}
              className="rounded-3xl border border-[var(--color-border)] bg-white/80 p-10 shadow-[0_35px_90px_-45px_rgba(37,99,235,0.55)] backdrop-blur"
            >
              <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)]">
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted-foreground)]">
                    {service.name}
                  </p>
                  <h2 className="text-3xl font-semibold text-[var(--color-foreground)]">
                    {service.tagline}
                  </h2>
                  <p className="text-base text-[var(--color-muted-foreground)]">
                    {service.description}
                  </p>
                  <div className="grid gap-4 text-sm text-[var(--color-muted-foreground)]">
                    <div>
                      <p className="font-semibold text-[var(--color-foreground)]">
                        Challenges we tackle
                      </p>
                      <ul className="mt-2 space-y-2">
                        {service.painPoints.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-brand)]" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-[var(--color-foreground)]">
                        Outcomes we aim for
                      </p>
                      <ul className="mt-2 space-y-2">
                        {service.outcomes.map((outcome) => (
                          <li key={outcome} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="space-y-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-muted)]/40 p-8">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-muted-foreground)]">
                      Deliverables
                    </p>
                    <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted-foreground)]">
                      {service.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-brand-muted)]" />
                          <span>{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-muted-foreground)]">
                      Stack & metrics
                    </p>
                    <div className="mt-4 grid gap-3 text-sm text-[var(--color-muted-foreground)]">
                      <p className="font-medium text-[var(--color-foreground)]">
                        Tooling
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.stack.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.3em]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {service.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="rounded-2xl bg-white/80 px-4 py-3 text-sm shadow-inner shadow-blue-500/5"
                          >
                            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-muted-foreground)]">
                              {metric.label}
                            </p>
                            <p className="mt-1 text-xl font-semibold text-[var(--color-foreground)]">
                              {metric.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link
                      href={`/services/${service.slug}`}
                      className={buttonClasses({
                        variant: "secondary",
                        size: "md",
                        className: "w-full justify-center",
                      })}
                    >
                      Dive into this service
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <HomeCTA />
    </>
  );
}
