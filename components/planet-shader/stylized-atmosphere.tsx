"use client"

import { useRef, useMemo, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"
import * as THREE from "three"
import type { PlanetStats } from "@/lib/planet-physics"
import { atmosphereVertexShader, atmosphereFragmentShader } from "./atmosphere-shader"

interface StylizedAtmosphereProps {
  planetStats: PlanetStats
}

export function StylizedAtmosphere({ planetStats }: StylizedAtmosphereProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.ShaderMaterial | null>(null)

  // Create the shader material
  const shaderMaterial = useMemo(() => {
    // Determine atmosphere color based on planet type and temperature
    let atmosphereColor = new THREE.Color(0x87ceeb) // Default blue atmosphere

    // For gas giants, use different colors
    if (planetStats.mass > 7 || planetStats.radius > 2.5) {
      if (planetStats.temperature < 200) {
        atmosphereColor = new THREE.Color(0x4682b4) // Steel blue for cold gas giants
      } else if (planetStats.temperature > 350) {
        atmosphereColor = new THREE.Color(0xffa07a) // Light salmon for hot gas giants
      } else {
        atmosphereColor = new THREE.Color(0xadd8e6) // Light blue for temperate gas giants
      }
    } else {
      // For terrestrial planets
      if (planetStats.temperature < 200) {
        atmosphereColor = new THREE.Color(0xb0c4de) // Light steel blue for cold planets
      } else if (planetStats.temperature > 350) {
        atmosphereColor = new THREE.Color(0xffb6c1) // Light pink for hot planets
      }

      // Adjust based on atmosphere composition
      if (planetStats.precipitationCompound === "co2") {
        atmosphereColor = new THREE.Color(0xd3d3d3) // Light gray for CO2 atmospheres
      } else if (planetStats.precipitationCompound === "methane") {
        atmosphereColor = new THREE.Color(0x9acd32) // Yellow green for methane atmospheres
      }
    }

    // Calculate atmosphere strength
    const strength = planetStats.atmosphereStrength !== undefined ? planetStats.atmosphereStrength : 0.8

    // Create the shader material
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color: { value: atmosphereColor },
        strength: { value: strength },
      },
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      transparent: true,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    materialRef.current = material
    return material
  }, [])

  // Update uniforms when planet stats change
  useEffect(() => {
    if (!materialRef.current) return

    // Determine atmosphere color based on planet type and temperature
    let atmosphereColor = new THREE.Color(0x87ceeb) // Default blue atmosphere

    // For gas giants, use different colors
    if (planetStats.mass > 7 || planetStats.radius > 2.5) {
      if (planetStats.temperature < 200) {
        atmosphereColor = new THREE.Color(0x4682b4) // Steel blue for cold gas giants
      } else if (planetStats.temperature > 350) {
        atmosphereColor = new THREE.Color(0xffa07a) // Light salmon for hot gas giants
      } else {
        atmosphereColor = new THREE.Color(0xadd8e6) // Light blue for temperate gas giants
      }
    } else {
      // For terrestrial planets
      if (planetStats.temperature < 200) {
        atmosphereColor = new THREE.Color(0xb0c4de) // Light steel blue for cold planets
      } else if (planetStats.temperature > 350) {
        atmosphereColor = new THREE.Color(0xffb6c1) // Light pink for hot planets
      }

      // Adjust based on atmosphere composition
      if (planetStats.precipitationCompound === "co2") {
        atmosphereColor = new THREE.Color(0xd3d3d3) // Light gray for CO2 atmospheres
      } else if (planetStats.precipitationCompound === "methane") {
        atmosphereColor = new THREE.Color(0x9acd32) // Yellow green for methane atmospheres
      }
    }

    // Calculate atmosphere strength
    const strength = planetStats.atmosphereStrength !== undefined ? planetStats.atmosphereStrength : 0.8

    // Update material uniforms
    materialRef.current.uniforms.color.value = atmosphereColor
    materialRef.current.uniforms.strength.value = strength
  }, [planetStats])

  // Update time uniform on each frame
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime
    }
  })

  // Calculate atmosphere scale based on planet type
  const atmosphereScale = useMemo(() => {
    // Gas giants have larger atmospheres
    if (planetStats.mass > 7 || planetStats.radius > 2.5) {
      return planetStats.radius * 1.15
    }
    // Terrestrial planets have smaller atmospheres
    return planetStats.radius * 1.08
  }, [planetStats.mass, planetStats.radius])

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]} scale={atmosphereScale}>
      <primitive object={shaderMaterial} attach="material" />
    </Sphere>
  )
}
