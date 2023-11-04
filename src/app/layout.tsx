import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
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
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-E0VCR72V8Q" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-E0VCR72V8Q');
        `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
