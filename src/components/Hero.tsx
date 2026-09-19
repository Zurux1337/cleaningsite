import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const TICKER = [
  { label: "Рейтинг", value: "4.9" },
  { label: "Уборок", value: "1500+" },
  { label: "Гарантия", value: "24ч" },
  { label: "Слоты", value: "9–21" },
];

export default function Hero() {
  return (
    <>
      <section id="top" className="bg-[#000000]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <p className="bg-(--surface-accent) bg-clip-text text-[12px] font-semibold uppercase tracking-[0.06em] text-transparent">
            Клининг · Квартиры · Офисы
          </p>
          <h1 className="mt-5 max-w-4xl text-[48px] font-black leading-[1] tracking-[-0.05em] text-white md:text-[72px]">
            Уборка без стресса за 60 секунд
          </h1>
          <p className="mt-5 max-w-xl text-base leading-[1.5] text-white/70 md:text-lg">
            Профессиональный клининг квартир и офисов: рассчитайте стоимость онлайн и закажите
            уборку в удобный слот — сегодня или завтра.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#calc"
              className={cn(
                "inline-flex items-center gap-2 rounded-(--radius-btn) bg-(--surface-accent) px-6 py-2 text-sm font-semibold uppercase tracking-[0.04em] text-white",
                "transition hover:brightness-110",
              )}
            >
              Рассчитать стоимость
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href="#services"
              className={cn(
                "inline-flex items-center rounded-(--radius-btn) border border-white/60 px-6 py-2",
                "text-sm font-semibold uppercase tracking-[0.04em] text-white transition-colors hover:bg-white/10",
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
