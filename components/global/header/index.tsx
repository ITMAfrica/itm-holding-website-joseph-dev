/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Image from 'next/image';
import { getDictionary } from '@/get-dictionary';
import { dictionary, propsPage } from '@/types';
import logo from '@/public/logos/logo_rdc.png';
import NavLinkCard from '../navLinkCard';
import CardLang from '@/components/global/cards/lang';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdOutlineMenu, MdOutlineMenuOpen } from 'react-icons/md';
import { CODE, getCookie } from '@/helpers';
import CardCountry from '@/components/global/cards/country';

type linkHeader = {
  href: string;
  name: string;
  current: string;
  external: boolean;
};

export default function HomeHeader({ params }: propsPage) {
  const lang: string = params.lang;
  const dictionary: dictionary = getDictionary(lang);
  const [CURRENT_CODE, SET_CURRENT_CODE] = useState('')
  const data: any = dictionary?.global?.header[CURRENT_CODE] ? dictionary?.global?.header[CURRENT_CODE] : dictionary?.global?.header[CODE]

  const [openNavigation, setOpenNavigation] = useState(false);

  useEffect(function () {
    SET_CURRENT_CODE(getCookie("country", document?.cookie))
  }, [])
  const handleNavigation = () => {
    setOpenNavigation((state: any) => !state);
  };

  return (
    <header className="sticky z-50 top-0 w-full h-fit py-3 md:py-4 flex justify-center bg-white shadow-headerShadow">
      <div className="md:w-10/12 w-11/12 h-fit flex items-center justify-between ">
        <div className="w-fit flex items-center">
          <div className="flex items-center">
            <div
              onClick={handleNavigation}
              className="w-fit lg:hidden mr-1 text-2xl p-1 cursor-pointer pl-0 rounded-md hover:pl-1 hover:bg-blue_itm_primary/10"
            >
              <MdOutlineMenu />
            </div>
            <Link href={`/${lang}`} className="block w-fit h-fit md:pr-5 mr-1">
              <Image
                src={logo.src}
                className="md:h-8 h-4 w-fit"
                height={60}
                width={100}
                alt="ITM Africa logo"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </Link>
          </div>
        </div>
        <nav className="w-fit lg:flex hidden items-center justify-evenly">
          {data?.links.map((item: linkHeader, index: number) => (
            <NavLinkCard {...item} key={index} />
          ))}
        </nav>
        <div className="w-fit flex">
          <CardLang params={params} links={data?.links} />
          <div className="w-1"></div>
          <CardCountry />
        </div>
        {openNavigation ? (
          <div className="w-full lg:hidden flex z-50 bg-black/80 h-full fixed top-0 right-0 bottom-0 left-0">
            <div className="w-9/12 p-5 h-full bg-white rounded-e-xl flex flex-col justify-between">
              <div className="w-full">
                <div className="w-full flex items-center justify-between px-4 mb-3">
                  <div
                    onClick={handleNavigation}
                    className="w-fit lg:hidden mr-1 text-2xl p-1 cursor-pointer pl-0 rounded-md hover:pl-1 hover:bg-blue_itm_primary/10"
                  >
                    <MdOutlineMenuOpen />
                  </div>
                  <Link
                    href={`/${lang}`}
                    onClick={handleNavigation}
                    className="block w-fit h-fit md:pr-5 mr-1"
                  >
                    <Image
                      src={logo.src}
                      className="md:h-8 h-4 w-fit"
                      height={50}
                      width={194}
                      alt="ITM Africa"
                      style={{
                        maxWidth: '100%',
                        height: 'auto',
                      }}
                    />
                  </Link>
                </div>
                <nav className="w-full bg-white items-center justify-evenly">
                  {data?.links.map((item: linkHeader, index: number) => (
                    <Link
                      href={item.href}
                      key={index}
                      className="block mb-2 hover:text-blue_itm_good"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </header>
  );
}
