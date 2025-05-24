export declare function generateNoise(width: number, height: number, scale: number): number[][];
export declare function generateSimpleNoise(seed: number, persistence: number): (x: number, y: number, z: number) => number;
export declare function generatePerlinNoise(seed: number, octaves: number, persistence: number, lacunarity: number): (x: number, y: number, z: number) => number;
declare global {
    interface Math {
        seedrandom: (seed: string) => () => number;
    }
}
