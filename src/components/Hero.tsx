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
      <section id="top" className="bg-pure-black">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:py-20">
          <div aria-hidden className="hidden select-none md:block">
            <div className="grid max-w-[360px] grid-cols-6 gap-2">
              {Array.from({ length: 24 }).map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "aspect-square bg-pure-white",
                    i % 5 === 0 && "opacity-20",
                  )}
                />
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-[50px] leading-[1] tracking-[-0.045em] text-pure-white md:text-[80px]">
              Уборка без стресса за 60 секунд
            </h1>
            <p className="mt-4 max-w-xl text-[18px] leading-[1.33] text-pure-white/80">
              Профессиональный клининг квартир и офисов: рассчитайте стоимость онлайн и закажите
              уборку в удобный слот — сегодня или завтра.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#calc"
                className={cn(
                  "inline-flex items-center gap-2 bg-cobalt-action px-[15px] py-3 text-sm text-pure-white",
                  "transition-colors hover:bg-[#005fd4]",
                )}
              >
                Рассчитать стоимость
                <ArrowRight className="size-4" aria-hidden />
              </a>
              <a
                href="#services"
                className={cn(
                  "inline-flex items-center border border-pure-white/60 px-[15px] py-3",
                  "text-sm text-pure-white transition-colors hover:bg-pure-white/10",
                )}
              >
                Услуги
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-pure-black" aria-label="ЧистоДом в цифрах">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-10 gap-y-2 border-t border-pure-white/20 px-4 py-4 sm:px-6">
          {TICKER.map(({ label, value }) => (
            <p key={label} className="text-sm text-pure-white">
              <span className="mr-2 text-[12px] uppercase tracking-[0.08em] text-pure-white/60">
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
