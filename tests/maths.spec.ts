import { suma, resta } from "@/libs/maths";

describe("maths", () => {
  it("2+3=5", () => expect(suma(2,3)).toBe(5));
  it("5-3=2", () => expect(resta(5,3)).toBe(2));
});
