# Planet Generator

A React Three.js library for generating procedural planets with realistic terrain, atmospheric effects, and customizable properties.

## Features

- 🌍 **Realistic Planet Generation**: Create both terrestrial and gaseous planets with procedural terrain
- 🎨 **Customizable Appearance**: Full control over colors, terrain, and atmospheric properties
- 🌡️ **Temperature-Based Effects**: Automatic liquid type determination and terrain color adjustment
- 🏔️ **Advanced Terrain**: Continents, mountains, oceans, and biome systems
- ⚡ **High Performance**: WebGL shaders for smooth real-time rendering
- 🎛️ **Built-in UI**: Ready-to-use settings panels and controls
- 📱 **Responsive**: Works on desktop and mobile devices

## Installation

\`\`\`bash
npm install @your-username/planet-generator
\`\`\`

### Peer Dependencies

Make sure you have these peer dependencies installed:

\`\`\`bash
npm install react react-dom @react-three/fiber @react-three/drei three
\`\`\`

## Quick Start

\`\`\`tsx
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Planet, defaultPlanetConfig } from '@your-username/planet-generator'

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Planet config={defaultPlanetConfig} />
      <OrbitControls />
    </Canvas>
  )
}
\`\`\`

## Components

### Planet

The core planet mesh component with advanced shader-based rendering.

\`\`\`tsx
import { Planet } from '@your-username/planet-generator'

<Planet config={planetConfig} />
\`\`\`

### PlanetViewer

A complete planet viewer with built-in controls and settings panel.

\`\`\`tsx
import { PlanetViewer } from '@your-username/planet-generator'

<PlanetViewer 
  planetConfig={planetConfig} 
  onConfigChange={handleConfigChange} 
/>
\`\`\`

### SimplePlanetViewer

A simplified version with basic controls, perfect for quick prototyping.

\`\`\`tsx
import { SimplePlanetViewer } from '@your-username/planet-generator'

<SimplePlanetViewer 
  planetConfig={planetConfig} 
  onConfigChange={handleConfigChange} 
/>
\`\`\`

## Configuration

### Planet Types

- **Terrestrial**: Rocky planets with continents, oceans, and terrain
- **Gaseous**: Gas giants with atmospheric bands and storm systems

### Basic Properties

\`\`\`tsx
import { PlanetConfig } from '@your-username/planet-generator'

const config: PlanetConfig = {
  type: 'terrestrial',
  radius: 1.0,           // Earth radii
  mass: 1.0,             // Earth masses  
  temperature: 288,      // Kelvin
  biomass: 0.7,          // 0-1 vegetation coverage
  seed: 1234,            // Random seed
  // ... more properties
}
\`\`\`

### Terrain Properties

\`\`\`tsx
const terrainConfig = {
  terrainRoughness: 0.6,    // Surface detail level
  liquidHeight: 0.55,       // Ocean level
  continentSize: 0.5,       // Size of landmasses
  continentCount: 5,        // Number of continents
  volcanicActivity: 0.2,    // Volcanic features
  noiseScale: 1.0,          // Detail scaling
}
\`\`\`

### Colors

All terrain and atmospheric colors are fully customizable:

\`\`\`tsx
const colors = {
  atmosphere: '#87CEEB',
  ocean: '#1E90FF',
  beach: '#F0E68C',
  lowland: '#32CD32',
  midland: '#228B22',
  highland: '#8B4513',
  mountain: '#A0A0A0',
  snow: '#FFFFFF',
}
\`\`\`

## Advanced Features

### Temperature-Based Effects

The library automatically adjusts liquid types and terrain colors based on temperature:

- **< 90K**: Liquid nitrogen
- **90-120K**: Liquid methane  
- **273-373K**: Water
- **> 600K**: Molten rock

### Debug Mode

Enable debug mode to visualize individual terrain layers:

\`\`\`tsx
const debugConfig = {
  ...planetConfig,
  debugMode: true,
  visibleTerrains: {
    ocean: true,
    beach: false,    // Hide beach layer
    lowland: true,
    // ... other terrain types
  }
}
\`\`\`

### Presets

Use built-in presets for common planet types:

\`\`\`tsx
import { simplePlanetPresets } from '@your-username/planet-generator'

const earthLike = simplePlanetPresets.earth
const marsLike = simplePlanetPresets.mars
const jupiterLike = simplePlanetPresets.jupiter
\`\`\`

## Utility Functions

\`\`\`tsx
import { 
  getLiquidType,
  getTemperatureAdjustedColors,
  getAutoType 
} from '@your-username/planet-generator'

// Get liquid type for temperature
const liquid = getLiquidType(288) // Returns water info

// Get terrain colors for temperature
const colors = getTemperatureAdjustedColors(288, 0.7)

// Auto-determine planet type from mass/radius
const type = getAutoType(1.0, 1.0) // Returns 'terrestrial'
\`\`\`

## Examples

### Earth-like Planet

\`\`\`tsx
const earthConfig = {
  type: 'terrestrial',
  radius: 1.0,
  mass: 1.0,
  temperature: 288,
  biomass: 0.7,
  liquidHeight: 0.55,
  continentCount: 5,
  colors: {
    atmosphere: '#87CEEB',
    ocean: '#1E90FF',
    lowland: '#32CD32',
    // ... other colors
  }
}
\`\`\`

### Gas Giant

\`\`\`tsx
const gasGiantConfig = {
  type: 'gaseous',
  radius: 2.5,
  mass: 8.0,
  temperature: 165,
  colors: {
    atmosphere: '#DAA520',
    ocean: '#B8860B',
    // ... other colors
  }
}
\`\`\`

### Hot Venus-like Planet

\`\`\`tsx
const venusConfig = {
  type: 'terrestrial',
  radius: 0.9,
  mass: 0.8,
  temperature: 737,
  biomass: 0.0,
  volcanicActivity: 0.8,
  colors: {
    atmosphere: '#FFA500',
    ocean: '#FF4500', // Molten rock
    // ... other colors
  }
}
\`\`\`

## TypeScript Support

The library is written in TypeScript and includes full type definitions:

\`\`\`tsx
import type { PlanetConfig } from '@your-username/planet-generator'

const config: PlanetConfig = {
  // Full type safety and autocomplete
}
\`\`\`

## Performance Tips

- Use lower geometry resolution for mobile devices
- Reduce `noiseScale` for better performance
- Disable debug mode in production
- Consider using `SimplePlanetMesh` for simpler scenes

## Browser Support

- Modern browsers with WebGL support
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## License

MIT License - see LICENSE file for details.

## Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to our GitHub repository.



<!-- https://v0.dev/chat/fork-of-procedural-planet-generator-sa7E9M63cOy -->