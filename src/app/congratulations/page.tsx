import Script from "next/script";
import style from "./page.module.css";
import Head from "next/head";
export default function Congratulations() {
  return (
    <div className={style.main}>
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
