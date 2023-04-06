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
});
