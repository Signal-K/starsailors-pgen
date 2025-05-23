"use client"

import { useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import { Cog } from "lucide-react"
import { Button } from "@/components/ui/button"
import { type PlanetStats, calculateDensity, defaultPlanetStats, mergeWithDefaults } from "@/lib/planet-config"
import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { PlanetRenderer } from "./planet-renderer"
import { SettingsPanel } from "./settings-panel"

export interface PlanetGeneratorProps {
  classificationId?: string
  author?: string
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
}: PlanetGeneratorProps) {
  const supabase = useSupabaseClient()
  const [showSettings, setShowSettings] = useState(false)
  const [planetStats, setPlanetStats] = useState<PlanetStats>(() => {
    const initialStats = planetConfiguration
      ? mergeWithDefaults(planetConfiguration)
      : {
          ...defaultPlanetStats,
          ...(biome ? { biome } : {}),
          ...(type ? { type } : {}),
        }

    return initialStats
  })

  // Update planet stats when configuration changes
  useEffect(() => {
    if (!planetConfiguration && !biome && !type) return

    const updatedStats = planetConfiguration
      ? mergeWithDefaults(planetConfiguration)
      : {
          ...defaultPlanetStats,
          ...(biome ? { biome } : {}),
          ...(type ? { type } : {}),
        }

    setPlanetStats(updatedStats)
  }, [planetConfiguration, biome, type])

  // Fetch exported values from Supabase
  useEffect(() => {
    const fetchExportedValues = async () => {
      if (!supabase) return

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

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Canvas for 3D rendering */}
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <color attach="background" args={["#020209"]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#b0c4de" />
        <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />

        <PlanetRenderer planetStats={planetStats} />

        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      </Canvas>

      {/* Settings button */}
      <div className="absolute top-4 right-4">
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
