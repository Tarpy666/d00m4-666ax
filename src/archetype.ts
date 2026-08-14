export class RaycastStep {
  constructor(private readonly walls: number[][]) {}
  cast(ox: number, oy: number, dx: number, dy: number, maxDist = 16): number {
    let dist = 0;
    let x = ox; let y = oy;
    while (dist < maxDist) {
      x += dx; y += dy;
      const row = this.walls[Math.floor(y)] ?? [];
      if (row[Math.floor(x)] === 1) return dist + 1;
      dist++;
    }
    return -1;
  }
}
export class WaveDirector {
  constructor(private wave = 1) {}
  spawnCount(): number { return Math.min(12, 2 + this.wave); }
  advance(): void { this.wave++; }
}