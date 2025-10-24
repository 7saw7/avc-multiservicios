import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Catalogo from "@/components/Catalogo";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import FabWhatsapp from "@/components/FabWhatsapp";


export default function Page() {
return (
<>
<Navbar />
<main>
<Hero />
<Catalogo />
<Features />
<CTA />
<Contacto />
</main>
<Footer />
<FabWhatsapp />
</>
);
}