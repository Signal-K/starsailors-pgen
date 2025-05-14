"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { PlanetStats } from "@/lib/planet-physics"
import { getParameterRange } from "@/lib/biome-data"

interface HiddenTabProps {
  planetStats: PlanetStats
  setPlanetStats: (stats: PlanetStats) => void
  selectedBiome: string
}

export function HiddenTab({ planetStats, setPlanetStats, selectedBiome }: HiddenTabProps) {
  // Update a single stat
  const updateStat = (key: keyof PlanetStats, value: any) => {
    setPlanetStats({
      ...planetStats,
      [key]: value,
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
          <CardTitle className="text-lg tracking-wide">HIDDEN SETTINGS</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="text-cyan-200">Has Rings</Label>
              <Switch
                checked={planetStats.hasRings}
                onCheckedChange={(checked) => updateStat("hasRings", checked)}
                className="data-[state=checked]:bg-cyan-600"
              />
            </div>
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

          <div className="space-y-3">
            <div className="flex justify-between">
              <Label className="text-cyan-200">Volcanic Activity</Label>
              <span className="font-bold">{planetStats.volcanicActivity?.toFixed(2) || "0.00"}</span>
            </div>
            <Slider
              value={[planetStats.volcanicActivity || 0]}
              min={getRange("volcanicActivity")[0]}
              max={getRange("volcanicActivity")[1]}
              step={0.01}
              onValueChange={(value) => updateStat("volcanicActivity", value[0])}
              className="[&_[role=slider]]:bg-cyan-400"
            />
          </div>

          <div className="space-y-3">
            <Label className="text-cyan-200">Surface Preset</Label>
            <Select
              onValueChange={(value) => {
                const presets = {
                  ocean: {
                    waterLevel: 0.95,
                    liquidType: "water",
                    atmosphereStrength: 0.8,
                    cloudCount: 70,
                    biomassLevel: 0.6,
                    surfaceRoughness: 0.3,
                    liquidEnabled: true,
                    customColors: {
                      oceanFloor: "#01579B",
                      beach: "#0288D1",
                      regular: "#29B6F6",
                      mountain: "#81D4FA",
                    },
                  },
                  desert: {
                    waterLevel: 0.1,
                    soilType: "dusty",
                    atmosphereStrength: 0.4,
                    cloudCount: 10,
                    biomassLevel: 0.05,
                    surfaceRoughness: 0.7,
                    temperature: 310,
                    liquidEnabled: false,
                  },
                  volcanic: {
                    waterLevel: 0.3,
                    soilType: "volcanic",
                    atmosphereStrength: 0.7,
                    cloudCount: 40,
                    biomassLevel: 0.1,
                    surfaceRoughness: 0.9,
                    volcanicActivity: 0.8,
                    temperature: 350,
                    liquidEnabled: true,
                  },
                }

                if (value !== "default") {
                  setPlanetStats({
                    ...planetStats,
                    ...presets[value as keyof typeof presets],
                  })
                }
              }}
            >
              <SelectTrigger className="bg-slate-800 border-slate-600 text-blue-100">
                <SelectValue placeholder="Select a preset" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-600 text-blue-100">
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="ocean">Oceanic World</SelectItem>
                <SelectItem value="desert">Desert World</SelectItem>
                <SelectItem value="volcanic">Volcanic World</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/70 border-slate-700/60 text-blue-100">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg tracking-wide">ADVANCED SETTINGS</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-slate-400">
            These settings have been hidden to simplify the main interface. Use them when you need more control over
            planet generation.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
