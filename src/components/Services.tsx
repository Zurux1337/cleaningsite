"use client";

import {
  Armchair,
  Building2,
  LayoutGrid,
  PaintRoller,
  Sparkles,
  SquareStack,
} from "lucide-react";
import { cn } from "@/lib/utils";

type PresetType = "support" | "general" | "renovation" | "office";

type Service = {
  icon: typeof Sparkles;
  title: string;
  tag: string;
  bullets: [string, string, string];
  price: string;
  preset: PresetType;
};

const SERVICES: Service[] = [
  {
    icon: Sparkles,
    title: "Поддерживающая уборка",
    tag: "Регулярная",
    bullets: ["Пыль и полы во всей квартире", "Санузел и кухня снаружи", "Зеркала и мусор"],
    price: "от 129₽/м²",
    preset: "support",
  },
  {
    icon: LayoutGrid,
    title: "Генеральная уборка",
    tag: "Хит",
    bullets: ["Всё из поддерживающей", "Окна внутри и балконы", "Плинтусы, розетки, техника"],
    price: "от 199₽/м²",
    preset: "general",
  },
  {
    icon: PaintRoller,
    title: "Уборка после ремонта",
    tag: "Стройка",
    bullets: ["Строительная пыль и скотч", "Шлифовка швов и следы краски", "Вывоз мелкого мусора"],
    price: "от 249₽/м²",
    preset: "renovation",
  },
  {
    icon: Building2,
    title: "Уборка офисов",
    tag: "Бизнес",
    bullets: ["Рабочие места и переговорные", "Санузлы и кухня", "График до/после работы"],
    price: "от 149₽/м²",
    preset: "office",
  },
  {
    icon: SquareStack,
    title: "Мытьё окон",
    tag: "Доп",
    bullets: ["Стёкла с двух сторон", "Рамы, подоконники, откосы", "Москитные сетки"],
    price: "от 1990₽",
    preset: "general",
  },
  {
    icon: Armchair,
    title: "Химчистка мебели",
    tag: "Доп",
    bullets: ["Диваны и кресла", "Матрасы и ковры", "Пятна и запахи"],
    price: "от 990₽",
    preset: "general",
  },
];

function choose(preset: PresetType) {
  document.querySelector("#calc")?.scrollIntoView({ behavior: "smooth" });
  window.dispatchEvent(new CustomEvent("preset", { detail: preset }));
}

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-(--surface-canvas)">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="eyebrow">Услуги ЧистоДом</p>
        <h2 className="t-h2 mt-2">
          Что мы убираем
        </h2>
        <p className="mt-3 max-w-2xl text-lg leading-[1.5] text-(--color-body)">
          Фиксированные цены, эко-средства включены. Выберите услугу — калькулятор
          подставит нужный тип уборки.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ title, tag, bullets, price, preset }) => (
            <article
              key={title}
              className="flex flex-col rounded-(--radius-card) bg-(--surface-card) p-6 shadow-(--shadow-card)"
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-(--color-ink)">
                {tag}
              </p>
              <h3 className="t-h3 mt-4">{title}</h3>
              <ul className="mt-3 space-y-1.5 text-base leading-[1.5] text-(--color-body)">
                {bullets.map((b) => (
                  <li key={b}>· {b}</li>
                ))}
              </ul>
              <p className="mt-4 text-[18px] font-semibold text-(--color-ink)">{price}</p>
              <button
                type="button"
                onClick={() => choose(preset)}
                className={cn(
                  "mt-4 rounded-(--radius-btn) bg-(--surface-accent) px-6 py-2 text-sm font-semibold uppercase tracking-[0.04em] text-white",
                  "transition hover:brightness-110",
                )}
              >
                Выбрать
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
