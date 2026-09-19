import { describe, expect, it } from "vitest";
import { isValidPhone, normalizePhone } from "./phone";
describe("normalizePhone", () => {
  it("converts 8 to +7 format", () => {
    expect(normalizePhone("8 (912) 345-67-89")).toBe("+7 (912) 345-67-89");
    expect(isValidPhone("89123456789")).toBe(true);
  });
});
describe("isValidPhone", () => {
  it("validates formatted numbers", () => {
    expect(isValidPhone("+7 (912) 345-67-89")).toBe(true);
    expect(isValidPhone("123")).toBe(false);
  });
});
