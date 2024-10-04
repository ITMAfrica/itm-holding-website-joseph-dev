import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/logo/hr.png';
import { useEffect, useState } from 'react';
import { CODE, getCookie } from '@/helpers';
import { useParams, usePathname } from 'next/navigation';
import { entities } from '@/lib/data';

export default function CardLogo({ white = false }: any) {
  const params = useParams();
  const pathname = usePathname();
  const lang = params.lang;
  const [CURRENT_CODE, SET_CURRENT_CODE] = useState('');
  const [CURRENT_IMAGE, SET_CURRENT_IMAGE] = useState(logo);
  function getHref() {
    if (CURRENT_CODE && CURRENT_CODE != CODE) {
      return `/${lang}/${CURRENT_CODE}`;
    } else {
      return `/${lang}`;
    }
  }
  useEffect(
    function () {
      const code: string = getCookie('country', document?.cookie) || CODE;
      SET_CURRENT_CODE(code);
      const find: any = entities.find(function (item: any) {
        return item.code == code;
      });
      if (find) SET_CURRENT_IMAGE(find.logo);
    },
    [pathname]
  );
  return (
    <Link href={getHref()} className="block w-fit h-fit md:pr-5 mr-1">
      <Image
        src={CURRENT_IMAGE}
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
  );
}
