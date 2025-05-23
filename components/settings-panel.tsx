"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, Download, Upload } from "lucide-react"
import {
  type PlanetStats,
  determinePlanetType,
  isLiquidAvailable,
  determineLiquidType,
  getBiomeColors,
  getParameterRange,
  biomeData,
} from "@/lib/planet-config"
import { parsePlanetConfig, generatePlanetConfig } from "@/lib/planet-parser"

interface SettingsPanelProps {
  planetStats: PlanetStats
  setPlanetStats: (stats: PlanetStats) => void
  classificationId?: string
  author?: string
}

export function SettingsPanel({
  planetStats,
  setPlanetStats,
  classificationId = "UNCLASSIFIED",
  author = "UNKNOWN",
}: SettingsPanelProps) {
  const [selectedBiome, setSelectedBiome] = useState(planetStats.biome || "Rocky Highlands")
  const [customColors, setCustomColors] = useState({
    oceanFloor: planetStats.customColors?.oceanFloor || "",
    beach: planetStats.customColors?.beach || "",
    regular: planetStats.customColors?.regular || "",
    mountain: planetStats.customColors?.mountain || "",
  })
  const [importText, setImportText] = useState("")
  const [exportText, setExportText] = useState("")

  // Update a single stat
  const updateStat = (key: keyof PlanetStats, value: any) => {
    setPlanetStats({
      ...planetStats,
      [key]: value,
    })
  }

  // Handle biome selection
  const handleBiomeChange = (biome: string) => {
    setSelectedBiome(biome)

    // Get biome colors
    const colors = getBiomeColors(biome)
    setCustomColors({
      oceanFloor: colors.oceanFloor,
      beach: colors.beach,
      regular: colors.regular,
      mountain: colors.mountain,
    })

    // Update planet stats with biome colors and parameters
    const surfaceRoughness = getParameterRange(biome, "surfaceRoughness")
    const waterLevel = getParameterRange(biome, "waterLevel")
    const atmosphereStrength = getParameterRange(biome, "atmosphereStrength")
    const cloudCount = getParameterRange(biome, "cloudCount")

    setPlanetStats({
      ...planetStats,
      biome,
      customColors: colors,
      surfaceRoughness: (surfaceRoughness[0] + surfaceRoughness[1]) / 2,
      waterLevel: (waterLevel[0] + waterLevel[1]) / 2,
      atmosphereStrength: (atmosphereStrength[0] + atmosphereStrength[1]) / 2,
      cloudCount: Math.floor((cloudCount[0] + cloudCount[1]) / 2),
    })
  }

  // Handle color change
  const handleColorChange = (colorKey: string, value: string) => {
    setCustomColors({
      ...customColors,
      [colorKey]: value,
    })

    setPlanetStats({
      ...planetStats,
      customColors: {
        ...planetStats.customColors,
        [colorKey]: value,
      },
    })
  }

  // Handle import
  const handleImport = () => {
    if (!importText.trim()) return

    try {
      const importedStats = parsePlanetConfig(importText)
      setPlanetStats(importedStats)

      // Update UI state
      setSelectedBiome(importedStats.biome || "Rocky Highlands")
      setCustomColors({
        oceanFloor: importedStats.customColors?.oceanFloor || "",
        beach: importedStats.customColors?.beach || "",
        regular: importedStats.customColors?.regular || "",
        mountain: importedStats.customColors?.mountain || "",
      })

      setImportText("")
    } catch (error) {
      console.error("Import error:", error)
    }
  }

  // Handle export
  const handleExport = () => {
    const configText = generatePlanetConfig(planetStats, { classificationId, author })
    setExportText(configText)
  }

  // Get parameter range for the current biome
  const getRange = (parameter: keyof any): [number, number] => {
    return getParameterRange(selectedBiome, parameter)
  }

  const planetType = determinePlanetType(planetStats.mass, planetStats.radius)
  const liquidInfo = determineLiquidType(planetStats.temperature)
  const liquidAvailable = isLiquidAvailable(planetStats.temperature, planetStats.liquidType || liquidInfo.type)

  // Ensure values are numbers before using toFixed
  const massValue = typeof planetStats.mass === "number" ? planetStats.mass : Number(planetStats.mass) || 0
  const radiusValue = typeof planetStats.radius === "number" ? planetStats.radius : Number(planetStats.radius) || 0
  const densityValue = typeof planetStats.density === "number" ? planetStats.density : Number(planetStats.density) || 0

  return (
    <div className="absolute top-0 left-0 h-full w-96 bg-slate-800/90 text-blue-100 p-6 overflow-y-auto font-mono border-r border-slate-600/60">
      <h2 className="text-2xl font-bold mb-6 tracking-wider border-b border-slate-600/60 pb-2">PLANET SETTINGS</h2>

      <Tabs defaultValue="physical" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 mb-6 bg-slate-700 border border-slate-600">
          <TabsTrigger value="physical" className="data-[state=active]:bg-cyan-800/40 data-[state=active]:text-cyan-50">
            PHYSICAL
          </TabsTrigger>
          <TabsTrigger value="surface" className="data-[state=active]:bg-cyan-800/40 data-[state=active]:text-cyan-50">
            SURFACE
          </TabsTrigger>
          <TabsTrigger value="biome" className="data-[state=active]:bg-cyan-800/40 data-[state=active]:text-cyan-50">
            BIOME
          </TabsTrigger>
          <TabsTrigger
            value="import-export"
            className="data-[state=active]:bg-cyan-800/40 data-[state=active]:text-cyan-50"
          >
            IMPORT/EXPORT
          </TabsTrigger>
        </TabsList>

        {/* Physical Tab */}
        <TabsContent value="physical">
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
        </TabsContent>

        {/* Surface Tab */}
        <TabsContent value="surface">
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
                </CardContent>
              </Card>
            )}

            {planetType === "terrestrial" && (
              <Card className="bg-slate-800/70 border-slate-700/60 text-blue-100">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg tracking-wide">HYDROSPHERE</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <Label className="text-cyan-200">Water Level</Label>
                      <span className="font-bold">{planetStats.waterLevel?.toFixed(2) || "0.00"}</span>
                    </div>
                    <Slider
                      value={[planetStats.waterLevel || 0]}
                      min={getRange("waterLevel")[0]}
                      max={getRange("waterLevel")[1]}
                      step={0.01}
                      onValueChange={(value) => updateStat("waterLevel", value[0])}
                      className="[&_[role=slider]]:bg-cyan-400"
                    />
                    {!liquidAvailable && (
                      <div className="flex items-center gap-2 text-amber-300 text-xs">
                        <AlertCircle className="h-4 w-4" />
                        <span>
                          Temperature is not suitable for {planetStats.liquidType || "water"} to exist as a liquid
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <Label className="text-cyan-200">Enable Liquid</Label>
                      <Switch
                        checked={planetStats.liquidEnabled !== false}
                        onCheckedChange={(checked) => updateStat("liquidEnabled", checked)}
                        className="data-[state=checked]:bg-cyan-600"
                      />
                    </div>
                    <p className="text-xs text-slate-400">
                      When enabled, liquid will cover areas below the water level
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-cyan-200">Liquid Type</Label>
                    <Select value={planetStats.liquidType} onValueChange={(value) => updateStat("liquidType", value)}>
                      <SelectTrigger className="bg-slate-800 border-slate-600 text-blue-100">
                        <SelectValue placeholder="Select liquid type" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600 text-blue-100">
                        {["water", "methane", "nitrogen", "ammonia", "ethane"].map((type) => (
                          <SelectItem key={type} value={type}>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            )}

            <Card className="bg-slate-800/70 border-slate-700/60 text-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg tracking-wide">ATMOSPHERE</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label className="text-cyan-200">Atmosphere Strength</Label>
                    <span className="font-bold">{planetStats.atmosphereStrength?.toFixed(2) || "0.00"}</span>
                  </div>
                  <Slider
                    value={[planetStats.atmosphereStrength || 0]}
                    min={getRange("atmosphereStrength")[0]}
                    max={getRange("atmosphereStrength")[1]}
                    step={0.01}
                    onValueChange={(value) => updateStat("atmosphereStrength", value[0])}
                    className="[&_[role=slider]]:bg-cyan-400"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label className="text-cyan-200">Cloud Count</Label>
                    <span className="font-bold">{planetStats.cloudCount || 0}</span>
                  </div>
                  <Slider
                    value={[planetStats.cloudCount || 0]}
                    min={getRange("cloudCount")[0]}
                    max={getRange("cloudCount")[1]}
                    step={1}
                    onValueChange={(value) => updateStat("cloudCount", value[0])}
                    className="[&_[role=slider]]:bg-cyan-400"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Biome Tab */}
        <TabsContent value="biome">
          <div className="space-y-6">
            <Card className="bg-slate-800/70 border-slate-700/60 text-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg tracking-wide">BIOME SELECTION</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Label className="text-cyan-200">Biome Type</Label>
                  <Select value={selectedBiome} onValueChange={handleBiomeChange}>
                    <SelectTrigger className="bg-slate-800 border-slate-600 text-blue-100">
                      <SelectValue placeholder="Select biome" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-600 text-blue-100">
                      {Object.keys(biomeData).map((biome) => (
                        <SelectItem key={biome} value={biome}>
                          {biome}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/70 border-slate-700/60 text-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg tracking-wide">COLOR CUSTOMIZATION</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Label className="text-cyan-200">Ocean Color</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={customColors.oceanFloor}
                      onChange={(e) => handleColorChange("oceanFloor", e.target.value)}
                      className="w-12 h-10 p-1 bg-transparent"
                    />
                    <Input
                      type="text"
                      value={customColors.oceanFloor}
                      onChange={(e) => handleColorChange("oceanFloor", e.target.value)}
                      className="flex-1 bg-slate-800 border-slate-600 text-blue-100"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-cyan-200">Beach Color</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={customColors.beach}
                      onChange={(e) => handleColorChange("beach", e.target.value)}
                      className="w-12 h-10 p-1 bg-transparent"
                    />
                    <Input
                      type="text"
                      value={customColors.beach}
                      onChange={(e) => handleColorChange("beach", e.target.value)}
                      className="flex-1 bg-slate-800 border-slate-600 text-blue-100"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-cyan-200">Land Color</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={customColors.regular}
                      onChange={(e) => handleColorChange("regular", e.target.value)}
                      className="w-12 h-10 p-1 bg-transparent"
                    />
                    <Input
                      type="text"
                      value={customColors.regular}
                      onChange={(e) => handleColorChange("regular", e.target.value)}
                      className="flex-1 bg-slate-800 border-slate-600 text-blue-100"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-cyan-200">Mountain Color</Label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={customColors.mountain}
                      onChange={(e) => handleColorChange("mountain", e.target.value)}
                      className="w-12 h-10 p-1 bg-transparent"
                    />
                    <Input
                      type="text"
                      value={customColors.mountain}
                      onChange={(e) => handleColorChange("mountain", e.target.value)}
                      className="flex-1 bg-slate-800 border-slate-600 text-blue-100"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Import/Export Tab */}
        <TabsContent value="import-export">
          <div className="space-y-6">
            <Card className="bg-slate-800/70 border-slate-700/60 text-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg tracking-wide">IMPORT CONFIGURATION</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Label className="text-cyan-200">Paste Configuration</Label>
                  <Textarea
                    value={importText}
                    onChange={(e) => setImportText(e.target.value)}
                    className="h-40 bg-slate-800 border-slate-600 text-blue-100 font-mono text-xs"
                    placeholder="Paste planet configuration here..."
                  />
                </div>
                <Button
                  onClick={handleImport}
                  className="w-full bg-cyan-700 hover:bg-cyan-600 text-white"
                  disabled={!importText.trim()}
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Import Configuration
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/70 border-slate-700/60 text-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg tracking-wide">EXPORT CONFIGURATION</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button onClick={handleExport} className="w-full bg-cyan-700 hover:bg-cyan-600 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Generate Export
                </Button>
                {exportText && (
                  <div className="space-y-3 mt-4">
                    <Label className="text-cyan-200">Configuration Export</Label>
                    <Textarea
                      value={exportText}
                      readOnly
                      className="h-40 bg-slate-800 border-slate-600 text-blue-100 font-mono text-xs"
                    />
                    <p className="text-xs text-slate-400">
                      Copy this configuration to save or share your planet design.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
