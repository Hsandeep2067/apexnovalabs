import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { ApproachTimeline } from "@/components/marketing/approach-timeline";

export function HomeApproach() {
  return (
    <Section id="approach" padding="lg">
      <div className="space-y-10">
        <SectionHeading
          eyebrow="How we work"
          title="Rigorous playbooks. Collaborative delivery."
          description="We tailor each engagement to your operating rhythm while bringing clarity, predictable velocity, and transparent communication."
        />
        <ApproachTimeline />
      </div>
    </Section>
  );
}
