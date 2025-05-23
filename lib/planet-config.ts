export interface PlanetStats {
  // Physical properties
  mass: number
  radius: number
  density?: number
  temperature: number

  // Surface properties
  surfaceRoughness?: number
  mountainHeight?: number
  soilType?: string
  soilTexture?: string

  // Liquid properties
  waterLevel?: number
  liquidEnabled?: boolean
  liquidType?: string

  // Atmosphere properties
  atmosphereStrength?: number
  cloudCount?: number

  // Biome properties
  biome?: string
  customColors?: {
    oceanFloor?: string
    beach?: string
    regular?: string
    mountain?: string
  }

  // Import/export support for landmarks
  landmarks?: any[]

  // Type (derived from mass and radius)
  type?: string
}

// Default planet stats
export const defaultPlanetStats: PlanetStats = {
  mass: 1.0,
  radius: 1.0,
  density: 5.51, // Earth's density in g/cm³
  temperature: 288, // Earth's average temperature in K
  surfaceRoughness: 0.5,
  mountainHeight: 0.6,
  soilType: "rocky",
  soilTexture: "rough",
  waterLevel: 0.65,
  liquidEnabled: true,
  liquidType: "water",
  atmosphereStrength: 0.8,
  cloudCount: 30,
  biome: "Rocky Highlands",
  customColors: {
    oceanFloor: "#1E4D6B",
    beach: "#8D6E63",
    regular: "#A1887F",
    mountain: "#D7CCC8",
  },
}

// Determine planet type based on mass and radius
export function determinePlanetType(mass: number, radius: number): "terrestrial" | "gaseous" {
  return mass > 7 || radius > 2.5 ? "gaseous" : "terrestrial"
}

// Calculate density from mass and radius
export function calculateDensity(mass: number, radius: number): number {
  // Density = Mass / Volume
  // Volume of a sphere = (4/3) * π * r³
  // Earth's volume is normalized to 1, so we need to scale by radius³
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)
  const earthDensity = 5.51 // g/cm³

  return (mass / volume) * earthDensity
}

// Determine liquid type based on temperature
export function determineLiquidType(temperature: number): { type: string; range: [number, number] } {
  if (temperature < 90) return { type: "nitrogen", range: [63, 77] }
  if (temperature < 110) return { type: "methane", range: [90, 110] }
  if (temperature < 240) return { type: "ethane", range: [89, 184] }
  if (temperature < 300) return { type: "water", range: [273, 373] }
  if (temperature < 500) return { type: "ammonia", range: [195, 405] }
  return { type: "none", range: [0, 0] }
}

// Check if liquid is available at the given temperature
export function isLiquidAvailable(temperature: number, liquidType: string): boolean {
  const liquidRanges: Record<string, [number, number]> = {
    water: [273, 373],
    methane: [90, 110],
    nitrogen: [63, 77],
    ammonia: [195, 405],
    ethane: [89, 184],
  }

  const range = liquidRanges[liquidType]
  if (!range) return false

  return temperature >= range[0] && temperature <= range[1]
}

// Merge partial planet stats with defaults
export function mergeWithDefaults(partialStats: Partial<PlanetStats>): PlanetStats {
  return {
    ...defaultPlanetStats,
    ...partialStats,
    customColors: {
      ...defaultPlanetStats.customColors,
      ...partialStats.customColors,
    },
  }
}

// Biome data
export const biomeData = {
  "Rocky Highlands": {
    colors: {
      oceanFloor: "#1E4D6B",
      beach: "#8D6E63",
      regular: "#A1887F",
      mountain: "#D7CCC8",
    },
    parameters: {
      surfaceRoughness: [0.4, 0.8],
      waterLevel: [0.5, 0.7],
      atmosphereStrength: [0.6, 0.9],
      cloudCount: [20, 60],
    },
  },
  Desert: {
    colors: {
      oceanFloor: "#1A237E",
      beach: "#E6CE9C",
      regular: "#E0BB7A",
      mountain: "#D4A76A",
    },
    parameters: {
      surfaceRoughness: [0.3, 0.6],
      waterLevel: [0.2, 0.4],
      atmosphereStrength: [0.3, 0.6],
      cloudCount: [0, 20],
    },
  },
  Volcanic: {
    colors: {
      oceanFloor: "#3E2723",
      beach: "#5D4037",
      regular: "#4E342E",
      mountain: "#3E2723",
    },
    parameters: {
      surfaceRoughness: [0.6, 0.9],
      waterLevel: [0.4, 0.6],
      atmosphereStrength: [0.4, 0.7],
      cloudCount: [40, 80],
    },
  },
  Oceanic: {
    colors: {
      oceanFloor: "#01579B",
      beach: "#81D4FA",
      regular: "#4FC3F7",
      mountain: "#29B6F6",
    },
    parameters: {
      surfaceRoughness: [0.2, 0.5],
      waterLevel: [0.7, 0.9],
      atmosphereStrength: [0.7, 1.0],
      cloudCount: [40, 80],
    },
  },
  Frozen: {
    colors: {
      oceanFloor: "#0D47A1",
      beach: "#B3E5FC",
      regular: "#E1F5FE",
      mountain: "#FFFFFF",
    },
    parameters: {
      surfaceRoughness: [0.3, 0.7],
      waterLevel: [0.5, 0.8],
      atmosphereStrength: [0.4, 0.7],
      cloudCount: [30, 60],
    },
  },
  Jungle: {
    colors: {
      oceanFloor: "#1B5E20",
      beach: "#8BC34A",
      regular: "#689F38",
      mountain: "#33691E",
    },
    parameters: {
      surfaceRoughness: [0.5, 0.8],
      waterLevel: [0.6, 0.8],
      atmosphereStrength: [0.8, 1.0],
      cloudCount: [60, 90],
    },
  },
  "Gas Giant": {
    colors: {
      oceanFloor: "#1A237E",
      beach: "#7986CB",
      regular: "#5C6BC0",
      mountain: "#3949AB",
    },
    parameters: {
      surfaceRoughness: [0.1, 0.4],
      waterLevel: [0, 0],
      atmosphereStrength: [0.8, 1.0],
      cloudCount: [70, 100],
    },
  },
}

// Get biome colors
export function getBiomeColors(biomeName: string) {
  return biomeData[biomeName]?.colors || biomeData["Rocky Highlands"].colors
}

// Get parameter range for a biome
export function getParameterRange(biomeName: string, parameter: string): [number, number] {
  return biomeData[biomeName]?.parameters?.[parameter] || [0, 1]
}
