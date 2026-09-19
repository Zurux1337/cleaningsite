import { ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Cta() {
  return (
    <section aria-label="Заказать уборку" className="bg-(--surface-canvas)">
      <div className="mx-auto max-w-6xl px-4 pb-14 text-center sm:px-6 md:pb-20">
        <span className="mx-auto grid size-14 place-items-center rounded-[20px] bg-(--surface-tile)">
          <Sparkles className="size-6 text-(--color-tile-icon)" aria-hidden />
        </span>
        <p className="mt-6 text-sm font-medium text-(--color-eyebrow)">Гарантия 24 часа</p>
        <h2 className="t-display mx-auto mt-2 max-w-4xl">
          Чистая квартира уже сегодня — рассчитайте за 60 секунд
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-lg leading-[1.5] text-(--color-body)">
          ЧистоДом: фиксированная цена, эко-средства включены, слоты сегодня и завтра.
        </p>
        <a
          href="#calc"
          className={cn(
            "mt-8 inline-flex items-center gap-2 rounded-(--radius-btn) bg-(--color-accent) px-6 py-3.5",
            "text-base font-semibold text-(--color-on-accent) transition-colors hover:bg-(--color-accent-hover)",
          )}
        >
          Рассчитать стоимость
          <ArrowRight className="size-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
