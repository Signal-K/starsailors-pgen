import { type PlanetStats, mergeWithDefaults } from "@/lib/planet-physics"

/**
 * Parse a planet configuration string into a PlanetStats object
 * @param configString The planet configuration string to parse
 * @returns A PlanetStats object
 */
export function parsePlanetConfig(configString: string): PlanetStats {
  try {
    // Filter out comment lines
    const lines = configString.split("\n").filter((line) => !line.trim().startsWith("//") && line.trim() !== "")
    const newConfig: Partial<PlanetStats> = {}

    lines.forEach((line) => {
      if (!line.trim()) return
      const colonIndex = line.indexOf(":")
      if (colonIndex === -1) return

      const key = line.substring(0, colonIndex).trim()
      const valueStr = line.substring(colonIndex + 1).trim()
      let value: any

      if (valueStr === "true" || valueStr === "false") value = valueStr === "true"
      else if (valueStr.startsWith("[") || valueStr.startsWith("{")) {
        try {
          value = JSON.parse(valueStr)
        } catch {
          value = valueStr
        }
      } else if (!isNaN(Number(valueStr))) value = Number(valueStr)
      else value = valueStr

      newConfig[key as keyof PlanetStats] = value
    })

    // Merge with defaults and return
    return mergeWithDefaults(newConfig)
  } catch (error) {
    console.error("Error parsing planet configuration:", error)
    return mergeWithDefaults({})
  }
}

/**
 * Generate a planet configuration string from a PlanetStats object
 * @param planetStats The PlanetStats object to convert to a string
 * @param metadata Optional metadata to include in the configuration
 * @returns A planet configuration string
 */
export function generatePlanetConfig(
  planetStats: PlanetStats,
  metadata?: { classificationId: string; author: string },
): string {
  // Start with metadata
  let config = `// Planet Configuration Export
`
  if (metadata) {
    config += `// Classification: ${metadata.classificationId}
`
    config += `// Author: ${metadata.author}
`
  }
  config += `// Export Date: ${new Date().toISOString()}

`

  // Add planet stats
  Object.entries(planetStats).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      // Handle complex objects
      if (key === "customColors" && value && Object.keys(value).length > 0) {
        config += `${key}: ${JSON.stringify(value)}
`
      }
      // Make sure landmarks are fully exported
      else if (key === "landmarks" && Array.isArray(value) && value.length > 0) {
        // Use a deep copy to ensure all nested structures are included
        const fullLandmarks = JSON.parse(JSON.stringify(value))

        // Format the landmarks with proper indentation
        const landmarksJson = JSON.stringify(fullLandmarks, null, 2)
          .split("\n")
          .map((line, i) => (i === 0 ? line : "  " + line))
          .join("\n")

        config += `${key}: ${landmarksJson}
`
      }
      // Handle numeric values
      else if (typeof value === "number") {
        config += `${key}: ${value.toFixed(2)}
`
      }
      // Handle boolean values
      else if (typeof value === "boolean") {
        config += `${key}: ${value ? "true" : "false"}
`
      }
      // Handle other objects excluding already handled types
      else if (typeof value === "object" && key !== "customColors" && key !== "landmarks") {
        config += `${key}: ${JSON.stringify(value)}
`
      }
      // Handle remaining simple values
      else if (typeof value !== "object") {
        config += `${key}: ${value}
`
      }
    }
  })

  return config
}
