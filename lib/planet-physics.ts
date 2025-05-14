import * as THREE from "three"

// Check if there's an export named Structure in this file

export interface Landmark {
  classification_id: string
  type: string
  visual_effect: string
  image_link: string
  coordinates: {
    x: number
    y: number
    z: number
  }
  events?: LandmarkEvent[] // New field for replayable events
  structures?: LandmarkStructure[] // New field for 3D structures
  influence_type?:
    | "crater"
    | "mountain"
    | "valley"
    | "volcano"
    | "basin"
    | "dune"
    | "glacier"
    | "storm"
    | "vortex"
    | "band"
    | "spot"
    | "turbulent"
    | "cyclone"
    | "anticyclone"
    | "zonal_flow"
    | "canyon"
    | "ocean_ridge"
    | "trench"
    | "ice_patch"
    | "lava_flow"
  influence_radius?: number
  influence_strength?: number
  influence_roughness?: number
  category?: "terrestrial" | "gaseous" // New field to categorize landmarks
  isActive?: boolean
  latitude?: number
  longitude?: number
}

export interface LandmarkEvent {
  id: string
  type: string
  description: string
  duration?: number
  intensity?: number
  // Additional fields can be added for event configuration
}

// Add this interface after the LandmarkEvent interface
export interface LandmarkStructure {
  id: string
  type: string
  name: string
  description?: string
  scale: { x: number; y: number; z: number }
  position: { x: number; y: number; z: number }
  rotation: { x: number; y: number; z: number }
  color: string
  emissive?: string
  emissiveIntensity?: number
  metalness?: number
  roughness?: number
  opacity?: number
  wireframe?: boolean
}

export interface PlanetStats {
  type: string
  mass: number
  radius: number
  density?: number
  temperature: number
  surfaceRoughness?: number
  terrainErosion?: number
  waterLevel?: number
  biomassLevel?: number
  plateTectonics?: number
  soilType?: "rocky" | "sandy" | "volcanic" | "organic" | "dusty" | "frozen" | "muddy"
  soilTexture?: "smooth" | "rough" | "cracked" | "layered" | "porous" | "grainy" | "crystalline"
  atmosphereStrength?: number
  liquidType?: "water" | "methane" | "nitrogen" | "ammonia" | "ethane"
  salinity?: number
  precipitationCompound?: "none" | "water" | "co2" | "methane" | "snow"
  biome?: string
  mountainHeight?: number
  hasRings?: boolean
  cloudCount?: number
  volcanicActivity?: number
  waterHeight?: number
  liquidEnabled?: boolean
  landmarks?: Landmark[]
  customColors?: {
    oceanFloor?: string
    beach?: string
    regular?: string
    mountain?: string
    cloud?: string
  }
}

export const defaultPlanetStats: PlanetStats = {
  mass: 1,
  radius: 1,
  density: 5.51,
  temperature: 288,
  surfaceRoughness: 0.5,
  terrainErosion: 0.3,
  waterLevel: 0.65,
  biomassLevel: 0.2,
  plateTectonics: 0.8,
  soilType: "rocky",
  soilTexture: "rough",
  atmosphereStrength: 0.8,
  liquidType: "water",
  salinity: 0.35,
  precipitationCompound: "water",
  biome: "Rocky Highlands",
  mountainHeight: 0.6,
  hasRings: false,
  cloudCount: 30,
  volcanicActivity: 0.3,
  waterHeight: 0.65,
  liquidEnabled: true,
  landmarks: [],
  type: ""
}

export function calculateDensity(mass: number, radius: number): number {
  return (mass / Math.pow(radius, 3)) * 5.51
}

export function determinePlanetType(mass: number, radius: number): "terrestrial" | "gaseous" {
  return mass > 7 || radius > 2.5 ? "gaseous" : "terrestrial"
}

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

export enum TerrainType {
  OceanFloor = 0,
  Beach = 1,
  Regular = 2,
  Mountain = 3,
}

export function getSoilTextureParams(texture: string): {
  scale: number
  depth: number
  irregularity: number
  pattern: "noise" | "cracks" | "layers" | "crystals" | "pores" | "grains"
} {
  const params: Record<string, { scale: number; depth: number; irregularity: number; pattern: "layers" | "noise" | "cracks" | "crystals" | "pores" | "grains" }> = {
    smooth: { scale: 5, depth: 0.01, irregularity: 0.1, pattern: "noise" },
    rough: { scale: 15, depth: 0.05, irregularity: 0.7, pattern: "noise" },
    cracked: { scale: 20, depth: 0.08, irregularity: 0.6, pattern: "cracks" },
    layered: { scale: 12, depth: 0.04, irregularity: 0.3, pattern: "layers" },
    porous: { scale: 25, depth: 0.06, irregularity: 0.5, pattern: "pores" },
    grainy: { scale: 30, depth: 0.03, irregularity: 0.8, pattern: "grains" },
    crystalline: { scale: 18, depth: 0.07, irregularity: 0.4, pattern: "crystals" },
  }
  return params[texture as keyof typeof params] || params.rough
}

export function determineTerrainType(height: number, waterLevel: number): TerrainType {
  const normalizedHeight = (height + 0.15) / 0.3
  if (normalizedHeight < waterLevel - 0.2) return TerrainType.OceanFloor
  if (normalizedHeight < waterLevel) return TerrainType.Beach
  if (normalizedHeight < waterLevel + 0.4) return TerrainType.Regular
  return TerrainType.Mountain
}

export function mergeWithDefaults(partialStats: Partial<PlanetStats>): PlanetStats {
  return { ...defaultPlanetStats, ...partialStats }
}

export function generateDefaultLandmarks(planetStats: PlanetStats): Landmark[] {
  return []
}

// Calculate the influence of a landmark at a specific position
export function calculateLandmarkInfluence(
  normalizedPos: THREE.Vector3,
  landmark: Landmark,
  planetRadius: number,
): number {
  return 0
}

// Apply landmark effect to height value
export function applyLandmarkEffect(
  baseHeight: number,
  influence: number,
  influenceType: Landmark["influence_type"],
): number {
  return 0
}

export interface LandmarkTerrainInfluence {
  height: number
  roughness: number
}

// Calculate the terrain influence of landmarks at a given position
export function calculateLandmarkTerrainInfluence(
  position: THREE.Vector3,
  landmarks: Landmark[] | undefined,
  planetRadius: number,
): LandmarkTerrainInfluence {
  let totalHeightInfluence = 0
  let totalRoughnessInfluence = 0

  if (landmarks && Array.isArray(landmarks)) {
    for (let i = 0; i < landmarks.length; i++) {
      const landmark = landmarks[i]

      // Skip invalid landmarks
      if (!landmark || !landmark.influence_radius || !landmark.influence_strength || !landmark.coordinates) {
        continue
      }

      // Extract coordinates with fallbacks
      const x = typeof landmark.coordinates.x === "number" ? landmark.coordinates.x : 0
      const y = typeof landmark.coordinates.y === "number" ? landmark.coordinates.y : 0
      const z = typeof landmark.coordinates.z === "number" ? landmark.coordinates.z : 0

      const landmarkPos = new THREE.Vector3(x, y, z).normalize().multiplyScalar(planetRadius)

      const distance = position.distanceTo(landmarkPos)
      const maxDistance = landmark.influence_radius * planetRadius

      if (distance < maxDistance) {
        const normalizedDistance = distance / maxDistance
        const influenceFactor = landmark.influence_strength * (1 - normalizedDistance)

        // Apply different height effects based on influence type
        let heightInfluence = 0
        switch (landmark.influence_type) {
          case "crater":
            heightInfluence = -influenceFactor * 0.05 // Depression
            break
          case "mountain":
            heightInfluence = influenceFactor * 0.08 // Elevation
            break
          case "valley":
            heightInfluence = -influenceFactor * 0.03 // Slight depression
            break
          case "volcano":
            heightInfluence = influenceFactor * 0.1 // Cone-shaped elevation
            break
          case "basin":
            heightInfluence = -influenceFactor * 0.04 // Wide depression
            break
          case "dune":
            heightInfluence = influenceFactor * 0.02 * Math.sin(distance * 5) // Wavy surface
            break
          case "glacier":
            heightInfluence = influenceFactor * 0.06 // Smooth elevation
            break
          case "storm":
          case "vortex":
          case "band":
          case "spot":
            heightInfluence = influenceFactor * 0.03 // Subtle atmospheric effect
            break
          default:
            heightInfluence = influenceFactor * 0.05
        }

        // Apply roughness influence (example: volcanic areas are rougher)
        let roughnessInfluence = 0
        if (landmark.influence_type === "volcano") {
          roughnessInfluence = influenceFactor * 0.2
        } else if (landmark.influence_type === "glacier") {
          roughnessInfluence = -influenceFactor * 0.1 // Smoother
        }

        totalHeightInfluence += heightInfluence
        totalRoughnessInfluence += roughnessInfluence
      }
    }
  }

  return {
    height: totalHeightInfluence,
    roughness: totalRoughnessInfluence,
  }
}
