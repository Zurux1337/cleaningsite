import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BeforeAfter() {
  return (
    <section id="before-after" className="scroll-mt-20 bg-pure-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="text-[12px] uppercase tracking-[0.08em] text-graphite">Результат</p>
        <h2 className="mt-2 text-[50px] leading-[1] tracking-[-0.045em] text-ink-black">
          Было — стало
        </h2>
        <div className="mt-8 grid gap-px border border-hairline-gray bg-hairline-gray md:grid-cols-2">
          <div className="bg-pure-white p-6">
            <p className="text-[10px] uppercase tracking-[0.08em] text-graphite">
              Было
            </p>
            <div className="mt-4 space-y-3" aria-hidden>
              <div className="h-4 w-3/4 bg-hairline-gray" />
              <div className="h-4 w-full bg-shadow-whisper" />
              <div className="h-4 w-5/6 bg-hairline-gray" />
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="h-20 bg-shadow-whisper" />
                <div className="h-20 bg-hairline-gray" />
                <div className="h-20 bg-shadow-whisper" />
              </div>
            </div>
            <p className="mt-4 text-sm leading-[1.5] text-graphite">
              Пыль, разводы на окнах, налёт в санузле — обычная квартира перед уборкой.
            </p>
          </div>
          <div className="bg-pure-black p-6">
            <p className="text-[10px] uppercase tracking-[0.08em] text-pure-white">
              Стало
            </p>
            <div className="mt-4 space-y-3" aria-hidden>
              <div className="h-4 w-3/4 bg-pure-white" />
              <div className="h-4 w-full bg-pure-white/70" />
              <div className="h-4 w-5/6 bg-pure-white" />
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="h-20 border border-pure-white/30" />
                <div className="h-20 border border-pure-white/30" />
                <div className="h-20 border border-pure-white/30" />
              </div>
            </div>
            <p className="mt-4 text-sm leading-[1.5] text-pure-white/80">
              ЧистоДом после клининга: свежие окна, блестящий санузел, приёмка по чек-листу.
            </p>
          </div>
        </div>
        <a
          href="#calc"
          className={cn(
            "mt-8 inline-flex items-center gap-2 bg-cobalt-action px-[15px] py-3",
            "text-sm text-pure-white transition-colors hover:bg-[#005fd4]",
          )}
        >
          Хочу так же
          <ArrowRight className="size-4" aria-hidden />
        </a>
      </div>
    </section>
  );
}
