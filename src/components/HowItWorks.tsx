import { ClipboardCheck, MessagesSquare, Sparkles, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <section id="how" className="scroll-mt-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="text-sm font-semibold text-sky-600">Как это работает</p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Уборка без стресса в 4 шага
        </h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <li
              key={title}
              className={cn("rounded-3xl border border-sky-100 bg-sky-50/60 p-5")}
            >
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-2xl bg-white text-sky-600 shadow-sm">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="text-2xl font-extrabold text-sky-200">{i + 1}</span>
              </div>
              <p className="mt-4 font-bold text-slate-900">{title}</p>
              <p className="mt-1 text-sm text-slate-600">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
