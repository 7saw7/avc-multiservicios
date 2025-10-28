"use client";

type Props = {
  color?: string;
  opacity?: number;
  size?: number;
};

export default function SpiderLayer({
  color = "var(--color-gold)",
  opacity = 0.55,
  size = 140,
}: Props) {
  const box = `${size}`;

  return (
    <div aria-hidden className="spider-layer force-anim absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Telaraña superior izquierda */}
      <svg className="web web--tl absolute top-0 left-0" width={box} height={box} viewBox="0 0 100 100">
        <defs>
          <linearGradient id="webGradTL" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={opacity} />
            <stop offset="100%" stopColor={color} stopOpacity={0.25} />
          </linearGradient>
        </defs>
        <g stroke="url(#webGradTL)" fill="none" vectorEffect="non-scaling-stroke">
          <path d="M0,0 H100 M0,0 V100" />
          <path d="M0,0 Q25,25 50,0" />
          <path d="M0,0 Q50,50 100,0" />
          <path d="M0,0 Q75,75 100,0" />
          <path d="M0,0 L35,10" />
          <path d="M0,0 L60,6" />
          <path d="M0,0 L20,35" />
        </g>
      </svg>

      {/* 🕸️ Telaraña superior derecha (nivel igualado) */}
      <svg
        className="web web--tr absolute right-[10px] top-[10px]"
        width={box}
        height={box}
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="webGradTR" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={opacity} />
            <stop offset="100%" stopColor={color} stopOpacity={0.25} />
          </linearGradient>
        </defs>
        <g stroke="url(#webGradTR)" fill="none" vectorEffect="non-scaling-stroke">
          <path d="M100,0 H0 M100,0 V100" />
          <path d="M100,0 Q75,25 50,0" />
          <path d="M100,0 Q50,50 0,0" />
          <path d="M100,0 Q25,75 0,0" />
          <path d="M100,0 L65,10" />
          <path d="M100,0 L40,6" />
          <path d="M100,0 L80,35" />
        </g>
      </svg>

      {/* Araña izquierda */}
      <div className="spider spider--l" style={{ left: "14%" }}>
        <span className="spider__thread" />
        <svg
          className="spider__body spider--outlined"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          {/* cuerpo */}
          <circle cx="12" cy="14" r="6.5" fill="#0b0c10" className="core"/>
          <circle cx="12" cy="13.5" r="6.5" fill="#1b1d29" className="core"/>
          {/* ojos */}
          <circle cx="10" cy="13" r="1" fill="#d9a441" />
          <circle cx="14" cy="13" r="1" fill="#d9a441" />
          {/* patas */}
          <g className="legs" stroke="#0b0c10" strokeWidth="1.4" strokeLinecap="round">
            <path d="M6 12 L1 10" />
            <path d="M6 15 L1 15" />
            <path d="M6 18 L1 20" />
            <path d="M18 12 L23 10" />
            <path d="M18 15 L23 15" />
            <path d="M18 18 L23 20" />
          </g>
        </svg>
      </div>

      {/* Araña derecha */}
      <div className="spider spider--r" style={{ right: "16%" }}>
        <span className="spider__thread" />
        <svg
          className="spider__body spider--outlined"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          
        >
          <circle cx="12" cy="14" r="6.5" fill="#0b0c10" className="core"/>
          <circle cx="12" cy="13.5" r="6.5" fill="#1b1d29" className="core"/>
          <circle cx="10" cy="13" r="1" fill="#d9a441" />
          <circle cx="14" cy="13" r="1" fill="#d9a441" />
          <g className="legs" stroke="#0b0c10" strokeWidth="1.4" strokeLinecap="round">
            <path d="M6 12 L1 10" />
            <path d="M6 15 L1 15" />
            <path d="M6 18 L1 20" />
            <path d="M18 12 L23 10" />
            <path d="M18 15 L23 15" />
            <path d="M18 18 L23 20" />
          </g>
        </svg>
      </div>
    </div>
  );
}
