import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

/*
 * Arrow micro-interaction — adapted from Skiper UI skiper99 ArrowIcon
 * (Skiper UI free version, attribution required).
 * Chevron nudges forward while a line grows beneath it on hover.
 */
export default function HoverArrow({ className }: { className?: string }) {
  return (
    <span className={cn("group inline-flex items-center", className)}>
      <span className="relative grid items-center justify-center">
        <ChevronRight className="size-4 transition-all duration-500 ease-out group-hover:translate-x-0.5" aria-hidden />
        <span className="absolute right-[9px] h-[2px] w-3 origin-right scale-x-0 rounded-[1px] bg-current transition-all duration-300 ease-out group-hover:right-[7px] group-hover:scale-x-100" aria-hidden />
      </span>
    </span>
  );
}
