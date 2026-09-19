import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Cta() {
  return (
    <section aria-label="Заказать уборку" className="bg-pure-white">
      <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 md:pb-20">
        <div className="border-t border-hairline-gray pt-14 text-center md:pt-20">
          <p className="text-[12px] uppercase tracking-[0.08em] text-graphite">
            Гарантия 24 часа
          </p>
          <h2 className="mx-auto mt-2 max-w-3xl text-[50px] leading-[1] tracking-[-0.045em] text-ink-black">
            Чистая квартира уже сегодня — рассчитайте за 60 секунд
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[18px] leading-[1.33] text-graphite">
            ЧистоДом: фиксированная цена, эко-средства включены, слоты сегодня и завтра.
          </p>
          <a
            href="#calc"
            className={cn(
              "mt-8 inline-flex items-center gap-2 bg-cobalt-action px-[15px] py-3",
              "text-sm text-pure-white transition-colors hover:bg-[#005fd4]",
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
