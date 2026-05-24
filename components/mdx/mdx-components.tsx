"use client";

import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";

function CaseImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="my-14 overflow-hidden bg-mist">
      <Image src={src} alt={alt} width={1600} height={1000} className="w-full object-cover grayscale" />
    </figure>
  );
}

function StatGrid({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="my-12 grid border-y border-line md:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="border-line py-8 md:border-r md:px-6 last:md:border-r-0">
          <p className="font-display text-5xl font-extrabold text-ink">{item.value}</p>
          <p className="mt-2 text-sm text-graphite">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-16 max-w-4xl border-l border-ink pl-6 font-display text-4xl font-light leading-tight text-ink md:text-6xl">
      {children}
    </blockquote>
  );
}

function ImageGrid({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="my-14 grid gap-4 md:grid-cols-2">
      {images.map((image) => (
        <div key={image.src} className="relative aspect-[4/3] overflow-hidden bg-mist">
          <Image src={image.src} alt={image.alt} fill className="object-cover grayscale" sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
      ))}
    </div>
  );
}

function BeforeAfter({
  before,
  after,
  beforeAlt,
  afterAlt
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  return (
    <div className="my-14 grid gap-4 md:grid-cols-2">
      <figure>
        <div className="relative aspect-[4/3] overflow-hidden bg-mist">
          <Image src={before} alt={beforeAlt} fill className="object-cover grayscale" sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
        <figcaption className="mt-3 text-xs uppercase tracking-caps text-graphite">Before</figcaption>
      </figure>
      <figure>
        <div className="relative aspect-[4/3] overflow-hidden bg-mist">
          <Image src={after} alt={afterAlt} fill className="object-cover grayscale" sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
        <figcaption className="mt-3 text-xs uppercase tracking-caps text-graphite">After</figcaption>
      </figure>
    </div>
  );
}

function VideoEmbed({ title, src }: { title: string; src: string }) {
  return (
    <div className="my-14 aspect-video overflow-hidden bg-ink">
      <iframe
        title={title}
        src={src}
        className="h-full w-full"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

const components = {
  CaseImage,
  StatGrid,
  Quote,
  ImageGrid,
  BeforeAfter,
  VideoEmbed
};

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
