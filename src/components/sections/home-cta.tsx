import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { buttonClasses } from "@/components/ui/button";

export function HomeCTA() {
  return (
    <Section padding="lg">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-[var(--color-brand)] via-[var(--color-brand-muted)] to-[#0b1120] p-10 text-[var(--color-brand-foreground)] shadow-[0_55px_120px_-50px_rgba(59,130,246,0.7)]">
          <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),transparent_65%)]" />
          <div className="relative space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.45em]">
              Next launch
            </span>
            <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              Let&apos;s map the work that gets you to peak performance.
            </h2>
            <p className="max-w-2xl text-sm text-white/80 sm:text-base">
              Schedule a consult to scope your roadmap, assess risks, and
              assemble the right Apex Nova Labs pod. We lead with clarity,
              transparency, and measurable commitments.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className={buttonClasses({
                  size: "md",
                  className: "bg-white text-[var(--color-brand-muted)]",
                })}
              >
                Request a consult
              </Link>
              <Link
                href="mailto:hello@apexnovalabs.lk"
                className="text-sm font-medium text-white/80 transition hover:text-white"
              >
                hello@apexnovalabs.lk
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
