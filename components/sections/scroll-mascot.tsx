"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

type MascotTarget = {
  opacity: number;
  rotationBoost: number;
  scale: number;
  tilt: number;
  velocity: number;
  x: number;
  y: number;
};

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function sectionValue(progress: number, points: [number, number][]) {
  for (let index = 0; index < points.length - 1; index += 1) {
    const [startProgress, startValue] = points[index];
    const [endProgress, endValue] = points[index + 1];

    if (progress >= startProgress && progress <= endProgress) {
      const localProgress = (progress - startProgress) / (endProgress - startProgress);
      return lerp(startValue, endValue, gsap.parseEase("power2.inOut")(localProgress));
    }
  }

  return points[points.length - 1][1];
}

function MascotMesh({ target }: { target: React.MutableRefObject<MascotTarget> }) {
  const group = useRef<THREE.Group>(null);
  const shell = useRef<THREE.Mesh>(null);
  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#101820",
        clearcoat: 1,
        clearcoatRoughness: 0.15,
        metalness: 0.38,
        roughness: 0.28,
        sheen: 0.3,
        specularIntensity: 1
      }),
    []
  );
  const faceMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#f5f5f5",
        metalness: 0.02,
        roughness: 0.18,
        clearcoat: 0.6
      }),
    []
  );

  useFrame(({ clock }, delta) => {
    if (!group.current || !shell.current) {
      return;
    }

    const time = clock.elapsedTime;
    const scrollVelocity = Math.min(Math.abs(target.current.velocity) / 3200, 1);
    const float = Math.sin(time * (1.15 + scrollVelocity * 1.2)) * (0.055 + scrollVelocity * 0.04);

    group.current.position.x = lerp(group.current.position.x, target.current.x, 0.075);
    group.current.position.y = lerp(group.current.position.y, target.current.y + float, 0.075);
    group.current.scale.setScalar(lerp(group.current.scale.x, target.current.scale, 0.065));
    group.current.rotation.x = lerp(group.current.rotation.x, target.current.tilt + scrollVelocity * 0.08, 0.08);
    group.current.rotation.y = lerp(
      group.current.rotation.y,
      target.current.x * 0.22 + Math.sin(time * 0.42) * 0.08 + scrollVelocity * 0.12,
      0.08
    );
    group.current.rotation.z = lerp(group.current.rotation.z, -target.current.x * 0.14, 0.08);

    shell.current.rotation.y += delta * (0.16 + target.current.rotationBoost * 0.55);
  });

  return (
    <group ref={group} position={[0, -0.15, 0]} scale={0.46}>
      <mesh ref={shell} castShadow receiveShadow>
        <sphereGeometry args={[0.86, 72, 72]} />
        <primitive object={material} attach="material" />
      </mesh>

      <mesh position={[-0.32, 0.26, 0.79]} rotation={[0.08, -0.18, -0.16]} scale={[0.34, 0.14, 0.035]}>
        <sphereGeometry args={[1, 32, 16]} />
        <primitive object={faceMaterial} attach="material" />
      </mesh>
      <mesh position={[0.34, 0.26, 0.79]} rotation={[0.08, 0.18, 0.16]} scale={[0.34, 0.14, 0.035]}>
        <sphereGeometry args={[1, 32, 16]} />
        <primitive object={faceMaterial} attach="material" />
      </mesh>
      <mesh position={[0, -0.12, 0.83]} rotation={[0.02, 0, 0]} scale={[0.12, 0.48, 0.035]}>
        <sphereGeometry args={[1, 32, 24]} />
        <primitive object={faceMaterial} attach="material" />
      </mesh>
      <mesh position={[0, -0.58, 0.77]} rotation={[0.1, 0, 0]} scale={[0.22, 0.18, 0.035]}>
        <sphereGeometry args={[1, 32, 16]} />
        <primitive object={faceMaterial} attach="material" />
      </mesh>

      <mesh position={[-0.36, 0.52, 0.62]} rotation={[0.2, -0.36, -0.2]} scale={[0.42, 0.08, 0.016]}>
        <sphereGeometry args={[1, 24, 12]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.33} />
      </mesh>
    </group>
  );
}

export function ScrollMascot() {
  const target = useRef<MascotTarget>({
    opacity: 0,
    rotationBoost: 0,
    scale: 0.8,
    tilt: 0,
    velocity: 0,
    x: 0,
    y: -0.1
  });
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !wrapper.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      wrapper.current,
      { autoAlpha: 0, scale: 0.96 },
      { autoAlpha: 1, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.35 }
    );

    const trigger = ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate(self) {
        const progress = self.progress;
        const velocity = self.getVelocity();

        target.current.x = sectionValue(progress, [
          [0, 0],
          [0.18, 0.82],
          [0.42, -0.72],
          [0.68, 0.46],
          [1, 0]
        ]);
        target.current.y = sectionValue(progress, [
          [0, -0.08],
          [0.28, -0.2],
          [0.48, 0.06],
          [0.72, 0.28],
          [1, -0.04]
        ]);
        target.current.scale = sectionValue(progress, [
          [0, 0.46],
          [0.12, 0.56],
          [0.45, 0.64],
          [0.75, 0.58],
          [1, 0.44]
        ]);
        target.current.tilt = sectionValue(progress, [
          [0, 0],
          [0.24, -0.16],
          [0.48, 0.2],
          [0.78, -0.08],
          [1, 0]
        ]);
        target.current.rotationBoost = Math.min(Math.abs(velocity) / 4600, 0.9);
        target.current.velocity = velocity;

        if (wrapper.current) {
          wrapper.current.style.opacity = String(sectionValue(progress, [
            [0, 0.92],
            [0.88, 0.9],
            [1, 0.12]
          ]));
        }
      }
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div
      ref={wrapper}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 opacity-0 mix-blend-normal"
    >
      <div className="absolute left-1/2 top-1/2 h-[12rem] w-[12rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink/16 blur-3xl md:h-[18rem] md:w-[18rem]" />
      <Canvas
        shadows
        camera={{ position: [0, 0, 4.2], fov: 36 }}
        dpr={[1, 1.6]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[-3, 4, 5]} intensity={3.2} />
        <pointLight position={[3, -2, 3]} color="#8b8d8e" intensity={3.2} />
        <spotLight position={[0, 4, 4]} angle={0.45} penumbra={0.85} intensity={4.4} castShadow />
        <MascotMesh target={target} />
      </Canvas>
    </div>
  );
}
