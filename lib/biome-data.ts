export function getBiomeColors(biome: string): {
  oceanFloor: string
  beach: string
  regular: string
  mountain: string
} {
  const biomeColors: Record<
    string,
    {
      oceanFloor: string
      beach: string
      regular: string
      mountain: string
    }
  > = {
    "Rocky Highlands": {
      oceanFloor: "#1E4D6B",
      beach: "#8D6E63",
      regular: "#A1887F",
      mountain: "#D7CCC8",
    },
    "Temperate Forest": {
      oceanFloor: "#0A3B5B",
      beach: "#D8C596",
      regular: "#4D7F3A",
      mountain: "#8B7355",
    },
    "Desert Plains": {
      oceanFloor: "#2E5984",
      beach: "#E6C78C",
      regular: "#D2B48C",
      mountain: "#B8860B",
    },
    "Volcanic Wasteland": {
      oceanFloor: "#3A1E1E",
      beach: "#5D4037",
      regular: "#3E2723",
      mountain: "#1A1A1A",
    },
    "Frozen Tundra": {
      oceanFloor: "#4C6A8F",
      beach: "#E0FFFF",
      regular: "#F0F8FF",
      mountain: "#FFFFFF",
    },
    "Lush Jungle": {
      oceanFloor: "#1A472A",
      beach: "#8B4513",
      regular: "#228B22",
      mountain: "#006400",
    },
    "Gas Giant Bands": {
      oceanFloor: "#B87333",
      beach: "#CD853F",
      regular: "#DAA520",
      mountain: "#F4A460",
    },
    "Ice Giant": {
      oceanFloor: "#4682B4",
      beach: "#87CEFA",
      regular: "#B0E0E6",
      mountain: "#F0F8FF",
    },
  }

  return biomeColors[biome] || biomeColors["Rocky Highlands"]
}

// Get all available biomes
export function getAllBiomes(): string[] {
  return [
    "Rocky Highlands",
    "Temperate Forest",
    "Desert Plains",
    "Volcanic Wasteland",
    "Frozen Tundra",
    "Lush Jungle",
    "Gas Giant Bands",
    "Ice Giant",
  ]
}

// Get parameter range for a biome
export function getParameterRange(biome: string, parameter: string): [number, number] {
  const ranges: Record<string, Record<string, [number, number]>> = {
    "Rocky Highlands": {
      surfaceRoughness: [0.4, 0.8],
      waterLevel: [0.3, 0.6],
      atmosphereStrength: [0.3, 0.7],
      cloudCount: [10, 40],
    },
    "Temperate Forest": {
      surfaceRoughness: [0.3, 0.7],
      waterLevel: [0.5, 0.7],
      atmosphereStrength: [0.6, 0.9],
      cloudCount: [30, 60],
    },
    "Desert Plains": {
      surfaceRoughness: [0.5, 0.9],
      waterLevel: [0.1, 0.4],
      atmosphereStrength: [0.2, 0.5],
      cloudCount: [0, 20],
    },
    "Volcanic Wasteland": {
      surfaceRoughness: [0.6, 1.0],
      waterLevel: [0.2, 0.5],
      atmosphereStrength: [0.4, 0.8],
      cloudCount: [20, 50],
    },
    "Frozen Tundra": {
      surfaceRoughness: [0.3, 0.6],
      waterLevel: [0.4, 0.8],
      atmosphereStrength: [0.2, 0.6],
      cloudCount: [10, 30],
    },
    "Lush Jungle": {
      surfaceRoughness: [0.2, 0.6],
      waterLevel: [0.6, 0.9],
      atmosphereStrength: [0.7, 1.0],
      cloudCount: [40, 70],
    },
    "Gas Giant Bands": {
      surfaceRoughness: [0.1, 0.4],
      waterLevel: [0.0, 0.0],
      atmosphereStrength: [0.8, 1.0],
      cloudCount: [60, 100],
    },
    "Ice Giant": {
      surfaceRoughness: [0.1, 0.3],
      waterLevel: [0.0, 0.0],
      atmosphereStrength: [0.6, 0.9],
      cloudCount: [40, 80],
    },
  }

  const defaultRange: [number, number] = [0, 1]
  const biomeRanges = ranges[biome] || ranges["Rocky Highlands"]
  return biomeRanges[parameter] || defaultRange
}

// Modify color for soil type
export function modifyColorForSoilType(color: string, soilType: string): string {
  const hexToRgb = (hex: string): [number, number, number] => {
    const r = Number.parseInt(hex.slice(1, 3), 16) / 255
    const g = Number.parseInt(hex.slice(3, 5), 16) / 255
    const b = Number.parseInt(hex.slice(5, 7), 16) / 255
    return [r, g, b]
  }

  const rgbToHex = (r: number, g: number, b: number): string => {
    const toHex = (c: number) => {
      const hex = Math.floor(c * 255).toString(16)
      return hex.length === 1 ? "0" + hex : hex
    }
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`
  }

  const [r, g, b] = hexToRgb(color)

  switch (soilType) {
    case "rocky":
      return rgbToHex(r * 0.9, g * 0.85, b * 0.8)
    case "sandy":
      return rgbToHex(r * 1.1, g * 1.05, b * 0.8)
    case "volcanic":
      return rgbToHex(r * 0.7, g * 0.6, b * 0.6)
    case "organic":
      return rgbToHex(r * 0.7, g * 1.1, b * 0.7)
    case "dusty":
      return rgbToHex(r * 1.0, g * 0.9, b * 0.7)
    case "frozen":
      return rgbToHex(r * 0.8, g * 0.9, b * 1.1)
    case "muddy":
      return rgbToHex(r * 0.8, g * 0.7, b * 0.5)
    default:
      return color
  }
}
