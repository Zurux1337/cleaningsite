# ЧистоДом — демо лендинга клининга

Демо-лендинг «ЧистоДом»: hero, калькулятор уборки в 4 шага, фейк-оплата и личный кабинет (localStorage). Next.js 16 + React 19 + Tailwind 4.

## Запуск

```bash
npm i
npm run dev
npm run build
```

Проверка качества:

```bash
npm run lint
npm run typecheck
npx vitest run
```

## Структура src/

- `src/app/` — layout и главная страница (`page.tsx`: Header → Hero → Trust → HowItWorks → Services → `#calc` → Tariffs → BeforeAfter → Reviews → Faq → Cta → Footer)
- `src/components/` — `Calculator.tsx` (4 шага), `BookingFlow.tsx` (калькулятор → оплата → кабинет), `PaymentDialog.tsx`, `CabinetDialog.tsx`, секции лендинга, `ui/` (button/input/card)
- `src/data/prices.ts` — тарифы за м², допы, слоты, лимиты
- `src/lib/price.ts` — формула цены + тесты (`price.test.ts`)
- `src/lib/orders.ts` — заказы в localStorage (`orders.test.ts`)
- `src/lib/phone.ts` — нормализация/валидация телефона (`phone.test.ts`)
- `src/lib/site.ts`, `src/lib/utils.ts` — телефон сайта и `cn()`

## Формула цены

`total = max(2500, база × площадь + допы) × (express ? 1.3 : 1)`

- База за м²: поддерживающая 129 ₽, генеральная 199 ₽, после ремонта 249 ₽, офис 149 ₽
- Допы: окна 1990 ₽, холодильник 790 ₽, духовка 890 ₽, балкон 1490 ₽, глажка 590 ₽, химчистка 990 ₽
- Минимальный заказ 2500 ₽, экспресс-коэффициент 1.3 (округление до рубля)
- Демо-пример: general 45 м² + окна = 199 × 45 + 1990 = 10945 ₽

## Фейк-оплата + кабинет

- Оплата имитируется задержкой ~1.5 с, списание не производится; повторный сабмит блокируется (`busyRef`), закрытие диалога во время обработки игнорируется
- Заказ сохраняется через `createOrder()` в localStorage (ключ `cleaning_orders`), картой — статус `paid`, наличными — `new`
- Кабинет (`CabinetDialog`, событие `open-cabinet`) читает localStorage, показывает заказы, позволяет отменить

## Деплой на Vercel

1. Запушить репозиторий на GitHub
2. Vercel → Add New → Project → Import GitHub repo
3. Framework Preset: Next.js (по умолчанию), Build Command `npm run build`
4. Deploy — страница `/` собирается как static
