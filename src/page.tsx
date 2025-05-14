"use client"

import { PlanetGenerator } from "@/components/planet-generator"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <PlanetGenerator
        classificationId="PLT-2025-04"
        author="STELLAR CARTOGRAPHY"
        type="Terrestrial"
        biome="Rocky Highlands"
      />
    </main>
  )
}
