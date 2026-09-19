import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BeforeAfter() {
  return (
    <section id="before-after" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="text-sm font-semibold text-sky-600">Результат</p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Было — стало</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className={cn("rounded-3xl border border-slate-200 bg-slate-100 p-6")}>
            <p className="inline-block rounded-full bg-slate-200 px-3 py-1 text-xs font-bold text-slate-600">
              БЫЛО
            </p>
            <div className="mt-4 space-y-3" aria-hidden>
              <div className="h-4 w-3/4 rounded-full bg-slate-300" />
              <div className="h-4 w-full rounded-full bg-slate-200" />
              <div className="h-4 w-5/6 rounded-full bg-slate-300" />
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="h-20 rounded-2xl bg-slate-200" />
                <div className="h-20 rounded-2xl bg-slate-300" />
                <div className="h-20 rounded-2xl bg-slate-200" />
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Пыль, разводы на окнах, налёт в санузле — обычная квартира перед уборкой.
            </p>
          </div>
          <div
            className={cn(
              "rounded-3xl border border-sky-200 bg-sky-50/70 p-6 shadow-xl shadow-sky-100",
            )}
          >
            <p className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
              СТАЛО
            </p>
            <div className="mt-4 space-y-3" aria-hidden>
              <div className="h-4 w-3/4 rounded-full bg-sky-200" />
              <div className="h-4 w-full rounded-full bg-emerald-200" />
              <div className="h-4 w-5/6 rounded-full bg-sky-200" />
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="h-20 rounded-2xl bg-white shadow-sm" />
                <div className="h-20 rounded-2xl bg-white shadow-sm" />
                <div className="h-20 rounded-2xl bg-white shadow-sm" />
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">
              ЧистоДом после клининга: свежие окна, блестящий санузел, приёмка по чек-листу.
            </p>
          </div>
        </div>
        <a
          href="#calc"
          className={cn(
            "mt-8 inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3",
            "text-sm font-semibold text-white transition-colors hover:bg-sky-600",
          )}
        >
          Хочу так же
          <ArrowRight className="size-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
