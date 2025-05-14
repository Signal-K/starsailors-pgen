"use client"

import { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import type * as THREE from "three"
import type { LandmarkStructure } from "@/lib/planet-physics"
import { getStructureGeometry, createStructureMaterial } from "./structure-types"

interface StructurePreviewProps {
  structure: LandmarkStructure
}

export function StructurePreview({ structure }: StructurePreviewProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  // Get geometry and material for the structure
  const geometry = getStructureGeometry(structure.type)
  const material = createStructureMaterial(structure)

  return (
    <div className="w-full h-48 bg-black rounded-md overflow-hidden">
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[2, 3, 4]} intensity={1.2} />
        <directionalLight position={[-2, 2, 1]} intensity={0.8} castShadow />
        <mesh
          ref={meshRef}
          geometry={geometry}
          material={material}
          rotation={[structure.rotation.x * Math.PI, structure.rotation.y * Math.PI, structure.rotation.z * Math.PI]}
        />
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
        <gridHelper args={[6, 10, "#444444", "#222222"]} position={[0, -1, 0]} />
      </Canvas>
    </div>
  )
}
