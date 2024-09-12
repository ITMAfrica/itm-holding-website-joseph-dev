/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { propsPage } from '@/types';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import en from '@/public/icons/lang/en.png';
import fr from '@/public/icons/lang/fr.png';

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
      {/* <div className="w-fit flex items-center font-bold overflow-hidden bg-gray_itm_bg/40 border-2 border-gray_itm_bg/40 ">
        {currentPage?.map((item, i: number) => (
          <Link
            key={i}
            href={item.href}
            className={`w-fit flex items-center align-middle p-1 ${
              !splitHref(item?.href) ? 'bg-gray_itm_bg/40' : 'bg-white'
            }`}
          >
            <Image
              src={images[i]}
              height={12 * 0.6}
              width={16 * 0.6}
              className="h-fit w-fit md:block hidden"
              alt="drapeau"
            />
            <Image
              src={images[i]}
              height={12 * 0.2}
              width={16 * 0.2}
              className="h-fit w-fit md:hidden block"
              alt="drapeau"
            />
            <span className="text-blue_itm_title_blue md:text-sm text-xs pt-0.5 align-middle uppercase mr-1">
              {item.name}
            </span>
          </Link>
        ))}
      </div> */}
      <div>
        <Image
          src={images[1]}
          height={12 * 0.2}
          width={16 * 0.2}
          className="h-fit w-fit md:hidden block"
          alt="drapeau"
        />
        <span className="md:text-sm text-xs pt-0.5 align-middle uppercase mr-1 font-bold">
          Français
        </span>
      </div>
    </>
  );
}
