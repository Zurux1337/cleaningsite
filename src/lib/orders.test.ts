import { expect, it } from "vitest";
import { cancelOrder, createOrder, listOrders } from "./orders";

it("creates and cancels", () => {
  const o = createOrder({
    name: "Тест",
    phone: "89991234567",
    cleaningType: "general",
    area: 45,
    addons: [],
    express: false,
    date: "2026-09-20",
    slot: "9–12",
    total: 5000,
  });
  expect(o.id.startsWith("CH-")).toBe(true);
  expect(listOrders().some((x) => x.id === o.id)).toBe(true);
  cancelOrder(o.id);
  expect(listOrders().find((x) => x.id === o.id)?.status).toBe("cancelled");
});
