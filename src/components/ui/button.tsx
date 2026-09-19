import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "outline";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const VARIANTS: Record<ButtonVariant, string> = {
  default: "bg-sky-500 text-white hover:bg-sky-600",
  outline: "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
};

export function Button({ variant = "default", className, type = "button", ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "rounded-2xl px-5 py-2.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        VARIANTS[variant],
        className,
      )}
      {...rest}
    />
  );
}
