import Image from 'next/image';
import ImageError from '@/public/pages/error.png';

export default function PageNotFound404() {
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
        <h1 className="text-4xl font-bold text-center">404 - Page Not Found</h1>
        <p className="py-1 font-sans italic text-lg text-center">
          Oops! La page que vous recherchez n'existe pas.
        </p>
      </div>
    </div>
  );
}
