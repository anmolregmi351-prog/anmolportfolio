import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";

function fibonacciSphere(n: number, radius: number) {
  const pts: THREE.Vector3[] = [];
  const ga = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = ga * i;
    pts.push(new THREE.Vector3(Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius));
  }
  return pts;
}

function Nodes() {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo(() => fibonacciSphere(70, 2.4), []);
  const edges = useMemo(() => {
    const segments: Array<[THREE.Vector3, THREE.Vector3]> = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 0.95 && segments.length < 90) {
          segments.push([nodes[i], nodes[j]]);
        }
      }
    }
    return segments;
  }, [nodes]);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.07;
      group.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={group}>
      {nodes.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.035, 12, 12]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? "#A855F7" : i % 3 === 1 ? "#06B6D4" : "#007ACC"}
            emissive={i % 3 === 0 ? "#A855F7" : i % 3 === 1 ? "#06B6D4" : "#007ACC"}
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
      {edges.map(([a, b], i) => (
        <Line key={i} points={[a, b]} color="#06B6D4" lineWidth={0.6} transparent opacity={0.22} />
      ))}
    </group>
  );
}

function ProfessionalAvatar() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.25;
    }
  });

  return (
    <group ref={ref}>
      {/* Head */}
      <mesh position={[0, 0.55, 0]} castShadow>
        <sphereGeometry args={[0.32, 32, 32]} />
        <meshStandardMaterial color="#d9b89a" roughness={0.6} metalness={0.05} />
      </mesh>
      {/* Hair */}
      <mesh position={[0, 0.72, -0.04]}>
        <sphereGeometry args={[0.33, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2.2]} />
        <meshStandardMaterial color="#2a1f1a" roughness={0.7} />
      </mesh>
      {/* Neck */}
      <mesh position={[0, 0.22, 0]}>
        <cylinderGeometry args={[0.11, 0.13, 0.18, 16]} />
        <meshStandardMaterial color="#d9b89a" roughness={0.6} />
      </mesh>
      {/* Torso / shoulders — suit */}
      <mesh position={[0, -0.28, 0]}>
        <cylinderGeometry args={[0.55, 0.38, 0.7, 6]} />
        <meshStandardMaterial color="#1a1d2e" roughness={0.7} metalness={0.2} />
      </mesh>
      {/* Lapel V — shirt */}
      <mesh position={[0, -0.1, 0.32]} rotation={[0.15, 0, 0]}>
        <coneGeometry args={[0.12, 0.3, 3]} />
        <meshStandardMaterial color="#f4f4f0" roughness={0.5} />
      </mesh>
      {/* Tie */}
      <mesh position={[0, -0.15, 0.36]} rotation={[0.1, 0, 0]}>
        <boxGeometry args={[0.07, 0.34, 0.02]} />
        <meshStandardMaterial color="#007ACC" emissive="#007ACC" emissiveIntensity={0.25} />
      </mesh>
      {/* Eyes (subtle) */}
      <mesh position={[-0.1, 0.6, 0.28]}>
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshStandardMaterial color="#0d1117" />
      </mesh>
      <mesh position={[0.1, 0.6, 0.28]}>
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshStandardMaterial color="#0d1117" />
      </mesh>
    </group>
  );
}

function Scene({ mouse }: { mouse: { x: number; y: number } }) {
  const group = useRef<THREE.Group>(null);
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += (mouse.x * 0.3 - group.current.rotation.y) * 0.05;
      group.current.rotation.x += (-mouse.y * 0.2 - group.current.rotation.x) * 0.05;
    }
  });
  return (
    <group ref={group}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#A855F7" />
      <pointLight position={[-5, -2, 3]} intensity={1} color="#06B6D4" />
      <pointLight position={[0, 3, 4]} intensity={0.6} color="#ffffff" />
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
        <ProfessionalAvatar />
      </Float>
      <Nodes />
    </group>
  );
}

interface Props {
  mouse: { x: number; y: number };
}

export function ConstellationOrb({ mouse }: Props) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <Scene mouse={mouse} />
      </Suspense>
    </Canvas>
  );
}
