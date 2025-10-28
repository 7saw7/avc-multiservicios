"use client";
import { useEffect, useState } from "react";

export default function GhostRunner({ show = true }: { show?: boolean }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted || !show) return null;

  return (
    <div
      aria-hidden
      className="force-ghost pointer-events-none absolute inset-x-0 z-[60] overflow-hidden"
      style={{ top: 6, height: 56 }}
    >
      <div style={{ width: "100vw" }}>
        {/* wrapper horizontal */}
        <div className="ghost-run">
          {/* wrapper vertical */}
          <div className="ghost-float">
            <svg width="44" height="44" viewBox="0 0 64 64" className="halloween-ghost">
              <defs>
                <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%"  stopOpacity="0.9" stopColor="#ffffff"/>
                  <stop offset="100%" stopOpacity="0.75" stopColor="#f8fafc"/>
                </linearGradient>
              </defs>
              <path d="M32 6c-10.5 0-18 7.6-18 18v16c0 2 .7 3.6 2.1 4.6 1.7 1.3 3.8 1.2 5.8-.2 1.7-1.2 3.8-1.2 5.5 0 2 1.4 4.1 1.4 6.1 0 1.7-1.2 3.8-1.2 5.5 0 2 1.4 4.1 1.5 5.8.2 1.4-1 2.1-2.6 2.1-4.6V24C50 13.6 42.5 6 32 6z" fill="url(#g)" />
              <circle cx="25" cy="26" r="3.2" fill="#0d1b2a" opacity=".55"/>
              <circle cx="39" cy="26" r="3.2" fill="#0d1b2a" opacity=".55"/>
              <path d="M26 36c1.8 2.2 4 3.3 6 3.3s4.2-1.1 6-3.3" stroke="#0d1b2a" strokeWidth="2" strokeLinecap="round" opacity=".45" fill="none"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
