"use client"

import React, { useRef, useMemo, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"
import * as THREE from "three"
import type { PlanetStats } from "../../../lib/planet-physics"
import { getBiomeColors } from "../../../lib/biome-data"
import { stylizedVertexShader } from "./stylized-vertex-shader"
import { stylizedFragmentShader } from "./stylized-fragment-shader"

interface StylizedPlanetShaderProps {
  planetStats: PlanetStats
}

export function StylizedPlanetShader({ planetStats }: StylizedPlanetShaderProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.ShaderMaterial | null>(null)

  // Create the shader material
  const shaderMaterial = useMemo(() => {
    console.log("Creating new shader material with planet stats:", planetStats)

    // Get biome colors with fallbacks
    const biomeColors = planetStats.customColors || getBiomeColors(planetStats.biome || "Rocky Highlands")

    // Create the shader material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        oceanColor: { value: new THREE.Color(biomeColors.oceanFloor || "#1E4D6B") },
        beachColor: { value: new THREE.Color(biomeColors.beach || "#8D6E63") },
        landColor: { value: new THREE.Color(biomeColors.regular || "#A1887F") },
        mountainColor: { value: new THREE.Color(biomeColors.mountain || "#D7CCC8") },
        waterLevel: { value: planetStats.waterLevel || 0.65 },
        surfaceRoughness: { value: planetStats.surfaceRoughness || 0.5 },
        mountainHeight: { value: planetStats.mountainHeight || 0.6 },
        isGaseous: { value: planetStats.mass > 7 || planetStats.radius > 2.5 ? 1.0 : 0.0 },
        soilType: {
          value: ["rocky", "sandy", "volcanic", "organic", "dusty", "frozen", "muddy"].indexOf(
            planetStats.soilType || "rocky",
          ),
        },
        soilTexture: {
          value: ["smooth", "rough", "cracked", "layered", "porous", "grainy", "crystalline"].indexOf(
            planetStats.soilTexture || "rough",
          ),
        },
        liquidEnabled: { value: planetStats.liquidEnabled !== false ? 1.0 : 0.0 },
        landmarkPositions: { value: new Float32Array(30) },
        landmarkInfluences: { value: new Float32Array(40) },
        landmarkCount: { value: 0 },
      },
      vertexShader: stylizedVertexShader,
      fragmentShader: stylizedFragmentShader,
    })

    materialRef.current = material
    return material
  }, [])

  // Update uniforms when planet stats change
  useEffect(() => {
    if (!materialRef.current) return

    console.log("Updating shader uniforms with planet stats:", planetStats)

    // Get biome colors
    const biomeColors = planetStats.customColors || getBiomeColors(planetStats.biome || "Rocky Highlands")

    // Update material uniforms
    materialRef.current.uniforms.oceanColor.value = new THREE.Color(biomeColors.oceanFloor || "#1E4D6B")
    materialRef.current.uniforms.beachColor.value = new THREE.Color(biomeColors.beach || "#8D6E63")
    materialRef.current.uniforms.landColor.value = new THREE.Color(biomeColors.regular || "#A1887F")
    materialRef.current.uniforms.mountainColor.value = new THREE.Color(biomeColors.mountain || "#D7CCC8")
    materialRef.current.uniforms.waterLevel.value = planetStats.waterLevel || 0.65
    materialRef.current.uniforms.surfaceRoughness.value = planetStats.surfaceRoughness || 0.5
    materialRef.current.uniforms.mountainHeight.value = planetStats.mountainHeight || 0.6
    materialRef.current.uniforms.isGaseous.value = planetStats.mass > 7 || planetStats.radius > 2.5 ? 1.0 : 0.0
    materialRef.current.uniforms.soilType.value = [
      "rocky",
      "sandy",
      "volcanic",
      "organic",
      "dusty",
      "frozen",
      "muddy",
    ].indexOf(planetStats.soilType || "rocky")
    materialRef.current.uniforms.soilTexture.value = [
      "smooth",
      "rough",
      "cracked",
      "layered",
      "porous",
      "grainy",
      "crystalline",
    ].indexOf(planetStats.soilTexture || "rough")
    materialRef.current.uniforms.liquidEnabled.value = planetStats.liquidEnabled !== false ? 1.0 : 0.0
  }, [planetStats])

  // Update landmark uniforms when landmarks change
  useEffect(() => {
    if (!materialRef.current) return

    try {
      console.log("Processing landmarks:", planetStats.landmarks)

      // Check if landmarks exist and are valid
      if (!planetStats.landmarks || !Array.isArray(planetStats.landmarks) || planetStats.landmarks.length === 0) {
        materialRef.current.uniforms.landmarkCount.value = 0
        return
      }

      // Limit to 10 landmarks (shader array size limit)
      const landmarksToUse = planetStats.landmarks.slice(0, 10)

      // Create flat arrays for landmark positions and influences
      const positionsArray: number[] = []
      const influencesArray: number[] = []

      // Process each landmark
      for (let i = 0; i < landmarksToUse.length; i++) {
        const landmark = landmarksToUse[i]

        // Skip invalid landmarks
        if (!landmark || !landmark.coordinates) {
          console.warn("Invalid landmark found:", landmark)
          continue
        }

        // Extract coordinates with fallbacks
        const x = typeof landmark.coordinates.x === "number" ? landmark.coordinates.x : 0
        const y = typeof landmark.coordinates.y === "number" ? landmark.coordinates.y : 0
        const z = typeof landmark.coordinates.z === "number" ? landmark.coordinates.z : 0

        // Normalize position and add to positions array
        const pos = new THREE.Vector3(x, y, z).normalize()
        positionsArray.push(pos.x, pos.y, pos.z)

        // Map influence type to a number for the shader
        let typeValue = 1.0 // Default to mountain
        switch (landmark.influence_type) {
          case "crater":
            typeValue = 0.0
            break
          case "mountain":
            typeValue = 1.0
            break
          case "valley":
            typeValue = 2.0
            break
          case "volcano":
            typeValue = 3.0
            break
          case "glacier":
            typeValue = 4.0
            break
          case "basin":
            typeValue = 5.0
            break
          default:
            typeValue = 6.0 // Custom or other types
        }

        // Add influence values to the array with fallbacks
        // Use more conservative default values to prevent extreme terrain deformation
        influencesArray.push(
          typeof landmark.influence_radius === "number" ? Math.min(landmark.influence_radius, 0.5) : 0.3,
          typeof landmark.influence_strength === "number" ? Math.min(landmark.influence_strength, 0.7) : 0.4,
          typeof landmark.influence_roughness === "number" ? Math.min(landmark.influence_roughness, 0.5) : 0.3,
          typeValue,
        )
      }

      console.log("Landmark positions:", positionsArray)
      console.log("Landmark influences:", influencesArray)

      // Update shader uniforms with flat arrays
      materialRef.current.uniforms.landmarkPositions.value = new Float32Array(positionsArray)
      materialRef.current.uniforms.landmarkInfluences.value = new Float32Array(influencesArray)
      materialRef.current.uniforms.landmarkCount.value = positionsArray.length / 3 // Divide by 3 because each position is x,y,z
    } catch (error) {
      console.error("Error processing landmarks:", error)
      // Set safe defaults
      if (materialRef.current) {
        materialRef.current.uniforms.landmarkCount.value = 0
      }
    }
  }, [planetStats.landmarks])

  // Update time uniform on each frame
  useFrame((state) => {
    if (meshRef.current && materialRef.current) {
      meshRef.current.rotation.y += 0.001
      materialRef.current.uniforms.time.value = state.clock.elapsedTime
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 128, 128]} scale={planetStats.radius}>
      <primitive object={shaderMaterial} attach="material" />
    </Sphere>
  )
}
