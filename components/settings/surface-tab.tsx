"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { type PlanetStats, determinePlanetType, isLiquidAvailable, determineLiquidType } from "@/lib/planet-physics"
import { getParameterRange } from "@/lib/biome-data"

interface SurfaceTabProps {
  planetStats: PlanetStats
  setPlanetStats: (stats: PlanetStats) => void
  selectedBiome: string
}

export function SurfaceTab({ planetStats, setPlanetStats, selectedBiome }: SurfaceTabProps) {
  const planetType = determinePlanetType(planetStats.mass, planetStats.radius)
  const liquidInfo = determineLiquidType(planetStats.temperature)
  const liquidAvailable = isLiquidAvailable(planetStats.temperature, planetStats.liquidType || liquidInfo.type)

  // Update a single stat
  const updateStat = (key: keyof PlanetStats, value: any) => {
    setPlanetStats({
      ...planetStats,
      [key]: value,
      ...(key === "liquidEnabled" && value === true ? { waterLevel: Math.max(planetStats.waterLevel || 0, 0.5) } : {}),
    })
  }

  // Get parameter range for the current biome
  const getRange = (parameter: keyof any): [number, number] => {
    return getParameterRange(selectedBiome, parameter)
  }

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/70 border-slate-700/60 text-blue-100">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg tracking-wide">SURFACE CONFIGURATION</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between">
              <Label className="text-cyan-200">Surface Roughness</Label>
              <span className="font-bold">{planetStats.surfaceRoughness?.toFixed(2) || "0.00"}</span>
            </div>
            <Slider
              value={[planetStats.surfaceRoughness || 0]}
              min={getRange("surfaceRoughness")[0]}
              max={getRange("surfaceRoughness")[1]}
              step={0.01}
              onValueChange={(value) => updateStat("surfaceRoughness", value[0])}
              className="[&_[role=slider]]:bg-cyan-400"
            />
          </div>
        </CardContent>
      </Card>

      {planetType === "terrestrial" && (
        <Card className="bg-slate-800/70 border-slate-700/60 text-blue-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg tracking-wide">TERRAIN COMPOSITION</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <Label className="text-cyan-200">Soil Type</Label>
              <Select value={planetStats.soilType} onValueChange={(value) => updateStat("soilType", value)}>
                <SelectTrigger className="bg-slate-800 border-slate-600 text-blue-100">
                  <SelectValue placeholder="Select soil type" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-600 text-blue-100">
                  {["rocky", "sandy", "volcanic", "organic", "dusty", "frozen", "muddy"].map((type) => (
                    <SelectItem key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label className="text-cyan-200">Soil Texture</Label>
              <Select value={planetStats.soilTexture} onValueChange={(value) => updateStat("soilTexture", value)}>
                <SelectTrigger className="bg-slate-800 border-slate-600 text-blue-100">
                  <SelectValue placeholder="Select soil texture" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-600 text-blue-100">
                  {["smooth", "rough", "cracked", "layered", "porous", "grainy", "crystalline"].map((texture) => (
                    <SelectItem key={texture} value={texture}>
                      {texture.charAt(0).toUpperCase() + texture.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <Label className="text-cyan-200">Mountain Height</Label>
                <span className="font-bold">{planetStats.mountainHeight?.toFixed(2) || "0.00"}</span>
              </div>
              <Slider
                value={[planetStats.mountainHeight || 0]}
                min={0}
                max={1}
                step={0.01}
                onValueChange={(value) => updateStat("mountainHeight", value[0])}
                className="[&_[role=slider]]:bg-cyan-400"
              />
            </div>
          \
