"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { PlanetConfig } from "../utils/planet-config";
import { defaultPlanetConfig } from "../utils/planet-config";

interface SimplePlanetMeshProps {
  config: PlanetConfig;
};

export default function SimplePlanetMesh({ config }: SimplePlanetMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  // Use default config as fallback if config is undefined
  const safeConfig = config || defaultPlanetConfig

  const material = useMemo(() => {
    // Ensure we have a valid config before proceeding
    if (!safeConfig || !safeConfig.colors) {
      return new THREE.MeshBasicMaterial({ color: "#888888" })
    }

    // Get simplified colors for the simple interface
    const primaryColor = safeConfig.type === "gaseous" ? safeConfig.colors.atmosphere : safeConfig.colors.ocean
    const secondaryColor = safeConfig.type === "gaseous" ? safeConfig.colors.ocean : safeConfig.colors.lowland
    const accentColor = safeConfig.type === "gaseous" ? safeConfig.colors.oceanPattern : safeConfig.colors.highland

    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        seed: { value: safeConfig.seed || 1234 },
        primaryColor: { value: new THREE.Color(primaryColor) },
        secondaryColor: { value: new THREE.Color(secondaryColor) },
        accentColor: { value: new THREE.Color(accentColor) },
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
    })
  }, [safeConfig])

  useFrame((state) => {
    if (meshRef.current && (material instanceof THREE.ShaderMaterial)) {
      meshRef.current.rotation.y += 0.002
      if (material.uniforms.time) {
        material.uniforms.time.value = state.clock.elapsedTime
      }
    }
  })

  // Don't render if we don't have a valid config
  if (!safeConfig) {
    return null
  }

  return (
    <mesh ref={meshRef} scale={safeConfig.radius || 1}>
      <sphereGeometry args={[1, 64, 64]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};