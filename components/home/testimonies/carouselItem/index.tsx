import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { BiSolidQuoteAltRight } from 'react-icons/bi';

export default function TestimonyItem({ item }: any) {
  return (
    <article className="relative mx-2 w-[350px] h-[350px] border shadow-lg">
      <div className="p-6">
        {item}
        <div>Image</div>

        <div>
          <main>
            <span className="text-gray-300 text-3xl">
              <BiSolidQuoteAltLeft />
            </span>
            <p className="text-sm py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              debitis iure id deleniti molestias reprehenderit voluptas cumque
              fugiat.
            </p>
            <span className="flex w-full justify-end text-gray-300 text-3xl">
              <BiSolidQuoteAltRight />
            </span>
          </main>
          <h3 className="text-center font-bold text-blue_itm_aqua_marine">
            Amos BAFUNA
          </h3>
          <h6 className="text-center">Web developer</h6>
        </div>
      </div>
    </article>
  );
}
