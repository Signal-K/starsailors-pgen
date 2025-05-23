"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import type { PlanetStats } from "@/lib/planet-physics"
import { getBiomeColors } from "@/lib/biome-data"

interface StylizedCloudsProps {
  planetStats: PlanetStats
}

export function StylizedClouds({ planetStats }: StylizedCloudsProps) {
  const cloudRef = useRef<THREE.Group>(null)
  const shouldRenderClouds = useMemo(
    () => planetStats.mass <= 7 && planetStats.radius <= 2.5 && !!planetStats.cloudCount,
    [planetStats],
  )

  // Calculate cloud count - cap at 30 for performance
  const cloudCount = useMemo(() => Math.min(planetStats.cloudCount || 0, 30), [planetStats.cloudCount])

  // Update clouds on each frame
  useFrame(() => {
    if (cloudRef.current) {
      cloudRef.current.rotation.y += 0.0005
    }
  })

  // Get cloud color based on biome
  const cloudColor = useMemo(() => {
    const biomeColors = getBiomeColors(planetStats.biome || "Rocky Highlands")
    return biomeColors.cloud || "#FFFFFF"
  }, [planetStats.biome])

  if (!shouldRenderClouds) {
    return null
  }

  return (
    <group ref={cloudRef}>
      {Array.from({ length: cloudCount }).map((_, index) => {
        // Create random cloud position and size
        const pos = randomSpherePoint(planetStats.radius * 1.03)
        const size = 0.05 + Math.random() * 0.2
        const opacity = 0.6 + Math.random() * 0.4

        return (
          <mesh key={index} position={[pos.x, pos.y, pos.z]}>
            <sphereGeometry args={[size, 8, 8]} />
            <meshBasicMaterial color={cloudColor} transparent={true} opacity={opacity} depthWrite={false} />
          </mesh>
        )
      })}
    </group>
  )
}

// Helper function to generate random points on a sphere
function randomSpherePoint(radius: number): THREE.Vector3 {
  const u = Math.random()
  const v = Math.random()
  const theta = 2 * Math.PI * u
  const phi = Math.acos(2 * v - 1)

  const x = radius * Math.sin(phi) * Math.cos(theta)
  const y = radius * Math.sin(phi) * Math.sin(theta)
  const z = radius * Math.cos(phi)

  return new THREE.Vector3(x, y, z)
}
