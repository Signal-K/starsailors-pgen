"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"
import * as THREE from "three"
import type { PlanetStats } from "@/lib/planet-physics"
import { getBiomeColors } from "@/lib/biome-data"
import { planetVertexShader } from "./planet-vertex-shader"
import { planetFragmentShader } from "./planet-fragment-shader"
import { atmosphereVertexShader, atmosphereFragmentShader } from "./atmosphere-shader"
import { cloudVertexShader, cloudFragmentShader } from "./cloud-shader"

interface PlanetShaderProps {
  planetStats: PlanetStats
}

export function PlanetShader({ planetStats }: PlanetShaderProps) {
  const planetRef = useRef<THREE.Mesh>(null)
  const atmosphereRef = useRef<THREE.Mesh>(null)
  const cloudsRef = useRef<THREE.Mesh>(null)

  const { planetMaterial, atmosphereMaterial, cloudsMaterial } = useMemo(() => {
    // Get biome colors
    const biomeColors = planetStats.customColors || getBiomeColors(planetStats.biome || "Rocky Highlands")

    // Create planet shader material
    const planetShader = new THREE.ShaderMaterial({
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
      vertexShader: planetVertexShader,
      fragmentShader: planetFragmentShader,
    })

    // Create atmosphere shader
    const atmosphereShader = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: new THREE.Color(0x87ceeb) },
        strength: { value: planetStats.atmosphereStrength || 0.8 },
      },
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    })

    // Create cloud shader
    const cloudShader = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        cloudCount: { value: planetStats.cloudCount || 30 },
      },
      vertexShader: cloudVertexShader,
      fragmentShader: cloudFragmentShader,
      transparent: true,
      depthWrite: false,
    })

    return {
      planetMaterial: planetShader,
      atmosphereMaterial: atmosphereShader,
      cloudsMaterial: cloudShader,
    }
  }, [planetStats])

  // Update uniforms on each frame
  useFrame((state) => {
    if (planetRef.current) {
      planetRef.current.rotation.y += 0.001
      planetMaterial.uniforms.time.value = state.clock.elapsedTime
    }

    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += 0.0005
      atmosphereMaterial.uniforms.time.value = state.clock.elapsedTime
    }

    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.0012
      cloudsMaterial.uniforms.time.value = state.clock.elapsedTime
    }
  })

  const isGaseous = planetStats.mass > 7 || planetStats.radius > 2.5
  const showClouds = !isGaseous && planetStats.cloudCount && planetStats.cloudCount > 0

  return (
    <>
      <Sphere ref={planetRef} args={[1, 128, 128]} scale={planetStats.radius}>
        <primitive object={planetMaterial} attach="material" />
      </Sphere>

      <Sphere ref={atmosphereRef} args={[1.1, 64, 64]} scale={planetStats.radius}>
        <primitive object={atmosphereMaterial} attach="material" />
      </Sphere>

      {showClouds && (
        <Sphere ref={cloudsRef} args={[1.02, 64, 64]} scale={planetStats.radius}>
          <primitive object={cloudsMaterial} attach="material" />
        </Sphere>
      )}
    </>
  )
}
