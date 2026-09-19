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
  address: string;
  propType: string;
  floor?: string;
  intercom?: string;
  comment?: string;
  total: number;
}

export type CreateOrderDraft = Omit<Order, "id" | "createdAt" | "status" | "address" | "propType"> & {
  status?: Order["status"];
  address?: string;
  propType?: string;
};

let mem: Order[] = [];

function isBrowser(): boolean {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

function normalize(o: Order): Order {
  const p = o as Partial<Order>;
  return { ...o, address: p.address ?? "", propType: p.propType ?? "" };
}

function load(): Order[] {
  if (!isBrowser()) return mem.map(normalize);
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Order[]).map(normalize) : [];
  } catch {
    return mem.map(normalize);
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
  let id: string;
  do {
    id = makeId();
  } while (orders.some((o) => o.id === id));
  const order: Order = {
    ...draft,
    address: draft.address ?? "",
    propType: draft.propType ?? "",
    id,
    createdAt: new Date().toISOString(),
    status: draft.status ?? "paid",
  };
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
