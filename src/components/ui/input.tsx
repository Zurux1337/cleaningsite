import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, id, className, ...rest }: InputProps) {
  return (
    <label htmlFor={id} className="block">
      {label ? (
        <span className="mb-1 block text-sm font-medium text-(--color-ink)">{label}</span>
      ) : null}
      <input
        id={id}
        className={cn(
          "w-full rounded-(--radius-input) border border-(--color-input-line) bg-(--surface-input) px-4 py-2.5 text-base text-(--color-ink)",
          "placeholder:text-(--color-muted) focus:border-(--color-accent) focus:outline-none",
          className,
        )}
        {...rest}
      />
    </label>
  );
}
