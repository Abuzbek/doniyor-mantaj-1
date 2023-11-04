"use client";
import {
  FormEvent,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import Modal, { IModalMethods } from "./components/Modal";
import style from "./page.module.css";
import InputMask from "react-input-mask";
import { writeUserData } from "./database";
import { useRouter } from "next/navigation";
import Script from "next/script";
import Head from "next/head";
function useRegex(input: string) {
  let regex = /\+\d{3} \(\d{2}\) \d{3}-\d{2}-\d{2}/i;
  return regex.test(input);
}

export default function Home() {
  const modalRef = useRef<IModalMethods>();
  const [data, setData] = useState({ name: "", phone: "998" });
  const [error, setError] = useState({ name: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onChangeInputMask = (value: string) => {
    if (!value.includes("998")) {
      setData((_data) => ({ ..._data, phone: "998" }));
    } else {
      setData((_data) => ({ ..._data, phone: value }));
    }
  };
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.phone && data.name) {
      if (useRegex(data.phone) && data.name.length > 3) {
        setLoading(true);
        setError((_error) => ({
          name: "",
          phone: "",
        }));
        var reg = /\D/g;
        await writeUserData({
          ...data,
          phone: `+${data.phone.replace(reg, "")}`,
        });
        router.push("/congratulations");
        setLoading(false);
      } else {
        if (!useRegex(data.phone)) {
          setError((_error) => ({
            ...error,
            phone: "Telefon raqamingizni to'liq kiriting",
          }));
        } else {
          setError((_error) => ({
            ...error,
            name: "Ismingizni to'liq kiriting",
          }));
        }
      }
    } else {
      setError({
        name: "Ismingizni kiriting",
        phone: "Telefon raqamingizni kiriting",
      });
    }
  };
  // useEffect(() => {
  //   modalRef.current?.openModal();
  // }, []);
  return (
    <div className={style.main}>
      
      <div className="2xl:max-w-[1532px] max-w-7xl m-auto flex justify-end items-end z-0 absolute w-full h-full top-0 left-1/2 transform -translate-x-1/2">
        <img
          src="/images/doniyor.png"
          alt="Doniyor Abduganiyev"
          className="max-w-full h-auto object-contain w-[60%] md:block hidden relative z-10"
        />
      </div>
      <div className="max-w-[1132px] mx-auto grid lg:grid-cols-12 lg:gap-x-6 sm:gap-y-[54px] xs:gap-y-5 gap-y-4 relative z-10 2xl:content-between h-full lg:px-0 px-4">
        <div className="flex items-center sm:justify-between justify-center flex-wrap xs:text-start text-center gap-4 lg:col-span-7">
          <h3>3 kunlik bepul darslar</h3>
          <div className={style.starting_date}>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span>10-11-12 Noyabr</span> <span>|</span> <span>Online</span>
          </div>
        </div>
        <div className="flex flex-col md:items-start items-center sm:text-start text-center xs:gap-10 gap-4 md:col-span-12">
          <div className="flex flex-col xs:gap-7 gap-4 md:max-w-[600px]">
            <div className="flex flex-col gap-[14px]">
              <p className="xs:block hidden text-lg text-opacity-80 text-white uppercase font-medium">
                Doniyor Abduganiyev
              </p>
              <h1 className="xs:text-[42px] text-[32px] font-bold leading-[120%] tracking-[1.68px] text-white uppercase">
                Telefon orqali <br /> 1000$ daromad topish
              </h1>
            </div>
            <div className="relative md:hidden block">
              <img
                src="/images/doniyor.png"
                alt="Doniyor Abduganiyev"
                className="max-w-full h-auto w-[90%] mx-auto object-contain md:hidden block"
              />
              <button
                onClick={() => modalRef.current?.openModal()}
                className={`md:hidden block ` + style.button}
                role="button"
              >
                Ro‘yxatdan o‘tish
              </button>
            </div>
            <div className="flex flex-col xs:gap-5 gap-4 md:max-w-lg max-w-full">
              <h4 className="text-lg text-white uppercase font-semibold">
                Bepul darslarda:
              </h4>
              <ul className="grid md:grid-cols-2 xs:gap-y-[19px] gap-y-4 md:gap-x-3 text-white">
                <li className="!text-start md:col-span-2 flex items-center gap-3 font-medium xs:text-base text-sm">
                  <i className={style.indicator} /> Yuqori daromad qiluvchi
                  mobilografiya kasbi haqida
                </li>
                <li className="!text-start flex items-center gap-3 font-medium xs:text-base text-sm">
                  <i className={style.indicator} /> Yangi sohani boshlashda
                  qo'rquvingizni yengish
                </li>
                <li className="!text-start flex items-center gap-3 font-medium xs:text-base text-sm">
                  <i className={style.indicator} /> Mijoz topish va u bilan
                  kelishuvga erishish
                </li>
                <li className="!text-start flex items-center gap-3 font-medium xs:text-base text-sm">
                  <i className={style.indicator} /> Qisqa vaqtda oyiga 1000$
                  daromadga chiqish
                </li>
                <li className="!text-start flex items-center gap-3 font-medium xs:text-base text-sm">
                  <i className={style.indicator} /> Erkin grafikda masofadan
                  ishlash
                </li>
                <li className="!text-start flex items-center gap-3 font-medium xs:text-base text-sm">
                  <i className={style.indicator} /> Videolar orqali mashxurlikka
                  erishish
                </li>
                <li className="!text-start flex items-center gap-3 font-medium xs:text-base text-sm">
                  <i className={style.indicator} /> Mobilografiya sohasida eng
                  zo‘ri bo'lish sirlari haqida gaplashamiz
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => modalRef.current?.openModal()}
              className={`md:block hidden ` + style.button}
              role="button"
            >
              Ro‘yxatdan o‘tish
            </button>
          </div>
        </div>
        <div></div>
      </div>
      <Modal ref={modalRef} title="Bepul darslarga ro‘xatdan o‘tish">
        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          <div className="title flex items-center justify-between">
            <h3 className="text-[#222] md:text-[32px] text-xl font-bold leading-[130%]">
              Bepul darslarga ro‘xatdan o‘tish
            </h3>
            <button className="text-3xl">&times;</button>
          </div>
          <p className="text-[#222] md:text-lg font-medium leading-[130%]">
            Online darslarda ishtirok etish uchun ism va telefon raqamingizni
            qoldiring
          </p>
          <div className="form_group grid md:grid-cols-2 gap-4">
            <div className="form_control">
              <input
                className="py-3 px-4 rounded-xl bg-[#eaeaea] text-[#232323] w-full"
                type="text"
                value={data.name}
                placeholder="Ism"
                onChange={(e) =>
                  setData((_data) => ({ ..._data, name: e.target.value }))
                }
              />
              <small className="text-red-500">{error.name}</small>
            </div>
            <div className="form_control">
              <InputMask
                className="py-3 px-4 rounded-xl bg-[#eaeaea] text-[#232323] w-full"
                mask="+999 (99) 999-99-99"
                value={data.phone}
                type="text"
                onChange={(e) => onChangeInputMask(e.target.value)}
                placeholder="+998 (__) ___-__-__"
              />
              <small className="text-red-500">{error.phone}</small>
            </div>
          </div>
          <div className="submit_button">
            <button className={style.submit_button} role="button" type="submit">
              Telegram guruhga o‘tish
            </button>
          </div>
        </form>
      </Modal>
      {loading && (
        <div className="fixed z-50 top-0 left-0 w-full h-full bg-black bg-opacity-70 text-white flex items-center justify-center backdrop-filter backdrop-blur-sm">
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin w-24 h-24"
          >
            <path
              opacity="0.2"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              fill="currentColor"
            ></path>
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z"
              fill="currentColor"
            ></path>
            <path
              d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
}
