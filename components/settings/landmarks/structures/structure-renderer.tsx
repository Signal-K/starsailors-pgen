"use client"

import { useRef, useMemo } from "react"
import * as THREE from "three"
import type { LandmarkStructure } from "@/lib/planet-physics"
import { getStructureGeometry, createStructureMaterial } from "./structure-types"

interface StructureRendererProps {
  structure: LandmarkStructure
  landmarkPosition: THREE.Vector3
  planetRadius: number
}

export function StructureRenderer({ structure, landmarkPosition, planetRadius }: StructureRendererProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  // Generate structure mesh
  const { geometry, material, position, quaternion, scale } = useMemo(() => {
    // Get geometry based on structure type
    const geometry = getStructureGeometry(structure.type)

    // Create material
    const material = createStructureMaterial(structure)

    // Calculate position relative to landmark
    // Convert structure position to world position based on landmark orientation
    const normalizedLandmarkDir = landmarkPosition.clone().normalize()

    // Create a rotation matrix to orient the structure to the planet surface
    const upVector = new THREE.Vector3(0, 1, 0)
    const quaternion = new THREE.Quaternion().setFromUnitVectors(upVector, normalizedLandmarkDir)

    // Create a basis for the landmark's local coordinate system
    const matrix = new THREE.Matrix4().makeRotationFromQuaternion(quaternion)

    // Apply structure's local position in the landmark's coordinate system
    // Add an offset in the normal direction to ensure structures appear above the surface
    const structureLocalPos = new THREE.Vector3(
      structure.position.x,
      structure.position.y + structure.scale.y * 0.5, // Add an offset to raise from surface
      structure.position.z,
    )
    structureLocalPos.applyMatrix4(matrix)

    // Scale the local position based on planet radius (smaller factor for better visibility)
    const scaledLocalPos = structureLocalPos.clone().multiplyScalar(0.05 * planetRadius)

    // Final position is the landmark position plus the transformed local position
    const position = landmarkPosition.clone().add(scaledLocalPos)

    // Apply structure's rotation
    // First apply the surface alignment rotation, then the structure's own rotation
    const structureRotation = new THREE.Euler(
      structure.rotation.x * Math.PI,
      structure.rotation.y * Math.PI,
      structure.rotation.z * Math.PI,
    )
    const structureQuaternion = new THREE.Quaternion().setFromEuler(new THREE.Euler().copy(structureRotation))
    quaternion.multiply(structureQuaternion)

    // Calculate scale - adjust based on planet radius
    const scale = new THREE.Vector3(
      structure.scale.x * planetRadius * 0.05,
      structure.scale.y * planetRadius * 0.05,
      structure.scale.z * planetRadius * 0.05,
    )

    return {
      geometry,
      material,
      position,
      quaternion,
      scale,
    }
  }, [structure, landmarkPosition, planetRadius])

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      material={material}
      position={[position.x, position.y, position.z]}
      scale={[scale.x, scale.y, scale.z]}
      quaternion={quaternion}
    />
  )
}
