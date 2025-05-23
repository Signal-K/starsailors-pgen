export const stylizedFragmentShader = `
  uniform float time;
  uniform vec3 oceanColor;
  uniform vec3 beachColor;
  uniform vec3 landColor;
  uniform vec3 mountainColor;
  uniform float waterLevel;
  uniform float surfaceRoughness;
  uniform float mountainHeight;
  uniform float isGaseous;
  uniform int soilType;
  uniform int soilTexture;
  uniform float liquidEnabled;
  
  varying vec3 vNormal;
  varying vec3 vPosition;
  
  // Simplex noise functions
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    
    // First corner
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    
    // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    
    // Permutations
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
            
    // Gradients: 7x7 points over a square, mapped onto an octahedron.
    float n_ = 0.142857142857; // 1.0/7.0
    vec3 ns = n_ * D.wyz - D.xzx;
    
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    
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
    
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    
    // Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    
    // Mix final noise value
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
  
  // FBM (Fractal Brownian Motion) for more complex noise
  float fbm(vec3 p, int octaves) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for (int i = 0; i < 8; i++) {
      if (i >= octaves) break;
      value += amplitude * snoise(p * frequency);
      amplitude *= 0.5;
      frequency *= 2.0;
    }
    
    return value;
  }
  
  // Calculate terrain height
  float calculateTerrainHeight(vec3 position) {
    // Base terrain noise
    float noise1 = fbm(position * 2.0 + vec3(time * 0.01, 0.0, 0.0), 4) * surfaceRoughness;
    float noise2 = fbm(position * 5.0 + vec3(0.0, time * 0.01, 0.0), 2) * surfaceRoughness * 0.5;
    float baseHeight = noise1 + noise2;
    
    return baseHeight;
  }
  
  // Get color based on height and terrain type
  vec3 getTerrainColor(float height) {
    // For gas giants, use a different coloring approach
    if (isGaseous > 0.5) {
      float bands = snoise(vec3(vPosition.x * 0.5, vPosition.y * 5.0, vPosition.z * 0.5) + time * 0.01);
      float spots = snoise(vec3(vPosition.x * 2.0, vPosition.y * 2.0, vPosition.z * 2.0));
      
      // Mix colors based on bands and spots
      vec3 bandColor1 = mix(landColor, mountainColor, smoothstep(-0.2, 0.2, bands));
      vec3 bandColor2 = mix(oceanColor, beachColor, smoothstep(-0.3, 0.3, spots));
      
      return mix(bandColor1, bandColor2, smoothstep(0.1, 0.4, abs(bands)));
    }
    
    // For rocky/terrestrial planets
    if (height < waterLevel && liquidEnabled > 0.5) {
      // Water depth effect
      float depth = (waterLevel - height) * 5.0;
      return mix(beachColor, oceanColor, clamp(depth, 0.0, 1.0));
    } else if (height < waterLevel + 0.05) {
      // Beach/shore
      return beachColor;
    } else if (height < waterLevel + 0.3) {
      // Regular land
      return landColor;
    } else {
      // Mountains
      float mountainFactor = smoothstep(waterLevel + 0.3, waterLevel + 0.3 + mountainHeight, height);
      return mix(landColor, mountainColor, mountainFactor);
    }
  }
  
  // Apply soil texture effects
  vec3 applySoilTexture(vec3 baseColor, vec3 position, float height) {
    // Different texture patterns based on soil type
    float textureNoise = 0.0;
    
    // Soil texture variations
    if (soilTexture == 0) {
      // Smooth
      textureNoise = snoise(position * 20.0) * 0.05;
    } else if (soilTexture == 1) {
      // Rough
      textureNoise = fbm(position * 30.0, 4) * 0.15;
    } else if (soilTexture == 2) {
      // Cracked
      float crack = smoothstep(0.4, 0.5, fbm(position * 15.0, 3));
      textureNoise = crack * 0.2;
    } else if (soilTexture == 3) {
      // Layered
      textureNoise = smoothstep(0.2, 0.3, sin(height * 30.0)) * 0.1;
    } else if (soilTexture == 4) {
      // Porous
      float pores = smoothstep(0.6, 0.8, snoise(position * 40.0));
      textureNoise = pores * 0.15;
    } else if (soilTexture == 5) {
      // Grainy
      textureNoise = snoise(position * 50.0) * 0.1;
    } else if (soilTexture == 6) {
      // Crystalline
      float crystal = smoothstep(0.7, 0.9, fbm(position * 25.0, 2));
      textureNoise = crystal * 0.25;
    }
    
    // Apply texture effect to color
    return baseColor * (1.0 - textureNoise);
  }
  
  // Main shader function
  void main() {
    // Calculate terrain height
    float height = calculateTerrainHeight(vPosition);
    
    // Get base color based on height
    vec3 color = getTerrainColor(height);
    
    // Apply soil texture effects
    color = applySoilTexture(color, vPosition, height);
    
    // Apply lighting
    vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
    float diffuse = max(dot(vNormal, lightDir), 0.0);
    
    // Add ambient light
    float ambient = 0.3;
    float lighting = ambient + diffuse * 0.7;
    
    // Apply atmospheric scattering for terrestrial planets
    if (isGaseous < 0.5) {
      float atmosphericEffect = 1.0 - pow(max(0.0, dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);
      vec3 atmosphereColor = vec3(0.6, 0.8, 1.0);
      color = mix(color, atmosphereColor, atmosphericEffect * 0.2);
    }
    
    // Final color with lighting
    gl_FragColor = vec4(color * lighting, 1.0);
  }
`
