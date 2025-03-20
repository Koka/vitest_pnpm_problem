import { describe, it, expect } from "vitest";
import { addTwo } from "../index";

describe("addTwo", () => {
  it("Adds 2 to the number", () => {
    expect(addTwo(3)).toBe(5);
  });
});
