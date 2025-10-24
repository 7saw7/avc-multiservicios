import Link from "next/link";


export default function Contacto(){
return (
<section id="contacto" className="container py-12">
<div className="grid md:grid-cols-[1.2fr_.8fr] gap-4">
<div>
<h2 className="text-2xl font-bold">Contacto</h2>
<p><strong>Representante:</strong> Vilma Mera Mera</p>
<p><strong>Teléfonos:</strong> <a href="tel:+51956087558">956 087 558</a> · <a href="tel:+51965046075">965 046 075</a></p>
<p><strong>Email:</strong> <a href="mailto:125contratista@yahoo.es">125contratista@yahoo.es</a></p>
<small className="muted">*Sujeto a stock y horario.</small>
</div>
<div className="card glass">
<h3 className="font-bold mb-1">Atención por WhatsApp</h3>
<p>Resolvemos dudas y confirmamos disponibilidad.</p>
<Link className="btn btn-whatsapp mt-2 inline-block" href="https://wa.me/51965046075?text=Hola%20AVC%20Multiservicios" target="_blank" rel="noopener">Escribir por WhatsApp</Link>
</div>
</div>
</section>
);
}