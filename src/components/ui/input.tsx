import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, id, className, ...rest }: InputProps) {
  return (
    <label htmlFor={id} className="block">
      {label ? (
        <span className="mb-1 block text-sm text-graphite">{label}</span>
      ) : null}
      <input
        id={id}
        className={cn(
          "w-full rounded-none border border-hairline-gray bg-pure-white px-4 py-2.5 text-sm text-ink-black",
          "placeholder:text-graphite/50 focus:border-cobalt-action focus:outline-none",
          className,
        )}
        {...rest}
      />
    </label>
  );
}
