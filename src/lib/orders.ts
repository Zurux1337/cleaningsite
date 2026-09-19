import type { CleaningType } from "@/data/prices";

export const ORDERS_KEY = "cleaning_orders";

export type OrderStatus = "new" | "paid" | "cancelled";

export interface Order {
  id: string;
  createdAt: string;
  status: OrderStatus;
  name: string;
  phone: string;
  cleaningType: CleaningType;
  area: number;
  addons: string[];
  express: boolean;
  date: string;
  slot: string;
  total: number;
}

export type CreateOrderDraft = Omit<Order, "id" | "createdAt" | "status"> & {
  status?: Order["status"];
};

let mem: Order[] = [];

function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

function load(): Order[] {
  if (!isBrowser()) return [...mem];
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Order[]) : [];
  } catch {
    return [...mem];
  }
}

function save(orders: Order[]): void {
  if (!isBrowser()) {
    mem = [...orders];
    return;
  }
  try {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  } catch {
    mem = [...orders];
  }
}

function makeId(): string {
  return `CH-${Math.floor(1000 + Math.random() * 9000)}`;
}

export function createOrder(draft: CreateOrderDraft): Order {
  const orders = load();
  const order: Order = {
    ...draft,
    id: makeId(),
    createdAt: new Date().toISOString(),
    status: draft.status ?? "paid",
  };
  const existing = orders.find((o) => o.id === order.id);
  if (existing) return existing;
  orders.push(order);
  save(orders);
  return order;
}

export function listOrders(): Order[] {
  return load();
}

export function cancelOrder(id: string): Order | undefined {
  const orders = load();
  const order = orders.find((o) => o.id === id);
  if (!order) return undefined;
  order.status = "cancelled";
  save(orders);
  return order;
}
