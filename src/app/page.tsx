import Image from "next/image";
import style from "./page.module.css";
export default function Home() {
  return (
    <div className={style.main}>
      <div className="2xl:max-w-[1532px] max-w-7xl m-auto flex justify-end items-end z-0 absolute w-full h-full top-0 left-1/2 transform -translate-x-1/2">
        <img
          src="/images/doniyor.png"
          alt="Doniyor Abduganiyev"
          className="max-w-full h-auto object-contain w-[60%] md:block hidden"
        />
      </div>
      <div className="max-w-[1132px] mx-auto grid lg:grid-cols-12 lg:gap-x-6 xs:gap-y-[54px] gap-y-2 relative z-10 2xl:content-between h-full lg:px-0 px-4">
        <div className="flex items-center sm:justify-between justify-center flex-wrap gap-4 lg:col-span-7">
          <h3>3 kunlik bepul darslar</h3>
          <div className={style.starting_date}>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span>10-11-12 iyul</span> <span>|</span> <span>Online</span>
          </div>
        </div>
        <div className="flex flex-col md:items-start items-center sm:text-start text-center xs:gap-10 gap-2 md:col-span-12">
          <div className="flex flex-col xs:gap-7 gap-2 md:max-w-[600px]">
            <div className="flex flex-col gap-[14px]">
              <p className="xs:block hidden text-lg text-opacity-80 text-white uppercase font-medium">
                Doniyor Abduganiyev
              </p>
              <h1 className="xs:text-[42px] text-[32px] font-bold leading-[120%] tracking-[1.68px] text-white uppercase">
                Telefon orqali <br /> 1000$ daromad topish
              </h1>
            </div>
            <div className="relative">
              <img
                src="/images/doniyor.png"
                alt="Doniyor Abduganiyev"
                className="max-w-full h-auto object-contain md:hidden block"
              />
              <a
                className={`md:hidden block ` + style.button}
                role="button"
                href="#!"
              >
                Ro‘yxatdan o‘tish
              </a>
            </div>
            <div className="flex flex-col gap-5 md:max-w-lg max-w-full">
              <h4 className="text-lg text-white uppercase font-semibold">
                Bepul darslarda:
              </h4>
              <ul className="grid md:grid-cols-2 gap-y-[19px] md:gap-x-3 text-white">
                <li className="!text-start md:col-span-2 flex items-center gap-3 font-medium">
                  <i className={style.indicator} /> Yuqori daromad qiluvchi
                  mobilografiya kasbi haqida
                </li>
                <li className="!text-start flex items-center gap-3 font-medium">
                  <i className={style.indicator} /> Yangi sohani boshlashda
                  qo'rquvingizni yengish
                </li>
                <li className="!text-start flex items-center gap-3 font-medium">
                  <i className={style.indicator} /> Mijoz topish va u bilan
                  kelishuvga erishish
                </li>
                <li className="!text-start flex items-center gap-3 font-medium">
                  <i className={style.indicator} /> Qisqa vaqtda oyiga 1000$
                  daromadga chiqish
                </li>
                <li className="!text-start flex items-center gap-3 font-medium">
                  <i className={style.indicator} /> Erkin grafikda masofadan
                  ishlash
                </li>
                <li className="!text-start flex items-center gap-3 font-medium">
                  <i className={style.indicator} /> Videolar orqali mashxurlikka
                  erishish
                </li>
                <li className="!text-start flex items-center gap-3 font-medium">
                  <i className={style.indicator} /> Mobilografiya sohasida eng
                  zo‘ri bo'lish sirlari haqida gaplashamiz
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <a
              className={`md:block hidden ` + style.button}
              role="button"
              href="#!"
            >
              Ro‘yxatdan o‘tish
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
