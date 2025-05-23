"use client"

import { useState, useMemo, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus, Trash2, Eye, Play, AlertCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import type { PlanetStats, Landmark, LandmarkEvent, LandmarkStructure } from "@/lib/planet-physics"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { determinePlanetType } from "@/lib/planet-physics"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { TerrainPreview } from "./landmarks/terrain-preview"
import { getInfluenceTypes, getInfluenceTypeName } from "./landmarks/landmark-types"
import { generateRandomCoordinates } from "./landmarks/landmark-utils"
import { createDefaultStructure, getStructureTypeName, structureTypes } from "./landmarks/structures/structure-types"

interface LandmarksTabProps {
  planetStats: PlanetStats
  setPlanetStats: (stats: PlanetStats) => void
}

export function LandmarksTab({ planetStats, setPlanetStats }: LandmarksTabProps) {
  const planetType = determinePlanetType(planetStats.mass, planetStats.radius)
  const isGasGiant = planetType === "gaseous"

  // Track previous planet type to detect changes
  const [previousPlanetType, setPreviousPlanetType] = useState(planetType)

  const [newLandmark, setNewLandmark] = useState<Landmark>({
    classification_id: "",
    type: "",
    visual_effect: "",
    image_link: "",
    coordinates: { x: 0, y: 0, z: 0 },
    influence_radius: 0.5,
    influence_strength: 0.7,
    influence_type: isGasGiant ? "storm" : "mountain",
    category: isGasGiant ? "gaseous" : "terrestrial",
    events: [],
    structures: [],
  })

  const [newEvent, setNewEvent] = useState<LandmarkEvent>({
    id: "",
    type: "",
    description: "",
    duration: 5,
    intensity: 0.5,
  })

  const [newStructure, setNewStructure] = useState<LandmarkStructure>(createDefaultStructure("building"))

  const [selectedLandmarkIndex, setSelectedLandmarkIndex] = useState<number>(-1)
  const [showTypeWarning, setShowTypeWarning] = useState(false)

  // Replace the visibleLandmarks filtering with a function that returns all landmarks
  // but marks them as active or inactive
  const landmarks = useMemo(() => {
    // Ensure planetStats.landmarks is an array before processing
    if (!planetStats.landmarks || !Array.isArray(planetStats.landmarks)) {
      console.warn("planetStats.landmarks is not an array:", planetStats.landmarks)
      return []
    }

    return planetStats.landmarks.map((landmark) => {
      // Determine if the landmark is active for the current planet type
      const isActive = isGasGiant ? landmark.category === "gaseous" : landmark.category === "terrestrial"

      return {
        ...landmark,
        isActive,
      }
    })
  }, [planetStats.landmarks, isGasGiant])

  // Handle planet type changes
  useEffect(() => {
    if (previousPlanetType !== planetType) {
      setPreviousPlanetType(planetType)

      // Update the new landmark form for the current planet type
      setNewLandmark((prev) => ({
        ...prev,
        influence_type: isGasGiant ? "storm" : "mountain",
        category: isGasGiant ? "gaseous" : "terrestrial",
      }))

      // Reset selected landmark if it's not visible anymore
      if (selectedLandmarkIndex >= 0 && planetStats.landmarks && Array.isArray(planetStats.landmarks)) {
        const selectedLandmark = planetStats.landmarks[selectedLandmarkIndex]
        if (selectedLandmark) {
          const isVisible = isGasGiant
            ? (selectedLandmark.category || "terrestrial") === "gaseous"
            : (selectedLandmark.category || "terrestrial") === "terrestrial"

          if (!isVisible) {
            setSelectedLandmarkIndex(-1)
            setShowTypeWarning(true)
          }
        }
      }
    }
  }, [planetType, previousPlanetType, selectedLandmarkIndex, planetStats.landmarks, isGasGiant])

  // Add a new landmark
  const addLandmark = () => {
    if (!newLandmark.classification_id || !newLandmark.type) return

    // Ensure the landmark has the correct category for the current planet type
    const landmarkToAdd = {
      ...newLandmark,
      category: isGasGiant ? "gaseous" : "terrestrial",
    }

    // Ensure landmarks is an array
    const currentLandmarks = Array.isArray(planetStats.landmarks) ? planetStats.landmarks : []
    const landmarks = [...currentLandmarks, landmarkToAdd]
    setPlanetStats({ ...planetStats, landmarks })

    // Reset the form
    setNewLandmark({
      classification_id: "",
      type: "",
      visual_effect: "",
      image_link: "",
      coordinates: { x: 0, y: 0, z: 0 },
      influence_radius: 0.5,
      influence_strength: 0.7,
      influence_type: isGasGiant ? "storm" : "mountain",
      category: isGasGiant ? "gaseous" : "terrestrial",
      events: [],
      structures: [],
    })
  }

  // Remove a landmark
  const removeLandmark = (index: number) => {
    if (!planetStats.landmarks || !Array.isArray(planetStats.landmarks)) return

    const landmarkToRemove = landmarks[index]
    const actualIndex = planetStats.landmarks.findIndex(
      (l) => l.classification_id === landmarkToRemove.classification_id,
    )

    if (actualIndex === -1) return

    const updatedLandmarks = [...planetStats.landmarks]
    updatedLandmarks.splice(actualIndex, 1)
    setPlanetStats({ ...planetStats, landmarks: updatedLandmarks })

    // Reset selected landmark if it was deleted
    if (selectedLandmarkIndex === index) {
      setSelectedLandmarkIndex(-1)
    } else if (selectedLandmarkIndex > index) {
      setSelectedLandmarkIndex(selectedLandmarkIndex - 1)
    }
  }

  // Update new landmark field
  const updateNewLandmark = (field: keyof Landmark, value: any) => {
    if (field === "coordinates") {
      setNewLandmark({ ...newLandmark, coordinates: { ...newLandmark.coordinates, ...value } })
    } else {
      setNewLandmark({ ...newLandmark, [field]: value })
    }
  }

  // Update existing landmark
  const updateLandmark = (field: keyof Landmark, value: any) => {
    if (!planetStats.landmarks || !Array.isArray(planetStats.landmarks) || selectedLandmarkIndex === -1) return

    const landmarkToUpdate = landmarks[selectedLandmarkIndex]
    const actualIndex = planetStats.landmarks.findIndex(
      (l) => l.classification_id === landmarkToUpdate.classification_id,
    )

    if (actualIndex === -1) return

    const updatedLandmarks = [...planetStats.landmarks]

    if (field === "coordinates") {
      updatedLandmarks[actualIndex] = {
        ...updatedLandmarks[actualIndex],
        coordinates: { ...updatedLandmarks[actualIndex].coordinates, ...value },
      }
    } else {
      updatedLandmarks[actualIndex] = {
        ...updatedLandmarks[actualIndex],
        [field]: value,
      }
    }

    setPlanetStats({ ...planetStats, landmarks: updatedLandmarks })
  }

  // Add a new event to the selected landmark
  const addEventToLandmark = () => {
    if (selectedLandmarkIndex === -1 || !newEvent.type || !newEvent.description) return

    if (!planetStats.landmarks || !Array.isArray(planetStats.landmarks)) return

    const landmarkToUpdate = landmarks[selectedLandmarkIndex]
    const actualIndex = planetStats.landmarks.findIndex(
      (l) => l.classification_id === landmarkToUpdate.classification_id,
    )

    if (actualIndex === -1) return

    const updatedLandmarks = [...planetStats.landmarks]
    const landmark = updatedLandmarks[actualIndex]

    // Generate a unique ID for the event
    const eventId = `EV-${Math.floor(Math.random() * 900 + 100)}`
    const eventWithId = { ...newEvent, id: eventId }

    // Add the event to the landmark
    updatedLandmarks[actualIndex] = {
      ...landmark,
      events: [...(landmark.events || []), eventWithId],
    }

    setPlanetStats({ ...planetStats, landmarks: updatedLandmarks })

    // Reset the event form
    setNewEvent({
      id: "",
      type: "",
      description: "",
      duration: 5,
      intensity: 0.5,
    })
  }

  // Remove an event from a landmark
  const removeEventFromLandmark = (eventIndex: number) => {
    if (!planetStats.landmarks || !Array.isArray(planetStats.landmarks) || selectedLandmarkIndex === -1) return

    const landmarkToUpdate = landmarks[selectedLandmarkIndex]
    const actualIndex = planetStats.landmarks.findIndex(
      (l) => l.classification_id === landmarkToUpdate.classification_id,
    )

    if (actualIndex === -1) return

    const updatedLandmarks = [...planetStats.landmarks]
    const landmark = updatedLandmarks[actualIndex]

    if (!landmark.events || !Array.isArray(landmark.events)) return

    const events = [...landmark.events]
    events.splice(eventIndex, 1)

    updatedLandmarks[actualIndex] = {
      ...landmark,
      events,
    }

    setPlanetStats({ ...planetStats, landmarks: updatedLandmarks })
  }

  return (
    <div className="space-y-6">
      {showTypeWarning && (
        <Alert variant="warning" className="bg-amber-900/20 border-amber-500/50 text-amber-300">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Some landmarks are hidden because they don't match the current planet type (
            {isGasGiant ? "gaseous" : "terrestrial"}).
            <Button
              variant="link"
              className="p-0 h-auto text-amber-300 hover:text-amber-200"
              onClick={() => setShowTypeWarning(false)}
            >
              Dismiss
            </Button>
          </AlertDescription>
        </Alert>
      )}

      <Card className="bg-slate-800/70 border-slate-700/60 text-blue-100">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg tracking-wide">
            LANDMARK DATABASE ({isGasGiant ? "GASEOUS" : "TERRESTRIAL"} PLANET)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <Label className="text-cyan-200">Current Landmarks</Label>
            {landmarks.length === 0 ? (
              <div className="text-center py-4 border border-dashed border-slate-600 rounded-md">
                <p className="text-slate-400">No landmarks registered</p>
              </div>
            ) : (
              <div className="space-y-3">
                {landmarks.map((landmark, index) => (
                  <div
                    key={landmark.classification_id}
                    className={`border ${
                      selectedLandmarkIndex === index ? "border-cyan-400" : "border-slate-600"
                    } rounded-md p-3 space-y-2 ${!landmark.isActive ? "opacity-50" : ""}`}
                    onClick={() => setSelectedLandmarkIndex(index)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-cyan-200">{landmark.classification_id}</span>
                        {!landmark.isActive && (
                          <span className="text-xs bg-amber-900/50 text-amber-300 px-1.5 py-0.5 rounded">
                            {landmark.category === "gaseous" ? "GASEOUS" : "TERRESTRIAL"}
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedLandmarkIndex(index)
                          }}
                          className="h-6 w-6 p-0 text-blue-100 hover:text-cyan-200 hover:bg-transparent"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            removeLandmark(index)
                          }}
                          className="h-6 w-6 p-0 text-blue-100 hover:text-red-400 hover:bg-transparent"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
                      <span className="text-slate-400">Type:</span>
                      <span>{landmark.type}</span>
                      <span className="text-slate-400">Visual Effect:</span>
                      <span>{landmark.visual_effect || "None"}</span>
                      <span className="text-slate-400">Coordinates:</span>
                      <span>
                        X: {landmark.coordinates.x.toFixed(2)}, Y: {landmark.coordinates.y.toFixed(2)}, Z:{" "}
                        {landmark.coordinates.z.toFixed(2)}
                      </span>
                      <span className="text-slate-400">Events:</span>
                      <span>{landmark.events && Array.isArray(landmark.events) ? landmark.events.length : 0}</span>
                      {landmark.structures && Array.isArray(landmark.structures) && landmark.structures.length > 0 && (
                        <>
                          <span className="text-slate-400">Structures:</span>
                          <span className="text-cyan-300">{landmark.structures.length}</span>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {selectedLandmarkIndex !== -1 && landmarks[selectedLandmarkIndex] && (
        <Card className="bg-slate-800/70 border-slate-700/60 text-blue-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg tracking-wide flex items-center justify-between">
              <span>LANDMARK DETAILS: {landmarks[selectedLandmarkIndex].classification_id}</span>
              {!landmarks[selectedLandmarkIndex].isActive && (
                <span className="text-xs bg-amber-900/50 text-amber-300 px-2 py-1 rounded">
                  INACTIVE ({landmarks[selectedLandmarkIndex].category?.toUpperCase()})
                </span>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs defaultValue="info">
              <TabsList className="bg-slate-800 border border-slate-600">
                <TabsTrigger
                  value="info"
                  className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-100"
                >
                  INFO
                </TabsTrigger>
                <TabsTrigger
                  value="events"
                  className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-100"
                >
                  EVENTS
                </TabsTrigger>
                <TabsTrigger
                  value="terrain"
                  className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-100"
                >
                  TERRAIN
                </TabsTrigger>
              </TabsList>

              <TabsContent value="info" className="pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-cyan-200">Type</Label>
                    <div className="mt-1 p-2 bg-slate-700/50 border border-slate-600 rounded">
                      {landmarks[selectedLandmarkIndex].type}
                    </div>
                  </div>
                  <div>
                    <Label className="text-cyan-200">Visual Effect</Label>
                    <div className="mt-1 p-2 bg-slate-700/50 border border-slate-600 rounded">
                      {landmarks[selectedLandmarkIndex].visual_effect || "None"}
                    </div>
                  </div>
                  <div className="col-span-2">
                    <Label className="text-cyan-200">Coordinates</Label>
                    <div className="mt-1 p-2 bg-slate-700/50 border border-slate-600 rounded">
                      X: {landmarks[selectedLandmarkIndex].coordinates.x.toFixed(2)}, Y:{" "}
                      {landmarks[selectedLandmarkIndex].coordinates.y.toFixed(2)}, Z:{" "}
                      {landmarks[selectedLandmarkIndex].coordinates.z.toFixed(2)}
                    </div>
                  </div>
                  <div className="col-span-2">
                    <Label className="text-cyan-200">Category</Label>
                    <div className="mt-1 p-2 bg-slate-700/50 border border-slate-600 rounded capitalize">
                      {landmarks[selectedLandmarkIndex].category || (isGasGiant ? "gaseous" : "terrestrial")}
                    </div>
                  </div>
                  {/* Structures section */}
                  <div className="col-span-2 mt-4">
                    <Label className="text-cyan-200 mb-2 block">Structures</Label>
                    {!landmarks[selectedLandmarkIndex].structures ||
                    !Array.isArray(landmarks[selectedLandmarkIndex].structures) ||
                    landmarks[selectedLandmarkIndex].structures.length === 0 ? (
                      <div className="p-4 bg-slate-700/50 border border-slate-600 rounded text-center text-slate-400">
                        No structures added to this landmark
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {landmarks[selectedLandmarkIndex].structures?.map((structure) => (
                          <div key={structure.id} className="p-2 bg-slate-700/50 border border-slate-600 rounded">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-cyan-200">{structure.name}</span>
                                <span className="text-xs bg-cyan-900/50 text-cyan-200 px-1.5 py-0.5 rounded">
                                  {getStructureTypeName(structure.type)}
                                </span>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => {
                                  if (!landmarks[selectedLandmarkIndex].structures) return

                                  const updatedStructures =
                                    landmarks[selectedLandmarkIndex].structures?.filter((s) => s.id !== structure.id) ||
                                    []
                                  updateLandmark("structures", updatedStructures)
                                }}
                                className="h-6 w-6 p-0 text-blue-100 hover:text-red-400 hover:bg-transparent"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Add structure form - simplified to just name and type */}
                    <div className="mt-4 p-3 border border-slate-600 rounded-md">
                      <Label className="text-cyan-200 mb-2 block">Add New Structure</Label>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <Label className="text-xs">Name</Label>
                          <Input
                            value={newStructure.name}
                            onChange={(e) =>
                              setNewStructure({
                                ...newStructure,
                                name: e.target.value,
                              })
                            }
                            className="bg-slate-700 border-slate-600 text-blue-100"
                            placeholder="Structure Name"
                          />
                        </div>
                        <div>
                          <Label className="text-xs">Type</Label>
                          <Select
                            value={newStructure.type}
                            onValueChange={(value) => setNewStructure(createDefaultStructure(value))}
                          >
                            <SelectTrigger className="bg-slate-700 border-slate-600 text-blue-100">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-700 border-slate-600 text-blue-100">
                              {structureTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {getStructureTypeName(type)}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <Button
                        onClick={() => {
                          if (!newStructure.name) return

                          // Ensure structures is an array
                          const currentStructures =
                            landmarks[selectedLandmarkIndex].structures &&
                            Array.isArray(landmarks[selectedLandmarkIndex].structures)
                              ? landmarks[selectedLandmarkIndex].structures
                              : []

                          const updatedStructures = [...currentStructures, newStructure]
                          updateLandmark("structures", updatedStructures)
                          setNewStructure(createDefaultStructure("building"))
                        }}
                        className="w-full mt-3 bg-cyan-700 hover:bg-cyan-600 text-white"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Structure
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="events" className="pt-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-cyan-200">Event List</Label>
                    {!landmarks[selectedLandmarkIndex].events ||
                    !Array.isArray(landmarks[selectedLandmarkIndex].events) ||
                    landmarks[selectedLandmarkIndex].events?.length === 0 ? (
                      <div className="text-center py-4 border border-dashed border-slate-600 rounded-md">
                        <p className="text-slate-400">No events registered for this landmark</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {landmarks[selectedLandmarkIndex].events?.map((event, eventIndex) => (
                          <div key={event.id} className="border border-slate-600 rounded-md p-2 text-xs">
                            <div className="flex justify-between items-center">
                              <span className="font-bold">
                                {event.id}: {event.type}
                              </span>
                              <div className="flex gap-2">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-5 w-5 p-0 text-blue-100 hover:text-cyan-200 hover:bg-transparent"
                                >
                                  <Play className="h-3 w-3" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeEventFromLandmark(eventIndex)}
                                  className="h-5 w-5 p-0 text-blue-100 hover:text-red-400 hover:bg-transparent"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                            <div className="mt-1">{event.description}</div>
                            {event.duration && <div className="mt-1 text-slate-400">Duration: {event.duration}s</div>}
                            {event.intensity && (
                              <div className="text-slate-400">Intensity: {event.intensity.toFixed(1)}</div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-600">
                    <Label className="text-cyan-200">Add New Event</Label>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <Label className="text-xs">Type</Label>
                        <Input
                          value={newEvent.type}
                          onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
                          className="bg-slate-700 border-slate-600 text-blue-100"
                          placeholder="Lightning Strike"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">Duration (s)</Label>
                        <Input
                          type="number"
                          value={newEvent.duration}
                          onChange={(e) => setNewEvent({ ...newEvent, duration: Number.parseFloat(e.target.value) })}
                          className="bg-slate-700 border-slate-600 text-blue-100"
                          step="0.5"
                        />
                      </div>
                      <div className="col-span-2 space-y-1">
                        <Label className="text-xs">Description</Label>
                        <Input
                          value={newEvent.description}
                          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                          className="bg-slate-700 border-slate-600 text-blue-100"
                          placeholder="Brief description of the event"
                        />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">Intensity (0-1)</Label>
                        <Input
                          type="number"
                          value={newEvent.intensity}
                          onChange={(e) => setNewEvent({ ...newEvent, intensity: Number.parseFloat(e.target.value) })}
                          className="bg-slate-700 border-slate-600 text-blue-100"
                          min="0"
                          max="1"
                          step="0.1"
                        />
                      </div>
                    </div>

                    <Button
                      onClick={addEventToLandmark}
                      className="w-full mt-2 bg-cyan-700 hover:bg-cyan-600 text-white"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Event
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="terrain" className="pt-4">
                <div className="space-y-6">
                  {!landmarks[selectedLandmarkIndex].isActive && (
                    <Alert variant="warning" className="bg-amber-900/20 border-amber-500/50 text-amber-300">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        This landmark is inactive because it's a {landmarks[selectedLandmarkIndex].category} landmark on
                        a {isGasGiant ? "gaseous" : "terrestrial"} planet. The terrain preview shows how it would appear
                        on a {landmarks[selectedLandmarkIndex].category} planet.
                      </AlertDescription>
                    </Alert>
                  )}

                  {/* Integrated terrain preview with structures */}
                  <div className="w-full h-64 bg-black rounded-md overflow-hidden">
                    <TerrainPreview
                      landmark={landmarks[selectedLandmarkIndex]}
                      planetStats={planetStats}
                      updateLandmark={updateLandmark}
                    />
                  </div>

                  {/* Terrain settings */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <Label className="text-xs">Influence Type</Label>
                        <Select
                          value={landmarks[selectedLandmarkIndex].influence_type || (isGasGiant ? "storm" : "mountain")}
                          onValueChange={(value) => updateLandmark("influence_type", value)}
                        >
                          <SelectTrigger className="bg-slate-700 border-slate-600 text-blue-100">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-700 border-slate-600 text-blue-100">
                            {getInfluenceTypes(landmarks[selectedLandmarkIndex].category).map((type) => (
                              <SelectItem key={type} value={type}>
                                {getInfluenceTypeName(type)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-1">
                        <Label className="text-xs">Influence Radius</Label>
                        <Input
                          type="number"
                          value={landmarks[selectedLandmarkIndex].influence_radius || 0.5}
                          onChange={(e) => updateLandmark("influence_radius", Number.parseFloat(e.target.value))}
                          className="bg-slate-700 border-slate-600 text-blue-100"
                          step="0.1"
                        />
                      </div>

                      <div className="col-span-2 space-y-1">
                        <Label className="text-xs">Influence Strength</Label>
                        <Slider
                          defaultValue={[Number(landmarks[selectedLandmarkIndex].influence_strength || 0.7) * 100]}
                          max={100}
                          step={1}
                          onValueChange={(value) => updateLandmark("influence_strength", value[0] / 100)}
                          className="text-blue-100"
                        />
                        <div className="text-xs text-slate-400">
                          {(landmarks[selectedLandmarkIndex].influence_strength || 0.7).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}

      <Card className="bg-slate-800/70 border-slate-700/60 text-blue-100">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg tracking-wide">
            ADD NEW {isGasGiant ? "GASEOUS" : "TERRESTRIAL"} LANDMARK
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label className="text-cyan-200">Classification ID</Label>
                <Input
                  value={newLandmark.classification_id}
                  onChange={(e) => updateNewLandmark("classification_id", e.target.value)}
                  className="bg-slate-700 border-slate-600 text-blue-100"
                  placeholder="LM-001"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-cyan-200">Type</Label>
                <Input
                  value={newLandmark.type}
                  onChange={(e) => updateNewLandmark("type", e.target.value)}
                  className="bg-slate-700 border-slate-600 text-blue-100"
                  placeholder={isGasGiant ? "Storm System" : "Mountain Range"}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-cyan-200">Visual Effect</Label>
              <Input
                value={newLandmark.visual_effect}
                onChange={(e) => updateNewLandmark("visual_effect", e.target.value)}
                className="bg-slate-700 border-slate-600 text-blue-100"
                placeholder={isGasGiant ? "Lightning" : "Glowing"}
              />
            </div>

            <div className="space-y-2">
              <Label className="text-cyan-200">Image Link</Label>
              <Input
                value={newLandmark.image_link}
                onChange={(e) => updateNewLandmark("image_link", e.target.value)}
                className="bg-slate-700 border-slate-600 text-blue-100"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label className="text-cyan-200">Coordinates</Label>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateNewLandmark("coordinates", generateRandomCoordinates())}
                  className="h-6 text-xs border-slate-600 text-blue-100 hover:bg-cyan-900/20"
                >
                  Random
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="space-y-1">
                  <Label className="text-xs">X</Label>
                  <Input
                    type="number"
                    value={newLandmark.coordinates.x}
                    onChange={(e) => updateNewLandmark("coordinates", { x: Number.parseFloat(e.target.value) })}
                    className="bg-slate-700 border-slate-600 text-blue-100"
                    step="0.1"
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">Y</Label>
                  <Input
                    type="number"
                    value={newLandmark.coordinates.y}
                    onChange={(e) => updateNewLandmark("coordinates", { y: Number.parseFloat(e.target.value) })}
                    className="bg-slate-700 border-slate-600 text-blue-100"
                    step="0.1"
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">Z</Label>
                  <Input
                    type="number"
                    value={newLandmark.coordinates.z}
                    onChange={(e) => updateNewLandmark("coordinates", { z: Number.parseFloat(e.target.value) })}
                    className="bg-slate-700 border-slate-600 text-blue-100"
                    step="0.1"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label className="text-cyan-200">Influence Radius</Label>
                <Input
                  type="number"
                  value={newLandmark.influence_radius || 0.5}
                  onChange={(e) => updateNewLandmark("influence_radius", Number.parseFloat(e.target.value))}
                  className="bg-slate-700 border-slate-600 text-blue-100"
                  step="0.1"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-cyan-200">Influence Strength</Label>
                <Input
                  type="number"
                  value={newLandmark.influence_strength || 0.7}
                  onChange={(e) => updateNewLandmark("influence_strength", Number.parseFloat(e.target.value))}
                  className="bg-slate-700 border-slate-600 text-blue-100"
                  step="0.1"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-cyan-200">Influence Type</Label>
              <Select
                value={newLandmark.influence_type || (isGasGiant ? "storm" : "mountain")}
                onValueChange={(value) => updateNewLandmark("influence_type", value)}
              >
                <SelectTrigger className="bg-slate-700 border-slate-600 text-blue-100">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600 text-blue-100">
                  {getInfluenceTypes().map((type) => (
                    <SelectItem key={type} value={type}>
                      {getInfluenceTypeName(type)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button onClick={addLandmark} className="w-full mt-2 bg-cyan-700 hover:bg-cyan-600 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add {isGasGiant ? "Gaseous" : "Terrestrial"} Landmark
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
