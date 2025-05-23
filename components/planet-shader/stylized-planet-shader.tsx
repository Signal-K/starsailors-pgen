"use client"

import { useRef, useMemo, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"
import * as THREE from "three"
import type { PlanetStats } from "@/lib/planet-physics"
import { getBiomeColors } from "@/lib/biome-data"
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

  // Update time uniform on each frame
  useFrame((state) => {
    if (meshRef.current && materialRef.current) {
      meshRef.current.rotation.y += 0.001
      materialRef.current.uniforms.time.value = state.clock.elapsedTime
    }
  })

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} scale={planetStats.radius}>
      <primitive object={shaderMaterial} attach="material" />
    </Sphere>
  )
}
