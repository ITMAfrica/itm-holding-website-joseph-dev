/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Image from 'next/image';
import { getDictionary } from '@/get-dictionary';
import { dictionary, propsPage } from '@/types';
import logo from '@/public/logos/logo_rdc.png';
import NavLinkCard from '@/components/global/cards/navLink';
import CardLang from '@/components/global/cards/lang';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdOutlineMenu, MdOutlineMenuOpen } from 'react-icons/md';
import { CODE, getCookie } from '@/helpers';
import CardLogo from '@/components/global/cards/logo';
import CardCountry from '../cards/country';
import { usePathname } from 'next/navigation';

type linkHeader = {
  href: string;
  name: string;
  current: string;
  external: boolean;
  arrow: boolean;
  submenus?: any;
};

export default function HomeHeader({ params }: propsPage) {
  const lang: string = params.lang;
  const dictionary: dictionary = getDictionary(lang);
  const [CURRENT_CODE, SET_CURRENT_CODE] = useState(CODE);
  const data: any = dictionary?.global?.header[CURRENT_CODE]
    ? dictionary?.global?.header[CURRENT_CODE]
    : dictionary?.global?.header[CODE];
  const root = usePathname().split('/')[2];

  const [openNavigation, setOpenNavigation] = useState(false);
  const [scrollToBottom, setScrollToBottom] = useState(0);

  const handleNavigation = () => {
    setOpenNavigation((state: any) => !state);
  };
  function getHref() {
    if (CURRENT_CODE && CURRENT_CODE != CODE) {
      return `/${params.lang}/${CURRENT_CODE}`;
    } else {
      return `/${params.lang}`;
    }
  }
  useEffect(
    function () {
      SET_CURRENT_CODE(getCookie('country', document?.cookie) || CODE);
    },
    [lang]
  );

  //Header animations
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollToBottom(scrollPosition);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky z-50 top-0 w-full h-fit ${
        scrollToBottom >= 5 ? 'py-1' : 'md:py-4 py-3'
      }  flex justify-center bg-white shadow-headerShadow transition-all duration-500 ease-linear`}
    >
      <div className="md:w-[85%] w-11/12 h-fit flex items-center justify-between ">
        <div className="w-fit flex items-center">
          <div className="flex items-center">
            <div
              onClick={handleNavigation}
              className="w-fit lg:hidden mr-1 text-2xl p-1 cursor-pointer pl-0 rounded-md hover:pl-1 hover:bg-blue_itm_primary/10"
            >
              <MdOutlineMenu />
            </div>
            <CardLogo />
          </div>
        </div>
        {root != undefined ? (
          <nav className="w-fit lg:flex hidden items-center justify-evenly">
            {data?.links.map((item: linkHeader, index: number) => (
              <NavLinkCard {...item} key={index} />
            ))}
          </nav>
        ) : (
          ''
        )}
        <div className="w-fit flex">
          <CardLang links={data?.links} langs={data?.langs} />
          {root == undefined ? '' : <CardCountry />}
        </div>
        {openNavigation ? (
          <div className="w-full lg:hidden flex z-50 bg-black/80 h-full fixed top-0 right-0 bottom-0 left-0">
            <div className="w-10/12 p-5 h-full bg-white rounded-e-xl flex flex-col justify-between">
              <div className="w-full">
                <div className="w-full flex items-center justify-between pr-4 mb-3">
                  <div
                    onClick={handleNavigation}
                    className="w-fit lg:hidden mr-1 text-2xl p-1 cursor-pointer pl-0 rounded-md hover:pl-1 hover:bg-blue_itm_primary/10"
                  >
                    <MdOutlineMenuOpen />
                  </div>
                  <Link
                    onClick={handleNavigation}
                    href={getHref()}
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
                    <NavLinkCard
                      {...item}
                      closeModal={handleNavigation}
                      full
                      key={index}
                    />
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
