import { suma, resta, multiplicacion, division } from "@/libs/maths";

describe("maths", () => {
  it("2+3=5", () => expect(suma(2,3)).toBe(5));
  it("5-3=2", () => expect(resta(5,3)).toBe(2));
  it("2*3=6", () => expect(multiplicacion(2,3)).toBe(6));
  it("6/3=2", () => expect(division(6,3)).toBe(2));
});