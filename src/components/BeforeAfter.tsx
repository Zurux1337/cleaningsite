import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BeforeAfter() {
  return (
    <section id="before-after" className="scroll-mt-20 bg-oat-canvas">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="text-sm font-medium text-slate">Результат</p>
        <h2 className="mt-2 text-[40px] font-bold italic leading-[1.15] text-ink-black">
          Было — стало
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-[44px] bg-paper-white p-6 shadow-xl">
            <p className="inline-block rounded-full bg-warm-mist px-3 py-1 text-[13px] font-medium text-charcoal">
              Было
            </p>
            <div className="mt-4 space-y-3" aria-hidden>
              <div className="h-4 w-3/4 rounded-full bg-warm-mist" />
              <div className="h-4 w-full rounded-full bg-sand" />
              <div className="h-4 w-5/6 rounded-full bg-warm-mist" />
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="h-20 rounded-2xl bg-oat-canvas" />
                <div className="h-20 rounded-2xl bg-sand" />
                <div className="h-20 rounded-2xl bg-oat-canvas" />
              </div>
            </div>
            <p className="mt-4 text-base leading-[1.5] text-slate">
              Пыль, разводы на окнах, налёт в санузле — обычная квартира перед уборкой.
            </p>
          </div>
          <div className="rounded-[44px] bg-soft-ink p-6 shadow-xl">
            <p className="inline-block rounded-full bg-hot-magenta px-3 py-1 text-[13px] font-medium text-paper-white">
              Стало
            </p>
            <div className="mt-4 space-y-3" aria-hidden>
              <div className="h-4 w-3/4 rounded-full bg-paper-white" />
              <div className="h-4 w-full rounded-full bg-paper-white/70" />
              <div className="h-4 w-5/6 rounded-full bg-paper-white" />
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="h-20 rounded-2xl border border-paper-white/25" />
                <div className="h-20 rounded-2xl border border-paper-white/25" />
                <div className="h-20 rounded-2xl border border-paper-white/25" />
              </div>
            </div>
            <p className="mt-4 text-base leading-[1.5] text-paper-white/80">
              ЧистоДом после клининга: свежие окна, блестящий санузел, приёмка по чек-листу.
            </p>
          </div>
        </div>
        <a
          href="#calc"
          className={cn(
            "mt-8 inline-flex items-center gap-2 rounded-full bg-hot-magenta px-6 py-3.5",
            "text-base font-semibold text-paper-white transition-colors hover:bg-[#e0257f]",
          )}
        >
          Хочу так же
          <ArrowRight className="size-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
