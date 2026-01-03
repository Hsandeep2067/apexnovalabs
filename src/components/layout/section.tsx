import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = {
  id?: string;
  className?: string;
  containerClassName?: string;
  background?: "default" | "muted" | "inverted";
  padding?: "sm" | "md" | "lg";
  children: ReactNode;
};

const paddingClasses: Record<NonNullable<SectionProps["padding"]>, string> = {
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-20",
  lg: "py-20 sm:py-28 lg:py-32",
};

const backgroundClasses: Record<
  NonNullable<SectionProps["background"]>,
  string
> = {
  default: "bg-transparent",
  muted: "bg-[var(--color-muted)]/35",
  inverted: "bg-[var(--color-brand-muted)] text-[var(--color-brand-foreground)]",
};

export function Section({
  id,
  className,
  containerClassName,
  background = "default",
  padding = "md",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full",
        paddingClasses[padding],
        backgroundClasses[background],
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
