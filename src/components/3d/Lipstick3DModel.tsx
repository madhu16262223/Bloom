import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Lipstick3DModelProps {
  mousePos: { x: number; y: number };
  casingColor?: string;
  lipstickColor?: string;
}

export const Lipstick3DModel: React.FC<Lipstick3DModelProps> = ({
  mousePos,
  casingColor = '#16080C',
  lipstickColor = '#800E22',
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const bulletRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();

    // Smooth mouse tilt + continuous elegant floating rotation
    const targetRotY = time * 0.4 + mousePos.x * 0.8;
    const targetRotX = Math.sin(time * 0.6) * 0.1 - mousePos.y * 0.5;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);

    // Floating Y translation
    groupRef.current.position.y = Math.sin(time * 0.8) * 0.15;
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]} scale={[1.1, 1.1, 1.1]}>
      {/* 1. Base Casing Body */}
      <mesh position={[0, -1.2, 0]}>
        <cylinderGeometry args={[0.55, 0.55, 1.8, 32]} />
        <meshStandardMaterial
          color={casingColor}
          metalness={0.85}
          roughness={0.15}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* 2. Middle Gold Band / Ring */}
      <mesh position={[0, -0.25, 0]}>
        <cylinderGeometry args={[0.56, 0.56, 0.15, 32]} />
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.98}
          roughness={0.05}
        />
      </mesh>

      {/* 3. Inner Gold Sheath / Neck */}
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.48, 0.48, 1.0, 32]} />
        <meshStandardMaterial
          color="#E5C378"
          metalness={0.95}
          roughness={0.08}
        />
      </mesh>

      {/* 4. Lipstick Velvet Bullet (Slanted Bullet Tip) */}
      <group position={[0, 1.1, 0]}>
        <mesh ref={bulletRef} rotation={[0.3, 0, 0]}>
          <cylinderGeometry args={[0.42, 0.42, 0.9, 32]} />
          <meshStandardMaterial
            color={lipstickColor}
            roughness={0.35}
            metalness={0.1}
            emissive={lipstickColor}
            emissiveIntensity={0.15}
          />
        </mesh>
      </group>

      {/* 5. Metallic Base Plate */}
      <mesh position={[0, -2.12, 0]}>
        <cylinderGeometry args={[0.57, 0.57, 0.05, 32]} />
        <meshStandardMaterial
          color="#D4AF37"
          metalness={0.98}
          roughness={0.05}
        />
      </mesh>
    </group>
  );
};
