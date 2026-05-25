"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type CanvasSequenceProps = {
  basePath: string;
  className?: string;
  extension?: string;
  frameCount: number;
  height: number;
  progress: number;
  reducedMotion?: boolean;
  width: number;
};

function frameSrc(basePath: string, index: number, extension: string) {
  return `${basePath}/frame_${String(index).padStart(4, "0")}.${extension}`;
}

export function CanvasSequence({
  basePath,
  className,
  extension = "webp",
  frameCount,
  height,
  progress,
  reducedMotion,
  width
}: CanvasSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const images = useRef<(HTMLImageElement | undefined)[]>([]);
  const raf = useRef<number>();
  const currentFrame = useRef(1);
  const [shouldLoad, setShouldLoad] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const drawFrame = useCallback((frame: number) => {
    const canvas = canvasRef.current;
    const image = images.current[frame];

    if (!canvas || !image || !image.complete) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const bounds = canvas.getBoundingClientRect();
    const targetWidth = Math.max(1, Math.floor(bounds.width * ratio));
    const targetHeight = Math.max(1, Math.floor(bounds.height * ratio));

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";

    const canvasRatio = canvas.width / canvas.height;
    const imageRatio = width / height;
    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let x = 0;
    let y = 0;

    if (imageRatio > canvasRatio) {
      drawHeight = canvas.height;
      drawWidth = drawHeight * imageRatio;
      x = (canvas.width - drawWidth) / 2;
    } else {
      drawWidth = canvas.width;
      drawHeight = drawWidth / imageRatio;
      y = (canvas.height - drawHeight) / 2;
    }

    context.drawImage(image, x, y, drawWidth, drawHeight);
  }, [height, width]);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "900px 0px" }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) {
      return;
    }

    let cancelled = false;

    async function preload() {
      const firstFrame = reducedMotion ? Math.ceil(frameCount * 0.58) : 1;
      const priority = [firstFrame, 1, Math.ceil(frameCount * 0.33), Math.ceil(frameCount * 0.66), frameCount];
      const ordered = [
        ...priority,
        ...Array.from({ length: frameCount }, (_, index) => index + 1)
      ].filter((frame, index, list) => list.indexOf(frame) === index);

      for (const frame of ordered) {
        if (cancelled || images.current[frame]) {
          continue;
        }

        const image = new Image();
        image.decoding = "async";
        image.src = frameSrc(basePath, frame, extension);
        images.current[frame] = image;

        await new Promise<void>((resolve) => {
          image.onload = () => resolve();
          image.onerror = () => resolve();
        });

        if (frame === firstFrame || frame === 1) {
          drawFrame(frame);
        }
      }
    }

    preload();

    return () => {
      cancelled = true;
    };
  }, [basePath, drawFrame, extension, frameCount, reducedMotion, shouldLoad]);

  useEffect(() => {
    if (!shouldLoad) {
      return;
    }

    const targetFrame = reducedMotion
      ? Math.ceil(frameCount * 0.58)
      : Math.min(frameCount, Math.max(1, Math.round(progress * (frameCount - 1)) + 1));

    if (targetFrame === currentFrame.current) {
      return;
    }

    currentFrame.current = targetFrame;

    if (raf.current) {
      cancelAnimationFrame(raf.current);
    }

    raf.current = requestAnimationFrame(() => drawFrame(targetFrame));

    return () => {
      if (raf.current) {
        cancelAnimationFrame(raf.current);
      }
    };
  }, [drawFrame, frameCount, progress, reducedMotion, shouldLoad]);

  useEffect(() => {
    function handleResize() {
      drawFrame(currentFrame.current);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame]);

  return (
    <div ref={wrapperRef} className={className}>
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        width={width}
        height={height}
        aria-label="Abstract visual sequence showing the Form Atelier services process"
      />
      <noscript>
        {/* Replace the generated PNG placeholders with exported WebP frames named frame_0001.webp...frame_0120.webp, then set extension to "webp" in data/services.ts. */}
      </noscript>
    </div>
  );
}
