import { ClipboardCheck, MessagesSquare, Sparkles, ThumbsUp } from "lucide-react";

const STEPS = [
  {
    icon: MessagesSquare,
    title: "Заявка за 60 секунд",
    text: "Рассчитайте стоимость в калькуляторе и оставьте заявку в удобный слот.",
  },
  {
    icon: ClipboardCheck,
    title: "Подтверждение",
    text: "Перезвоним за 10 минут, уточним детали и закрепим клинера.",
  },
  {
    icon: Sparkles,
    title: "Уборка",
    text: "Клинер приедет со своей эко-химией и инвентарём точно в срок.",
  },
  {
    icon: ThumbsUp,
    title: "Проверка и гарантия",
    text: "Примите работу по чек-листу. Гарантия 24 часа — исправим бесплатно.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 bg-pure-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="text-[12px] uppercase tracking-[0.08em] text-graphite">
          Как это работает
        </p>
        <h2 className="mt-2 text-[50px] leading-[1] tracking-[-0.045em] text-ink-black">
          Уборка без стресса в 4 шага
        </h2>
        <ol className="mt-8 grid gap-px border border-hairline-gray bg-hairline-gray sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="bg-pure-white p-6">
              <div className="flex items-center justify-between">
                <Icon className="size-5 text-graphite" aria-hidden />
                <span className="text-[22px] text-hairline-gray">0{i + 1}</span>
              </div>
              <p className="mt-4 text-ink-black">{title}</p>
              <p className="mt-1 text-sm leading-[1.5] text-graphite/80">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
