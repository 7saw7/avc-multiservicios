import Image from "next/image";
import Link from "next/link";


export default function Hero(){
return (
<section id="inicio" className="relative overflow-hidden bg-[radial-gradient(1000px_600px_at_80%_-10%,rgba(106,210,255,.25),transparent_60%),_radial-gradient(800px_500px_at_-10%_10%,rgba(124,92,255,.35),transparent_60%),_linear-gradient(180deg,#0d0e13,#0b0c10)]">
<div className="container grid md:grid-cols-[1.1fr_.9fr] gap-8 items-center py-14">
<div>
<h1 className="mb-2 text-[clamp(26px,5vw,38px)] leading-tight font-extrabold">Disfraces y trajes que lucen increíbles</h1>
<p className="mb-4 text-muted text-[clamp(14px,2.6vw,18px)]">Alquiler y venta para colegios, empresas y eventos. Tallas para todas las edades, asesoría personalizada y reservas rápidas por WhatsApp.</p>
<div className="flex flex-wrap gap-2 mb-2">
<Link className="btn btn-primary" href="https://wa.me/51965046075?text=Hola%20AVC%20Multiservicios%2C%20quisiera%20cotizar%20un%20disfraz" target="_blank" rel="noopener">Cotizar por WhatsApp</Link>
<a className="btn btn-ghost" href="tel:+51956087558">Llámanos 956 087 558</a>
</div>
<ul className="flex gap-3 text-[#d5d7e6]">
<li className="bg-[rgba(255,255,255,.04)] border border-[#22253a] px-3 py-2 rounded-full text-sm">Entrega el mismo día*</li>
<li className="bg-[rgba(255,255,255,.04)] border border-[#22253a] px-3 py-2 rounded-full text-sm">Tallas y ajustes</li>
<li className="bg-[rgba(255,255,255,.04)] border border-[#22253a] px-3 py-2 rounded-full text-sm">Atención personalizada</li>
</ul>
</div>
<div className="glass">
<Image src="/assets/intro.png" alt="Muestrario de disfraces" width={900} height={600} className="h-[420px] w-full object-cover rounded-[14px]" />
</div>
</div>
<div className="absolute inset-0 bg-[radial-gradient(800px_200px_at_50%_100%,rgba(124,92,255,.2),transparent_60%)]" />
</section>
);
}