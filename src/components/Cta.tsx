import { ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Cta() {
  return (
    <section aria-label="Заказать уборку" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 md:pb-20">
        <div
          className={cn(
            "rounded-3xl bg-gradient-to-br from-sky-500 to-emerald-500 p-8 text-center text-white",
            "sm:p-12",
          )}
        >
          <p className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
            <ShieldCheck className="size-3.5" aria-hidden />
            Гарантия 24 часа
          </p>
          <h2 className="mx-auto mt-4 max-w-xl text-3xl font-extrabold">
            Чистая квартира уже сегодня — рассчитайте за 60 секунд
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-white/85">
            ЧистоДом: фиксированная цена, эко-средства включены, слоты сегодня и завтра.
          </p>
          <a
            href="#calc"
            className={cn(
              "mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5",
              "text-sm font-bold text-sky-700 shadow-lg transition-colors hover:bg-sky-50",
            )}
          >
            Рассчитать стоимость
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
