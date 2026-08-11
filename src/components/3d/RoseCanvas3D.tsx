import React from 'react';
import { Canvas } from '@react-three/fiber';
import { PetalParticles } from './PetalParticles';
import { Lipstick3DModel } from './Lipstick3DModel';

interface RoseCanvas3DProps {
  mousePos: { x: number; y: number };
  casingColor?: string;
  lipstickColor?: string;
}

export const RoseCanvas3D: React.FC<RoseCanvas3DProps> = ({
  mousePos,
  casingColor = '#16080C',
  lipstickColor = '#800E22',
}) => {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        className="w-full h-full bg-transparent"
        gl={{ alpha: true, antialias: true }}
      >
        {/* Studio Lighting Setup */}
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 8, 5]} intensity={2.5} color="#FAFAF7" />
        <directionalLight position={[-5, -4, -2]} intensity={1.2} color="#D4AF37" />
        <pointLight position={[0, 2, 3]} intensity={2} color="#E5C378" distance={6} />
        <pointLight position={[0, -2, -3]} intensity={1.5} color="#C41E3A" distance={6} />

        {/* 3D Procedural Lipstick Tube */}
        <Lipstick3DModel
          mousePos={mousePos}
          casingColor={casingColor}
          lipstickColor={lipstickColor}
        />

        {/* Micro Golden Sparkle Dust Particles */}
        <PetalParticles count={220} />
      </Canvas>
    </div>
  );
};
