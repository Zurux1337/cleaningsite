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
    <section id="tariffs" className="scroll-mt-20 bg-pure-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="text-[12px] uppercase tracking-[0.08em] text-graphite">Пакеты</p>
        <h2 className="mt-2 text-[50px] leading-[1] tracking-[-0.045em] text-ink-black">
          Тарифы под вашу задачу
        </h2>
        <div className="mt-8 grid gap-px border border-hairline-gray bg-hairline-gray md:grid-cols-3">
          {PLANS.map(({ icon: Icon, name, price, text, features, highlight }) => (
            <article key={name} className="flex flex-col bg-pure-white p-6">
              <Icon className="size-5 text-graphite" aria-hidden />
              <h3 className="mt-4 text-[22px] leading-[1.2] text-ink-black">{name}</h3>
              <p className="mt-1 text-sm text-graphite">{price}</p>
              <p className="mt-1 text-sm leading-[1.5] text-graphite">{text}</p>
              <ul className="mt-4 space-y-1.5 text-sm leading-[1.5] text-graphite">
                {features.map((f) => (
                  <li key={f}>· {f}</li>
                ))}
              </ul>
              <a
                href="#calc"
                className={cn(
                  "mt-6 inline-flex items-center justify-center gap-2 px-[15px] py-3 text-sm transition-colors",
                  highlight
                    ? "bg-cobalt-action text-pure-white hover:bg-[#005fd4]"
                    : "border border-graphite text-graphite hover:bg-shadow-whisper",
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
