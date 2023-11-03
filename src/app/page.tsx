import Image from "next/image";
import style from "./page.module.css";
export default function Home() {
  return (
    <div className={style.main}>
      <div className="2xl:max-w-[1400px] max-w-7xl m-auto flex justify-end items-end z-0 absolute w-full h-full top-0 left-1/2 transform -translate-x-1/2">
        <img src='/images/doniyor.png' alt="Doniyor Abduganiyev" className="max-w-full h-auto object-contain w-[60%]"/>
      </div>
      <div className="max-w-[1132px] mx-auto grid grid-cols-12 gap-6 relative z-10 content-between h-full">
        <div className="flex items-center justify-between col-span-7">
          <h3>3 kunlik bepul darslar</h3>
          <div className={style.starting_date}>
            <span>10-11-12 iyul</span> <span>|</span> <span>Online</span>
          </div>
        </div>
        <div className="flex flex-col gap-10 col-span-12">
          <div className="flex flex-col gap-7 max-w-[600px]">
            <div className="flex flex-col gap-[14px]">
              <p className="text-lg text-opacity-80 text-white uppercase font-medium">
                Doniyor Abduganiyev
              </p>
              <h1 className="text-[42px] font-bold leading-[120%] tracking-[1.68px] text-white uppercase">
                Telefon orqali <br /> 1000$ daromad topish
              </h1>
            </div>
            <div className="flex flex-col gap-5 max-w-lg">
              <h4 className="text-lg text-white uppercase font-semibold">
                Bepul darslarda:
              </h4>
              <ul className="grid grid-cols-2 gap-y-[19px] gap-x-3 text-white">
                <li className="col-span-2 flex items-center gap-3 font-medium">
                  <i className={style.indicator} /> Yuqori daromad qiluvchi
                  mobilografiya kasbi haqida
                </li>
                <li className="flex items-center gap-3 font-medium">
                  <i className={style.indicator} /> Yangi sohani boshlashda
                  qo'rquvingizni yengish
                </li>
                <li className="flex items-center gap-3 font-medium">
                  <i className={style.indicator} /> Mijoz topish va u bilan kelishuvga
                  erishish
                </li>
                <li className="flex items-center gap-3 font-medium">
                  <i className={style.indicator} /> Qisqa vaqtda oyiga 1000$ daromadga
                  chiqish
                </li>
                <li className="flex items-center gap-3 font-medium">
                  <i className={style.indicator} /> Erkin grafikda masofadan ishlash
                </li>
                <li className="flex items-center gap-3 font-medium">
                  <i className={style.indicator} /> Videolar orqali mashxurlikka
                  erishish
                </li>
                <li className="flex items-center gap-3 font-medium">
                  <i className={style.indicator} /> Mobilografiya sohasida eng zo‘ri
                  bo'lish sirlari haqida gaplashamiz
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <a className={style.button} role="button" href="#!">
              Ro‘yxatdan o‘tish
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
