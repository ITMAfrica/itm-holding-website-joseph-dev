/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { propsPage } from '@/types';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import en from '@/public/icons/lang/en.png';
import fr from '@/public/icons/lang/fr.png';
import { GoTriangleDown } from 'react-icons/go';

const defaultRoutes = [
  { href: '/en', name: 'En' },
  { href: '/fr', name: 'Fr' },
];

export default function CardLang({
  params,
  links,
}: propsPage & { links: any[] }) {
  const [currentPage, setcurrentPage] = useState(defaultRoutes);
  const lang: string = params?.lang;
  const images: any[] = [en, fr];
  const paramsHooks = useParams();
  const searchParams = useSearchParams();

  const splitHref = (href: string): boolean => {
    const first: string = href.split('/')[1];
    return first == lang;
  };

  const getSearchParams = (href: string): string => {
    const urlParams: string = searchParams.toString();
    if (urlParams.length != 0) return `${href}?${urlParams}`;
    return href;
  };

  const parseUrl = (langs: any[]): any[] => {
    return langs.map((item: any) => ({
      ...item,
      href: getSearchParams(item.href),
    }));
  };

  useEffect(() => {
    if (paramsHooks?.step) {
      const current = links
        .filter(({ type }) => type == 'auth')
        .find(
          (item) =>
            item.current == `${paramsHooks.authPage1}/${paramsHooks.step}`
        );
      return setcurrentPage(parseUrl(current?.langs || defaultRoutes));
    } else if (paramsHooks?.authPage1) {
      const current = links
        .filter(({ type }) => type == 'auth')
        .find((item) => item.current == paramsHooks.authPage1);
      return setcurrentPage(parseUrl(current?.langs || defaultRoutes));
    } else if (paramsHooks?.authPage) {
      const current = links
        .filter(({ type }) => type == 'auth')
        .find((item) => item.current == paramsHooks.authPage);
      return setcurrentPage(parseUrl(current?.langs || defaultRoutes));
    } else if (paramsHooks?.page) {
      const current = links
        .filter(({ type }) => type == 'link')
        .find((item) => item.current == paramsHooks.page);
      return setcurrentPage(parseUrl(current?.langs || defaultRoutes));
    }
  }, [
    lang,
    paramsHooks?.page,
    paramsHooks?.step,
    paramsHooks?.authPage1,
    paramsHooks?.authPage,
    searchParams,
  ]);

  return (
    <>
      <div className="flex justify-center items-center">
        <Image
          src={fr}
          height={12 * 0.2}
          width={16 * 0.2}
          className="h-fit w-fit block mr-1"
          alt="drapeau"
        />
        <span className="text-sm align-middle mr-1 font-bold">Fr</span>

        <GoTriangleDown />
      </div>
    </>
  );
}
