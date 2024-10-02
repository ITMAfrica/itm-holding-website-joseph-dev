'use client';
import { useParams } from 'next/navigation';
import bg from '@/public/assets/bg/bg.country.png';
import Image from 'next/image';
import Link from 'next/link';
import { CODE, getCookie, setCookie } from '@/helpers';
import { useEffect, useState } from 'react';

export default function CardCountryChoice(props: any) {
  const params: any = useParams();
  const lang: string = params.lang;
  const [CURRENT_CODE, SET_CURRENT_CODE] = useState('');
  useEffect(() => {
    SET_CURRENT_CODE(getCookie('country', document?.cookie) || CODE);
  }, []);
  return (
    <Link
      href={props.href}
      onClick={function (e: any) {
        setCookie('country', props.code);
        props.closeModal();
        return e;
      }}
      title={props[lang]}
      className="lg:w-[200px] text-black w-[48%] group block h-[100px] mb-5 relative overflow-hidden rounded-2xl shadow-2xl"
    >
      <div className="w-full h-full shadow-2xl absolute bottom-0 z-10 right-0 p-4">
        <h3
          className={`group-hover:font-bold lg:text-sm text-xs w-1/2 group-hover:text-blue_itm_aqua_marine ${
            props.code == CURRENT_CODE
              ? 'text-blue_itm_aqua_marine font-bold'
              : 'font-medium '
          }`}
        >
          {props[lang]}
        </h3>
        <div className="w-fit absolute bottom-4 right-4">
          <div className="relative w-[65px] h-[45px] rounded-lg overflow-hidden">
            <Image src={props.flag} alt={`Flag ${props[lang]}`} fill />
          </div>
        </div>
      </div>
      <Image src={bg} alt="Bg" fill />
    </Link>
  );
}
