'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var fiber = require('@react-three/fiber');
var THREE = require('three');
var drei = require('@react-three/drei');
var lucideReact = require('lucide-react');
var TabsPrimitive = require('@radix-ui/react-tabs');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var SliderPrimitive = require('@radix-ui/react-slider');
var LabelPrimitive = require('@radix-ui/react-label');
var classVarianceAuthority = require('class-variance-authority');
var SwitchPrimitives = require('@radix-ui/react-switch');
var reactSlot = require('@radix-ui/react-slot');
var CheckboxPrimitive = require('@radix-ui/react-checkbox');
var reactColorful = require('react-colorful');
var PopoverPrimitive = require('@radix-ui/react-popover');
var SelectPrimitive = require('@radix-ui/react-select');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);
var THREE__namespace = /*#__PURE__*/_interopNamespaceDefault(THREE);
var TabsPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(TabsPrimitive);
var SliderPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(SliderPrimitive);
var LabelPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(LabelPrimitive);
var SwitchPrimitives__namespace = /*#__PURE__*/_interopNamespaceDefault(SwitchPrimitives);
var CheckboxPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(CheckboxPrimitive);
var PopoverPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(PopoverPrimitive);
var SelectPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(SelectPrimitive);

const defaultPlanetConfig = {
    type: "terrestrial",
    seed: Math.floor(Math.random() * 10000),
    radius: 1.0,
    temperature: 288, // Earth average in Kelvin (15°C)
    biomass: 0.7,
    mass: 1.0,
    terrainRoughness: 0.6,
    liquidHeight: 0.55,
    volcanicActivity: 0.2,
    continentSize: 0.5,
    continentCount: 5,
    noiseScale: 1.0,
    debugMode: false,
    visibleTerrains: {
        ocean: true,
        beach: true,
        lowland: true,
        midland: true,
        highland: true,
        mountain: true,
        snow: true,
    },
    colors: {
        atmosphere: "#87CEEB",
        ocean: "#1E90FF",
        oceanPattern: "#1E7FFF",
        beach: "#F0E68C",
        lowland: "#32CD32",
        midland: "#228B22",
        highland: "#8B4513",
        mountain: "#A0A0A0",
        snow: "#FFFFFF",
    },
};
// Simple planet presets using the full PlanetConfig
const simplePlanetPresets = {
    earth: {
        type: "terrestrial",
        seed: 1234,
        radius: 1.0,
        temperature: 288,
        biomass: 0.7,
        mass: 1.0,
        terrainRoughness: 0.6,
        liquidHeight: 0.55,
        volcanicActivity: 0.2,
        continentSize: 0.5,
        continentCount: 5,
        noiseScale: 1.0,
        debugMode: false,
        visibleTerrains: {
            ocean: true,
            beach: true,
            lowland: true,
            midland: true,
            highland: true,
            mountain: true,
            snow: true,
        },
        colors: {
            atmosphere: "#87CEEB",
            ocean: "#1E90FF",
            oceanPattern: "#1E7FFF",
            beach: "#F0E68C",
            lowland: "#32CD32",
            midland: "#228B22",
            highland: "#8B4513",
            mountain: "#A0A0A0",
            snow: "#FFFFFF",
        },
    },
    mars: {
        type: "terrestrial",
        seed: 5678,
        radius: 0.5,
        temperature: 210, // Mars average
        biomass: 0.0,
        mass: 0.1,
        terrainRoughness: 0.8,
        liquidHeight: 0.3,
        volcanicActivity: 0.1,
        continentSize: 0.8,
        continentCount: 2,
        noiseScale: 1.2,
        debugMode: false,
        visibleTerrains: {
            ocean: true,
            beach: true,
            lowland: true,
            midland: true,
            highland: true,
            mountain: true,
            snow: true,
        },
        colors: {
            atmosphere: "#CD853F",
            ocean: "#8B4513",
            oceanPattern: "#A0522D",
            beach: "#CD853F",
            lowland: "#A0522D",
            midland: "#8B4513",
            highland: "#8B0000",
            mountain: "#696969",
            snow: "#F5F5DC",
        },
    },
    jupiter: {
        type: "gaseous",
        seed: 9012,
        radius: 2.5,
        temperature: 165, // Jupiter average
        biomass: 0.0,
        mass: 8.0,
        terrainRoughness: 0.3,
        liquidHeight: 0.0,
        volcanicActivity: 0.0,
        continentSize: 0.0,
        continentCount: 0,
        noiseScale: 0.5,
        debugMode: false,
        visibleTerrains: {
            ocean: true,
            beach: true,
            lowland: true,
            midland: true,
            highland: true,
            mountain: true,
            snow: true,
        },
        colors: {
            atmosphere: "#DAA520",
            ocean: "#B8860B",
            oceanPattern: "#8B7355",
            beach: "#DAA520",
            lowland: "#B8860B",
            midland: "#8B7355",
            highland: "#8B4513",
            mountain: "#654321",
            snow: "#F5DEB3",
        },
    },
    neptune: {
        type: "gaseous",
        seed: 3456,
        radius: 2.0,
        temperature: 72, // Neptune average
        biomass: 0.0,
        mass: 5.0,
        terrainRoughness: 0.2,
        liquidHeight: 0.0,
        volcanicActivity: 0.0,
        continentSize: 0.0,
        continentCount: 0,
        noiseScale: 0.3,
        debugMode: false,
        visibleTerrains: {
            ocean: true,
            beach: true,
            lowland: true,
            midland: true,
            highland: true,
            mountain: true,
            snow: true,
        },
        colors: {
            atmosphere: "#4169E1",
            ocean: "#0000CD",
            oceanPattern: "#191970",
            beach: "#4169E1",
            lowland: "#0000CD",
            midland: "#191970",
            highland: "#000080",
            mountain: "#483D8B",
            snow: "#E6E6FA",
        },
    },
    venus: {
        type: "terrestrial",
        seed: 7890,
        radius: 0.9,
        temperature: 737, // Venus average
        biomass: 0.0,
        mass: 0.8,
        terrainRoughness: 0.4,
        liquidHeight: 0.0,
        volcanicActivity: 0.8,
        continentSize: 0.6,
        continentCount: 3,
        noiseScale: 0.8,
        debugMode: false,
        visibleTerrains: {
            ocean: true,
            beach: true,
            lowland: true,
            midland: true,
            highland: true,
            mountain: true,
            snow: true,
        },
        colors: {
            atmosphere: "#FFA500",
            ocean: "#FF4500",
            oceanPattern: "#FF6347",
            beach: "#FFA500",
            lowland: "#FF8C00",
            midland: "#FF4500",
            highland: "#8B0000",
            mountain: "#2F4F4F",
            snow: "#D3D3D3",
        },
    },
};
// Function to determine liquid type based on temperature
function getLiquidType(temperature) {
    // Temperature ranges in Kelvin
    if (temperature < 90) {
        // Liquid nitrogen (63K to 77K)
        return {
            name: "Liquid Nitrogen",
            color: "#D6E7FF",
            patternColor: "#C0D6FF",
        };
    }
    else if (temperature < 120) {
        // Liquid methane (90K to 112K)
        return {
            name: "Liquid Methane",
            color: "#A2CDB0",
            patternColor: "#8EBDA0",
        };
    }
    else if (temperature < 373) {
        // Water (273K to 373K)
        return {
            name: "Water",
            color: "#1E90FF",
            patternColor: "#1E7FFF",
        };
    }
    else if (temperature < 600) {
        // Sulfuric acid (283K to 610K)
        return {
            name: "Sulfuric Acid",
            color: "#D6C562",
            patternColor: "#C4B250",
        };
    }
    else {
        // Molten silicates/lava (>1000K)
        return {
            name: "Molten Rock",
            color: "#FF4500",
            patternColor: "#FF2400",
        };
    }
}
// Function to adjust terrain colors based on temperature
function getTemperatureAdjustedColors(temperature, biomass) {
    // Base colors
    let beach = "#F0E68C"; // Default sandy beach
    let lowland = "#32CD32"; // Default green lowland
    let midland = "#228B22"; // Default forest green
    let highland = "#8B4513"; // Default brown
    let mountain = "#A0A0A0"; // Default gray
    let snow = "#FFFFFF"; // Default white
    // Cold planet (< 240K)
    if (temperature < 240) {
        beach = "#E0E0E0"; // Icy shore
        lowland = "#E8E8F0"; // Light ice
        midland = "#C8D8E0"; // Bluish ice
        highland = "#A8B8C0"; // Darker ice
        mountain = "#889098"; // Dark gray
        snow = "#FFFFFF"; // Pure white
    }
    // Cool planet (240K to 280K)
    else if (temperature < 280) {
        beach = "#D8D8C0"; // Cool sand
        lowland = "#C0D8C0"; // Tundra
        midland = "#A0C0A0"; // Sparse vegetation
        highland = "#909080"; // Rocky tundra
        mountain = "#808080"; // Gray rock
        snow = "#FFFFFF"; // White snow
    }
    // Temperate planet (280K to 310K)
    else if (temperature < 310) {
        // Adjust based on biomass
        const bioFactor = Math.min(biomass * 1.5, 1.0);
        beach = "#F0E68C"; // Sandy beach
        lowland = bioFactor > 0.3 ? "#32CD32" : "#C2CC70"; // Green if biomass, otherwise yellowish
        midland = bioFactor > 0.3 ? "#228B22" : "#A0A060"; // Forest if biomass, otherwise scrubland
        highland = "#8B4513"; // Brown
        mountain = "#A0A0A0"; // Gray
        snow = "#FFFFFF"; // White
    }
    // Hot planet (310K to 400K)
    else if (temperature < 400) {
        beach = "#F8E0A0"; // Light sand
        lowland = biomass > 0.4 ? "#74A662" : "#D8C878"; // Either vegetation or desert
        midland = biomass > 0.4 ? "#567D46" : "#C0A060"; // Either vegetation or desert
        highland = "#B89060"; // Light brown
        mountain = "#A89080"; // Reddish rock
        snow = temperature > 350 ? "#F0F0F0" : "#FFFFFF"; // Slightly off-white at higher temps
    }
    // Very hot planet (400K to 600K)
    else if (temperature < 600) {
        beach = "#F8D080"; // Orange sand
        lowland = "#E0B060"; // Desert
        midland = "#C09050"; // Dark desert
        highland = "#A07040"; // Reddish brown
        mountain = "#805030"; // Dark red rock
        snow = "#E8E8E8"; // Off-white (salt flats)
    }
    // Extremely hot planet (>600K)
    else {
        beach = "#FF9060"; // Orange-red
        lowland = "#E07040"; // Reddish
        midland = "#C05020"; // Dark red
        highland = "#A03010"; // Very dark red
        mountain = "#802000"; // Almost black-red
        snow = "#D0D0D0"; // Light gray (ash)
    }
    return { beach, lowland, midland, highland, mountain, snow };
}
// Auto-determine planet type based on mass and radius
function getAutoType(mass, radius) {
    return mass > 7.5 || radius > 2.5 ? "gaseous" : "terrestrial";
}
// Get simplified colors for simple planet interface (maps to primary terrain colors)
function getSimplifiedColors(config) {
    if (config.type === "gaseous") {
        return {
            primary: config.colors.atmosphere,
            secondary: config.colors.ocean,
            accent: config.colors.oceanPattern,
        };
    }
    else {
        return {
            primary: config.colors.ocean, // Water/ocean
            secondary: config.colors.lowland, // Land
            accent: config.colors.highland, // Mountains
        };
    }
}
// Update full config from simplified colors
function updateFromSimplifiedColors(config, colors) {
    if (config.type === "gaseous") {
        return {
            colors: {
                ...config.colors,
                atmosphere: colors.primary,
                ocean: colors.secondary,
                oceanPattern: colors.accent,
                beach: colors.primary,
                lowland: colors.secondary,
                midland: colors.accent,
                highland: colors.primary,
                mountain: colors.secondary,
                snow: colors.accent,
            },
        };
    }
    else {
        return {
            colors: {
                ...config.colors,
                ocean: colors.primary,
                oceanPattern: colors.primary,
                lowland: colors.secondary,
                midland: colors.secondary,
                highland: colors.accent,
                mountain: colors.accent,
            },
        };
    }
}
// Create a simplified config interface for the simple planet viewer
function createSimplifiedConfig(config) {
    return {
        type: config.type,
        radius: config.radius,
        mass: config.mass,
        density: config.mass / ((config.radius ** 3 * Math.PI * 4) / 3),
        seed: config.seed,
        colors: getSimplifiedColors(config),
        // Include full config for the mesh to use
        fullConfig: config,
    };
}

const vertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vElevation;
  varying vec3 vOrigPosition;
  
  uniform float time;
  uniform float surfaceRoughness;
  uniform float volcanicActivity;
  uniform float isGaseous;
  uniform float seed;
  uniform float continentSize;
  uniform float continentCount;
  uniform float noiseScale;
  
  // Simplex 3D Noise
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){ 
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1. + 3.0 * C.xxx;

    i = mod(i, 289.0); 
    vec4 p = permute(permute(permute( 
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0)) 
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  // Fractal Brownian Motion
  float fbm(vec3 p, int octaves) {
    float value = 0.0;
    float amplitude = 1.0;
    float frequency = 1.0;
    float persistence = 0.5;
    
    // Use a fixed seed for terrain to keep it static
    vec3 fixedPos = p + vec3(seed * 0.01);
    
    for (int i = 0; i < octaves; i++) {
      if (i >= octaves) break;
      value += amplitude * snoise(fixedPos * frequency);
      amplitude *= persistence;
      frequency *= 2.0;
    }
    
    return value;
  }

  // Generate continent mask
  float generateContinents(vec3 position) {
    // Use the seed to create different continent patterns
    vec3 seedOffset = vec3(seed * 0.1, seed * 0.2, seed * 0.3);
    
    // Base continent noise
    float continentNoise = 0.0;
    
    // Generate multiple continent centers
    for (float i = 0.0; i < 10.0; i++) {
      if (i >= continentCount) break;
      
      // Create a unique position for each continent center
      float angle1 = (i / continentCount) * 6.28 + seed * 0.1;
      float angle2 = (i / continentCount) * 3.14 + seed * 0.2;
      
      vec3 continentCenter = vec3(
        sin(angle1) * cos(angle2),
        sin(angle1) * sin(angle2),
        cos(angle1)
      );
      
      // Distance to continent center
      float dist = distance(position, continentCenter);
      
      // Continent shape with some noise
      float continentShape = smoothstep(continentSize, 0.0, dist);
      
      // Add some noise to the continent edges
      float edgeNoise = fbm(position * 2.0 + seedOffset + continentCenter, 3) * 0.5;
      
      // Combine
      continentNoise = max(continentNoise, continentShape + edgeNoise * 0.3);
    }
    
    // Add some small islands
    float islandNoise = fbm(position * 3.0 + seedOffset, 4) * 0.3;
    
    return clamp(continentNoise + islandNoise * 0.3, 0.0, 1.0);
  }

  // Enhanced texture detail function
  float getTextureDetail(vec3 position, float scale) {
    return fbm(position * scale, 3) * 0.05;
  }

  void main() {
    vUv = uv;
    vNormal = normal;
    vPosition = position;
    vOrigPosition = position;
    
    vec3 pos = position;
    float elevation = 0.0;
    
    if (isGaseous > 0.5) {
      // Gas giant features - keep these animated
      float bands = sin(pos.y * 10.0 + time * 0.1) * 0.5;
      float storms = snoise(pos * vec3(2.0, 8.0, 2.0) + time * 0.15) * 0.5;
      float cyclones = snoise(pos * vec3(4.0, 1.0, 4.0) + time * 0.05) * 0.25;
      
      // Add more detailed texture to gas giants
      float gasDetail = getTextureDetail(pos * 10.0, 20.0);
      
      elevation = mix(bands, storms, 0.5) + cyclones + gasDetail;
      elevation *= 0.05; // Reduced distortion for gas giants
    } else {
      // Generate continent mask
      float continentMask = generateContinents(normalize(position));
      
      // Generate detailed terrain only on continents
      float detailedTerrain = fbm(position * surfaceRoughness * noiseScale + vec3(seed), 5) * 0.5;
      
      // Add more micro-detail to terrain
      float microDetail = getTextureDetail(position * 50.0 * noiseScale, 100.0);
      detailedTerrain += microDetail;
      
      // Apply the continent mask to the terrain
      float maskedTerrain = detailedTerrain * continentMask;
      
      // Add some base terrain for underwater features
      float baseTerrain = fbm(position * 0.5 * noiseScale + vec3(seed * 2.0), 3) * 0.02;
      
      // Add volcanic features
      float volcanic = 0.0;
      if (volcanicActivity > 0.0) {
        volcanic = pow(fbm(position * 8.0 * noiseScale + vec3(seed * 3.0), 2), 3.0) * volcanicActivity * continentMask;
      }
      
      // Add ridges and cracks to terrain
      float ridges = 1.0 - abs(fbm(position * 12.0 * noiseScale + vec3(seed * 4.0), 3));
      ridges = pow(ridges, 3.0) * 0.15 * continentMask;
      
      // Combine all terrain features
      elevation = maskedTerrain * 0.15 + baseTerrain + volcanic * 0.1 + ridges * 0.05;
      
      // Make sure continents have a minimum height
      elevation = mix(baseTerrain, elevation, continentMask);
    }
    
    vElevation = elevation;
    
    // Apply displacement
    pos += normal * elevation;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vElevation;
  varying vec3 vOrigPosition;
  
  uniform float time;
  uniform float isGaseous;
  uniform float liquidHeight;
  uniform float temperature;
  uniform float biomass;
  uniform float debugMode;
  uniform float seed;
  uniform float continentSize;
  uniform float continentCount;
  
  // Visibility toggles for debug mode
  uniform vec4 visibleTerrains; // x: ocean, y: beach, z: lowland, w: midland
  uniform vec4 visibleTerrains2; // x: highland, y: mountain, z: snow, w: unused
  
  uniform vec3 atmosphereColor;
  uniform vec3 oceanColor;
  uniform vec3 oceanPatternColor;
  uniform vec3 beachColor;
  uniform vec3 lowlandColor;
  uniform vec3 midlandColor;
  uniform vec3 highlandColor;
  uniform vec3 mountainColor;
  uniform vec3 snowColor;
  
  // Simplex 3D Noise
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){ 
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1. + 3.0 * C.xxx;

    i = mod(i, 289.0); 
    vec4 p = permute(permute(permute( 
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0)) 
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  // Fractal Brownian Motion
  float fbm(vec3 p, int octaves) {
    float value = 0.0;
    float amplitude = 1.0;
    float frequency = 1.0;
    float persistence = 0.5;
    
    // Use a fixed seed for terrain to keep it static
    vec3 fixedPos = p + vec3(seed * 0.01);
    
    for (int i = 0; i < octaves; i++) {
      if (i >= octaves) break;
      value += amplitude * snoise(fixedPos * frequency);
      amplitude *= persistence;
      frequency *= 2.0;
    }
    
    return value;
  }

  // Generate continent mask - same as in vertex shader
  float generateContinents(vec3 position) {
    // Use the seed to create different continent patterns
    vec3 seedOffset = vec3(seed * 0.1, seed * 0.2, seed * 0.3);
    
    // Base continent noise
    float continentNoise = 0.0;
    
    // Generate multiple continent centers
    for (float i = 0.0; i < 10.0; i++) {
      if (i >= continentCount) break;
      
      // Create a unique position for each continent center
      float angle1 = (i / continentCount) * 6.28 + seed * 0.1;
      float angle2 = (i / continentCount) * 3.14 + seed * 0.2;
      
      vec3 continentCenter = vec3(
        sin(angle1) * cos(angle2),
        sin(angle1) * sin(angle2),
        cos(angle1)
      );
      
      // Distance to continent center
      float dist = distance(position, continentCenter);
      
      // Continent shape with some noise
      float continentShape = smoothstep(continentSize, 0.0, dist);
      
      // Add some noise to the continent edges
      float edgeNoise = fbm(position * 2.0 + seedOffset + continentCenter, 3) * 0.5;
      
      // Combine
      continentNoise = max(continentNoise, continentShape + edgeNoise * 0.3);
    }
    
    // Add some small islands
    float islandNoise = fbm(position * 3.0 + seedOffset, 4) * 0.3;
    
    return clamp(continentNoise + islandNoise * 0.3, 0.0, 1.0);
  }

  // Enhanced texture detail function
  float getTextureDetail(vec3 position, float scale, float intensity) {
    float detail = fbm(position * scale, 3) * intensity;
    return detail;
  }

  void main() {
    vec3 normal = normalize(vNormal);
    float fresnel = pow(1.0 - abs(dot(normalize(vPosition), normal)), 2.0);
    
    vec3 finalColor;
    
    if (isGaseous > 0.5) {
      // Gas giant coloring
      float bands = sin(vPosition.y * 10.0 + time * 0.1) * 0.5 + 0.5;
      
      // Add more detailed texture to gas bands
      float bandDetail = getTextureDetail(vPosition * 5.0, 10.0, 0.3);
      bands = bands + bandDetail * 0.2;
      
      // Create color bands
      vec3 bandColor1 = atmosphereColor * 0.8;
      vec3 bandColor2 = atmosphereColor * 1.2;
      vec3 bandColor = mix(bandColor1, bandColor2, bands);
      
      // Add storm features
      float stormPattern = snoise(vPosition * vec3(8.0, 2.0, 8.0) + time * 0.1);
      float stormDetail = getTextureDetail(vPosition * 15.0, 20.0, 0.5);
      stormPattern = stormPattern + stormDetail * 0.3;
      
      vec3 stormColor = vec3(1.0, 1.0, 0.9) * smoothstep(0.6, 0.8, stormPattern);
      
      finalColor = mix(bandColor, stormColor, smoothstep(0.6, 0.8, stormPattern) * 0.5);
      
      // Add swirling patterns
      float swirl = snoise(vPosition * 3.0 + vec3(time * 0.02, time * 0.01, 0.0)) * 0.2;
      finalColor = mix(finalColor, bandColor * 1.3, swirl);
      
      // Add atmosphere glow
      finalColor = mix(finalColor, atmosphereColor, fresnel * 0.5);
    } else {
      // Terrestrial planet coloring
      float height = vElevation + 0.5; // Normalize to 0-1 range approximately
      
      // Get continent mask for sharp land/water boundaries
      float continentMask = generateContinents(normalize(vOrigPosition));
      
      // Ocean pattern with enhanced detail
      vec3 oceanPos = vOrigPosition * 20.0 + vec3(time * 0.05, 0.0, 0.0);
      float oceanPattern = snoise(oceanPos) * 0.5 + 0.5;
      float oceanDetail = getTextureDetail(vOrigPosition * 30.0, 50.0, 0.2);
      oceanPattern = oceanPattern + oceanDetail;
      
      // Beach width
      float beachWidth = 0.03;
      
      // Determine color based on height and continent mask
      vec3 terrainColor;
      
      if (debugMode > 0.5) {
        // Debug mode - show distinct terrain levels with visibility toggles
        if (height < liquidHeight) {
          // Ocean
          terrainColor = visibleTerrains.x > 0.5 ? oceanColor : vec3(0.0, 0.0, 0.0);
        } else if (height < liquidHeight + beachWidth) {
          // Beach
          terrainColor = visibleTerrains.y > 0.5 ? beachColor : vec3(0.0, 0.0, 0.0);
        } else if (height < liquidHeight + 0.15) {
          // Lowland
          terrainColor = visibleTerrains.z > 0.5 ? lowlandColor : vec3(0.0, 0.0, 0.0);
        } else if (height < liquidHeight + 0.3) {
          // Midland
          terrainColor = visibleTerrains.w > 0.5 ? midlandColor : vec3(0.0, 0.0, 0.0);
        } else if (height < liquidHeight + 0.45) {
          // Highland
          terrainColor = visibleTerrains2.x > 0.5 ? highlandColor : vec3(0.0, 0.0, 0.0);
        } else if (height < liquidHeight + 0.6) {
          // Mountain
          terrainColor = visibleTerrains2.y > 0.5 ? mountainColor : vec3(0.0, 0.0, 0.0);
        } else {
          // Snow
          terrainColor = visibleTerrains2.z > 0.5 ? snowColor : vec3(0.0, 0.0, 0.0);
        }
      } else {
        // Normal rendering with smooth transitions and sharp coastlines
        if (continentMask < 0.2 || height < liquidHeight - 0.02) {
          // Deep ocean
          vec3 baseOceanColor = mix(oceanColor, oceanPatternColor, oceanPattern * 0.3);
          float depth = 1.0 - (height / liquidHeight);
          terrainColor = mix(baseOceanColor * 1.2, baseOceanColor * 0.7, depth);
          
          // Add waves and more detailed ocean texture
          float waves = snoise(vPosition * 50.0 + vec3(time * 0.2, 0.0, 0.0)) * 0.02;
          float currentPattern = snoise(vPosition * 20.0 + vec3(time * 0.1, time * 0.05, 0.0)) * 0.03;
          terrainColor += vec3(waves + currentPattern);
        } else if (height < liquidHeight + beachWidth) {
          // Beach/shoreline transition
          float beachBlend = smoothstep(liquidHeight, liquidHeight + beachWidth, height);
          terrainColor = mix(oceanColor, beachColor, beachBlend);
          
          // Add beach texture
          float sandRipples = snoise(vOrigPosition * 100.0) * 0.05;
          terrainColor += vec3(sandRipples);
        } else {
          // Land - normalize height above water level
          float landHeight = (height - liquidHeight) / 0.5; // Scale to 0-1 for land
          
          // Add more detailed terrain texture
          float terrainDetail = getTextureDetail(vOrigPosition * 50.0, 100.0, 0.15);
          float terrainNoise = fbm(vOrigPosition * 10.0 + vec3(seed * 5.0), 2) * 0.1 + terrainDetail;
          
          // Temperature affects snow line
          float snowLine = 0.8 - (temperature / 700.0) * 0.4;
          
          if (landHeight > snowLine) {
            // Snow caps
            float snowBlend = smoothstep(snowLine, snowLine + 0.1, landHeight);
            terrainColor = mix(mountainColor, snowColor, snowBlend);
            
            // Add snow texture
            float snowDetail = snoise(vOrigPosition * 80.0) * 0.05;
            terrainColor += vec3(snowDetail);
          } else if (landHeight < 0.25) {
            // Lowland - transition from beach to lowland
            float lowlandBlend = smoothstep(0.0, 0.25, landHeight + terrainNoise);
            terrainColor = mix(beachColor, lowlandColor, lowlandBlend);
            
            // Add lowland texture
            float grassDetail = snoise(vOrigPosition * 120.0) * 0.05;
            terrainColor += vec3(0.0, grassDetail, 0.0);
          } else if (landHeight < 0.5) {
            // Midland
            float midlandBlend = smoothstep(0.25, 0.5, landHeight + terrainNoise);
            terrainColor = mix(lowlandColor, midlandColor, midlandBlend);
            
            // Add midland texture
            float forestDetail = snoise(vOrigPosition * 100.0) * 0.05;
            terrainColor += vec3(0.0, forestDetail, 0.0);
          } else if (landHeight < 0.75) {
            // Highland
            float highlandBlend = smoothstep(0.5, 0.75, landHeight + terrainNoise);
            terrainColor = mix(midlandColor, highlandColor, highlandBlend);
            
            // Add highland texture
            float rockDetail = snoise(vOrigPosition * 80.0) * 0.05;
            terrainColor += vec3(rockDetail * 0.5, rockDetail * 0.3, 0.0);
          } else {
            // Mountain
            float mountainBlend = smoothstep(0.75, 0.9, landHeight + terrainNoise);
            terrainColor = mix(highlandColor, mountainColor, mountainBlend);
            
            // Add mountain texture
            float peakDetail = snoise(vOrigPosition * 150.0) * 0.1;
            terrainColor += vec3(peakDetail);
          }
          
          // Adjust color based on temperature
          float tempFactor = clamp((temperature - 50.0) / 650.0, 0.0, 1.0);
          if (tempFactor < 0.3 && landHeight > 0.6) {
            // Cold - add ice/snow to high elevations
            float snowAmount = smoothstep(0.6, 0.8, landHeight);
            terrainColor = mix(terrainColor, snowColor, snowAmount);
          } else if (tempFactor > 0.7) {
            // Hot - more reddish/desert colors
            terrainColor = mix(terrainColor, vec3(0.8, 0.6, 0.4), 0.3);
          }
          
          // Add biomass (vegetation) to appropriate areas
          if (biomass > 0.0 && tempFactor > 0.2 && tempFactor < 0.8) {
            float vegetationAmount = biomass * smoothstep(0.1, 0.4, landHeight) * (1.0 - smoothstep(0.6, 0.9, landHeight));
            
            // Vegetation detail noise
            float vegDetail = fbm(vOrigPosition * 15.0 + vec3(seed * 7.0), 2) * 0.5 + 0.5;
            vegetationAmount *= vegDetail;
            
            // Adjust vegetation color based on temperature
            vec3 vegetationColor = mix(vec3(0.1, 0.5, 0.1), vec3(0.2, 0.6, 0.2), tempFactor); // Green
            terrainColor = mix(terrainColor, vegetationColor, vegetationAmount);
          }
        }
      }
      
      // Add atmosphere at edges
      finalColor = mix(terrainColor, atmosphereColor, fresnel * 0.4);
      
      // Add clouds
      float cloudCoverage = 0.3;
      float cloudSpeed = 0.01;
      vec3 cloudPos = vOrigPosition * 2.0 + vec3(time * cloudSpeed, 0.0, 0.0);
      float cloudNoise = fbm(cloudPos + vec3(seed * 9.0), 4);
      float cloudDetail = getTextureDetail(cloudPos * 2.0, 5.0, 0.2);
      float clouds = smoothstep(0.4, 0.6, cloudNoise + cloudDetail) * cloudCoverage;
      
      // Only add clouds above land or near coastlines
      if (height > liquidHeight - 0.05) {
        finalColor = mix(finalColor, vec3(1.0), clouds * 0.7);
      }
    }
    
    // Add lighting
    float light = dot(normal, normalize(vec3(1.0, 1.0, 1.0))) * 0.5 + 0.5;
    finalColor *= light;
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

function Planet({ config }) {
    const meshRef = React.useRef(null);
    const materialRef = React.useRef(null);
    const atmosphereRef = React.useRef(null);
    // Use default config as fallback if config is undefined
    const safeConfig = config || defaultPlanetConfig;
    // Create shader material with uniforms based on planet config
    const shaderMaterial = React.useMemo(() => {
        if (!safeConfig || !safeConfig.colors) {
            return null;
        }
        const material = new THREE__namespace.ShaderMaterial({
            vertexShader,
            fragmentShader,
            uniforms: {
                time: { value: 0 },
                seed: { value: safeConfig.seed },
                radius: { value: safeConfig.radius },
                isGaseous: { value: safeConfig.type === "gaseous" ? 1.0 : 0.0 },
                surfaceRoughness: { value: safeConfig.terrainRoughness },
                liquidHeight: { value: safeConfig.liquidHeight },
                volcanicActivity: { value: safeConfig.volcanicActivity },
                temperature: { value: safeConfig.temperature },
                biomass: { value: safeConfig.biomass },
                continentSize: { value: safeConfig.continentSize },
                continentCount: { value: safeConfig.continentCount },
                noiseScale: { value: safeConfig.noiseScale },
                debugMode: { value: safeConfig.debugMode ? 1.0 : 0.0 },
                visibleTerrains: {
                    value: new THREE__namespace.Vector4(safeConfig.visibleTerrains?.ocean ? 1.0 : 0.0, safeConfig.visibleTerrains?.beach ? 1.0 : 0.0, safeConfig.visibleTerrains?.lowland ? 1.0 : 0.0, safeConfig.visibleTerrains?.midland ? 1.0 : 0.0),
                },
                visibleTerrains2: {
                    value: new THREE__namespace.Vector4(safeConfig.visibleTerrains?.highland ? 1.0 : 0.0, safeConfig.visibleTerrains?.mountain ? 1.0 : 0.0, safeConfig.visibleTerrains?.snow ? 1.0 : 0.0, 0.0),
                },
                // Colors
                atmosphereColor: { value: new THREE__namespace.Color(safeConfig.colors.atmosphere) },
                oceanColor: { value: new THREE__namespace.Color(safeConfig.colors.ocean) },
                oceanPatternColor: { value: new THREE__namespace.Color(safeConfig.colors.oceanPattern) },
                beachColor: { value: new THREE__namespace.Color(safeConfig.colors.beach) },
                lowlandColor: { value: new THREE__namespace.Color(safeConfig.colors.lowland) },
                midlandColor: { value: new THREE__namespace.Color(safeConfig.colors.midland) },
                highlandColor: { value: new THREE__namespace.Color(safeConfig.colors.highland) },
                mountainColor: { value: new THREE__namespace.Color(safeConfig.colors.mountain) },
                snowColor: { value: new THREE__namespace.Color(safeConfig.colors.snow) },
            },
        });
        return material;
    }, [safeConfig]); // Update when any config property changes
    // Set the material ref after the material is created
    React.useEffect(() => {
        if (shaderMaterial) {
            materialRef.current = shaderMaterial;
        }
    }, [shaderMaterial]);
    // Auto-rotate the planet and update time uniform
    fiber.useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.001;
        }
        if (atmosphereRef.current) {
            atmosphereRef.current.rotation.y += 0.0005;
        }
        if (materialRef.current) {
            // Only animate certain aspects with time
            materialRef.current.uniforms.time.value = state.clock.getElapsedTime();
        }
    });
    // Create planet mesh with appropriate geometry based on type
    if (!shaderMaterial) {
        return null;
    }
    return (jsxRuntime.jsxs("group", { children: [jsxRuntime.jsxs("mesh", { ref: meshRef, scale: safeConfig.radius, children: [jsxRuntime.jsx("sphereGeometry", { args: [1, 128, 128] }), jsxRuntime.jsx("primitive", { object: shaderMaterial, attach: "material" })] }), jsxRuntime.jsxs("mesh", { ref: atmosphereRef, scale: safeConfig.radius * (safeConfig.type === "gaseous" ? 1.15 : 1.05), children: [jsxRuntime.jsx("sphereGeometry", { args: [1, 64, 64] }), jsxRuntime.jsx("meshBasicMaterial", { color: safeConfig.colors.atmosphere, transparent: true, opacity: safeConfig.type === "gaseous" ? 0.7 : 0.3, side: THREE__namespace.BackSide })] })] }));
}

function cn(...inputs) {
    return tailwindMerge.twMerge(clsx.clsx(inputs));
}

const Tabs = TabsPrimitive__namespace.Root;
const TabsList = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(TabsPrimitive__namespace.List, { ref: ref, className: cn("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground", className), ...props })));
TabsList.displayName = TabsPrimitive__namespace.List.displayName;
const TabsTrigger = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(TabsPrimitive__namespace.Trigger, { ref: ref, className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", className), ...props })));
TabsTrigger.displayName = TabsPrimitive__namespace.Trigger.displayName;
const TabsContent = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(TabsPrimitive__namespace.Content, { ref: ref, className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className), ...props })));
TabsContent.displayName = TabsPrimitive__namespace.Content.displayName;

const Slider = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsxs(SliderPrimitive__namespace.Root, { ref: ref, className: cn("relative flex w-full touch-none select-none items-center", className), ...props, children: [jsxRuntime.jsx(SliderPrimitive__namespace.Track, { className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary", children: jsxRuntime.jsx(SliderPrimitive__namespace.Range, { className: "absolute h-full bg-primary" }) }), jsxRuntime.jsx(SliderPrimitive__namespace.Thumb, { className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" })] })));
Slider.displayName = SliderPrimitive__namespace.Root.displayName;

const labelVariants = classVarianceAuthority.cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(LabelPrimitive__namespace.Root, { ref: ref, className: cn(labelVariants(), className), ...props })));
Label.displayName = LabelPrimitive__namespace.Root.displayName;

const Switch = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(SwitchPrimitives__namespace.Root, { className: cn("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className), ...props, ref: ref, children: jsxRuntime.jsx(SwitchPrimitives__namespace.Thumb, { className: cn("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0") }) })));
Switch.displayName = SwitchPrimitives__namespace.Root.displayName;

const buttonVariants = classVarianceAuthority.cva("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
const Button = React__namespace.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? reactSlot.Slot : "button";
    return (jsxRuntime.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref: ref, ...props }));
});
Button.displayName = "Button";

const Checkbox = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(CheckboxPrimitive__namespace.Root, { ref: ref, className: cn("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className), ...props, children: jsxRuntime.jsx(CheckboxPrimitive__namespace.Indicator, { className: cn("flex items-center justify-center text-current"), children: jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }) }) })));
Checkbox.displayName = CheckboxPrimitive__namespace.Root.displayName;

const Popover = PopoverPrimitive__namespace.Root;
const PopoverTrigger = PopoverPrimitive__namespace.Trigger;
const PopoverContent = React__namespace.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => (jsxRuntime.jsx(PopoverPrimitive__namespace.Portal, { children: jsxRuntime.jsx(PopoverPrimitive__namespace.Content, { ref: ref, align: align, sideOffset: sideOffset, className: cn("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className), ...props }) })));
PopoverContent.displayName = PopoverPrimitive__namespace.Content.displayName;

const Input = React__namespace.forwardRef(({ className, type, ...props }, ref) => {
    return (jsxRuntime.jsx("input", { type: type, className: cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className), ref: ref, ...props }));
});
Input.displayName = "Input";

function ColorPicker({ color, onChange, label }) {
    const [isOpen, setIsOpen] = React.useState(false);
    const [localColor, setLocalColor] = React.useState(color);
    // Update local color when prop changes
    React.useEffect(() => {
        setLocalColor(color);
    }, [color]);
    // Handle manual hex input
    const handleInputChange = (e) => {
        const value = e.target.value;
        setLocalColor(value);
        // Only update parent if it's a valid hex color
        if (/^#[0-9A-F]{6}$/i.test(value)) {
            onChange(value);
        }
    };
    // Handle color picker change
    const handleColorChange = (newColor) => {
        setLocalColor(newColor);
        onChange(newColor);
    };
    return (jsxRuntime.jsxs("div", { className: "flex flex-col space-y-1.5", children: [label && jsxRuntime.jsx(Label, { className: "text-xs", children: label }), jsxRuntime.jsxs(Popover, { open: isOpen, onOpenChange: setIsOpen, children: [jsxRuntime.jsx(PopoverTrigger, { asChild: true, children: jsxRuntime.jsxs("div", { className: "flex h-8 cursor-pointer", children: [jsxRuntime.jsx("div", { className: "w-8 h-8 rounded-l border border-r-0 border-gray-600", style: { backgroundColor: localColor } }), jsxRuntime.jsx(Input, { type: "text", value: localColor, onChange: handleInputChange, className: "rounded-l-none w-24 h-8 font-mono text-xs", onClick: (e) => e.stopPropagation() })] }) }), jsxRuntime.jsx(PopoverContent, { className: "w-auto p-3", side: "right", children: jsxRuntime.jsx(reactColorful.HexColorPicker, { color: localColor, onChange: handleColorChange }) })] })] }));
}

function SettingsPanel({ planetConfig, onChange }) {
    const [showImportExport, setShowImportExport] = React.useState(false);
    // Update liquid type based on temperature
    React.useEffect(() => {
        const liquidType = getLiquidType(planetConfig.temperature);
        // Only update if the colors don't match the expected liquid type
        if (planetConfig.colors.ocean !== liquidType.color ||
            planetConfig.colors.oceanPattern !== liquidType.patternColor) {
            onChange({
                colors: {
                    ...planetConfig.colors,
                    ocean: liquidType.color,
                    oceanPattern: liquidType.patternColor,
                },
            });
        }
    }, [planetConfig.temperature]);
    // Update terrain colors based on temperature
    React.useEffect(() => {
        const terrainColors = getTemperatureAdjustedColors(planetConfig.temperature, planetConfig.biomass);
        // Only update if colors have changed
        if (planetConfig.colors.beach !== terrainColors.beach ||
            planetConfig.colors.lowland !== terrainColors.lowland ||
            planetConfig.colors.midland !== terrainColors.midland ||
            planetConfig.colors.highland !== terrainColors.highland ||
            planetConfig.colors.mountain !== terrainColors.mountain ||
            planetConfig.colors.snow !== terrainColors.snow) {
            onChange({
                colors: {
                    ...planetConfig.colors,
                    ...terrainColors,
                },
            });
        }
    }, [planetConfig.temperature, planetConfig.biomass]);
    // Check if planet should be gaseous or terrestrial based on mass and radius
    React.useEffect(() => {
        if ((planetConfig.mass > 7.5 || planetConfig.radius > 2.5) && planetConfig.type !== "gaseous") {
            onChange({ type: "gaseous" });
        }
        else if (planetConfig.mass <= 7.5 && planetConfig.radius <= 2.5 && planetConfig.type === "gaseous") {
            onChange({ type: "terrestrial" });
        }
    }, [planetConfig.mass, planetConfig.radius, planetConfig.type]);
    const regenerateSeed = () => {
        onChange({ seed: Math.floor(Math.random() * 10000) });
    };
    // Get current liquid type name
    const liquidType = getLiquidType(planetConfig.temperature);
    return (jsxRuntime.jsxs("div", { className: "space-y-6 bg-slate-900 text-slate-100", children: [jsxRuntime.jsx("div", { className: "flex justify-between items-center", children: jsxRuntime.jsxs(Button, { variant: "outline", size: "sm", onClick: () => setShowImportExport(!showImportExport), className: "flex items-center gap-2 bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700", children: [showImportExport ? "Hide" : "Show", " Import/Export", showImportExport ? jsxRuntime.jsx(lucideReact.Download, { className: "h-4 w-4" }) : jsxRuntime.jsx(lucideReact.Upload, { className: "h-4 w-4" })] }) }), showImportExport && (jsxRuntime.jsxs("div", { className: "p-4 bg-slate-800 rounded-md space-y-4 border border-slate-700", children: [jsxRuntime.jsx("h3", { className: "text-sm font-medium text-slate-200", children: "Import/Export Configuration" }), jsxRuntime.jsxs("div", { className: "flex gap-2", children: [jsxRuntime.jsx(Button, { variant: "secondary", size: "sm", onClick: () => {
                                    const event = new CustomEvent("open-import-dialog");
                                    window.dispatchEvent(event);
                                }, className: "flex-1 bg-slate-700 text-slate-200 hover:bg-slate-600", children: "Import" }), jsxRuntime.jsx(Button, { variant: "secondary", size: "sm", onClick: () => {
                                    const event = new CustomEvent("open-export-dialog");
                                    window.dispatchEvent(event);
                                }, className: "flex-1 bg-slate-700 text-slate-200 hover:bg-slate-600", children: "Export" })] })] })), jsxRuntime.jsxs(Tabs, { defaultValue: "basic", className: "w-full", children: [jsxRuntime.jsxs(TabsList, { className: "w-full grid grid-cols-3 mb-4 bg-slate-800", children: [jsxRuntime.jsx(TabsTrigger, { value: "basic", className: "data-[state=active]:bg-slate-700", children: "Basic" }), jsxRuntime.jsx(TabsTrigger, { value: "terrain", className: "data-[state=active]:bg-slate-700", children: "Terrain" }), jsxRuntime.jsx(TabsTrigger, { value: "colors", className: "data-[state=active]:bg-slate-700", children: "Colors" })] }), jsxRuntime.jsx(TabsContent, { value: "basic", className: "space-y-6", children: jsxRuntime.jsxs("div", { className: "space-y-4", children: [jsxRuntime.jsxs("div", { className: "bg-slate-800 p-4 rounded-md border border-slate-700", children: [jsxRuntime.jsx("h3", { className: "text-sm font-medium mb-3 text-slate-200", children: "Planet Type" }), jsxRuntime.jsxs("div", { className: "flex gap-2", children: [jsxRuntime.jsx(Button, { variant: planetConfig.type === "terrestrial" ? "default" : "outline", size: "sm", onClick: () => onChange({ type: "terrestrial" }), className: "flex-1", children: "Terrestrial" }), jsxRuntime.jsx(Button, { variant: planetConfig.type === "gaseous" ? "default" : "outline", size: "sm", onClick: () => onChange({ type: "gaseous" }), className: "flex-1", children: "Gaseous" })] }), (planetConfig.mass > 7.5 || planetConfig.radius > 2.5) && planetConfig.type === "gaseous" && (jsxRuntime.jsx("p", { className: "text-xs text-amber-400 mt-2", children: "Note: High mass or radius has automatically set this to a gas giant" })), planetConfig.mass <= 7.5 && planetConfig.radius <= 2.5 && planetConfig.type === "terrestrial" && (jsxRuntime.jsx("p", { className: "text-xs text-slate-400 mt-2", children: "Note: Values are in Earth radii/mass units" }))] }), jsxRuntime.jsxs("div", { className: "bg-slate-800 p-4 rounded-md space-y-4 border border-slate-700", children: [jsxRuntime.jsxs("div", { className: "flex justify-between items-center", children: [jsxRuntime.jsxs("h3", { className: "text-sm font-medium text-slate-200", children: ["Seed: ", planetConfig.seed] }), jsxRuntime.jsx(Button, { variant: "outline", size: "icon", onClick: regenerateSeed, className: "bg-slate-700 border-slate-600", children: jsxRuntime.jsx(lucideReact.RefreshCw, { className: "h-4 w-4" }) })] }), jsxRuntime.jsxs("div", { className: "space-y-2", children: [jsxRuntime.jsxs("div", { className: "flex justify-between", children: [jsxRuntime.jsx(Label, { htmlFor: "radius", className: "text-slate-200", children: "Radius (Earth radii)" }), jsxRuntime.jsx("span", { className: "text-sm text-slate-400", children: planetConfig.radius.toFixed(1) })] }), jsxRuntime.jsx(Slider, { id: "radius", min: 0.5, max: 5, step: 0.1, value: [planetConfig.radius], onValueChange: (value) => onChange({ radius: value[0] }), className: "[&_[role=slider]]:bg-slate-200" })] }), jsxRuntime.jsxs("div", { className: "space-y-2", children: [jsxRuntime.jsxs("div", { className: "flex justify-between", children: [jsxRuntime.jsx(Label, { htmlFor: "temperature", className: "text-slate-200", children: "Temperature" }), jsxRuntime.jsxs("span", { className: "text-sm text-slate-400", children: [planetConfig.temperature.toFixed(0), "K (", (planetConfig.temperature - 273.15).toFixed(0), "\u00B0C)"] })] }), jsxRuntime.jsx(Slider, { id: "temperature", min: 50, max: 700, step: 1, value: [planetConfig.temperature], onValueChange: (value) => onChange({ temperature: value[0] }), className: "[&_[role=slider]]:bg-slate-200" }), jsxRuntime.jsxs("div", { className: "text-xs text-slate-400", children: ["Liquid Solvent: ", liquidType.name] })] }), jsxRuntime.jsxs("div", { className: "space-y-2", children: [jsxRuntime.jsxs("div", { className: "flex justify-between", children: [jsxRuntime.jsx(Label, { htmlFor: "mass", className: "text-slate-200", children: "Mass (Earth masses)" }), jsxRuntime.jsxs("span", { className: "text-sm text-slate-400", children: [planetConfig.mass.toFixed(1), " M\u2295"] })] }), jsxRuntime.jsx(Slider, { id: "mass", min: 0.1, max: 10, step: 0.1, value: [planetConfig.mass], onValueChange: (value) => onChange({ mass: value[0] }), className: "[&_[role=slider]]:bg-slate-200" })] }), jsxRuntime.jsx("div", { className: "pt-2 border-t border-slate-700", children: jsxRuntime.jsxs("div", { className: "flex justify-between", children: [jsxRuntime.jsx(Label, { className: "text-slate-200", children: "Density" }), jsxRuntime.jsxs("span", { className: "text-sm text-slate-400", children: [(planetConfig.mass / ((planetConfig.radius ** 3 * Math.PI * 4) / 3)).toFixed(2), " g/cm\u00B3"] })] }) })] })] }) }), jsxRuntime.jsxs(TabsContent, { value: "terrain", className: "space-y-6", children: [planetConfig.type === "terrestrial" && (jsxRuntime.jsxs("div", { className: "bg-slate-800 p-4 rounded-md space-y-4 border border-slate-700", children: [jsxRuntime.jsx("h3", { className: "text-sm font-medium text-slate-200", children: "Terrain Properties" }), jsxRuntime.jsxs("div", { className: "space-y-2", children: [jsxRuntime.jsxs("div", { className: "flex justify-between", children: [jsxRuntime.jsx(Label, { htmlFor: "terrainRoughness", className: "text-slate-200", children: "Terrain Roughness" }), jsxRuntime.jsx("span", { className: "text-sm text-slate-400", children: planetConfig.terrainRoughness.toFixed(2) })] }), jsxRuntime.jsx(Slider, { id: "terrainRoughness", min: 0.1, max: 1, step: 0.01, value: [planetConfig.terrainRoughness], onValueChange: (value) => onChange({ terrainRoughness: value[0] }), className: "[&_[role=slider]]:bg-slate-200" })] }), jsxRuntime.jsxs("div", { className: "space-y-2", children: [jsxRuntime.jsxs("div", { className: "flex justify-between", children: [jsxRuntime.jsx(Label, { htmlFor: "liquidHeight", className: "text-slate-200", children: "Ocean Level" }), jsxRuntime.jsx("span", { className: "text-sm text-slate-400", children: planetConfig.liquidHeight.toFixed(2) })] }), jsxRuntime.jsx(Slider, { id: "liquidHeight", min: 0.3, max: 0.8, step: 0.01, value: [planetConfig.liquidHeight], onValueChange: (value) => onChange({ liquidHeight: value[0] }), className: "[&_[role=slider]]:bg-slate-200" })] }), jsxRuntime.jsxs("div", { className: "space-y-2", children: [jsxRuntime.jsxs("div", { className: "flex justify-between", children: [jsxRuntime.jsx(Label, { htmlFor: "continentSize", className: "text-slate-200", children: "Continent Size" }), jsxRuntime.jsx("span", { className: "text-sm text-slate-400", children: planetConfig.continentSize.toFixed(2) })] }), jsxRuntime.jsx(Slider, { id: "continentSize", min: 0.1, max: 1, step: 0.01, value: [planetConfig.continentSize], onValueChange: (value) => onChange({ continentSize: value[0] }), className: "[&_[role=slider]]:bg-slate-200" })] }), jsxRuntime.jsxs("div", { className: "space-y-2", children: [jsxRuntime.jsxs("div", { className: "flex justify-between", children: [jsxRuntime.jsx(Label, { htmlFor: "continentCount", className: "text-slate-200", children: "Continent Count" }), jsxRuntime.jsx("span", { className: "text-sm text-slate-400", children: planetConfig.continentCount.toFixed(0) })] }), jsxRuntime.jsx(Slider, { id: "continentCount", min: 1, max: 10, step: 1, value: [planetConfig.continentCount], onValueChange: (value) => onChange({ continentCount: value[0] }), className: "[&_[role=slider]]:bg-slate-200" })] }), jsxRuntime.jsxs("div", { className: "space-y-2", children: [jsxRuntime.jsxs("div", { className: "flex justify-between", children: [jsxRuntime.jsx(Label, { htmlFor: "noiseScale", className: "text-slate-200", children: "Detail Level" }), jsxRuntime.jsx("span", { className: "text-sm text-slate-400", children: planetConfig.noiseScale.toFixed(2) })] }), jsxRuntime.jsx(Slider, { id: "noiseScale", min: 0.5, max: 2, step: 0.1, value: [planetConfig.noiseScale], onValueChange: (value) => onChange({ noiseScale: value[0] }), className: "[&_[role=slider]]:bg-slate-200" })] }), jsxRuntime.jsxs("div", { className: "space-y-2", children: [jsxRuntime.jsxs("div", { className: "flex justify-between", children: [jsxRuntime.jsx(Label, { htmlFor: "volcanicActivity", className: "text-slate-200", children: "Volcanic Activity" }), jsxRuntime.jsx("span", { className: "text-sm text-slate-400", children: planetConfig.volcanicActivity.toFixed(2) })] }), jsxRuntime.jsx(Slider, { id: "volcanicActivity", min: 0, max: 1, step: 0.01, value: [planetConfig.volcanicActivity], onValueChange: (value) => onChange({ volcanicActivity: value[0] }), className: "[&_[role=slider]]:bg-slate-200" }), jsxRuntime.jsx("div", { className: "text-xs text-slate-400 italic", children: "Note: Volcanic activity is currently a static value" })] }), jsxRuntime.jsxs("div", { className: "space-y-2", children: [jsxRuntime.jsxs("div", { className: "flex justify-between", children: [jsxRuntime.jsx(Label, { htmlFor: "biomass", className: "text-slate-200", children: "Biomass" }), jsxRuntime.jsx("span", { className: "text-sm text-slate-400", children: planetConfig.biomass.toFixed(2) })] }), jsxRuntime.jsx(Slider, { id: "biomass", min: 0, max: 1, step: 0.01, value: [planetConfig.biomass], onValueChange: (value) => onChange({ biomass: value[0] }), className: "[&_[role=slider]]:bg-slate-200" }), jsxRuntime.jsx("div", { className: "text-xs text-slate-400 italic", children: "Note: Biomass is currently a static value" })] })] })), jsxRuntime.jsxs("div", { className: "bg-slate-800 p-4 rounded-md space-y-4 border border-slate-700", children: [jsxRuntime.jsxs("div", { className: "flex justify-between items-center", children: [jsxRuntime.jsx("h3", { className: "text-sm font-medium text-slate-200", children: "Debug Mode" }), jsxRuntime.jsx(Switch, { checked: planetConfig.debugMode || false, onCheckedChange: (checked) => onChange({ debugMode: checked }) })] }), planetConfig.debugMode && (jsxRuntime.jsxs("div", { className: "pt-2 border-t border-slate-700 space-y-2", children: [jsxRuntime.jsx("p", { className: "text-xs text-slate-400", children: "Show/hide specific terrain types:" }), jsxRuntime.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [jsxRuntime.jsxs("div", { className: "flex items-center space-x-2", children: [jsxRuntime.jsx(Checkbox, { id: "show-ocean", checked: planetConfig.visibleTerrains.ocean, onCheckedChange: (checked) => onChange({
                                                                    visibleTerrains: {
                                                                        ...planetConfig.visibleTerrains,
                                                                        ocean: !!checked,
                                                                    },
                                                                }) }), jsxRuntime.jsx(Label, { htmlFor: "show-ocean", className: "text-xs cursor-pointer", children: jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [jsxRuntime.jsx("div", { className: "w-3 h-3 rounded-full", style: { backgroundColor: planetConfig.colors.ocean } }), jsxRuntime.jsx("span", { children: "Ocean" })] }) })] }), jsxRuntime.jsxs("div", { className: "flex items-center space-x-2", children: [jsxRuntime.jsx(Checkbox, { id: "show-beach", checked: planetConfig.visibleTerrains.beach, onCheckedChange: (checked) => onChange({
                                                                    visibleTerrains: {
                                                                        ...planetConfig.visibleTerrains,
                                                                        beach: !!checked,
                                                                    },
                                                                }) }), jsxRuntime.jsx(Label, { htmlFor: "show-beach", className: "text-xs cursor-pointer", children: jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [jsxRuntime.jsx("div", { className: "w-3 h-3 rounded-full", style: { backgroundColor: planetConfig.colors.beach } }), jsxRuntime.jsx("span", { children: "Beach" })] }) })] }), jsxRuntime.jsxs("div", { className: "flex items-center space-x-2", children: [jsxRuntime.jsx(Checkbox, { id: "show-lowland", checked: planetConfig.visibleTerrains.lowland, onCheckedChange: (checked) => onChange({
                                                                    visibleTerrains: {
                                                                        ...planetConfig.visibleTerrains,
                                                                        lowland: !!checked,
                                                                    },
                                                                }) }), jsxRuntime.jsx(Label, { htmlFor: "show-lowland", className: "text-xs cursor-pointer", children: jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [jsxRuntime.jsx("div", { className: "w-3 h-3 rounded-full", style: { backgroundColor: planetConfig.colors.lowland } }), jsxRuntime.jsx("span", { children: "Lowland" })] }) })] }), jsxRuntime.jsxs("div", { className: "flex items-center space-x-2", children: [jsxRuntime.jsx(Checkbox, { id: "show-midland", checked: planetConfig.visibleTerrains.midland, onCheckedChange: (checked) => onChange({
                                                                    visibleTerrains: {
                                                                        ...planetConfig.visibleTerrains,
                                                                        midland: !!checked,
                                                                    },
                                                                }) }), jsxRuntime.jsx(Label, { htmlFor: "show-midland", className: "text-xs cursor-pointer", children: jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [jsxRuntime.jsx("div", { className: "w-3 h-3 rounded-full", style: { backgroundColor: planetConfig.colors.midland } }), jsxRuntime.jsx("span", { children: "Midland" })] }) })] }), jsxRuntime.jsxs("div", { className: "flex items-center space-x-2", children: [jsxRuntime.jsx(Checkbox, { id: "show-highland", checked: planetConfig.visibleTerrains.highland, onCheckedChange: (checked) => onChange({
                                                                    visibleTerrains: {
                                                                        ...planetConfig.visibleTerrains,
                                                                        highland: !!checked,
                                                                    },
                                                                }) }), jsxRuntime.jsx(Label, { htmlFor: "show-highland", className: "text-xs cursor-pointer", children: jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [jsxRuntime.jsx("div", { className: "w-3 h-3 rounded-full", style: { backgroundColor: planetConfig.colors.highland } }), jsxRuntime.jsx("span", { children: "Highland" })] }) })] }), jsxRuntime.jsxs("div", { className: "flex items-center space-x-2", children: [jsxRuntime.jsx(Checkbox, { id: "show-mountain", checked: planetConfig.visibleTerrains.mountain, onCheckedChange: (checked) => onChange({
                                                                    visibleTerrains: {
                                                                        ...planetConfig.visibleTerrains,
                                                                        mountain: !!checked,
                                                                    },
                                                                }) }), jsxRuntime.jsx(Label, { htmlFor: "show-mountain", className: "text-xs cursor-pointer", children: jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [jsxRuntime.jsx("div", { className: "w-3 h-3 rounded-full", style: { backgroundColor: planetConfig.colors.mountain } }), jsxRuntime.jsx("span", { children: "Mountain" })] }) })] }), jsxRuntime.jsxs("div", { className: "flex items-center space-x-2", children: [jsxRuntime.jsx(Checkbox, { id: "show-snow", checked: planetConfig.visibleTerrains.snow, onCheckedChange: (checked) => onChange({
                                                                    visibleTerrains: {
                                                                        ...planetConfig.visibleTerrains,
                                                                        snow: !!checked,
                                                                    },
                                                                }) }), jsxRuntime.jsx(Label, { htmlFor: "show-snow", className: "text-xs cursor-pointer", children: jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [jsxRuntime.jsx("div", { className: "w-3 h-3 rounded-full", style: { backgroundColor: planetConfig.colors.snow } }), jsxRuntime.jsx("span", { children: "Snow" })] }) })] })] })] }))] })] }), jsxRuntime.jsx(TabsContent, { value: "colors", className: "space-y-6", children: jsxRuntime.jsxs("div", { className: "bg-slate-800 p-4 rounded-md space-y-4 border border-slate-700", children: [jsxRuntime.jsx("h3", { className: "text-sm font-medium text-slate-200", children: "Planet Colors" }), jsxRuntime.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [jsxRuntime.jsx(ColorPicker, { label: "Atmosphere", color: planetConfig.colors.atmosphere, onChange: (color) => onChange({ colors: { ...planetConfig.colors, atmosphere: color } }) }), jsxRuntime.jsx(ColorPicker, { label: `${liquidType.name}`, color: planetConfig.colors.ocean, onChange: (color) => onChange({ colors: { ...planetConfig.colors, ocean: color } }) }), jsxRuntime.jsx(ColorPicker, { label: `${liquidType.name} Pattern`, color: planetConfig.colors.oceanPattern, onChange: (color) => onChange({ colors: { ...planetConfig.colors, oceanPattern: color } }) }), jsxRuntime.jsx(ColorPicker, { label: "Beach", color: planetConfig.colors.beach, onChange: (color) => onChange({ colors: { ...planetConfig.colors, beach: color } }) }), jsxRuntime.jsx(ColorPicker, { label: "Lowland", color: planetConfig.colors.lowland, onChange: (color) => onChange({ colors: { ...planetConfig.colors, lowland: color } }) }), jsxRuntime.jsx(ColorPicker, { label: "Midland", color: planetConfig.colors.midland, onChange: (color) => onChange({ colors: { ...planetConfig.colors, midland: color } }) }), jsxRuntime.jsx(ColorPicker, { label: "Highland", color: planetConfig.colors.highland, onChange: (color) => onChange({ colors: { ...planetConfig.colors, highland: color } }) }), jsxRuntime.jsx(ColorPicker, { label: "Mountain", color: planetConfig.colors.mountain, onChange: (color) => onChange({ colors: { ...planetConfig.colors, mountain: color } }) }), jsxRuntime.jsx(ColorPicker, { label: "Snow", color: planetConfig.colors.snow, onChange: (color) => onChange({ colors: { ...planetConfig.colors, snow: color } }) })] })] }) })] })] }));
}

function PlanetViewer({ planetConfig, onConfigChange }) {
    const [showSettings, setShowSettings] = React.useState(false);
    return (jsxRuntime.jsxs("div", { className: "w-full h-full bg-black relative", children: [jsxRuntime.jsxs(fiber.Canvas, { camera: { position: [0, 0, 10], fov: 45 }, children: [jsxRuntime.jsx("ambientLight", { intensity: 0.3 }), jsxRuntime.jsx("pointLight", { position: [10, 10, 10], intensity: 1.5 }), jsxRuntime.jsx(Planet, { config: planetConfig }), jsxRuntime.jsx(drei.OrbitControls, { enablePan: true, enableZoom: true, enableRotate: true }), jsxRuntime.jsx(drei.Stars, { radius: 100, depth: 50, count: 5000, factor: 4, saturation: 0, fade: true, speed: 1 })] }), jsxRuntime.jsx("button", { onClick: () => setShowSettings(!showSettings), className: "absolute top-4 right-4 bg-slate-800 p-2 rounded-full text-white hover:bg-slate-700 transition-colors z-10 border border-slate-700", "aria-label": "Toggle settings", children: jsxRuntime.jsx(lucideReact.Cog, { className: "w-6 h-6" }) }), showSettings && (jsxRuntime.jsxs("div", { className: "absolute top-0 right-0 w-full md:w-96 h-full bg-slate-900/95 text-white overflow-y-auto p-4 backdrop-blur-sm z-10 transition-all border-l border-slate-700", children: [jsxRuntime.jsxs("div", { className: "flex justify-between items-center mb-4", children: [jsxRuntime.jsx("h2", { className: "text-xl font-bold text-slate-100", children: "Planet Settings" }), jsxRuntime.jsx("button", { onClick: () => setShowSettings(false), className: "text-slate-300 hover:text-slate-100", "aria-label": "Close settings", children: jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [jsxRuntime.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), jsxRuntime.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }) })] }), jsxRuntime.jsx(SettingsPanel, { planetConfig: planetConfig, onChange: onConfigChange })] }))] }));
}

function SimplePlanetMesh({ config }) {
    const meshRef = React.useRef(null);
    // Use default config as fallback if config is undefined
    const safeConfig = config || defaultPlanetConfig;
    const material = React.useMemo(() => {
        // Ensure we have a valid config before proceeding
        if (!safeConfig || !safeConfig.colors) {
            return new THREE__namespace.MeshBasicMaterial({ color: "#888888" });
        }
        // Get simplified colors for the simple interface
        const primaryColor = safeConfig.type === "gaseous" ? safeConfig.colors.atmosphere : safeConfig.colors.ocean;
        const secondaryColor = safeConfig.type === "gaseous" ? safeConfig.colors.ocean : safeConfig.colors.lowland;
        const accentColor = safeConfig.type === "gaseous" ? safeConfig.colors.oceanPattern : safeConfig.colors.highland;
        return new THREE__namespace.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                seed: { value: safeConfig.seed || 1234 },
                primaryColor: { value: new THREE__namespace.Color(primaryColor) },
                secondaryColor: { value: new THREE__namespace.Color(secondaryColor) },
                accentColor: { value: new THREE__namespace.Color(accentColor) },
                density: { value: (safeConfig.mass || 1) / (((safeConfig.radius || 1) ** 3 * Math.PI * 4) / 3) },
                mass: { value: safeConfig.mass || 1 },
                temperature: { value: safeConfig.temperature || 288 },
                biomass: { value: safeConfig.biomass || 0 },
                isGaseous: { value: safeConfig.type === "gaseous" ? 1.0 : 0.0 },
            },
            vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying float vElevation;
        
        uniform float time;
        uniform float seed;
        uniform float isGaseous;
        uniform float temperature;
        
        // Simple noise function
        float noise(vec3 p) {
          return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453 + seed);
        }
        
        float fbm(vec3 p) {
          float value = 0.0;
          float amplitude = 0.5;
          for(int i = 0; i < 4; i++) {
            value += amplitude * (noise(p) - 0.5);
            p *= 2.0;
            amplitude *= 0.5;
          }
          return value;
        }

        void main() {
          vUv = uv;
          vNormal = normal;
          vPosition = position;
          
          vec3 pos = position;
          float elevation = 0.0;
          
          if (isGaseous > 0.5) {
            // Gas giant - smooth bands and swirls
            float bands = sin(pos.y * 8.0 + time * 0.1) * 0.02;
            float swirls = fbm(pos * 2.0 + vec3(time * 0.05, 0.0, 0.0)) * 0.03;
            elevation = bands + swirls;
          } else {
            // Terrestrial - more varied terrain
            float continents = fbm(pos * 1.5) * 0.1;
            float mountains = max(0.0, fbm(pos * 4.0)) * 0.05;
            float details = fbm(pos * 8.0) * 0.02;
            
            // Add temperature-based variation
            float tempFactor = clamp((temperature - 200.0) / 500.0, 0.0, 1.0);
            elevation = continents + mountains * tempFactor + details;
          }
          
          vElevation = elevation;
          pos += normal * elevation;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
            fragmentShader: `
        uniform vec3 primaryColor;
        uniform vec3 secondaryColor;
        uniform vec3 accentColor;
        uniform float density;
        uniform float mass;
        uniform float temperature;
        uniform float biomass;
        uniform float isGaseous;
        uniform float time;
        uniform float seed;
        
        varying vec2 vUv;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying float vElevation;
        
        // Simple noise function
        float noise(vec3 p) {
          return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453 + seed);
        }

        void main() {
          vec3 lightDirection = normalize(vec3(1.0, 1.0, 1.0));
          float lightIntensity = max(0.2, dot(vNormal, lightDirection));
          
          vec3 color;
          
          if (isGaseous > 0.5) {
            // Gas giant coloring
            float bands = sin(vPosition.y * 8.0 + time * 0.1) * 0.5 + 0.5;
            float storms = noise(vPosition * 3.0 + vec3(time * 0.1, 0.0, 0.0));
            
            color = mix(primaryColor, secondaryColor, bands);
            color = mix(color, accentColor, smoothstep(0.6, 0.8, storms) * 0.3);
            
            // Add atmospheric glow
            float fresnel = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
            color += primaryColor * fresnel * 0.2;
          } else {
            // Terrestrial coloring
            float height = vElevation * 10.0 + 0.5;
            float landmass = smoothstep(0.3, 0.7, height);
            
            // Water vs land
            vec3 waterColor = primaryColor;
            vec3 landColor = mix(secondaryColor, accentColor, smoothstep(0.5, 0.8, height));
            
            color = mix(waterColor, landColor, landmass);
            
            // Add biomass effects
            if (biomass > 0.3 && temperature > 250.0 && temperature < 350.0) {
              float vegetation = biomass * smoothstep(0.4, 0.6, height);
              color = mix(color, vec3(0.2, 0.6, 0.2), vegetation * 0.5);
            }
            
            // Add some variation
            float variation = noise(vPosition * 5.0);
            color = mix(color, accentColor, variation * 0.1);
            
            // Polar caps for terrestrial planets
            float latitude = abs(vNormal.y);
            if (mass > 0.5 && mass < 3.0 && temperature < 300.0) {
              color = mix(color, vec3(0.9, 0.95, 1.0), smoothstep(0.8, 1.0, latitude) * 0.7);
            }
          }
          
          // Apply lighting
          color *= lightIntensity;
          
          // Add rim lighting
          float rimLight = 1.0 - max(0.0, dot(vNormal, vec3(0.0, 0.0, 1.0)));
          color += rimLight * 0.1;
          
          gl_FragColor = vec4(color, 1.0);
        }
      `,
        });
    }, [safeConfig]);
    fiber.useFrame((state) => {
        if (meshRef.current && (material instanceof THREE__namespace.ShaderMaterial)) {
            meshRef.current.rotation.y += 0.002;
            if (material.uniforms.time) {
                material.uniforms.time.value = state.clock.elapsedTime;
            }
        }
    });
    // Don't render if we don't have a valid config
    if (!safeConfig) {
        return null;
    }
    return (jsxRuntime.jsxs("mesh", { ref: meshRef, scale: safeConfig.radius || 1, children: [jsxRuntime.jsx("sphereGeometry", { args: [1, 64, 64] }), jsxRuntime.jsx("primitive", { object: material, attach: "material" })] }));
}

const Select = SelectPrimitive__namespace.Root;
const SelectValue = SelectPrimitive__namespace.Value;
const SelectTrigger = React__namespace.forwardRef(({ className, children, ...props }, ref) => (jsxRuntime.jsxs(SelectPrimitive__namespace.Trigger, { ref: ref, className: cn("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className), ...props, children: [children, jsxRuntime.jsx(SelectPrimitive__namespace.Icon, { asChild: true, children: jsxRuntime.jsx(lucideReact.ChevronDown, { className: "h-4 w-4 opacity-50" }) })] })));
SelectTrigger.displayName = SelectPrimitive__namespace.Trigger.displayName;
const SelectScrollUpButton = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(SelectPrimitive__namespace.ScrollUpButton, { ref: ref, className: cn("flex cursor-default items-center justify-center py-1", className), ...props, children: jsxRuntime.jsx(lucideReact.ChevronUp, { className: "h-4 w-4" }) })));
SelectScrollUpButton.displayName = SelectPrimitive__namespace.ScrollUpButton.displayName;
const SelectScrollDownButton = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(SelectPrimitive__namespace.ScrollDownButton, { ref: ref, className: cn("flex cursor-default items-center justify-center py-1", className), ...props, children: jsxRuntime.jsx(lucideReact.ChevronDown, { className: "h-4 w-4" }) })));
SelectScrollDownButton.displayName =
    SelectPrimitive__namespace.ScrollDownButton.displayName;
const SelectContent = React__namespace.forwardRef(({ className, children, position = "popper", ...props }, ref) => (jsxRuntime.jsx(SelectPrimitive__namespace.Portal, { children: jsxRuntime.jsxs(SelectPrimitive__namespace.Content, { ref: ref, className: cn("relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-select-content-transform-origin]", position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className), position: position, ...props, children: [jsxRuntime.jsx(SelectScrollUpButton, {}), jsxRuntime.jsx(SelectPrimitive__namespace.Viewport, { className: cn("p-1", position === "popper" &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"), children: children }), jsxRuntime.jsx(SelectScrollDownButton, {})] }) })));
SelectContent.displayName = SelectPrimitive__namespace.Content.displayName;
const SelectLabel = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(SelectPrimitive__namespace.Label, { ref: ref, className: cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className), ...props })));
SelectLabel.displayName = SelectPrimitive__namespace.Label.displayName;
const SelectItem = React__namespace.forwardRef(({ className, children, ...props }, ref) => (jsxRuntime.jsxs(SelectPrimitive__namespace.Item, { ref: ref, className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className), ...props, children: [jsxRuntime.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: jsxRuntime.jsx(SelectPrimitive__namespace.ItemIndicator, { children: jsxRuntime.jsx(lucideReact.Check, { className: "h-4 w-4" }) }) }), jsxRuntime.jsx(SelectPrimitive__namespace.ItemText, { children: children })] })));
SelectItem.displayName = SelectPrimitive__namespace.Item.displayName;
const SelectSeparator = React__namespace.forwardRef(({ className, ...props }, ref) => (jsxRuntime.jsx(SelectPrimitive__namespace.Separator, { ref: ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props })));
SelectSeparator.displayName = SelectPrimitive__namespace.Separator.displayName;

function SimplePlanetSettings({ planetConfig, onChange }) {
    const [showImportExport, setShowImportExport] = React.useState(false);
    // Auto-update planet type based on mass and radius
    React.useEffect(() => {
        const autoType = getAutoType(planetConfig.mass, planetConfig.radius);
        if (autoType !== planetConfig.type) {
            onChange({ type: autoType });
        }
    }, [planetConfig.mass, planetConfig.radius]);
    const regenerateSeed = () => {
        onChange({ seed: Math.floor(Math.random() * 10000) });
    };
    const loadPreset = (presetName) => {
        const preset = simplePlanetPresets[presetName];
        if (preset) {
            onChange(preset);
        }
    };
    // Get simplified colors for the interface
    const simplifiedColors = getSimplifiedColors(planetConfig);
    const handleColorChange = (colorType, color) => {
        const newColors = { ...simplifiedColors, [colorType]: color };
        const colorUpdate = updateFromSimplifiedColors(planetConfig, newColors);
        onChange(colorUpdate);
    };
    const density = planetConfig.mass / ((planetConfig.radius ** 3 * Math.PI * 4) / 3);
    return (jsxRuntime.jsxs("div", { className: "space-y-6 bg-slate-900 text-slate-100", children: [jsxRuntime.jsx("div", { className: "flex justify-between items-center", children: jsxRuntime.jsxs(Button, { variant: "outline", size: "sm", onClick: () => setShowImportExport(!showImportExport), className: "flex items-center gap-2 bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700", children: [showImportExport ? "Hide" : "Show", " Import/Export", showImportExport ? jsxRuntime.jsx(lucideReact.Download, { className: "h-4 w-4" }) : jsxRuntime.jsx(lucideReact.Upload, { className: "h-4 w-4" })] }) }), showImportExport && (jsxRuntime.jsxs("div", { className: "p-4 bg-slate-800 rounded-md space-y-4 border border-slate-700", children: [jsxRuntime.jsx("h3", { className: "text-sm font-medium text-slate-200", children: "Import/Export Configuration" }), jsxRuntime.jsxs("div", { className: "flex gap-2", children: [jsxRuntime.jsx(Button, { variant: "secondary", size: "sm", onClick: () => {
                                    const event = new CustomEvent("open-simple-import-dialog");
                                    window.dispatchEvent(event);
                                }, className: "flex-1 bg-slate-700 text-slate-200 hover:bg-slate-600", children: "Import" }), jsxRuntime.jsx(Button, { variant: "secondary", size: "sm", onClick: () => {
                                    const event = new CustomEvent("open-simple-export-dialog");
                                    window.dispatchEvent(event);
                                }, className: "flex-1 bg-slate-700 text-slate-200 hover:bg-slate-600", children: "Export" })] })] })), jsxRuntime.jsxs("div", { className: "bg-slate-800 p-4 rounded-md border border-slate-700", children: [jsxRuntime.jsx("h3", { className: "text-sm font-medium mb-3 text-slate-200", children: "Presets" }), jsxRuntime.jsxs(Select, { onValueChange: loadPreset, children: [jsxRuntime.jsx(SelectTrigger, { className: "bg-slate-700 border-slate-600", children: jsxRuntime.jsx(SelectValue, { placeholder: "Load a preset..." }) }), jsxRuntime.jsxs(SelectContent, { children: [jsxRuntime.jsx(SelectItem, { value: "earth", children: "Earth-like" }), jsxRuntime.jsx(SelectItem, { value: "mars", children: "Mars-like" }), jsxRuntime.jsx(SelectItem, { value: "venus", children: "Venus-like" }), jsxRuntime.jsx(SelectItem, { value: "jupiter", children: "Jupiter-like" }), jsxRuntime.jsx(SelectItem, { value: "neptune", children: "Neptune-like" })] })] })] }), jsxRuntime.jsxs("div", { className: "bg-slate-800 p-4 rounded-md border border-slate-700", children: [jsxRuntime.jsx("h3", { className: "text-sm font-medium mb-3 text-slate-200", children: "Planet Type" }), jsxRuntime.jsxs("div", { className: "flex gap-2", children: [jsxRuntime.jsx(Button, { variant: planetConfig.type === "terrestrial" ? "default" : "outline", size: "sm", onClick: () => onChange({ type: "terrestrial" }), className: "flex-1", children: "Terrestrial" }), jsxRuntime.jsx(Button, { variant: planetConfig.type === "gaseous" ? "default" : "outline", size: "sm", onClick: () => onChange({ type: "gaseous" }), className: "flex-1", children: "Gaseous" })] }), (planetConfig.mass > 7.5 || planetConfig.radius > 2.5) && (jsxRuntime.jsx("p", { className: "text-xs text-amber-400 mt-2", children: "Note: High mass or radius automatically sets this to gaseous" }))] }), jsxRuntime.jsxs("div", { className: "bg-slate-800 p-4 rounded-md space-y-4 border border-slate-700", children: [jsxRuntime.jsxs("div", { className: "flex justify-between items-center", children: [jsxRuntime.jsxs("h3", { className: "text-sm font-medium text-slate-200", children: ["Seed: ", planetConfig.seed] }), jsxRuntime.jsx(Button, { variant: "outline", size: "icon", onClick: regenerateSeed, className: "bg-slate-700 border-slate-600", children: jsxRuntime.jsx(lucideReact.RefreshCw, { className: "h-4 w-4" }) })] }), jsxRuntime.jsxs("div", { className: "space-y-2", children: [jsxRuntime.jsxs("div", { className: "flex justify-between", children: [jsxRuntime.jsx(Label, { htmlFor: "radius", className: "text-slate-200", children: "Radius (Earth radii)" }), jsxRuntime.jsx("span", { className: "text-sm text-slate-400", children: planetConfig.radius.toFixed(1) })] }), jsxRuntime.jsx(Slider, { id: "radius", min: 0.3, max: 5, step: 0.1, value: [planetConfig.radius], onValueChange: (value) => onChange({ radius: value[0] }), className: "[&_[role=slider]]:bg-slate-200" })] }), jsxRuntime.jsxs("div", { className: "space-y-2", children: [jsxRuntime.jsxs("div", { className: "flex justify-between", children: [jsxRuntime.jsx(Label, { htmlFor: "mass", className: "text-slate-200", children: "Mass (Earth masses)" }), jsxRuntime.jsxs("span", { className: "text-sm text-slate-400", children: [planetConfig.mass.toFixed(1), " M\u2295"] })] }), jsxRuntime.jsx(Slider, { id: "mass", min: 0.1, max: 10, step: 0.1, value: [planetConfig.mass], onValueChange: (value) => onChange({ mass: value[0] }), className: "[&_[role=slider]]:bg-slate-200" })] }), jsxRuntime.jsxs("div", { className: "space-y-2", children: [jsxRuntime.jsxs("div", { className: "flex justify-between", children: [jsxRuntime.jsx(Label, { htmlFor: "temperature", className: "text-slate-200", children: "Temperature" }), jsxRuntime.jsxs("span", { className: "text-sm text-slate-400", children: [planetConfig.temperature.toFixed(0), "K (", (planetConfig.temperature - 273.15).toFixed(0), "\u00B0C)"] })] }), jsxRuntime.jsx(Slider, { id: "temperature", min: 50, max: 700, step: 5, value: [planetConfig.temperature], onValueChange: (value) => onChange({ temperature: value[0] }), className: "[&_[role=slider]]:bg-slate-200" })] }), jsxRuntime.jsxs("div", { className: "space-y-2", children: [jsxRuntime.jsxs("div", { className: "flex justify-between", children: [jsxRuntime.jsx(Label, { htmlFor: "biomass", className: "text-slate-200", children: "Biomass" }), jsxRuntime.jsx("span", { className: "text-sm text-slate-400", children: planetConfig.biomass.toFixed(2) })] }), jsxRuntime.jsx(Slider, { id: "biomass", min: 0, max: 1, step: 0.1, value: [planetConfig.biomass], onValueChange: (value) => onChange({ biomass: value[0] }), className: "[&_[role=slider]]:bg-slate-200" })] }), jsxRuntime.jsx("div", { className: "pt-2 border-t border-slate-700", children: jsxRuntime.jsxs("div", { className: "flex justify-between", children: [jsxRuntime.jsx(Label, { className: "text-slate-200", children: "Density" }), jsxRuntime.jsxs("span", { className: "text-sm text-slate-400", children: [density.toFixed(2), " g/cm\u00B3"] })] }) })] }), jsxRuntime.jsxs("div", { className: "bg-slate-800 p-4 rounded-md space-y-4 border border-slate-700", children: [jsxRuntime.jsx("h3", { className: "text-sm font-medium text-slate-200", children: "Colors" }), jsxRuntime.jsxs("div", { className: "space-y-4", children: [jsxRuntime.jsx(ColorPicker, { label: planetConfig.type === "gaseous" ? "Atmosphere" : "Ocean/Water", color: simplifiedColors.primary, onChange: (color) => handleColorChange("primary", color) }), jsxRuntime.jsx(ColorPicker, { label: planetConfig.type === "gaseous" ? "Bands" : "Land/Vegetation", color: simplifiedColors.secondary, onChange: (color) => handleColorChange("secondary", color) }), jsxRuntime.jsx(ColorPicker, { label: planetConfig.type === "gaseous" ? "Storms" : "Mountains/Highlands", color: simplifiedColors.accent, onChange: (color) => handleColorChange("accent", color) })] })] })] }));
}

function SimplePlanetViewer({ planetConfig, onConfigChange }) {
    const [showSettings, setShowSettings] = React.useState(false);
    return (jsxRuntime.jsxs("div", { className: "w-full h-full bg-black relative", children: [jsxRuntime.jsxs(fiber.Canvas, { camera: { position: [0, 0, 5], fov: 45 }, children: [jsxRuntime.jsx("ambientLight", { intensity: 0.3 }), jsxRuntime.jsx("pointLight", { position: [10, 10, 10], intensity: 1.5 }), jsxRuntime.jsx(SimplePlanetMesh, { config: planetConfig }), jsxRuntime.jsx(drei.OrbitControls, { enablePan: true, enableZoom: true, enableRotate: true, minDistance: 2, maxDistance: 10 }), jsxRuntime.jsx(drei.Stars, { radius: 100, depth: 50, count: 5000, factor: 4, saturation: 0, fade: true, speed: 1 })] }), jsxRuntime.jsx("button", { onClick: () => setShowSettings(!showSettings), className: "absolute top-4 right-4 bg-slate-800 p-2 rounded-full text-white hover:bg-slate-700 transition-colors z-10 border border-slate-700", "aria-label": "Toggle settings", children: jsxRuntime.jsx(lucideReact.Cog, { className: "w-6 h-6" }) }), showSettings && (jsxRuntime.jsxs("div", { className: "absolute top-0 right-0 w-full md:w-96 h-full bg-slate-900/95 text-white overflow-y-auto p-4 backdrop-blur-sm z-10 transition-all border-l border-slate-700", children: [jsxRuntime.jsxs("div", { className: "flex justify-between items-center mb-4", children: [jsxRuntime.jsx("h2", { className: "text-xl font-bold text-slate-100", children: "Simple Planet Settings" }), jsxRuntime.jsx("button", { onClick: () => setShowSettings(false), className: "text-slate-300 hover:text-slate-100", "aria-label": "Close settings", children: jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [jsxRuntime.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), jsxRuntime.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }) })] }), jsxRuntime.jsx(SimplePlanetSettings, { planetConfig: planetConfig, onChange: onConfigChange })] }))] }));
}

// Base layer noise function
function generateNoise(width, height, scale) {
    const noise = Array(width)
        .fill(0)
        .map(() => Array(height).fill(0));
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const sampleX = x / scale;
            const sampleY = y / scale;
            let amplitude = 1;
            let frequency = 1;
            let noiseHeight = 0;
            // Add multiple octaves of noise
            for (let i = 0; i < 4; i++) {
                const perlinValue = Math.sin(sampleX * frequency) * Math.cos(sampleY * frequency);
                noiseHeight += perlinValue * amplitude;
                amplitude *= 0.5;
                frequency *= 2;
            }
            noise[x][y] = noiseHeight;
        }
    }
    return noise;
}
// Secondary layer - Simplex noise implementation
function generateSimpleNoise(seed, persistence) {
    // Simple pseudo-random number generator with seed
    const random = (x, y, z) => {
        const dot = x * 12.9898 + y * 78.233 + z * 37.719;
        const value = Math.sin(dot * seed) * 43758.5453;
        return value - Math.floor(value);
    };
    // Simple 3D noise function
    return (x, y, z) => {
        // Get integer and fractional parts
        const xi = Math.floor(x);
        const yi = Math.floor(y);
        const zi = Math.floor(z);
        const xf = x - xi;
        const yf = y - yi;
        const zf = z - zi;
        // Interpolate between grid points
        let value = 0;
        for (let dx = 0; dx <= 1; dx++) {
            for (let dy = 0; dy <= 1; dy++) {
                for (let dz = 0; dz <= 1; dz++) {
                    const weight = (1 - Math.abs(dx - xf)) * (1 - Math.abs(dy - yf)) * (1 - Math.abs(dz - zf));
                    const sample = random(xi + dx, yi + dy, zi + dz);
                    value += sample * weight;
                }
            }
        }
        return value * 2 - 1; // Map to [-1, 1]
    };
}
// More complex Perlin noise implementation
function generatePerlinNoise(seed, octaves, persistence, lacunarity) {
    const simpleNoise = generateSimpleNoise(seed);
    return (x, y, z) => {
        let total = 0;
        let frequency = 1;
        let amplitude = 1;
        let maxValue = 0;
        for (let i = 0; i < octaves; i++) {
            total += simpleNoise(x * frequency, y * frequency, z * frequency) * amplitude;
            maxValue += amplitude;
            amplitude *= persistence;
            frequency *= lacunarity;
        }
        return total / maxValue;
    };
}
// Simple implementation of seedrandom
Math.seedrandom = (seed) => {
    let state = 0;
    for (let i = 0; i < seed.length; i++) {
        state = (state * 31 + seed.charCodeAt(i)) & 0xffffffff;
    }
    // Return a function that generates random numbers based on the seed
    return () => {
        state = (state * 1664525 + 1013904223) & 0xffffffff;
        return state / 0xffffffff;
    };
};

exports.ColorPicker = ColorPicker;
exports.Planet = Planet;
exports.PlanetViewer = PlanetViewer;
exports.SettingsPanel = SettingsPanel;
exports.SimplePlanetMesh = SimplePlanetMesh;
exports.SimplePlanetSettings = SimplePlanetSettings;
exports.SimplePlanetViewer = SimplePlanetViewer;
exports.createSimplifiedConfig = createSimplifiedConfig;
exports.defaultPlanetConfig = defaultPlanetConfig;
exports.fragmentShader = fragmentShader;
exports.generateNoise = generateNoise;
exports.generatePerlinNoise = generatePerlinNoise;
exports.generateSimpleNoise = generateSimpleNoise;
exports.getAutoType = getAutoType;
exports.getLiquidType = getLiquidType;
exports.getSimplifiedColors = getSimplifiedColors;
exports.getTemperatureAdjustedColors = getTemperatureAdjustedColors;
exports.simplePlanetPresets = simplePlanetPresets;
exports.updateFromSimplifiedColors = updateFromSimplifiedColors;
exports.vertexShader = vertexShader;
//# sourceMappingURL=index.js.map
