import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Telefon orqali 1000$ daromad topish",
  description: "Doniyor Abduganiyev Telefon orqali 1000$ daromad topish",
};

export const measurementId = "G-70Z5SVCHSP";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>
        {/* <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${measurementId}', {
                      page_path: window.location.pathname,
                      });
                    `,
          }}
        /> */}
        <Script strategy="afterInteractive" id="facebook-pixel">
          {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1226357271369927');
            fbq('track', 'PageView');
              `}
        </Script>
        <noscript dangerouslySetInnerHTML={{__html: `<img
            height="1"
            width="1"
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=1226357271369927&ev=PageView&noscript=1"
          />`}} />
        {children}
      </body>
    </html>
  );
}
