import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import FacebookPixel from "./components/FacebookPixel";
const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Telefon orqali 1000$ daromad topish",
  description: "Doniyor Abduganiyev Telefon orqali 1000$ daromad topish",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        {children}
        <FacebookPixel />
      </body>
    </html>
  );
}
