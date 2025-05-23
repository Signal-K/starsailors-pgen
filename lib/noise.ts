export function simplex3D(x: number, y: number, z: number): number {
  // Simplified implementation of 3D simplex noise
  const dot = 0.5 * (x + y + z)
  const i = Math.floor(x + dot)
  const j = Math.floor(y + dot)
  const k = Math.floor(z + dot)

  // Simple noise approximation
  return Math.sin(x * 12.9898 + y * 78.233 + z * 43.2364) * 0.5 + 0.5
}

export function fbm(x: number, y: number, z: number, octaves = 6): number {
  let value = 0
  let amplitude = 0.5
  let frequency = 1

  for (let i = 0; i < octaves; i++) {
    value += amplitude * simplex3D(x * frequency, y * frequency, z * frequency)
    amplitude *= 0.5
    frequency *= 2
  }

  return value
}
