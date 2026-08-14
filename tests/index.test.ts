import { describe, expect, test } from "vitest";
import { MODULES, SPEC } from "../src/index";
import { RaycastStep, WaveDirector } from "../src/archetype";

describe("D00M4-666AX", () => {
  test("spec modules resolve", () => {
    expect(MODULES.length).toBe(2);
    expect(SPEC.length).toBeGreaterThan(10);
  });
  test("core behavior is deterministic", () => {
    const walls = [[0, 0, 1], [0, 0, 1]];
const ray = new RaycastStep(walls);
const hit = ray.cast(0.5, 0.5, 1, 0);
expect(hit).toBe(2);
const w = new WaveDirector();
expect(w.spawnCount()).toBe(3);
w.advance();
expect(w.spawnCount()).toBe(4);
  });
});
