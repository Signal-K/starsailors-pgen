export interface PlanetStats {
  mass: number
  radius: number
  density?: number
  temperature: number
  surfaceRoughness?: number
  waterLevel?: number
  soilType?: "rocky" | "sandy" | "volcanic" | "organic" | "dusty" | "frozen" | "muddy"
  soilTexture?: "smooth" | "rough" | "cracked" | "layered" | "porous" | "grainy" | "crystalline"
  atmosphereStrength?: number
  liquidType?: "water" | "methane" | "nitrogen" | "ammonia" | "ethane"
  biome?: string
  mountainHeight?: number
  cloudCount?: number
  liquidEnabled?: boolean
  customColors?: {
    oceanFloor?: string
    beach?: string
    regular?: string
    mountain?: string
  }
  // These fields are kept for import/export compatibility but not used in rendering
  terrainErosion?: number
  biomassLevel?: number
  plateTectonics?: number
  salinity?: number
  precipitationCompound?: "none" | "water" | "co2" | "methane" | "snow"
  hasRings?: boolean
  volcanicActivity?: number
  waterHeight?: number
  landmarks?: any[]
  type?: string
}

// Default planet stats
export const defaultPlanetStats: PlanetStats = {
  mass: 1,
  radius: 1,
  density: 5.51,
  temperature: 288,
  surfaceRoughness: 0.5,
  waterLevel: 0.65,
  soilType: "rocky",
  soilTexture: "rough",
  atmosphereStrength: 0.8,
  liquidType: "water",
  biome: "Rocky Highlands",
  mountainHeight: 0.6,
  cloudCount: 30,
  liquidEnabled: true,
}

// Calculate planet density based on mass and radius
export function calculateDensity(mass: number, radius: number): number {
  return (mass / Math.pow(radius, 3)) * 5.51
}

// Determine planet type based on mass and radius
export function determinePlanetType(mass: number, radius: number): "terrestrial" | "gaseous" {
  return mass > 7 || radius > 2.5 ? "gaseous" : "terrestrial"
}

// Determine liquid type based on temperature
export function determineLiquidType(temperature: number): {
  type: "water" | "methane" | "nitrogen" | "ammonia" | "ethane" | "none"
  color: string
} {
  if (temperature >= 273 && temperature <= 373) return { type: "water", color: "#1E4D6B" }
  if (temperature >= 91 && temperature <= 112) return { type: "methane", color: "#7FB3D5" }
  if (temperature >= 63 && temperature <= 77) return { type: "nitrogen", color: "#90EE90" }
  if (temperature >= 195 && temperature <= 240) return { type: "ammonia", color: "#D8BFD8" }
  if (temperature >= 90 && temperature <= 184) return { type: "ethane", color: "#FFD700" }
  return { type: "none", color: "#8B4513" }
}

// Check if liquid is available based on temperature and liquid type
export function isLiquidAvailable(temperature: number, liquidType: string): boolean {
  const ranges = {
    water: [273, 373],
    methane: [91, 112],
    nitrogen: [63, 77],
    ammonia: [195, 240],
    ethane: [90, 184],
  }
  const range = ranges[liquidType as keyof typeof ranges]
  return range ? temperature >= range[0] && temperature <= range[1] : false
}

// Merge partial planet stats with defaults
export function mergeWithDefaults(partialStats: Partial<PlanetStats>): PlanetStats {
  return { ...defaultPlanetStats, ...partialStats }
}
