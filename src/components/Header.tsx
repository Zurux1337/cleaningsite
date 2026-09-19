"use client";

import { Sparkles } from "lucide-react";
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
    <header className="sticky top-0 z-40 border-b border-sky-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-bold text-slate-900">
          <span className="grid size-9 place-items-center rounded-2xl bg-sky-500 text-white">
            <Sparkles className="size-5" aria-hidden />
          </span>
          ЧистоДом
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex" aria-label="Основная навигация">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-sky-600">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={PHONE_HREF}
            className="hidden text-sm font-semibold text-slate-800 hover:text-sky-600 lg:block"
          >
            {PHONE}
          </a>
          <button
            type="button"
            onClick={openCabinet}
            className={cn(
              "rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-sky-700",
              "transition-colors hover:border-sky-300 hover:bg-sky-50",
            )}
          >
            Кабинет
          </button>
          <a
            href="#calc"
            className={cn(
              "rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-sm",
              "transition-colors hover:bg-sky-600",
            )}
          >
            Заказать
          </a>
        </div>
      </div>
    </header>
  );
}
