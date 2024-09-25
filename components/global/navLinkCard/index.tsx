'use client';

import { link } from '@/types';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function NavLinkCard({ href, name, current, external }: link) {
  const params = useParams();
  return (
    <Link
      href={href}
      className={`${params.page == current ? 'text-blue_itm_good bg-gray_itm_bg/40 font-bold' : ''} block px-4 mb-3 md:mb-0 py-2 transition-all duration-1000 hover:text-blue_itm_good hover:bg-gray_itm_bg/40 rounded-full text-black_itm text-left lg:text-center uppercase`}
    >
      <span className="flex items-center">
        {name}{' '}
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
