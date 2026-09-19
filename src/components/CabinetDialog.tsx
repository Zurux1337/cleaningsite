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
      className="fixed inset-0 z-50 grid place-items-center bg-ink-black/50 p-4"
      onClick={close}
    >
      <div
        className="max-h-[80vh] w-full max-w-lg overflow-auto rounded-[44px] bg-paper-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-[26px] font-semibold leading-[1.23] text-soft-ink">Мои заказы</h2>
          <button
            type="button"
            onClick={close}
            aria-label="Закрыть"
            className="rounded-full px-3 py-1 text-sm font-medium text-slate hover:bg-warm-mist"
          >
            ✕
          </button>
        </div>

        {orders.length === 0 ? (
          <div className="mt-4 text-center">
            <p className="text-base text-slate">Пока пусто</p>
            <a
              href="#calc"
              onClick={close}
              className="mt-2 inline-block text-base font-medium text-hot-magenta hover:underline"
            >
              Рассчитать стоимость
            </a>
          </div>
        ) : (
          <ul className="mt-4 space-y-3">
            {orders.map((o) => (
              <li key={o.id} className="rounded-[16px] border border-warm-mist bg-oat-canvas p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-soft-ink">{o.id}</span>
                  <span
                    className={cn(
                      "text-[13px] font-medium uppercase tracking-wide",
                      o.status === "paid" && "text-hot-magenta",
                      o.status === "new" && "text-charcoal",
                      o.status === "cancelled" && "text-stone",
                    )}
                  >
                    {STATUS_LABEL[o.status]}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate">
                  {o.date} · {o.slot} · {o.cleaningType} · {o.area} м²
                </p>
                {(o.address ?? "") !== "" && (
                  <p className="mt-1 text-sm text-stone">{o.address}</p>
                )}
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-base font-semibold text-soft-ink">
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
