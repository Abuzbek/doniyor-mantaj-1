import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";
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
      <Head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-E0VCR72V8Q" />
        <Script
          id="google-analytics"
          src="/js/ga.js"
          onLoad={() => {
            console.log("Script has loaded");
          }}
        />
        <Script src="/js/pixel.js" id="facebook-pixel" />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1666039500550477&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
