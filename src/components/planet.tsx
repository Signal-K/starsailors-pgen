"use client";

import { useRef, useMemo, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import type { PlanetConfig } from "../utils/planet-config"
import { defaultPlanetConfig } from "../utils/planet-config"
import { vertexShader } from "../utils/shaders/vertex-shader"
import { fragmentShader } from "../utils/shaders/fragment-shader"

interface PlanetProps {
  config: PlanetConfig
};

export default function Planet({ config }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.ShaderMaterial | null>(null)
  const atmosphereRef = useRef<THREE.Mesh>(null)

  // Use default config as fallback if config is undefined
  const safeConfig = config || defaultPlanetConfig

  // Create shader material with uniforms based on planet config
  const shaderMaterial = useMemo(() => {
    if (!safeConfig || !safeConfig.colors) {
      return null
    }

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        time: { value: 0 },
        seed: { value: safeConfig.seed },
        radius: { value: safeConfig.radius },
        isGaseous: { value: safeConfig.type === "gaseous" ? 1.0 : 0.0 },
        surfaceRoughness: { value: safeConfig.terrainRoughness },
        liquidHeight: { value: safeConfig.liquidHeight },
        volcanicActivity: { value: safeConfig.volcanicActivity },
        temperature: { value: safeConfig.temperature },
        biomass: { value: safeConfig.biomass },
        continentSize: { value: safeConfig.continentSize },
        continentCount: { value: safeConfig.continentCount },
        noiseScale: { value: safeConfig.noiseScale },
        debugMode: { value: safeConfig.debugMode ? 1.0 : 0.0 },
        visibleTerrains: {
          value: new THREE.Vector4(
            safeConfig.visibleTerrains?.ocean ? 1.0 : 0.0,
            safeConfig.visibleTerrains?.beach ? 1.0 : 0.0,
            safeConfig.visibleTerrains?.lowland ? 1.0 : 0.0,
            safeConfig.visibleTerrains?.midland ? 1.0 : 0.0,
          ),
        },
        visibleTerrains2: {
          value: new THREE.Vector4(
            safeConfig.visibleTerrains?.highland ? 1.0 : 0.0,
            safeConfig.visibleTerrains?.mountain ? 1.0 : 0.0,
            safeConfig.visibleTerrains?.snow ? 1.0 : 0.0,
            0.0,
          ),
        },

        // Colors
        atmosphereColor: { value: new THREE.Color(safeConfig.colors.atmosphere) },
        oceanColor: { value: new THREE.Color(safeConfig.colors.ocean) },
        oceanPatternColor: { value: new THREE.Color(safeConfig.colors.oceanPattern) },
        beachColor: { value: new THREE.Color(safeConfig.colors.beach) },
        lowlandColor: { value: new THREE.Color(safeConfig.colors.lowland) },
        midlandColor: { value: new THREE.Color(safeConfig.colors.midland) },
        highlandColor: { value: new THREE.Color(safeConfig.colors.highland) },
        mountainColor: { value: new THREE.Color(safeConfig.colors.mountain) },
        snowColor: { value: new THREE.Color(safeConfig.colors.snow) },
      },
    })

    return material
  }, [safeConfig]) // Update when any config property changes

  // Set the material ref after the material is created
  useEffect(() => {
    if (shaderMaterial) {
      materialRef.current = shaderMaterial
    }
  }, [shaderMaterial])

  // Auto-rotate the planet and update time uniform
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001
    }

    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += 0.0005
    }

    if (materialRef.current) {
      // Only animate certain aspects with time
      materialRef.current.uniforms.time.value = state.clock.getElapsedTime()
    }
  })

  // Create planet mesh with appropriate geometry based on type
  if (!shaderMaterial) {
    return null
  }

  return (
    <group>
      <mesh ref={meshRef} scale={safeConfig.radius}>
        <sphereGeometry args={[1, 128, 128]} />
        <primitive object={shaderMaterial} attach="material" />
      </mesh>

      {/* Add atmosphere */}
      <mesh ref={atmosphereRef} scale={safeConfig.radius * (safeConfig.type === "gaseous" ? 1.15 : 1.05)}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color={safeConfig.colors.atmosphere}
          transparent={true}
          opacity={safeConfig.type === "gaseous" ? 0.7 : 0.3}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};