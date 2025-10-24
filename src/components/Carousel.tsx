"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  images: Array<{ src: string; alt?: string; caption?: string }>;
  autoPlayMs?: number;         // 0 para desactivar (default 4000)
  heightClass?: string;        // override de alturas (default responsive)
  showThumbs?: boolean;        // thumbnails on/off
};

export default function CarouselPro({
  images,
  autoPlayMs = 4000,
  heightClass = "h-[320px] sm:h-[420px] md:h-[560px]",
  showThumbs = true,
}: Props) {
  const [idx, setIdx] = useState(0);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const count = images.length;
  const stageRef = useRef<HTMLDivElement>(null);
  const hovering = useRef(false);
  const go = (i: number) => setIdx(((i % count) + count) % count);

  // autoplay
  useEffect(() => {
    if (!autoPlayMs) return;
    const id = setInterval(() => !hovering.current && go(idx + 1), autoPlayMs);
    return () => clearInterval(id);
  }, [idx, autoPlayMs, count]);

  // swipe
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    let startX: number | null = null;
    const ts = (e: TouchEvent) => (startX = e.touches[0].clientX);
    const te = (e: TouchEvent) => {
      if (startX == null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1));
      startX = null;
    };
    el.addEventListener("touchstart", ts, { passive: true });
    el.addEventListener("touchend", te, { passive: true });
    return () => {
      el.removeEventListener("touchstart", ts as any);
      el.removeEventListener("touchend", te as any);
    };
  }, [idx, count]);

  // teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(idx - 1);
      if (e.key === "ArrowRight") go(idx + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx]);

  const trackStyle: React.CSSProperties = {
    width: `${count * 100}%`,
    transform: `translateX(-${(idx * 100) / count}%)`,
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Galería de disfraces"
      className="relative"
    >
      <div
        className="relative bg-surface/60 border border-[#23263b] rounded-2xl p-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)] overflow-hidden"
        onMouseEnter={() => (hovering.current = true)}
        onMouseLeave={() => (hovering.current = false)}
      >
        {/* Pista */}
        <div
          ref={stageRef}
          className="flex transition-transform duration-500 ease-[cubic-bezier(.22,.61,.36,1)] rounded-xl will-change-transform"
          style={trackStyle}
          role="group"
          aria-live="polite"
        >
          {images.map((img, i) => (
            <div
              key={i}
              style={{ width: `${100 / count}%` }}
              className="shrink-0"
              aria-hidden={i !== idx}
            >
              {/* Fondo blur que rellena laterales */}
              <div className={`relative ${heightClass}`}>
                <Image
                  src={img.src}
                  alt={img.alt ?? `Disfraz ${i + 1}`}
                  fill
                  className="object-cover blur-2xl scale-110 opacity-40"
                  sizes="100vw"
                  priority={i === 0}
                  aria-hidden
                />
                {/* Imagen principal sin recorte */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {!loaded[i] && (
                    <div className="w-24 h-24 rounded-xl bg-white/5 animate-pulse" />
                  )}
                  <Image
                    src={img.src}
                    alt={img.alt ?? `Disfraz ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 1180px"
                    priority={i === 0}
                    className={`object-contain transition-opacity duration-300 ${
                      loaded[i] ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => setLoaded((s) => ({ ...s, [i]: true }))}
                  />
                </div>

                {/* Pie de foto opcional */}
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-sm text-white/90">
                    {img.caption}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Controles */}
        <button
          aria-label="Anterior"
          onClick={() => go(idx - 1)}
          className="absolute top-1/2 -translate-y-1/2 left-3 grid place-items-center w-10 h-10 rounded-full text-white text-2xl
                     bg-black/45 hover:bg-black/65 backdrop-blur-sm shadow-lg"
        >
          ‹
        </button>
        <button
          aria-label="Siguiente"
          onClick={() => go(idx + 1)}
          className="absolute top-1/2 -translate-y-1/2 right-3 grid place-items-center w-10 h-10 rounded-full text-white text-2xl
                     bg-black/45 hover:bg-black/65 backdrop-blur-sm shadow-lg"
        >
          ›
        </button>

        {/* Puntos */}
        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir a la imagen ${i + 1}`}
              onClick={() => go(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === idx ? "w-6 bg-white" : "w-2.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      {showThumbs && (
        <div className="flex gap-2 overflow-x-auto px-1 pt-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className={`border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/40 ${
                i === idx ? "border-primary" : "border-transparent"
              }`}
              aria-label={`Miniatura ${i + 1}`}
            >
              <Image
                src={img.src}
                alt={img.alt ?? `Mini ${i + 1}`}
                width={160}
                height={96}
                className="w-[110px] h-[74px] sm:w-[140px] sm:h-[90px] object-cover rounded-md opacity-90"
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
