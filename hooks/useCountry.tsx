'use client';
import React, { useEffect, useState } from 'react';
import { dictionary } from '@/types';
import { getDictionary } from '@/get-dictionary';
import { useParams } from 'next/navigation';
import { CODE } from '@/helpers';

export default function useCountry({ contentKey }: { contentKey: string }) {
  const params = useParams<{ lang: string; country: string }>();

  const lang: string = params.lang;
  const dictionary: dictionary = getDictionary(lang);
  const [CURRENT_CODE, SET_CURRENT_CODE] = useState(CODE);
  const content: any = dictionary?.global?.[contentKey][CURRENT_CODE]
    ? dictionary?.global?.[contentKey][CURRENT_CODE]
    : dictionary?.global?.[contentKey][CODE];
  console.log('Params: ', params);
}
