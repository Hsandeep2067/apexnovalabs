import { valuePillars } from "@/lib/content";

export function ValuePillars() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {valuePillars.map((pillar) => (
        <article
          key={pillar.title}
          className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white/80 p-8 shadow-[0_18px_60px_-35px_rgba(15,23,42,0.45)] backdrop-blur"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand)]/8 via-transparent to-transparent" />
          <div className="relative space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--color-muted-foreground)]">
              {pillar.title}
            </h3>
            <p className="text-lg font-semibold text-[var(--color-foreground)]">
              {pillar.headline}
            </p>
            <p className="text-sm text-[var(--color-muted-foreground)]">
              {pillar.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
