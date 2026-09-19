import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, id, className, ...rest }: InputProps) {
  return (
    <label htmlFor={id} className="block">
      {label ? (
        <span className="mb-1 block text-sm font-medium text-soft-ink">{label}</span>
      ) : null}
      <input
        id={id}
        className={cn(
          "w-full rounded-full border border-charcoal bg-oat-canvas px-4 py-2.5 text-base text-soft-ink",
          "placeholder:text-stone focus:border-hot-magenta focus:outline-none",
          className,
        )}
        {...rest}
      />
    </label>
  );
}
