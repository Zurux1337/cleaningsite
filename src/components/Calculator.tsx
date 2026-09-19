"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";

import { ADDONS, BASE_PER_M2, MAX_AREA, MIN_AREA, SLOTS, type CleaningType } from "@/data/prices";
import { calcTotal } from "@/lib/price";
import { isValidPhone, normalizePhone } from "@/lib/phone";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

type PropType = "flat" | "house" | "office";
type PayMethod = "card" | "cash";

export interface CalculatorDraft extends Record<string, unknown> {
  cleaningType: CleaningType;
  propType: PropType;
  area: number;
  addons: string[];
  express: boolean;
  date: string;
  slot: string;
  address: string;
  floor: string;
  intercom: string;
  name: string;
  phone: string;
  comment: string;
  payMethod: PayMethod;
  total: number;
}

interface CalculatorProps {
  onPaymentRequest?: (draft: CalculatorDraft) => void;
}

const CLEANING_TYPES: { key: CleaningType; title: string }[] = [
  { key: "support", title: "Поддерживающая" },
  { key: "general", title: "Генеральная" },
  { key: "renovation", title: "После ремонта" },
  { key: "office", title: "Офис" },
];

const PROP_TYPES: { key: PropType; title: string }[] = [
  { key: "flat", title: "Квартира" },
  { key: "house", title: "Дом" },
  { key: "office", title: "Офис" },
];

function isCleaningType(v: unknown): v is CleaningType {
  return v === "support" || v === "general" || v === "renovation" || v === "office";
}

function todayStr(): string {
  const d = new Date();
  const m = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${d.getFullYear()}-${m}-${day}`;
}

function fmt(n: number): string {
  return `${n.toLocaleString("ru-RU")} ₽`;
}

export default function Calculator({ onPaymentRequest }: CalculatorProps) {
  const [step, setStep] = useState(1);
  const [cleaningType, setCleaningType] = useState<CleaningType>("general");
  const [propType, setPropType] = useState<PropType>("flat");
  const [area, setArea] = useState(45);
  const [addons, setAddons] = useState<string[]>([]);
  const [express, setExpress] = useState(false);
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [address, setAddress] = useState("");
  const [floor, setFloor] = useState("");
  const [intercom, setIntercom] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [payMethod, setPayMethod] = useState<PayMethod>("card");
  const [agree, setAgree] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const onPreset = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (isCleaningType(detail)) setCleaningType(detail);
    };
    window.addEventListener("preset", onPreset);
    return () => window.removeEventListener("preset", onPreset);
  }, []);

  const minDate = useMemo(() => todayStr(), []);
  const { total } = useMemo(
    () => calcTotal({ cleaningType, area, addons, express }),
    [cleaningType, area, addons, express],
  );

  const areaValid = Number.isFinite(area) && area >= MIN_AREA && area <= MAX_AREA;
  const step3Valid =
    date !== "" && date >= minDate && address.trim().length >= 5 && slot !== "";
  const step4Valid =
    name.trim().length >= 2 && isValidPhone(phone) && agree;

  const canNext =
    step === 1 || (step === 2 && areaValid) || (step === 3 && step3Valid);

  function toggleAddon(key: string) {
    setAddons((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  }

  function handleDateChange(v: string) {
    if (v !== "" && v < minDate) {
      toast.error("Дата не может быть в прошлом");
      return;
    }
    setDate(v);
  }

  function handlePayment() {
    if (submitting) return;
    setSubmitting(true);
    try {
      const draft: CalculatorDraft = {
        cleaningType,
        propType,
        area,
        addons,
        express,
        date,
        slot,
        address: address.trim(),
        floor: floor.trim(),
        intercom: intercom.trim(),
        name: name.trim(),
        phone: normalizePhone(phone),
        comment: comment.trim(),
        payMethod,
        total,
      };
      onPaymentRequest?.(draft);
    } finally {
      setSubmitting(false);
    }
  }

  const rate = BASE_PER_M2[cleaningType];

  return (
    <section aria-label="Калькулятор" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <p className="text-sm font-semibold text-sky-600">Калькулятор</p>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Рассчитайте стоимость за 4 шага
        </h2>
        <p className="mt-2 text-sm font-medium text-slate-500">Шаг {step} из 4</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
            {step === 1 && (
              <div>
                <h3 className="text-lg font-bold text-slate-900">Тип помещения и уборки</h3>
                <p className="mt-1 text-sm text-slate-500">Помещение</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {PROP_TYPES.map((p) => (
                    <button
                      key={p.key}
                      type="button"
                      onClick={() => setPropType(p.key)}
                      aria-pressed={propType === p.key}
                      className={cn(
                        "rounded-2xl border px-4 py-3 text-sm font-semibold transition-colors",
                        propType === p.key
                          ? "border-sky-500 bg-sky-50 text-sky-700"
                          : "border-slate-200 bg-white text-slate-700 hover:border-sky-300",
                      )}
                    >
                      {p.title}
                    </button>
                  ))}
                </div>
                <p className="mt-6 text-sm text-slate-500">Тип уборки</p>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  {CLEANING_TYPES.map((c) => (
                    <button
                      key={c.key}
                      type="button"
                      onClick={() => setCleaningType(c.key)}
                      aria-pressed={cleaningType === c.key}
                      className={cn(
                        "rounded-2xl border px-4 py-3 text-left transition-colors",
                        cleaningType === c.key
                          ? "border-sky-500 bg-sky-50"
                          : "border-slate-200 bg-white hover:border-sky-300",
                      )}
                    >
                      <span className="block text-sm font-bold text-slate-900">{c.title}</span>
                      <span className="mt-1 block text-sm text-slate-500">
                        {BASE_PER_M2[c.key]} ₽/м²
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="text-lg font-bold text-slate-900">Площадь и опции</h3>
                <div className="mt-4">
                  <Input
                    id="calc-area"
                    label="Площадь, м²"
                    type="number"
                    min={MIN_AREA}
                    max={MAX_AREA}
                    value={Number.isFinite(area) ? area : ""}
                    onChange={(e) => setArea(Math.floor(Number(e.target.value)))}
                  />
                  <input
                    type="range"
                    aria-label="Площадь"
                    min={MIN_AREA}
                    max={MAX_AREA}
                    value={Number.isFinite(area) ? Math.min(MAX_AREA, Math.max(MIN_AREA, area)) : MIN_AREA}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="mt-3 w-full accent-sky-500"
                  />
                  {!areaValid && (
                    <p className="mt-1 text-sm text-red-600">15–500 м²</p>
                  )}
                </div>
                <p className="mt-6 text-sm font-medium text-slate-700">Дополнительно</p>
                <div className="mt-3 space-y-2">
                  {Object.entries(ADDONS).map(([key, a]) => (
                    <label key={key} className="flex cursor-pointer items-center gap-3 text-sm text-slate-700">
                      <input
                        type="checkbox"
                        checked={addons.includes(key)}
                        onChange={() => toggleAddon(key)}
                        className="size-4 accent-sky-500"
                      />
                      <span>
                        {a.label} <span className="text-slate-500">+{fmt(a.price)}</span>
                      </span>
                    </label>
                  ))}
                </div>
                <label className="mt-4 flex cursor-pointer items-center gap-3 text-sm font-medium text-slate-700">
                  <input
                    type="checkbox"
                    checked={express}
                    onChange={(e) => setExpress(e.target.checked)}
                    className="size-4 accent-sky-500"
                  />
                  Экспресс-уборка +30%
                </label>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="text-lg font-bold text-slate-900">Дата и адрес</h3>
                <div className="mt-4">
                  <Input
                    id="calc-date"
                    label="Дата"
                    type="date"
                    min={minDate}
                    value={date}
                    onChange={(e) => handleDateChange(e.target.value)}
                  />
                </div>
                <p className="mt-4 text-sm font-medium text-slate-700">Время</p>
                <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {SLOTS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSlot(s)}
                      aria-pressed={slot === s}
                      className={cn(
                        "rounded-2xl border px-3 py-2 text-sm font-semibold transition-colors",
                        slot === s
                          ? "border-sky-500 bg-sky-50 text-sky-700"
                          : "border-slate-200 bg-white text-slate-700 hover:border-sky-300",
                      )}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <div className="mt-4 space-y-4">
                  <Input
                    id="calc-address"
                    label="Адрес"
                    placeholder="Улица, дом, квартира"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      id="calc-floor"
                      label="Этаж (необязательно)"
                      value={floor}
                      onChange={(e) => setFloor(e.target.value)}
                    />
                    <Input
                      id="calc-intercom"
                      label="Домофон (необязательно)"
                      value={intercom}
                      onChange={(e) => setIntercom(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <h3 className="text-lg font-bold text-slate-900">Контакты и оплата</h3>
                <div className="mt-4 space-y-4">
                  <Input
                    id="calc-name"
                    label="Имя"
                    placeholder="Как к вам обращаться"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    id="calc-phone"
                    label="Телефон"
                    placeholder="8 999 123 45 67"
                    inputMode="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onBlur={(e) => setPhone(normalizePhone(e.target.value))}
                  />
                  <label htmlFor="calc-comment" className="block">
                    <span className="mb-1 block text-sm font-medium text-slate-700">
                      Комментарий (необязательно)
                    </span>
                    <textarea
                      id="calc-comment"
                      rows={3}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
                    />
                  </label>
                </div>
                <p className="mt-4 text-sm font-medium text-slate-700">Способ оплаты</p>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={() => setPayMethod("card")}
                    aria-pressed={payMethod === "card"}
                    className={cn(
                      "rounded-2xl border px-4 py-2.5 text-sm font-semibold transition-colors",
                      payMethod === "card"
                        ? "border-sky-500 bg-sky-50 text-sky-700"
                        : "border-slate-200 bg-white text-slate-700 hover:border-sky-300",
                    )}
                  >
                    Картой
                  </button>
                  <button
                    type="button"
                    onClick={() => setPayMethod("cash")}
                    aria-pressed={payMethod === "cash"}
                    className={cn(
                      "rounded-2xl border px-4 py-2.5 text-sm font-semibold transition-colors",
                      payMethod === "cash"
                        ? "border-sky-500 bg-sky-50 text-sky-700"
                        : "border-slate-200 bg-white text-slate-700 hover:border-sky-300",
                    )}
                  >
                    Наличными
                  </button>
                </div>
                <label className="mt-4 flex cursor-pointer items-start gap-3 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    className="mt-0.5 size-4 accent-sky-500"
                  />
                  Согласен с обработкой персональных данных
                </label>
              </div>
            )}

            <div className="mt-8 flex gap-3">
              {step > 1 && (
                <Button variant="outline" onClick={() => setStep((s) => s - 1)}>
                  Назад
                </Button>
              )}
              {step < 4 && (
                <Button disabled={!canNext} onClick={() => setStep((s) => s + 1)}>
                  Далее
                </Button>
              )}
              {step === 4 && (
                <Button disabled={!step4Valid || submitting} onClick={handlePayment}>
                  Перейти к оплате
                </Button>
              )}
            </div>
          </div>

          <Card className="h-fit lg:sticky lg:top-20">
            <h3 className="text-lg font-bold text-slate-900">Ваш расчёт</h3>
            <CardContent>
              <div className="flex justify-between">
                <span className="text-slate-600">
                  {area} м² × {rate} ₽
                </span>
                <span className="font-semibold text-slate-900">{fmt(area * rate)}</span>
              </div>
              {addons.map((key) => (
                <div key={key} className="flex justify-between">
                  <span className="text-slate-600">{ADDONS[key].label}</span>
                  <span className="font-semibold text-slate-900">+{fmt(ADDONS[key].price)}</span>
                </div>
              ))}
              {express && (
                <div className="flex justify-between">
                  <span className="text-slate-600">Экспресс +30%</span>
                </div>
              )}
              <div className="flex justify-between border-t border-slate-100 pt-3 text-base">
                <span className="font-bold text-slate-900">Итого</span>
                <span className="font-extrabold text-slate-900">{fmt(total)}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
