"use client";

import { useCallback, useEffect, useState } from "react";

import { cancelOrder, listOrders, type Order } from "@/lib/orders";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STATUS_LABEL: Record<Order["status"], string> = {
  new: "Новый",
  paid: "Оплачен",
  cancelled: "Отменён",
};

export default function CabinetDialog() {
  const [open, setOpen] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);

  const refresh = useCallback(() => {
    setOrders(listOrders());
  }, []);

  useEffect(() => {
    const handler = () => {
      refresh();
      setOpen(true);
    };
    window.addEventListener("open-cabinet", handler);
    return () => window.removeEventListener("open-cabinet", handler);
  }, [refresh]);

  if (!open) return null;

  function handleCancel(id: string) {
    cancelOrder(id);
    refresh();
  }

  function close() {
    setOpen(false);
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Кабинет"
      className="fixed inset-0 z-50 grid place-items-center bg-slate-900/50 p-4"
      onClick={close}
    >
      <div
        className="max-h-[80vh] w-full max-w-lg overflow-auto rounded-3xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">Мои заказы</h2>
          <button
            type="button"
            onClick={close}
            aria-label="Закрыть"
            className="rounded-full px-3 py-1 text-sm font-semibold text-slate-500 hover:bg-slate-100"
          >
            ✕
          </button>
        </div>

        {orders.length === 0 ? (
          <div className="mt-4 text-center">
            <p className="text-sm text-slate-500">Пока пусто</p>
            <a
              href="#calc"
              onClick={close}
              className="mt-2 inline-block text-sm font-semibold text-sky-600 hover:underline"
            >
              Рассчитать стоимость
            </a>
          </div>
        ) : (
          <ul className="mt-4 space-y-3">
            {orders.map((o) => (
              <li key={o.id} className="rounded-2xl border border-slate-200 p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-slate-900">{o.id}</span>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-xs font-semibold",
                      o.status === "paid" && "bg-emerald-50 text-emerald-700",
                      o.status === "new" && "bg-sky-50 text-sky-700",
                      o.status === "cancelled" && "bg-slate-100 text-slate-500",
                    )}
                  >
                    {STATUS_LABEL[o.status]}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-600">
                  {o.date} · {o.slot} · {o.cleaningType} · {o.area} м²
                </p>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">
                    {o.total.toLocaleString("ru-RU")} ₽
                  </span>
                  {o.status !== "cancelled" && (
                    <Button variant="outline" onClick={() => handleCancel(o.id)}>
                      Отменить
                    </Button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
