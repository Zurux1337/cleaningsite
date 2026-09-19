"use client";

import { useRef, useState } from "react";
import { toast } from "sonner";

import type { CalculatorDraft } from "@/components/Calculator";
import { createOrder, type Order } from "@/lib/orders";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface PaymentDialogProps {
  draft: CalculatorDraft | null;
  open: boolean;
  onClose: () => void;
  onSuccess: (order: Order) => void;
}

export default function PaymentDialog({ draft, open, onClose, onSuccess }: PaymentDialogProps) {
  const [busy, setBusy] = useState(false);
  const busyRef = useRef(false);
  const [card, setCard] = useState("");
  const [exp, setExp] = useState("");
  const [cvc, setCvc] = useState("");

  function clearCardFields() {
    setCard("");
    setExp("");
    setCvc("");
  }

  if (!open || !draft) return null;

  function handleClose() {
    if (busyRef.current) return;
    clearCardFields();
    onClose();
  }

  const totalStr = `${draft.total.toLocaleString("ru-RU")} ₽`;
  const isCard = draft.payMethod === "card";

  async function handleSubmit() {
    const d = draft;
    if (!d || busyRef.current) return;
    busyRef.current = true;
    setBusy(true);
    try {
      await new Promise((r) => setTimeout(r, 1500));
      const order = createOrder({
        name: d.name,
        phone: d.phone,
        cleaningType: d.cleaningType,
        area: d.area,
        addons: d.addons,
        express: d.express,
        date: d.date,
        slot: d.slot,
        address: d.address,
        propType: d.propType,
        floor: d.floor,
        intercom: d.intercom,
        comment: d.comment,
        total: d.total,
        status: d.payMethod === "card" ? "paid" : "new",
      });
      onSuccess(order);
      clearCardFields();
    } catch {
      toast.error("Не удалось сохранить заказ, попробуйте ещё раз");
    } finally {
      busyRef.current = false;
      setBusy(false);
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Оплата"
      className="fixed inset-0 z-50 grid place-items-center bg-slate-900/50 p-4"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-bold text-slate-900">Оплата</h2>
        <dl className="mt-3 space-y-1 text-sm text-slate-600">
          <div className="flex justify-between">
            <dt>Имя</dt>
            <dd className="font-semibold text-slate-900">{draft.name}</dd>
          </div>
          <div className="flex justify-between">
            <dt>Дата</dt>
            <dd className="font-semibold text-slate-900">
              {draft.date} · {draft.slot}
            </dd>
          </div>
          <div className="flex justify-between">
            <dt>Адрес</dt>
            <dd className="font-semibold text-slate-900">{draft.address}</dd>
          </div>
          <div className="flex justify-between border-t border-slate-100 pt-2">
            <dt className="font-bold text-slate-900">Итого</dt>
            <dd className="font-extrabold text-slate-900">{totalStr}</dd>
          </div>
        </dl>

        {isCard ? (
          <div className="mt-4 space-y-3">
            <Input
              id="pay-card"
              label="Номер карты"
              placeholder="4242 4242 4242 4242"
              inputMode="numeric"
              value={card}
              onChange={(e) => setCard(e.target.value)}
            />
            <div className="grid grid-cols-2 gap-3">
              <Input
                id="pay-exp"
                label="Срок"
                placeholder="12/28"
                value={exp}
                onChange={(e) => setExp(e.target.value)}
              />
              <Input
                id="pay-cvc"
                label="CVC"
                placeholder="123"
                inputMode="numeric"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
            </div>
            <p className="text-xs text-slate-400">Тестовые данные, списание не производится.</p>
          </div>
        ) : (
          <p className="mt-4 text-sm text-slate-500">Оплата наличными после выполнения уборки.</p>
        )}

        <div className="mt-6 flex gap-3">
          <Button variant="outline" onClick={handleClose} disabled={busy}>
            Отмена
          </Button>
          <Button onClick={handleSubmit} disabled={busy} className="flex-1">
            {busy ? "Обработка…" : isCard ? `Оплатить ${totalStr}` : "Подтвердить заказ"}
          </Button>
        </div>
      </div>
    </div>
  );
}
