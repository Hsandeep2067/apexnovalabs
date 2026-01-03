import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/content";
import { Container } from "./container";
import LogoMark from "../../../public/Logo.png";

const utilityLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Security", href: "/.well-known/security.txt" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)]">
      <Container className="flex flex-col gap-12 py-16 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-md space-y-4">
          <Link href="/" className="inline-flex items-center gap-2">
            <Image
              src={LogoMark}
              alt={siteConfig.name}
              className="h-12 w-12 rounded-full border border-[var(--color-border)] bg-[var(--color-inverted)] object-contain p-1 shadow-[var(--shadow-soft)]"
            />
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-muted-foreground)]">
                Apex Nova
              </span>
              <span className="text-lg font-semibold text-[var(--color-foreground)]">
                Labs
              </span>
            </div>
          </Link>
          <p className="text-sm text-[var(--color-muted-foreground)]">
            {siteConfig.description}
          </p>
          <div className="space-y-2 text-sm">
            <p className="font-medium text-[var(--color-foreground)]">
              Let&apos;s collaborate:
            </p>
            <Link
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-[var(--color-brand)] transition hover:text-[var(--color-brand-muted)]"
            >
              {siteConfig.contactEmail}
            </Link>
            <p className="text-[var(--color-muted-foreground)]">
              {siteConfig.headquarters}
            </p>
          </div>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-[var(--color-muted-foreground)]">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-[var(--color-brand)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-[var(--color-muted-foreground)]">
              Resources
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {utilityLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-[var(--color-brand)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-[var(--color-muted-foreground)]">
              Connect
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {siteConfig.socials.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-[var(--color-brand)]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <div className="border-t border-[var(--color-border)] bg-[var(--color-background)] py-6">
        <Container className="flex flex-col gap-4 text-sm text-[var(--color-muted-foreground)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Partners in reliable engineering and thoughtful design.</p>
        </Container>
      </div>
    </footer>
  );
}
