"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import GhostRunner from "@/components/GhostRunner";


type Item = { href: string; label: string };

const ITEMS: Item[] = [
  { href: "#disfraces", label: "Disfraces" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto",  label: "Contacto"  },
];

export default function NavbarPro() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#inicio");
  const firstFocus = useRef<HTMLButtonElement>(null);

  // sombra / glass más intenso al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // detectar sección activa
  useEffect(() => {
    const ids = ["inicio", "disfraces", "servicios", "contacto"];
    const els = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.2, 0.5, 0.8, 1] }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // cerrar al navegar
  const onNavigate = () => setOpen(false);

  // bloquear scroll del body cuando el menú esté abierto
  useEffect(() => {
    const { body } = document;
    if (!body) return;
    if (open) {
      body.style.overflow = "hidden";
      body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`; // evita “jump”
    } else {
      body.style.overflow = "";
      body.style.paddingRight = "";
    }
    return () => { body.style.overflow = ""; body.style.paddingRight = ""; };
  }, [open]);

    return (
      <>
        {/* HEADER */}
        <header
          className={[
            "relative overflow-hidden",                  // 👈 necesario para el fantasma
            "sticky top-0 z-50 transition-shadow",
            "bg-[rgba(10,11,16,.55)] backdrop-blur",
            "border-b border-transparent",
            "before:absolute before:inset-x-0 before:-bottom-px before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#3a3f62] before:to-transparent",
            scrolled ? "shadow-[0_8px_24px_rgba(0,0,0,.35)]" : "shadow-none",
          ].join(" ")}
        >
          {/* 👻 Fantasma (activar/desactivar con show) */}
          <GhostRunner show={true} />

          <div className="container mx-auto px-4">
            <div className="flex h-14 items-center justify-between">
              {/* Brand */}
            <a href="#inicio" className="flex items-center gap-2 font-semibold tracking-wide">
              <span className="text-2xl">🎓</span>
              <span className="text-base sm:text-lg">AVC Multiservicios</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {ITEMS.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  className={[
                    "px-3 py-2 text-sm text-muted hover:text-white relative group", // ← group para el subrayado
                    "transition-colors",
                  ].join(" ")}
                >
                  <span className="relative">
                    {it.label}
                    <span
                      className={[
                        "absolute -bottom-0.5 left-0 h-[2px] w-full origin-left scale-x-0",
                        active === it.href ? "scale-x-100" : "group-hover:scale-x-100",
                        "transition-transform duration-300",
                        "bg-gradient-to-r from-[#68a1ff] via-[#9b7bff] to-[#ff71b8]",
                        "rounded-full",
                      ].join(" ")}
                    />
                  </span>
                </a>
              ))}
              <Link
                href="https://wa.me/51965046075?text=Hola%20AVC%20Multiservicios%2C%20quiero%20informaci%C3%B3n"
                target="_blank"
                rel="noopener"
                className="ml-2 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300 hover:bg-emerald-400/15 hover:text-white transition-all"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                WhatsApp
              </Link>
            </nav>

            {/* Mobile toggler */}
            <button
              ref={firstFocus}
              aria-label="Abrir menú"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-base"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* DRAWER MÓVIL – fuera del header para evitar stacking raro */}
      <div
        className={[
          "md:hidden fixed inset-0 z-[80] transition", // ↑ z alto para ir sobre cualquier card/btn
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
        aria-hidden={!open}
      >
        {/* backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={[
            "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />
        {/* panel */}
        <aside
          className={[
            "absolute right-0 top-0 h-full w-[78%] max-w-[360px]",
            "bg-[rgba(12,13,18,.9)] backdrop-blur-xl border-l border-white/10",
            "transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
            "p-4 flex flex-col gap-2",
          ].join(" ")}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-semibold">
              <span className="text-2xl">🎓</span>
              <span>AVC Multiservicios</span>
            </div>
            <button
              aria-label="Cerrar"
              onClick={() => setOpen(false)}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2"
            >
              ✕
            </button>
          </div>
          <nav className="mt-2 flex flex-col">
            {ITEMS.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={onNavigate}
                className={[
                  "rounded-lg px-3 py-3 text-base",
                  active === it.href ? "bg-white/10 text-white" : "text-muted hover:bg-white/5",
                ].join(" ")}
              >
                {it.label}
              </a>
            ))}
            <Link
              href="https://wa.me/51965046075?text=Hola%20AVC%20Multiservicios%2C%20quiero%20informaci%C3%B3n"
              target="_blank"
              rel="noopener"
              onClick={onNavigate}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-500/15 px-3 py-3 text-emerald-200"
            >
              WhatsApp
            </Link>
          </nav>
          <p className="mt-auto text-xs text-white/40">
            Horario hoy: 9:00–19:00 · Entrega el mismo día en Lima*
          </p>
        </aside>
      </div>
    </>
  );
}
