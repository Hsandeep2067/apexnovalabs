import { testimonials } from "@/lib/content";
import { TestimonialCard } from "@/components/cards/testimonial-card";

export function TestimonialsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.quote} testimonial={testimonial} />
      ))}
    </div>
  );
}
