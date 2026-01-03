import { heroStats } from "@/lib/content";

export function StatsGrid() {
  return (
    <dl className="grid gap-6 sm:grid-cols-3">
      {heroStats.map((stat) => (
        <div
          key={stat.label}
          className="flex h-full flex-col justify-between rounded-3xl border border-[var(--color-border)] bg-[var(--color-stat-surface)] p-6 text-center text-[var(--color-stat-muted)] shadow-[0_25px_70px_-45px_rgba(2,132,199,0.7)] backdrop-blur"
        >
          <dt className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-stat-muted)]">
            {stat.label}
          </dt>
          <dd className="mt-3 text-3xl font-semibold text-[var(--color-stat-foreground)]">
            {stat.value}
          </dd>
          <p className="mt-3 text-sm text-balance text-[var(--color-stat-muted)]">
            {stat.detail}
          </p>
        </div>
      ))}
    </dl>
  );
}
