import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "outline";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const VARIANTS: Record<ButtonVariant, string> = {
  default: "bg-(--surface-accent) text-(--color-on-accent) hover:brightness-110",
  outline:
    "border border-(--color-strong) bg-transparent text-(--color-ink) hover:bg-(--color-outline-hover)",
};

export function Button({ variant = "default", className, type = "button", ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "rounded-(--radius-btn) px-6 py-2 text-base font-semibold uppercase tracking-[0.04em] transition disabled:cursor-not-allowed disabled:opacity-50",
        VARIANTS[variant],
        className,
      )}
      {...rest}
    />
  );
}
