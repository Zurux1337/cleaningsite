import { describe, expect, it } from "vitest";
import { calcTotal } from "./price";
describe("calcTotal", () => {
  it("general 45m2 + windows", () => {
    const r = calcTotal({ cleaningType: "general", area: 45, addons: ["windows"], express: false });
    expect(r.total).toBe(45 * 199 + 1990);
  });
  it("clamps area and never NaN", () => {
    const r = calcTotal({ cleaningType: "support", area: Number.NaN as unknown as number, addons: [], express: false });
    expect(Number.isFinite(r.total)).toBe(true);
    expect(r.total).toBeGreaterThanOrEqual(2500);
  });
  it("express x1.3 and min 2500", () => {
    const r = calcTotal({ cleaningType: "support", area: 15, addons: [], express: true });
    expect(r.total).toBe(Math.round(Math.max(2500, 15 * 129) * 1.3));
  });
});
