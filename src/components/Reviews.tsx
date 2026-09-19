import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Анна К.",
    text: "Заказывала генеральную уборку двушки. Клинер пришла вовремя, всё по чек-листу. Окна — идеально!",
    service: "Генеральная уборка",
  },
  {
    name: "Дмитрий С.",
    text: "После ремонта думал отмывать неделю. Ребята справились за день, даже скотч со стёкол убрали.",
    service: "После ремонта",
  },
  {
    name: "Ольга В.",
    text: "Беру поддерживающую раз в две недели. Всегда одни и те же клинеры, уже как родные.",
    service: "Поддерживающая",
  },
  {
    name: "Игорь М.",
    text: "Убирают наш офис по вечерам. Утром всё чисто, ни разу не сорвали график за полгода.",
    service: "Офис",
  },
  {
    name: "Марина Л.",
    text: "Химчистка дивана — как новый. Пятно от кофе ушло полностью, запаха химии ноль.",
    service: "Химчистка",
  },
  {
    name: "Сергей П.",
    text: "Нашли недочёт на плинтусе — приехали на следующий день и всё исправили по гарантии.",
    service: "Гарантия 24ч",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-(--surface-canvas)">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="text-sm font-medium text-(--color-eyebrow)">Отзывы</p>
        <h2 className="t-h2 mt-2">
          4.9 — 1500+ уборок
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map(({ name, text, service }) => (
            <figure key={name} className="rounded-(--radius-card) bg-(--surface-card) p-6 shadow-(--shadow-card)">
              <div className="flex gap-1" aria-label="Оценка 5 из 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-(--color-muted) text-(--color-muted)" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-3 text-base leading-[1.5] text-(--color-body)">{text}</blockquote>
              <figcaption className="mt-4 flex items-center justify-between gap-2 text-sm">
                <span className="font-semibold text-(--color-ink)">{name}</span>
                <span className="rounded-full bg-(--surface-chip) px-2.5 py-1 text-[13px] font-medium text-(--color-chip-ink)">
                  {service}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
