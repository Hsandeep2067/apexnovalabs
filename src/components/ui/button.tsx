import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-brand)] text-[var(--color-brand-foreground)] shadow-[var(--shadow-soft)] hover:bg-[var(--color-brand-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]",
  secondary:
    "bg-[var(--color-muted)] text-[var(--color-foreground)] hover:bg-[var(--color-muted-foreground)]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)]",
  ghost:
    "bg-transparent text-[var(--color-foreground)] hover:bg-[var(--color-muted)]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)]",
  link: "bg-transparent text-[var(--color-brand)] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 rounded-full px-4 text-sm",
  md: "h-11 rounded-full px-6 text-base",
  lg: "h-12 rounded-full px-8 text-base md:text-lg",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return cn(
    "inline-flex items-center justify-center font-medium transition-transform duration-150 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", type = "button", ...props },
    ref,
  ) => (
    <button
      ref={ref}
      type={type}
      className={buttonClasses({ variant, size, className })}
      {...props}
    />
  ),
);

Button.displayName = "Button";
