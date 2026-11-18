import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
 title: "3D Interaktiv Ta’lim",
 description: "1–11-sinflar uchun interaktiv, ko‘p tilli ta’lim platformasi",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="uz"><body>{children}</body></html>;
}
