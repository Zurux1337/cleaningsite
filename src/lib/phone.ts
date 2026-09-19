export const PHONE_RE = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

export function normalizePhone(raw: string): string {
  const digits = (raw ?? "").replace(/\D/g, "");
  let d: string;
  if (digits.length === 10) {
    d = digits;
  } else if (digits.length === 11 && (digits[0] === "8" || digits[0] === "7")) {
    d = digits.slice(1);
  } else {
    return (raw ?? "").trim();
  }
  const a = d.slice(0, 3);
  const b = d.slice(3, 6);
  const c = d.slice(6, 8);
  const e = d.slice(8, 10);
  return `+7 (${a}) ${b}-${c}-${e}`;
}

export function isValidPhone(raw: string): boolean {
  return PHONE_RE.test(normalizePhone(raw));
}
