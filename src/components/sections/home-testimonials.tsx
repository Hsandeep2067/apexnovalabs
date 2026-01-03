import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { TestimonialsGrid } from "@/components/marketing/testimonials-grid";

export function HomeTestimonials() {
  return (
    <Section background="default" padding="lg">
      <div className="space-y-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="Partners who back up our work."
          description="Leaders trust us to navigate strategic pivots and complex builds. Their words reflect how we show up - curious, collaborative, and laser-focused on results."
        />
        <TestimonialsGrid />
      </div>
    </Section>
  );
}
