"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";
import HoverArrow from "@/components/HoverArrow";

const TICKER = [
  { label: "Рейтинг", value: "4.9" },
  { label: "Уборок", value: "1500+" },
  { label: "Гарантия", value: "24ч" },
  { label: "Слоты", value: "9–21" },
];

const TITLE = "Уборка без стресса за 60 секунд";

/* Character-stagger entrance — entrance adaptation of the Skiper UI
 * skiper31 CharacterV1 scroll pattern (attribution: Skiper UI free
 * version). The original disperses on scroll over a 210vh stage; here
 * characters spring in on mount, which suits a compact hero band. */
function AnimatedTitle() {
  const reduce = useReducedMotion();
  if (reduce) return <>{TITLE}</>;
  return (
    <span aria-label={TITLE}>
      {TITLE.split("").map((c, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block"
          initial={{ opacity: 0, y: 26, rotateX: -50 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.15 + i * 0.022, type: "spring", bounce: 0.35 }}
          style={{ transformOrigin: "center" }}
        >
          {c === " " ? " " : c}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <>
      <section id="top" className="bg-[#000000]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <p className="bg-(--surface-accent) bg-clip-text text-[12px] font-semibold uppercase tracking-[0.06em] text-transparent">
            Клининг · Квартиры · Офисы
          </p>
          <h1 className="mt-5 max-w-4xl text-[48px] font-black leading-[1] tracking-[-0.05em] text-white md:text-[72px]">
            <AnimatedTitle />
          </h1>
          <p className="mt-5 max-w-xl text-base leading-[1.5] text-white/70 md:text-lg">
            Профессиональный клининг квартир и офисов: рассчитайте стоимость онлайн и закажите
            уборку в удобный слот — сегодня или завтра.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#calc"
              className={cn(
                "group inline-flex items-center gap-2 rounded-(--radius-btn) bg-(--surface-accent) px-6 py-2 text-sm font-semibold uppercase tracking-[0.04em] text-white",
                "transition hover:brightness-110 active:scale-95",
              )}
            >
              Рассчитать стоимость
              <HoverArrow />
            </a>
            <a
              href="#services"
              className={cn(
                "inline-flex items-center rounded-(--radius-btn) border border-white/60 px-6 py-2",
                "text-sm font-semibold uppercase tracking-[0.04em] text-white transition-colors hover:bg-white/10 active:scale-95",
              )}
            >
              Услуги
            </a>
          </div>
        </div>
      </section>
      <div className="bg-(--surface-band)" aria-label="ЧистоДом в цифрах">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-8 gap-y-2 border-t border-white/20 px-4 py-3 sm:px-6">
          {TICKER.map(({ label, value }) => (
            <p key={label} className="text-sm font-semibold text-(--color-on-band)">
              <span className="mr-2 text-[12px] font-semibold uppercase tracking-[0.06em] opacity-60">
                {label}
              </span>
              {value}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
