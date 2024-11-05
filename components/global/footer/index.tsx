'use client';

import { getDictionary } from '@/get-dictionary';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logos/logo_rdc_blanc.png';
import { FaExternalLinkAlt } from 'react-icons/fa';
import CardCountry from '@/components/global/cards/country';
import { CODE } from '@/helpers';
import { useState } from 'react';
import NavLinkFooter from './navLink';

type linkHeader = {
  href: string;
  name: string;
  current: string;
  external: boolean;
};

export default function Footer({ params }: { params: any }) {
  const lang = params.lang;
  const dictionary = getDictionary(lang);
  const [CURRENT_CODE, SET_CURRENT_CODE] = useState(CODE);
  const data: any = dictionary?.global?.header[CURRENT_CODE]
    ? dictionary?.global?.header[CURRENT_CODE]
    : dictionary?.global?.header[CODE];
  function getHref() {
    if (CURRENT_CODE && CURRENT_CODE != CODE) {
      return `/${params.lang}/${CURRENT_CODE}`;
    } else {
      return `/${params.lang}`;
    }
  }
  return (
    <footer className="bg-black_footer text-white">
      <div className="flex md:flex-nowrap flex-wrap md:w-10/12 w-11/12 mx-auto md:py-20 py-10 border-b border-b-black">
        <section className="md:w-2/5 w-full mb-6 md:mb-0">
          <div>
            <Link href={`/${lang}`} className="block w-fit h-fit md:pr-5 mr-1">
              <Image
                src={logo.src}
                className="md:h-8 h-4 w-fit"
                height={100}
                width={100}
                alt="ITM Africa logo"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </Link>
          </div>
          <p className="text-lg py-4 md:w-10/12">
            Restez informé des dernières fonctionnalités et versions en
            rejoignant notre newsletter.
          </p>
          <nav className="flex">
            <input
              className="py-3 px-4 text-black rounded w-full mr-6"
              type="text"
              placeholder="Votre email"
            />
            <button className="py-2 px-4 border rounded hover:bg-blue_itm_aqua_marine hover:text-white hover:border-blue_itm_aqua_marine">
              S'abonner
            </button>
          </nav>
        </section>
        <section className="sm:flex justify-around md:ml-10 md:w-3/5 w-full">
          <div>
            <h4 className="text-2xl font-bold mb-4">Liens internes</h4>
            <ul className="mb-2">
              {data?.links.map((item: linkHeader, index: number) => (
                <NavLinkFooter {...item} key={index} />
              ))}
            </ul>
          </div>
          <div className="mt-8 sm:mt-0">
            <h4 className="text-2xl font-bold mb-4">Nos logiciels</h4>
            <ul className="mb-2">
              <li className="mb-3">Talent pro</li>
              <li className="mb-3">Kazi pro</li>
            </ul>
          </div>
          <div className="mt-8 sm:mt-0">
            <h4 className="text-2xl font-bold mb-4">Suivez-nous</h4>
            <ul className="mb-2">
              <li className="mb-3">Talent pro</li>
              <li className="mb-3">Kazi pro</li>
            </ul>
          </div>
        </section>
      </div>
      <section className="flex justify-between items-center md:w-10/12 w-11/12 mx-auto py-4">
        <div className="w-fit font-bold">
          {`© ${new Date().getFullYear()} ITM Africa. All rights reserved.`}
        </div>
        <div className="cursor-pointer md:mt-0 mt-2 w-full md:w-fit flex  flex-wrap items-center justify-between">
          <Link
            href={lang}
            className="w-fit md:ml-4 hover:font-bold md:mb-0 mb-2 "
          >
            Paramètre des cookies
          </Link>
          <Link
            href={lang}
            className="w-fit md:ml-4 hover:font-bold md:mb-0 mb-2 "
          >
            Politique de confidentialité
          </Link>
          <Link
            href={lang}
            className="w-fit md:ml-4 hover:font-bold md:mb-0 mb-2 "
          >
            Condition d'utilisation
          </Link>
          <div className="md:ml-4"></div>
          <CardCountry />
        </div>
      </section>
    </footer>
  );
}
