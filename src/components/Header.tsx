"use client";

import { Palette } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/site";
import { useTheme } from "@/lib/theme";
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
  const { theme, toggle } = useTheme();
  return (
    <header className="sticky top-0 z-40 bg-(--surface-canvas)/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="t-logo text-xl">
          ЧистоДом
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-(--color-ink) md:flex" aria-label="Основная навигация">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-(--color-link)">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={PHONE_HREF}
            className="hidden text-sm font-medium text-(--color-ink) hover:text-(--color-link) sm:block"
          >
            {PHONE}
          </a>
          <button
            type="button"
            onClick={toggle}
            aria-label="Сменить тему оформления"
            suppressHydrationWarning
            title={theme === "playful" ? "Переключить на Steep" : "Переключить на Playful"}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-(--radius-btn) border border-(--color-line) bg-transparent px-3 py-2 text-sm font-medium text-(--color-ink)",
              "transition-colors hover:bg-(--color-outline-hover)",
            )}
          >
            <Palette className="size-4" aria-hidden />
            {theme === "playful" ? "Steep" : "Playful"}
          </button>
          <button
            type="button"
            onClick={openCabinet}
            className={cn(
              "rounded-(--radius-btn) border border-(--color-strong) bg-transparent px-4 py-2 text-sm font-medium text-(--color-ink)",
              "transition-colors hover:bg-(--color-outline-hover)",
            )}
          >
            Кабинет
          </button>
          <a
            href="#calc"
            className={cn(
              "rounded-(--radius-btn) bg-(--color-accent) px-4 py-2 text-sm font-semibold text-(--color-on-accent)",
              "transition-colors hover:bg-(--color-accent-hover)",
            )}
          >
            Заказать
          </a>
        </div>
      </div>
    </header>
  );
}
