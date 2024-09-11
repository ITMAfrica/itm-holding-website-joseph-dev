/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Image from 'next/image';
import { getDictionary } from '@/get-dictionary';
import { dictionary, propsPage } from '@/types';
import logo from '@/public/logos/logo_rdc.png';
import NavLinkCard from '../navLinkCard';
import Link from 'next/link';
import React from 'react';
import { MdOutlineMenu, MdOutlineMenuOpen } from 'react-icons/md';

type linkHeader = {
  href: string;
  name: string;
  current: string;
  type: string;
};

export default function HomeHeader({ params }: propsPage) {
  const lang: string = params.lang;
  const dictionary: dictionary = getDictionary(lang);
  const data: any = dictionary?.global?.header;

  return (
    <header className="sticky z-50 top-0 w-full h-fit py-3 md:py-4 flex justify-center bg-white">
      <div className="w-11/12 h-fit flex items-center justify-between ">
        <div className="w-fit flex items-center">
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
        <nav className="w-fit lg:flex hidden items-center justify-evenly">
          {data?.links.map((item: linkHeader, index: number) => (
            <NavLinkCard {...item} key={index} />
          ))}
        </nav>
      </div>
    </header>
  );
}
