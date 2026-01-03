import { caseStudies } from "@/lib/content";
import { CaseStudyCard } from "@/components/cards/case-study-card";

export function CaseStudiesPreview() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {caseStudies.map((caseStudy) => (
        <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
      ))}
    </div>
  );
}
