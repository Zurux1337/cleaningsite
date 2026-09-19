import {
  ADDONS,
  BASE_PER_M2,
  EXPRESS_MULTIPLIER,
  MAX_AREA,
  MIN_AREA,
  MIN_ORDER,
  type CleaningType,
} from "@/data/prices";

export type { CleaningType };

export interface CalcInput {
  cleaningType: CleaningType;
  area: number;
  addons: string[];
  express: boolean;
}

export interface CalcAddonLine {
  key: string;
  label: string;
  price: number;
}

export interface CalcBreakdown {
  area: number;
  perM2: number;
  base: number;
  addons: CalcAddonLine[];
  addonsTotal: number;
  subtotal: number;
  express: boolean;
}

export function clampArea(area: number): number {
  if (!Number.isFinite(area)) return MIN_AREA;
  return Math.min(MAX_AREA, Math.max(MIN_AREA, Math.floor(area)));
}

export function calcTotal(input: CalcInput): { total: number; breakdown: CalcBreakdown } {
  const area = clampArea(input.area);
  const perM2 = BASE_PER_M2[input.cleaningType] ?? BASE_PER_M2.support;
  const base = perM2 * area;
  const addons: CalcAddonLine[] = (input.addons ?? [])
    .filter((key) => Object.hasOwn(ADDONS, key))
    .map((key) => ({ key, label: ADDONS[key].label, price: ADDONS[key].price }));
  const addonsTotal = addons.reduce((sum, a) => sum + a.price, 0);
  const subtotal = Math.max(MIN_ORDER, base + addonsTotal);
  const total = input.express ? Math.round(subtotal * EXPRESS_MULTIPLIER) : subtotal;
  return { total, breakdown: { area, perM2, base, addons, addonsTotal, subtotal, express: input.express } };
}
