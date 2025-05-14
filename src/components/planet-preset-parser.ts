import type { PlanetStats, Landmark } from "@/lib/planet-physics"

/**
 * Parse a planet configuration string into a PlanetStats object
 */
export function parsePlanetConfig(configString: string): PlanetStats {
  try {
    console.log("Parsing planet config:", configString)

    // Initialize with default values
    const planetStats: Partial<PlanetStats> = {
      mass: 1,
      radius: 1,
      temperature: 288,
      landmarks: [],
    }

    // Remove comments
    const cleanConfig = configString
      .split("\n")
      .filter((line) => !line.trim().startsWith("//"))
      .join("\n")

    // Extract landmarks JSON
    let landmarksJson = ""
    const landmarksMatch = cleanConfig.match(/landmarks:\s*(\[[\s\S]*?\])/m)

    if (landmarksMatch && landmarksMatch[1]) {
      landmarksJson = landmarksMatch[1]
      console.log("Found landmarks JSON:", landmarksJson)
    }

    // Extract custom colors JSON
    let customColorsJson = ""
    const customColorsMatch = cleanConfig.match(/customColors:\s*(\{[\s\S]*?\})/m)

    if (customColorsMatch && customColorsMatch[1]) {
      customColorsJson = customColorsMatch[1]
      console.log("Found custom colors JSON:", customColorsJson)
    }

    // Parse other properties
    const lines = cleanConfig.split("\n")

    for (const line of lines) {
      const trimmedLine = line.trim()
      if (!trimmedLine || trimmedLine.startsWith("landmarks:") || trimmedLine.startsWith("customColors:")) {
        continue
      }

      const colonIndex = trimmedLine.indexOf(":")
      if (colonIndex > 0) {
        const key = trimmedLine.substring(0, colonIndex).trim()
        const value = trimmedLine.substring(colonIndex + 1).trim()

        if (key && value) {
          // Convert value to appropriate type
          if (!isNaN(Number(value))) {
            planetStats[key as keyof PlanetStats] = Number(value)
          } else if (value === "true") {
            planetStats[key as keyof PlanetStats] = true
          } else if (value === "false") {
            planetStats[key as keyof PlanetStats] = false
          } else {
            planetStats[key as keyof PlanetStats] = value
          }
        }
      }
    }

    // Parse landmarks if found
    if (landmarksJson) {
      try {
        const landmarks = JSON.parse(landmarksJson) as Landmark[]
        planetStats.landmarks = landmarks
        console.log("Parsed landmarks:", landmarks)
      } catch (error) {
        console.error("Error parsing landmarks JSON:", error)
      }
    }

    // Parse custom colors if found
    if (customColorsJson) {
      try {
        const customColors = JSON.parse(customColorsJson)
        planetStats.customColors = customColors
        console.log("Parsed custom colors:", customColors)
      } catch (error) {
        console.error("Error parsing custom colors JSON:", error)
      }
    }

    console.log("Final parsed planet stats:", planetStats)
    return planetStats as PlanetStats
  } catch (error) {
    console.error("Error parsing planet config:", error)
    throw new Error(`Failed to parse planet configuration: ${error}`)
  }
}
