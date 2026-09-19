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
    <header className="bg-pure-white">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 text-ink-black">
          <span className="grid size-6 place-items-center bg-pure-black text-sm text-pure-white">
            Ч
          </span>
          ЧистоДом
        </a>
        <nav className="hidden items-center gap-6 text-[13px] text-graphite md:flex" aria-label="Основная навигация">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-ink-black">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={PHONE_HREF}
            className="hidden text-[13px] text-graphite hover:text-ink-black sm:block"
          >
            {PHONE}
          </a>
          <button
            type="button"
            onClick={openCabinet}
            className={cn(
              "border border-graphite bg-transparent px-4 py-2 text-sm text-graphite",
              "transition-colors hover:bg-shadow-whisper",
            )}
          >
            Кабинет
          </button>
          <a
            href="#calc"
            className={cn(
              "bg-cobalt-action px-4 py-2 text-sm text-pure-white",
              "transition-colors hover:bg-[#005fd4]",
            )}
          >
            Заказать
          </a>
        </div>
      </div>
    </header>
  );
}
