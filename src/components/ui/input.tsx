import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, id, className, ...rest }: InputProps) {
  return (
    <label htmlFor={id} className="block">
      {label ? (
        <span className="mb-1 block text-sm font-medium text-slate-700">{label}</span>
      ) : null}
      <input
        id={id}
        className={cn(
          "w-full rounded-2xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900",
          "placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200",
          className,
        )}
        {...rest}
      />
    </label>
  );
}
