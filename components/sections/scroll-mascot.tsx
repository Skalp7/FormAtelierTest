"use client";

import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

type MascotTarget = {
  opacity: number;
  rotationBoost: number;
  scale: number;
  tilt: number;
  velocity: number;
  expression: number;
  headlineInfluence: number;
  lookX: number;
  lookY: number;
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

function makeBlobShape(points: [number, number][]) {
  const shape = new THREE.Shape();

  shape.moveTo(points[0][0], points[0][1]);
  for (let index = 1; index < points.length; index += 3) {
    const first = points[index];
    const second = points[index + 1] ?? first;
    const end = points[index + 2] ?? first;
    shape.bezierCurveTo(first[0], first[1], second[0], second[1], end[0], end[1]);
  }
  shape.closePath();

  return shape;
}

function FaceShape({
  points,
  material,
  position,
  rotation,
  scale,
  meshRef
}: {
  material: THREE.Material;
  meshRef: React.RefObject<THREE.Mesh>;
  points: [number, number][];
  position: [number, number, number];
  rotation?: [number, number, number];
  scale: [number, number, number];
}) {
  const geometry = useMemo(() => new THREE.ShapeGeometry(makeBlobShape(points), 28), [points]);

  return (
    <mesh ref={meshRef} geometry={geometry} position={position} rotation={rotation} scale={scale} renderOrder={3}>
      <primitive object={material} attach="material" />
    </mesh>
  );
}

function MascotMesh({ target }: { target: React.MutableRefObject<MascotTarget> }) {
  const group = useRef<THREE.Group>(null);
  const shell = useRef<THREE.Mesh>(null);
  const facePlate = useRef<THREE.Mesh>(null);
  const leftEye = useRef<THREE.Mesh>(null);
  const rightEye = useRef<THREE.Mesh>(null);
  const nose = useRef<THREE.Mesh>(null);
  const mouth = useRef<THREE.Mesh>(null);
  const faceTexture = useLoader(THREE.TextureLoader, "/face-mask.png");
  const material = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#0d161d",
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        envMapIntensity: 1.5,
        metalness: 0.42,
        roughness: 0.2,
        sheen: 0.42,
        specularIntensity: 1.15
      }),
    []
  );
  const faceMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#f5f5f5",
        metalness: 0.02,
        roughness: 0.12,
        clearcoat: 0.72,
        clearcoatRoughness: 0.18,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -2
      }),
    []
  );
  const textureMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        map: faceTexture,
        color: "#f4f4f4",
        depthWrite: false,
        opacity: 0.18,
        transparent: true
      }),
    [faceTexture]
  );
  const eyeShape = useMemo<[number, number][]>(
    () => [
      [-0.48, 0.02],
      [-0.42, 0.2],
      [-0.16, 0.34],
      [0.18, 0.28],
      [0.44, 0.23],
      [0.57, 0.07],
      [0.5, -0.08],
      [0.33, -0.22],
      [0.02, -0.22],
      [-0.28, -0.22],
      [-0.52, -0.14],
      [-0.48, 0.02]
    ],
    []
  );
  const noseShape = useMemo<[number, number][]>(
    () => [
      [0, 0.55],
      [0.18, 0.5],
      [0.25, 0.25],
      [0.2, -0.16],
      [0.16, -0.55],
      [0.07, -0.76],
      [0, -0.78],
      [-0.07, -0.76],
      [-0.16, -0.55],
      [-0.2, -0.16],
      [-0.25, 0.25],
      [-0.18, 0.5],
      [0, 0.55]
    ],
    []
  );
  const mouthShape = useMemo<[number, number][]>(
    () => [
      [-0.3, 0.1],
      [-0.22, 0.24],
      [-0.08, 0.3],
      [0, 0.23],
      [0.08, 0.3],
      [0.22, 0.24],
      [0.3, 0.1],
      [0.3, -0.18],
      [0.18, -0.38],
      [0, -0.42],
      [-0.18, -0.38],
      [-0.3, -0.18],
      [-0.3, 0.1]
    ],
    []
  );

  useFrame(({ clock }, delta) => {
    if (!group.current || !shell.current) {
      return;
    }

    const time = clock.elapsedTime;
    const direction = target.current.velocity >= 0 ? 1 : -1;
    const scrollVelocity = Math.min(Math.abs(target.current.velocity) / 2600, 1);
    const titlePull = target.current.headlineInfluence;
    const float = Math.sin(time * (1.25 + scrollVelocity * 1.6)) * (0.035 + scrollVelocity * 0.035 + titlePull * 0.018);

    group.current.position.x = lerp(group.current.position.x, target.current.x, 0.105);
    group.current.position.y = lerp(group.current.position.y, target.current.y + float, 0.095);
    group.current.scale.setScalar(lerp(group.current.scale.x, target.current.scale * (1 + titlePull * 0.05), 0.085));
    group.current.rotation.x = lerp(group.current.rotation.x, target.current.tilt + scrollVelocity * 0.06, 0.09);
    group.current.rotation.y = lerp(
      group.current.rotation.y,
      -target.current.x * 0.16 + target.current.lookX * 0.08 + Math.sin(time * 0.42) * 0.04 + scrollVelocity * 0.1 * direction,
      0.095
    );
    group.current.rotation.z = lerp(group.current.rotation.z, -target.current.x * 0.16 + scrollVelocity * 0.05 * direction, 0.09);

    shell.current.rotation.y += delta * (0.1 + target.current.rotationBoost * 0.42);

    if (facePlate.current) {
      facePlate.current.position.x = lerp(facePlate.current.position.x, target.current.lookX * 0.018, 0.1);
      facePlate.current.position.y = lerp(facePlate.current.position.y, target.current.lookY * 0.018, 0.1);
      facePlate.current.rotation.z = lerp(facePlate.current.rotation.z, -target.current.lookX * 0.04, 0.1);
    }

    const emotion = target.current.expression;
    const eyeStretch = 1 + emotion * 0.16 + scrollVelocity * 0.1;
    const eyeSquint = 1 - emotion * 0.18 + titlePull * 0.08;
    const mouthOpen = 1 + emotion * 0.42 + scrollVelocity * 0.2;
    const faceDriftX = target.current.lookX * 0.035 + direction * scrollVelocity * 0.018;
    const faceDriftY = target.current.lookY * 0.025;

    if (leftEye.current && rightEye.current) {
      leftEye.current.position.x = lerp(leftEye.current.position.x, -0.32 + faceDriftX - emotion * 0.025, 0.12);
      rightEye.current.position.x = lerp(rightEye.current.position.x, 0.32 + faceDriftX + emotion * 0.025, 0.12);
      leftEye.current.position.y = lerp(leftEye.current.position.y, 0.28 + faceDriftY + emotion * 0.025, 0.12);
      rightEye.current.position.y = lerp(rightEye.current.position.y, 0.28 + faceDriftY + emotion * 0.025, 0.12);
      leftEye.current.scale.set(0.34 * eyeStretch, 0.16 * eyeSquint, 1);
      rightEye.current.scale.set(0.34 * eyeStretch, 0.16 * eyeSquint, 1);
      leftEye.current.rotation.z = lerp(leftEye.current.rotation.z, -0.08 - emotion * 0.12 - scrollVelocity * 0.08, 0.1);
      rightEye.current.rotation.z = lerp(rightEye.current.rotation.z, 0.08 + emotion * 0.12 + scrollVelocity * 0.08, 0.1);
    }

    if (nose.current) {
      nose.current.position.x = lerp(nose.current.position.x, faceDriftX * 0.65, 0.12);
      nose.current.position.y = lerp(nose.current.position.y, -0.11 + faceDriftY - emotion * 0.02, 0.12);
      nose.current.scale.set(0.16 + emotion * 0.012, 0.42 + scrollVelocity * 0.035, 1);
    }

    if (mouth.current) {
      mouth.current.position.x = lerp(mouth.current.position.x, faceDriftX * 0.85, 0.12);
      mouth.current.position.y = lerp(mouth.current.position.y, -0.57 + faceDriftY - emotion * 0.02, 0.12);
      mouth.current.scale.set(0.22 + emotion * 0.02, 0.2 * mouthOpen, 1);
      mouth.current.rotation.z = lerp(mouth.current.rotation.z, -target.current.lookX * 0.08, 0.1);
    }
  });

  return (
    <group ref={group} position={[1.35, -0.16, 0]} scale={0.17}>
      <mesh ref={shell} castShadow receiveShadow>
        <sphereGeometry args={[0.76, 80, 80]} />
        <primitive object={material} attach="material" />
      </mesh>

      <mesh ref={facePlate} position={[0, -0.02, 0.775]} scale={[0.84, 0.88, 1]} renderOrder={2}>
        <planeGeometry args={[1.4, 1.46, 18, 18]} />
        <primitive object={textureMaterial} attach="material" />
      </mesh>

      <FaceShape
        meshRef={leftEye}
        points={eyeShape}
        material={faceMaterial}
        position={[-0.32, 0.28, 0.79]}
        rotation={[0.02, -0.02, -0.08]}
        scale={[0.34, 0.16, 1]}
      />
      <FaceShape
        meshRef={rightEye}
        points={eyeShape}
        material={faceMaterial}
        position={[0.32, 0.28, 0.79]}
        rotation={[0.02, 0.02, 0.08]}
        scale={[0.34, 0.16, 1]}
      />
      <FaceShape
        meshRef={nose}
        points={noseShape}
        material={faceMaterial}
        position={[0, -0.11, 0.805]}
        scale={[0.16, 0.42, 1]}
      />
      <FaceShape
        meshRef={mouth}
        points={mouthShape}
        material={faceMaterial}
        position={[0, -0.57, 0.79]}
        scale={[0.22, 0.2, 1]}
      />

      <mesh position={[-0.28, 0.48, 0.56]} rotation={[0.24, -0.36, -0.2]} scale={[0.34, 0.055, 0.014]}>
        <sphereGeometry args={[1, 24, 12]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.36} />
      </mesh>
    </group>
  );
}

export function ScrollMascot() {
  const target = useRef<MascotTarget>({
    opacity: 0,
    rotationBoost: 0,
    scale: 0.2,
    tilt: 0,
    velocity: 0,
    expression: 0,
    headlineInfluence: 0,
    lookX: 0,
    lookY: 0,
    x: 1.34,
    y: -0.1
  });
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !wrapper.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const headings = Array.from(document.querySelectorAll("main h2")) as HTMLElement[];
    gsap.fromTo(
      wrapper.current,
      { autoAlpha: 0, scale: 0.98 },
      { autoAlpha: 1, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.35 }
    );

    const trigger = ScrollTrigger.create({
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate(self) {
        const progress = self.progress;
        const velocity = self.getVelocity();
        const viewportHeight = window.innerHeight || 1;
        let closestInfluence = 0;
        let closestHeadingIndex = -1;

        headings.forEach((heading, headingIndex) => {
          const rect = heading.getBoundingClientRect();
          const centerY = rect.top + rect.height / 2;
          const distance = Math.abs(centerY - viewportHeight * 0.48) / viewportHeight;
          const influence = Math.max(0, 1 - distance * 2.2);

          if (influence > closestInfluence) {
            closestInfluence = influence;
            closestHeadingIndex = headingIndex;
          }
        });
        const baseX = sectionValue(progress, [
          [0, 1.34],
          [0.16, 1.06],
          [0.36, -0.88],
          [0.58, 0.84],
          [0.78, -0.64],
          [1, 0.24]
        ]);
        const baseY = sectionValue(progress, [
          [0, -0.1],
          [0.24, -0.22],
          [0.46, -0.04],
          [0.68, 0.12],
          [0.86, -0.08],
          [1, -0.18]
        ]);
        const sectionSide = closestHeadingIndex >= 0 && closestHeadingIndex % 2 === 0 ? -1 : 1;
        const titleOrbit = Math.min(closestInfluence * 0.86, 0.86);
        const titleX = sectionSide * 1.18;
        const titleY = closestHeadingIndex % 2 === 0 ? 0.18 : -0.16;

        target.current.x = lerp(baseX, titleX, titleOrbit);
        target.current.y = lerp(baseY, titleY, titleOrbit * 0.72);
        target.current.scale = sectionValue(progress, [
          [0, 0.16],
          [0.12, 0.19],
          [0.36, 0.24],
          [0.62, 0.22],
          [0.84, 0.18],
          [1, 0.15]
        ]);
        target.current.tilt = sectionValue(progress, [
          [0, 0],
          [0.24, -0.11],
          [0.48, 0.15],
          [0.78, -0.08],
          [1, 0]
        ]);
        target.current.expression = sectionValue(progress, [
          [0, 0.1],
          [0.2, 0.58],
          [0.44, 0.22],
          [0.66, 0.72],
          [0.86, 0.34],
          [1, 0.08]
        ]);
        target.current.headlineInfluence = closestInfluence;
        target.current.lookX = (target.current.x - baseX) * 0.42;
        target.current.lookY = (target.current.y - baseY) * 0.7;
        target.current.rotationBoost = Math.min(Math.abs(velocity) / 4200, 0.78);
        target.current.velocity = velocity;

        if (wrapper.current) {
          const servicesRect = document.getElementById("services")?.getBoundingClientRect();
          const servicesPresence =
            servicesRect && servicesRect.top < window.innerHeight && servicesRect.bottom > 0 ? 1 : 0;
          const baseOpacity = sectionValue(progress, [
            [0, 0.92],
            [0.88, 0.9],
            [1, 0.12]
          ]);

          wrapper.current.style.opacity = String(baseOpacity * (1 - servicesPresence));
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
      <div className="absolute left-1/2 top-1/2 h-[7rem] w-[7rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink/12 blur-3xl md:h-[11rem] md:w-[11rem]" />
      <Canvas
        shadows
        camera={{ position: [0, 0, 4.2], fov: 34 }}
        dpr={[1, 1.6]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.68} />
        <directionalLight position={[-3, 4, 5]} intensity={3.6} />
        <pointLight position={[3, -2, 3]} color="#8b8d8e" intensity={2.4} />
        <spotLight position={[0, 4, 4]} angle={0.42} penumbra={0.86} intensity={4.8} castShadow />
        <MascotMesh target={target} />
      </Canvas>
    </div>
  );
}
