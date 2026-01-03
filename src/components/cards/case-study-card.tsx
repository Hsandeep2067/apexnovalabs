import Link from "next/link";
import type { CaseStudy } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { buttonClasses } from "@/components/ui/button";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-3xl border border-[var(--color-border)] bg-[var(--color-inverted)]/85 p-8 shadow-[0_30px_80px_-40px_rgba(8,47,73,0.55)] backdrop-blur">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">{caseStudy.industry}</Badge>
          <Badge variant="outline">{caseStudy.platform}</Badge>
        </div>
        <h3 className="text-2xl font-semibold text-[var(--color-foreground)]">
          {caseStudy.name}
        </h3>
        <p className="text-sm text-[var(--color-muted-foreground)]">
          {caseStudy.summary}
        </p>
        <ul className="grid gap-2">
          {caseStudy.results.map((result) => (
            <li
              key={result.label}
              className="flex items-start gap-3 rounded-2xl bg-white/60 px-4 py-3 text-sm shadow-inner shadow-blue-500/5 backdrop-blur"
            >
              <span className="text-lg font-semibold text-[var(--color-brand)]">
                {result.value}
              </span>
              <div>
                <p className="font-medium text-[var(--color-foreground)]">
                  {result.label}
                </p>
                <p className="text-xs text-[var(--color-muted-foreground)]">
                  {result.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <Link
          href={`/work/${caseStudy.slug}`}
          className={buttonClasses({
            variant: "secondary",
            size: "sm",
            className: "justify-center",
          })}
        >
          View case study
        </Link>
      </div>
    </article>
  );
}
