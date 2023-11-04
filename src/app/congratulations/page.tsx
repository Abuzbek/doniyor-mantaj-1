import Script from "next/script";
import style from "./page.module.css";
import Head from "next/head";
export default function Congratulations() {
  return (
    <div className={style.main}>
      <Head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-E0VCR72V8Q" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-E0VCR72V8Q');
        `}
        </Script>
        <Script>
          {`
          !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1666039500550477');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1666039500550477&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>
      <div className="content max-w-2xl mx-auto flex items-center flex-col md:gap-10 gap-6 w-full">
        <img
          src="/images/congratulation.png"
          alt="Congratulations"
          className="max-w-[120px]"
        />
        <div className="flex flex-col md:gap-6 gap-4 items-center text-center">
          <h3 className="md:text-[32px] text-2xl font-medium tracking-[0.96px] uppercase">
            Tabriklaymiz!
          </h3>
          <h1 className="md:text-5xl text-[32px] font-bold tracking-[1.92px] uppercase">
            Oxirgi qadam qoldi!
          </h1>
          <p className="max-w-lg md:text-xl text-lg font-medium leading-[140%]">
            Bepul darslarda ishtirok etish uchun ushbu telegram guruhiga
            qo'shiling
          </p>
        </div>
        <div className="flex items-center">
          <a
            className={style.button}
            role="button"
            href="https://t.me/doniyorfx3kunlikdars"
            target="_blank"
          >
            <img src="/images/telegram.svg" alt="Telegram" />
            Telegram guruhga o‘tish
          </a>
        </div>
      </div>
    </div>
  );
}
