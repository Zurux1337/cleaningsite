import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "outline";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const VARIANTS: Record<ButtonVariant, string> = {
  default: "bg-hot-magenta text-paper-white hover:bg-[#e0257f]",
  outline:
    "border border-charcoal bg-transparent text-soft-ink hover:bg-warm-mist",
};

export function Button({ variant = "default", className, type = "button", ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "rounded-full px-6 py-3.5 text-base font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        VARIANTS[variant],
        className,
      )}
      {...rest}
    />
  );
}
