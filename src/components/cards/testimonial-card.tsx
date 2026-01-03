import type { Testimonial } from "@/lib/types";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <blockquote className="flex h-full flex-col justify-between rounded-3xl border border-[var(--color-border)] bg-[var(--color-inverted)]/80 p-8 shadow-[0_20px_60px_-40px_rgba(30,64,175,0.6)] backdrop-blur">
      <p className="text-lg italic text-[var(--color-foreground)]">
        “{testimonial.quote}”
      </p>
      <footer className="mt-6 text-sm text-[var(--color-muted-foreground)]">
        <div className="font-semibold text-[var(--color-foreground)]">
          {testimonial.name}
        </div>
        <div>
          {testimonial.role}, {testimonial.company}
        </div>
      </footer>
    </blockquote>
  );
}
