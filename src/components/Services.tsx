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
    <section id="services" className="scroll-mt-20 bg-oat-canvas">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="text-sm font-medium text-slate">Услуги ЧистоДом</p>
        <h2 className="mt-2 text-[40px] font-bold italic leading-[1.15] text-ink-black">
          Что мы убираем
        </h2>
        <p className="mt-3 max-w-2xl text-lg leading-[1.5] text-slate">
          Фиксированные цены, эко-средства включены. Выберите услугу — калькулятор
          подставит нужный тип уборки.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ title, tag, bullets, price, preset }) => (
            <article
              key={title}
              className="flex flex-col rounded-[44px] bg-paper-white p-6 shadow-xl"
            >
              <p className="inline-block self-start rounded-full bg-warm-mist px-3 py-1 text-[13px] font-medium text-charcoal">
                {tag}
              </p>
              <h3 className="mt-4 text-[26px] font-semibold leading-[1.23] text-soft-ink">{title}</h3>
              <ul className="mt-3 space-y-1.5 text-base leading-[1.5] text-slate">
                {bullets.map((b) => (
                  <li key={b}>· {b}</li>
                ))}
              </ul>
              <p className="mt-4 text-[18px] font-semibold text-soft-ink">{price}</p>
              <button
                type="button"
                onClick={() => choose(preset)}
                className={cn(
                  "mt-4 rounded-full bg-hot-magenta px-6 py-3.5 text-base font-semibold text-paper-white",
                  "transition-colors hover:bg-[#e0257f]",
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
