import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";

export const metadata: Metadata = {
  title: "Terms of Service | Apex Nova Labs Sri Lanka",
  description:
    "Understand the terms that govern your relationship with Apex Nova Labs when engaging our consulting, design, or engineering services.",
  alternates: {
    canonical: "/terms",
  },
};

const termsSections = [
  {
    title: "Engagement assumptions",
    items: [
      "Projects begin with a jointly approved statement of work (SOW) outlining scope, timeline, and fees.",
      "Work is performed on a time-and-materials basis unless a fixed-fee arrangement is explicitly defined.",
      "Both parties designate a primary point of contact to facilitate day-to-day communication and approvals.",
    ],
  },
  {
    title: "Client responsibilities",
    items: [
      "Provide timely access to relevant stakeholders, systems, content, and decision makers.",
      "Review and approve deliverables within mutually agreed timelines to avoid project delays.",
      "Maintain appropriate licenses for third-party tools or platforms required to execute the engagement.",
    ],
  },
  {
    title: "Intellectual property",
    items: [
      "Upon full payment, all work product created specifically for you under the SOW becomes your property.",
      "Apex Nova Labs retains all rights to pre-existing tools, frameworks, libraries, and methodologies used during the engagement.",
      "We may reference the engagement in portfolio materials once the work is public, unless an NDA prohibits it.",
    ],
  },
  {
    title: "Confidentiality",
    items: [
      "Both parties agree to protect confidential information with the same care they protect their own proprietary data.",
      "Confidential information will only be used for purposes related to the project and will not be disclosed to third parties without consent.",
      "Confidentiality obligations continue for two (2) years after the engagement ends unless otherwise required by law.",
    ],
  },
  {
    title: "Payments & invoicing",
    items: [
      "Invoices are issued monthly unless alternative milestones are defined in the SOW.",
      "Payment terms are net 15 days from the invoice date. Late payments may pause delivery schedules.",
      "Expenses such as travel or third-party tooling are billed separately with prior approval.",
    ],
  },
  {
    title: "Termination",
    items: [
      "Either party may terminate the engagement with fourteen (14) days written notice.",
      "In the event of termination, the client is responsible for paying for all hours and expenses incurred through the effective termination date.",
      "Both parties will collaborate on a knowledge transfer plan to ensure continuity for in-flight work.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Section padding="lg" className="pt-24 sm:pt-28">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted-foreground)]">
            Terms
          </p>
          <h1 className="text-balance text-4xl font-semibold sm:text-5xl md:text-6xl">
            Terms of service
          </h1>
          <p className="max-w-3xl text-lg text-[var(--color-muted-foreground)]">
            These terms summarize how we engage with clients. Formal contracts or statements of work
            (SOWs) may include additional conditions specific to your project. If there is any conflict,
            the SOW or master services agreement (MSA) will take precedence.
          </p>
          <p className="text-sm text-[var(--color-muted-foreground)]">
            Last updated: October 18, 2025
          </p>
        </div>
      </Section>

      <Section padding="lg" background="muted">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Overview"
            title="What you can expect when we work together."
            description="We value clarity, transparency, and collaboration. These terms help both teams stay aligned from kickoff through launch."
          />
          <div className="space-y-6">
            {termsSections.map((section) => (
              <article
                key={section.title}
                className="rounded-3xl border border-[var(--color-border)] bg-white/85 p-6 shadow-[0_30px_90px_-60px_rgba(37,99,235,0.55)] backdrop-blur"
              >
                <h2 className="text-xl font-semibold text-[var(--color-foreground)]">
                  {section.title}
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted-foreground)]">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-brand)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section padding="lg">
        <div className="rounded-3xl border border-[var(--color-border)] bg-white/80 p-8 text-sm text-[var(--color-muted-foreground)] shadow-[0_35px_100px_-60px_rgba(15,23,42,0.55)]">
          <p>
            Have questions about these terms or need a custom engagement model? Reach out to{" "}
            <Link
              href="mailto:legal@apexnovalabs.lk"
              className="font-medium text-[var(--color-brand)] transition hover:text-[var(--color-brand-muted)]"
            >
              legal@apexnovalabs.lk
            </Link>{" "}
            and we&apos;ll coordinate with our legal partners.
          </p>
        </div>
      </Section>
    </>
  );
}
