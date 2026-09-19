import * as React from "react";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "outline";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const VARIANTS: Record<ButtonVariant, string> = {
  default: "bg-(--color-accent) text-(--color-on-accent) hover:bg-(--color-accent-hover)",
  outline:
    "border border-(--color-strong) bg-transparent text-(--color-ink) hover:bg-(--color-outline-hover)",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", className, type = "button", ...rest }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        "rounded-(--radius-btn) px-6 py-2 text-base font-semibold uppercase tracking-[0.04em] transition active:scale-95 disabled:cursor-not-allowed disabled:opacity-50",
        VARIANTS[variant],
        className,
      )}
      {...rest}
    />
  ),
);
Button.displayName = "Button";
