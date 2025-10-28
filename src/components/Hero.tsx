import Image from "next/image";
import Link from "next/link";
import SpiderLayer from "@/components/SpiderLayer";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[radial-gradient(1000px_600px_at_80%_-10%,rgba(106,210,255,.25),transparent_60%),_radial-gradient(800px_500px_at_-10%_10%,rgba(124,92,255,.35),transparent_60%),_linear-gradient(180deg,#0d0e13,#0b0c10)]"
    >
      <SpiderLayer />  {/* 🕸️ capa de producción */}
      {/* 🕸️ Telarañas y arañas decorativas */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Esquina superior izquierda */}
        <svg
          className="absolute top-0 left-0 w-32 h-32 opacity-60"
          viewBox="0 0 100 100"
          fill="none"
          stroke="#f28c28"
          strokeWidth="1.2"
        >
          <path d="M0,0 L100,0 M0,0 L0,100 M0,0 Q50,50 100,0" />
        </svg>

        {/* Araña izquierda */}
        <div className="spider absolute left-[14%] top-0 w-5 h-5">
          <div className="spider-body"></div>
        </div>

        {/* Araña derecha */}
        <div className="spider absolute right-[16%] top-0 w-5 h-5">
          <div className="spider-body"></div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container grid md:grid-cols-[1.1fr_.9fr] gap-8 items-center py-14">
        <div>
          <h1 className="mb-2 text-[clamp(26px,5vw,38px)] leading-tight font-extrabold">
            Disfraces y trajes que lucen increíbles
          </h1>
          <p className="mb-4 text-muted text-[clamp(14px,2.6vw,18px)]">
            Alquiler y venta para colegios, empresas y eventos. Tallas para todas las
            edades, asesoría personalizada y reservas rápidas por WhatsApp.
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            <Link
              className="btn btn-primary"
              href="https://wa.me/51965046075?text=Hola%20AVC%20Multiservicios%2C%20quisiera%20cotizar%20un%20disfraz"
              target="_blank"
              rel="noopener"
            >
              Cotizar por WhatsApp
            </Link>
            <a className="btn btn-ghost" href="tel:+51956087558">
              Llámanos 956 087 558
            </a>
          </div>
          <ul className="flex gap-3 text-[#d5d7e6]">
            <li className="bg-[rgba(255,255,255,.04)] border border-[#22253a] px-3 py-2 rounded-full text-sm">
              Entrega el mismo día*
            </li>
            <li className="bg-[rgba(255,255,255,.04)] border border-[#22253a] px-3 py-2 rounded-full text-sm">
              Tallas y ajustes
            </li>
            <li className="bg-[rgba(255,255,255,.04)] border border-[#22253a] px-3 py-2 rounded-full text-sm">
              Atención personalizada
            </li>
          </ul>
        </div>

        <div className="glass">
          <Image
            src="/assets/logo.png"
            alt="Muestrario de disfraces"
            width={900}
            height={600}
            className="h-[420px] w-full object-cover rounded-[14px]"
          />
        </div>
      </div>

      {/* Fondo inferior tenue */}
      <div className="absolute inset-0 bg-[radial-gradient(800px_200px_at_50%_100%,rgba(124,92,255,.2),transparent_60%)]" />
    </section>
  );
}
