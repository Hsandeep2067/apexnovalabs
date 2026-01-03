import Link from "next/link";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { CaseStudiesPreview } from "@/components/marketing/case-studies-preview";
import { caseStudies } from "@/lib/content";

export function HomeCaseStudies() {
  if (caseStudies.length === 0) {
    return (
      <Section id="work" background="muted" padding="lg">
        <div className="space-y-6 text-center">
          <SectionHeading
            eyebrow="Project stories"
            title="Sri Lankan case studies are on the way."
            description="We're currently curating recent engagements across banking, retail, and public services. Tell us about your goals and we'll outline how we can help."
            align="center"
          />
          <Link
            href="/contact"
            className="text-sm font-medium text-[var(--color-brand)] transition hover:text-[var(--color-brand-muted)]"
          >
            Start a conversation {"->"}
          </Link>
        </div>
      </Section>
    );
  }

  return (
    <Section id="work" background="muted" padding="lg">
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Selected Work"
          title="Recent engagements from the lab."
          description="We embed with product, engineering, and operations leaders across Sri Lanka to deliver outcomes that matter. Explore a few highlights below."
          align="center"
        />
        <CaseStudiesPreview />
        <div className="text-center">
          <Link
            href="/work"
            className="text-sm font-medium text-[var(--color-brand)] transition hover:text-[var(--color-brand-muted)]"
          >
            View all case studies {"->"}
          </Link>
        </div>
      </div>
    </Section>
  );
}
