import { PHONE, PHONE_HREF } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-(--color-line) bg-(--surface-canvas)">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="t-logo text-xl">ЧистоДом</p>
          <p className="mt-3 max-w-xs text-base leading-[1.5] text-(--color-body)">
            Профессиональная уборка квартир и офисов. Эко-средства, проверенные клинеры,
            гарантия 24 часа.
          </p>
        </div>
        <div>
          <p className="text-[13px] font-medium uppercase tracking-wide text-(--color-muted)">Контакты</p>
          <ul className="mt-3 space-y-2 text-base text-(--color-body)">
            <li>
              <a href={PHONE_HREF} className="text-(--color-link) hover:underline">
                {PHONE}
              </a>
            </li>
            <li>
              <a href="mailto:info@chistodom.example" className="hover:text-(--color-ink)">
                info@chistodom.example
              </a>
            </li>
            <li>Москва, ул. Примерная, 1</li>
          </ul>
        </div>
        <div>
          <p className="text-[13px] font-medium uppercase tracking-wide text-(--color-muted)">Навигация</p>
          <ul className="mt-3 space-y-2 text-base text-(--color-body)">
            <li>
              <a href="#services" className="hover:text-(--color-ink)">
                Услуги
              </a>
            </li>
            <li>
              <a href="#calc" className="hover:text-(--color-ink)">
                Калькулятор
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-(--color-ink)">
                Отзывы
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-(--color-ink)">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-(--color-line)">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm text-(--color-muted) sm:px-6">
          © ЧистоДом, 2026. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
