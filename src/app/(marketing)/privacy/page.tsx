import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | Apex Nova Labs Sri Lanka",
  description:
    "Learn how Apex Nova Labs collects, uses, and protects the information you share with us through our marketing site and contact form.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    title: "Information we collect",
    content: [
      "Contact details such as name, email, company, and the information you provide in our consult request form.",
      "High-level project context shared during intro calls or via email.",
      "Website analytics data (aggregated and anonymized) used to understand overall traffic trends.",
    ],
  },
  {
    title: "How we use your information",
    content: [
      "Respond to inbound inquiries, proposals, and partnership opportunities.",
      "Provide estimates, statements of work, or similar documentation you request.",
      "Improve our marketing materials and outreach based on aggregated site usage patterns.",
    ],
  },
  {
    title: "What we do not do",
    content: [
      "Sell or rent personal information to third parties.",
      "Run third-party advertising pixels or retargeting campaigns.",
      "Use your details for any purpose unrelated to the inquiry you submitted without additional consent.",
    ],
  },
  {
    title: "Data retention & security",
    content: [
      "We retain contact form submissions in a secure CRM with role-based access for as long as needed to respond to your inquiry.",
      "If we do not move forward together, you may request deletion of your information by emailing privacy@apexnovalabs.lk.",
      "Infrastructure and tooling providers (such as hosting or analytics) are carefully vetted for security and compliance.",
    ],
  },
  {
    title: "Your rights",
    content: [
      "Request a copy of the information we hold about you.",
      "Ask us to update or correct inaccurate details.",
      "Request deletion of your information unless we are required to retain it for legal or contractual reasons.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Section padding="lg" className="pt-24 sm:pt-28">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted-foreground)]">
            Privacy
          </p>
          <h1 className="text-balance text-4xl font-semibold sm:text-5xl md:text-6xl">
            Privacy policy
          </h1>
          <p className="max-w-3xl text-lg text-[var(--color-muted-foreground)]">
            We respect your privacy and only collect the information necessary to respond to
            your inquiries or maintain an on-going partnership. This policy outlines how we handle
            data shared via the Apex Nova Labs marketing site.
          </p>
          <p className="text-sm text-[var(--color-muted-foreground)]">
            Last updated: October 18, 2025
          </p>
        </div>
      </Section>

      <Section padding="lg" background="muted">
        <div className="space-y-10">
          <SectionHeading
            eyebrow="Details"
            title="How we handle your data."
            description="We keep things straightforward: collect only what we need, store it securely, and never share it without permission."
          />
          <div className="space-y-6">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-3xl border border-[var(--color-border)] bg-white/85 p-6 shadow-[0_30px_90px_-60px_rgba(37,99,235,0.55)] backdrop-blur"
              >
                <h2 className="text-xl font-semibold text-[var(--color-foreground)]">
                  {section.title}
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted-foreground)]">
                  {section.content.map((item) => (
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
            Questions or requests? Email{" "}
            <Link
              href="mailto:privacy@apexnovalabs.lk"
              className="font-medium text-[var(--color-brand)] transition hover:text-[var(--color-brand-muted)]"
            >
              privacy@apexnovalabs.lk
            </Link>{" "}
            or write to {siteConfig.headquarters}. We aim to respond within five business days.
          </p>
        </div>
      </Section>
    </>
  );
}
