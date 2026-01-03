import { logoCloud } from "@/lib/content";

export function LogoCloud() {
  return (
    <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-6">
      {logoCloud.map((logo) => (
        <div
          key={logo.name}
          className="flex items-center justify-center rounded-xl border border-[var(--color-border)] bg-white/70 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-muted-foreground)] shadow-sm backdrop-blur"
        >
          {logo.name}
        </div>
      ))}
    </div>
  );
}
