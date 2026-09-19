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
      className="fixed inset-0 z-50 grid place-items-center bg-pure-black/60 p-4"
      onClick={close}
    >
      <div
        className="max-h-[80vh] w-full max-w-lg overflow-auto border border-hairline-gray bg-pure-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-[22px] leading-[1.2] text-ink-black">Мои заказы</h2>
          <button
            type="button"
            onClick={close}
            aria-label="Закрыть"
            className="px-3 py-1 text-sm text-graphite hover:bg-shadow-whisper"
          >
            ✕
          </button>
        </div>

        {orders.length === 0 ? (
          <div className="mt-4 text-center">
            <p className="text-sm text-graphite">Пока пусто</p>
            <a
              href="#calc"
              onClick={close}
              className="mt-2 inline-block text-sm text-cobalt-action hover:underline"
            >
              Рассчитать стоимость
            </a>
          </div>
        ) : (
          <ul className="mt-4 space-y-3">
            {orders.map((o) => (
              <li key={o.id} className="border border-hairline-gray p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-ink-black">{o.id}</span>
                  <span
                    className={cn(
                      "text-[10px] uppercase tracking-[0.08em]",
                      o.status === "paid" && "text-cobalt-action",
                      o.status === "new" && "text-graphite",
                      o.status === "cancelled" && "text-graphite/50",
                    )}
                  >
                    {STATUS_LABEL[o.status]}
                  </span>
                </div>
                <p className="mt-1 text-sm text-graphite">
                  {o.date} · {o.slot} · {o.cleaningType} · {o.area} м²
                </p>
                {(o.address ?? "") !== "" && (
                  <p className="mt-1 text-sm text-graphite/70">{o.address}</p>
                )}
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-sm text-ink-black">
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
