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
      <section id="top" className="bg-oat-canvas">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 md:py-28">
          <h1 className="mx-auto max-w-4xl text-[70px] font-black italic leading-[1] tracking-[-0.002em] text-ink-black md:text-[79px]">
            Уборка без стресса за 60 секунд
          </h1>
          <p className="mx-auto mt-6 max-w-[560px] text-base leading-[1.5] text-slate md:text-lg">
            Профессиональный клининг квартир и офисов: рассчитайте стоимость онлайн и закажите
            уборку в удобный слот — сегодня или завтра.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#calc"
              className={cn(
                "inline-flex items-center gap-2 rounded-full bg-hot-magenta px-6 py-3.5 text-base font-semibold text-paper-white",
                "transition-colors hover:bg-[#e0257f]",
              )}
            >
              Рассчитать стоимость
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href="#services"
              className={cn(
                "inline-flex items-center rounded-full border border-charcoal px-6 py-3.5",
                "text-base font-medium text-soft-ink transition-colors hover:bg-warm-mist",
              )}
            >
              Услуги
            </a>
          </div>
        </div>
      </section>
      <div className="bg-ink-black" aria-label="ЧистоДом в цифрах">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 py-3 sm:px-6">
          {TICKER.map(({ label, value }) => (
            <p key={label} className="text-sm font-medium text-paper-white">
              <span className="mr-2 text-[12px] uppercase tracking-[0.08em] text-paper-white/60">
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
