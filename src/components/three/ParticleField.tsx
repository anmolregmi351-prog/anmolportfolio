import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Points() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, []);

  let acc = 0;
  useFrame((_, delta) => {
    acc += delta;
    if (acc < 1 / 30) return;
    acc = 0;
    if (ref.current) {
      ref.current.rotation.y += 0.0015;
      ref.current.rotation.x += 0.0005;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#A855F7" transparent opacity={0.5} />
    </points>
  );
}

export function ParticleField() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.5]} gl={{ alpha: true }}>
      <Points />
    </Canvas>
  );
}
