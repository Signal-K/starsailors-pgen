"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus, Trash2, Eye } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import type { LandmarkStructure, Landmark } from "@/lib/planet-physics"
import { structureTypes, getStructureTypeName, createDefaultStructure } from "./structure-types"
import { StructurePreview } from "./structure-preview"

interface StructureEditorProps {
  landmark: Landmark
  updateLandmark: (field: keyof Landmark, value: any) => void
}

export function StructureEditor({ landmark, updateLandmark }: StructureEditorProps) {
  const [selectedStructureIndex, setSelectedStructureIndex] = useState<number>(-1)
  const [newStructure, setNewStructure] = useState<LandmarkStructure>(createDefaultStructure("building"))

  const structures = landmark.structures || []

  // Add a new structure to the landmark
  const addStructure = () => {
    if (!newStructure.name) return

    const updatedStructures = [...structures, newStructure]
    updateLandmark("structures", updatedStructures)

    // Reset the form with a new default structure
    setNewStructure(createDefaultStructure("building"))
  }

  // Remove a structure from the landmark
  const removeStructure = (index: number) => {
    const updatedStructures = [...structures]
    updatedStructures.splice(index, 1)
    updateLandmark("structures", updatedStructures)

    // Reset selected structure if it was deleted
    if (selectedStructureIndex === index) {
      setSelectedStructureIndex(-1)
    } else if (selectedStructureIndex > index) {
      setSelectedStructureIndex(selectedStructureIndex - 1)
    }
  }

  // Update a structure property
  const updateStructure = (index: number, field: keyof LandmarkStructure, value: any) => {
    const updatedStructures = [...structures]

    if (field === "position" || field === "rotation" || field === "scale") {
      updatedStructures[index] = {
        ...updatedStructures[index],
        [field]: { ...updatedStructures[index][field as keyof LandmarkStructure], ...value },
      }
    } else {
      updatedStructures[index] = {
        ...updatedStructures[index],
        [field]: value,
      }
    }

    updateLandmark("structures", updatedStructures)
  }

  // Update new structure field
  const updateNewStructure = (field: keyof LandmarkStructure, value: any) => {
    if (field === "position" || field === "rotation" || field === "scale") {
      setNewStructure({
        ...newStructure,
        [field]: { ...newStructure[field as keyof LandmarkStructure], ...value },
      })
    } else {
      setNewStructure({
        ...newStructure,
        [field]: value,
      })
    }
  }

  // Update structure type and reset to default values for that type
  const updateStructureType = (type: string) => {
    setNewStructure(createDefaultStructure(type))
  }

  return (
    <div className="space-y-6">
      <Card className="bg-black/60 border-green-500/30 text-green-400">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg tracking-wide">STRUCTURES</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Label className="text-green-300">Current Structures</Label>
            {structures.length === 0 ? (
              <div className="text-center py-4 border border-dashed border-green-500/30 rounded-md">
                <p className="text-green-500/70">No structures added to this landmark</p>
              </div>
            ) : (
              <div className="space-y-3">
                {structures.map((structure, index) => (
                  <div
                    key={structure.id}
                    className={`border ${
                      selectedStructureIndex === index ? "border-green-400" : "border-green-500/30"
                    } rounded-md p-3 space-y-2`}
                    onClick={() => setSelectedStructureIndex(index)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-green-300">{structure.name}</span>
                        <span className="text-xs bg-green-900/50 text-green-300 px-1.5 py-0.5 rounded">
                          {getStructureTypeName(structure.type)}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedStructureIndex(index)
                          }}
                          className="h-6 w-6 p-0 text-green-400 hover:text-green-300 hover:bg-transparent"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            removeStructure(index)
                          }}
                          className="h-6 w-6 p-0 text-green-400 hover:text-red-400 hover:bg-transparent"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                      <span className="text-green-500/70">Type:</span>
                      <span>{getStructureTypeName(structure.type)}</span>
                      <span className="text-green-500/70">Color:</span>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: structure.color || "#ffffff" }}
                        ></div>
                        <span>{structure.color}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {selectedStructureIndex !== -1 && structures[selectedStructureIndex] && (
        <Card className="bg-black/60 border-green-500/30 text-green-400">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg tracking-wide">
              EDIT STRUCTURE: {structures[selectedStructureIndex].name}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs defaultValue="basic">
              <TabsList className="bg-black border border-green-500/30">
                <TabsTrigger
                  value="basic"
                  className="data-[state=active]:bg-green-900/20 data-[state=active]:text-green-300"
                >
                  BASIC
                </TabsTrigger>
                <TabsTrigger
                  value="position"
                  className="data-[state=active]:bg-green-900/20 data-[state=active]:text-green-300"
                >
                  POSITION
                </TabsTrigger>
                <TabsTrigger
                  value="appearance"
                  className="data-[state=active]:bg-green-900/20 data-[state=active]:text-green-300"
                >
                  APPEARANCE
                </TabsTrigger>
                <TabsTrigger
                  value="preview"
                  className="data-[state=active]:bg-green-900/20 data-[state=active]:text-green-300"
                >
                  PREVIEW
                </TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-green-300">Name</Label>
                    <Input
                      value={structures[selectedStructureIndex].name}
                      onChange={(e) => updateStructure(selectedStructureIndex, "name", e.target.value)}
                      className="bg-black border-green-500/30 text-green-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-green-300">Type</Label>
                    <Select
                      value={structures[selectedStructureIndex].type}
                      onValueChange={(value) => updateStructure(selectedStructureIndex, "type", value)}
                    >
                      <SelectTrigger className="bg-black border-green-500/30 text-green-400">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent className="bg-black border-green-500/30 text-green-400">
                        {structureTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {getStructureTypeName(type)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Label className="text-green-300">Description</Label>
                    <Input
                      value={structures[selectedStructureIndex].description || ""}
                      onChange={(e) => updateStructure(selectedStructureIndex, "description", e.target.value)}
                      className="bg-black border-green-500/30 text-green-400"
                      placeholder="Optional description"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="position" className="pt-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-green-300">Position</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="space-y-1">
                        <Label className="text-xs">X</Label>
                        <Input
                          type="number"
                          value={structures[selectedStructureIndex].position.x}
                          onChange={(e) =>
                            updateStructure(selectedStructureIndex, "position", {
                              x: Number.parseFloat(e.target.value),
                            })
                          }
                          className="bg-black border-green-500/30 text-green-400"
                          step="0.01"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">Y</Label>
                        <Input
                          type="number"
                          value={structures[selectedStructureIndex].position.y}
                          onChange={(e) =>
                            updateStructure(selectedStructureIndex, "position", {
                              y: Number.parseFloat(e.target.value),
                            })
                          }
                          className="bg-black border-green-500/30 text-green-400"
                          step="0.01"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">Z</Label>
                        <Input
                          type="number"
                          value={structures[selectedStructureIndex].position.z}
                          onChange={(e) =>
                            updateStructure(selectedStructureIndex, "position", {
                              z: Number.parseFloat(e.target.value),
                            })
                          }
                          className="bg-black border-green-500/30 text-green-400"
                          step="0.01"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-green-300">Rotation (turns)</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="space-y-1">
                        <Label className="text-xs">X</Label>
                        <Input
                          type="number"
                          value={structures[selectedStructureIndex].rotation.x}
                          onChange={(e) =>
                            updateStructure(selectedStructureIndex, "rotation", {
                              x: Number.parseFloat(e.target.value),
                            })
                          }
                          className="bg-black border-green-500/30 text-green-400"
                          step="0.1"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">Y</Label>
                        <Input
                          type="number"
                          value={structures[selectedStructureIndex].rotation.y}
                          onChange={(e) =>
                            updateStructure(selectedStructureIndex, "rotation", {
                              y: Number.parseFloat(e.target.value),
                            })
                          }
                          className="bg-black border-green-500/30 text-green-400"
                          step="0.1"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">Z</Label>
                        <Input
                          type="number"
                          value={structures[selectedStructureIndex].rotation.z}
                          onChange={(e) =>
                            updateStructure(selectedStructureIndex, "rotation", {
                              z: Number.parseFloat(e.target.value),
                            })
                          }
                          className="bg-black border-green-500/30 text-green-400"
                          step="0.1"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-green-300">Scale</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="space-y-1">
                        <Label className="text-xs">X</Label>
                        <Input
                          type="number"
                          value={structures[selectedStructureIndex].scale.x}
                          onChange={(e) =>
                            updateStructure(selectedStructureIndex, "scale", {
                              x: Number.parseFloat(e.target.value),
                            })
                          }
                          className="bg-black border-green-500/30 text-green-400"
                          step="0.01"
                          min="0.01"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">Y</Label>
                        <Input
                          type="number"
                          value={structures[selectedStructureIndex].scale.y}
                          onChange={(e) =>
                            updateStructure(selectedStructureIndex, "scale", {
                              y: Number.parseFloat(e.target.value),
                            })
                          }
                          className="bg-black border-green-500/30 text-green-400"
                          step="0.01"
                          min="0.01"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">Z</Label>
                        <Input
                          type="number"
                          value={structures[selectedStructureIndex].scale.z}
                          onChange={(e) =>
                            updateStructure(selectedStructureIndex, "scale", {
                              z: Number.parseFloat(e.target.value),
                            })
                          }
                          className="bg-black border-green-500/30 text-green-400"
                          step="0.01"
                          min="0.01"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="appearance" className="pt-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-green-300">Color</Label>
                    <div className="flex gap-2">
                      <Input
                        type="color"
                        value={structures[selectedStructureIndex].color}
                        onChange={(e) => updateStructure(selectedStructureIndex, "color", e.target.value)}
                        className="w-12 h-8 p-1 bg-black border-green-500/30"
                      />
                      <Input
                        value={structures[selectedStructureIndex].color}
                        onChange={(e) => updateStructure(selectedStructureIndex, "color", e.target.value)}
                        className="bg-black border-green-500/30 text-green-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label className="text-green-300">Roughness</Label>
                      <span className="text-xs">
                        {(structures[selectedStructureIndex].roughness || 0.5).toFixed(2)}
                      </span>
                    </div>
                    <Slider
                      value={[structures[selectedStructureIndex].roughness || 0.5]}
                      min={0}
                      max={1}
                      step={0.01}
                      onValueChange={(value) => updateStructure(selectedStructureIndex, "roughness", value[0])}
                      className="text-green-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label className="text-green-300">Metalness</Label>
                      <span className="text-xs">
                        {(structures[selectedStructureIndex].metalness || 0.2).toFixed(2)}
                      </span>
                    </div>
                    <Slider
                      value={[structures[selectedStructureIndex].metalness || 0.2]}
                      min={0}
                      max={1}
                      step={0.01}
                      onValueChange={(value) => updateStructure(selectedStructureIndex, "metalness", value[0])}
                      className="text-green-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label className="text-green-300">Opacity</Label>
                      <span className="text-xs">{(structures[selectedStructureIndex].opacity || 1).toFixed(2)}</span>
                    </div>
                    <Slider
                      value={[structures[selectedStructureIndex].opacity || 1]}
                      min={0}
                      max={1}
                      step={0.01}
                      onValueChange={(value) => updateStructure(selectedStructureIndex, "opacity", value[0])}
                      className="text-green-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label className="text-green-300">Emissive</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          type="color"
                          value={structures[selectedStructureIndex].emissive || "#000000"}
                          onChange={(e) => updateStructure(selectedStructureIndex, "emissive", e.target.value)}
                          className="w-8 h-6 p-0.5 bg-black border-green-500/30"
                        />
                        <Input
                          type="number"
                          value={structures[selectedStructureIndex].emissiveIntensity || 0}
                          onChange={(e) =>
                            updateStructure(
                              selectedStructureIndex,
                              "emissiveIntensity",
                              Number.parseFloat(e.target.value),
                            )
                          }
                          className="w-16 bg-black border-green-500/30 text-green-400"
                          step="0.1"
                          min="0"
                          max="1"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <Label className="text-green-300">Wireframe</Label>
                      <Switch
                        checked={structures[selectedStructureIndex].wireframe || false}
                        onCheckedChange={(checked) => updateStructure(selectedStructureIndex, "wireframe", checked)}
                        className="data-[state=checked]:bg-green-600"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="preview" className="pt-4">
                <StructurePreview structure={structures[selectedStructureIndex]} />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}

      <Card className="bg-black/60 border-green-500/30 text-green-400">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg tracking-wide">ADD NEW STRUCTURE</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label className="text-green-300">Name</Label>
                <Input
                  value={newStructure.name}
                  onChange={(e) => updateNewStructure("name", e.target.value)}
                  className="bg-black border-green-500/30 text-green-400"
                  placeholder="Structure Name"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-green-300">Type</Label>
                <Select value={newStructure.type} onValueChange={updateStructureType}>
                  <SelectTrigger className="bg-black border-green-500/30 text-green-400">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-green-500/30 text-green-400">
                    {structureTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {getStructureTypeName(type)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-green-300">Color</Label>
              <div className="flex gap-2">
                <Input
                  type="color"
                  value={newStructure.color}
                  onChange={(e) => updateNewStructure("color", e.target.value)}
                  className="w-12 h-8 p-1 bg-black border-green-500/30"
                />
                <Input
                  value={newStructure.color}
                  onChange={(e) => updateNewStructure("color", e.target.value)}
                  className="bg-black border-green-500/30 text-green-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-1">
                <Label className="text-xs">Scale X</Label>
                <Input
                  type="number"
                  value={newStructure.scale.x}
                  onChange={(e) => updateNewStructure("scale", { x: Number.parseFloat(e.target.value) })}
                  className="bg-black border-green-500/30 text-green-400"
                  step="0.01"
                  min="0.01"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Scale Y</Label>
                <Input
                  type="number"
                  value={newStructure.scale.y}
                  onChange={(e) => updateNewStructure("scale", { y: Number.parseFloat(e.target.value) })}
                  className="bg-black border-green-500/30 text-green-400"
                  step="0.01"
                  min="0.01"
                />
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Scale Z</Label>
                <Input
                  type="number"
                  value={newStructure.scale.z}
                  onChange={(e) => updateNewStructure("scale", { z: Number.parseFloat(e.target.value) })}
                  className="bg-black border-green-500/30 text-green-400"
                  step="0.01"
                  min="0.01"
                />
              </div>
            </div>

            <Button onClick={addStructure} className="w-full mt-2 bg-green-700 hover:bg-green-600 text-black">
              <Plus className="h-4 w-4 mr-2" />
              Add Structure
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
