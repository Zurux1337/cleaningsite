import { ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section id="top" className="bg-gradient-to-b from-sky-50 via-white to-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_0.8fr] md:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold text-sky-700">
            <Star className="size-3.5 fill-amber-400 text-amber-400" aria-hidden />
            4.9 ★ · 1500+ уборок · Гарантия 24ч
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            Уборка без стресса за 60 секунд
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-600">
            Профессиональный клининг квартир и офисов: рассчитайте стоимость онлайн и закажите
            уборку в удобный слот — сегодня или завтра.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#calc"
              className={cn(
                "inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-sm",
                "transition-colors hover:bg-sky-600",
              )}
            >
              Рассчитать стоимость
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              href="#services"
              className={cn(
                "inline-flex items-center rounded-full border border-sky-200 bg-white px-6 py-3",
                "text-sm font-semibold text-sky-700 transition-colors hover:bg-sky-50",
              )}
            >
              Услуги
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">4.9 ★ · 1500+ уборок · Гарантия 24ч</p>
        </div>
        <aside
          className={cn(
            "rounded-3xl border border-sky-100 bg-white p-6 shadow-xl shadow-sky-100",
          )}
          aria-label="Тариф"
        >
          <p className="text-sm font-medium text-slate-500">Клининг квартир и офисов</p>
          <p className="mt-2 text-4xl font-extrabold text-slate-900">
            от 129₽<span className="text-lg font-semibold text-slate-500">/м²</span>
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>· Эко-средства включены</li>
            <li>· Слоты уже сегодня</li>
            <li>· Гарантия 24 часа</li>
          </ul>
          <a
            href="#calc"
            className={cn(
              "mt-6 block rounded-2xl bg-emerald-500 px-6 py-3 text-center text-sm font-semibold text-white",
              "transition-colors hover:bg-emerald-600",
            )}
          >
            Рассчитать мою уборку
          </a>
        </aside>
      </div>
    </section>
  );
}
