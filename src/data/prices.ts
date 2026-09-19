export type CleaningType = "support" | "general" | "renovation" | "office";

export const BASE_PER_M2: Record<CleaningType, number> = {
  support: 129,
  general: 199,
  renovation: 249,
  office: 149,
};

export interface Addon {
  price: number;
  label: string;
}

export const ADDONS: Record<string, Addon> = {
  windows: { price: 1990, label: "Мытьё окон" },
  fridge: { price: 790, label: "Холодильник внутри" },
  oven: { price: 890, label: "Духовка внутри" },
  balcony: { price: 1490, label: "Балкон / лоджия" },
  ironing: { price: 590, label: "Глажка белья" },
  chem: { price: 990, label: "Химчистка мебели" },
};

export const MIN_ORDER = 2500;

export const EXPRESS_MULTIPLIER = 1.3;

export const SLOTS: string[] = ["9–12", "12–15", "15–18", "18–21"];

export const MIN_AREA = 15;

export const MAX_AREA = 500;
