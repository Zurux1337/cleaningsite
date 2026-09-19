import { PHONE, PHONE_HREF } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-warm-mist bg-oat-canvas">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-xl font-bold italic text-hot-magenta">ЧистоДом</p>
          <p className="mt-3 max-w-xs text-base leading-[1.5] text-slate">
            Профессиональная уборка квартир и офисов. Эко-средства, проверенные клинеры,
            гарантия 24 часа.
          </p>
        </div>
        <div>
          <p className="text-[13px] font-medium uppercase tracking-wide text-stone">Контакты</p>
          <ul className="mt-3 space-y-2 text-base text-slate">
            <li>
              <a href={PHONE_HREF} className="text-hot-magenta hover:underline">
                {PHONE}
              </a>
            </li>
            <li>
              <a href="mailto:info@chistodom.example" className="hover:text-soft-ink">
                info@chistodom.example
              </a>
            </li>
            <li>Москва, ул. Примерная, 1</li>
          </ul>
        </div>
        <div>
          <p className="text-[13px] font-medium uppercase tracking-wide text-stone">Навигация</p>
          <ul className="mt-3 space-y-2 text-base text-slate">
            <li>
              <a href="#services" className="hover:text-soft-ink">
                Услуги
              </a>
            </li>
            <li>
              <a href="#calc" className="hover:text-soft-ink">
                Калькулятор
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-soft-ink">
                Отзывы
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-soft-ink">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-warm-mist">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm text-stone sm:px-6">
          © ЧистоДом, 2026. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
