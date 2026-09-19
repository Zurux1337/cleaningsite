import { ArrowRight, Zap, Star, Crown } from "lucide-react";
import { BASE_PER_M2 } from "@/data/prices";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    icon: Zap,
    name: "Экспресс",
    price: `от ${BASE_PER_M2.support.toLocaleString("ru-RU")} ₽/м²`,
    text: "Быстро освежить квартиру перед гостями или после отъезда.",
    features: ["Комнаты и санузел", "Пыль и полы", "Зеркала и мусор"],
    highlight: false,
  },
  {
    icon: Star,
    name: "Стандарт",
    price: `от ${BASE_PER_M2.general.toLocaleString("ru-RU")} ₽/м²`,
    text: "Наш хит: поддерживающая уборка всей квартиры по чек-листу.",
    features: ["Всё из Экспресса", "Кухня полностью", "Окна внутри"],
    highlight: true,
  },
  {
    icon: Crown,
    name: "Максимум",
    price: `от ${BASE_PER_M2.renovation.toLocaleString("ru-RU")} ₽/м²`,
    text: "Генеральная уборка: каждый уголок, балкон и техника.",
    features: ["Всё из Стандарта", "Балкон и кладовка", "Холодильник внутри"],
    highlight: false,
  },
];

export default function Tariffs() {
  return (
    <section id="tariffs" className="scroll-mt-20 bg-(--surface-canvas)">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="eyebrow">Пакеты</p>
        <h2 className="t-h2 mt-2">
          Тарифы под вашу задачу
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {PLANS.map(({ icon: Icon, name, price, text, features, highlight }) => (
            <article
              key={name}
              className="flex flex-col rounded-(--radius-card) bg-(--surface-card) p-6 shadow-(--shadow-card)"
            >
              <Icon className="size-5 text-(--color-muted)" strokeWidth={1.75} aria-hidden />
              <h3 className="t-h3 mt-4">{name}</h3>
              <p className="mt-1 text-base font-semibold text-(--color-accent)">{price}</p>
              <p className="mt-1 text-base leading-[1.5] text-(--color-body)">{text}</p>
              <ul className="mt-4 space-y-1.5 text-base leading-[1.5] text-(--color-body)">
                {features.map((f) => (
                  <li key={f}>· {f}</li>
                ))}
              </ul>
              <a
                href="#calc"
                className={cn(
                  "mt-6 inline-flex items-center justify-center gap-2 rounded-(--radius-btn) px-6 py-2 text-sm font-semibold uppercase tracking-[0.04em] transition",
                  highlight
                    ? "bg-(--surface-accent) text-white hover:brightness-110"
                    : "border border-(--color-strong) text-(--color-ink) hover:bg-(--color-outline-hover)",
                )}
              >
                Рассчитать
                <ArrowRight className="size-4" aria-hidden />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
