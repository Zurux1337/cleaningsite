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
    <section id="tariffs" className="scroll-mt-20 bg-oat-canvas">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="text-sm font-medium text-slate">Пакеты</p>
        <h2 className="mt-2 text-[40px] font-bold italic leading-[1.15] text-ink-black">
          Тарифы под вашу задачу
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {PLANS.map(({ icon: Icon, name, price, text, features, highlight }) => (
            <article
              key={name}
              className={cn(
                "flex flex-col rounded-[44px] bg-paper-white p-6 shadow-xl",
                highlight && "border border-warm-mist",
              )}
            >
              <Icon className="size-5 text-stone" strokeWidth={1.75} aria-hidden />
              <h3 className="mt-4 text-[26px] font-semibold leading-[1.23] text-soft-ink">{name}</h3>
              <p className="mt-1 text-base font-semibold text-hot-magenta">{price}</p>
              <p className="mt-1 text-base leading-[1.5] text-slate">{text}</p>
              <ul className="mt-4 space-y-1.5 text-base leading-[1.5] text-slate">
                {features.map((f) => (
                  <li key={f}>· {f}</li>
                ))}
              </ul>
              <a
                href="#calc"
                className={cn(
                  "mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold transition-colors",
                  highlight
                    ? "bg-hot-magenta text-paper-white hover:bg-[#e0257f]"
                    : "border border-charcoal text-soft-ink hover:bg-warm-mist",
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
