"use client"

import * as THREE from "three"
import type { LandmarkStructure } from "@/lib/planet-physics"
import { generateStructureId } from "./structure-types"
import { BufferGeometryUtils } from "three/examples/jsm/utils/BufferGeometryUtils.js"

/**
 * STRUCTURE TYPE TEMPLATE
 *
 * This file serves as a template for creating new structure types.
 * Follow these steps to add a new structure type:
 *
 * 1. Add your new structure type to the structureTypes array in structure-types.ts
 *
 * 2. Add a display name for your type in getStructureTypeName() in structure-types.ts
 *
 * 3. Add default values for your structure type in createDefaultStructure() in structure-types.ts
 *
 * 4. Create a custom geometry function in this file and export it
 *
 * 5. Add your custom geometry to the getStructureGeometry() function in structure-types.ts
 */

// Example of a new structure type: "pyramid_complex"

// 1. Add to structureTypes array in structure-types.ts
// export const structureTypes = [...existing types..., "pyramid_complex"]

// 2. Add display name in getStructureTypeName() in structure-types.ts
// pyramid_complex: "Pyramid Complex",

// 3. Add default values in createDefaultStructure() in structure-types.ts
export function createPyramidComplexDefaults(): LandmarkStructure {
  return {
    id: generateStructureId(),
    type: "pyramid_complex",
    name: "Pyramid Complex",
    scale: { x: 0.1, y: 0.08, z: 0.1 },
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    color: "#d0c090",
    roughness: 0.7,
    metalness: 0.1,
  }
}

// 4. Create a custom geometry function
export function createPyramidComplexGeometry(): THREE.BufferGeometry {
  // Create a group of pyramids
  const geometry = new THREE.BufferGeometry()

  // Create main pyramid
  const mainPyramid = new THREE.ConeGeometry(0.7, 1, 4)
  mainPyramid.translate(0, 0.5, 0)

  // Create smaller pyramids
  const smallPyramid1 = new THREE.ConeGeometry(0.3, 0.4, 4)
  smallPyramid1.translate(0.5, 0.2, 0.5)

  const smallPyramid2 = new THREE.ConeGeometry(0.3, 0.4, 4)
  smallPyramid2.translate(-0.5, 0.2, 0.5)

  const smallPyramid3 = new THREE.ConeGeometry(0.3, 0.4, 4)
  smallPyramid3.translate(0.5, 0.2, -0.5)

  const smallPyramid4 = new THREE.ConeGeometry(0.3, 0.4, 4)
  smallPyramid4.translate(-0.5, 0.2, -0.5)

  // Create base platform
  const platform = new THREE.BoxGeometry(2, 0.1, 2)
  platform.translate(0, -0.05, 0)

  // Merge geometries
  const mergedGeometry = BufferGeometryUtils.mergeBufferGeometries([
    mainPyramid,
    smallPyramid1,
    smallPyramid2,
    smallPyramid3,
    smallPyramid4,
    platform,
  ])

  return mergedGeometry
}

// 5. Add to getStructureGeometry() in structure-types.ts
// case "pyramid_complex":
//   return createPyramidComplexGeometry()

/**
 * EXAMPLE: Adding a new structure type: "space_station"
 */

export function createSpaceStationDefaults(): LandmarkStructure {
  return {
    id: generateStructureId(),
    type: "space_station",
    name: "Space Station",
    scale: { x: 0.08, y: 0.08, z: 0.08 },
    position: { x: 0, y: 0.1, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    color: "#e0e0e0",
    roughness: 0.3,
    metalness: 0.8,
    emissive: "#4080ff",
    emissiveIntensity: 0.3,
  }
}

export function createSpaceStationGeometry(): THREE.BufferGeometry {
  // This is a placeholder - in a real implementation, you would create
  // a more complex geometry for a space station
  const geometry = new THREE.BufferGeometry()

  // Create central hub
  const centralHub = new THREE.SphereGeometry(0.5, 16, 16)

  // Create connecting tubes
  const tube1 = new THREE.CylinderGeometry(0.1, 0.1, 1.5, 8)
  tube1.rotateZ(Math.PI / 2)
  tube1.translate(0.75, 0, 0)

  const tube2 = new THREE.CylinderGeometry(0.1, 0.1, 1.5, 8)
  tube2.rotateZ(-Math.PI / 2)
  tube2.translate(-0.75, 0, 0)

  // Create outer modules
  const module1 = new THREE.CylinderGeometry(0.3, 0.3, 0.8, 16)
  module1.rotateZ(Math.PI / 2)
  module1.translate(1.5, 0, 0)

  const module2 = new THREE.CylinderGeometry(0.3, 0.3, 0.8, 16)
  module2.rotateZ(Math.PI / 2)
  module2.translate(-1.5, 0, 0)

  // Create solar panels
  const panel1 = new THREE.BoxGeometry(0.05, 1, 0.5)
  panel1.translate(1.5, 0.5, 0)

  const panel2 = new THREE.BoxGeometry(0.05, 1, 0.5)
  panel2.translate(1.5, -0.5, 0)

  const panel3 = new THREE.BoxGeometry(0.05, 1, 0.5)
  panel3.translate(-1.5, 0.5, 0)

  const panel4 = new THREE.BoxGeometry(0.05, 1, 0.5)
  panel4.translate(-1.5, -0.5, 0)

  // Merge geometries
  // Note: In a real implementation, you would need to import BufferGeometryUtils
  const mergedGeometry = BufferGeometryUtils.mergeBufferGeometries([
    centralHub,
    tube1,
    tube2,
    module1,
    module2,
    panel1,
    panel2,
    panel3,
    panel4,
  ])

  // For now, just return the central hub as a placeholder
  return mergedGeometry
}
