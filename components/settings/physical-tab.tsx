"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { type PlanetStats, determinePlanetType } from "@/lib/planet-physics"

interface PhysicalTabProps {
  planetStats: PlanetStats
  setPlanetStats: (stats: PlanetStats) => void
}

export function PhysicalTab({ planetStats, setPlanetStats }: PhysicalTabProps) {
  const planetType = determinePlanetType(planetStats.mass, planetStats.radius)

  // Update a single stat
  const updateStat = (key: keyof PlanetStats, value: any) => {
    setPlanetStats({
      ...planetStats,
      [key]: value,
    })
  }

  // Ensure values are numbers before using toFixed
  const massValue = typeof planetStats.mass === "number" ? planetStats.mass : Number(planetStats.mass) || 0
  const radiusValue = typeof planetStats.radius === "number" ? planetStats.radius : Number(planetStats.radius) || 0
  const densityValue = typeof planetStats.density === "number" ? planetStats.density : Number(planetStats.density) || 0

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800/70 border-slate-700/60 text-blue-100">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg tracking-wide">MASS PROPERTIES</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between">
              <Label className="text-cyan-200">Mass (Earth masses)</Label>
              <span className="font-bold">{massValue.toFixed(2)}</span>
            </div>
            <Slider
              value={[massValue]}
              min={0.1}
              max={15}
              step={0.1}
              onValueChange={(value) => updateStat("mass", value[0])}
              className="[&_[role=slider]]:bg-cyan-400"
            />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <Label className="text-cyan-200">Radius (Earth radii)</Label>
              <span className="font-bold">{radiusValue.toFixed(2)}</span>
            </div>
            <Slider
              value={[radiusValue]}
              min={0.1}
              max={10}
              step={0.1}
              onValueChange={(value) => updateStat("radius", value[0])}
              className="[&_[role=slider]]:bg-cyan-400"
            />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <Label className="text-cyan-200">Density (g/cm³)</Label>
              <span className="font-bold">{densityValue ? densityValue.toFixed(2) : "N/A"}</span>
            </div>
            <p className="text-xs text-slate-400">Calculated from mass and radius</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/70 border-slate-700/60 text-blue-100">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg tracking-wide">THERMAL PROPERTIES</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between">
              <Label className="text-cyan-200">Temperature (K)</Label>
              <span className="font-bold">
                {Number(planetStats.temperature)} K ({(Number(planetStats.temperature) - 273.15).toFixed(1)}°C)
              </span>
            </div>
            <Slider
              value={[Number(planetStats.temperature)]}
              min={50}
              max={700}
              step={1}
              onValueChange={(value) => updateStat("temperature", value[0])}
              className="[&_[role=slider]]:bg-cyan-400"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-800/70 border-slate-700/60 text-blue-100">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg tracking-wide">CLASSIFICATION</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="text-cyan-200">Planet Type</Label>
              <span className="text-sm capitalize font-bold">{planetType}</span>
            </div>
            <p className="text-xs text-slate-400">
              {planetType === "gaseous"
                ? "Gas giants have mass > 7 Earth masses or radius > 2.5 Earth radii"
                : "Terrestrial planets have smaller mass and radius"}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
