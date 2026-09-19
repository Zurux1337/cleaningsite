import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Cta() {
  return (
    <section aria-label="Заказать уборку" className="bg-oat-canvas">
      <div className="mx-auto max-w-6xl px-4 pb-14 text-center sm:px-6 md:pb-20">
        <span className="mx-auto grid size-14 place-items-center rounded-[20px] bg-soft-ink">
          <Sparkles className="size-6 text-hot-magenta" aria-hidden />
        </span>
        <p className="mt-6 text-sm font-medium text-slate">Гарантия 24 часа</p>
        <h2 className="mx-auto mt-2 max-w-3xl text-[40px] font-bold italic leading-[1.15] text-ink-black md:text-[70px] md:leading-[1]">
          Чистая квартира уже сегодня — рассчитайте за 60 секунд
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-lg leading-[1.5] text-slate">
          ЧистоДом: фиксированная цена, эко-средства включены, слоты сегодня и завтра.
        </p>
        <a
          href="#calc"
          className={cn(
            "mt-8 inline-flex items-center gap-2 rounded-full bg-hot-magenta px-6 py-3.5",
            "text-base font-semibold text-paper-white transition-colors hover:bg-[#e0257f]",
          )}
        >
          Рассчитать стоимость
          <ArrowRight className="size-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
