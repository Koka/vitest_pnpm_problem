import { describe, it, expect, vi } from "vitest";
import { addTwo } from "../index";

vi.mock("@koka58/package_one");

describe("addTwo", () => {
  it("Adds 2 to the number", () => {
    expect(addTwo(3)).toBe(96);
  });
});
