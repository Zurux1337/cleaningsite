import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Card({ className, ...rest }: HTMLAttributes<HTMLElement>) {
  return (
    <aside
      className={cn("rounded-[44px] bg-paper-white p-6 shadow-xl", className)}
      {...rest}
    />
  );
}

export function CardContent({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-4 space-y-2 text-base", className)} {...rest} />;
}
