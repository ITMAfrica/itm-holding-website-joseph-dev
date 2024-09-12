'use client';

import { link } from '@/types';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function NavLinkCard({ href, name, current }: link) {
  const params = useParams();
  return (
    <Link
      href={href}
      className={`${
        params.page == current ? 'text-blue_itm_good bg-gray_itm_bg/40' : ''
      } block px-4 mb-3 md:mb-0 py-2 transition-all duration-1000 hover:text-blue_itm_good hover:bg-gray_itm_bg/40 rounded-full text-black_itm text-left lg:text-center uppercase font-bold`}
    >
      {name}
    </Link>
  );
}
