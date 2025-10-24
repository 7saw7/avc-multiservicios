import Link from "next/link";


export default function CTA(){
return (
<section className="container py-12">
<div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl p-5 shadow-soft border border-[#2b2e45]" style={{ background: "linear-gradient(135deg, rgba(124,92,255,.15), rgba(106,210,255,.12))" }}>
<div>
<h3 className="text-xl font-bold">¿Listo para reservar?</h3>
<p className="muted">Escríbenos por WhatsApp y confirma tu talla y fecha de uso.</p>
</div>
<Link className="btn btn-primary" href="https://wa.me/51965046075?text=Hola%20AVC%20Multiservicios%2C%20quiero%20reservar%20un%20disfraz" target="_blank" rel="noopener">Reservar ahora</Link>
</div>
</section>
);
}