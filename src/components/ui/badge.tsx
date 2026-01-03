import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "outline" | "success";

const variantStyles: Record<BadgeVariant, string> = {
  default:
    "bg-[var(--color-brand)]/10 text-[var(--color-brand-muted)] border border-transparent",
  outline:
    "border border-[var(--color-border)] text-[var(--color-muted-foreground)]",
  success:
    "bg-[var(--color-success)]/10 text-[var(--color-success)] border border-transparent",
};

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider",
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}
