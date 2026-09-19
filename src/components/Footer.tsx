import { Sparkles } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 font-bold text-white">
            <span className="grid size-9 place-items-center rounded-2xl bg-sky-500 text-white">
              <Sparkles className="size-5" aria-hidden />
            </span>
            ЧистоДом
          </p>
          <p className="mt-3 max-w-xs text-sm text-slate-400">
            Профессиональная уборка квартир и офисов. Эко-средства, проверенные клинеры,
            гарантия 24 часа.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-slate-400">Контакты</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={PHONE_HREF} className="hover:text-white">
                {PHONE}
              </a>
            </li>
            <li>
              <a href="mailto:info@chistodom.example" className="hover:text-white">
                info@chistodom.example
              </a>
            </li>
            <li className="text-slate-400">Москва, ул. Примерная, 1</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-slate-400">Навигация</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#services" className="hover:text-white">
                Услуги
              </a>
            </li>
            <li>
              <a href="#calc" className="hover:text-white">
                Калькулятор
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-white">
                Отзывы
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm text-slate-400 sm:px-6">
          © ЧистоДом, 2026. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
