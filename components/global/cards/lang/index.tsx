/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import en from '@/public/icons/lang/en.png';
import fr from '@/public/icons/lang/fr.png';
import { GoTriangleDown } from 'react-icons/go';
import Link from 'next/link';


export default function CardLang({
  langs
}: { params?: any, links: any[], langs: any[] }) {
  const [show, setShow] = useState(false)
  const params: any = useParams();
  const lang: string = params?.lang;
  const [flag]: any = useState({ fr, en })
  const searchParams = useSearchParams();
  const [href, setHref] = useState(`/${lang}`)

  function toggleModal() {
    setShow(!show)
  }
  useEffect(function () {
    document.body.addEventListener("click", function () {
      if (show) {
        setShow(false)
      }
    })
  }, [show])
  useEffect(function () {
    console.log(searchParams.get("country"))
  }, [lang])

  return (
    <>
      <div className="flex relative justify-center items-center">
        <div onClick={toggleModal} className="w-fit  hover:bg-gray_itm_bg/40 p-2  rounded-full cursor-pointer flex items-center ">
          <Image
            src={flag[lang]}
            height={12 * 0.2}
            width={16 * 0.2}
            className="h-fit w-fit block mr-1 hover:cursor-pointer"
            alt="drapeau"
          />
          <span className="text-sm align-middle mr-1 font-bold cursor-pointer">{lang}</span>
          <GoTriangleDown className='cursor-pointer' />
        </div>
        {show && <div className="w-[150px] top-[110%] absolute rounded-lg bg-white -left-[50%] p-2 shadow-xl shadow-black/20">
          {langs.map(function (item: any) {
            return <Link href={item.href} className={`w-full p-2 ${item.key == lang && "bg-gray_itm_bg/40"} hover:bg-gray_itm_bg/40 mb-1 p-2 rounded-full flex justify-center items-center block`}>
              <Image
                src={flag[item.key]}
                height={12 * 0.2}
                width={16 * 0.2}
                className="h-fit w-fit block mr-1"
                alt="drapeau"
              />
              {item.tag}
            </Link>
          })}
        </div>}
      </div>
    </>
  );
}
