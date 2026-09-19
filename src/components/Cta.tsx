import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Cta() {
  return (
    <section aria-label="Заказать уборку" className="bg-(--surface-canvas)">
      <div className="mx-auto max-w-6xl px-4 pb-14 text-center sm:px-6 md:pb-20">
        <span className="mx-auto grid size-14 place-items-center rounded-[20px] bg-(--surface-tile)">
          <Sparkles className="size-6 text-(--color-tile-icon)" aria-hidden />
        </span>
        <p className="eyebrow">Гарантия 24 часа</p>
        <h2 className="t-display mx-auto mt-2 max-w-4xl">
          Чистая квартира уже сегодня — рассчитайте за 60 секунд
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-lg leading-[1.5] text-(--color-body)">
          ЧистоДом: фиксированная цена, эко-средства включены, слоты сегодня и завтра.
        </p>
        <a
          href="#calc"
          className={cn(
            "mt-8 inline-flex items-center gap-2 rounded-(--radius-btn) bg-(--surface-accent) px-6 py-2",
            "text-sm font-semibold uppercase tracking-[0.04em] text-white transition hover:brightness-110",
          )}
        >
          Рассчитать стоимость
          <ArrowRight className="size-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
