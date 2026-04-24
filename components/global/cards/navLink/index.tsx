'use client';
import { CODE, getCookie, TALENTPRO_HREF } from '@/helpers';
import { link } from '@/types';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

export default function NavLinkCard({
  href,
  name,
  full = false,
  external,
  arrow,
  submenus,
  closeModal = () => {},
}: link) {
  const params = useParams();
  const pathname = usePathname();
  const [CURRENT_CODE, SET_CURRENT_CODE] = useState(CODE);

  useEffect(
    function () {
      SET_CURRENT_CODE(getCookie('country', document?.cookie) || CODE);
    },
    [params.lang, params.country]
  );

  function getHref() {
    const current = href.split('/')[2];
    if (href == TALENTPRO_HREF) {
      return href;
    } else if (href == '/en' || href == '/fr') {
      return href;
    } else {
      return `/${params.lang}/${
        params.country ? params.country : CURRENT_CODE
      }/${current}`;
    }
  }
  if (full)
    return external ? (
      <Link
        href={href}
        onClick={closeModal}
        className="block mb-2 hover:text-blue_itm_good"
      >
        {name}
      </Link>
    ) : (
      <Link
        href={getHref()}
        onClick={closeModal}
        className="block mb-2 hover:text-blue_itm_good"
      >
        {name}
      </Link>
    );
  return external ? (
    <Link
      href={href}
      target="_blank"
      className={`group ${
        pathname == getHref()
          ? 'text-blue_itm_good bg-gray_itm_bg/40 font-bold'
          : ''
      } block px-4 mb-3 md:mb-0 py-2 transition-all duration-1000 hover:font-bold hover:text-blue_itm_good hover:bg-gray_itm_bg/40 rounded-full text-black_itm text-left lg:text-center uppercase`}
    >
      <span className="flex items-center">
        {name}
        <span
          className={`ml-1 text-xs ${
            pathname == getHref()
              ? 'text-blue_itm_good'
              : 'text-gray_itm'
          } group-hover:text-blue_itm_good`}
        >
          <FaExternalLinkAlt />
        </span>
      </span>
    </Link>
  ) : (
    <>
      {arrow ? (
        <span className="dropdown">
          <Link
            href={getHref()}
            className={`group ${
              pathname == getHref()
                ? 'text-blue_itm_good bg-gray_itm_bg/40 font-bold'
                : ''
            } block px-4 mb-3 md:mb-0 py-2 transition-all duration-1000 hover:font-bold hover:text-blue_itm_good hover:bg-gray_itm_bg/40 rounded-full text-black_itm text-left lg:text-center uppercase`}
          >
            {arrow ? (
              <div className="">
                <span className="flex items-center">
                  <span className="flex items-center">{name}</span>
                  <IoIosArrowDown
                    className={`ml-1 ${
                      pathname == getHref()
                        ? 'text-blue_itm_good'
                        : 'text-gray_itm'
                    } group-hover:text-blue_itm_good`}
                  />
                </span>
              </div>
            ) : (
              <span className="flex items-center">{name}</span>
            )}
          </Link>
          <div className="dropdown-content">
            {submenus.map((item: any, index: number) => {
              return <Link key={index} href={getHref() + item.link}>{item.name}</Link>;
            })}
          </div>
        </span>
      ) : (
        <Link
          href={getHref()}
          className={`${
            pathname == getHref()
              ? 'text-blue_itm_good bg-gray_itm_bg/40 font-bold'
              : ''
          } block px-4 mb-3 md:mb-0 py-2 transition-all duration-1000 hover:font-bold hover:text-blue_itm_good hover:bg-gray_itm_bg/40 rounded-full text-black_itm text-left lg:text-center uppercase`}
        >
          <span className="flex items-center">{name}</span>
        </Link>
      )}
    </>
  );
}
