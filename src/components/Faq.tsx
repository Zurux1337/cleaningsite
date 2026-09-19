import { cn } from "@/lib/utils";

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
    a: "Ежедневно с 8:00 до 22:00, включая выходные. При заказе до обеда часто можем приехать уже сегодня.",
  },
  {
    q: "У меня кот/собака. Это проблема?",
    a: "Нет, мы любим животных! Просто предупредите в заявке — подберём безопасные средства и аккуратно уберём шерсть.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
        <p className="text-sm font-semibold text-sky-600">FAQ</p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Частые вопросы</h2>
        <div className="mt-8 space-y-3">
          {FAQ.map(({ q, a }) => (
            <details
              key={q}
              className={cn(
                "group rounded-3xl border border-sky-100 bg-sky-50/60 px-5 py-4",
                "open:bg-white open:shadow-sm",
              )}
            >
              <summary className="cursor-pointer list-none font-bold text-slate-900 marker:hidden [&::-webkit-details-marker]:hidden">
                {q}
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
