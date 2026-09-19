"use client";

import { PHONE, PHONE_HREF } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#services", label: "Услуги" },
  { href: "#calc", label: "Калькулятор" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#faq", label: "FAQ" },
];

export function openCabinet() {
  window.dispatchEvent(new CustomEvent("open-cabinet"));
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-oat-canvas/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="text-xl font-bold italic text-hot-magenta">
          ЧистоДом
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-soft-ink md:flex" aria-label="Основная навигация">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-hot-magenta">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={PHONE_HREF}
            className="hidden text-sm font-medium text-soft-ink hover:text-hot-magenta sm:block"
          >
            {PHONE}
          </a>
          <button
            type="button"
            onClick={openCabinet}
            className={cn(
              "rounded-full border border-charcoal bg-transparent px-4 py-2 text-sm font-medium text-soft-ink",
              "transition-colors hover:bg-warm-mist",
            )}
          >
            Кабинет
          </button>
          <a
            href="#calc"
            className={cn(
              "rounded-full bg-hot-magenta px-4 py-2 text-sm font-semibold text-paper-white",
              "transition-colors hover:bg-[#e0257f]",
            )}
          >
            Заказать
          </a>
        </div>
      </div>
    </header>
  );
}
