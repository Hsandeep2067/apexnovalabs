"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/content";
import { cn } from "@/lib/utils";
import { buttonClasses } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Container } from "./container";
import LogoMark from "../../../public/Logo.png";

export function SiteHeader() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileOpen((open) => !open);
  };

  const closeMobileNav = () => {
    setIsMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[var(--color-background)]/80 shadow-[0_1px_0_0_rgba(148,163,184,0.2)]" />
      <Container className="flex h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={LogoMark}
              alt={siteConfig.name}
              priority
              className="h-10 w-10 rounded-full border border-[var(--color-border)] bg-[var(--color-inverted)] object-contain p-1 shadow-[var(--shadow-soft)]"
            />
            <div className="flex flex-col">
              <span className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--color-muted-foreground)]">
                Apex Nova
              </span>
              <span className="text-base font-semibold text-[var(--color-foreground)]">
                Labs
              </span>
            </div>
          </Link>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === link.href
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-150 hover:text-[var(--color-brand)]",
                  isActive
                    ? "text-[var(--color-brand)]"
                    : "text-[var(--color-muted-foreground)]",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className={buttonClasses({ size: "sm" })}
          >
            Request a consult
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={toggleMobileNav}
            aria-expanded={isMobileOpen}
            aria-controls="primary-navigation"
            aria-label="Toggle navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-inverted)]/70 text-[var(--color-foreground)] shadow-sm transition hover:bg-[var(--color-inverted)]/90"
          >
            <MobileIcon isOpen={isMobileOpen} />
          </button>
        </div>
      </Container>

      <div
        id="primary-navigation"
        className={cn(
          "md:hidden",
          isMobileOpen ? "block" : "hidden",
        )}
      >
        <Container className="pb-6">
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-inverted)]/85 shadow-xl shadow-blue-500/10 backdrop-blur-md">
            <div className="flex flex-col divide-y divide-[var(--color-border)]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileNav}
                  className="px-6 py-4 text-sm font-medium text-[var(--color-foreground)] transition hover:bg-[var(--color-muted)]/30"
                >
                  {link.label}
                  {link.description ? (
                    <span className="mt-1 block text-sm text-[var(--color-muted-foreground)]">
                      {link.description}
                    </span>
                  ) : null}
                </Link>
              ))}
              <div className="px-6 py-4">
                <Link
                  href="/contact"
                  onClick={closeMobileNav}
                  className={buttonClasses({
                    size: "md",
                    className: "w-full justify-center",
                  })}
                >
                  Request a consult
                </Link>
                <p className="mt-3 text-xs text-[var(--color-muted-foreground)]">
                  {siteConfig.contactEmail}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

function MobileIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {isOpen ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  );
}
