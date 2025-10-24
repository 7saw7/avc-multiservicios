import Link from "next/link";


export default function FabWhatsapp(){
return (
<Link href="https://wa.me/51965046075?text=Hola%20AVC%20Multiservicios" target="_blank" rel="noopener" className="fixed right-4 bottom-4 rounded-full font-extrabold px-4 py-3 border shadow-[var(--tw-shadow)]" style={{
background: "linear-gradient(135deg,#25D366,#1bcf64)",
color: "#0b3e23",
borderColor: "#178a4b",
boxShadow: "0 10px 30px rgba(31,209,102,.35)",
zIndex: 80,
}}>WhatsApp</Link>
);
}