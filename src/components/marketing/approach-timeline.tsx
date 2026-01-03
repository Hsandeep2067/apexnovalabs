import { approach } from "@/lib/content";

export function ApproachTimeline() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {approach.map((phase) => (
        <div
          key={phase.slug}
          className="flex h-full flex-col rounded-3xl border border-[var(--color-border)] bg-[var(--color-approach-surface)] p-8 text-[var(--color-approach-muted)] shadow-[0_30px_80px_-45px_rgba(37,99,235,0.6)] backdrop-blur"
        >
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold uppercase tracking-[0.4em] text-[var(--color-approach-muted)]">
              {phase.name}
            </span>
          </div>
          <p className="mt-4 text-base font-medium text-[var(--color-approach-foreground)]">
            {phase.description}
          </p>
          <div className="mt-6 space-y-4 text-sm">
            <div>
              <p className="font-semibold text-[var(--color-approach-foreground)]">
                Key activities
              </p>
              <ul className="mt-2 space-y-2 text-[var(--color-approach-muted)]">
                {phase.activities.map((activity) => (
                  <li key={activity} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-approach-bullet)]" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[var(--color-approach-foreground)]">
                Artifacts
              </p>
              <ul className="mt-2 space-y-2 text-[var(--color-approach-muted)]">
                {phase.artifacts.map((artifact) => (
                  <li key={artifact} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-approach-bullet)]" />
                    <span>{artifact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
