"use client"

import React, { useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars, Environment } from "@react-three/drei"
import { PlanetShader } from "./planet-shader"
import { SimplePlanet } from "./planet/simple-planet"
import { StylizedPlanetShader } from "./planet-shader/stylized-planet-shader"
import { StylizedClouds } from "./planet-shader/stylized-clouds-shader"
import { Planet } from "./planet/planet-main"
import { SettingsPanel } from "./settings-panel"
import { Cog, ChevronDown } from "lucide-react"
import { Button } from "../components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import {
  type PlanetStats,
  calculateDensity,
  defaultPlanetStats,
  mergeWithDefaults,
  generateDefaultLandmarks,
} from "../../lib/planet-physics";
import { useSupabaseClient } from "@supabase/auth-helpers-react"
// Import the StylizedAtmosphere component
import { StylizedAtmosphere } from "./planet-shader/stylized-atmosphere"

export interface PlanetGeneratorProps {
  classificationConfig?: any
  content?: string
  classificationId: string
  author: string
  type?: string
  biome?: string
  planetConfiguration?: any
}

export function PlanetGenerator({
  classificationId = "UNCLASSIFIED",
  author = "UNKNOWN",
  type,
  biome,
  planetConfiguration,
  classificationConfig,
  content,
}: PlanetGeneratorProps) {
  const supabase = useSupabaseClient()

  const [showSettings, setShowSettings] = useState(false)
  const [renderMode, setRenderMode] = useState<"detailed" | "simple" | "stylized" | "standard">("detailed")
  const [planetStats, setPlanetStats] = useState<PlanetStats>(() => {
    const initialStats = planetConfiguration
      ? mergeWithDefaults(planetConfiguration)
      : {
          ...defaultPlanetStats,
          ...(biome ? { biome } : {}),
          ...(type ? { type } : {}),
        }

    if (!initialStats.landmarks || initialStats.landmarks.length === 0) {
      initialStats.landmarks = generateDefaultLandmarks(initialStats)
    }

    return initialStats
  })

  // Update planet stats when configuration changes
  useEffect(() => {
    if (!planetConfiguration && !biome && !type) return // Skip if no new configs

    const updatedStats = planetConfiguration
      ? mergeWithDefaults(planetConfiguration)
      : {
          ...defaultPlanetStats,
          ...(biome ? { biome } : {}),
          ...(type ? { type } : {}),
        }

    if (!updatedStats.landmarks || !Array.isArray(updatedStats.landmarks) || updatedStats.landmarks.length === 0) {
      updatedStats.landmarks = generateDefaultLandmarks(updatedStats)
    }

    setPlanetStats(updatedStats)
  }, [planetConfiguration, biome, type])

  // Fetch exported values from Supabase
  useEffect(() => {
    const fetchExportedValues = async () => {
      if (!supabase) return // Skip if no supabase client

      const idAsNumber = Number.parseInt(classificationId)
      if (isNaN(idAsNumber)) return

      try {
        const { data, error } = await supabase
          .from("classifications")
          .select("classificationConfiguration")
          .eq("id", idAsNumber)
          .single()

        if (error || !data?.classificationConfiguration?.exportedValue) return

        const { exportedValue } = data.classificationConfiguration

        setPlanetStats((prev) => ({
          ...prev,
          ...(exportedValue.mass && { mass: exportedValue.mass }),
          ...(exportedValue.radius && { radius: exportedValue.radius }),
        }))
      } catch (error) {
        console.error("Error fetching exported values:", error)
      }
    }

    fetchExportedValues()
  }, [classificationId, supabase])

  // Update density when mass or radius changes
  useEffect(() => {
    setPlanetStats((prev) => ({
      ...prev,
      density: calculateDensity(prev.mass, prev.radius),
    }))
  }, [planetStats.mass, planetStats.radius])

  // Get render mode label
  const getRenderModeLabel = () => {
    switch (renderMode) {
      case "detailed":
        return "Detailed View"
      case "stylized":
        return "Stylized View"
      case "simple":
        return "Simple View"
      case "standard":
        return "Standard Render"
      default:
        return "Detailed View"
    }
  }

  // Add console logging for debugging
  useEffect(() => {
    console.log("Current planet stats:", planetStats)
    console.log("Current render mode:", renderMode)
  }, [planetStats, renderMode])

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Canvas for 3D rendering */}
      <Canvas key={renderMode} camera={{ position: [0, 0, 10], fov: 45 }}>
        <color attach="background" args={["#020209"]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#b0c4de" />
        <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
        <Environment preset="sunset" />

        {renderMode === "detailed" && <PlanetShader planetStats={planetStats} />}
        {renderMode === "stylized" && (
          <>
            <StylizedPlanetShader planetStats={planetStats} />
            <StylizedAtmosphere planetStats={planetStats} />
            {planetStats.cloudCount && planetStats.cloudCount > 0 && <StylizedClouds planetStats={planetStats} />}
          </>
        )}
        {renderMode === "simple" && <SimplePlanet planetStats={planetStats} />}
        {renderMode === "standard" && <Planet planetStats={planetStats} />}

        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
        <mesh position={[0, 0, -15]}>
          <sphereGeometry args={[5, 32, 32]} />
          <meshBasicMaterial color="#4060ff" transparent opacity={0.03} />
        </mesh>
      </Canvas>

      {/* UI Controls */}
      <div className="absolute top-4 right-4 flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="bg-black/50 hover:bg-black/70 text-white">
              {getRenderModeLabel()}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black/80 border-slate-700 text-white">
            <DropdownMenuItem
              className={renderMode === "detailed" ? "bg-cyan-900/40" : "hover:bg-slate-700/50"}
              onClick={() => setRenderMode("detailed")}
            >
              Detailed View
            </DropdownMenuItem>
            <DropdownMenuItem
              className={renderMode === "stylized" ? "bg-cyan-900/40" : "hover:bg-slate-700/50"}
              onClick={() => setRenderMode("stylized")}
            >
              Stylized View
            </DropdownMenuItem>
            <DropdownMenuItem
              className={renderMode === "simple" ? "bg-cyan-900/40" : "hover:bg-slate-700/50"}
              onClick={() => setRenderMode("simple")}
            >
              Simple View
            </DropdownMenuItem>
            <DropdownMenuItem
              className={renderMode === "standard" ? "bg-cyan-900/40" : "hover:bg-slate-700/50"}
              onClick={() => setRenderMode("standard")}
            >
              Standard Render
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant="outline"
          size="icon"
          className="bg-black/50 hover:bg-black/70 text-white"
          onClick={() => setShowSettings(!showSettings)}
        >
          <Cog className="h-4 w-4" />
        </Button>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <SettingsPanel
          planetStats={planetStats}
          setPlanetStats={setPlanetStats}
          classificationId={classificationId}
          author={author}
        />
      )}
    </div>
  )
}
