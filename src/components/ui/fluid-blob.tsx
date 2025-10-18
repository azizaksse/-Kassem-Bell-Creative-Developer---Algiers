"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Simplified shader for better performance
const vertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader = `
precision mediump float;
varying vec2 vUv;
uniform float time;

void main() {
    vec2 uv = vUv;
    
    // Simple animated gradient
    float wave1 = sin(uv.x * 3.0 + time * 0.5) * 0.5 + 0.5;
    float wave2 = sin(uv.y * 2.0 + time * 0.3) * 0.5 + 0.5;
    float wave3 = sin((uv.x + uv.y) * 1.5 + time * 0.7) * 0.5 + 0.5;
    
    vec3 color = mix(
        vec3(0.2, 0.4, 0.8), // Blue
        vec3(0.6, 0.3, 0.9), // Purple
        (wave1 + wave2 + wave3) / 3.0
    );
    
    gl_FragColor = vec4(color, 0.3);
}
`;

function LavaLampShader() {
  const meshRef = useRef<THREE.Mesh | null>(null);

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
    }),
    [],
  );

  useFrame((state) => {
    if (meshRef.current) {
      uniforms.time.value = state.clock.elapsedTime * 0.5; // Slower animation
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[4, 4]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
      />
    </mesh>
  );
}

export function LavaLamp() {
  return (
    <div className="pointer-events-none absolute inset-0 h-full w-full bg-transparent">
      <Canvas
          camera={{
            left: -0.5,
            right: 0.5,
            top: 0.5,
            bottom: -0.5,
            near: -1000,
            far: 1000,
            position: [0, 0, 2],
          }}
          orthographic
          gl={{ 
            antialias: false, // Disable for performance
            alpha: true,
            powerPreference: "high-performance",
            stencil: false,
            depth: false
          }}
          dpr={1} // Fixed DPR for consistency
          performance={{ min: 0.8 }} // Higher threshold
      >
        <LavaLampShader />
      </Canvas>
    </div>
  );
}
