import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/forms/contact-form";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { siteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact | Apex Nova Labs Sri Lanka",
  description:
    "Share your goals, timeline, and constraints. Apex Nova Labs Sri Lanka will assemble the right team and follow up within one business day (GMT+5:30).",
  alternates: {
    canonical: "/contact",
  },
};

const contactChannels = [
  {
    label: "Email",
    value: siteConfig.contactEmail,
    href: `mailto:${siteConfig.contactEmail}`,
    description: "Best for project briefs, RFPs, or formal introductions.",
  },
  {
    label: "Calendly",
    value: "15-minute intro call",
    href: "https://cal.com/apexnovalabslk/intro",
    description: "Need to talk live? Grab a slot that works for your team.",
  },
  {
    label: "Headquarters",
    value: siteConfig.headquarters,
    description: "Hybrid Colombo team with collaborators in Kandy, Galle, and Jaffna.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Section padding="lg" className="pt-24 sm:pt-28">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--color-muted-foreground)]">
            Contact
          </p>
          <h1 className="text-balance text-4xl font-semibold sm:text-5xl md:text-6xl">
            Tell us about your project.
          </h1>
          <p className="max-w-3xl text-lg text-[var(--color-muted-foreground)]">
            Share the Outcomes you&apos;re targeting, the constraints that matter, and
            the timeline you&apos;re navigating. We&apos;ll respond within two business days
            with next steps and the right Apex Nova Labs principals in the loop.
          </p>
        </div>
      </Section>

      <Section padding="lg" background="muted">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Let's collaborate"
              title="We're here to help ambitious teams ship."
              description="Fill out the form and we'll take it from there. Prefer email or a quick call? Those options are below too."
            />
            <div className="space-y-6 rounded-3xl border border-[var(--color-border)] bg-white/80 p-6 shadow-[0_30px_90px_-60px_rgba(37,99,235,0.55)] backdrop-blur">
              {contactChannels.map((channel) => (
                <div key={channel.label} className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--color-muted-foreground)]">
                    {channel.label}
                  </p>
                  {channel.href ? (
                    <Link
                      href={channel.href}
                      className="text-base font-semibold text-[var(--color-foreground)] transition hover:text-[var(--color-brand)]"
                    >
                      {channel.value}
                    </Link>
                  ) : (
                    <p className="text-base font-semibold text-[var(--color-foreground)]">
                      {channel.value}
                    </p>
                  )}
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    {channel.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-[var(--color-border)] bg-white/70 p-6 text-sm text-[var(--color-muted-foreground)] shadow-[0_25px_75px_-60px_rgba(37,99,235,0.5)] backdrop-blur">
              <p>
                Need to share attachments? Email{" "}
                <Link
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="font-medium text-[var(--color-brand)] transition hover:text-[var(--color-brand-muted)]"
                >
                  {siteConfig.contactEmail}
                </Link>{" "}
                and include links to Drive, Notion, or other secure docs.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
