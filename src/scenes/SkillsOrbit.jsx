import { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'

const COLOR_MAP = {
  signal: '#7DD3C0',
  flag: '#E8664A',
  paper: '#F5F3EE',
  slate: '#8B92A0',
}

function Node({ item, radius, angle, color, speed, onSelect, isActive, paused }) {
  const ref = useRef()
  const localAngle = useRef(angle)

  useFrame((_, delta) => {
    if (!paused) localAngle.current += delta * speed
    const a = localAngle.current
    if (ref.current) {
      ref.current.position.x = Math.cos(a) * radius
      ref.current.position.z = Math.sin(a) * radius
      ref.current.position.y = Math.sin(a * 1.3) * 0.35
    }
  })

  return (
    <group ref={ref}>
      <mesh
        onClick={(e) => {
          e.stopPropagation()
          onSelect(item)
        }}
        onPointerOver={(e) => {
          e.stopPropagation()
          document.body.style.cursor = 'pointer'
        }}
        onPointerOut={() => (document.body.style.cursor = 'auto')}
      >
        <sphereGeometry args={[isActive ? 0.14 : 0.09, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={isActive ? 1 : 0.85} />
      </mesh>
      <Html center distanceFactor={8} style={{ pointerEvents: 'none' }}>
        <div
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
            color: isActive ? color : '#8B92A0',
            whiteSpace: 'nowrap',
            transform: 'translateY(16px)',
            opacity: isActive ? 1 : 0.75,
          }}
        >
          {item.name}
        </div>
      </Html>
    </group>
  )
}

function Ring({ radius }) {
  const points = useMemo(() => {
    const pts = []
    for (let i = 0; i <= 64; i++) {
      const a = (i / 64) * Math.PI * 2
      pts.push(Math.cos(a) * radius, 0, Math.sin(a) * radius)
    }
    return new Float32Array(pts)
  }, [radius])

  return (
    <line>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <lineBasicMaterial color="#1E252D" transparent opacity={0.5} />
    </line>
  )
}

function Core() {
  const ref = useRef()
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime()
      ref.current.scale.setScalar(1 + Math.sin(t * 1.2) * 0.04)
    }
  })
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.4, 1]} />
      <meshBasicMaterial color="#7DD3C0" wireframe transparent opacity={0.5} />
    </mesh>
  )
}

export default function SkillsOrbit({ groups, onSelect, active, tier = 'high' }) {
  const [paused, setPaused] = useState(false)

  const rings = useMemo(() => {
    const flat = []
    groups.forEach((group, gi) => {
      const radius = 1.6 + gi * 0.85
      const speed = 0.06 - gi * 0.008
      group.items.forEach((name, ii) => {
        const angle = (ii / group.items.length) * Math.PI * 2 + gi
        flat.push({
          key: `${group.group}-${name}`,
          item: { name, group: group.group },
          radius,
          angle,
          speed,
          color: COLOR_MAP[group.color] || '#8B92A0',
        })
      })
    })
    return flat
  }, [groups])

  const uniqueRadii = [...new Set(rings.map((r) => r.radius))]

  return (
    <div
      className="w-full h-full"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <Canvas
        camera={{ position: [0, 3.2, 6.5], fov: 50 }}
        dpr={tier === 'low' ? 1 : [1, 1.5]}
        gl={{ antialias: tier !== 'low' }}
      >
        <group rotation={[0.5, 0, 0]}>
          {uniqueRadii.map((r) => (
            <Ring key={r} radius={r} />
          ))}
          <Core />
          {rings.map((n) => (
            <Node
              key={n.key}
              item={n.item}
              radius={n.radius}
              angle={n.angle}
              speed={n.speed}
              color={n.color}
              paused={paused}
              isActive={active?.name === n.item.name}
              onSelect={onSelect}
            />
          ))}
        </group>
      </Canvas>
    </div>
  )
}
