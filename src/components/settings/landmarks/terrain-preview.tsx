"use client"

import React, { useRef, useMemo, useState } from "react"
import type * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Html } from "@react-three/drei"
import type { PlanetStats, Landmark, LandmarkStructure } from "../../../../lib/planet-physics"
import { generateTerrainGeometry } from "./terrain-generators"
import { getStructureGeometry, createStructureMaterial, createDefaultStructure } from "./structures/structure-types"
import { Button } from "../../../components/ui/button"
import { Plus, Trash2 } from "lucide-react"
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"

interface TerrainPreviewProps {
  landmark: Landmark
  planetStats: PlanetStats
  updateLandmark: (field: keyof Landmark, value: any) => void
}

// Surface scan info component positioned in bottom right
function SurfaceScanInfo({ point }: { point: any | null }) {
  if (!point) return null

  return (
    <div className="absolute bottom-2 right-2 bg-black/90 text-green-400 p-2 text-xs border border-green-500/30 rounded-md max-w-[180px]">
      <div className="font-bold border-b border-green-500/30 pb-1 mb-1">SURFACE SCAN</div>
      <div className="grid grid-cols-2 gap-x-2 gap-y-1">
        <span className="text-green-500/70">POS:</span>
        <span>
          {point.position.x.toFixed(1)},{point.position.y.toFixed(1)},{point.position.z.toFixed(1)}
        </span>
        <span className="text-green-500/70">HEIGHT:</span>
        <span>{point.height.toFixed(2)}</span>
      </div>
    </div>
  )
}

// Structure component for the 3D view
function StructureView({
  structure,
  onClick,
  isSelected,
}: { structure: any; onClick: () => void; isSelected: boolean }) {
  return (
    <mesh
      geometry={structure.geometry}
      material={structure.material}
      position={[structure.position.x, structure.position.y, structure.position.z]}
      rotation={[structure.rotation.x, structure.rotation.y, structure.rotation.z]}
      scale={[structure.scale[0], structure.scale[1], structure.scale[2]]}
      castShadow
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
    >
      <Html position={[0, structure.scale[1] + 0.1, 0]} center>
        <div
          className={`bg-black/80 ${isSelected ? "text-yellow-400 border-yellow-500/50" : "text-cyan-400 border-cyan-500/50"} px-1 py-0.5 text-[10px] rounded border whitespace-nowrap`}
        >
          {structure.name}
        </div>
      </Html>
    </mesh>
  )
}

// Structure editor panel that appears when a structure is selected
function StructureEditorPanel({
  structure,
  updateStructure,
  onClose,
}: {
  structure: LandmarkStructure
  updateStructure: (field: keyof LandmarkStructure, value: any) => void
  onClose: () => void
}) {
  return (
    <div className="absolute left-2 top-2 bg-black/90 text-green-400 p-3 text-xs border border-green-500/30 rounded-md w-64">
      <div className="flex justify-between items-center mb-2 border-b border-green-500/30 pb-1">
        <div className="font-bold">EDIT STRUCTURE: {structure.name}</div>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="h-5 w-5 p-0 text-green-400 hover:text-green-300 hover:bg-transparent"
        >
          ×
        </Button>
      </div>

      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          <div className="space-y-1 col-span-3">
            <Label className="text-xs">Position</Label>
          </div>
          <div className="space-y-1">
            <Label className="text-xs">X</Label>
            <Input
              type="number"
              value={structure.position.x}
              onChange={(e) =>
                updateStructure("position", { ...structure.position, x: Number.parseFloat(e.target.value) })
              }
              className="h-7 text-xs bg-black border-green-500/30 text-green-400"
              step="0.01"
            />
          </div>
          <div className="space-y-1">
            <Label className="text-xs">Y</Label>
            <Input
              type="number"
              value={structure.position.y}
              onChange={(e) =>
                updateStructure("position", { ...structure.position, y: Number.parseFloat(e.target.value) })
              }
              className="h-7 text-xs bg-black border-green-500/30 text-green-400"
              step="0.01"
            />
          </div>
          <div className="space-y-1">
            <Label className="text-xs">Z</Label>
            <Input
              type="number"
              value={structure.position.z}
              onChange={(e) =>
                updateStructure("position", { ...structure.position, z: Number.parseFloat(e.target.value) })
              }
              className="h-7 text-xs bg-black border-green-500/30 text-green-400"
              step="0.01"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// Main terrain preview component
export function TerrainPreview({ landmark, planetStats, updateLandmark }: TerrainPreviewProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const isGasGiant = planetStats.mass > 7 || planetStats.radius > 2.5
  const [selectedPoint, setSelectedPoint] = useState<any>(null)
  const [selectedStructureId, setSelectedStructureId] = useState<string | null>(null)

  // Generate terrain geometry and material based on landmark type
  const { geometry, material } = useMemo(() => {
    return generateTerrainGeometry(landmark, planetStats, isGasGiant)
  }, [landmark, planetStats, isGasGiant])

  // Generate structures for the preview
  const structures = useMemo(() => {
    if (!landmark.structures || landmark.structures.length === 0) {
      return []
    }

    return landmark.structures.map((structure) => {
      // Get geometry and material for the structure
      const geometry = getStructureGeometry(structure.type)
      const material = createStructureMaterial(structure)

      // Calculate position - center structures on the terrain with some offset
      const position = {
        x: structure.position.x * 0.5, // Scale down positions to fit in preview
        y: structure.position.y * 0.5 + 0.1, // Add slight Y offset to place on terrain
        z: structure.position.z * 0.5,
      }

      // Calculate rotation in radians
      const rotation = {
        x: structure.rotation.x * Math.PI,
        y: structure.rotation.y * Math.PI,
        z: structure.rotation.z * Math.PI,
      }

      // Scale down structures to fit in the preview
      const scale = [structure.scale.x * 0.2, structure.scale.y * 0.2, structure.scale.z * 0.2]

      return {
        id: structure.id,
        name: structure.name,
        geometry,
        material,
        position,
        rotation,
        scale,
        originalStructure: structure,
      }
    })
  }, [landmark.structures])

  // Handle terrain click to show surface scan
  const handleTerrainClick = (event: React.MouseEvent) => {
      event.stopPropagation()
      const point = (event as any).point
    const normalizedPoint = point.clone().normalize()

    setSelectedPoint({
      position: point,
      normalizedPosition: normalizedPoint,
      height: point.y,
    })

    // Deselect structure when clicking on terrain
    setSelectedStructureId(null)
  }

  // Handle structure selection
  const handleStructureClick = (structureId: string) => {
    setSelectedStructureId(structureId)
    setSelectedPoint(null)
  }

  // Add a new structure to the landmark
  const addNewStructure = () => {
    const newStructure = createDefaultStructure("building")
    const updatedStructures = [...(landmark.structures || []), newStructure]
    updateLandmark("structures", updatedStructures)
    setSelectedStructureId(newStructure.id)
  }

  // Remove the selected structure
  const removeSelectedStructure = () => {
    if (!selectedStructureId || !landmark.structures) return

    const updatedStructures = landmark.structures.filter((s) => s.id !== selectedStructureId)
    updateLandmark("structures", updatedStructures)
    setSelectedStructureId(null)
  }

  // Update a structure property
  const updateStructure = (field: keyof LandmarkStructure, value: any) => {
    if (!selectedStructureId || !landmark.structures) return

    const updatedStructures = [...landmark.structures]
    const structureIndex = updatedStructures.findIndex((s) => s.id === selectedStructureId)

    if (structureIndex === -1) return

    if (field === "position" || field === "rotation" || field === "scale") {
      updatedStructures[structureIndex] = {
        ...updatedStructures[structureIndex],
        [field]: typeof updatedStructures[structureIndex][field as keyof LandmarkStructure] === "object" && updatedStructures[structureIndex][field as keyof LandmarkStructure] !== null
          ? typeof updatedStructures[structureIndex][field as keyof LandmarkStructure] === "object" && updatedStructures[structureIndex][field as keyof LandmarkStructure] !== null
            ? (typeof updatedStructures[structureIndex][field as keyof LandmarkStructure] === "object" && updatedStructures[structureIndex][field as keyof LandmarkStructure] !== null
                // ? { ...updatedStructures[structureIndex][field as keyof LandmarkStructure], ...value }
            )// : value)
            : value
          : value,
      }
    } else {
      updatedStructures[structureIndex] = {
        ...updatedStructures[structureIndex],
        [field]: value,
      }
    }

    updateLandmark("structures", updatedStructures)
  }

  // Get the selected structure
  const selectedStructure = useMemo(() => {
    if (!selectedStructureId || !landmark.structures) return null
    return landmark.structures.find((s) => s.id === selectedStructureId) || null
  }, [selectedStructureId, landmark.structures])

  return (
    <div className="relative w-full h-full">
      <Canvas camera={{ position: [0, 1.8, 2.2], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[2, 3, 4]} intensity={1.2} />
        <directionalLight position={[-2, 2, 1]} intensity={0.8} castShadow />

        {/* Terrain mesh */}
        <mesh
          ref={meshRef}
          rotation={[-Math.PI / 4, 0, 0]}
          geometry={geometry}
          material={material}
          receiveShadow
          castShadow
          onClick={handleTerrainClick}
        />

        {/* Render structures */}
        {structures.map((structure) => (
          <StructureView
            key={structure.id}
            structure={structure}
            onClick={() => handleStructureClick(structure.id)}
            isSelected={structure.id === selectedStructureId}
          />
        ))}

        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
        <gridHelper args={[6, 10, "#444444", "#222222"]} position={[0, -0.01, 0]} />
      </Canvas>

      {/* Surface scan info */}
      <SurfaceScanInfo point={selectedPoint} />

      {/* Structure controls */}
      <div className="absolute top-2 right-2 flex gap-2">
        <Button
          size="sm"
          variant="outline"
          className="h-7 px-2 bg-black/70 border-green-500/30 text-green-400 hover:bg-green-900/20"
          onClick={addNewStructure}
        >
          <Plus className="h-3 w-3 mr-1" />
          Add Structure
        </Button>

        {selectedStructureId && (
          <Button
            size="sm"
            variant="outline"
            className="h-7 px-2 bg-black/70 border-red-500/30 text-red-400 hover:bg-red-900/20"
            onClick={removeSelectedStructure}
          >
            <Trash2 className="h-3 w-3 mr-1" />
            Remove
          </Button>
        )}
      </div>

      {/* Structure editor panel */}
      {selectedStructure && (
        <StructureEditorPanel
          structure={selectedStructure}
          updateStructure={updateStructure}
          onClose={() => setSelectedStructureId(null)}
        />
      )}
    </div>
  )
}
