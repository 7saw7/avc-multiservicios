import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
title: "AVC Multiservicios | Alquiler de Disfraces y Trajes",
description: "Alquiler y venta de disfraces y trajes para eventos. Atención personalizada. Reserva por WhatsApp.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="es">
<body>{children}</body>
</html>
);
}