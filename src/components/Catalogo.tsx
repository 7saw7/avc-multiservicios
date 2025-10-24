import CarouselPro from "@/components/Carousel";

const fotos = [
  { src: "/assets/foto-2.png", caption: "Payasito infantil" },
  { src: "/assets/foto-3.png", caption: "Rojo gótico" },
  { src: "/assets/foto-4.png", caption: "Princesa clásica" },
];

export default function Galeria() {
  return (
    <div className="container mx-auto px-4">
      <CarouselPro images={fotos} autoPlayMs={4500} />
    </div>
  );
}
