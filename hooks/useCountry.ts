'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { CODE, getCookie } from '@/helpers';

export default function useCountry() {
  const params = useParams<{ lang: string; country: string }>();

  const lang: string = params.lang;
  const [CURRENT_CODE, SET_CURRENT_CODE] = useState(CODE);

  useEffect(
    function () {
      SET_CURRENT_CODE(getCookie('country', document?.cookie) || CODE);
    },
    [lang]
  );

  return { CURRENT_CODE, lang };
}
