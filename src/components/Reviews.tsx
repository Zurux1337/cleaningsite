"use client";

import Autoplay from "embla-carousel-autoplay";
import { useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { useMemo } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/*
 * Autoplay reviews carousel — autoplay pattern adapted from Skiper UI
 * skiper54 (Skiper UI free version, attribution required). Our review
 * data, 12px cards, hairline ring, theme-aware tokens. Autoplay stops
 * on interaction/focus and is off entirely under reduced motion.
 */

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
  const reduce = useReducedMotion();
  const plugins = useMemo(
    () =>
      reduce
        ? []
        : [Autoplay({ delay: 4000, stopOnInteraction: true, stopOnFocusIn: true })],
    [reduce],
  );
  return (
    <section id="reviews" className="scroll-mt-20 bg-(--surface-canvas)">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="eyebrow">Отзывы</p>
        <h2 className="t-h2 mt-2">
          4.9 — 1500+ уборок
        </h2>
        <Carousel opts={{ loop: true }} plugins={plugins} className="mt-8">
          <CarouselContent>
            {REVIEWS.map(({ name, text, service }) => (
              <CarouselItem key={name} className="sm:basis-1/2 lg:basis-1/3">
                <figure className="h-full rounded-(--radius-card) bg-(--surface-card) p-6 shadow-(--shadow-card)">
                  <div className="flex gap-1" aria-label="Оценка 5 из 5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-(--color-muted) text-(--color-muted)" aria-hidden />
                    ))}
                  </div>
                  <blockquote className="mt-3 text-base leading-[1.5] text-(--color-body)">{text}</blockquote>
                  <figcaption className="mt-4 flex items-center justify-between gap-2 text-sm">
                    <span className="font-semibold text-(--color-ink)">{name}</span>
                    <span className="text-[12px] font-semibold uppercase tracking-[0.06em] text-(--color-ink)">
                      {service}
                    </span>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex justify-end gap-2">
            <CarouselPrevious className="static h-10 w-10 translate-y-0" />
            <CarouselNext className="static h-10 w-10 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
