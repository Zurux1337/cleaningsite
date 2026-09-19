import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Card({ className, ...rest }: HTMLAttributes<HTMLElement>) {
  return (
    <aside
      className={cn("rounded-3xl border border-sky-100 bg-white p-6 shadow-sm", className)}
      {...rest}
    />
  );
}

export function CardContent({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-4 space-y-2 text-sm", className)} {...rest} />;
}
