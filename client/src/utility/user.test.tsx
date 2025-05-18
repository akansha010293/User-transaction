import { toTitleCase } from "./user";

describe("toTitleCase", () => {
  it("should convert snake_case to title case", () => {
    expect(toTitleCase("john_doe")).toBe("John Doe");
  });

  it("should convert kebab-case to title case", () => {
    expect(toTitleCase("jane-smith")).toBe("Jane Smith");
  });

  it("should handle all uppercase", () => {
    expect(toTitleCase("ALICE")).toBe("Alice");
  });

  it("should handle mixed case input", () => {
    expect(toTitleCase("aLiCe_jOnEs")).toBe("Alice Jones");
  });

  it("should return empty string if input is empty", () => {
    expect(toTitleCase("")).toBe("");
  });

  it("should handle single word", () => {
    expect(toTitleCase("bob")).toBe("Bob");
  });

  it("should preserve multiple words with spaces", () => {
    expect(toTitleCase("charlie brown")).toBe("Charlie Brown");
  });
});
