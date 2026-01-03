import Link from "next/link";
import type { Service } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { buttonClasses } from "@/components/ui/button";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-3xl border border-[var(--color-border)] bg-[var(--color-service-surface)] p-8 text-[var(--color-service-muted)] shadow-[0_25px_60px_-40px_rgba(37,99,235,0.7)] backdrop-blur">
      <div className="space-y-4">
        <Badge>{service.name}</Badge>
        <h3 className="text-balance text-xl font-semibold text-[var(--color-service-foreground)]">
          {service.tagline}
        </h3>
        <p className="text-sm text-pretty text-[var(--color-service-muted)]">
          {service.description}
        </p>
        <ul className="space-y-2 text-sm">
          {service.outcomes.slice(0, 3).map((outcome) => (
            <li
              key={outcome}
              className="flex items-start gap-2 text-[var(--color-service-muted)]"
            >
              <span className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-brand)]" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--color-service-muted)]">
        {service.stack.slice(0, 3).map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href={`/services/${service.slug}`}
          className={buttonClasses({
            variant: "secondary",
            size: "sm",
            className: "w-full justify-center",
          })}
        >
          Explore service
        </Link>
      </div>
    </article>
  );
}
