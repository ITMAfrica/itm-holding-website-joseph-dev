'use client';

import Image from 'next/image';
import ImageError from '@/public/pages/error.png';
import { useParams } from 'next/navigation';
import { getDictionary } from '@/get-dictionary';

export default function PageNotFound404() {
  const params = useParams();
  const lang: any = params.lang;
  const dictionary: any = getDictionary(lang);
  const content = dictionary.globalContent.pages.notFound;
  return (
    <div className="h-[80vh] flex items-center justify-center w-11/12 mx-auto">
      <div>
        <Image
          src={ImageError}
          alt="Image d'erreur"
          width={400}
          height={400}
          className="flex items-center justify-center border-red-500 "
        />
        <h1 className="text-4xl font-bold text-center">{content.title} </h1>
        <p className="py-1 font-sans italic text-lg text-center">
          {content.paragraph}
        </p>
      </div>
    </div>
  );
}
