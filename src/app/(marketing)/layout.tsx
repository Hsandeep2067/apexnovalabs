import type { ReactNode } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">
      <a
        href="#main"
        className="absolute left-4 top-4 z-50 -translate-y-20 transform rounded-full bg-[var(--color-brand)] px-4 py-2 text-sm font-medium text-[var(--color-brand-foreground)] transition focus:translate-y-0 focus:outline-none"
      >
        Skip to content
      </a>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.12),transparent_55%)]" />
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
