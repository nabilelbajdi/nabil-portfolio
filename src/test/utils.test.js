import { describe, it, expect } from "vitest";
import { cn } from "../lib/utils";

describe("cn utility", () => {
  it("combines multiple class strings", () => {
    const result = cn("class1", "class2", "class3");
    expect(result).toBe("class1 class2 class3");
  });

  it("filters out falsy values", () => {
    const result = cn("class1", null, undefined, false, "", "class2");
    expect(result).toBe("class1 class2");
  });

  it("handles conditional classes", () => {
    const isActive = true;
    const isDisabled = false;
    const result = cn("base", isActive && "active", isDisabled && "disabled");
    expect(result).toBe("base active");
  });

  it("returns empty string for no valid classes", () => {
    const result = cn(null, undefined, false);
    expect(result).toBe("");
  });

  it("handles single class", () => {
    const result = cn("single");
    expect(result).toBe("single");
  });
});
