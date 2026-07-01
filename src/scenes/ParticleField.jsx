import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Field({ count, mouse }) {
  const pointsRef = useRef()

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (!pointsRef.current) return
    const t = state.clock.getElapsedTime()
    pointsRef.current.rotation.y = t * 0.015
    pointsRef.current.rotation.x = Math.sin(t * 0.05) * 0.05
    // gentle parallax toward pointer
    pointsRef.current.position.x += (mouse.current.x * 0.4 - pointsRef.current.position.x) * 0.02
    pointsRef.current.position.y += (mouse.current.y * 0.2 - pointsRef.current.position.y) * 0.02
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.028}
        color="#7DD3C0"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function GridPlane() {
  const ref = useRef()
  useFrame((state) => {
    if (!ref.current) return
    ref.current.material.opacity = 0.06 + Math.sin(state.clock.getElapsedTime() * 0.3) * 0.015
  })
  return (
    <mesh ref={ref} position={[0, -2.4, -3]} rotation={[-Math.PI / 2.4, 0, 0]}>
      <planeGeometry args={[30, 30, 24, 24]} />
      <meshBasicMaterial color="#7DD3C0" wireframe transparent opacity={0.06} />
    </mesh>
  )
}

export default function ParticleField({ tier = 'high' }) {
  const mouse = useRef({ x: 0, y: 0 })

  if (tier === 'off') return null

  const count = tier === 'low' ? 250 : tier === 'medium' ? 550 : 900

  const handlePointerMove = (e) => {
    mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
    mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2
  }

  return (
    <div
      className="absolute inset-0"
      onPointerMove={handlePointerMove}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 55 }}
        dpr={tier === 'low' ? 1 : [1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
      >
        <fog attach="fog" args={['#0A0E12', 4, 12]} />
        <Field count={count} mouse={mouse} />
        {tier !== 'low' && <GridPlane />}
      </Canvas>
    </div>
  )
}
