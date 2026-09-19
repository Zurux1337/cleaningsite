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
    <section id="how" className="scroll-mt-20 bg-oat-canvas">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="text-sm font-medium text-slate">Как это работает</p>
        <h2 className="mt-2 text-[40px] font-bold italic leading-[1.15] text-ink-black">
          Уборка без стресса в 4 шага
        </h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="rounded-[44px] bg-paper-white p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <Icon className="size-5 text-stone" strokeWidth={1.75} aria-hidden />
                <span className="text-[30px] font-bold italic text-sand">0{i + 1}</span>
              </div>
              <p className="mt-4 text-[18px] font-semibold text-soft-ink">{title}</p>
              <p className="mt-1 text-base leading-[1.5] text-slate">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
