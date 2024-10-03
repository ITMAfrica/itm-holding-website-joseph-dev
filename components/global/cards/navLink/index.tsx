'use client';
import { CODE, getCookie, TALENTPRO_HREF } from '@/helpers';
import { link } from '@/types';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function NavLinkCard({
  href,
  name,
  full = false,
  external,
  closeModal = () => {},
}: link) {
  const params = useParams();
  const pathname = usePathname();
  const [CURRENT_CODE, SET_CURRENT_CODE] = useState(CODE);

  useEffect(function () {
    SET_CURRENT_CODE(getCookie('country', document?.cookie) || CODE);
  }, []);

  function getHref() {
    const current = href.split('/')[2];
    if (href == TALENTPRO_HREF) {
      return href;
    } else if (CURRENT_CODE && CURRENT_CODE != CODE && current != 'undefined') {
      return `/${params.lang}/${params.country}/${current}`;
    } else {
      return href;
    }
  }
  if (full)
    return (
      <Link
        href={href}
        onClick={closeModal}
        className="block mb-2 hover:text-blue_itm_good"
      >
        {name}
      </Link>
    );
  return (
    <Link
      href={getHref()}
      className={`${
        pathname == getHref()
          ? 'text-blue_itm_good bg-gray_itm_bg/40 font-bold'
          : ''
      } block px-4 mb-3 md:mb-0 py-2 transition-all duration-1000 hover:font-bold hover:text-blue_itm_good hover:bg-gray_itm_bg/40 rounded-full text-black_itm text-left lg:text-center uppercase`}
    >
      <span className="flex items-center">
        {name}
        {external ? (
          <span className="ml-1 text-xs">
            <FaExternalLinkAlt />
          </span>
        ) : (
          ''
        )}
      </span>
    </Link>
  );
}
