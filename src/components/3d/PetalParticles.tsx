import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const PetalParticles: React.FC<{ count?: number }> = ({ count = 220 }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Generate micro golden sparkle dust positions
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 6;
      const speed = 0.2 + Math.random() * 0.4;
      const factor = Math.random() * Math.PI * 2;
      const scale = 0.012 + Math.random() * 0.025; // Fine gold dust scale
      temp.push({ x, y, z, speed, factor, scale });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();

    particles.forEach((p, i) => {
      // Floating particle aura
      const y = p.y + Math.sin(time * p.speed + p.factor) * 0.3;
      const x = p.x + Math.cos(time * p.speed * 0.5 + p.factor) * 0.2;
      const z = p.z + Math.sin(time * p.speed * 0.3) * 0.2;

      dummy.position.set(x, y, z);
      dummy.scale.set(p.scale, p.scale, p.scale);
      dummy.updateMatrix();

      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshStandardMaterial
        color="#E5C378"
        emissive="#D4AF37"
        emissiveIntensity={0.8}
        roughness={0.1}
        metalness={0.9}
      />
    </instancedMesh>
  );
};
