import { validateInput } from "./helpers/validateInput";

describe("Input validation", () => {
  it("should not allow special characters", () => {
    const input = "!London";
    expect(validateInput(input)).toBe(false);
  });
  it("should not allow 2 cities separated by a comma", () => {
    const input = "London, Moscow";
    expect(validateInput(input)).toBe(false);
  });
  it("should allow valid city name", () => {
    const input = "London";
    expect(validateInput(input)).toBe(true);
  });
  it("should allow San Francisco as a city", () => {
    const input = "San Francisco";
    expect(validateInput(input)).toBe(true);
  });
});
