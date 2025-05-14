"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../..//components/ui/card"
import { Label } from "../..//components/ui/label"
import { Input } from "../..//components/ui/input"
import { Button } from "../..//components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Palette } from "lucide-react"
import type { PlanetStats } from "../../../lib/planet-physics"
import { getAllBiomes } from "../../../lib/biome-data"

interface BiomeTabProps {
  planetStats: PlanetStats
  setPlanetStats: (stats: PlanetStats) => void
  selectedBiome: string
  setSelectedBiome: (biome: string) => void
  customColors: {
    oceanFloor: string
    beach: string
    regular: string
    mountain: string
  }
  setCustomColors: (colors: {
    oceanFloor: string
    beach: string
    regular: string
    mountain: string
  }) => void
}

export function BiomeTab({
  planetStats,
  setPlanetStats,
  selectedBiome,
  setSelectedBiome,
  customColors,
  setCustomColors,
}: BiomeTabProps) {
  const allBiomes = getAllBiomes()

  // Update custom colors
  const updateCustomColor = (type: string, color: string) => {
    const newCustomColors = { ...customColors, [type]: color }
    setCustomColors(newCustomColors)
    setPlanetStats({ ...planetStats, customColors: newCustomColors })
  }

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/70 border-slate-700/60 text-blue-100">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg tracking-wide">BIOME SELECTION</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Label className="text-cyan-200">Biome Type</Label>
            <Select value={selectedBiome} onValueChange={setSelectedBiome}>
              <SelectTrigger className="bg-slate-800 border-slate-600 text-blue-100">
                <SelectValue placeholder="Select biome" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-600 text-blue-100">
                {allBiomes.map((biome) => (
                  <SelectItem key={biome} value={biome}>
                    {biome}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-slate-400">
              Selecting a biome will adjust parameters to fit within biome ranges
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/70 border-slate-700/60 text-blue-100">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg tracking-wide">COLOR CUSTOMIZATION</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="text-cyan-200">Custom Colors</Label>
              <Palette className="h-4 w-4 text-cyan-300" />
            </div>
            <p className="text-xs text-slate-400 mb-2">Customize terrain colors for each height level</p>

            <div className="grid grid-cols-2 gap-3">
              {["oceanFloor", "beach", "regular", "mountain"].map((type) => (
                <React.Fragment key={type}>
                  <Label className="text-xs text-cyan-200">
                    {type.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                  </Label>
                  <Input
                    type="color"
                    value={customColors[type as keyof typeof customColors] || "#5D4037"}
                    onChange={(e) => updateCustomColor(type, e.target.value)}
                    className="h-8 p-1 bg-slate-800 border-slate-600"
                  />
                </React.Fragment>
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              className="mt-3 w-full border-slate-600 text-blue-100 hover:bg-cyan-900/20"
              onClick={() => setCustomColors({ oceanFloor: "", beach: "", regular: "", mountain: "" })}
            >
              Reset to Biome Default Colors
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
