"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import type { PlanetStats } from "@/lib/planet-physics"

interface PlanetPresetSelectorProps {
  onSelectPreset: (preset: string) => void
  currentPlanetStats: PlanetStats
}

export function PlanetPresetSelector({ onSelectPreset, currentPlanetStats }: PlanetPresetSelectorProps) {
  const [presets, setPresets] = useState<string[]>([])
  const [selectedPreset, setSelectedPreset] = useState<string>("")
  const [presetContent, setPresetContent] = useState<string>("")

  // Load available presets
  useEffect(() => {
    const availablePresets = ["earth", "tatooine", "kamino", "mustafar", "hoth", "bespin", "naboo"]
    setPresets(availablePresets)
  }, [])

  // Load preset content when selected
  const handlePresetChange = async (value: string) => {
    setSelectedPreset(value)

    try {
      // In a real app, this would fetch from the server
      // For this demo, we'll simulate it
      const response = await fetch(`/planet-presets/${value}.txt`)
      const content = await response.text()
      setPresetContent(content)
    } catch (error) {
      console.error("Error loading preset:", error)
      setPresetContent("")
    }
  }

  // Apply the selected preset
  const applyPreset = () => {
    if (selectedPreset && presetContent) {
      onSelectPreset(presetContent)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Planet Presets</CardTitle>
        <CardDescription>Select a preset planet configuration</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="preset-select">Select Preset</Label>
          <Select onValueChange={handlePresetChange} value={selectedPreset}>
            <SelectTrigger id="preset-select">
              <SelectValue placeholder="Select a planet preset" />
            </SelectTrigger>
            <SelectContent>
              {presets.map((preset) => (
                <SelectItem key={preset} value={preset}>
                  {preset.charAt(0).toUpperCase() + preset.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {presetContent && (
          <div className="space-y-2">
            <Label>Preset Configuration</Label>
            <pre className="bg-slate-100 p-2 rounded text-xs overflow-auto max-h-40">{presetContent}</pre>
          </div>
        )}

        <Button onClick={applyPreset} disabled={!selectedPreset}>
          Apply Preset
        </Button>
      </CardContent>
    </Card>
  )
}
