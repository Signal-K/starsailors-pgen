

import { useState, useEffect } from "react"
import type { PlanetConfig } from "../utils/planet-config"
import { getAutoType, simplePlanetPresets, getSimplifiedColors, updateFromSimplifiedColors } from "../utils/planet-config"
import { Slider } from "./ui/slider"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Download, Upload, RefreshCw } from "lucide-react"
import ColorPicker from "./ColorPicker"

interface SimplePlanetSettingsProps {
  planetConfig: PlanetConfig
  onChange: (config: Partial<PlanetConfig>) => void
}

export default function SimplePlanetSettings({ planetConfig, onChange }: SimplePlanetSettingsProps) {
  const [showImportExport, setShowImportExport] = useState(false)

  // Auto-update planet type based on mass and radius
  useEffect(() => {
    const autoType = getAutoType(planetConfig.mass, planetConfig.radius)
    if (autoType !== planetConfig.type) {
      onChange({ type: autoType })
    }
  }, [planetConfig.mass, planetConfig.radius])

  const regenerateSeed = () => {
    onChange({ seed: Math.floor(Math.random() * 10000) })
  }

  const loadPreset = (presetName: string) => {
    const preset = simplePlanetPresets[presetName]
    if (preset) {
      onChange(preset)
    }
  }

  // Get simplified colors for the interface
  const simplifiedColors = getSimplifiedColors(planetConfig)

  const handleColorChange = (colorType: "primary" | "secondary" | "accent", color: string) => {
    const newColors = { ...simplifiedColors, [colorType]: color }
    const colorUpdate = updateFromSimplifiedColors(planetConfig, newColors)
    onChange(colorUpdate)
  }

  const density = planetConfig.mass / ((planetConfig.radius ** 3 * Math.PI * 4) / 3)

  return (
    <div className="space-y-6 bg-slate-900 text-slate-100">
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowImportExport(!showImportExport)}
          className="flex items-center gap-2 bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700"
        >
          {showImportExport ? "Hide" : "Show"} Import/Export
          {showImportExport ? <Download className="h-4 w-4" /> : <Upload className="h-4 w-4" />}
        </Button>
      </div>

      {showImportExport && (
        <div className="p-4 bg-slate-800 rounded-md space-y-4 border border-slate-700">
          <h3 className="text-sm font-medium text-slate-200">Import/Export Configuration</h3>
          <div className="flex gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                const event = new CustomEvent("open-simple-import-dialog")
                window.dispatchEvent(event)
              }}
              className="flex-1 bg-slate-700 text-slate-200 hover:bg-slate-600"
            >
              Import
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                const event = new CustomEvent("open-simple-export-dialog")
                window.dispatchEvent(event)
              }}
              className="flex-1 bg-slate-700 text-slate-200 hover:bg-slate-600"
            >
              Export
            </Button>
          </div>
        </div>
      )}

      {/* Presets */}
      <div className="bg-slate-800 p-4 rounded-md border border-slate-700">
        <h3 className="text-sm font-medium mb-3 text-slate-200">Presets</h3>
        <Select onValueChange={loadPreset}>
          <SelectTrigger className="bg-slate-700 border-slate-600">
            <SelectValue placeholder="Load a preset..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="earth">Earth-like</SelectItem>
            <SelectItem value="mars">Mars-like</SelectItem>
            <SelectItem value="venus">Venus-like</SelectItem>
            <SelectItem value="jupiter">Jupiter-like</SelectItem>
            <SelectItem value="neptune">Neptune-like</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Planet Type */}
      <div className="bg-slate-800 p-4 rounded-md border border-slate-700">
        <h3 className="text-sm font-medium mb-3 text-slate-200">Planet Type</h3>
        <div className="flex gap-2">
          <Button
            variant={planetConfig.type === "terrestrial" ? "default" : "outline"}
            size="sm"
            onClick={() => onChange({ type: "terrestrial" })}
            className="flex-1"
          >
            Terrestrial
          </Button>
          <Button
            variant={planetConfig.type === "gaseous" ? "default" : "outline"}
            size="sm"
            onClick={() => onChange({ type: "gaseous" })}
            className="flex-1"
          >
            Gaseous
          </Button>
        </div>
        {(planetConfig.mass > 7.5 || planetConfig.radius > 2.5) && (
          <p className="text-xs text-amber-400 mt-2">Note: High mass or radius automatically sets this to gaseous</p>
        )}
      </div>

      {/* Basic Properties */}
      <div className="bg-slate-800 p-4 rounded-md space-y-4 border border-slate-700">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium text-slate-200">Seed: {planetConfig.seed}</h3>
          <Button variant="outline" size="icon" onClick={regenerateSeed} className="bg-slate-700 border-slate-600">
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="radius" className="text-slate-200">
              Radius (Earth radii)
            </Label>
            <span className="text-sm text-slate-400">{planetConfig.radius.toFixed(1)}</span>
          </div>
          <Slider
            id="radius"
            min={0.3}
            max={5}
            step={0.1}
            value={[planetConfig.radius]}
            onValueChange={(value) => onChange({ radius: value[0] })}
            className="[&_[role=slider]]:bg-slate-200"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="mass" className="text-slate-200">
              Mass (Earth masses)
            </Label>
            <span className="text-sm text-slate-400">{planetConfig.mass.toFixed(1)} M⊕</span>
          </div>
          <Slider
            id="mass"
            min={0.1}
            max={10}
            step={0.1}
            value={[planetConfig.mass]}
            onValueChange={(value) => onChange({ mass: value[0] })}
            className="[&_[role=slider]]:bg-slate-200"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="temperature" className="text-slate-200">
              Temperature
            </Label>
            <span className="text-sm text-slate-400">
              {planetConfig.temperature.toFixed(0)}K ({(planetConfig.temperature - 273.15).toFixed(0)}°C)
            </span>
          </div>
          <Slider
            id="temperature"
            min={50}
            max={700}
            step={5}
            value={[planetConfig.temperature]}
            onValueChange={(value) => onChange({ temperature: value[0] })}
            className="[&_[role=slider]]:bg-slate-200"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="biomass" className="text-slate-200">
              Biomass
            </Label>
            <span className="text-sm text-slate-400">{planetConfig.biomass.toFixed(2)}</span>
          </div>
          <Slider
            id="biomass"
            min={0}
            max={1}
            step={0.1}
            value={[planetConfig.biomass]}
            onValueChange={(value) => onChange({ biomass: value[0] })}
            className="[&_[role=slider]]:bg-slate-200"
          />
        </div>

        <div className="pt-2 border-t border-slate-700">
          <div className="flex justify-between">
            <Label className="text-slate-200">Density</Label>
            <span className="text-sm text-slate-400">{density.toFixed(2)} g/cm³</span>
          </div>
        </div>
      </div>

      {/* Simplified Colors */}
      <div className="bg-slate-800 p-4 rounded-md space-y-4 border border-slate-700">
        <h3 className="text-sm font-medium text-slate-200">Colors</h3>
        <div className="space-y-4">
          <ColorPicker
            label={planetConfig.type === "gaseous" ? "Atmosphere" : "Ocean/Water"}
            color={simplifiedColors.primary}
            onChange={(color) => handleColorChange("primary", color)}
          />
          <ColorPicker
            label={planetConfig.type === "gaseous" ? "Bands" : "Land/Vegetation"}
            color={simplifiedColors.secondary}
            onChange={(color) => handleColorChange("secondary", color)}
          />
          <ColorPicker
            label={planetConfig.type === "gaseous" ? "Storms" : "Mountains/Highlands"}
            color={simplifiedColors.accent}
            onChange={(color) => handleColorChange("accent", color)}
          />
        </div>
      </div>
    </div>
  )
};