"use client"

import * as THREE from "three"
import type { LandmarkStructure } from "@/lib/planet-physics"

// Basic structure types
export const structureTypes = [
  "building",
  "tower",
  "dome",
  "pyramid",
  "antenna",
  "platform",
  "bridge",
  "monument",
  "sphere",
  "cylinder",
  "cube",
  "ring",
  "dish",
  "custom",
]

// Structure type display names
export function getStructureTypeName(type: string): string {
  const nameMap: Record<string, string> = {
    building: "Building",
    tower: "Tower",
    dome: "Dome",
    pyramid: "Pyramid",
    antenna: "Antenna",
    platform: "Platform",
    bridge: "Bridge",
    monument: "Monument",
    sphere: "Sphere",
    cylinder: "Cylinder",
    cube: "Cube",
    ring: "Ring",
    dish: "Satellite Dish",
    custom: "Custom Shape",
  }

  return nameMap[type] || type.charAt(0).toUpperCase() + type.slice(1).replace(/_/g, " ")
}

// Generate a unique structure ID
export function generateStructureId(): string {
  return `STR-${Math.floor(Math.random() * 900 + 100)}`
}

// Create a default structure based on type
export function createDefaultStructure(type: string): LandmarkStructure {
  const baseStructure: LandmarkStructure = {
    id: generateStructureId(),
    type,
    name: getStructureTypeName(type),
    scale: { x: 1, y: 1, z: 1 },
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    color: "#ffffff",
    roughness: 0.5,
    metalness: 0.2,
  }

  // Customize based on type
  switch (type) {
    case "building":
      return {
        ...baseStructure,
        scale: { x: 0.05, y: 0.1, z: 0.05 },
        color: "#a0a0a0",
      }
    case "tower":
      return {
        ...baseStructure,
        scale: { x: 0.03, y: 0.15, z: 0.03 },
        color: "#707070",
      }
    case "dome":
      return {
        ...baseStructure,
        scale: { x: 0.08, y: 0.04, z: 0.08 },
        color: "#a0c0e0",
        metalness: 0.3,
        roughness: 0.2,
      }
    case "pyramid":
      return {
        ...baseStructure,
        scale: { x: 0.08, y: 0.06, z: 0.08 },
        color: "#d0c090",
      }
    case "antenna":
      return {
        ...baseStructure,
        scale: { x: 0.01, y: 0.2, z: 0.01 },
        color: "#c0c0c0",
        metalness: 0.7,
        roughness: 0.3,
      }
    case "platform":
      return {
        ...baseStructure,
        scale: { x: 0.1, y: 0.01, z: 0.1 },
        color: "#808080",
      }
    case "bridge":
      return {
        ...baseStructure,
        scale: { x: 0.1, y: 0.02, z: 0.03 },
        color: "#909090",
      }
    case "monument":
      return {
        ...baseStructure,
        scale: { x: 0.04, y: 0.12, z: 0.04 },
        color: "#e0e0e0",
      }
    case "sphere":
      return {
        ...baseStructure,
        scale: { x: 0.05, y: 0.05, z: 0.05 },
        color: "#e0e0e0",
        metalness: 0.5,
        roughness: 0.2,
      }
    case "cylinder":
      return {
        ...baseStructure,
        scale: { x: 0.04, y: 0.08, z: 0.04 },
        color: "#b0b0b0",
      }
    case "cube":
      return {
        ...baseStructure,
        scale: { x: 0.05, y: 0.05, z: 0.05 },
        color: "#c0c0c0",
      }
    case "ring":
      return {
        ...baseStructure,
        scale: { x: 0.08, y: 0.01, z: 0.08 },
        color: "#d0d0d0",
        metalness: 0.6,
      }
    case "dish":
      return {
        ...baseStructure,
        scale: { x: 0.06, y: 0.02, z: 0.06 },
        color: "#e0e0e0",
        metalness: 0.7,
        roughness: 0.2,
      }
    default:
      return baseStructure
  }
}

// Get the geometry for a structure based on its type
export function getStructureGeometry(type: string): THREE.BufferGeometry {
  switch (type) {
    case "building":
      return new THREE.BoxGeometry(1, 1, 1)
    case "tower":
      return new THREE.CylinderGeometry(0.5, 0.7, 1, 8)
    case "dome":
      return new THREE.SphereGeometry(0.5, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2)
    case "pyramid":
      return new THREE.ConeGeometry(0.7, 1, 4)
    case "antenna":
      return new THREE.CylinderGeometry(0.1, 0.2, 1, 8)
    case "platform":
      return new THREE.BoxGeometry(1, 0.1, 1)
    case "bridge":
      return new THREE.BoxGeometry(1, 0.2, 0.3)
    case "monument":
      return new THREE.CylinderGeometry(0.3, 0.5, 1, 8)
    case "sphere":
      return new THREE.SphereGeometry(0.5, 16, 16)
    case "cylinder":
      return new THREE.CylinderGeometry(0.5, 0.5, 1, 16)
    case "cube":
      return new THREE.BoxGeometry(1, 1, 1)
    case "ring":
      return new THREE.TorusGeometry(0.5, 0.1, 8, 24)
    case "dish":
      return new THREE.SphereGeometry(0.5, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2)
    default:
      return new THREE.BoxGeometry(1, 1, 1)
  }
}

// Create a material for a structure
export function createStructureMaterial(structure: LandmarkStructure): THREE.Material {
  const material = new THREE.MeshStandardMaterial({
    color: new THREE.Color(structure.color || "#ffffff"),
    roughness: structure.roughness !== undefined ? structure.roughness : 0.5,
    metalness: structure.metalness !== undefined ? structure.metalness : 0.2,
    transparent: structure.opacity !== undefined && structure.opacity < 1,
    opacity: structure.opacity !== undefined ? structure.opacity : 1,
    wireframe: structure.wireframe || false,
  })

  // Add emissive properties if specified
  if (structure.emissive && structure.emissiveIntensity) {
    material.emissive = new THREE.Color(structure.emissive)
    material.emissiveIntensity = structure.emissiveIntensity
  }

  return material
}
