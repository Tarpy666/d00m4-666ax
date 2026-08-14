// D00M4-666AX — clean-room first-person-shooter. Deterministic by construction.
// Inspiration (mechanics only, not source material): FPS conventions (hitscan, corridors, waves)
// Target engine for the render layer: three-js (see docs/BUILD_PLAN.md).

import { seededRandom } from "./rng";
import { RaycastStep, WaveDirector } from "./archetype";

export const SPEC = "FPS conventions (hitscan, corridors, waves)";
export const MODULES = [{ id: "RaycastStep", name: "D00M4-666AX :: RaycastStep" }, { id: "WaveDirector", name: "D00M4-666AX :: WaveDirector" }];
export { seededRandom };
