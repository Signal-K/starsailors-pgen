import * as react_jsx_runtime from 'react/jsx-runtime';

interface PlanetConfig {
    type: "terrestrial" | "gaseous";
    seed: number;
    radius: number;
    temperature: number;
    biomass: number;
    mass: number;
    terrainRoughness: number;
    liquidHeight: number;
    volcanicActivity: number;
    continentSize: number;
    continentCount: number;
    noiseScale: number;
    debugMode?: boolean;
    visibleTerrains: {
        ocean: boolean;
        beach: boolean;
        lowland: boolean;
        midland: boolean;
        highland: boolean;
        mountain: boolean;
        snow: boolean;
    };
    colors: {
        atmosphere: string;
        ocean: string;
        oceanPattern: string;
        beach: string;
        lowland: string;
        midland: string;
        highland: string;
        mountain: string;
        snow: string;
    };
}
declare const defaultPlanetConfig: PlanetConfig;
declare const simplePlanetPresets: Record<string, PlanetConfig>;
declare function getLiquidType(temperature: number): {
    name: string;
    color: string;
    patternColor: string;
};
declare function getTemperatureAdjustedColors(temperature: number, biomass: number): {
    beach: string;
    lowland: string;
    midland: string;
    highland: string;
    mountain: string;
    snow: string;
};
declare function getAutoType(mass: number, radius: number): "terrestrial" | "gaseous";
declare function getSimplifiedColors(config: PlanetConfig): {
    primary: string;
    secondary: string;
    accent: string;
};
declare function updateFromSimplifiedColors(config: PlanetConfig, colors: {
    primary: string;
    secondary: string;
    accent: string;
}): Partial<PlanetConfig>;
declare function createSimplifiedConfig(config: PlanetConfig): {
    type: "terrestrial" | "gaseous";
    radius: number;
    mass: number;
    density: number;
    seed: number;
    colors: {
        primary: string;
        secondary: string;
        accent: string;
    };
    fullConfig: PlanetConfig;
};

interface PlanetProps {
    config: PlanetConfig;
}
declare function Planet({ config }: PlanetProps): react_jsx_runtime.JSX.Element | null;

interface PlanetViewerProps {
    planetConfig: PlanetConfig;
    onConfigChange: (config: Partial<PlanetConfig>) => void;
}
declare function PlanetViewer({ planetConfig, onConfigChange }: PlanetViewerProps): react_jsx_runtime.JSX.Element;

interface SimplePlanetViewerProps {
    planetConfig: PlanetConfig;
    onConfigChange: (config: Partial<PlanetConfig>) => void;
}
declare function SimplePlanetViewer({ planetConfig, onConfigChange }: SimplePlanetViewerProps): react_jsx_runtime.JSX.Element;

interface SimplePlanetMeshProps {
    config: PlanetConfig;
}
declare function SimplePlanetMesh({ config }: SimplePlanetMeshProps): react_jsx_runtime.JSX.Element | null;

interface SettingsPanelProps {
    planetConfig: PlanetConfig;
    onChange: (config: Partial<PlanetConfig>) => void;
}
declare function SettingsPanel({ planetConfig, onChange }: SettingsPanelProps): react_jsx_runtime.JSX.Element;

interface SimplePlanetSettingsProps {
    planetConfig: PlanetConfig;
    onChange: (config: Partial<PlanetConfig>) => void;
}
declare function SimplePlanetSettings({ planetConfig, onChange }: SimplePlanetSettingsProps): react_jsx_runtime.JSX.Element;

interface ColorPickerProps {
    color: string;
    onChange: (color: string) => void;
    label?: string;
}
declare function ColorPicker({ color, onChange, label }: ColorPickerProps): react_jsx_runtime.JSX.Element;

declare const vertexShader = "\n  varying vec2 vUv;\n  varying vec3 vNormal;\n  varying vec3 vPosition;\n  varying float vElevation;\n  varying vec3 vOrigPosition;\n  \n  uniform float time;\n  uniform float surfaceRoughness;\n  uniform float volcanicActivity;\n  uniform float isGaseous;\n  uniform float seed;\n  uniform float continentSize;\n  uniform float continentCount;\n  uniform float noiseScale;\n  \n  // Simplex 3D Noise\n  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\n  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\n\n  float snoise(vec3 v){ \n    const vec2 C = vec2(1.0/6.0, 1.0/3.0);\n    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);\n\n    vec3 i = floor(v + dot(v, C.yyy));\n    vec3 x0 = v - i + dot(i, C.xxx);\n\n    vec3 g = step(x0.yzx, x0.xyz);\n    vec3 l = 1.0 - g;\n    vec3 i1 = min(g.xyz, l.zxy);\n    vec3 i2 = max(g.xyz, l.zxy);\n\n    vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n    vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n    vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n\n    i = mod(i, 289.0); \n    vec4 p = permute(permute(permute( \n              i.z + vec4(0.0, i1.z, i2.z, 1.0))\n            + i.y + vec4(0.0, i1.y, i2.y, 1.0)) \n            + i.x + vec4(0.0, i1.x, i2.x, 1.0));\n\n    float n_ = 1.0/7.0;\n    vec3 ns = n_ * D.wyz - D.xzx;\n\n    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);\n\n    vec4 x_ = floor(j * ns.z);\n    vec4 y_ = floor(j - 7.0 * x_);\n\n    vec4 x = x_ *ns.x + ns.yyyy;\n    vec4 y = y_ *ns.x + ns.yyyy;\n    vec4 h = 1.0 - abs(x) - abs(y);\n\n    vec4 b0 = vec4(x.xy, y.xy);\n    vec4 b1 = vec4(x.zw, y.zw);\n\n    vec4 s0 = floor(b0)*2.0 + 1.0;\n    vec4 s1 = floor(b1)*2.0 + 1.0;\n    vec4 sh = -step(h, vec4(0.0));\n\n    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;\n    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;\n\n    vec3 p0 = vec3(a0.xy,h.x);\n    vec3 p1 = vec3(a0.zw,h.y);\n    vec3 p2 = vec3(a1.xy,h.z);\n    vec3 p3 = vec3(a1.zw,h.w);\n\n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n\n    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n    m = m * m;\n    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));\n  }\n\n  // Fractal Brownian Motion\n  float fbm(vec3 p, int octaves) {\n    float value = 0.0;\n    float amplitude = 1.0;\n    float frequency = 1.0;\n    float persistence = 0.5;\n    \n    // Use a fixed seed for terrain to keep it static\n    vec3 fixedPos = p + vec3(seed * 0.01);\n    \n    for (int i = 0; i < octaves; i++) {\n      if (i >= octaves) break;\n      value += amplitude * snoise(fixedPos * frequency);\n      amplitude *= persistence;\n      frequency *= 2.0;\n    }\n    \n    return value;\n  }\n\n  // Generate continent mask\n  float generateContinents(vec3 position) {\n    // Use the seed to create different continent patterns\n    vec3 seedOffset = vec3(seed * 0.1, seed * 0.2, seed * 0.3);\n    \n    // Base continent noise\n    float continentNoise = 0.0;\n    \n    // Generate multiple continent centers\n    for (float i = 0.0; i < 10.0; i++) {\n      if (i >= continentCount) break;\n      \n      // Create a unique position for each continent center\n      float angle1 = (i / continentCount) * 6.28 + seed * 0.1;\n      float angle2 = (i / continentCount) * 3.14 + seed * 0.2;\n      \n      vec3 continentCenter = vec3(\n        sin(angle1) * cos(angle2),\n        sin(angle1) * sin(angle2),\n        cos(angle1)\n      );\n      \n      // Distance to continent center\n      float dist = distance(position, continentCenter);\n      \n      // Continent shape with some noise\n      float continentShape = smoothstep(continentSize, 0.0, dist);\n      \n      // Add some noise to the continent edges\n      float edgeNoise = fbm(position * 2.0 + seedOffset + continentCenter, 3) * 0.5;\n      \n      // Combine\n      continentNoise = max(continentNoise, continentShape + edgeNoise * 0.3);\n    }\n    \n    // Add some small islands\n    float islandNoise = fbm(position * 3.0 + seedOffset, 4) * 0.3;\n    \n    return clamp(continentNoise + islandNoise * 0.3, 0.0, 1.0);\n  }\n\n  // Enhanced texture detail function\n  float getTextureDetail(vec3 position, float scale) {\n    return fbm(position * scale, 3) * 0.05;\n  }\n\n  void main() {\n    vUv = uv;\n    vNormal = normal;\n    vPosition = position;\n    vOrigPosition = position;\n    \n    vec3 pos = position;\n    float elevation = 0.0;\n    \n    if (isGaseous > 0.5) {\n      // Gas giant features - keep these animated\n      float bands = sin(pos.y * 10.0 + time * 0.1) * 0.5;\n      float storms = snoise(pos * vec3(2.0, 8.0, 2.0) + time * 0.15) * 0.5;\n      float cyclones = snoise(pos * vec3(4.0, 1.0, 4.0) + time * 0.05) * 0.25;\n      \n      // Add more detailed texture to gas giants\n      float gasDetail = getTextureDetail(pos * 10.0, 20.0);\n      \n      elevation = mix(bands, storms, 0.5) + cyclones + gasDetail;\n      elevation *= 0.05; // Reduced distortion for gas giants\n    } else {\n      // Generate continent mask\n      float continentMask = generateContinents(normalize(position));\n      \n      // Generate detailed terrain only on continents\n      float detailedTerrain = fbm(position * surfaceRoughness * noiseScale + vec3(seed), 5) * 0.5;\n      \n      // Add more micro-detail to terrain\n      float microDetail = getTextureDetail(position * 50.0 * noiseScale, 100.0);\n      detailedTerrain += microDetail;\n      \n      // Apply the continent mask to the terrain\n      float maskedTerrain = detailedTerrain * continentMask;\n      \n      // Add some base terrain for underwater features\n      float baseTerrain = fbm(position * 0.5 * noiseScale + vec3(seed * 2.0), 3) * 0.02;\n      \n      // Add volcanic features\n      float volcanic = 0.0;\n      if (volcanicActivity > 0.0) {\n        volcanic = pow(fbm(position * 8.0 * noiseScale + vec3(seed * 3.0), 2), 3.0) * volcanicActivity * continentMask;\n      }\n      \n      // Add ridges and cracks to terrain\n      float ridges = 1.0 - abs(fbm(position * 12.0 * noiseScale + vec3(seed * 4.0), 3));\n      ridges = pow(ridges, 3.0) * 0.15 * continentMask;\n      \n      // Combine all terrain features\n      elevation = maskedTerrain * 0.15 + baseTerrain + volcanic * 0.1 + ridges * 0.05;\n      \n      // Make sure continents have a minimum height\n      elevation = mix(baseTerrain, elevation, continentMask);\n    }\n    \n    vElevation = elevation;\n    \n    // Apply displacement\n    pos += normal * elevation;\n    \n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n  }\n";

declare const fragmentShader = "\n  varying vec2 vUv;\n  varying vec3 vNormal;\n  varying vec3 vPosition;\n  varying float vElevation;\n  varying vec3 vOrigPosition;\n  \n  uniform float time;\n  uniform float isGaseous;\n  uniform float liquidHeight;\n  uniform float temperature;\n  uniform float biomass;\n  uniform float debugMode;\n  uniform float seed;\n  uniform float continentSize;\n  uniform float continentCount;\n  \n  // Visibility toggles for debug mode\n  uniform vec4 visibleTerrains; // x: ocean, y: beach, z: lowland, w: midland\n  uniform vec4 visibleTerrains2; // x: highland, y: mountain, z: snow, w: unused\n  \n  uniform vec3 atmosphereColor;\n  uniform vec3 oceanColor;\n  uniform vec3 oceanPatternColor;\n  uniform vec3 beachColor;\n  uniform vec3 lowlandColor;\n  uniform vec3 midlandColor;\n  uniform vec3 highlandColor;\n  uniform vec3 mountainColor;\n  uniform vec3 snowColor;\n  \n  // Simplex 3D Noise\n  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\n  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\n\n  float snoise(vec3 v){ \n    const vec2 C = vec2(1.0/6.0, 1.0/3.0);\n    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);\n\n    vec3 i = floor(v + dot(v, C.yyy));\n    vec3 x0 = v - i + dot(i, C.xxx);\n\n    vec3 g = step(x0.yzx, x0.xyz);\n    vec3 l = 1.0 - g;\n    vec3 i1 = min(g.xyz, l.zxy);\n    vec3 i2 = max(g.xyz, l.zxy);\n\n    vec3 x1 = x0 - i1 + 1.0 * C.xxx;\n    vec3 x2 = x0 - i2 + 2.0 * C.xxx;\n    vec3 x3 = x0 - 1. + 3.0 * C.xxx;\n\n    i = mod(i, 289.0); \n    vec4 p = permute(permute(permute( \n              i.z + vec4(0.0, i1.z, i2.z, 1.0))\n            + i.y + vec4(0.0, i1.y, i2.y, 1.0)) \n            + i.x + vec4(0.0, i1.x, i2.x, 1.0));\n\n    float n_ = 1.0/7.0;\n    vec3 ns = n_ * D.wyz - D.xzx;\n\n    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);\n\n    vec4 x_ = floor(j * ns.z);\n    vec4 y_ = floor(j - 7.0 * x_);\n\n    vec4 x = x_ *ns.x + ns.yyyy;\n    vec4 y = y_ *ns.x + ns.yyyy;\n    vec4 h = 1.0 - abs(x) - abs(y);\n\n    vec4 b0 = vec4(x.xy, y.xy);\n    vec4 b1 = vec4(x.zw, y.zw);\n\n    vec4 s0 = floor(b0)*2.0 + 1.0;\n    vec4 s1 = floor(b1)*2.0 + 1.0;\n    vec4 sh = -step(h, vec4(0.0));\n\n    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;\n    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;\n\n    vec3 p0 = vec3(a0.xy,h.x);\n    vec3 p1 = vec3(a0.zw,h.y);\n    vec3 p2 = vec3(a1.xy,h.z);\n    vec3 p3 = vec3(a1.zw,h.w);\n\n    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n    p0 *= norm.x;\n    p1 *= norm.y;\n    p2 *= norm.z;\n    p3 *= norm.w;\n\n    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n    m = m * m;\n    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));\n  }\n\n  // Fractal Brownian Motion\n  float fbm(vec3 p, int octaves) {\n    float value = 0.0;\n    float amplitude = 1.0;\n    float frequency = 1.0;\n    float persistence = 0.5;\n    \n    // Use a fixed seed for terrain to keep it static\n    vec3 fixedPos = p + vec3(seed * 0.01);\n    \n    for (int i = 0; i < octaves; i++) {\n      if (i >= octaves) break;\n      value += amplitude * snoise(fixedPos * frequency);\n      amplitude *= persistence;\n      frequency *= 2.0;\n    }\n    \n    return value;\n  }\n\n  // Generate continent mask - same as in vertex shader\n  float generateContinents(vec3 position) {\n    // Use the seed to create different continent patterns\n    vec3 seedOffset = vec3(seed * 0.1, seed * 0.2, seed * 0.3);\n    \n    // Base continent noise\n    float continentNoise = 0.0;\n    \n    // Generate multiple continent centers\n    for (float i = 0.0; i < 10.0; i++) {\n      if (i >= continentCount) break;\n      \n      // Create a unique position for each continent center\n      float angle1 = (i / continentCount) * 6.28 + seed * 0.1;\n      float angle2 = (i / continentCount) * 3.14 + seed * 0.2;\n      \n      vec3 continentCenter = vec3(\n        sin(angle1) * cos(angle2),\n        sin(angle1) * sin(angle2),\n        cos(angle1)\n      );\n      \n      // Distance to continent center\n      float dist = distance(position, continentCenter);\n      \n      // Continent shape with some noise\n      float continentShape = smoothstep(continentSize, 0.0, dist);\n      \n      // Add some noise to the continent edges\n      float edgeNoise = fbm(position * 2.0 + seedOffset + continentCenter, 3) * 0.5;\n      \n      // Combine\n      continentNoise = max(continentNoise, continentShape + edgeNoise * 0.3);\n    }\n    \n    // Add some small islands\n    float islandNoise = fbm(position * 3.0 + seedOffset, 4) * 0.3;\n    \n    return clamp(continentNoise + islandNoise * 0.3, 0.0, 1.0);\n  }\n\n  // Enhanced texture detail function\n  float getTextureDetail(vec3 position, float scale, float intensity) {\n    float detail = fbm(position * scale, 3) * intensity;\n    return detail;\n  }\n\n  void main() {\n    vec3 normal = normalize(vNormal);\n    float fresnel = pow(1.0 - abs(dot(normalize(vPosition), normal)), 2.0);\n    \n    vec3 finalColor;\n    \n    if (isGaseous > 0.5) {\n      // Gas giant coloring\n      float bands = sin(vPosition.y * 10.0 + time * 0.1) * 0.5 + 0.5;\n      \n      // Add more detailed texture to gas bands\n      float bandDetail = getTextureDetail(vPosition * 5.0, 10.0, 0.3);\n      bands = bands + bandDetail * 0.2;\n      \n      // Create color bands\n      vec3 bandColor1 = atmosphereColor * 0.8;\n      vec3 bandColor2 = atmosphereColor * 1.2;\n      vec3 bandColor = mix(bandColor1, bandColor2, bands);\n      \n      // Add storm features\n      float stormPattern = snoise(vPosition * vec3(8.0, 2.0, 8.0) + time * 0.1);\n      float stormDetail = getTextureDetail(vPosition * 15.0, 20.0, 0.5);\n      stormPattern = stormPattern + stormDetail * 0.3;\n      \n      vec3 stormColor = vec3(1.0, 1.0, 0.9) * smoothstep(0.6, 0.8, stormPattern);\n      \n      finalColor = mix(bandColor, stormColor, smoothstep(0.6, 0.8, stormPattern) * 0.5);\n      \n      // Add swirling patterns\n      float swirl = snoise(vPosition * 3.0 + vec3(time * 0.02, time * 0.01, 0.0)) * 0.2;\n      finalColor = mix(finalColor, bandColor * 1.3, swirl);\n      \n      // Add atmosphere glow\n      finalColor = mix(finalColor, atmosphereColor, fresnel * 0.5);\n    } else {\n      // Terrestrial planet coloring\n      float height = vElevation + 0.5; // Normalize to 0-1 range approximately\n      \n      // Get continent mask for sharp land/water boundaries\n      float continentMask = generateContinents(normalize(vOrigPosition));\n      \n      // Ocean pattern with enhanced detail\n      vec3 oceanPos = vOrigPosition * 20.0 + vec3(time * 0.05, 0.0, 0.0);\n      float oceanPattern = snoise(oceanPos) * 0.5 + 0.5;\n      float oceanDetail = getTextureDetail(vOrigPosition * 30.0, 50.0, 0.2);\n      oceanPattern = oceanPattern + oceanDetail;\n      \n      // Beach width\n      float beachWidth = 0.03;\n      \n      // Determine color based on height and continent mask\n      vec3 terrainColor;\n      \n      if (debugMode > 0.5) {\n        // Debug mode - show distinct terrain levels with visibility toggles\n        if (height < liquidHeight) {\n          // Ocean\n          terrainColor = visibleTerrains.x > 0.5 ? oceanColor : vec3(0.0, 0.0, 0.0);\n        } else if (height < liquidHeight + beachWidth) {\n          // Beach\n          terrainColor = visibleTerrains.y > 0.5 ? beachColor : vec3(0.0, 0.0, 0.0);\n        } else if (height < liquidHeight + 0.15) {\n          // Lowland\n          terrainColor = visibleTerrains.z > 0.5 ? lowlandColor : vec3(0.0, 0.0, 0.0);\n        } else if (height < liquidHeight + 0.3) {\n          // Midland\n          terrainColor = visibleTerrains.w > 0.5 ? midlandColor : vec3(0.0, 0.0, 0.0);\n        } else if (height < liquidHeight + 0.45) {\n          // Highland\n          terrainColor = visibleTerrains2.x > 0.5 ? highlandColor : vec3(0.0, 0.0, 0.0);\n        } else if (height < liquidHeight + 0.6) {\n          // Mountain\n          terrainColor = visibleTerrains2.y > 0.5 ? mountainColor : vec3(0.0, 0.0, 0.0);\n        } else {\n          // Snow\n          terrainColor = visibleTerrains2.z > 0.5 ? snowColor : vec3(0.0, 0.0, 0.0);\n        }\n      } else {\n        // Normal rendering with smooth transitions and sharp coastlines\n        if (continentMask < 0.2 || height < liquidHeight - 0.02) {\n          // Deep ocean\n          vec3 baseOceanColor = mix(oceanColor, oceanPatternColor, oceanPattern * 0.3);\n          float depth = 1.0 - (height / liquidHeight);\n          terrainColor = mix(baseOceanColor * 1.2, baseOceanColor * 0.7, depth);\n          \n          // Add waves and more detailed ocean texture\n          float waves = snoise(vPosition * 50.0 + vec3(time * 0.2, 0.0, 0.0)) * 0.02;\n          float currentPattern = snoise(vPosition * 20.0 + vec3(time * 0.1, time * 0.05, 0.0)) * 0.03;\n          terrainColor += vec3(waves + currentPattern);\n        } else if (height < liquidHeight + beachWidth) {\n          // Beach/shoreline transition\n          float beachBlend = smoothstep(liquidHeight, liquidHeight + beachWidth, height);\n          terrainColor = mix(oceanColor, beachColor, beachBlend);\n          \n          // Add beach texture\n          float sandRipples = snoise(vOrigPosition * 100.0) * 0.05;\n          terrainColor += vec3(sandRipples);\n        } else {\n          // Land - normalize height above water level\n          float landHeight = (height - liquidHeight) / 0.5; // Scale to 0-1 for land\n          \n          // Add more detailed terrain texture\n          float terrainDetail = getTextureDetail(vOrigPosition * 50.0, 100.0, 0.15);\n          float terrainNoise = fbm(vOrigPosition * 10.0 + vec3(seed * 5.0), 2) * 0.1 + terrainDetail;\n          \n          // Temperature affects snow line\n          float snowLine = 0.8 - (temperature / 700.0) * 0.4;\n          \n          if (landHeight > snowLine) {\n            // Snow caps\n            float snowBlend = smoothstep(snowLine, snowLine + 0.1, landHeight);\n            terrainColor = mix(mountainColor, snowColor, snowBlend);\n            \n            // Add snow texture\n            float snowDetail = snoise(vOrigPosition * 80.0) * 0.05;\n            terrainColor += vec3(snowDetail);\n          } else if (landHeight < 0.25) {\n            // Lowland - transition from beach to lowland\n            float lowlandBlend = smoothstep(0.0, 0.25, landHeight + terrainNoise);\n            terrainColor = mix(beachColor, lowlandColor, lowlandBlend);\n            \n            // Add lowland texture\n            float grassDetail = snoise(vOrigPosition * 120.0) * 0.05;\n            terrainColor += vec3(0.0, grassDetail, 0.0);\n          } else if (landHeight < 0.5) {\n            // Midland\n            float midlandBlend = smoothstep(0.25, 0.5, landHeight + terrainNoise);\n            terrainColor = mix(lowlandColor, midlandColor, midlandBlend);\n            \n            // Add midland texture\n            float forestDetail = snoise(vOrigPosition * 100.0) * 0.05;\n            terrainColor += vec3(0.0, forestDetail, 0.0);\n          } else if (landHeight < 0.75) {\n            // Highland\n            float highlandBlend = smoothstep(0.5, 0.75, landHeight + terrainNoise);\n            terrainColor = mix(midlandColor, highlandColor, highlandBlend);\n            \n            // Add highland texture\n            float rockDetail = snoise(vOrigPosition * 80.0) * 0.05;\n            terrainColor += vec3(rockDetail * 0.5, rockDetail * 0.3, 0.0);\n          } else {\n            // Mountain\n            float mountainBlend = smoothstep(0.75, 0.9, landHeight + terrainNoise);\n            terrainColor = mix(highlandColor, mountainColor, mountainBlend);\n            \n            // Add mountain texture\n            float peakDetail = snoise(vOrigPosition * 150.0) * 0.1;\n            terrainColor += vec3(peakDetail);\n          }\n          \n          // Adjust color based on temperature\n          float tempFactor = clamp((temperature - 50.0) / 650.0, 0.0, 1.0);\n          if (tempFactor < 0.3 && landHeight > 0.6) {\n            // Cold - add ice/snow to high elevations\n            float snowAmount = smoothstep(0.6, 0.8, landHeight);\n            terrainColor = mix(terrainColor, snowColor, snowAmount);\n          } else if (tempFactor > 0.7) {\n            // Hot - more reddish/desert colors\n            terrainColor = mix(terrainColor, vec3(0.8, 0.6, 0.4), 0.3);\n          }\n          \n          // Add biomass (vegetation) to appropriate areas\n          if (biomass > 0.0 && tempFactor > 0.2 && tempFactor < 0.8) {\n            float vegetationAmount = biomass * smoothstep(0.1, 0.4, landHeight) * (1.0 - smoothstep(0.6, 0.9, landHeight));\n            \n            // Vegetation detail noise\n            float vegDetail = fbm(vOrigPosition * 15.0 + vec3(seed * 7.0), 2) * 0.5 + 0.5;\n            vegetationAmount *= vegDetail;\n            \n            // Adjust vegetation color based on temperature\n            vec3 vegetationColor = mix(vec3(0.1, 0.5, 0.1), vec3(0.2, 0.6, 0.2), tempFactor); // Green\n            terrainColor = mix(terrainColor, vegetationColor, vegetationAmount);\n          }\n        }\n      }\n      \n      // Add atmosphere at edges\n      finalColor = mix(terrainColor, atmosphereColor, fresnel * 0.4);\n      \n      // Add clouds\n      float cloudCoverage = 0.3;\n      float cloudSpeed = 0.01;\n      vec3 cloudPos = vOrigPosition * 2.0 + vec3(time * cloudSpeed, 0.0, 0.0);\n      float cloudNoise = fbm(cloudPos + vec3(seed * 9.0), 4);\n      float cloudDetail = getTextureDetail(cloudPos * 2.0, 5.0, 0.2);\n      float clouds = smoothstep(0.4, 0.6, cloudNoise + cloudDetail) * cloudCoverage;\n      \n      // Only add clouds above land or near coastlines\n      if (height > liquidHeight - 0.05) {\n        finalColor = mix(finalColor, vec3(1.0), clouds * 0.7);\n      }\n    }\n    \n    // Add lighting\n    float light = dot(normal, normalize(vec3(1.0, 1.0, 1.0))) * 0.5 + 0.5;\n    finalColor *= light;\n    \n    gl_FragColor = vec4(finalColor, 1.0);\n  }\n";

declare function generateNoise(width: number, height: number, scale: number): number[][];
declare function generateSimpleNoise(seed: number, persistence: number): (x: number, y: number, z: number) => number;
declare function generatePerlinNoise(seed: number, octaves: number, persistence: number, lacunarity: number): (x: number, y: number, z: number) => number;
declare global {
    interface Math {
        seedrandom: (seed: string) => () => number;
    }
}

export { ColorPicker, Planet, PlanetViewer, SettingsPanel, SimplePlanetMesh, SimplePlanetSettings, SimplePlanetViewer, createSimplifiedConfig, defaultPlanetConfig, fragmentShader, generateNoise, generatePerlinNoise, generateSimpleNoise, getAutoType, getLiquidType, getSimplifiedColors, getTemperatureAdjustedColors, simplePlanetPresets, updateFromSimplifiedColors, vertexShader };
export type { PlanetConfig };
