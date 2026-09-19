import { ChevronDown } from "lucide-react";

const FAQ = [
  {
    q: "Какие средства вы используете? Это безопасно?",
    a: "Только профессиональную эко-химию без резкого запаха — безопасна для детей и животных. Своя химия и инвентарь уже включены в цену.",
  },
  {
    q: "Что если мне не понравится результат?",
    a: "Действует гарантия 24 часа: вернёмся и бесплатно исправим любой недочёт по чек-листу приёмки.",
  },
  {
    q: "Нужно ли быть дома во время уборки?",
    a: "Не обязательно. Можете передать ключи клинеру или консьержу — все клинеры проверены, с паспортом и договором о материальной ответственности.",
  },
  {
    q: "Как проходит оплата?",
    a: "Оплата после приёмки работы: картой онлайн, переводом или наличными. Предоплата не нужна.",
  },
  {
    q: "Какие слоты доступны?",
    a: "Ежедневно с 9:00 до 21:00, слоты: 9–12, 12–15, 15–18, 18–21, включая выходные. При заказе до обеда часто можем приехать уже сегодня.",
  },
  {
    q: "У меня кот/собака. Это проблема?",
    a: "Нет, мы любим животных! Просто предупредите в заявке — подберём безопасные средства и аккуратно уберём шерсть.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-(--surface-canvas)">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:py-20">
        <div>
          <p className="eyebrow">Остались вопросы?</p>
          <h2 className="t-h2 mt-2">
            Частые вопросы
          </h2>
        </div>
        <div className="space-y-3">
          {FAQ.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-(--radius-card) bg-(--surface-card) px-6 py-4 shadow-(--shadow-card)"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[18px] font-semibold text-(--color-ink) marker:hidden [&::-webkit-details-marker]:hidden">
                {q}
                <ChevronDown className="size-5 shrink-0 text-(--color-muted) transition-transform group-open:rotate-180" aria-hidden />
              </summary>
              <p className="mt-2 text-base leading-[1.5] text-(--color-body)">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
