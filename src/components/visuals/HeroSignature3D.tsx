"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function stageOpacity(progress: number, center: number, width: number) {
  return Math.max(0, 1 - Math.abs(progress - center) / width);
}

function SignatureObject() {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const sphereMaterial = useRef<THREE.MeshPhysicalMaterial>(null);
  const cylinderMaterial = useRef<THREE.MeshPhysicalMaterial>(null);
  const ribbonMaterial = useRef<THREE.MeshPhysicalMaterial>(null);
  const pointsMaterial = useRef<THREE.PointsMaterial>(null);

  const networkPoints = useMemo(() => {
    const positions = new Float32Array(280 * 3);
    for (let index = 0; index < 280; index += 1) {
      const ratio = index / 280;
      const angle = index * 2.39996;
      const radius = 0.45 + ratio * 1.25;
      positions[index * 3] = Math.cos(angle) * radius;
      positions[index * 3 + 1] = (ratio - 0.5) * 2.8;
      positions[index * 3 + 2] = Math.sin(angle) * radius;
    }
    return positions;
  }, []);

  useEffect(() => {
    const updatePointer = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / Math.max(window.innerWidth, 1)) * 2 - 1;
      pointer.current.y = -(event.clientY / Math.max(window.innerHeight, 1)) * 2 + 1;
    };
    window.addEventListener("pointermove", updatePointer, { passive: true });
    return () => window.removeEventListener("pointermove", updatePointer);
  }, []);

  useFrame((state, delta) => {
    if (!group.current) return;

    const canvasBounds = state.gl.domElement.getBoundingClientRect();
    const progress = THREE.MathUtils.clamp(
      (window.innerHeight - canvasBounds.top) /
        Math.max(window.innerHeight + canvasBounds.height, 1),
      0,
      1,
    );
    const pointerX = pointer.current.x;
    const pointerY = pointer.current.y;

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      state.clock.elapsedTime * 0.11 + pointerX * 0.32 + progress * 1.4,
      1 - Math.exp(-delta * 3.2),
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      pointerY * 0.16 + progress * 0.42,
      1 - Math.exp(-delta * 3.2),
    );

    if (sphereMaterial.current) sphereMaterial.current.opacity = 1 - THREE.MathUtils.smoothstep(progress, 0.08, 0.34);
    if (cylinderMaterial.current) cylinderMaterial.current.opacity = stageOpacity(progress, 0.38, 0.28) * 0.9;
    if (ribbonMaterial.current) ribbonMaterial.current.opacity = stageOpacity(progress, 0.67, 0.3);
    if (pointsMaterial.current) pointsMaterial.current.opacity = THREE.MathUtils.smoothstep(progress, 0.66, 0.94) * 0.82;
  });

  const materialProps = {
    color: "#D4AF37",
    emissive: "#5f4612",
    metalness: 0.92,
    roughness: 0.2,
    clearcoat: 1,
    clearcoatRoughness: 0.16,
    transparent: true,
    depthWrite: false,
  } as const;

  return (
    <group ref={group} scale={0.92}>
      <mesh>
        <sphereGeometry args={[1.12, 56, 56]} />
        <meshPhysicalMaterial ref={sphereMaterial} {...materialProps} wireframe opacity={0.84} />
      </mesh>

      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.72, 0.92, 2.25, 48, 5, true]} />
        <meshPhysicalMaterial ref={cylinderMaterial} {...materialProps} wireframe opacity={0} />
      </mesh>

      <mesh rotation={[0.28, 0.2, 0]} scale={[1, 1, 0.72]}>
        <torusKnotGeometry args={[0.88, 0.12, 180, 18, 2, 3]} />
        <meshPhysicalMaterial ref={ribbonMaterial} {...materialProps} opacity={0} />
      </mesh>

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[networkPoints, 3]} />
        </bufferGeometry>
        <pointsMaterial ref={pointsMaterial} color="#E8D9B7" size={0.028} transparent opacity={0} sizeAttenuation depthWrite={false} />
      </points>
    </group>
  );
}

export function HeroSignature3D() {
  const reducedMotion = useReducedMotion();
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 900px) and (pointer: fine)");
    const update = () => setDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (!desktop || reducedMotion) {
    return (
      <div aria-hidden="true" className="relative h-full w-full">
        <div className="absolute inset-[18%] rounded-full border border-gold/24 shadow-[0_0_4rem_rgba(212,175,55,0.14)]" />
        <div className="absolute inset-[31%] rotate-45 border border-champagne/14" />
      </div>
    );
  }

  return (
    <Canvas
      aria-hidden="true"
      camera={{ position: [0, 0, 4.6], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.42} />
      <pointLight position={[2.5, 2.2, 3]} color="#F1DEAD" intensity={18} distance={8} />
      <pointLight position={[-2, -1.4, 2]} color="#8b641b" intensity={10} distance={7} />
      <SignatureObject />
    </Canvas>
  );
}
