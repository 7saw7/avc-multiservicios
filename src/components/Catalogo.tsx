import CarouselPro from "@/components/Carousel";

const fotos = [
  { src: "/assets/foto-n1.png", caption: "Juego del Calamar" },
  { src: "/assets/foto-n2.png", caption: "Play boy" },
  { src: "/assets/foto-n3.1.png", caption: "Gata con botas" },
  { src: "/assets/foto-n4.png", caption: "Payasita" },
  { src: "/assets/foto-n5.png", caption: "Caperusita roja" },
  { src: "/assets/foto-n6.png", caption: "Mario Bross" },
  { src: "/assets/foto-n7.png", caption: "La monja" },
  { src: "/assets/foto-n8.png", caption: "Pirata" },
];

export default function Galeria() {
  return (
    <div className="container mx-auto px-4">
      <CarouselPro images={fotos} autoPlayMs={3800} />
    </div>
  );
}
