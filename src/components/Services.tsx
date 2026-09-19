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
  bullets: [string, string, string];
  price: string;
  preset: PresetType;
};

const SERVICES: Service[] = [
  {
    icon: Sparkles,
    title: "Поддерживающая уборка",
    bullets: ["Пыль и полы во всей квартире", "Санузел и кухня снаружи", "Зеркала и мусор"],
    price: "от 129₽/м²",
    preset: "support",
  },
  {
    icon: LayoutGrid,
    title: "Генеральная уборка",
    bullets: ["Всё из поддерживающей", "Окна внутри и балконы", "Плинтусы, розетки, техника"],
    price: "от 199₽/м²",
    preset: "general",
  },
  {
    icon: PaintRoller,
    title: "Уборка после ремонта",
    bullets: ["Строительная пыль и скотч", "Шлифовка швов и следы краски", "Вывоз мелкого мусора"],
    price: "от 249₽/м²",
    preset: "renovation",
  },
  {
    icon: Building2,
    title: "Уборка офисов",
    bullets: ["Рабочие места и переговорные", "Санузлы и кухня", "График до/после работы"],
    price: "от 149₽/м²",
    preset: "office",
  },
  {
    icon: SquareStack,
    title: "Мытьё окон",
    bullets: ["Стёкла с двух сторон", "Рамы, подоконники, откосы", "Москитные сетки"],
    price: "от 1990₽",
    preset: "general",
  },
  {
    icon: Armchair,
    title: "Химчистка мебели",
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
    <section id="services" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="text-sm font-semibold text-sky-600">Услуги ЧистоДом</p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Что мы убираем</h2>
        <p className="mt-3 max-w-2xl text-slate-600">
          Фиксированные цены, эко-средства включены. Выберите услугу — калькулятор
          подставит нужный тип уборки.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, bullets, price, preset }) => (
            <article
              key={title}
              className={cn(
                "flex flex-col rounded-3xl border border-sky-100 bg-sky-50/60 p-6",
              )}
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-white text-sky-600 shadow-sm">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                {bullets.map((b) => (
                  <li key={b}>· {b}</li>
                ))}
              </ul>
              <p className="mt-4 text-xl font-extrabold text-slate-900">{price}</p>
              <button
                type="button"
                onClick={() => choose(preset)}
                className={cn(
                  "mt-4 rounded-2xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white",
                  "transition-colors hover:bg-sky-600",
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
