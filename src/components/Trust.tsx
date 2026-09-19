import { BadgeCheck, Clock, Leaf, ShieldCheck } from "lucide-react";

const ITEMS = [
  { icon: Leaf, title: "Эко-средства", text: "Безопасная химия в стоимости" },
  { icon: ShieldCheck, title: "Проверка клинеров", text: "Паспорт, обучение, рейтинг" },
  { icon: Clock, title: "Слоты сегодня", text: "Приедем в день заказа" },
  { icon: BadgeCheck, title: "Гарантия 24ч", text: "Вернёмся и исправим бесплатно" },
];

export default function Trust() {
  return (
    <section aria-label="Преимущества" className="bg-(--surface-canvas)">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {ITEMS.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-start gap-3">
            <Icon className="mt-0.5 size-5 shrink-0 text-(--color-muted)" strokeWidth={1.75} aria-hidden />
            <span>
              <span className="block text-base font-medium text-(--color-ink)">{title}</span>
              <span className="mt-0.5 block text-sm text-(--color-body)">{text}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
