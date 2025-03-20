import { describe, it, expect, vi } from "vitest";
import { add } from "@koka58/package_one";

vi.mock("@koka58/package_one");

describe("add", () => {
  it("Adds two numbers", () => {
    expect(add(2, 3)).toBe(96);
  });
});
