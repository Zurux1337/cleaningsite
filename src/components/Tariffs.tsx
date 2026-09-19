import { ArrowRight, Zap, Star, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    icon: Zap,
    name: "Экспресс",
    text: "Быстро освежить квартиру перед гостями или после отъезда.",
    features: ["Комнаты и санузел", "Пыль и полы", "Зеркала и мусор"],
    highlight: false,
  },
  {
    icon: Star,
    name: "Стандарт",
    text: "Наш хит: поддерживающая уборка всей квартиры по чек-листу.",
    features: ["Всё из Экспресса", "Кухня полностью", "Окна внутри"],
    highlight: true,
  },
  {
    icon: Crown,
    name: "Максимум",
    text: "Генеральная уборка: каждый уголок, балкон и техника.",
    features: ["Всё из Стандарта", "Балкон и кладовка", "Холодильник внутри"],
    highlight: false,
  },
];

export default function Tariffs() {
  return (
    <section id="tariffs" className="scroll-mt-20 bg-gradient-to-b from-white via-sky-50/60 to-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="text-sm font-semibold text-sky-600">Пакеты</p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Тарифы под вашу задачу
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {PLANS.map(({ icon: Icon, name, text, features, highlight }) => (
            <article
              key={name}
              className={cn(
                "flex flex-col rounded-3xl border p-6",
                highlight
                  ? "border-sky-500 bg-white shadow-xl shadow-sky-100"
                  : "border-sky-100 bg-white",
              )}
            >
              <span
                className={cn(
                  "grid size-11 place-items-center rounded-2xl shadow-sm",
                  highlight ? "bg-sky-500 text-white" : "bg-sky-50 text-sky-600",
                )}
              >
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{name}</h3>
              <p className="mt-1 text-sm text-slate-600">{text}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
                {features.map((f) => (
                  <li key={f}>· {f}</li>
                ))}
              </ul>
              <a
                href="#calc"
                className={cn(
                  "mt-6 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-semibold transition-colors",
                  highlight
                    ? "bg-sky-500 text-white hover:bg-sky-600"
                    : "border border-sky-200 bg-white text-sky-700 hover:bg-sky-50",
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
