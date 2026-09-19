"use client";

import { PHONE, PHONE_HREF } from "@/lib/site";
import { useTheme } from "@/lib/theme";
import ThemeToggle from "@/components/ThemeToggle";
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
    <header className="bg-(--surface-header)">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="t-logo text-xl">
          ЧистоДом
        </a>
        <nav className="hidden items-center gap-6 text-base font-semibold text-(--color-ink) md:flex" aria-label="Основная навигация">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="transition-opacity hover:opacity-70">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={PHONE_HREF}
            className="hidden text-base font-semibold text-(--color-ink) hover:underline sm:block"
          >
            {PHONE}
          </a>
          <ThemeToggle
            isDark={theme === "dark"}
            onToggle={toggle}
            className="size-9 p-1.5"
          />
          <button
            type="button"
            onClick={openCabinet}
            className="px-2 py-2 text-base font-semibold text-(--color-ink) hover:underline"
          >
            Кабинет
          </button>
          <a
            href="#calc"
            className={cn(
              "rounded-(--radius-btn) bg-(--surface-accent) px-6 py-2 text-sm font-semibold uppercase tracking-[0.04em] text-(--color-on-accent)",
              "transition hover:brightness-110",
            )}
          >
            Заказать
          </a>
        </div>
      </div>
    </header>
  );
}
