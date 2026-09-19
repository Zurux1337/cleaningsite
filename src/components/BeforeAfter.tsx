import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BeforeAfter() {
  return (
    <section id="before-after" className="scroll-mt-20 bg-(--surface-canvas)">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="eyebrow">Результат</p>
        <h2 className="t-h2 mt-2">Было — стало</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-(--radius-card) bg-(--surface-card) p-6 shadow-(--shadow-card)">
            <p className="inline-block rounded-full bg-(--surface-chip) px-3 py-1 text-[13px] font-medium text-(--color-chip-ink)">
              Было
            </p>
            <div className="mt-4 space-y-3" aria-hidden>
              <div className="h-4 w-3/4 rounded-full bg-(--color-line)" />
              <div className="h-4 w-full rounded-full bg-(--surface-canvas)" />
              <div className="h-4 w-5/6 rounded-full bg-(--color-line)" />
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="h-20 rounded-(--radius-img) bg-(--surface-canvas)" />
                <div className="h-20 rounded-(--radius-img) bg-(--surface-chip)" />
                <div className="h-20 rounded-(--radius-img) bg-(--surface-canvas)" />
              </div>
            </div>
            <p className="mt-4 text-base leading-[1.5] text-(--color-body)">
              Пыль, разводы на окнах, налёт в санузле — обычная квартира перед уборкой.
            </p>
          </div>
          <div className="rounded-(--radius-card) bg-(--surface-contrast) p-6 shadow-(--shadow-card)">
            <p className="inline-block rounded-full bg-(--color-accent) px-3 py-1 text-[13px] font-medium text-(--color-on-accent)">
              Стало
            </p>
            <div className="mt-4 space-y-3" aria-hidden>
              <div className="h-4 w-3/4 rounded-full bg-(--color-on-contrast)" />
              <div className="h-4 w-full rounded-full bg-(--color-on-contrast) opacity-70" />
              <div className="h-4 w-5/6 rounded-full bg-(--color-on-contrast)" />
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="h-20 rounded-(--radius-img) border border-(--color-on-contrast)/30" />
                <div className="h-20 rounded-(--radius-img) border border-(--color-on-contrast)/30" />
                <div className="h-20 rounded-(--radius-img) border border-(--color-on-contrast)/30" />
              </div>
            </div>
            <p className="mt-4 text-base leading-[1.5] text-(--color-on-contrast)">
              ЧистоДом после клининга: свежие окна, блестящий санузел, приёмка по чек-листу.
            </p>
          </div>
        </div>
        <a
          href="#calc"
          className={cn(
            "mt-8 inline-flex items-center gap-2 rounded-(--radius-btn) bg-(--surface-accent) px-6 py-2",
            "text-sm font-semibold uppercase tracking-[0.04em] text-white transition hover:brightness-110",
          )}
        >
          Хочу так же
          <ArrowRight className="size-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
