import { PHONE, PHONE_HREF } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[#000000]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="t-logo text-xl">ЧистоДом</p>
          <p className="mt-3 max-w-xs text-base leading-[1.5] text-white/70">
            Профессиональная уборка квартир и офисов. Эко-средства, проверенные клинеры,
            гарантия 24 часа.
          </p>
        </div>
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-white/60">Контакты</p>
          <ul className="mt-3 space-y-2 text-base font-semibold text-white">
            <li>
              <a href={PHONE_HREF} className="hover:underline">
                {PHONE}
              </a>
            </li>
            <li>
              <a href="mailto:info@chistodom.example" className="hover:underline">
                info@chistodom.example
              </a>
            </li>
            <li className="font-normal text-white/70">Москва, ул. Примерная, 1</li>
          </ul>
        </div>
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.06em] text-white/60">Навигация</p>
          <ul className="mt-3 space-y-2 text-base font-semibold text-white">
            <li>
              <a href="#services" className="hover:underline">
                Услуги
              </a>
            </li>
            <li>
              <a href="#calc" className="hover:underline">
                Калькулятор
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:underline">
                Отзывы
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/20">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm text-white/60 sm:px-6">
          © ЧистоДом, 2026. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
