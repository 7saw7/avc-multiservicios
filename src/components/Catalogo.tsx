import CarouselPro from "@/components/Carousel";

const fotos = [
  { src: "/assets/foto-n1.png", caption: "Payasito infantil" },
  { src: "/assets/foto-n2.png", caption: "Payasito infantil" },
  { src: "/assets/foto-n3.png", caption: "Payasito infantil" },
  { src: "/assets/foto-n4.png", caption: "Payasito infantil" },
  { src: "/assets/foto-n5.png", caption: "Payasito infantil" },
  { src: "/assets/foto-n6.png", caption: "Payasito infantil" },
  { src: "/assets/foto-n7.png", caption: "Payasito infantil" },
  { src: "/assets/foto-n8.png", caption: "Payasito infantil" },
];

export default function Galeria() {
  return (
    <div className="container mx-auto px-4">
      <CarouselPro images={fotos} autoPlayMs={3800} />
    </div>
  );
}
