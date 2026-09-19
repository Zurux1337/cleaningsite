import { BadgeCheck, Clock, Leaf, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const ITEMS = [
  { icon: Leaf, title: "Эко-средства", text: "Безопасная химия в стоимости" },
  { icon: ShieldCheck, title: "Проверка клинеров", text: "Паспорт, обучение, рейтинг" },
  { icon: Clock, title: "Слоты сегодня", text: "Приедем в день заказа" },
  { icon: BadgeCheck, title: "Гарантия 24ч", text: "Вернёмся и исправим бесплатно" },
];

export default function Trust() {
  return (
    <section aria-label="Преимущества" className="border-y border-sky-100 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {ITEMS.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className={cn(
              "flex items-start gap-3 rounded-3xl border border-sky-100 bg-sky-50/60 p-4",
            )}
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-white text-emerald-600 shadow-sm">
              <Icon className="size-5" aria-hidden />
            </span>
            <span>
              <span className="block text-sm font-bold text-slate-900">{title}</span>
              <span className="mt-0.5 block text-sm text-slate-600">{text}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
