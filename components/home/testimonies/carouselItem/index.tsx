import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { BiSolidQuoteAltRight } from 'react-icons/bi';

export default function TestimonyItem({ item }: any) {
  return (
    <article className="w-[350px] h-[400px]">
      <div className="h-full relative  mx-3  ">
        <div className="border p-6 rounded-xl shadow-lg mt-16">
          <div className="absolute -top-14 left-28 flex justify-center">
            <div className="w-24 h-24 shadow-lg rounded-full bg-gray-300"></div>
          </div>
          <main className="py-6">
            <span className="text-gray-300 text-3xl">
              <BiSolidQuoteAltLeft />
            </span>
            <p className="text-sm py-4 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              debitis iure id deleniti molestias reprehenderit voluptas cumque
              fugiat.
            </p>
            <span className="flex w-full justify-end text-gray-300 text-3xl">
              <BiSolidQuoteAltRight />
            </span>
            <h3 className="text-center font-bold text-blue_itm_aqua_marine mt-2">
              Amos BAFUNA
            </h3>
            <h6 className="text-center">Web developer</h6>
          </main>
        </div>
      </div>
    </article>
  );
}
