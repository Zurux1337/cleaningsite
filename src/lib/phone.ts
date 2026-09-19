export const PHONE_RE = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

export function normalizePhone(raw: string): string {
  let digits = (raw ?? "").replace(/\D/g, "");
  if (digits.length === 11 && (digits[0] === "8" || digits[0] === "7")) {
    digits = digits.slice(1);
  }
  const d = digits.slice(-10);
  const a = d.slice(0, 3);
  const b = d.slice(3, 6);
  const c = d.slice(6, 8);
  const e = d.slice(8, 10);
  return `+7 (${a}) ${b}-${c}-${e}`;
}

export function isValidPhone(raw: string): boolean {
  return PHONE_RE.test(normalizePhone(raw));
}
