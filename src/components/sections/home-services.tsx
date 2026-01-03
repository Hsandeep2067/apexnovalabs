import Link from "next/link";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { ServicesGrid } from "@/components/marketing/services-grid";

export function HomeServices() {
  return (
    <Section id="services" padding="lg">
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Capabilities"
          title="Software that supports every part of your business."
          description="Mobile apps, conversion-focused websites, ERP and POS platforms, and custom tools built around the realities of Sri Lankan teams. We assemble the right specialists for each engagement."
          align="center"
        />
        <ServicesGrid />
        <div className="text-center text-sm text-[var(--color-muted-foreground)]">
          Need something more specialized?{" "}
          <Link
            href="/contact"
            className="font-medium text-[var(--color-brand)] transition hover:text-[var(--color-brand-muted)]"
          >
            Tell us about your product roadmap {"->"}
          </Link>
        </div>
      </div>
    </Section>
  );
}
