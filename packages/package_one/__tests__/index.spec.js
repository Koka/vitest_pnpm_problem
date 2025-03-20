import { describe, it, expect } from "vitest";
import { add } from "../index";

describe("add", () => {
  it("Adds two numbers", () => {
    expect(add(5, 3)).toBe(8);
  });
});
