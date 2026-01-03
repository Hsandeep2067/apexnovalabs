import Link from "next/link";
import { buttonClasses } from "@/components/ui/button";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { StatsGrid } from "@/components/marketing/stats-grid";

export function HomeHero() {
  return (
    <Section padding="lg" className="pt-24 sm:pt-32">
      <Container className="space-y-16">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-white/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.45em] text-[var(--color-muted-foreground)]">
              Apex Nova Labs Sri Lanka
            </span>
            <h1 className="text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
              Build peak-quality software for Sri Lanka and beyond.
            </h1>
            <p className="max-w-2xl text-lg text-[var(--color-muted-foreground)]">
              We design, build, and scale the software Sri Lankan teams rely on - from mobile banking apps and logistics platforms to hospitality POS and public service portals.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className={buttonClasses({ size: "lg" })}
              >
                Request a consult
              </Link>
              <Link
                href="/work"
                className={buttonClasses({
                  variant: "ghost",
                  size: "lg",
                  className:
                    "group gap-2 text-[var(--color-muted-foreground)] hover:text-[var(--color-brand)]",
                })}
              >
                See our work
                <span
                  aria-hidden="true"
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-current text-xs transition group-hover:translate-x-1"
                >
                  {"->"}
                </span>
              </Link>
            </div>
          </div>
          <div className="relative rounded-3xl border border-[var(--color-border)] bg-[var(--color-inverted)]/80 p-8 shadow-[0_40px_100px_-45px_rgba(37,99,235,0.55)] backdrop-blur">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-muted-foreground)]">
                Highlights
              </p>
              <StatsGrid />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
