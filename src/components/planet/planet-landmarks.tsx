"use client"

import { useMemo } from "react"
import * as THREE from "three"
import type { Landmark, PlanetStats } from "@/lib/planet-physics"
import { StructureRenderer } from "../settings/landmarks/structures/structure-renderer"

interface PlanetLandmarksProps {
  landmarks: Landmark[]
  planetStats: PlanetStats
  planetRadius: number
  rotation: number
}

export function PlanetLandmarks({ landmarks, planetStats, planetRadius, rotation }: PlanetLandmarksProps) {
  // Calculate landmark positions based on their coordinates
  const landmarkPositions = useMemo(() => {
    return landmarks.map((landmark) => {
      // Convert spherical coordinates to Cartesian
      const phi = (90 - landmark.latitude) * (Math.PI / 180)
      const theta = (landmark.longitude + 180) * (Math.PI / 180)

      const x = -planetRadius * Math.sin(phi) * Math.cos(theta)
      const z = planetRadius * Math.sin(phi) * Math.sin(theta)
      const y = planetRadius * Math.cos(phi)

      return new THREE.Vector3(x, y, z)
    })
  }, [landmarks, planetRadius])

  // Create a group for all landmarks
  return (
    <group rotation={[0, rotation, 0]}>
      {landmarks.map((landmark, index) => {
        // Skip landmarks without structures
        if (!landmark.structures || landmark.structures.length === 0) {
          return null
        }

        const position = landmarkPositions[index]

        return (
          <group key={landmark.id} position={[0, 0, 0]}>
            {landmark.structures.map((structure) => (
              <StructureRenderer
                key={structure.id}
                structure={structure}
                landmarkPosition={position}
                planetRadius={planetRadius}
              />
            ))}
          </group>
        )
      })}
    </group>
  )
}
