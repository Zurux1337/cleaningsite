"use client";

import { useState } from "react";

import Calculator, { type CalculatorDraft } from "@/components/Calculator";
import PaymentDialog from "@/components/PaymentDialog";
import CabinetDialog from "@/components/CabinetDialog";
import type { Order } from "@/lib/orders";
import { Button } from "@/components/ui/button";

export default function BookingFlow() {
  const [draft, setDraft] = useState<CalculatorDraft | null>(null);
  const [order, setOrder] = useState<Order | null>(null);

  function openCabinet() {
    window.dispatchEvent(new CustomEvent("open-cabinet"));
  }

  return (
    <>
      <Calculator onPaymentRequest={setDraft} />
      <PaymentDialog
        draft={draft}
        open={draft !== null}
        onClose={() => setDraft(null)}
        onSuccess={(o) => {
          setDraft(null);
          setOrder(o);
        }}
      />
      {order && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Заказ оформлен"
          className="fixed inset-0 z-50 grid place-items-center bg-pure-black/60 p-4"
        >
          <div className="w-full max-w-md border border-hairline-gray bg-pure-white p-6 text-center">
            <p className="text-[12px] uppercase tracking-[0.08em] text-cobalt-action">
              Заказ оформлен
            </p>
            <p className="mt-2 text-[22px] text-ink-black">{order.id}</p>
            <p className="mt-1 text-sm text-graphite">
              {order.total.toLocaleString("ru-RU")} ₽ · {order.date} · {order.slot}
            </p>
            <div className="mt-6 flex gap-3">
              <Button variant="outline" onClick={() => setOrder(null)} className="flex-1">
                Закрыть
              </Button>
              <Button
                onClick={() => {
                  setOrder(null);
                  openCabinet();
                }}
                className="flex-1"
              >
                Открыть кабинет
              </Button>
            </div>
          </div>
        </div>
      )}
      <CabinetDialog />
    </>
  );
}
